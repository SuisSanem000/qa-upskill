# Day 12 — Schema Assertions
# Postman test scripts for Restful-Booker API

> **Instructions:** Write your JSON schemas and Postman test scripts here for reference.
> Then copy them into the Postman Tests tab for each request.

---

## Schema: GET /booking/:id Response

Define the expected JSON structure of a single booking response:

```json
{
  "type": "object",
  "required": [ "TODO: list required fields" ],
  "properties": {
    "TODO_FIELD_1": { "type": "TODO_TYPE" },
    "TODO_FIELD_2": { "type": "TODO_TYPE" },
    "bookingdates": {
      "type": "object",
      "required": [ "TODO" ],
      "properties": {
        "checkin": { "type": "TODO" },
        "checkout": { "type": "TODO" }
      }
    }
  }
}
```

---

## Postman Test Scripts

### Script 1: GET /booking (list all)

```javascript
// TODO: Write your Postman test script here
// Assert: status 200
pm.test("TODO", function () {
    // ...
});

// Assert: response is array
pm.test("TODO", function () {
    // ...
});

// Assert: array is not empty
pm.test("TODO", function () {
    // ...
});
```

---

### Script 2: GET /booking/1 (single booking)

```javascript
// TODO: Write your test script here
// Assert: status 200
// Assert: firstname field exists and is a string
// Assert: totalprice is a number
// Assert: depositpaid is a boolean
// Assert: bookingdates.checkin exists
// Assert: response matches the schema above
```

---

### Script 3: GET /booking?firstname=Jim

```javascript
// TODO: Write your test script here
// Assert: status 200
// Assert: response is array
// (Note: JSONPlaceholder doesn't actually filter — 
//  document whether Restful-Booker does filter correctly)
```

---

### Script 4: GET /booking/99999 (non-existent ID)

```javascript
// TODO: After running the request, document actual behavior:
// Expected: 404
// Actual: [ TODO — what did the API actually return? ]

pm.test("TODO", function () {
    // What status code did you get? Was it 404, 200, or something else?
});
```

---

## Observations

```
[ TODO: Which assertions were trickiest to write? 
What did the Restful-Booker API do that surprised you? ]
```
