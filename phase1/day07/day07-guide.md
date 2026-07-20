# Day 7 — BDD & Gherkin Syntax

> **Phase:** 1 — Manual QA
> **Duration:** 1 hour
> **Deliverables:** 5 completed Gherkin `.feature` files in the `features/` folder

---

## 🎯 Learning Objectives

- Understand BDD (Behavior Driven Development) and its purpose
- Write Gherkin scenarios using Given/When/Then
- Use Scenario Outlines and data tables for parameterized tests
- Understand how Gherkin connects to automation frameworks (Cucumber)

---

## 📖 Concepts (15 min)

### What is BDD?

**Behavior Driven Development (BDD)** is a software development approach where the behavior of a system is described in plain language that all stakeholders (dev, QA, business) can understand. It bridges the communication gap between technical and non-technical team members.

**The BDD Cycle:**
```
Business writes acceptance criteria in plain English
         ↓
QA/Dev translates them into Gherkin scenarios
         ↓
Developer writes step definitions that execute the scenarios
         ↓
Scenarios become living documentation
```

---

### Gherkin Syntax

Gherkin is the language used to write BDD scenarios. Files use `.feature` extension.

```gherkin
Feature: [Feature name]
  [Optional description]

  Background:
    Given [common precondition for all scenarios]

  Scenario: [Scenario name]
    Given [context / precondition]
    When  [action the user takes]
    Then  [expected outcome]
    And   [additional outcome]
    But   [exception or negative outcome]
```

---

### Keywords

| Keyword | Purpose |
|---------|---------|
| `Feature:` | Describes the feature being tested |
| `Scenario:` | One specific test scenario |
| `Given` | Precondition / system state |
| `When` | Action performed |
| `Then` | Expected outcome |
| `And` | Continuation of Given/When/Then |
| `But` | Negative continuation |
| `Background:` | Steps that run before every scenario |
| `Scenario Outline:` | Parameterized scenario with examples table |
| `Examples:` | Data table for Scenario Outline |
| `@tag` | Tag to group/filter scenarios |

---

### Scenario Outline (Parameterized)

```gherkin
Scenario Outline: Login with different credentials
  Given I am on the login page
  When I enter username "<username>" and password "<password>"
  Then I should see "<message>"

  Examples:
    | username   | password              | message                       |
    | tomsmith   | SuperSecretPassword!  | You logged into a secure area |
    | wronguser  | anypassword           | Your username is invalid!     |
    | tomsmith   | wrongpassword         | Your password is invalid!     |
```

---

### Good vs. Bad Gherkin

❌ **Bad (implementation-focused):**
```gherkin
When I click the button with id "submit-btn"
Then the div with class "alert-success" becomes visible
```

✅ **Good (behavior-focused):**
```gherkin
When I submit the login form
Then I should see a success message
```

---

## 🛠️ Task (40 min)

Complete the 5 feature files in the `features/` folder. Each file has placeholders for you to fill in.

---

## 🎤 Interview Prep (5 min)

### Q1: What is BDD and how does it differ from TDD?
**A:** BDD (Behavior Driven Development) focuses on defining the *behavior* of a system from the user's perspective using plain language that all stakeholders understand. TDD (Test Driven Development) focuses on writing unit tests in code before writing the implementation. BDD operates at the feature/acceptance level; TDD at the unit level. BDD is more about communication and shared understanding; TDD is a development technique.

### Q2: What is Gherkin?
**A:** Gherkin is a domain-specific language used to write BDD scenarios in a human-readable format. It uses keywords like Feature, Scenario, Given, When, Then, And, But to structure test scenarios. Files use the `.feature` extension and can be executed by frameworks like Cucumber.

### Q3: What is a Feature file?
**A:** A `.feature` file is a plain-text document written in Gherkin that describes one or more scenarios for a specific feature. It serves as both a specification and a living test document. Developers implement "step definitions" that map each Gherkin step to executable code.

### Q4: What is the difference between a Scenario and a Scenario Outline?
**A:** A Scenario tests one specific case with hardcoded values. A Scenario Outline is parameterized — it uses placeholder variables and an Examples table to run the same scenario with multiple sets of data, reducing duplication.

### Q5: What makes a good Gherkin scenario?
**A:** It should be: written in the user's language (not technical), focused on behavior not implementation, using one action per `When` step, starting `Given` with the system in a known state, and readable by a non-technical business person without explanation.

---

## 📁 Files in This Folder

```
phase1/day07/
├── day07-guide.md
└── features/
    ├── login.feature          ← Scenario 1 & 2: login flows
    ├── logout.feature         ← Scenario 3: logout
    ├── navigation.feature     ← Scenario 4: page navigation
    └── file-upload.feature    ← Scenario 5: file upload
```
