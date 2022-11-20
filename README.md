# `random_epigram`

# Contents

    1. Description

    2. Demo
    
    3. Run

    4. Directory structure/project

    5. Packages

    6. Style

    7. Test

    8. Preview of the project
    
# Description

This App prints a random epigram (like the `fortune` command-line tool, but on the web). Users can trigger loading another epigram and they can enable/disable automatic reloading. In addition, users can add their own epigrams.

Fortune is a simple program that displays random poignant, inspirational, silly or snide phrases from a database of quotations. The fortune command-line utility is part of the fortune-mod package.

In this project, the random-fortune package was used to generate random epigrams. User can save new epigram which will be saved in Localstorage and we have a random boolean constructor that detects whether the epigram should choose between package or localstorage.

# Demo

https://leylaazari.github.io/random_epigram


# Run

In the project directory, you can run:

#### npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

#### npx cypress open

- You can run:

    - component testing
    
    - E2E testing

# Directory structure/project

React doesn’t have opinions on how you put files into folders. there are a few common approaches popular in the ecosystem:

- Grouping by feature or routes
- Grouping by file type

**Colocation**: it is a good idea to keep files that often change together close to each other. This principle is called “Colocation”.

In this project I used **Group by feature or routes**. In this way all of file related a component (sass, test, …) is in the same folder.

# Packages

These packages are installed in this project:

- random-fortune

- sass

- react-router-dom

- react-hook-form

- bootstrap

- react-toastify

- cypress 11.0.0

# Style

2 type of styles were used in the project:

- **Bootstrap**
- **SASS**

# State management

I don't use state management in this project. I saved the related data of "Epigram" in LocalStorage.
but actually, this information should be send to the server and stored in database.

# Test

The Library used for testing is **Cypress**.

In this project, 2 types of tests were written:

- Component testing

- E2E testing

```diff
You can run them using the Cypress dashboard. (npx cypress open)
```
#### E2E tests:

![Optional Text](../main/src/assets/images/readme/1.JPG)

# Preview of the project

This project have 2 pages:

    - Home

    - About

## Desktop view

![Optional Text](../main/src/assets/images/readme/2.png)

