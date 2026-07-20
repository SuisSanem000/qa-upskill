# Day 17 — API Interception: Charles Proxy, Swagger & Mocking

> **Phase:** 2 — API, Backend & Performance
> **Duration:** 1 hour
> **Tools:** Charles Proxy (or Fiddler/mitmproxy), Swagger UI, Postman mock server
> **Deliverables:** `interception-findings.md` + `swagger-exploration.md`

---

## 🎯 Learning Objectives

- Understand what a proxy interceptor does and why QA uses it
- Use Swagger to explore and test an API
- Understand API mocking and when to use it
- Set up Charles Proxy (or browser-only alternative)

---

## 📖 Concepts (15 min)

### What is a Proxy Interceptor?

A proxy interceptor sits between your app and the server, capturing all HTTP/HTTPS traffic. QA engineers use it to:

- **See** every API call an app makes (even ones not in specs)
- **Modify** requests to simulate edge cases
- **Block** responses to test error handling
- **Throttle** network speed to simulate mobile conditions
- **Record** API traffic to generate test cases

```
Browser/App → [Charles Proxy] → Server
                   ↕
               QA Engineer reads/modifies traffic here
```

### Charles Proxy

**Charles Proxy** (https://www.charlesproxy.com/) is the most popular QA API interception tool.

Key features:
- **Structure view** — see all API calls organized by domain
- **Sequence view** — chronological order of all requests
- **Breakpoints** — pause a request/response and modify it
- **Throttling** — simulate slow networks
- **Map Remote / Map Local** — redirect requests to different servers or local files
- **Repeat** — replay a request multiple times
- **SSL Proxying** — intercept HTTPS traffic (requires certificate setup)

**Free alternatives:**
- **Fiddler** (https://www.telerik.com/fiddler) — Windows-native
- **mitmproxy** (https://mitmproxy.org/) — Free, open-source, CLI-based
- **Browser DevTools Network tab** — Built-in, no install needed

---

### Using Browser DevTools Network Tab (No Install)

For today, use Chrome DevTools as your "proxy":

1. F12 → Network tab
2. Navigate to the-internet.herokuapp.com and log in
3. Observe all HTTP requests captured
4. Click a request to see Headers, Payload, Response
5. Right-click → Copy → Copy as cURL (to replay in Postman)

---

### Swagger UI

Swagger UI provides an interactive interface to explore and test an API directly from documentation.

**Restful-Booker Swagger:** https://restful-booker.herokuapp.com/apidoc/index.html

With Swagger you can:
- See all available endpoints
- Read request parameters and response schemas
- Execute API calls directly (without Postman)
- Download the OpenAPI spec (YAML/JSON)

---

### API Mocking

**Why mock?** When the backend isn't ready yet, mock it so frontend/QA can proceed.

**Postman Mock Server:**
1. In Postman, create a Collection
2. Add examples to each request (what the response should look like)
3. Right-click collection → Mock Collection
4. Postman generates a URL that returns your examples

---

## 🛠️ Task (40 min)

**Part 1 (20 min) — Swagger Exploration:**
1. Open https://restful-booker.herokuapp.com/apidoc/index.html
2. Try executing 3 different endpoints directly from Swagger UI
3. Document findings in `swagger-exploration.md`

**Part 2 (20 min) — Network Interception:**
1. Open Chrome DevTools Network tab
2. Navigate to https://the-internet.herokuapp.com and perform a login
3. Find the login request, inspect all headers
4. Try the "Copy as cURL" feature and replay in Postman
5. Document in `interception-findings.md`

---

## 🎤 Interview Prep (5 min)

### Q1: What is Charles Proxy and how do QA engineers use it?
**A:** Charles Proxy is an HTTP/HTTPS proxy that intercepts all network traffic between a client and server. QA engineers use it to: see all API calls an app makes (even undocumented ones), modify requests and responses in real-time to test edge cases, simulate network conditions, test error handling by blocking or modifying responses, and reverse-engineer APIs. It's especially useful for mobile app testing where you can't inspect network calls from the app directly.

### Q2: How do you test what happens when an API returns a 500 error?
**A:** Use a proxy interceptor (Charles Proxy, Fiddler, or mitmproxy) to intercept the API response and change the status code to 500 before it reaches the app. This tests the error handling path without needing to break the server. Alternatively, use a mock server or API stubbing to return the desired error response. Some testing frameworks also allow request interception at the code level (e.g., Playwright's `route.fulfill()`).

### Q3: What is API mocking and when do you use it?
**A:** API mocking replaces a real API with a simulated one that returns predefined responses. Use it when: the backend isn't built yet (parallel frontend development), the real API has rate limits, the real API requires complex setup (auth, data seeding), testing error conditions that are hard to trigger on real APIs (500 errors, timeouts), or running tests in CI without network access.

### Q4: What can you learn from inspecting network traffic with DevTools?
**A:** The exact API endpoints the app calls (including ones not documented), request headers (auth tokens, cookies, custom headers), request payloads (what data is actually sent), response data and schema, response timing, and failed requests. This is invaluable for creating test cases, debugging bugs, and understanding how an application actually works vs. how it's documented.

### Q5: What is the difference between API documentation testing and API functional testing?
**A:** Documentation testing verifies that the API behaves as the documentation (Swagger/OpenAPI) says it should — that all documented endpoints exist, return documented status codes, and match the documented schemas. Functional testing verifies the business logic — that creating a booking actually creates one, that authentication works, that validation rejects invalid inputs. Both are necessary.

---

## 📁 Files in This Folder

```
phase2/day17/
├── day17-guide.md           ← This file
├── swagger-exploration.md   ← Part 1: Swagger UI findings
└── interception-findings.md ← Part 2: DevTools network inspection
```
