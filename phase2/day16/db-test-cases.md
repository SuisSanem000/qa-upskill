# Day 16 — Database Test Cases
# API-to-Database verification for Restful-Booker CRUD operations

> **Instructions:** For each CRUD operation, write the SQL verification step
> and describe what a PASS and FAIL look like.

---

## DBTC-001 — Verify POST /booking persists to database

| Field | Value |
|-------|-------|
| **API Operation** | POST /booking |
| **SQL Query** | `SELECT * FROM bookings WHERE id = {returned_bookingid}` |
| **Pass Condition** | Row exists with all fields matching request payload |
| **Fail Condition** | `[ TODO: When would this fail? ]` |
| **Result** | `[ TODO: After running ]` |

---

## DBTC-002 — Verify PUT /booking/:id updates all fields

| Field | Value |
|-------|-------|
| **API Operation** | PUT /booking/{id} |
| **SQL Query** | `[ TODO: Write your verification query ]` |
| **Pass Condition** | `[ TODO ]` |
| **Fail Condition** | `[ TODO ]` |
| **Result** | `[ TODO ]` |

---

## DBTC-003 — Verify PATCH /booking/:id updates only target field

| Field | Value |
|-------|-------|
| **API Operation** | PATCH /booking/{id} (totalprice only) |
| **SQL Query** | `[ TODO ]` |
| **Pass Condition** | totalprice changed, all other fields unchanged |
| **Fail Condition** | `[ TODO ]` |
| **Result** | `[ TODO ]` |

---

## DBTC-004 — Verify DELETE /booking/:id removes record

| Field | Value |
|-------|-------|
| **API Operation** | DELETE /booking/{id} |
| **SQL Query** | `[ TODO ]` |
| **Pass Condition** | `[ TODO ]` |
| **Fail Condition** | `[ TODO ]` |
| **Result** | `[ TODO ]` |

---

## DBTC-005 — Data Integrity: No checkout before checkin

| Field | Value |
|-------|-------|
| **Check Type** | Data integrity |
| **SQL Query** | `[ TODO: Write query to find bookings where checkout < checkin ]` |
| **Pass Condition** | 0 rows returned |
| **Fail Condition** | Any rows returned — indicates a bug or missing validation |
| **Result** | `[ TODO ]` |

---

## DBTC-006 — Data Integrity: No negative prices

| Field | Value |
|-------|-------|
| **Check Type** | Data integrity |
| **SQL Query** | `[ TODO ]` |
| **Pass Condition** | `[ TODO ]` |
| **Fail Condition** | `[ TODO ]` |
| **Result** | `[ TODO ]` |

---

## DBTC-007 — Your Own Check (Add One)

| Field | Value |
|-------|-------|
| **Check Type** | `[ TODO ]` |
| **SQL Query** | `[ TODO ]` |
| **Pass Condition** | `[ TODO ]` |
| **Fail Condition** | `[ TODO ]` |
| **Result** | `[ TODO ]` |

---

## Reflection

```
[ TODO: How does verifying database state change your confidence in the API test results?
What kinds of bugs would ONLY be caught by DB verification, not by API response checks? ]
```
