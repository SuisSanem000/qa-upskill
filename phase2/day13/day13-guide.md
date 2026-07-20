# Day 13 — REST CRUD Testing: POST, PUT, PATCH, DELETE

> **Phase:** 2 — API, Backend & Performance
> **Duration:** 1 hour
> **Target API:** https://restful-booker.herokuapp.com
> **Deliverables:** `crud-test-cases.md` + exported Postman collection

---

## 🎯 Learning Objectives

- Perform complete CRUD operations against a REST API
- Chain requests (use response data from one call in the next)
- Test authentication (Basic Auth + Token)
- Understand idempotency in HTTP methods

---

## 📖 Concepts (10 min)

### CRUD Mapping to HTTP

| CRUD | HTTP | Restful-Booker Endpoint | Notes |
|------|------|------------------------|-------|
| Create | POST | `/booking` | Returns bookingid |
| Read | GET | `/booking/:id` | |
| Update (full) | PUT | `/booking/:id` | Requires Auth |
| Update (partial) | PATCH | `/booking/:id` | Requires Auth |
| Delete | DELETE | `/booking/:id` | Requires Auth |

### Authentication on Restful-Booker

**Step 1 — Get a token:**
```
POST /auth
Body: { "username": "admin", "password": "password123" }
Response: { "token": "abc123..." }
```

**Step 2 — Use token in requests:**
```
Header: Cookie: token=abc123...
```

### Chaining Requests with Postman Variables

Save the `bookingid` from POST so you can use it in subsequent requests:

```javascript
// In POST /booking Tests tab:
const response = pm.response.json();
pm.environment.set("bookingId", response.bookingid);

// In GET /booking/{{bookingId}} — Postman auto-substitutes
```

---

## 🛠️ Task (45 min)

Build a complete CRUD flow in Postman:

1. `POST /auth` — Get auth token, save to environment variable
2. `POST /booking` — Create new booking, save `bookingid`
3. `GET /booking/{{bookingId}}` — Verify creation
4. `PUT /booking/{{bookingId}}` — Update all fields
5. `GET /booking/{{bookingId}}` — Verify update
6. `PATCH /booking/{{bookingId}}` — Update only `totalprice`
7. `GET /booking/{{bookingId}}` — Verify partial update
8. `DELETE /booking/{{bookingId}}` — Delete booking
9. `GET /booking/{{bookingId}}` — Verify deletion (expect 404)

Document test cases and results in `crud-test-cases.md`. Export Postman collection as `postman-day13-crud.json`.

---

## 🎤 Interview Prep (5 min)

### Q1: How do you handle authentication in API testing?
**A:** Depending on the auth type: API Keys go in headers or query params; Bearer tokens go in the Authorization header; Basic Auth encodes username:password in the Authorization header; Cookie-based auth requires capturing a token and sending it in Cookie headers. In Postman, use environment variables to store tokens from auth calls and reference them in subsequent requests.

### Q2: What is request chaining in API testing?
**A:** Using the response from one API call as input for another. Example: POST /booking returns a `bookingid`, which you then use in GET /booking/{id} to verify creation. In Postman, you capture values in the Tests script (`pm.environment.set`) and reference them in later requests as `{{variableName}}`.

### Q3: How do you verify a DELETE operation was successful?
**A:** First, assert the DELETE response has the expected status code (200 or 204 depending on the API). Then make a GET request for the same resource and assert it returns 404. This confirms the resource no longer exists. Some APIs soft-delete (mark as deleted but don't remove), so you may need to check if the response includes a `deletedAt` field.

### Q4: What is the difference between PUT and PATCH in practice?
**A:** PUT sends the complete resource representation, replacing everything. If you PUT with only `firstname` and omit `lastname`, the API should either set `lastname` to null or return an error. PATCH is a partial update — only the fields you send are changed. Always check the API spec to understand the specific behavior since some APIs implement PUT as PATCH.

### Q5: What are environment variables in Postman and why use them?
**A:** Environment variables store values that change between environments (dev, staging, prod) or between test runs (like auth tokens, resource IDs). They allow you to: switch between environments without rewriting requests, chain requests by passing data between them, keep sensitive data (passwords, tokens) out of request URLs, and share collections without hardcoded values.

---

## 📁 Files in This Folder

```
phase2/day13/
├── day13-guide.md          ← This file
├── crud-test-cases.md      ← Your documented CRUD test flow
└── postman-day13-crud.json ← Export from Postman (after task)
```
