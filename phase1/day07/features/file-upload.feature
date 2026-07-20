@file-upload
Feature: File Upload
  As a user
  I want to upload a file
  So that I can submit documents to the system

  # TODO: Complete Scenario 1 — Successful upload
  Scenario: Successfully upload a valid file
    Given [ TODO ]
    When  [ TODO ]
    And   [ TODO ]
    Then  [ TODO: What confirmation does the user see? ]

  # TODO: Complete Scenario 2 — No file selected
  Scenario: Attempt to upload without selecting a file
    Given [ TODO ]
    When  [ TODO ]
    Then  [ TODO ]

  # TODO: Add a Scenario Outline for different file types
  Scenario Outline: Upload files of different types
    Given I am on the file upload page
    When  I select a file of type "<file_type>"
    And   I click the upload button
    Then  [ TODO: What should happen for each type? ]

    Examples:
      | file_type | expected_result |
      # TODO: Fill in at least 3 file types and expected results
      | [ TODO ]  | [ TODO ]        |
      | [ TODO ]  | [ TODO ]        |
      | [ TODO ]  | [ TODO ]        |
