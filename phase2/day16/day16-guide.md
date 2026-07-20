# Day 16 — SQL & Database State Verification

> **Phase:** 2 — API, Backend & Performance
> **Duration:** 1 hour
> **Tool:** DB Browser for SQLite (free) or any SQL environment
> **Deliverables:** `verification-queries.sql` + `db-test-cases.md`

---

## 🎯 Learning Objectives

- Understand why QA engineers need SQL skills
- Write SQL queries to verify API operations changed the database correctly
- Understand the relationship between API responses and database state
- Learn key SQL patterns for QA verification

---

## 📖 Concepts (15 min)

### Why Does QA Need SQL?

When you test an API, you're testing the interface. But how do you know the data was actually saved correctly to the database? You verify the **database state**.

```
Test flow:
1. POST /booking → API says "created" → ✅ API test passes
2. SELECT * FROM bookings WHERE id = ? → Database actually has the record → ✅ DB verification passes
```

Without DB verification, you might miss:
- Data not persisted (only returned in response)
- Data persisted with wrong values
- Related tables not updated
- Soft deletes vs. hard deletes
- Triggers not fired

---

### Essential SQL for QA

```sql
-- SELECT — Read data
SELECT * FROM users WHERE id = 1;
SELECT firstname, lastname, email FROM users;

-- COUNT — Verify quantity
SELECT COUNT(*) FROM bookings;
SELECT COUNT(*) FROM bookings WHERE depositpaid = 1;

-- WHERE — Filter
SELECT * FROM bookings WHERE checkin >= '2024-01-01';

-- JOIN — Combine tables
SELECT b.id, b.firstname, r.room_name
FROM bookings b
JOIN rooms r ON b.room_id = r.id;

-- ORDER BY
SELECT * FROM bookings ORDER BY checkin DESC LIMIT 5;

-- NULL checks
SELECT * FROM bookings WHERE additionalneeds IS NULL;
SELECT * FROM bookings WHERE additionalneeds IS NOT NULL;

-- LIKE — Pattern matching
SELECT * FROM users WHERE email LIKE '%@example.com';

-- GROUP BY — Aggregation
SELECT depositpaid, COUNT(*) as total
FROM bookings
GROUP BY depositpaid;

-- UPDATE — Verify changes
SELECT * FROM bookings WHERE id = 1; -- before
-- (make API call to update)
SELECT * FROM bookings WHERE id = 1; -- after

-- Subquery — Verify deletion
SELECT * FROM bookings WHERE id NOT IN (SELECT id FROM active_bookings);
```

---

### Practice Setup (SQLite)

Since we can't directly query Restful-Booker's DB, we'll:
1. Use a local SQLite database to practice SQL patterns
2. Write the queries you WOULD run against a real app
3. Simulate pre/post API call state

**Create a practice SQLite DB using DB Browser for SQLite (free download):**
https://sqlitebrowser.org/dl/

**Or use an online SQL playground:**
https://sqliteonline.com/

---

### DB State Verification Patterns

| Operation | API Call | SQL Verification |
|-----------|----------|-----------------|
| Create | POST /booking | `SELECT * FROM bookings WHERE id = {new_id}` |
| Update | PUT /booking/1 | `SELECT firstname FROM bookings WHERE id = 1` — compare to API response |
| Delete | DELETE /booking/1 | `SELECT COUNT(*) FROM bookings WHERE id = 1` — should be 0 |
| Soft delete | DELETE /booking/1 | `SELECT deleted_at FROM bookings WHERE id = 1` — should be NOT NULL |
| Auth | POST /auth | `SELECT * FROM tokens WHERE value = '{token}'` |

---

## 🛠️ Task (40 min)

**Part 1 (20 min):** Using SQLite Online or DB Browser, create a practice database and write the queries in `verification-queries.sql`.

**Part 2 (20 min):** Write DB test cases in `db-test-cases.md` — for each API operation from Day 13 (CRUD), write the SQL verification step.

---

## 🎤 Interview Prep (5 min)

### Q1: Why do QA engineers need SQL skills?
**A:** APIs validate the interface layer, but database verification validates the data layer — ensuring data was actually persisted correctly, in the right tables, with the right values. You need SQL to write end-to-end tests, verify data integrity, check that triggers and cascades work correctly, validate soft deletes, and investigate bugs where the API says success but the data is wrong.

### Q2: What is the difference between a hard delete and soft delete in database testing?
**A:** A hard delete physically removes the row from the database. SQL verification: `SELECT COUNT(*) FROM table WHERE id = X` returns 0. A soft delete marks the row as deleted (sets a `deleted_at` timestamp or `is_deleted` flag) but keeps the row in the database. SQL verification: `SELECT deleted_at FROM table WHERE id = X` returns a non-null timestamp.

### Q3: How would you verify that a POST request actually created a database record?
**A:** Note the returned ID from the POST response. Then run `SELECT * FROM bookings WHERE id = {returned_id}` and verify: the record exists (COUNT > 0), all fields match the request payload values, timestamps are set correctly (created_at, updated_at), and no data was corrupted or truncated.

### Q4: What are JOIN types and when do you use them in QA?
**A:** INNER JOIN returns rows where there's a match in BOTH tables — used to verify related records exist. LEFT JOIN returns all rows from the left table, with NULLs for unmatched rows — used to find records with missing related data. In QA: use JOINs to verify relational integrity, e.g., every booking has a valid user ID, or every order has at least one order item.

### Q5: How do you use SQL to verify data integrity?
**A:** Run queries like: CHECK NULL constraints (`WHERE field IS NULL` should return 0 rows), verify foreign key relationships (`JOIN and look for orphaned records`), check unique constraints (`GROUP BY field HAVING COUNT(*) > 1` should return 0), verify date logic (`WHERE checkout < checkin` should return 0 rows), and check value ranges (`WHERE age < 0 OR age > 120` should return 0 rows).

---

## 📁 Files in This Folder

```
phase2/day16/
├── day16-guide.md           ← This file
├── verification-queries.sql ← Your SQL verification queries
└── db-test-cases.md         ← DB-level test cases for each CRUD operation
```
