# Day 4 — Bug Reports (Completed)
# Target App: https://the-internet.herokuapp.com
# Session date: 2026-07-25

---

## BUG-001

**Title:** Error message on failed login explicitly reveals whether username or password was incorrect

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-001 |
| **Date Reported** | 2026-07-25 |
| **Reported By** | QA Learner |
| **Environment** | Browser: Chrome · OS: Windows 11 · Version: 115.0 |
| **URL** | https://the-internet.herokuapp.com/login |
| **Severity** | Medium |
| **Priority** | P2 |
| **Reproducibility** | Always |
| **Status** | New |

### Steps to Reproduce

1. Navigate to https://the-internet.herokuapp.com/login
2. Enter an invalid username (e.g., `invalidUser`) and any password.
3. Click "Login".
4. Observe the error message text.
5. Enter a valid username (`tomsmith`) and an invalid password (`wrongPass`).
6. Click "Login".
7. Observe the error message text.

### Expected Result

A generic error message such as "Invalid username or password" should be displayed for both cases. The system should not confirm whether a specific username exists in the system to prevent username enumeration attacks.

### Actual Result

The system displays specific error messages:
- When the username is wrong: "Your username is invalid!"
- When the password is wrong: "Your password is invalid!"

### Attachments

- `screenshot-username-error.png` (Showing "Your username is invalid!")
- `screenshot-password-error.png` (Showing "Your password is invalid!")

### Additional Notes

This is a security best practice violation. Although this is a deliberately vulnerable demo application, in a production environment, this allows malicious actors to script requests and verify which usernames exist in the database.

---

## BUG-002

**Title:** Submitting the File Upload form without selecting a file results in a 500 Internal Server Error

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-002 |
| **Date Reported** | 2026-07-25 |
| **Reported By** | QA Learner |
| **Environment** | Browser: Firefox · OS: Windows 11 · Version: 116.0 |
| **URL** | https://the-internet.herokuapp.com/upload |
| **Severity** | High |
| **Priority** | P2 |
| **Reproducibility** | Always |
| **Status** | New |

### Steps to Reproduce

1. Navigate to https://the-internet.herokuapp.com/upload
2. Ensure no file is selected in the "Choose a file" input.
3. Click the "Upload" button.

### Expected Result

Client-side validation should prevent form submission and display a message indicating that a file must be selected. If it reaches the server, the server should return a 400 Bad Request with a friendly error message.

### Actual Result

The application crashes and returns a raw 500 Internal Server Error page.

### Attachments

- `upload-500-error.png` (Screenshot showing the server error page)
- `network-log.har` (Network trace showing the 500 response from the server)

### Additional Notes

This indicates a lack of both client-side and server-side validation for empty payloads on the upload endpoint.

---

## BUG-003

**Title:** Checkbox state is not properly announced to screen readers (Missing aria-labels/roles)

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-003 |
| **Date Reported** | 2026-07-25 |
| **Reported By** | QA Learner |
| **Environment** | Browser: Edge · OS: Windows 11 · Version: 115.0 (with NVDA Screen Reader) |
| **URL** | https://the-internet.herokuapp.com/checkboxes |
| **Severity** | Low |
| **Priority** | P3 |
| **Reproducibility** | Always |
| **Status** | New |

### Steps to Reproduce

1. Navigate to https://the-internet.herokuapp.com/checkboxes
2. Inspect the DOM for the two checkbox inputs.
3. Alternatively, tab through the page using a screen reader.

### Expected Result

Checkboxes should have associated `<label>` elements connected via the `for` attribute, or `aria-label` tags, so that assistive technologies can announce what the checkboxes represent (e.g., "Checkbox 1", "Checkbox 2").

### Actual Result

The checkboxes are rendered as `<input type="checkbox">` followed by bare text nodes (e.g., ` checkbox 1`). There are no `<label>` elements or ARIA attributes associating the text with the inputs.

### Attachments

- `dom-inspector-checkboxes.png` (Screenshot showing the bare text nodes next to inputs)

### Additional Notes

While functionally working for mouse users, this is an accessibility (a11y) violation. Users relying on screen readers will just hear "Checkbox, unchecked" without knowing what it applies to.

---

## Bug Summary Table

| Bug ID | Title | Severity | Priority | Status |
|--------|-------|----------|----------|--------|
| BUG-001 | Error message on failed login explicitly reveals whether username or password was incorrect | Medium | P2 | New |
| BUG-002 | Submitting the File Upload form without selecting a file results in a 500 Internal Server Error | High | P2 | New |
| BUG-003 | Checkbox state is not properly announced to screen readers (Missing aria-labels/roles) | Low | P3 | New |

---

## Reflection

The hardest part of writing a bug report is striking the right balance between being highly detailed and being concise. It's tempting to write a story about what I did, but developers need exact, reproducible, atomic steps. 

Next time, I will ensure I capture network logs (HAR files) and console errors as a default practice, as those are often more valuable to a developer investigating a 500 error (like in BUG-002) than a screenshot of the error page. I also learned the crucial difference between severity and priority—a security information disclosure (BUG-001) might be a Medium severity because it doesn't crash the app, but a P1/P2 priority because it exposes the business to risk.
