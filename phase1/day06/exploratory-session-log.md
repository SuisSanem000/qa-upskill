# Day 6 — Exploratory Session Log
# Session-Based Test Management (SBTM) Format

> **Instructions:** Fill this in LIVE during your session. Set a 30-minute timer before starting.
> Write notes as you explore — raw, unpolished observations are perfect.

---

## Session Header

| Field | Value |
|-------|-------|
| **Session ID** | ES-001 |
| **Charter** | Explore form and input handling features (dropdown, checkboxes, dynamic loading, upload, key presses) to discover validation gaps and UX inconsistencies |
| **Tester** | `[ Your Name ]` |
| **Date** | `[ TODO ]` |
| **Start Time** | `[ TODO ]` |
| **End Time** | `[ TODO ]` |
| **Duration** | `[ TODO ] minutes` |
| **Environment** | Browser: `[ TODO ]` · OS: `[ TODO ]` |
| **Target URL** | https://the-internet.herokuapp.com |

---

## Pre-Session Setup

What did you prepare before starting?

```
[ TODO: List any accounts, data, or tools you set up. Example:
- Opened Chrome DevTools
- Navigated to the home page
- Had notepad ready for notes
]
```

---

## Live Notes (fill in real-time during your 30-minute session)

### Areas Explored

> Use this section like a journal. Write timestamps and observations as you go.

```
[00:00] Started at /checkboxes
[ TODO: What did you observe? Any unexpected behavior? ]

[00:05] Moved to /dropdown
[ TODO: What did you observe? ]

[00:10] Explored /upload
[ TODO: What file types did you try? What happened? ]

[00:15] Tried /dynamic_loading/1 and /dynamic_loading/2
[ TODO: What did the loader do? Any timing issues? ]

[00:20] Tested /key_presses
[ TODO: Which keys produced unexpected results? ]

[00:25] [ TODO: Free exploration — what else did you find? ]

[00:30] Session ended
```

---

## Bugs Found

| Bug # | Area | Description | Severity |
|-------|------|-------------|----------|
| 1 | `[ TODO ]` | `[ TODO: Short description ]` | `[ TODO ]` |
| 2 | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |
| 3 | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |

*(If no bugs found, explain what you expected to find and why it was a clean result)*

---

## Questions & Future Investigations

Things you noticed that need more investigation:

```
[ TODO: List 3-5 things you want to explore further. Example:
- What happens if I upload a 100MB file?
- Does the dropdown reset after navigating back?
- Is there a timeout on the dynamic loading? ]

1. 
2. 
3. 
4. 
5. 
```

---

## Coverage Map

Which areas of the site did you explore? Mark: ✅ Explored | 🔲 Not reached | ⚠️ Partially explored

| Page | Status | Notes |
|------|--------|-------|
| `/checkboxes` | `[ ✅ / 🔲 / ⚠️ ]` | `[ TODO ]` |
| `/dropdown` | `[ ✅ / 🔲 / ⚠️ ]` | `[ TODO ]` |
| `/upload` | `[ ✅ / 🔲 / ⚠️ ]` | `[ TODO ]` |
| `/dynamic_loading/1` | `[ ✅ / 🔲 / ⚠️ ]` | `[ TODO ]` |
| `/dynamic_loading/2` | `[ ✅ / 🔲 / ⚠️ ]` | `[ TODO ]` |
| `/key_presses` | `[ ✅ / 🔲 / ⚠️ ]` | `[ TODO ]` |
| Other: `[ TODO ]` | `[ ✅ / 🔲 / ⚠️ ]` | `[ TODO ]` |

---

## Session Debrief

### What went well?
```
[ TODO ]
```

### What was missed / what would I do next?
```
[ TODO ]
```

### Which heuristic was most useful?
```
[ TODO: CRUD? Goldilocks? The Idiot? Explain why. ]
```

### Time breakdown
| Activity | % of session |
|----------|-------------|
| On-charter exploration | `[ TODO ]%` |
| Off-charter (following a thread) | `[ TODO ]%` |
| Bug documentation | `[ TODO ]%` |

---

## Reflection

```
[ TODO: How is exploratory testing different from what you expected? 
What surprised you about this approach compared to scripted testing? ]
```
