# Day 14 — GraphQL Testing Basics

> **Phase:** 2 — API, Backend & Performance
> **Duration:** 1 hour
> **Target API:** https://spacex-production.up.railway.app/ (SpaceX GraphQL API)
> **Deliverables:** `graphql-queries.md` with documented queries and results

---

## 🎯 Learning Objectives

- Understand how GraphQL differs from REST
- Write GraphQL queries and mutations in Postman
- Understand introspection for API exploration
- Know how to test GraphQL-specific scenarios

---

## 📖 Concepts (15 min)

### GraphQL vs REST

| Feature | REST | GraphQL |
|---------|------|---------|
| **Endpoints** | Many (one per resource) | One (`/graphql`) |
| **Data fetching** | Fixed response shape | Client specifies exact fields |
| **Over-fetching** | Common | Eliminated |
| **Under-fetching** | Common (N+1 problem) | Eliminated via nested queries |
| **Versioning** | v1, v2, v3 URLs | No versioning — add fields |
| **Documentation** | Swagger/OpenAPI | Introspection query |

### GraphQL Query Structure

```graphql
# Query (Read)
query {
    launches(limit: 5) {
        id
        mission_name
        launch_date_utc
        rocket {
            rocket_name
        }
    }
}

# Query with variables
query GetLaunch($id: ID!) {
    launch(id: $id) {
        id
        mission_name
        details
    }
}

# Mutation (Write)
mutation {
    createBooking(input: {
        name: "Test"
        date: "2025-01-01"
    }) {
        id
        name
    }
}
```

### Setting Up GraphQL in Postman

1. New Request → POST to `https://spacex-production.up.railway.app/`
2. Body tab → Select **GraphQL**
3. Write your query in the QUERY pane
4. Variables go in the VARIABLES pane (JSON)

### Testing GraphQL — What to Validate

| Check | Description |
|-------|-------------|
| **Status Code** | Always 200, even for errors! Errors are in the response body. |
| **errors array** | If `errors` key exists in response → something went wrong |
| **data completeness** | All requested fields are present |
| **null handling** | Fields that can be null vs. should never be null |
| **Field types** | strings, numbers, booleans match expected types |
| **Pagination** | `limit` and `offset` work correctly |

> ⚠️ **Key difference from REST:** GraphQL always returns HTTP 200. Errors come in the body as `{"errors": [...]}`.

### Introspection Query

Use introspection to discover the API schema:
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

---

## 🛠️ Task (40 min)

Run these queries against the SpaceX GraphQL API and document in `graphql-queries.md`:

1. **Introspection** — Discover the schema types
2. **Get launches** — Get first 5 launches with `id`, `mission_name`, `launch_date_utc`
3. **Nested query** — Get launches with rocket details nested
4. **Filtered query** — Get only successful launches (`launch_success: true`)
5. **Error test** — Request a non-existent field and observe the error format

---

## 🎤 Interview Prep (5 min)

### Q1: What is GraphQL and how does it differ from REST?
**A:** GraphQL is a query language and runtime for APIs developed by Facebook. Unlike REST which has multiple endpoints each returning a fixed data shape, GraphQL has a single endpoint where clients specify exactly what data they need. This eliminates over-fetching (getting more data than needed) and under-fetching (needing multiple calls to get related data). It also uses a strong type system and introspection for self-documentation.

### Q2: How do you test error handling in GraphQL?
**A:** Unlike REST, GraphQL always returns HTTP 200 even for errors. Errors come in the response body in an `errors` array. Test error handling by sending invalid queries (wrong field names, missing required arguments, wrong types), then assert that the `errors` key exists in the response body and contains a meaningful error message. Also assert that `data` is null or contains partial data for partial successes.

### Q3: What is GraphQL introspection?
**A:** Introspection is GraphQL's built-in ability to query the schema itself. You can ask the API "what types do you have?", "what fields does this type have?", "what arguments does this query accept?". This makes GraphQL self-documenting. Tools like GraphiQL and Postman use introspection to provide autocomplete and documentation. In security contexts, introspection should be disabled in production to hide the schema from attackers.

### Q4: What is the N+1 problem and how does GraphQL address it?
**A:** The N+1 problem occurs in REST when you need one request to get a list of items, then N more requests to get related data for each item (e.g., GET /users then GET /users/1/profile, /users/2/profile, etc.). GraphQL addresses this by allowing a single query to specify nested related data, which the server resolves efficiently using DataLoader or similar batching techniques.

### Q5: What are GraphQL mutations and how do you test them?
**A:** Mutations are GraphQL operations that modify data (equivalent to POST/PUT/PATCH/DELETE in REST). Test them the same way as CRUD operations: assert the return data is correct, make a subsequent query to verify the change persisted, test invalid inputs for proper error responses, and test authorization (mutations often require auth). Use variables to parameterize mutation inputs.

---

## 📁 Files in This Folder

```
phase2/day14/
├── day14-guide.md       ← This file
└── graphql-queries.md   ← Your documented queries and results
```
