Feature: Remove items from cart

  @RemoveFromCart
  Scenario: From the cart page, remove items from cart
    Given I am on the home page
    And I have no items in cart
    When I add an item to cart 1 times
    And I go to cart by pressing "Cart icon"
    And I remove the item from cart
    Then The cart is empty

