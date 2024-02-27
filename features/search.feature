Feature: Search a product

  Scenario Outline: Searching for <item>
    Given I am on the home page
    When I search for <item>
    And I press the search button
    Then I should only see results including the <item> keyword

    @Search
    Examples: 
      | item    |
      | Dress   |
      | Blouse  |
      | T-shirt |
