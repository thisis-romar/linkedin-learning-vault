---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: end-to-end-javascript-testing-with-cypress-io-23936013
url: "https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013"
duration_minutes: 126
duration: 2h 6m
level: Advanced
updated: 12/10/2024
learners: 9318
skills:
  - Cypress.io
  - Web Development
  - Front-End Development
  - JavaScript
  - End-to-end Testing
exercise_files: true
github: "https://github.com/LinkedInLearning/end-to-end-javascript-testing-with-cypressio-4253121/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEwSS43LqkZMg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732149411297?e=2147483647&amp;v=beta&amp;t=NIDnqTi_E4T7tK1aCMXFecm-Pf606qR71fG-Giv4Pbo"
linkedin_topic: Software Development
learning_paths:
  - '[[Advance Your JavaScript Skills]]'
prev_courses:
  - '[[Learning JavaScript Debugging]]'
next_courses:
  - '[[JavaScript- Modern Browser APIs]]'
path_nav: '[{"path":"Advance Your JavaScript Skills","position":9,"total":10,"prev":"Learning JavaScript Debugging","next":"JavaScript- Modern Browser APIs"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/cypress-io
  - skill/web-development
  - skill/front-end-development
  - skill/javascript
  - skill/end-to-end-testing
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/End-to-End%20JavaScript%20Testing%20with%20Cypress.io.md)

![End-to-End JavaScript Testing with Cypress.io](https://media.licdn.com/dms/image/v2/D4D0DAQEwSS43LqkZMg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732149411297?e=2147483647&amp;v=beta&amp;t=NIDnqTi_E4T7tK1aCMXFecm-Pf606qR71fG-Giv4Pbo)

# End-to-End JavaScript Testing with Cypress.io

> End-to-end testing is an incredibly powerful strategy. Essentially, it allows you to write programs that automatically interact with your web applications like a real user would. In this course, Shaun Wassell—a lifelong programmer and a Full-Stack Development Instructor—offers a comprehensive look at end-to-end testing using Cypress, which is one of the most popular and robust end-to-end testing t

> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013) | 2h 6m | Advanced | 9K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [It's time to use Cypress.io to do some end-to-end JavaScript testing](#its-time-to-use-cypressio-to-do-some-end-to-end-javascript-testing)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to Cypress**](#1-introduction-to-cypress) (2 videos)
  - [What is Cypress?](#what-is-cypress)
  - [Advantages of Cypress](#advantages-of-cypress)
- [**2. The Basics**](#2-the-basics) (10 videos)
  - [Installing and running Cypress](#installing-and-running-cypress)
  - [Writing and running Cypress tests](#writing-and-running-cypress-tests)
  - [Testing text inputs](#testing-text-inputs)
  - [Selecting elements](#selecting-elements)
  - [Element aliasing](#element-aliasing)
  - [Working with command results](#working-with-command-results)
  - [Using beforeEach](#using-beforeeach)
  - [Setting a base URL](#setting-a-base-url)
  - [Challenge 1: Writing your own tests](#challenge-1-writing-your-own-tests)
  - [Solution 1: Writing your own tests](#solution-1-writing-your-own-tests)
- [**3. Intermediate Concepts**](#3-intermediate-concepts) (9 videos)
  - [Interacting with elements](#interacting-with-elements)
  - [Triggering other actions](#triggering-other-actions)
  - [Common assertions](#common-assertions)
  - [Automatic retries](#automatic-retries)
  - [Debugging Cypress tests](#debugging-cypress-tests)
  - [Setting environment variables](#setting-environment-variables)
  - [Working with test doubles](#working-with-test-doubles)
  - [Challenge 2: Writing your own tests](#challenge-2-writing-your-own-tests)
  - [Solution 2: Writing your own tests](#solution-2-writing-your-own-tests)
- [**4. Useful Commands**](#4-useful-commands) (7 videos)
  - [The wrap command](#the-wrap-command)
  - [The and command](#the-and-command)
  - [The filter and not commands](#the-filter-and-not-commands)
  - [Typing special characters](#typing-special-characters)
  - [Activating code completion](#activating-code-completion)
  - [Challenge 3: Writing your own tests](#challenge-3-writing-your-own-tests)
  - [Solution 3: Writing your own tests](#solution-3-writing-your-own-tests)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with Cypress.io and JavaScript](#next-steps-with-cypressio-and-javascript)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [It's time to use Cypress.io to do some end-to-end JavaScript testing](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/let-s-use-cypress-io-to-do-some-end-to-end-javascript-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/let-s-use-cypress-io-to-do-some-end-to-end-javascript-testing?u=76281980&t=0)** - What if there was a way to test your software quickly, easily, and automatically from the viewpoint of a user?
>
> **[0:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/let-s-use-cypress-io-to-do-some-end-to-end-javascript-testing?u=76281980&t=7)** What if you had an army of testers that could routinely check every flow of your site for bugs and immediately let you know when something wasn't working correctly?
>
> **[0:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/let-s-use-cypress-io-to-do-some-end-to-end-javascript-testing?u=76281980&t=16)** And what if they all worked for you 24 hours a day for free?
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/let-s-use-cypress-io-to-do-some-end-to-end-javascript-testing?u=76281980&t=20)** Well, this is the ultimate goal of [[End-to-end Testing]] with Cypress.
>
> **[0:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/let-s-use-cypress-io-to-do-some-end-to-end-javascript-testing?u=76281980&t=25)** I'm Shaun Wassell, and in this course, I'll be showing you this powerful, easy-to use-tool that solves many of the major pain points of end-to-end testing.
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/let-s-use-cypress-io-to-do-some-end-to-end-javascript-testing?u=76281980&t=33)** So let's jump right in and see what it can do for the quality of your software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[End-to-end Testing]] (2)
> **Speakers:** - what (1)

#### [What you should know](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-you-should-know?u=76281980&t=0)** - [Instructor] All right, so before you get started, there are a few things that you should know.
>
> **[0:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-you-should-know?u=76281980&t=4)** And the first one of those is [[JavaScript]] basics.
>
> **[0:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-you-should-know?u=76281980&t=7)** So Cypress uses JavaScript and you can obviously use TypeScript with it as well.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-you-should-know?u=76281980&t=12)** So ideally, you should already be familiar with JavaScript in order to use Cypress, for the most part, Cypress commands, as you'll see, are pretty straightforward, but it's still a helpful thing to know.
>
> **[0:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-you-should-know?u=76281980&t=24)** In addition, because we're going to be testing front-end websites here, and Cypress requires you to have at least a little bit of knowledge about [[HTML]] and CSS, that's going to be another important prerequisite for you to have.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-you-should-know?u=76281980&t=39)** And finally, it would be really helpful for you to just have a basic knowledge of testing concepts.
>
> **[0:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-you-should-know?u=76281980&t=44)** So things like [[Unit Testing]], [[Integration Testing]], [[End-to-end Testing]], what each of those are, and how end-to-end testing, which is what Cypress is designed for, is different.
>
> **[0:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-you-should-know?u=76281980&t=54)** So these are really the three main prerequisites you can always choose to continue along anyway, but just keep in mind that there might be a few things you don't understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[End-to-end Testing]] (2), [[HTML]] (1), [[Unit Testing]] (1), [[Integration Testing]] (1)
> **Env Vars:** html (1), css (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Cypress

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Cypress?](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-is-cypress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-is-cypress?u=76281980&t=0)** - [Instructor] All right, well, first things first, you're probably wondering what Cypress is and why it's such a helpful tool.
>
> **[0:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-is-cypress?u=76281980&t=8)** So Cypress, the first thing that you should know about it is that it's a powerful tool for conducting [[End-to-end Testing]], right, end-to-end testing, basically meaning that you're writing tests that will automatically use your site as a user would, and make sure that everything is working correctly.
>
> **[0:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-is-cypress?u=76281980&t=29)** So that's the main purpose of this tool, is to make that easier.
>
> **[0:34](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-is-cypress?u=76281980&t=34)** Now, the second thing to know about Cypress is that it's a [[JavaScript]] testing framework, so A, this means, of course, as I already said, that Cypress uses JavaScript, but also it's a little bit opinionated, right?
>
> **[0:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-is-cypress?u=76281980&t=48)** In other words, as you'll see shortly, there are specific ways to define each of your Cypress tests and specific ways to put your Cypress tests together.
>
> **[0:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-is-cypress?u=76281980&t=59)** All right, in addition, it's also an open-source tool, which is pretty nice because it means that the library itself is free to use.
>
> **[1:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-is-cypress?u=76281980&t=67)** There are, of course, things like paid hosting that you can pay for if you decide that it's worth your while, but you don't have to pay for anything in order to use this software.
>
> **[1:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-is-cypress?u=76281980&t=77)** And finally, it's a powerful alternative to other tools like [[Selenium]], Puppeteer, and other end-to-end testing tools.
>
> **[1:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/what-is-cypress?u=76281980&t=88)** In just a minute, we'll actually talk about why Cypress is superior to these tools in many ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[End-to-end Testing]] (3), [[JavaScript]] (2), [[Selenium]] (1)
> **CLI Commands:** make (2)
> **Definitions:** in other words (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Advantages of Cypress](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=1)** So now that we know a little bit more about what Cypress is in the first place, let's talk about some of the advantages that Cypress provides us with over other [[End-to-end Testing]] tools.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=12)** So the first big advantage of Cypress, as you'll see shortly, is that the tests run inside a real browser, right?
>
> **[0:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=21)** Now this is important because your users are going to be visiting your site from a real browser, such as Chrome, or Firefox, or [[Microsoft]] Edge, things like that.
>
> **[0:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=31)** So it's important that when you run your end-to-end tests, the environment is as close as possible to the environment your users are going to be using.
>
> **[0:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=40)** Now, with other tools such as [[Selenium]] and Puppeteer, they use what are called headless browsers, which do a good job of imitating a real browser, but are actually quite different.
>
> **[0:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=53)** And in end-to-end testing, that's probably the number one source of bugs is browser mismatches, right?
>
> **[0:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=59)** Doing your end-to-end testing in one browser, and having your users use another browser.
>
> **[1:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=64)** All right, now another advantage of Cypress is that it takes visibility into account.
>
> **[1:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=70)** With headless browsers and other testing frameworks, what you'll frequently find is if something like a button is hidden or obscured behind another element on the page, that button can still be clicked by the end-to-end testing framework, but it can't actually be clicked by a user, right?
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=93)** So, that's another advantage of Cypress is that it takes things like that into account.
>
> **[1:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=97)** It makes sure that the interactions with this site are actually realistic.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=103)** All right, now, besides this, because Cypress is running tests inside a real browser, this means it has access to all of the browser's resources.
>
> **[1:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=113)** And this can make things much easier for doing things like debugging your tests, as you'll see a little bit later.
>
> **[2:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=120)** And, finally, probably the biggest advantage of Cypress over a lot of the other end-to-end testing tools out there is that it's very readable and easy to learn.
>
> **[2:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/advantages-of-cypress?u=76281980&t=131)** A lot of the other tools out there can tend to be kind of complicated to get set up and working, and also very complicated to maintain, but as you'll see in just a minute here, Cypress tests are probably some of the easiest code that you'll ever read or write in the testing world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[End-to-end Testing]] (5), [[Microsoft]] (1), [[Selenium]] (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** such as (2)
> **Tools:** firefox (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. The Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing and running Cypress](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=0)** - [Instructor] And if we hit Enter there, what that's going to do is it's going to run Cypress and open up this Cypress window, and what you'll see here is it asks us what type of testing we want to use Cypress for, right?
>
> **[0:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=15)** Do we want to use it for [[End-to-end Testing]], Component Testing?
>
> **[0:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=18)** We're actually going to select End-to-End Testing, and what this is going to do is if we click on that link, it doesn't really make it very clear that it's going to do this when you click on it, but what it does is it'll actually add a number of different files to your project that will help you perform basic end-to-end testing here.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=39)** All right, so let's just click Continue, then what it's going to ask us is what our preferred browser is for end-to-end testing.
>
> **[0:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=48)** I'm just going to select Chrome here and I'm going to click Start End-to-End Testing in Chrome.
>
> **[0:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=56)** All right, so now that we've selected that, what that's actually going to do is it's going to open up Cypress in a Chrome window, and you can see that it's got a number of links over here on the left hand side.
>
> **[1:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=67)** Now, these links are all going to become a little bit more relevant once we actually start writing and running tests, but in general, this is the interface that you'll be using when you write and run Cypress tests.
>
> **[1:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=80)** All right, so for example, this Specs link, this is where we're going to see a lot of these specifications that we create for our project.
>
> **[1:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=89)** For Runs, this will show us the results of running our tests, right?
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=94)** If any of our tests failed.
>
> **[1:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=96)** Debugging, this is used for actually figuring out what went wrong if something isn't working like we expected it to in our tests.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=103)** And obviously Settings, this allows you to adjust some of the settings for your project, the device you're running it on, or just some Cypress Cloud settings here.
>
> **[1:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/installing-running-cypress?u=76281980&t=114)** So, feel free to explore these in a little bit more detail, but the next thing that we'll be doing is seeing how to write and run our first Cypress tests, which as you'll see, is going to kind of make this interface come alive a little bit and show us what each of these pages that we've seen are used for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[End-to-end Testing]] (5)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Writing and running Cypress tests](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=0)** - [Instructor] Alright, so now that we've set up Cypress and seen how to run it and we've seen this simple interface here, the next thing that we're going to do is write and run our first test.
>
> **[0:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=11)** Now, since obviously Cypress needs some sort of target application to test in order to demonstrate, what I've done is I've actually created this very simple target app that we're going to be using throughout this course in order to learn how to write tests for different parts of the user interface.
>
> **[0:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=28)** So what you're going to want to do is just check out the branch or the exercise files for this video.
>
> **[0:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=36)** And once you've done that, you should be able to change directories into this new target app directory that you should see here.
>
> **[0:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=46)** And you can run this thing by, first of all, installing all of its dependencies with [[npm]] Install.
>
> **[0:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=53)** And once you've done that, you can simply run NPM Run Dev and that will actually run the application.
>
> **[0:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=59)** This is just a simple [[React.js|react]] application and you can open that up in your browser to see what it looks like by going to local host 5173.
>
> **[1:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=68)** You can just control, click on that.
>
> **[1:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=70)** And what you should see is this screen here.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=74)** Now as you can see, this is just a simple list of examples and you can see what each of them is.
>
> **[1:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=79)** This first one is pretty straightforward.
>
> **[1:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=81)** It just brings us to a simple page with a big heading on it.
>
> **[1:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=85)** We'll be seeing how to check text content in just a minute here.
>
> **[1:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=89)** If you go to example two, that'll allow us to test text inputs and things like that.
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=94)** So we will be taking a look at that shortly as well.
>
> **[1:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=97)** This next one has multiple text inputs.
>
> **[1:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=99)** And finally we have one that has a number of different user interface components.
>
> **[1:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=104)** Alright, so feel free to explore that application a little bit more.
>
> **[1:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=107)** But what we're going to be doing is we're going to be seeing how to test simple text content and, well, write our first test.
>
> **[1:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=115)** So let's go back to our IDE and you're going to want to just leave that target app running there as well as leave Cypress running in this other terminal.
>
> **[2:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=124)** So we're going to have a third terminal here that we'll be using for other things as you'll see.
>
> **[2:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=130)** So here's what this is going to look like.
>
> **[2:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=132)** Now that we've got the target application set up, let's write our first Cypress test.
>
> **[2:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=137)** And writing a basic test in Cypress is fairly straightforward.
>
> **[2:22](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=142)** If you're familiar with the Mocha test framework, the syntax for organizing your Cypress test is going to look very familiar because, well, frankly, it is Mocha.
>
> **[2:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=152)** It's a baked-in version of Mocha, so to speak, that ships by default with Cypress.
>
> **[2:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=157)** Now we're going to do this by actually going back over to the Cypress interface running in your browser here, and we're going to click on create new spec.
>
> **[2:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=167)** Now this is going to ask you for what you want to name this new file here.
>
> **[2:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=173)** And what we're going to do is we're going to call it something like my-first-test.cy.js.
>
> **[3:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=180)** This is the suffix here for Cypress tests.
>
> **[3:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=184)** So let's click create spec.
>
> **[3:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=186)** And what that's going to do, it's going to actually create that new file and put a little bit of code inside it.
>
> **[3:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=192)** So as I said, this code looks very similar to Mocha because it is Mocha.
>
> **[3:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=199)** So we're just going to close that little modal and go back to our IDE here.
>
> **[3:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=204)** And what we should see is that inside Cypress, we now have this e2e folder, which contains our end to end tests with my-first-test.cy.js inside of it.
>
> **[3:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=217)** Alright?
>
> **[3:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=217)** And in here we see that same Cypress code that was just generated by clicking the Cypress interface.
>
> **[3:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=224)** So we're just going to have to change a few things about this.
>
> **[3:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=227)** The first thing to notice here is this describe block.
>
> **[3:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=230)** In case you're not familiar with Mocha, this is used to group related tests together.
>
> **[3:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=236)** So what we're going to do here is we're just going to say describe, and for this one we'll just say something like heading text.
>
> **[4:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=245)** And then for this [[Git]] function, this defines individual tests.
>
> **[4:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=251)** We're just going to say something like, it contains the title of our site.
>
> **[4:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=258)** And if you go back and take a look at our site running in the browser here, in example one, we see that this is called My Awesome Web Application.
>
> **[4:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=265)** So what we're going to do here is see how to write a simple test that checks to make sure that the title contains that text.
>
> **[4:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=273)** So here's what this is going to look like.
>
> **[4:34](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=274)** We're going to first of all change this cy.visit thing so that it actually goes to our own site that we have running, right?
>
> **[4:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=284)** Basically this cy.visit function tells Cypress what page to open up.
>
> **[4:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=291)** This is the equivalent of opening up a browser and typing something into the URL bar and hitting enter.
>
> **[4:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=298)** That's what this is going to cause Cypress to do behind the scenes.
>
> **[5:02](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=302)** So to make this happen, we're just going to go back over to our web application running here.
>
> **[5:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=308)** I'm going to copy this full URL and paste it in here.
>
> **[5:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=312)** Oops, let's try that again.
>
> **[5:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=313)** And that should be something like this, localhost:5173/example-1.
>
> **[5:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=318)** And now, here's where we're going to write our first Cypress assertion.
>
> **[5:22](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=322)** We're going to say cy.get(h1) So we're finding the h1 element on the page.
>
> **[5:30](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=330)** And what we're going to do is we're going to say that it should have text that matches a given string.
>
> **[5:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=336)** So here's what that's going to look like.
>
> **[5:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=337)** We're going to say should(have.text).
>
> **[5:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=341)** This is how we write assertions like this in Cypress.
>
> **[5:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=344)** And then we're going to say My Awesome Web Application.
>
> **[5:49](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=349)** All right, that's the text that was inside that h1 tag on our site.
>
> **[5:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=355)** Alright, so now that we have this test, let's actually run this thing.
>
> **[5:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=359)** And you can do that by going back over to where Cypress is running in your browser and what you should see.
>
> **[6:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=366)** You may have to click on this test in order to get it to do that, but what you should see here is that Cypress ran the test and it has passed, right?
>
> **[6:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=376)** You can see that by this little green check mark over here on the left hand side.
>
> **[6:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=380)** And furthermore, if you look over here on the right hand side, you can see what Cypress actually saw when it ran the test.
>
> **[6:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=388)** This can be very helpful for troubleshooting if a test fails and you want to know why.
>
> **[6:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=395)** So essentially what Cypress does with each of these tests is it executes whatever steps we've specified here.
>
> **[6:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=402)** So in this case, we've just told it to open that page and check the text in the h1 heading, and if it matches our expectations, then the test will pass.
>
> **[6:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=412)** So let's go back here and let's see what happens if we change this text to something different.
>
> **[6:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=418)** Let's say something like My Awesome Web Site.
>
> **[7:02](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=422)** All right, well if we save this and go back, we're going to see that first of all, this will automatically rerun and it will fail, right?
>
> **[7:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=431)** So if we take a look at this thing here, we can see why it failed.
>
> **[7:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=435)** It even shows us the line where that test failed.
>
> **[7:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=438)** We see that it says expected h1 to have text, my awesome website, but the text was my awesome web application.
>
> **[7:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=445)** So in this case, it's pretty easy to see what went wrong with that test.
>
> **[7:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=449)** So let's just go and change that back to my awesome web application.
>
> **[7:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=455)** And if we go back here, we should see that that passes again.
>
> **[7:38](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=458)** So anyway, that's the basics of writing and running Cypress tests.
>
> **[7:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=462)** This is obviously a very simple test that we just wrote and ran, but the exciting thing is that for the most part, writing and running Cypress tests is going to be this intuitive, as you'll see.
>
> **[7:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/writing-running-cypress-tests?u=76281980&t=474)** So anyway, that is the basics of writing and running our first Cypress test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[React.js|React]] (1), [[Git]] (1)
> **Env Vars:** npm (2), ide (2), url (2)
> **CLI Commands:** npm (2), make (2), git (1)
> **UI Navigation:** click on (3), go to (1)
> **Prerequisites:** set up (2), install (1)
> **File Paths:** my-first-test.cy.js (2)
> **Cross-References:** go back to (2)
> **Documentation:** spec (2)

#### [Testing text inputs](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=0)** - [Instructor] All right, so at this point, we've written our first test with [[[Cypress.io]]](https://Cypress.io), which checked the text inside a header element.
>
> **[0:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=8)** Now, this was a great way to get a better feel for the syntax and flow of Cypress tests, and honestly, this might be something that you want to do a lot of the time, right?
>
> **[0:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=17)** Is actually just check to make sure that a certain part of your website has the text that you want it to have, but obviously, once you get past simple tests like this, you're probably going to want to check pieces of functionality on your site that are a little bit more complicated, so if you open up the browser to the example application and go to Example 2, what you'll see is that we have this nice little text input that tells us how many characters we have left that are available to type, right?
>
> **[0:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=48)** And you can see that as you type characters in there, it changes that number, and this would probably be a pretty useful feature on a site if you wanted to limit how many characters someone can type into a text input, for example, if you wanted to limit how many characters they can have in their username, so let's see how we can use Cypress to test this simple feature.
>
> **[1:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=71)** The first thing we're going to do, though, is we're going to create another file here.
>
> **[1:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=75)** We'll say New File inside Cypress e2e, and we'll call this one something like max-char-input.cy.js.
>
> **[1:27](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=87)** Now, inside here, we're going to define a new describe and it block just like we did in my first test, and in fact, you could just take that and copy and paste it if you wanted to in order to make that a little bit simpler, and the first thing that we're going to do here is we're going to say that we want to describe the max-character-input functionality, all right?
>
> **[1:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=110)** Something like that.
>
> **[1:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=111)** You could obviously come up with more descriptive text here if you wanted to, but then, inside this it block, what we're going to do, we're going to say something like it displays the appropriate remaining characters count, and that should be all we need there, so for cy.visit, this time, since we're going to a different page, we're going to want to change that to Example 2 instead of Example 1, and then what we're going to do is we're probably going to want to take a look at the structure of our site so that we can tell where we need to look for the characters left, so if we go back to our application running here, we're just going to open up Inspect.
>
> **[2:38](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=158)** We're going to take a look at this input, and since we have access to the project itself, you could also just go into the project and take a look at this too, but what we see here is underneath that input, we have this little paragraph tag, and nicely enough, we have this little span that says characters left count.
>
> **[2:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=178)** Now, you'll notice that this thing has this little data-cy attribute on it.
>
> **[3:02](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=182)** We'll talk about that in more detail shortly, but basically, what that's for is to make this specific part of the screen easier to find, but first of all, let's just imagine that that's not there because, again, your site may not have that, and it is extra work to have to go back in and add those, so what we're going to do is we're just going to find this span by its tag name, span, since it's the only span on our page currently, so here's what this is going to look like.
>
> **[3:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=209)** We're going to go back to our IDE, and we're going to say, cy.get('span'), and then, in order to get the text that's inside that span, which is the number that we want to check, we're going to say .invoke('text'), all right?
>
> **[3:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=227)** Basically, what that does is it gets the text from whatever element we've selected, and now we're going to assert that that should be equal to 15 because the input is empty, so that text should have 15 characters left, so here's what this is going to look like.
>
> **[4:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=245)** We're just going to say .should('equal') as a string, and then we're going to say '15' also as a string.
>
> **[4:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=253)** Things that you get from the interface by default are going to be strings, even if they look like numbers to you.
>
> **[4:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=259)** Cool, so that is how we check to make sure that the inner text of that span is equal to 15.
>
> **[4:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=265)** All right, so let's go back over to our Cypress interface, and you may need to hit the Back button in order to get out of the my first test, but we're going to click on max-character-input.cy.js now, and sure enough, what this is going to do is it's just going to run that test, and we'll see the results here.
>
> **[4:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=285)** Sure enough, it passes, as we would've expected.
>
> **[4:49](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=289)** Now, let's make this a little bit more interesting here by actually typing some text into that input.
>
> **[4:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=296)** The way that we do that with Cypress is we're going to say cy.get('input'), so again, we're just finding this by the tag name, which isn't necessarily going to be very robust.
>
> **[5:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=306)** For example, if you add another text input, that could cause problems when you want to just find it by the tag name, but we'll see how to confront this a little bit later.
>
> **[5:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=316)** For now, we know that it's going to find that since it's the only input on the page, so we're going to say cy.get('input').type, and then we're just going to put in a string here.
>
> **[5:27](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=327)** We'll say 'Hello', right?
>
> **[5:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=329)** So this does pretty much what you would expect it does.
>
> **[5:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=332)** It actually types something into the text input.
>
> **[5:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=336)** Now we can make another assertion.
>
> **[5:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=339)** Since we've just typed five letters into our input, we would expect that our text now equals 10, so we're just going to copy the same assertion that we made there.
>
> **[5:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=350)** We're going to say, cy.get('span').invoke('text').should('equal', '10') now, and if we save that and go back over to our browser, sure enough, we see that that test, or that condition, has passed as well, and furthermore, you can see the current state of the application.
>
> **[6:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=370)** We see that Hello is typed in that box there, and you can even interact with this if you want to just to see what's going on there, but, well, let's just go back to our test and add a few more things.
>
> **[6:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=381)** We're just going to type a little bit more here.
>
> **[6:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=384)** We're just going to type Hello again, so I'll just copy this and paste it.
>
> **[6:27](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=387)** After this, again, we'll just type Hello and Hello back to back, and in this case, we would expect that our text should now equal 5, so we'll just say should('equal', '5').
>
> **[6:38](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=398)** Let's save that and go back and check it.
>
> **[6:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=400)** Sure enough, we see that that passes, and, last but not least, let's try doing the same thing again.
>
> **[6:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=407)** I'm going to copy these and paste these commands afterward one more time, and in this case, we know the text should now be equal to 0, and if we go back, sure enough, that one passed as well, so let's try typing a few more characters, and what we would expect to happen in this case is not only would that text still be equal to 0, but the text in the text input would still be equal to Hello three times instead of four times, right?
>
> **[7:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=437)** So the way that we're going to check that is we're going to say cy.get('input'), and we're going to say, .should('have.value').
>
> **[7:27](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=447)** This checks the value inside that input, and we're going to say that that should just be Hello three times there, so let's just save that and go back over to our code, and sure enough, we see that that passes as well, so that's the basics of writing sort of incremental tests in Cypress.
>
> **[7:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/testing-text-inputs?u=76281980&t=467)** As we see, each one of these things has built on top of the other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cypress.io]] (1)
> **CLI Commands:** make (6), find (4)
> **Analogies:** for example (2), just like (1), imagine (1)
> **Cross-References:** go back to (3)
> **File Paths:** max-char-input.cy.js (1), max-character-input.cy.js (1)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [cypress.io](https://cypress.io) (1)
> **Env Vars:** ide (1)

#### [Selecting elements](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=0)** - [Instructor] So now that we have some tests written and passing, it's time to talk about a very important topic in Cypress.
>
> **[0:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=7)** And to be specific, we need to take a good hard look at what the best way is to select different elements in our tests, right?
>
> **[0:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=16)** So far, for simplicity, we've just been using the [[HTML]] tag of whatever element we want to select, and I want to make it very clear that in the vast majority of cases, this is just the wrong way to do it, right?
>
> **[0:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=32)** You see the problem here is that using the HTML tag like this is extremely dependent on the current state of our app.
>
> **[0:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=41)** So to show you what I mean, let's navigate to example three.
>
> **[0:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=45)** And what you'll see here is that we have two text inputs instead of one.
>
> **[0:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=50)** Now, if we go back to our application and test this thing, what I'm actually going to do is duplicate this file.
>
> **[0:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=58)** I'm just going to copy it and paste it here, and we'll change this to something like selecting.cy.js.
>
> **[1:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=67)** Well, let's see what happens if all we change is going to the example three page instead of the example two page.
>
> **[1:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=75)** All right, what I'm going to do is just go back to our interface here, and we're going to need to go back and select a different file that we want to run.
>
> **[1:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=83)** We're going to select selecting.cy.js now.
>
> **[1:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=88)** And what we're going to see here is something a little bit strange.
>
> **[1:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=92)** We see that this fails because it says expected '1515' to equal '15' right?
>
> **[1:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=100)** So in other words, what's happened here is because we said cy.get('span'), and there were two spans, it basically just combined the text that was in both of those, and that's why you're seeing this 1515 thing right here.
>
> **[2:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=120)** All right, so we see that our test has failed here, but in the case of trying to type something in to more than one input, that's just going to give us an outright error.
>
> **[2:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=130)** So going back to what I was saying before, it's clear by now that using the HTML tag, as we just did here, usually isn't the right way to select elements for testing.
>
> **[2:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=140)** So what are some other ways that we could go about doing this?
>
> **[2:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=144)** Well, your first instinct might be to specify that you want to select the second span element on the page.
>
> **[2:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=151)** And just as sort of a spoiler alert, that is also usually the wrong way to do it.
>
> **[2:38](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=158)** But let's see how we can do that in case you're in a situation where that's the only way to run that test.
>
> **[2:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=164)** The way that you can do that, we'll just do this for our span here, is by saying, cy.get('span'), and we're going to add something in here.
>
> **[2:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=172)** We're going to say .eq, and then the index of the element that we want to select.
>
> **[2:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=178)** So if we only want to select the first one there, that's how we would do it.
>
> **[3:02](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=182)** And if we go back here and rerun our tests, sure enough, we see that that first one passes.
>
> **[3:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=188)** We could make the [[Representational State Transfer (REST)|rest]] pass in the same way, or make this input thing pass as well.
>
> **[3:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=193)** We see here that we've gotten an error because we're trying to call .type on multiple input elements.
>
> **[3:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=200)** But again, since this usually isn't the right way to do it, I'll leave it up to you to experiment around with that.
>
> **[3:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=205)** Alright, so HTML tags don't work, and getting elements by index isn't very robust either.
>
> **[3:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=211)** So what other options do we have?
>
> **[3:34](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=214)** Well, the next thing that you might be tempted to try is selecting our elements by their CSS class.
>
> **[3:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=221)** And in some situations, this might be a little bit better.
>
> **[3:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=224)** If we take a look at these inputs here, I don't believe they have any classes on them, let's just take a look.
>
> **[3:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=232)** Ah, sure enough, they do have classes, but we might want to select them by their ID instead, right?
>
> **[3:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=239)** This is a little bit more robust, and in fact, IDs are one of the recommended ways of selecting elements using Cypress.
>
> **[4:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=250)** Still possible that these could change, but in general, they're going to be a lot more robust than things like class names, which are usually used for adding styling to different elements.
>
> **[4:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=260)** And it's definitely a lot more robust than selecting by the tag name, which is prone to change, mostly just because our elements could be shuffled around on the page, or we could add other elements of the same type to the page.
>
> **[4:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=276)** So the way that we can select by ID here, and I'm just going to do this for our spans, we've seen that this is now first-name-input and last name input.
>
> **[4:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=285)** Alright, so the way that we can do this, and let's actually take a look at that span too to see if there's anything unique on there that we can take a look at.
>
> **[4:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=292)** And sure enough, we see that this just has data-cy="first-name-characters-left-count," so we'll come back to that.
>
> **[4:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=297)** For now, let's just do the inputs.
>
> **[4:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=299)** We'll go back through here, and we'll add the hashtag symbol, followed by the IED, right?
>
> **[5:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=306)** Basically we just get to use regular old CSS selectors as the string here when we say cy.get, so we're going to say first-name-input, and then we will replace all of just the basic input strings here with first-name-input.
>
> **[5:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=321)** All right, you could do a find and replace if you wanted to, but I'm just going to do that manually.
>
> **[5:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=326)** And what we'll see now, let's just make this first test pass again by saying .eq 0 again.
>
> **[5:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=332)** We saw that that would make that test work.
>
> **[5:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=335)** What we'll see is that that makes that test pass, and we see that this get #first-name-input thing also works, right?
>
> **[5:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=343)** That actually made it so that we were only selecting a single input, we were typing something into it, and then we were trying to get that span.
>
> **[5:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=351)** And by the way, in case you haven't noticed this by now, by clicking on the different points in time or the different actions, you can actually see what the screen, right, what the app looked like at different points, right?
>
> **[6:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=366)** So if we click on this step after we type hello, we see that hello has been typed into that text input.
>
> **[6:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=373)** This can be really useful again for troubleshooting your tests, and seeing where things went wrong.
>
> **[6:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=379)** So anyway, let's go back here, and take a look at the recommended way.
>
> **[6:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=384)** If you have control over this, which I'll talk about in a minute, we're going to take a look at the recommended way of selecting elements with Cypress, and that is by using a special data cy attribute, which you may have noticed on this span, as I just pointed out.
>
> **[6:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=401)** This here is just a custom attribute that makes elements very easy to find, and it also makes that tag, right, this attribute here, very unlikely to change.
>
> **[6:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=414)** The only reason that this data cy thing would ever change is if we needed to make a change to our tests.
>
> **[7:01](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=421)** Now, you may not always have control over this.
>
> **[7:03](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=423)** Whoever is developing your front end might not be willing to add these things in just to make your life a little bit easier, or make your tests a little bit more robust.
>
> **[7:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=434)** So you may not have this as an option, but if you do, it's definitely the recommendation.
>
> **[7:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=438)** So for our span here, what we're going to do is, in order to select a span whose data cy attribute is equal to a given value, and I'm just going to copy that value there, because that's going to be a little bit lengthy to type, what you're going to do is you're going to say 'span,' and then in square brackets, this is just the CSS selector for this, we're going to say [data-cy=], and we're going to paste that value that we're looking for, and I'm just going to copy this thing now and paste it in place of all of the other spans.
>
> **[7:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=468)** So we'll just paste that there, there, there, and there.
>
> **[7:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=474)** And that should be all we need to do.
>
> **[7:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=475)** So let's save this, and all of our tests should pass here.
>
> **[7:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=479)** And yep, sure enough, we see all the tests passing, and that is the most robust way of selecting elements for your Cypress tests.
>
> **[8:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/selecting-elements?u=76281980&t=488)** So just to review what we've covered here, we've kind of gone through the spectrum from worst to best for which selectors to use in Cypress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (8), find (2)
> **Env Vars:** html (4), css (3), ied (1)
> **UI Navigation:** select the (2), navigate to (1), click on (1)
> **Best Practices:** recommended (3)
> **File Paths:** selecting.cy.js (2)
> **Definitions:** in other words (1), is a  (1)
> **Cross-References:** go back to (1)

#### [Element aliasing](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=0)** - [Instructor] All right, so at this point we've refactored our Cypress tests to use selectors that are much more robust than simply using an [[HTML]] tag or a CSS class.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=12)** But especially when you look at things like this, you might find yourself longing for the somewhat more concise appearance of our old tag selectors.
>
> **[0:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=21)** Right now our tests are pretty verbose and there are plenty of places where we're doing the exact same command over and over again, like with getting the characters left text doing something like this here, there's really no reason why we should have to type this over and over again.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=39)** So the good news here is that Cypress provides us with a way of reducing the amount of code needed to perform these simple repetitive selections.
>
> **[0:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=50)** And this concept is called aliasing in Cypress.
>
> **[0:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=55)** So the way that aliasing works is like this.
>
> **[0:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=58)** What we're going to do is we simply need to select something in our application.
>
> **[1:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=64)** Usually this is going to be an element, but it doesn't necessarily have to be that.
>
> **[1:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=68)** It can be something a little bit more specific.
>
> **[1:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=70)** What we're going to do is we're going to say, cy.get, and in fact we'll just select that span there, which has a very lengthy selector.
>
> **[1:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=80)** What we're going to do here is we're simply going to give this a much shorter name that we can use when we say cy.get in the future.
>
> **[1:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=89)** And by the way, I forgot to remove this .EQ0 thing.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=93)** We see that that didn't actually break our tests because that just said to find the first instance of that thing and since there's only one instance that we found, it didn't do any harm, but I'm just going to delete that because it's unnecessary here.
>
> **[1:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=105)** So now that we've done this, what we're going to do next is we're going to say .as, and we get to give this thing whatever name we want.
>
> **[1:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=115)** So let's say that this is called, this is the first name, characters left count.
>
> **[2:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=120)** That's a very lengthy data cy attribute value here.
>
> **[2:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=124)** So let's just say FN characters left.
>
> **[2:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=128)** Okay, that should be pretty straightforward there.
>
> **[2:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=131)** And basically what this .as thing does is it gives whatever element we've selected here an alias that we can refer to in the future.
>
> **[2:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=140)** So now all we have to do when we want to find that thing again, is say at FN characters left.
>
> **[2:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=149)** And then we'll do that for the [[Representational State Transfer (REST)|rest]] of these here.
>
> **[2:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=151)** Here, I'm just going to copy and replace that, replace all of these with that, that is, so it's now much easier to access this thing.
>
> **[2:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=162)** We can just do it based on that name that we gave it.
>
> **[2:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=166)** So we've shortened up those tests quite a bit and made them a lot more readable.
>
> **[2:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=171)** Alright, so let's do the same thing with our first name input.
>
> **[2:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=174)** This one's not quite as necessary, but just to get a little bit more exercise here, we'll say cy.get, we'll find first name input that should be hashtag here.
>
> **[3:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=186)** There we go, first name input, and then we're going to say as, and then we'll just say FN input.
>
> **[3:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=194)** And that should be all we need to do there.
>
> **[3:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=196)** We can now replace all calls to cy.get first name input to just at fn input.
>
> **[3:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=204)** You do need that at sign before all of these, even though you didn't put that in as that's just how it works.
>
> **[3:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=209)** That's how Cypress knows that this is actually an alias instead of a tag name.
>
> **[3:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=215)** All right, so let's just add that there.
>
> **[3:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=217)** And we've shortened up our tests even more.
>
> **[3:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=219)** So let's just make sure this is still working by going over to our interface.
>
> **[3:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=223)** And sure enough, it looks like everything is still working and you can see where we've assigned these aliases.
>
> **[3:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=231)** So we can take a look at FN characters left and we can see everywhere where that thing is referenced.
>
> **[3:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=238)** All right, so that's pretty nice here too because we get a visual representation of where we've used individual alias elements, which we didn't get before.
>
> **[4:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=248)** Now a few more things that I wanted to mention about this.
>
> **[4:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=251)** You may be wondering if we can shorten this even more because we're just saying .InvokeText, .InvokeText, .InvokeText over and over again here.
>
> **[4:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=261)** So you might be wondering, can we alias that as well?
>
> **[4:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=266)** Well, let's just test this out.
>
> **[4:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=268)** What we're going to do is we're going to change FN characters left.
>
> **[4:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=272)** We're going to say .InvokeText like we did before, and we'll just leave FN characters left there.
>
> **[4:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=279)** And in theory, this would allow us to remove this .InvokeText from everything.
>
> **[4:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=286)** Let's see if this actually works.
>
> **[4:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=288)** What I'm going to do is save this code and if we go back to our interface, we see that everything is still working there, right?
>
> **[4:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=296)** That works just like it did before.
>
> **[4:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=298)** So this is what I was saying earlier when I said that we could create aliases for things besides just plain elements.
>
> **[5:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=305)** Really, we can create an alias for anything that might come before an assertion, such as .should.
>
> **[5:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=312)** Now, one more thing you might be wondering here is why couldn't we just say something like const first name input, and then say equals cy.get.
>
> **[5:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=324)** And then we'll just say hashtag first name input.
>
> **[5:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=328)** And then in theory, what this would allow us to do is just say first name input.type, hello.
>
> **[5:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=336)** And it would make it a little bit easier to do that.
>
> **[5:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=339)** Now, this actually does not work.
>
> **[5:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=342)** You need to create aliases using this .as thing.
>
> **[5:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=346)** And the reason for this, right?
>
> **[5:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=347)** The reason that we can't just say const first name input equals cy.get is, first of all, because Cypress commands are asynchronous, first name input in this case wouldn't be what we expect it to be.
>
> **[6:02](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=362)** And we can't just say, you know, something like await here as you might want to because Cypress commands don't return promises either.
>
> **[6:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=373)** We'll see in a coming video how we can actually get the results of Cypress commands to work with them.
>
> **[6:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=378)** But for now, all you need to know is that things like this don't work because of the way that Cypress commands work behind the scenes.
>
> **[6:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/element-aliasing?u=76281980&t=386)** So anyway, that is the basics of aliasing things in Cypress, and this has the ability to really reduce the amount of code that you have to write, as we've seen in your Cypress tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (4), make (2)
> **Env Vars:** html (1), css (1), eq0 (1)
> **Definitions:** is called (2)
> **Analogies:** just like (1), such as (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Working with command results](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=0)** - [Instructor] All right, now that we've seen the main way of aliasing in Cypress, which is to use this .as method, that's chained on the end of any Cypress command.
>
> **[0:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=11)** The next thing that we're going to take a look at is another way that we can alias elements in Cypress.
>
> **[0:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=17)** But before we do that, what I'm actually going to do is I'm going to duplicate this file.
>
> **[0:22](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=22)** I'm just going to copy everything that's inside of it and we'll create a new file, just so that you have the old stuff around for reference, and we'll call this something like results.cy.js.
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=33)** All right, we're going to paste this inside of there now and we're going to leave the tests the same as what they were before.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=39)** Let's also just adjust this indentation-thing here, which is a little bit off.
>
> **[0:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=44)** There we go.
>
> **[0:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=45)** All right, now, previously I mentioned that there was a way that we could get and work with the results of our Cypress commands and that it wasn't by simply saying something like const fnInput equals cy.get, first name input, right?
>
> **[1:03](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=63)** Just to be very clear, again, that will not work.
>
> **[1:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=66)** But what you can do instead, and I'm going to do this instead of what we did up here, is say cy.get, and I'll use the span data cy thing.
>
> **[1:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=78)** In fact, let me just copy that because that's such a lengthy thing to type.
>
> **[1:22](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=82)** There we go, I'll paste it like so.
>
> **[1:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=84)** So what we can do is we can actually put another method on the end of this thing that says .then.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=93)** All right, now, again, just because we're saying .then here doesn't mean that cy.get returns a promise.
>
> **[1:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=99)** In fact, it does not.
>
> **[1:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=101)** We can't just say, you know, const charsLeft, for example, equals await cy.get, right?
>
> **[1:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=110)** That just isn't how Cypress methods work.
>
> **[1:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=114)** But they do provide this somewhat confusingly named .then method, which allows us to get the results of whatever came before it.
>
> **[2:03](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=123)** So here's what this is going to look like, inside here we can actually create a callback function, let's just say function here.
>
> **[2:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=133)** And the argument that's passed to this is going to be the result of whatever the preceding command was.
>
> **[2:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=139)** So in our case here, we have the characters, LeftSpan and by convention this is usually named with a dollar sign, right?
>
> **[2:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=148)** Just to indicate that this is, in fact, an element that we have access to inside this callback.
>
> **[2:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=155)** So, now, inside this callback, we actually do have a reference to this thing, and we can do things with this, like make assertions, but those assertions are going to be a little bit different than what we've seen earlier, right?
>
> **[2:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=168)** What we saw down here, like saying .should equal, right?
>
> **[2:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=171)** If we try and say $charsLeftSpan, for example, .invoke text, and then .should equal 15, for example, well, we'll see that that will actually give us an error if we save that and go back.
>
> **[3:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=189)** And here, let's actually go back to one of our new specs here, that's going to be results.cy.js.
>
> **[3:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=194)** Sure enough, we'll see that we get an error saying characters left span dot invoke is not a function.
>
> **[3:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=200)** So that's just not how Cypress works, right?
>
> **[3:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=203)** You'll get used to that after a little while.
>
> **[3:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=205)** What we have to do, instead, is if we want to make assertions inside this .then callback, we actually have to translate this into using the so-called expect syntax from the Chai assertion library, which just like describe in it here, automatically come with Cypress.
>
> **[3:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=228)** So here's what this is going to look like.
>
> **[3:49](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=229)** If we wanted to make the same kind of assertion as what we were making down here, with this characters left span inside this .then callback, we're going to say expect, and then we'll say charsLeftSpan.text.
>
> **[4:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=246)** This is, now, how we access the text from this element.
>
> **[4:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=250)** And then we're going to say .to.equal and then 15 as a string, and this will work as we'll see if we save this and go back to our browser.
>
> **[4:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=261)** Sure enough, we see that will work and we'll see that the assertion that we're making here passes.
>
> **[4:27](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=267)** All right, now, the only reason that you would want to do something like this, in case you're wondering why you would want to do this, instead of just using the assertion syntax that Cypress provides us with.
>
> **[4:38](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=278)** First of all, you might want to do this because you're already more familiar with making this type of Chai assertion, but you also might want to do something like this if the assertion that you need to make is something that Cypress doesn't provide a nice, easy method for.
>
> **[4:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=295)** Normally that won't be the case, but in more complex situations you might find that you just need to write a Chai assertion like this or a series of Chai assertions by using .then.
>
> **[5:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=307)** All right, so that's the basic way of using the .then method in Cypress in order to get the results of some sort of chain of Cypress commands.
>
> **[5:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=317)** And, as we saw, it allows you to work with this element in a very similar way to how you're able to work with elements in libraries like jQuery, right?
>
> **[5:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-command-results?u=76281980&t=326)** We're able to access things like the text just by saying .text, which does make it a little bit different from Cypress, but can be used in situations where you need to make more advanced assertions that Cypress doesn't provide a default method for.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), find (1)
> **Code Identifiers:** charsleftspan (2), fninput (1), charsleft (1), jquery (1)
> **Analogies:** for example (3), just like (1)
> **Cross-References:** go back to (2), as we saw (1)
> **File Paths:** results.cy.js (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using beforeEach](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=0)** - [Instructor] All right, so now that we've taken a look at a few details around writing simple tests with Cypress, the next thing that I want to show you is a key way that we can reduce duplication across our Cypress tests.
>
> **[0:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=14)** So first of all, let's just create a new file here.
>
> **[0:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=18)** We'll call this something like before each.
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=20)** You'll see why I'm calling it this in just a minute.
>
> **[0:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=24)** Then what we're going to do is we're just going to go into our selecting.cy.js file.
>
> **[0:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=29)** I'm just going to copy the code that's inside there and paste it and we'll just adjust the indentation, real quick here.
>
> **[0:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=37)** All right, there we go.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=39)** So let's say that we made this test a little bit easier to read and maintain by splitting this single it block up into multiple blocks.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=51)** You'll see what I mean by this in just a second.
>
> **[0:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=53)** Let's maybe copy and paste this a few times so that we now have three tests here.
>
> **[1:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=60)** And maybe what we want to do is for each of these it blocks, instead of typing incrementally, which can be a little bit difficult to tell what's going on if you've never seen these tests before, maybe we just want to specify the full string in each of these test cases.
>
> **[1:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=76)** So here's what this is going to look like.
>
> **[1:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=79)** We'll say something like, displays the appropriate remaining characters count with five characters.
>
> **[1:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=85)** And then what we'll do here is we'll just type hello and check to make sure that that is equal to 10.
>
> **[1:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=92)** Okay.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=93)** And then for this one, we might want to say with 10 characters.
>
> **[1:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=99)** And then with this one, what we would want to do is something a little bit different.
>
> **[1:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=104)** We would want to actually type, hello, hello, and that would make it a little bit more readable, right?
>
> **[1:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=111)** And then we'll just make sure that that is equal to five instead of 10.
>
> **[1:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=117)** And last but not least, let's check what happens when we go beyond the limits here.
>
> **[2:03](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=123)** What we're going to do is we're going to say, displays the appropriate remaining characters count and prevents extra characters when full.
>
> **[2:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=134)** Okay so in this case, what we're going to do, and by the way, we don't actually need to check this thing in the previous test case there.
>
> **[2:22](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=142)** We already know that from the first one, all right?
>
> **[2:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=145)** So now down here, what we're going to do is we're just going to check what happens when we type a bunch of things that goes beyond that.
>
> **[2:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=153)** So let's just make sure that this has more than 15 characters.
>
> **[2:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=156)** We'll just say hello, hello, hello, hello.
>
> **[2:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=159)** And we should expect the input to only have three hellos in it, and we should expect the characters left to be zero.
>
> **[2:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=167)** All right, so these three tests should work.
>
> **[2:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=170)** And let's just go over to our interface and run those.
>
> **[2:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=173)** We're going to go back to our specs, select before each, and sure enough, it completes successfully.
>
> **[2:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=178)** And you can see even that now that we have three tests, right, three it functions, those are grouped together instead of just being one giant block, which is very helpful for readability.
>
> **[3:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=191)** So now that this works, let's go back and confront a big problem that this brings up and that is, why do we have to have so much repeated code between all of our test cases, right?
>
> **[3:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=201)** We have cy.visit, cy.get, cy.visit, cy.get, right, we're visiting and then creating the same aliases for each test case.
>
> **[3:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=212)** Now the first thing you should know is that you can't just move these outside the it blocks.
>
> **[3:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=217)** Unfortunately, that's not how it works.
>
> **[3:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=219)** And we also want to make sure that we reload the page again, just to reset the values of the inputs, reset the entire page, things like that.
>
> **[3:49](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=229)** So the way that this is done in Cypress is by using a before each block.
>
> **[3:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=236)** And this is actually a mocha construct, but Cypress is set up to work with it, right?
>
> **[4:03](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=243)** So what we can do here is we can say before each, then we're going to have a callback function here.
>
> **[4:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=248)** And what we're allowed to do is, basically, just take whatever repeated code we have, code for visiting, code for creating aliases, et cetera, and put that in the before each callback.
>
> **[4:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=259)** And now we no longer need to do those things inside our test cases, right?
>
> **[4:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=265)** So we can actually just delete all of that repeated code, and this makes our test cases significantly shorter.
>
> **[4:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=273)** So let's just save this.
>
> **[4:34](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=274)** And if we go back to our interface, we should see that everything passes just as before with a much shorter, much more concise series of tests.
>
> **[4:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/using-beforeeach?u=76281980&t=286)** So anyway, that is the basics of the before each hook and using that with Cypress as well as how we can use this to visit sites and create aliases.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Cross-References:** go back to (2)
> **File Paths:** selecting.cy.js (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Setting a base URL](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=0)** - [Instructor] Alright, well so far in our code, whenever we've wanted to visit a page as we have in our end-to-end tests here, what we've had to do is we've had to say cy.visit followed by the entire URL, and only then do we actually have the path that we're interested in.
>
> **[0:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=18)** So as you can see through multiple tests, we've had to actually write out that entire URL over and over again, even though the only part that's ever going to change in our case is going to be that very end part, the /example-1 or /example-2, et cetera.
>
> **[0:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=37)** Now, if you have a large number of tests, it would be kind of silly to have to have this base URL over and over again in each test.
>
> **[0:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=45)** And as a matter of fact, Cypress allows us to specify a base URL for our project so that instead of typing out the full URL each and every time, we can just type the path that we want to visit, right?
>
> **[0:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=58)** So we could just say cy.visit('example-2'); for example.
>
> **[1:03](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=63)** The way that we do this is by opening this cypress.config.js file that Cypress created for us when we first set up our project with Cypress.
>
> **[1:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=75)** And currently there's not really a whole lot going on here.
>
> **[1:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=78)** There's this sort of stub function inside e2e that we're not going to change, but what we can do is we can actually add a property called baseUrl and we can just put whatever the base URL should be inside of that as the value, right?
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=94)** So here's what that would look like.
>
> **[1:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=96)** We could just take, oops here, let me just get that URL back.
>
> **[1:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=101)** I'm going to copy that like so and paste that inside of there.
>
> **[1:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=105)** And that should be all we really have to do in order to make that work now with all of our other URLs.
>
> **[1:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=111)** So now we can change this to just /example-2.
>
> **[1:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=115)** Let's go through and change this in our other files.
>
> **[1:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=117)** So this is just going to be /example-3.
>
> **[2:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=120)** This one's going to be /example-1 like so, and then we'll do the other ones too.
>
> **[2:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=127)** So this one's just going to be /example-3, and this one is just going to be /example-3 as well.
>
> **[2:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=133)** Cool, so let's just make sure that everything still works.
>
> **[2:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=136)** I'm actually just going to rerun our code here.
>
> **[2:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=139)** All right, so we're just going to say npx cypress open, right here.
>
> **[2:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=143)** And I wanted to go back through this just in case you happen to, you know, take a break from this course and have to rerun all of these things.
>
> **[2:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=151)** All right, so Cypress is opening back up there.
>
> **[2:34](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=154)** We're going to click on [[End-to-end Testing]].
>
> **[2:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=157)** We're going to click Chrome and start e2e testing in Chrome.
>
> **[2:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=160)** That's going to open up this Chrome window for us, especially styled by Cypress, as you can see.
>
> **[2:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=166)** Now let's just click on some of these tests to make sure they still work.
>
> **[2:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=170)** We'll just be content with testing a few of these and oops, it looks like that didn't work because we need to rerun our front end too.
>
> **[2:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=178)** So let's just open up a new terminal.
>
> **[3:01](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=181)** We'll run [[npm]] run dev. Inside, oops.
>
> **[3:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=185)** Here we need to actually change directories into our target app by saying cd target app.
>
> **[3:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=190)** Then we'll say npm run dev in there and we should be able to go back to Cypress now and try rerunning this, right?
>
> **[3:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=200)** So we'll just hit refresh there and sure enough it works this time.
>
> **[3:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-a-base-url?u=76281980&t=204)** So that base URL is now working for our project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[End-to-end Testing]] (1)
> **Env Vars:** url (8)
> **CLI Commands:** make (3), npm (2), npx (1), cd (1)
> **UI Navigation:** click on (2)
> **File Paths:** cypress.config.js (1)
> **Code Identifiers:** baseurl (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)

#### [Challenge 1: Writing your own tests](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24924807?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24924807?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24924807?u=76281980&t=6)** So now that we've learned all about the basics of writing Simple Cypress tests and visiting different pages and running tests on those pages, it's time for you to do a challenge.
>
> **[0:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24924807?u=76281980&t=18)** Now, for this challenge, what I've done is I've actually created an extra page, which you can find by going to localhost:5173/challenge1.
>
> **[0:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24924807?u=76281980&t=29)** You do need the starting state of the exercise files for this video in order to find that.
>
> **[0:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24924807?u=76281980&t=35)** And basically, here's how this page is supposed to work.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24924807?u=76281980&t=39)** It just contains a simple text input inside it that you're supposed to put your name into, and once you've entered anything, even one character, it will display, underneath this, "Hello," with the name that you've typed into the text input as a value.
>
> **[0:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24924807?u=76281980&t=56)** So your goal here, and the challenge that I'm going to give to you is to simply write tests that will check that this works.
>
> **[1:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24924807?u=76281980&t=65)** So really the only two things that you're going to need to check is you're going to need to make sure that that message is empty when there's nothing in the text input, and that when something is entered in, the message reads, "Hello, Shaun," and feel free to open up the inspector window and actually check out the structure of this thing as well, in order to figure out the best way to do this.
>
> **[1:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24924807?u=76281980&t=88)** I've added some attributes that should be pretty helpful and make it clear which attributes you should use for your tests.
>
> **[1:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24924807?u=76281980&t=95)** So that's your challenge.
>
> **[1:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24924807?u=76281980&t=96)** This should take you maybe 5 to 10 minutes to complete, and once you've given it a try, you can feel free to move on to the next video where I'll walk you through the solution.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **URLs:** [localhost:5173](https://localhost:5173) (1)
> **Ports:** :5173 (1)
> **Cross-References:** next video (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution 1: Writing your own tests](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=0)** - [Shaun] All right, well, hopefully you gave this challenge a try.
>
> **[0:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=8)** Let's take a look at the solution.
>
> **[0:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=10)** So the first thing to do, of course, was to create a new test file.
>
> **[0:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=14)** I just said new file, and I called this one something like challenge-1.cy.js.
>
> **[0:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=23)** And then what I did is I just copied some of the code over from one of the previous ones, such as the max character input to at least give myself a start.
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=33)** So I just pasted that in there and made a few modifications.
>
> **[0:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=37)** The first thing, of course, was to actually visit the correct URL or path, in this case, since we already set a base URL, and that was challenge-1,, and let's also change the text up here.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=51)** So for describe, we'll just say something like 'Challenge page functionality'.
>
> **[0:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=58)** And the first thing here that we wanted to test was we wanted to make sure that when there was nothing in the text input, there was nothing that showed up in the message underneath.
>
> **[1:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=68)** So here's how this worked.
>
> **[1:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=70)** I started off by just saying it, and for this, I just said, doesn't display any message when the text input is empty.
>
> **[1:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=85)** And really the first thing that I wanted to do here was say beforeEach, and since each of these tests, of course, is going to be visiting challenge-1, I just had that as the only contents of challenge-1, and you could have also created aliases in here.
>
> **[1:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=101)** In fact, I might still do that.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=103)** So now that we're visiting challenge-1 in each of these challenges, and we have one challenge for checking that there's no message when the text input is empty, the next test that we'd want to create here, the next test case, that is, is we'll want to say something like displays a greeting when there is something inside the input.
>
> **[2:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=129)** All right, and for this one, we would have to test a number of other things here.
>
> **[2:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=134)** So before we get into actually defining these test cases, which are going to be pretty similar to what we saw earlier, the first thing that we had to do was actually go and investigate what elements we needed to select.
>
> **[2:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=146)** So let's just go back to here and take a look.
>
> **[2:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=149)** And if you knew how to read [[React.js|React]] code, you could have also just gone into the target app inside the IDE, but let's just open up the inspector window since, in many cases, that's all you'll have access to.
>
> **[2:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=160)** We're going to go to Elements, and we're going to select this input.
>
> **[2:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=165)** And what we'll see here, let's just [[Zoom]] in on that just a little bit there.
>
> **[2:49](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=169)** There we go.
>
> **[2:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=170)** What we'll see here is that this input has a data-cy attribute, which as you may recall, is the recommended attribute for selecting elements, since the only reason it would ever change is for Cypress reasons.
>
> **[3:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=184)** And that value is first-name-input.
>
> **[3:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=187)** So that's probably what we're going to want to use to select that thing.
>
> **[3:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=190)** And then for the message underneath it, let's just take a look at that.
>
> **[3:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=194)** Sure enough, we can see that we have this span with data-cy equal to name-greeting, so we have that same kind of attribute here as well.
>
> **[3:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=204)** Cool. Well, let's just give this thing a try.
>
> **[3:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=206)** So we have first-name-input and name-greeting.
>
> **[3:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=209)** Let's start off by creating aliases for both of those.
>
> **[3:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=211)** So we're going to say cy.get.
>
> **[3:34](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=214)** We're going to say input, and then we'll say data-cy is equal to, and I'll just copy that to make sure that there's no typos there, like so, it's going to be equal to first-name-input.
>
> **[3:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=228)** And then we're going to say .as, and we're going to name that the input, I guess.
>
> **[3:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=233)** You could name it something obviously more explanatory, but since we only have one input on this page, input is good enough.
>
> **[3:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=239)** And then we'll say cy.get.
>
> **[4:01](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=241)** And we're going to find the span with data-cy equal to, I'm just going to go back and copy this as well, name-greeting.
>
> **[4:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=250)** So we'll paste that like so.
>
> **[4:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=252)** And then we'll just say .as, and we'll call this greeting.
>
> **[4:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=258)** Cool, so again, that's going to happen before each of these test cases, so we should be able to access both of those just as aliases.
>
> **[4:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=265)** So first thing to check is that it doesn't display any message when the text input is empty.
>
> **[4:30](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=270)** Here's how we're going to check this.
>
> **[4:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=272)** All we really have to do is, first of all, we probably would want to check to make sure that when we first navigate to that page, the input is empty.
>
> **[4:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=282)** That might be a separate test case, but for now, I'll just put that inside this one.
>
> **[4:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=286)** We'll just say, cy.get, and nicely enough, we can just say @input here, because that's the alias we created.
>
> **[4:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=294)** We'll say that should have value, and that should be empty.
>
> **[4:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=297)** And then we'll check to see if the greeting right, we can just say cy.get('@greeting').
>
> **[5:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=305)** We're invoking text.
>
> **[5:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=306)** And we're going to check to make sure that that should equal an empty string as well.
>
> **[5:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=312)** Let's just make sure that that test case works here.
>
> **[5:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=315)** First we're going to go back to Cypress.
>
> **[5:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=318)** We're going to go back and find our new file that we created here, challenge-1.cy.js.
>
> **[5:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=324)** Sure enough, it looks like both of the assertions that we're making in the first test case pass.
>
> **[5:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=329)** So let's go back to our IDE.
>
> **[5:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=331)** And what we're going to want to do here is add something to that input.
>
> **[5:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=336)** So here's what that's going to look like.
>
> **[5:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=337)** We'll say cy.get('@input').
>
> **[5:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=340)** We're going to type something into it by saying .type, and we'll just say, I'm going to use my name here, but you can obviously use yours.
>
> **[5:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=347)** And then we're going to say cy.get('@greeting').
>
> **[5:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=352)** And we're going to say invoke('text'), and make sure that that equals, we'll say, should 'equal'.
>
> **[5:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=358)** The greeting should now be, 'Hello, Shaun!'
>
> **[6:01](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=361)** with an exclamation point at the end.
>
> **[6:03](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=363)** You could obviously change that as that text changes, but, well, that should be all we need to do.
>
> **[6:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=368)** So let's go back and make sure that this is working.
>
> **[6:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=371)** Just hit Refresh there, and sure enough, we see that that passes there.
>
> **[6:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=375)** You can see even what it's doing to make sure that it actually is running those tests.
>
> **[6:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=380)** That can often be a very important thing to check.
>
> **[6:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=383)** But anyway, that is the solution to the challenge.
>
> **[6:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24924810?u=76281980&t=386)** So you might have had something slightly different, but as long as you are able to get these two test cases in place, and actually check the correct things here, that's perfectly fine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1), [[Zoom]] (1)
> **CLI Commands:** make (8), find (2)
> **Env Vars:** url (2), ide (2)
> **Cross-References:** go back to (3)
> **File Paths:** challenge-1.cy.js (2)
> **UI Navigation:** go to (1), navigate to (1)
> **Analogies:** such as (1), similar to (1)
> **Code Identifiers:** beforeeach (1)


### 3. Intermediate Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Interacting with elements](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=0)** - [Instructor] All right, so now that we've seen a lot of the basics of writing end-to-end tests with Cypress, over the next few videos we're going to take a more in-depth look at how to do a few different things, such as interacting with elements, making different assertions, debugging our Cypress tests, and so on.
>
> **[0:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=17)** So in this video we're going to focus on several different ways that you can interact with elements in Cypress, and to start off with, so far the only real interaction that we've used in our tests, in other words the only real change that we've made to the interface as we've had Cypress interact with it on our behalf, is we've used this type command to change the value in a text input, but in reality there are many other commands that Cypress provides us with for testing applications.
>
> **[0:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=48)** These commands are all pretty straightforward, so I'm not really going to spend too much time on any one of them, but feel free to play around with them until they become more familiar.
>
> **[0:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=58)** So, the first thing that we're going to do here is we're going to create a new file, and we're just going to call it something like interactions.cy.js, and inside this file we'll set it up just like any other test file.
>
> **[1:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=72)** We'll create a describe block that says something like basic page interactions, and then we're going to add a before each block here, and what this is going to do is we're just going to navigate to our example page.
>
> **[1:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=89)** Feel free to check this out as well, which is going to be example four.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=93)** So, if you just open up a new tab and go to localhost 5173/example-4, you'll see that we have this new page with a lot of different elements inside of it, right?
>
> **[1:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=106)** So, we have things for clicking and double clicking, we have check boxes for checking and unchecking, we have a drop down here that we can test, and we have a mouse over trigger that we can check here.
>
> **[1:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=119)** So, let's start off by navigating to this.
>
> **[2:02](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=122)** We're going to do that by saying cy.visit, and we're going to visit/example-4.
>
> **[2:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=129)** Remember that we set up a base URL, so all we have to do is refer to the exact path.
>
> **[2:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=134)** Cool!
>
> **[2:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=136)** So now that we've done this, the first interaction that we're going to take a look at is the click action, and what this action looks like is first of all we'll just set up a test case here, and in this test case we're going to check to see.
>
> **[2:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=152)** Let's just go back over to our example page here.
>
> **[2:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=155)** You could check that this highlights the selected item when you just single click it, but we'll do double click here.
>
> **[2:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=160)** So, we're going to say it sets the header text to the item name when double clicked.
>
> **[2:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=171)** This is going to be pretty straightforward, and then for our test all we have to do is find our element.
>
> **[2:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=177)** We can say cy.get, and here's how we're going to find this thing.
>
> **[3:02](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=182)** Let's just say inspect.
>
> **[3:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=184)** We'll select this thing here, and notice here that each of these list items doesn't have its own data cy attribute, but the ul item does.
>
> **[3:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=194)** So, what we can do is we can just find the first option.
>
> **[3:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=197)** Here's what that's going to look like.
>
> **[3:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=199)** We'll say cy.get, and we'll say ul with the data cy attribute equal to... I'm just going to come back and copy this.
>
> **[3:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=211)** This is what I usually recommend to avoid typos, and then we're going to get the list items that are direct descendants of that.
>
> **[3:38](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=218)** This is just a basic CSS selector, and then because this will select multiple items, we're actually just going to use .eq index 0, right?
>
> **[3:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=227)** The reason we're using this here is because this is a list, so this doesn't have the same problems as what we saw before with using .eq when we were just being a little bit lazy about finding an exact one.
>
> **[3:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=239)** In this case, we don't have a choice but to use this index, so that's fine.
>
> **[4:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=244)** All right, so here's what this is going to look like.
>
> **[4:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=245)** We're going to double click this thing.
>
> **[4:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=248)** Here's what this is going to look like.
>
> **[4:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=249)** We're going to just say .dblclick, and that should be all that we need to do.
>
> **[4:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=256)** So, that's going to double click on that element.
>
> **[4:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=259)** So, now we're going to want to find the selected item text.
>
> **[4:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=264)** Let's just take a look at that here.
>
> **[4:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=266)** So, we have data cy box 1.selected name.
>
> **[4:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=269)** I'm just going to copy that here.
>
> **[4:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=271)** So, we're going to look for a span cy.get span with data cy equal to box 1.selected name.
>
> **[4:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=280)** You could obviously create aliases for this if you wanted to, but we'll just say .invoke text, and now let's see what this should look like.
>
> **[4:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=290)** We're going to say .should equal, and that should have option one inside of it.
>
> **[4:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=297)** Now you could select other options if you wanted to.
>
> **[5:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=300)** In fact, if we refresh this page, we see that it says nothing selected.
>
> **[5:03](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=303)** You might want to write a test for that as well.
>
> **[5:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=305)** So, we're going to just say should equal, and we'll say option one.
>
> **[5:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=309)** All right, and that should be all that we need to do.
>
> **[5:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=311)** So, let's go back to our application here, and you're going to want to find this interactions.cy.js, and sure enough, we see that our test passes, and you can see the state of the application after it's run it.
>
> **[5:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=325)** We see that option one is selected.
>
> **[5:27](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=327)** If you were to change this to like eq2, for example, we would expect that option three would be the selected text.
>
> **[5:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=335)** So, let's just try that out, and sure enough, we see that option three has been selected in Cypress.
>
> **[5:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=341)** All right, so that is the basics of using the double-click event.
>
> **[5:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=346)** Notice that we use double click here, but you could have used click instead if you only wanted to click on an individual element.
>
> **[5:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=353)** So anyway, that is the first interaction that we learned about.
>
> **[5:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/interacting-with-elements?u=76281980&t=356)** The next thing we're going to talk about are some of the other interactions that we can use, such as checking and unchecking check boxes and other things like that.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5)
> **UI Navigation:** click on (2), go to (1), double-click (1)
> **Analogies:** such as (2), just like (1), for example (1)
> **File Paths:** interactions.cy.js (2)
> **Env Vars:** url (1), css (1)
> **Definitions:** in other words (1), is a  (1)
> **Prerequisites:** set up (2)
> **Cross-References:** go back to (1)

#### [Triggering other actions](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=1)** So we've seen how to test clicking and double clicking.
>
> **[0:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=4)** And just as a reminder, we only tested double click here, but if you wanted to test clicking behavior, you could just change that to click.
>
> **[0:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=11)** So let's see how to do some other things, right, such as checking and unchecking check boxes, selecting things from a dropdown and more.
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=20)** So the first thing that we'll take a look at here is the check boxes.
>
> **[0:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=23)** And in theory, what you could do is just find these checkbox elements and call a click on them.
>
> **[0:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=31)** But Cypress provides a slightly more explicit way of doing this.
>
> **[0:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=36)** This really just makes sure that your tests are clear on what it is you really want to do when interacting with these elements.
>
> **[0:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=43)** So here's what this is going to look like.
>
> **[0:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=45)** We're going to go back and we're going to add a test case here.
>
> **[0:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=48)** We'll say it.
>
> **[0:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=50)** And let's just take a look at what this .check() and .uncheck() things do.
>
> **[0:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=53)** Basically this just changes the number of checked boxes that are selected so we'll want to test that.
>
> **[1:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=60)** And actually, let's just open this page in another browser here so we can take a look at it better.
>
> **[1:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=65)** We'll open up the inspector window and let's just take a look at the .check() and .uncheck() options there.
>
> **[1:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=71)** So we'll just take a look here and see what those are.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=74)** And sure enough, we see that this has this nice data-cy attribute that we'll be able to use, box-2-checkboxes.
>
> **[1:22](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=82)** And then up above inside this paragraph tag, we see that we have a span with data-cy=box-2-selected-count.
>
> **[1:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=91)** So I'm going to select this here, box-2-selected-count.
>
> **[1:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=96)** We'll be using that inside our test case in order to find the right thing.
>
> **[1:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=101)** But first, let's just say something like it 'displays the correct number of checked options',
>
> **[1:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=111)** and then for the callback here, here's what this is going to look like.
>
> **[1:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=115)** We know that we're already visiting example-4 here, so we don't need to do that.
>
> **[2:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=120)** We're going to say cy.get And then we're going to look for the span with the data-cy attribute.
>
> **[2:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=127)** There we go, equal to, and then I'm going to paste that box-2-selected-count.
>
> **[2:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=132)** That's actually the second thing that we want to do there, so I'll just put a line before that since that is the number itself.
>
> **[2:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=140)** So let's go back here and we're going to want to find each of these options.
>
> **[2:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=143)** Let's just go back and select one of these here.
>
> **[2:27](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=147)** So we're going to look for the div with data-cy=box-2-checkboxes.
>
> **[2:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=152)** And then just like we did before, we're going to have to find the appropriate inputs inside of this thing and select them by their index.
>
> **[2:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=164)** None of these inputs actually have any type of attribute that we would be able to latch onto in order to select a specific one, which happens sometimes.
>
> **[2:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=173)** So let's just copy this data-cy.
>
> **[2:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=175)** We're going to look for a div with that attribute.
>
> **[2:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=178)** So we're going to say cy.get, and then we'll say div(data-cy=box-2-checkboxes).
>
> **[3:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=189)** For the selectors here, we're going to say that we want to find an input inside of there.
>
> **[3:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=194)** So, we're just going to put a space and type input after that.
>
> **[3:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=198)** You might also want to get a specific type of input, right?
>
> **[3:22](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=202)** You could say type=checkbox there just to be specific and make these tests a little bit more robust, so we'll say type=checkbox.
>
> **[3:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=211)** And now that we have multiple checkbox elements selected, we can call .check in order to set that checkbox as state to checked.
>
> **[3:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=222)** So let's do the same thing here. We'll do that maybe twice.
>
> **[3:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=225)** And here actually, we'll need to say .eq in order to get the first and second check boxes like that.
>
> **[3:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=234)** And now we're going to want to make sure that that count is just 2.
>
> **[3:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=238)** So we'll say .invoke('text'), and then we're going to say that that .should 'equal', and we're going to compare that to the string 2.
>
> **[4:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=247)** We might also want to check this before we check those check boxes.
>
> **[4:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=250)** I'll just copy that and paste it up here to make sure that that is equal to 0.
>
> **[4:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=256)** So, let's just give this thing a try.
>
> **[4:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=258)** We're going to go back to our tests and we should see, if we hit refresh here, you may need to hit refresh, that sure enough, it says, "displays the correct number of checkbox options," and you can see that after two check boxes are checked, this number reads 2.
>
> **[4:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=275)** Now you could obviously add other test cases if you wanted, and you could also uncheck check boxes, so if we wanted to uncheck the second one here, we could just say .eq(1).uncheck.
>
> **[4:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=287)** And you'd probably want to create an alias for this at that point, but I'll just leave it up to you.
>
> **[4:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=292)** Then we would want to check that that's equal to 1, all right?
>
> **[4:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=296)** So let's just test that here.
>
> **[4:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=298)** We'll change that to 1.
>
> **[5:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=300)** And now if we go back, we see that our test is still passing and the final state here says one check box selected.
>
> **[5:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=307)** Cool, so that's checking and unchecking check boxes.
>
> **[5:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=310)** The next thing is selecting elements.
>
> **[5:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=313)** So, I'm just going to sort of copy this test case here and we'll just paste that.
>
> **[5:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=318)** We're probably going to want to just wipe this clean here and let's go back and take a look at this drop down.
>
> **[5:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=326)** Sure enough, what we want to do is just make sure that it displays the selected option, Option One, Option Two, Option Three.
>
> **[5:34](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=334)** So the way that we're going to do this, as you probably guessed by this, is by saying .select.
>
> **[5:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=339)** So here's what this is going to look like.
>
> **[5:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=341)** We'll say, "displays the currently selected dropdown option."
>
> **[5:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=348)** All right, so let's find that dropdown here.
>
> **[5:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=351)** I'm just going to go back over to this one and we will just select the dropdown here.
>
> **[5:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=358)** Sure enough, it's got data-cy=box-3-dropdown.
>
> **[6:01](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=361)** Let's just copy that, and here's how this is going to work.
>
> **[6:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=364)** We're going to go back to here. We're going to say cy.get.
>
> **[6:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=368)** We're going to find the select(data-cy=box-3-dropdown) and then we're going to call .select on this one, and we get to call it with the option that we want.
>
> **[6:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=381)** So, we're just going to select, we'll say Option Two here.
>
> **[6:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=384)** We'll test that. Make sure you spell it right.
>
> **[6:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=386)** We're going to say Option Two, and that should select the appropriate thing.
>
> **[6:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=392)** So, what we'll want to do is make sure that this text now says Selected Item: Option Two.
>
> **[6:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=397)** Let's actually take a look at that to see what we can use to select that element, box-3-selected-name.
>
> **[6:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=403)** Let's just copy that data-cy.
>
> **[6:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=405)** And this is a span, so we're going to go back now and we're going to say cy, oops, we'll do that after.
>
> **[6:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=411)** There we go.
>
> **[6:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=412)** Cy.get(span[data-cy=box-3-selected-Name]) and then we'll just say .invoke('text') and that should be equal to, all right, we'll say .should('equal') and that should now be Option Two.
>
> **[7:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=431)** So let's give that a try. We're going to go back to our tests.
>
> **[7:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=434)** Sure enough, we see that that passes and that Option Two is currently selected.
>
> **[7:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=438)** I'll leave it up to you to make any modifications and play around with that a little bit more.
>
> **[7:22](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=442)** So let's do the final thing here.
>
> **[7:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=444)** Let's see how we can trigger more generic events if we need to do something that Cypress doesn't have a specific method for, such as select or check or uncheck.
>
> **[7:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=455)** And if we just need to trigger some event by name, such as a mouse over event or a mouse enter or mouse leave events, we can just call .trigger('mouseover') and check the same thing.
>
> **[7:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=466)** So I'm actually just going to copy the test from the first case here, the double click one, and we're just going to trigger another event on this thing.
>
> **[7:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=476)** Instead of saying double click, we're going to say .trigger, and we're going to trigger a mouse over event.
>
> **[8:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=484)** So, we'll just say, "when hovered over" for the test description there, and that should be all we need to do.
>
> **[8:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=493)** So let's go back and test this one.
>
> **[8:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=495)** And it looks like it's running it there, and oops, I'd imagine that box-1-selected-name is no longer the selector for this, so we'll say box-4 and box-4-items-list.
>
> **[8:27](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=507)** So let's go back and test that again, and sure enough, we see that that worked.
>
> **[8:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=511)** So, these are just a few demonstrations of how to trigger other events in Cypress.
>
> **[8:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/triggering-other-actions?u=76281980&t=517)** So for the most part, you can use these for any situation or any interaction that you want to simulate when working with Cypress.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (6), checkbox (6), select the (2), click on (1)
> **CLI Commands:** find (7), make (7)
> **Analogies:** such as (3), just like (1), imagine (1)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Common assertions](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=0)** - [Instructor] All right, so now that we've taken a look at a few different interactions that we can use with Cypress, let's take a look at a few different types of assertions, right?
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=9)** So, so far, we've been primarily concerned with things like checking whether text is equal to some value or checking whether a text input has some value.
>
> **[0:22](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=22)** But the fact is that there's a lot of other assertions that we'll want to make in Cypress in order to make sure that a website is behaving in the way that we want it to.
>
> **[0:30](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=30)** So the first thing that I'm going to do here is I'm actually just going to create a new file for the code that I'm going to write here.
>
> **[0:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=37)** We'll call this assertions.cy.js.
>
> **[0:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=40)** We're just going to say describe, and we'll say something like different types of assertions.
>
> **[0:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=46)** And then for the test cases here, the first one we're going to do is checking to see whether there are a certain number of a type of element on a page, right?
>
> **[0:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=59)** So checking the number of items is a pretty common thing that we might want to do.
>
> **[1:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=64)** We might want to check that there are, let's say three options here, or we might want to check that there's only one element with a specific tag, things like that.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=74)** Well, the assertion that we can use for that situation is should have length.
>
> **[1:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=80)** We've seen previously, if we just go back to interactions.cy.js, that we can use this should method with a string indicating what type of assertion we want to make, and we've seen with other inputs here, such as this one here, that we can also test things like should have value.
>
> **[1:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=100)** Well, for checking length, we're going to use should with the string have length.
>
> **[1:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=106)** I'll show you what that looks like in just a minute, but what we're going to do is we're going to say something like, it displays three options in box 1.
>
> **[1:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=117)** And what we're going to do is we're actually just going to use the same example four that we used.
>
> **[2:03](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=123)** So I'm just going to copy the beforeEach hook from interactions.cy.js.
>
> **[2:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=129)** We're going to paste that in here.
>
> **[2:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=131)** And now, what we're going to do is we're going to make sure that box one has three options in it.
>
> **[2:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=137)** So once again, let's just inspect that here.
>
> **[2:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=140)** I'll open up another browser here so that we can inspect it.
>
> **[2:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=143)** And if we inspect this now, let's just take a look at that, sure enough, we see that this is inside data-cy with box-1-items-list.
>
> **[2:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=152)** We could also find by box-1-list-item this class, but it's probably best to use the data-cy attribute, so I'm just going to copy that there and let's find this thing.
>
> **[2:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=163)** And so far, what I've actually been doing is saying cy.get with the type of the element.
>
> **[2:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=168)** So if this is a UL element, I would say data-cy equals with the data-cy value.
>
> **[2:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=175)** But in fact, we actually don't need to have this ul element there because we know that this data-cy attribute is going to be unique on our page, at least it should be if we're doing things right.
>
> **[3:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=189)** So, now that we have that, we've selected that list, we're going to get all of the items inside of it.
>
> **[3:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=194)** So we'll just say greater than sign li.
>
> **[3:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=196)** That will give us all of the direct li children of this element.
>
> **[3:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=201)** And then what we're going to do is we're going to just make our assertion right here.
>
> **[3:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=205)** So we don't need to say .eq zero or something like that.
>
> **[3:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=209)** We can just say .should.
>
> **[3:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=211)** And then we'll say have.length of, and then we're going to say three.
>
> **[3:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=215)** And that should actually be a number instead of a string since we're no longer dealing with text that we're getting from the page here.
>
> **[3:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=222)** All right, now if we go back and go to our assertions file, we should see that, sure enough, that test will pass because there are three of that item.
>
> **[3:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=231)** And this can be used in many different situations.
>
> **[3:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=233)** If you wanted to create like a to-do list application or something like that, really anything where you're adding items to a list, you'd probably want to write a test that would use that to check the number of elements on the page.
>
> **[4:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=247)** So let's take a look at a few other assertions here.
>
> **[4:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=249)** There's a very specific version of this should have length assertion that checks to see whether the length is zero or one.
>
> **[4:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=259)** We call this checking for existence.
>
> **[4:22](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=262)** And this could be used, for example, to make sure that box 1 has maybe a title element inside of it.
>
> **[4:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=268)** So let's just inspect that over here.
>
> **[4:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=271)** We'll take a look at what that is.
>
> **[4:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=273)** This one unfortunately doesn't have a data-cy attribute, so we could find it by one of its class names, but maybe I'll just demonstrate this one with something else.
>
> **[4:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=281)** Maybe let's just check to make sure that this box-1-items-list exists.
>
> **[4:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=286)** Well, in order to do that, all we would have to do, here, I'm just going to copy this test case here.
>
> **[4:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=291)** All we would've to do is we'll say something like has a list in box 1.
>
> **[4:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=298)** And all we would have to do here is just find that list element and we could say should exist, right?
>
> **[5:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=306)** So that's just exist as a string and we don't need any other arguments for that.
>
> **[5:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=310)** And that would just check to make sure that that element is in fact on the page.
>
> **[5:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=314)** We see that that passes.
>
> **[5:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=315)** And if you want to check for the lack of an element here, for example, you might want to check to see if an element is hidden, you could say should not .exist.
>
> **[5:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=326)** And if we go back over here, you might be surprised to see that that actually passes as well.
>
> **[5:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=332)** Now if you hover over this, this is one of the really nice things about actually debugging Cypress tests.
>
> **[5:38](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=338)** If you hover over this, this will show you the state of the app at that point in time and you'll see that it's actually empty.
>
> **[5:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=344)** Well, that's because we're running a [[React.js|React]] application, and the way that React applications usually work is the first thing that the browser will receive is an empty page and then the React application will be rendered inside of that.
>
> **[6:02](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=362)** So essentially, the reason that things have been working so far, right, if we say should exist here, for example, the reason why that works is because Cypress is automatically set up to wait for a given element when we say cy.get with a selector or alias.
>
> **[6:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=384)** So it's automatically waiting for the React app to render, but when we say something like should not exist, we see that it no longer waits because it sees that, oh cool, that doesn't exist in the interface and it simply passes the test and moves on.
>
> **[6:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=401)** Now, there's a very simple way to fix this and that is we have to explicitly tell Cypress to wait for an element to exist.
>
> **[6:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=410)** So we're going to say cy.wait with the selector, and that will wait for that thing to actually exist.
>
> **[6:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=418)** And obviously, this isn't going to pass here for now.
>
> **[7:02](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=422)** Generally when you're testing for non-existence, you're going to need to wait for something else on the page to appear.
>
> **[7:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=429)** So in this case, we might want to wait for this check and uncheck heading to appear, something like that, in order to test this.
>
> **[7:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=436)** For now, what we'll see is that, sure enough, that test now fails because it's actually waiting for that list to appear.
>
> **[7:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=445)** So anyway, that is the basics of checking for existence and non-existence.
>
> **[7:30](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=450)** You can also check for visibility in the same way.
>
> **[7:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=453)** This is a little bit different, we'll say should be visible or should not be visible.
>
> **[7:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=462)** That'll just check whether the element is visible or exists but is hidden on the page.
>
> **[7:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=468)** So it's a little bit different from should exist or should not exist.
>
> **[7:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=472)** But anyway, those are just a few more assertions that you can make in Cypress.
>
> **[7:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=475)** There are obviously others such as ones for checking for CSS classes.
>
> **[8:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=480)** Here, just let me change that back to should exist so that our test actually passes again.
>
> **[8:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=486)** But if you wanted to test for things like CSS, you could always say things like should have.class and you can check for specific classes that way.
>
> **[8:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=496)** And you can also check for should have CSS.
>
> **[8:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=499)** And this actually allows you to check for specific things like background colors, foreground colors, and other CSS classes, right?
>
> **[8:27](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=507)** So we could say background-color blue, for example, if we wanted to check that.
>
> **[8:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=512)** So you can obviously get very detailed with these assertions.
>
> **[8:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=515)** So anyway, those are just a few more assertions that you can use in Cypress.
>
> **[8:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/common-assertions?u=76281980&t=519)** there's obviously lots of them, and if you want to find the full list, you can go to Cypress's documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4)
> **CLI Commands:** make (9), find (5)
> **Analogies:** for example (4), such as (2)
> **Definitions:** is a  (3), we call this (1), is an  (1)
> **Env Vars:** css (4)
> **File Paths:** interactions.cy.js (2), assertions.cy.js (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** beforeeach (1)

#### [Automatic retries](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=0)** - [Instructor] All right, at this point, we've covered quite a few concepts in Cypress, but there's still one very important aspect that we haven't covered yet and that is the concept of automatic retrying.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=12)** You see, one of the biggest difficulties with [[End-to-end Testing]] is what are called flaky tests.
>
> **[0:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=19)** Now, flaky tests are just tests that pass most of the time, but occasionally, or in certain environments, they will fail unexpectedly.
>
> **[0:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=29)** Now, quite often the cause of these flaky tests is just some sort of timing issue.
>
> **[0:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=35)** So, for example, the application might be making some network call that's taking longer than usual.
>
> **[0:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=41)** And Cypress has a built-in way of avoiding this difficulty, which is that it will automatically retry commands and assertions if they fail until they pass.
>
> **[0:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=52)** Now, that might sound a little bit confusing at first, so let's just think about a simple example.
>
> **[0:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=57)** Let's imagine that our app displays a list of people that it populates from the server.
>
> **[1:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=64)** Now, loading the information for this list is going to take a little while, and so if we write a Cypress test that immediately tries to check and see, you know, that there are, let's say, three people in that list, well, while that list is still loading, it's going to fail.
>
> **[1:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=81)** And so Cypress gets around this by automatically retrying until the test passes, or, as we'll talk about shortly, until it reaches some sort of timeout, which neatly solves the problem of waiting for the right time to pass or fail a test.
>
> **[1:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=97)** So just a few caveats here.
>
> **[1:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=100)** The first thing to know is that Cypress won't retry interactive commands like .click() or .type().
>
> **[1:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=108)** Now, the reason that it won't do this is because clicking multiple times or typing multiple times has the potential to further change the state of our site, where some test following that might fail if, for example, it were to click a button twice or type something in twice.
>
> **[2:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=128)** All right, so another thing to note here is that Cypress only retries the last failing command.
>
> **[2:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=134)** So if at the bottom of one of our test cases, we try and find some element that doesn't seem to be there, Cypress isn't going to rerun the entire test.
>
> **[2:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=144)** It's just going to retry that single command that failed.
>
> **[2:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=149)** Now, it's also important to know that Cypress will retry a failing command until it passes or until a timeout is reached, and the default timeout here is four seconds.
>
> **[2:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=162)** So in other words, if a Cypress test is trying to find something, find an element in the interface and that element doesn't appear for four seconds, well, that test is going to fail because it will have reached the timeout.
>
> **[2:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=179)** So the takeaway from all of this is that if a command or assertion fails, Cypress is automatically going to retry that command until it's successful or until a maximum timeout is reached.
>
> **[3:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/automatic-retries?u=76281980&t=190)** And keeping this fact in mind will really help you get more out of Cypress and potentially help you troubleshoot problems should you ever find that your tests aren't working as you'd expect them to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[End-to-end Testing]] (1)
> **CLI Commands:** find (4)
> **Analogies:** for example (2), imagine (1)
> **Definitions:** in other words (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Debugging Cypress tests](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=0)** - [Instructor] Now, it's a very common thing when we're writing or running Cypress tests that our application doesn't quite behave as we expected and we're not really sure why.
>
> **[0:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=11)** Now in these situations, it's really helpful to be able to pause our application at a specific point and debug it like we normally would.
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=20)** And this is something that even Cypress' snapshots here don't really do since they really only show you what the visible part of the app looked like at the point when the snapshot was taken.
>
> **[0:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=32)** In other words, if something went wrong in our application, if there was some kind of problem with the application state, many times we need to actually look at that internal state to figure out what the root cause was of that problem.
>
> **[0:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=46)** Now Cypress provides several nice tools for us.
>
> **[0:49](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=49)** The first tool is simply called debugger, and this allows us to pause the execution of our tests at a specific point in our code, not just at specific assertions or actions that we make.
>
> **[1:02](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=62)** Now, what debugger looks like is this, if we have a Cypress testing file open here, let's find one that's a little bit more complicated here, like interactions, for example.
>
> **[1:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=73)** What we can do is we can simply put the keyword debugger in the code, and when Cypress reaches this [[Microsoft Word|word]], it'll pause all the tests and we can inspect our application all we want.
>
> **[1:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=88)** Now, at first you might be tempted just to put this debugger keyword on the same level as other Cypress commands like I just did here.
>
> **[1:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=95)** However, you may already be a little suspicious of this not working because of the way Cypress queues commands.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=103)** If we try and do it this way or here, let's actually do a slightly different example here.
>
> **[1:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=107)** We'll do the max character input one because this has a lot of different steps in between.
>
> **[1:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=112)** If we put just the debugger keyword in here, like so our app will usually pause before any of the actual cypress commands have taken place because Cypress just runs all of these commands at once and only after all of the commands are queued will it start actually executing them.
>
> **[2:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=133)** So in other words, this debugger thing, as I said, will pause the app before any of these actions have taken place.
>
> **[2:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=140)** It can be a little bit tricky at first to really get a feel for how Cypress commands are going to work, but you'll get the hang of it after working with it for a while.
>
> **[2:29](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=149)** So what we need to do instead here is if there's a specific place or command where we want to pause our app and activate the debugger, what we have to do is something that we saw earlier, we have to actually say .then.
>
> **[2:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=163)** And inside that callback is where we put that debugger keyword.
>
> **[2:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=168)** We'll need to put curly braces around this thing because otherwise it won't quite understand what we mean by that.
>
> **[2:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=173)** All right, so that's what it's going to look like.
>
> **[2:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=176)** This is, in other words, going to pause it right after this type 'hello' command executes.
>
> **[3:02](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=182)** And you can actually put this anywhere inside of here.
>
> **[3:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=185)** You can put this in between cy.get input and the type command if you wanted to see what the application state was before and after that, for example.
>
> **[3:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=195)** All right, so if we go back and take a look at our tests now and hit refresh here, we'll see that strangely enough, it doesn't actually stop at that point.
>
> **[3:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=204)** Now this is a very important thing to remember and that is that Cypress isn't actually going to pause at your debug statements unless you have the inspector window open.
>
> **[3:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=215)** And the reason for this is because this is where you'll actually be able to interact with your app and see what's going on.
>
> **[3:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=221)** So let's try this again.
>
> **[3:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=222)** We're going to open up the inspector and everything's a little bit tight here, so you might want to just have this as a separate window if you have multiple monitors, for example.
>
> **[3:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=231)** But we're just going to hit refresh now.
>
> **[3:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=233)** You could also just rerun the tests up here if you wanted to.
>
> **[3:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=236)** And sure enough, when it reaches that debugger statement, it's going to pause our application right at that point where we typed hello.
>
> **[4:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=245)** Alright, so at this point, if we wanted to, we could open up the console and debug our application, print out the values at different variables and so on.
>
> **[4:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=253)** So that's how you can debug or set a basic breakpoint in a Cypress application.
>
> **[4:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=259)** One more thing that I want to show you here is because this .then debugger thing is such a common way of setting breakpoint in Cypress, and it's a little bit messy, Cypress actually has a sort of shorthand for this, and that is by saying .debug, right?
>
> **[4:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=273)** So that does more or less the same thing.
>
> **[4:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=275)** And if we hit refresh here, that should give us the same result, except what you'll also see is when you say .debug, if you go to the console, you'll see that that will actually print some things out from Cypress.
>
> **[4:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=288)** So it'll have command Args.
>
> **[4:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=290)** This is the argument that we just passed to the command that was last executed.
>
> **[4:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=294)** And it will also have this current subject thing, which is the currently selected element on the page that's being modified or interacted with, right?
>
> **[5:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=307)** In this case, that's this input thing that we selected.
>
> **[5:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=310)** So anyway, these are all very useful strategies for debugging.
>
> **[5:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=315)** Right here you pretty much have all of the information that you would need if there was a problem running your Cypress tests.
>
> **[5:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=321)** So that's the basics of debugging in Cypress.
>
> **[5:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=324)** And the last thing here is that once you close your console, Cypress will continue to execute and it will run the [[Representational State Transfer (REST)|rest]] of the tests.
>
> **[5:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/debugging-cypress-tests?u=76281980&t=333)** Of course, if you set more break points in them, if you were to say debug a few times in there, it would stop at the next break point.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** in other words (3), is a  (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Setting environment variables](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=0)** - [Instructor] All right, so the next thing that we're going to take a look at is another very helpful thing to know when doing any kind of Cyprus testing, and that is how to set up and use environment variables.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=12)** Right now, environment variables, just to show you what this might look like.
>
> **[0:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=17)** Environment variables are certain points in our tests that will change depending on where our tests are running.
>
> **[0:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=24)** So one example of this might be that maybe the paths that our different pages have in our application will change depending on whether our app is running locally or in production or on a dev server.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=39)** So what you might see are things like this where we say CYPRESS and then we'll say something like, EXAMPLE_2_PATH.
>
> **[0:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=48)** This is what's known as an environment variable.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=51)** And among other things, it also gives us a place to specify things like secret keys or usernames and passwords If we have a site that we need to log into so that we don't have to specify things like passwords in our code and actually push them up to a [[GitHub]] repo, which is definitely not something that you want to do.
>
> **[1:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=71)** So Cypress provides us with several different ways that we can define and use environment variables for our end-to-end tests.
>
> **[1:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=79)** The first way is simply by adding environment variables directly to your machine.
>
> **[1:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=83)** So what you're going to want to do is open up a new terminal here.
>
> **[1:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=88)** And inside this terminal, if you're on a [[Linux]]-based machine such as Mac, if you're on [[Windows]], you're going to have to do a different command.
>
> **[1:36](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=96)** But anyway, on a Linux-based machine you can type export and then you're going to type the name of the environment variable that you want to define.
>
> **[1:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=105)** Now in order for this to work with Cypress, the variable name has to be prefixed with the [[Microsoft Word|word]] CYPRESS, all in caps, and then an underscore, followed by the actual name of the environment variable.
>
> **[1:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=117)** So if we want to define maybe EXAMPLE_2_PATH, we would say export CYPRESS_EXAMPLE_2_PATH separated by underscores.
>
> **[2:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=128)** And then for the value there, we're just going to say /example-2 and hit Enter, and that will set that environment variable for us.
>
> **[2:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=136)** And you can see this by saying echo, with a dollar sign in front of that name, CYPRESS_EXAMPLE_2_PATH.
>
> **[2:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=145)** And sure enough that will print out the value there so that we can make sure that environment variable is set.
>
> **[2:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=151)** So now that we've set this environment variable, the way that we can access this inside our tests is by saying Cypress with a capital C.
>
> **[2:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=160)** Note that this is different than cy here.
>
> **[2:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=163)** We're actually going to say the full word Cypress and this is going to be followed by .env.
>
> **[2:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=170)** And then we're going to put the name of the environment variable that we just defined without the Cypress at the beginning.
>
> **[2:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=177)** So this is just going to be EXAMPLE_2_PATH and that will actually allow us to access the value of that Cypress environment variable.
>
> **[3:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=189)** All right, so now that we have this, we can use this thing wherever we want in our code.
>
> **[3:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=194)** So we'll just say const and we'll just say e2Path equals Cypress.env.
>
> **[3:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=201)** This here kind of breaks with the normal rules of having to define your Cypress code non-linearly.
>
> **[3:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=208)** We can actually assign this to a variable and use it later.
>
> **[3:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=212)** So we're going to say cy.visit e2Path now.
>
> **[3:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=215)** And if we run our code, you may need to actually rerun your Cypress code here in order for this to work.
>
> **[3:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=222)** So we'll just stop that like so.
>
> **[3:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=224)** All right, so let's actually check to see whether that environment variable is set up here.
>
> **[3:49](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=229)** echo, and that's going to be CYPRESS_EXAMPLE_2_PATH.
>
> **[3:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=234)** And sure enough, nothing is there.
>
> **[3:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=236)** So let's actually run that same command inside that other terminal here like so.
>
> **[4:01](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=241)** And now if we run echo, we'll see that that's set and we should be able now to just run our Cypress code with npx cypress open and that environment variable will be there.
>
> **[4:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=253)** So we should be able to go into our interactions test and see that it works the same way as it did before.
>
> **[4:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=258)** So let's go to E2E testing.
>
> **[4:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=260)** Start E2E testing in Chrome just like we did earlier.
>
> **[4:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=264)** And now we're going to go to interactions and we should see the same results except, oops, it looks like this was supposed to be example four actually.
>
> **[4:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=273)** So we could always change the environment variable now without changing our code.
>
> **[4:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=277)** All right, so what we'll see here is, let's actually change this to EXAMPLE_4_PATH.
>
> **[4:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=283)** We'll say e4Path and e4Path.
>
> **[4:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=287)** And now we're going to set a new environment variable here.
>
> **[4:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=291)** We'll say CYPRESS_EXAMPLE_4_PATH and then /example-4.
>
> **[4:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=297)** And now if we rerun our Cypress application, we should see that that will work a little bit better here.
>
> **[5:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=305)** All right, so we'll click E2E testing in Chrome again.
>
> **[5:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=309)** And let's try that one more time.
>
> **[5:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=310)** We're going to go into Interactions.
>
> **[5:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=313)** And sure enough, we see that everything works there.
>
> **[5:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=315)** And if we take a look at what it's actually visiting, we see that it's visiting example 4, which is getting from the Cypress environment variable.
>
> **[5:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=324)** All right, so that's one way of specifying environment variables, but there are other ways as well.
>
> **[5:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=328)** One way to do it is when you run Cypress, you can actually add an environment flag and you can put the name of the environment variable you want to define and its value after that, all right?
>
> **[5:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=341)** So you could do the same thing there.
>
> **[5:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=343)** Or you can add them to this cypress.config.js file, or you can even create another file here called cypress.env.[[JSON]] and put your environment variables in there.
>
> **[5:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/setting-environment-variables?u=76281980&t=358)** So there's really many different ways of doing this, and the exact method that you choose is going to be up to you and depend on your exact testing setup.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Microsoft Word|Word]] (2), [[GitHub]] (1), [[Windows]] (1), [[JSON]] (1)
> **Env Vars:** example_2_path (3), cypress_example_2_path (3), e2e (3), cypress (2), example_4_path (1)
> **Code Identifiers:** e2path (2), e4path (2)
> **Tools:** terminal (3), github (1)
> **File Paths:** cypress.env (1), cypress.config.js (1), cypress.env.json (1)
> **Prerequisites:** set up (2), setup (1)
> **CLI Commands:** make (1), npx (1)
> **UI Navigation:** go to (2)

#### [Working with test doubles](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=0)** - [Instructor] All right, so the next thing that we're going to talk about here is working with something called test doubles in Cypress.
>
> **[0:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=7)** As a general rule, when we're [[End-to-end Testing]], as we almost always are with Cypress, we want the app that we're testing to mimic the production environment as closely as possible.
>
> **[0:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=21)** This means that we want to be very careful about using techniques that are popular in unit and [[Integration Testing]], such as mocking, or stubbing, or other test doubles.
>
> **[0:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=31)** These are meant in unit and integration testing to make it easier to test individual pieces of our app in isolation.
>
> **[0:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=40)** So, usually, using test doubles in end-to-end testing is going to kind of ruin the point of end-to-end testing in the first place.
>
> **[0:49](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=49)** Now, that being said, there are times when using test doubles is the best option, even in end-to-end testing.
>
> **[0:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=55)** For example, if we need to see how our app works when it encounters a server error, it's usually much easier to simply create a server stub that simulates the error than to actually make our server fail.
>
> **[1:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=69)** Now, it could also be useful when we want to make our app think that, for example, we're logged in without actually having to go through the login flow.
>
> **[1:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=78)** Now, there are other ways to get around this, of course, and you'll generally want to test the login flow with Cypress as well, but test doubles work pretty well in this case.
>
> **[1:30](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=90)** So the next question is how do we create and use test doubles in Cypress?
>
> **[1:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=95)** Well, if you're familiar with the Sinon library, which is a popular library for test doubles, Cypress simply wraps Sinon's stub and Spy APIs so that we can use those in our Cypress tests.
>
> **[1:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=110)** Now, whether or not you're familiar with Sinon, let's take a look at how to use these stubs and spies in our tests.
>
> **[1:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=118)** Cypress provides two main methods, which are cy.stub and cy.spy.
>
> **[2:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=124)** And the way that both of these methods work is this, if we know our application is going to call a certain method on some object, for example, if our application has a data access layer called something like my-api, and this API has a method called getUser that would normally make a request to our server, we can simply import it into our Cypress test, and then we can say, "cy.stub (api, 'getUser')."
>
> **[2:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=153)** And what this will do is it'll replace api.getUser with a fake version of it so that we can do things like, say, .returns.
>
> **[2:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=162)** And inside these parentheses, we can actually make our stub return whatever we want it to.
>
> **[2:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=167)** Now, what this will do is whenever our tests are running and our application calls api.getUser, instead of actually making a network request, or whatever that function would normally do, it will just send back whatever object we pass to it.
>
> **[3:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=184)** In this case, it's just going to be an object with the name property set to Bill.
>
> **[3:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=188)** Now in reality, there's a lot of things that we can do with this cy.stub method, and I'm not going to go into too much detail here, but we can do things like, say, api.getUser resolves this object, which will probably be more realistic since our API calls will usually be asynchronous promises, or if we want to simulate an error, we can just say, ".rejects," and that will make our application behave as if an error occurred when that function was called.
>
> **[3:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=219)** The api.getUser function that is.
>
> **[3:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=221)** Now, that's cy.stub, cy.spy is pretty much the same mechanism as cy.stub, but the main difference is that it doesn't actually replace the methods, it only watches them and provides us with information that allows us to make assertions about things like how many times a function was called and what arguments it was called with, stuff like that.
>
> **[4:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=245)** Now, these methods, cy.stub and cy.spy that I just showed you, are a lot easier if your Cypress tests are in the same package alongside your code.
>
> **[4:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=255)** And since that's not the case with our code currently, I'm not going to demonstrate these things for you.
>
> **[4:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/working-with-test-doubles?u=76281980&t=261)** But feel free to check out the Cypress documentation or play around with these methods yourself and see if you can use it to test a piece of production software or a personal project that you may have laying around.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[End-to-end Testing]] (4), [[Integration Testing]] (2)
> **CLI Commands:** make (7)
> **Code Identifiers:** getuser (6)
> **Analogies:** for example (3), such as (1)
> **Env Vars:** api (2)
> **Definitions:** means that (1), is a  (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)

#### [Challenge 2: Writing your own tests](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests?u=76281980&t=0)** - [Instructor] All right, well now that we've seen a number of other topics in Cyprus, it's time for you to do a challenge.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests?u=76281980&t=12)** Now, in this challenge, you're going to need to use something that I showed you a little bit earlier in order to write some tests and you can actually write these tests in the interactions file.
>
> **[0:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests?u=76281980&t=24)** So let's just go into here, we'll open up interactions.cy.js.
>
> **[0:30](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests?u=76281980&t=30)** I mentioned earlier that there were a number of different events that you could trigger in Cyprus, and I also mentioned that it was possible to test the styles of different things.
>
> **[0:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests?u=76281980&t=41)** So what I would like you to do for this challenge is write a test that makes sure that when the user single clicks on one of these elements in this first box, it turns the background gray.
>
> **[0:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests?u=76281980&t=52)** And just as a side note here, if you inspect that to see what the exact style is there, you'll see that the background color is set to #DDD.
>
> **[1:01](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests?u=76281980&t=61)** So anyway, that's what you're going to need to test for.
>
> **[1:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests?u=76281980&t=64)** And you may recall that the assertion for this is should have CSS.
>
> **[1:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests?u=76281980&t=68)** So that is your challenge just to write a test for that.
>
> **[1:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests?u=76281980&t=71)** So this should take you maybe about 5 to 10 minutes to complete.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests?u=76281980&t=74)** And once you've given it a try, you can move on to the next video where I'll show you the solution.

> [!info]- Semantic Content
>
> **Env Vars:** ddd (1), css (1)
> **Cross-References:** earlier in (1), next video (1)
> **File Paths:** interactions.cy.js (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution 2: Writing your own tests](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=5)** - [Instructor] All right, so hopefully you gave this challenge a try.
>
> **[0:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=8)** Let's take a look at the solution.
>
> **[0:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=10)** All that I did for this solution is I simply added on to this first test case here.
>
> **[0:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=17)** You obviously could have created your own test case.
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=20)** But what I did is before double-clicking that item, I actually single-clicked it and made that assertion there, so let's actually create an alias for this thing since we're accessing it a few times.
>
> **[0:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=32)** What we're going to do is we're going to say, cy.get, and then we're going to say .as, and then we'll say something like, thirdItem, and now we can simply refer to it as thirdItem so what we're going to do is we're going to say, cy.get, and we're going to say that we want to click on the thirdItem, all right?
>
> **[0:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=53)** So that was the first thing, and we don't need that eq(2) thing anymore since we're accessing the thirdItem already, and then we're going to say .click, and the second thing was to actually make sure that that item had the correct CSS style.
>
> **[1:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=69)** So what I'm going to do here is I'm going to say cy.get thirdItem, all right, then we're going to say that it should have.css, and then what we're going to do is we're going to check the background color and make sure that it is the gray color that I showed you there.
>
> **[1:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=92)** So that's all we really have to check there.
>
> **[1:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=95)** So let's go back over to our tests.
>
> **[1:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=97)** And oops, it looks like maybe you ran into this as well, but you actually needed to specify the RGB color.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=103)** So unfortunately, for some reason isn't getting translated into that behind the scenes, even though it says that in the console as you saw.
>
> **[1:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=110)** But let's just fix that and go back and sure enough, that passes.
>
> **[1:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=114)** Now, one last thing that I wanted to show you here that I think is really going to make your life easier from now on is that so far, whenever we've wanted to click on something and then make an assertion, we've been using cy.get twice.
>
> **[2:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=128)** But as a matter of fact, you don't need to do that.
>
> **[2:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=131)** You can simply say, cy.get thirdItem, and then click on it, and then you can say, .should have.css after that, so in other words, you're allowed to chain things like that on the same subject.
>
> **[2:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=146)** So now, we can just change this to something like, in fact, we don't even need to say that again.
>
> **[2:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=151)** We can just say .dbclick after making that first assertion, and then we can go straight to invoke text, right, let's just adjust the indentation there, and we're going to need to remove those semicolons at the end too.
>
> **[2:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=166)** And then we can basically just chain all these together, and now you can see exactly what steps are happening.
>
> **[2:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=172)** So as a further challenge, and by the way, let's just check and make sure that this still works, yep, it looks like everything is still working like before.
>
> **[3:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=180)** So as a further challenge that you can do on your own here, what you might want to do is go through the [[Representational State Transfer (REST)|rest]] of these tests and see how you can condense them like this by chaining the interactions and assertions into one single chain of method calls.
>
> **[3:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests?u=76281980&t=198)** So I'm going to leave that up to you as a challenge to do on your own, but feel free to go through and do that because it's going to make your tests a lot more concise and a lot more readable as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (6)
> **Code Identifiers:** thirditem (6)
> **File Paths:** have.css (2)
> **Env Vars:** css (1), rgb (1)
> **UI Navigation:** click on (2)
> **Cross-References:** as you saw (1)
> **Definitions:** in other words (1)


### 4. Useful Commands

[↑ Back to Table of Contents](#table-of-contents)

#### [The wrap command](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=0)** - [Instructor] Alright, so now that we've taken a look at a lot of the basics of working with Cypress, we're going to move on to some important commands that I think you'll find helpful in constructing more readable and maintainable tests.
>
> **[0:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=14)** So the first command that we're going to talk about is called the wrap command.
>
> **[0:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=19)** You'll see what that looks like in just a minute here.
>
> **[0:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=21)** But the basic purpose of this command is that it makes it easier to work with elements when we access the sort of intermediate results like what we've done in this results.cy.js file, right?
>
> **[0:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=37)** Remember that by calling then and having a callback function, we could actually get access to the element that we were operating on and use that to make sort of a different type of assertion, more chai style assertions than what we would normally do with Cypress.
>
> **[0:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=54)** However, that might not always be what you want, and in many cases you'll actually want to work with this element in the same way as you would've been able to work with it in regular Cypress chains.
>
> **[1:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=67)** So that's what the Cy.wrap command allows us to do.
>
> **[1:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=71)** What I'm going to do is, I'm just going to comment out that line there where we check to see if the text in that element is equal to 15 using a chai style assertion.
>
> **[1:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=81)** And if we wanted to make that same kind of assertion using the Cy.wrap command, here's what that would look like.
>
> **[1:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=88)** We could simply say Cy.wrap, and then we're going to pass that characters left span, right?
>
> **[1:38](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=98)** So characters left span like so.
>
> **[1:41](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=101)** And then what we're going to do is we're going to say .invoketext look familiar?
>
> **[1:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=107)** And then we can say, .should, and we'll say equal and 15.
>
> **[1:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=112)** And that's going to have the same effect as what we had above, except as you can see now, we were able to do that in an identical way to what we've done previously when making Cypress assertions.
>
> **[2:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=125)** So let's go back and just check that this still works.
>
> **[2:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=127)** We're going to go back to results.cy.js and sure enough, everything still works there, even though we now are using Cy.wrap.
>
> **[2:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-wrap-command?u=76281980&t=136)** So that's the basics of how the Cy.wrap command works.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **File Paths:** results.cy.js (2)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [The and command](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=0)** - [Instructor] All right, so the next command that we're going to take a look at with Cypress is a command called and, and really the only purpose of this one is to increase the readability of your tests.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=12)** So let's say, first of all that, and I'm just going to add it onto this results.cy.js file because we're already here.
>
> **[0:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=19)** All right so to demonstrate this, let's say that we want to make more than one assertion about this character's left thing here, right?
>
> **[0:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=26)** Let's say that in addition to checking that its value equals something, we also just want to check to see if it exists explicitly.
>
> **[0:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=35)** So what that would look like if we created a chain here is we could say, Cy.get characters left, blah, blah, blah.
>
> **[0:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=42)** And then we can say, .should exist.
>
> **[0:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=46)** And then we would say, .should equal 15. Alright?
>
> **[0:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=50)** So that's how that would look.
>
> **[0:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=52)** And if we go back and take a look at our test here, we'll see that that passes, of course, because it exists.
>
> **[0:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=58)** You can see that case right there.
>
> **[1:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=60)** But in many cases, people want their tests to be a little bit more readable and maybe read a little bit more like a specification.
>
> **[1:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=68)** So that's where this and command comes in.
>
> **[1:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=71)** Basically, it's just an alias for should, when it's in a chain, we can say, Cy.get blah, blah, blah, should exist and equal 15.
>
> **[1:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-and-command?u=76281980&t=80)** All right So that's the main purpose of this and method is to do the same kind of thing as should, but to be a little bit more readable.

> [!info]- Semantic Content
>
> **File Paths:** results.cy.js (1)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The filter and not commands](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=0)** - [Instructor] All right, well the next Cypress commands that we're going to take a look at are the filter and not commands.
>
> **[0:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=6)** And these allow us, in situations like what we have here in our interactions file, in these situations, they allow us to filter the elements that we've selected.
>
> **[0:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=19)** So it's pretty often that maybe we're selecting a container like what we're doing here, and there's something in that container that we want to test.
>
> **[0:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=28)** So maybe we want to count the number of items in that container or something like that.
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=33)** Well, there's situations where we want to actually filter through those elements, and either decide which ones to keep or explicitly decide that we want to throw one or more of those elements out.
>
> **[0:48](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=48)** So that's what the filter and not commands are for.
>
> **[0:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=50)** And again, I'm just going to use this interactions file to demonstrate this.
>
> **[0:54](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=54)** Let's imagine here that inside one of our test cases or inside one of these boxes anyway, all right, we'll just open up the inspector there and take a look at these things here.
>
> **[1:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=65)** Let's say that in addition to these LI elements inside the UL element, there's also something else that we don't want or maybe there's an LI element with a specific selector.
>
> **[1:18](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=78)** In fact, we can go in and simulate this just by going into our target app.
>
> **[1:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=83)** We're going to open up the example four page here, and then what we're going to do is we're simply going to add our own list item underneath the other two with a special identifier that will enable us to filter it or remove it.
>
> **[1:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=100)** So we're going to say list item, we'll just say something like, we'll give it a class name here in [[React.js|React]], the attribute is called class name because just the plain old attribute name class interferes with the [[JavaScript]] class keyword.
>
> **[1:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=115)** Just sort of a fun fact there.
>
> **[1:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=116)** But, so we're going to say list item, class name equals, and then we'll say something like extra-li.
>
> **[2:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=124)** And inside this thing we're just going to say something like extra.
>
> **[2:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=128)** Okay? Cool.
>
> **[2:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=129)** So what we're going to do now is go back to our test cases and sure enough we see that that extra list item is in there.
>
> **[2:15](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=135)** Well, depending on what we want to test, we might want to just remove that extra list item from our results.
>
> **[2:24](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=144)** So here's what this is going to look like.
>
> **[2:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=145)** We're going to go back to our interactions file and let's say that we want to count the number of options there.
>
> **[2:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=153)** Let's say that we want to assert that there are three options in box one.
>
> **[2:37](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=157)** We'll just say something like, it shows three options in box one.
>
> **[2:44](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=164)** All right, well what we would do here is we would start off by saying, cy.get, we're going to use that same selector here as before.
>
> **[2:52](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=172)** We're going to say that we want all of the LI elements that are direct children of a UL element with this attribute.
>
> **[3:01](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=181)** But as I said, we want to filter those things out.
>
> **[3:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=184)** So what we're going to do here is use the filter command to get only the LI elements that match a certain criteria.
>
> **[3:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=193)** Now in this case, we have specific criteria for each of these.
>
> **[3:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=197)** Let's just take a look at one of them here.
>
> **[3:20](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=200)** Each of these has the class of box 1 list item except for the extra one that we don't want.
>
> **[3:25](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=205)** So in order to make that happen, we could just use a CSS selector.
>
> **[3:30](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=210)** We can say .box-1-list-item, and that's going to give us only things in there that match that selector as well.
>
> **[3:42](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=222)** So now we should be able to say something like .should('have length') and we can check that there are three items with that selector.
>
> **[3:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=231)** Now you could have just joined the selector with the LI in this case, but there are some cases where you can't do that.
>
> **[3:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=237)** So let's just check that that assertion works.
>
> **[4:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=240)** And sure enough that does, shows three options in box one.
>
> **[4:03](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=243)** That's perfectly fine.
>
> **[4:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=244)** Now we could have done sort of the opposite here.
>
> **[4:08](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=248)** And instead of specifying what we do want, we could have specified what we don't want.
>
> **[4:14](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=254)** So let me just show you what that's going to look like.
>
> **[4:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=256)** In this case, we could say that we want all of the LI elements in that selector except for the one with the extra class.
>
> **[4:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=263)** And that would be extra-li, right?
>
> **[4:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=266)** So not does sort of the opposite of filter and it removes any matching things there.
>
> **[4:31](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=271)** So, let's just save that and we should see that that gives us the same result as what we had before.
>
> **[4:38](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/the-filter-and-not-commands?u=76281980&t=278)** So anyway, that is the filter and not commands in Cyprus and how to use them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1), [[JavaScript]] (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Definitions:** is called (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Typing special characters](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=0)** - [Instructor] The next thing that we're going to talk about here is how to type special characters in Cypress.
>
> **[0:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=6)** And to show you what I mean here, let's go to our, let's see here, let's open up our max character input test, which should help us demonstrate this.
>
> **[0:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=17)** And let's say, that in addition to testing, what happens when we type regular characters such as "Hello" into the text box.
>
> **[0:28](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=28)** We also want to test what happens when we type something like the Enter key or Tab.
>
> **[0:34](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=34)** Now, our page currently doesn't have any functionality set up for that, but I'll just show you how to do this in case you want to test, for example, to make sure that hitting Enter submits the page, or something like that.
>
> **[0:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=47)** Well, all you have to do in Cypress when you want to type a special character, is put a pair of curly braces into the string that you're typing, and say "{enter}" or "{tab}" or really anything else.
>
> **[1:04](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=64)** And in fact, there's a full list of these things on Cypress' website, if you go to the Cypress documentation.
>
> **[1:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=70)** So you can see that there's things like {enter}, and actually I put a capital letter there, I should have just made that lowercase, like so.
>
> **[1:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=77)** But you can see that there's the Escape key, left arrow, things like that.
>
> **[1:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=81)** So feel free to look through these.
>
> **[1:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=83)** And again, you can just insert them by adding curly braces.
>
> **[1:27](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=87)** And the only other thing to know is that if you actually need curly braces, like if you want to actually test that you're typing curly braces, you can do that by putting a single curly brace in curly braces, like so.
>
> **[1:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=100)** All right, so that allows you to sort of escape that character and avoid the normal Cypress functionality for it.
>
> **[1:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=107)** Okay, so anyway, that is all you really need to know about that.
>
> **[1:51](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=111)** I'm just going to remove that.
>
> **[1:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=113)** And again, since we don't have that functionality in our app, we're not going to run these tests.
>
> **[1:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/typing-special-characters?u=76281980&t=117)** But that would be how you would type Enter or Tab, or really anything else.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Activating code completion](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980&t=0)** - [Instructor] Alright, well, now that we've seen how to type special characters, the next thing that we're going to take a look at is how to activate code completion on a file by file basis in Cypress projects.
>
> **[0:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980&t=11)** So you may have noticed, depending, of course, on your IDE settings, that when you start typing cy., nothing actually happens, right?
>
> **[0:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980&t=21)** Cypress, in particular, as you may have guessed by now, is a really good candidate for auto completion, because a lot of the time, the chains follow a predictable pattern, and at any given point, it might be really nice to know what your options are when you type that dot.
>
> **[0:40](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980&t=40)** It would be nice to know what we can actually do after this.
>
> **[0:43](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980&t=43)** And that would also be a great way to learn more about Cypress and some of the other commands that we haven't covered here.
>
> **[0:50](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980&t=50)** So in order to do this, all you really have to do is use something called the Cypress triple slash directive.
>
> **[0:57](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980&t=57)** And really what this means is you just have to type three slashes up at the top of your file that you want to turn on the auto completion for.
>
> **[1:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980&t=65)** You're going to say reference types="Cypress".
>
> **[1:10](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980&t=70)** That's going to be sort of this [[HTML]] tag thing.
>
> **[1:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980&t=73)** And once you save it, what you should see is that now whenever you type cy., you can actually see a lot of the options available to you, right?
>
> **[1:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980&t=83)** So you can say cy.get('span'), for example, and then you can say dot, and you can see all of the different things that you can do there.
>
> **[1:32](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/activating-code-completion?u=76281980&t=92)** So that's just a great way to learn more about Cypress, and also it makes your job a lot easier when you're writing out these assertion and interaction chains.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** ide (1), html (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge 3: Writing your own tests](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24930205?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24930205?u=76281980&t=0)** - [Instructor] All right, so now that we've learned a little bit more about some Cypress commands, it's time for you to do another challenge.
>
> **[0:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24930205?u=76281980&t=11)** And in this challenge, your job is going to be to use either the "filter" or "not" command, whichever one you decide is appropriate, in order to select something.
>
> **[0:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24930205?u=76281980&t=21)** So your challenge here is going to be to go into the example-2 page, and you can use the selecting.cy.js file to do this challenge if you want.
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24930205?u=76281980&t=33)** And your job is going to be to select all of the inputs on the page, and then again, using either "filter" or "not", get only the second input once you've done that selection.
>
> **[0:46](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24930205?u=76281980&t=46)** So that is going to be your task.
>
> **[0:49](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24930205?u=76281980&t=49)** Again, select all of the inputs, and then use "filter" or "not" to narrow it down to only the second input.
>
> **[0:55](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24930205?u=76281980&t=55)** So that's your challenge.
>
> **[0:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24930205?u=76281980&t=56)** This challenge should take you no more than five minutes to complete.
>
> **[0:59](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/challenge-writing-your-own-tests-24930205?u=76281980&t=59)** And once you've given it a try, feel free to move on to the next video where I'll show you the solution.

> [!info]- Semantic Content
>
> **File Paths:** selecting.cy.js (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution 3: Writing your own tests](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=0)** - [Instructor] All right, well hopefully you gave this challenge a try.
>
> **[0:07](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=7)** Let's take a look at the solution.
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=9)** So what we're going to do here is, well, what I did anyway is I started off by creating a new test case.
>
> **[0:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=16)** I just said it, and then I said something like, you could really choose anything you wanted here, we'll just say something like displays the second input.
>
> **[0:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=26)** I chose to just check for existence here.
>
> **[0:30](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=30)** And then what I did is I simply said cy.
>
> **[0:34](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=34)** And here I actually said cy.visit with example-3.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=39)** And then the next thing that I did here was I just said cy.get.
>
> **[0:45](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=45)** And I looked for all of the inputs on the page, and then I used the filter method in order to filter it down to only the second one.
>
> **[0:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=56)** So let's just inspect that here.
>
> **[0:58](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=58)** I'm going to select the input, and sure enough, we see that this one has input-last-name.
>
> **[1:03](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=63)** So let's just filter it by data-cy.
>
> **[1:06](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=66)** There we go, data-cy=input-last-name.
>
> **[1:11](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=71)** And that's really all we need to do there.
>
> **[1:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=73)** That filters it down and we should say something like .should'(exist') for that test.
>
> **[1:21](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=81)** Let's just go back and check this out.
>
> **[1:23](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=83)** And sure enough, we see that that test is passing, right?
>
> **[1:26](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=86)** It's pointing right to that element there.
>
> **[1:30](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=90)** Now, you could have used not, in order to make that happen, you could have just said cy.get('input').not and used the data-cy attribute of the first input, which was input-first-name to remove that one.
>
> **[1:47](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=107)** All right, so let's just try that again.
>
> **[1:49](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=109)** And we should see that that test passes just the same, right?
>
> **[1:53](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=113)** Basically in this case, we're saying slightly different things.
>
> **[1:56](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=116)** In this one, with the not function, we're saying that there should be at least one other input besides the input-first-name input.
>
> **[2:05](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=125)** Whereas this one, we're actually finding all of the input-last-name inputs and saying that there should be at least one of them.
>
> **[2:13](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=133)** That's what this exist method is saying.
>
> **[2:17](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=137)** So anyway, that is the solution to the challenge.
>
> **[2:19](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/solution-writing-your-own-tests-24928747?u=76281980&t=139)** Hopefully you were able to figure that out, and congratulations if you were.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with Cypress.io and JavaScript](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/next-steps-with-cypress-io-and-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/next-steps-with-cypress-io-and-javascript?u=76281980&t=0)** - Well, congratulations, you've reached the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/next-steps-with-cypress-io-and-javascript?u=76281980&t=3)** We have covered a lot of ground in this course, and the first thing I want to do is thank you for joining me on this journey.
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/next-steps-with-cypress-io-and-javascript?u=76281980&t=9)** By now, you should be familiar with the basics of Cyprus, as well as some of the more advanced features of this powerful tool.
>
> **[0:16](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/next-steps-with-cypress-io-and-javascript?u=76281980&t=16)** Now, if you have questions or want to share your progress, feel free to connect with me on [[LinkedIn]] or follow me on X, formerly Twitter, where I regularly post [[Software Development]] related tips and tutorials.
>
> **[0:27](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/next-steps-with-cypress-io-and-javascript?u=76281980&t=27)** And finally, if you're looking for other courses, I would highly recommend checking out some of my other courses in the LinkedIn Learning Library.
>
> **[0:35](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/next-steps-with-cypress-io-and-javascript?u=76281980&t=35)** So keep coding, keep learning, and I can't wait to see what you build.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-23936013/next-steps-with-cypress-io-and-javascript?u=76281980&t=39)** Best of luck in your projects, and I hope to see you in another course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Software Development]] (1)
> **Speakers:** - well (1)


## Instructor

- [[Shaun Wassell]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/end-to-end-javascript-testing-with-cypressio-4253121/codespaces)

## Skills Covered

- Cypress.io
- Web Development
- Front-End Development
- JavaScript
- End-to-end Testing

## Path Context

### In [[Advance Your JavaScript Skills]]
← [[Learning JavaScript Debugging]] | **9 of 10** | [[JavaScript- Modern Browser APIs]] →

## Appears In

- [[Advance Your JavaScript Skills]]

## Related Courses

_Courses sharing skills:_

- [[Learning Functional Programming with JavaScript ES6+]] — Web Development, Front-End Development, JavaScript
- [[Building Modern Projects with React]] — Web Development, Front-End Development, JavaScript
- [[CSS- Advanced Layouts with Grid]] — Web Development, Front-End Development
- [[jQuery Essential Training]] — Web Development, Front-End Development
- [[HTML Essential Training]] — Web Development, Front-End Development

---

[↑ Back to top](#)