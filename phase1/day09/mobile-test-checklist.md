# Day 9 — Mobile Test Checklist
# Tested via Chrome DevTools Device Emulation + Network Throttling

> **Setup:** F12 → Toggle Device Toolbar (Ctrl+Shift+M) → Select device
> **Target:** https://the-internet.herokuapp.com

---

## Test Environment

| Field | Value |
|-------|-------|
| **Date** | `[ TODO ]` |
| **Browser** | `[ TODO ]` |
| **DevTools Version** | `[ TODO ]` |
| **Tester** | `[ Your Name ]` |

---

## Section A — Mobile Viewport (375px — iPhone 14)

| # | Test | Result | Notes |
|---|------|--------|-------|
| M01 | Page loads on mobile viewport | `[ Pass/Fail ]` | |
| M02 | Login form is fully visible without scrolling | `[ Pass/Fail ]` | |
| M03 | Username field is tappable | `[ Pass/Fail ]` | |
| M04 | Virtual keyboard appears when field is focused | `[ Pass/Fail ]` | |
| M05 | Login button tap target is ≥ 44px | `[ Pass/Fail ]` | |
| M06 | Login succeeds on mobile viewport | `[ Pass/Fail ]` | |
| M07 | Error message is readable on mobile | `[ Pass/Fail ]` | |
| M08 | Flash message does not overflow screen | `[ Pass/Fail ]` | |

---

## Section B — Landscape Orientation (667px — iPhone 14 Landscape)

| # | Test | Result | Notes |
|---|------|--------|-------|
| M09 | Page reflows correctly in landscape | `[ Pass/Fail ]` | |
| M10 | Login form is usable in landscape | `[ Pass/Fail ]` | |
| M11 | No content is cut off or hidden | `[ Pass/Fail ]` | |

---

## Section C — Network Throttling Tests

> DevTools → Network → Select throttle profile

| # | Network Condition | Feature Tested | Result | Notes |
|---|------------------|----------------|--------|-------|
| M12 | Slow 3G (400 Kbps) | Login page load time | `[ Pass/Fail ]` | Time: `[ ]` sec |
| M13 | Slow 3G (400 Kbps) | Login success | `[ Pass/Fail ]` | Time: `[ ]` sec |
| M14 | Offline | Navigate to login page | `[ Pass/Fail ]` | Error shown: `[ ]` |
| M15 | Offline | Submit login form | `[ Pass/Fail ]` | Error shown: `[ ]` |
| M16 | 4G (20 Mbps) | Baseline load time | `[ Pass/Fail ]` | Time: `[ ]` sec |

---

## Section D — Touch Target Analysis

Inspect each interactive element and measure tap target size using DevTools.

| Element | Measured Size | Meets 44×44dp? | Notes |
|---------|--------------|----------------|-------|
| Username field | `[ TODO ]` | `[ Y/N ]` | |
| Password field | `[ TODO ]` | `[ Y/N ]` | |
| Login button | `[ TODO ]` | `[ Y/N ]` | |
| Flash message × close | `[ TODO ]` | `[ Y/N ]` | |

---

## Issues Found

| Issue # | Section | Description | Severity |
|---------|---------|-------------|----------|
| 1 | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |

---

## Summary

```
[ TODO: Which section had the most issues? How does this app perform 
on mobile compared to desktop? What would you fix first if you were 
filing these as bugs? ]
```
