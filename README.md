# Cravings Satisfied: FRONTEND

## Overview

This project is a food combination generator that uses backtracking to generate combinations of food items within a specified budget. The user can select two categories from beverages, rice meals, and snacks, input a maximum budget, and the algorithm will generate possible combinations.

## Features

- The user can select two categories from beverages, rice meals, and snacks.
- The user can input a maximum budget for the combinations.
- The algorithm uses backtracking to generate combinations within the budget.
- Combinations are presented in a tabular form.
  
## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [How It Works](#how-it-works)
5. [Folder Structure](#folder-structure)
6. [Technologies Used](#technologies-used)
7. [Development](#development)
   1. [Project Setup and Version Control](#project-setup-and-version-control)
   2. [Front-End Development](#front-end-development)
   3. [Development Tools and Practices](#development-tools-and-practices)
8. [Pages](#pages)
   1. [Landing Page](#landing-page)
   2. [Selection Page](#selection-page)
      1. [Categories and Options](#categories-and-options)
         - [Beverages](#beverages)
         - [Rice Meals](#rice-meals)
         - [Snacks](#snacks)
   3. [Results Page](#results-page)
9. [Authors and Acknowledgement](#authors-and-acknowledgement)
10. [Contact](#contact)

## Installation 
### Prerequisites
- A web browser 
- [Git](https://git-scm.com/) installed on your local machine

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/cravings-satisfied-frontend.git
2. **Navigate to the Project Directory**:
   cd cravings-satisfied-frontend
3. **Open the Project in Your Preferred Text Editor**
4. **Open main.html in Your Web Browser**
  
## How It Works

1. **Landing Page**: 
   - The user starts on the landing page, which provides an overview of the food combination generator.

2. **Get Started**: 
   - Upon pressing "Get Started," the user proceeds to the selection page.

3. **Selection Page**: 
   - Here, the user:
     - Inputs the maximum budget for the combinations.
     - Chooses two main categories from a list (e.g., beverages, rice meals, snacks).

4. **Subcategories Selection**: 
   - After selecting main categories, the user may further refine their choices by selecting subcategories (e.g., types of beverages, specific meal options).

5. **Submission**: 
   - Once selections are made, the user submits their choices.

6. **Processing**: 
   - The application processes the user's selections, using backtracking algorithms to generate valid combinations within the specified budget.

7. **Results**: 
   - The generated combinations are displayed on the results page in a tabular format.

## Folder Structure
- project-root
  - assets
    - css
    - images
    - js
  - README.md
  - main.html
  - results.html
  - select.html

The assets directory contains subdirectories for CSS, images, and JavaScript files.

There are separate HTML files for different pages: 
- `main.html`: Main entry point or landing page of the application.
- `results.html`: Page displaying results or generated combinations.
- `select.html`: Page for user input and selection.

README.md is the Markdown file that serves as documentation for the project.

## Technologies Used

- **HTML**: Markup language used for structuring and presenting content on the web.
- **CSS**: Style sheet language used for describing the presentation of HTML elements.
- **JavaScript**: Programming language used for the dynamic behavior to web pages.
- **Bootstrap**: Front-end framework for designing mobile-responsive websites.
- **Google Fonts API**: Service provided by Google for easily embedding custom fonts on web pages.

## Development

### Project Setup and Version Control

- Created the initial project structure with empty files (`main.html`, `results.html`, `select.html`).
- Established version control using Git, initialized repository, and committed initial files.
- Implemented branching strategy for collaborative development.

### Front-End Development

- **HTML Layout with Bootstrap**:
  - Designed and implemented the HTML structure using Bootstrap for responsive and mobile-first design.

- **Styling with CSS**:
  - Applied CSS to enhance the visual appearance and layout of HTML components.

- **Dynamic Interactivity with JavaScript**:
  - Integrated JavaScript to enable dynamic responses and user interactions within the front-end application.

### Development Tools and Practices

- Used IDE Visual Studio Code for coding and development.
- Leveraged Bootstrap for rapid front-end development and responsiveness.

## Pages
This project is divided into three pages:

### Landing Page
- Overview and introduction to the food combination generator.
  <p align="center;">
<img src="assets/images/HOME_RMF" width="400" />
 </p>

### Selection Page
- Allows the user to input a maximum budget and select between categories.
<img src="assets/images/SELECT_RMF" width="400" />

#### Categories and Options
#### Beverages
- Coffee: cold, hot
- MilkTea: 
- Juice: Tea, Lemonade, Fruit
- Shakes: Fruit, Others
- Water

#### Rice Meals
- Pork: fried, steamed, soup
- Beef: fried, steamed, soup
- Chicken: fried, steamed, soup
- Vegetables: fried, steamed, soup

#### Snacks
- Streetfood
- Pasta: Noodles, Western Pasta, Pancit
- Bread: Sandwich, Sweets

### Results Page
- Displays the generated combinations of food items within the specified budget in a tabular form.

## Authors and Acknowledgement
- **Frontend**:
- **Backend**: 
- **Database**: 

### Contact
For any questions or suggestions contact the following:
<div style="display: flex; justify-content: space-between;">

- **General Inquiries**
  Edriana Joy Damaso
  - Email: info@gmail.com

- **Technical Support**
  Rica Joi Migueh
  - Email: support@gmail.com


- **Feedback and Suggestions**
  Phoebe Kate Sanao
  - Email: sphoebekate9@gmail.com
</div>

