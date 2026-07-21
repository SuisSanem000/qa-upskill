# Day 19 — Performance Testing with k6

> **Phase:** 2 — API, Backend & Performance
> **Duration:** 1 hour
> **Tool:** k6 (https://k6.io/)
> **Target:** https://the-internet.herokuapp.com + https://restful-booker.herokuapp.com
> **Deliverables:** `load-test.ts` + `results.md`

---

## 🎯 Learning Objectives

- Understand the types of performance tests (load, stress, spike, soak)
- Install k6 and write your first load test script
- Define and measure performance thresholds
- Interpret k6 output metrics

---

## 📖 Concepts (15 min)

### Types of Performance Tests

| Type | Description | Goal |
|------|-------------|------|
| **Load Test** | Gradually increase users to expected load | Verify normal capacity |
| **Stress Test** | Push beyond capacity until breaking point | Find the limit |
| **Spike Test** | Sudden traffic burst (e.g., sale event) | Verify recovery |
| **Soak Test** | Sustained load over long period (hours) | Find memory leaks |
| **Smoke Test** | Minimal load to verify script works | Baseline check |

### Key Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| **http_req_duration** | Total request time (p95, p99) | p95 < 500ms |
| **http_req_failed** | % of requests that failed | < 1% |
| **http_reqs** | Total requests made | — |
| **vus** | Active virtual users | Defined in script |
| **iterations** | Test iterations completed | — |
| **data_sent/received** | Network throughput | — |

### k6 Concepts

```javascript
// Virtual Users (VUs) — simulated concurrent users
// Stages — define how VUs change over time
// Thresholds — define pass/fail criteria
// Checks — inline assertions within a test
```

---

### Installing k6

**Windows (Chocolatey):**
```bash
choco install k6
```

**Windows (winget):**
```bash
winget install k6 --source winget
```

**Mac:**
```bash
brew install k6
```

**Or use Docker:**
```bash
docker run grafana/k6 run - <script.js
```

---

### Your First k6 Script

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 10 },  // Ramp up to 10 users
        { duration: '1m', target: 10 },   // Stay at 10 for 1 minute
        { duration: '30s', target: 0 },   // Ramp down
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'],  // 95% of requests under 500ms
        http_req_failed: ['rate<0.01'],    // Less than 1% failures
    },
};

export default function () {
    const res = http.get('https://restful-booker.herokuapp.com/booking');

    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
        'has bookings': (r) => r.body.length > 0,
    });

    sleep(1);  // Wait 1 second between iterations
}
```

**Run it:**
```bash
k6 run load-test.ts
```

---

## 🛠️ Task (40 min)

**Part 1 (15 min) — Install k6 and verify:**
```bash
k6 version
```

**Part 2 (25 min) — Complete `load-test.ts`:**
The file has placeholders for you to fill in. Run the test and document results in `results.md`.

---

## 🎤 Interview Prep (5 min)

### Q1: What is the difference between load testing and stress testing?
**A:** Load testing verifies the system performs within SLAs at the expected normal load (e.g., 100 concurrent users). Stress testing pushes beyond normal capacity to find the breaking point — how many users can the system handle before it fails? Load testing answers "does it work under expected conditions?"; stress testing answers "when does it break?"

### Q2: What metrics do you look at in a k6 load test?
**A:** `http_req_duration` percentiles (p50, p95, p99) — how long requests take; `http_req_failed` — percentage of failed requests; `vus` — active virtual users; `iterations` — total test runs; `data_received/sent` — bandwidth usage. The most important are p95 response time and failure rate — set thresholds on these to define pass/fail criteria.

### Q3: What is a performance threshold in k6?
**A:** Thresholds are pass/fail conditions you define before the test. If any threshold is violated, k6 exits with a non-zero code (failing the CI build). Examples: `http_req_duration: ['p(95)<500']` means 95% of requests must complete in under 500ms; `http_req_failed: ['rate<0.01']` means fewer than 1% of requests may fail. Thresholds make performance tests actionable in CI/CD.

### Q4: What is a Virtual User (VU) in performance testing?
**A:** A Virtual User (VU) is a simulated user executing the test script concurrently. k6 runs multiple VUs in parallel to simulate concurrent traffic. 100 VUs executing a 1-second script would generate roughly 100 requests per second. VUs are lighter than real browser sessions — they don't render CSS/JS, just send HTTP requests.

### Q5: How do you identify a performance bottleneck?
**A:** Look for: response time increasing under load (database queries slow down), error rate spiking at a specific VU count (connection pool exhausted), p99 much higher than p50 (intermittent slowness), memory steadily increasing in soak tests (memory leak), specific endpoints with higher latency (N+1 query, no database index). Then correlate with server-side metrics (CPU, memory, DB query time).

---

## 📁 Files in This Folder

```
phase2/day19/
├── day19-guide.md  ← This file
├── load-test.ts    ← Your k6 test script (complete the TODOs)
└── results.md      ← Document your test execution results here
```
