# Day 12 — REST API Validation: Status Codes, Schemas & Assertions

> **Phase:** 2 — API, Backend & Performance
> **Duration:** 1 hour
> **Target API:** https://restful-booker.herokuapp.com
> **Swagger Docs:** https://restful-booker.herokuapp.com/apidoc/index.html
> **Deliverables:** `schema-assertions.md` + `test-results.md`

---

## 🎯 Learning Objectives

- Write Postman test scripts (JavaScript) to assert status codes
- Validate JSON schema structure
- Understand what to assert vs. what NOT to assert
- Explore the Restful-Booker API using its Swagger documentation

---

## 📖 Concepts (15 min)

### Postman Test Scripts

Postman has a built-in test runner. Scripts go in the **Tests** tab of a request.

```javascript
// Assert status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Assert response time
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Assert response body field
pm.test("Booking ID exists", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.bookingid).to.be.a('number');
});

// Assert header
pm.test("Content-Type is JSON", function () {
    pm.response.to.have.header("Content-Type", "application/json; charset=utf-8");
});
```

### JSON Schema Validation

Schema validation checks that a response has the **correct structure** — field names, types, and required fields — regardless of the specific values.

```javascript
// Using Postman's built-in Ajv (JSON Schema validator)
const schema = {
    type: "object",
    required: ["bookingid", "booking"],
    properties: {
        bookingid: { type: "number" },
        booking: {
            type: "object",
            required: ["firstname", "lastname", "totalprice", "depositpaid", "bookingdates"],
            properties: {
                firstname: { type: "string" },
                lastname: { type: "string" },
                totalprice: { type: "number" },
                depositpaid: { type: "boolean" },
                bookingdates: {
                    type: "object",
                    required: ["checkin", "checkout"],
                    properties: {
                        checkin: { type: "string", format: "date" },
                        checkout: { type: "string", format: "date" }
                    }
                }
            }
        }
    }
};

pm.test("Response matches schema", function () {
    pm.response.to.have.jsonSchema(schema);
});
```

### What to Assert (Golden Rules)

✅ **DO assert:**
- Status code
- Response time (SLA)
- Required field presence
- Field data types
- Business logic values (e.g., `bookingid > 0`)
- Error message text on failure paths

❌ **DON'T assert:**
- Dynamic timestamps (will differ every run)
- Auto-generated IDs (unless saved and reused)
- Third-party data you can't control
- Exact match of descriptions that change

---

## 🛠️ Task (40 min)

**Step 1 (5 min):** Read the Swagger docs at https://restful-booker.herokuapp.com/apidoc/index.html

**Step 2 (35 min):** In Postman, create these requests with Test scripts:

1. `GET /booking` — List all bookings. Assert: status 200, response is array, array is not empty
2. `GET /booking/1` — Get single booking. Assert: status 200, all required fields present, correct types
3. `GET /booking?firstname=Jim` — Filter. Assert: status 200, response is array
4. `GET /booking/99999` — Non-existent ID. Assert: status 404 or 200+empty (check actual behavior!)

Document your assertions and results in `schema-assertions.md` and results in `test-results.md`.

---

## 🎤 Interview Prep (5 min)

### Q1: What is the difference between functional API testing and schema validation?
**A:** Functional testing checks that the API *behaves* correctly — the right data comes back, business rules are enforced, error handling works. Schema validation checks that the *structure* is correct — field names exist, types are correct, required fields are present. Schema validation catches breaking changes (a field being renamed or removed) without checking every value.

### Q2: What are the most important things to assert in an API test?
**A:** Status code, response time (SLA), presence of required fields, data types, business logic correctness (e.g., the returned item matches the ID requested), and proper error responses for invalid inputs. Don't over-assert dynamic values like timestamps or auto-IDs.

### Q3: What is a JSON Schema?
**A:** A specification (vocabulary) for describing the structure of JSON data. It defines required fields, field types, value constraints, and nested structures. It's used for contract testing, API validation, and auto-generating documentation. Tools like Ajv and tv4 validate JSON against schemas.

### Q4: How do you test error handling in APIs?
**A:** By sending deliberately invalid requests: missing required fields, wrong data types, out-of-range values, invalid IDs, unauthenticated requests, and requests without required headers. For each, assert that the status code is appropriate (400, 401, 403, 404, 422) and the error message is helpful and doesn't expose internal details.

### Q5: What is Swagger/OpenAPI?
**A:** OpenAPI (formerly Swagger) is a specification for describing REST APIs in a machine-readable format (YAML or JSON). Swagger UI is a tool that generates interactive documentation from OpenAPI specs. As a QA engineer, you use Swagger to understand the API contract — available endpoints, request parameters, and response schemas.

---

## 📁 Files in This Folder

```
phase2/day12/
├── day12-guide.md        ← This file
├── schema-assertions.md  ← Your JSON schema definitions and assertion scripts
└── test-results.md       ← Your execution results
```
