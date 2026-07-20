# Day 15 — Consumer Contract Document
# Consumer: QA Upskill Frontend App | Provider: Restful-Booker API

> **Instructions:** Define the consumer's expectations for each API interaction.
> Use type-based matching where values are dynamic.

---

## Contract Metadata

| Field | Value |
|-------|-------|
| **Consumer** | QA Upskill Frontend |
| **Provider** | Restful-Booker API |
| **Base URL** | https://restful-booker.herokuapp.com |
| **Created** | `[ TODO: Date ]` |
| **Version** | 1.0.0 |

---

## Interaction 1 — Get Single Booking

**Description:** Consumer requests a booking by ID to display on the booking detail page.

### Request

| Field | Value |
|-------|-------|
| Method | GET |
| Path | `/booking/:id` |
| Headers | `Accept: application/json` |

### Expected Response

| Field | Value |
|-------|-------|
| Status | `[ TODO: Expected status code ]` |
| Content-Type | `[ TODO ]` |

**Expected Response Body:**
```json
{
    "TODO_FIELD": "TODO_VALUE (type: string)",
    "TODO_FIELD": "TODO_VALUE (type: string)",
    "TODO_FIELD": 0,
    "TODO_FIELD": true,
    "bookingdates": {
        "TODO": "TODO",
        "TODO": "TODO"
    }
}
```

**Matching Rules:**
```
[ TODO: For each field, specify: exact match OR type match OR regex match.
Example:
- firstname: type match (any string)
- totalprice: type match (any number > 0)
- checkin: regex match (YYYY-MM-DD format)
]
```

---

## Interaction 2 — Create a Booking

**Description:** Consumer creates a new booking and needs back the created booking's ID.

### Request

| Field | Value |
|-------|-------|
| Method | POST |
| Path | `/booking` |
| Headers | `Content-Type: application/json` |

**Request Body:**
```json
{
    "TODO_FIELD": "TODO_VALUE",
    "TODO_FIELD": "TODO_VALUE",
    "TODO_FIELD": 0,
    "TODO_FIELD": true,
    "bookingdates": {
        "TODO": "TODO",
        "TODO": "TODO"
    }
}
```

### Expected Response

| Field | Value |
|-------|-------|
| Status | `[ TODO ]` |

**Expected Response Body:**
```json
{
    "TODO_FIELD": 0,
    "booking": {
        "TODO": "..."
    }
}
```

**Matching Rules:**
```
[ TODO: The bookingid is dynamic — what matching rule applies?
The booking object should match the schema from Interaction 1. ]
```

---

## Interaction 3 — Delete a Booking

**Description:** Consumer deletes a booking after user confirmation.

### Request

| Field | Value |
|-------|-------|
| Method | DELETE |
| Path | `/booking/:id` |
| Headers | `Cookie: token={{authToken}}` |

### Expected Response

| Field | Value |
|-------|-------|
| Status | `[ TODO: What status code does Restful-Booker return on DELETE? ]` |
| Response Body | `[ TODO: What is the response body? ]` |

---

## Interaction 4 — Authentication

**Description:** Consumer needs to get an auth token before making protected requests.

### Request

| Field | Value |
|-------|-------|
| Method | POST |
| Path | `/auth` |
| Body | `{"username": "admin", "password": "password123"}` |

### Expected Response

| Field | Value |
|-------|-------|
| Status | `[ TODO ]` |

**Expected Body:**
```json
{
    "token": "[ TODO: type match or regex for alphanumeric string ]"
}
```

---

## Breaking Change Risk Analysis

List changes the Provider could make that would BREAK this contract:

```
[ TODO: List 5 breaking changes that would cause consumer failures.
Examples:
- Renaming 'firstname' to 'first_name'
- Changing totalprice from number to string
- Removing the bookingdates nested object
Add 3 more... ]

1. 
2. 
3. 
4. 
5. 
```

---

## Reflection

```
[ TODO: How would this contract help prevent production bugs in a real team?
What would be the workflow for updating a contract? ]
```
