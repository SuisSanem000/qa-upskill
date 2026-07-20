# Day 11 — API Testing Fundamentals & Postman Setup

> **Phase:** 2 — API, Backend & Performance
> **Duration:** 1 hour
> **Target API:** https://jsonplaceholder.typicode.com + https://restful-booker.herokuapp.com
> **Deliverables:** Postman collection file + `api-fundamentals-notes.md`

---

## 🎯 Learning Objectives

- Understand what an API is and how REST works
- Learn HTTP methods, status codes, headers, and request structure
- Set up Postman and make your first API calls
- Understand API testing vs. UI testing

---

## 📖 Concepts (15 min)

### What is an API?

An **API (Application Programming Interface)** is a set of rules that allows two software systems to communicate. A **REST API** uses HTTP to transmit data, usually in JSON format.

```
Client (Postman/App)  --HTTP Request-->  Server (API)
                      <--HTTP Response-- Server (API)
```

### HTTP Methods (Verbs)

| Method | Purpose | Body? | Example |
|--------|---------|-------|---------|
| **GET** | Read/retrieve data | No | Get a user's profile |
| **POST** | Create new resource | Yes | Register a new booking |
| **PUT** | Replace entire resource | Yes | Update all booking fields |
| **PATCH** | Partial update | Yes | Update only the checkout date |
| **DELETE** | Remove a resource | No | Cancel a booking |

### HTTP Status Codes

| Code | Category | Common Examples |
|------|----------|----------------|
| **2xx** | Success | 200 OK, 201 Created, 204 No Content |
| **3xx** | Redirect | 301 Moved Permanently, 304 Not Modified |
| **4xx** | Client Error | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Unprocessable Entity |
| **5xx** | Server Error | 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable |

### Anatomy of an HTTP Request

```
GET /api/users/1 HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOi...
Content-Type: application/json
Accept: application/json
```

### Anatomy of an HTTP Response

```
HTTP/1.1 200 OK
Content-Type: application/json
X-Rate-Limit-Remaining: 49

{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### What to Test in API Testing

| Area | What to check |
|------|--------------|
| **Status Code** | Is it the expected code? |
| **Response Body** | Is the data correct and complete? |
| **Schema** | Does the response match the expected structure? |
| **Headers** | Content-Type, CORS, caching headers |
| **Response Time** | Is it within acceptable limits? |
| **Authentication** | Correct token/auth required? |
| **Error Handling** | Do invalid inputs return proper errors? |

---

## 🛠️ Task (40 min)

**Part 1 (15 min) — Postman Setup:**
1. Download Postman from https://www.postman.com/downloads/
2. Create a new Workspace named "QA Upskill"
3. Create a new Collection named "Day 11 — API Fundamentals"

**Part 2 (25 min) — First Requests:**

Make these calls to JSONPlaceholder (https://jsonplaceholder.typicode.com):

1. `GET /posts` — Get all posts
2. `GET /posts/1` — Get single post
3. `GET /users/1` — Get a user
4. `GET /posts?userId=1` — Filter posts by user (query params)
5. `GET /posts/999` — Non-existent resource (expect 404)

For each request, document in `api-fundamentals-notes.md`:
- Status code received
- Response time
- One key observation about the response body

---

## 🎤 Interview Prep (5 min)

### Q1: What is the difference between REST and SOAP?
**A:** REST (Representational State Transfer) is an architectural style using HTTP methods and JSON/XML data. It's lightweight, stateless, and widely adopted. SOAP (Simple Object Access Protocol) is a protocol using XML and strict message formats with a WSDL contract. SOAP has built-in error handling and security standards but is heavier. REST is now the dominant standard for web APIs.

### Q2: What is the difference between PUT and PATCH?
**A:** PUT replaces the *entire* resource with the provided data — if you omit a field, it gets removed or set to null. PATCH makes a *partial* update — only the fields you send are changed, others remain unchanged. Use PATCH for partial updates to avoid accidentally clearing data.

### Q3: What does a 401 vs 403 error mean?
**A:** 401 Unauthorized means the client is not authenticated — they haven't provided valid credentials. 403 Forbidden means the client IS authenticated but doesn't have *permission* for that action. Think of 401 as "who are you?" and 403 as "I know who you are, but you can't do that."

### Q4: What is idempotency in API testing?
**A:** An operation is idempotent if calling it multiple times produces the same result as calling it once. GET, PUT, and DELETE are idempotent — calling them twice doesn't change the outcome. POST is NOT idempotent — calling it twice creates two resources. PATCH may or may not be idempotent depending on implementation.

### Q5: What is the difference between API testing and UI testing?
**A:** API testing calls the backend directly, bypassing the UI. It's faster, more stable, and can test business logic before the UI is built. UI testing validates the user-facing layer, including rendering, navigation, and user interactions. Both are needed — API tests for business logic, UI tests for the presentation layer.

---

## 📁 Files in This Folder

```
phase2/day11/
├── day11-guide.md            ← This file
└── api-fundamentals-notes.md ← Your task: document first API calls
```

> **Note:** Postman collection export → save as `postman-day11.json` here too.
