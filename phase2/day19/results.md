# Day 19 — k6 Load Test Results

> **Instructions:** Run `k6 run load-test.js` and paste/summarize the output here.

---

## Test Configuration

| Field | Value |
|-------|-------|
| **Date** | `[ TODO ]` |
| **Target** | https://restful-booker.herokuapp.com |
| **Total Duration** | ~2 minutes |
| **Peak VUs** | 5 |
| **k6 Version** | `[ TODO: output of k6 version ]` |

---

## k6 Output (paste terminal output here)

```
[ TODO: Paste the full k6 terminal output here.
It looks something like:

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
  ...
  data_received..................: X kB X kB/s
  data_sent......................: X kB X kB/s
  http_req_blocked...............: avg=X  min=X    med=X    max=X    p(90)=X
  http_req_duration..............: avg=X  min=X    med=X    max=X    p(90)=X  p(95)=X
  http_req_failed................: X%    X/X
  http_reqs......................: X     X/s
  iterations.....................: X     X/s
  vus............................: X     min=0 max=5
]
```

---

## Threshold Results

| Threshold | Target | Actual | Pass/Fail |
|-----------|--------|--------|-----------|
| `http_req_duration p(95)` | < 500ms | `[ TODO ]` | `[ PASS / FAIL ]` |
| `http_req_failed rate` | < 1% | `[ TODO ]` | `[ PASS / FAIL ]` |
| `error_rate` | < 5% | `[ TODO ]` | `[ PASS / FAIL ]` |

**Overall Result:** `[ PASS / FAIL ]`

---

## Check Results

| Group | Check | Pass Count | Fail Count |
|-------|-------|-----------|-----------|
| GET Bookings | list status 200 | `[ TODO ]` | `[ TODO ]` |
| GET Bookings | list is array | `[ TODO ]` | `[ TODO ]` |
| GET Bookings | list response time OK | `[ TODO ]` | `[ TODO ]` |
| GET Bookings | single booking status 200 | `[ TODO ]` | `[ TODO ]` |
| POST Booking | create status 200 | `[ TODO ]` | `[ TODO ]` |
| POST Booking | has bookingid | `[ TODO ]` | `[ TODO ]` |

---

## Performance Analysis

```
[ TODO: Answer these questions:
1. What was the 95th percentile response time? Is it acceptable?
2. Were there any failures? If so, what caused them?
3. How did the API perform under 5 concurrent users?
4. What would happen if you increased to 50 or 100 users? ]
```

---

## Reflection

```
[ TODO: How does this compare to manual performance checking?
What would you add to this test script for a real project? ]
```
