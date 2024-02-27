Feature: Add item to cart

  @AddToCart
  Scenario: From the product page, user adds items to cart
    Given I am on the home page
    And I have no items in cart
    When I add an item to cart 3 times
    Then I should see 3 items in cart
