# Day 6 — Exploratory Testing & Session-Based Testing

> **Phase:** 1 — Manual QA
> **Duration:** 1 hour
> **Target App:** https://the-internet.herokuapp.com
> **Deliverable:** One completed exploratory test session log in `exploratory-session-log.md`

---

## 🎯 Learning Objectives

- Understand exploratory testing and when to use it
- Run a structured exploratory session using a charter
- Document findings in a Session-Based Test Management (SBTM) format
- Know how exploratory testing differs from scripted testing

---

## 📖 Concepts (15 min)

### What is Exploratory Testing?

Exploratory testing is a **simultaneous** approach where the tester designs tests, executes them, and learns about the application — all at the same time. It's the opposite of scripted testing.

> *"Exploratory testing is the practice of test design and test execution at the same time."* — Cem Kaner

**Not the same as ad hoc testing!**
- **Ad hoc:** Random, unstructured, no documentation
- **Exploratory:** Guided by a charter, documented, intentional

---

### The Exploration Charter

A charter defines the **mission** of a session without scripting every step.

**Format:**
```
Explore [target/area]
With [resources/tools]
To discover [information/goals]
```

**Example:**
```
Explore the file upload functionality (/upload)
With invalid file types (exe, pdf, 0-byte files, very large files)
To discover what validation exists and whether it can be bypassed
```

---

### Session-Based Test Management (SBTM)

SBTM is a method for making exploratory testing accountable and measurable. Each session has:

| Element | Description |
|---------|-------------|
| **Charter** | The mission — what are we exploring? |
| **Duration** | Time-boxed (usually 30–90 min) |
| **Data/Setup** | What you prepared before starting |
| **Notes** | Real-time observations during exploration |
| **Bugs** | Defects found |
| **Questions** | Things you want to investigate further |
| **Debrief** | Summary after the session |

---

### Exploratory Testing Heuristics

Use these mental models to guide your exploration:

| Heuristic | Description |
|-----------|-------------|
| **CRUD** | Create, Read, Update, Delete every entity |
| **SFDIPOT** | Structure, Function, Data, Interfaces, Platform, Operations, Time |
| **FEW HICCUPS** | Familiar, Explore, Weird, History, Intuition, Complexity, Claims, User, Product |
| **Goldilocks** | Too big, too small, just right — test boundary extremes |
| **The Idiot** | What happens if someone does something stupid? |

---

### When to Use Exploratory Testing

✅ New features not yet fully specified  
✅ When scripted tests pass but you're not confident  
✅ Time-boxed testing when you have few test cases  
✅ High-risk areas requiring creative thinking  
✅ Usability and UX issues  

---

## 🛠️ Task (40 min)

Run a **30-minute timed exploratory session** on https://the-internet.herokuapp.com.

**Your Charter:**
```
Explore the form and input handling features
(dropdown, checkboxes, dynamic loading, upload, and key presses)
With different browsers, edge case inputs, and unexpected interactions
To discover validation gaps, UX inconsistencies, and unexpected behaviors
```

Use `exploratory-session-log.md` to record your session in real time.

---

## 🎤 Interview Prep (5 min)

### Q1: What is exploratory testing and how does it differ from scripted testing?
**A:** Exploratory testing is a simultaneous learning, design, and execution approach where the tester designs tests as they explore the application. Scripted testing uses pre-written test cases with fixed steps. Exploratory testing is better for finding unexpected bugs and UX issues; scripted testing is better for regression coverage and repeatability.

### Q2: What is a test charter?
**A:** A charter is a short mission statement that guides an exploratory session: "Explore [area] with [resources] to discover [information]." It provides structure and accountability without being a rigid script. It defines scope and goals without prescribing exact steps.

### Q3: How do you make exploratory testing measurable?
**A:** Through Session-Based Test Management (SBTM): time-boxing sessions, using charters, logging notes and bugs in real time, and holding debrief meetings. Metrics include: bugs found per session, coverage areas explored, and time on charter vs. off-charter.

### Q4: What are test heuristics?
**A:** Heuristics are mental shortcuts or rules of thumb that guide testing. Examples include CRUD (test every create/read/update/delete operation), Goldilocks (test too small/too large/just right), and SFDIPOT (check Structure, Function, Data, Interfaces, Platform, Operations, Time). They help testers systematically explore without missing major areas.

### Q5: When is exploratory testing NOT appropriate?
**A:** When you need to demonstrate compliance to a standard (scripted tests with documented results are required), when testing safety-critical systems where every case must be documented before execution, or when you need to measure regression coverage of specific requirements. Also not appropriate as the *only* testing strategy.

---

## 📁 Files in This Folder

```
phase1/day06/
├── day06-guide.md              ← This file
└── exploratory-session-log.md  ← Your task: document your live session
```
