# Day 13 — CRUD Test Cases
# API: Restful-Booker | Full Create → Read → Update → Delete Flow

> **Instructions:** Execute each step in Postman and fill in all fields.
> Use Postman environment variables to chain the requests.

---

## Environment Variables Used

| Variable | Set In | Used In |
|----------|--------|---------|
| `authToken` | POST /auth response | PUT, PATCH, DELETE Cookie header |
| `bookingId` | POST /booking response | GET, PUT, PATCH, DELETE |

---

## Step 1 — POST /auth (Get Authentication Token)

| Field | Value |
|-------|-------|
| **Method** | POST |
| **URL** | https://restful-booker.herokuapp.com/auth |
| **Body (JSON)** | `{"username":"admin","password":"password123"}` |
| **Status Code** | `[ TODO ]` |
| **Token Received** | `[ YES / NO ]` |

**Test Script Written:**
```javascript
[ TODO: Paste your Postman test script for capturing the token ]
```

**Result:** `[ Pass / Fail ]`

---

## Step 2 — POST /booking (Create)

| Field | Value |
|-------|-------|
| **Method** | POST |
| **URL** | https://restful-booker.herokuapp.com/booking |
| **Request Body** | `[ TODO: Paste your JSON body ]` |
| **Status Code** | `[ TODO ]` |
| **Booking ID Created** | `[ TODO ]` |

**Assertions Written:**
```
[ TODO: List assertions — status, schema, bookingid type, etc. ]
```

**Result:** `[ Pass / Fail ]`

---

## Step 3 — GET /booking/{{bookingId}} (Verify Create)

| Field | Value |
|-------|-------|
| **Status Code** | `[ TODO ]` |
| **firstname Matches?** | `[ TODO ]` |
| **lastname Matches?** | `[ TODO ]` |
| **totalprice Matches?** | `[ TODO ]` |

**Result:** `[ Pass / Fail ]`

---

## Step 4 — PUT /booking/{{bookingId}} (Full Update)

| Field | Value |
|-------|-------|
| **Auth Header/Cookie** | `token={{authToken}}` |
| **New firstname** | `[ TODO ]` |
| **New totalprice** | `[ TODO ]` |
| **Status Code** | `[ TODO ]` |

**Assertions Written:**
```
[ TODO ]
```

**Result:** `[ Pass / Fail ]`

---

## Step 5 — GET /booking/{{bookingId}} (Verify PUT)

| Field | Value |
|-------|-------|
| **Status Code** | `[ TODO ]` |
| **Data Updated Correctly?** | `[ TODO ]` |

**Result:** `[ Pass / Fail ]`

---

## Step 6 — PATCH /booking/{{bookingId}} (Partial Update — totalprice only)

| Field | Value |
|-------|-------|
| **Body** | `{"totalprice": 999}` |
| **Status Code** | `[ TODO ]` |
| **Other fields unchanged?** | `[ TODO ]` |

**Result:** `[ Pass / Fail ]`

---

## Step 7 — GET /booking/{{bookingId}} (Verify PATCH)

| Field | Value |
|-------|-------|
| **totalprice** | `[ TODO — should be 999 ]` |
| **firstname** | `[ TODO — should be unchanged ]` |

**Result:** `[ Pass / Fail ]`

---

## Step 8 — DELETE /booking/{{bookingId}}

| Field | Value |
|-------|-------|
| **Status Code** | `[ TODO ]` |
| **Response Body** | `[ TODO ]` |

**Result:** `[ Pass / Fail ]`

---

## Step 9 — GET /booking/{{bookingId}} (Verify Delete)

| Field | Value |
|-------|-------|
| **Status Code** | `[ TODO — expect 404 or "Not Found" ]` |
| **Response confirms deletion?** | `[ TODO ]` |

**Result:** `[ Pass / Fail ]`

---

## CRUD Flow Summary

| Step | Operation | Status Code | Pass/Fail |
|------|-----------|-------------|-----------|
| 1 | Auth | `[ TODO ]` | |
| 2 | Create | `[ TODO ]` | |
| 3 | Read (post-create) | `[ TODO ]` | |
| 4 | Full Update (PUT) | `[ TODO ]` | |
| 5 | Read (post-PUT) | `[ TODO ]` | |
| 6 | Partial Update (PATCH) | `[ TODO ]` | |
| 7 | Read (post-PATCH) | `[ TODO ]` | |
| 8 | Delete | `[ TODO ]` | |
| 9 | Read (post-delete) | `[ TODO ]` | |

## Reflection

```
[ TODO: What was the hardest part of the CRUD flow? 
Did anything surprise you about how the API handles auth or errors? ]
```
