# Recipe-Search

## Description
 This is a recipe search app that allows users to search for recipes by ingredient, keyword, or cuisine. The app uses the Food2Fork API to provide access to a large database of recipes.

## Libraries and Frameworks Used

- **HTML:** Used for structuring the content and layout of the web pages.

- **CSS:** Responsible for styling and visual presentation, ensuring an appealing user interface.

- **JavaScript:** Provides the interactivity and dynamic behavior of the application.

- **Food2Fork API:** Used to retrieve recipe information and details for display within the application.

## Features

- **Search for Recipes**
  - Users can search for recipes by ingredient, keyword, or cuisine.

- **View Recipe Details**
  - Detailed information about each recipe is available, including ingredients, instructions, and an image.

- **Save to Favorites**
  - Users can save their favorite recipes to a dedicated favorites list for easy access.

- **Share Recipes**
  - Share recipes with friends and family through various communication channels.

- **Easy Navigation**
  - A back button allows users to navigate back to the recipe search page for seamless exploration.

## Usage

- **Searching for Recipes:**
  - To search for a recipe, simply enter the ingredient or keyword into the search bar and press enter. The app will display a list of recipes that match your search query.

- **Viewing Recipe Details:**
  - To view recipe details, click on "Details" button. The app will display the recipe's ingredients, instructions, and image.

- **Navigating Back:**
  - To navigate back to the recipe search page, click on the "back to recipe search" button.
 
## Hosted Link
  https://ameya-shinde.github.io/Recipe-Search/

## Functionality Overview

### Back to Recipe Search
- This functionality utilizes the `history.go(-1)` method to allow users to easily navigate back to the previous page in their browser history. This ensures a seamless transition from the recipe details page back to the recipe search page.

### Recipe Details
- The Recipe Details functionality employs the `fetch()` API to retrieve detailed information from the Food2Fork API based on the unique recipe ID. This information is then presented to the user within a modal dialog box, which includes:
  - Recipe Title
  - Recipe Image
  - Recipe Ingredients
  - Recipe Instructions

### Additional JavaScript Functionality

- **Dynamic Search Results:**
  - The app dynamically updates search results as the user inputs their search query. This behavior is implemented using the `addEventListener()` method, which listens for the input event on the search bar.

- **Responsive Design:**
  - The app is designed to be responsive, ensuring a visually appealing and functional experience across various devices, including smartphones and tablets. This is accomplished through the use of CSS media queries.

## Screenshots
![Screenshot 2023-09-25 183247](https://github.com/Ameya-Shinde/Recipe-Search/assets/93002372/7964cb89-69a8-4c03-b138-7e0344de7e72)

![Screenshot 2023-09-25 183306](https://github.com/Ameya-Shinde/Recipe-Search/assets/93002372/856bd3f5-74e6-45a9-991b-b25996d878b2)

![Screenshot 2023-09-25 183416](https://github.com/Ameya-Shinde/Recipe-Search/assets/93002372/4326d25a-ee1d-4150-82b0-f9e47817d229)

![Screenshot 2023-09-25 183452](https://github.com/Ameya-Shinde/Recipe-Search/assets/93002372/f02b2570-f1ed-449b-8cef-25be25064fa0)

