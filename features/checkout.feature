Feature: Checkout

  @Checkout
  Scenario: User isn't logged in and tries to checkout
    Given I am on the home page
    And I haven't logged in
    When I select "Women -> Tops -> T-shirts" menu item
    And I select the "In stock" filter
    And I choose the first product
    And I search for a size that is in stock
    And I add the item to cart
    And I go to cart by pressing "Proceed to checkout"
    And I press Proceed to checkout
    Then I am required to log in