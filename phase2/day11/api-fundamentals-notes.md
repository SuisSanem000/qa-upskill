# Day 11 — API Fundamentals Notes
# Target: https://jsonplaceholder.typicode.com

> **Instructions:** Make each API call in Postman and document the results.

---

## Request Log

### Request 1: GET /posts

| Field | Value |
|-------|-------|
| **Method** | GET |
| **URL** | https://jsonplaceholder.typicode.com/posts |
| **Status Code Received** | `[ TODO ]` |
| **Response Time** | `[ TODO ] ms` |
| **Total Items Returned** | `[ TODO ]` |

**Key Observation:**
```
[ TODO: What does the response look like? What fields does each post have?
Is there pagination? ]
```

---

### Request 2: GET /posts/1

| Field | Value |
|-------|-------|
| **Method** | GET |
| **URL** | https://jsonplaceholder.typicode.com/posts/1 |
| **Status Code Received** | `[ TODO ]` |
| **Response Time** | `[ TODO ] ms` |

**Response Body (paste actual response):**
```json
[ TODO: Paste the JSON response here ]
```

**Key Observation:**
```
[ TODO ]
```

---

### Request 3: GET /users/1

| Field | Value |
|-------|-------|
| **Method** | GET |
| **URL** | https://jsonplaceholder.typicode.com/users/1 |
| **Status Code Received** | `[ TODO ]` |
| **Response Time** | `[ TODO ] ms` |

**Response Body:**
```json
[ TODO: Paste response ]
```

**Key Observation:**
```
[ TODO: Note the nested objects (address, company). How would you validate these in a test? ]
```

---

### Request 4: GET /posts?userId=1 (Query Parameter)

| Field | Value |
|-------|-------|
| **Method** | GET |
| **URL** | https://jsonplaceholder.typicode.com/posts?userId=1 |
| **Query Param** | `userId=1` |
| **Status Code Received** | `[ TODO ]` |
| **Items Returned** | `[ TODO ]` |

**Key Observation:**
```
[ TODO: Did the filter work? How many posts does userId=1 have? 
What would you assert in a test for this endpoint? ]
```

---

### Request 5: GET /posts/999 (Non-existent Resource)

| Field | Value |
|-------|-------|
| **Method** | GET |
| **URL** | https://jsonplaceholder.typicode.com/posts/999 |
| **Status Code Received** | `[ TODO ]` |
| **Response Body** | `[ TODO ]` |

**Key Observation:**
```
[ TODO: Was the status code what you expected? Was the response body empty or an error object? 
This is an important test case type for any API. ]
```

---

## Response Headers Analysis

Look at the response headers for any request above and document:

| Header | Value | What It Means |
|--------|-------|--------------|
| `Content-Type` | `[ TODO ]` | `[ TODO ]` |
| `X-Powered-By` | `[ TODO ]` | `[ TODO ]` |
| `Cache-Control` | `[ TODO ]` | `[ TODO ]` |
| `[ TODO: Header ]` | `[ TODO ]` | `[ TODO ]` |

---

## First Impressions

```
[ TODO: Write 3-5 sentences. How does testing via API feel compared to UI testing?
What surprises you? What seems easier? What seems harder? ]
```

---

## Export Instructions

1. In Postman, right-click your Day 11 Collection
2. Click Export → Collection v2.1
3. Save as `postman-day11.json` in this folder
