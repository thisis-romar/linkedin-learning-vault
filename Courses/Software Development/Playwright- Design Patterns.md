---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: playwright-design-patterns
url: "https://www.linkedin.com/learning/playwright-design-patterns"
duration_minutes: 82
duration: 1h 22m
level: Intermediate
updated: 11/25/2024
learners: 56178
skills:
  - Design Patterns
  - Test Automation
exercise_files: true
github: "https://github.com/LinkedInLearning/playwright-design-patterns-2019019"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQE68ssz1R0Ufw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731097260562?e=2147483647&amp;v=beta&amp;t=RUlzWaTzqCfWpEjv_Lu3mKjo4TCxEZW_kf4lysTgpxI"
linkedin_topic: Software Development
learning_paths:
  - '[[Master Test Automation with Playwright]]'
prev_courses:
  - '[[Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios]]'
next_courses:
  - '[[Advanced Playwright Techniques- Optimizing Speed, Stability, and Cloud Testing]]'
path_nav: '[{"path":"Master Test Automation with Playwright","position":3,"total":4,"prev":"Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios","next":"Advanced Playwright Techniques- Optimizing Speed, Stability, and Cloud Testing"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/design-patterns
  - skill/test-automation
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Playwright-%20Design%20Patterns.md)

![Playwright: Design Patterns](https://media.licdn.com/dms/image/v2/D4E0DAQE68ssz1R0Ufw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731097260562?e=2147483647&amp;v=beta&amp;t=RUlzWaTzqCfWpEjv_Lu3mKjo4TCxEZW_kf4lysTgpxI)

# Playwright: Design Patterns

> In this course, learn how to leverage design patterns to enhance your test automation framework using Playwright. By understanding and implementing patterns such as the Page Object Model, fixtures, and data-driven testing, you'll be able to write cleaner, more maintainable, and scalable test scripts. This course is designed for test automation engineers and developers who want to improve their tes

> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns) | 1h 22m | Intermediate | 56K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Design Patterns]]** (2 videos)
- **[[#2. Fixtures]]** (7 videos)
- **[[#3. Page Object Model]]** (6 videos)
- **[[#4. Behavior Driven Development (BDD)]]** (6 videos)
- **[[#5. Data-Driven Testing]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Explore design patterns in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/welcome?u=76281980&t=0)** - [Qambar] Welcome.
>
> **[0:01](https://www.linkedin.com/learning/playwright-design-patterns/welcome?u=76281980&t=1)** By the end of this course, you will have the skills to build robust automation frameworks.
>
> **[0:07](https://www.linkedin.com/learning/playwright-design-patterns/welcome?u=76281980&t=7)** First, we will master fixtures, the backbone of reusable, isolated tests in Playwright.
>
> **[0:14](https://www.linkedin.com/learning/playwright-design-patterns/welcome?u=76281980&t=14)** Next, we'll explore how to organize your test code with page object models.
>
> **[0:20](https://www.linkedin.com/learning/playwright-design-patterns/welcome?u=76281980&t=20)** Then, we'll integrate behavior-driven development with Playwright for readable and collaborative tasks.
>
> **[0:27](https://www.linkedin.com/learning/playwright-design-patterns/welcome?u=76281980&t=27)** Finally, we'll scale test efficiently using data-driven testing.
>
> **[0:34](https://www.linkedin.com/learning/playwright-design-patterns/welcome?u=76281980&t=34)** I'm Qambar Raza, and in this course, I will show you how to build scalable and maintainable Playwright tests using proven design techniques.
>
> **[0:42](https://www.linkedin.com/learning/playwright-design-patterns/welcome?u=76281980&t=42)** So what are you waiting for? Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - [qambar] (1)

#### Setting up your local environment
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=0)** - [Instructor] Welcome to the course.
>
> **[0:01](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=1)** In this first video, we are going to set up a basic Playwright framework that we'll use as a foundation for all the demos and examples throughout the course.
>
> **[0:09](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=9)** Now, I highly encourage you to follow along with me as I code.
>
> **[0:13](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=13)** This way, you can get hands-on experience and learn on the spot.
>
> **[0:17](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=17)** I'll walk you through each step in real-time and we'll build the framework together.
>
> **[0:22](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=22)** Of course, if you need to refer back, you'll also find the full code in the resources.
>
> **[0:27](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=27)** So I'm inside the folder and I'm on the terminal.
>
> **[0:30](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=30)** I will start writing the command npm init and right now the folder is empty, so playwright@latest.
>
> **[0:41](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=41)** At this point, it'll ask me, what language do I want to choose?
>
> **[0:44](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=44)** And I will select TypeScript.
>
> **[0:47](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=47)** And by default, I want to put the test in the test folder and I will just press Enter, Enter, Enter, and it'll create the framework, downloading all the necessary dependencies like the browser.
>
> **[1:02](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=62)** And you can see if you click on the folder, files will start to appear.
>
> **[1:09](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=69)** So on my left-hand side you can see a file called playwright.config.
>
> **[1:14](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=74)** This is where you can set up the browsers.
>
> **[1:16](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=76)** I normally disable the browsers from Firefox and WebKit while running the tests so that I can run these tests quickly and develop these tests faster.
>
> **[1:28](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=88)** And then I enable them later on.
>
> **[1:31](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=91)** Secondly, we have got the package.json file.
>
> **[1:35](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=95)** You can put this test run command inside the script if you need to.
>
> **[1:39](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=99)** If not, then you can run the test using npx playwright test.
>
> **[1:43](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=103)** And last but not least, I'll delete this folder, which is the test examples, 'cause we don't need this folder.
>
> **[1:50](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=110)** Inside the test, we have got an example, which clearly shows an example of going to Playwright documentation and checking the title.
>
> **[2:02](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=122)** So I'm just going to run this test and see if it's working.
>
> **[2:06](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=126)** So npx playwright test.
>
> **[2:11](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=131)** And you can see both of these tests are passing.
>
> **[2:15](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=135)** Once you see the test pass, you're all set.
>
> **[2:18](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=138)** We now have a fully functional Playwright setup.
>
> **[2:21](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=141)** If you ran into any issues, don't worry, check the code in the resources, but try coding along with me first for the best learning experience.
>
> **[2:30](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=150)** Now that you have set up the basic Playwright framework, we'll be using this for all the upcoming videos.
>
> **[2:36](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=156)** Each demo and example will be built on top of this, so it's important to follow along with me.
>
> **[2:42](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=162)** You'll find all the code in the resources for easy reference, but I encourage you to code as we go to get the most out of this course.
>
> **[2:50](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=170)** Following along will help you understand how everything fits together, and by the end of this course, you'll have built a solid foundation step-by-step.
>
> **[2:59](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-your-local-environment?u=76281980&t=179)** If you are ready, let's dive into the next lesson where we'll explore the first design pattern, which is fixtures.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), npx (2), npm (1)
> **Code Keywords:** default, (1), delete (1), pass (1), this, (1), let (1)
> **Prerequisites:** set up (3), setup (1)
> **File Paths:** playwright.config (1), package.json (1)
> **Tools:** terminal (1), firefox (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Design Patterns

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is a design pattern?
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=0)** - [Presenter] Imagine a project where every piece of code feels disorganized and chaotic like this image.
>
> **[0:07](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=7)** Every update leads to more complexity.
>
> **[0:10](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=10)** Without a clear structure, maintaining the code becomes a nightmare.
>
> **[0:14](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=14)** This is where design patterns come in.
>
> **[0:17](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=17)** They provide systematic solutions to common coding problems, allowing you to keep your code structured, efficient, and scalable over time.
>
> **[0:27](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=27)** Think of your web application as a house under construction.
>
> **[0:32](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=32)** Design patterns are like blueprints that guide every step of the process.
>
> **[0:37](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=37)** Without blueprints, you could still build a house, but it wouldn't be as sturdy or efficient.
>
> **[0:42](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=42)** In coding, these patterns ensure that your solutions are robust and adaptable.
>
> **[0:50](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=50)** By using design patterns, you ensure that your code is not only functional but also maintainable.
>
> **[0:57](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=57)** They solve common coding issues, make the code easier to update as your project grows.
>
> **[1:03](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=63)** Without these patterns, future changes can become unnecessarily complex and time-consuming.
>
> **[1:10](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=70)** In this course, we'll dive into several crucial design patterns used in Playwright, each one designed to make your test automation more maintainable and efficient.
>
> **[1:22](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-design-pattern?u=76281980&t=82)** We'll cover the page object model, which organizes your test code and simplifies interaction with web elements, fixtures, which streamline test setup and tear down, behavior-driven development, which allows you to write tests in human readable format, and data-driven testing, a powerful approach to testing multiple scenarios with minimal effort.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [presenter] (1)

#### Types of design pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=0)** - [Instructor] Design patterns are strategies that help solve common problems in software development.
>
> **[0:05](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=5)** They are divided into three main types, structural patterns.
>
> **[0:09](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=9)** They focus on how different parts of your code are organized, ensuring they are easy to manage and scale.
>
> **[0:18](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=18)** Behavioral patterns.
>
> **[0:19](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=19)** These define how objects interact and communicate within your application.
>
> **[0:25](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=25)** Creational patterns.
>
> **[0:26](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=26)** These deal with how objects are created and managed efficiently.
>
> **[0:33](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=33)** Structural patterns are concerned with how you organize your code just like organizing books in a library, they focus on the composition of classes and objects to form larger structures within your application.
>
> **[0:47](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=47)** By using structural patterns, you can ensure that your code is well organized, maintainable, and easy to extend.
>
> **[0:54](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=54)** One example we will discuss in this course is the page object model.
>
> **[1:00](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=60)** Behavioral patterns are like the screenplay of a film or television show that guides the action.
>
> **[1:06](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=66)** They focus on how objects interact and communicate within your code.
>
> **[1:10](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=70)** These patterns define the flow of control and data between different parts of your application, ensuring that everything works together smoothly.
>
> **[1:21](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=81)** Creation patterns guide the process of object creation, like a chef preparing ingredients before cooking.
>
> **[1:29](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=89)** These patterns ensure that objects are created in a controlled and efficient manner.
>
> **[1:35](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=95)** In playwright creation patterns are especially useful when setting up fixtures which manage and create components like browser instances and page objects.
>
> **[1:47](https://www.linkedin.com/learning/playwright-design-patterns/types-of-design-pattern?u=76281980&t=107)** Just like a chef ensures all the ingredients are ready before starting to cook, fixtures help create and manage the resources your test needs.

> [!info]- Semantic Content
>
> **Analogies:** just like (2)
> **Speakers:** - [instructor] (1)


### 2. Fixtures

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to fixtures
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=0)** - [Instructor] Think of fixtures like the foundation of a building.
>
> **[0:03](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=3)** They ensure that everything built on top is stable and consistent.
>
> **[0:08](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=8)** In Playwright, fixtures handle essential setup tasks like launching browser instances or initializing test data.
>
> **[0:15](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=15)** They manage setup and teardown, ensuring that each test starts and ends with the same controlled conditions, making your tests stable and reliable.
>
> **[0:28](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=28)** Using fixtures is like laying the same solid foundation for every building.
>
> **[0:33](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=33)** Without that foundation, the structure above would become unstable.
>
> **[0:37](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=37)** In Playwright, fixtures help you reuse common setup logic, like setting up browser context or cookies across tests.
>
> **[0:46](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=46)** This not only reduces duplication, but also ensures that every test begins with a clean and reliable environment, making your test process more efficient.
>
> **[0:57](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=57)** Let's break down some key fixture concepts.
>
> **[0:59](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=59)** First, there is the setup phase, which is like preparing the site before construction begins, clearing the land and laying the foundation.
>
> **[1:10](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=70)** In Playwright, this might involve setting up browser context or loading test data.
>
> **[1:17](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=77)** Then there is the teardown phase, which is like clearing up after construction, making sure each test environment is reset.
>
> **[1:27](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=87)** Finally, lifecycle management controls resources like browser instances, ensuring that tests run in isolated environments and don't interfere with each other.
>
> **[1:39](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=99)** To wrap up, fixtures are essentially for simplifying and stabilizing your test environments.
>
> **[1:45](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=105)** In Playwright, they provide consistent setup and teardown processes, managing things like browser instances and test data across tests.
>
> **[1:55](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-fixtures?u=76281980&t=115)** In the next video, we'll dive deeper into Playwright-specific fixtures where you'll see how to set up and manage resources efficiently.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (5), set up (1)
> **Code Keywords:** let (1), finally, (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### What are Playwright fixtures?
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=0)** - [Instructor] In the previous video, we learned about fixtures in general.
>
> **[0:04](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=4)** Now let's take a look at them from Playwright's perspective.
>
> **[0:07](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=7)** There are two types of fixtures in Playwright, built-in fixtures and custom fixtures.
>
> **[0:13](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=13)** Built-in fixtures are ready to use tools for common tasks such as interacting with browsers and pages.
>
> **[0:20](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=20)** For example, the built-in browser and contact fixtures help you manage multiple browser sessions easily.
>
> **[0:29](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=29)** Custom fixes on the other hand, allow us to inject specific tools like page object models into tests to create more specialized setups.
>
> **[0:40](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=40)** There are three main benefits of using Playwright fixtures.
>
> **[0:43](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=43)** Consistency, modularity, and isolation.
>
> **[0:48](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=48)** When working on a project with multiple teams contributing, fixtures provide a standard approach ensuring that tests are consistent and reusable.
>
> **[0:57](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=57)** They also help tests isolate and make them independent from each other, which is crucial in large projects.
>
> **[1:05](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=65)** For example, each test runs with its own browser context, preventing interference between tests and ensuring accuracy.
>
> **[1:13](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=73)** Let's look at some examples of what Playwright fixtures can manage.
>
> **[1:17](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=77)** First, browser context.
>
> **[1:19](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=79)** Fixtures can handle multiple browser sessions simultaneously, ensuring each test runs in a separate environment.
>
> **[1:26](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=86)** Fixtures also manage page objects, making it easier to interact with webpages during tests.
>
> **[1:33](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=93)** Additionally, fixes handle data setup, preparing necessary test data before execution so that your test runs smoothly without manual preparation each time.
>
> **[1:45](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=105)** In conclusion, Playwright fixtures are essential for managing your test environments.
>
> **[1:49](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=109)** They automate setup and teardown processes, ensuring your tests are consistent, modular, and isolated.
>
> **[1:56](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=116)** By handling tasks like browser context and test data, fixtures make your tests easier to manage and more reliable.
>
> **[2:04](https://www.linkedin.com/learning/playwright-design-patterns/what-are-playwright-fixtures?u=76281980&t=124)** In our next video, we'll dive into the practical application of these fixes and explore how to set them up in your Playwright projects.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (2)
> **Code Keywords:** let (2)
> **Cross-References:** previous video (1), next video (1)
> **Prerequisites:** setup (2)
> **Speakers:** - [instructor] (1)

#### Setting up fixtures in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=0)** - In this video, we'll compare writing tests with and without using playwright built-in fixtures.
>
> **[0:06](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=6)** You'll see how fixtures can make your tasks simpler and more maintainable by reducing repetitive code.
>
> **[0:14](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=14)** So here's the how the test would look like without using built-in fixtures.
>
> **[0:19](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=19)** So if I do import, expect test and Chromium from playwright test, and we are writing a test to check if the sign in button is visible.
>
> **[0:41](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=41)** So what we need is a browser.
>
> **[0:47](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=47)** And we'll use Chromium.launch to launch the browser.
>
> **[0:52](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=52)** Then we'll have a page.
>
> **[0:55](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=55)** So we'll use browser to create a new page.
>
> **[1:05](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=65)** And then we need to go to that page, so await page.goto.
>
> **[1:13](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=73)** And we'll go to the binaryville website and go to the account page where we have got a sign in button.
>
> **[1:28](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=88)** So because it's a button, I can use page.getByRole to get the button and the name of the button is Sign In.
>
> **[1:46](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=106)** And I'm going to use await expect
>
> **[2:00](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=120)** to check sign in button is visible.
>
> **[2:09](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=129)** And after I've done all that, I will do a cleanup.
>
> **[2:12](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=132)** So await browser.close.
>
> **[2:19](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=139)** So what this test does is it looks for a sign in button is visible.
>
> **[2:24](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=144)** So I'm going to execute this test npx playwright test.
>
> **[2:33](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=153)** And you can see the test is passing.
>
> **[2:38](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=158)** Now let's see how the same test looks like when we use playwright's built-in fixtures.
>
> **[2:45](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=165)** So, to use playwright built-in fixtures, I will add the fixture, which is the page fixture.
>
> **[2:53](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=173)** Now because we are getting the playwright built-in fixtures, we don't need the browser or page.
>
> **[3:04](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=184)** And we don't need the cleanup.
>
> **[3:08](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=188)** And we no longer need to import Chromium.
>
> **[3:13](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=193)** Let's try and run this test again.
>
> **[3:17](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=197)** With built-in playwright fixtures, playwright automatically manages browsers set up and tear down.
>
> **[3:24](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=204)** You don't need to manually launch or close the browser.
>
> **[3:28](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=208)** Which simplifies your test and reduces repetitiveness in the code.
>
> **[3:35](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=215)** As you can see, using built-in fixtures can streamline your tests by automatically handling the browser lifecycle allowing you to focus more on writing test logic.
>
> **[3:46](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-fixtures-in-playwright?u=76281980&t=226)** In the next video, we'll explore even more ways to optimize your test automation using playwright fixtures.

> [!info]- Semantic Content
>
> **Code Keywords:** await (3), let (2), import, (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (1), npx (1)
> **Code Identifiers:** getbyrole (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### Creating custom fixtures
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=0)** - [Instructor] You have already seen an example of using built-in fixtures.
>
> **[0:03](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=3)** So in this video we'll explore how to create custom fixes in playwright.
>
> **[0:07](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=7)** Custom fixes help automate specific tasks like login, making your test suite more maintainable.
>
> **[0:13](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=13)** To create a custom fixture, we extend the default test object in playwright with custom functionality.
>
> **[0:19](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=19)** So here's how we do it.
>
> **[0:20](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=20)** So import, test, and we will rename this test as base and we'll import expect from playwright test.
>
> **[0:32](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=32)** Now we'll create a new test object, which will extend the default playwright.
>
> **[0:40](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=40)** Test.
>
> **[0:44](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=44)** And we'll write, we'll create a new fixture here.
>
> **[0:47](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=47)** So test data is sync
>
> **[0:55](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=55)** and use.
>
> **[0:57](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=57)** The first argument is an object that could contain other fixtures you want to depend on, but here it is empty.
>
> **[1:05](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=65)** The second argument is use, a callback function provided by playwright, which allows you to expose fixtures, data in this case, to the test.
>
> **[1:23](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=83)** So I'm going to create data here, email test edit [example.com](https://example.com), and a password pass 1, 2, 3.
>
> **[1:42](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=102)** Now the callback function or playwright use, and you'll pass in data.
>
> **[1:49](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=109)** So that's it.
>
> **[1:50](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=110)** You have created your first custom fixture.
>
> **[1:53](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=113)** Now how can we use this fixture in the test?
>
> **[1:57](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=117)** It's very simple.
>
> **[1:59](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=119)** So you use the test, the one that you created, line number three, and then just create the test.
>
> **[2:09](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=129)** Should log in with test data async.
>
> **[2:17](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=137)** Here I'm using the built-in fixture page and the newly created fixture test data.
>
> **[2:32](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=152)** And in the test, first I will go to the page, which is binary [will.com/account](https://will.com/account).
>
> **[2:44](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=164)** On this page, I have got an email input, which I can get using p.dot get by rule, and it's a text box and the name is email.
>
> **[3:07](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=187)** I'll do the same for the password with the P capital.
>
> **[3:17](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=197)** Now for the email input, I'll do await email input fill.
>
> **[3:25](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=205)** I will fill it with the value that I get from the fixture.
>
> **[3:29](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=209)** So I mean, you're going to use the test data.
>
> **[3:32](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=212)** So test data.email.
>
> **[3:37](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=217)** I will do the same for the password, await password input fill test data, password.
>
> **[3:54](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=234)** So this will fill in the value email and password.
>
> **[3:57](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=237)** Now I will create the sign in button, be .get by roll and it's a button.
>
> **[4:12](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=252)** We get it by its name, which is sign in and we'll click on the button.
>
> **[4:26](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=266)** What this does is it submits the form.
>
> **[4:30](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=270)** So once the form has been submitted, we'll get the URL of the page.
>
> **[4:36](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=276)** Basically it puts the email and password in the page URL once you submit the form.
>
> **[4:40](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=280)** So you can do an expect URL to contain test data.password.
>
> **[4:54](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=294)** So we are just checking the URL contains the password and that's run this test.
>
> **[5:08](https://www.linkedin.com/learning/playwright-design-patterns/creating-custom-fixtures?u=76281980&t=308)** And the test passes.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), pass (2), await (2), import, (1), case, (1)
> **Env Vars:** url (4)
> **URLs:** [example.com](https://example.com) (1), [will.com](https://will.com) (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Automatic fixtures
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=0)** - [Instructor] In this lesson, we'll expand on fixtures we created earlier for handling test data by introducing automatic fixtures in Playwright.
>
> **[0:09](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=9)** We'll see how they simplify setup tasks like user authentication by running setup and tear down logic automatically without needing explicit references in task cases.
>
> **[0:20](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=20)** So as you can see, we have got the same code.
>
> **[0:24](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=24)** I'm going to create a new fixture here, authenticatedUser, and async.
>
> **[0:33](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=33)** This time I will use the page, which is a built-in fixture and the test data, the custom fixture that we have created.
>
> **[0:41](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=41)** And the second parameter is the callback function, which is the use.
>
> **[0:48](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=48)** All I'm doing over here is copying the logic for signing in and putting it into the fixture.
>
> **[1:00](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=60)** Now, this is a normal fixture.
>
> **[1:03](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=63)** To create an automatic fixture, I will have to convert this authenticatedUser into an array so that it can take fixture configuration options.
>
> **[1:13](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=73)** So now that, as you can see, authenticatedUser is an array, I can pass in the object, which is going to tell Playwright
>
> **[1:26](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=86)** that this is an automatic fixture and it'll contain auto true.
>
> **[1:33](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=93)** So now you have created an automatic fixture, but there is still one thing missing.
>
> **[1:37](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=97)** As you can see, there is a callback function, which is use.
>
> **[1:40](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=100)** So I will use that function, await use, and pass in page.
>
> **[1:49](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=109)** So this completes our definition of the automatic fixture, which means that we do not need to inject this on line number 24 in the test.
>
> **[2:00](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=120)** So if I try to run the test, as you can see, the test is now just two lines.
>
> **[2:04](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=124)** If I try to run it, let's see what happens.
>
> **[2:12](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=132)** And the test passes.
>
> **[2:13](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=133)** Automatic fixtures, like the one we created for authentication, are particularly useful for a common set of tasks.
>
> **[2:20](https://www.linkedin.com/learning/playwright-design-patterns/automatic-fixtures?u=76281980&t=140)** By combining test data and logic to enhance accessibility and reliability, we reduced boiler plate code, increased test consistency, and made our test suite more reliable.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), pass (2), async (1), await (1), let (1)
> **Definitions:** is a  (3), is an  (2), means that (1)
> **Code Identifiers:** authenticateduser (3)
> **Prerequisites:** setup (2)
> **Speakers:** - [instructor] (1)

#### Fixture scope and isolation
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=0)** - [Instructor] Let's explore the difference between two fixer scopes in Playwright, task scope and worker scope.
>
> **[0:05](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=5)** These scopes control how and when fixtures are created, which impacts how state is managed across your test.
>
> **[0:12](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=12)** So let's start by importing test and renaming it as base from playwright/test.
>
> **[0:23](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=23)** Then I'm going to create a global variable called counter, and we will use this counter within our fixtures.
>
> **[0:30](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=30)** So let's create a fixture now.
>
> **[0:32](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=32)** So constant test is equal to base.extend.
>
> **[0:39](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=39)** And in this base.extend, I will create a fixture called counterFixture.
>
> **[0:46](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=46)** And if you remember, array is used to pass in fixture options, so the first thing is the fixture itself.
>
> **[0:56](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=56)** And we will have the callback function.
>
> **[1:02](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=62)** After this, we have got... We'll just increment the counter.
>
> **[1:07](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=67)** So the global variable, which is counter, I'm going to just increment that.
>
> **[1:12](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=72)** And let's pass in that counter value.
>
> **[1:17](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=77)** Now we need to pass in an option.
>
> **[1:20](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=80)** So the option is scope, and the scope is worker.
>
> **[1:26](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=86)** So here we have created a fixture with a scope worker.
>
> **[1:31](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=91)** Let's try to use that in the test.
>
> **[1:35](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=95)** So our first test, which is test one, we'll basically use a fixture, counterFixture,
>
> **[1:49](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=109)** and we'll just print out the value of the counter.
>
> **[1:56](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=116)** I will use a different type of string so that I can specify the variable.
>
> **[2:11](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=131)** So we are using the counterFixture, which is coming from here.
>
> **[2:17](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=137)** Okay?
>
> **[2:18](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=138)** So I'm going to copy paste this test and create two more tests for this.
>
> **[2:24](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=144)** 2, 3, 2, 3.
>
> **[2:31](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=151)** So we have got three tests.
>
> **[2:32](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=152)** And three tests are using this fixture, which is scoped to worker.
>
> **[2:36](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=156)** Now, if I try to run this test, I'm going to make sure that I'm only using one worker, so I've specified --workers equal to one.
>
> **[2:49](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=169)** Now if you look at the console, the first test had a counter value of one.
>
> **[2:55](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=175)** The second test had a counter value of one, and the third test had a counter value of one.
>
> **[3:01](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=181)** This is because we are using scope worker.
>
> **[3:04](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=184)** When you use a scope worker, the fixture is created only once, and that is why there was increment, which was only one time, from zero to one.
>
> **[3:15](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=195)** Now, if I change the scope to test, and just so you know, if you don't specify any scope, the default scope is test.
>
> **[3:23](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=203)** And if I run this now, you can see the counter value is one, two, and three, which means this fixture was created three times within this test for the same worker.
>
> **[3:37](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=217)** To summarize, test scope creates a new fixture for each test, which means any state, like a counter, will change with every test.
>
> **[3:46](https://www.linkedin.com/learning/playwright-design-patterns/fixture-scope-and-isolation?u=76281980&t=226)** Worker scope, on the other hand, creates the fixture once per worker and the state is shared by all tests within the same worker, but not across workers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), pass (3), function (1), this, (1), this. (1)
> **Code Identifiers:** counterfixture (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Fixture best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=0)** - [Instructor] Simplicity is the key when creating fixtures.
>
> **[0:04](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=4)** A fixture should focus on just one task, like setting up a login without adding unnecessary complexity.
>
> **[0:12](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=12)** Keeping it simple ensures fixtures are easier to maintain and debug.
>
> **[0:16](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=16)** On the screen, you can see a fixture of a login with a condition within it.
>
> **[0:22](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=22)** This makes the fixture complicated.
>
> **[0:25](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=25)** Next, let's talk about scope.
>
> **[0:28](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=28)** Playwright offers different scope for fixtures, like test and worker.
>
> **[0:33](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=33)** The test scope is generally the best choice, as it ensures that each test is fully isolated with its own fresh environment, like you saw in the previous video.
>
> **[0:44](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=44)** This prevents unexpected issues caused by shared states between tests.
>
> **[0:49](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=49)** Choosing the right scope can make a big difference in the stability of your test suite.
>
> **[0:55](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=55)** Reusing and encapsulating setup logic is another best practice.
>
> **[0:59](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=59)** Instead of repeating the same setup in multiple tests, encapsulate it within a fixture.
>
> **[1:05](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=65)** For example, if you have a login sequence, create a fixture for it, and we use it across test.
>
> **[1:11](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=71)** This not only makes your code cleaner, but also reduces the chance of errors, keeping your test logic focused and let fixtures handle the repetitive setup.
>
> **[1:24](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=84)** Leverage built-in fixtures.
>
> **[1:26](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=86)** Playwright provides a variety of built-in fixtures that are optimized for common testing tasks.
>
> **[1:32](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=92)** Here's a quick rundown.
>
> **[1:34](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=94)** Page and browser fixtures.
>
> **[1:36](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=96)** Page is for interacting with webpages, while browser handles the browser instance.
>
> **[1:41](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=101)** Context and request fixtures.
>
> **[1:43](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=103)** Context manages isolated sessions, and requests is great for API testing without a browser.
>
> **[1:50](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=110)** Advance fixtures, trace captures detailed test traces, and artifacts handle screenshots, videos, and more.
>
> **[1:59](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=119)** Leveraging these built-in fixtures helps you write efficient, maintainable tests.
>
> **[2:04](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=124)** Before you write custom code, check if a built-in fixture can do the job.
>
> **[2:10](https://www.linkedin.com/learning/playwright-design-patterns/fixture-best-practices?u=76281980&t=130)** By applying these best practices, you'll create a strong foundation for your automated test in Playwright.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (3)
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 3. Page Object Model

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is a page object model?
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=0)** - [Instructor] Think of your web application as a large library.
>
> **[0:03](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=3)** Each webpage is like a different book in this library.
>
> **[0:07](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=7)** Instead of searching for specific information yourself, imagine having a librarian who knows exactly where everything is.
>
> **[0:16](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=16)** In this analogy, the librarian represents the page object model.
>
> **[0:22](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=22)** The page object model, or POM, acts like a librarian for your web application.
>
> **[0:27](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=27)** Each webpage is presented by a specific class in your code.
>
> **[0:32](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=32)** Just like a librarian knows where each book is located, the POM knows all the elements on a page, and how to interact with them.
>
> **[0:40](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=40)** For example, the login page might be book one, the dashboard might be book two, and so on.
>
> **[0:48](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=48)** This organization helps streamline your tests.
>
> **[0:53](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=53)** Just like a librarian makes finding books quicker and easier, the POM makes writing and maintaining tests more efficient and consistent.
>
> **[1:01](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=61)** With POM, you don't need to know every detail about a webpage.
>
> **[1:06](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=66)** The POM takes care of it for you, simplifying the process.
>
> **[1:11](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=71)** Here's a real world example of using POM, logging into a website.
>
> **[1:16](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=76)** Without POM, you'll need to manually find the login fields and enter your credentials in every test.
>
> **[1:22](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=82)** With POM, it's like telling the librarian to log you in.
>
> **[1:26](https://www.linkedin.com/learning/playwright-design-patterns/what-is-a-page-object-model?u=76281980&t=86)** The POM knows exactly what to do and handles it for you, saving time and effort.

> [!info]- Semantic Content
>
> **Env Vars:** pom (9)
> **Analogies:** just like (2), imagine (1), for example (1), it's like (1)
> **CLI Commands:** find (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Creating a basic page object model
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=0)** - [Instructor] In this video, we'll create a page object model for interacting with the Binaryville login page.
>
> **[0:06](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=6)** A POM helps organize the page elements, making your test more maintainable and variable.
>
> **[0:12](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=12)** Let's start by identifying the key elements.
>
> **[0:15](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=15)** We have got an email, password, and sign in button.
>
> **[0:18](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=18)** So if I right-click on the email and do Inspect Element, I can see on my right there is an accessibility tab.
>
> **[0:25](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=25)** If this is not visible on your screen, click on these double arrows and it'll be shown in the dropdown.
>
> **[0:31](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=31)** So because I've selected email, I can see all the properties of the email, and if I scroll down, I can see Computed Properties.
>
> **[0:39](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=39)** So the name of that field is Email and the role of that field is textbox.
>
> **[0:46](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=46)** I can do the same for password.
>
> **[0:49](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=49)** Name is Password, role is textbox, and the same for sign in button.
>
> **[0:55](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=55)** So name is Sign In, role is button.
>
> **[1:00](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=60)** With that information in mind, let's start creating our page object model.
>
> **[1:06](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=66)** So our page object model requires Locator and Page from playwright/test.
>
> **[1:16](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=76)** And I will create a class called LoginPage class.
>
> **[1:21](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=81)** And this class will have public readonly locators, like email, like you saw on the previous screen.
>
> **[1:39](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=99)** Password.
>
> **[1:44](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=104)** And the sign in button.
>
> **[1:55](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=115)** Now let's initialize all these class variables.
>
> **[2:00](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=120)** To do that, I will create a constructor.
>
> **[2:07](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=127)** Which will take a page as an argument.
>
> **[2:11](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=131)** And the reason we need that argument is that to initialize emailLocator, we need page.
>
> **[2:18](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=138)** This will give us the Playwright API to access getByRole.
>
> **[2:23](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=143)** And if you remember, the role of email was textbox, and the name is Email.
>
> **[2:34](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=154)** Same goes for the passwordLocator.
>
> **[2:42](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=162)** Textbox.
>
> **[2:45](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=165)** And name is Password.
>
> **[2:51](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=171)** And same for the signInButtonLocator.
>
> **[2:59](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=179)** Role is button.
>
> **[3:04](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=184)** Name is Sign In.
>
> **[3:13](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=193)** By making the locators public, we ensure that the test can directly interact with these elements when it needs to.
>
> **[3:20](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=200)** This keeps our POM flexible and easy to use.
>
> **[3:24](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=204)** With this page object model in place, we have separated the structure of the test from the test logic.
>
> **[3:30](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=210)** The locators are now public, making them accessible for future tests.
>
> **[3:35](https://www.linkedin.com/learning/playwright-design-patterns/creating-a-basic-page-object-model?u=76281980&t=215)** In the next video, we'll implement this POM in our Playwright test.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), public (3), class. (1)
> **Code Identifiers:** emaillocator (1), getbyrole (1), passwordlocator (1), signinbuttonlocator (1)
> **Env Vars:** pom (3), api (1)
> **UI Navigation:** right-click (1), click on (1), dropdown (1), scroll down (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Implementing the page object model in tests
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=0)** - [Instructor] Let's implement the Login Page form that we created in the previous video.
>
> **[0:04](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=4)** This will allow us to run a playwright test that uses the pom to interact with the login page of binaryville.
>
> **[0:11](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=11)** So as you can see, login_page.pom.ts is still in this project.
>
> **[0:18](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=18)** I've got a folder called test and inside here I've got test.spec.ts.
>
> **[0:23](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=23)** Here I will start writing a code, which is import test, expect from playwright, and I will also import the LoginPage pom from page-objects folder.
>
> **[0:44](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=44)** And we have got login-page.pom.
>
> **[0:48](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=48)** And we will use this inside the test.
>
> **[0:50](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=50)** So test should login using POM, and the body of the test, first of all we are going to use a built-in fixture page and then we'll create the body.
>
> **[1:05](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=65)** In the body of the test, we'll create loginPage object for the LoginPage pom and we will pass in page.
>
> **[1:16](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=76)** So first things first, we need to visit the URL, so await page.goto and [https://binaryville.com/account](https://binaryville.com/account)
>
> **[1:29](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=89)** is the URL.
>
> **[1:32](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=92)** On that page we have got three fields.
>
> **[1:34](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=94)** So we will fill in, sorry, two fields, email and password, and we will click on the sign in button.
>
> **[1:39](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=99)** So await loginPage.emailLocator.fill and we will fill it with test@[example.com](https://example.com).
>
> **[1:49](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=109)** We will do the same for password.
>
> **[1:53](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=113)** So .fill and pass123.
>
> **[1:57](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=117)** Now we will click on the signinButton.click.
>
> **[2:05](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=125)** This will take us to a different URL.
>
> **[2:08](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=128)** So here we can do an expect page.url toContain.
>
> **[2:17](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=137)** Basically it's a form which re-directs it to itself and shows the posted values in the URL.
>
> **[2:24](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=144)** So because we are posting pass123, it'll be visible in the URL, so I'm going to insert that.
>
> **[2:32](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=152)** Now let's try to run this test.
>
> **[2:34](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=154)** This time we will run this test in the UI mode.
>
> **[2:37](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=157)** So npx playwright test --ui.
>
> **[2:42](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=162)** So to run this test, I'm going to click on the play button here.
>
> **[2:47](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=167)** As you can see, it's going to that page, then it fills in the value email, then it fills the value password, and then it clicks on the sign in button and then verifies that the URL contains the pass123, which is slightly visible over here.
>
> **[3:03](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=183)** And you can see the test is passing.
>
> **[3:06](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=186)** So our test works, which means that we have successfully utilized the page object model.
>
> **[3:15](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=195)** The benefit of this approach is that it separates the page interactions from the test logic.
>
> **[3:20](https://www.linkedin.com/learning/playwright-design-patterns/implementing-the-page-object-model-in-tests?u=76281980&t=200)** It makes it easier to maintain and scale, and we'll continue to build on top of this in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** url (6), pom (1)
> **Code Keywords:** let (2), await (2), pass (1), continue (1)
> **Code Identifiers:** loginpage (2), login_page (1), emaillocator (1), signinbutton (1), tocontain (1)
> **File Paths:** login_page.pom.ts (1), test.spec.ts (1), login-page.pom (1)
> **UI Navigation:** click on (3)
> **URLs:** [https://binaryville.com/account](https://binaryville.com/account) (1), [example.com](https://example.com) (1)
> **Cross-References:** previous video (1), in the next (1)
> **CLI Commands:** npx (1)

#### Combining page object model with fixtures
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=0)** - [Instructor] Let's take a step further and optimize our existing login tests.
>
> **[0:04](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=4)** We have already set up the page object model, but we can make it even more efficient by introducing Playwright fixtures to handle repetitive setup.
>
> **[0:13](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=13)** Let's start by extending the test as base.
>
> **[0:20](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=20)** The reason we are doing that is so that we can create a fixture.
>
> **[0:24](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=24)** So I'm going to do constant test equal to base.
>
> **[0:28](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=28)** I'm going to extend this base to create a login fixtures, or I'm specifying the type here because we are using TypeScript, so.
>
> **[0:39](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=39)** Login page.
>
> **[0:42](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=42)** Login page.
>
> **[0:47](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=47)** And here we will create a login page fixture.
>
> **[0:55](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=55)** And this will take a page, which is a built-in fixture as a parameter and use is the callback.
>
> **[1:06](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=66)** And what this does is, as you can see on line number 12, we have got a login page and we are creating a new instance.
>
> **[1:15](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=75)** So I'm going to move this on line number 6, and then we'll do a callback function so that this will activate the fixture.
>
> **[1:32](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=92)** Now that we have got the login page and we have created that fixture, we should be able to use it directly within the test.
>
> **[1:39](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=99)** So as you can see, the test is saying there are some squiggly lines on line 17, 18 and 20.
>
> **[1:47](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=107)** And they, they're saying that, did you mean login page?
>
> **[1:52](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=112)** So to fix this, we can just use our custom fixture that we just created, which is login page over here, and those lines will go away.
>
> **[2:03](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=123)** Now, I should be able to run this test by using the npx playwright test command.
>
> **[2:09](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=129)** So let's try that, playwright test.
>
> **[2:19](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=139)** So as you can see, the test ran, it was successful and everything is working smoothly.
>
> **[2:26](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=146)** By combining Playwright's fixture with page object model, we have simplified the setup of our test cases.
>
> **[2:32](https://www.linkedin.com/learning/playwright-design-patterns/combining-page-object-model-with-fixtures?u=76281980&t=152)** This approach ensures that our tests are cleaner, more reusable, and easier to maintain as they grow.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (1), this, (1)
> **Prerequisites:** setup (2), set up (1)
> **CLI Commands:** make (1), npx (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating reusable and maintainable page object models
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=0)** - [Instructor] We have already seen how to interact with the login form using our login page class.
>
> **[0:05](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=5)** Now, let's take it a step further by making our page object model more reusable and maintainable.
>
> **[0:10](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=10)** We'll introduce a method that handles the login process, helping us avoid repeating code across multiple tasks and keeping our test suite clean and scalable.
>
> **[0:20](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=20)** So as you can see, we have got these lines from line number 15 to line number 18, which may be reusable for other tests where we need to do the same login process and then verify some details.
>
> **[0:34](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=34)** So what I'm going to do is I'm going to move that into the page object model.
>
> **[0:39](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=39)** So let's cut the lines from here and go into our page object model and create a new function, called async login, which will take two parameters, email, which is a string and password, which is also a string.
>
> **[0:57](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=57)** Because we are already inside the page object model, we don't need an object to access it.
>
> **[1:04](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=64)** So I will change this to this.
>
> **[1:06](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=66)** And because we are passing two parameters, email and password, we can remove the hardcoded strings and replace it with the actual variables.
>
> **[1:17](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=77)** So there you go, we have now created a login method within the page object model.
>
> **[1:22](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=82)** This is called an action.
>
> **[1:24](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=84)** So we will now use the loginPage fixture to access this method, login in the page object model and pass in the email and password so test@[example.com](https://example.com) and the password is pass123.
>
> **[1:44](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=104)** Let's try and run this test.
>
> **[1:46](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=106)** So npx playwright test and before I run it, I should not forget, I need to add in await here.
>
> **[1:56](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=116)** So this has beaten many people back and they ask like, "Why is the test failing?"
>
> **[2:01](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=121)** And it's because they're missing an await.
>
> **[2:03](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=123)** So, alright, let's try to run it.
>
> **[2:07](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=127)** There you go, the test is passing, which means we have managed to make a small change without breaking the framework.
>
> **[2:15](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=135)** Now, speaking of reusability, this fixture, I don't normally keep it with the test, I move it into its own file so let's do that.
>
> **[2:26](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=146)** So right click new file, fixtures.ts, and let's move all of this into fixtures file and we'll export the test and we'll export the expect
>
> **[2:56](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=176)** and we will import this file here, import/page-objects/fixtures.
>
> **[3:08](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=188)** And what are we importing over here?
>
> **[3:09](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=189)** We are importing the test and expect from that file.
>
> **[3:17](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=197)** So we have got import test and expect and we have imported it from the fixtures file.
>
> **[3:23](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=203)** And now we will try to rerun the test and see if it still works, npx playwright test.
>
> **[3:32](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=212)** There you go.
>
> **[3:33](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=213)** So we have moved a fixture into its own file here and we have got a test, which is using that fixture as you can see, login page, from the fixtures file.
>
> **[3:45](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=225)** Now if you have multiple tests in your file, it's very easy to import fixtures, it's very easy to use those fixtures and it's out of the way, it's not making any noise within your test file.
>
> **[3:58](https://www.linkedin.com/learning/playwright-design-patterns/creating-reusable-and-maintainable-page-object-models?u=76281980&t=238)** So the code is more readable and maintainable.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), await (2), class. (1), function (1), async (1)
> **CLI Commands:** npx (2), make (1)
> **Definitions:** is a  (1), is called (1)
> **File Paths:** fixtures.ts (1)
> **Code Identifiers:** loginpage (1)
> **URLs:** [example.com](https://example.com) (1)
> **Speakers:** - [instructor] (1)

#### Best practices for page object models
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=0)** - [Instructor] The first best practice is to avoid mixing business logic with your POM.
>
> **[0:05](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=5)** Your page object model should strictly handle UI interactions such as clicking buttons, entering text, and navigating pages.
>
> **[0:13](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=13)** Business logic, like decision based on user roles belongs in your test cases.
>
> **[0:19](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=19)** Keep your POM focused purely on the mechanics of interacting with the page.
>
> **[0:25](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=25)** Next, avoid adding complex logic to your POM.
>
> **[0:29](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=29)** The POM should stay simple and handle direct actions.
>
> **[0:32](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=32)** Complex logic like loops and conditions belongs in task cases where the context is clearer.
>
> **[0:39](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=39)** By keeping the POM straightforward, you reduce the risk of it becoming difficult to maintain.
>
> **[0:46](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=46)** Each POM should represent a single page or component.
>
> **[0:49](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=49)** Avoid over loading your POMs by including multiple pages or components in one model.
>
> **[0:55](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=55)** This can make it harder to manage and less clear.
>
> **[0:58](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=58)** Maintaining a focus responsibility for each POM makes your test suite more understandable and scalable.
>
> **[1:06](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=66)** Avoid hardcoding values like URLs, credentials, or element identifies directly into your POM.
>
> **[1:14](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=74)** Instead, use a parameter, constants, or configuration files.
>
> **[1:19](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=79)** This will keep your tests flexible and easier to update when changes occur in the application.
>
> **[1:26](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=86)** It's important to regularly review and update your POMs as your application evolves.
>
> **[1:31](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=91)** Neglecting updates can lead to outdated POMs, which might cause your test to fail unnecessarily.
>
> **[1:39](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=99)** Regular maintenance ensures your POM remains aligned with the current state of your UI.
>
> **[1:45](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=105)** Don't tie your POMs directly to specific URLs.
>
> **[1:49](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=109)** A good POM focuses on the structure and behavior of the page, not on sURL.
>
> **[1:55](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=115)** Consider building POM components that can be extended or composed into larger POMs which will make them more flexible and reusable across different contexts.
>
> **[2:06](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=126)** Avoid creating sugar methods in your POM, methods that oversimplify actions, making it unclear what the test is actually doing.
>
> **[2:15](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=135)** Keep your methods straightforward and reflective of real user interactions without unnecessary obstruction.
>
> **[2:22](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=142)** Ensure locators in your POM are public.
>
> **[2:25](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=145)** Making locators private can restrict flexibility and make it harder to verify specific elements during tests.
>
> **[2:33](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=153)** Public locators enhance test maintainability by allowing direct access for verification and interaction.
>
> **[2:39](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=159)** By following these best practices, you'll ensure that your page object models are easy to maintain, flexible and scalable as your test suite grows.
>
> **[2:47](https://www.linkedin.com/learning/playwright-design-patterns/best-practices-for-page-object-models?u=76281980&t=167)** Keeping your POMs clean, simple, and focused will reduce technical debt and make your tests easier to work with.

> [!info]- Semantic Content
>
> **Env Vars:** pom (13)
> **CLI Commands:** make (4)
> **Code Keywords:** public (2), private (1)
> **Code Identifiers:** surl (1)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 4. Behavior Driven Development (BDD)

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to behavior driven development (BDD)
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=0)** - [Instructor] Imagine a world where developers, testers, business stakeholders, are all in sync, working towards the same goal with complete clarity.
>
> **[0:10](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=10)** That's the world of behavior-driven development.
>
> **[0:14](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=14)** BDD isn't just about testing, it's about defining how your system should behave using simple, everyday language so everyone's on the same page.
>
> **[0:27](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=27)** Traditional testing answers the question, does it work?
>
> **[0:30](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=30)** BDD takes it a step further, asking, does it work the way the business needs it to?
>
> **[0:37](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=37)** BDD shifts the focus from functionality alone to business behavior, and it does this by writing scenarios in natural language, so the whole team can easily follow along, not just the technical folks.
>
> **[0:51](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=51)** Collaboration is the secret to BDD's success.
>
> **[0:54](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=54)** It brings developers, testers, stakeholders together to craft a shared understanding of how the system should behave.
>
> **[1:04](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=64)** This means fewer misunderstandings, better communication, and software that actually meets the business requirement.
>
> **[1:13](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=73)** At the heart of BDD are scenarios written in Gherkin, a simple structured language.
>
> **[1:19](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=79)** Gherkin scenarios use the keywords like given, when, and then to describe systems behavior in plain terms.
>
> **[1:27](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=87)** For example, given a user is on the login page when they enter valid credentials, they should be redirected to the dashboard.
>
> **[1:36](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=96)** These scenarios aren't just documentation, they become automated tests, making your documentation and testing one and the same.
>
> **[1:46](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=106)** The benefits of BDD are huge.
>
> **[1:48](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=108)** It improves communication, keeps everyone aligned with business goals, and creates living documentation that evolves with your project.
>
> **[1:56](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=116)** It turns development into a truly collaborative effort, making sure your team delivers what really matters.
>
> **[2:04](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=124)** BDD fits perfectly into agile practices like continuous integration and continuous delivery.
>
> **[2:10](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=130)** In an agile environment where quick feedback and alteration are key, BDD ensures that every release delivers features that align with business expectations.
>
> **[2:23](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=143)** It's all about delivering value faster with more confidence.
>
> **[2:28](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=148)** To sum up, behavior-driven development aligns your software's functionality with the business needs, ensuring that everyone is on the same page by writing clear collaborative scenarios and automating them.
>
> **[2:41](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-behavior-driven-development-bdd?u=76281980&t=161)** BDD helps you build software that behaves exactly as it should, delivering value where it counts.

> [!info]- Semantic Content
>
> **Env Vars:** bdd (9)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Writing BDD scenarios using Cucumber
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=0)** - [Instructor] Let's start by learning how to write behavior-driven development scenarios using Cucumber.
>
> **[0:05](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=5)** To begin, we need to create a feature file where our scenarios will be written.
>
> **[0:10](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=10)** Cucumber uses a language called Gherkin for this purpose, and it's all about simplicity and clarity.
>
> **[0:16](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=16)** So first of all, I will install the Cucumber plugin, by searching for Cucumber in the Extensions in the Visual Studio Code.
>
> **[0:24](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=24)** I'll click on Install.
>
> **[0:30](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=30)** Once this is installed and I'll go back to my directory.
>
> **[0:33](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=33)** And in the parent folder I will create a new folder called features.
>
> **[0:39](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=39)** Then I will create a new file called login.feature.
>
> **[0:46](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=46)** And as you can see from this icon on the left, that it has detected it is a Cucumber file.
>
> **[0:51](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=51)** Here we will start writing our first scenario.
>
> **[0:54](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=54)** So the Feature name is User Login, and then the Scenario that we are writing is successful login with valid credentials.
>
> **[1:11](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=71)** And then I will use the Gherkin language, which is, given the user is on the login page, when the user enters a valid email and password.
>
> **[1:32](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=92)** Then the user should see the email and password in the URL.
>
> **[1:43](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=103)** So this is our first scenario.
>
> **[1:45](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=105)** So as you can see, these squiggly lines are saying that the steps are not defined yet, and we still need to define these steps.
>
> **[1:53](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=113)** In the next video, we'll see how to define these steps in your project using Cucumber and TypeScript.
>
> **[1:59](https://www.linkedin.com/learning/playwright-design-patterns/writing-bdd-scenarios-using-cucumber?u=76281980&t=119)** For now, keep in mind that BDD scenarios are all about clarity and communication, writing them in a way that the whole team can really understand.

> [!info]- Semantic Content
>
> **Env Vars:** url (1), bdd (1)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** install (2)
> **Code Keywords:** let (1)
> **Tools:** visual studio (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)

#### Setting up Cucumber in your project
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=0)** - [Instructor] Now that we have written our BDD scenarios, it's time to implement them in our playwright project using Cucumber and TypeScript.
>
> **[0:07](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=7)** This is where your scenarios come to life, turning those plain language steps into real executable tests.
>
> **[0:15](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=15)** So first of all, I will install the Cucumber and ts-node so npm install --save-dev @cucumber/cucumber ts-node.
>
> **[0:29](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=29)** So once it installs these two libraries, you can see them getting updated in the package, JSON.
>
> **[0:37](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=37)** There you go. So now you have installed both of them.
>
> **[0:41](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=41)** Let's move forward and create a cucumber.JSON file, which is the configuration for the cucumber.
>
> **[0:50](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=50)** So in this configuration, I will specify where everything is basically.
>
> **[0:58](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=58)** So for example, I want to tell Cucumber that my step files would be in the steps folder and they are ts files.
>
> **[1:13](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=73)** Then my feature files are in the feature folder features, which is... And last but not least, I want to use TypeScript.
>
> **[1:32](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=92)** So I need to acquire the module ts-node and I will register it so that I'm using TypeScript.
>
> **[1:43](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=103)** Next, I will create a ts config file in the same directory, tsconfig.json and here I will specify the compiler options.
>
> **[1:56](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=116)** Because we are using TypeScript, we need to specify the compiler option and the option that we are going to specify is the module.
>
> **[2:10](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=130)** So remember the TypeScript and playwright, they work really well together, but Cucumber is not natively supported in playwright.
>
> **[2:21](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=141)** So this is why we will have to do a little bit extra when we are writing tests using Cucumber.
>
> **[2:30](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=150)** So the next step for us is to start writing the step.
>
> **[2:34](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=154)** Let me try and run this and see what we are up to up until now.
>
> **[2:39](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=159)** So to run it, we will go to the package, JSON.
>
> **[2:44](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=164)** Here, I've added a command, test and I have written Cucumber-js.
>
> **[2:51](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=171)** So I can now execute the command, npm t.
>
> **[2:58](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=178)** And as you can see, this generates the steps for me.
>
> **[3:06](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=186)** So what I'm going to do is I'm going to write these steps myself.
>
> **[3:09](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=189)** I can copy paste traditionally.
>
> **[3:12](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=192)** These are copy pasted from the console and then you create the steps from there but I like to write it myself.
>
> **[3:18](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=198)** So I will create a new folder called Steps.
>
> **[3:23](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=203)** And because we are using Cucumber, we don't need the test folder.
>
> **[3:27](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=207)** Some people put steps and features inside the test folder.
>
> **[3:30](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=210)** You can do that if you want.
>
> **[3:31](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=211)** So I'm going to delete the test for now so that there is no distraction.
>
> **[3:36](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=216)** So we are implementing the login feature, so I'm going to create the new file called loginSteps.ts.
>
> **[3:47](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=227)** In this file, I will start writing the code for the cucumber test.
>
> **[3:53](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-cucumber-in-your-project?u=76281980&t=233)** We will implement this together in the next lesson.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), npm (2)
> **Code Keywords:** let (2), module (2), delete (1)
> **Env Vars:** json (3), bdd (1)
> **File Paths:** cucumber.json (1), tsconfig.json (1), loginsteps.ts (1)
> **Prerequisites:** install (2)
> **Code Identifiers:** loginsteps (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)

#### Writing your first step definition
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=0)** - [Instructor] Well done for making this far.
>
> **[0:02](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=2)** Now let's start writing our first step.
>
> **[0:05](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=5)** So I'm inside the loginSteps file.
>
> **[0:08](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=8)** I will start writing the import statement to import the given When, Then statements, but I will also import the two new elements, which are Before and After.
>
> **[0:23](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=23)** These are like beforeEach and afterEach in normal Playwright test.
>
> **[0:29](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=29)** And we will import this from Cucumber.
>
> **[0:32](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=32)** Next, as I already mentioned in previous videos, that we need to do a little bit of extra, because this BDD and Cucumber is not natively supported in Playwright, so we have to manage our own browser sessions.
>
> **[0:53](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=53)** So I'm importing all the relevant things that we need from Playwright, which is chromium, expect, page, and browser.
>
> **[1:02](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=62)** Now because we are managing our own browsers and page, I will create the two variables page and browser.
>
> **[1:17](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=77)** And before we start running the test, like in the traditional world, we have got beforeEach, in this world we have got Before.
>
> **[1:26](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=86)** So Before, what we'll do is we'll create the browser.
>
> **[1:34](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=94)** So browser is equal to await chromium.launch.
>
> **[1:44](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=104)** And you can pass in options like do you want it to be headless or not.
>
> **[1:48](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=108)** So for now, we'll say the headless is false.
>
> **[1:53](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=113)** Second, we'll need to create the context.
>
> **[1:57](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=117)** So browser.newContext.
>
> **[2:03](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=123)** And remember, if you have watched previous videos, you can always convert this into fixtures, which we'll see in the next video.
>
> **[2:11](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=131)** So await context.newPage.
>
> **[2:19](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=139)** So we have created a Before function where we are creating the browser and we are creating a new page.
>
> **[2:25](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=145)** Because we are creating something, we should do a tidy up.
>
> **[2:30](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=150)** So After is like an afterEach and we'll do a tidying up by closing the browser here.
>
> **[2:42](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=162)** Now that we have already written the Before and After, we can start writing our steps.
>
> **[2:48](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=168)** So given our first, if we go into the feature file, we can read the first step.
>
> **[2:56](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=176)** Given the user is on the login page, I can copy directly from here and I can see the definition of this step is my page will go to the URL
>
> **[3:15](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=195)** and the URL is [https://binaryvile.com/account](https://binaryvile.com/account).
>
> **[3:24](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=204)** And I missed that return over there, so I'm just putting that back.
>
> **[3:30](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=210)** Then my next step is for the When.
>
> **[3:37](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=217)** When the user enters a valid email and password, I'll copy that and bring it here and create its definition.
>
> **[3:49](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=229)** And the definition is await page.getByRole.
>
> **[3:54](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=234)** So we'll get the field, which is a text box and has a name "Email".
>
> **[4:06](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=246)** And we can just directly fill in the values, which is "test@[example.com](https://example.com)".
>
> **[4:13](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=253)** You can break that into two lines if you want.
>
> **[4:17](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=257)** Similarly, for the "Password",
>
> **[4:27](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=267)** "pass123".
>
> **[4:33](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=273)** Now we'll move on to the next one, which is Then.
>
> **[4:40](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=280)** So if I go to the login feature again, I can see, then the user should see the email and password in the URL.
>
> **[4:48](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=288)** I'll copy that over here and write a function, which is a definition of this step, and the definition would be await page.getByRole.
>
> **[5:05](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=305)** So we have filled in the values for email and password.
>
> **[5:10](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=310)** We haven't clicked on it.
>
> **[5:13](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=313)** We can click it in the Than step or we can click it in the When step.
>
> **[5:17](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=317)** It's completely up to you how you want to structure it.
>
> **[5:21](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=321)** So I'm going to click it on the THan step and the name is "Sign in".
>
> **[5:34](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=334)** I'm doing a click.
>
> **[5:38](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=338)** And I will expect things like my page to have URL
>
> **[5:53](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=353)** containing test.
>
> **[5:56](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=356)** Now because a URL, the URL didn't have the add sign.
>
> **[6:01](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=361)** It's translated into percentage 40, so that's why I'm writing percentage 40.
>
> **[6:07](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=367)** There is other ways of doing this, which are better, but for the demonstration purposes and making it simple, I've just done it like that.
>
> **[6:16](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=376)** So await expect [Page]. toHaveURL [/pass123/].
>
> **[6:28](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=388)** That's everything.
>
> **[6:29](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=389)** So we have given When, Then, Before, After from the Cucumber.
>
> **[6:34](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=394)** We have imported chromium, expect, Page, and Browser from the Playwright test.
>
> **[6:39](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=399)** And we created the browser, we created a newPage, we made sure that we have got a cleanup, and then we wrote these three steps.
>
> **[6:49](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=409)** Now it's time to run the test . So I will run it using NPMT.
>
> **[6:57](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=417)** As you can see, it went to the browser, it filled in the values, and it didn't expect and expect pass.
>
> **[7:08](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=428)** So by combining Cucumber with Playwright, we have successfully implemented a BDD scenario with direct Playwright interactions.
>
> **[7:17](https://www.linkedin.com/learning/playwright-design-patterns/writing-your-first-step-definition?u=76281980&t=437)** In the next video, we'll introduce the page object model to improve maintainability in larger test suites, and we will also cover the fixtures.

> [!info]- Semantic Content
>
> **Code Keywords:** await (5), pass (2), function (2), let (1), this, (1)
> **Code Identifiers:** beforeeach (2), aftereach (2), newpage (2), getbyrole (2), loginsteps (1)
> **Env Vars:** url (6), bdd (2), npmt (1)
> **URLs:** [https://binaryvile.com/account](https://binaryvile.com/account) (1), [example.com](https://example.com) (1)
> **Cross-References:** in the next (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Prerequisites:** before we start (1)

#### Centralizing setup and running a BDD test
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=0)** - [Instructor] Let's centralize our Playwright browser setup using a dedicated TypeScript file in this video.
>
> **[0:05](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=5)** We will call that file our browserSetup file.
>
> **[0:09](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=9)** This will ensure a clean, consistent environment for each test scenario.
>
> **[0:13](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=13)** By centralizing the step, we streamline the testing process and reduce repetitive code.
>
> **[0:19](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=19)** So, let's create a new file called browserSetup.ts.
>
> **[0:28](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=28)** What I'm going to do is I will move all this code from After to import into the browserSetup.
>
> **[0:37](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=37)** Now, I'm going to get rid of the things that we don't need.
>
> **[0:41](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=41)** So for example, Given, When, Then, and we can just do it by clicking on Quick Fix and Delete all unused imports.
>
> **[0:50](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=50)** So what this file is doing is it's doing the initial setup of the browser, like handling the browser startup and closing the browser at the right time.
>
> **[1:01](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=61)** And then in the end, I will export the page, which is what we are going to use in the test.
>
> **[1:13](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=73)** So, export (page) and this is the same page that we are basically defining over here.
>
> **[1:22](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=82)** So in the login setup, I can just do import (page) from '../browserSetup' and we don't need this anymore.
>
> **[1:42](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=102)** And I will do the same to remove all the unwanted or unnecessary imports from here.
>
> **[1:49](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=109)** Now, let's try and run this test.
>
> **[1:55](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=115)** So, npm t, let's see what happens.
>
> **[1:59](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=119)** As you can see, the test still works.
>
> **[2:01](https://www.linkedin.com/learning/playwright-design-patterns/centralizing-setup-and-running-a-bdd-test?u=76281980&t=121)** Our setup is out of the way, our tests are cleaner, and we can just focus on the tests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), delete (1), export ( (1), import ( (1)
> **Code Identifiers:** browsersetup (4)
> **Prerequisites:** setup (4)
> **File Paths:** browsersetup.ts (1)
> **CLI Commands:** npm (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Combining BDD with page object model
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=0)** - [Instructor] Now that we have centralized our browser setup, let's take the next step by introducing the page object model.
>
> **[0:06](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=6)** This approach helps make our tests cleaner and easier to maintain by encapsulating the interactions with the login page into a dedicated class.
>
> **[0:15](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=15)** So as you can see in the code, we have got the URL of the navigation page on the line number six.
>
> **[0:24](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=24)** And then we have got, on line number 10 and 11, we have got the locator values inside the test.
>
> **[0:31](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=31)** So what we are going to do is we are going to create a page object model.
>
> **[0:35](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=35)** So I'm going to create a new folder.
>
> **[0:41](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=41)** And I will create the page object for the login page.
>
> **[0:47](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=47)** You should already be familiar with how page object model works and what they are from one of my previous videos.
>
> **[0:52](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=52)** This is more of like combining page object model with BDD.
>
> **[0:57](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=57)** So I'm going to import Page, Locator from playwright.
>
> **[1:07](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=67)** And we'll create a class called LoginPage.
>
> **[1:13](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=73)** And inside that class we'll have the readonly page.
>
> **[1:20](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=80)** We'll have the locator for the email.
>
> **[1:26](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=86)** We'll have the locator for the password.
>
> **[1:35](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=95)** And last but not least, we will have a locator for the sign in button.
>
> **[1:45](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=105)** So these are the class variables.
>
> **[1:49](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=109)** Because it's a class, it'll also have a constructor to initialize these variables.
>
> **[1:54](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=114)** So this constructor will take the page, and we can assign this.page equal to page, and the emailLocator, we can just find it.
>
> **[2:07](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=127)** I can literally copy, paste it from the login steps.
>
> **[2:10](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=130)** So this is how we are finding the email.
>
> **[2:20](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=140)** This is how we are finding the password.
>
> **[2:32](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=152)** So that was just a page.
>
> **[2:37](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=157)** Let me fix this one.
>
> **[2:39](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=159)** So this is email.
>
> **[2:45](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=165)** This is page and this is password.
>
> **[3:01](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=181)** And last, but not least, the sign in button.
>
> **[3:04](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=184)** So I'm going to copy this from here.
>
> **[3:11](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=191)** This.signInButtonLocator, it'll do this.
>
> **[3:15](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=195)** So we have got email, password, and sign in button and page.
>
> **[3:19](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=199)** And we'll also have an action method to do a goto.
>
> **[3:25](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=205)** So goto, which is await this.page.goto.
>
> **[3:35](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=215)** And the URL for the website, [binaryville.com/account](https://binaryville.com/account).
>
> **[3:43](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=223)** Now we are going to use this page object model within our test.
>
> **[3:48](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=228)** To do that, I will have to import this page object model.
>
> **[3:53](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=233)** So import LoginPage from page-objects/login-page.pom.
>
> **[4:15](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=255)** And then we will use that.
>
> **[4:21](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=261)** So I'm going to make this.
>
> **[4:29](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=269)** A global variable.
>
> **[4:36](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=276)** And here, loginPage is going to new LoginPage.
>
> **[4:43](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=283)** You can pass in the page.
>
> **[4:47](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=287)** And after this we can just do loginPage.goto.
>
> **[4:52](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=292)** So this will go to that page.
>
> **[4:54](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=294)** Similarly, we can do loginPage.emailLocator.fill.
>
> **[5:07](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=307)** Password, loginPage.passwordLocator.fill pass.
>
> **[5:19](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=319)** And the button.
>
> **[5:24](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=324)** LoginPage.signInButtonLocator.click.
>
> **[5:31](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=331)** Now let's try and when these tests and see what happens.
>
> **[5:36](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=336)** So npm t.
>
> **[5:42](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=342)** And as you can see, the tests are still running, they're passing, there are no issues.
>
> **[5:48](https://www.linkedin.com/learning/playwright-design-patterns/combining-bdd-with-page-object-model?u=76281980&t=348)** And we have integrated our BDD Cucumber with the page object models.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (5), let (3), pass (2), class. (1), class, (1)
> **Code Identifiers:** loginpage (4), emaillocator (2), signinbuttonlocator (2), passwordlocator (1)
> **CLI Commands:** make (2), find (1), npm (1)
> **Env Vars:** url (2), bdd (2)
> **File Paths:** page-objects/login-page.pom (1)
> **URLs:** [binaryville.com](https://binaryville.com) (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** setup (1)


### 5. Data-Driven Testing

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to data-driven testing
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=0)** - [Presenter] Data-driven testing is all about flexibility and power.
>
> **[0:03](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=3)** Imagine having one powerful test script that adapts to different inputs, saving you from writing multiple tests for every scenario.
>
> **[0:12](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=12)** This approach separates the test logic from the data itself, allowing your application to be stress tested across a wide range of inputs.
>
> **[0:20](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=20)** Think of it as an obstacle course for your app, ensuring it can handle anything you throw at it.
>
> **[0:27](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=27)** So, why is data-drive testing essential?
>
> **[0:30](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=30)** First, it provides comprehensive coverage by ensuring edge cases are tested.
>
> **[0:35](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=35)** It's also incredibly efficient.
>
> **[0:37](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=37)** You use a single test script but with varied data, cutting down data redundancy.
>
> **[0:44](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=44)** And finally, it's scalable.
>
> **[0:46](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=46)** As your app grows, you simply update the data files and the same test logic handles the rest.
>
> **[0:51](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=51)** Let's break it down into three steps.
>
> **[0:53](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=53)** Step number one, prepare your test data.
>
> **[0:56](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=56)** Whether in JSON, CSV, or another format, this is where you define all the inputs for your test.
>
> **[1:02](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=62)** Step two, write a generic test script that can handle various inputs.
>
> **[1:06](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=66)** It's like a Swiss Army knife for testing.
>
> **[1:09](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=69)** Step three, execute the test using different datasets, ensuring your app performs flawlessly across all scenarios.
>
> **[1:17](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=77)** Data-driven shines in real-world applications.
>
> **[1:20](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=80)** For example, in form validation, you can test multiple input combinations to make sure all possible user data is handled correctly.
>
> **[1:28](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=88)** In user authentication, you can validate login processes across user credentials, ensuring security.
>
> **[1:35](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=95)** And for e-commerce, you can ensure the checkout process is smooth no matter what's in the cart.
>
> **[1:41](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=101)** These are just a few examples of where data-driven testing can make a real-world impact.
>
> **[1:47](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=107)** To sum it up, data-driven testing boosts your testing strategy by enhancing coverage, reducing redundant code, and scaling effortlessly as your application grows.
>
> **[1:58](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=118)** In the next videos, we'll move from theory to practice and show you exactly how to implement data-driven testing in Playwright.
>
> **[2:06](https://www.linkedin.com/learning/playwright-design-patterns/introduction-to-data-driven-testing?u=76281980&t=126)** Let's get ready to take your testing to the next level.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), throw (1), finally, (1)
> **Analogies:** imagine (1), think of it as (1), it's like (1), for example (1)
> **CLI Commands:** make (2)
> **Env Vars:** json (1), csv (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [presenter] (1)

#### Setting up data for data-driven testing
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=0)** - [Instructor] Now that we understand the benefits of data-driven testing, it's time to set up the data that will drive our tests.
>
> **[0:06](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=6)** Well-structured data is the foundation of effective data-driven testing.
>
> **[0:09](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=9)** And with the right setup, you'll be able to test multiple scenarios with ease.
>
> **[0:13](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=13)** So, to get started, I'm going to click on the parent folder and click on Create New Folder, and the new folder name would be data, and inside data I will create a file call loginData.json.
>
> **[0:27](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=27)** This file is an array of objects containing email.
>
> **[0:32](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=32)** And you can just write the email address.
>
> **[0:35](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=35)** For example, test1@[example.com](https://example.com).
>
> **[0:41](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=41)** And the password is pass123.
>
> **[0:49](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=49)** And then, second is john.smith example, 123.
>
> **[0:56](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=56)** So I'll try one before in the password.
>
> **[0:59](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=59)** Similarly, let's do dave.smith.
>
> **[1:06](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=66)** And let's do just a alphabet password.
>
> **[1:13](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=73)** So this way you can actually test different kind of edge cases.
>
> **[1:18](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=78)** By structuring the data this way, it's easy to add new scenarios.
>
> **[1:22](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=82)** Just add another entry to the JSON file and you'll automatically create a new test.
>
> **[1:27](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=87)** This concludes our setup process.
>
> **[1:29](https://www.linkedin.com/learning/playwright-design-patterns/setting-up-data-for-data-driven-testing?u=76281980&t=89)** In the next video, we'll connect this data to our Playwright test and show you how to run them across all these scenarios.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (2), set up (1)
> **Code Keywords:** let (2)
> **UI Navigation:** click on (2)
> **File Paths:** logindata.json (1)
> **Code Identifiers:** logindata (1)
> **URLs:** [example.com](https://example.com) (1)
> **Env Vars:** json (1)
> **Cross-References:** in the next (1)

#### Implementing data-driven testing in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=0)** - [Instructor] Now that we have set up our test data, let's implement data-driven testing in playwright.
>
> **[0:04](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=4)** First we'll start with a basic login test using hard coded values, and then we'll enhance it by making it data-driven.
>
> **[0:11](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=11)** So, what I'm going to do is create a new file inside the test and I'll call it login.spec.ts.
>
> **[0:21](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=21)** And here we will have the import, which will be for tests and expect that will come from playwright test.
>
> **[0:32](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=32)** Then we'll write our test to say user can log in with valid credentials,
>
> **[0:42](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=42)** which will have a body containing, first of all, we need the builtin page fixture and the test.
>
> **[0:52](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=52)** So, within the test, we will basically go to the page, page.goto and https [binaryville.com/account](https://binaryville.com/account).
>
> **[1:04](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=64)** And within this page we will start filling the values, which is by locating the elements, which is first of all text box with the name email, we will fill, first of all, as I said, we will hard code the email, so test edit [example.com](https://example.com), and same for the password.
>
> **[1:32](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=92)** And the value is pass one, two, three.
>
> **[1:39](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=99)** And then we'll do the same for the click button.
>
> **[1:42](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=102)** So, it's a button, so I'm going to say button here, sign in and we will do, click here.
>
> **[1:55](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=115)** Once we have done that, we'll validate the value.
>
> **[1:58](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=118)** So, a quick assertion, so expect page tohaveURL,
>
> **[2:10](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=130)** and make sure you use the forward slash.
>
> **[2:12](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=132)** So, pass one to three is a regular expression.
>
> **[2:15](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=135)** So, we are seeing the URL will contain the value pass one to three.
>
> **[2:19](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=139)** So, let's try and run this test, npx playwright test.
>
> **[2:24](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=144)** And you can see it's running only one test because there's only one test.
>
> **[2:30](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=150)** Now, if you want to start using the data, I can just do an input of login data from one folder,
>
> **[2:43](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=163)** back data, login data.
>
> **[2:47](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=167)** So, now we have got the login data.
>
> **[2:49](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=169)** If I show you the login data, so this is an airway, so that login data variable will contain an airway so we can loop over it.
>
> **[2:57](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=177)** So, I'm going to do login data.forEach.
>
> **[3:03](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=183)** And in this forEach, because it's an object, we can just take that object.
>
> **[3:10](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=190)** So, email and password,
>
> **[3:18](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=198)** and then this will have the body, which is the test.
>
> **[3:24](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=204)** So, let's wrap this thing around here.
>
> **[3:31](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=211)** Now you can see that this test is now become duplicate because we are running the same test again and again within the loop, so we need to have a different test chat.
>
> **[3:40](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=220)** So, I'm going to use a different string literal, and we can use that email address here.
>
> **[3:45](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=225)** So, user can log in with email, which says email.
>
> **[4:00](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=240)** And because the email is different every time, the test title will be different every time as well.
>
> **[4:05](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=245)** And I will replace this with the value email.
>
> **[4:10](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=250)** I will replace this with the value password.
>
> **[4:16](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=256)** And for our regular expression, we will do new regular expression and we'll specify the password here.
>
> **[4:27](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=267)** So, we'll run the test again and this time you'll notice that three tests will be run instead of one.
>
> **[4:39](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=279)** There you go.
>
> **[4:40](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=280)** So, three tests ran and they all pass.
>
> **[4:41](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=281)** So, I'm going to open the playwright report to show you the test titles, and this is what the report looks like.
>
> **[4:54](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=294)** User can log in with email this, which is test1@[eightexample.com](https://eightexample.com), John Smith and Dave Smith.
>
> **[5:01](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=301)** With data-driven testing in place, our test suite is now more scalable and efficient.
>
> **[5:06](https://www.linkedin.com/learning/playwright-design-patterns/implementing-data-driven-testing-in-playwright?u=76281980&t=306)** You can easily add new test scenarios by updating the data file without having to weave at the test code.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), let (3), import, (1), this, (1)
> **Code Identifiers:** foreach (2), tohaveurl (1)
> **URLs:** [binaryville.com](https://binaryville.com) (1), [example.com](https://example.com) (1), [eightexample.com](https://eightexample.com) (1)
> **CLI Commands:** make (1), npx (1)
> **UI Navigation:** go to (1), open the (1)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** login.spec.ts (1)
> **Env Vars:** url (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-design-patterns/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-design-patterns/next-steps?u=76281980&t=0)** - [Instructor] As we conclude this course, here are some next steps to help you continue your learning journey.
>
> **[0:05](https://www.linkedin.com/learning/playwright-design-patterns/next-steps?u=76281980&t=5)** First, be sure to explore the resources provided within this course.
>
> **[0:09](https://www.linkedin.com/learning/playwright-design-patterns/next-steps?u=76281980&t=9)** You'll find all the code examples we used which you can practice and implement in your own projects.
>
> **[0:15](https://www.linkedin.com/learning/playwright-design-patterns/next-steps?u=76281980&t=15)** Next, I encourage you to dive deeper into the Playwright documentation and community.
>
> **[0:20](https://www.linkedin.com/learning/playwright-design-patterns/next-steps?u=76281980&t=20)** There's a wealth of knowledge, including advanced tutorials and tools that can enhance your testing strategies.
>
> **[0:26](https://www.linkedin.com/learning/playwright-design-patterns/next-steps?u=76281980&t=26)** Finally, remember, the testing is an ongoing process.
>
> **[0:29](https://www.linkedin.com/learning/playwright-design-patterns/next-steps?u=76281980&t=29)** As your projects grow, your tests should evolve too.
>
> **[0:33](https://www.linkedin.com/learning/playwright-design-patterns/next-steps?u=76281980&t=33)** Keep experimenting, keep refining, and continue pushing the boundaries of what you can achieve with Playwright.
>
> **[0:39](https://www.linkedin.com/learning/playwright-design-patterns/next-steps?u=76281980&t=39)** Thank you for joining me in this course.
>
> **[0:42](https://www.linkedin.com/learning/playwright-design-patterns/next-steps?u=76281980&t=42)** I hope you feel empowered to take your Playwright testing to the next level.
>
> **[0:46](https://www.linkedin.com/learning/playwright-design-patterns/next-steps?u=76281980&t=46)** Happy testing.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2), finally, (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Qambar Raza]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/playwright-design-patterns-2019019)

## Skills Covered

- Design Patterns
- Test Automation

## Path Context

### In [[Master Test Automation with Playwright]]
← [[Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios]] | **3 of 4** | [[Advanced Playwright Techniques- Optimizing Speed, Stability, and Cloud Testing]] →

## Appears In

- [[Master Test Automation with Playwright]]

## Related Courses

_Courses sharing skills:_

- [[Postman Essential Training]] — Test Automation
- [[Learning Selenium- Structure, Scale, Run, and Optimize Automated Tests]] — Test Automation
- [[Advanced Playwright Techniques- Optimizing Speed, Stability, and Cloud Testing]] — Test Automation
- [[Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios]] — Test Automation
- [[Python Automation and Testing]] — Test Automation

---

[↑ Back to top](#)