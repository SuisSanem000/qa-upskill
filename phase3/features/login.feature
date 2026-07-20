@login
Feature: User Login
  As a registered user
  I want to log into the application
  So that I can access my secure account

  # This is the BDD feature file that gets automated on Day 25
  # Each step maps to a function in step-definitions/login.steps.js

  Background:
    Given I navigate to the login page

  Scenario: Successful login with valid credentials
    When I enter username "tomsmith" and password "SuperSecretPassword!"
    And I click the login button
    Then I should be redirected to the secure area
    And I should see a success message containing "You logged into a secure area"

  Scenario: Login fails with invalid username
    When I enter username "wronguser" and password "SuperSecretPassword!"
    And I click the login button
    Then I should remain on the login page
    And I should see an error message containing "Your username is invalid!"

  Scenario: Login fails with invalid password
    When I enter username "tomsmith" and password "wrongpassword"
    And I click the login button
    Then I should remain on the login page
    And I should see an error message containing "Your password is invalid!"

  Scenario: Login fails when both fields are empty
    When I click the login button
    Then I should remain on the login page
    And I should see an error message

  @parametrized
  Scenario Outline: Login with multiple credential combinations
    When I enter username "<username>" and password "<password>"
    And I click the login button
    Then I should see "<expected_result>"

    Examples:
      | username  | password             | expected_result                         |
      | tomsmith  | SuperSecretPassword! | You logged into a secure area           |
      | wronguser | anypassword          | Your username is invalid!               |
      | tomsmith  | wrongpassword        | Your password is invalid!               |
