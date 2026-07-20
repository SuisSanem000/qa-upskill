@login
Feature: User Login
  As a registered user
  I want to log in to the application
  So that I can access my secure account

  Background:
    Given I am on the login page at "https://the-internet.herokuapp.com/login"

  # TODO: Complete Scenario 1 - Successful Login
  Scenario: Successful login with valid credentials
    Given [ TODO: Set up precondition — what state is the user in? ]
    When  [ TODO: What action does the user take? ]
    And   [ TODO: What else does the user do? ]
    Then  [ TODO: What should happen? ]
    And   [ TODO: What else should the user see? ]

  # TODO: Complete Scenario 2 - Invalid Username
  Scenario: Login attempt with invalid username
    Given [ TODO ]
    When  [ TODO ]
    Then  [ TODO ]
    And   [ TODO: What error message appears? ]

  # TODO: Complete Scenario 3 - Invalid Password
  Scenario: Login attempt with invalid password
    Given [ TODO ]
    When  [ TODO ]
    Then  [ TODO ]

  # TODO: Complete Scenario 4 - Empty fields
  Scenario: Login attempt with empty credentials
    Given [ TODO ]
    When  [ TODO ]
    Then  [ TODO ]

  # TODO: Complete this Scenario Outline with multiple credential combinations
  @parametrized
  Scenario Outline: Login with various credential combinations
    Given I am on the login page
    When  I enter username "<username>" and password "<password>"
    Then  I should see the message "<expected_message>"

    Examples:
      | username   | password             | expected_message               |
      # TODO: Row 1 — valid credentials
      | [ TODO ]   | [ TODO ]             | [ TODO ]                       |
      # TODO: Row 2 — wrong username
      | [ TODO ]   | [ TODO ]             | [ TODO ]                       |
      # TODO: Row 3 — wrong password
      | [ TODO ]   | [ TODO ]             | [ TODO ]                       |
      # TODO: Row 4 — both empty
      | [ TODO ]   | [ TODO ]             | [ TODO ]                       |
