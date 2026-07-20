# Day 18 — Lighthouse & Core Web Vitals

> **Phase:** 2 — API, Backend & Performance
> **Duration:** 1 hour
> **Tool:** Chrome Lighthouse (built-in) + PageSpeed Insights
> **Deliverable:** `lighthouse-audit-results.md`

---

## 🎯 Learning Objectives

- Understand the Core Web Vitals metrics and their thresholds
- Run a Lighthouse audit from Chrome DevTools
- Interpret audit scores and know which findings to prioritize
- Connect web performance to user experience and SEO

---

## 📖 Concepts (15 min)

### What are Core Web Vitals?

Core Web Vitals are Google's set of user-experience metrics that measure real-world performance. They directly affect Google search rankings.

| Metric | Full Name | Measures | Good | Needs Improvement | Poor |
|--------|-----------|----------|------|-------------------|------|
| **LCP** | Largest Contentful Paint | Loading speed | ≤ 2.5s | 2.5–4.0s | > 4.0s |
| **FID** | First Input Delay | Interactivity | ≤ 100ms | 100–300ms | > 300ms |
| **CLS** | Cumulative Layout Shift | Visual stability | ≤ 0.1 | 0.1–0.25 | > 0.25 |
| **INP** | Interaction to Next Paint | Responsiveness | ≤ 200ms | 200–500ms | > 500ms |

### Additional Lighthouse Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| **FCP** | First Contentful Paint — first element visible | < 1.8s |
| **TTFB** | Time to First Byte — server response time | < 600ms |
| **TTI** | Time to Interactive — fully interactive | < 5s |
| **TBT** | Total Blocking Time — main thread blocked | < 200ms |
| **Speed Index** | How quickly content fills visually | < 3.4s |

### Lighthouse Audit Categories

| Category | What it checks |
|----------|---------------|
| **Performance** | Load speed, Core Web Vitals |
| **Accessibility** | WCAG compliance, screen reader support |
| **Best Practices** | HTTPS, no deprecated APIs, no console errors |
| **SEO** | Meta tags, robots.txt, structured data |
| **PWA** | Progressive Web App capabilities |

---

### How to Run Lighthouse

**Method 1: Chrome DevTools**
1. F12 → Lighthouse tab
2. Select categories (Performance, Accessibility, etc.)
3. Select device (Mobile or Desktop)
4. Click "Analyze page load"
5. Wait 30–60 seconds for results

**Method 2: PageSpeed Insights (online)**
- URL: https://pagespeed.web.dev/
- Enter any URL to get a public report
- Shows both Lab Data and Field Data (real user metrics)

**Method 3: CLI (for CI integration)**
```bash
npm install -g lighthouse
lighthouse https://the-internet.herokuapp.com --output json --output html
```

---

### What QA Does with Lighthouse Results

| Finding | QA Action |
|---------|-----------|
| Poor LCP score | File bug with render-blocking resources identified |
| High CLS | File bug with specific elements that shift (Lighthouse highlights them) |
| Low Accessibility score | File bugs for each a11y violation (alt text, contrast, ARIA) |
| Console errors | Investigate and file as bugs |
| No HTTPS | Security bug — critical |
| Missing meta tags | SEO bug |

---

## 🛠️ Task (40 min)

Run Lighthouse on 2 URLs and document findings:

1. **https://the-internet.herokuapp.com** — Your test app
2. **A site of your choice** (e.g., your company's website, or a popular site)

For each audit:
- Run Desktop AND Mobile
- Screenshot or note the scores
- Pick the top 3 opportunities/diagnostics
- Document in `lighthouse-audit-results.md`

---

## 🎤 Interview Prep (5 min)

### Q1: What are Core Web Vitals?
**A:** Core Web Vitals are Google's standardized metrics for measuring user experience quality on the web. LCP (Largest Contentful Paint) measures loading speed — the time to render the largest visible element. CLS (Cumulative Layout Shift) measures visual stability — how much content shifts unexpectedly during loading. INP (Interaction to Next Paint) measures responsiveness — how quickly the page responds to user interactions. They affect SEO rankings and directly correlate with user retention.

### Q2: What is the difference between lab data and field data in Lighthouse?
**A:** Lab data is collected in a controlled environment with fixed network conditions and device specs — it's reproducible but may not reflect real users' experience. Field data (also called real user monitoring/RUM) is collected from actual users' browsers and represents real-world performance across diverse devices and networks. Both are valuable — lab data for debugging, field data for understanding actual user impact.

### Q3: What does a CLS score of 0.3 mean and why is it bad?
**A:** CLS (Cumulative Layout Shift) measures how much elements on the page move unexpectedly. A score of 0.3 is "poor" (above the 0.25 threshold). It means elements are shifting significantly during page load, which causes users to accidentally click the wrong things (e.g., a button moves just as they're about to click it). Common causes: images without dimensions, dynamically injected content, web fonts loading late.

### Q4: How do you include Lighthouse in a CI/CD pipeline?
**A:** Use the Lighthouse CLI (`npm install -g lighthouse`), run it against a staging URL in your CI pipeline, output results as JSON, and fail the build if scores drop below thresholds (e.g., Performance < 80). Tools like `lighthouse-ci` (@lhci/cli) are specifically designed for CI integration and can compare results against a baseline.

### Q5: What accessibility issues does Lighthouse check for?
**A:** Images missing alt text, insufficient color contrast ratios, form inputs without labels, missing lang attribute on `<html>`, links with no discernible text, elements with duplicate IDs, missing ARIA attributes, keyboard navigation issues, and touch target sizes too small. Lighthouse uses the axe accessibility engine and covers WCAG 2.1 Level AA guidelines.

---

## 📁 Files in This Folder

```
phase2/day18/
├── day18-guide.md           ← This file
└── lighthouse-audit-results.md ← Your audit findings and analysis
```
