Feature: swaglab project

  # The first example has two steps
  Scenario: placing an order
    Given login using with "standard_user" and "secret_sauce"
    When add a "Sauce Labs Backpack" to the cart
    Then verify the "Sauce Labs Backpack" is same as we added to the cart
    When enter the valid details "megha","s", "12345"
    Then verify the order is placed successfully 
