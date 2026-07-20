# Day 14 — GraphQL Queries & Results
# API: SpaceX GraphQL — https://spacex-production.up.railway.app/

> **Instructions:** Run each query in Postman (Body → GraphQL tab).
> Paste your queries and document results in each section.

---

## Query 1 — Introspection: Discover Schema Types

**Query:**
```graphql
{
    __schema {
        types {
            name
            kind
        }
    }
}
```

**Status Code:** `[ TODO — should be 200 ]`

**Types Discovered (list 5 interesting ones):**
```
[ TODO: List 5 type names from the response and what "kind" they are 
(OBJECT, SCALAR, ENUM, etc.) ]

1. 
2. 
3. 
4. 
5. 
```

---

## Query 2 — Get First 5 Launches

**Query:**
```graphql
[ TODO: Write your query here to get 5 launches 
with id, mission_name, and launch_date_utc ]
```

**Variables (if any):**
```json
{ }
```

**Status Code:** `[ TODO ]`

**Response Data (summarize):**
```
[ TODO: List the 5 mission names returned ]
1. 
2. 
3. 
4. 
5. 
```

**Assertion Notes:**
```
[ TODO: What would you assert in a Postman test script?
Write pseudocode or actual PM assertions. ]
```

---

## Query 3 — Nested Query (Launches with Rocket Details)

**Query:**
```graphql
[ TODO: Write a query that gets launches AND nested rocket information 
(rocket_name, rocket_type) in a single request ]
```

**Status Code:** `[ TODO ]`

**Sample Nested Response (one item):**
```json
[ TODO: Paste one item from the response that shows the nested structure ]
```

**Key Observation:**
```
[ TODO: How does this compare to REST where you'd need two separate calls? ]
```

---

## Query 4 — Filtered Query (Successful Launches)

**Query:**
```graphql
[ TODO: Query launches filtered by launch_success: true 
with a limit of 3 ]
```

**Status Code:** `[ TODO ]`
**Count Returned:** `[ TODO ]`

**Assertion Notes:**
```
[ TODO: How would you assert the filter worked?
All returned items should have launch_success = true ]
```

---

## Query 5 — Error Test (Invalid Field)

**Query:**
```graphql
{
    launches(limit: 1) {
        id
        nonExistentField
    }
}
```

**Status Code:** `[ TODO — expect 200! ]`

**Response Body:**
```json
[ TODO: Paste the actual response — look for the "errors" key ]
```

**Key Observation:**
```
[ TODO: How is this different from REST error handling? 
Note that status is 200 but errors exist in the body. ]
```

---

## GraphQL vs REST Comparison

Based on today's experience, fill in this comparison:

| Aspect | REST (from Day 11-13) | GraphQL (today) |
|--------|----------------------|-----------------|
| How many requests to get launch + rocket data? | `[ TODO ]` | `[ TODO ]` |
| How do you know what fields are available? | `[ TODO ]` | `[ TODO ]` |
| How do errors come back? | `[ TODO ]` | `[ TODO ]` |
| How do you filter results? | `[ TODO ]` | `[ TODO ]` |

---

## Reflection

```
[ TODO: Would you prefer to test REST or GraphQL APIs? Why?
What new challenges does GraphQL introduce for QA? ]
```
