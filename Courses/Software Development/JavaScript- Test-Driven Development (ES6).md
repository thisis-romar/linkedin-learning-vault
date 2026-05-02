---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: javascript-test-driven-development-es6
url: "https://www.linkedin.com/learning/javascript-test-driven-development-es6"
duration_minutes: 140
duration: 2h 20m
level: Advanced
updated: 11/21/2019
learners: 4087
skills:
  - Test-Driven Development
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHXKMp0rVD01A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1574359332875?e=2147483647&amp;v=beta&amp;t=GIcScORNhcUX6tJ7B-pS-WtJ8i0HBGrn4gFrv12yvdg"
linkedin_topic: Software Development
learning_paths:
  - '[[Advance Your JavaScript Skills]]'
prev_courses:
  - '[[JavaScript- Best Practices for Data]]'
next_courses:
  - '[[ESLint- Integrating with Your Workflow]]'
path_nav: '[{"path":"Advance Your JavaScript Skills","position":3,"total":10,"prev":"JavaScript- Best Practices for Data","next":"ESLint- Integrating with Your Workflow"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/test-driven-development
  - skill/javascript
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Test-Driven%20Development%20(ES6).md)

![JavaScript: Test-Driven Development (ES6)](https://media.licdn.com/dms/image/v2/C4E0DAQHXKMp0rVD01A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1574359332875?e=2147483647&amp;v=beta&amp;t=GIcScORNhcUX6tJ7B-pS-WtJ8i0HBGrn4gFrv12yvdg)

# JavaScript: Test-Driven Development (ES6)

> TDD is one of the most hotly discussed subjects in the software development world. Even the most carefully constructed applications grow to the point where debugging and ensuring quality becomes difficult. Test-driven development (TDD) helps with this tremendously by ensuring that all parts of your application are covered by tests. In this course, Shaun Wassell explores the foundational techniques

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-test-driven-development-es6) | 2h 20m | Advanced | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Intro video](#intro-video)
  - [What you should know](#what-you-should-know)
  - [What this course covers](#what-this-course-covers)
  - [Software installation](#software-installation)
- [**1. Test-Driven Development (TDD) Basics**](#1-test-driven-development-tdd-basics) (6 videos)
  - [What is TDD?](#what-is-tdd)
  - [Advantages of TDD](#advantages-of-tdd)
  - [Disadvantages of TDD](#disadvantages-of-tdd)
  - [The basic TDD cycle](#the-basic-tdd-cycle)
  - [Writing effective tests](#writing-effective-tests)
  - [The three different types of tests](#the-three-different-types-of-tests)
- [**2. Writing Unit Tests**](#2-writing-unit-tests) (9 videos)
  - [The purpose of unit testing](#the-purpose-of-unit-testing)
  - [JavaScript frameworks for unit testing](#javascript-frameworks-for-unit-testing)
  - [Writing and running basic tests](#writing-and-running-basic-tests)
  - [Testing basic functions](#testing-basic-functions)
  - [Testing asynchronous functions](#testing-asynchronous-functions)
  - [Modifying existing functionality](#modifying-existing-functionality)
  - [To mock or not to mock?](#to-mock-or-not-to-mock)
  - [Challenge: Given criteria, write unit tests](#challenge-given-criteria-write-unit-tests)
  - [Solution: Given criteria, write unit tests](#solution-given-criteria-write-unit-tests)
- [**3. Writing Integration Tests**](#3-writing-integration-tests) (6 videos)
  - [Introduction to integration testing](#introduction-to-integration-testing)
  - [How do integration tests fit into TDD?](#how-do-integration-tests-fit-into-tdd)
  - [Test doubles](#test-doubles)
  - [When shouldn't I use test doubles?](#when-shouldnt-i-use-test-doubles)
  - [The two categories of integration tests](#the-two-categories-of-integration-tests)
  - [JavaScript libraries For integration testing](#javascript-libraries-for-integration-testing)
- [**4. Writing End-to-End Tests**](#4-writing-end-to-end-tests) (4 videos)
  - [Integration testing in practice](#integration-testing-in-practice)
  - [Testing Node servers with SuperTest](#testing-node-servers-with-supertest)
  - [Testing an endpoint: The basic approach](#testing-an-endpoint-the-basic-approach)
  - [Creating a Mocha setup file](#creating-a-mocha-setup-file)
- [**5. Improving Your TDD Workflow**](#5-improving-your-tdd-workflow) (6 videos)
  - [Testing database communication: Basic setup](#testing-database-communication-basic-setup)
  - [Database setup and teardown in tests](#database-setup-and-teardown-in-tests)
  - [Ignoring object properties in Mocha](#ignoring-object-properties-in-mocha)
  - [Using environment variables in testing](#using-environment-variables-in-testing)
  - [Creating test helpers](#creating-test-helpers)
  - [Resetting the database between tests](#resetting-the-database-between-tests)
- [**6. A Real-World Example**](#6-a-real-world-example) (6 videos)
  - [Creating test-doubles with Sinon](#creating-test-doubles-with-sinon)
  - [Testing a Node endpoint with SuperTest](#testing-a-node-endpoint-with-supertest)
  - [Implementing a server endpoint](#implementing-a-server-endpoint)
  - [Testing a server's error path](#testing-a-servers-error-path)
  - [Challenge: Testing "Not Found"](#challenge-testing-not-found)
  - [Solution: Testing "Not Found"](#solution-testing-not-found)
- [**7. Running Tests**](#7-running-tests) (2 videos)
  - [Run tests automatically](#run-tests-automatically)
  - [Checking test coverage with NYC](#checking-test-coverage-with-nyc)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Intro video](https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=76281980&t=0)** - [Shaun] Test Driven Development has become an extremely popular topic lately, with the mere mention of it evoking either fierce loyalty or intense hatred from many who have worked with it.
>
> **[0:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=76281980&t=9)** And that's not an exaggeration.
>
> **[0:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=76281980&t=11)** Test Driven Development continues to be one of the most hotly debated subjects in the [[Software Development]] world, with about as many different opinions and techniques as there are practitioners.
>
> **[0:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=76281980&t=20)** But what is TDD anyway and what about it inspires such strong feelings in developers?
>
> **[0:25](https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=76281980&t=25)** Well, that's one of the many things we'll be discussing here.
>
> **[0:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=76281980&t=28)** In this course, we'll start off with a basic discussion of what TDD is, along with its strengths and weaknesses and then move on to talk about how to write effective tests and the different kinds of tests we can use in our code base.
>
> **[0:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=76281980&t=40)** And finally, we'll move on to some examples to show you how TDD can be used to build real-world applications.
>
> **[0:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=76281980&t=46)** So who am I and why would I want to make a course on Test Driven Development?
>
> **[0:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=76281980&t=50)** My name is Shaun Wassell, and I'm a Senior [[JavaScript]] and [[React.js|React]] Developer, as well as a regular practitioner of TDD in my own work.
>
> **[0:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=76281980&t=58)** Join me in my course to learn Test Driven Development with JavaScript ES6 and see what it can do for you and your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Software Development]] (1), [[React.js|React]] (1)
> **Env Vars:** tdd (4), es6 (1)
> **CLI Commands:** make (1)
> **Speakers:** - [shaun] (1)

#### [What you should know](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-you-should-know?u=76281980&t=0)** - [Instructor] In order for you to get the most out of this course, there are a few things that it would be helpful for you to know.
>
> **[0:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-you-should-know?u=76281980&t=6)** First of all, you should have a solid foundation in [[JavaScript]] syntax, in particular the modern ES6 syntax.
>
> **[0:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-you-should-know?u=76281980&t=12)** If this isn't the case, don't let that keep you from watching this course, but also keep in mind that you might have to stop it every now and then to look up something that I'm doing.
>
> **[0:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-you-should-know?u=76281980&t=20)** It would also be helpful for you to have worked with a backend JavaScript framework, such as Express, as I'll be using Express to give you examples of how to do [[Test-Driven Development]] to develop real-world applications.
>
> **[0:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-you-should-know?u=76281980&t=32)** And the same goes for this.
>
> **[0:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-you-should-know?u=76281980&t=34)** If you aren't super familiar with Express, don't let that stop you.
>
> **[0:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-you-should-know?u=76281980&t=37)** But also, don't be afraid to pause the course and familiarize yourself with something you see me doing if you're confused.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Test-Driven Development]] (1)
> **Env Vars:** es6 (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [What this course covers](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980&t=0)** - [Instructor] The world of [[Test-Driven Development]] is so incredibly vast that it's really hard to imagine trying to fit it all into a few hours.
>
> **[0:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980&t=7)** And for this reason, that's not what I aim to do in this course.
>
> **[0:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980&t=10)** My hope with this course is to give you a solid introduction to the theory and practice of test-driven development.
>
> **[0:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980&t=16)** The [[Representational State Transfer (REST)|rest]], the real mastery of test-driven development, will only come as the result of applying the basic concepts I cover in this course in your daily programming over and over again, slowly but surely deepening your understanding of what works for you and what doesn't.
>
> **[0:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980&t=32)** So in other words, TDD is like so many other things in life.
>
> **[0:35](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980&t=35)** It takes only a few hours to learn the basic concepts, but it takes significantly longer to master those basic concepts and learn the true implications and possibilities that come along with them.
>
> **[0:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980&t=46)** With that being said, although I haven't even tried to make this a comprehensive guide to test-driven development, I have done my absolute best to get you well on your way to becoming a proficient test-driven developer.
>
> **[0:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980&t=58)** Throughout this course, you'll learn both the basic theory and practice of TDD, as well as see plenty of examples of how TDD is done in the real world.
>
> **[1:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980&t=66)** I've done my best to include many of the things that tripped me up when I was first starting TDD, and make sure you don't run into them as well.
>
> **[1:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980&t=74)** This course will start off with a discussion of the basics of TDD, and then move on to the different types of tests and how to write them effectively.
>
> **[1:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980&t=82)** And finally, we'll go through an in-depth real world example of using TDD to develop pieces of a node server so that you can see what TDD looks like when developing a server and communicating with a database.
>
> **[1:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-this-course-covers?u=76281980&t=93)** So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** tdd (7)
> **CLI Commands:** make (2), node (1)
> **Definitions:** in other words (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Software installation](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=0)** - [Instructor] So let's install the tools necessary for this course.
>
> **[0:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=3)** [[Node.js]] will be really important to us in this course, as well as [[MongoDB]].
>
> **[0:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=8)** So if you don't already have Node.js installed, you can download the installer from Node.js's website, www.[nodejs.org](https://nodejs.org).
>
> **[0:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=15)** And once you've downloaded this, just double click it and it should take you through the steps required for installation.
>
> **[0:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=21)** If you're using [[Windows]] or a Unix distribution, the steps might be a little different, but Node.js's website has instructions for all of these.
>
> **[0:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=29)** The next step is to make sure you have the right versions of Node and [[npm]] installed, and you can find these by opening up a terminal and typing node -v and npm -v.
>
> **[0:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=40)** So these are the versions I'm using.
>
> **[0:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=42)** If the NPM and Node version on your computer are higher than mine, don't worry about it.
>
> **[0:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=45)** Everything should still run correctly.
>
> **[0:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=47)** But I do highly recommend having at least these versions, here, for this course.
>
> **[0:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=51)** So once you've done that, we'll also need MongoDB installed for some of the examples later on in the course.
>
> **[0:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=57)** If you don't already have it on your computer, you can install it by following the directions on MongoDBs website.
>
> **[1:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/software-installation?u=76281980&t=63)** And once you've done that, feel free to continue on with the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (4), [[npm]] (3), [[MongoDB]] (2), [[Windows]] (1)
> **CLI Commands:** node (7), npm (3), make (1), find (1)
> **File Paths:** node.js (4)
> **Prerequisites:** install (2), make sure you have (1)
> **Env Vars:** npm (2)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Tools:** terminal (1)
> **Exercise Files:** download the (1)


### 1. Test-Driven Development (TDD) Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [What is TDD?](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=0)** - [Instructor] So the first thing that you're probably wondering about [[Test-Driven Development]] is, "What exactly is it?"
>
> **[0:05](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=5)** The answer to this question is so simple that it might be hard to imagine that test-driven development is one of the most controversial concepts in the [[Software Development]] field.
>
> **[0:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=13)** Test-driven development means that you write tests for your production code before you've actually written the production code.
>
> **[0:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=20)** And that's it, nothing more, nothing less.
>
> **[0:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=22)** TDD is exactly what the name implies.
>
> **[0:25](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=25)** Software development where tests are written before the actual software.
>
> **[0:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=29)** This means, for example, that if we were writing a function that converts inches to centimeters we'd write a test that calls our function with a series of different measurements and tests the output of our function before we've even written our inches to centimeters function.
>
> **[0:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=43)** And only then, one we have our tests, do we actually write the code to make those tests pass.
>
> **[0:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=48)** This contrasts with, for example, writing the tests for your software after the production code has already been written, or, as is most often the case, just not testing your software at all.
>
> **[0:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=58)** At first glance, test-driven development might seem like a strange way to write software.
>
> **[1:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=63)** After all, what's wrong with writing our tests after we've written the production code?
>
> **[1:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=67)** Well, let's put it this way.
>
> **[1:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=69)** Tests exist to ensure software quality and writing the tests first ensures that the tests exist in the first place.
>
> **[1:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=76)** It's no secret that the tests aren't necessarily the most fun part of your code to write, and writing them first, before any production code has been written, before any management has the chance to see your production code and insists that it's good enough and that you don't need tests, writing the tests first ensure that your code base is well-tested from the very beginning, instead of pushing the task of writing tests off into the distant future, which, in most cases, never comes.
>
> **[1:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=102)** So then, as we continue on in our exploration of test-driven development, there are a few things that you should keep in mind.
>
> **[1:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=108)** The first is that the ultimate goal of test-driven development is software quality.
>
> **[1:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=112)** Without this goal in mind, test-driven development has very little meaning and probably won't help you that much.
>
> **[1:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=119)** Throughout your career in software development, you'll likely meet many people who have lost sight of this goal and complain about having to write tests all the time, or who follow the test-driven development rules mechanically, but have no idea why they're doing it.
>
> **[2:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=131)** Obviously, neither of these viewpoints is very helpful.
>
> **[2:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=134)** In my experience, the best way to ensure that you keep doing test-driven development and actually enjoy it, is to keep in mind that each test you write is meant to be a step toward ensuring that your code base is robust and maintainable.
>
> **[2:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=146)** The second thing to keep in mind is that it's possible to write both good tests and bad tests.
>
> **[2:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=152)** We'll go into much more detail about this in later videos, but it's an important thing to keep in mind.
>
> **[2:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=157)** Just because all your code is supposedly covered by tests doesn't mean that those tests are actually helpful.
>
> **[2:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=163)** In many cases, it can be like somebody that goes to the gym every single day, but while they're there, they don't actually do anything.
>
> **[2:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=170)** In the same way, it's possible to have tests that appear to be doing something and appear to cover all your production code, but, in fact, they really don't do that much.
>
> **[2:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=177)** We'll talk about how to avoid this later on.
>
> **[3:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=180)** And the third and final thing to keep in mind is that, as I mentioned before, test-driven development is a pretty controversial topic in the software development field.
>
> **[3:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=189)** While, at the end of the day, everyone's goal should be to ensure code quality, a lot of people have their own ideas about how best to accomplish this goal, and most will defend their view very passionately.
>
> **[3:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=199)** The viewpoints you'll see in later videos, which I'll present as facts, are really my own point of view regarding TDD, and I'm sure you'll find people who will disagree with them.
>
> **[3:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=207)** That's just the way TDD is.
>
> **[3:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/what-is-tdd?u=76281980&t=209)** Anyway, that's just something to keep in mind as you continue with the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (10), [[Software Development]] (4)
> **Warnings:** keep in mind (6)
> **Env Vars:** tdd (3)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Advantages of TDD](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=0)** - [Instructor] So now that we know what TDD is and some of the basic concepts behind it, let's take a look at what some of the advantages and disadvantages of TDD are.
>
> **[0:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=9)** We'll start with the advantages.
>
> **[0:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=11)** Besides ensuring code quality which, as we discussed in a previous video, is the ultimate goal of [[Test-Driven Development]], there are several other big advantages of writing your tests first.
>
> **[0:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=21)** First of all, a big benefit of TDD is that it forces us to clarify our thinking before writing production code.
>
> **[0:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=28)** Personally, it used to happen to me quite frequently, that I'd spend time writing a big chunk of code only to find, once I'd finished it, that I hadn't understood the requirements before starting and had to go back and write it all over again.
>
> **[0:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=40)** With test-driven development, we're forced to clarify our understanding of the problem at hand before we start coding.
>
> **[0:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=47)** On a similar token, TDD provides a way for members of a [[Software Development]] team to communicate their intentions with each other.
>
> **[0:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=54)** It happens very often that a programmer might come across a piece of code written by someone else.
>
> **[0:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=59)** Maybe it's an old piece of code and maybe it's even written by somebody who no longer works at the company, and has no idea what it does or why it's written a certain way.
>
> **[1:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=69)** One way to prevent this scenario is to add comments to your code.
>
> **[1:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=72)** However, comments are prone to code rot.
>
> **[1:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=75)** In other words, if the code that the comment is referring to changes, there's no guarantee that the comments will be changed along with it.
>
> **[1:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=82)** The programmer making the changes might just ignore the comments altogether.
>
> **[1:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=86)** And this leaves your code littered with old comments and means that any new comments will probably be ignored as well, since no one can tell if they're even still relevant or not.
>
> **[1:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=96)** Tests, on the other hand, provide a concrete medium to express what your code is supposed to do, and the different situations where it should produce a certain output.
>
> **[1:44](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=104)** And if the code underneath a given test changes to the point where the test is no longer relevant, then the test will break, which forces the developer to bring the test up to date.
>
> **[1:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=113)** And this keeps all of the tests in the code base clean and relevant.
>
> **[1:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=117)** Another advantage of TDD is that quite often it actually improves the structure and organization of the production code that we write.
>
> **[2:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=124)** Developing our codes so that it's easy to test requires us to think more carefully about how our code is arranged and forces us to split up large chunks of code, such as this one which can be very difficult to test, into smaller, more testable, chunks.
>
> **[2:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=140)** This generally means that our code becomes what's called "loosely coupled."
>
> **[2:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=144)** Meaning that basically it resembles many small, modular, independent chunks that work together, instead of one large, interconnected web of spaghetti code.
>
> **[2:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=153)** A good rule of thumb is that code that's easier to test generally has better structure.
>
> **[2:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=158)** This isn't always true of course, but it's a good heuristic to follow.
>
> **[2:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=162)** And lastly, another advantage of test-driven development, and testing in general, is that it allow us and other developers to make changes to our code without worrying about accidentally breaking something.
>
> **[2:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=174)** Tests provide developers with a quick way to tell if their changes broke anything.
>
> **[2:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=178)** If all the tests still pass, then everything's okay.
>
> **[3:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/advantages-of-tdd?u=76281980&t=181)** In other words, every time a developer makes changes, they don't have to manually click through the entire application to make sure everything still works correctly since the tests will tell them if something's broken.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (3), [[Software Development]] (1)
> **Env Vars:** tdd (5)
> **Definitions:** in other words (2), means that (2)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** we discussed (1), previous video (1)
> **Analogies:** such as (1)
> **Best Practices:** rule of thumb (1)
> **Prerequisites:** before we start (1)

#### [Disadvantages of TDD](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=0)** - [Instructor] Now that we've covered the major advantages of TDD, it's only fair to talk a little bit about some of the disadvantages.
>
> **[0:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=6)** The most common complaint that people have when it comes to TDD is that it takes a lot more time than just writing code without tests and this is absolutely true, at least at first.
>
> **[0:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=16)** The way I look at it is this.
>
> **[0:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=18)** In the same way that spending a little money to get your car's oil changed regularly saves you a lot of money later on because of the damage it prevents, spending a little extra time to write tests for your code will save you a lot of time later on when the code base becomes larger and larger and bugs become harder and harder to track down.
>
> **[0:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=36)** Ultimately, the choice comes down to this.
>
> **[0:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=38)** Would you rather spend time now writing tests or spend time later on tracking down more and more bugs?
>
> **[0:44](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=44)** And to that end, another potential downside of TDD, which is more of a company culture thing than shortcoming of TDD itself, is that it might be a hard concept to get management on board with.
>
> **[0:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=55)** If you work at a company where the managers aren't programmers themselves and yet have a habit of scrutinizing how software developers do their jobs, it might be hard to convince them that it's a good idea to take twice as long to write code just for the sake of tests.
>
> **[1:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=68)** The response to this attitude should be the same as what I just mentioned.
>
> **[1:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=71)** Wouldn't they rather sacrifice a little time now for the sake of saving a lot of time later?
>
> **[1:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=76)** And their response obviously will depend on them, but it's worth a try.
>
> **[1:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=80)** And the third and most deadly potential downside of TDD is something that you should definitely be aware of as you adopt TDD into your own workflow and that's this.
>
> **[1:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=89)** It is possible to write bad tests.
>
> **[1:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=91)** Now at best, writing bad tests is a waste of time and at worst, writing tests the wrong way can completely undermine many of the advantages of TDD and provide developers with a false sense of security.
>
> **[1:44](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=104)** We'll go into detail later on about what constitutes a good test or a bad test, but for now just keep in mind that it is possible to write bad tests.
>
> **[1:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/disadvantages-of-tdd?u=76281980&t=112)** So ultimately, there's strong evidence that the advantages of TDD, when done correctly of course, outweigh the disadvantages and fortunately, many companies are convinced of this enough to adopt tester and development wholeheartedly.

> [!info]- Semantic Content
>
> **Env Vars:** tdd (8)
> **Warnings:** be aware (1), keep in mind (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The basic TDD cycle](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=0)** - [Instructor] The TDD process, as practiced by most programmers, follows a very simple series of steps that are repeated over and over again as we write our code.
>
> **[0:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=8)** And these steps are one: we write a failing test; two: we write production code but only enough to make the failing test pass; and three: we refactor the code we wrote.
>
> **[0:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=21)** And that's all there is to it.
>
> **[0:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=22)** We keep going through each of these steps for each piece of functionality we want to implement.
>
> **[0:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=27)** Let's go through each of these steps in a little more detail.
>
> **[0:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=31)** The first step is to write a failing test.
>
> **[0:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=33)** This is often one of the things that takes the longest for people to get used to when adopting TDD.
>
> **[0:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=38)** We're not allowed to write any production code until you have a failing test.
>
> **[0:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=43)** The reason for this is that it forces us to define the specific functionality we want to implement, instead of just jumping right into writing production code.
>
> **[0:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=52)** So for example, if we have a button and we want to make something happen when the button's clicked, we first write a test that clicks the button and checks to see if the desired result occurs, and then, we actually implement the button.
>
> **[1:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=64)** The second step is to make the test we just wrote pass by writing production code.
>
> **[1:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=69)** The key here is that we're only allowed to write just enough production code to make the test pass, nothing more.
>
> **[1:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=76)** In other words, the moment we've made our test go from red to green, we have to stop adding functionality.
>
> **[1:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=82)** The reason for this is that it prevents untested code from slipping into our code base.
>
> **[1:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=87)** The moment we add more code than is covered by our tests, we introduce the potential for bugs to slip in since by the simple fact that our tests passed without this code, the integrity of whatever extra code we're adding won't be tracked.
>
> **[1:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=102)** Another thing to keep in mind during this step is that you don't need to worry too much about finding the optimal solution right off the bat.
>
> **[1:49](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=109)** That's covered in the next step, which is refactor the code you wrote.
>
> **[1:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=113)** Now that we've got production code and the passing test to back it up, we can think about how to implement our code a little more efficiently or cleanly.
>
> **[2:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=122)** If we were writing a sort function for example, this would be the time where we do a little research on efficient sorting [[Algorithms]] and modify our code to use those, while making sure our test still passes like before.
>
> **[2:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=134)** This is also a very good time to clean up our code a little bit, reorganizing it to make it more readable or more modular.
>
> **[2:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=141)** And once we've refactored, we start the cycle over again by writing another failing test.
>
> **[2:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=146)** This cycle continues until we have a large fully tested app.
>
> **[2:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=151)** There's a name for this system we just described, and it's called red, green, refactor; red being the failing test, green being when we write code to make the test pass, and refactor being when we optimize the code we just wrote.
>
> **[2:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-basic-tdd-cycle?u=76281980&t=165)** And red, green, refactor [[Forms]] the heart of [[Test-Driven Development]], and we'll see plenty of examples of it throughout the [[Representational State Transfer (REST)|rest]] of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Forms]] (1), [[Test-Driven Development]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (6)
> **Env Vars:** tdd (2)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Definitions:** in other words (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Writing effective tests](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=0)** - So I mentioned in a previous video, that it's possible to write both good and bad tests.
>
> **[0:05](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=5)** And it's definitely worth looking at how to write good tests, since this can often make the difference between TDD being a fantastic addition to your work flow, or just a waste of time.
>
> **[0:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=14)** In his article, "TDD the Right Way," blogger Eric Elliott defines a mnemonic that I personally have found to be very helpful to keep in mind when writing tests.
>
> **[0:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=23)** The mnemonic he gives is RITE.
>
> **[0:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=24)** R-I-T-E Good tests should be: Readable.
>
> **[0:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=28)** Isolated.
>
> **[0:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=29)** Thorough.
>
> **[0:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=31)** And Explicit.
>
> **[0:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=32)** Let's go through each of these to see how we can ensure that out tests are well-written.
>
> **[0:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=36)** The first rule is that our tests must be readable.
>
> **[0:39](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=39)** I mentioned in a previous video, that one of the key benefits of TDD is that tests provide developers working on a team with a nice concrete way of communicating what their intentions are, with a given piece of production code.
>
> **[0:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=51)** For example, if we're writing a function that should return zero when the argument we pass is null or defined.
>
> **[0:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=56)** We should have a test that makes it clear that this is an intention feature of our function, and not just a random decision.
>
> **[1:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=63)** Otherwise, later on when another developer is writing code and accidentally does something that makes your test fail, they'll have no idea what you were trying to test, and a very likely outcome is that they'll simply delete your test and a bug will get introduced.
>
> **[1:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=76)** For this reason, tests must be more readable than the code they cover.
>
> **[1:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=81)** In particular, our test should at least make it clear what the actual behavior of our code is, that the expected behavior of our code is, and why.
>
> **[1:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=90)** We'll see some more examples of this in later videos.
>
> **[1:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=93)** For now, just keep in mind that just as its important to make production code as readable as possible, its also important to make tests as readable as possible too.
>
> **[1:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=102)** The next rule is that our tests must be isolated.
>
> **[1:44](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=104)** And this means that the code in one test can't affect the results of any of our other tests.
>
> **[1:49](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=109)** In particular, if there's any set up or tear down that we have to do to test a certain piece of functionality, we have to make sure that this set up doesn't carry over into our other tests.
>
> **[1:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=119)** Otherwise, what can happen is a test might fail, and the real cause of the failure could in fact be another test.
>
> **[2:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=126)** We'll see later on how to make sure our tests stay isolated.
>
> **[2:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=130)** The next rule is that our tests must be thorough.
>
> **[2:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=133)** This means that we need to remember to test our code not just the generic expected inputs, but also with the unexpected or edge case inputs as well.
>
> **[2:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=142)** For example, if you have a function that takes the result of a network operation as an argument, you need to not only test that the function returns the desired result when the network call was successful, but also when it fails.
>
> **[2:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=154)** Or if you're testing a sort function, its great if it works when you pass in "3, 2, 1," but what about when you pass in "2, 3, 1?"
>
> **[2:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=161)** What about an array of all ones?
>
> **[2:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=163)** What about a larger array of numbers?
>
> **[2:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=165)** What about an empty array?
>
> **[2:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=167)** And so on.
>
> **[2:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=168)** The point here is that it is important to write tests that makes sure our code works well under a wide variety of situations.
>
> **[2:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=175)** And the fourth and final rule, is that tests need to be explicit.
>
> **[2:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=179)** This is somewhat related to our isolated rule.
>
> **[3:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=181)** It means that all the information required to reproduce the results of our test, is readily accessible to whoever is looking at our test.
>
> **[3:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=189)** In particular, there should be no shared state between our components, nothing hidden, everything involved in getting to the final result should be clear and obvious.
>
> **[3:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=198)** If we're testing a to-do list for example, and we want to see how it behaves when several items are added, our tests should contain all the set up required with explicit calls to whatever function adds a to-do list item.
>
> **[3:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=211)** Anyone looking at your test should be able to immediately tell you what steps to follow to reproduce a given result.
>
> **[3:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=217)** Well, those are the four main rules to writing good tests, and ensuring that our TDD efforts have a positive impact on our code base.
>
> **[3:44](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-effective-tests?u=76281980&t=224)** We'll get plenty of experience with these concepts later on.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6)
> **Env Vars:** tdd (4), rite (1)
> **Definitions:** means that (3), is an  (1), is a  (1)
> **Prerequisites:** set up (3), required to (1)
> **Analogies:** for example (3)
> **Cross-References:** previous video (2)
> **Warnings:** keep in mind (2)
> **Best Practices:** remember to (1)

#### [The three different types of tests](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=0)** - [Instructor] Up until now we've been talking about tests as if they were all pretty much the same, but in fact there are actually three main types of tests depending on what level of our application we're testing.
>
> **[0:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=12)** I'll show you what I mean.
>
> **[0:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=14)** The first type of test is called a unit test.
>
> **[0:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=16)** These are the kind of tests that you'll spend most of your time writing as a developer.
>
> **[0:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=21)** They test very specific low level pieces of functionality in our code base.
>
> **[0:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=26)** Oftentimes, this functionality that we test with unit tests is stuff that the end user will never really notice or think about directly.
>
> **[0:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=34)** Usually, it'll be stuff like wanting to test that a function returns the correct value given a certain input.
>
> **[0:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=41)** The next level up, we have what are called integration tests.
>
> **[0:44](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=44)** While [[Unit Testing]] covers the small, individual pieces of functionality in our code base, [[Integration Testing]] makes sure that these individual pieces work together correctly and this might be something like testing that your app communicates correctly with a database or an API.
>
> **[1:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=60)** And the third type of test is called an end-to-end test and the goal of [[End-to-end Testing]] is to make sure that the entire application is working as expected from the viewpoint of a user.
>
> **[1:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=71)** You see, the user isn't directly concerned with the smaller pieces of functionality which are covered by unit and integration tests.
>
> **[1:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=79)** All they really care about is that on the surface the app works as expected.
>
> **[1:25](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=85)** When you go on a website to buy something and you click the Buy button for example, you don't really think about all the code that's executing behind the scenes or the network calls that are being made.
>
> **[1:35](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=95)** All that matters to you is that when you click the Buy button, it takes you to the Checkout page.
>
> **[1:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=100)** In order to test this kind of functionality for end-to-end testing, we use tools that allow us to simulate an actual web browser and these are tools like [[Selenium]] or [[[Cypress.io]]](https://Cypress.io), which help us to test the actual [[User Experience (UX)|user experience]] instead of the underlying code.
>
> **[1:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=115)** So now that we know the three basic types of tests, the actual amount of tests that you'll write depends on the category and generally the vast majority of tests that you'll write as a developer will be unit tests.
>
> **[2:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=128)** Since each unit test covers only a very small piece of functionality, it makes sense that we would need a lot more in order to cover our code base to a reasonable level.
>
> **[2:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=138)** Developers generally write a moderate number of integration tests and then a relatively small number of end-to-end tests and actually, in many companies end-to-end testing is done only by the QA team.
>
> **[2:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-three-different-types-of-tests?u=76281980&t=149)** In this course we'll only be covering unit and integration tests in further detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[End-to-end Testing]] (3), [[Unit Testing]] (1), [[Integration Testing]] (1), [[Selenium]] (1), [[Cypress.io]] (1)
> **Definitions:** is called (2)
> **CLI Commands:** make (1)
> **URLs:** [cypress.io](https://cypress.io) (1)
> **Env Vars:** api (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Writing Unit Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [The purpose of unit testing](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=0)** - [Instructor] So, now that we've covered the three main types of tests in TDD, we're going to look in a lot more detail at the most granular level of testing, [[Unit Testing]].
>
> **[0:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=8)** As I mentioned before, the purpose of unit tests is to test the smallest possible chunks of functionality in our production code.
>
> **[0:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=15)** In most cases what this will mean is writing tests for individual functions that check whether given a specific set of inputs, the test produces the correct output.
>
> **[0:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=24)** So, for example, if we wanted to write an addition function, not that we would ever actually have to do this but just for the sake of example, we would want to test that given the inputs, say four and five, the function produces the output nine.
>
> **[0:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=36)** We also want to make sure that the tests we write check our functionality with diverse enough inputs to ensure that they actually test what they're supposed to test.
>
> **[0:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=45)** And here's what I mean by that.
>
> **[0:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=47)** Imagine that we only tested our addition function with the inputs two and two, to see that our function gives us the output four, well, that's great until we discover that we can also make this test pass by multiplying our arguments together, which is not what we want at all.
>
> **[1:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=62)** So, in general, we want to make sure that our tests cover a representative range of possible inputs.
>
> **[1:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=68)** Representative range here is sort of a fuzzy term but here's a rule of thumb I like to follow with regards to figuring out what a representative range of inputs means for tests.
>
> **[1:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=78)** The rule of thumb is this, when you think you've been thorough enough in testing a piece of production code, check to see if it's possible to make breaking changes to your production code without breaking your tests.
>
> **[1:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=89)** If it is, your tests aren't thorough enough and you need to write a test case that does break for whatever change you just made.
>
> **[1:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=96)** So, in our example from before, if we had only tested our addition function with two plus two, we could see that we'd be able to break our addition function without actually making the test fail by multiplying the arguments together instead of actually adding them and we'd need to add another test case that makes sure our code is actually doing what it's meant to do.
>
> **[1:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=116)** We also need to make sure our tests cover any edge cases that might come up in our application.
>
> **[2:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=121)** For example, if we're writing a division function, you'd want to make sure to test it with zero as well as other numbers since dividing by zero is a special case in division.
>
> **[2:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=132)** Or if you're writing a combined strings function, we need to think about how should it behave if we pass in a number.
>
> **[2:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=138)** Or what about a Boolean?
>
> **[2:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=139)** Of course, we only need to test these situations if we mean to actually use our functions in this way, in our code.
>
> **[2:25](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=145)** With our addition function from before, we would never want to pass in a string or a Boolean as an argument so, the way that we express that our function doesn't support this is by simply not having tests to say that our function should work in that way.
>
> **[2:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=158)** Or if there's a serious risk that the developers on your team will try to use the addition function in ways it wasn't meant to be used, you could always write a test to make sure that the function throws an error in those situations.
>
> **[2:49](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=169)** So, I imagine that right now some of you may be starting to wonder if TDD is really worth the trouble.
>
> **[2:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=175)** You may be thinking, how could TDD possibly be helpful to us if it means we have to spend our whole day thinking about our code and writing tests for every little situation?
>
> **[3:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=184)** Again, what might at first seem like a terrible hindrance of TDD, the fact that it takes a little more time, at least at first, is actually one of the main sources of its benefits.
>
> **[3:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=194)** It forces us as developers to really put a lot of thought into the code we write.
>
> **[3:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=199)** Personally, I can't even begin to tell you how many times I've seen software break just because of some situation that developers didn't think of.
>
> **[3:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=207)** And it's been stuff as simple as the examples we just saw.
>
> **[3:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=211)** So then, in summary, the purpose of unit testing is to make sure that the smallest, most granular pieces of our code, this will usually be functions, work as we expect them to.
>
> **[3:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-purpose-of-unit-testing?u=76281980&t=222)** If we imagine that we're building a house, the functions are the bricks and the unit tests make sure that these bricks are all sturdy and won't break wherever we put them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unit Testing]] (2)
> **CLI Commands:** make (9)
> **Analogies:** imagine (3), for example (2)
> **Env Vars:** tdd (4)
> **Best Practices:** rule of thumb (2), make sure to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [JavaScript frameworks for unit testing](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=0)** - [Instructor] Until now, we've focused mainly on the theoretical foundations of TDD.
>
> **[0:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=4)** But now it's time to start looking at how to actually do TDD in [[JavaScript]].
>
> **[0:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=9)** The first thing we're going to loot at is some of the libraries we can use for [[Unit Testing]] in JavaScript.
>
> **[0:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=14)** There are many good open source libraries to use for unit testing, and a lot of argument over which is the best.
>
> **[0:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=20)** Everybody, of course, has their own favorites and a hundred reasons why their favorite is better than the others, but here's my take on it.
>
> **[0:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=28)** I would say not to worry so much about which testing libraries you use.
>
> **[0:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=32)** Nine times out of 10, the testing libraries that you use won't make the difference between a good test suite and a bad test suite.
>
> **[0:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=40)** Some make it easier to do one thing, some make it easier to do another thing.
>
> **[0:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=43)** But in the end, it's the developers and their good or bad testing habits that have the biggest impact on the quality of the test suite.
>
> **[0:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=50)** With that said, let's look at the main tools that we'll use in TDD.
>
> **[0:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=54)** To do basic testing, you'll need three main tools, and those are, first, a testing environment or test runner which does the actual work of running all our tests, including collecting all our test files and executing our code.
>
> **[1:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=68)** This will be the command that we enter into our terminal to run our tests.
>
> **[1:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=72)** And second, a testing framework which we use to define and organize our individual tests, such as naming each of our test groups and defining all the cases it covers.
>
> **[1:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=82)** And finally, we need an assertion library which we use to actually make testable claims about our code, such as testing if a function returns the expected value.
>
> **[1:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=91)** Most of the JavaScript testing libraries you'll find are some combination of these three tools.
>
> **[1:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=97)** Mocha JS, for example, serves as both the test runner and a testing framework.
>
> **[1:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=102)** Chai, another popular library, is simply an assertion library.
>
> **[1:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=106)** And Jasmine and Jest, two more popular libraries, go for an all-in-one approach and contain all three tools you need for testing.
>
> **[1:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=113)** For this course, we're going to be using Mocha as our testing runner and framework, and Chai as our assertion library.
>
> **[1:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=119)** This is a very popular setup for test driven development and it'll make our journey into TDD very straight-forward and since many software companies use this exact same setup it'll make it applicable to your professional life, as well.
>
> **[2:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=132)** But keep in mind that, as I've stated before, this is just one of many possible setups.
>
> **[2:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=137)** It isn't the exact setup that we use for TDD that really makes or breaks it.
>
> **[2:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-frameworks-for-unit-testing?u=76281980&t=142)** In the end, our devotion to writing excellent tests using the techniques that we'll learn in this course is what will make the difference between TDD being just a waste of time, or TDD making our software incredibly robust and maintainable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[Unit Testing]] (2)
> **CLI Commands:** make (7), find (1)
> **Env Vars:** tdd (7)
> **Prerequisites:** setup (3), you'll need (1)
> **Analogies:** such as (2), for example (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)

#### [Writing and running basic tests](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=0)** - So now that we've learned a little bit more about unit tests, it's time to write and run our first unit test using Mocha and Chai.
>
> **[0:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=7)** The first thing we're going to do is set up a new directory, we'll be writing our code.
>
> **[0:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=11)** So go into whatever parent directory you'd like and create a new folder and call it, tdd-es6, or whatever else you want.
>
> **[0:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=20)** And once we're in this directory, we're going to initialize a new [[npm]] project and to do that, open up a terminal and make sure you're inside this tdd-es6 folder that we just created, and run npm init -y and hit enter.
>
> **[0:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=36)** And once that run successfully, it's time to install the Mocha and Chai libraries we'll be using for testing.
>
> **[0:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=42)** To do that, type npm install
>
> **[0:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=45)** - -save-dev mocha chai, hit enter.
>
> **[0:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=51)** That'll run for a little bit and after it's done, let's create a directory called, source.
>
> **[0:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=56)** And inside this directory, we're going to create two files.
>
> **[0:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=59)** The first one is going to be called, letter count.js and the second one is going to be called, letter count.test.js.
>
> **[1:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=68)** And these are going to hold a production code and test code.
>
> **[1:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=72)** The last thing we want to do, since we'll be wanting to write all our test and production code using modern es6 syntax, is to install the appropriate Babel packages.
>
> **[1:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=82)** And to do that, we're just going to run, npm install --save-dev @babel/core @babel/preset-env
>
> **[1:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=96)** @babel/register, and hit enter.
>
> **[1:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=102)** And once that completes we have to create a Babel resource file in the root of our project.
>
> **[1:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=107)** So, create a new file and call it, .babelrc, and the only contents of this file are going to be an object with one key that says, presets, and the value is going to be an array with a string that says babel/preset-env.
>
> **[2:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/writing-and-running-basic-tests?u=76281980&t=123)** And this just makes sure that our es6 code is transpiled correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (4)
> **CLI Commands:** npm (4), make (1)
> **Prerequisites:** install (4), set up (1)
> **File Paths:** count.js (1), count.test.js (1)
> **Tools:** terminal (1)
> **Speakers:** - so (1)

#### [Testing basic functions](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=0)** - [Instructor] Okay and that's all the set up we need for now.
>
> **[0:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=3)** So now that we've got everything set up, let's talk about what we're going to be coding here.
>
> **[0:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=7)** To get a better sense of how the tdd process works, we're going to code a simple example function.
>
> **[0:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=13)** And this function is going to take a string as an argument and return an object that contains a count of all the letters in that string.
>
> **[0:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=21)** So for example if we pass at the string cat, it'll return an object that looks like this, c:1, a:1, t:1 because the string cat has one c, one a and one t in it.
>
> **[0:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=36)** And likewise if we pass at the string better, B-E-T-T-E-R, it'll return an object that looks like this, b:1, e:2 'cause there's two e's, t:2 'cause there's two t's, and r:1, and so on.
>
> **[0:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=53)** Now as a matter of fact these two examples I just gave you would make great test cases to test our function with.
>
> **[0:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=58)** So let's see how to do that.
>
> **[1:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=60)** Let's open up our letter-count.test file and write ourselves a test.
>
> **[1:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=64)** So the first thing that we're going to do is import the function from our letter-count file, so we'll say import, and we'll call the function getLetterCount from letter-count.
>
> **[1:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=77)** Now this is obviously going to fail since we haven't even defined it yet in our production code, and that's perfectly okay.
>
> **[1:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=84)** The reason we're doing this first is that we want to get a better idea of what our function should look like when it gets used.
>
> **[1:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=90)** This is where we get to sort of design our function without having to worry about the details of its implementation yet.
>
> **[1:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=97)** So now that we've imported our getLetterCount function, we have to write a little boiler plate code to organize our tests.
>
> **[1:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=103)** So we're going to learn two new mocha keywords here.
>
> **[1:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=106)** The first one is the keyword describe.
>
> **[1:49](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=109)** Now we use describe to group similar tests together and actually describe is a function that takes a few arguments.
>
> **[1:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=117)** The first argument of describe is a string that we use to, well, describe the group of tests we're running.
>
> **[2:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=123)** Since in this case we're going to be testing the basic functionality of our getLetterCount function, we'll make this string getLetterCount - basic functionality.
>
> **[2:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=136)** And the second argument we pass to describe is a function, usually written as an anonymous function like this, that contains the actual tests we want to run.
>
> **[2:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=147)** Inside this anonymous function we can write more describes to further categorize our tests, or we can write another mocha function, it.
>
> **[2:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=156)** Now it is used to denote individual tests, or individual pieces of functionality that we want to test.
>
> **[2:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=163)** It like describe also takes two basic arguments.
>
> **[2:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=166)** The first argument is a string that we use to tell ourselves what exact piece of functionality this test will be covering.
>
> **[2:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=174)** In our case, let's start with the most basic case that we want our getLetterCount function to cover, an empty string.
>
> **[3:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=180)** Now, since we want our function to return an object containing all the letters in a [[Microsoft Word|word]] and their counts, it stands to reason that when we pass our function an empty string it should return an object with no properties, an empty object.
>
> **[3:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=194)** So for the string we pass to 'it', let's say that 'it' returns an empty object when passed an empty string.
>
> **[3:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=206)** And just like with describe, the second argument that we pass to it is a function, usually written as an anonymous function, and this function contains the actual claims we want to make about our code.
>
> **[3:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=217)** Now the key is that the claims we make here, called assertions, need to back up the functionality we describe in the string we wrote here, and they need to prove that our production code meets our expectations.
>
> **[3:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=230)** And to make these assertions, we're going to import something from chai, the assertion library we're using in this course.
>
> **[3:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=236)** Up near the top of the file, we're going to type import, expect, from chai.
>
> **[4:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=244)** And the way that we're going to prove that our production code works the way we want it to is this, we're going to define our expected result, we'll say const expected, and in this case our expected result's an empty object, and then we're going to define the actual result that we get back from our function.
>
> **[4:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=262)** We're going to say const actual = getLetterCount, called with an empty string.
>
> **[4:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=270)** And here's where we use this expect that we imported from chai.
>
> **[4:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=273)** We're going to assert that the actual result of calling our production code is exactly the same as the expected result that we wanted it to produce.
>
> **[4:44](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=284)** And that's going to look like this, we're going to say expect, actual.to.deep.equal, expected.
>
> **[4:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=294)** We expect actual to deep equal expected, and the reason that we have to put this deep keyword in here is because we're comparing objects.
>
> **[5:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=303)** If we were to just remove it and say to equal expected, it would return false unless the constants actual and expected pointed to the same object in memory, which is obviously not what we want.
>
> **[5:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=316)** And this is a small quirk that most [[JavaScript]] developers are used to dealing with.
>
> **[5:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-basic-functions?u=76281980&t=319)** And we have to remember that it still applies when we're writing tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[JavaScript]] (1)
> **CLI Commands:** make (5), cat (2)
> **Code Identifiers:** getlettercount (6)
> **Definitions:** is a  (6)
> **Analogies:** for example (1), just like (1)
> **Prerequisites:** set up (2)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Testing asynchronous functions](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=0)** - [Instructor] So now that we've written our first test, we can actually run it.
>
> **[0:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=3)** And the way we do that is by opening up a console.
>
> **[0:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=6)** You may have noticed that I usually use VS Code's built-in console, but you can use whatever you're comfortable with.
>
> **[0:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=11)** And in the root directory of our project, we're going to run npx mocha, and then in quotation marks, "src/**/*.test.js", closing quotation mark,
>
> **[0:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=26)** and then --recursive and finally since we're writing our code in ES6 syntax, we have to add --require @babel/register.
>
> **[0:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=37)** And if we hit ENTER now, we see that our tests run and the result that we get printed to the console here shows that we only have one test and that our test failed.
>
> **[0:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=46)** And this is actually a good thing.
>
> **[0:49](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=49)** Remember that I said in a previous video that in order to do TDD the right way, we need to have a failing test first.
>
> **[0:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=56)** This ensures that our test won't give us a false positive.
>
> **[1:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=60)** If we run our tests right now and the test we just wrote passed, then that wouldn't be a good thing because we haven't even written any production code yet.
>
> **[1:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=67)** But before we go on, in order to avoid typing out this big long command here again, I'm going to show you a better way to run our tests.
>
> **[1:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=74)** What we're going to do is open up our package.[[JSON]] file here.
>
> **[1:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=78)** And if we look under "scripts" we'll see that by default [[npm]] already gives us a test script, although right now it just prints an error saying there's no tests.
>
> **[1:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=86)** And this isn't very useful, so let's delete this default script here, and put the command that we ran before in its place.
>
> **[1:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=93)** So we'll delete this, and copy this command here, and the only thing we have to add here is back slashes to escape these quotation characters.
>
> **[1:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=103)** And finally let's save this package.json file.
>
> **[1:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=108)** And once we've done that, instead of running the big long command that we had before, we can simply run npm run test.
>
> **[1:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=117)** And we see that our tests still fail here.
>
> **[2:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=120)** So now that we've done that, and now that we have a failing test, we're free to write some production code to make it pass.
>
> **[2:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=126)** So let's start off by opening up our letter-count file and we're going to define a function called getLetterCount, which is the name we gave it in our test.
>
> **[2:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=135)** So we'll say export const getLetterCount, and it's going to take one argument, we'll call it string, and just for the sake of illustration, let's start off by having it return null.
>
> **[2:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=147)** And if we run our test now, we see that it still fails, but instead of it complaining that our function doesn't exist, we get this nice little message telling us what the actual and expected return values of our function were.
>
> **[2:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=160)** In this case, it expected an empty object and what it go instead was null.
>
> **[2:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=165)** So going back to our production code, instead of returning null from our function, let's have it return an empty object.
>
> **[2:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=171)** And that looks like this using the ES6 error notation.
>
> **[2:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=176)** And if we run our test script again, npm run test, we see that our test passes.
>
> **[3:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=183)** And remember, now that our test passes, we have to stop adding functionality to our production code.
>
> **[3:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=189)** We're not allowed to add anything else to our production code until we have another failing test.
>
> **[3:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=194)** This is definitely one of the hardest things for most people about doing TDD.
>
> **[3:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=198)** It can be really difficult not to just jump ahead and implement the entire function after the thrill of making a test pass.
>
> **[3:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-asynchronous-functions?u=76281980&t=206)** But it's crucial that you have the discipline not to do that 'cause otherwise many of the guarantees of TDD go out the window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[JSON]] (2)
> **Env Vars:** tdd (3), es6 (2), enter (1), npm (1)
> **CLI Commands:** npm (3), npx (1), make (1)
> **File Paths:** package.json (2), test.js (1)
> **Code Identifiers:** getlettercount (2)
> **Cross-References:** previous video (1)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)

#### [Modifying existing functionality](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=0)** - We'll we've done the red step with our failing test and the green step by making that test pass.
>
> **[0:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=6)** So far we don't have anything to refactor yet, so lets go back to red and write another failing test.
>
> **[0:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=11)** This time lets see if our function returns the correct object for a simple [[Microsoft Word|word]] like cat.
>
> **[0:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=17)** So lets define another it lock here and we're going to say that our get letter count function should return the correct letter count for a word with only one of each letter.
>
> **[0:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=37)** And inside our function here, we're going to define our expected result, which will be an object like this const expected equals C 1 A 1 T 1 and then we'll define our actual result const actual, which will be the return value of our get letter count function.
>
> **[1:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=61)** When we call it with the string cat and finally we're going to make the same kind of assertion that we made in our previous test.
>
> **[1:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=68)** So expect actual to deep equal expected now lets run our test to make sure this new one fails [[npm]] run test and we that it does in fact fail.
>
> **[1:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=83)** So now that we have a failing test, we can go back to our production code and modify our function to make it pass.
>
> **[1:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=91)** So instead of just returning an empty object, which obviously isn't the solution we're looking for lets start off by getting an array of all the letters from the string we passed in.
>
> **[1:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=100)** So we'll say const letters equals string and if you don't know how to get an array of all the letters from a string, what you do is you simply call dot split with an empty string on a string.
>
> **[1:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=114)** So now that we've got an array of our letters, we're going to define our starting object which we'll call letter count, so we'll say let letter count equals an empty object and next we're going to loop through all the letters, I'm going to use for each for this for now so we'll say letters dot for each and for each letter we're going to check if our letter count object doesn't already have a value for that letter so if letter count letter and we'll put a naught sign before that and if our letter count doesn't already have a value for that letter we're going to set that property of our letter count object to one like this, letter count letter equals one.
>
> **[2:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=161)** So lets save our file and lets run our tests now to see where we're at.
>
> **[2:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=165)** If we run our tests with npm run test, we see that now both of our tests fail.
>
> **[2:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=172)** We might not have expected this but if we look at the messages our tests printed out, we can see pretty quickly why.
>
> **[2:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=179)** Our function is returning undefined for both and in this case we just forgot to return our letter count object after calling for each.
>
> **[3:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/modifying-existing-functionality?u=76281980&t=187)** So if we add return letter count and save and run our tests again, we see that both our tests passed now which is great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[npm]] (2)
> **CLI Commands:** make (3), cat (2), npm (2)
> **Cross-References:** go back to (2)
> **Speakers:** - we (1)

#### [To mock or not to mock?](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=0)** - Now that we've got our function working for both empty strings and simple strings, let's write a test to ensure that it works for more complicated strings with several occurrences of certain letters.
>
> **[0:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=11)** Let's make another block for our test.
>
> **[0:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=13)** And we're going to say that our function should return the correct letter count for words with more than one of certain letters.
>
> **[0:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=29)** Now the string we're going to use to test this is the [[Microsoft Word|word]] Mississippi.
>
> **[0:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=33)** M-I-S-S-I-S-S-I-P-P-I, which is the name of a river in the United States for those of you who don't know.
>
> **[0:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=41)** So for our expected value, we're going to say const expected.
>
> **[0:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=45)** And the word Mississippi has one m, four i's, four s's, and two p's.
>
> **[0:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=58)** And for our actual value, we're going to say const actual = getLetterCount, Mississippi.
>
> **[1:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=67)** And just like in our other tests, we're going to say that we expect the actual value to deep equal the expected value.
>
> **[1:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=77)** So if we save this and then run our tests again, [[npm]] run test, we see that two of our tests pass, and our last test fails.
>
> **[1:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=86)** And our test will actually show us what the difference was between our expected and actual values.
>
> **[1:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=91)** And we see that as it is right now, our function returns all the right letters in the letter count object, since order doesn't matter when comparing objects in [[JavaScript]].
>
> **[1:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=101)** But none of the letters has a count higher than one.
>
> **[1:44](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=104)** And if we look at our production code, we can see why this is.
>
> **[1:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=108)** We see that we're not incrementing our letter count once we've set it to one.
>
> **[1:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=112)** So let's modify our production code to make it pass.
>
> **[1:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=115)** All we have to do here is add an else block to this if statement.
>
> **[1:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=119)** And inside we want to increment the value of the key if it exists, like this, letterCount, letter, +=1.
>
> **[2:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=128)** And once we've done that, let's save and run our tests again.
>
> **[2:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=133)** And we see that all three of our tests pass now.
>
> **[2:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=136)** So we're getting to the point now where we might want to start paying a little more attention to the refactoring step.
>
> **[2:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=142)** The code that we have here works very well in that it makes all of our tests pass, but there's probably a better way to write it, and I'm going to leave that up to you.
>
> **[2:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=151)** But if you want to play around with it a little, there are actually many other ways to create this functionality than what we've done here.
>
> **[2:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=158)** Personally, I prefer a more [[Functional Programming]] style approach, using a built-in array function such as reduce to calculate the letter count.
>
> **[2:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=166)** And if you're interested in learning more about functional programming and JavaScript, I suggest you take a look at my course about functional programming after you're done with this one.
>
> **[2:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=175)** So in writing this getLetterCount function, we've hopefully got a better sense of the TDD process and why we do some of the things we do.
>
> **[3:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=183)** At this point, not only do we have a function that does exactly what we want it to as we can see by the passing tests, but we also have proof that our function works.
>
> **[3:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=192)** Imagine down the road that this code base of ours has grown to a very large size and this function is used in dozens of places throughout our code.
>
> **[3:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=200)** If another programmer wants to maybe add some functionality to this function, let's say maybe they want this function to ignore any whitespace in the strings we pass in, which it doesn't do right now, by the way.
>
> **[3:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=210)** Without these tests in place that they can run after they make their changes, they risk causing bugs all across the whole code base as a result of their changes.
>
> **[3:39](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=219)** And that's obviously not an ideal situation.
>
> **[3:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=222)** But with a suite of tests backing the function up, as we have here, they can feel confident that their changes won't cause any widespread damage to the code base.
>
> **[3:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/to-mock-or-not-to-mock?u=76281980&t=232)** And as we saw in a previous video, that's one of the big benefits of [[Test-Driven Development]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Functional Programming]] (3), [[Microsoft Word|Word]] (2), [[JavaScript]] (2), [[npm]] (1), [[Test-Driven Development]] (1)
> **CLI Commands:** make (3), npm (1)
> **Code Identifiers:** getlettercount (2), lettercount (1)
> **Analogies:** just like (1), such as (1), imagine (1)
> **Cross-References:** as we saw (1), previous video (1)
> **Env Vars:** tdd (1)
> **Speakers:** - now (1)

#### [Challenge: Given criteria, write unit tests](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=5)** - [Instructor] Now that we've gone through an example of the basic TDD cycle, let's do a challenge.
>
> **[0:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=10)** The challenge here, to give you a little independent practice with doing the TDD cycle, is this.
>
> **[0:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=15)** I'm going to give you a description of a problem and your job is to use TDD to write some code that fulfills the criteria.
>
> **[0:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=22)** So, before I tell you about the challenge, let's create two more files in our source directory, here.
>
> **[0:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=29)** The first one, which will hold the production code, we'll call anagrams.js, and the second one, which will hold the test code, we'll call anagrams.test.js.
>
> **[0:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=41)** So here's the task.
>
> **[0:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=43)** You're going to write a function that accepts two strings and tells you whether the two strings are anagrams of each other.
>
> **[0:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=50)** An anagram is when you have two strings that have the exact same letters in them and the exact same quantities but in a different order.
>
> **[0:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=57)** For example, the words listen and silent or elbow and below.
>
> **[1:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=62)** Simple enough, right?
>
> **[1:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=63)** Here are a few additional clarifications to keep in mind.
>
> **[1:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=67)** Two strings are not anagrams if either of the words has any letters that are not in the other [[Microsoft Word|word]].
>
> **[1:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=73)** So, for example, while elbow and below are anagrams, elbows and below are not anagrams because elbows contains an S and below doesn't.
>
> **[1:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=83)** Two strings are also not anagrams if they have the same letters but not in the same quantities.
>
> **[1:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=89)** So, while listen and silent are anagrams, listens and silent aren't anagrams because even though they both have the same letters E-I-L-N-S and T, listens has two S's while silent only has one.
>
> **[1:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=105)** So this is as far as I'm going to go in the solution video.
>
> **[1:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=108)** But, if you want even more practice, here's some more requirements you can try out on your own.
>
> **[1:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=112)** First of all, spaces should be ignored when determining whether two strings are anagrams or not.
>
> **[1:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=118)** So, for example, the strings conversation and voices rant on, a rather interesting anagram since the two strings are conceptually related, these two strings are anagrams even though the first one is one word and the second one is three words.
>
> **[2:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=132)** Count the letters if you don't believe me.
>
> **[2:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=135)** In this extra credit you may want to extend this to ignore all non-alphanumeric characters such as spaces, dashes, apostrophes, commas, etc., but for now we'll just keep it to spaces.
>
> **[2:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=146)** And finally, case should be ignored when considering if two strings are anagrams or not.
>
> **[2:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=151)** So, for example, state, all in caps, and taste, all in lowercase, should be considered anagrams even though the letters in the first one are all uppercase and the letters in the second are all lowercase.
>
> **[2:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=163)** Well, that's all the criteria I've got for you.
>
> **[2:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=166)** Other than that, I'm going to give you a little implementation hint.
>
> **[2:49](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=169)** Using the getLetterCount function that we coded in previous videos will help you a lot in implementing this anagram function.
>
> **[2:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=176)** You can also feel free to pull in any [[npm]] libraries that you think might help.
>
> **[3:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=180)** Obviously, as long as you don't cheat and use a library that already implements our functionality.
>
> **[3:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=186)** This should probably take you about 10 to 15 minutes.
>
> **[3:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-given-criteria-write-unit-tests?u=76281980&t=189)** Once you've completed it, check out the solution video where I show you how I did this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[npm]] (1)
> **Analogies:** for example (4), such as (1)
> **Env Vars:** tdd (3), npm (1)
> **File Paths:** anagrams.js (1), anagrams.test.js (1)
> **CLI Commands:** npm (1)
> **Code Identifiers:** getlettercount (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Given criteria, write unit tests](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=0)** - [Instructor] Okay, so now let's see what one possible way of solving this challenge might be.
>
> **[0:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=10)** And this is just the way that I would do it.
>
> **[0:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=11)** If you have something a little different don't worry about it too much.
>
> **[0:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=14)** So we've got our files created, and the first thing that I'm going to do is import some of the things that we'll need at the top of our test file.
>
> **[0:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=21)** So I'm going to import expect from chai to make our assertions, and then I'm going to import our isAnagram function, import isAnagram from Anagrams.
>
> **[0:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=34)** And this of course doesn't exist yet.
>
> **[0:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=36)** So now to group our files we're going to have a describe block here.
>
> **[0:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=41)** And inside we're going to say, isAnagram basic functionality.
>
> **[0:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=47)** And I'm going to put these comments that I typed out in the last video just to give us a guideline of the things that we need to test.
>
> **[0:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=55)** So the first test that we're going to write we're going to say it returns true when two known anagrams are passed in.
>
> **[1:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=68)** So for this test our expected value is true.
>
> **[1:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=70)** So we're going to say const expected equals true.
>
> **[1:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=75)** And our actual value, const actual, is going to be our isAnagram function called on two words that we know are anagrams, like one of the two above.
>
> **[1:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=86)** For now I'm going to use listen and silent.
>
> **[1:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=91)** And finally we're going to test that our expected value is equal to our actual values.
>
> **[1:35](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=95)** So we're going to say expect actual to equal, we don't need need to deep equal in here since we're just comparing two values, to equal expected.
>
> **[1:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=108)** And if we save our code and run our tests now we see that we have a failing test that says isAnagram is not a function.
>
> **[1:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=114)** And that's expected because as I said before this isAnagram function doesn't exist yet.
>
> **[2:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=121)** So we're going to go into our production code file now that we have a failing test and we're going to just write and empty function for now.
>
> **[2:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=126)** So we're going to say export const isAnagram and it's going to take two arguments.
>
> **[2:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=133)** We'll call them string1 and string2.
>
> **[2:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=136)** And for now we're just going to make it an empty function.
>
> **[2:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=139)** So if we save it and run it again, so we see that this error message now says that we're expecting undefined, which is what we're returning here, we're not returning anything to equal our expected value of true.
>
> **[2:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=152)** So now we're going to write a basic implementation of this function that'll make our first test pass.
>
> **[2:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=157)** So what we're going to do for now is we're going to get the letters from both strings like this, const string1Letters equals string1.split,
>
> **[2:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=173)** and const string2Letters equals string2.split.
>
> **[3:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=180)** And what we're going to do here just for starters is we're going to check if for each letter in string1, string2 also has that letter.
>
> **[3:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=189)** And the way we're going to do that is this.
>
> **[3:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=191)** I'm going to say return string1Letters.every.
>
> **[3:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=196)** And we want to check that for every letter in string1 we want to see if string2Letters includes that letter.
>
> **[3:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=206)** So if we save our code and then run our tests again we see that it passes now, which is great.
>
> **[3:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=213)** So let's move on to the next criteria in our test file.
>
> **[3:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=217)** So the next thing we want to check for is whether or not our isAnagram function will return false if either of the strings has extra letters.
>
> **[3:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=225)** So we're going to write another test here and we're going to say it returns false when either of the strings has extra letters.
>
> **[3:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=236)** And for the body of this function here our expected value, const expected is going to be false and our actual value const actual is going to be equal to our isAnagram function called on elbows, which has an extra letter here, an extra s, and below.
>
> **[4:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=256)** And finally we're going to check if our actual value is equal to our expected value.
>
> **[4:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=260)** So we're going to say expect actual to equal expect.
>
> **[4:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=267)** And in this test here we want to add another check with the two arguments reversed here.
>
> **[4:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=272)** So we're going to say const actual2, since we already have an actual, equals isAnagram.
>
> **[4:39](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=279)** And if we're going to say below and elbows.
>
> **[4:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=285)** And then we're going to check if our second actual value here equals our expected value.
>
> **[4:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=290)** So we're going to say expect actual2 to equal expected.
>
> **[4:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=297)** And if we run our tests now we'll see that this ones failing.
>
> **[5:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=303)** And if we go back and look at our production code we can see that we're only checking whether for every letter in string1 if string2 has it.
>
> **[5:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=313)** What we need to do is check the reverse as well.
>
> **[5:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=315)** In other words for every letter in string2, string1 needs to have it as well.
>
> **[5:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=321)** So what we're going to do is we're going to add in here we're going to say and, and then just the same statement with string1 and string2 reversed.
>
> **[5:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=328)** So we're going to say string2Letters.every, letter, string1Letters.includes that letter.
>
> **[5:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=341)** Okay, and if we run our tests again we see that they pass now, which is great.
>
> **[5:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=347)** So now on to round three of our tests.
>
> **[5:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=350)** For the third test we write we're going to check whether or not our function returns false when the two strings we pass in have the same letters but in different quantities, for example in listens and silent.
>
> **[6:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=361)** So for our tests we're going to say it returns false when the strings have the same letters in different quantities.
>
> **[6:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=373)** And for the body of this test we're going to say that our expected value is false, const expected equals false, and our actual value, const actual, is going to be equal to isAnagram with the words listens and silent passed down.
>
> **[6:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=392)** And we're going to check if our actual value equals our expected value.
>
> **[6:35](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=395)** So expect actual to equal expected.
>
> **[6:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=405)** So if we save our code and run our tests we see that it fails saying that we got true when we expected false.
>
> **[6:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=414)** And if we go back and look at our production code we see that we're not really taking the amount of letters into account when we consider whether or not two words are anagrams of each other.
>
> **[7:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=424)** And as it happens in previous videos we wrote another function that would be very helpful for doing this.
>
> **[7:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=430)** So what we're going to do is up at the top of our file here we're going to say import, getLetterCount from letter count, and what we're going to do is we're going to get the letter counts of each of our strings.
>
> **[7:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=446)** So we're going to remove these here and we're going to say const string1LetterCount equals getLetterCount for string1,
>
> **[7:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=462)** and then const string2LetterCount equals getLetterCount for string2.
>
> **[7:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=471)** And then instead of doing this big long thing here we're just going to check if these two letter objects are equal to each other.
>
> **[7:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=478)** And in order to do that we're going to have to check if they're deep equal.
>
> **[8:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=483)** So what I'm going to do here is I'm going to install lodash which has a function for this.
>
> **[8:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=488)** So I'm going to say [[npm]] install lodash.
>
> **[8:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=494)** And once that installs we're going to import a function from lodash.
>
> **[8:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=499)** We're going to say import is equal from lodash and we're going to return whether or not our string1LetterCount and our string2LetterCount are deep equal to each other.
>
> **[8:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=513)** And the isEqual function from lodash actually tests if two objects are deep equal to each other.
>
> **[8:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=520)** So we're going to say isEqual string1LetterCount, string2LetterCount.
>
> **[8:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=527)** So if we run our tests again npm run test we see that our tests pass again, which is great.
>
> **[8:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=535)** And here's where I'm going to stop.
>
> **[8:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=537)** Again, you're free to continue on with the other criteria that I mentioned in the challenge video.
>
> **[9:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=542)** You can also see the way that I coded these criteria in the end state of the exercise files for this video.
>
> **[9:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=548)** So hopefully this was helpful and the really nice part of all of this is that we now have a fully tested function, two of them actually, that work under all the circumstances we need them to.
>
> **[9:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=559)** If this code was part of a much larger code base with a full team of developers and we had to try and refactor this code to make some performance improvements of something any developer on the team would be able to do so without any fear of introducing bugs into the code base.
>
> **[9:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=573)** For example, if their refactored code forgot to ignore spaces, or something like that.
>
> **[9:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=578)** Because in this case they would immediately know by running the tests that their modified implementation didn't perform in exactly the same way as we need it to.
>
> **[9:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=586)** It's also worth noting that in reality the requirements that we specified in our tests here would have developed gradually over time as our code base expanded in the use cases for our anagram function became more varied.
>
> **[9:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=598)** The first implementation where the order of the arguments we passed in mattered might have initially been sufficient until someone started using our function in a different way and found that it didn't quite work the way that they expected it to and decided to write a test to capture the new functionality they needed.
>
> **[10:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=613)** In other words while we should definitely try our best to consider all the use cases when writing a function as we did here, the full range of use cases might not actually emerge until the function is used in many different placed in our code base.
>
> **[10:25](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-given-criteria-write-unit-tests?u=76281980&t=625)** And that's just something to keep in mind as you do TDD.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2)
> **Code Identifiers:** isanagram (11), string1letters (3), string2letters (3), getlettercount (3), string1lettercount (3)
> **CLI Commands:** make (4), npm (2)
> **Definitions:** in other words (2)
> **Analogies:** for example (2)
> **Prerequisites:** install (2)
> **Env Vars:** tdd (1)
> **Cross-References:** in the last (1)


### 3. Writing Integration Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to integration testing](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=0)** - [Instructor] Now that we've seen how to conduct TDD with basic [[Unit Testing]], it's time to move on to [[Integration Testing]].
>
> **[0:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=6)** Integration testing, as we discussed in a previous video, is the next step up scale-wise from unit testing.
>
> **[0:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=13)** While unit testing focuses on making sure the smallest testable units of your code base, usually functions, work correctly, integration testing makes sure that the different pieces of your application interact correctly when assembled into a whole.
>
> **[0:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=27)** In other words, they make sure that our code integrates correctly, hence the name.
>
> **[0:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=32)** A good visual for integration testing is to picture a pipeline.
>
> **[0:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=36)** And this pipeline consists of many different pipes, each of which has been rigorously unit tested to make sure it doesn't leak, doesn't [[Rust (Programming Language)|rust]], withstands pressure, et cetera.
>
> **[0:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=45)** And that's great, but the only problem is that when we go to put all of our pipes together, we find that a lot of them don't fit and our pipeline is full of leaks, even though each of the individual segments was perfect on its own.
>
> **[0:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=58)** This is how integration testing relates to unit testing.
>
> **[1:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=61)** Unit testing tests the individual pieces of our application, and integration testing tests that all the pieces fit together properly into a whole.
>
> **[1:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=70)** When writing unit tests, it's easy to get a false sense of security with regards to the application.
>
> **[1:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=75)** Just as in the pipeline analogy, just because each individual piece seems perfect in isolation doesn't mean that the pieces will fit together well.
>
> **[1:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=84)** In development terms, this means that we could have a perfect, bug free front end and a perfect, bug free back end, if you can even imagine that those are possible, but when we link them up we find that the moment we try to connect the two, the application breaks because we weren't calling the back end endpoints correctly from the front end.
>
> **[1:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=103)** Another purpose for integration tests is to cover certain areas where it would be really difficult or redundant to add unit tests.
>
> **[1:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=110)** As an example for those of you who are familiar with [[Express.js]], a framework for writing servers in [[Node.js]], how is it that we're supposed to write unit tests for the application's entry point, server.js file, where we usually specify many of the endpoints for the server?
>
> **[2:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=126)** In most cases, this would involve creating a complex fake express object just to test our application, which would be a massive undertaking and provide very little real benefit.
>
> **[2:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=136)** And yet, all that we really need to do to test that each of these endpoints is hooked up correctly to the [[Representational State Transfer (REST)|rest]] of the server logic is to start up our server and make a request to it.
>
> **[2:25](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=145)** And that would be an integration test.
>
> **[2:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=147)** As we mentioned in a previous video, there are certain situations where unit tests don't belong.
>
> **[2:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=152)** But those situations are few and far between and usually have to do with I/O operations, so don't try and use this as an excuse just to avoid writing unit tests.
>
> **[2:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=163)** Another thing about integration tests is that they tend to require a little bit more work than unit tests, and this is because they often require a certain amount of setup.
>
> **[2:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=172)** For example, if we're writing a function that interacts with a database, we have to create a separate database for testing, set up that database with some test data, and then make sure to reset the database after our test completes.
>
> **[3:05](https://www.linkedin.com/learning/javascript-test-driven-development-es6/introduction-to-integration-testing?u=76281980&t=185)** And this all might sound a little complicated, but we'll go through how to do each of these things properly and you'll get plenty of practice as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Integration Testing]] (6), [[Unit Testing]] (5), [[Rust (Programming Language)|Rust]] (1), [[Express.js]] (1), [[Node.js]] (1)
> **CLI Commands:** make (4), find (2), node (1)
> **Cross-References:** previous video (2), we discussed (1), we mentioned (1)
> **File Paths:** express.js (1), node.js (1), server.js (1)
> **Analogies:** picture (1), imagine (1), for example (1)
> **Prerequisites:** setup (1), set up (1)
> **Env Vars:** tdd (1)
> **UI Navigation:** go to (1)

#### [How do integration tests fit into TDD?](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=0)** - [Narrator] So many people are naturally a little confused when they learn about [[Integration Testing]] in the context of TDD.
>
> **[0:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=7)** After all, we already have unit tests to guide us along in the development of our software.
>
> **[0:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=11)** Shouldn't that be all we need?
>
> **[0:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=13)** Well, not necessarily.
>
> **[0:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=15)** Unit tests guide us in the development of the smallest units of our software, usually functions, and they're very important in ensuring that those pieces are as robust as possible and work exactly as expected.
>
> **[0:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=27)** However, while unit tests are extremely important to the development team that creates and maintains these atomic pieces, and in the end have a strong, positive effect on the robustness of the overall software, they're not the whole story.
>
> **[0:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=40)** To show you what I mean, let's say you're working as a back-end developer and your job is to create a [[Representational State Transfer (REST)|rest]] API.
>
> **[0:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=45)** It's very unlikely that your boss or project manager is going to give you a list of all the individual functions that you're going to need to create and how each of them is supposed to behave.
>
> **[0:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=55)** From their viewpoint, all that matters is that when the front end asks your rest API for a user's data, or the amount of money in someone's account, or whatever the case is, the response is exactly what they expect it to be.
>
> **[1:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=68)** And these specifications are at a higher level conceptually, and involve combining several or many of the smaller pieces in a code base.
>
> **[1:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=76)** And because of this, we need a higher category of tests to guide our development toward these goals.
>
> **[1:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=81)** And this is where integration testing fits into TDD.
>
> **[1:25](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=85)** You see, just as unit tests serve to guide us in the development of the individual atomic pieces of our software, giving us direction and helping us clarify our thoughts as to how each piece should behave, integration tests guide us in the development of systems that bring together multiple smaller pieces into a whole, such as user interfaces or network APIs.
>
> **[1:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=106)** Now, the test-driven cycle with integration tests is very similar to the test-driven cycle with unit tests.
>
> **[1:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=112)** Just as with [[Unit Testing]], we start off by writing a failing test and then write production code to make the test pass, and then refactor that code.
>
> **[2:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=121)** In other words, with integration tests, we also use the red-green refactor cycle.
>
> **[2:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=126)** Now, a key thing to understand here is how the cycles of integration testing and unit testing fit together.
>
> **[2:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=132)** Integration testing [[Forms]] a sort of outer ring around the unit testing cycle.
>
> **[2:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=137)** And this means that, when writing a program that consists of more than one piece, in other words, most systems, you'll start by writing an integration test.
>
> **[2:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=146)** This is the red step of the integration test cycle.
>
> **[2:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=150)** You'll then move into the inner cycle of unit testing, writing a failing unit test, and the unit test cycle will then repeat over and over again, red, green, refactor, until the integration test that we wrote finally passes, at which point we have to stop development until we write another failing integration test.
>
> **[2:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=168)** So the basic cycle for integration tests within TDD is pretty much the same as with unit tests.
>
> **[2:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=173)** The biggest difference here is that each integration test cycle will usually take significantly longer and will cover several to many iterations of the unit test cycle.
>
> **[3:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=184)** It will also focus on higher-level functionality; functionality that's a little bit closer to the user's point of view.
>
> **[3:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/how-do-integration-tests-fit-into-tdd?u=76281980&t=190)** But not quite at their level, since that's the job of [[End-to-end Testing]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Integration Testing]] (4), [[Unit Testing]] (4), [[Representational State Transfer (REST)|Rest]] (2), [[Forms]] (1), [[End-to-end Testing]] (1)
> **Env Vars:** tdd (3), api (2)
> **Definitions:** in other words (2), means that (1)
> **Analogies:** such as (1), similar to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Test doubles](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=0)** - [Instructor] Before we go any further in talking about [[Integration Testing]], we need to talk about a very important topic in [[Test-Driven Development]] in general, and this is something called test doubles.
>
> **[0:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=10)** So let's say again that we're writing a [[Representational State Transfer (REST)|rest]] API that uses [[MongoDB]] or some other database to store application data.
>
> **[0:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=17)** When we try to write tests for the parts of our codebase that interact with our database, we run into a small dilemma.
>
> **[0:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=23)** Our tests require our code to be interacting with an actual database.
>
> **[0:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=28)** And speed is the main concern in cases like this, since running tests that require communication with external services such as [[Databases]], especially if we're communicating over a network, drastically increases the time it takes for our test to run.
>
> **[0:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=42)** And when we're doing test-driven development, it's absolutely critical that our tests run as quickly as possible, since otherwise we'll spend a lot of our valuable development time just sitting waiting for our tests to complete.
>
> **[0:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=54)** One way that we can get around these potential limitations is by using something called test doubles.
>
> **[0:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=59)** Put simply, test doubles are fake versions of operations or services such as MongoDB that execute much more quickly, usually without performing any of the actual logic behind the scenes.
>
> **[1:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=70)** During testing, our app will make calls to this fake version instead of the actual service.
>
> **[1:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=75)** So for example, if we're testing a portion of our code that at some point uses the MongoDB driver to get a user's data from the database, we can create a fake version of the find function that returns some dummy user data that our function can then use for testing purposes.
>
> **[1:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=90)** And we'll see exactly how this can be done in a later video.
>
> **[1:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=93)** And test doubles can also be used to create fake versions of our own software, such as if we have a front and back end and want to test one without starting up the other.
>
> **[1:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=103)** This sort of faking can be especially helpful in applications that use a microservice architecture, since in this case it can be a pain or sometimes even impossible to run all the individual services locally at the same time for testing.
>
> **[1:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=117)** Now, there are several different kinds of test doubles that are commonly used in integration testing, the most common being mocks and stubs.
>
> **[2:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=124)** And I'm not going to go into the technical definitions and differences between these types here.
>
> **[2:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=129)** For the scope of the course, it's enough that you just know their names.
>
> **[2:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/test-doubles?u=76281980&t=132)** We'll see some examples of them later on in the course, and I'll point them out to you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (3), [[Integration Testing]] (2), [[Test-Driven Development]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Databases]] (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [When shouldn't I use test doubles?](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=0)** - [Instructor] Now test doubles might seem like a really nice tool to work with when doing TDD, but be careful.
>
> **[0:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=6)** Normally what happens when people first learn how to use test doubles is that the they go off and start using them for everything in their tests, and this is really the wrong way to do it.
>
> **[0:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=17)** This bears repeating.
>
> **[0:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=19)** Test doubles, when used in the wrong places, can be a bad thing.
>
> **[0:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=23)** While it's usually okay and even necessary to use test doubles for time-consuming things like network operations, and there are exceptions to this as well, most other use cases for test doubles are an indication of an underlying problem in the code base.
>
> **[0:39](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=39)** As an example, let's look at one of the most common situations where I see developers wrongly using test doubles.
>
> **[0:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=45)** Many times test doubles are used as a sort of bandaid for unit tests where a lot of setup code is required to test the desired piece of functionality.
>
> **[0:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=54)** When working in object-oriented code bases where stateful code can sometimes run rampant, testing certain pieces of our production code can often require us to write many lines of setup code to get our app into the state we want before we can actually test its behavior, and in these situations, many programmers simply mock out the objects in question and make them return the desired result without any setup.
>
> **[1:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=78)** As I said, using test doubles in this way is really just a bandaid for poorly architected code.
>
> **[1:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=84)** Instead of using test doubles in this case, we should really be asking ourselves why it is that the underlying production code requires so much setup just to get it to the right state and find a way to refactor it so that we don't need to do this.
>
> **[1:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=97)** Remember the simple pure functions we wrote in the [[Unit Testing]] section?
>
> **[1:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=101)** Testing those was dead simple.
>
> **[1:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=103)** All the data that the functions needed was passed in as arguments, and the only output of the function was the data that it returned.
>
> **[1:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=111)** No state was required to test our functions, and no side effects were produced as a result of running them.
>
> **[1:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=117)** Basically what I'm saying is this.
>
> **[2:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=120)** When you run into situations where it takes a lot of setup to test something, instead of using test doubles, see if you can refactor your production code to make its functions as pure as possible.
>
> **[2:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=131)** Another place to be careful with using test doubles is when dealing with third-party libraries.
>
> **[2:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=136)** There's a saying in TDD, don't mock what you don't own, and what it means is this.
>
> **[2:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=141)** Third-party APIs change, and so it doesn't make much sense to mock them out as they are at one point in time because if your tests don't ever interact with the actual API, that API could change, and your application could break even though all your tests still pass.
>
> **[2:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=157)** But hold on, didn't I say earlier that it's okay to create a test double for [[MongoDB]] to improve test performance?
>
> **[2:44](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=164)** We don't own MongoDB, do we?
>
> **[2:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=166)** No we don't, and there's a specific set of circumstances where MongoDB and other IO drivers like it should and should not be mocked out with test doubles.
>
> **[2:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=176)** We'll learn more about that in a future video.
>
> **[2:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=179)** And last but not least, in general, and there are exceptions to most things, but with this one, there are very few, there should never be test doubles in unit tests.
>
> **[3:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/when-shouldn-t-i-use-test-doubles?u=76281980&t=188)** If your unit tests have test doubles in them, that usually means that your production code is tightly coupled, and you should seriously consider refactoring it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (3), [[Unit Testing]] (1)
> **Prerequisites:** setup (5), required to (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** tdd (2), api (2)
> **Warnings:** be careful (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [The two categories of integration tests](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=0)** - [Instructor] So you've probably noticed that there's a pretty wide range of situations that can be covered by integration tests.
>
> **[0:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=6)** Unlike with unit tests, which ideally, we only write to test the outputs of pure functions, functions without state or side effects.
>
> **[0:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=13)** Integration tests are usually tasked with testing the functionality of our app on a larger scale.
>
> **[0:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=18)** So for example, they might test that our server sends back the appropriate response when queried, or that clicking a button on a page produces the desired result.
>
> **[0:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=27)** And this sort of thing is generally more complicated to test than just calling a function and checking its output.
>
> **[0:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=33)** And with that being said, conceptually, I like to divide integration tests into two basic categories.
>
> **[0:39](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=39)** And these two categories are single-service integration tests and boundary integration tests.
>
> **[0:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=45)** Single-service integration tests are meant to test the internal logic and functioning of one piece of our application, independent as much as possible of the other services it depends on in production.
>
> **[0:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=57)** So for example, if we had a full stack app with a front-end page, a server, and a database we'd want to test each part in isolation to make sure it functions correctly, ignoring its interactions with the other parts.
>
> **[1:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=69)** So to do single-service integration tests on a server, we'd want to create a test double for the database and use an [[Integration Testing]] framework to make queries to our backend instead of having the front end actually query our server.
>
> **[1:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=83)** And what this does is tests the internal logic of our server and make sure that it works as expected without wasting precious execution time on I/O operations for each and every specific case our app might encounter.
>
> **[1:35](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=95)** And keep in mind that this type of integration test is susceptible to outside change.
>
> **[1:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=100)** That is, the API for communicating with our database could completely change without us ever knowing and our tests would still pass.
>
> **[1:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=107)** But then, of course, our app would break in production.
>
> **[1:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=110)** In order to prevent this kind of thing from happening, we need another type of test.
>
> **[1:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=115)** And as I mentioned before, I call these boundary integration tests.
>
> **[1:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=119)** Now the job of boundary integration tests is to test the connection points between the various parts of our application.
>
> **[2:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=126)** These type of tests ensure that the one service is communicating correctly with the other services in our application.
>
> **[2:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=131)** For example, we'd want to have a boundary test to make sure that our front-end calls our server correctly or that our server interacts with our database correctly.
>
> **[2:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=140)** Now it's important to note that with boundary integration testing, we should not use test doubles for either service that we're testing the interaction between, since this would pretty much ruin the point.
>
> **[2:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=150)** We want to make sure that the interaction between both parts works exactly as expected under real circumstances.
>
> **[2:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=157)** So to test the interaction between the front-end and server, for example, we'd need a running instance of the backend and not a test double that behaves like the backend.
>
> **[2:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=167)** Now boundary tests are definitely going to be much slower to execute than unit tests or single-service tests, since they involve actual I/O operations and usually some setup as well.
>
> **[2:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=178)** But generally, this is balanced out by the fact that there are usually much fewer boundary tests.
>
> **[3:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/the-two-categories-of-integration-tests?u=76281980&t=182)** We'll see why this is later on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Integration Testing]] (2)
> **CLI Commands:** make (5)
> **Analogies:** for example (4)
> **Warnings:** keep in mind (1), note that (1)
> **Env Vars:** api (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [JavaScript libraries For integration testing](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=0)** - [Instructor] Now we're going to look at a few [[JavaScript]] libraries that can help us with [[Integration Testing]].
>
> **[0:05](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=5)** It's worth noting that the same libraries we used in the [[Unit Testing]] section, Mocha to run our tests and Chai to make testable assertions about the behavior of our code, are still valid when running integration tests.
>
> **[0:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=17)** In other words, we don't need any special test environments or anything to run our integration tests.
>
> **[0:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=22)** Now just as a side note here, the exception to this would be if you wanted to actually render your front end in a headless browser, in which case you would need to use something like PhantomJS or [[[Cypress.io]]](https://Cypress.io), but that's beyond the scope of this course.
>
> **[0:35](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=35)** So besides Mocha and Chai, there are two main other libraries that we're going to be using in this section.
>
> **[0:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=40)** There are of course a very large number of available libraries meant to help out with unit testing, but these are some of the more popular ones currently.
>
> **[0:49](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=49)** One of the favorite libraries to use for creating test doubles is called Sinon.
>
> **[0:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=53)** It provides a variety of different functions for creating mocks, stubs, and other test doubles that allow you to effectively perform integration tests when you need to verify how something works in isolation.
>
> **[1:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=64)** In other words, in single service integration tests, which we discussed in a previous video.
>
> **[1:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=69)** And for testing node servers, there's a very useful library called Supertest, which sadly doesn't have a flashy logo like the other ones, at least not that I could find.
>
> **[1:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=78)** Now what Supertest does is allows us to run integration tests on our node server without actually starting up the server.
>
> **[1:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=86)** And this is very helpful since waiting for a node server to start up can dramatically slow down our development.
>
> **[1:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/javascript-libraries-for-integration-testing?u=76281980&t=92)** Supertest allows us to query our server and get results, just as if the server was actually running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unit Testing]] (2), [[JavaScript]] (1), [[Integration Testing]] (1), [[Cypress.io]] (1)
> **CLI Commands:** node (3), make (1), find (1)
> **Definitions:** in other words (2), is called (1)
> **Cross-References:** we discussed (1), previous video (1)
> **URLs:** [cypress.io](https://cypress.io) (1)
> **Speakers:** - [instructor] (1)


### 4. Writing End-to-End Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [Integration testing in practice](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=0)** - [Instructor] So now that we've covered the basics for [[Integration Testing]], which could definitely seem like a lot of theory and dos and don'ts if we're not careful, we're going to cover a series of practical examples to show what integration tests might look like in the real world and see how they fit into the overall [[Test-Driven Development]] flow.
>
> **[0:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=17)** In the videos that follow, we're going to take a look at a few different coding situations and see how it's possible to cover them with integration tests, and this is going to include things like checking the endpoints of a Node server and interacting with the database.
>
> **[0:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=30)** We unfortunately won't be covering UI testing since that could really be an entire course in itself with all the different frameworks and libraries available for [[Front-End Development]].
>
> **[0:39](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=39)** The examples we'll be going through are all very important things that you'll likely run into as a developer, and so knowing how to properly test in these situations to ensure that your software behaves as expected will be a big help to you as you begin to incorporate TDD into your workflow.
>
> **[0:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=54)** Over time, you'll become so used to testing these things that you'll wonder why you used to waste so much time on [[Manual Testing]] before you started using integration tests.
>
> **[1:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=63)** Keep in mind as we go through these examples that in integration testing, there are often quite a few little tweaks and gotchas that we have to deal with.
>
> **[1:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=71)** This should in no way discourage you from adopting integration tests into your workflow.
>
> **[1:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=75)** Just as in writing production code, writing tests can many times take a little bit of creative thinking and research and there's absolutely nothing wrong with that.
>
> **[1:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=84)** In the examples that follow, I'll do my best to cover most of the little quirks that I've personally run into in doing integration testing so that you don't have to figure it out for yourself.
>
> **[1:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=94)** And finally another thing that you might find yourself wondering throughout these examples is where on earth are the unit tests?
>
> **[1:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=100)** So I've done my best to design these examples in a way that lets us spend most of our time looking at integration tests.
>
> **[1:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=107)** Unit tests really shine through in developing the complex logic that is necessarily a part of any real-world application.
>
> **[1:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/integration-testing-in-practice?u=76281980&t=115)** And I've done my best to keep these examples simple and fairly free from such logic so that they really highlight the benefits of integration tests and show you what their place is in TDD.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Integration Testing]] (3), [[Test-Driven Development]] (1), [[Front-End Development]] (1), [[Manual Testing]] (1)
> **CLI Commands:** node (1), find (1)
> **Env Vars:** tdd (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Testing Node servers with SuperTest](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=0)** - [Instructor] The first [[Integration Testing]] example we're going to look at here is testing routes on a Node server.
>
> **[0:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=6)** We're going to use TDD to develop a simple Node server, and to do this, we're going to use a library called SuperTest.
>
> **[0:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=12)** Now, I touched briefly on SuperTest in a previous video.
>
> **[0:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=15)** It's a very useful testing library that lets us test the functionality of a Node server without actually starting it up, which saves us a lot of time when running our tests.
>
> **[0:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=24)** So let's take a look at how to do this.
>
> **[0:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=26)** The first thing you'll want to do is open up a code editor.
>
> **[0:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=29)** I personally use VS Code.
>
> **[0:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=31)** And create a new directory.
>
> **[0:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=32)** We're going to call it tdd-server.
>
> **[0:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=36)** Or you can call it whatever else you want.
>
> **[0:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=41)** And next we're going to open up a terminal.
>
> **[0:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=43)** I'm going to use VS Code's built-in terminal here.
>
> **[0:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=46)** And make sure we're in the directory that we just created.
>
> **[0:49](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=49)** And now we've got to do the same setup that we did for our unit test demonstration in the previous section, and the easiest way to do that is going to be just to copy and paste the package.[[JSON]] and babelrc files from that directory into this one.
>
> **[1:05](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=65)** So we'll copy and then paste.
>
> **[1:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=69)** And you can also just download the source code if you want.
>
> **[1:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=72)** After that, we're going to have to run [[npm]] install to install all the packages in our package.json file.
>
> **[1:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=80)** And then we're going to add the packages that are specific to this project by running npm install --save express, and then we're going to do npm install --save-dev supertest.
>
> **[1:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=97)** And now that we've got that set up, let's talk for a moment about the server we want to create.
>
> **[1:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=102)** After all, we can't write a test if we're not sure about the requirements.
>
> **[1:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=106)** So let's say that we're building a [[Representational State Transfer (REST)|rest]] API and we want to create a GET endpoint that the front end can use to get info about a certain user.
>
> **[1:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=115)** So in other words, the front end can make a request to /users/abc, where abc is the user's username that we want info about, and as a response, it will get a JSON object containing this user's data, which should include the ID, username, and email address of the user.
>
> **[2:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=136)** And last but not least, the response should also include the appropriate 200 response code and JSON content type header.
>
> **[2:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-node-servers-with-supertest?u=76281980&t=143)** There are, of course, other specifications that we could add on here, but for now we're just going to leave it there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[npm]] (3), [[Integration Testing]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (3), npm (3), make (2)
> **Prerequisites:** install (4), setup (1), set up (1)
> **Env Vars:** json (2), tdd (1), api (1)
> **Tools:** vs code (2), terminal (2)
> **File Paths:** package.json (2)
> **Exercise Files:** download the (1), source code (1)
> **API Endpoints:** get  (1)

#### [Testing an endpoint: The basic approach](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=0)** - [Instructor] So now that we have the basic specifications for our userinfo endpoint, let's look at how to write an integration tests that captures these requirements.
>
> **[0:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=8)** So first, we're going to go into our project and create a source directory to hold our code.
>
> **[0:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=14)** So create a new folder called source.
>
> **[0:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=17)** And then inside this directory, we're going to create a few files.
>
> **[0:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=21)** The first file will create will call server.js, and this will hold our server code.
>
> **[0:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=28)** And then we'll create another file called server.test.js, which will contain the tests for our server code.
>
> **[0:35](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=35)** And then we'll create a file called dB.js, which will contain logic for dealing with our database.
>
> **[0:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=42)** And finally, will have a file called db.test.js, which will have tests for our DB file.
>
> **[0:49](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=49)** So before we start writing any tests, let's take a moment to think about our plan of attack with regards to testing this thing.
>
> **[0:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=55)** We have two main conflicting needs here.
>
> **[0:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=58)** Our first need is that our tests need to execute quickly.
>
> **[1:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=62)** So in many cases we'll want to use test doubles to prevent our tests from taking a significant amount of time to run due to I/O operations.
>
> **[1:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=70)** And since our back-end here is going to be using [[MongoDB]] to store data we'll need to figure out a way to write many of our tests without actually making MongoDB queries.
>
> **[1:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=78)** Since if we had several hundred tests, making actual queries, it would significantly slow down our tests.
>
> **[1:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=84)** And we're going to be using test doubles for these tests.
>
> **[1:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=87)** So these will be the single service tests that we talked about previously.
>
> **[1:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=91)** However, as I also mentioned, for accuracy, we do want to have some tests that actually interact with our external services to make sure that they behave as we expect them to.
>
> **[1:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=102)** And these tests are going to be the boundary integration tests that we talked about before.
>
> **[1:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=106)** So how do we reconcile these two requirements in our integration test suite?
>
> **[1:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=110)** Well, the method I use is this, first, I create a sort of wrapper around whatever database driver I'm using.
>
> **[1:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=116)** In this case, it will be the MongoDB driver and the integration tests that I write use a real database to make sure that these functions work properly.
>
> **[2:05](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=125)** So I don't use test doubles here, this wrapper will usually include functions for getting and accessing resources such as getUser or createUser.
>
> **[2:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=134)** And these perform some kind of database operations behind the scenes.
>
> **[2:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=138)** Now, the key here is that the [[Representational State Transfer (REST)|rest]] of the production code rewrite.
>
> **[2:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=141)** The rest of our server code is only allowed to talk to the database through this wrapper.
>
> **[2:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=147)** So when we write a user's endpoint that gives us info about a user in our database, instead of interacting with the database directly, we have to call whatever wrapper method we created to perform the desired database interaction.
>
> **[2:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=160)** In this case, it would be something like getUser.
>
> **[2:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=163)** Now the second part of this [[Integration Testing]] method is that for the integration tests for the rest of our server, for everything besides communicating with the database, or other external services, we create a test double for this database wrapper, which returns a fake value and checks Make sure that the right method was called with the right arguments when an endpoint is triggered.
>
> **[3:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=184)** In this way, we cover the whole flow of our server with integration tests without actually interacting with a database and every test.
>
> **[3:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=191)** So we make sure that the database wrapper, which covers the basic database operations that are at needs, produces the expected output given a set of inputs when interacting with a real database.
>
> **[3:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=203)** And from there, we can simply use a fake version of it when testing the rest of the back-end.
>
> **[3:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=208)** We'll see how to do all of this by the way in later videos.
>
> **[3:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-an-endpoint-the-basic-approach?u=76281980&t=211)** For now, it's just important that you understand the basic concept and why it works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (4), [[MongoDB]] (3), [[Integration Testing]] (1)
> **File Paths:** server.js (1), server.test.js (1), db.js (1), db.test.js (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** getuser (2), db (1), createuser (1)
> **Cross-References:** we talked about (2)
> **Analogies:** such as (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Creating a Mocha setup file](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=0)** - [Instructor] There's one more thing we have to do before writing and running our first integration tests.
>
> **[0:05](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=5)** Since some of our tests will involve communicating with a database and possibly some other IO operations, it's safe to assume that we'll be using async/await in our code.
>
> **[0:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=14)** Now, you might assume that Mocha would work out of the box with the async/await syntax, but unfortunately it currently does not.
>
> **[0:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=20)** If you try to test asyn/await code without this fix we're about to look at, you'll most likely get a weird error message when running your tests.
>
> **[0:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=27)** In order to avoid this, we just have to install a package.
>
> **[0:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=31)** So, open a terminal, and make sure you're inside your project directory, and then run [[npm]] install--save-dev regenerator-runtime.
>
> **[0:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=41)** And hit enter.
>
> **[0:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=42)** Now, in theory all we really need to do is import this package at the top of our first test file that runs.
>
> **[0:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=48)** And it'll make our async tests work.
>
> **[0:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=51)** And that would work, however we don't want to have to worry about which of our test files gets run first.
>
> **[0:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=56)** So, I'm going to show you a different way.
>
> **[0:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=58)** Mocha allows us to specify separate files that are run before any of our other code.
>
> **[1:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=63)** So, what we can do is create a separate file, import regenerator run time there, and then be confident that this package will get imported before any of our other tests run.
>
> **[1:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=72)** So, let's create a file in our source directory.
>
> **[1:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=76)** And we'll call it Mocha-setup.js.
>
> **[1:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=79)** And then, inside this file we simply have to add the line import regenerator runtime/runtime.
>
> **[1:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=88)** And save our file.
>
> **[1:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=90)** And once we've done that, we need to tell Mocha about this file so that it loads it before any of the others.
>
> **[1:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=96)** And to do that, we need to edit the command that we used to run Mocha.
>
> **[1:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=100)** And that'll be in our package.[[JSON]] file.
>
> **[1:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=103)** And we need to find the test script here, which is right here.
>
> **[1:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=108)** And at the end of this test script, we're going to add another flag that'll be --file and then the file path of the file we just created which will be source/Mocha-setup.js.
>
> **[2:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=121)** Save this.
>
> **[2:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=122)** And this should be all we need for now.
>
> **[2:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-a-mocha-setup-file?u=76281980&t=124)** We'll see in future videos a few more ways that we could use this file to load things for our tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[JSON]] (1)
> **CLI Commands:** make (2), npm (1), find (1)
> **Prerequisites:** install (2), setup (2)
> **File Paths:** mocha-setup.js (1), package.json (1), source/mocha-setup.js (1)
> **Env Vars:** npm (1), json (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 5. Improving Your TDD Workflow

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing database communication: Basic setup](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=0)** - [Instructor] So now that we've got our project set up correctly, let's start writing some tests.
>
> **[0:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=4)** We're going to start off by testing and coding our database wrapper, since writing this first will allow us to create test doubles of it in the tests for the [[Representational State Transfer (REST)|rest]] of our server.
>
> **[0:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=13)** And you could really just create empty functions for these, create test doubles of those, and develop the rest of the server first, but I generally prefer to do it this way.
>
> **[0:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=23)** So since we're going to be developing an endpoint that allows us to get a user by their user name, we're going to need to read from the database.
>
> **[0:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=30)** So let's create a wrapper that does this.
>
> **[0:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=32)** Let's import our currently non-existent function which we'll call get user by user name, import, get user by user name, from db, and we're also going to import expect.
>
> **[0:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=47)** Import, expect from chai.
>
> **[0:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=51)** We're going to start off our tests by writing a describe statement, and inside we'll say get user by user name for the description, and inside here, we're going to write a test saying that it should get the correct user from the database given a user name.
>
> **[1:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=71)** And this anonymous function here is going to need to be labeled with the async keyword since we're going to be using the await keyword inside here.
>
> **[1:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=78)** And now we have to take a minute to think about how we can insure that this get user by user name function does what it's supposed to do.
>
> **[1:25](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=85)** A good way to test database operations is usually to start with an empty test database, set it up with whatever test data we need, and then run our function to see if it gives us the correct result based on the database state.
>
> **[1:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=98)** It's usually also a good idea to check the state of the database after running our function to make sure there were no adverse effects such as deleting records when we didn't mean to.
>
> **[1:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=108)** This code will eventually be touching our production database after all.
>
> **[1:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=112)** We need to make sure that there's no way our production data could be adversely affected by our code changes.
>
> **[1:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=117)** So we're going to start off by setting up our database here.
>
> **[2:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=121)** And even though due to our design choices we're not going to be allowed to refer to [[MongoDB]] directly in the rest of our production code, we're allowed to do so in our tests to do set up and tear down in order to make sure our production code works correctly.
>
> **[2:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=134)** So let's write that set up and tear down code now.
>
> **[2:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=136)** This is all going to be MongoDB basic, so don't worry if you're not familiar with the exact syntax.
>
> **[2:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=141)** It's pretty self-explanatory.
>
> **[2:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=143)** So first we need to install the MongoDB driver, using [[npm]] install MongoDB.
>
> **[2:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=149)** And once that's run, up at the top of our test here, we're going to do import Mongo Client from MongoDB.
>
> **[2:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=162)** This is what we use to get a connection to our database.
>
> **[2:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=165)** And now inside our test here we're going to connect to our database.
>
> **[2:49](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=169)** We'll say const client equals await Mongo Client.connect
>
> **[2:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=178)** And then the URL of our database which in this case will be mongodb://localhost:27017/test_DB
>
> **[3:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=190)** which is the name of our test database here.
>
> **[3:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=192)** And then we need to pass a configuration object here that just contains a few keys that are necessary for MongoDB.
>
> **[3:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=198)** So the first one is going to be use new URL Parser, and that's going to be true, and the second one's going to be use unified topology, and that's going to be true as well.
>
> **[3:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=209)** And once we've done that, we're going to say const db equals client.db, and then the name of our test database which is going to be TEST_DB, and finally at the end here, we're going to have to say client.close to close our connection to the database.
>
> **[3:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-database-communication-basic-setup?u=76281980&t=225)** And in between here is where we're going to do our actual testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7), [[Representational State Transfer (REST)|Rest]] (3), [[npm]] (1)
> **CLI Commands:** make (3), mongo (2), npm (1)
> **Prerequisites:** set up (3), install (2)
> **Env Vars:** url (2), test_db (1)
> **URLs:** [localhost:27017](https://localhost:27017) (1)
> **Ports:** :27017 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Database setup and teardown in tests](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=0)** - So now that we've got that boiler plate out of the way, our next step is to setup our test database for testing.
>
> **[0:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=6)** Since we want to test that our get user by username function returns the correct user from our database.
>
> **[0:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=12)** Let's setup our database with some dummy data, and see if our function performs correctly on that data.
>
> **[0:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=18)** So we're going to create an array here that we're going to insert into the database, and it'll have some fake database data in it.
>
> **[0:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=24)** So we'll say const fake data, and then I'm just going to paste this fake data, but you're more than welcome to get it from the exercise files.
>
> **[0:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=32)** So we have two users that we're going to insert into the database, one that we want and one that we don't want.
>
> **[0:39](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=39)** And we're going to check and make sure that our get user by username function gets the right one from the database.
>
> **[0:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=45)** And actually inserting this data looks like this, we say await D-B dot collection users dot insert many
>
> **[0:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=57)** fake data, and that will setup our database the way we want it.
>
> **[1:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=61)** And now here's where the real testing logic comes in we're going to create a new constant to hold the result of our get user by username function so we'll say const actual equals await get user by username and then the username of the user that we want to get A-B-C, and at this point we'll want to get the state of the database, now that we've run our get user by username function, so we'll say const final D-B state equals and then they way we do that is by saying await D-B dot collection users dot find with no arguments and then dot to array with no arguments.
>
> **[1:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=105)** And after that we need to remember to reset our database so it doesn't affect our other tests that we run and the way we do that is by saying await D-B dot drop database called with no arguments.
>
> **[2:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=120)** And now we're going to define our expected value which is just the first user here so we'll copy and paste that so we'll say const expected equals the user we copied and after this we're going to make the assertions so the first assertion we want to make is that our actual value equals our expected value so we're going to say expect actual to deep equal expected
>
> **[2:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=150)** and after that we want to check to make sure that our final D-B state equals the initial D-B state to make sure that our get user by username function didn't harm it in anyway.
>
> **[2:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=160)** So we'll say expect final D-B state to deep equal fake data
>
> **[2:49](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=169)** which is the original D-B state.
>
> **[2:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=171)** Now you might be wondering why we're doing this in this order here?
>
> **[2:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=176)** why are we getting the final D-B state and dropping our database, before our actual assertions?
>
> **[3:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=181)** Well the reason for this is that if one of these assertions fail, and our drop database function is after it, it will never actually get called and it will set all our tests off for the future.
>
> **[3:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=192)** And in fact this client dot close should really be above our assertions too, so let's move it.
>
> **[3:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=199)** And now we can run our tests to see if it's failing, but before you do that, make sure that you have Mongo D-B installed and running on your computer.
>
> **[3:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=207)** And the way you start it up is by saying Mongo D and hitting enter, I've already got it running on mine, so I don't need to do that.
>
> **[3:35](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=215)** So if we run our test now with M-P-M run test, we see that a fail saying get user by username is not a function, and that's exactly what we expected since we haven't implemented anything yet so lets do that now, so the implementation of our get user by username function is going to be pretty straight forward.
>
> **[3:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=237)** Lets start by importing Mongo client which we'll need here too.
>
> **[4:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=242)** From Mongo D-B and we'll say export const get user by username, and it's going to be a a sync function that takes username as an argument and inside here, it's going to be very similar database code to what we had in our test so we can just copy and paste that for now we need everything through client closed here and we'll paste that in here and we're going to delete all our extra test code and now that we've done that and our get user by username function is connected to our database we're going to find our user by saying const result equals D-B dot collection users dot find one, where the username is equal to the username argument that got passed in
>
> **[4:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/database-setup-and-teardown-in-tests?u=76281980&t=296)** and we need to have await in front of that and finally after this client close here we're going to return our result and if we run our test now we see that we get a very interesting error our test is failing because the actual value has this underscore id property and our expected value doesn't let's take a look at how to fix this

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), mongo (4), find (3)
> **Prerequisites:** setup (3)
> **Best Practices:** remember to (1)
> **Speakers:** - so (1)

#### [Ignoring object properties in Mocha](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=0)** - [Instructor] So the reason that our actual result contains this _id property is because we're fetching it from [[MongoDB]], which automatically adds a unique ID to a record when it's inserted into the database.
>
> **[0:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=13)** And this isn't necessarily a bad thing.
>
> **[0:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=15)** We want MongoDB to do this, but it does sort of throw a wrench in things as far as our tests are concerned, since we can't really know the unique ID that MongoDB is going to assign until it's already done.
>
> **[0:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=26)** One possible thing that we could do, since this insertMany method gives us back the IDs that were assigned to the successfully inserted records, is create a constant to hold these new IDs, and then we could sort of map these IDs into our expectations down below.
>
> **[0:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=41)** But that's kind of a pain to have to do and it clutters up our tests quite a bit.
>
> **[0:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=45)** And really, in the end, it doesn't give us that much of a benefit for the amount of time and code it takes.
>
> **[0:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=50)** So I'm going to show you an easier, cleaner way to do it.
>
> **[0:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=54)** If we look at the syntax of how we write our expectations, we see that chai, the assertion library we're using, gives us quite a bit of flexibility as far as writing out assertions.
>
> **[1:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=64)** It allows us to write things in a very human-readable way and has a lot of different ways that we can test things in our code.
>
> **[1:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=71)** Now, outside the normal functionality that chai provides out of the box, there are also extensions that we can install and use that allow us to extend the functionality of chai.
>
> **[1:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=81)** The particular extension we're going to be interested in here is an extension called chai-exclude, which allows us to check if our actual results match the expected results excluding certain properties.
>
> **[1:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=93)** In this case, the _id property that MongoDB adds is what we want to exclude.
>
> **[1:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=98)** So let's see how to add and use this extension.
>
> **[1:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=101)** So, first, in your terminal, let's install the chai-exclude package by typing [[npm]] install --save-dev chai-exclude.
>
> **[1:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=113)** And next, let's open up our mocha-setup file that we created in the previous video, and what we're going to do is, at the bottom of this file, we're going to add a few lines.
>
> **[2:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=122)** First, we're going to import chai, so we'll say import chai from chai, and then we're going to import chai-exclude, import chaiExclude from chai-exclude, and, finally, we're going to add chai-exclude to chai by saying chai.use(chaiExclude).
>
> **[2:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=146)** Now, if we go back to our test code in db.test, the way that we use the chai-exclude package that we just set up is by doing this.
>
> **[2:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=154)** Just after the expect(actual) here, we're going to say .excludingEvery and then _id.
>
> **[2:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=163)** And then we're going to add that to the finalDBState as well, .excludingEvery('_id').
>
> **[2:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=170)** And again, what this is doing is that it's saying that we expect the actual value, excluding the _id property that it has, to.deep.equal our expected value.
>
> **[3:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/ignoring-object-properties-in-mocha?u=76281980&t=182)** And if we run our tests now, we see that it passes, which is great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (4), [[npm]] (1)
> **Code Identifiers:** chaiexclude (2), excludingevery (2), insertmany (1), finaldbstate (1)
> **Prerequisites:** install (3), setup (1), set up (1)
> **Cross-References:** previous video (1), go back to (1)
> **CLI Commands:** npm (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using environment variables in testing](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=0)** - So now we have our first passing integration test, which is great.
>
> **[0:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=4)** However, I do want to point out that we're hard-coding our test database name into our production code, and this is definitely not what we want.
>
> **[0:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=13)** The problem is if we switch over and instead hard-code our production database here, we wouldn't be able to test it effectively without switching over our test code to use the production database, which is also definitely not what we want.
>
> **[0:25](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=25)** So what do we do here?
>
> **[0:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=26)** The answer is to use environment variables.
>
> **[0:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=29)** Some of you may be familiar with environment variables from working with dev and production environments, they allow you to pass in different values to your code depending on the environment your code is running in.
>
> **[0:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=40)** So for example they allow you to do stuff like have different [[Databases]] depending on whether your code is running in a production, development, or test environment.
>
> **[0:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=48)** And that's exactly what we need here, so let's see how we can do that.
>
> **[0:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=51)** So what we're going to do is open up our package.[[JSON]] file and in this test script here, we're going to add an environment variable that allows our test to tell what environment it's actually running in.
>
> **[1:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=63)** So we're going to add at the very front of this, we're going to say NODE_env equals test.
>
> **[1:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=69)** And then if we save this and open up our dv.js file, what we can do here is say const DB_name equals, and here we're going to use a ternary operator to change the name of the database that we're referencing depending on that NODE env environment variable we just used.
>
> **[1:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=89)** So we're going to say process.env.NODE env, triple equals test.
>
> **[1:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=98)** So here we're checking if our NODE env environment variable is equal to test and if it is, then our DB name is going to be equal to test_DB.
>
> **[1:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=107)** And if it isn't, we're going to set it equal to prod_DB.
>
> **[1:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=112)** Now, in your own projects you might want to choose different names for these databases, but for now we're just going to use these.
>
> **[1:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=119)** And what we can do now that we have this DB name here, is instead of hardcoding test_DB into our URL, we can simply insert the DB name constant into here.
>
> **[2:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=131)** And we want to do it here as well, DB_NAME.
>
> **[2:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=137)** And if we run our tests again, we swee that once again they pass, except now we don't have the DB name hardcoded to our test database.
>
> **[2:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/using-environment-variables-in-testing?u=76281980&t=147)** And that's all there is to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[JSON]] (1)
> **Env Vars:** node (3), url (1), db_name (1)
> **File Paths:** package.json (1), dv.js (1), process.env (1)
> **CLI Commands:** node (3)
> **Analogies:** for example (1)
> **Speakers:** - so (1)

#### [Creating test helpers](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=0)** - [Instructor] So now that we've mostly gone through the first TDD cycle with [[Integration Testing]], which by the way didn't involve any [[Unit Testing]] iterations since in this case those wouldn't really have added any value above and beyond our integration tests, you might notice that this code that we've written for our tests is kind of a mess.
>
> **[0:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=17)** Well it's not necessarily a mess but it's certainly got a lot more code than we'd like to have inside our tests.
>
> **[0:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=23)** Specifically, there's no reason that we should have all the technical details of setting up and tearing down our data base directly in our test file.
>
> **[0:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=31)** For one, this means that we'll have to repeat all this code for every test that needs it, and it's also just a lot of code that we don't really care that much about here.
>
> **[0:39](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=39)** All we care about here is that the database has the correct data before and after our production code has run.
>
> **[0:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=45)** So then, what we're going to do is refactor this code a little bit before we move on.
>
> **[0:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=50)** We're going to pull all this database setup logic into it's own helper functions.
>
> **[0:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=55)** So why don't we create another file inside the source directory and we'll call it testhelpers.js.
>
> **[1:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=61)** And inside this file we're going to create three helper functions.
>
> **[1:05](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=65)** The first is going to be called set database data, so we'll say export const set database data, and this is going to be for setting up our database with the correct data beforehand.
>
> **[1:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=77)** And it's going to be async and it's going to take two arguments, one argument for the collection name we want our data to be in, and another argument for the actual data we want that collection to contain, we'll call that data.
>
> **[1:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=91)** And the second function we're going to create here will be called export const, get database data, and this one's going to be async as well.
>
> **[1:39](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=99)** And this is going to take a single argument specifying the collection name that we want to get the data from.
>
> **[1:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=105)** And finally we're going to create a function called reset database which we can use to drop our database after our tests.
>
> **[1:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=112)** So we'll say export const, reset database, and this one will be async and won't take any arguments.
>
> **[2:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=124)** So inside of all of these functions we're just going to sort of copy and paste all this database setup and tear down code from our test.
>
> **[2:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=132)** All the way through client close is what we want, so I'm going to paste that in there.
>
> **[2:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=138)** Let's delete this fake data constant here.
>
> **[2:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=141)** And we also want to delete our test specific constants and the drop database part.
>
> **[2:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=147)** And from here what we want to do is we want to replace this hard coded users collection with the collection name argument we pass in and we want to replace fake data with the data argument we pass in.
>
> **[2:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=161)** And that should be good for that.
>
> **[2:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=163)** Let's copy this code and use it to set up our get database data function.
>
> **[2:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=170)** So the main change we want to do here is say const result, and instead of doing db.collection.insertmany, we don't want to insert anything here, we want to do .find with no arguments and .toarray with no arguments.
>
> **[3:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=188)** And finally at the end here, we want to return this result.
>
> **[3:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=193)** You might notice that this looks pretty similar to the get user by username function that we had.
>
> **[3:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=199)** And last but not least, let's implement this reset database function.
>
> **[3:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=203)** We can paste the same code that we had for the others.
>
> **[3:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=206)** And instead of doing this database operation here, we can simply say await db.dropdatabase.
>
> **[3:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=216)** And that should be all we need.
>
> **[3:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=218)** Now that we've got all these test helpers set up, we can go back to our integration test and we can replace all this setup code with the test helpers we just created.
>
> **[3:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=228)** So let's delete these.
>
> **[3:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=231)** We can delete these two as well.
>
> **[3:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=234)** We also want to delete this and this.
>
> **[3:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=239)** And let's replace these with our test helpers.
>
> **[4:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=242)** And so for this one here we can say that DB state is equal to await get database data from the user's collection.
>
> **[4:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=253)** And right here we want to say await set database data for the user's collection and we'll pass our fake data.
>
> **[4:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=263)** And lastly right here, we want to say await reset database.
>
> **[4:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=270)** And let's make sure that we import these.
>
> **[4:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=272)** In my case, VS code already automatically imported them for me, but if yours didn't make sure you add it.
>
> **[4:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=277)** And since we're no longer referring to mongo client in our test code anymore we can just delete this import line.
>
> **[4:44](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=284)** And deleting that line reminds me that we never imported the mongo client into our test helpers file, so let's do that.
>
> **[4:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=293)** Import mongo client from [[MongoDB]].
>
> **[4:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=296)** And if we run our tests again, we see that they still pass.
>
> **[5:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-helpers?u=76281980&t=301)** The only difference now is that our test code is much cleaner and more readable, and we don't have to worry about all the specifics of setting up mongo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Integration Testing]] (1), [[Unit Testing]] (1), [[MongoDB]] (1)
> **CLI Commands:** mongo (4), make (2), find (1)
> **Prerequisites:** setup (3), set up (2)
> **File Paths:** testhelpers.js (1)
> **Env Vars:** tdd (1)
> **Cross-References:** go back to (1)
> **Tools:** vs code (1)
> **Definitions:** means that (1)

#### [Resetting the database between tests](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=0)** - [Instructor] I mentioned in a previous video that an absolutely essential part of effective testing is making sure that our tests are absolutely independent of one another.
>
> **[0:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=9)** In other words, the setup, teardown, and production code calls we make in one test should not carry over into any other tests.
>
> **[0:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=17)** Otherwise we end up with fragile tests where the results of one test can impact the results of another test, and this can make it very difficult to ensure that our tests are actually testing the right things, and it can also make it difficult to track down what actually went wrong if some of our tests fail.
>
> **[0:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=33)** So as it happens, we're currently at risk of violating this rule in our integration test.
>
> **[0:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=38)** Look at this resetDatabase call here.
>
> **[0:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=41)** If we were to forget this resetDatabase call in one of our tests, this would mean that it could potentially affect other tests that use the users collection in our Mongo database.
>
> **[0:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=50)** In this case, our old data would be left over there and it might possibly throw off the results of whatever the next test is, and this could either mean triggering a false negative, making our test fail when everything's fine, or more dangerously, it could produce a false positive, making our test pass when there's actually something wrong with our production code.
>
> **[1:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=69)** So we currently have to remember to do this at the right place in each and every integration test that makes changes to the database.
>
> **[1:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=75)** And I don't know about you, but I have a tendency to forget things like that.
>
> **[1:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=79)** So what I do instead is use what's called an afterEach hook.
>
> **[1:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=82)** An afterEach hook is something provided by Mocha that allows us to run some code after every test in a given block, and it looks like this.
>
> **[1:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=91)** Up at the top in our describe block, we're going to say afterEach, and it lets us put a description in here, so we can say reset the database, and this is going to be async, and inside here, we're going to say that after every test, it should call the resetDatabase function.
>
> **[1:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=111)** And of course we have to await.
>
> **[1:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/resetting-the-database-between-tests?u=76281980&t=114)** So if we go down and remove this from our test and then run our test again, we see that it still passes, except now we don't have to remember to put this resetDatabase thing in the right place in each of our tests, and that saves us a lot of trouble down the road.

> [!info]- Semantic Content
>
> **Code Identifiers:** resetdatabase (4), aftereach (3)
> **CLI Commands:** make (3), mongo (1)
> **Cross-References:** previous video (1)
> **Definitions:** in other words (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 6. A Real-World Example

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating test-doubles with Sinon](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=0)** - [Instructor] Over the past few videos, we've used TDD with [[Integration Testing]] to start building a database communication layer that'll be used throughout the [[Representational State Transfer (REST)|rest]] of the app.
>
> **[0:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=9)** While our database communication layer currently contains only one function, the development of any other similar functions, such as creating a new user or fetching some other resource, such as an article info if this were a blog, would be developed using very similar methods to those that were covered in the previous section.
>
> **[0:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=26)** For now we're going to move on and take a look at how to build out our server endpoint using integration testing.
>
> **[0:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=32)** So to start, let's install a library called sinon which will help us create test doubles in our integration tests.
>
> **[0:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=38)** And we do that by running [[npm]] install --save-dev sinon, S-I-N-O-N.
>
> **[0:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=48)** And once we've done that, let's open up our server.test.js file and start writing some tests.
>
> **[0:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=54)** So since we know some of the requirements of an endpoint, we're first going to say describe, and we're going to be testing what happens when we send a get request to /users/username.
>
> **[1:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=67)** So for this description, we'll say, "GET /users/:username."
>
> **[1:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=74)** And then inside this describe block for our first test, we're going to say that our server should send the correct response when a user with the username is found.
>
> **[1:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=92)** And this is going to be an asynch test.
>
> **[1:35](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=95)** So as I mentioned in a previous video, we now have the basic functionality of our database interaction down.
>
> **[1:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=101)** We tested and developed code that abstracts away the specifics of communication with our database.
>
> **[1:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=107)** So now, for developing the rest of our code, we can simply create a test double for our database communication layer that behaves in a similar way without actually performing time-consuming database operations, since we want to keep our test suite fast.
>
> **[2:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=121)** And the way we do this is by using test doubles, and, as I mentioned already, for this we're going to be using a library called sinon.
>
> **[2:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=129)** And it's probably easiest just to show you how sinon works.
>
> **[2:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=132)** So we're going to be using a library called supertest to test our server endpoints, and when we do this, if our code is implemented correctly, it's at some point going to call our get UserByUsername function that we created.
>
> **[2:25](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=145)** And this function is going to try and communicate with a real Mongo database.
>
> **[2:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=148)** However, as we discussed before, we don't actually want our code to communicate with a real Mongo database in our tests because this will slow down our test suite significantly.
>
> **[2:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=158)** So to get around this, we're going to use test doubles, and to create our test doubles, we're going to use sinon which is the library we just installed.
>
> **[2:46](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=166)** But before we can actually create a test double with sinon, we need to do something first.
>
> **[2:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=171)** We need to open up our db.js file, and at the bottom we're just going to add a line here that says, "export default get UserByUsername."
>
> **[3:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=184)** And I'll show you why we're doing this in a second.
>
> **[3:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=186)** So if we go back to our server.test file, we're going to import a few things.
>
> **[3:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=190)** First we're going to import sinon from sinon.
>
> **[3:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=195)** We're going to import supertest as well, and to do this we're going to say, "import request from supertest."
>
> **[3:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=202)** And we're going to import expect from chai as well, and then we're going to say, "import db from ./db."
>
> **[3:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=213)** So here's where the export thing that we just did and sinon come together.
>
> **[3:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=217)** What we're going to use sinon for is to create a test double, a fake version of our get UserByUsername function, and so, when we test our endpoint, our production code will think it's calling the real get UserByUsername function, but it'll actually be calling the fake version we created.
>
> **[3:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=233)** And that's going to look like this.
>
> **[3:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=234)** Fist we're going to set up some fake data.
>
> **[3:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=237)** To do that, we can just copy and paste from our db.test file.
>
> **[4:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=241)** We're going to want a fake user object, like this one.
>
> **[4:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=246)** We'll say, "const fakeData equals that."
>
> **[4:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=249)** And here's where we use sinon to create a stub.
>
> **[4:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=252)** We're going to say, "const stub equals sinon .stub."
>
> **[4:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=259)** And on this DB object that we import, we're going to say that, on that object, we want to stub out the get UserByUsername method.
>
> **[4:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=269)** And then we're going to say that that method resolves with the fake data we just defined, and what that means is that, when our production code says, "Oh, wait.
>
> **[4:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=277)** "Get UserByUsername with some arguments," it'll get back this fake data instead.
>
> **[4:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=283)** And when creating stubs, there is one thing that we have to remember to do.
>
> **[4:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=287)** We have to remember, at the bottom of our test, to call stub.restore.
>
> **[4:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/creating-test-doubles-with-sinon?u=76281980&t=292)** The way sinon works is by actually replacing the get UserByUsername method of our database wrapper with a fake version, and calling this stub.restore here makes sure that the method is returned to normal before any other tests run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Integration Testing]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[npm]] (1)
> **CLI Commands:** mongo (2), npm (1)
> **Cross-References:** previous video (1), we discussed (1), go back to (1)
> **Prerequisites:** install (2), set up (1)
> **File Paths:** server.test.js (1), db.js (1)
> **Analogies:** such as (2)
> **Code Identifiers:** fakedata (1)
> **API Endpoints:** get  (1)

#### [Testing a Node endpoint with SuperTest](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=0)** - [Narrator] So now that we've created our test double to make sure no real database calls happen, we can take a look at how to actually test an endpoint.
>
> **[0:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=8)** And the frame work we're going to be using to do this is called SuperTest.
>
> **[0:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=11)** And as I mentioned in a previous video, it allows us to test server endpoints of a note server, without actually starting up the server.
>
> **[0:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=18)** And this saves us a lot of time, since starting up a server just to run tests can be pretty time-consuming.
>
> **[0:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=24)** So we're going to use SuperTest to check a few things about our endpoint.
>
> **[0:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=27)** First, we want to check that the correct status code and content type header is sent in the response.
>
> **[0:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=33)** And we also want to make sure that the body of the response is what we expect it to be.
>
> **[0:37](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=37)** So here's how we check all these things.
>
> **[0:39](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=39)** We've already done import request from SuperTest.
>
> **[0:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=42)** The one thing we have left to import is the app object from our server.js file.
>
> **[0:47](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=47)** And this doesn't exist yet, of course.
>
> **[0:49](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=49)** But when we do create it, we'll have to remember to export it like this.
>
> **[0:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=53)** And the way that we're going to use SuperTest to test our server is by saying request, app, .get, and then /users/username.
>
> **[1:05](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=65)** We're going to use ABC for the username, since that's the username of this fake user here.
>
> **[1:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=71)** And what this line says here, is that we're going to be testing how our server app behaves when it receives a get request on the endpoint /users/ABC.
>
> **[1:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=82)** And the way that we define our actual expectations here is by adding a few more lines to this request column.
>
> **[1:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=88)** So to check the status code, which should be 200 if everything was successful, which is what this test is simulating, we say .expect 200.
>
> **[1:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=98)** And then to check the content type header, which in this case, should be some sort of [[JSON]] content since we're expecting to get back the user object, we say .expect, content-type/json/.
>
> **[1:54](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=114)** And we're using a regex here because there are a lot of different possible content types that include json, all of which should be valid for our app.
>
> **[2:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=122)** And finally, to check the response body, we say expect, and then the fake data object we defined up above.
>
> **[2:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=131)** And the reason we're doing this is that if everything goes as planned and our db wrapper returns a user object, we want the server to simply respond with that object.
>
> **[2:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=140)** That's what this test is saying here.
>
> **[2:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=142)** And that block right there is basically how we check how our server will behave when it receives a get request on the users/username endpoint.
>
> **[2:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=151)** Now there's one last assertion that we need to check for, however.
>
> **[2:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=154)** We need to make sure that our stub test double that we created here, which is the fake version of our getUserByUsername function, we need to make sure that that gets called with the correct arguments.
>
> **[2:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=165)** And the reason we need to check for this is that up here, when we defined the stub, we're basically saying that our stub will return this fake data object no matter what.
>
> **[2:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=175)** This means that behind the scenes when we trigger our endpoint, our server could be calling our test double and passing the wrong arguments, or it could be not be passing any arguments at all, and the assertions we have here so far would never catch it.
>
> **[3:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=188)** So we need to check whether or not our stub was called, and what arguments it was called with.
>
> **[3:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=193)** And the way that we do that is by saying expect, which we imported from Chai, stub.getcall, 0.args, and in square brackets, zero.
>
> **[3:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=209)** And we expect that to equal ABC.
>
> **[3:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=214)** And what this is saying, this is sinon syntax here, is that on the first call of our stub, we expect the first argument that gets passed to it to be equal to ABC.
>
> **[3:44](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=224)** The username that we expect our server to somehow pull out of the request path here, and pass to our database wrapper.
>
> **[3:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=233)** And those are all the tests we need for now.
>
> **[3:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=235)** That's basically how you write the integration tests for a server endpoint.
>
> **[3:58](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-node-endpoint-with-supertest?u=76281980&t=238)** And the absolute last thing we have to do here, is say await in front of our request.get.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3)
> **CLI Commands:** make (4)
> **Env Vars:** abc (4)
> **Definitions:** is called (1), means that (1)
> **File Paths:** server.js (1)
> **Code Identifiers:** getuserbyusername (1)
> **Cross-References:** previous video (1)
> **Best Practices:** remember to (1)

#### [Implementing a server endpoint](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=0)** - [Man] So if we run our tests now, we'll see that the test we just wrote fails, and it should since the server we're testing doesn't even exist yet.
>
> **[0:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=9)** So, lets open up our server.js file, and we're going to create an express server like this.
>
> **[0:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=14)** Lets start by importing express, import express from express, and then we're going to say const app = express.
>
> **[0:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=24)** That's how you create a server in express, and finally at the bottom of our file, we're going to say export app, so that our tests can actually import it.
>
> **[0:35](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=35)** And if we re-run our tests now, we see that this test will still fail, but for a different reason.
>
> **[0:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=41)** The reason that we're getting this message thing that our server returned, a 404, is that we haven't added our endpoint to our server yet, so this is exactly what we'd expect to happen.
>
> **[0:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=52)** So lets add our endpoint now, and that's going to look like this.
>
> **[0:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=55)** We're going to say app.get, and then /users/:username.
>
> **[1:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=62)** If you haven't worked much with server endpoints, this colon username here is what we call a URL parameter, and it allows us to pass values to the server through the URL, by changing the value of this part of the URL that we send a request to.
>
> **[1:17](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=77)** So, for example, if we we're to make a get request to /users/shawn, or /users/someoneelse, then the value of this URL parameter here would be the value that's in this portion of the URL.
>
> **[1:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=94)** So moving on, to define what happens when our server gets a get request on this endpoint, we pass a callback to app.get, and this is going to be async, since we'll be using a weight to get the data that we want to respond with, and these callbacks in express take two arguments, a request object, and a response object, and to start off, inside this callback we're just going to say res.[[JSON]], with an empty object inside it, and this means that our server will currently send back an empty object when it receives a get request on this endpoint.
>
> **[2:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=128)** If we save, and then run our tests again, we see that this is the error we get.
>
> **[2:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=134)** It says, that we expected to get this data here, but instead we just got this empty object.
>
> **[2:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=140)** So, in order to actually implement this endpoint and make our tests pass, we just need two things, our database wrapper, and access to the value of this URL parameter here.
>
> **[2:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=151)** So lets import our database wrapper up here, we'll say import db from db, and the way we access the value of this URL parameter is by saying, const username = req.params.
>
> **[2:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=171)** So basically we're just pulling the username property out of req.params.username, and I'm not going to go into too much more detail about URL parameters here.
>
> **[3:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=180)** If you want to learn more about URL parameters, and other server related techniques, feel free to check out my course on creating a full-stack website with no js and [[React.js|react]], after you're done with this one.
>
> **[3:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=191)** So now that we have our username, all we have to do to get our user, is say const user = await db.getUserByUsername, with the username as an argument.
>
> **[3:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=204)** And once we have that user, we want to send that as the body of the response, which we can do just by replacing this empty object with our user object, and if we run our tests again, we see that the integration tests that we wrote for our endpoint passes, and just as a point of interest here, when Mocha runs our tests, it shows us how long each individual test took to run, so we see that this getUserByUsername, which actually communicates with a real database, took significantly longer than this one here, which we can tell by looking at the total time that it took for all of our tests to run.
>
> **[4:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=242)** So, in total, this getUserByUsername test took about three times as long as our endpoint test to run.
>
> **[4:09](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=249)** That's why we use techniques like test doubles.
>
> **[4:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=252)** Now, for this example, we didn't have the pleasure of seeing all our recursions fail individually, since the production code for our endpoint was fairly straight forward.
>
> **[4:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=261)** If you want to see for yourself that each of the recursions here, like expect 200, expect content-type, et cetera, were necessary, you can have a little fun and purposely make breaking changes to your code, to make sure that your tests are actually insuring that your production code is doing what it's supposed to do.
>
> **[4:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=278)** In this case, if we wanted to check this expectation here, where we make sure that our stub was called with the correct arguments, we can open up our server file and make a breaking change.
>
> **[4:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=288)** Lets say that at some point down the road, a developer accidentally removes this argument that we pass in to our database wrapper call.
>
> **[4:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=296)** Now logically, we know that this should break our server, since how could getUserByUsername possibly give us the right result without knowing what username to look for, but the real question is will it break our tests.
>
> **[5:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=308)** If we save this, and then run our tests again, we see that it definitely does and the error we get tells us that we're expecting undefined, in this case, the first argument we're passing is indefined, since we're not passing anything, it says that that's not equal to the expected value we said it should be, which is abc.
>
> **[5:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/implementing-a-server-endpoint?u=76281980&t=328)** So lets make sure to change this back before we move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[React.js|React]] (1)
> **Env Vars:** url (9)
> **CLI Commands:** make (7)
> **Code Identifiers:** getuserbyusername (4)
> **File Paths:** server.js (1), res.json (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)

#### [Testing a server's error path](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=0)** - [Instructor] So now we've tested what's called the happy path of our server endpoint.
>
> **[0:04](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=4)** The case where everything goes as expected and there's a user in our database with the username specified in the URL.
>
> **[0:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=10)** But as you can imagine, in the real world, this is only one of several possible situations that our app will experience.
>
> **[0:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=16)** What if an error occurs while communicating with the database, for example, if our server can't make a connection?
>
> **[0:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=22)** Well, in this case, we'd want the response that we send to the front end to be different.
>
> **[0:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=26)** We'd want a response to have a 500 status code instead of 200, and in the body we'd want to send a message with more information about what went wrong.
>
> **[0:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=34)** So let's write a test for this situation.
>
> **[0:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=36)** Let's go down to the bottom of our server.test file and add another test.
>
> **[0:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=42)** And for this one, we're going to say that it sends the correct response when there is an error.
>
> **[0:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=53)** And this is going to be an async test again.
>
> **[0:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=56)** And the body of this test is going to look very similar to the one that we just did.
>
> **[1:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=60)** We're going to start off by creating a stub, const stub equals sinon.stub.
>
> **[1:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=68)** And then we're going to stub out the get user by username property again.
>
> **[1:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=72)** But this time, instead of saying that the get user by username method resolves with a value, we're going to say that it throws an error.
>
> **[1:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=80)** So we'll say .throws.
>
> **[1:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=81)** And let's define the error that it throws.
>
> **[1:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=83)** We'll say const fakeError.
>
> **[1:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=86)** And then we'll just have an object with a message property that says "something went wrong."
>
> **[1:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=94)** And then inside throws here, we'll put our fake error.
>
> **[1:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=98)** And again, this is just to simulate what would happen if our database communication actually encountered an error.
>
> **[1:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=103)** So now that we've created the stub, we're going to write a similar SuperTest assertion for our endpoint under these circumstances.
>
> **[1:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=110)** We're going to say request(app).get and the same endpoint as before, users/abc, and this time instead of expecting a 200 status code, we're going to say .expect(500).
>
> **[2:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=128)** And we're going to expect the content type to be [[JSON]], just like in the other test, .expect('Content-Type', /json/).
>
> **[2:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=138)** And finally, we're going to expect the response body to contain the error object that we threw from our stub like this.
>
> **[2:25](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=145)** And last but not least, down at the bottom, we have to remember to restore our stub.
>
> **[2:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=150)** Stub.restore.
>
> **[2:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=152)** And of course, we can't forget to add the await keyword to this request here, since it is asynchronous.
>
> **[2:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=158)** So if we save it and run our tests again, we see that our test fails and, more specifically, our test complains that an uncaught error was thrown, which is our newly-created stub in action here.
>
> **[2:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=170)** So that's a good place to start.
>
> **[2:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=172)** Let's open up our production code now that we have a failing test and make a few changes.
>
> **[2:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=177)** What we want to do is wrap our database call in a try catch block like this.
>
> **[3:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=182)** And we want to both of these things inside the try block.
>
> **[3:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=186)** And then for the catch block, catch e, instead of sending an okay response, we want to say res.status(500).json.
>
> **[3:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=198)** And as the response body, we're going to send this error object that got thrown.
>
> **[3:22](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=202)** And that should be pretty much it.
>
> **[3:24](https://www.linkedin.com/learning/javascript-test-driven-development-es6/testing-a-server-s-error-path?u=76281980&t=204)** If we save our code now and rerun it, we see that all our tests pass.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3)
> **Analogies:** imagine (1), for example (1), similar to (1), just like (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** fakeerror (1)
> **Env Vars:** url (1)
> **Definitions:** is an  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Testing "Not Found"](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=0)** - [Instructor] So now that we've tested and implemented the success case and the error case for our server endpoint, it's your turn to put some of the techniques you've seen so far into practice.
>
> **[0:14](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=14)** Our server is still missing the functionality for the case where the user with the given user name isn't found, and in this case, what we'll want to do is send back a response with the status code 404 with no response body.
>
> **[0:26](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=26)** So keep in mind that implementing this should involve writing two tests.
>
> **[0:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=30)** The first test is going to be in our database wrapper, and we want to make sure that our get user by user name function returns null when a user with a given user name isn't found in the database.
>
> **[0:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=41)** So we'll write a test that says that.
>
> **[0:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=43)** It returns null when the user is not found.
>
> **[0:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=51)** And this'll be an async test, and keep in mind that this test should pass without you having to make any changes to the production code since it already returns null when a user isn't found, but it's a good practice to write a test that makes sure of this since our server's going to be relying on this assumption.
>
> **[1:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=68)** And the second test you write will be for the endpoint itself, and this is going to be to make sure that given our wrapper returns null for a certain user name, we get the appropriate response back.
>
> **[1:19](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=79)** So we'll create a test that says it returns the appropriate response when the user is not found.
>
> **[1:30](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=90)** And this will be async as well.
>
> **[1:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=93)** And then of course once you've written these tests and they're failing, you'll need to actually implement the production code to make them pass.
>
> **[1:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=98)** This exercise should take from 10 to 15 minutes to complete.
>
> **[1:43](https://www.linkedin.com/learning/javascript-test-driven-development-es6/challenge-testing-not-found?u=76281980&t=103)** Once you're ready, move on to the next video, and I'll show you how I solved this challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Warnings:** keep in mind (2)
> **Cross-References:** next video (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Testing "Not Found"](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=0)** - [Instructor] So I'm going to show you how I chose to solve this challenge.
>
> **[0:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=8)** Keep in mind that this is just one possible way of doing so, and if your solution differs a little bit from mine, that definitely doesn't make it wrong.
>
> **[0:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=16)** So I started off in the db.test.js file, and inside this empty test that we added, what I did was to set our database data, setDatabaseData users, and I inserted a single record into the database, which I'm just going to copy and paste here.
>
> **[0:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=33)** And of course we have to await this function, since it's asynchronous.
>
> **[0:39](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=39)** And then I said, "const actual equals await "getUserByUsername," and I passed a username that I knew wouldn't be in that database.
>
> **[0:50](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=50)** So in this case, def And then for the assertion that we make, all we have to say is, "expect actual.to.be.null".
>
> **[1:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=60)** And this just checks if our actual value is null.
>
> **[1:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=63)** So if we save that and run our tests, we see that this already passes, and just to make sure that this is actually testing what I wanted it to test, I decided to make a breaking change to this test and then run the test again.
>
> **[1:18](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=78)** So in this case, I see that the test broke because it said that we were expecting null not to be null, which means that our actual value here really is null.
>
> **[1:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=89)** So let's change that back and run the tests one more time.
>
> **[1:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=94)** And now that they're all passing, let's move on to writing the test for our endpoint.
>
> **[1:38](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=98)** So in this test, just like in the others, I created a stub, "const stub," and then what I did is I stubbed out the get user by username method, sinon.stub db, getUserByUsername.
>
> **[1:55](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=115)** And I said that it resolves with the value null.
>
> **[1:59](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=119)** And we do this since we know that this is how our database wrapper will behave when a given user isn't found, the last test that we wrote covers that.
>
> **[2:08](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=128)** So after that when I did was use supertest to check that the response we get from our endpoint was correct.
>
> **[2:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=133)** So we'll say, "await request app.get/users/username," and this could be anything, I'm just going to use def like in the other test.
>
> **[2:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=147)** And then the only assertion that we really have to make here is that the status code is 404.
>
> **[2:32](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=152)** So we'll say, "expect 404."
>
> **[2:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=156)** And last, but not least, we have to restore the stub, stub.restore.
>
> **[2:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=162)** So if we run our test now, we see that it fails saying that it expected to get, "404 Not Found," but it instead got, "200 Okay," and this is because in our server code the value of user here is null, and this function doesn't throw an error in these circumstances, so we end up simply sending a response with the status code of 200, which is automatic with res.[[JSON]], and the body that it sends is null.
>
> **[3:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=187)** So this is what we need to change here.
>
> **[3:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=190)** What we're going to do is just under our database call here, we're going to check if the user exists, which we can do by just saying, "if user," and if it does exist, we're going to send the response just like before, but if it doesn't, we're going to write an else block, and instead of just sending the regular response we're going to say, "res.status," and we're going to send a 404 status, and we're going to say, ".send".
>
> **[3:35](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=215)** And that should give us the response that we want in that situation.
>
> **[3:39](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=219)** So if we run our test again, [[npm]] run test, we see that all our tests pass, which means that our server endpoint is behaving as expected.
>
> **[3:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/solution-testing-not-found?u=76281980&t=228)** So that's my solution, again, don't worry if yours is a little different, as long as it has the same basic ideas as mine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[npm]] (1)
> **CLI Commands:** make (5), npm (1)
> **Code Identifiers:** getuserbyusername (2), setdatabasedata (1)
> **Definitions:** means that (2), is a  (1)
> **File Paths:** db.test.js (1), res.json (1)
> **Analogies:** just like (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 7. Running Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [Run tests automatically](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=0)** - [Instructor] So, now that we've seen quite a few examples of TDD and how tests fit into our whole workflow, you may have found yourself wondering if there's a way to run our tests automatically when we change our code.
>
> **[0:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=11)** After all, it'd be very convenient to have instantaneous feedback whenever we make a change to our code since that would tell us, at every turn, whether what we're doing has broken something.
>
> **[0:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=20)** Well, fortunately for us, it's actually incredibly easy to get our tests running automatically.
>
> **[0:25](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=25)** All we have to do is open up our package.[[JSON]] file, and find our tests script.
>
> **[0:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=31)** And at the end of this script, we're just going to add a flag that's --watch.
>
> **[0:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=36)** And if we run our tests now, we see that all our tests will run, and then it will sit there, and wait for us to make changes to our code.
>
> **[0:44](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=44)** So, if we open up our server.js file and introduce a breaking change, we'll immediately get that feedback that we broke something.
>
> **[0:53](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=53)** This means that we no longer have to remember to run our tests constantly, which is something that I personally forget to do quite a lot.
>
> **[1:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=60)** So the only slight adjustment I'd encourage you to make at this point is to create a version of your tests script that doesn't run on watch mode.
>
> **[1:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=67)** This will enable your tests to simply be run and finish without pausing to wait for changes and running again.
>
> **[1:13](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=73)** Now, what I usually do here is copy this test script, add a comma here, and paste it, and rename this one, test:watch, and then remove the watch flag from our regular test script.
>
> **[1:29](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=89)** So, now we can either run tests just once, [[npm]] run test, or we can run it in watch mode with npm run test:watch.
>
> **[1:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/run-tests-automatically?u=76281980&t=102)** Let's make sure we change back this code as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[JSON]] (1)
> **CLI Commands:** make (4), npm (2), find (1)
> **File Paths:** package.json (1), server.js (1)
> **Env Vars:** tdd (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Checking test coverage with NYC](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=0)** A big concern of many [[Software Development]] teams who use TDD, is getting an accurate idea of how well their code base is covered by tests and where untested code might be hiding.
>
> **[0:11](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=11)** And let's not fool ourselves it does happen quite often that untested code makes its way into the code base.
>
> **[0:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=16)** Sometimes it's by accident, and sometimes it's intentional, usually due to laziness.
>
> **[0:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=21)** So when this happens how do we figure out what parts of our code are going untested and fix it?
>
> **[0:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=27)** Well, my recommendation is this there's a very handy tool called nyc which is an [[npm]] package you can install into your project.
>
> **[0:34](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=34)** Let's do that now.
>
> **[0:36](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=36)** npm install --save-dev nyc Now, what nyc does is it watches your code as your tests run and keeps track of what pieces of your production code were called during that time and which were not.
>
> **[0:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=52)** And then it generates a report for you of your test coverage.
>
> **[0:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=56)** So they way we actually use nyc is by doing this, let's open up our package.[[JSON]] file and in our script section we're going to add another script called coverage and inside here we're going to say NODE_ENV=test and then we're going to run nyc npm run test.
>
> **[1:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=76)** And finally, we're going to add two flags here to nyc.
>
> **[1:20](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=80)** The first is going to be --reporter=lcov and --reporter=text.
>
> **[1:31](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=91)** And if we run our script using npm run coverage we see that all our tests run and pass.
>
> **[1:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=100)** And we also see that it spits out a report of the test coverage for all our files.
>
> **[1:45](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=105)** And this here is a great general overview of how our code base is doing coverage-wise, but it gets even better.
>
> **[1:51](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=111)** You'll notice that nyc generates this folder up here called coverage and it contains a few different files.
>
> **[1:57](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=117)** The ones we're interested in here are the files with the same names as the files we've created, but with an [[HTML]] after them and I'll show you what those are.
>
> **[2:06](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=126)** If you right-click on this index.html file and click copy path and then open up a web browser and paste the path in there and hit enter, it'll open up a page that shows us the test coverage for each of our files, and if we click on one of these file names here it shows us our code.
>
> **[2:27](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=147)** Now this here is really useful if we find that test coverage isn't as high as we'd like it to be for one of our files.
>
> **[2:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=153)** To demonstrate, let's open up our server.test.js file and comment out one of our tests completely.
>
> **[2:40](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=160)** I'm going to do this last one here.
>
> **[2:42](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=162)** So if we run our coverage script again npm run coverage we see that the test coverage dropped for our server.js file here.
>
> **[2:52](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=172)** And if we go back to our browser and hit refresh, it now shows us exactly which line didn't get called during testing; and we can use this information to increase coverage for our production code.
>
> **[3:03](https://www.linkedin.com/learning/javascript-test-driven-development-es6/checking-test-coverage-with-nyc?u=76281980&t=183)** Anyway, that's just a really useful tool that I like to incorporate into my work flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (5), [[HTML]] (2), [[Software Development]] (1), [[JSON]] (1)
> **CLI Commands:** npm (5), find (1)
> **File Paths:** package.json (1), index.html (1), server.test.js (1), server.js (1)
> **Env Vars:** tdd (1), node_env (1)
> **UI Navigation:** right-click (1), click on (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (2)
> **Cross-References:** go back to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=0)** - [Shaun] So we've covered quite a bit in this course.
>
> **[0:02](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=2)** We've learned the basics of [[Test-Driven Development]] as well as seen it in action.
>
> **[0:07](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=7)** Hopefully you've taken to heart many of the suggestions and techniques we've gone over and continue to experiment and apply TDD in your own development.
>
> **[0:15](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=15)** As I mentioned in one of the videos, TDD is one of those topics where it takes only a short time to learn all the basics, but can take years to really master it.
>
> **[0:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=23)** If you're interested in continuing your study of test-driven development, besides working with it every day to get a better idea of the intricacies of it, I'd recommend reading about it as much as you can.
>
> **[0:33](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=33)** Some good books on the topic include "Test-Driven Development: By Example" by Kent Beck and "The Art of [[Unit Testing]]" by Roy Osherove.
>
> **[0:41](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=41)** Although both of these deal with languages other than [[JavaScript]] they're great for getting a very in-depth understanding of testing.
>
> **[0:48](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=48)** And of course there's a ton of material on the internet about TDD, blogs, videos, tutorials, et cetera that are only a search away.
>
> **[0:56](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=56)** I'd recommend that you learn as much as you possibly can about the topic and that you don't stop learning.
>
> **[1:01](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=61)** I'd also recommend other courses in the [[LinkedIn]] Learning Library such as Emmanuel Henri's course on Testing and Debugging [[React.js|React]] which includes some topics that we didn't cover in this course.
>
> **[1:10](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=70)** Well, thank you so much for watching.
>
> **[1:12](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=72)** If you want to get in touch with me, please don't hesitate to connect with me on LinkedIn.
>
> **[1:16](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=76)** I'm on LinkedIn quite often and would love to hear any questions or comments from you.
>
> **[1:21](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=81)** Or if you just want to say hi that's okay too.
>
> **[1:23](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=83)** I also have several other courses on various topics if you want to check those out as well.
>
> **[1:28](https://www.linkedin.com/learning/javascript-test-driven-development-es6/next-steps?u=76281980&t=88)** Thanks again and I hope you enjoyed the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (3), [[LinkedIn]] (3), [[Unit Testing]] (1), [[JavaScript]] (1), [[React.js|React]] (1)
> **Env Vars:** tdd (3)
> **Analogies:** such as (1)
> **Speakers:** - [shaun] (1)


## Instructor

- [[Shaun Wassell]]

## Resources

- Exercise files available

## Skills Covered

- Test-Driven Development
- JavaScript

## Path Context

### In [[Advance Your JavaScript Skills]]
← [[JavaScript- Best Practices for Data]] | **3 of 10** | [[ESLint- Integrating with Your Workflow]] →

## Appears In

- [[Advance Your JavaScript Skills]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript
- [[Javascript Best Practices For Code Formatting]] — JavaScript

---

[↑ Back to top](#)