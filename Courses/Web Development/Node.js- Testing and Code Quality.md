---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: node-js-testing-and-code-quality-14003857
url: "https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857"
duration_minutes: 261
duration: 4h 21m
level: Intermediate
updated: 6/7/2021
learners: 57292
skills:
  - Node.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFbnU_pGsqnsQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1622761357976?e=2147483647&amp;v=beta&amp;t=Q9sdZvorjgGXIs4l5Jnb1jCB3sdexSRe4A8KdUZVWes"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore Web Development with Node.js]]'
  - '[[Advance your Node.js Skills]]'
  - '[[Explore App Development with the MERN Stack]]'
prev_courses:
  - '[[Learning npm- A Package Manager]]'
  - '[[Node.js- Design Patterns]]'
  - '[[Express Essentials- Build Powerful Web Apps with Node.js]]'
next_courses:
  - '[[Databases for Node.js Developers]]'
  - '[[Node.js- Debugging and Performance Tuning]]'
  - '[[Building a Website with Node.js and Express.js]]'
path_nav: '[{"path":"Explore Web Development with Node.js","position":3,"total":11,"prev":"Learning npm- A Package Manager","next":"Databases for Node.js Developers"},{"path":"Advance your Node.js Skills","position":3,"total":8,"prev":"Node.js- Design Patterns","next":"Node.js- Debugging and Performance Tuning"},{"path":"Explore App Development with the MERN Stack","position":6,"total":13,"prev":"Express Essentials- Build Powerful Web Apps with Node.js","next":"Building a Website with Node.js and Express.js"}]'
path_count: 3
tags:
  - course
  - topic/web-development
  - topic/database-management
  - topic/software-development
  - skill/node-js
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Node.js-%20Testing%20and%20Code%20Quality.md)

![Node.js: Testing and Code Quality](https://media.licdn.com/dms/image/v2/C560DAQFbnU_pGsqnsQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1622761357976?e=2147483647&amp;v=beta&amp;t=Q9sdZvorjgGXIs4l5Jnb1jCB3sdexSRe4A8KdUZVWes)

# Node.js: Testing and Code Quality

> Most software engineers would agree that clean code is easier to maintain than messy code, but what exactly does that look like, and how do go about cleaning up messy code? In this course, Jon Peck shows how to measure quality, implement testing, and measure code coverage in your Node.js apps, using a complete but buggy restaurant booking application to illustrate the concepts. Jon first reviews J

> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857) | 4h 21m | Intermediate | 57K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - Cleaning your codebase
  - What you should know
  - Preparing for Node.js development
  - Exercise files
  - Demo setup and tour
- [**1. Testing and Code Quality Fundamentals**](#1-testing-and-code-quality-fundamentals) (9 videos)
  - What is code quality?
  - Coding conventions and standards
  - Creating and enforcing coding standards
  - Unit, integration, and functional testing
  - Testing frameworks
  - TDD and BDD test specifications
  - Assertions for correctness
  - Challenge: Organize your tests
  - Solution: Organize your tests
- [**2. Finding Errors with Linting**](#2-finding-errors-with-linting) (10 videos)
  - Standardizing with EditorConfig
  - Adding EditorConfig to a project and IDE
  - Comparing JavaScript linters
  - Installing ESLint
  - Configuring ESLint
  - Extending an ESLint shareable config
  - Linting your codebase
  - Fixing code in VSC with ESLint
  - Challenge: Create a shareable ESLint config
  - Solution: Create a shareable ESLint config
- [**3. Validate Correctness with Unit Testing**](#3-validate-correctness-with-unit-testing) (10 videos)
  - Survey of Node.js testing frameworks
  - Install Jest in a Node.js project
  - What and where to unit test?
  - Writing your first Jest unit test
  - Running a test suite with Jest
  - Testing asynchronous callbacks with Jest
  - Writing callback test suites with Jest
  - Testing promises with Jest
  - Challenge: Test async/await with Jest
  - Solution: Test async/await with Jest
- [**4. Replacing and Inspecting Using Spies, Stubs, and Mocks**](#4-replacing-and-inspecting-using-spies-stubs-and-mocks) (8 videos)
  - Replacing code with test doubles
  - Mocking functions for test code
  - Writing your first Jest mock
  - Mock an entire module with Jest
  - Mocking module dependencies
  - Spying to observe interactions
  - Challenge: Mock a successful reservation creation
  - Solution: Mock a successful reservation creation
- [**5. Reporting on Your Entire Codebase**](#5-reporting-on-your-entire-codebase) (9 videos)
  - Why code coverage matters
  - Measuring code coverage with Jest
  - Functional testing with Jest
  - Test doubles and Express apps
  - Form submissions with SuperTest
  - Fallacies of 100% test coverage
  - Coverage with continuous integration
  - Challenge: Isolate routes for faster tests
  - Solution: Isolate routes for faster tests
- [**Conclusion**](#conclusion) (2 videos)
  - Testing and code quality goals
  - Where to go from here?

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Cleaning your codebase
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/cleaning-your-codebase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/cleaning-your-codebase?u=76281980&t=0)** - [John] Software engineers agree that good clean code is easiest to maintain, but what is quality code?
>
> **[0:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/cleaning-your-codebase?u=76281980&t=8)** Do you know it when you see it?
>
> **[0:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/cleaning-your-codebase?u=76281980&t=10)** In this course, we'll clean up a complete, but buggy, restaurant booking application.
>
> **[0:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/cleaning-your-codebase?u=76281980&t=15)** We'll start with fundamental testing and code quality concepts, explore how to use linters to look for suspicious code, compare expected program output with actual using unit testing, isolate your code for testing using test doubles, then verify with spies and mocks.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/cleaning-your-codebase?u=76281980&t=33)** Finally, generate reports on code health across your entire codebase.
>
> **[0:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/cleaning-your-codebase?u=76281980&t=38)** I'm John Peck and I've been building large-scale web applications for more than a decade.
>
> **[0:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/cleaning-your-codebase?u=76281980&t=44)** I'm passionate about writing code that can grow with your project.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/cleaning-your-codebase?u=76281980&t=47)** So, let's get started.
>
> **[0:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/cleaning-your-codebase?u=76281980&t=49)** Welcome to "Node.js: Testing and Code Quality."

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Speakers:** - [john] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=0)** - [Instructor] Here's what you should know before you start watching this course.
>
> **[0:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=3)** This is a Node.js and software engineering course.
>
> **[0:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=7)** It's intended for developers who have practical experience writing Node.js applications.
>
> **[0:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=12)** If you're new to Node.js, I recommend Node.js Essential Training with Alex Banks here in the Online Training Library.
>
> **[0:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=21)** This course was written using the Node.js Long-Term Support version, which at this time of writing is version 14.
>
> **[0:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=28)** The content should be forwards compatible with newer versions of Node.js.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=33)** I will use the ECMAScript 2020 standard throughout this course and will be focusing on functionality commonly found in ES6 and beyond.
>
> **[0:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=41)** If you're not familiar with ES6 or you'd like a refresher, check out Learning ECMAScript 6 and onward with Eve Porcello here in the Online Training Library.
>
> **[0:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=52)** To focus the course on testing and code quality, we'll start with an existing, fully functional Node.js application.
>
> **[0:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=59)** This will give you the experience of working on a project that someone else started.
>
> **[1:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=63)** And trust me, there's a lot that still needs to be done.
>
> **[1:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=67)** The app includes a form to request a restaurant reservation.
>
> **[1:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=71)** The reservation booking requests will be stored for review.
>
> **[1:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=75)** Finally, there's a simple administrator view of all submitted reservations.
>
> **[1:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=80)** The application uses Express.js, a minimalist Node.js framework.
>
> **[1:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=85)** If you haven't used Express before, or need a refresher, check out [[Building a Website with Node.js and Express.js]] with Daniel Kahn here in the Online Training Library.
>
> **[1:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=96)** The reservations themselves will be stored in SQLite, a self-contained embedded database engine.
>
> **[1:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=103)** I'm going to use the SQL query builder Knex for a flexible promise-based interface and for database migrations.
>
> **[1:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?u=76281980&t=110)** No prior experience with SQLite or Knex is necessary and you won't need to install a separate service to use it.

> [!info]- Semantic Content
>
> **File Paths:** node.js (9), express.js (2)
> **CLI Commands:** node (9)
> **Code Keywords:** finally, (1), self (1), interface (1)
> **Env Vars:** es6 (2), sql (1)
> **Versions:** version 14 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Preparing for Node.js development
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=0)** - [Instructor] Let's make sure that your development environment has everything you need to follow along.
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=5)** You will need to have some sort of IDE or text editor.
>
> **[0:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=9)** I will be demonstrating using Visual Studio Code, available from code.[visualstudio.com](https://visualstudio.com).
>
> **[0:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=15)** VS Code is free, open source and cross-platform, which makes it ideal for demonstrations.
>
> **[0:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=22)** The use of VS Code is not required, but you'll be able to follow along with the feature demonstrations if you have it.
>
> **[0:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=29)** If you'd like to learn more, check out Visual Studio Code for web developers with Joe Marini here in the online training library.
>
> **[0:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=39)** Throughout this course, there are two keyboard shortcuts in VS Code that will be useful to know, because honestly, it's faster than using the menu all the time.
>
> **[0:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=48)** The first is save to Save changes to a file.
>
> **[0:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=52)** On Windows and Linux, the combination is control and S.
>
> **[0:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=57)** On a Mac, the combination is command and S.
>
> **[1:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=61)** Remember to save often.
>
> **[1:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=64)** The second shortcut is to toggle the integrated terminal.
>
> **[1:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=68)** The combination is the same across all platforms, control and backtick, which on a US keyboard, is the same key as ~.
>
> **[1:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=77)** Let's test out the terminal.
>
> **[1:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=80)** Open Visual Studio Code, toggle the terminal by using the shortcut control and ~.
>
> **[1:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=87)** This should open the terminal.
>
> **[1:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=89)** I'm going to verify that node is installed and show the version number.
>
> **[1:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=93)** Type the command, node space dash V and press enter.
>
> **[1:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=99)** I'm using 14.16.0, the long-term support version that was current during recording.
>
> **[1:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=107)** Let's check to see if NPM is available as well; type the command, NPM space dash V and press enter.
>
> **[1:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=117)** I'm using 6.14.11, which is the version that was included with the long-term support version of node.
>
> **[2:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=124)** When you're done, type control and ~ to toggle the terminal.
>
> **[2:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/preparing-for-node-js-development?u=76281980&t=129)** Great, that's all we need for editing our code.

> [!info]- Semantic Content
>
> **Tools:** terminal (5), visual studio (3), vs code (3)
> **CLI Commands:** node (3), npm (2), make (1)
> **UI Navigation:** toggle (3), open the (1)
> **Code Keywords:** let (3)
> **Env Vars:** npm (2), ide (1)
> **Versions:** 14.16.0 (1), 6.14.11 (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Best Practices:** remember to (1)

#### Exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=0)** - [Presenter] If you have access to the exercise files for this course, you can download them to your desktop.
>
> **[0:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=6)** We'll start with a complete, but problematic no jazz restaurant reservation system.
>
> **[0:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=11)** Throughout, we'll make incremental changes to clean up and fix the application.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=16)** The exercise file structure will reflect the course progress.
>
> **[0:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=20)** There're three folders.
>
> **[0:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=21)** The first folder's called Nadia, which contains the Nadia's Restaurant application itself.
>
> **[0:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=27)** We'll set that up in the next video.
>
> **[0:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=29)** The second folder is progress, which contains code snapshots of the application throughout the course.
>
> **[0:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=35)** Progress is organized into sub-folders by chapter and video.
>
> **[0:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=39)** For example, the result of chapter 2, video 1 will be in a folder named 02_01.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=47)** Each progress folder has two sub-folders, begin and end, which contain the respect of begin and end state to the code base.
>
> **[0:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=56)** The last folder, solutions, contains only the files that are changed in the particular video.
>
> **[1:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=62)** It will be organized into sub-folders by chapter and video.
>
> **[1:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=67)** If you're viewing this course on a mobile device, a set-top device or your membership doesn't provide access to the exercise files, don't worry.
>
> **[1:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=75)** The exercise files are a convenient and recommended way to learn, but they are not a requirement.
>
> **[1:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/exercise-files?u=76281980&t=81)** Please, continue to follow along.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (3), exercise file (1)
> **CLI Commands:** make (1)
> **Code Keywords:** continue (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [presenter] (1)

#### Demo setup and tour
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=0)** - As this course is about code improvement, a complete application has been included as a starting point.
>
> **[0:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=7)** Let's get it installed and take a tour of what it has to offer.
>
> **[0:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=11)** Switch over to VS Code.
>
> **[0:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=13)** The first thing we'll do is set up our workspace, under start click open folder, and I'm going to navigate to the desktop, which is where I've put my exercise files.
>
> **[0:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=25)** Select the Nadia folder, and then click select folder.
>
> **[0:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=29)** If prompted, save the workspace.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=33)** Now that the workspace has been set up, let's take a quick tour of the code.
>
> **[0:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=38)** The bin folder contains just one file, www.js.
>
> **[0:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=43)** It's a standard express entry point that configures an HTTP server and then executes the app.
>
> **[0:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=50)** We're not going to be making any changes here.
>
> **[0:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=54)** The lib folder contains our custom code.
>
> **[0:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=57)** The middleware folder contains auth.js, which just configures a basic auth middleware.
>
> **[1:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=65)** The schema folder contains a custom class that defines the structure of a reservation.
>
> **[1:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=70)** It has a constructor, a helper to combine a date and time and a validate method.
>
> **[1:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=79)** In the route, there are 2 files, connects.js, which sets up the database connection and reservations.js, which exports functions used for acting on reservations including retrieval, creation, saving, and a validation wrapper.
>
> **[1:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=97)** The migrations folder contains a connect schema, which we'll import before starting the application.
>
> **[1:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=104)** The public folder contains the front ends of the application.
>
> **[1:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=108)** In Triv contains third-party code and the CSS, images, and JS folders are pretty self-explanatory.
>
> **[2:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=120)** The routes folder contains 3 routes.
>
> **[2:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=123)** Admin is the administrative interface.
>
> **[2:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=126)** Index is the homepage and reservations is where the bookings take place.
>
> **[2:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=132)** The last folder is views, which contains the pug templates.
>
> **[2:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=136)** If you weren't familiar with it, pug is a successor to jade.
>
> **[2:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=140)** This isn't a front end course, so we'll be leaving this alone.
>
> **[2:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=144)** Finally, we have apt.js, which is the main express application.
>
> **[2:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=150)** It is intentionally sloppy and has some inconsistencies right off the bat.
>
> **[2:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=154)** Let's get this project installed.
>
> **[2:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=157)** Open up the terminal by pressing control and backtick.
>
> **[2:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=162)** First, let's tell NPM that this is not a production environment.
>
> **[2:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=166)** Type, NPM, space, config, space, set, space, dash G, production, false.
>
> **[2:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=175)** I'm going to use NPM to install everything we need.
>
> **[3:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=183)** After a moment, all dependencies will be installed.
>
> **[3:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=187)** We will need to run a connects migration in order to use the sequel light database.
>
> **[3:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=191)** Type, NPX, space, connects, KNEX, space, migrate, colon latest and press enter.
>
> **[3:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=203)** We're going to be using a debugging mode that is built in, so we can see verbose output from the application.
>
> **[3:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=209)** Type NPM, space, run, space, debug.
>
> **[3:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=216)** The application will bootstrap and we'll see a log file in real time.
>
> **[3:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=221)** Open a browser and position it, so you can see both the log and the browser.
>
> **[3:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=226)** Navigate to local host port 3000.
>
> **[3:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=231)** This is the homepage for the restaurant.
>
> **[3:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=234)** There's no functionality here except for a link to the reservations.
>
> **[3:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=238)** Let's click on reservations now.
>
> **[4:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=241)** This is the booking request form and this is what we're going to be working on cleaning up.
>
> **[4:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=247)** Let's book a reservation for today.
>
> **[4:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=249)** Pick a time, for 8:30 PM, and there's only one in my party.
>
> **[4:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=254)** My name is John Peck and my email is going to be username, just username and no app domain because this is a bug in the application.
>
> **[4:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=265)** Enter in a phone number, which will be 5555555555 and click the email icon to toggle the message and type hello comma world, click request booking.
>
> **[4:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=282)** Great, we've made a reservation, even with a bad email address.
>
> **[4:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=286)** Want to see it?
>
> **[4:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=287)** Navigate to local host 3000 slash admin.
>
> **[4:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=293)** The login and password are admin.
>
> **[4:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=296)** Only the best security.
>
> **[4:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=298)** Don't save this password.
>
> **[5:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=301)** The reservation booking request we made is shown.
>
> **[5:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=304)** Let's clean up and shut down the server.
>
> **[5:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=307)** Switch back over to the terminal, click to focus and then press control and see.
>
> **[5:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=313)** It'll ask if I wish to terminate the batch job, say yes, press enter.
>
> **[5:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=320)** It's functional, but we already know that there are problems.
>
> **[5:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=324)** Ready to fix them?
>
> **[5:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/demo-setup-and-tour?u=76281980&t=325)** Fantastic. Let's get started with no JS testing and code quality.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (2), type, (2), public (1), self (1)
> **Env Vars:** npm (4), http (1), css (1), npx (1), knex (1)
> **CLI Commands:** npm (4), apt (1), npx (1)
> **UI Navigation:** navigate to (3), select the (1), click on (1), toggle (1)
> **File Paths:** www.js (1), auth.js (1), connects.js (1), reservations.js (1), apt.js (1)
> **Tools:** terminal (2), vs code (1)
> **Prerequisites:** set up (2), install (1)
> **Ports:** port 3000 (1), :30 (1)


### 1. Testing and Code Quality Fundamentals

> [↑ Back to Table of Contents](#table-of-contents)

#### What is code quality?
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=0)** - When we write software, we're communicating with more than just computers.
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=5)** Of course, computers interpret and execute our code which consists of instructions and rules.
>
> **[0:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=12)** People, including the codes author and maintainers read and write code.
>
> **[0:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=18)** In this case, the code describes the intent of the software.
>
> **[0:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=22)** When the code is read, people should understand what, why and how the software works.
>
> **[0:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=28)** Needless to say, software engineers have a daunting task.
>
> **[0:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=32)** They need to communicate their intent and goals to both people and computers.
>
> **[0:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=38)** Everyone and everything involved needs to understand each other.
>
> **[0:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=42)** As you can imagine, things don't always go according to plan and mistakes happen.
>
> **[0:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=48)** Of course, each audience handles errors in their own way.
>
> **[0:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=52)** Humans by very nature make mistakes and adapt in response.
>
> **[0:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=57)** If you've ever watched a speech or a live music performance you've seen a few little mistakes.
>
> **[1:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=64)** Using context and experience we unconsciously accept and correct mistakes on.
>
> **[1:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=70)** The mistakes are forgotten and the content is remembered.
>
> **[1:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=74)** In comparison, computers literally interpret what we tell them to do.
>
> **[1:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=79)** A mistake and syntactically correct instructions will be dutifully executed.
>
> **[1:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=84)** For example it, computer to store an email address, then give it a picture of a fish.
>
> **[1:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=90)** Unless there are validation rules saying that images aren't allowed, the computer will happily store the fish.
>
> **[1:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=97)** This course's goal is to improve communication between software engineers and computers.
>
> **[1:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=103)** In this chapter, we're going to be defining core concepts and theory around both testing and code quality.
>
> **[1:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=111)** I'll introduce each concept, then apply that knowledge throughout.
>
> **[1:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=115)** We'll start with the abstract question.
>
> **[1:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=118)** What is code quality?
>
> **[2:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=120)** Next, we'll take a look at coding standards and how to enforce them.
>
> **[2:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=125)** We'll define unit testing, Test Driven Development and Behavior Driven Development then compare the differences.
>
> **[2:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=132)** We'll take a look at the role of testing frameworks and why they're important.
>
> **[2:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=136)** Finally, we'll see how assertion libraries verify how correct your programs are.
>
> **[2:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=142)** So, what is code quality?
>
> **[2:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=145)** Let's define what quality is first.
>
> **[2:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=148)** Joseph M. Juran's quality control handbook defines quality with two specific meanings.
>
> **[2:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=155)** Quality consists of those product features that meet the needs of customers and thereby provide product satisfaction.
>
> **[2:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=162)** And, quality consists of freedom from deficiencies.
>
> **[2:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=167)** Code quality builds on those concepts in many different but related ways.
>
> **[2:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=173)** Quality code meets the functional requirements, meaning it does what it's supposed to do.
>
> **[2:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=178)** Let's use example of email storage.
>
> **[3:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=181)** The requirements are the ability to store an email address.
>
> **[3:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=185)** There are two parts of this requirement.
>
> **[3:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=187)** If the code written couldn't store an email address, then it would fail the storage required.
>
> **[3:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=193)** If you could store a picture of a fish that is not an email address and the requirements are not met.
>
> **[3:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=200)** Quality code is free from deficiencies.
>
> **[3:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=203)** Which means no failings or shortcomings.
>
> **[3:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=206)** These can be broadly generalized in two ways, usefulness and maintainability.
>
> **[3:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=211)** Let's explore each.
>
> **[3:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=213)** What is useful code?
>
> **[3:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=216)** The more flexible and reusable the code is, the more useful it is.
>
> **[3:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=220)** For example, you can write a function that takes a number, adds one to it and returns the result.
>
> **[3:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=227)** That may fulfill the functional requirement, but it's inflexible.
>
> **[3:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=231)** We could improve upon it by adding any number to any number which would be more useful.
>
> **[3:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=238)** Of course, you should use the programming languages built in math library.
>
> **[4:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=242)** That would be the most useful and flexible overall.
>
> **[4:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=246)** What about maintainable code?
>
> **[4:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=248)** There are three questions that can determine if code is maintainable or not.
>
> **[4:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=252)** The first is can you personally maintain the code?
>
> **[4:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=256)** The next step is, can someone else maintain it without asking for help?
>
> **[4:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=261)** Finally, can someone else read the code and understand the design and intent?
>
> **[4:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=266)** If the answer to all three questions is yes, then the code is maintainable.
>
> **[4:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=272)** Maintainable code is not an absolute.
>
> **[4:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=275)** Instead, it evolves over the life cycle of the software.
>
> **[4:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=279)** Code may start as unmaintainable and improve over time.
>
> **[4:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=283)** On the other hand, sloppy and inconsistent changes may make it worse over time.
>
> **[4:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=288)** Engineers improve with experience.
>
> **[4:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=290)** So, revisiting old code will make you want to clean it up.
>
> **[4:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=295)** The goal should be continual, gradual improvement Is best make a series of incremental improvements rather than a radical overhaul.
>
> **[5:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=304)** That way, you reduce the risk of damaging functional code that was otherwise working without a problem.
>
> **[5:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=311)** We now know the questions to ask to determine if code is maintainable.
>
> **[5:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=316)** What's the most certain way to decide if code meets those standards Peer review.
>
> **[5:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=321)** Where another person reads your code and documentation.
>
> **[5:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=325)** If they can understand the design and intent, then the code is maintainable.
>
> **[5:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=330)** You can take steps to improve the maintainability of your code.
>
> **[5:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=334)** For example, the use of consistent formatting and logical naming helps other people read it.
>
> **[5:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=340)** The code should include clear and appropriate comments along with functional documentation that describes the intent.
>
> **[5:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=347)** Using appropriate modularization into atomic components makes the code usable.
>
> **[5:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=353)** Like watching a musician or an athlete, the result of hard work and practice can look effortless.
>
> **[5:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=359)** Should every piece of code that you write be high quality?
>
> **[6:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=364)** We should always strive for excellence, but be reasonable at the same time.
>
> **[6:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=368)** Sometimes a one-off script to perform a single task can be necessary.
>
> **[6:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=373)** You should still document what it's doing, why it was needed and when.
>
> **[6:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=377)** It sounds complicated, but a quick code comment and a commit to the source code tracking system can be enough.
>
> **[6:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=383)** Chances are that you may need to refer to it again or reuse some of the functionality elsewhere.
>
> **[6:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=389)** In summary, the phrase code quality has several meanings.
>
> **[6:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=394)** Foremost, it should meet functional requirements.
>
> **[6:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=398)** Quality code should be maintainable by yourself and by others.
>
> **[6:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=403)** Finally, it should be useful in multiple places even in different programs.
>
> **[6:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=408)** There are many ways to measure and ensure code quality.
>
> **[6:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=411)** The first most basic, is the use of a coding standard.
>
> **[6:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-is-code-quality?u=76281980&t=415)** What's a coding standard?

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), let (3), case, (1), abstract (1), function (1)
> **Analogies:** for example (3), picture (2), imagine (1)
> **CLI Commands:** make (4)
> **Exercise Files:** source code (1)
> **Speakers:** - when (1)

#### Coding conventions and standards
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=0)** - [Instructor] The easiest way to improve code quality and specifically maintainability is to use a coding standard.
>
> **[0:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=7)** But what's a coding standard?
>
> **[0:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=9)** To answer that, let's step back and answer a different question.
>
> **[0:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=13)** What is a coding convention?
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=16)** A coding convention is a set of guidelines and recommendations for writing programs in a particular language.
>
> **[0:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=22)** Coding conventions typically consists of three things.
>
> **[0:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=26)** The first is a programming style which usually deals with the readability of source code.
>
> **[0:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=32)** The second are practices or ways to build an architect programs.
>
> **[0:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=38)** The third are methods, which are the way to plan and implement a program, including requirements, design, specifications and so forth.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=47)** With that in mind, how is a coding convention used?
>
> **[0:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=51)** Well, a coding standard is a collection of coding conventions.
>
> **[0:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=55)** They have been selected and designed specifically to produce quality code, including functional requirements and maintainability.
>
> **[1:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=63)** A coding standard is a formal specification that a group or organization has adopted for projects.
>
> **[1:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=70)** Both programming practices and methods are fascinating topics.
>
> **[1:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=74)** With that said, those topics are out of scope of this course because they're about organization and management.
>
> **[1:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=81)** Instead, I'm going to focus on programming styles because of their profound impact on code quality.
>
> **[1:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=87)** There are a number of common programming style conventions.
>
> **[1:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=91)** I'll briefly list them then go into greater detail about each.
>
> **[1:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=95)** The first are around comments which programmers read and interpreters ignore.
>
> **[1:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=100)** Next is whitespace or unused space around an object.
>
> **[1:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=105)** Different naming conventions for identifiers, such as variables, functions and methods are included.
>
> **[1:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=111)** The conventions also have ways to avoid possible human errors, such as unreachable code.
>
> **[1:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=117)** There are a number of other conventions as well that don't fit any of these other subjects, such as security, spelling and more.
>
> **[2:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=125)** Let's take a closer look at programming style conventions, starting with comment conventions.
>
> **[2:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=131)** The most common are the documentation of methods and functions.
>
> **[2:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=135)** While it's not practical to check the contents, you can see if the docs exist.
>
> **[2:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=140)** It's possible to validate the signature of the docs, meaning check of the arguments and the docs match the arguments in the declaration.
>
> **[2:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=147)** Some conventions even include spelling, punctuation and grammar.
>
> **[2:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=152)** Before you roll your eyes and scoff, these types of conventions are about the culture of the project or the institution which may expect excellence in all areas including the code base.
>
> **[2:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=163)** Some basic formatting conventions exist such as how to handle multi-line comments.
>
> **[2:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=169)** It's typical to prefer the multi-line comments over multiple sequential single line comments.
>
> **[2:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=175)** Spacing between the comment character and the start of the actual comment improves readability.
>
> **[3:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=181)** Speaking of spacing, whitespace conventions are also important.
>
> **[3:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=186)** The debate over spaces versus tabs is a long-standing one.
>
> **[3:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=190)** Regardless of your opinion, you have to choose one or the other and the quantity, otherwise the code base will become a formatting mess.
>
> **[3:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=199)** The length of lines of code is also important for readability.
>
> **[3:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=202)** As an example, 100 characters is a good starting place.
>
> **[3:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=207)** The number of sequential empty lines should be specified.
>
> **[3:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=210)** Since there's no semantic meaning, it's typically limited to one or two.
>
> **[3:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=215)** The line endings or new line characters should also be consistent.
>
> **[3:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=219)** There are three formats.
>
> **[3:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=221)** The most common is just the line feed character for Unix, Linux and Mac.
>
> **[3:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=226)** Another variation is both carriage return and line feed for windows and dos.
>
> **[3:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=232)** A less common variation is just carriage return on Mac.
>
> **[3:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=236)** Again, consistency here is really important so file histories aren't wiped out or text editors get messed up.
>
> **[4:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=243)** Whitespace also matters in statements including block statements.
>
> **[4:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=247)** For example, this spacing between the parentheses and brace.
>
> **[4:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=250)** Should there be a space or no space?
>
> **[4:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=253)** There's a similar question for control statements as well.
>
> **[4:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=257)** Should there be no space after a control statement or use a space?
>
> **[4:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=262)** There's no functional difference between the two but consistency and readability are important.
>
> **[4:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=268)** Another style convention is around the naming of identifiers and object properties.
>
> **[4:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=273)** Capitalization has no functional impact, but does have semantic meaning.
>
> **[4:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=278)** For example, data types and constructors typically use Pascal case also known as upper Camel case.
>
> **[4:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=285)** Methods typically use lower Camel case.
>
> **[4:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=289)** The length of identifiers can be important and easily overlooked.
>
> **[4:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=293)** Is N too short of a variable name?
>
> **[4:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=296)** Before you answer, given absolutely no context do you know what N means?
>
> **[5:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=302)** Turns out I meant it to be the name of a planet.
>
> **[5:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=306)** Conversely, is my dog has a first name it's major and he's fuzzy too long?
>
> **[5:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=312)** Yeah, it's too long.
>
> **[5:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=313)** Please don't do that.
>
> **[5:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=314)** It's silly and could be considered malicious compliance which is bad for morale and teams.
>
> **[5:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=321)** Identifier names should be appropriately meaningful.
>
> **[5:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=324)** This is something a linter can't do but a peer reviewer can.
>
> **[5:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=328)** Similar to length, what does I mean?
>
> **[5:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=331)** What about foo?
>
> **[5:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=332)** You can even be just completely wrong and assign puppy to a new orange.
>
> **[5:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=337)** It's valid syntax, but it's unmaintainable code.
>
> **[5:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=341)** There are some logical pitfalls as well that are possible errors.
>
> **[5:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=345)** They're syntactically legal meaning it won't cause a hard crash, but they lead to unreachable code and other unintended problems.
>
> **[5:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=353)** For example, double semi-colons.
>
> **[5:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=356)** Probably a typo or a copy and paste.
>
> **[5:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=359)** What about checking the type of something to see if it's stirng not a string.
>
> **[6:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=364)** What about throwing an error then having something execute after the throw?
>
> **[6:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=369)** These are signs of bugs and can indicate potential problems so they should be resolved.
>
> **[6:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=375)** To review, coding standards are a formal collection of coding conventions.
>
> **[6:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=380)** Each convention is a rule about code quality.
>
> **[6:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=384)** The goal of coding standards is to improve maintainability and the usefulness of the software.
>
> **[6:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coding-conventions-and-standards?u=76281980&t=391)** There are a lot of potential code conventions, so, how do you go about creating and enforcing a coding standard?

> [!info]- Semantic Content
>
> **Definitions:** is a  (9), known as (1)
> **Analogies:** such as (4), for example (3), similar to (1)
> **Code Keywords:** let (2), case. (2), throw (1)
> **Documentation:** the docs (3), specification (1), the documentation (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Creating and enforcing coding standards
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=0)** - [Instructor] Now that we know what a coding standard is, let's go through the steps for creating and enforcing one.
>
> **[0:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=6)** The process for creating a coding standard is iterative, much like specifying software.
>
> **[0:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=12)** First, determine what coding conventions are available that fit your project or organization.
>
> **[0:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=18)** Out of what's available, decide what has the most positive impact on the quality of your code base and morale.
>
> **[0:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=25)** Some rules help developers while others may annoy and may be needlessly strict.
>
> **[0:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=30)** Experiment with what's out there to find what works and what doesn't.
>
> **[0:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=35)** When you've made a choice, briefly document the justification of why you've chosen to use or not use a particular rule.
>
> **[0:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=43)** Less is more, so try for a maximum of one sentence.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=47)** Once the rules have been defined, create the configurations for any software you're using.
>
> **[0:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=52)** We're going to be discussing how to do this later on in the course.
>
> **[0:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=56)** Finally, revisit the rules on a regular basis to make sure they're logical.
>
> **[1:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=61)** Some may work and others won't and new ones might be available.
>
> **[1:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=66)** When creating and implementing a coding standard, there are a few things to keep in mind.
>
> **[1:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=71)** While you may be passionate about it, be sure to involve the whole team.
>
> **[1:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=76)** Especially when it comes to choosing rules, share the decision-making.
>
> **[1:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=80)** A coding standards should be built out of consensus.
>
> **[1:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=84)** Through involvement, team members will have shared ownership and will be happier with the result.
>
> **[1:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=89)** The goal of a coding standard, especially when there is existing code, is gradual improvement over time.
>
> **[1:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=96)** Be patient because you can't turn a cruise ship on a dime.
>
> **[1:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=100)** Too much change, too fast causes problems.
>
> **[1:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=104)** There are a few pitfalls to watch out for when creating a coding standard.
>
> **[1:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=108)** If there are too many rules, programmers may feel confined and micromanaged.
>
> **[1:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=114)** If the rules are needlessly strict and are causing false positives, or are taking too long to satisfy, relax or remove them.
>
> **[2:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=121)** For example, spell checking comments, which may be an aggravation for some may not be an effective use of time.
>
> **[2:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=129)** Finally, avoid overly pedantic rules such as requiring new lines in ternary expressions.
>
> **[2:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=136)** This is a negative situation where the focus is on literal accuracy instead of practical.
>
> **[2:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=142)** I know, this might be ironic to hear in a course like this.
>
> **[2:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=145)** But I'm trying to stress the practical use cases.
>
> **[2:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=149)** Learn from my mistakes.
>
> **[2:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=151)** So, with all these rules, how can they be enforced?
>
> **[2:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=155)** The best way to enforce a coding standard automatically is by using a linter.
>
> **[2:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=159)** What's a linter?
>
> **[2:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=161)** A linter is a tool that scans code to look for suspicious usage, such as syntax errors and coding convention violations.
>
> **[2:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=169)** A linter performs static analysis, meaning it does not execute the program itself.
>
> **[2:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=175)** This makes it very fast and unobtrusive.
>
> **[2:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=179)** Linters can be configured with sense of rules, which look violations of specific coding conventions.
>
> **[3:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=185)** Linters can be useful, but why should you use one?
>
> **[3:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=189)** Well, they're incredibly fast.
>
> **[3:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=191)** Again, because they're just scanning and tokenizing the code and not actually executing it.
>
> **[3:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=196)** Linters are accurate and have undergone massive amounts of peer review and testing.
>
> **[3:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=202)** They're consistent, giving the exact same results each time on the same piece of code, which is useful for measuring progress.
>
> **[3:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=209)** A linter is impersonal in that it just reports what it's told to and doesn't care about your feelings.
>
> **[3:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=216)** It can be better to get criticism from something that has no emotion, rather than someone you know.
>
> **[3:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=221)** To make up for that, linters can automatically fix some of the problems they find, which is a big time saver.
>
> **[3:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=227)** Finally, linters integrate with most text editors giving you real-time feedback as you edit your code.
>
> **[3:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=234)** I like knowing about and fixing problems before I send something off for peer review.
>
> **[4:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=240)** While there are a variety of different linters, the reported results of a linter analysis have a similar format.
>
> **[4:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=246)** First, it gives context about the affected location, specifically the file, line number, and sometimes the character where the problem begins.
>
> **[4:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=255)** Then it provides the severity or how bad the problem is.
>
> **[4:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=258)** It can be an error which has to be addressed, or a warning which should be looked into as it may be causing problems.
>
> **[4:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=267)** Next comes a description, which is the human readable explanation of the problem.
>
> **[4:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=271)** It's typically a short sentence.
>
> **[4:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=273)** Finally, the machine name of the rule that was triggered in case you need to do more research or possibly disable the rule.
>
> **[4:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=282)** Here's an example of linter output.
>
> **[4:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=284)** The first line is the complete path to the file.
>
> **[4:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=287)** On the second line, it starts with the line number and character of where the problem is.
>
> **[4:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=292)** The severity, which in this case it's an error, comes next.
>
> **[4:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=297)** The description of the problem is included.
>
> **[5:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=300)** Then finally, the name of the rule that was triggered.
>
> **[5:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=304)** Of course, there's always a possibility of a false positive.
>
> **[5:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=307)** Sometimes a rule is too sensitive or a whole file maybe third-party code and can't be changed.
>
> **[5:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=314)** And therefore should be excluded from the scan.
>
> **[5:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=317)** Fortunately, both individual lines and entire files can be selectively ignored.
>
> **[5:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=322)** Sometimes all that is needed is a bit of tuning around the configuration of a rule to adjust it to your code base.
>
> **[5:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=329)** If the rule is becoming troublesome, reconsider the use of it rather than just getting frustrated or halting linting in general.
>
> **[5:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=336)** If there is a genuine problem, submit a bug report to the linters maintainers to let them know of the issue.
>
> **[5:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=342)** Automated scanning is fantastic.
>
> **[5:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=344)** But what about the role of linting with peer reviews?
>
> **[5:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=348)** A linter should be run before a peer review, not during or after.
>
> **[5:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=353)** A peer review should be about the logic and intent of your code, not something that an algorithm can enforce.
>
> **[5:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=359)** Both the reviewer and the developers should have similar and reasonable expectations around linting.
>
> **[6:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=366)** A good practice that I use is that new and modified code should pass the linter.
>
> **[6:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=370)** That way, things improve over time and don't require a massive refactor that can hide other bugs.
>
> **[6:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=377)** We've been discussing coding conventions and rules that can be enforced with linters.
>
> **[6:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=381)** What about rules for peer reviewers?
>
> **[6:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=384)** There's a fantastic book called "The Elements of Programming Style."
>
> **[6:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=388)** First published in 1974, it's not a book about how to program, it's about the human factors of programming and code quality.
>
> **[6:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=397)** Some of the summarized programming style tips include, write clearly, don't be too clever.
>
> **[6:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=403)** Say what you mean, simply and directly.
>
> **[6:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=407)** Use library functions whenever feasible.
>
> **[6:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=409)** There are dozens of additional tips which are summarized at the end of the book.
>
> **[6:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=414)** To review, a linter is a tool that scans code for suspicious or questionable practices.
>
> **[7:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=421)** Linters statically analyze code, meaning they don't execute.
>
> **[7:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=426)** A linter can be configured with rules that specify code conventions.
>
> **[7:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=430)** We've been talking about linting and coding standards.
>
> **[7:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=433)** So, how do we go about using them?
>
> **[7:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=436)** Chapter two will cover using linting tools and compare some approaches.
>
> **[7:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=441)** We've covered programming styles and coding standards.
>
> **[7:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/creating-and-enforcing-coding-standards?u=76281980&t=444)** So, how do we go about testing software?

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (5), let (2), this. (1), static (1), pass (1)
> **Definitions:** is a  (6)
> **CLI Commands:** find (2), make (2)
> **Analogies:** such as (2), for example (1)
> **Warnings:** keep in mind (1), watch out (1), warning (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Unit, integration, and functional testing
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=0)** - [Instructor] There are a number of different ways to test software.
>
> **[0:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=4)** The most common techniques are unit testing, integration testing, and functional testing.
>
> **[0:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=10)** Let's explore each in order as they build upon each other.
>
> **[0:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=14)** Before I define unit testing, it's good to know what a unit is.
>
> **[0:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=19)** A unit is the smallest testable part of an application.
>
> **[0:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=23)** The size depends on how the application was built.
>
> **[0:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=26)** In a procedural application, it can be an entire module or an individual function.
>
> **[0:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=32)** For object-oriented applications, it can be as big as an interface, like a class, or more often an individual method.
>
> **[0:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=40)** With that in mind, let's explore unit testing which tests a completely isolated unit of code via its application program interface.
>
> **[0:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=50)** Unit tests are performed in memory, meaning no permanent changes take place.
>
> **[0:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=56)** This makes them safe to run over and over again.
>
> **[0:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=59)** Additionally, unit tests execute very quickly which makes them invaluable to development.
>
> **[1:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=66)** Unit tests are made up of assertions, which validate the correctness of a unit.
>
> **[1:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=71)** And assertion is a statement that declares that a predicate is going to be true.
>
> **[1:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=76)** A predicate, which is a logical term, just returns boolean values, true or false.
>
> **[1:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=83)** If the validation fails, an assertion will throw an error which will include context about what went wrong and where.
>
> **[1:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=91)** There are a number of different assertion methods and the names will vary between testing frameworks.
>
> **[1:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=96)** The most basic is ok which checks to see if the result of something is truthy.
>
> **[1:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=102)** There's equal which does a shallow comparison.
>
> **[1:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=105)** If working with an object, deepEqual will perform shallow comparison of all properties.
>
> **[1:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=111)** If a more rigid comparison is needed, strictEqual performs no implicit conversion.
>
> **[1:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=117)** If testing errors, throws looks for a specific thrown error.
>
> **[2:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=121)** Depending on the test framework, there's a lot more methods including opposites like, notEqual.
>
> **[2:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=128)** Here's a working example of a very basic unit test.
>
> **[2:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=131)** There's no need to open an editor at this time.
>
> **[2:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=134)** Node.js includes an assertion module named assert.
>
> **[2:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=137)** So, we'll require it.
>
> **[2:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=140)** Then, we'll define the tested method, a simple function named cat that returns the string literal, woof.
>
> **[2:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=147)** That seems a little odd, doesn't it?
>
> **[2:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=150)** Finally, let's perform an assertion that compares the actual value and the expected value.
>
> **[2:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=156)** We'll assert with a method equal to validate that invoking cat returns, meow.
>
> **[2:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=162)** When the script is executed, the assertion module throws a new AssertionError on the shallow comparison of woof and meow.
>
> **[2:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=169)** It turns out that woof is not the same as meow.
>
> **[2:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=173)** So, the assertion failed.
>
> **[2:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=176)** The native node.js assertion module works and has increased its scope in recent versions but it still can be limited in the available options.
>
> **[3:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=185)** We're going to explore and compare unit testing tools in Chapter 3.
>
> **[3:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=188)** So, stay tuned.
>
> **[3:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=191)** That example is really simple but what if there are dependencies?
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=194)** The solution is to simulate the dependencies without actually calling them.
>
> **[3:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=199)** This isolates the behavior of the tested unit and prevents unexpected consequences.
>
> **[3:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=204)** For example, a unit may depend on the result of a database query.
>
> **[3:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=209)** Instead of actually performing the query and connecting to the database, just return an arbitrary result each time.
>
> **[3:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=217)** Ultimately, the goal is to unit test only your custom code.
>
> **[3:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=221)** You don't have to worry about testing third-party code as that is the responsibility of the maintainer.
>
> **[3:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=227)** This same goes for core code, like node.js itself.
>
> **[3:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=231)** If you'd like to write unit test for node core, do it within the context of node, not as separate project.
>
> **[3:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=238)** We'll explore replacing code and other similar techniques in Chapter 4.
>
> **[4:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=243)** The next level of testing is integration testing, which builds upon unit tests.
>
> **[4:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=248)** Instead of testing just a single unit, integration testing combines units and tests the resulting combinations.
>
> **[4:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=255)** Unlike the focus of unit tests on APIs, integration tests can also include user interfaces and the results, such as database contents and logs.
>
> **[4:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=266)** Depending on the architecture of the application, test can be on one system or across multiple systems.
>
> **[4:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=272)** Also, unlike unit tests, integration testing uses either the full or partial system environment, including persistent layers like databases or other similar services.
>
> **[4:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=283)** Therefore, integration tests are more complex and harder to maintain than unit tests, but are still very important.
>
> **[4:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=290)** What's an integration test look like?
>
> **[4:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=293)** Let's consider a hypothetical application with two units, a reservation API and a client for that API.
>
> **[5:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=300)** To test user creation, the reservation client would call the API.
>
> **[5:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=304)** Then, the API would return a response.
>
> **[5:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=307)** Then, you would validate the response returned by the API and validate the created reservation.
>
> **[5:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=313)** Practically, writing integration tests uses the same tools as unit testing.
>
> **[5:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=319)** The big difference is that it's across multiple units.
>
> **[5:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=323)** Functional testing is different from unit and integration testing in a number of ways.
>
> **[5:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=328)** Instead of code, the focus is on the results and the user interface.
>
> **[5:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=333)** A functional test checks a specific feature and compares the results against the specification from which it was created.
>
> **[5:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=341)** This is typically in the form of a user workflow, complete with roles and steps.
>
> **[5:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=346)** Functional testing is typically automated but manual is also an option.
>
> **[5:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=351)** Given that functional tests exercise features and not code, they're slower to execute than unit and integration tests.
>
> **[5:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=359)** A functional test reads more like a script.
>
> **[6:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=362)** Here's a pseudocode example of a functional test for a reservation creation workflow.
>
> **[6:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=367)** It starts when an anonymous user visits the front page.
>
> **[6:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=371)** Then, they click a link to Reservations.
>
> **[6:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=374)** They should see Book a table on the page.
>
> **[6:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=378)** They enter username into the form element for email.
>
> **[6:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=381)** Then, click the Request Booking button.
>
> **[6:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=384)** The Invalid Email message should be shown.
>
> **[6:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=387)** Next, enter username@[example.com](https://example.com) for the email address and click the Request Booking button.
>
> **[6:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=394)** Finally, the Reservation created message should be seen on the page.
>
> **[6:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=399)** If there's a failure in any of these steps, then the test does not pass.
>
> **[6:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=404)** We're going to take a look at functional testing in the context of Chapter 5.
>
> **[6:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=409)** Another kind of testing that you may have heard of is system testing.
>
> **[6:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=413)** It's similar to integration testing in that it exercises the relationships of components.
>
> **[6:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=418)** However, the major difference is system testing uses the complete system, including the application itself and the hosting environment.
>
> **[7:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=426)** This finds defects both between individual pieces and the system as a whole.
>
> **[7:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=432)** Many things happen in system testing involving many tools and roles.
>
> **[7:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=437)** There's performance testing, such as a stress test for reliability and load testing for scalability.
>
> **[7:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=443)** Security scanners can find threats and vulnerabilities which helps establish a baseline standard.
>
> **[7:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=449)** A usability check of the system from someone with user experience can help determine if it's easy to use.
>
> **[7:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=456)** You can check to see if a system is compatible with its hosted environment or other systems they may be working with.
>
> **[7:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=461)** In short, anything that requires the entire system, both the application and the environment, to be configured and running.
>
> **[7:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=469)** A final kind of testing that hasn't been mentioned is regression testing.
>
> **[7:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=474)** Regressions are a kind of software bug that occur when a feature stops working after a change.
>
> **[7:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=479)** Regression testing practically is just re-running unit and integration tests after making a change.
>
> **[8:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=486)** Let's compare the four major types of testing.
>
> **[8:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=489)** Unit testing is against the API of the smallest parts of the system in isolation.
>
> **[8:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=495)** Integration testing combines different parts of the system together to ensure everything works.
>
> **[8:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=501)** Functional testing compares the results of different workflows to the specifications.
>
> **[8:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=506)** System testing fully exercises the complete system using many different tools and techniques to make sure everything works as expected.
>
> **[8:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=514)** How do these different kinds of tests relate to each other and in application?
>
> **[8:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=518)** I'm going to use a simplified example of reservation creation again.
>
> **[8:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=523)** In code, there's a Reservation Model that defines the structure of a reservation.
>
> **[8:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=528)** The Reservation Model persists in a third-party database and checks to make sure that the results are stored.
>
> **[8:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=536)** The user interface is a custom Reservation Creation Form.
>
> **[9:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=540)** If valid, the reservation information is sent to the model for storage.
>
> **[9:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=545)** Errors and successes are sent to the message display system, which is also not custom code.
>
> **[9:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=552)** Unit tests, as you may recall, are performed in isolation.
>
> **[9:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=555)** So, none of the components communicate with each other.
>
> **[9:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=558)** Also, unit tests should only be on custom code so the third-party code is excluded.
>
> **[9:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=564)** The two remaining units, the Reservation Model and the Reservation Creation Form can be covered with unit tests.
>
> **[9:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=572)** Integration tests are the next step up, they can involve third-party components.
>
> **[9:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=577)** So, nothing is excluded.
>
> **[9:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=579)** Each integration test should be across components that communicate with each other, that means in integration test for the Reservation Model and database, the Reservation Creation Form and the Reservation Model and finally the form and the message display system.
>
> **[9:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=596)** Functional tests test how the system works together against the requirements.
>
> **[10:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=601)** Therefore, the components are in full communication with each other.
>
> **[10:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=605)** Functional tests are against the user interfaces so that includes the reservation creation form and message display.
>
> **[10:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=613)** System tests include the same functionality that is in functional tests and then some.
>
> **[10:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=618)** System tests are run against the entire application and environment, such as a security scan.
>
> **[10:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=625)** Those are a lot of testing options.
>
> **[10:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/unit-integration-and-functional-testing?u=76281980&t=628)** How can we automate these tests?

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), module (4), interface (4), function (2), assert (2)
> **CLI Commands:** node (5), cat (2), make (2), find (1)
> **Env Vars:** api (6)
> **Analogies:** such as (3), for example (1), similar to (1)
> **File Paths:** node.js (3)
> **Code Identifiers:** deepequal (1), strictequal (1), notequal (1)
> **Definitions:** is a  (3)
> **URLs:** [example.com](https://example.com) (1)

#### Testing frameworks
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=0)** - [Instructor] I've described several different ways of testing software, unit, integration, and even functional testing can be automated using a framework.
>
> **[0:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=8)** But how does automation work?
>
> **[0:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=11)** Test automation is separate software from the application that is being written and tested.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=16)** Test automation has multiple purposes.
>
> **[0:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=19)** First, it controls test execution including order of execution and filtering of tests based on a criteria.
>
> **[0:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=26)** The goal is to avoid repetitive tasks that are inherent with manual tests execution.
>
> **[0:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=31)** With that context, a testing framework, also known as a testing automation framework, is an execution environment for automated tests.
>
> **[0:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=40)** A testing framework is useful for a number of reasons.
>
> **[0:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=44)** A testing framework performs helpful tasks, starting with a consistent definition of how assertions are defined, which promotes maintainability.
>
> **[0:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=52)** They control and interact with the tested application.
>
> **[0:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=56)** A testing framework executes tests, or more importantly, it reports on the results.
>
> **[1:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=61)** This includes individual results.
>
> **[1:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=63)** So you know whether or not to test passes and aggregate results with the utopian goal of 100% of the tests passing.
>
> **[1:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=72)** The use of a testing framework provides a developer with several things.
>
> **[1:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=76)** The first are some base assumptions starting with what responsibilities are delegated and how?
>
> **[1:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=82)** Practically, the focus of the developers should be on writing tests.
>
> **[1:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=86)** While it may be tempting, it's better to develop custom functionality rather than maintaining supporting software.
>
> **[1:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=93)** Test frameworks provide fundamental concepts for structural consistency.
>
> **[1:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=98)** The first is around tests including what a test actually does and how it's put together.
>
> **[1:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=103)** The other is for the results and how the successes and failures are collected for analysis and how they're reported.
>
> **[1:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=110)** Just like code quality, consistency in testing improves maintainability.
>
> **[1:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=117)** A number of tools are provided with test frameworks.
>
> **[2:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=120)** The first are for the setup of the testing environment, both around individual tests and groups of tests.
>
> **[2:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=126)** The next are for control of the application, such as selectively starting and stopping parts.
>
> **[2:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=132)** Some frameworks provide interfaces for test data, including being able to specify test ranges or external sources.
>
> **[2:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=139)** Finally, control over execution of tests is provided.
>
> **[2:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=143)** This can include the execution of a subset of tests or setting thresholds of acceptable failure or duration.
>
> **[2:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=151)** There are many benefits to using a testing framework.
>
> **[2:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=154)** By using a purpose built tool, there will be a lower cost of maintenance.
>
> **[2:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=159)** If changes are needed, then developers just need to update the tests, not the framework itself.
>
> **[2:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=165)** A testing framework can be reused across multiple applications, which provides a multiplier effect.
>
> **[2:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=171)** Of course, delegating the responsibility of maintaining the framework means developers can focus on writing tests and great code.
>
> **[3:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=180)** Part of the consistency frameworks provide is a structure around tests.
>
> **[3:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=184)** There are four distinct phases, which I'll list and then detail.
>
> **[3:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=188)** They are setup, execution, validation, and cleanup.
>
> **[3:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=196)** Different frameworks have slightly different names for the phases, but the intent is the same.
>
> **[3:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=201)** Let's take a closer look at each.
>
> **[3:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=203)** The first is setup when the application state is prepared before testing.
>
> **[3:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=209)** It can be as simple as just including a module.
>
> **[3:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=212)** Setup is also when dependencies are replaced.
>
> **[3:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=215)** This can also be a time when test data is prepared.
>
> **[3:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=219)** The second phase is execution, where target behavior is performed.
>
> **[3:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=224)** Upon execution, the output is captured including the response from the API or other sources.
>
> **[3:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=230)** Honestly, this sounds more complicated than it really is.
>
> **[3:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=233)** Practically speaking, it's just the call to the target method or function.
>
> **[3:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=238)** The third phase is validation, where the results are compared with the actual to ensure correctness.
>
> **[4:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=244)** This is when assertions are used to compare the result with whatever was expected.
>
> **[4:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=249)** The test framework collects the results of validation and uses them for reporting successes and failures.
>
> **[4:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=256)** The final phase is cleanup, where the application state is restored after the tests have been executed.
>
> **[4:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=262)** It's important to cleanup in order to allow other tests to run without interference.
>
> **[4:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=267)** Of course, cleanup is only needed if there's something that needs to be restored.
>
> **[4:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=273)** Here's an example of the test phases using a validator for reservations.
>
> **[4:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=278)** In setup, an invalid reservation is created such as a bad email address.
>
> **[4:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=284)** In execution, the validator runs using the invalid reservation as input.
>
> **[4:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=290)** In validation, an assertion would be made that the reservation would be rejected.
>
> **[4:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=296)** To summarize, a testing framework facilitates test automation in a number of ways.
>
> **[5:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=301)** They run tests both as a group and selectively and aggregates and reports the result.
>
> **[5:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=307)** The testing framework provides consistent structure and tooling that can be used across multiple applications.
>
> **[5:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=314)** Finally, a testing framework delegates the responsibility of maintenance so developers can focus their efforts on writing tests, not creating testing software.
>
> **[5:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=324)** You might be wondering, what are some examples of common Node.js testing frameworks?
>
> **[5:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=329)** There's Mocha from [mochajs.org](https://mochajs.org).
>
> **[5:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=332)** Jasmine from jasmine.[github.io](https://github.io).
>
> **[5:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=335)** And Jest from [jestjs.io](https://jestjs.io).
>
> **[5:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=339)** Chapter three starts with a comparison survey of testing frameworks, then demonstrates how they can be used.
>
> **[5:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-frameworks?u=76281980&t=345)** We've been talking about how to automate tests using a framework, but how are the actual tests specified?

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1), module (1), function (1)
> **Prerequisites:** setup (5)
> **URLs:** [mochajs.org](https://mochajs.org) (1), [github.io](https://github.io) (1), [jestjs.io](https://jestjs.io) (1)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Analogies:** such as (2), just like (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Env Vars:** api (1)

#### TDD and BDD test specifications
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=0)** - [Presenter] While there are many different ways to write test specifications, testing frameworks provide consistent interfaces for developers.
>
> **[0:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=8)** Most frameworks provide multiple domain specific languages or DSLs for writing tests.
>
> **[0:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=14)** Each standardizes the vocabulary used to write tests, which in turn improves developer communication.
>
> **[0:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=20)** Each DSL describes how to interact with a framework.
>
> **[0:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=24)** Common examples include, test-driven development or TDD, and behavior-driven development known as BDD.
>
> **[0:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=31)** Those terms may be familiar, but what do they mean?
>
> **[0:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=36)** Test-driven development is a software development process, in its purest form, software requirements are turned into test cases, then the software is improved until those tests pass.
>
> **[0:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=48)** Throughout development, the tests are run over and over again, giving feedback to the programmer.
>
> **[0:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=53)** Strictly following test-driven development in its most academic form can be too extreme for most situations.
>
> **[1:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=60)** Outside of some very specific corporate or technical environments, you probably won't know all of the tests that you need to write before building your software.
>
> **[1:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=68)** The more important goal is to have a feedback loop to inform the developer, that's the goal of behavior-driven development.
>
> **[1:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=77)** So, what are the differences between test-driven development and behavior-driven development?
>
> **[1:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=82)** Believe it or not, technically they're the same, the difference is around the vocabulary used and the philosophical approach.
>
> **[1:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=90)** In test-driven development, the terminology used is about testing, including tests and test suites.
>
> **[1:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=97)** This leads developers to describe when something works and when it doesn't.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=101)** The problem is that it can be too literal, which can lead to fragile, overly specific tests.
>
> **[1:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=107)** To address this, behavior-driven development uses terminology about behavior examples This way, developers describe how and why something works with concrete examples.
>
> **[1:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=119)** Dan North, who published the concept in a writing titled, "Introducing BDD" Said in the introduction, "I decided it must be possible to present TDD in a way that gets straight to the good stuff and avoids all the pitfalls."
>
> **[2:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=134)** So, what's this approach?
>
> **[2:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=136)** The acceptance criteria for a test are presented as a scenario with a common structure.
>
> **[2:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=142)** Given some initial context, when an event occurs, then ensure some outcomes.
>
> **[2:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=149)** By using this kind of language, it frames the testing task as a description of how the system works.
>
> **[2:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=156)** Using the example of reservation creation, here's how a BDD scenario would read, the scenario is that a reservation should be created with a valid email.
>
> **[2:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=167)** So, using the acceptance criteria structure, given a submitted email, and that the email is valid when the reservation is created, then ensure that the reservation was created successfully, and that the reservation email is what was submitted.
>
> **[3:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=184)** When writing unit and integration tests with a BDD style interface, the commands used reflect the intent.
>
> **[3:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=190)** Starting with describe, which is sometimes aliased as context, you can create a group of specifications.
>
> **[3:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=198)** The specification itself, is created with it or specify, which creates the test case itself.
>
> **[3:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=206)** Often, a specification is also known as a spec or a test spec.
>
> **[3:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=211)** There is additional commands around the setup and Teardown of tests.
>
> **[3:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=216)** Before, and the logical equivalent of after, provide customization of the setup and Teardown of a group.
>
> **[3:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=223)** If something needs to happen more often, beforeEach and afterEach customize the setup and tear down for every specification in a group.
>
> **[3:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=232)** How does this look when testing a reservation creation?
>
> **[3:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=236)** Here's the code example.
>
> **[3:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=237)** We'll start by describing the group of specifications, which is the reservation creation.
>
> **[4:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=243)** Then in natural language, it should need a reservation with a valid email.
>
> **[4:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=249)** This spec describes the intent to another engineer and also gives an example if they want to create an account.
>
> **[4:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=256)** Given the context of an email, when a reservation is created, expect that the reservation has a properly named email and the value should be equal to the email provided.
>
> **[4:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=267)** The nice thing about this approach, is that it describes the intent and how, briefly and accurately.
>
> **[4:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=274)** Let's review.
>
> **[4:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=276)** Testing frameworks provide interfaces to create test specifications.
>
> **[4:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=281)** Each interfaces uses a standard known as a DSL or domain specific language for consistency.
>
> **[4:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=288)** Some of the more common are, test-driven development or TDD and behavior-driven development, BDD.
>
> **[4:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=296)** They are technically the same, but the vocabulary and approach of BDD describes the how and why.
>
> **[5:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/tdd-and-bdd-test-specifications?u=76281980&t=304)** Now that we have a better understanding of how tests are structured, how can you verify that the results of an execution are correct?

> [!info]- Semantic Content
>
> **Env Vars:** bdd (6), tdd (3), dsl (2)
> **Documentation:** specification (3), spec (3)
> **Code Keywords:** include, (1), pass (1), this, (1), interface (1), let (1)
> **Definitions:** known as (3), is a  (1)
> **Prerequisites:** setup (3)
> **Code Identifiers:** beforeeach (1), aftereach (1)
> **Speakers:** - [presenter] (1)

#### Assertions for correctness
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=0)** - [Instructor] Determining if actual output matches the expected is a requirement for testing if a system is working correctly.
>
> **[0:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=7)** Assertion libraries are the solution, but what are they?
>
> **[0:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=12)** As you may recall, an assertion validates the correctness of a unit of code.
>
> **[0:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=17)** Assertions declare that a given predicate is going to be Boolean true.
>
> **[0:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=22)** For example, here's an assertion that 'dog' is strictly equal to 'cat.'
>
> **[0:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=26)** In this case, the assertion will throw an error because the string literals do not match.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=33)** All right.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=33)** So what's an assertion library?
>
> **[0:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=36)** An assertion library is a collection of assertions.
>
> **[0:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=39)** Typically many more than what's in Node.js's assert module.
>
> **[0:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=44)** They support comparisons of many different types of language structures like objects or rays, Booleans, numbers and more.
>
> **[0:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=52)** Like a framework, assertion libraries provide an API, or in some cases multiple APIs for developers to create predicates.
>
> **[1:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=61)** The APIs provide interfaces and styles like test driven development or behavior driven development.
>
> **[1:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=67)** Here's a few of the types of assertions that are included in a library.
>
> **[1:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=71)** I check to see if something is defined or more explicitly not undefined.
>
> **[1:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=76)** The any assertion checks to see if it was created by a given constructor, such as number.
>
> **[1:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=82)** In a similar way, you can determine if an object is to be an instance of a particular constructor.
>
> **[1:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=89)** Sometimes it's helpful to check that an object has a given property with ToHaveProperty.
>
> **[1:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=94)** If you're testing a promise, Resolves declares an object is a promise and will resolve to a specific value.
>
> **[1:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=102)** Some assertion APIs provide support for language chaining.
>
> **[1:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=106)** A chaining assertion is a special kind of assertion.
>
> **[1:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=109)** In itself, it checks nothing and won't throw any errors.
>
> **[1:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=113)** However, it will pass a value between assertions.
>
> **[1:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=116)** This goes back to supporting natural language when describing assertions, such as with behavior-driven development.
>
> **[2:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=123)** Change assertions have multiple aliases, all of which do the same thing.
>
> **[2:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=129)** Terms like "be," "an," "of," "and," and so forth help build assertions that sound like a sentence.
>
> **[2:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=138)** Let's revisit the reservation creation example from earlier in a framework that supports chaining.
>
> **[2:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=144)** Same as before, it should create a reservation with an email.
>
> **[2:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=148)** Given the email 'username@[example.com](https://example.com),' when a reservation is created, this is when the chaining happens.
>
> **[2:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=156)** Then the reservation should have the property email.
>
> **[2:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=160)** The word "have" is a chain along with "and" to compare the email property with a given.
>
> **[2:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=166)** Chaining can improve readability and leads to a more natural sounding description, but isn't available in every assertion API.
>
> **[2:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=174)** There are a number of assertion libraries available.
>
> **[2:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=177)** The first is Assert, which is Node.js's native module.
>
> **[3:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=182)** Another popular library is Chai, available from [chaijs.com](https://chaijs.com).
>
> **[3:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=188)** Should.js from shouldjs.[github.io](https://github.io) is also popular.
>
> **[3:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=193)** Some test frameworks have assertion libraries built-in including Jasmine, which has matchers and Jest which has expect methods.
>
> **[3:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=202)** I'm going to compare assertion libraries in much greater detail with code examples in chapter three.
>
> **[3:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=209)** Throughout this chapter, we've learned about the fundamental terms and concepts in testing and code quality.
>
> **[3:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=215)** We started with a definition of code quality and why it matters.
>
> **[3:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=219)** Then we explored coding conventions and coding standards and how they can be used to improve code quality.
>
> **[3:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=226)** We discussed how to create and enforce a coding standard, including how to collaborate with a team to write one.
>
> **[3:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=233)** We introduced unit, integration, functional and system testing and compared to how they interact with different parts of the application.
>
> **[4:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=242)** We looked at how testing frameworks can automate testing.
>
> **[4:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=245)** Then compared different approaches to writing test specifications using processes like behavior-driven development.
>
> **[4:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=253)** Finally, we found more ways to check correctness using assertion libraries.
>
> **[4:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=258)** With this foundation, we're ready to add a coding standard to our existing application and start linting for code quality.
>
> **[4:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/assertions-for-correctness?u=76281980&t=267)** But first, take a moment to practice your skills with a brief challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (2), assert (2), module (2), case, (1), match. (1)
> **Definitions:** is a  (5)
> **File Paths:** node.js (2), should.js (1)
> **CLI Commands:** node (2), cat (1)
> **URLs:** [example.com](https://example.com) (1), [chaijs.com](https://chaijs.com) (1), [github.io](https://github.io) (1)
> **Analogies:** such as (2), for example (1)
> **Env Vars:** api (2)
> **Cross-References:** earlier in (1), we discussed (1)

#### Challenge: Organize your tests
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-organize-your-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-organize-your-tests?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-organize-your-tests?u=76281980&t=5)** - [Instructor] In this chapter, we learned about several different kinds of tests.
>
> **[0:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-organize-your-tests?u=76281980&t=9)** What are some ways we can organize them?
>
> **[0:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-organize-your-tests?u=76281980&t=12)** The four major kinds of tests are unit tests, integration tests, functional tests, and system tests.
>
> **[0:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-organize-your-tests?u=76281980&t=20)** Files containing the test can either be outside of the project or within the project.
>
> **[0:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-organize-your-tests?u=76281980&t=25)** Finally, there are some different naming conventions for the files, such as FILE.test.js, TARGET-loadtest.js, a test directory with a workflow, and a test directory with a route.
>
> **[0:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-organize-your-tests?u=76281980&t=42)** Write these onto a piece of paper or in a drawing program.
>
> **[0:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-organize-your-tests?u=76281980&t=46)** For each type of test, draw a line from the type to the location of the test and a second line to the possible file name.
>
> **[0:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-organize-your-tests?u=76281980&t=54)** The solution will be in the next video.
>
> **[0:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-organize-your-tests?u=76281980&t=56)** See you in a moment.

> [!info]- Semantic Content
>
> **File Paths:** file.test.js (1), target-loadtest.js (1)
> **Env Vars:** file (1), target (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Organize your tests
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=0)** - [Instructor] Here's the solution to the challenge about organizing your tests.
>
> **[0:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=9)** If you haven't completed it yet, please take a moment to practice your skills.
>
> **[0:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=14)** We'll start with unit tests which test the smallest piece of code.
>
> **[0:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=19)** Unit tests are contained within the project itself.
>
> **[0:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=23)** One common location for unit tests is the directory with the file being tested.
>
> **[0:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=28)** So, file.test.js is the closest match.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=33)** Integration tests combine multiple units and don't involve outside surfaces so within the project is the most logical location.
>
> **[0:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=42)** Often, integration tests are against a particular API routes that may call multiple units in order to do their work.
>
> **[0:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=49)** So, a route file within a tests subdirectory would be a good location.
>
> **[0:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=54)** What about functional tests?
>
> **[0:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=57)** These can sometimes involve a service like a database and larger pieces of the application.
>
> **[1:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=62)** So, both within and outside the project are possible.
>
> **[1:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=67)** Functional tests often have a workflow and a series of steps so organizing them by a name for the workflow is logical.
>
> **[1:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=75)** Finally, system tests exercise the entire application.
>
> **[1:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=79)** An application can be made up of multiple projects so outside the project is the most likely location.
>
> **[1:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=86)** An example of a system test is a load test so this would be the most likely answer.
>
> **[1:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=92)** There's more than one way to organize tests and these are not absolute answers but they do give some ways to start organizing.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-organize-your-tests?u=76281980&t=101)** What's the best way to organize tests within your project?

> [!info]- Semantic Content
>
> **Code Keywords:** match. (1), finally, (1)
> **File Paths:** file.test.js (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Finding Errors with Linting

> [↑ Back to Table of Contents](#table-of-contents)

#### Standardizing with EditorConfig
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=0)** - [Instructor] So far, we've been discussing concepts and terms.
>
> **[0:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=4)** It's time to start cleaning up our code base and find errors using linting.
>
> **[0:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=10)** In this chapter, we're going to start by standardizing text editor configurations.
>
> **[0:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=15)** We'll add support for the standard to both our project and to VS Code.
>
> **[0:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=19)** Once that's in place, we'll start comparing linters to see the advantages of each.
>
> **[0:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=25)** With an informed decision, we'll install a linter that should address our needs.
>
> **[0:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=30)** We'll step through how to create to the linters configuration then extend an existing shared linter configuration to save time.
>
> **[0:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=38)** Then, we'll lint the entire code base and filter the results to be actionable.
>
> **[0:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=43)** Finally, we'll set up VS Code to clean code and highlight linter errors.
>
> **[0:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=49)** A developers preferred code editor is a badge of honor, and typically a passionate decision.
>
> **[0:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=55)** With such a variety of options, how can you maintain coding styles across multiple editors with the least amount of effort?
>
> **[1:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=63)** The solution is a system called editor config which has widespread support throughout coding related programs and systems.
>
> **[1:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=72)** Editor config, whose homepage is [editorconfig.org](https://editorconfig.org) is a system that defines and maintains consistent coding styles across editors.
>
> **[1:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=81)** It consists of two parts.
>
> **[1:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=83)** The first, this is a file format which defines a coding style, mostly around the use of white space.
>
> **[1:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=90)** The second is a text editor plugin which reads the file format.
>
> **[1:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=95)** When used it configures the editor to adhere to the specified coding styles.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=101)** There's a number of reasons why using editor config is advantageous.
>
> **[1:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=106)** As we learned in chapter one, standardization improves the quality of a code base by minimizing inconsistencies.
>
> **[1:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=113)** The editor config file format is human readable and describes its settings clearly.
>
> **[1:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=119)** It's a free and open source industry standard, which when using open source software is optimal.
>
> **[2:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=126)** Editor config is flexible enough to support the configuration of multiple private and public organizations that I've been a part of.
>
> **[2:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=134)** Finally, editor config is available in most text editors, either natively or as a plugin.
>
> **[2:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=141)** A number of open source projects use editor config which in itself is a good endorsement.
>
> **[2:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=147)** Node JS, the programming language we're using is a good start.
>
> **[2:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=151)** jQuery, the venerable cross-platform JavaScript library, the lodash utility library, the React user interface library and the webpack module bundler all use editor config.
>
> **[2:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=164)** So, what's an editor config actually look like?
>
> **[2:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=168)** I've included a complete editor config configuration file which uses almost all of the options in the solutions directory.
>
> **[2:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=175)** As you can see, it's fairly brief and human readable.
>
> **[2:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=179)** We're going to go through each setting.
>
> **[3:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=181)** So don't worry about reading every line.
>
> **[3:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=184)** If you just want to use editor config without knowing how it works, skip to the next video.
>
> **[3:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=190)** Editor config files are named .editorconfig.
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=194)** They use the INI text file format, which is quite forgiving.
>
> **[3:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=198)** All the properties and values are case insensitive which improves usability.
>
> **[3:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=204)** You don't have to use all the properties at once if you don't need or want them, which is flexible.
>
> **[3:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=210)** Editor config supports comments, which start with either a pound sign or a semi-colon.
>
> **[3:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=216)** For example, this is the header from the file which gives context to other developers about what this thing is and where to get more information about it.
>
> **[3:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=225)** The root property, which in our example was set to true is a special property that should be at the top of the file.
>
> **[3:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=232)** Root indicates that the current file is the top most editor config file in a project.
>
> **[3:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=238)** This tells the plugin not to search in the parent directories for another configuration file, which improves performance.
>
> **[4:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=245)** As such, only set root to be true in the root directory of the project.
>
> **[4:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=251)** Root takes a Boolean value, so true or false.
>
> **[4:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=255)** Editor config files are broken up into sections which have a consistent naming convention.
>
> **[4:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=261)** They start with an open square bracket, the file path, then a closing bracket.
>
> **[4:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=267)** This matches in a given file path using globs which should be pretty familiar when I start giving examples.
>
> **[4:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=274)** The asterisk character is a wild card for any character except the path separators.
>
> **[4:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=280)** For example, a section for asterisk will match all files.
>
> **[4:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=284)** A section for asterisk dot md will match only markdown files with that extension.
>
> **[4:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=291)** Section names can match with additional patterns such as a curly brace to match either name.
>
> **[4:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=298)** The double asterisk matches any characters, including the path.
>
> **[5:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=303)** Put them together like this section name and you'll recursively match all JavaScript files within the lib, source and test directories Within each section are pairs of properties and values.
>
> **[5:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=315)** The indentation properties start with the eternal question, what indent style should be used, tabs or spaces?
>
> **[5:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=323)** Then, what size of the columns should the indent be?
>
> **[5:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=326)** For spaces, this is the number of single-spaced characters.
>
> **[5:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=330)** The value is an integer or tab if the indent style is tab.
>
> **[5:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=335)** If you're using tabs then you need to specify the tab width, which is the number of columns for each tabstop.
>
> **[5:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=342)** This is only useful when using tab and it defaults to the indent size so there's a good possibility you won't need it.
>
> **[5:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=350)** Here's an example of indentation properties.
>
> **[5:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=354)** This one uses spaces, not tabs and two spaces per indent.
>
> **[5:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=359)** A related property is end of line, which is the line ending format.
>
> **[6:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=364)** There are three potential values.
>
> **[6:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=367)** The first is LF for line feed, which is used for Unix and Linux.
>
> **[6:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=372)** Next is CRLF for carriage return and line feed which is used for DOS and Windows.
>
> **[6:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=379)** The final is CR just carriage return which is sometimes used by Mac.
>
> **[6:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=385)** A good choice is LF for line feed for compatibility with other utilities.
>
> **[6:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=391)** The file character encoding using the charset property is also important.
>
> **[6:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=396)** Latin1 is limited and will corrupt non-Latin characters including mission-critical emojis.
>
> **[6:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=402)** Utf8 is the most common in coding and I and other projects recommend it.
>
> **[6:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=408)** There's also utf8be for big-endian byte order and utf16le for little-endian byte order if you need an extended character set.
>
> **[6:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=419)** Most developers will be fine with a charset set to utf8.
>
> **[7:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=425)** The trim of trailing white space property specifies whether white space is allowed at the end of lines.
>
> **[7:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=430)** This is definitely a code style, but it does affect maintainability.
>
> **[7:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=435)** Nobody likes navigating to the end of the line only you find some phantom space that needs to be trimmed.
>
> **[7:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=441)** This is a Boolean property, so true or false, therefore setting trim trailing white space to true will lead to a more consistent and clean code base.
>
> **[7:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=452)** The final property is insert final new line which ensures files end with a new line when saving.
>
> **[7:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=459)** This is important because in Unix text files every line must end with a new line.
>
> **[7:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=465)** If a file isn't empty and doesn't end with a new line it's not considered to be a text file.
>
> **[7:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=471)** This can cause bugs and other weirdness in other systems.
>
> **[7:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=475)** It's a Boolean property as well so as an example, insert final new line can be set to true.
>
> **[8:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=483)** That may have been more than you ever wanted to know about editor config, but I've found that knowing how something works is better than just blindly using it.
>
> **[8:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=491)** Also you'll be in a much better position to optimize the configuration meet your needs.
>
> **[8:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/standardizing-with-editorconfig?u=76281980&t=496)** Let's install editor config support into VS Code and add the configuration file to our project.

> [!info]- Semantic Content
>
> **Definitions:** is a  (10), is an  (1)
> **Code Keywords:** finally, (2), private (1), public (1), interface (1), module (1)
> **CLI Commands:** find (2), node (1)
> **Env Vars:** ini (1), crlf (1), dos (1)
> **Tools:** vs code (3)
> **Analogies:** for example (2), such as (1)
> **Prerequisites:** install (2), set up (1)
> **Code Identifiers:** jquery (1)

#### Adding EditorConfig to a project and IDE
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=0)** - It could take hours to add editor config to a project and editor or more likely just a minute or two.
>
> **[0:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=8)** Adding editor config support to an editor is well-documented at [editorconfig.org](https://editorconfig.org).
>
> **[0:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=14)** In fact, some editors already include native support, so you might not need to do anything.
>
> **[0:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=20)** Others like vs code require an open source plugin or extension.
>
> **[0:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=25)** Let's get started.
>
> **[0:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=27)** Switch over to vs code.
>
> **[0:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=29)** Launch vs code quick open by pressing control and P.
>
> **[0:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=34)** Type the following command E X T, space install space editor, config dot editor, config and press enter to install the extension.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=47)** After a moment, the extension should be installed and listed within the extensions marketplace on the sidebar.
>
> **[0:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=54)** That's basically it.
>
> **[0:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=56)** If you click on the extension that you just installed, you'll see some release notes and some supported properties.
>
> **[1:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=63)** No configuration is needed so click the Explorer icon in the activity bar to return to our workspace.
>
> **[1:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=72)** Now that the extension is installed, we'll need to add the editor config configuration to the project.
>
> **[1:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=79)** The process is to just create or copy the file to the root folder of the project.
>
> **[1:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=84)** It's best practice to update the read me.md to tell other developers that it's available.
>
> **[1:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=91)** Make sure that the projects open.
>
> **[1:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=93)** From the Explorer, right click and go to new file.
>
> **[1:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=98)** The path of the file is dot editor Config, no spaces or capitalization.
>
> **[1:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=105)** We'll need the source file to copy and paste from.
>
> **[1:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=109)** Navigate to the file menu.
>
> **[1:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=110)** Go to open file, then go to the desktop or wherever you place the exercise files.
>
> **[1:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=117)** Go to solutions and go to oh two underscore oh two.
>
> **[2:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=123)** I named this version dot TXT to avoid hidden file issues.
>
> **[2:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=127)** Select the file, double-click to open.
>
> **[2:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=131)** We're going to copy and paste the contents.
>
> **[2:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=133)** Go to the selection menu and go to select all.
>
> **[2:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=137)** Then in the editor, right-click and go to copy.
>
> **[2:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=141)** We can now close the source file by clicking the X in the tab.
>
> **[2:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=146)** In the fresh editor config file, right-click and choose paste.
>
> **[2:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=150)** The contents should be shown.
>
> **[2:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=153)** Save the changes.
>
> **[2:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=154)** That's it.
>
> **[2:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=156)** We can test the configuration out.
>
> **[2:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=158)** Click on the last file in the editor config window, if it isn't already and then press delete or backspace on your keyboard to remove the final line.
>
> **[2:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=168)** Then press tab a few times to add some white space.
>
> **[2:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=172)** Save again.
>
> **[2:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=174)** Notice that there's a new line added automatically to the file and the cursor is on the line below the faults.
>
> **[3:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=180)** If I press left on my keyboard, the cursor just goes to after faults which demonstrates that there's no space there anymore.
>
> **[3:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=189)** Let's close the editor config tab by clicking the X in the tab.
>
> **[3:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=195)** Now the editor config is configured.
>
> **[3:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=197)** Let's update the read me.
>
> **[3:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=199)** In the Explorer, click read me.md to open it.
>
> **[3:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=204)** Navigate to the development header.
>
> **[3:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=207)** Add some space then type, this project uses editor can fig to standardize text editor configuration.
>
> **[3:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=220)** Visit https//[editorconfig.org](https://editorconfig.org) for details.
>
> **[3:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=228)** Save the changes.
>
> **[3:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=231)** We can now close the read me file by clicking X in the tab.
>
> **[3:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/adding-editorconfig-to-a-project-and-ide?u=76281980&t=236)** Now that we've set up a baseline coding standard, how can we lint JavaScript files to find problems?

> [!info]- Semantic Content
>
> **UI Navigation:** go to (8), in the tab (3), click on (2), navigate to (2), right-click (2)
> **Code Keywords:** let (3), require (1), switch (1), from. (1), delete (1)
> **Tools:** vs code (3)
> **Prerequisites:** install (2), set up (1)
> **File Paths:** me.md (2)
> **CLI Commands:** make (1), find (1)
> **URLs:** [editorconfig.org](https://editorconfig.org) (2)
> **Env Vars:** txt (1)

#### Comparing JavaScript linters
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=0)** - [Narrator] There are a number of different JavaScript Linters available that can be used to find suspicious code.
>
> **[0:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=7)** Believe it or not, you already have a linter installed.
>
> **[0:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=11)** Node.js has a built-in checker through the command line, just type node dash dash check and then the path to the file.
>
> **[0:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=20)** This checks for syntax errors in a single target file.
>
> **[0:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=24)** While this does have some utility, like a quick one-off sanity check, it doesn't scale to an entire project.
>
> **[0:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=31)** The three most common JavaScript Linters are, JSLint, JSHint and ESLint.
>
> **[0:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=39)** There all JavaScript syntax checkers and validators, each of them supports ES6 standards at a minimum and they're all free and open source software.
>
> **[0:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=49)** Let's take a closer look at each.
>
> **[0:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=52)** JSLint from [jslint.com](https://jslint.com) is by Douglas Crockford author of the fantastic book ''JavaScript: The Good Parts''.
>
> **[1:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=60)** JSLint works well out of the box, but that's both its power and its limitation.
>
> **[1:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=66)** There are very few configuration options, you can't configure it with a file within a project and you can't write custom rules and there's limited documentation around rules and features.
>
> **[1:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=76)** With that said, it was the first JavaScript Linter and all other tools have iterated on its success.
>
> **[1:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=84)** The next linter is JSHint from [jshint.com](https://jshint.com).
>
> **[1:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=88)** It started as a fork of JSLint, that made it more configurable.
>
> **[1:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=92)** In fact, every rule can be configured independently.
>
> **[1:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=96)** This facilitates the use of a configuration file to use within projects, to standardize the testing.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=101)** It has a good amount of documentation, but does not support custom rules or plugins.
>
> **[1:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=107)** In interesting note, in 2020 it was relicensed to the MIT license, making it truly open source.
>
> **[1:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=113)** Congratulations to the maintainers for coordinating that.
>
> **[1:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=117)** JSHint is fantastic, but not a complete solution.
>
> **[2:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=121)** ESLint from [eslint.org](https://eslint.org), uses the same core values as JSHint and JSLint and removes the limitation.
>
> **[2:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=129)** It comes with scores of rules, including coding styles.
>
> **[2:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=134)** Similar to JSHint, there's a lot of flexibility in rule configuration.
>
> **[2:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=139)** In fact, some rules have additional more granular settings, if the defaults don't meet your needs.
>
> **[2:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=146)** Also similar to JSHint, ESLint can use a configuration file that can be included within projects.
>
> **[2:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=153)** ESLint provides very comprehensive documentation and is well supported.
>
> **[2:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=159)** ESLint is not limited to the functionality that it chips with.
>
> **[2:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=163)** Unlike JSHint and JSLint, ESLint can be extended with plugins.
>
> **[2:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=169)** This includes the ability to write custom rules and ways of formatting reports.
>
> **[2:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=174)** ESLint also includes the ability to automatically fix many problems that it detects, which we'll talk about in greater detail later in the chapter.
>
> **[3:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=183)** What are some of the open source projects that use ESLint?
>
> **[3:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=186)** This list may sound familiar Node.js, jQuery, Lodash, React and webpack all use ESLint.
>
> **[3:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=195)** ESLint has incredibly broad adoption across the industry.
>
> **[3:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=200)** Another tool you may have heard about is prettier, available from [prettier.io](https://prettier.io).
>
> **[3:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=205)** Prettier in the words of their project page, is an opinionated code formatter.
>
> **[3:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=210)** It's very fast as it does just one thing, it automatically reformats your code.
>
> **[3:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=216)** Prettier is not a linter, which means it's not looking for functional problems.
>
> **[3:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=222)** ESLint does some of the same code formatting, but prettier goes a lot further.
>
> **[3:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=226)** Prettier can be used alongside ESLint in a configuration, which delegates linting only to ESLint and formatting to prettier.
>
> **[3:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=235)** I would like to make a distinction though, Linting and code formatting are two different things.
>
> **[4:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=241)** Nicholas Zakas, the original author of ESLint said, ''I regret the part I played in devs thinking that linters and code formatters are synonymous''.
>
> **[4:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=251)** Keep that in mind, as you determine the tooling you want to use for checking for code errors and formatting your code.
>
> **[4:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=258)** In this course, I'm going to be using only ESLint for a number of reasons.
>
> **[4:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=263)** First it's currently the most popular JavaScript Linter, ESLint is flexible in both the configuration and the ability to add custom functionality.
>
> **[4:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=273)** ESLint can both lint and correct formatting and fix problems in one tool, which overall simplifies configuration and support.
>
> **[4:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=281)** Finally, ESLint has the best documentation and community support of all the available Linters.
>
> **[4:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=289)** It's good to know what's available and make an informed decision.
>
> **[4:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/comparing-javascript-linters?u=76281980&t=292)** So how do we go about adding ESLint to our project?

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), make (2), find (1)
> **URLs:** [jslint.com](https://jslint.com) (1), [jshint.com](https://jshint.com) (1), [eslint.org](https://eslint.org) (1), [prettier.io](https://prettier.io) (1)
> **File Paths:** node.js (2)
> **Code Keywords:** let (1), finally, (1)
> **Env Vars:** es6 (1), mit (1)
> **Analogies:** similar to (2)
> **Code Identifiers:** jquery (1)
> **Cross-References:** later in (1)

#### Installing ESLint
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=0)** - [Instructor] There's more than one way to install ESLint.
>
> **[0:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=3)** So let's compare the approaches.
>
> **[0:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=6)** The first and most tempting is to install ESLint globally.
>
> **[0:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=11)** The good thing about this approach is you can just type ESLint to run the program.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=16)** However, it comes with a terrible curse, installing ESLint globally is a package management anti-pattern for several reasons.
>
> **[0:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=25)** The locally installed version will not likely be in sync with the other developers.
>
> **[0:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=29)** Different projects may be expecting different versions of ESLint.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=33)** Finally, a globally installed version of use of ESLint, means plugin management can be difficult to maintain.
>
> **[0:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=40)** Believe me, I felt this particular pain before.
>
> **[0:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=43)** Instead, the optimal approach is to install ESLint within a project.
>
> **[0:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=48)** This is good because ESLint can be managed like any other package that you're going to be using.
>
> **[0:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=54)** Just add ESLint to the development dependencies, on installation ESLint will be installed in the node modules folder.
>
> **[1:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=63)** What's the best way to run it?
>
> **[1:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=65)** The solution is to use npx, which is npm package runner, npx has been available since npm version 5.2 and it makes it easy to use command line interface tools.
>
> **[1:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=78)** I'd like to clear up some misconceptions around task runners and linters A question that I've heard is, do I need gulp, grunt or something similar to run a linter?
>
> **[1:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=89)** Nope, you do not.
>
> **[1:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=91)** Why not?
>
> **[1:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=92)** ESLint is a flexible platform with granular configuration and it's completely functional as a standalone application.
>
> **[1:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=99)** Also, linting is not a compilation task, it's a type of testing.
>
> **[1:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=105)** What about editors?
>
> **[1:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=106)** Can they lint files without using a task runner?
>
> **[1:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=109)** Yes they can, and I'll show you how.
>
> **[1:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=112)** All right, so if I'm recommending not to use a task runner, what if it's necessary for additional ESLint runtime configurations?
>
> **[2:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=120)** Just use the package.json scripts property instead.
>
> **[2:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=124)** For example, you may want a continuous integration build process that links your application and generates a report.
>
> **[2:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=131)** It can be done on one line, no separate task runner or plugins is necessary.
>
> **[2:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=136)** To summarize, you don't need a separate task runner to lint.
>
> **[2:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=141)** Lets install ESLint by adding it to the devDependencies around project.
>
> **[2:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=146)** Switch over to VS code.
>
> **[2:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=149)** We're going to need to switch the terminal.
>
> **[2:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=152)** We're going to use npm to install ESLint, and then a space dash D, to add it to the devDependencies, press enter.
>
> **[2:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=163)** After a moment, ESLint will be added to the project.
>
> **[2:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=168)** Let's execute ESLint directly from the terminal, type npx, the package runner ESLint, then space, then dash dash help.
>
> **[3:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=181)** The ESLint usage instructions will be shown.
>
> **[3:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=184)** You can scroll the terminal with your mouse wheel, to see all of the instructions.
>
> **[3:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=189)** At the very top, the usage will be shown, basically ESLint, then options if any, then the target to scan.
>
> **[3:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=198)** Okay, so let's scan the current directory, type npx space ESLint space dot to indicate the current directory, press enter.
>
> **[3:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=209)** That's a bit gnarly.
>
> **[3:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=212)** Let's scroll up a little bit.
>
> **[3:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=214)** Oops, something went wrong.
>
> **[3:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=215)** ESLint couldn't find a configuration file.
>
> **[3:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=219)** We can fix this problem by creating the configuration.
>
> **[3:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/installing-eslint?u=76281980&t=223)** How do we go about configuring ESLint?

> [!info]- Semantic Content
>
> **CLI Commands:** npx (4), npm (3), node (1), find (1)
> **Code Keywords:** let (4), switch (2), finally, (1), interface (1)
> **Tools:** terminal (3), command line (1), vs code (1)
> **Prerequisites:** install (5)
> **Code Identifiers:** devdependencies (2)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), for example (1)
> **File Paths:** package.json (1)

#### Configuring ESLint
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=0)** - [Instructor] Since ESLint requires a configuration, let's create one.
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=5)** The [ESLint.org](https://ESLint.org) website contains a comprehensive user guide on configuration.
>
> **[0:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=11)** I'll give you the highlights and I recommend taking a closer look on your own.
>
> **[0:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=17)** There are two ways of configuring ESLint.
>
> **[0:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=20)** The first is with configuration files that ESLint complained about.
>
> **[0:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=24)** There are three format supported.
>
> **[0:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=27)** JavaScript files, JSON and YAML.
>
> **[0:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=31)** The files are named .eslintrc. then the extension.
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=37)** Regardless of the file format, the configuration is just an object with properties.
>
> **[0:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=42)** The other way to configure ESLint is with JavaScript comments in files, which is used for exceptions to rules.
>
> **[0:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=49)** Sometimes rules for the group aren't good for an individual.
>
> **[0:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=55)** There's actually more than one way to configure ESLint.
>
> **[0:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=57)** And that's with ESLint specific properties in package.json.
>
> **[1:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=62)** This can get really messy especially if there's a lot of rules and customization.
>
> **[1:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=67)** Also, the nature of JSON files means that there are no comments in package.json, which help give context or clarification's for decisions.
>
> **[1:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=76)** Ultimately, in my opinion, package.json should be focused on package management, not on application configuration.
>
> **[1:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=84)** Therefore please use the standard configuration files instead.
>
> **[1:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=89)** There are three different properties to be aware of in the configuration file.
>
> **[1:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=93)** The first are parserOptions which specify the JavaScript language options.
>
> **[1:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=98)** For example, the ecmaVersion, the default is 5, but it currently supports through 12.
>
> **[1:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=105)** There are also aliases.
>
> **[1:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=107)** So 2015 is aliased to 6, 2016 to 7, all the way through 2020 for 11 and 2021 for 12.
>
> **[1:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=116)** The other is source type, which is the type of file to be scanned.
>
> **[2:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=121)** It can be a script which is the default or a module if you're using ECMAScript modules.
>
> **[2:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=127)** The next is the ENV or environment configuration.
>
> **[2:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=131)** ENV just specifies predefined global variables for particular environments.
>
> **[2:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=135)** The value is boolean.
>
> **[2:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=137)** So set true to enable one.
>
> **[2:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=139)** For example, for the back end of a node JS express app, you'd set browser to false, node to true, es2020 to true and jquery to false.
>
> **[2:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=151)** Rather than me listing them all, please see the documentation for more options.
>
> **[2:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=156)** Finally, we've got the rules which define what ESLint is looking for.
>
> **[2:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=160)** See the ESLint docs for list of all the available rules, which are grouped by category.
>
> **[2:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=166)** Each rule has a setting as its value, such as off or zero to disable.
>
> **[2:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=171)** There's also a warn or 1 which will report a problem, but not set the exit code.
>
> **[2:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=177)** For real problems use error or 2 which will set the exit code.
>
> **[3:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=183)** Here's four examples of rules.
>
> **[3:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=185)** No-empty which disallows empty blocks is set to an error.
>
> **[3:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=189)** No-multiple-empty-lines is set to warn, which seems reasonable.
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=194)** No VAR is an ECMAScript six rule that discourages the use of VAR and encourages the use of const and lint.
>
> **[3:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=202)** Finally, a companion rule prefer-const prefers the use of a constant if the variable is never reassigned.
>
> **[3:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=210)** This is a complete example of an ESLint configuration file in JavaScript format.
>
> **[3:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=216)** The ESLintrc.js file can be found in exercise files in the solutions 02_05 folder.
>
> **[3:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=224)** I left off the dot in the file name so it would be visible in all operating systems.
>
> **[3:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=229)** Note that this is a JavaScript file, so it's exporting an object.
>
> **[3:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=233)** I intentionally left out the parserOptions as there are already set by the ENV node and es2020.
>
> **[4:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=242)** Let's add the configuration to our project and switch over to S code.
>
> **[4:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=247)** First, we'll need to create the configuration file.
>
> **[4:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=250)** Right click in the Explorer and select new file.
>
> **[4:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=255)** For the path, just type .eslintrc.js and press enter.
>
> **[4:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=262)** Let's open the source file.
>
> **[4:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=264)** Navigate to file and open file, then we're going to go to wherever you put your exercise files, which in my case is the desktop, go to solutions 02_5 and then select eslintrc and click open.
>
> **[4:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=281)** We're going to copy and paste the contents, navigates a selection and then go to select all then right click and copy.
>
> **[4:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=291)** We can now close the source file by clicking the X in tab.
>
> **[4:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=295)** In the mteslintrc.js file in our project, right click and go to paste.
>
> **[5:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=303)** Save the file.
>
> **[5:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=305)** That's all the changes we need to make for now so we can close the eslintrc.js file.
>
> **[5:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=312)** Let's open the main application file, which has a number of errors.
>
> **[5:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=317)** In the Explorer on the left, select app.js to open.
>
> **[5:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=321)** Well, that's kind of messy.
>
> **[5:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=323)** There's a mix of vars, lints and consts, which isn't very ES6 friendly.
>
> **[5:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=329)** The large number of blank lines is also a maintainability problem.
>
> **[5:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=334)** Finally, there's an if statement that is an empty block.
>
> **[5:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=338)** It's syntactically legal, but there's no point to have it.
>
> **[5:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=342)** What does ESLint think of this file?
>
> **[5:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=344)** We're going to execute ESLint against this one file by clicking on the terminal to focus, then when it's ready type mpx eslint app.j, and press enter.
>
> **[6:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=360)** There are 12 problems, 11 errors and one warning which reflects our configuration.
>
> **[6:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=366)** We already know that there are more problems.
>
> **[6:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=368)** So how do we tell ESLint to look for them?
>
> **[6:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=372)** Writing a full ESLint configuration from scratch is tedious and time consuming.
>
> **[6:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/configuring-eslint?u=76281980&t=378)** The alternative, start with a pre-existing standard and customize.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (3), var (2), const (2), type, (1)
> **Env Vars:** env (3), json (2), var (2), yaml (1), es6 (1)
> **File Paths:** package.json (3), eslintrc.js (3), mteslintrc.js (1), app.js (1)
> **UI Navigation:** go to (4), open the (2), navigate to (1)
> **Definitions:** is an  (2), is a  (2), means that (1)
> **CLI Commands:** node (3), make (1)
> **Code Identifiers:** parseroptions (2), ecmaversion (1)
> **Analogies:** for example (2), such as (1)

#### Extending an ESLint shareable config
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=0)** - [Instructor] One of the nice features of ESLint is the ability to extend an existing ESLint configuration.
>
> **[0:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=6)** These are known as shareable configs.
>
> **[0:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=10)** Practically, a shareable config is just an npm package that exports an ESLint configuration object.
>
> **[0:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=17)** The name of the package must begin with "enslint-config-" then the name of the configuration.
>
> **[0:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=25)** Shareable configs can be published on npm to share with others.
>
> **[0:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=29)** I always like the open source approach.
>
> **[0:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=31)** They can also be kept private, which works well for organizational standards that may include proprietary justification or context.
>
> **[0:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=41)** There are two steps necessary for using a shareable config.
>
> **[0:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=45)** First, add the package to the development dependencies of the project and install it.
>
> **[0:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=50)** Then update the ESLint configuration to include the extends property and the name of the configuration that it extends.
>
> **[0:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=57)** For example, "extends": "enslint-config-myconfig."
>
> **[1:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=62)** There's a shorthand as well, which leaves off the ESLint config.
>
> **[1:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=66)** So "extends": "myconfig" will work the same and be nicer to look at.
>
> **[1:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=71)** ESLint includes a recommended configuration which should be safe for most code bases.
>
> **[1:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=76)** To use it, add "extends:" "eslint:recommended."
>
> **[1:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=81)** It includes a number of logical rules including possible errors, best practices, variable use, and ECMAScript 6 directives.
>
> **[1:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=91)** Let's update our project to use this configuration.
>
> **[1:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=95)** Return to visual studio code.
>
> **[1:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=97)** Let's open up the ESLintrc.js again.
>
> **[1:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=102)** Then let's add an extends after the ENV.
>
> **[1:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=106)** So with "extends:" "enslint:recommended"
>
> **[1:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=116)** and then don't forget the trailing comma.
>
> **[1:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=119)** The no empty rule is already included with the ESLint recommended rules so we can delete that line.
>
> **[2:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=126)** Let's save the file and then let's recheck that file with the updated configuration.
>
> **[2:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=133)** Let's close the eslintrc.js and then reopen app.js so we have context.
>
> **[2:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=140)** Then down in the terminal type "MPX ESLint" space and then app.js and press enter.
>
> **[2:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=151)** This time there are 14 errors and one warning.
>
> **[2:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=155)** A nice thing that it noticed is that both configuration and next were assigned a value, but never used.
>
> **[2:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=161)** The feedback is getting more comprehensive.
>
> **[2:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=164)** Of course, ESLint isn't the only available shareable configuration.
>
> **[2:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=169)** Here's three shareable configs to consider.
>
> **[2:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=173)** The Airbnb JavaScript and React Style Guide, published on GitHub is incredibly comprehensive and well-written.
>
> **[3:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=181)** I consider it a model for both the scope and brief justifications for each rule.
>
> **[3:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=186)** There's the JavaScript standard style, also on GitHub.
>
> **[3:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=189)** It's intended to bike shedding discussions that can distract from getting stuff done and that's a great place to start.
>
> **[3:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=197)** Finally, the Google JavaScript Style Guide on GitHub takes a very technical and formal approach.
>
> **[3:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=203)** There's crossover between all three, so it's good to have a comparison.
>
> **[3:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=208)** For a more comprehensive list of ESLint plugins and configurations, check out Dustin Specker's list on GitHub.
>
> **[3:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=217)** Creating a shareable configuration is the challenge at the end of this chapter.
>
> **[3:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=221)** But first I want to give some recommendations from experience.
>
> **[3:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=225)** The official documentation for shareable configs is a good reference.
>
> **[3:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=229)** A shareable config can extend another configuration, even multiple configurations.
>
> **[3:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=234)** Same as what we did, start with an existing shareable configuration, then customize to meet your needs.
>
> **[4:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=241)** When starting with an existing one, use the "package.json peerDependencies" to specify any extended configs or plugins.
>
> **[4:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=250)** As a shared config is a package, use semantic versioning, including minor and major releases.
>
> **[4:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=256)** Finally, like any project, include a read me with instructions on how to get started and justifications.
>
> **[4:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=263)** It doesn't have to be long, but it should be helpful to others.
>
> **[4:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=268)** If you're creating a private shareable configuration, here's a couple tips to save you time.
>
> **[4:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=273)** Do not use Git submodules.
>
> **[4:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=276)** It will give you a headache and it creates unnecessary exceptions.
>
> **[4:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=280)** Instead use the package manager and treat it like any other package because that's what it is.
>
> **[4:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=286)** Do use git+ssh to add them, like "npm install git+ssh" and so forth ending for the tag.
>
> **[4:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=294)** This way you can use a private repository like any other package.
>
> **[4:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/extending-an-eslint-shareable-config?u=76281980&t=298)** We've been linting a single file, but how do we go about linting the entire code base.

> [!info]- Semantic Content
>
> **Code Keywords:** extends (7), let (6), private (3), finally, (2), delete (1)
> **CLI Commands:** npm (3), git (3), ssh (2)
> **Tools:** github (4), visual studio (1), terminal (1)
> **File Paths:** eslintrc.js (2), app.js (2), package.json (1)
> **Best Practices:** recommended (4), don't forget (1)
> **Definitions:** is a  (2), known as (1)
> **Env Vars:** env (1), mpx (1)
> **Prerequisites:** install (2)

#### Linting your codebase
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=0)** - [Instructor] The ability to Lint the entire code base is built into ESLint.
>
> **[0:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=4)** The trick is making it useful.
>
> **[0:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=7)** Switch back to VS code.
>
> **[0:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=10)** From the terminal we're going to use NPX to run ESLint but this time we're going to specify dot, which is the current directory, press Enter.
>
> **[0:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=23)** Well, there's over 1000 errors but a lot of these aren't actually in our custom code and our false positives.
>
> **[0:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=30)** If I scroll up, contrib is third-party code.
>
> **[0:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=35)** This is a very real-world situation.
>
> **[0:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=39)** A single codebase can include many different types of functionality.
>
> **[0:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=43)** Of course the Node.js application itself is included.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=47)** There's also tests, which may use a different environmental configuration.
>
> **[0:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=52)** The front end may use different coding standards such as supporting legacy browsers.
>
> **[0:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=57)** Finally, similar to testing third-party code should be excluded because you're not maintaining it.
>
> **[1:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=63)** To address this type of situation, ESLint configuration files support a hierarchy.
>
> **[1:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=69)** ESLint will recursively look for configuration files in a target.
>
> **[1:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=74)** If an additional configuration is found, it will be used on that directory and its children.
>
> **[1:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=80)** When that happens, ESLint will inherit the existing rules from the parent, then locally override whatever else was specified.
>
> **[1:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=88)** Here's a practical example of what that looks like.
>
> **[1:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=91)** In the root of the project, we've got a configuration that is optimized for Node.js.
>
> **[1:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=96)** Then in the public folder, a second configuration removes Node.js support and adds a browser friendly configuration.
>
> **[1:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=105)** Let's add that browser friendly configuration.
>
> **[1:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=108)** The completed file is in solutions 02/07 public subfolder, named without a dot for convenience.
>
> **[1:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=116)** Let's see it in action by switching over to VS code.
>
> **[2:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=121)** In the Explorer view, close routes if it's open and open up public, then right click on public and go to new file.
>
> **[2:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=131)** Call the new file .ESLintrc.js and press Enter.
>
> **[2:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=138)** You can copy and paste or just type it out.
>
> **[2:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=140)** This is pretty short.
>
> **[2:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=142)** We'll start with an expression, to return an object with a parentheses and a new object.
>
> **[2:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=148)** Then we're going to set the parser options, so ''parser options' and then a new object.
>
> **[2:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=157)** Instead of a module, these will be script files.
>
> **[2:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=160)** So source type is set to script, close the object and then follow it with a comma.
>
> **[2:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=169)** Next we'll set the environment.
>
> **[2:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=172)** So "ENV" then colon, and then new object.
>
> **[3:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=180)** This will be a browser.
>
> **[3:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=181)** So set browser to true.
>
> **[3:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=186)** We're also using jQuery to set that to be true.
>
> **[3:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=189)** So jQuery true, and finally, since we're not using node on the front end set node, two false.
>
> **[3:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=199)** Close out the ENV object, then add another comma.
>
> **[3:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=203)** We're also going to se some overriding rules to support a theoretical front end teams preferred use of our... So rules set to new object and then no dash far is going to be off.
>
> **[3:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=222)** Off then prefer dash const is also going to be off.
>
> **[3:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=227)** Make sure the exported object is closed at a semi-colon and save the file.
>
> **[3:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=233)** Switch back to the terminal.
>
> **[3:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=236)** Let's rerun the scan NPX space, IES, lint space dot.
>
> **[4:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=244)** This time, there are way fewer problems but we're still getting warnings and errors from contrib.
>
> **[4:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=250)** What can we do about that?
>
> **[4:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=253)** - ESLint supports ignoring files and directories in a special configuration file named .ESLint ignore.
>
> **[4:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=260)** Each line is a glob pattern to emit a pattern of files and directories.
>
> **[4:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=265)** For example we'd like to exclude everything within public slash contrib.
>
> **[4:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=270)** So just add an asterisk, let's add an ignore file now.
>
> **[4:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=275)** The completed file is in the 02_07 exercise files without the leading dot for convenience.
>
> **[4:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=283)** Ready to add this one line file?
>
> **[4:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=286)** Close our IES, lint RC.js, and then in the root in Explorer, right?
>
> **[4:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=294)** Click and go to new file and call it dot ESGR lint.
>
> **[4:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=298)** Ignore with no extension and press Enter.
>
> **[5:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=304)** We only want to ignore one thing for now.
>
> **[5:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=306)** So type public/contrib/asterisk.
>
> **[5:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=312)** Save the file, then switch back to the terminal.
>
> **[5:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=317)** Reerun the scan with NPX ESLintd space and dot.
>
> **[5:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=319)** And this time with the ignore file in place.
>
> **[5:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=326)** Much more manageable, there are now less than 50 errors and warnings now.
>
> **[5:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=332)** When linting an existing project, it's good to have some practical goals.
>
> **[5:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=337)** Of course the top priority is to detect and eliminate any fatal errors.
>
> **[5:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=342)** If you have a large existing code base, avoid trying to fix all the errors in warnings at once.
>
> **[5:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=348)** This can wreck the file history in tools like Git, and if you're not careful, bugs can inadvertently get introduced.
>
> **[5:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=356)** Instead, I found that it's better to take a more incremental approach and leave code better than you found it.
>
> **[6:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=363)** Switching back and forth between VS code and the terminal isn't impossible but it's kind of awkward.
>
> **[6:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/linting-your-codebase?u=76281980&t=369)** How do we go about configuring VS code to use directly?

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), let (4), switch (3), finally, (2), override (1)
> **CLI Commands:** node (5), npx (3), make (1), git (1)
> **Env Vars:** npx (3), env (2), ies (2), esgr (1)
> **Tools:** vs code (4), terminal (4)
> **File Paths:** node.js (3), eslintrc.js (1), rc.js (1)
> **UI Navigation:** go to (2), scroll up (1), click on (1)
> **Analogies:** such as (1), similar to (1), for example (1)
> **Code Identifiers:** jquery (2)

#### Fixing code in VSC with ESLint
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=0)** - [Instructor] VC code supports ESLint with an extension, and it can even fix code automatically.
>
> **[0:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=8)** The ESLint extension by Dirk Baumer uses the ESLint library installed in the current workspace folder.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=16)** Additionally, ESLint will report errors and warnings within the IDE as you're writing code.
>
> **[0:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=24)** Another feature is that the extension can automatically fix code when you save a file.
>
> **[0:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=30)** Let's get it installed.
>
> **[0:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=32)** Switch over to visual studio code.
>
> **[0:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=35)** Let's clean up our workspace a little bit by closing out the ESLint ignore file, then, over in the activity bar on the left, click extensions.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=47)** We're going to search for D B A E U M E R, and we're going to select ESLint.
>
> **[0:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=57)** When found, click the install button.
>
> **[1:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=61)** That's all we need for now.
>
> **[1:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=63)** We can close the extension configuration and then go back to the Explorer.
>
> **[1:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=70)** Since this is the first time we're running the extension, we're going to need to give it permission.
>
> **[1:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=76)** Right here, ESLint is disabled since its execution has not been approved or denied yet.
>
> **[1:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=82)** Use the light bulb, we'll click on it, show fixes ESLint manage library execution.
>
> **[1:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=91)** I don't want to allow everywhere to remember this choice for all workspaces, so I'll just click allow for this current workspace.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=101)** ESLint has added a few things to the editor.
>
> **[1:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=104)** In the bottom left of the sidebar, there's a summary of the errors and warnings.
>
> **[1:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=109)** If I click on it, I will get a problem list.
>
> **[1:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=113)** In the editor itself, there are now underlines with different colors for warnings and errors.
>
> **[1:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=119)** When I hover over an underlined portion such as for a VAR, I see a description of the rule that is violated.
>
> **[2:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=126)** In this case, unexpected VAR use let or const instead.
>
> **[2:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=131)** If I hover over the yellow lines, I see that I violated the empty line rule.
>
> **[2:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=139)** Now it's time to start cleaning things up.
>
> **[2:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=141)** How can we fix lint errors quickly?
>
> **[2:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=145)** ESLint does have the ability to fix some of the errors it detects.
>
> **[2:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=149)** It's all or nothing though, so it tempts to fix everything in a specified file.
>
> **[2:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=154)** The command line version does not selectively fixed lines, so be careful when using it.
>
> **[2:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=160)** Individual lines can be selectively fixed in the IDE however, like any powerful tool, auto fixing can be useful in moderation.
>
> **[2:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=170)** The extension we're using does support fixing on save.
>
> **[2:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=173)** I usually avoid using this feature on an existing code base.
>
> **[2:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=177)** In my opinion, both changes should be intentional not automatic.
>
> **[3:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=182)** Instead, it's better to manually execute the commands that changes things.
>
> **[3:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=187)** Different organizations have different opinions and philosophies around preserving history.
>
> **[3:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=191)** So do what's right for your group.
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=194)** To automatically fix a file, you'll need to open VS Codes, Command Palette which is Control, Shift, and P.
>
> **[3:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=202)** You'll be prompted for the name of the command which is ESLint fix all auto-fixable problems.
>
> **[3:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=209)** Let's clean up app.js.
>
> **[3:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=212)** Return to VS Code, make sure that app.js is selected, then toggled the command palates by using Control, Shift and P.
>
> **[3:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=223)** Start typing the command, which is fix all auto.
>
> **[3:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=228)** And that should bring up fix all auto-fixable problems.
>
> **[3:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=232)** Press Enter and ESLint will attempt to clean things up.
>
> **[3:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=237)** The file immediately changed.
>
> **[3:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=239)** Most things are fixed, but some are not.
>
> **[4:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=242)** That's a lot better than it was, no more VARs either.
>
> **[4:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=246)** In the sidebar on the bottom, only four areas remain.
>
> **[4:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=251)** Clicking on the top error, configuration is assigned to value but is never used.
>
> **[4:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=258)** We can safely delete this line.
>
> **[4:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=263)** There's two errors about the unexpected constant condition and the empty block statement.
>
> **[4:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=270)** We can delete this if statement entirely.
>
> **[4:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=273)** One more error remains, next is defined but never used, however, it's necessary for error handling so we have to keep it.
>
> **[4:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=282)** For now, let's ignore it, although the better solution would be to check if the headers were already sent and call next.
>
> **[4:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=289)** So let's go to that error, and we're going to navigate to the end of the line.
>
> **[4:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=295)** We're going to add a space and then add a comment, we're going to use a special command to ESLint to disable the line and specify the rule we're disabling specifically no one used VARs.
>
> **[5:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=307)** So //eslint-disable-line nounusedvars.
>
> **[5:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=317)** Save the changes, and now all the errors are addressed.
>
> **[5:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=322)** Let's click on the close panel and close out app.js.
>
> **[5:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=327)** Let's update the Read Me to include linting information.
>
> **[5:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=330)** Clicking readme.md in the Explorer, then after the editor config line under development add, this project uses ESLint to detect suspicious code in JavaScript files, visit [httpseslint.org](httpseslint.org) for details.
>
> **[5:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=356)** Save the changes and finally close the file.
>
> **[6:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=362)** In this chapter, we've been focusing on finding suspicious code with Linting.
>
> **[6:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=367)** We started with standardizing editor configurations using the open source file format, EditorConfig, and associated extensions.
>
> **[6:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=376)** Then we added EditorConfigs support to both the project and to VS Code.
>
> **[6:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=383)** We compare the differences between JavaScript's linters then installed the most flexible option ESLint into the project.
>
> **[6:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=391)** We created an ESLint configuration then extended an existing one.
>
> **[6:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=396)** To show all errors at once, we linted the entire code base, then selectively ignored a directory and added a configuration override.
>
> **[6:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=406)** Finally, we cleaned code within VS Code using ESLint.
>
> **[6:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fixing-code-in-vsc-with-eslint?u=76281980&t=413)** Now that we have ways of scanning the code for syntax and style problems, let's validate the correctness of the application using unit testing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), var (2), delete (2), switch (1), case, (1)
> **UI Navigation:** click on (3), in the sidebar (1), go to (1), navigate to (1)
> **Tools:** vs code (3), visual studio (1), command line (1)
> **File Paths:** app.js (3), readme.md (1)
> **Env Vars:** ide (2), var (2)
> **Prerequisites:** install (1), you'll need (1)
> **CLI Commands:** make (1)
> **URLs:** [httpseslint.org](httpseslint.org) (1)

#### Challenge: Create a shareable ESLint config
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-create-a-shareable-eslint-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-create-a-shareable-eslint-config?u=76281980&t=0)** - [Instructor] In this chapter, we learned ways to find JavaScript errors with linting, including using the ESLint utility.
>
> **[0:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-create-a-shareable-eslint-config?u=76281980&t=13)** How can we make a shareable ESLint configuration?
>
> **[0:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-create-a-shareable-eslint-config?u=76281980&t=17)** The [eslint.org](https://eslint.org) website includes a comprehensive guide for creating shareable configs.
>
> **[0:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-create-a-shareable-eslint-config?u=76281980&t=23)** First, read through the documentation.
>
> **[0:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-create-a-shareable-eslint-config?u=76281980&t=26)** With that knowledge, make a new module outside of the Nadia project.
>
> **[0:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-create-a-shareable-eslint-config?u=76281980&t=32)** I will be demonstrating using the Challenges directory in the exercise files.
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-create-a-shareable-eslint-config?u=76281980&t=37)** Within the new module, use the configuration we wrote for Nadia.
>
> **[0:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-create-a-shareable-eslint-config?u=76281980&t=42)** The goal is to make something that can be included in this and in other projects.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-create-a-shareable-eslint-config?u=76281980&t=47)** My solution will be in the next video.
>
> **[0:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-create-a-shareable-eslint-config?u=76281980&t=50)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** module (2)
> **URLs:** [eslint.org](https://eslint.org) (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a shareable ESLint config
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=0)** (intro music)
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=5)** - Here's the solution to the challenge about creating a sharable ESLint configuration.
>
> **[0:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=10)** If you haven't completed it yet, please take a moment to practice your skills.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=16)** Switch over to vs code.
>
> **[0:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=18)** From file, go down to open folder, navigate to the exercise files and then select challenges, and then the 02_10 folder, click select folder or okay to open the folder.
>
> **[0:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=34)** There's a read me in here already with the steps for the challenge.
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=37)** Take a look at the directions if you need a refresher.
>
> **[0:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=42)** Within the Explorer, right click and choose new folder.
>
> **[0:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=48)** Specify the name which begins with ESLint dash config dash.
>
> **[0:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=54)** Then the custom name, which in this case will be Nadia and press enter.
>
> **[1:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=60)** Let's open up the terminal.
>
> **[1:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=63)** Change directory to ESLint dash config dash Nadia.
>
> **[1:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=68)** Initialize a new module with the defaults using NPM space init space dash Y and press enter.
>
> **[1:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=77)** This will create the package dot JSON file.
>
> **[1:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=81)** Over in the Explorer, click on the ESLint config Nadia folder and then right click and go to new file.
>
> **[1:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=89)** Give it the name index dot JS.
>
> **[1:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=94)** This file will just export an object containing the settings.
>
> **[1:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=97)** We can copy this from the ESLint RC dot JS from our project.
>
> **[1:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=102)** Navigate up to file, open file and go back to the exercise files, solutions.
>
> **[1:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=111)** Go back to 02_06 and get the ESLint RC dot JS.
>
> **[1:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=117)** Let's copy the entire file.
>
> **[1:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=119)** Paste the contents of the file, then save the changes.
>
> **[2:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=124)** Finally, we need to add ESLint as a peer dependency.
>
> **[2:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=128)** Open package dot JSON.
>
> **[2:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=131)** After the license, add a comma then a new object containing the peer dependencies that contains an object.
>
> **[2:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=141)** Within it, specify that we need the project ESLint with a colon then the version range of greater than equal to seven.
>
> **[2:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=152)** Save the changes.
>
> **[2:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=154)** That's it.
>
> **[2:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=155)** How can we test it?
>
> **[2:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=156)** Let's make the package available locally using NPM link.
>
> **[2:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=161)** Focus on the terminal then type NPM space link.
>
> **[2:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=168)** Notice the warning that it requires a peer to have ESLint installed.
>
> **[2:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=173)** This is fine because our Nadia project already has it.
>
> **[2:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=176)** The last step is to add a read me.
>
> **[2:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=179)** In the explorer, right-click on ESLint config Nadia and choose new file and then specify the name, Readme.md.
>
> **[3:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=190)** Press enter.
>
> **[3:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=192)** Within the file, start with a heading with a hashtag space ESlint dash config dash Nadia then the description, a shareable ESLint configuration extending the ESLint recommended rule set.
>
> **[3:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=212)** Make sure ESLint is installed along with this module.
>
> **[3:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=220)** Save the changes then open Nadia again.
>
> **[3:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=226)** I'm going to go to recent and go back to Nadia.
>
> **[3:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=231)** Then open the terminal, link the module to the project.
>
> **[3:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=236)** This won't permanently change it, but for the purposes of this demonstration, it'll work.
>
> **[4:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=241)** Type NPM link ESLint dash config dash Nadia.
>
> **[4:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=248)** Now open the ESLint RC dot JS, replace the content with just extends colon Nadia
>
> **[4:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=262)** and save the changes.
>
> **[4:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=265)** Finally, to test the configuration, go down to the terminal and type MPX, ESLint and dot.
>
> **[4:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=273)** Fantastic, we've abstracted the configuration.
>
> **[4:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=276)** Let's reset the configuration for now.
>
> **[4:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=280)** Go back to the ESLint RC dot JS, undo until the original contents are there then save the changes.
>
> **[4:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=288)** Finally, unlink the configuration, NPM, unlink ESLint dash config dash Nadia.
>
> **[4:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=298)** We can now close the terminal and the ESLint RC dot JS file.
>
> **[5:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=304)** The project should now be back to its original state.
>
> **[5:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=307)** The completed version of the module is in the solutions, 02_10 directory.
>
> **[5:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=313)** This example is pretty brief but an organization with custom rules and plugins would benefit from having a unified configuration.
>
> **[5:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-create-a-shareable-eslint-config?u=76281980&t=321)** What kind of ESLint shareable config would be helpful to you?

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), module (4), finally, (3), switch (1), extends (1)
> **Env Vars:** npm (5), json (2), mpx (1)
> **UI Navigation:** open the (3), go to (2), navigate to (1), click on (1), right-click (1)
> **CLI Commands:** npm (5), make (2)
> **Tools:** terminal (5), vs code (1)
> **Cross-References:** go back to (4)
> **Exercise Files:** exercise files (2)
> **File Paths:** readme.md (1)


### 3. Validate Correctness with Unit Testing

> [↑ Back to Table of Contents](#table-of-contents)

#### Survey of Node.js testing frameworks
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=0)** - [Instructor] We've set up linting tools to scan our application for suspicious code, but that doesn't address how our application works.
>
> **[0:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=9)** Let's validate the correctness of our application with unit testing.
>
> **[0:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=14)** Throughout this chapter, our focus is going to be on unit testing tools and techniques.
>
> **[0:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=20)** We'll start with this survey of testing frameworks and their approaches to testing.
>
> **[0:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=24)** With an informed decision, we'll install a testing framework into project.
>
> **[0:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=29)** Once the tools are in place, we'll write some unit tests to prevent and detect bugs in our applications.
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=37)** Finally, we'll test two types of asynchronous code, including callbacks and promises.
>
> **[0:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=43)** Sounds exciting.
>
> **[0:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=45)** Let's get it started with a survey to compare Node.js testing frameworks.
>
> **[0:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=51)** Some of the most popular Node.js testing frameworks in alphabetical order include, Ava, Jasmine, Jest, Mocha, and tape.
>
> **[1:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=62)** We'll take a brief look at each.
>
> **[1:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=65)** AVA available from [avajs.dev](https://avajs.dev), is a minimalist testing framework in both its overhead and its approach.
>
> **[1:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=73)** It includes both an assertion library out of the box and TypeScript definitions which reduces outside dependencies.
>
> **[1:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=81)** Is primary claim to fame is that it's incredibly fast supporting concurrent test execution with separate processes.
>
> **[1:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=90)** AVA does not add to the global namespace.
>
> **[1:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=93)** The downside is, you have to explicitly require it, but the upside is that it's not arbitrarily injecting itself.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=101)** AVA supports a simplified setup mechanism for groups of tests, but also includes a more advanced tear down if the environment needs to be reset afterwards.
>
> **[1:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=110)** Jasmine available from Jasmine.[github.io](https://github.io), is a more popular testing framework.
>
> **[1:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=117)** Unlike AVA, Jasmine executes tests synchronously but it doesn't mean it's slow.
>
> **[2:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=122)** Of course, Jasmine supports asynchronous tests.
>
> **[2:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=126)** Jasmine has no external dependencies, which is actually really impressive because it includes, assertions, test doubles and a lot more.
>
> **[2:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=135)** Jasmine adds itself to the global namespace when testing, so you don't have to require any modules when writing tests.
>
> **[2:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=143)** Jest from [jestjs.io](https://jestjs.io) has become incredibly popular as of this publication.
>
> **[2:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=150)** Jest can run tests asynchronously like AVA, which gives it fast execution.
>
> **[2:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=156)** Jest also includes react support though it's not required.
>
> **[2:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=161)** One of the features of the react support is snapshot testing, where you can compare state changes over time of a webpage.
>
> **[2:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=168)** Jest also includes test double support as well out of the box.
>
> **[2:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=173)** Like Jasmine, Jest adds components to the global namespace for convenience.
>
> **[2:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=178)** Finally, Jest includes an interactive watch mode, so developers can constantly run tests as they work.
>
> **[3:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=186)** Mocha from [mochajs.org](https://mochajs.org) is very popular and one of the oldest of the JavaScript frameworks.
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=194)** Mocha executes the tests synchronously, which is slower than some of the other frameworks, but it does support async and a number of other modern standards.
>
> **[3:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=203)** It's incredibly flexible and supports plugins.
>
> **[3:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=206)** That's good because it does not include either assertions or mocks.
>
> **[3:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=211)** The downside is, it increases the number of tools needed, but the upside is that Mocha can focus on being a great test framework.
>
> **[3:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=219)** Mocha adds itself to the global namespace for convenience.
>
> **[3:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=224)** Like Jest, Mocha includes a file watcher for development.
>
> **[3:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=229)** Tape from [github.com/substack/tape](https://github.com/substack/tape), is also a minimalist framework like AVA, however it's synchronous, so execution is not in parallel.
>
> **[4:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=241)** Also like AVA taped does not provide any setup or tear down methods, and it doesn't add itself to the namespace.
>
> **[4:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=249)** In tape, you need to explicitly state when tests are complete, this can be a good thing for preventing hanging tests.
>
> **[4:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=257)** So, out of these options, which one will we be using?
>
> **[4:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=261)** In this course, we're going to be using Jest for a few reasons.
>
> **[4:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=266)** It's the most popular which also means there's a lot of documentation and support for it.
>
> **[4:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=271)** Jest is also incredibly fast which in the scope of this course, isn't as important as a real-world application.
>
> **[4:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=278)** Jest also provides a lot of out of the box functionality which reduces outside dependencies which in turn reduces the maintenance burden.
>
> **[4:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=287)** Finally, if you don't like it, the tests can be easily ported to other frameworks.
>
> **[4:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=292)** I recommend trying the others when you get a moment there's no one right way.
>
> **[4:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/survey-of-node-js-testing-frameworks?u=76281980&t=299)** Now we've made our core selection, let's install Jest in our project and start testing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (3), require (2), include, (1), async (1)
> **Env Vars:** ava (7)
> **URLs:** [avajs.dev](https://avajs.dev) (1), [github.io](https://github.io) (1), [jestjs.io](https://jestjs.io) (1), [mochajs.org](https://mochajs.org) (1), [github.com](https://github.com) (1)
> **Prerequisites:** install (2), setup (2), set up (1)
> **File Paths:** node.js (2)
> **CLI Commands:** node (2)
> **Tools:** github (2)
> **Definitions:** is a  (2)

#### Install Jest in a Node.js project
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=0)** - [Instructor] We've been discussing the tools and theory around writing tests.
>
> **[0:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=4)** Let's apply that knowledge by installing Jest.
>
> **[0:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=8)** Two steps are necessary for installation.
>
> **[0:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=12)** The first thing we need to do is use NPM to install Jest to the project's dev dependencies.
>
> **[0:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=18)** Then, we'll edit package.json and add the definition for the test script, which will just be jest.
>
> **[0:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=26)** Finally, we'll add an ESLint environment configuration for Jest globals.
>
> **[0:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=31)** This isn't strictly required, but it will reduce a number of false positives from the linter.
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=37)** Let's switch over to VS Code.
>
> **[0:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=40)** Open a terminal and make sure you're in the project directory.
>
> **[0:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=46)** We're going to use NPM to install Jest to the dev dependencies dash capital D.
>
> **[0:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=54)** Press Enter.
>
> **[0:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=58)** After a moment, Jest and its dependencies will be installed.
>
> **[1:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=63)** As we're using Jest for a test framework, we're going to have to add it to the scripts.
>
> **[1:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=67)** In the Explorer, open up package.json.
>
> **[1:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=72)** Find the script section and then add a comma, new line, and then a definition for test, which will just be jest.
>
> **[1:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=82)** Save the changes.
>
> **[1:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=84)** Focus back on the terminal and then let's run the new script.
>
> **[1:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=88)** NPM has a helper for tests so you can just type NPM space test and press Enter.
>
> **[1:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=97)** We've got an error.
>
> **[1:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=98)** No tests found.
>
> **[1:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=99)** Technically correct, the best kind of correct.
>
> **[1:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=103)** The last thing we're going to do is edit the ESLint configuration.
>
> **[1:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=107)** The completed version can be found in the exercise files and the Solutions03_02 folder.
>
> **[1:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=114)** In the Explorer, select .ESLintrc.js.
>
> **[2:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=120)** Within the ENV section, we're going to add a new property, jest, and set it to true.
>
> **[2:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=126)** So, add a trailing comma, new line, and then jest, and we'll set that to true.
>
> **[2:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=133)** Save the file, then click on the X to close the file along with package.json.
>
> **[2:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=140)** Jest is ready to go.
>
> **[2:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/install-jest-in-a-node-js-project?u=76281980&t=142)** So, how do we go about writing unit tests?

> [!info]- Semantic Content
>
> **CLI Commands:** npm (4), make (1), find (1)
> **Code Keywords:** let (3), finally, (1), switch (1)
> **Env Vars:** npm (4), env (1)
> **File Paths:** package.json (3), eslintrc.js (1)
> **Tools:** terminal (2), vs code (1)
> **Prerequisites:** install (2)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)

#### What and where to unit test?
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=0)** - [Speaker 1] It's time to start writing unit tests.
>
> **[0:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=2)** But what are we going to test?
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=5)** We have a few candidates in the application.
>
> **[0:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=8)** The reservation application has a number of custom scripts.
>
> **[0:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=13)** App.js is the express application itself.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=16)** It's less custom code and more of a configuration.
>
> **[0:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=19)** The server is located in bin/wwww.js and sets up the HTTP listener.
>
> **[0:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=28)** The library directory contains the schema for a reservation which is really standalone.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=33)** It also has reservations logic and configuration for basic auth.
>
> **[0:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=38)** Finally, there are three routes for the admin interface which shows reservations, the static homepage and the reservation form.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=47)** These are very thin routes, which delegate the work to other libraries.
>
> **[0:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=51)** So they're mostly just configuration and a little bit error handling.
>
> **[0:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=55)** Out of these, this schema is the best place to start with a unit test.
>
> **[1:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=60)** Let's take a look at the file itself.
>
> **[1:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=63)** In VS code in the Explorer, open up lib, schema, reservation.
>
> **[1:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=70)** It's a lightweight class with only three methods but it's very useful.
>
> **[1:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=74)** First is the constructor, which creates a reservation.
>
> **[1:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=78)** The constructor just copies with the exception of the call to combine date and time.
>
> **[1:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=84)** Combine date and time is a helper that combines the form submitted date and time into a standard ISO date time.
>
> **[1:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=91)** Finally, there's validator, which executes a third-party validator against the instants properties and returns the result.
>
> **[1:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=99)** Out of those, our first unit test candidate is the method combine date time.
>
> **[1:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=105)** It's atomic and completely standalone.
>
> **[1:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=108)** It does not interact with any service like a database.
>
> **[1:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=112)** Finally, it has a consistent signature and structure.
>
> **[1:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=116)** It doesn't hurt that it's one line long and has an example in the documentation.
>
> **[2:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=122)** So why should we start with combine date time and not the others?
>
> **[2:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=126)** The constructor makes a call to the combine date time method so it's not completely standalone.
>
> **[2:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=132)** What about the validator?
>
> **[2:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=134)** Well, since it's testing the instants, the constructor must be called first.
>
> **[2:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=139)** They both can still be unit tested but it's best to start as atomically as possible.
>
> **[2:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=145)** We know what we want to test.
>
> **[2:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=146)** So where do we put the test file?
>
> **[2:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=150)** There are two common locations.
>
> **[2:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=152)** The first is a separate test directory and the other is the same directory.
>
> **[2:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=157)** Let's compare the two approaches.
>
> **[2:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=160)** Separate test directories typically mirror the folder structure of the application.
>
> **[2:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=165)** This makes it easy to structure the tests and have a nice clean separation between what is being tested and the tests themselves.
>
> **[2:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=173)** However, creating folders can be a bit repetitive and there's no practical way to keep the folders in sync if you rename something For example, a file location in the lib schema would have a corresponding tests/unitversion.
>
> **[3:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=189)** Note that I'm including the type of test to make it explicit, which is helpful when there are multiple kinds of tests in a project.
>
> **[3:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=196)** The alternative is keeping the tests in the same directory where the source and test files are in the same place.
>
> **[3:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=204)** The primary advantage is that everything is always in sync and in the same place.
>
> **[3:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=209)** However, this can lead to larger numbers of files in the same directory and tedious file naming or renaming.
>
> **[3:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=217)** For example, lib schema reservation would have a corresponding libschemareservation.test.js.
>
> **[3:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=226)** Both approaches are valid and are supported by Jest and I've used both.
>
> **[3:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=231)** Keeping unit tests in the same directory as the files they're testing is convenient.
>
> **[3:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=235)** So our core standard will be to put the unit tests in the same folder.
>
> **[4:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=240)** Test themselves should also have some organization.
>
> **[4:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=244)** When using jest and other frameworks, test specifications should be structured inside a suite of tests.
>
> **[4:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=251)** Jest provides a function Describe which provides support for scoping tests.
>
> **[4:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=256)** Describe is common across many frameworks.
>
> **[4:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=259)** Describe supports nesting, which allows a suite within a suite.
>
> **[4:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=264)** With that said, Jest puts tests in an implicit suite, the file itself, so there's no need to wrap everything in a suite that defines the file.
>
> **[4:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=273)** For example, we don't need to describe the reservation schema, but Describe for the suite for the validator is logical.
>
> **[4:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-and-where-to-unit-test?u=76281980&t=281)** Let's apply this knowledge practically and write some unit tests.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), let (3), interface (1), static (1), function (1)
> **File Paths:** app.js (1), bin/wwww.js (1), libschemareservation.test.js (1)
> **Analogies:** for example (3)
> **Env Vars:** http (1), iso (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Tools:** vs code (1)

#### Writing your first Jest unit test
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=0)** - [Male Speaker] Now that we know what and where to unit test, let's write some tests.
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=5)** Switch over to VS code.
>
> **[0:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=7)** In the Explorer view, navigate to lib, then schema, right click and select new file.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=16)** The name will be reservation.test.js.
>
> **[0:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=21)** Press enter when complete.
>
> **[0:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=24)** We'll start by including the file that we want to test, the reservation schema.
>
> **[0:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=28)** Const reservation equals require and then the current directory, reservation, add a trailing semi-colon.
>
> **[0:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=39)** And then a new line.
>
> **[0:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=42)** Let's describe the test suite for what we're going to be testing using the describe function.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=47)** So we're going to use describe and then single quote and then combine date time.
>
> **[0:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=55)** Then I'm going to use an arrow function expression.
>
> **[0:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=59)** The first test will be about valid input.
>
> **[1:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=61)** Use the it function and then be descriptive about what's happening.
>
> **[1:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=66)** Should return an ISO 86 01 date and time with valid input.
>
> **[1:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=77)** Then an arrow function expression.
>
> **[1:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=81)** Here's the given part.
>
> **[1:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=82)** It takes a date.
>
> **[1:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=83)** So const date equals 2017/07/10 then a semi-colon and the time.
>
> **[1:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=94)** So const time equals 0602 AM.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=101)** Then a semi-colon.
>
> **[1:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=102)** Add a new line.
>
> **[1:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=105)** I'm going to break this into an actual unexpected for readability.
>
> **[1:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=108)** I'm also going to set up the test to fail so we can learn to understand the output at Jest.
>
> **[1:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=114)** So const expected equal single quote fail/06/10T0602 00.000Z and then a trailing semi-colon.
>
> **[2:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=130)** I used UTC mode to avoid time zone bugs, by the way.
>
> **[2:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=133)** So that Z at the end is intentional.
>
> **[2:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=137)** The actual value is going to be the output of the method.
>
> **[2:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=141)** So const actual equals reservation.combinedateandtime I'm going to give it the arguments date,time.
>
> **[2:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=153)** The last piece is the expect statement.
>
> **[2:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=156)** Add a new line, then start with expect and then give it the parameter of the actual value.
>
> **[2:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=165)** Expect includes match your methods, which validate different things.
>
> **[2:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=169)** .2= is a matcher which I will use to compare the expected to the actual.
>
> **[2:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=177)** Add a semi-colon and that's it.
>
> **[3:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=180)** Add a trailing semi-colon here and here and save the file.
>
> **[3:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=185)** Let's write one more test.
>
> **[3:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=187)** This time testing for failure.
>
> **[3:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=190)** As you recall, tests should describe the failure of the system.
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=194)** Therefore let's add a new line and then it parentheses should return no on a bad date and time.
>
> **[3:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=206)** Give it an arrow function expression.
>
> **[3:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=210)** This describes the expectation.
>
> **[3:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=212)** So given a funky date and time, so const date equals then single quote exclamation point at #$ which is just junk and add a trailing semi-colon.
>
> **[3:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=227)** And then const time equals single quote fail which is frankly easier to type.
>
> **[3:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=234)** And then a semi-colon.
>
> **[3:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=236)** Include a new line.
>
> **[3:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=238)** I'm going to write this slightly differently by just writing the whole statement in one line.
>
> **[4:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=243)** I'm also going to use a different matcher to check for no.
>
> **[4:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=246)** So I'm going to expect the reservation.combine date and time to take a date and time.
>
> **[4:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=256)** Then I'm expecting it to be no.
>
> **[4:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=260)** Execute the function.
>
> **[4:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=262)** And then semi-colon.
>
> **[4:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=264)** Excellent.
>
> **[4:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=265)** That's two tests specs.
>
> **[4:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=267)** Add a trailing semi-colon and then save the file.
>
> **[4:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-unit-test?u=76281980&t=271)** Now that we have a suite of tests, how do we execute them?

> [!info]- Semantic Content
>
> **Code Keywords:** const (7), function (6), let (4), switch (1), require (1)
> **Env Vars:** iso (1), utc (1)
> **File Paths:** reservation.test.js (1)
> **Tools:** vs code (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [male (1)

#### Running a test suite with Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=0)** - We've already configured Jest to run through NPM test.
>
> **[0:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=3)** So let's execute our brand new tests.
>
> **[0:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=7)** Switch over to VS code, open up a terminal, and then type MPM test and press Enter.
>
> **[0:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=18)** The test suites run and we have a failure and a pass.
>
> **[0:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=22)** Let's look at the output.
>
> **[0:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=24)** I'm going to open up this window and then scroll to the top.
>
> **[0:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=30)** Right at the top, we see the name of the test suite by file along with the overall pass or fail.
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=37)** The implicit name of the suite is the file path, lib schemareservations.test.js.
>
> **[0:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=45)** Under each file name comes the test suites defined.
>
> **[0:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=49)** We only created one with describe combined date time.
>
> **[0:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=54)** Under the name of the suite comes the individual test specs.
>
> **[0:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=58)** The first test with valid input failed, which is indicated with a red X, more on the failure and a moment.
>
> **[1:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=65)** At the end is the duration of test execution in milliseconds.
>
> **[1:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=71)** The second test passed with a green check mark.
>
> **[1:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=75)** After the broad report of the passes and failures, there's a breakdown of the failures.
>
> **[1:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=80)** Combined date time should have returned an ISO date and time but it didn't.
>
> **[1:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=87)** Jest then breaks down what the test was supposed to do.
>
> **[1:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=89)** So expect received two equal expected, with a note about deep equality for the type of comparison.
>
> **[1:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=97)** After the pseudo code version, comes the highlighted comparison of the expected and received.
>
> **[1:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=102)** It expected fail, but a received 2017.
>
> **[1:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=107)** We intentionally made this fail, but the test doesn't know that.
>
> **[1:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=111)** Following the comparison the position of the failed code is shown in context, complete with character position and file name.
>
> **[1:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=119)** Finally, there's a summary report.
>
> **[2:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=122)** There's one failed test suite out of one total.
>
> **[2:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=126)** One test failed, one passed, and there were two total tests.
>
> **[2:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=132)** There were no snapshots, which are a type of react UI testing.
>
> **[2:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=136)** The total time taken is shown in human readable format.
>
> **[2:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=141)** The second to last line describes the scope of execution which in this case we ran all tests suites.
>
> **[2:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=148)** The last line is from NPM itself, not Jest.
>
> **[2:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=151)** It just says the test failed and it doesn't know why so see above.
>
> **[2:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=156)** If we want to suppress the NPM message, we can run MPM test with a space, dash dash, silent flag and press Enter.
>
> **[2:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=167)** We get the same output with a slightly different execution time.
>
> **[2:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=171)** This time it includes an estimated execution time as well since it has a previous test to compare to.
>
> **[2:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=178)** Note that there isn't an NPM error even though the test failed.
>
> **[3:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=182)** This can be useful when setting up continuous integration.
>
> **[3:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=186)** We can also execute just directly by using NPX.
>
> **[3:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=191)** So just type NPX space, jest and press Enter.
>
> **[3:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=197)** Practically it's the same output.
>
> **[3:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=199)** Let's fix that failing test.
>
> **[3:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=201)** If it's not already open, make sure that you have reservation.test.js open.
>
> **[3:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=207)** The first thing we want to do is only run the failing test spec Just includes a method named .only.
>
> **[3:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=215)** .Only allows a subset of tests to be executed either a specific test suite or spec.
>
> **[3:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=223)** There's a couple of different ways to use it.
>
> **[3:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=225)** With describe use dot only to execute the suites marched with .only.
>
> **[3:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=231)** It and test are similar in syntax, it only will only run the test specs marked with only.
>
> **[3:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=239)** For convenience, there's also an alias bit.
>
> **[4:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=243)** So instead of it, just add an F at the beginning Edit the first it-statement to be it.only so only this test spec runs.
>
> **[4:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=253)** So it.only save the change.
>
> **[4:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=257)** And let's try this out.
>
> **[4:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=259)** Switch over to the terminal.
>
> **[4:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=262)** Let's run NPM test, and then press Enter The test run failed, but it only ran the one test.
>
> **[4:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=272)** It skipped the should return null test spec and the report at the bottom shows one skipped to test.
>
> **[4:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=278)** Let's fix this failing test.
>
> **[4:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=281)** Back in the Editor, remove the .only Then edit the expected fail online eight to be 2017.
>
> **[4:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=293)** Save the changes.
>
> **[4:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=295)** Switch back to the terminal, where will execute with one more variation.
>
> **[5:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=300)** This time passing a flag to jest which will only report failures and a summary.
>
> **[5:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=305)** We're going to use NPM space test, then a space and then two dashes to indicate that we're going to pass arguments to the script.
>
> **[5:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=315)** We'll then use the dash dash silent option to prevent tests from printing messages through the console.
>
> **[5:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=322)** When ready press Enter.
>
> **[5:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=326)** This time, we have much more concise output and everything past, fantastic news.
>
> **[5:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=333)** To see more command line options for jest type NPX jest space, dash dash help A list of all available options are shown along with the recommendation to see the documentation at their website.
>
> **[5:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=349)** Let's clean up.
>
> **[5:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=351)** Close out, reservation.test.js and kill the active terminal instance.
>
> **[6:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/running-a-test-suite-with-jest?u=76281980&t=360)** We've been testing synchronous code so far but how do we test callbacks?

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (3), pass (3), finally, (1)
> **Env Vars:** npm (6), npx (3), mpm (2), iso (1)
> **CLI Commands:** npm (6), npx (3), make (1)
> **Tools:** terminal (4), vs code (1), command line (1)
> **Documentation:** spec (4), the documentation (1)
> **File Paths:** reservation.test.js (2), schemareservations.test.js (1)
> **Warnings:** note that (1)
> **Speakers:** - we (1)

#### Testing asynchronous callbacks with Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=0)** - [Instructor] Jest supports asynchronous code without the use of any third-party plugins.
>
> **[0:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=6)** Three styles are supported.
>
> **[0:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=8)** The first are callbacks, which have been around for quite a while.
>
> **[0:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=11)** There's also promises which are more modern and a flexible technique.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=16)** Finally, there's async/await, which is syntactic sugar for promises.
>
> **[0:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=22)** We'll look at callbacks and promises first, then the challenge will be to use async/await.
>
> **[0:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=28)** Let's start testing asynchronous callbacks with Jest.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=33)** By default, Jest tests complete at the end of execution.
>
> **[0:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=38)** An asynchronous callback won't be called until the function executes.
>
> **[0:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=42)** Therefore, if we wrote a test like we did before, the test will already be completed before we can check to see if it succeeded or not.
>
> **[0:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=52)** Here's an example of an asynchronous callback.
>
> **[0:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=55)** We'll start with a simple function toTest which takes a callback.
>
> **[1:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=60)** I'm going to use set immediate to asynchronously execute the callback, and arbitrarily return the word yay.
>
> **[1:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=69)** With that in mind, here's an incorrectly written test.
>
> **[1:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=73)** Don't do it this way.
>
> **[1:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=74)** Test the wrong way to test a callback and an arrow function expression.
>
> **[1:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=79)** Then we'll define a function for the callback, which takes value.
>
> **[1:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=83)** It uses Jest expect to compare the value to the word no, which will fail.
>
> **[1:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=89)** At the end, call toTest with a callback.
>
> **[1:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=93)** The callback will execute, but because it's asynchronous, the Jest test will complete before the actual callback returns.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=101)** The joys of the event loop.
>
> **[1:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=104)** The solution, is an alternate version of test and it, which returns a callback typically called done.
>
> **[1:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=111)** If the done callback is provided, Jest will wait until the done callback is called, before the test is considered finished.
>
> **[1:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=119)** If it hasn't been called, the test will time out, which by default will take five seconds.
>
> **[2:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=125)** Another use of done is to throw if given a value, which is useful for checking for unexpected errors.
>
> **[2:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=133)** With that in mind, here's the correct way to write that asynchronous callback.
>
> **[2:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=138)** Test the right way to test a call back, and give it a call back named done.
>
> **[2:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=143)** Now, function call back takes a value, but this time we're going to try the expectation which we'll throw if it fails, then call done afterwards In the catch, done can accept an argument which is the error.
>
> **[2:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=158)** Done will fail if it receives a value, which is what we want.
>
> **[2:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=162)** For the execution, toTest with the value of the callback works the same way.
>
> **[2:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=167)** While you can write callback tests without the try and catch, the test will pass, but the failures won't be handled correctly.
>
> **[2:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=175)** What are the consequences of writing an asynchronous callback test incorrectly?
>
> **[3:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=180)** Switch over to VS Code, go up to file, and then open folder.
>
> **[3:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=187)** Navigate to wherever you have the exercise files, and go to sandbox.
>
> **[3:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=191)** Open up 03 06 and click select folder.
>
> **[3:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=196)** Open up a terminal and then install the dependencies, which is just Jest, so type MPM-install and press enter.
>
> **[3:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=207)** We're going to try two different orders.
>
> **[3:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=209)** In the Explorer, select wrong right.
>
> **[3:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=213)** At the top is the function to be tested.
>
> **[3:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=216)** Then the wrong way to test, followed by the right way to test.
>
> **[3:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=220)** What happens when we execute it?
>
> **[3:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=222)** Switch to the terminal.
>
> **[3:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=224)** Type MPX Jest then wrong-right.test.JS, and press enter The test fails and fails rather oddly.
>
> **[3:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=237)** If we scroll up to the top, the list of tests at the top shows that the wrong way to test passed which is incorrect, and the right way to test failed, which is what we expected.
>
> **[4:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=250)** However, the breakdown of the errors first shows the wrong way to test, followed by the right way to test.
>
> **[4:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=257)** What? That's confusing.
>
> **[4:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=259)** Can you imagine trying to track that down in a real code base?
>
> **[4:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=263)** Close out wrong right, then choose right wrong.
>
> **[4:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=269)** It's the exact same two tests, but the test order is switched, so the right way to test a callback executes first.
>
> **[4:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=275)** What happens when we run it?
>
> **[4:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=276)** Switch to the terminal.
>
> **[4:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=279)** Type MPXJestright-wrong.test.JS, and press enter.
>
> **[4:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=289)** Jest crashed the test through an uncaught exception which we see described.
>
> **[4:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=295)** If we look at the stack trace, we can figure out where it failed.
>
> **[4:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=298)** Callback online 20, position 19.
>
> **[5:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=302)** However, it's not displayed cleanly and Jest didn't get an opportunity to make the report on overall execution Close out the terminal and close right wrong.
>
> **[5:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=314)** In summary, when testing a callback, you need to give it a test or a named callback function typically named done.
>
> **[5:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=322)** You should wrap your asynchronous tests with a try and catch in order to guarantee that Jest can handle any errors.
>
> **[5:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=330)** Otherwise Jest might crash if there was a problem with one of the tests.
>
> **[5:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=335)** That's enough theory.
>
> **[5:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-asynchronous-callbacks-with-jest?u=76281980&t=337)** Let's write our first asynchronous callback test suite in Jest.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), switch (3), async (2), await (2), let (2)
> **Tools:** terminal (4), vs code (1)
> **UI Navigation:** switch to (2), navigate to (1), go to (1), scroll up (1)
> **Code Identifiers:** totest (3)
> **File Paths:** wrong-right.test.js (1), mpxjestright-wrong.test.js (1)
> **Env Vars:** mpm (1), mpx (1)
> **Definitions:** is an  (1), is called (1)
> **Prerequisites:** install (2)

#### Writing callback test suites with Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=0)** - [Instructor] With this knowledge about testing asynchronous callbacks in mind, our application has a good candidate for our callback unit test.
>
> **[0:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=9)** Within the schema is a validator that uses an asynchronous callback which returns an error and value.
>
> **[0:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=17)** The validate method does not interact with a service, and it has a consistent signature and structure.
>
> **[0:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=24)** Therefore, it's a perfect place to start testing callbacks.
>
> **[0:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=29)** Let's write the validate callback test suite with Jest.
>
> **[0:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=32)** Switch to VS Code.
>
> **[0:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=35)** Go up to File, go to Open Recent, and navigate to wherever your Nadia project is.
>
> **[0:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=41)** Before we write any code, take a look at what we're going to test.
>
> **[0:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=45)** From the Explorer, choose lib, schema, and choose reservation.js.
>
> **[0:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=53)** Scroll to the bottom.
>
> **[0:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=55)** The validate method takes a callback as an argument.
>
> **[0:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=59)** It then uses Joi, a validation library, to check the structure of a validation.
>
> **[1:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=64)** I've destructured the output into separate variables for the error and value.
>
> **[1:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=70)** After validation, I used setImmediate to asynchronously return the callback, which is slightly contrived, but it makes for a good demonstration.
>
> **[1:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=79)** Let's write the test.
>
> **[1:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=81)** In the Explorer, select reservation.test.js.
>
> **[1:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=86)** Scroll to the end of the file.
>
> **[1:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=89)** Add a new line, then start a new describe for the validate suite, then use an arrow function expression with no arguments.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=101)** Why not done?
>
> **[1:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=102)** Because the tests themselves aren't asynchronous.
>
> **[1:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=107)** Our first test spec will be for valid reservations, and we'll skip optional fields.
>
> **[1:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=113)** I'm going to add done as a callback.
>
> **[1:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=115)** So it should validate with no optional fields and then done.
>
> **[2:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=125)** Now, here's a valid test reservation.
>
> **[2:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=128)** So const reservation equals new Reservation, then we're going to pass it an object with a date of 2017/06/10, a time of 06:02 am, party, size of four, a name of family, and an email of username@[example.com](https://example.com), then trailing semicolon, add a new line, then reservation.validate takes one argument, the callback which has an error and a value, so error comma value,
>
> **[2:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=178)** then the arrow function expression.
>
> **[3:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=180)** We're going to wrap our asynchronous test in a try.
>
> **[3:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=184)** We expect the value .toEqual the reservation.
>
> **[3:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=191)** When complete, return done, which we can pass the error to in order to ensure that there aren't any validation errors.
>
> **[3:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=201)** After the try comes a catch for the error.
>
> **[3:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=207)** In this case, all we need to do is to return done with the error.
>
> **[3:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=214)** That's all we need for the positive assertion.
>
> **[3:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=217)** Let's check the opposite direction, a negative one.
>
> **[3:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=221)** Add a semicolon and then a new line after the test, it should validate with an invalid email, and then add done as a callback.
>
> **[3:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=235)** Create a new constant for reservation instance.
>
> **[3:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=239)** We can copy and paste it from above to save time, then edit the email to be just username, which will fail validation.
>
> **[4:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=248)** Once again, we'll use the reservation instance to validate, then the callback with just an error.
>
> **[4:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=257)** We won't bother to check the value.
>
> **[4:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=260)** We're going to try.
>
> **[4:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=262)** We expect the error, and we're going to use a new matcher, toBeInstanceOf, to check to see if it's an instance of the class Error with a capital E.
>
> **[4:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=277)** Add a semicolon, and then return done when complete.
>
> **[4:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=283)** Notice that I'm not returning the error because I knew it would exist already.
>
> **[4:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=288)** Let's wrap up with a catch error where we will just return done with the error.
>
> **[4:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=298)** Add semicolons for consistency, and save the file.
>
> **[5:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=305)** And we're all set.
>
> **[5:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=307)** Let's run our new tests from the terminal.
>
> **[5:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=310)** Open up the terminal.
>
> **[5:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=311)** Once it loads, type npm test, and press Enter.
>
> **[5:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=318)** Wait, why is there an error?
>
> **[5:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=320)** Let's see where this error is.
>
> **[5:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=323)** It's expecting error to be an instance of error, but it got undefined?
>
> **[5:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=328)** Let's open up reservation.js.
>
> **[5:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=332)** Scroll down to the bottom to the validate method.
>
> **[5:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=335)** The only thing we changed was the email.
>
> **[5:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=338)** Oh, I see the problem.
>
> **[5:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=341)** Instead of validating an email, it's just checking to see if it's a string of less than 255 characters.
>
> **[5:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=348)** Sometimes copy-and-paste programming is bad.
>
> **[5:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=351)** Edit the line to remove the max 255, and then replace it with .email, and then execute it.
>
> **[6:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=365)** Save the change, then switch back to the terminal.
>
> **[6:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=369)** Rerun the test, so npm test.
>
> **[6:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=374)** Much better, everything is passing.
>
> **[6:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=376)** We found and fixed a bug. Let's clean up.
>
> **[6:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=380)** Close up the terminal and any open editor windows.
>
> **[6:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=387)** That's how to test a callback.
>
> **[6:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-callback-test-suites-with-jest?u=76281980&t=388)** So, how do we test promises in Jest?

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (2), function (2), pass (2), try. (2)
> **Tools:** terminal (4), vs code (1)
> **UI Navigation:** switch to (1), go to (1), navigate to (1), scroll down (1)
> **File Paths:** reservation.js (2), reservation.test.js (1)
> **Code Identifiers:** setimmediate (1), toequal (1), tobeinstanceof (1)
> **CLI Commands:** npm (2)
> **URLs:** [example.com](https://example.com) (1)
> **Ports:** :02 (1)

#### Testing promises with Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=0)** - [Instructor] We've tested callbacks with Jest, but that's not the only kind of asynchronous code.
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=5)** What about promises?
>
> **[0:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=8)** Jest supports promises natively, which is a great feature.
>
> **[0:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=12)** To test a promise, just return the promise and put the assertion in the .then or .catch.
>
> **[0:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=18)** You do not need to use the callback named done.
>
> **[0:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=22)** If you're catching rejections, then you should also use expect.assertions with the number of assertions to expect to specify how many assertions there were supposed to be.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=33)** If you don't, then a fulfilled promise would pass.
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=37)** There's two additional chaining matchers that can simplify writing tests.
>
> **[0:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=42)** The resolves matcher will cause Jest to wait for the promise to resolve.
>
> **[0:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=46)** If the promise is rejected, then the test fails.
>
> **[0:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=50)** The rejects matcher works in a similar way.
>
> **[0:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=53)** If a promise is fulfilled, then the test fails.
>
> **[0:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=56)** When using the rejects matcher, you don't have to specify the number of assertions.
>
> **[1:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=61)** We'll use this syntax in the upcoming challenge at the end of the chapter.
>
> **[1:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=66)** Of note: When testing promises, do not use a callback because if you give a promise to done, the test will automatically fail as done throws if it receives a value.
>
> **[1:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=77)** Other unexpected behavior can occur depending on how the tests were written, including timeouts if a promise isn't returned and unhandled rejections which can be difficult to troubleshoot.
>
> **[1:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=89)** I compiled a sandbox test suite of examples of how not to test promises.
>
> **[1:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=95)** In the sandbox folder and the 03_08 subfolder, run npm install, then npm test to see all the failures.
>
> **[1:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=104)** Explore promises.test.js to see the source code.
>
> **[1:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=109)** Let's write some correct tests, but what should we be testing?
>
> **[1:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=114)** Let's switch over to VS Code.
>
> **[1:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=116)** From the Explorer, open up lib, then reservations.js.
>
> **[2:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=123)** This file is the library of operations on multiple reservations.
>
> **[2:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=128)** All the functions return promises, but the first three use the database.
>
> **[2:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=133)** If we scroll down to validate, we can see that it's just calling the validator with a callback and returning a promise.
>
> **[2:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=140)** Perfect.
>
> **[2:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=142)** Our candidate for the first promise unit test is the validate function for a couple of reasons.
>
> **[2:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=148)** It returns a promise, it uses the already-tested validator, it does not interact with a service, and it has a consistent signature and structure.
>
> **[2:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=159)** Let's write some tests in VS Code.
>
> **[2:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=163)** Right-click on lib in the Explorer and go to New File.
>
> **[2:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=167)** Name it reservations.test.js and press Enter.
>
> **[2:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=174)** First, we'll need the reservations library, which is what we'll be testing.
>
> **[2:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=178)** So const reservations equals require, and then we're going to require from the relative directory, reservations.
>
> **[3:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=189)** We're also going to need the reservation schema in order to create the instance to test.
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=194)** So const reservation equals require, and then in the schema directory, we want reservation.
>
> **[3:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=204)** Now that our requires are complete, let's create the validate suite.
>
> **[3:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=209)** Add a new line, then describe validate.
>
> **[3:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=215)** These tests are going to be very similar to the validator test except there's no named callback.
>
> **[3:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=220)** So it should resolve with no optional fields, and then an arrow function expression, give it a reservation.
>
> **[3:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=233)** So const reservation equals new Reservation, and then give it an object, so a date of 2017/06/10, a time of 06:02 am, a party of four, a name of family, and an email of username@[example.com](https://example.com), trailing comma and a semicolon.
>
> **[4:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=265)** We're going to return reservations.validate with the instance of the reservation that we created.
>
> **[4:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=274)** This returns a promise.
>
> **[4:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=276)** On the next line, .then, take the value, and then I expect the value .toEqual the reservation that we passed into it.
>
> **[4:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=289)** Add a semicolon and then a semicolon and semicolon.
>
> **[4:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=294)** That's all for the first one.
>
> **[4:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=296)** What about a rejection?
>
> **[4:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=299)** It should reject with an invalid email, and then empty arrow function expression, then copy and paste the reservation from above, change the email to just username, and then add a new line, then we're going to manually specify the number of assertions as it's good to see the full version before the shortcut.
>
> **[5:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=326)** So expect.assertions parenthesis one semicolon.
>
> **[5:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=334)** Add a new line, then return reservations.validate reservation.
>
> **[5:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=341)** This returns a promise.
>
> **[5:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=343)** And this time we're going to catch an error, and I expect error .toBeInstanceOf the class Error with a capital E.
>
> **[5:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=359)** That's all we need.
>
> **[6:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=361)** Make sure everything is closed out, and save.
>
> **[6:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=365)** Open up a terminal, and then let's run our tests, npm test.
>
> **[6:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=374)** Great, everything passed.
>
> **[6:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=376)** We're well on our way to improving our codebase.
>
> **[6:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=379)** Let's clean up here and close out our test files, close out the terminal, close this, and then open up README.md.
>
> **[6:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=390)** Last but not least, let's update the documentation.
>
> **[6:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=394)** Above debugging, let's add a new heading, testing.
>
> **[6:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=400)** This project uses Jest for testing.
>
> **[6:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=405)** Visit [https://jestjs.io](https://jestjs.io) for details.
>
> **[6:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=413)** Include some simple usage instructions.
>
> **[6:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=417)** To execute tests, npm test, surrounded by back ticks.
>
> **[7:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=423)** Save the changes.
>
> **[7:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=425)** It's best practice to inform other developers about what's available.
>
> **[7:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=430)** Close out any remaining open windows.
>
> **[7:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=434)** In this chapter, we've been busy validating correctness with unit testing.
>
> **[7:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=438)** We started with a survey and comparison of features of various Node.js testing frameworks.
>
> **[7:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=444)** Then we installed the core selection, Jest.
>
> **[7:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=448)** We discussed what and where to unit test, including some different file organizations.
>
> **[7:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=454)** We wrote some unit tests, then tested asynchronous callbacks and promises.
>
> **[7:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=459)** However, there is more code to be tested like functions that depend on the database.
>
> **[7:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-promises-with-jest?u=76281980&t=465)** If pure unit testing requires isolation, how do we pretend that code is executed?

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (3), const (3), require (3), catch. (1)
> **CLI Commands:** npm (4), make (1), node (1)
> **File Paths:** promises.test.js (1), reservations.js (1), reservations.test.js (1), readme.md (1), node.js (1)
> **Tools:** vs code (2), terminal (2)
> **UI Navigation:** scroll down (1), right-click (1), go to (1)
> **Code Identifiers:** toequal (1), tobeinstanceof (1)
> **URLs:** [example.com](https://example.com) (1), [https://jestjs.io](https://jestjs.io) (1)
> **Ports:** :02 (1)

#### Challenge: Test async/await with Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-test-async-await-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-test-async-await-with-jest?u=76281980&t=0)** - [Instructor] In this chapter we learned how to test different types of asynchronous code including callbacks and promises.
>
> **[0:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-test-async-await-with-jest?u=76281980&t=13)** How can we test async/await code with Jest?
>
> **[0:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-test-async-await-with-jest?u=76281980&t=17)** The [jest.io](https://jest.io) website includes documentation on how to write asynchronous tests.
>
> **[0:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-test-async-await-with-jest?u=76281980&t=24)** First, read through the documentation specifically the async/await section.
>
> **[0:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-test-async-await-with-jest?u=76281980&t=29)** With that knowledge update the test we wrote for lib/reservations.test.js to rewrite the promises into the async/await syntax.
>
> **[0:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-test-async-await-with-jest?u=76281980&t=40)** While you're at it use the resolves and rejects matchers previously mentioned.
>
> **[0:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-test-async-await-with-jest?u=76281980&t=45)** The solution will be in the next video, good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** async (3), await (3)
> **File Paths:** lib/reservations.test.js (1)
> **URLs:** [jest.io](https://jest.io) (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Test async/await with Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=0)** - [Instructor] Here's the solution to the challenge about testing async/await promises with Jest.
>
> **[0:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=10)** If you haven't completed it yet please take a moment to practice your skills.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=16)** Switch over to VS Code.
>
> **[0:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=18)** From the explorer open up lib and select reservations.test.js.
>
> **[0:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=26)** Within the first it make the arrow function expression async.
>
> **[0:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=31)** The setup is the same so we can skip down.
>
> **[0:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=34)** This is where the syntax gets a little difference.
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=37)** We need to await, expect and then give it the function that we're going to be awaiting, which will be reservations.validate.
>
> **[0:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=50)** Then on the next line we'll use the .resolves matcher.
>
> **[0:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=55)** So expect knows that this is a promise that it's going to resolve.
>
> **[0:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=59)** Resolves will chain to other matters such as the existing .to equal and then we're going to pass it or the reservation.
>
> **[1:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=69)** Just the single one and then add a semicolon.
>
> **[1:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=73)** Tidy up and remove any remaining old code.
>
> **[1:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=78)** For the rejection we're going to do the same thing and make the arrow function expression async.
>
> **[1:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=85)** Since we're using shorthand, we don't need to specify the number of assertions that we'll receive so we'll just remove that.
>
> **[1:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=93)** Similar to the above, instead of returning we're going to await and then expect then parentheses reservations.validate reservation and instead of resolves we're going to tab and then rejects toBeInstanceOf error with a capital E.
>
> **[1:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=118)** Add a trailing semicolon and then clean up and remove any old code.
>
> **[2:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=124)** Once you're all set, save the file.
>
> **[2:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=127)** Open up the terminal.
>
> **[2:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=129)** Let's make sure the tests still pass so NPM test.
>
> **[2:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=136)** Excellent all the tests suites passed.
>
> **[2:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=139)** Close out the terminal and any open editors.
>
> **[2:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=145)** The completed version can be found in solutions/03_10/reservations.test.js.
>
> **[2:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=154)** Both forms of the asynchronous promise handling like then and catch or with async/await are functionally equivalent.
>
> **[2:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=162)** The difference is the style and the use of shorthand.
>
> **[2:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-test-async-await-with-jest?u=76281980&t=166)** Which asynchronous testing syntax works best for your project and team?

> [!info]- Semantic Content
>
> **Code Keywords:** async (4), await (4), function (3), pass (2), switch (1)
> **CLI Commands:** make (3), npm (1)
> **Tools:** terminal (2), vs code (1)
> **File Paths:** reservations.test.js (1), solutions/03_10/reservations.test.js (1)
> **Analogies:** such as (1), similar to (1)
> **Code Identifiers:** tobeinstanceof (1)
> **Env Vars:** npm (1)
> **Definitions:** is a  (1)


### 4. Replacing and Inspecting Using Spies, Stubs, and Mocks

> [↑ Back to Table of Contents](#table-of-contents)

#### Replacing code with test doubles
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=0)** - [Presenter] Unit testing requires isolation of the target code.
>
> **[0:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=4)** However, due to the power of (faintly speaking) Modularity, pretty much, everything depends on everything.
>
> **[0:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=11)** How can we isolate our code, so we only test the intended functionality?
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=16)** There's a solution to this problem, and it involves replacing and inspecting code execution with test structures, known as stubs, spies and mocks.
>
> **[0:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=27)** In this chapter, we're going to start by discussing what Test Doubles are, and how they can be used to replace code.
>
> **[0:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=34)** Then, we'll compare some techniques for overriding dependencies by manipulating the required cash.
>
> **[0:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=40)** With that foundation, we'll apply these techniques to our testing.
>
> **[0:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=44)** We'll control the responses of methods, observe interactions between components and verify expected behavior of the code we're testing.
>
> **[0:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=53)** We'll do all of this, without having to modify how our modules require code, which is fantastic.
>
> **[1:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=60)** Let's start by discussing Test Doubles, which are a special type of code.
>
> **[1:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=65)** What are they?
>
> **[1:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=67)** A Test Double is a replacement for an arbitrary component of executable code, like a module or a method.
>
> **[1:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=75)** A Test Double looks and behaves in a similar way to what it replaces, down to providing the same API.
>
> **[1:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=82)** However, the functionality is typically a much simplified version of the original.
>
> **[1:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=88)** Test Doubles can have deterministic behavior and do the same expected thing each time it's interacted with, such as always responding with a particular value or error.
>
> **[1:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=99)** Test Doubles are typically configured during the test setup, rather than in the test spec itself.
>
> **[1:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=106)** - Why should we bother using a Test Double?
>
> **[1:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=108)** First of all, unit testing requires isolation and a Test Double allows us replace code in order to isolate the target.
>
> **[1:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=117)** Test Doubles, provide a consistent and completely expected response every time.
>
> **[2:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=122)** Finally, Test Doubles are fast, because they typically contain little to no executable code.
>
> **[2:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=129)** Gerard Meszaros as part of his book, on "xUnit Test Patterns" Wrote a fantastic definition of Test Doubles and the variations.
>
> **[2:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=137)** They include, test stubs, test spies, mock objects, fake objects, and dummy objects.
>
> **[2:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=146)** We'll look at each in turn along with use cases.
>
> **[2:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=150)** A test stub is a Test Double that simulates the behavior of a component by taking complete control over the response.
>
> **[2:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=157)** A stub won't respond to a request unless programmed to, which is good for controlling execution.
>
> **[2:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=164)** A stab temporarily replaces a real component, so the original can always be restored as needed.
>
> **[2:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=172)** In terms of usefulness, a stub can be used to verify indirect input.
>
> **[2:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=176)** For example, you can fake a database query response by specifying a hard-coded response.
>
> **[3:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=183)** You could also disable logging by replacing the logger with an empty stub, so calls to log just do nothing.
>
> **[3:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=190)** A test spy like its name implies, observes interactions with tested code.
>
> **[3:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=196)** Primarily, spies are used to count the number of times a component was called, along with how it was called and what it responded with.
>
> **[3:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=205)** In this manner, spies verify the indirect outputs of components.
>
> **[3:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=211)** A test spy can either be added to an existing method in order to see how it behaves or replace it completely like a stub.
>
> **[3:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=219)** For example, a spy can determine if the validator was called once with transformed values.
>
> **[3:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=225)** Mock objects are interesting.
>
> **[3:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=227)** A mock verifies behavior, specifically the expectations around how something is called.
>
> **[3:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=233)** This includes with what arguments and how many times.
>
> **[3:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=237)** If those expectations are not met, then when verified, a mock will fail the test.
>
> **[4:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=243)** In its purest form, mocks do not return anything which differentiates it from a stub.
>
> **[4:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=249)** You'll want to use a mock when you want to verify the method in which something was being used, for example, you'd use a mock when verifying that saving only calls the database once.
>
> **[4:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=261)** There're some definite similarities between mock objects and test spies.
>
> **[4:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=265)** And the demonstrations later in this chapter should help clarify the difference.
>
> **[4:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=270)** A fake object is a working implementation of a component that takes a shortcut, typically, for performance reasons.
>
> **[4:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=277)** Fake objects are not usable in production, and are intended only for testing purposes.
>
> **[4:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=283)** For example, you could replace a database implementation with a simple in-memory array with the same API.
>
> **[4:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=290)** That would be faster, but you'd want to use a real database in production.
>
> **[4:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=294)** The final variation of a Test Double is a dummy object, which just provides a parameter for a tested method.
>
> **[5:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=301)** For example, a dummy object can be used to test reservation validation using arbitrary input that doesn't change.
>
> **[5:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=308)** We've already done this, just without the label of dummy object.
>
> **[5:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=312)** Let's review and compare the different Test Doubles.
>
> **[5:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=316)** A test stub verifies indirect inputs by providing a controlled response.
>
> **[5:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=322)** A test spy records indirect outputs by reporting on how the request was made for later verification.
>
> **[5:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=330)** A mock object verifies indirect outputs by recording how it's used in order for expectations to check to see if it's used incorrectly.
>
> **[5:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=339)** A fake object just runs faster with less functionality, and a dummy object specifies values used for testing.
>
> **[5:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=348)** If you're interested in learning more about the philosophy and implementations, check out the articles on [xunitpatterns.com](https://xunitpatterns.com) and [martinfowler.com](https://martinfowler.com).
>
> **[5:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=359)** They both go into greater detail and provide thorough explanations of each concept.
>
> **[6:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=364)** Within the context of just everything is considered a mock, a jest mock can be used to stub out functionality, a jest mock can spy to keep track of usage.
>
> **[6:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=378)** Jest mocks provide expectations about how the code was used.
>
> **[6:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=382)** Jest mocks include fake timers for manipulating time-based events Dummy objects aren't included, because you don't need a framework to use them.
>
> **[6:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=392)** So, why go through the trouble of defining each, if jest conflates the terminology?
>
> **[6:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=398)** Each of these terms can be found throughout jest's documentation, and they are used in other frameworks as well.
>
> **[6:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/replacing-code-with-test-doubles?u=76281980&t=406)** With that in mind, how can we use jest to mock a single function.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), let (2), require (1), module (1), finally, (1)
> **Definitions:** is a  (4), known as (1), is called (1)
> **Analogies:** for example (5), such as (1)
> **URLs:** [xunitpatterns.com](https://xunitpatterns.com) (1), [martinfowler.com](https://martinfowler.com) (1)
> **Env Vars:** api (2)
> **Speakers:** - [presenter] (1), - why (1)
> **Code Identifiers:** xunit (1)
> **Cross-References:** later in (1)

#### Mocking functions for test code
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=0)** - [Instructor] Jest provides a mechanism known as mock functions for controlling code execution.
>
> **[0:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=7)** Jest mock functions can do a few things that are useful for testing codes.
>
> **[0:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=12)** They can change the implementation of a function if the original isn't necessary for a test.
>
> **[0:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=17)** Mocks can capture calls and parameters for a function for instrumentation.
>
> **[0:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=23)** Finally, they can set the return values of a function including throwing, resolving, and rejecting.
>
> **[0:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=31)** Jest has three ways of mocking functions and modules.
>
> **[0:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=35)** The first foundational method is jest.fn, which mocks a single function.
>
> **[0:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=42)** The next is jest.mock, which mocks an entire module.
>
> **[0:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=48)** The last is jest.spyOn, which takes an object and a method name.
>
> **[0:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=54)** Similar to mock, it mocks the entire module, but it also spies on the given method, Each builds upon the previous, so we'll start with FN.
>
> **[1:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=64)** I'll cover the others later in the chapter.
>
> **[1:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=67)** Jest.fn creates a new empty mock function.
>
> **[1:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=72)** By default, a mock function returns undefined.
>
> **[1:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=76)** This can be useful if you want to just prevent something from working and keep track of how it was used.
>
> **[1:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=83)** .fn accepts an optional argument known as an implementation.
>
> **[1:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=88)** Practically, an implementation is just a function which returns an arbitrary result, including values, thrown exceptions, and so forth.
>
> **[1:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=98)** Every Jest mock function includes a special .mock property regardless of whether the mock function was created with or without an argument.
>
> **[1:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=107)** What's inside?
>
> **[1:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=109)** The .mock property has four properties of its own that keep track of its usage in a series of arrays.
>
> **[1:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=116)** Calls keeps track of how it's been called.
>
> **[1:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=119)** Each call includes the arguments that were used when it was called or just undefined.
>
> **[2:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=126)** The instances property keeps track of the actual instances created by the function, if any.
>
> **[2:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=132)** invocationCallOrder keeps track of the incrementing order in which the mocks were called, which is useful for determining if something was called before or after something else.
>
> **[2:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=143)** Finally, results keeps track of both the type and value of what was returned.
>
> **[2:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=150)** Before we mock some functions, let's see some practical examples.
>
> **[2:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=154)** You can follow along with the slides, or you can take a look at sandbox/04_02 to see the code.
>
> **[2:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=163)** Creating an empty mock is straightforward.
>
> **[2:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=166)** Just call jest.fn and assign it to a variable.
>
> **[2:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=171)** I'm going to assign the variable actual to the result of invoking the mock function.
>
> **[2:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=176)** Since we didn't provide an implementation, it will return undefined.
>
> **[3:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=181)** Therefore, we can expect a comparison of the actual to undefined to be true.
>
> **[3:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=187)** There's a nicer way writing this.
>
> **[3:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=189)** The matcher toBeUndefined is more explicit.
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=194)** Of course, implementations can be used to control return values.
>
> **[3:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=198)** We can start with an expected constant with a value.
>
> **[3:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=202)** Similar to the empty mock, we can assign mock function to jest.fn, but this time, we pass in an argument of a function that returns expected.
>
> **[3:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=213)** We can then assign actual to be the result of the mock function.
>
> **[3:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=218)** This time we can expect that actual is the same as expected.
>
> **[3:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=223)** There's another syntax for specifying implementations, which is useful for defining the default implementation of a mock function that's created from another module.
>
> **[3:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=233)** Same as before, set expected to value.
>
> **[3:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=237)** This time, we'll just start with an empty mock.
>
> **[4:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=240)** Then we can use the method mock implementation to set the return value to expected.
>
> **[4:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=246)** Assign actual to the mock function invocation and actual will be the same as expected.
>
> **[4:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=253)** Jest mocks keep track of the calls with a mock.calls property.
>
> **[4:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=258)** Let's start with an empty mock function.
>
> **[4:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=261)** The mock calls property is an array, which by default has a length of zero.
>
> **[4:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=266)** There's a matcher to check the number of calls, toHaveBeenCalledTimes, which if it hasn't been called will be zero.
>
> **[4:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=274)** Let's invoke the function.
>
> **[4:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=276)** Now, we expect that the calls length will be one.
>
> **[4:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=280)** We can also check with a matcher toHaveBeenCalled, which takes no arguments of note.
>
> **[4:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=286)** There isn't the opposite, which is why we've used toHaveBeenCalledTimes with a value of zero.
>
> **[4:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=293)** Calls keep track of how it was called in an array of arguments, which we can use for comparison.
>
> **[4:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=299)** It's kind of unwieldy.
>
> **[5:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=300)** So the toHaveBeenCalledWith matcher is a way more readable way of using it and doesn't require wrapping.
>
> **[5:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=308)** Jest has the ability to keep track of invocation call order.
>
> **[5:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=312)** To see it, create two different mocks using jest.fn, then invoke each of the mocks.
>
> **[5:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=320)** We can then expect that the first mocks invocationCallOrder was less than the second mocks invocationCallOrder.
>
> **[5:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=328)** This is kind of awkward and there's no matcher within Jest for comparing invocationCallOrder.
>
> **[5:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=334)** The third party module jest extended does though, with toHaveBeenCalledBefore.
>
> **[5:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=340)** Finally, Jest mocks can track instantiations within the instances property.
>
> **[5:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=347)** We'll start with a mock function.
>
> **[5:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=349)** Instead of mocking it, we'll create an empty instance and a second instance that we're arbitrarily passing a value to.
>
> **[5:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=357)** Now for the comparisons, we can expect that instance empty is the first element of the instances array as it was created first.
>
> **[6:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=366)** In a similar way, we can expect that instance value is the second element.
>
> **[6:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=371)** Since there were two instances, we can expect that the instances length is two.
>
> **[6:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=377)** Let's review the foundational jest method FN.
>
> **[6:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=380)** FN creates a mock function, which returns undefined by default.
>
> **[6:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=387)** You can pass an optional implementation or use mock implementation to control return values.
>
> **[6:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=393)** Each mock function includes the .mock property, which includes four arrays.
>
> **[6:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=398)** Calls, including the arguments used when it was called.
>
> **[6:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=402)** Instances keeps the actual instances created by the function.
>
> **[6:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=406)** invocationCallOrder keeps track of the order in which mocks were called.
>
> **[6:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=411)** And finally, results keeps track of both the type and value of what was returned.
>
> **[6:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=417)** That's enough theory.
>
> **[6:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-functions-for-test-code?u=76281980&t=418)** Let's use a Jest mock function.

> [!info]- Semantic Content
>
> **Code Keywords:** function (23), fn (9), let (5), finally, (4), module (4)
> **Code Identifiers:** invocationcallorder (5), tohavebeencalledtimes (2), spyon (1), tobeundefined (1), tohavebeencalled (1)
> **Definitions:** known as (2), is an  (1), is a  (1)
> **Analogies:** similar to (2)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### Writing your first Jest mock
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=0)** - We are going to write our first jest mock for our application, but it's going to take a little more work than just creating a new mock function.
>
> **[0:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=10)** In lib reservations.js, there's a function named validate, which validates a reservation.
>
> **[0:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=17)** We've already written two tests which test the validation library, so there's nothing additional that we need to test for now.
>
> **[0:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=24)** However, create calls validate before it persists the record.
>
> **[0:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=29)** while validate doesn't access any external resources, it's best practice to unit test in isolation.
>
> **[0:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=36)** Remember, we're testing create, not validate and we want our unit tests to be as atomic as possible.
>
> **[0:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=43)** Therefore, we'll mock validate when we write a create test.
>
> **[0:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=48)** We haven't gotten to the stage of being able to mock calls to the database so we can't pass validation.
>
> **[0:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=55)** Therefore, let's mock validate so it arbitrarily returns a promise rejection.
>
> **[1:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=61)** In order to do that with a jest mock function, we will have to manually back up the validate function then replace it with our mock.
>
> **[1:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=69)** Then we can execute create and check our expectations.
>
> **[1:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=74)** Finally, we can restore the validate function to its original state.
>
> **[1:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=79)** Why should we bother backing up and restoring?
>
> **[1:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=82)** Jest does not automatically backup or restore a mocked function when using .fn.
>
> **[1:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=88)** If we skipped backing up and restoring it, we would alter the usage of validate for the rest of our tests in the same file, which could lead to chaos.
>
> **[1:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=97)** With that said, backing up and restoring the original functions is not required if all the tests in a file use the same mock.
>
> **[1:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=106)** Ready to get started?
>
> **[1:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=107)** Switch over to VS code.
>
> **[1:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=110)** In the explorer, navigate to lib and open reservations.test.js.
>
> **[1:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=117)** Scroll to the end of the file then add a new line and describe the test grouping for create.
>
> **[2:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=128)** We'll use it should reject if validation fails.
>
> **[2:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=135)** Since create returns a promise, let's use async with our arrow function expression.
>
> **[2:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=141)** We're going to start off with a comment where we're going to store the original.
>
> **[2:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=147)** Then const original = reservations.validate.
>
> **[2:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=153)** Then we're going to create the error that we're going to arbitrarily reject with.
>
> **[2:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=157)** So const error = new Error with a capital E and then the message will just be fail.
>
> **[2:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=168)** Add a trailing semi-colon.
>
> **[2:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=171)** Now we can mock the function by assigning reservations.validate to be just .fn and then we'll set the implementation to a function that is a promise.reject that is the error that we created.
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=194)** Add a trailing semi-colon at the end and that's complete.
>
> **[3:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=200)** Now that we've prepared the mock, we can execute reservations create.
>
> **[3:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=204)** So we're going to await and then expect reservations.create, and then we'll execute it and we're going to expect that it rejects with a plural and then use the matcher to be, and then the expected will be the error that we created.
>
> **[3:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=224)** Add a trailing semi-colon.
>
> **[3:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=227)** Let's also check to see that the validation function was only called once.
>
> **[3:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=231)** So we're going to do expect reservations.validate and then we're going to use the matcher to be called times parenthesis and the expected number is one.
>
> **[4:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=246)** Add a trailing semi-colon and then finally let's restore the original function so we don't break any other tests.
>
> **[4:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=256)** Reservations.validate = original.
>
> **[4:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=261)** Add a trailing semi-colon semi-colon semi-colon and then save the file.
>
> **[4:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=267)** Nice work.
>
> **[4:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=268)** Let's give it a test.
>
> **[4:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=269)** Open up the terminal and then type mpm test and press enter.
>
> **[4:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=278)** We've got a type error.
>
> **[4:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=279)** Cannot read property validate of undefined.
>
> **[4:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=282)** That's not expected.
>
> **[4:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=284)** Let's take a look and see why.
>
> **[4:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=287)** In the explorer, select reservations.js.
>
> **[4:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=292)** If we look at the create function, it returns validate.reservation.
>
> **[4:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=298)** However, if we scroll down to the bottom of the file, we're using module.exports.validate and this is the thing that is being overridden with our mock.
>
> **[5:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=308)** Therefore, in order to avoid this problem with the require cache, we're going to have to change the syntax to use module.exports.validate.
>
> **[5:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=320)** This will use the mocked version.
>
> **[5:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=323)** Save the changes and then rerun the tests.
>
> **[5:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=326)** Type mpm test and press enter.
>
> **[5:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=333)** Excellent.
>
> **[5:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=333)** We're up to seven passing tests.
>
> **[5:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=336)** Manually backing up and restoring that function wasn't a lot of fun.
>
> **[5:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=341)** Is there a faster way?
>
> **[5:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/writing-your-first-jest-mock?u=76281980&t=343)** And what if we want to mock an entire module?

> [!info]- Semantic Content
>
> **Code Keywords:** function (13), let (6), module (3), fn (2), const (2)
> **File Paths:** reservations.js (2), reservations.test.js (1)
> **Tools:** vs code (1), terminal (1)
> **UI Navigation:** navigate to (1), scroll down (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - we (1)

#### Mock an entire module with Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=0)** - [Presenter] So far, we've mocked a single function.
>
> **[0:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=3)** Let's mock an entire module with Jest, but how does it work?
>
> **[0:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=8)** in no Jest and in most languages, units of code usually have dependencies.
>
> **[0:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=14)** That's a good thing, because it promotes re-usability and modularity.
>
> **[0:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=19)** As an example, our application has dependencies on the sequel light database and the debugger module for logging.
>
> **[0:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=26)** Of course, you can write tests that use other components, but testing dependencies isn't unit testing, it's integration testing.
>
> **[0:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=34)** So, how do we isolate a unit with the dependency?
>
> **[0:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=39)** The solution is to manipulate no Jests require cash by substituting your own code in place of the target dependency.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=47)** The nice thing about this technique, is that it needs no code changes to the target require to work.
>
> **[0:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=53)** Like many other forms of monkey patching and JavaScript Manipulation, changes to the require cash can be done manually.
>
> **[1:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=60)** With that said, doing it yourself head hoc is messy and fragile at best.
>
> **[1:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=66)** Fortunately, Jest provides a simple way to do this.
>
> **[1:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=70)** jest.mock accepts a module's name as its first argument.
>
> **[1:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=75)** This can be the relative path to a module if it's within your project, or the community package or core module name.
>
> **[1:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=81)** By default, jest.mock will match the signature of the mock module and return mocks instead.
>
> **[1:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=88)** For example, if module.exports returned an anonymous function, which returned to value, the mocked function would return a Jest mock function instead.
>
> **[1:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=98)** If it exports an object with properties, foo and bar, both foo and bar would be mock functions.
>
> **[1:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=105)** There are two other optional arguments, factory and options.
>
> **[1:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=110)** Factory overrides Jests auto mocking feature, allowing you to return whatever structure you want, which doesn't have to match the target module.
>
> **[1:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=118)** If you wanted to use factory, provided with a function like an error function expression that returns the desired structure.
>
> **[2:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=125)** The last argument is options, which can be used to create virtual mocks for generated modules that don't exist within the system.
>
> **[2:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=133)** We're not going to be using virtual mocks within this course.
>
> **[2:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=136)** In order to use jest.mock, you need to mock the module before it's required.
>
> **[2:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=142)** As an example, we'll use the relative path to reservations, then require it.
>
> **[2:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=148)** Practically speaking, use jest.mock with the name of the module, then require the module.
>
> **[2:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=154)** There's an inverse, when you're done you should unmock any mock modules.
>
> **[2:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=159)** Similar to jest.fn, forgetting to do so will have an adverse effect.
>
> **[2:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=164)** The syntax is straightforward, jest.unmock, then the module name.
>
> **[2:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=170)** Before we see mock in action, we're going to add some structure to our test file in order to prepare for tests and clean up afterwards.
>
> **[2:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=178)** There are functions that can be defined, beforeAll, which runs before all tests have started, beforeEach, which runs before each test, afterAll, which will run after all the tests in a file or group have completed, and afterEach, which runs after each test.
>
> **[3:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=198)** Each takes a function as an argument, which performs the task and an optional timeout in milliseconds to wait before aborting.
>
> **[3:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=206)** Within our test suite for reservations, instead of requiring the reservations file at the top, we're going to use let, within the described scope to define a variable named reservations, then we can use beforeAll to set reservations to whatever is needed.
>
> **[3:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=222)** If we want to mock it, we'll just call jest.mock first, then assign the variable to require the module.
>
> **[3:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=229)** If we don't want to mock, we'll just set the variable to require the module.
>
> **[3:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=234)** Ready to get mocking, switch to vs code.
>
> **[3:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=238)** Open up reservations.test.js.
>
> **[4:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=243)** At the top, let's start with a new group that we're going to describe for fetch, and then an error function expression.
>
> **[4:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=253)** Fetch just returned some reservations.
>
> **[4:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=256)** Practically, there's no logic to test, but it's a good example of how mocking works and it will provide the foundation for more complicated use cases.
>
> **[4:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=264)** We'll use, let, for reservations.
>
> **[4:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=269)** Then, we're going to use beforeAll, which takes an argument of a function, which will use jest.mock for reservations using the relative path.
>
> **[4:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=284)** And then reservations equals require reservations.
>
> **[4:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=291)** We'll add a trailing semi-colon, then we'll add an afterAll with a error function expression, and then we'll use jest.unmock, and then again, the path to the module, the relative path of .reservations at a trailing semi-colon, then a test, it should be mocked and not create a database record, an error function expression and then expect reservations.fetch and we'll execute it.
>
> **[5:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=331)** And we're just going to make sure that it does nothing.
>
> **[5:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=332)** So use the matcher to be undefined, add trailing semi-colons.
>
> **[5:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=341)** Since we removed the require reservations up at the top, we're going to have retrofit our two remaining described groups.
>
> **[5:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=349)** So I'm going to copy and paste the reservations equals.
>
> **[5:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=353)** And in the describe validate up at the top, let reservations, plural, and then add some new lines beforeAll parentheses, and then we'll execute the anonymous function, reservations equals require reservations.
>
> **[6:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=378)** We can copy and paste this, and paste it into create, save the file, then open up the terminal, MPM test.
>
> **[6:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=395)** Do you want to see the consequences?
>
> **[6:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=396)** If you don't unmock the module, scroll up to the top.
>
> **[6:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=402)** So in the afterAll, let's comment that out and type MPM test.
>
> **[6:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=411)** We've got no less than three errors because we didn't unmock the module, and we changed the signature of how things worked.
>
> **[6:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=419)** Remove the comment out, save the file MPM test, and make sure that the changes worked.
>
> **[7:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=427)** Fantastic, that sorted out.
>
> **[7:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=429)** Close out the terminal and any remaining code files.
>
> **[7:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mock-an-entire-module-with-jest?u=76281980&t=434)** We've mocked modules that we're requiring, but, what if we want to mock module dependencies within what we're requiring.

> [!info]- Semantic Content
>
> **Code Keywords:** module (18), function (12), require (10), let (6), this. (1)
> **Code Identifiers:** beforeall (4), afterall (3), beforeeach (1), aftereach (1)
> **Env Vars:** mpm (3)
> **Tools:** terminal (2), vs code (1)
> **CLI Commands:** make (2)
> **UI Navigation:** switch to (1), scroll up (1)
> **Analogies:** for example (1), similar to (1)
> **File Paths:** reservations.test.js (1)

#### Mocking module dependencies
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=0)** - [Instructor] Mocking module dependencies can seem daunting but the technique is really similar to what we've already done.
>
> **[0:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=7)** As jest.mock manipulates the require cash we can use jest.mock before requiring the target module in order to alter module dependencies.
>
> **[0:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=17)** When ready then require the target module.
>
> **[0:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=21)** What's a practical use case?
>
> **[0:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=23)** Within reservations.js this same function uses debug to log a developer only message.
>
> **[0:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=30)** Then it uses connects to insert the reservation into our database, which returns a promise.
>
> **[0:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=36)** For the purposes of testing, I only care if debug was called and that insert was called with a reservation.
>
> **[0:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=43)** In order to do that we're going to mock both debug and knex prior to requiring reservations.js.
>
> **[0:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=50)** Previously, we relied on jest.mock to completely replace the whole module.
>
> **[0:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=56)** This time we're going to use the factory argument to override the default mocking.
>
> **[1:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=62)** Debug, once initialized with a label is a function that we want to replace with a mock.
>
> **[1:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=68)** And knex provides an interface for building queries.
>
> **[1:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=71)** We're going to need to match this signature in our factory.
>
> **[1:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=74)** Switch over to VS code.
>
> **[1:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=77)** In the Explorer, open up reservations.test.js.
>
> **[1:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=82)** Scroll down under fetch and then describe a new group save.
>
> **[1:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=87)** So describe, save, than an arrow function expression, same as before, we're going to let reservations and we're going to require it momentarily.
>
> **[1:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=100)** However, this time we're going to create a mock debug as a jest function that replicates how the debug module works.
>
> **[1:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=108)** Const mock debug.
>
> **[1:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=110)** Note that the name starts with mock otherwise jest will fail with a reference error.
>
> **[1:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=115)** So const mock debug equals jest.fn.
>
> **[2:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=121)** I'm also going to create a mock insert and I'll use a new method mock resolved value to match the signature of a successful insert, and array containing jest inserted ID.
>
> **[2:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=131)** So const mock insert equals jest.fn.mockresolvedvalue,
>
> **[2:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=140)** singular and then an array containing the value of one.
>
> **[2:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=145)** Add a training semi-colon and then now for the mocking.
>
> **[2:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=151)** So V4 all and then arrow function expression, jest.mock.
>
> **[2:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=160)** And then we're going to mock debug which takes an arrow function for the factory and then another arrow function for initialization which then will return our mock debug.
>
> **[2:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=173)** That's what we'll be checking with our matcher, add a trailing semi-colon.
>
> **[2:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=178)** And we're going to need two arrow functions to mock knex as well.
>
> **[3:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=183)** So jest.ock and then we're going to use the relative path to knex which is the same as how it's used in the module.
>
> **[3:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=192)** Same as before an arrow function and then an arrow function and then parentheses to return an object with one property of insert, which will have the value of mockinsert, add a comma and then a semi-colon.
>
> **[3:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=210)** Finally we can require reservations.
>
> **[3:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=213)** So set reservations equal to require and then the relative path of reservations.
>
> **[3:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=220)** Add a trailing semi-colon and then a trailing semi-colon.
>
> **[3:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=225)** Don't forget to clean up.
>
> **[3:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=227)** We'll use an after all error function expression, we're going to use jest.unmark on debug, then a new line and then jest.unmark on the relative path to knex.
>
> **[4:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=244)** Add a trailing semi-colon and we're all done with a setup.
>
> **[4:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=248)** Let's write the test spec itself.
>
> **[4:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=251)** It should resolve with the ID upon success.
>
> **[4:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=257)** And then an asynchronous operation.
>
> **[4:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=260)** So async arrow function expression, our W value is just an object.
>
> **[4:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=267)** So const value equals an object.
>
> **[4:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=270)** We're not going to bother with fully replicating a reservation here, we just want it for comparison.
>
> **[4:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=275)** So Fu and that will set it the value to bar, trailing semi-colon, and then we'll also expect the return value to be one.
>
> **[4:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=285)** So const expected equals an array containing the value of one.
>
> **[4:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=291)** Now for the actual execution, set const actual equals await reservations.save with the value.
>
> **[5:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=303)** Now for the assertions, I expect the actual value to strictly equal the expected.
>
> **[5:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=311)** This is going to be a new matcher.
>
> **[5:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=313)** So .twostrict equal the expected.
>
> **[5:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=320)** I also expect that the mock debug was only called once.
>
> **[5:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=327)** So I'll use the matcher to be called times one.
>
> **[5:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=333)** Finally, I expect that mock insert was called with the original value.
>
> **[5:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=340)** so.tobecalled with, which is a new matcher, and then value.
>
> **[5:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=349)** Add trailing semi-colons, save the file, then switch over to the terminal.
>
> **[5:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=355)** Run the test.
>
> **[6:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=360)** Fantastic.
>
> **[6:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=361)** Everything passed.
>
> **[6:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=362)** Let's clean up.
>
> **[6:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=363)** Close out the terminal and close the test file.
>
> **[6:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/mocking-module-dependencies?u=76281980&t=368)** We've used mock functions in mocked entire modules but is there a more nuanced way of mocking just part of a module without automatically mocking the entire thing?

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), module (8), const (6), require (5), let (3)
> **File Paths:** reservations.js (2), reservations.test.js (1)
> **Tools:** terminal (2), vs code (1)
> **Definitions:** is a  (2)
> **Prerequisites:** initialization (1), setup (1)
> **Documentation:** spec (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** don't forget (1)

#### Spying to observe interactions
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=0)** - [Instructor] So far we've been mocking functions and modules which replaces.
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=5)** What if we want to keep the original implementation around, but still keep track of how it's being used?
>
> **[0:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=12)** With Jest, we can use spies to observe interactions.
>
> **[0:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=17)** The spyOn method creates a Jest mock function similar to jest.fn and jest.mock, but it also tracks calls to method name on the object.
>
> **[0:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=28)** Something to keep on mind, spyOn calls the spied method.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=33)** If that's not what you need, use a mock implementation instead and totally control the behavior.
>
> **[0:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=39)** When you're done with spying on the method, it's best practice to restore the method back to normal.
>
> **[0:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=44)** Otherwise, other requires may have inconsistent behavior.
>
> **[0:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=48)** The spyOn mocks have a method mockRestore, which does just that.
>
> **[0:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=54)** Within reservations, what are some things that can be spied on?
>
> **[0:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=58)** We tested the validate function, but we can go one step further and test to see if it was called and how it was called.
>
> **[1:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=66)** We can also spy on validate in the create group and use it to arbitrarily reject to see how create handles validation errors.
>
> **[1:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=75)** Ready to get started?
>
> **[1:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=76)** Switch to VS code.
>
> **[1:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=78)** In the Explorer, navigate the lib and open up reservations.test.js.
>
> **[1:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=85)** Scroll down to the end of validate, then start a new async test spec.
>
> **[1:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=92)** So it should be called and reject empty input, and then async, and then an arrow function expression.
>
> **[1:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=105)** We're going to spy on reservations, specifically the validate method.
>
> **[1:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=109)** So const mock equals jest.spyOn, and then it'll take reservations and we're going to use the validate method.
>
> **[2:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=122)** Let's set up the test.
>
> **[2:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=124)** So const value equals, and we'll use the value of undefined.
>
> **[2:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=130)** We're going to await an expectation that reservations.validate with a value will reject and throw a message.
>
> **[2:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=141)** This is a bad assumption on the target.
>
> **[2:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=143)** There's no validate method on undefined, so it will throw.
>
> **[2:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=147)** I considered writing this correctly, but I wanted to make the point that just because something technically works doesn't mean that it's working the best way.
>
> **[2:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=155)** So I'm going to check for a .rejects, plural, .toThrow, then we're going to check for the string, cannot read property and then escape validate, then escape that again of undefined, add a trailing semi-colon.
>
> **[2:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=177)** We can now check our mock.
>
> **[2:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=179)** So expect mock and expect that it was called with a value, so .toBeCalledWith and then the value.
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=194)** Finally, restore the mock.
>
> **[3:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=196)** So mock.mock.Restore, add trailing semi-colons, and save the file.
>
> **[3:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=206)** That's great.
>
> **[3:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=207)** Let's use this technique on create.
>
> **[3:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=210)** Scroll to the end of the file.
>
> **[3:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=212)** After the existing spec, start a new one.
>
> **[3:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=216)** It should reject if validation fails using spyOn and then async and then an arrow function expression.
>
> **[3:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=227)** Practically, this is going to function as the same as the one above, but we're going to be naming it differently to avoid duplicate test names of best practice, and we can compare the two approaches.
>
> **[3:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=239)** We're going to create a new mock.
>
> **[4:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=241)** So const mock using jest.spyOn on reservations and specifically the validate method.
>
> **[4:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=253)** We then going to create a new error, so const error equals new error with the same value as above, fail.
>
> **[4:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=264)** This time, we're going to use mock.mockImplementation with a function that returns a Promise.reject with the error.
>
> **[4:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=278)** Let's use a value to look for on the other side of this.
>
> **[4:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=282)** I'm pretty sure that the string literal puppy isn't a reservation.
>
> **[4:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=285)** So const value equals puppy.
>
> **[4:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=290)** Let's execute.
>
> **[4:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=292)** We're going to await expect reservations.create with a value .rejects.toequal and then the error itself.
>
> **[5:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=308)** Now for the spying, I expect that the mock toHaveBeenCalledTimes, one, and I expect that the mock toHaveBeenCalledWith the value.
>
> **[5:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=331)** Finally, let's restore and wrap up.
>
> **[5:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=334)** So mock.mockRestore, execute it, and add a trailing semi-colon and trailing semi-colon.
>
> **[5:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=343)** Save the file.
>
> **[5:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=345)** Then switch to the terminal.
>
> **[5:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=347)** Let's run our test suites, NPM test.
>
> **[5:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=354)** Excellent.
>
> **[5:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=354)** Two test suites passed out of two total and 11 passed out of 11 total.
>
> **[6:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=360)** Let's clean up before wrapping up the chapter.
>
> **[6:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=364)** Close out the terminal and any open files.
>
> **[6:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=369)** Throughout this chapter we've been using Jest mocks for replacing and inspecting using spies, stubs, and mocks.
>
> **[6:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=376)** We started with an overview of different ways to replace code with test doubles.
>
> **[6:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=381)** We then learned about Jest versions of mocks with special properties that track how mocks are interacted with.
>
> **[6:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=388)** We wrote our first Jest mock using jest.fn, then manually restored the mock function.
>
> **[6:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=395)** Building upon that, we mocked an entire module with jest.mock, then manipulated the require cache to mock module dependencies so we can focus on testing just our code.
>
> **[6:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=407)** Finally, we use Jest spies to observe interactions between components while controlling how dependent code response.
>
> **[6:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=414)** We've been testing a portion of our codebase.
>
> **[6:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/spying-to-observe-interactions?u=76281980&t=417)** Is there any way to get a more comprehensive look at the health of the entire codebase?

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (7), const (5), async (3), finally, (3)
> **Code Identifiers:** spyon (6), mockrestore (2), tothrow (1), tobecalledwith (1), mockimplementation (1)
> **Tools:** terminal (2), vs code (1)
> **UI Navigation:** switch to (2), scroll down (1)
> **CLI Commands:** make (1), npm (1)
> **Documentation:** spec (2)
> **Best Practices:** best practice (2)
> **File Paths:** reservations.test.js (1)

#### Challenge: Mock a successful reservation creation
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-mock-a-successful-reservation-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-mock-a-successful-reservation-creation?u=76281980&t=0)** - [Instructor] In this chapter we learned about a number of different techniques for replacing and inspecting our code with Jest mocks.
>
> **[0:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-mock-a-successful-reservation-creation?u=76281980&t=13)** In lib/reservations.test.js we've tested creating a reservation in two different ways.
>
> **[0:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-mock-a-successful-reservation-creation?u=76281980&t=20)** But both have been testing what happens when validation fails.
>
> **[0:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-mock-a-successful-reservation-creation?u=76281980&t=24)** Your challenge is to update reservations.test.js and add a new test spec for successfully creating a reservation in the database.
>
> **[0:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-mock-a-successful-reservation-creation?u=76281980&t=34)** Of course, the test won't interact with the actual database so you'll have to mock that up.
>
> **[0:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-mock-a-successful-reservation-creation?u=76281980&t=40)** As a stretch goal also mock the validation in order to skip it as validation is tested elsewhere.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-mock-a-successful-reservation-creation?u=76281980&t=47)** When you're done check out one possible solution in the next video, see you in a moment.

> [!info]- Semantic Content
>
> **File Paths:** lib/reservations.test.js (1), reservations.test.js (1)
> **Cross-References:** in the next (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Mock a successful reservation creation
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=0)** - [Instructor] Here's the solution to the challenge about mocking a successful reservation creation with Jest.
>
> **[0:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=11)** If you haven't completed it yet, please take a moment to practice your skills.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=16)** Switch over to VS code.
>
> **[0:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=19)** In the Explorer, navigate to lib reservations.test.js.
>
> **[0:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=25)** Scroll to describe create if it's not already visible.
>
> **[0:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=29)** While we previously required reservations every time, we're going to be manipulating it prior to requiring it.
>
> **[0:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=35)** So we're going to take the reservations require, paste those into the two test specs, and remove the before all.
>
> **[0:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=48)** With that preparation out of the way, we can write our test spec for creating a reservation with no validation problems.
>
> **[0:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=56)** At the end of the group, we're going to start with an it should create a reservation if there are no validation problems and this is an async function.
>
> **[1:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=74)** Next, we're going to prepare to require.
>
> **[1:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=78)** We'll start with something that we expect.
>
> **[1:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=80)** So const expected insert ID and we'll just arbitrarily choose one.
>
> **[1:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=88)** Then we'll create a mock insert.
>
> **[1:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=90)** So const mockInsert equals a jest function with a mockResolvedValue, which returns an array containing the expected insert ID.
>
> **[1:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=106)** So just expected insert ID.
>
> **[1:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=111)** We did something similar with a save test.
>
> **[1:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=114)** With that setup, we'll use jest.mock on the connects module with a relative path.
>
> **[2:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=120)** So slash connects same as in reservations.js.
>
> **[2:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=126)** Same as before, two arrow function expressions, then we're going to use parenthesis and return an object with just one property, insert with the value mockInsert, a trailing comma, and then a semi-colon.
>
> **[2:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=146)** Now that we've prepared, we can require reservations.
>
> **[2:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=150)** So reservations equals require the relative path to reservations, add a trailing semi-colon.
>
> **[2:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=161)** Now, let's mock the validation.
>
> **[2:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=165)** So const mock validation equals just.spyOn reservations
>
> **[2:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=174)** with method validate.
>
> **[2:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=178)** We can mock the implementation with something simple.
>
> **[3:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=180)** Whatever value we give it, we can resolve to that same value, which is what it would do if it passed validation.
>
> **[3:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=186)** So mockvalidation.mockImplementation, and then value, which will just go to Promise.resolve with the value.
>
> **[3:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=202)** We'll prepare our test data with a reservation with an arbitrary structure, which we'll use for both creation and to check later.
>
> **[3:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=211)** So a const reservation equals just an object foo and then a string literal bar.
>
> **[3:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=220)** Finally, let's execute and check.
>
> **[3:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=226)** So we're going to await expect and then reservations.create with the reservation, singular.
>
> **[3:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=237)** This should .resolves, plural, .toStrictEqual the expected insert ID not an array, add a trailing semi-colon.
>
> **[4:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=252)** We can do a couple of additional checks, such as expect reservations.validate toHaveBeenCalledTimes, one.
>
> **[4:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=265)** We can also expect that mock validation and then we'll use the matcher .toBeCalledWith a reservation, singular.
>
> **[4:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=280)** And then we expect mockvalidation.toBeCalledTimes
>
> **[4:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=290)** and just one.
>
> **[4:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=292)** Finally, clean up and restore.
>
> **[4:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=295)** First, the mockvalidation.mockRestore and then unmock connects itself.
>
> **[5:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=304)** So jest.unmock and then the relative path of ./connects.
>
> **[5:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=311)** Add a trailing semi-colon, save the file and we're all done.
>
> **[5:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=316)** Let's open up a terminal.
>
> **[5:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=318)** Let's run our new test suite, type npm test and press enter.
>
> **[5:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=326)** Fantastic!
>
> **[5:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=327)** All tests passed and we're up to two test suites and 12 tests.
>
> **[5:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=333)** Let's clean up.
>
> **[5:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=334)** Exit out of the terminal and close the test file.
>
> **[5:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=340)** The completed version can be found in solutions/04_08/reservations.test.js.
>
> **[5:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=348)** So a practical question, is mocking validation worth it?
>
> **[5:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=353)** In my experience, it can be, in that you can focus your tests on just one thing at a time rather than having to refactor a number of different tests if your validation methodology changes.
>
> **[6:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=365)** Of course, use your best judgment and try things out in your project.
>
> **[6:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-mock-a-successful-reservation-creation?u=76281980&t=369)** Thanks for following along.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), require (4), const (4), function (3), finally, (2)
> **Code Identifiers:** mockinsert (2), mockresolvedvalue (1), spyon (1), mockimplementation (1), tostrictequal (1)
> **File Paths:** reservations.test.js (1), reservations.js (1), solutions/04_08/reservations.test.js (1)
> **Tools:** terminal (2), vs code (1)
> **UI Navigation:** navigate to (1), go to (1)
> **CLI Commands:** npm (1)
> **Documentation:** spec (1)
> **Definitions:** is an  (1)


### 5. Reporting on Your Entire Codebase

> [↑ Back to Table of Contents](#table-of-contents)

#### Why code coverage matters
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=0)** - Knowing about problems within a specific file or component is a good thing.
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=5)** But that's only part of the picture Having an actionable perspective of the entire code base is a key to success.
>
> **[0:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=13)** In this chapter, we're going to extend what we've learned so far about testing and detecting suspicious code.
>
> **[0:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=20)** We'll start with a concept of code coverage and why it's important.
>
> **[0:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=25)** We'll generate a report about the restaurant reservation applications code coverage using industry standard tools.
>
> **[0:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=32)** Next, we'll broaden our testing techniques with functional testing, which will extend the existing the report.
>
> **[0:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=39)** We'll ask the emperor has no close question.
>
> **[0:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=42)** What could possibly go wrong when you have 100% test coverage on a code base?
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=47)** Finally, we'll learn about ways to automate code quality measurement on an ongoing basis.
>
> **[0:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=54)** Code coverage sure sounds important, but what is it?
>
> **[0:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=59)** Code coverage which is the measure of how much code is executed in a given operation.
>
> **[1:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=64)** It's typically from a test suite, but there are some other tools that measure things like client side code execution.
>
> **[1:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=71)** Code coverage is reported in percentages, like 76% covered.
>
> **[1:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=76)** A higher percentage means more code was executed.
>
> **[1:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=80)** Code coverage is important for a number of reasons.
>
> **[1:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=84)** A higher percentage of coverage reduces the risk of bugs.
>
> **[1:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=88)** Notice I said reduce, not eliminate.
>
> **[1:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=91)** Like security, there are no absolute guarantees of error free code.
>
> **[1:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=96)** Code coverage highlights unused or untested code components which can be helpful for optimization.
>
> **[1:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=103)** It's also an indicator of code quality.
>
> **[1:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=106)** Being able well to report the code coverage indicates an interest in effort to improve the software.
>
> **[1:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=112)** Finally, code coverage is a requirement in some types of mission critical industries, such as avionics and automotive safety.
>
> **[2:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=120)** You're probably not writing no JS code for these types of applications.
>
> **[2:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=124)** But my point is that code coverage is a recognized way to raise confidence in code quality.
>
> **[2:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=130)** There are four typically recognized types of code coverage which I'll define and then demonstrate.
>
> **[2:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=136)** The first are the proportion of executed statements.
>
> **[2:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=139)** Next, are branches.
>
> **[2:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=141)** Then the proportion of called defined functions.
>
> **[2:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=144)** Finally, the proportion of executed lines.
>
> **[2:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=148)** The percentages often we'll be pretty close to each other, but you can have a hundred percent line execution but miss out on some branches.
>
> **[2:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=156)** Here's an example of a code coverage report which we'll be generating ourselves in the very near future.
>
> **[2:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=162)** The columns are pretty straight forward.
>
> **[2:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=164)** It starts with the file of directory.
>
> **[2:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=166)** Then the percentage of statements, branches, functions and lines.
>
> **[2:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=171)** The list of uncovered lines is over on the right.
>
> **[2:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=174)** For example, lib reservations has 86% statement coverage and lines 11 and 23 weren't covered by any test.
>
> **[3:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=183)** That same report also generated an HTML version which goes into much greater detail.
>
> **[3:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=189)** At the top is a summary of the file itself along with raw statistics like two out of two branches.
>
> **[3:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=196)** The number of times a line has been executed is shown over on the left.
>
> **[3:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=201)** Areas in red highlight covered code.
>
> **[3:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=205)** Let's take a closer look at each type.
>
> **[3:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=208)** Starting with a statement.
>
> **[3:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=209)** What is a statement?
>
> **[3:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=212)** I'll start off with a link to the Mozilla developer network on statements for reference and more examples.
>
> **[3:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=218)** A statement performs an action in code.
>
> **[3:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=221)** It may span multiple lines or just be one line.
>
> **[3:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=225)** A statement consists of a group of keywords.
>
> **[3:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=228)** For example, everything in an if else block is considered a statement.
>
> **[3:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=233)** A declaration of a constant is a statement.
>
> **[3:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=236)** What executes in a while loop is considered a statement.
>
> **[4:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=241)** In the context of this block of code, the return connects select is considered a statement.
>
> **[4:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=248)** Building on statements are branches.
>
> **[4:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=250)** A branch is each statement within a conditional.
>
> **[4:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=254)** For example, if a condition then each statement executed as a branch.
>
> **[4:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=258)** So, statement one is a branch and statements two and three are part of another branch.
>
> **[4:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=265)** Here are some more examples of brand structures.
>
> **[4:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=267)** We've covered if else statements already.
>
> **[4:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=270)** But other conditionals can include logical OR, logical AND, and the logical NOT operator.
>
> **[4:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=277)** There's also the conditional operator also known as turnery with a condition, the ternary operator and one expression or the other.
>
> **[4:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=285)** Here's an example of an uncovered branch.
>
> **[4:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=288)** There's an E symbol, which means the L's is never taken which in this case is resolving with no errors.
>
> **[4:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=294)** Therefore, this report is from when we didn't test what happens when validation succeeds.
>
> **[5:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=301)** Uncovered functions are more obvious.
>
> **[5:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=303)** In this case, fetch is never called.
>
> **[5:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=307)** Uncovered lines are also easily recognizable.
>
> **[5:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=310)** So, line 11 is never executed.
>
> **[5:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=314)** Now that we have a better understanding of what code coverage is and what it looks like.
>
> **[5:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/why-code-coverage-matters?u=76281980&t=319)** How can we measure our projects code coverage?

> [!info]- Semantic Content
>
> **Definitions:** is a  (8), known as (1)
> **Code Keywords:** finally, (3), raise (1), let (1), type. (1), case, (1)
> **Analogies:** for example (3), picture (1), such as (1)
> **Env Vars:** html (1)
> **Speakers:** - knowing (1)

#### Measuring code coverage with Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=0)** - [Instructor] By measuring code coverage we can find gaps in our test cases.
>
> **[0:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=4)** How do we do that?
>
> **[0:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=6)** Jest includes a code coverage tool named Istanbul within it.
>
> **[0:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=10)** Istanbul separate open source project but it's already included with your Jest installation.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=16)** What does it do?
>
> **[0:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=18)** Istanbul from Istanbul.[js.org](https://js.org) watches your code execution in order to track how well your unit tests exercise the code base.
>
> **[0:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=28)** This means if code is used Istanbul We'll keep track of it and report it.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=33)** Istanbul command line interface is NYC.
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=37)** Yes, the naming is confusing as it reflects the merging of two projects and is a subtle reference to an old They Might Be Giant song.
>
> **[0:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=45)** in addition to supporting Jest Istanbul supports other test frameworks such as Mocha, AVA, and others.
>
> **[0:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=53)** Istanbul includes a number of different reporters which format the results.
>
> **[0:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=58)** By default just uses them all.
>
> **[1:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=62)** The first is text, which was that short report I demonstrated.
>
> **[1:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=66)** Another reporter is HTML, which was the more detailed line-by-line report I also earlier.
>
> **[1:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=73)** A third is LCOV which is a standard for recording code coverage.
>
> **[1:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=77)** It was initially designed for the Linux kernel source code, but it supports any arbitrary project as well.
>
> **[1:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=84)** LCOV is most commonly used by third party tools so they can operate on the output and not worry about the API.
>
> **[1:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=92)** The last is Clover, which is an older code coverage product open source by Atlassian in 2017, which as of this writing seems to be no longer maintained.
>
> **[1:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=103)** Since Istanbul is already included in Jest, we don't need to install anything in order to use it.
>
> **[1:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=110)** Instead, we'll configure the test script in packaged dot Jason to include a test coverage report, which is off by default.
>
> **[1:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=117)** Let's switch over to VS code.
>
> **[2:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=120)** Open up the terminal.
>
> **[2:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=123)** I'm going to maximize the screen by clicking the up arrow.
>
> **[2:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=127)** Let's check out the documentation before we begin.
>
> **[2:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=130)** Type MPX space, Jest, space, dash, dash, help and press enter.
>
> **[2:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=138)** Scroll up, we're looking for dash, dash coverage.
>
> **[2:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=142)** That's a flag that indicates that tests coverage information should be collected and reported in the output.
>
> **[2:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=148)** Sounds pretty straightforward.
>
> **[2:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=150)** In order to see this coverage every time let's update the test script.
>
> **[2:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=155)** So we can remove the maximisation and then open up package dot Jason.
>
> **[2:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=161)** Under scripts, edit test to be just space, dash, dash, coverage, save the change, then switch back to the terminal.
>
> **[2:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=174)** Scroll down, and then let's see our new test output.
>
> **[2:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=179)** Type MPM, space, test and press enter.
>
> **[3:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=186)** The tests pass and underneath is a code coverage report generated by Istanbul, we're at 96% on statements and lines which is quite respectable.
>
> **[3:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=196)** When we ran tests with coverage, it created a directory called coverage, which contains the generated reports.
>
> **[3:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=203)** From the Explorer, open coverage within this directory are some generated files and a sub-directory called LCOV report.
>
> **[3:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=212)** Let's open it now.
>
> **[3:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=215)** There's an index dot HTML file, this is the HTML report.
>
> **[3:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=220)** Right click on the file and go to reveal in file Explorer or open containing folder or whatever your local equivalent is.
>
> **[3:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=229)** Then right click on index dot HTML and open with your favorite browser.
>
> **[3:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=235)** The report starts with all files in the project and shows the coverage by directory.
>
> **[4:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=240)** Click on the name to navigate in such as Nadia lib.
>
> **[4:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=245)** Let's take a closer look at reservations dot JS by clicking on it.
>
> **[4:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=250)** This is a line by line breakdown of the coverage.
>
> **[4:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=253)** If you hover your mouse over one of the red areas the reason will appear as a tool tip such as this unexecuted function.
>
> **[4:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=262)** Feel free to browse around.
>
> **[4:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=265)** When you're done click on all files.
>
> **[4:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=268)** Our library files are here but what about the routes, app dot JS?
>
> **[4:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=273)** This isn't everything because we've only been testing a portion of the code base.
>
> **[4:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=278)** Close the browser and switch back to visual studio code.
>
> **[4:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=284)** Want a more convenient way of seeing code coverage?
>
> **[4:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=287)** Over on the left in the activity bar, click extensions.
>
> **[4:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=292)** Search for coverage gutters by Ryan Luker, click install.
>
> **[5:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=304)** In the activity bar, click the Explorer again.
>
> **[5:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=307)** Then open lib reservations dot JS.
>
> **[5:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=313)** open the command pallet by typing control, shift, and P type watch and select coverage gutters watch.
>
> **[5:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=324)** On the left I can now see green indicators for covered lines and red indicators for uncovered lines.
>
> **[5:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=331)** It's not as granular as the full report but it's a great start.
>
> **[5:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=335)** Let's clean up, let's close the terminal and any open files.
>
> **[5:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=343)** If we functionally tested the application we'd be executing things like routes, which wouldn't benefit from a unit test.
>
> **[5:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/measuring-code-coverage-with-jest?u=76281980&t=350)** Can functional testing be included in this report?

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (3), interface (1), default. (1), pass (1)
> **Env Vars:** html (4), lcov (3), nyc (1), ava (1), api (1)
> **UI Navigation:** click on (4), scroll up (1), scroll down (1), go to (1), open the (1)
> **Tools:** terminal (3), command line (1), vs code (1), visual studio (1)
> **Definitions:** is a  (4), is an  (1)
> **Analogies:** such as (3)
> **Prerequisites:** install (2), configure (1)
> **File Paths:** istanbul.js (1)

#### Functional testing with Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=0)** - [Instructor] The Jest framework can be used to functionally test an application.
>
> **[0:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=4)** The results can be included in a code coverage report, which is really useful.
>
> **[0:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=9)** As a reminder, functional testing literally tests the functionality of an application.
>
> **[0:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=15)** The test cases are based on the specifications of the software.
>
> **[0:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=19)** Unlike unit tests, a functional test is based on business requirements like the ability to perform a task.
>
> **[0:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=27)** In that way, a functional test should read like an acceptance test used by a QA team.
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=33)** Functional tests describe what a system does, not how.
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=37)** There's a number of different functional testing tools and this is not an exhaustive list.
>
> **[0:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=43)** Selenium WebDriver from [selenium.dev](https://selenium.dev) automates actual browsers using a standalone server and is fantastic for end-to-end testing.
>
> **[0:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=53)** It's now recommended by the W3C for doing browser testing.
>
> **[0:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=57)** Two projects that use selenium are Nightwatch.js from [nightwatchjs.org](https://nightwatchjs.org) and WebdriverIO from [webdriver.io](https://webdriver.io).
>
> **[1:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=67)** A more lightweight option is SuperAgent from visionmedia.[github.io](https://github.io).
>
> **[1:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=74)** SuperAgent is a small progressive client-side HTTP request library, and node.js module.
>
> **[1:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=82)** A project that uses SuperAgent is SuperTest, which makes assertions for testing node.js HTTP servers.
>
> **[1:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=91)** Rather than exhaustively comparing each, we'll take a more direct approach.
>
> **[1:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=96)** In this course, we're going to be using SuperTest.
>
> **[1:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=99)** It's easy to get started.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=101)** Just install the module dependency.
>
> **[1:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=103)** SuperTest doesn't require external software such as a server that controls a browser.
>
> **[1:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=108)** It also doesn't require an application server to be running, which is amazing.
>
> **[1:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=113)** Instead, it can just accept the Express app and run the test on that.
>
> **[1:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=118)** It can also use a running application server if you want.
>
> **[2:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=121)** In this way, SuperTest is a lightweight and flexible, which are excellent characteristics.
>
> **[2:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=127)** Finally, it's compatible with Jest without any additional plugins or work.
>
> **[2:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=133)** After this course, I recommend exploring some of the other options as they offer more powerful functionality that you might want, and also they're compatible with Jest.
>
> **[2:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=143)** SuperTest is quite easy to use.
>
> **[2:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=146)** For setup, it accepts an HTTP.server or a function.
>
> **[2:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=152)** Practically, Express returns that, so we can just give it an Express application.
>
> **[2:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=158)** If the server is not listening on a port, SuperTest will pick a random port.
>
> **[2:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=163)** Don't worry, you do not need to specify a port in your tests.
>
> **[2:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=168)** SuperTest uses HTTP verbs to interact, so .get, .post, and so forth.
>
> **[2:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=175)** SuperTest includes optional expectations which can be used to validate the response.
>
> **[3:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=181)** Finally, after each request, it returns the response that can also be tested with uTest framework of choice.
>
> **[3:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=188)** In the context of our application, let's write functional tests from basic user stories.
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=194)** As a user, I want to see a reservation form in order to book a table.
>
> **[3:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=200)** As a user, I want to submit a valid reservation and be thanked upon success.
>
> **[3:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=206)** Finally, as a user, I want to submit an invalid reservation and be informed that there's a problem.
>
> **[3:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=213)** Let's start by installing the SuperTest module.
>
> **[3:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=217)** Switch over to VS code.
>
> **[3:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=219)** Open up a terminal.
>
> **[3:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=221)** From the root directory, I'm going to use NPM to install SuperTest to the devDependencies dash capital D.
>
> **[3:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=230)** Press enter.
>
> **[3:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=233)** That's all we need.
>
> **[3:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=234)** We can close the terminal now.
>
> **[3:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/functional-testing-with-jest?u=76281980&t=237)** Are you ready to write a functional test with test doubles?

> [!info]- Semantic Content
>
> **Code Keywords:** module (3), finally, (3), require (2), let (2), function (1)
> **Env Vars:** http (4), w3c (1), npm (1)
> **URLs:** [selenium.dev](https://selenium.dev) (1), [nightwatchjs.org](https://nightwatchjs.org) (1), [webdriver.io](https://webdriver.io) (1), [github.io](https://github.io) (1)
> **Tools:** terminal (2), github (1), vs code (1)
> **File Paths:** node.js (2), nightwatch.js (1)
> **CLI Commands:** node (2), npm (1)
> **Prerequisites:** install (2), setup (1)
> **Code Identifiers:** utest (1), devdependencies (1)

#### Test doubles and Express apps
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=0)** - [Instructor] Let's write some functional tests using an express app.
>
> **[0:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=4)** There are a few steps necessary to do this.
>
> **[0:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=7)** If you want to take a look at a reference or just copy the file, it can be found in the exercise files.
>
> **[0:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=13)** When you're ready, switch over to VS code.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=16)** We're going to be functionally testing reservations.
>
> **[0:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=19)** So in the Explorer, navigate to the Route folder.
>
> **[0:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=23)** Right click and select New file.
>
> **[0:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=27)** We'll be testing the reservations route, so this will be named reservations.test.js.
>
> **[0:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=35)** We'll start off by requiring SuperTest which we'll use for HTTP assertions.
>
> **[0:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=41)** So const request equals require SuperTest.
>
> **[0:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=48)** We'll create a placeholder for the app itself, which will be wrapped with SuperTest in a before all.
>
> **[0:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=53)** So let app, and then a semi-colon.
>
> **[0:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=57)** We also want to silence Morgan, the HTTP requests logger, so it doesn't clutter our test output with log messages.
>
> **[1:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=65)** So we use const mock Morgan is a jest function which is an express middleware, so req, res, and next that just executes next, and a trailing semi-colon.
>
> **[1:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=81)** Now to set up the mock, before all, parentheses, and then an arrow function expression we'll just use jest.mock on Morgan with the implementation of an arrow function that executes an arrow function that finally returns mock Morgan, add a trailing semi-colon.
>
> **[1:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=104)** With that mock ready, we can assign app to request.
>
> **[1:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=107)** So app equals request, which will take the express application that we wish to test.
>
> **[1:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=114)** We just need to require app in the relative parent directory.
>
> **[2:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=120)** So ../app, and add the semi-colons.
>
> **[2:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=125)** After all the tests have run, arrow function, use jest to unmock Morgan to put things back to normal.
>
> **[2:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=136)** Add the semi-colons and save.
>
> **[2:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=139)** Great!
>
> **[2:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=140)** Now that we're all set up, let's describe our test group for get.
>
> **[2:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=144)** So describe, get, and then an arrow function expression.
>
> **[2:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=150)** Now for the test spec, it should return the reservation form, then an async arrow function expression.
>
> **[2:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=163)** Here's where SuperTest comes in.
>
> **[2:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=165)** Set const response equals await app.get the HTTP method that we're testing on the route quote slash reservations.
>
> **[2:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=178)** SuperTest can also be used for assertions.
>
> **[3:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=181)** New line indent, then .expect, Then for the first argument, we're going to be looking at the header.
>
> **[3:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=189)** So content dash type, and then for the second a regular expression to look for slash HTML and then another slash.
>
> **[3:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=200)** We can also check for the HTTP status code, which we can do with a shorthand .expect and then the status code 200.
>
> **[3:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=209)** Add a trailing semi-colon.
>
> **[3:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=212)** The response has a lot of properties, but we're just interested in one right now.
>
> **[3:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=217)** Let's use jest expect on response in the text property and we're going to expect that to contain a new matcher, the phrase, to make reservations, please fill out the following form and then trailing semi-colons and that's it.
>
> **[4:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=242)** Save the file.
>
> **[4:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=243)** Then open up a terminal.
>
> **[4:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=246)** We're going to run the tests, but this time I want to show more detail.
>
> **[4:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=250)** Maximize the terminal screen and then type npm test space dash dash space then dash dash verbose.
>
> **[4:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=261)** Press enter.
>
> **[4:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=265)** All of our tests executed and passed.
>
> **[4:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=268)** Instead of just a pass summary for each file, there's a breakdown of the test groups in the individual test timings.
>
> **[4:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=275)** The order of test output on your screen may be slightly different than what I have on my screen, and that's not a problem or a bug.
>
> **[4:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=283)** If we look at the routes reservations.test.js, we can see that the get test took 392 milliseconds.
>
> **[4:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=292)** That sounds fast, but look at the other test timings.
>
> **[4:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=295)** Some of them are one millisecond.
>
> **[4:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=297)** Some of them are five milliseconds or two milliseconds.
>
> **[5:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=300)** Functional tests can be slow because there's a lot more code being required and executed.
>
> **[5:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=307)** Let's unmaximize the terminal and terminate it.
>
> **[5:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=312)** Requiring the whole application can be very slow and requires a lot of mocking when getting into more complex operations.
>
> **[5:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=321)** One way to deal with it is within your test, create a simple express app with an absolute bare minimum setup necessary.
>
> **[5:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=329)** Then, add only the route you wish to test to the application.
>
> **[5:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=334)** This technique better aligns with the goals of code isolation and speeds up execution, but it requires more test setup.
>
> **[5:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=342)** I feel it's worth it.
>
> **[5:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=343)** So this will be the code challenge for this chapter.
>
> **[5:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/test-doubles-and-express-apps?u=76281980&t=346)** Finding texts on a static page is fairly easy, but what about functionally testing forms submissions?

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (5), const (3), require (2), this. (1)
> **Env Vars:** http (4), html (1)
> **Tools:** terminal (3), vs code (1)
> **Prerequisites:** set up (2), setup (2)
> **File Paths:** reservations.test.js (2)
> **CLI Commands:** make (1), npm (1)
> **Definitions:** is a  (1), is an  (1)
> **Documentation:** spec (1)

#### Form submissions with SuperTest
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=0)** - [Instructor] The page for reservations has a form, so let's functionally test that next.
>
> **[0:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=6)** Switch back to VS Code and make sure that route reservations.test.js is open.
>
> **[0:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=12)** Navigate to after the GET and describe a POST group.
>
> **[0:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=20)** The first test we can do is see what happens if a reservation request is invalid.
>
> **[0:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=25)** It should reject an invalid reservation request, then an async arrow function expression.
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=37)** Similar to GET, we'll create a response.
>
> **[0:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=39)** So const response, then await app.post, the http verb that we're going to use to the /reservations endpoint.
>
> **[0:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=54)** On the next line, let's specify the type of request explicitly.
>
> **[0:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=59)** This is a form.
>
> **[1:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=61)** Other options include JSON.
>
> **[1:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=64)** This time, we're going to be sending information in the form of an object, which will be automatically encoded to a form submission.
>
> **[1:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=72)** We're going to set the date to 2017/06/10, the time to 06:02 am, the party, we're going to set this to something invalid, so bananas, then the name, family, and the email, username@[example.com](https://example.com), and with a semicolon.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=101)** We have no assertions this time.
>
> **[1:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=104)** With the response, we can expect response.text, then the matcher .toContain, the text: Sorry, there was a problem with your booking request, which is the generic response for a validation problem, and a period and a semicolon.
>
> **[2:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=127)** Let's also check the response code, which previously we did with SuperTest.
>
> **[2:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=131)** So we're going to expect response.status and then use the matcher toBe 400, and semicolon.
>
> **[2:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=143)** Let's add trailing semicolons and save the file.
>
> **[2:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=146)** Switch back to the terminal.
>
> **[2:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=149)** Run the test to make sure it passes, npm test.
>
> **[2:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=155)** Great, no problems.
>
> **[2:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=157)** Let's do a more complicated test, a valid reservation request.
>
> **[2:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=162)** We're going to want to mock up the database interaction.
>
> **[2:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=165)** Above, click in the reservations.test.js file and scroll to the top.
>
> **[2:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=171)** Just below mockMorgan, let's create a const mockInsert and assign it to a jest function, then mockResolvedValue to an array containing a single integer, 1349.
>
> **[3:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=189)** This mirrors what connects with return upon a successful insert, an array containing the inserted ID.
>
> **[3:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=196)** Add a trailing semicolon, and the mockInsert is complete.
>
> **[3:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=201)** Within the beforeAll, let's add a line after the jest mock for Morgan, and we're going to use jest.mock to mock the relative directory to /lib/knex.
>
> **[3:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=214)** This is relative to the file, not to its inclusion.
>
> **[3:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=218)** For the implementation, we'll do an arrow function expression, a second one, then the shorthand for executing and returning an object containing one property, insert, which we'll assign mockInsert to, trailing comma and then a semicolon.
>
> **[3:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=237)** Fantastic, almost there. Scroll down to the bottom.
>
> **[4:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=241)** Within the describe group, we're going to make a new test spec.
>
> **[4:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=245)** It should accept a valid reservation request with an async anonymous function expression.
>
> **[4:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=254)** Set the const response to await app.post to the /reservations endpoint.
>
> **[4:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=263)** As before, don't forget to specify the type of form.
>
> **[4:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=270)** Let's send an object containing the same values as before, so I'll just copy and paste here, but this time with a party of four.
>
> **[4:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=283)** No trailing semicolon this time because we're going to use SuperTest to expect that we'll get back a 200 OK response.
>
> **[4:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=294)** Semicolon now, and then finally, we expect that the response.text, and then we'll use that .toContain matcher to be the string: Thanks, your booking request number 1349, and save the file.
>
> **[5:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=313)** Switch back to the terminal, maximize the screen, and then rerun the test with npm test, then we're going to do it verbosely this time, so space dash dash, then space --verbose.
>
> **[5:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=328)** Press Enter.
>
> **[5:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=331)** What a relief. Everything is passing.
>
> **[5:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=334)** These functional tests are definitely slower than the rest of them so that could be an area for future optimization.
>
> **[5:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=341)** We're going to restore the panel size, destroy the terminal, and close up any open files.
>
> **[5:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=349)** Want to parse the HTML properly instead of just searching for text?
>
> **[5:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=353)** Check out cheerio.[js.org](https://js.org) for a server-side implementation of core jQuery without the browser cruft.
>
> **[6:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=362)** Speaking of that 100% coverage, should we attempt it?
>
> **[6:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/form-submissions-with-supertest?u=76281980&t=366)** What's the worst that can happen?

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (4), switch (3), const (3), async (2)
> **Code Identifiers:** mockinsert (3), tocontain (2), tobe (1), mockmorgan (1), mockresolvedvalue (1)
> **CLI Commands:** make (3), npm (2)
> **Tools:** terminal (3), vs code (1)
> **File Paths:** reservations.test.js (2), cheerio.js (1)
> **Env Vars:** post (1), json (1), html (1)
> **URLs:** [example.com](https://example.com) (1), [js.org](https://js.org) (1)
> **API Endpoints:** get  (1), post  (1)

#### Fallacies of 100% test coverage
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=0)** - [Instructor] An often held, but mistaken belief, is that 100% test coverage means that software is perfect.
>
> **[0:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=7)** Should you try for 100% test coverage?
>
> **[0:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=10)** Yes, but with a huge caveat.
>
> **[0:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=14)** 100% test coverage does not mean that your application is bug-free, especially if you designed your tests to conform to the buggy application.
>
> **[0:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=23)** 100% test coverage does not mean that you wrote good tests.
>
> **[0:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=27)** It just means that your tests didn't fail.
>
> **[0:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=30)** 100% test coverage could mean that your tests were not properly isolated, so unexpected behavior could still occur.
>
> **[0:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=38)** Practically, a user of the system can't use 100% test coverage because it does not deliver new functionality.
>
> **[0:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=45)** Finally, 100% test coverage is not a substitute for peer code review.
>
> **[0:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=51)** Okay, without out of the way, what does 100% test coverage look like?
>
> **[0:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=56)** Rather than dragging you through writing a number of digital tests, I've gone ahead and done the work already.
>
> **[1:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=62)** If you really want to learn, try to get to 100% yourself.
>
> **[1:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=67)** Either way a solution is available in the exercise files.
>
> **[1:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=71)** Switch over to VSCode, navigate up to file, and then add folder to workspace.
>
> **[1:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=78)** Navigate to wherever you have your exercise files, go to solutions, and then the file folder 05_06, click add.
>
> **[1:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=90)** Within the explorer, scroll down to the bottom.
>
> **[1:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=93)** Right-click on the app.test.js and go to copy.
>
> **[1:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=99)** Above, right-click on the nadia folder that you've been working on and choose paste.
>
> **[1:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=104)** Go back down to the bottom of the explorer, open routes, and control and click both of the files.
>
> **[1:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=113)** Right-click and go to copy.
>
> **[1:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=116)** Above, right-click on the routes folder, and go to paste.
>
> **[2:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=121)** Close any open files.
>
> **[2:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=123)** We're all done with a source folder, so we can right-click on it, and go to remove folder from workspace.
>
> **[2:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=132)** Click on nadia to focus it, and then open up the terminal.
>
> **[2:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=138)** Maximize the window.
>
> **[2:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=140)** And are you ready?
>
> **[2:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=142)** Type npm test.
>
> **[2:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=147)** There it is, the elusive 100%.
>
> **[2:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=150)** Wasn't that easy?
>
> **[2:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=151)** Too easy?
>
> **[2:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=152)** There might be a catch.
>
> **[2:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=154)** In the tree view, open up views, and select reservationform.pug.
>
> **[2:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=164)** If you scroll down, you can see that the party size, the options go from 1 to 8.
>
> **[2:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=169)** Now in the explorer, open routes, and select reservations.test.js.
>
> **[2:56](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=176)** Navigate to the valid reservation request post.
>
> **[3:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=180)** Change the party size to 8 and save the file.
>
> **[3:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=187)** From the terminal, run the test again, npm test.
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=194)** Well, that's not right.
>
> **[3:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=196)** Let's see what's happening.
>
> **[3:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=198)** Back in VSCode, let's check the schema.
>
> **[3:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=201)** Open up lib/schema/reservation.js.
>
> **[3:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=207)** Navigate down to validate and look at the party size.
>
> **[3:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=211)** Ah, that's your problem.
>
> **[3:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=214)** The max size is 7.
>
> **[3:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=216)** Change it to 8 and save the file.
>
> **[3:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=221)** From the terminal, run the test one last time, npm test.
>
> **[3:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=229)** Phew, back to 100%.
>
> **[3:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=232)** The moral of the story.
>
> **[3:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=234)** 100% test coverage does not mean that the application is bug-free.
>
> **[3:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=239)** 100% test coverage is a good goal, honestly.
>
> **[4:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=243)** With that said, it's not the only goal you should have.
>
> **[4:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=246)** Test well, test effectively, and find a balance between delivering functionality and testing.
>
> **[4:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=254)** We've got reporting on test coverage now.
>
> **[4:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/fallacies-of-100-test-coverage?u=76281980&t=256)** So how can we automate these reports?

> [!info]- Semantic Content
>
> **UI Navigation:** go to (5), right-click (5), navigate to (2), scroll down (2), click on (1)
> **Code Keywords:** let (2), finally, (1), switch (1), catch. (1)
> **CLI Commands:** npm (3), find (1)
> **File Paths:** app.test.js (1), reservations.test.js (1), lib/schema/reservation.js (1)
> **Tools:** terminal (3)
> **Definitions:** means that (2), is a  (1)
> **Exercise Files:** exercise files (2)
> **Warnings:** caveat (1)

#### Coverage with continuous integration
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=0)** - [Instructor] Code coverage can be reported automatically with a technique called continuous integration.
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=5)** What's that ?
>
> **[0:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=6)** Continuous integration is a technique for continually executing tasks on your code.
>
> **[0:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=12)** When code is merged into a central repository like pushing a change to a code, versioning repository automated builds can run and tests executed.
>
> **[0:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=22)** For example, unit tests and coverage reports linting tasks to check for suspicious code, and functional testing can be run automatically.
>
> **[0:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=31)** The results can be used to report problems immediately to a developer warning about potential issues with their changes.
>
> **[0:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=39)** The end result is an improvement in software quality assuming the feedback is addressed.
>
> **[0:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=44)** There are a number of options for open source continuous integration tools that you can host yourself.
>
> **[0:51](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=51)** Each of the following are extensible using plugins and configuration.
>
> **[0:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=55)** And as a result are flexible for many different use cases.
>
> **[0:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=59)** They all support both single and multiple servers working in conjunction with each other in a coordinator worker relationship.
>
> **[1:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=66)** I'll discuss each example in more detail.
>
> **[1:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=69)** They include jenkins, buildbot and spinnaker.
>
> **[1:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=73)** Let's start with jenkins.
>
> **[1:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=75)** Jenkins from "[jenkins.io](https://jenkins.io)" is written in Java.
>
> **[1:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=80)** It's highly extensible with configurations and plugins for virtually every task you can think of.
>
> **[1:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=86)** It's also the most popular continuous integration tool available.
>
> **[1:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=90)** Buildbot from "[builtbolt.net](https://builtbolt.net)" is a tool that is written in Python.
>
> **[1:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=95)** Buildbot is used by large open source projects such as Mozilla WebKit and the Chromium browser.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=101)** Although at the time of this writing Chromium is being transitioned to a different tool.
>
> **[1:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=105)** Spinnaker from "[spinnaker.io](https://spinnaker.io)" was written in Java by Netflix.
>
> **[1:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=110)** And since then, extended by Google.
>
> **[1:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=112)** Spinnaker is explicitly designed for cloud platforms including support for Kubernetes, Google cloud platform, Amazon web services, Microsoft Azure, and Oracle cloud.
>
> **[2:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=124)** If you're not comfortable running your own solution or feel it's better delegated considering continuous integration as a service.
>
> **[2:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=131)** There's a couple of different ways of getting it.
>
> **[2:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=134)** Multiple services now offer both code hosting, continuous integration and continuous delivery and deployment options.
>
> **[2:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=141)** GitHub has actions which are available on "[github.com](https://github.com)."
>
> **[2:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=146)** GitLab's offering is called CI slash CD available on "[gitlab.com](https://gitlab.com)."
>
> **[2:31](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=151)** Bitbucket pipelines can be found on "[bitbucket.org](https://bitbucket.org)."
>
> **[2:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=155)** For more specifically focused CI and CD solution both CircleCI and Travis CI provide robust continuous integration, hosted solutions.
>
> **[2:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=165)** Each of these commercial options has both free and commercial tiers available.
>
> **[2:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=170)** And there are other providers as well.
>
> **[2:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=172)** When selecting a continuous integration service, there are a few desirable features to keep in mind.
>
> **[2:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=178)** You should try to match the configuration of your production environment as closely as possible including versions of the stack, such as .JS, the package manager and so forth.
>
> **[3:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=188)** It should be easy to configure and use, not just by yourself, but by others in the organization.
>
> **[3:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=194)** It should scale to your needs of you and your team.
>
> **[3:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=197)** So nobody should be waiting an undue amount of time for a task to complete.
>
> **[3:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=202)** Finally, it should integrate with your existing workflow without too many radical changes.
>
> **[3:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=208)** For example, reporting problems and pull requests immediately surfaces issues to developers.
>
> **[3:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=214)** In this chapter, we've covered a lot of topics relating to reporting on your entire code base.
>
> **[3:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=221)** We started with a definition of what code coverage is and why it matters.
>
> **[3:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=226)** Then we measured code coverage using built into Jest.
>
> **[3:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=229)** We expanded on our code coverage by functionally testing the application with Jest along with a survey of functional testing tools.
>
> **[3:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=238)** We used test doubles in an express application to remove dependencies on services like the database.
>
> **[4:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=244)** We tested form submissions with SuperTest including setting and coding and checking the response.
>
> **[4:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=250)** Armed with an idealistic goal, we then explored the fallacies and misconceptions of 100% test coverage.
>
> **[4:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=257)** Finally, we took a brief look at some options for code coverage, using continuous integration and discussed the desirable features of a service.
>
> **[4:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/coverage-with-continuous-integration?u=76281980&t=266)** We may be nearing the conclusion of this course, but one big question remain, where can we go from here?

> [!info]- Semantic Content
>
> **URLs:** [jenkins.io](https://jenkins.io) (1), [builtbolt.net](https://builtbolt.net) (1), [spinnaker.io](https://spinnaker.io) (1), [github.com](https://github.com) (1), [gitlab.com](https://gitlab.com) (1)
> **Tools:** github (2), gitlab (2), bitbucket (2)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Analogies:** for example (2), such as (2)
> **CLI Commands:** cd (2), python (1)
> **Code Keywords:** finally, (2), let (1)
> **Warnings:** warning (1), keep in mind (1)
> **Prerequisites:** configure (1)

#### Challenge: Isolate routes for faster tests
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-isolate-routes-for-faster-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-isolate-routes-for-faster-tests?u=76281980&t=0)** - [Instructor] In this chapter, we saw that functional testing can be slower than just unit testing due to the complexity of setting up and tearing down the application.
>
> **[0:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-isolate-routes-for-faster-tests?u=76281980&t=14)** How can we minimize that overhead and speed up testing?
>
> **[0:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-isolate-routes-for-faster-tests?u=76281980&t=18)** Your challenge is to restructure both the application and tests so an individual router can be tested using the base-application configuration.
>
> **[0:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-isolate-routes-for-faster-tests?u=76281980&t=27)** I'll give you a hint.
>
> **[0:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-isolate-routes-for-faster-tests?u=76281980&t=28)** Is it easier to mock one file or mock all files except one?
>
> **[0:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-isolate-routes-for-faster-tests?u=76281980&t=33)** When you're done, check out one possible solution in the next video.
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/challenge-isolate-routes-for-faster-tests?u=76281980&t=37)** See you in a moment.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Isolate routes for faster tests
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=0)** - [Narrator] Here's the solution to the challenge about isolating express routes for faster functional tests.
>
> **[0:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=11)** If you haven't completed it yet please take a moment to practice your skills.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=16)** This solution is going to involve some restructuring including renaming existing files, updating functional test setups, and creating a separate file.
>
> **[0:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=26)** Within the exercise files, the progress 05_09 end folder, will contain the end result.
>
> **[0:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=34)** What needs to be done for this refactoring?
>
> **[0:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=37)** First we'll create a standalone router that includes our custom routes named index.js.
>
> **[0:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=43)** However, that collides where their existing index.js router for the homepage.
>
> **[0:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=47)** So, we'll need to rename it to homepage.js and update the associated test.
>
> **[0:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=53)** With that out of the way, we can now create a new minimal express router.
>
> **[0:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=58)** We'll also update the other routers to include the base URL which is currently set in app.js.
>
> **[1:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=65)** With a freshly configured routers, we'll update app.js to use the unified router instead of the individuals.
>
> **[1:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=72)** We'll also need to update each of the functional test files to mock the router and include only the route that we want to test.
>
> **[1:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=80)** This may sound daunting, but honestly we're going to touch about two dozen lines of code.
>
> **[1:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=86)** Let's get started.
>
> **[1:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=87)** Switch over to VS Code.
>
> **[1:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=89)** The first thing we need to do, is rename our homepage router.
>
> **[1:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=93)** In the Explorer, click Routes, and then right click on index.js, and select Rename.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=101)** Rename the file to homepage.js.
>
> **[1:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=106)** If prompted to update the imports for our homepage.js, do so.
>
> **[1:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=112)** We'll also need to rename the test.
>
> **[1:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=114)** Right click on index.test.js and go to Rename I'm going to rename the file to homepage.test.js.
>
> **[2:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=125)** Now that we've cleared room for our unified router, let's create it.
>
> **[2:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=130)** Right click on Routes and go to New File.
>
> **[2:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=133)** The name is index.js.
>
> **[2:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=137)** We're going to start by including express.
>
> **[2:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=139)** So const express equals require express.
>
> **[2:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=145)** Then we're going to initialize the express router.
>
> **[2:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=147)** So const router equals express.router and execute it.
>
> **[2:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=156)** The next thing we're going to do, is use the router.use to require the homepage.
>
> **[2:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=164)** We'll do the same for router.use require the admin page, and finally router.use require the reservations.
>
> **[2:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=178)** At the end assign module.exports to the router.
>
> **[3:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=183)** Save the file, then close it.
>
> **[3:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=187)** Right.
>
> **[3:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=188)** What's next?
>
> **[3:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=188)** Updating each router.
>
> **[3:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=190)** Open up admin.js.
>
> **[3:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=193)** Just a quick change here.
>
> **[3:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=195)** On line eight, the router should just be /admin.
>
> **[3:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=202)** Save the file and then close it as well.
>
> **[3:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=206)** We don't have to change the homepage as it's just the route but reservations.js should be updated.
>
> **[3:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=213)** Update line seven to be /reservations and then do the same on line 11.
>
> **[3:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=220)** Save the file, then close it.
>
> **[3:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=223)** Let's update the app itself.
>
> **[3:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=225)** If it isn't already, open up app.js in the route.
>
> **[3:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=230)** Scroll up and remove the existing routes and replace it with const routes equals require than the relative path to routes.
>
> **[4:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=243)** And that's it.
>
> **[4:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=246)** Now we're going to scroll down and we're going to remove these broken routes.
>
> **[4:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=254)** And then just after the auth admin, use the new routes.
>
> **[4:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=258)** So app.use routes.
>
> **[4:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=263)** Add a trailing semi-colon save the file and close it.
>
> **[4:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=268)** Now that we've updated app.js we can update it's associated test.
>
> **[4:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=272)** Open app.test.js.
>
> **[4:36](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=276)** In the before all, add a new line and then use just.mock on the relative path of routes.
>
> **[4:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=285)** And we're going to mock routes with a middleware that does req, res and next and it just does nothing.
>
> **[4:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=293)** So just execute next.
>
> **[4:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=297)** Add a semi-colon.
>
> **[4:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=299)** In the after all, remember to unmark routes.
>
> **[5:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=302)** So we don't inadvertently impact other tests.
>
> **[5:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=305)** So, just to unmark routes.
>
> **[5:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=311)** Add a trailing semicolon and save the file.
>
> **[5:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=314)** We're almost done.
>
> **[5:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=315)** We just have to update the individual route tests.
>
> **[5:19](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=319)** Let's close this and start with routes admin.test.js.
>
> **[5:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=325)** In the before all, we're going to start off with a just.mock for the module./ which is the shorthand for the index.js router in the same directory.
>
> **[5:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=337)** It requires a function for the implementation which we'll just use to require admin.
>
> **[5:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=346)** Remember to clean up in the after all.
>
> **[5:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=348)** So, just.unmark and then ./.
>
> **[5:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=355)** Add a trailing semi-colon and save the file.
>
> **[5:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=358)** You can close this file and then open up homepage.test.js We're going to do something very similar to admin.
>
> **[6:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=366)** In the before all, we're going to use just.mock and then relative path to the index, and then when executed it'll just require homepage.
>
> **[6:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=382)** Then in the after all let's do the cleanup.
>
> **[6:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=385)** just.unmark and then the relative index.
>
> **[6:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=390)** Add a trailing semi-colon and save the file.
>
> **[6:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=393)** Let's close this down and then open up reservations.test.js.
>
> **[6:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=400)** Scroll up to the top.
>
> **[6:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=402)** This should feel familiar.
>
> **[6:43](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=403)** In the before all, add just.mock to the index, then function expression require reservations.
>
> **[6:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=418)** Trailing semi-colon.
>
> **[6:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=419)** And then in the after all, just.unmark the index.
>
> **[7:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=426)** Add a trailing semi-colon and save the changes and then close all open files Ready to give it a try?
>
> **[7:14](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=434)** Let's do a quick sanity check first to make sure that the service itself is still running properly.
>
> **[7:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=440)** Open up the terminal, then run the application.
>
> **[7:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=443)** npm run start.
>
> **[7:27](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=447)** From the browser, navigate to local host port 3000.
>
> **[7:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=452)** Great.
>
> **[7:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=453)** The homepage is still there.
>
> **[7:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=454)** Click on Reservations.
>
> **[7:37](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=457)** It works as well.
>
> **[7:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=458)** What about /admin?
>
> **[7:42](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=462)** The username and password are admin and it works.
>
> **[7:47](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=467)** Hooray for a non-user impacting refactoring.
>
> **[7:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=470)** Close the browser.
>
> **[7:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=474)** Back in the terminal, press CTRL+C to terminate the batch job.
>
> **[7:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=479)** Say yes to the prompt.
>
> **[8:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=481)** Let's run the newly optimized tests.
>
> **[8:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=485)** Use npm test -- --verbose to see the timing.
>
> **[8:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=492)** Before we do that, let's maximize the window so we can see everything press Enter to see the result.
>
> **[8:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=501)** We still have 100% test coverage.
>
> **[8:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=504)** Was it faster?
>
> **[8:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=505)** Let's look at the individual tests.
>
> **[8:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=508)** These timings for the functional tests are definitely faster.
>
> **[8:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=512)** But as the overall time reported it can be a little variable due in part to additional setup and tear down.
>
> **[8:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=519)** So was this exercise worth it?
>
> **[8:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=521)** In a smaller existing application, it might not be worth the effort if it's already structured like this.
>
> **[8:48](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=528)** Locally, when I was benchmarking this, I saved roughly about a half to a full second.
>
> **[8:54](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=534)** Unnecessary micro optimizations can waste valuable development time.
>
> **[8:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=539)** Now, what if this was a much larger or more complex application?
>
> **[9:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=544)** Absolutely worth it.
>
> **[9:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=545)** It can save minutes or even hours depending on the scale of the application.
>
> **[9:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=550)** At the end of the day, I feel it's a best practice to structure applications so they can be tested in isolation especially if you're building something new.
>
> **[9:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=560)** Thanks for following along.
>
> **[9:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/solution-isolate-routes-for-faster-tests?u=76281980&t=561)** These challenges were fun for me to design and implement and I hope you had fun too.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), require (8), const (3), module (2), function (2)
> **File Paths:** index.js (5), app.js (4), homepage.js (3), homepage.test.js (2), index.test.js (1)
> **UI Navigation:** click on (4), go to (2), scroll up (2), scroll down (1), navigate to (1)
> **CLI Commands:** npm (2), make (1)
> **Tools:** terminal (2), vs code (1)
> **Best Practices:** remember to (2), best practice (1)
> **Env Vars:** url (1), ctrl (1)
> **Ports:** port 3000 (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Testing and code quality goals
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=0)** - [Instructor] We've been discussing theory and practice of testing and code quality.
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=5)** How does that apply to what you're working on?
>
> **[0:09](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=9)** Let's admit the truth to ourselves.
>
> **[0:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=11)** There's no such thing as a perfect codebase.
>
> **[0:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=15)** It's okay to say that because software that we're working on is always changing.
>
> **[0:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=20)** Improvement is always an option, and I'd like to give you some ways to make it happen.
>
> **[0:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=26)** When improving an existing codebase, start off by setting achievable and reasonable goals.
>
> **[0:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=32)** Documenting every single function and updating every package in an afternoon, not going to happen.
>
> **[0:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=38)** Part of the goals should include metrics.
>
> **[0:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=41)** An example goal is 70% code coverage on a particular component.
>
> **[0:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=46)** So the project doesn't drag on forever, have a timeline that you can work towards.
>
> **[0:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=52)** It can be as easy as "by Friday" or a multi-step process.
>
> **[0:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=57)** Do some research into how you'd like to improve based on your needs.
>
> **[1:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=61)** This might include tooling or different approaches.
>
> **[1:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=65)** Finally, write a plan.
>
> **[1:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=66)** It doesn't have to be long.
>
> **[1:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=68)** It should state what you want to do and how.
>
> **[1:11](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=71)** It'll be good to refer to as you go along.
>
> **[1:15](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=75)** Here's some things to try.
>
> **[1:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=77)** Consider focusing on choices that improve code quality.
>
> **[1:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=81)** The less arbitrary, the better.
>
> **[1:23](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=83)** It's good to get team buy-in, which means involvement and transparency.
>
> **[1:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=88)** That includes collaborating on coding standards, including voting if that helps.
>
> **[1:33](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=93)** Sometimes, you won't get everything that you want, but it's better to make a decision that's good for the group's needs.
>
> **[1:40](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=100)** Write brief but accurate documentation because reading a novel is hard.
>
> **[1:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=106)** Finally, be open to trying alternative approaches.
>
> **[1:49](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=109)** There's always more than one way to do something.
>
> **[1:53](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=113)** Here's some things to avoid when attempting to improve code quality.
>
> **[1:57](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=117)** First of all, avoid trying to do too much at once because it's disruptive, messy, and annoying.
>
> **[2:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=124)** The expression, "Rome wasn't built in a day" comes to mind.
>
> **[2:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=128)** Don't fixate on making tools happy because they're arbitrary measurements.
>
> **[2:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=133)** Avoid being pedantic, meaning too concerned with literal accuracy and formality.
>
> **[2:18](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=138)** I know that particular point is ironic coming from a course like this, but do try.
>
> **[2:24](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=144)** Do not demand compliance to a set of rules and instead find ways to work together.
>
> **[2:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=150)** If people don't want to work together, no code quality guidelines are going to to help.
>
> **[2:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=155)** Finally, avoid the not invented here attitude.
>
> **[2:39](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=159)** You won't learn anything by staying in an insular bubble.
>
> **[2:44](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=164)** Are you starting a new project from scratch?
>
> **[2:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=166)** Establish positive code quality guidelines from the start.
>
> **[2:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=170)** That can include a README that describes expectations.
>
> **[2:55](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=175)** Figure out what your preferred tool set is and document it.
>
> **[2:59](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=179)** When starting a project, only include the utilities you need.
>
> **[3:03](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=183)** It's always easy to add a module and it's hard to remove one.
>
> **[3:07](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=187)** This means avoiding excessive boilerplates that try to solve every problem.
>
> **[3:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=192)** Boilerplates can be good, but they're not a panacea that cures all ills.
>
> **[3:17](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=197)** Above all, make it easy for a developer working on the project to be successful.
>
> **[3:22](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=202)** To quote Steve Krug, "Don't make me think."
>
> **[3:26](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=206)** Of course, code quality is a good thing and something to strive for.
>
> **[3:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=210)** Don't forget to make great software while you're at it.
>
> **[3:34](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=214)** A perfect codebase that nobody uses is less important than an imperfect one many people use.
>
> **[3:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/testing-and-code-quality-goals?u=76281980&t=221)** Is there anything else you can do to learn more about testing and code quality?

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), try. (2), let (1), function (1), this, (1)
> **CLI Commands:** make (5), find (1)
> **Env Vars:** readme (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Where to go from here?
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=0)** - [Instructor] Code quality is a moving target and I hope that you're interested in learning more.
>
> **[0:05](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=5)** There's a lot of exciting directions that you can go in based on this experience.
>
> **[0:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=10)** One of the easiest ways to start improving your code is to implement a coding standard.
>
> **[0:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=16)** To save time, just extend an existing coding standard.
>
> **[0:20](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=20)** Keep in mind the ultimate goal, which is to improve code quality.
>
> **[0:25](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=25)** There are some different plugins that can be used with ESLint that I didn't include.
>
> **[0:30](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=30)** For example, requiring valid JavaScript documentation on all functions.
>
> **[0:35](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=35)** ESLint used to include it built-in, but now they've been replaced with a plugin called eslint-plugin-jsdoc that analyzes the contents of docs and makes some great suggestions.
>
> **[0:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=46)** Also, consider implementing the Jest plugin, which is eslint-plugin-jest.
>
> **[0:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=52)** It enforces best practices and provide some pretty opinionated configurations.
>
> **[0:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=58)** Jest is not the only testing framework and there are many to try.
>
> **[1:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=61)** We also discussed AVA, Jasmine, Mocha, and tape.
>
> **[1:06](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=66)** I recommend trying each of them when you get a moment.
>
> **[1:10](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=70)** Functional testing goes way beyond just filling out a form or checking for text on a page.
>
> **[1:16](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=76)** CasperJS offers a headless WebKit, which is powerful and fast.
>
> **[1:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=81)** Selenium WebDriver along with Nightwatch.js and WebDriverIO uses entire browsers for maximum testing.
>
> **[1:29](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=89)** There's no one right answer.
>
> **[1:32](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=92)** While coverage can be calculated in a single project, what if you are managing many projects?
>
> **[1:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=98)** Consider a coverage as a service.
>
> **[1:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=101)** These are all commercial options and I'm listing them in alphabetical order.
>
> **[1:46](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=106)** There's Codacy from [codacy.com](https://codacy.com), Codecov from [codecov.io](https://codecov.io), Code Climate from [codeclimate.com](https://codeclimate.com), and Coveralls from [coveralls.io](https://coveralls.io).
>
> **[1:58](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=118)** Compare their approaches and determine if they're a good fit for your needs.
>
> **[2:02](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=122)** Finally, we discussed continuous integration, which is used for automatic testing.
>
> **[2:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=128)** What about the next step up with continuous delivery where code is automatically deployed?
>
> **[2:13](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=133)** That might sound risky, but with good testing and a rapid deployment process, developers can rapidly iterate and improve.
>
> **[2:21](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=141)** We've come a long way together and I hope you've gained an understanding about code quality and how you can apply it.
>
> **[2:28](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=148)** Anyone can write software, but maintaining it and knowing when something goes wrong, those are professional skills that are an asset to any team or group.
>
> **[2:38](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=158)** I appreciate your time and interest in learning.
>
> **[2:41](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=161)** Life is too short to be content with what we already know.
>
> **[2:45](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=165)** I hope you've enjoyed this course as much as I've enjoyed researching and writing it.
>
> **[2:50](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=170)** I'll let you in on a secret.
>
> **[2:52](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=172)** This is my second revision of this course, and during my research and revision, I found mistakes in both my work and previous version of this course.
>
> **[3:01](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=181)** Nobody's perfect and we can all grow.
>
> **[3:04](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=184)** Please take a moment to give feedback through the course homepage.
>
> **[3:08](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=188)** It will help make future courses better and we'd love to hear from you.
>
> **[3:12](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/where-to-go-from-here?u=76281980&t=192)** Thanks for watching.

> [!info]- Semantic Content
>
> **Code Keywords:** include. (1), try. (1), finally, (1), let (1)
> **URLs:** [codacy.com](https://codacy.com) (1), [codecov.io](https://codecov.io) (1), [codeclimate.com](https://codeclimate.com) (1), [coveralls.io](https://coveralls.io) (1)
> **File Paths:** nightwatch.js (1)
> **CLI Commands:** make (1)
> **Env Vars:** ava (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)


## Instructor

- [[Jon Peck]]

## Resources

- Exercise files available

## Skills Covered

- Node.js

## Path Context

### In [[Explore Web Development with Node.js]]
← [[Learning npm- A Package Manager]] | **3 of 11** | [[Databases for Node.js Developers]] →

### In [[Advance your Node.js Skills]]
← [[Node.js- Design Patterns]] | **3 of 8** | [[Node.js- Debugging and Performance Tuning]] →

### In [[Explore App Development with the MERN Stack]]
← [[Express Essentials- Build Powerful Web Apps with Node.js]] | **6 of 13** | [[Building a Website with Node.js and Express.js]] →

## Appears In

- [[Explore Web Development with Node.js]]
- [[Advance your Node.js Skills]]
- [[Explore App Development with the MERN Stack]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js
- [[Building a Website with Node.js and Express.js]] — Node.js
- [[Advanced Node.js- Scaling Applications]] — Node.js
- [[Advanced Node.js]] — Node.js
- [[Node.js- Debugging and Performance Tuning]] — Node.js

---

[↑ Back to top](#)