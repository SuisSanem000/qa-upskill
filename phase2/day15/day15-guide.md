# Day 15 — API Contract Testing (Pact Concepts)

> **Phase:** 2 — API, Backend & Performance
> **Duration:** 1 hour
> **Deliverables:** `consumer-contract.md` — a documented consumer contract for Restful-Booker

---

## 🎯 Learning Objectives

- Understand what contract testing is and why it matters
- Know the difference between provider and consumer contracts
- Learn how Pact works conceptually
- Write a consumer contract document manually

---

## 📖 Concepts (15 min)

### What is Contract Testing?

Contract testing verifies that two services (e.g., a frontend and a backend API) agree on the **interface** between them. If the API changes in a breaking way, the contract test catches it.

```
Frontend (Consumer) --- Contract ---> Backend (Provider)

The contract says:
"When I call GET /booking/1, I expect a response with these fields in this format."

If the backend team renames 'firstname' to 'first_name', contract tests catch it
BEFORE it reaches production.
```

### Consumer vs. Provider

| Role | Description |
|------|-------------|
| **Consumer** | The service that calls the API (frontend, mobile app, another service) |
| **Provider** | The service that exposes the API (backend, microservice) |

### Pact — Consumer-Driven Contract Testing

**Pact** is the most popular contract testing framework. The flow is:

```
1. Consumer writes a test that defines what they expect from the API
2. Pact captures this as a "pact file" (JSON contract)
3. The pact file is shared with the Provider team
4. Provider team runs "provider verification" against the pact file
5. If the provider's actual response doesn't match — build fails!
```

**Pact Broker:** A central server where pact files are stored and shared between teams.

### A Pact Interaction (Conceptual)

```json
{
  "description": "a request for a booking",
  "request": {
    "method": "GET",
    "path": "/booking/1",
    "headers": {
      "Accept": "application/json"
    }
  },
  "response": {
    "status": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "firstname": "Jim",
      "lastname": "Brown",
      "totalprice": 111,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
      }
    },
    "matchingRules": {
      "body.firstname": { "match": "type" },
      "body.totalprice": { "match": "type" }
    }
  }
}
```

### Matching Rules (Flexible Contracts)

Instead of matching exact values, Pact uses matching rules:

| Rule | Meaning |
|------|---------|
| `type` | Match the data type (string, number, boolean) |
| `regex` | Match a pattern |
| `integer` | Must be an integer |
| `minLength` | Array must have at least N items |
| `eachLike` | Each element in array matches the template |

---

## 🛠️ Task (45 min)

Write a consumer contract document in `consumer-contract.md` for these interactions:

1. `GET /booking/:id` — Consumer needs: firstname, lastname, totalprice, depositpaid, checkin, checkout
2. `POST /booking` — Consumer needs: the created bookingid back
3. `DELETE /booking/:id` — Consumer needs: 201 status code

This is manual today — in Phase 3 automation you can implement this with Pact.js.

---

## 🎤 Interview Prep (5 min)

### Q1: What is contract testing and why is it important?
**A:** Contract testing verifies that the interface between two services (consumer and provider) is compatible. It's important in microservices architectures where multiple teams develop services independently — a backend team could change a field name not knowing the frontend relied on it. Contract tests catch these breaking changes before integration.

### Q2: What is the difference between integration testing and contract testing?
**A:** Integration testing deploys all services together and tests them as a system — it's slow and requires all services to be available. Contract testing tests each service in isolation against a pre-agreed contract/mock. Contract testing is faster, more reliable, and catches interface breaking changes earlier.

### Q3: What is Pact and how does it work?
**A:** Pact is a consumer-driven contract testing framework. The consumer team writes tests defining what they expect from the provider API — these create a "pact file" (JSON contract). The pact file is shared with the provider team, who run "provider verification" to confirm their actual API responses match the contract. If they don't, the build fails before deployment.

### Q4: What are matching rules in Pact?
**A:** Matching rules make contracts flexible by specifying HOW to match rather than exact values. `type` matching checks the data type (string, number, boolean) without caring about the exact value — useful for dynamic data. `regex` matches a pattern. `eachLike` verifies array items match a template structure. This prevents contracts from becoming brittle due to test data changes.

### Q5: When would you NOT use contract testing?
**A:** When testing third-party APIs you don't control (you can't verify the provider). When services have very stable, rarely-changing interfaces where the overhead isn't justified. When team sizes are small and direct communication is easy. Contract testing shines in large organizations with multiple teams owning separate services where coordination is difficult.

---

## 📁 Files in This Folder

```
phase2/day15/
├── day15-guide.md      ← This file
└── consumer-contract.md ← Your documented contract interactions
```
