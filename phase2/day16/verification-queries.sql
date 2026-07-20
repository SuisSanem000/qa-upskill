-- Day 16: Database State Verification Queries
-- Practice SQL for QA Engineers
-- Run at: https://sqliteonline.com/ OR DB Browser for SQLite

-- ============================================================
-- SETUP: Create Practice Tables
-- Run this first to create the local practice database
-- ============================================================

CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    totalprice INTEGER NOT NULL,
    depositpaid INTEGER NOT NULL DEFAULT 0,  -- 0=false, 1=true
    checkin TEXT NOT NULL,
    checkout TEXT NOT NULL,
    additionalneeds TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    deleted_at TEXT  -- NULL = active, timestamp = soft-deleted
);

CREATE TABLE IF NOT EXISTS auth_tokens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    token TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    expires_at TEXT
);

-- ============================================================
-- SETUP: Insert Test Data
-- ============================================================

INSERT INTO bookings (firstname, lastname, totalprice, depositpaid, checkin, checkout, additionalneeds)
VALUES
    ('Jim', 'Brown', 111, 1, '2024-01-01', '2024-01-10', 'Breakfast'),
    ('Sally', 'Rees', 250, 0, '2024-02-01', '2024-02-05', NULL),
    ('John', 'Doe', 175, 1, '2024-03-15', '2024-03-20', 'Late checkout'),
    ('Jane', 'Smith', 320, 1, '2024-04-01', '2024-04-07', NULL),
    ('Test', 'User', 50, 0, '2024-05-01', '2024-05-02', NULL);

-- ============================================================
-- SECTION A: POST /booking Verification
-- Run AFTER creating a booking via API to verify it was persisted
-- ============================================================

-- A1: Verify the newly created booking exists
-- TODO: Replace ? with the bookingid returned by the API
SELECT *
FROM bookings
WHERE id = ?;

-- A2: Verify all fields match what was sent in the POST request
-- TODO: Replace each ? with your expected values
SELECT
    CASE WHEN firstname = ? THEN 'PASS' ELSE 'FAIL' END AS firstname_check,
    CASE WHEN lastname = ? THEN 'PASS' ELSE 'FAIL' END AS lastname_check,
    CASE WHEN totalprice = ? THEN 'PASS' ELSE 'FAIL' END AS totalprice_check,
    CASE WHEN depositpaid = ? THEN 'PASS' ELSE 'FAIL' END AS depositpaid_check,
    CASE WHEN checkin = ? THEN 'PASS' ELSE 'FAIL' END AS checkin_check,
    CASE WHEN checkout = ? THEN 'PASS' ELSE 'FAIL' END AS checkout_check
FROM bookings
WHERE id = ?;

-- A3: Verify count increased by 1 after POST
-- TODO: Run before and after the POST call to compare
SELECT COUNT(*) AS total_bookings FROM bookings;

-- ============================================================
-- SECTION B: PUT /booking Verification (Full Update)
-- ============================================================

-- B1: Verify all fields were updated
SELECT *
FROM bookings
WHERE id = ?;  -- TODO: Replace with bookingId

-- B2: Verify no unintended fields changed (e.g., created_at should be same)
SELECT id, created_at
FROM bookings
WHERE id = ?;

-- ============================================================
-- SECTION C: PATCH /booking Verification (Partial Update)
-- ============================================================

-- C1: Verify ONLY totalprice changed (other fields should be unchanged)
-- Run this before the PATCH to capture baseline, then again after
SELECT id, firstname, lastname, totalprice, checkin
FROM bookings
WHERE id = ?;

-- ============================================================
-- SECTION D: DELETE /booking Verification
-- ============================================================

-- D1: Hard delete — record should not exist at all
SELECT COUNT(*) AS should_be_zero
FROM bookings
WHERE id = ?;

-- D2: Soft delete — record exists but deleted_at is set
SELECT id, deleted_at
FROM bookings
WHERE id = ?;  -- deleted_at should NOT be NULL

-- ============================================================
-- SECTION E: Data Integrity Checks (Run Anytime)
-- ============================================================

-- E1: Find bookings where checkout is before checkin (data integrity bug!)
-- TODO: Write this query yourself
-- Expected: 0 rows returned
SELECT *  -- TODO: Complete this query
FROM bookings
WHERE /* TODO */ ;

-- E2: Find bookings with a negative price
-- TODO: Write this query
-- Expected: 0 rows returned

-- E3: Count bookings by deposit status
SELECT
    CASE WHEN depositpaid = 1 THEN 'Paid' ELSE 'Not Paid' END AS deposit_status,
    COUNT(*) AS count
FROM bookings
GROUP BY depositpaid;

-- E4: Find bookings with no additional needs (NULL check)
SELECT COUNT(*) AS bookings_no_extras
FROM bookings
WHERE additionalneeds IS NULL;

-- E5: Find most recent 5 bookings
SELECT *
FROM bookings
ORDER BY created_at DESC
LIMIT 5;

-- ============================================================
-- SECTION F: TODO Queries (Write These Yourself)
-- ============================================================

-- F1: TODO — Find all bookings for a specific firstname
-- Hint: Use WHERE and LIKE

-- F2: TODO — Find bookings where checkin is in 2024

-- F3: TODO — Calculate the average totalprice of all bookings

-- F4: TODO — Find the most expensive booking
