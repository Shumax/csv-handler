### Instructions:

[](#take-home-test)Take Home Test
=================================

The purpose of this test is to evaluate your skills in Backend. You will be required to build a web application that allows users to load a CSV file with preformatted data and display the data as cards on the website. The application should also include a search bar that allows users to search for data within the loaded CSV file.

[](#application-requirements)App requirements

This API use only nodejs vannila then you will only need the engine from node installed on your computer.

*   **[Node v20.11.0](https://nodejs.org/en/)** 

[](#running-the-project)Running the project

*   Install the dependencies *npm install*.
*   Start the project with command *npm start* / *npm run start*.

[](#automated-tests)Autmoated tests

*   Run command *npm test*

[](#requirements)Requirements
-----------------------------

### [](#backend)Backend

*   An endpoint that allows the frontend to load the CSV file.
*   An endpoint that allows the frontend to search through the loaded CSV data.
*   The search endpoint should accept query parameters for search terms and filters, and should return the matching results.
*   Appropriate error handling for invalid search queries or other errors.

[](#instructions)Instructions
-----------------------------

### [](#general)General

*   You have **48 hours** to complete the test.
*   Your solution should include automated tests for both the frontend and backend components.
<!-- *   You should submit your solution as a PRIVATE GitHub repository and invite **[diego.tsuyoshi@shawandpartners.com](mailto:diego.tsuyoshi@shawandpartners.com)** and **[paulo.mesquita@shawandpartners.com](mailto:paulo.mesquita@shawandpartners.com)** as a collaborator. -->

### [](#backend-1)Backend

*   The backend should be implemented as a RESTful API using Node. (Try not to use an opinionated framework such as Adonis or Nest).
*   The backend must include the following endpoints:
    *   **\[POST /api/files\]** An endpoint that accepts a CSV file upload from the frontend and stores the data in a database or a data structure.
    *   **\[GET /api/users\]** Should include an endpoint that allows the frontend to search through the loaded CSV data.
*   The search endpoint should accept a **?q=** query parameter for search terms and should search through EVERY column of the CSV
*   The backend should include appropriate error handling for invalid requests or other errors.

### [](#csv-data-example)CSV Data Example

    name,city,country,favorite_sport
    John Doe,New York,USA,Basketball
    Jane Smith,London,UK,Football
    Mike Johnson,Paris,France,Tennis
    Karen Lee,Tokyo,Japan,Swimming
    Tom Brown,Sydney,Australia,Running
    Emma Wilson,Berlin,Germany,Basketball
    

[](#evaluation)Evaluation
-------------------------

We will evaluate your solution based on the following criteria:

*   Completion of all required features and functionality.
*   Quality and organization of code.
*   Quality of automated tests.
*   User-friendliness and responsiveness of the frontend.
*   Performance and efficiency of the backend.
