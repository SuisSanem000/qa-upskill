# Day 17 — Network Interception Findings
# Tool: Chrome DevTools Network Tab

> **Instructions:** Open DevTools → Network tab.
> Log in to https://the-internet.herokuapp.com and inspect the traffic.

---

## Login Request Analysis

### Request Details

| Field | Value |
|-------|-------|
| **URL** | `[ TODO: Full URL of the login request ]` |
| **Method** | `[ TODO ]` |
| **Status Code** | `[ TODO ]` |
| **Response Time** | `[ TODO ] ms` |

### Request Headers (capture 5 key headers)

| Header | Value | Notes |
|--------|-------|-------|
| `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |
| `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |
| `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |
| `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |
| `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |

### Request Payload

```
[ TODO: What data was sent in the login request body?
Was it form data or JSON? What fields were included? ]
```

### Response Headers

| Header | Value |
|--------|-------|
| `Set-Cookie` | `[ TODO: Was a session cookie set? ]` |
| `Location` | `[ TODO: Was there a redirect? ]` |

---

## Copy as cURL

After right-clicking the request → Copy → Copy as cURL, paste the cURL command here:

```bash
[ TODO: Paste the cURL command here.
It should look like:
curl 'https://the-internet.herokuapp.com/login' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-raw 'username=tomsmith&password=SuperSecretPassword%21'
]
```

---

## Replay in Postman

Did you successfully replay the cURL request in Postman?
- [ ] Imported cURL into Postman (File → Import → Raw Text → paste cURL)
- [ ] Request ran successfully with same status code
- [ ] `[ TODO: Note any differences between browser request and Postman replay ]`

---

## All Requests During Login Flow

List all requests captured during the login flow (not just the login itself):

| Request # | Method | URL | Status | Notes |
|-----------|--------|-----|--------|-------|
| 1 | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | Login POST |
| 2 | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |
| 3 | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |

---

## Key Findings

```
[ TODO: What did you discover about the app's API calls that you 
didn't know from just using the UI? 
What would you add to your test suite based on these findings? ]
```
