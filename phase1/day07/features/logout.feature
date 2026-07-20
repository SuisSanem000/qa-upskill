@logout
Feature: User Logout
  As a logged-in user
  I want to log out of the application
  So that my session is securely terminated

  Background:
    Given I am logged in as "tomsmith" with password "SuperSecretPassword!"
    And   I am on the secure area page

  # TODO: Complete Scenario 1 — Standard logout
  Scenario: Successful logout
    When  [ TODO: What action triggers logout? ]
    Then  [ TODO: Where is the user redirected? ]
    And   [ TODO: What message confirms logout? ]

  # TODO: Complete Scenario 2 — Accessing secure page after logout
  Scenario: Cannot access secure area after logout
    When  [ TODO: User logs out ]
    And   [ TODO: User tries to navigate back to /secure ]
    Then  [ TODO: What should happen? Are they blocked? Redirected? ]
