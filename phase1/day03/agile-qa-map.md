# Day 3 — Agile QA Map (Completed)
# Mapping QA activities to Scrum ceremonies and artifacts
# Session date: 2026-07-23

---

## Part 1 — QA Activities per Scrum Ceremony

### Sprint Planning

| QA Activity | Input | Output |
|---|---|---|
| Review user stories for testability | Backlog items | Testability feedback, flagged ambiguities |
| Write or refine acceptance criteria alongside the PO | User stories, wireframes | Acceptance criteria added to each story |
| Estimate testing effort and flag high-risk stories | Sprint candidate backlog | Testing effort estimates, risk flags |
| Identify test data and environment requirements | Acceptance criteria, architecture notes | Test data plan, environment checklist |

**QA Questions to ask during Sprint Planning:**

1. *"What is the expected behavior when a user submits the form with missing required fields — which field is validated first, and what is the exact error message wording?"*
2. *"Are there any third-party API dependencies in this story? If the API is unavailable, what should the UI show?"*
3. *"What are the performance expectations for this feature — is there an SLA or response time threshold we need to test against?"*
4. *"Which user roles or permission levels are affected by this story, and do we need separate test cases for each?"*
5. *"What is the rollback plan if this story introduces a regression? Is there a feature flag we can use to disable it quickly?"*

---

### Daily Standup — QA Focus

Sample QA standup update (mid-sprint, working on login feature testing):

```
Yesterday I:
  - Completed test cases TC_LOGIN_001 through TC_LOGIN_007 against the staging environment
  - Found and logged BUG-034: the "Forgot Password" link on the login page returns a 404 in staging
  - Reviewed the PR for the password-reset API endpoint and left 2 comments on edge case handling

Today I will:
  - Execute the remaining 3 login test cases (TC_LOGIN_008–TC_LOGIN_010)
  - Investigate whether BUG-034 is a staging config issue or a code issue with the dev team
  - Begin writing test cases for the session timeout story

Blockers:
  - The test user accounts in staging were wiped yesterday — I need the dev team to re-seed
    the test database before I can execute the logout tests (TC_LOGIN_010)
```

---

### Backlog Refinement (Grooming)

**QA's role:** Identify ambiguities, estimate testing effort, flag missing acceptance criteria, surface edge cases before development begins.

**Checklist for a "refinable" story (ready to bring into a sprint):**

- [x] The story has a clear, testable acceptance criterion written in Given/When/Then or bullet format
- [x] All edge cases and error states are described (not just the happy path)
- [x] Test data requirements are identified (e.g., "we need a locked account in the test environment")
- [x] Dependencies on other stories, APIs, or third-party services are documented
- [x] The scope is small enough to be completed and tested within a single sprint
- [x] Any UI changes have accompanying wireframes or design specs that QA has reviewed
- [x] Performance, security, or accessibility requirements are explicitly stated (or explicitly waived)

---

### Sprint Review

**QA's role in the Sprint Review:**

The Sprint Review is not a QA sign-off meeting — it is a demo to stakeholders. However, QA plays an active role:

1. **Evidence of quality:** QA presents a brief test summary — e.g., "We executed 23 test cases against the login feature. 22 passed. 1 bug was found (password field accepts empty spaces) and was fixed same-day."
2. **Metrics shared:** Pass rate, defects found vs. fixed, any deferred bugs and their severity, test coverage against acceptance criteria.
3. **Demonstrate edge cases:** If time allows, QA can demonstrate a negative test live — e.g., showing what happens when invalid credentials are entered — to build stakeholder confidence that the system handles errors gracefully.
4. **Flag deferred items:** If any acceptance criteria were descoped mid-sprint, QA explicitly names them so they appear in the next sprint's backlog.
5. **Support the demo:** QA ensures the demo environment has the correct test data prepared and that it isn't in a broken state before the review starts.

---

### Sprint Retrospective

**Common QA items raised in retros:**

1. *"Test environments were unstable — the staging server was down for 6 hours on Day 3 of the sprint, blocking all regression test execution."*
2. *"Stories were pulled into the sprint without acceptance criteria — QA had to write them mid-sprint, consuming time that should have been used for testing."*
3. *"Bug reports were closed by developers as 'cannot reproduce' without being verified by QA first. We need a process where QA confirms closure."*
4. *"We discovered a regression on Day 7 that was caused by a change on Day 2. We need automated regression tests in CI to catch these earlier."*

**Retro format (Start / Stop / Continue):**

| Category | QA Perspective |
|---|---|
| **Start doing** | Three Amigos sessions before every story is developed — we caught more bugs in planning this sprint than in testing |
| **Start doing** | Enforcing the Definition of Done checklist before marking any story complete |
| **Stop doing** | Allowing stories into the sprint without written acceptance criteria — it creates rework for everyone |
| **Stop doing** | Treating test environment issues as "someone else's problem" — QA should own environment readiness checks at sprint start |
| **Continue doing** | Daily communication between QA and devs — catching issues the same day they're introduced significantly reduces rework |
| **Continue doing** | Sharing test execution summaries in the Sprint Review — stakeholders now understand what "tested" actually means |

---

## Part 2 — Definition of Done (DoD)

> *"As a registered user, I want to log in with my email and password so that I can access my account."*

### Definition of Done — Login Feature

- [x] Code has been peer-reviewed by at least one other developer and all review comments are resolved
- [x] Developer unit tests are written and passing, with ≥ 80% line coverage on authentication logic
- [x] QA test cases (TC_LOGIN_001 through TC_LOGIN_010) have all been executed and passed in the staging environment
- [x] No open bugs of severity **Critical** or **High** — Medium/Low bugs are logged and accepted by the Product Owner
- [x] All acceptance criteria on the user story have been verified and signed off by QA
- [x] The feature is deployed to the staging environment and smoke-tested post-deployment
- [x] Accessibility check passed: form fields have associated `<label>` elements, error messages are announced to screen readers (ARIA), and the form is fully keyboard-navigable
- [x] The Product Owner has reviewed and approved the feature in the staging environment

---

## Part 3 — Acceptance Criteria

### Story 1: Login
> *"As a registered user, I want to log in so I can access my account."*

```gherkin
Scenario 1: Successful login with valid credentials
  Given I am a registered user with a valid account
  And I am on the login page at /login
  When I enter my correct username "tomsmith"
  And I enter my correct password "SuperSecretPassword!"
  And I click the "Login" button
  Then I should be redirected to the secure area at /secure
  And I should see a success message "You logged into a secure area!"
  And my session cookie should be set

Scenario 2: Login attempt with invalid credentials
  Given I am on the login page
  When I enter an incorrect username "wronguser"
  And I enter any password "anypassword"
  And I click the "Login" button
  Then I should remain on the login page at /login
  And I should see a red error flash message containing "Your username is invalid!"
  And no session cookie should be set

Scenario 3: Login attempt with empty fields
  Given I am on the login page
  When I leave the username field empty
  And I leave the password field empty
  And I click the "Login" button
  Then I should remain on the login page
  And I should see an error message indicating missing credentials
  And no session cookie should be set
```

---

### Story 2: Logout
> *"As a logged-in user, I want to log out so my session is securely terminated."*

```gherkin
Scenario 1: Successful logout
  Given I am logged in and on the secure area page at /secure
  When I click the "Logout" button
  Then I should be redirected to the login page at /login
  And I should see a success message "You logged out of the secure area!"
  And my session cookie should be invalidated

Scenario 2: Attempt to access secure area after logout
  Given I have just logged out
  When I navigate directly to /secure
  Then I should be redirected to the login page
  And I should not see any secure content
```

---

### Story 3: Session Timeout
> *"As a user, I want to be automatically logged out after 30 minutes of inactivity to protect my account."*

```gherkin
Scenario 1: Automatic session expiry after 30 minutes
  Given I am logged in and have been inactive for 30 minutes
  When I attempt to interact with any page in the secure area
  Then my session should be invalidated
  And I should be redirected to the login page
  And I should see a message "Your session has expired. Please log in again."

Scenario 2: Activity resets the inactivity timer
  Given I am logged in
  When I perform any action (click, form submit, navigation) before 30 minutes have elapsed
  Then my session timer should reset to 30 minutes
  And I should remain logged in
```

---

## Part 4 — Three Amigos Session Notes

Imagining I am the QA in a Three Amigos meeting for Story 1 (Login):

**QA Questions I would ask:**

1. *"What is the maximum number of failed login attempts before an account is locked? Is there an account lockout policy, and if so, how does the user unlock their account?"*
2. *"What is the exact wording of each error message? 'Invalid username' vs 'Username not found' vs 'Incorrect credentials' all reveal different information to potential attackers — which did we agree on?"*
3. *"Does the login form have CSRF protection? How are we preventing brute-force attacks — rate limiting, CAPTCHA, or both?"*
4. *"What happens if the authentication service is down? Does the user see a friendly error page or a raw 500?"*
5. *"Is the password field preventing copy-paste? Some security implementations do this — is that our intended behavior?"*
6. *"How should the login form behave on mobile — does the username field trigger an email keyboard layout, and is the login button reachable without scrolling on a 375px viewport?"*
7. *"Are we storing any PII (email/username) in browser local storage or session storage that could be accessed by XSS?"*

**Edge cases I identified:**

1. **Username with leading/trailing whitespace** — does `" tomsmith "` log in as `tomsmith`? Trimming should happen server-side; the app should not silently accept padded input.
2. **Concurrent login sessions** — what happens if the same user logs in from two browsers simultaneously? Are both sessions valid, or is the first one invalidated?
3. **Back button after logout** — if a user logs out and presses the browser Back button, can they see the secure page from the cache? (This is a very common security bug — pages should have `Cache-Control: no-store` headers.)
4. **Extremely long password input** — what happens when a user pastes a 10,000-character string into the password field? The field should have a `maxlength` and the server should enforce it to prevent a DoS via hash computation.
5. **Login with a disabled or deleted account** — is there a distinct error message, or is it the same generic "invalid credentials"? (Distinct messages can expose account existence.)

---

## Reflection

As a developer, I thought QA was primarily a phase at the end of delivery — "hand it over to QA" was the process. Today's session reframed that completely.

The most surprising insight was the **Three Amigos meeting**: the idea that QA should be generating questions *before a single line of code is written* — and that those questions (session handling, error messages, concurrent sessions) would never appear in the story as written by a Product Owner — changed how I think about when QA adds value.

As a developer, I would have started coding the happy path immediately. As a QA engineer, I now know to stop and ask "what does this look like when it breaks?" before the implementation decision is made. That's a fundamentally different mindset, and it's genuinely more valuable applied early than applied late.

The **Definition of Done** was also clarifying — I now understand it's not a QA checklist, it's a *team contract*. When a developer marks a story as done, they are asserting that every item on that list is true. QA owns verifying that assertion.
