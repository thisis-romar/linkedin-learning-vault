---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: angular-testing-and-debugging-10201318
url: "https://www.linkedin.com/learning/angular-testing-and-debugging-10201318"
duration_minutes: 136
duration: 2h 16m
level: Intermediate
updated: 11/29/2023
learners: 39090
skills:
  - Software Testing
  - Debugging Code
  - Angular
exercise_files: true
github: "https://github.com/LinkedInLearning/Angular-2875342"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHE8peKcX_-XA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619631876852?e=2147483647&amp;v=beta&amp;t=TR_-M5cw5CjbnUMaTtkSmj4HWyaRd8SRPeYMwpUWJQU"
linkedin_topic: Software Development
learning_paths:
  - '[[Explore Web Development with Angular]]'
prev_courses:
  - '[[Learning the Angular CLI]]'
next_courses:
  - '[[Angular- Creating and Hosting a Full-Stack Site]]'
path_nav: '[{"path":"Explore Web Development with Angular","position":3,"total":6,"prev":"Learning the Angular CLI","next":"Angular- Creating and Hosting a Full-Stack Site"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/software-testing
  - skill/debugging-code
  - skill/angular
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Angular-%20Testing%20and%20Debugging.md)

![Angular: Testing and Debugging](https://media.licdn.com/dms/image/v2/C560DAQHE8peKcX_-XA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619631876852?e=2147483647&amp;v=beta&amp;t=TR_-M5cw5CjbnUMaTtkSmj4HWyaRd8SRPeYMwpUWJQU)

# Angular: Testing and Debugging

> Errors caused by missing dependencies, undefined variables, or poorly formatted data can cause your web application to stop working. In this course, learn how to track down and eliminate these types of errors in your Angular applications through the process of testing and debugging. Instructor Derek Peruo breaks down common error messages and goes over a variety of testing and debugging options. H

> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318) | 2h 16m | Intermediate | 39K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Angular: Testing and debugging](#angular-testing-and-debugging)
  - [What you should know](#what-you-should-know)
  - [Exercise files](#exercise-files)
- [**1. Getting Started**](#1-getting-started) (3 videos)
  - [Application overview](#application-overview)
  - [Installing project dependencies](#installing-project-dependencies)
  - [Installing Angular CLI](#installing-angular-cli)
- [**2. How Angular Reports Errors**](#2-how-angular-reports-errors) (6 videos)
  - [Error handling in Angular](#error-handling-in-angular)
  - [Understanding zones in Angular apps](#understanding-zones-in-angular-apps)
  - [Angular without ZoneJS (Zoneless)](#angular-without-zonejs-zoneless)
  - [Add a new file using Angular CLI](#add-a-new-file-using-angular-cli)
  - [Writing a custom error handler class](#writing-a-custom-error-handler-class)
  - [Changes for Angular v16](#changes-for-angular-v16)
- [**3. Common Syntax Errors**](#3-common-syntax-errors) (10 videos)
  - [Adding a local storage service](#adding-a-local-storage-service)
  - [Fixing dependency injection errors](#fixing-dependency-injection-errors)
  - [Getting and setting data in local storage](#getting-and-setting-data-in-local-storage)
  - [Adding a custom Angular pipe](#adding-a-custom-angular-pipe)
  - [Using regular expressions to find content](#using-regular-expressions-to-find-content)
  - [Using a pipe to change HTML content](#using-a-pipe-to-change-html-content)
  - [Common pipe errors](#common-pipe-errors)
  - [Understanding Angular decorators](#understanding-angular-decorators)
  - [Challenge: Filter the array of users by locationId](#challenge-filter-the-array-of-users-by-locationid)
  - [Solution: Filter the array of users by locationId](#solution-filter-the-array-of-users-by-locationid)
- [**4. Common Async Errors**](#4-common-async-errors) (4 videos)
  - [Getting data using REST requests](#getting-data-using-rest-requests)
  - [Updating data using REST requests](#updating-data-using-rest-requests)
  - [Working with observables](#working-with-observables)
  - [Catching errors from an observable](#catching-errors-from-an-observable)
- [**5. Unit Testing in Angular**](#5-unit-testing-in-angular) (8 videos)
  - [Testing overview](#testing-overview)
  - [Basic Karma configuration](#basic-karma-configuration)
  - [Testing services](#testing-services)
  - [Fixing injection dependency errors](#fixing-injection-dependency-errors)
  - [Testing pipes](#testing-pipes)
  - [Testing components](#testing-components)
  - [Challenge: Custom test bed wrapper](#challenge-custom-test-bed-wrapper)
  - [Solution: Custom test bed wrapper](#solution-custom-test-bed-wrapper)
- [**6. End-to-End Testing in Angular**](#6-end-to-end-testing-in-angular) (6 videos)
  - [Basic Protractor configuration](#basic-protractor-configuration)
  - [End-to-end testing without page objects](#end-to-end-testing-without-page-objects)
  - [End-to-end testing with page objects](#end-to-end-testing-with-page-objects)
  - [Changes for Angular v12](#changes-for-angular-v12)
  - [Challenge: Testing filter input](#challenge-testing-filter-input)
  - [Solution: Testing filter input](#solution-testing-filter-input)
- [**7. Static Code Linting in Angular**](#7-static-code-linting-in-angular) (5 videos)
  - [Installing and running ESLint](#installing-and-running-eslint)
  - [Basic ESLint configuration](#basic-eslint-configuration)
  - [Fixing lint errors](#fixing-lint-errors)
  - [Installing EditorConfig](#installing-editorconfig)
  - [Basic EditorConfig configuration](#basic-editorconfig-configuration)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Angular: Testing and debugging](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-testing-and-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-testing-and-debugging?u=76281980&t=0)** - [Derek] [[Angular]] has come a long way since [[Google]] first released the framework back in 2010. Since then, it's grown into a mature and stable platform with lots of built-in support for testing and [[Debugging Code]]. My name is Derek Peruo and I've worked with web technologies for over 12 years. I've worked with Angular since version 1.3 and I've seen, firsthand, how testing and debugging has become an integral part of building apps with Angular. In this course, I'll guide you through the process of testing and debugging Angular applications, as well as tips and tricks for managing your app as it grows in size and complexity. We'll look at an overview of all the testing and debugging options, as well as a breakdown of common error messages and their likely causes. We'll also take a look at code linting and how Angular's command line tool can speed up your development workflow. There are a lot of [[JavaScript]] frameworks out there and Angular is one of my favorites, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[Google]] (1), [[Debugging Code]] (1), [[JavaScript]] (1)
> **Versions:** version 1 (1)
> **Tools:** command line (1)
> **Warnings:** common error (1)
> **Speakers:** - [derek] (1)

#### [What you should know](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=0)** - [Instructor] We write [[Angular]] code using TypeScript and you should have a good idea of how TypeScript works before starting this course. You should also be familiar with the angular framework in general. Check out TypeScript essential training and [[Angular Essential Training]] here in our library for an in-depth look at TypeScript and the angular framework. We use [[npm]] to install the angular command line tool. So make sure you have node and npm installed on your machine before we begin. Visit the official nodejs website to download node and npm. I recommend using the LTS, long-term support version of node which is version 14.15.5 as of this recording. This is the version we'll use during the course. I'm going to use visual studio code as my text editor. vs code is a free and open source code editor available on [[Windows]], Mac and [[Linux]]. You can download the latest stable release from the official website. I have version 1.53 on my machine here. You don't have to use vs code. I like it because it has built in support for TypeScript which makes writing angular apps much easier. But you can use any code editor you like. I'll also use [[Google]] Chrome as my web browser to preview our app. This is a personal preference and you can use any web browser that works best for you. Finally, I'll be working on a Mac for this course. This is also a personal preference and you can use any operating system you're comfortable with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[npm]] (3), [[Windows]] (1), [[Linux]] (1), [[Google]] (1)
> **CLI Commands:** npm (3), node (3), make (1)
> **Tools:** vs code (2), command line (1), visual studio (1)
> **Versions:** version 14 (1), 15.5 (1), version 1 (1)
> **Exercise Files:** source code (1), download the (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), make sure you have (1)
> **Env Vars:** lts (1)

#### [Exercise files](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=0)** - [Tutor] Follow along with this course using the included exercise files. We host all the course files on [[GitHub]], at this URL. You can work with the course files in a few ways. View the code online using the branches menu here, clone the repo to your local machine using this link or download a zip file using the download zip button here. Each branch in this repo corresponds to a chapter and video in the course. The B and E at the end of some of these branch names represents the beginning and end state for that video. For example, branch O two O three B, is how the code looks at the beginning of chapter two on video three and branch O two O three E, is how the code looks at the end of that same video. The main branch here, is how the finished code looks at the end of the course. I recommend viewing the course files online or cloning the repo to your local machine to take full advantage of all the branches. You'll need to download each branch individually if you choose the download zip option. One quick note, [[Angular]] uses [[npm]] to manage project dependencies. So be sure to run NPM install on the main branch if you clone the repo or whenever you download the zip file for a specific branch. just follow the installing instructions here in the ReadMe.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[GitHub]] (1), [[Angular]] (1)
> **Exercise Files:** clone the repo (2), zip file (2), exercise files (1), download the (1)
> **Env Vars:** npm (2), url (1)
> **CLI Commands:** npm (2)
> **Prerequisites:** you'll need (1), install (1)
> **Documentation:** the readme (1)
> **Tools:** github (1)
> **Analogies:** for example (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Application overview](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=0)** - [Instructor] Testing and debugging is a big part of building [[Angular]] apps. The faster you can find the problems the faster you can fix your application and the faster you can get it back up and running. This is the app we'll be working on in this course. It's a simple webpage that shows a list of active users. The input field lets me filter the list by a search string. The UI updates as soon as I start typing a name. So if I search for, say, Davis, I can find those users very quickly. I can also clear my search by clicking the clear button on the right here, which brings back the full list of active users. Let's take a look at the code. This is the [[HTML]] template for our user list. At the top here is the input group for our search field and the clear button. Here is our input element. This is a standard HTML input, except for the template reference variable here and the key up binding here. The template reference variable is a quick way for us to access properties on the underlying DOM element using Angular's API. The key up binding is a quick way for us to assign an action to the standard key up DOM event, again, using Angular's API. When a user filters the list, we pass the value of the template reference variable into the update method on our components class. This method filters the list and returns a new list back to the DOM. Here is the code for our clear button. It's a standard HTML button, except for the click binding here. Just like the key up binding above, click lets us quickly assign actions to the click event on the element. In this case, we do two things. First, it passes an empty string into the update method, which returns all of the usernames. And second, it sets the value of the template
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=95)** reference variable to an empty string. This resets the input element. We load the list here, where we iterate over each user using the ng4 directive and display each result as its own unordered list item. Let's take a look at the component class itself. We declare a public property here called users. This is the same property we use in our template. Here in the ng oninit method, we get the list of users from the get all method on our custom user list service. And we filter the list of users here in the update method by passing the search string into the filter method of our user list service. Both of these service methods are asynchronous and we use JavaScripts async await syntax to wait for the data to return before assigning it to the user's property. Right now, the app resets on page load and forgets the filter input. During this course we'll add functionality to our app to save the filter state between page loads. Along the way, we'll look at some common errors and how to fix them. Later in the course, we'll add static code linting and write unit tests and end to end tests for our new code. This is our custom service. It could get data from anywhere, but for now it's returning a static list of mock users from our users .ts file imported here. We're using a static file to keep this course focused on testing and debugging Angular. For an in-depth look at how Angular works with data, check out the course Managing Data and Angular to Applications here in our library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[HTML]] (3)
> **Env Vars:** html (3), dom (3), api (2)
> **Exercise Files:** template (6)
> **Definitions:** is a  (4)
> **CLI Commands:** find (2)
> **Cross-References:** later in (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Installing project dependencies](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=0)** - [Instructor] [[Angular]] projects use [[npm]] to manage dependencies. We need to install these dependencies, sometimes called packages, to write our code and compile our app. Npm is an amazing tool and I highly recommend you read the official documentation to learn more about the community and all the cool things you can do with the tool itself. I opened our project here in Visual Studio Code. I like VS code because it makes working with TypeScript very easy, but you can use any code editor you like. VS Code has a built-in terminal, which we'll need to install the dependencies. I'll go up to the Terminal menu. Click on New Terminal. Let me make that a little bigger so we can see. And the first thing I want to do is make sure we have npm installed on the machine. I do that using the version command. So I'll type npm --version and hit Enter. I have version 6.14.11 installed on my machine. Your version might be newer. That's okay. Use what you have. You'll get an error from this command if you don't have npm installed. If that happens, check out the video, "What You Should Know" earlier in this course for details on how to install npm. Since we already have npm, I'll go ahead and install the packages. I'll use the pwd command to confirm that we're in the root directory for our project. Pwd, Enter, looks good. And then I'll type "npm install" and hit enter to install the dependencies. Sometimes it can take a few minutes for npm to download all the project dependencies. So be patient. Npm will show you an error if something goes wrong. Otherwise, just give it time and let the process finish. All right, no errors. Looks good.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=92)** I recommend running the npm install command from the main branch if you cloned to the exercise files to your local machine. This ensures that you have all the packages available when you change branches during the course. A quick note about npm, let me close out of this terminal, all the packages are stored in the package.[[JSON]] file in the root of the project. And these dependencies are stable and current as of this recording. Some packages may get updated after the course is published. If this happens, [[GitHub]] will tell you if there are packages that need to be updated. I encourage you to update the packages as needed, but sometimes in rare cases package updates can cause breaking changes. If that happens, you can revert back to the versions included in the exercise files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (12), [[Angular]] (1), [[JSON]] (1), [[GitHub]] (1)
> **CLI Commands:** npm (12), make (2)
> **Tools:** terminal (4), vs code (2), visual studio (1), github (1)
> **Prerequisites:** install (7)
> **Versions:** version 6 (1), 14.11 (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** package.json (1)
> **Cross-References:** earlier in (1)

#### [Installing Angular CLI](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=0)** - [Instructor] [[Angular]]'s command-line tool is the best way to work with files in an Angular project. It lets you scaffold new components, update app settings and run local builds. It is a very powerful tool and I recommend you read the official documentation to learn all the things you can do with it. We install [[Angular CLI]] using [[npm]]. I confirmed earlier in this course that I have NPM installed on my machine, so we can get right to the install process for Angular CLI. In Visual Studio Code, I'll go up to the Terminal menu, click on New Terminal and I'll use the NPM install command to install the package, I'll type npm install -g @angular/[[CLI]]. The g flag here means we're installing the tool globally and can use it from any directory on our machine. I'll hit Enter. Installation may take a few minutes, so please be patient. NPM will show an error, if something goes wrong. If there's no errors just let the process finish. Nice, no errors. The Angular binary is called NG and I'll use the NG version command to confirm our installation. I'll type ng version and hit Enter, nice. Near the top of the console there, where it says Angular CLI, that's the version number, version 11.0.7. Your version may be newer, and that's okay use what you have Now that we have Angular CLI installed on our machine, adding new features to our app will be much easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (5), [[Angular]] (4), [[Angular CLI]] (4), [[CLI]] (1)
> **Env Vars:** cli (4), npm (4)
> **CLI Commands:** npm (5)
> **Prerequisites:** install (5)
> **Tools:** terminal (2), visual studio (1)
> **Versions:** version 11 (1), 0.7 (1)
> **Definitions:** is a  (1), is called (1)
> **Cross-References:** earlier in (1)


### 2. How Angular Reports Errors

[↑ Back to Table of Contents](#table-of-contents)

#### [Error handling in Angular](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/error-handling-in-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/error-handling-in-angular?u=76281980&t=0)** - [Instructor] In [[Angular]], all errors pass through the ErrorHandler class. This class is part of the angular/core module and its job is to essentially write errors to the console. Most errors in Angular happen because of missing import or export statements, forgotten declarations in a decorator, such as providers or selectors, no instance of imported class, or issues related to asynchronous actions, like errors from a promise or observable. Think of observables as a type of promise, but for data that returns more than once. This sequence of data is called a "stream" and Angular is built from the ground up to work with these streams. While streams are excellent for high performance applications, they return cryptic error messages that are difficult to diagnose. This is because Angular executes all code inside of things called zones. We'll looking at zones in detail in the next video but, for now, think of them as scoped containers, called execution contexts. These containers group chunks of code together, even if that code executes asynchronously.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (5)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Understanding zones in Angular apps](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=0)** - [Instructor] [[Angular]] executes all code inside of Zones. It does this using Zone.js which is now part of the angular core library. Zones are great for high-performance applications but they can cause cryptic error messages in the console and can be hard to diagnose. Understanding how Zones work will help you pinpoint the root cause of errors much more effectively. Frameworks like Angular use Zones to check that all business logic is complete before it updates the done. This ensures that done updates happen at the most efficient point in the rendering cycle. Zones work by creating a scope container that groups a chunk of code together even if that code executes asynchronously. These chunks are called execution contexts. There can be only one zone per stack and all code on a given stack executes in the same zone. Child zones can reference their parents and inherit properties but parent zones can not reference their children. Zones are immutable. They cannot be changed once created. There's also no guarantee that a function will execute in the same zone each time it's invoked. This means your functions may execute in new zones each time they're called. Zones are persistent across asynchronous functions. When an asynchronous action gets scheduled the callback executes in the same zone that existed at the time the operation was invoked. This means that zones retained their properties that were defined during execution and the ability to track actions and pass properties across asynchronous operations is what makes Zone such a powerful tool. This ability is also the reason why error messages can seem mysterious. Error messages trace the Zone back to its origin not just the execution stack.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=94)** You can use Zones at all stages of [[Application Development]]. And I encourage you to take a look at the official documentation for an even deeper look at how Zones can improve your development life cycle and your production application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[Application Development]] (1)
> **File Paths:** zone.js (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Angular without ZoneJS (Zoneless)](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-without-zonejs-zoneless-26050371?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-without-zonejs-zoneless-26050371?u=76281980&t=0)** - [Trainer] Starting in [[Angular]] version 18, you can opt-in for a new Zoneless architecture. This is a huge change because Angular's been using ZoneJS since version 2.0. The introduction of Zoneless Angular means fewer change detection cycles, smaller app bundle sizes, faster startup times, better debugging, and better compatibility with third-party APIs. The biggest risk is that, as of this recording, Zoneless Angular is an experimental feature. The API is incomplete, unstable, and could change at any time. It also requires changes to your project dependencies and may require refactoring of code and unit tests to make them compatible with the new API. Check out Angular's official documentation for more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (5)
> **Env Vars:** api (2)
> **Versions:** version 18 (1), version 2 (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [trainer] (1)

#### [Add a new file using Angular CLI](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=0)** - [Instructor] Let's make a custom service that adds [[Metadata]] to error messages before sending them to the console. There's a few ways we could add a new file, but I find the best way is to use [[Angular CLI]] tool. Angular CLI knows what type of file we want and automatically adds the correct imports and exports for that type of file. We'll need the terminal for this. So I'll go up to the Terminal menu, click on New Terminal and I'll type NG generate service and hit Enter. [[Angular]] will ask us what we want to name the file. Here's some things to keep in mind, Angular puts all new files in the app folder in the source directory, right here. We can declare sub-directories using forward slashes. For example, if I want to put something in the user folder I would type a user/ if I wanted to put something in a new folder I would type that name instead, so foo/, you get the idea. The file name itself is always transformed to lowercase dash case. This means a file called foo-bar and FooBar, with an uppercase F and an uppercase B, are the same file, but foo-bar and foobar, all lowercase, are different files. Angular adds the correct file name suffix for us, based on the file type we pick. This means we only need to type the file name, no suffix. In our case, I'll call the custom service error metadata and put it in a new services folder. To do that I'll type services/error-metadata and hit Enter. In the sidebar, we can see our new file in the Services folder in the app directory.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=94)** Angular also created a spec file for us, so we can add unit tests for our service. We'll look at unit tests later in this course. For now, let's focus on writing the code for the service itself, which we'll do in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (4), [[Metadata]] (3), [[Angular CLI]] (2)
> **Tools:** terminal (3)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** cli (2)
> **Cross-References:** later in (1), in the next (1)
> **UI Navigation:** click on (1), in the sidebar (1)
> **Documentation:** spec (1)
> **Analogies:** for example (1)

#### [Writing a custom error handler class](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=0)** - [Instructor] In the last video we added a new file using [[Angular CLI]] tool. Let's update this file to add [[Metadata]] to error messages before sending them to the console. I have our new file open here in VS code and the first thing we need to do is import [[Angular]]'s ErrorHandler class. I do that by going to the import statement for the Angular core module at the top of the file and adding the ErrorHandler class to the list of imports. If you're using VS code or something similar you may get help with auto-completion. Please take advantage of that. I know I will. I'm going to hit tab to use the suggestion provided by the editor. Next we can get rid of the constructor. We won't need that for our service. Then we want to implement the ErrorHandler class. We do that by going just before the opening bracket of our class and typing implements ErrorHandler. You may see a wavy red line under the class name if you're using VS code, this is the editor telling us there's an error. If we hover over the class name we'll get more info about what's wrong. Also, if you have a Terminal window open you can go over to the Problems tab here and find out more info about what's happening in your file. Either way. The error is telling us that there's a missing property called handleError. Let's add that now. I'll close the terminal here, go back to our class, make a new line and type public handleError() {} This method takes one argument. The error we want to modify, and I'll set its type as any which is the same type used in the ErrorHandler class. This method doesn't return any values so we'll set the methods return type is void.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=94)** We can do whatever we want inside the body of this method. For now, let's send a simple string back to the console to make sure our service works correctly. I'll make a new line and type console.error and into the error method, I will send a string that says, "Hello from ErrorMetadataService." We need to date the app.module.ts file to use our new service. Let's do that now. I'll go to the source folder here in the sidebar open up app, go down to app.module, open up that file and we'll need to import two things, the first is Angular ErrorHandler class and the second is our custom error metadata class. First, I'll go to the import statement for the Angular core module and add the ErrorHandler class to the list of imports. Then I'll make a new import statement for our custom service. Between the brackets, I'll type ErrorMetadataService and we're going to import that from ./services/error-metadata.service. We need to tell Angular about this new service. We do that by updating the providers array in the NgModule decorator. The providers property takes either an array of class names or in our case, an array of objects. These objects have several possible parameters but we only need two here. The first parameter is provide and the value of this property
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=187)** is the name of the class we want to override. So I'll pass an ErrorHandler and the second parameter is used class. The value of this property is the name of our custom service. The class that we're going to use in place of ErrorHandler. We'll need to compile our code and launch a local dev server to check our work. We use the [[npm]] start command to do that. I'll go up to the Terminal menu, click on New Terminal and type npm start and hit enter. Under the hood, NPM start runs NG serve. While we could run NG serve directly, I recommend using the NPM start command instead. Here's why, sometimes the version of Angular CLI tool installed locally as a project dependency can be different from the version installed globally on your machine. Using the NPM start command guarantees that you use the local version installed in the project. A browser may automatically open once Angular compiles the app. If it doesn't, hover over the local host URL, here in the terminal and click on follow link. So far so good. I'll open a console here in Chrome to check for errors. I'll go up to the View menu scroll down to Developer and then click on Developer Tools. Make sure I'm on the Console tab. Great, no errors. And this is perfectly correct because there are no errors in our code. We wrote perfect code. We'll need to force an error to check our new service. There's a couple ways to do this. The easiest is to go into the user-list-component and comment at one of the lines.
>
> **[4:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=279)** Let's do that now. That can be as code, I'll scroll down to user-list, click on the user-list-component file and comment out line 14. I'll save my changes and go back to the browser. There it is. Our custom message. Hello from ErrorMetadataService, looks great. This means our service is wired into the app correctly. Let's go back into the file and update the service to return useful details about the error. Timestamps are useful, so let's add that. I'll make a new variable called date and assign it to a new Date object. Then instead of a string, I'll pass in a new object into the error method and I'll make a new property called timestamp which I will assign to the value of date.toISOString(). We also want the error message itself. So I'll make a new property called message and assign it to the value of error.message. Finally, I'll add a property called zone. This is specific to Angular and would tell us more information about these zone that our code is running in. I'll make a new property called zone and assign it to error.zone. Back in the browser. When we reload our page, we can see our custom error object. Looks great. Custom ErrorHandlers like this can be very powerful because it allows you and your team to work with these error messages without needing to refactor any of Angulars underlying code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (7), [[npm]] (5), [[Metadata]] (3), [[Angular CLI]] (2)
> **CLI Commands:** make (9), npm (5), find (1)
> **UI Navigation:** click on (4), go to (2), scroll down (2), in the sidebar (1)
> **Tools:** terminal (5), vs code (3)
> **Env Vars:** npm (4), cli (2), url (1)
> **Code Identifiers:** handleerror (2), toisostring (1)
> **Cross-References:** go back to (2), in the last (1)
> **File Paths:** app.module.ts (1)

#### [Changes for Angular v16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v16?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v16?u=76281980&t=0)** For newer versions of [[Angular]] like versions 15 and 16, the Angular team recommends using plain classes for custom error handlers instead of injecting them through Angular's [[Dependency Injection]]. For our ErrorMetadataService, this means we can get rid of the injectable decorator and just export the class as written. We use this new plane class just like we did before, by adding it to the array of providers and overriding the default error handler with our custom ErrorMetadataService. Check out Angular's official documentation for more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (4)
> **Analogies:** just like (1)


### 3. Common Syntax Errors

[↑ Back to Table of Contents](#table-of-contents)

#### [Adding a local storage service](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=0)** - [Instructor] Let's add a feature in our app that lets users save the current filter state. There are many ways we could do this but to keep things simple, I'm going to use local storage. Local storage is one of several client side [[Data Storage]] options available on all modern browsers and it's an excellent choice for our use case here. In local storage, data is stored as simple key value pairs and the data persists between browsing sessions until it's deleted by the user or some trigger in our app code. This means we can restore the filter on page load even after the user closes the browser window. Check out the course managing data in [[Angular]] two applications here in our library for an in-depth look at all your data storage options for Angular. I'm in VSA code here and I already installed the [[npm]] packages and launched a local dev server. I'm going to make a new file now using the [[Angular CLI]] tool. I'll need a new terminal window, so I'll go to this plus sign here click on it to open a new instance and I'll type NG, generate a service and hit enter. A couple of things here, you may get a warning about your global [[CLI]] version being greater than your local CLI version, that's okay just follow along with it set the configuration if you want to, doesn't change anything that we're doing here. The second thing is Angular is going to ask us what we want to name the file and where we want to store it. You can call your file whatever you'd like, I'm going to call mine a web storage and I'm going to place it in the services folder. To do that, I'm going to type services slash web dash storage and hit enter. Check out my video earlier in this course for details on how Angular CLI works with file names.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=94)** I'm going to open our new file, I'll go to source, app, services, click on web storage dot service dot TS. Nice, it looks good. There are many [[Design Patterns]] we could use to write the service, and I really encourage you to experiment with different architectures to find one that works best for your use case. Today I'm just going to write simple get and set methods to get and set data from local storage. I'll start by making a new line under the constructor, typing public get open closed parentheses, open, close curly brackets, make a new line again, public this time of call it set open closed parentheses, open closed curly brackets. So these are our two methods for the service. We'll build the get method first. Get is going to take a single argument, it's going to be a string that represents the key of the value we want to retrieve from local storage. I'm going to call this argument key and I'll set its type as a string. I'm going to pass this argument to the window dot local storage dot get item method and I'm going to return its result. While you could reference the local storage object directly, I recommend always explicitly referencing the window object to clearly distinguish between using a global property like local storage instead of a class level property with the same name. This will make managing the code base much easier over time. The last thing we want to do for this method is set the return type equal to the same return type as the get item method. I'll hover over get item
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=187)** and I see that the return type is string or no I'll do the same for the game here. It looks good. Here's something to keep in mind about local storage, local storage always stores data as strings. In this case, our filter is already a string and we can return it directly from the get method. For other data types like objects, arrays, and booleans you may want to convert the storage string back into its original data type before returning the result from the get method. You can use Jason dot parse or a similar technique to convert non strings back to their original data types. Now that we wrote the get method, let's write the set method. Set is going to take two arguments, the first is a string representing the key of the value we want to retrieve from local storage. I'll call this argument key, and I'm going to set it to the type of string. And the second argument is going to be a string representing the value of the data we want to save. I'll call this argument value and I'll declare its type as a string as well. I'm going to pass these arguments into the window that local storage dot set item method. Set item doesn't return any values so we're going to set the return type on our set method to void. Since our filter is already a string, we can pass the filter value directly to the set item method. For other data types remember to convert the data to a string before storing it in local storage. You can use Jason dot string of file or a similar technique to convert these non strings into strings before saving them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[Data Storage]] (2), [[Angular CLI]] (2), [[CLI]] (2), [[npm]] (1)
> **Env Vars:** cli (4), vsa (1), npm (1)
> **CLI Commands:** make (3), npm (1), find (1)
> **UI Navigation:** go to (2), click on (2)
> **Warnings:** warning (1), keep in mind (1)
> **Cross-References:** earlier in (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### [Fixing dependency injection errors](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=0)** - [[Dependency Injection]] errors are usually related to un-exported modules or import statement typos. These issues can be difficult to catch because [[Angular]] emits errors to the browser console on execution and not on the import or export of a file. Angular's error messages can also be mysterious and usually traced back to an undefined variable in one of your files. Code editors like Visual Studio Code can be a big help here because they can reason about the relationships in your code base and forecast potential issues all without executing the code. Back in Visual Studio Code here, let's import our web storage service from the last video into our user list component. I'll go to the sidebar, click on source, app, user list, click on user list.component.ts to open the file, looks good. The first thing we need to do is create a new import statement, to import our web storage service. At the top of the file, I'll make a new line, type import and between the brackets I'll type a web storage service and we'll import that from ../services/web-storage.service.
>
> **[1:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=71)** If you use the [[Angular CLI]] tool to generate the files for your web storage service, then at this point there's nothing wrong with the code. This is because Angular CLI already added the export keyword in your service class. Sometimes developers forget to export the class when they write the code from scratch. Let's pretend that happened here and delete the keyword from our web storage service. I'll go back to that file. Highlight export, hit delete. Let's see what happens in our user list component. If you're following along using Visual Studio Code, you'll see a thin wavy red line under the class name in the import statement. This wavy line is feedback from the editor telling us there's problem, I can hover over the red line with my mouse to get more info. It looks like VS Code found the class in our module but the class is an export. This makes sense because we just deleted the export statement. But imagine someone else on your team wrote the code for the web storage service, now we know exactly how to fix that error. So I'll go back into the web storage service file. Add that export keyword, save my changes. And if I go back to the user list component, voila, the error is gone. Another common error is misspelled module names and imported properties. Let's say I misspelled the file name instead of web dash storage dot service, I wrote web dash storage dash Fu dot service. The feedback from Visual Studio Code would tell me it can't find the module at all. If instead of misspelling the file name I tried to import a property that didn't exist.
>
> **[2:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=166)** VS code would tell me it found the file but it can't find the exported property. You don't need Visual Studio Code to take advantage of error checking like this, Angular's compiler offers the same great feedback. All you need to do is open a terminal window and use either the Ng build or Ng serve command. Use the Ng build command to compile your code and check for errors. Use the Ng serve command to compile your code, check for errors and watch for changes. With the local dev server running. I can go back into my component file, fix the import statement, save my changes, and watch as Ng serve re-compiles the code. Either way the error messages reported by the compiler are very similar to the error messages reported in VS Code, and I highly recommend taking advantage of both.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[Angular CLI]] (2), [[Dependency Injection]] (1)
> **Tools:** visual studio (5), vs code (3), terminal (1)
> **UI Navigation:** click on (2), go to (1), open the (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** cli (2)
> **Cross-References:** go back to (2)
> **Analogies:** imagine (1), similar to (1)
> **File Paths:** list.component.ts (1)

#### [Getting and setting data in local storage](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=0)** - [Instructor] Let's use the new web storage service in our useless component. We imported the service earlier in this course and now we need to instantiate it in the constructor. I'll make a new line here and type a private web storage service with a lowercase w colon web storage service with an uppercase w. Next I'll change the update method to save the filter state to local storage. I'll make a new line here and type this dot web storage service dot set. I need to set the key here, this can be any string you like. I'm going to use the key of users, all upper case and the value is going to be this dot users. This wavy line here is the editor telling us there's an issue. I'm going to hover over to see what's going on. Looks like the set method expects a string here but we're passing in an array. There's a couple of ways we can transform this array into a string. I think the easiest here is to just use [[JSON]] stringify I'm going to highlight our property, cut type JSON stringify pass that property into the string of fine method. Let's go to the browser and check our work. So far. So good. I'll go up to the view menu here, scroll down to developer click on developer tools, navigate to the application tab open up local storage, click on local host. And there's nothing here. This is okay because we haven't filtered the list yet. Let's do that now. I'll go to the input type DAV for Davis. There it is. We have our key of users
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=92)** and we have our value, which is the filtered array. This is great, everything's working. However, the user list resets when we reload the page still. So let's go update the component to show the filtered list on page load. Instead of loading the list from the user list service in the ngoninit method I'm going to load the list from web storage service instead. I'll make a new line and type const filtered equals this dot web storage service dot get. I'm going to pass in the same string I used down below in the update method into the get method. This is how we retrieve our data from local storage local storage, and our web storage service return. null, if it can't find the key we asked for so we'll need to return the full list of users, if filtered is null, I'll do that now. If filtered is null return the full list from the user list service otherwise set the user's property to filtered. Looks like we have another error here. I'll hover over the user's property to see what's going on. VS code is telling me that I can't assign a string to the user's property. I'll need to convert the string and local storage back to an array, right now the filtered variable is still a string. To keep things simple we'll just use JSON parse to transform the string back into an array. I'll highlight the filtered property here, cut type of JSON parse, passing that property into the parse method. Nice. Error's gone. Let's check our work in the browser.
>
> **[3:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=185)** I'll reload the page clear the filter let's search for something else. Maybe Allen, great local storage updates as we expect. And if I reload the page, our filtered list is still there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4)
> **UI Navigation:** go to (2), click on (2), scroll down (1), navigate to (1)
> **Env Vars:** json (4), dav (1)
> **CLI Commands:** make (3), find (1)
> **Cross-References:** earlier in (1)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)

#### [Adding a custom Angular pipe](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=0)** - [Instructor] Pipes let you change how [[Angular]] displays data in your app. They're great for things like making text uppercase and turning decimals into percents. They're also great for quickly localizing numbers and date formats. You can even use pipes to work directly with promises and observables. Check out Angular's website for a full list of built-in pipes and how they work. Let's add a feature in our app that highlights the filter string found in each name. A custom Angular pipe is an excellent choice for this kind of feature. We'll use the ng generate command to generate a new file for our pipe. I'll go up to the terminal menu, click on new terminal and then I'll type ng generate pipe and hit Enter. Angular is going to ask us what we want to name the pipe. You can name your file whatever you'd like. I'm going to call mine highlight text and I'm going to put it in a new pipes folder in the app directory. I do that by typing pipes/highlight-text and hitting Enter. Check out my video earlier in this course for details on how to use the [[Angular CLI]] tool. Let's take a look at our new file. I'll go to the source directory app, scroll down to pipes, click on highlighttext.pipe.ts. I'm going to close this terminal too. Nice. Here's the file for our new pipe. There's a couple things I want to point out here. The first is the name of property up here in the pipe decorator. Pipes should be named using camel case. It's a good practice to do it this way. And if you're using the Angular CLI tool to generate your pipe files, then Angular CLI did that for you.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=92)** Nothing you need to do. However, if you're generating these files manually, if you're adding these files manually, you want to avoid hyphens in the name. Hyphens will lead to an error at runtime. The other thing I want to point out here is this transform method. Angular expects this method to exist with this name in all pipes. And if it can't find this method, then it causes an error. Let me show you what I mean. If I update the name to something like say change, I'm going to get feedback from the editor telling me that it can find the transform property. But also if I try to run this app in the browser, I'm going to get an error that says, cannot read property call of undefined. And this is because there is no transform method for Angular to call against. I'm going to reset the name back to transform here. The transform method takes two arguments. The first is the value piped in from the [[HTML]] template. And the second is any number of optional parameters also passed in through the template. It's good practice to always return a value from a pipe even if that value is null or undefined. The pipe passes this value back into the template and if there's nothing returned then nothing gets displayed in the view. It's also good practice to write pipes that do only one thing. This makes them easy to test and also makes them easy to chain together in the template. Let me show you what I mean. Here's the template for our user list component. Let's say I wanted to the user.name property into uppercase and I wanted to truncate it down to three characters. I would do that using the uppercase pipe
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=187)** followed by the slice pipe, both included in Angular. Let me show you how that happens. I'll go to the end of our name property here. I'll type the pipe character followed by uppercase which is the name of the uppercase pipe followed by another pipe character and then the slice pipe. The slice pipe works just like the array.slice method in [[JavaScript]]. So I'll need to pass in at least one parameter for the start index. I do that using a colon followed by a number, in this case, I'll pass in negative three. So we get the first three characters of each name. I'll save my changes. Let's go see what things look like in the browser. Back in the browser when we refresh the page, we see the output of our change pipes. First three letters, all uppercase. Now, granted, this is not the most useful pipe chain but it's a good example of how you can piece together simple pipes to make more complex output. What we really want is to pass the user.name value into our highlight text pipe along with the filter text. We do it like this. I'm going to delete the uppercase pipe and the slice pipe. Replace that with highlight text followed by the filter.value. Save our work. Let's go see the browser again. Looks good. No errors in the console and our list of names is empty, which is correct because our custom pipe doesn't return anything yet. It just returns null. Let's go fix that now. I'm back in the highlight text pipe. Instead of returning null on line nine, I'm just going to return the value. Save our changes.
>
> **[4:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=279)** Back to the browser. It looks good. No errors in the console and our list of names is back. In the next video, we'll update the transform method in our custom pipe to find the search string entered by our user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (7), [[Angular CLI]] (3), [[HTML]] (1), [[JavaScript]] (1)
> **UI Navigation:** click on (2), go to (2), scroll down (1)
> **Exercise Files:** template (5)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** cli (3), html (1)
> **Tools:** terminal (3)
> **Best Practices:** good practice (3)
> **Cross-References:** earlier in (1), in the next (1)

#### [Using regular expressions to find content](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=0)** - [Instructor] In the last video, we added a new custom pipe using the [[Angular CLI]] tool. Now we're going to update the transform method in that pipe to find usernames based on our filter string. I'll start by updating the default type annotations here in the transform method. We know that the value will be a string, and that the optional parameter is going to be our filter, which is also a string, but not an array, just a string. This transform method is going to return a string, so we can update the return type as well. We don't need to update the type annotations, but it's a good practice and it helps the compiler understand what we want our code to do. Next, we want to return the original value right away if there's no filter. This keeps our code performant and avoids unnecessary processing. I'll do that by creating an if statement here on a new line. If the filter.length is equal to zero, return the value. If the filter has a length, we want to use it to replace content in the value with something else. We do this using the replace method. Here, right after the [[Microsoft Word|word]] value on line 13, I'll type .replace(). Replace expects two arguments. The first is the search text. In our case, that would be the filter. And the second argument is the replacement text. I'll set that to a simple string for now just to make sure everything works. Let's go with x. Back in the browser, when we refresh the page and search for a name, let's say Cooper,
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=94)** the list filters correctly because we handle that in the component, not the pipe, but we're not seeing any change in the content. And this is because our filter string, as entered, is lowercase. But if we inspect the [[HTML]] itself, I'll right-click on Cooper, click inspect, we can see that in the HTML markup, Cooper has an uppercase C. if I clear the filter and search for Cooper with an uppercase C, then the pipe replaces the search text with an x as expected. So how do we ignore the case of the letters? There are a few ways we could do this. And I think the cleanest way is by using a regular expression. Regular expressions are a very powerful way to build complex search patterns. And I encourage you to learn more about them. Just search for the phrase regular expressions here in our library for more info. The replacement method that we use in our pipe accepts either a string or a regular expression as the first argument. So instead of passing in a string directly, we'll pass in a regular expression that ignores letter case. We'll do this by making a new variable to hold our regular expression. I'll make a new line and type const search = new RegExp(). The RegExp class takes two arguments. The first is the search pattern. This is our filter variable, so I'll pass that in here. And the second argument is a string containing flags. Flags change how the search pattern is applied to content. I'm going to pass in the i flag here. I stands for ignore case.
>
> **[3:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=188)** We then replace the filter reference here in our return statement with a reference to the regular expression instead. Back in the browser, if I search for Cooper again, everything works as expected. One thing to note here, if we search for a user where the first and last name start with the same letter, say we search for Camden Chan or Callie Cote, right down here, only the first instance of that letter is changed. This is because regular expressions look for only the first instance of search text by default. We need to pass in another flag to tell the regular expression to look for our search pattern everywhere. We do this using the g flag. G stands for global. Quick note, you can pass in flags in any order. Back in the browser, if I reload the page, and I search for Callie Cote or Camden Chan again, now every instance of that search term is updated. Things are great so far. We can find the filter string in each username and replace that string with new content. But how exactly do we highlight the text? We'll take a look at that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Angular CLI]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** html (2), cli (1)
> **Definitions:** stands for (2), is a  (1)
> **Cross-References:** in the last (1), in the next (1)
> **UI Navigation:** right-click (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Using a pipe to change HTML content](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=0)** - In the last video, we used a regular expression to search for usernames. In this video, we'll add code that modifies [[HTML]] content, so we can highlight the filter string found in each name in our list of users. There are many ways we could do this, but I find the cleanest way is to wrap the matched text in a span element and modify its styles using CSS. This approach does two things for us. First, it keeps CSS styles out of our HTML content, which is good practice. And second, it avoids cross site scripting issues. [[Angular]] has built in protection against many common attacks, including cross site scripting. And we would need to bypass angular security to style the content directly in our pipe. I don't recommend bypassing angular security. So using a CSS class is the safest option. Check out angular's documentation to learn more about cross site scripting and angular security checks. The replace method on line 15 accepts either a string or a function as the second argument. So instead of passing in a string, we'll pass in a function that returns the match text wrapped in the span element. This is how we do that. I'll delete the string here, make a call back function using HARO Syntex. I'm going to pass and match. As the argument. This is the search result based on our regular expression. This function needs to return a string. And since the matched text will change with each new search, we'll need to use a template literal to make the return value dynamic. I'll add a return keyword and two backticks. This is how we declare a template literal in [[JavaScript]].
>
> **[1:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=96)** Inside the backticks, I'll type the opening and closing span elements, just like I would in HTML. And inside the span element, I'll reference the match argument using JavaScript's dollar sign and curly braces notation. Then I will add a class attribute to the span element, just like I would in HTML file. You can call your class whatever you'd like, I'm going to call mine highlight dash text. Great. Let's check our work in the browser. Refresh the page. If I search for a name, the pipe does its job but angular displays are spent element as text instead of an actual HTML element. This is because angular escapes all HTML content by default when rendered using a template expression. Anytime we use the double curly braces notation in angular template, we're using a template expression. We'll need to replace the template of expression with a reference to angular's inner HTML attribute instead. Check out angular's website to learn more about its security and how the inner HTML attribute works. We'll replace the template expression with the inner HTML attribute like this, I'll take the content of our expression, cut. Delete the curly braces. I'll make opening and closing square brackets to tell angular that this is an input value. I'll type inner HTML, and I'll assign the value of this attribute to what was in our expression. Back in the browser, I'll refresh the page, and let's try searching for a name.
>
> **[3:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=189)** So far, so good. I don't see any HTML in the output, but let's make sure we're actually getting the span element that we are looking for. A right click on a name, click on inspect. And there it is. Here's our span with a class of highlight text and the search string right in the middle there. The last thing we need to do is modify the background color for our new CSS class. I'll do that by opening these styles dot CSS file, which is in the source directory right here. And I'll add a new CSS class called highlight dash text, and I'll set the background property to yellow. We add the CSS selector here in these styles not CSS file because of how angular scope CSS at the component level. We can access this file no matter where we use the pipe, which means we can control how the highlighted text looks in the entire app with only this one CSS selector. Back in the browser, we reload the page, let's search for say greene, Maria Greene. There she is. Not only do we filter the list but we can highlight the search text. Nice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (12), [[HTML]] (11), [[JavaScript]] (2)
> **Env Vars:** html (11), css (10), haro (1)
> **Exercise Files:** template (7)
> **CLI Commands:** make (4), find (1)
> **UI Navigation:** click on (2)
> **Analogies:** just like (2)
> **Cross-References:** in the last (1)
> **Definitions:** is an  (1)

#### [Common pipe errors](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=0)** - [Narrator] Pipes are a very powerful way to transform content without mutating the source data. But there are some common pitfalls you need to be aware of when building custom pipes. You must add your pipe to the declarations ray in the Ng Module decorator. If you don't, the compiler will fail and you'll get an error message saying "[[Angular]] can't find your pipe." The [[Angular CLI]] tool does this for you so there's nothing to worry about when you generate new pipes using Angular CLI. Pipes are pure by default. This means Angular executes the pipe only if it detects a change in a primitive value, like a string or boolean, or it detects a change in a reference to an object or an array. With pure pipes, Angular ignores changes to data inside objects and arrays. This keeps your app performant because it's much faster to check primitives and references than it is to do a deep scan of an object or an array. If you change data in an object or an array, you must replace the reference to that object or array to trigger the pipe. You can do that using [[JavaScript]]'s spread syntax or the Object.assign method. There are some other techniques, but these two are the most common. Angular also has impure pipes, and you can use these to detect changes inside objects and arrays. The difference is that Angular executes impure pipes every time it detects a keyboard or mouse input, which can slow your app down if you're not careful. To turn a pure pipe into an impure pipe, set the pure flag to "false" in the pipe decorator to turn any pipe into an impure pipe. The last pitfall you need to be aware of
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=94)** is pipe operator precedence. Pipes have a higher precedence than ternary operators. This means Angular will apply the pipe to the final expression before checking against the conditionals. You must use parentheses to declare the order of operations to apply a pipe to the result of a ternary expression.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[Angular CLI]] (2), [[JavaScript]] (1)
> **Warnings:** be aware (2), pitfall (1)
> **Env Vars:** cli (2)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Understanding Angular decorators](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=0)** - [Instructor] Decorators are functions that return functions. That simple. But in [[Angular]], they supply [[Metadata]] about a particular class or property or value. And they also help with [[Dependency Injection]] across the entire app. They are built in from the ground up as part of the Angular framework. Decorators are marked by placing an @ symbol in front of the Decorator name. They are invoked at runtime and expect arguments to be passed in either between the parentheses or immediately after the closing parentheses of the Decorator. This is why semi-colons are left off the end of the Decorator expression and why parentheses, even empty ones, always follow the name of the Decorator. Common decorators are NGModule to define the modules, Component to define components, Injectable to define services, and Input and Output to define properties that are sent and received from the DOM. There are many built-in Decorators available in Angular and many properties on each Decorator. So I recommend you read the official Angular documentation for more information on Decorators and how they work in Angular projects. Common Decorator errors include missing parentheses, missing properties, missing values, or adding a semi-colon at the end of a Decorator statement. In older versions of Angular, Decorator errors were really hard to diagnose because Angular emitted errors only on execution in the browser console and not a compile time. In newer versions of Angular we get a lot more helpful feedback from the compiler
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=94)** and this makes diagnosing those issues much, much easier. You can use the NG build and NG serve commands that come with the [[Angular CLI]] tool to take advantage of this error reporting. NG build compiles your code and halts if there are errors. NG serve compiles your code, reports the errors, and continues watching for changes. Code editors like Visual Studio Code are also very helpful because they can reason about your files and give you real time feedback without even compiling the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (8), [[Metadata]] (1), [[Dependency Injection]] (1), [[Angular CLI]] (1)
> **Env Vars:** dom (1), cli (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Filter the array of users by locationId](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-filter-the-array-of-users-by-locationid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-filter-the-array-of-users-by-locationid?u=76281980&t=0)** - [Instructor] Here's a challenge for you, make a new pipe that filters the array of users based on one or more location IDs and returns a new array with only those users. Keep in mind that for this challenge you're modifying the array of users as a whole and not the individual user objects. You can take a look at the users.TS file for a better idea of how the user's array is organized. Good luck.

> [!info]- Semantic Content
>
> **File Paths:** users.ts (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Filter the array of users by locationId](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=0)** - [Instructor] Okay, here's my solution for the challenge. Keep in mind that my solution and your solution may be different and that's okay. I made a new pipe called location ID using the same NG generate command we've used in previous videos. The transform method takes in an array of users or null as well as any number of optional location IDs. If the array is null or there's no IDs passed in, just return the value. Otherwise I filter the array using [[JavaScript]]'s array dot filter method. For each user in the array I compare that user's location ID against all the IDs passed into the pipe. I use JavaScript's array dot some method to do this. Some returns a Boolean used by the filter method. If true, it adds that user to the new array. If false, it does nothing. Finally, I return a new filter to array of users. Let me show you the [[HTML]] template. Here's where I send the user's array into my new pipe and here's where I pass in the location IDs. I use colons to separate each ID I want to pass in. I wrapped this whole expression in parenthesis, while not required, in this context I find parentheses make the code much easier to read. In the browser we have a very short list of users and everything still works as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[HTML]] (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** html (1)
> **Exercise Files:** template (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Common Async Errors

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting data using REST requests](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=0)** - [Instructor] Let's add a feature to our web storage service that lets users get the current filter state from a remote database using [[Representational State Transfer (REST)|REST]] requests. REST stands for [[Representational State Transfer (REST)|representational state transfer]]. It's a set of [[Web Standards]] that define how software sends and receives data using the HTTP protocol. [[Angular]] comes with full support for REST requests, so we should take advantage of it. First, I'll open up our web storage service file, source, app, services, web-storage.service, and I'll import Angular's HttpClient class into this file. I'll make a new line at the top and type import HttpClient from @angular/common/http. Next, I'll instantiate the HttpClient class in the constructor. I'll make a new line here followed by private http: HttpClient. You can use any variable name you like, but it's common to use something like HTTP here. Now, there are many ways we could set up the code here in our service, but to keep things simple, I'm going to make two new methods, one to get data from the server and the other to send data back to the server. I'll make a new line under the set method and type public getRemote() {}. Inside this method, we'll use the HttpClient instance to get data from a URL. I'll make a new line and type this.http.get. The get method takes two arguments.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=94)** The first is a URL string pointing to the data you want to get from the server, and the second argument is optional. It's an object with additional data you want to send with the request. This is where you put things like request headers, URL parameters, and authentication credentials. We don't need to pass in any options, so we won't need that second argument. We do, however, need a URL. And this is where things get interesting. I built this course to be self-contained. So instead of using a real remote server, I created an HTTP interceptor instead. Let me show you. It's under source, app, mocks, user-list-interceptor.service. HTTP interceptors are a lot like the custom error handler we made earlier in this course. They let you examine and modify the HTTP request before you pass it back to Angular's HTTP service. You might use an interceptor to add authentication headers to every get request, or maybe you want to alias a short URL to a much longer one. HTTP interceptors are a great place to do that. We're using an HTTP interceptor here to mock calls to a remote server. Let me show you what it does. I implement Angular's HTTP interceptor here on line eight. I also have these two private properties. One is called API_URL. This is the URL we pass into the get request, the PUT method, anything like that in our other files. And I have this storage key called MOCK_API_FILTER. This is the key we're going to use in local storage later on in this file
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=187)** to store the data, essentially. Interceptors have only one method called intercept. This method returns an observable, and it takes two arguments. The first is the HTTP request itself, and the second is the handler. This is essentially how you dispatch the next request in a stream of requests. So the first argument is essentially the current request, and next is how you dispatch that request back to whatever's requesting. Inside this method, I have two if statements. If the request URL is equal to our MOCK_API_FILTER URL, and the request type is of get, then we're going to call this getFilter method, which I'll show you below. If the request URL is equal to our mock API, and the request is PUT, then we're going to return a different method, setFilter, also below. If the request is something other than those two things, we're just going to return it as usual, no changes. For a get request, we have this method down here, getFilter, which also returns an observable. And basically, what I'm doing is I'm sending back the status of 200, that's the HTTP status, as well as the body, which is the actual data from local storage. And this is that storage key I mentioned earlier above. So this here is how we transform an HTTP REST request into a call to local storage. It's a little funky, and for most projects, you probably won't do something like this,
>
> **[4:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=280)** but again, I'm trying to keep this core self-contained. So we are pretending that these HTTP requests are coming from a remote service, even though everything is stored in local storage. Finally, we complete the observer. Same idea for set filter down here. We pass in a filter string, which we send into local storage using the same storage key. And then we just call getFilter again. Back in our web storage service, I'll set the URL for the HTTP get method to the same URL we used in the interceptor. So I'll type /mock/api/filter. The HTTP get method returns an observable that we can pass directly into the user list component. So I'll just add a return keyword to the start of the line here. The details of what observables are and how they work are outside the scope of this course. So for now, just think of them as promises with additional features and benefits. The last thing we want to do is set the return type for our getRemote method. This is going to be of type Observable, and it will return a string. If you're following along in VS Code, you might get a wavy line on the HTTP get request. That's okay, this is feedback from the editor telling us that there's an issue. I can hover over to get more information. And what it's telling me is that the type Observable<Object> is not assignable to the type of Observable<string>. This is something interesting that Angular added in more recent versions of Angular, where essentially there's a disconnect between what the get request is expecting by default
>
> **[6:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=377)** and what we might be sending back to other files that are using our custom getRemote method. The easiest way to solve this is to declare the generic type on the get method, which in this case is going to be string. And that solves our error. This method is set to go. Next up, we'll look at sending data back to a server using the HTTP PUT method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (7), [[Representational State Transfer (REST)|Rest]] (4), [[Representational State Transfer (REST)|Representational state transfer]] (1), [[Web Standards]] (1)
> **Env Vars:** http (17), url (11), rest (4), put (3), mock_api_filter (2)
> **Code Identifiers:** getremote (3), getfilter (3), setfilter (1)
> **CLI Commands:** make (5)
> **API Endpoints:** put  (2), /api/filter (1)
> **Definitions:** stands for (1), is a  (1), is called (1)
> **Cross-References:** earlier in (1)
> **Tools:** vs code (1)

#### [Updating data using REST requests](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=0)** - In the last video, we added the getRemote method here in our web storage service. Next, we'll write a method called setRemote, which will use the HTTP instance to set the filter state in our database. We do this by making a new line and typing public, setRemote, open close parentheses, open close curly brackets. This method will take one argument: The payload we want to send to the server. I'm going to call it payload. Very clever, I know. It's going to be of type string because this payload represents the filter string passed in from our [[HTML]] template. This is a very simple payload, but payloads can be of any size or shape. Really, it all comes down to what the server expects to receive. Inside this method, we'll use the HttpClient instance to send data to a URL. I'll make a new line and type this, .http.put, open close parentheses. The HTTP PUT method lets us update existing records in a database. It takes three arguments. The first is a URL string pointing to the location on the server where we want to update the data. The second argument is the body of your request, which is usually the new data. And the third argument is the additional options you want to send with the request. Use this object, just like with the HTTP GET method, to send headers, credentials, and parameters. We don't need the Options argument because we're not sending in any optional parameters, but we do need a body of our request. In this case, it's going to be payload, which is our filter. And finally, I'll set the URL
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=95)** to the same URL we used in the GET request. I'm just going to copy that and paste it down here. This put method returns an Observable, just like the GET method, so I'll add the return keyword to the start of the line so we can use the Observable in our UserList component. Finally, we need to update the return type on our set.remote method, as well as the generic type for the HTTP PUT method, just like we did with get.remote in the last video. I'll just copy the return type from get remote, and I'll set the generic type on put as a string. Now we can go update our UserList component and take advantage of these new [[Representational State Transfer (REST)|REST]] request methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** http (4), url (4), put (2), html (1), rest (1)
> **API Endpoints:** get  (3), put  (2)
> **Code Identifiers:** setremote (2), getremote (1)
> **Analogies:** just like (3)
> **Cross-References:** in the last (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)

#### [Working with observables](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=0)** - Let's update the user list component to save and retrieve the filter state from our mock remote server. I'll start by updating the NG on a nit method. First, I'll delete this line here and type this dot web storage service dot get remote. The get remote method doesn't take any arguments so there's nothing to pass in. It does however, return an observable. So we'll subscribe to that response. The callback of the subscribed method is our filter string. So we can work with that value directly. I'll type filtered and then I'll use the arrow syntax for the callback and into the body of this callback we can just reuse the code from this line here. Line 20, cut paste. The wavy line under the await keyword tells us that we can only use this keyword in an asynchronous function. We now have two options for refactoring the code. The first option is to use [[JavaScript]]'s async await syntax to resolve the promise before assigning it to the user's property. Async await gives us full control of the data in our component before we assign it to a template variable. We can do whatever we want with it before sending it into the [[HTML]] template. The other option is to pass the promise directly into the HTML template and use [[Angular]]'s async pipe to resolve the promise for us. Angular's async pipe takes care of resolving and rejecting promises. It also works very similar with observables. This can be a huge benefit in some use cases. Both options are valid.
>
> **[1:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=93)** In this context I think using Angular's async pipe is the better approach. We don't manipulate the data in the component so we might as well pass the promise directly into the template and let Angular do the heavy lifting for us. Let's do that now. I'll delete the await keyword and in our template source app user list user dot component dot HTML. I will wrap the users property in parentheses and pipe it to the async. Let's go to the browser and check our work. Whoa, big error here. What happened? Actually, it's not that scary when you know what to look for. The key information is near the top of the error. There's a reference to a null injection error on line one which means Angular couldn't find a dependency and there's also a reference to the app module, our web storage service and the HTTP client class. Ah, it looks like we forgot to import the HTTP client module into our app module. Angular wants to keep your app as small and as fast as possible so it makes no assumptions about the dependencies you need. You must always explicitly declare modules to help Angular inject dependencies correctly. Let's do that now. I'll go to the app dot module dot Ts file and add the HTTP client module to the existing import statement for Angular slash common slash HTTP. Notice that I imported the HTTP client module instead of the HTTP client service. This is an important distinction.
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=187)** Modules use the NG module decorator and services use the injectable decorator and Angular looks for the NG module decorators to manage [[Dependency Injection]]. You'll get a compiler error if you import a service file instead of a module. Your error will say something like your file could not be resolved to an NG module class. Let me show you what that looks like instead of importing the module I'll import HTTP client, add it to our list of imports and then I'll make a new terminal and type [[npm]] run build. And here's that error I was talking about right here. It says something like could not be resolved to an NG module class. If you see an error like this double-check that you imported the correct file into the imports array. Let's do that now. I'll close out this terminal and instead of the HTTP client, I'll import the HTTP module instead, clean up our import statement also, save our work. Back in the browser our error is gone but we still have some things we need to update in the user list component file. Let's do that now. Since we're passing in this filtered string from our web storage service instead of parsing the string, because we don't need to, it's already a string. We're just going to use the user list service dot filter method instead. So I'll copy the user list service filter from the update method paste it on this line here line 22 and pass in our filtered property. So what this reads as is if filter does equal to null
>
> **[4:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=281)** just return the entire list of users using the get all method otherwise use the filter method and the string to return a filtered list. We have one more issue to resolve and that's on this user's property. If we hover over it, the editor gives us some feedback. Basically says that there are these missing properties on the user array. We're missing length, pop, push. These are all array methods and it makes sense that we're not seeing them because we're actually returning a promise now and not an array directly. So I'm going to go up to line 13 and instead of setting it's type as a user array I'm going to set it as a promise of type user array. Don't worry about this era down here we'll fix that in a sec. What's really important is right here, that era is gone. And if we go back to the browser, refresh the page no new errors -- so far so good. The last thing we need to do is change the update method to save the filter string to our mock remote server. We do this by making a new line and typing this dot web storage service dot set remote. And we'll pass in the text argument from the update method and we'll subscribe to the response just like we did with the get remote method. Just like earlier the set remote method returns the filter string as a response. So I'll use that same argument here just like I did earlier. We can just reuse line 22, copy, paste it down on line 28, I'll delete line 30 and 31, clean things up a bit.
>
> **[6:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=376)** So what this reads as is when a user passes in a filter string using the update method on the HTML template we're going to call the set remote method on our web storage service, pass in that filter which will return the string. And if that string is null, we're just going to call the user list service directly, get all the users. Otherwise we're going to use the filter method on the user list service to return a filtered list. Either way we're going to assign it to the user's property here in the component. Back in the browser when we refresh the page, everything works as expected and we can also check the application tab, scroll down to local storage, click on local host 4200. And there is our mock API filter key from the HTTP interceptor we talked about earlier in this course with our filter value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (9), [[HTML]] (4), [[JavaScript]] (1), [[Dependency Injection]] (1), [[npm]] (1)
> **Env Vars:** http (10), html (4), npm (1), api (1)
> **Exercise Files:** template (6)
> **UI Navigation:** go to (2), scroll down (1), click on (1)
> **CLI Commands:** find (1), make (1), npm (1)
> **Analogies:** just like (3)
> **Cross-References:** go back to (1), earlier in (1)
> **Tools:** terminal (2)

#### [Catching errors from an observable](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=0)** - [Instructor] Misspelled resource locators are a common error when working with asynchronous server requests. To mimic this issue, let's intentionally add a typo to the end of the URL in the [[Git]] Remote method in our web storage service. So, instead of requesting data from /mock/api/filter we're going to request it from /mock/api/filter/foo Back in the browser, we see a console message telling us that the git request for the specified URL returns a 404 Not Found error. There's also this generic error object returned from [[Angular]]'s ErrorHandler that has more information about our server request. It's good practice to always catch server errors and there are many ways to do so at both the component level and the service level. For this course, we'll keep things simple and update the subscribe method in the ngOnInitError method in our component with a second argument. This argument is a callback that's invoked only when an error is returned from an observable. The callback takes a single argument, the error response, which we can then work with like any other response object. So, I'll go to line 23 type a comma between the curly brace and the parentheses, I'll type error followed by the arrow syntax fat arrow syntax for callbacks in [[JavaScript]]. In the body of this callback, we can do whatever we want with this error object. I'm going to keep things simple and just pass it along to console.error. I'll also give our error a description to easily identify it in the console. You can use whatever text you like. I'm going to use the string ngOnInitError. Back in the browser, we can see that the generic error
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=95)** is gone and in its place as our custom output, along with the original error object response. Let's reset the URL in our web storage service to point to the correct location in our database. Go into our web storage service file, delete foo, save our changes. Back in the browser everything works again as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (2), [[Angular]] (1), [[JavaScript]] (1)
> **Env Vars:** url (3)
> **CLI Commands:** git (2)
> **Code Identifiers:** ngoniniterror (2)
> **API Endpoints:** /api/filter (1), /api/filter/foo (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)


### 5. Unit Testing in Angular

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing overview](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=0)** - [Instructor] Testing your application ensures that any changes or additions you make will have the desired effect without introducing new errors. The two types of tests you'll see most often during development of an [[Angular]] application are unit tests and end-to-end tests. Unit tests reduce regression errors at the object or function level. Regression errors are bugs introduced by the development team that make a function stop working as expected. Unit tests eliminate regression errors by clarifying the intent of your code and confirming that your objects, methods, and classes all still work as intended. Unit tests are designed to check small, discrete chunks of code that are usually independent of the user interface or user interaction. Good unit tests can confirm a particular property exists on an object or that a specific method always returns true when passed even numbers as arguments. In Angular, you can also use unit tests to check instances of classes in isolation, which is great for confirming that a pipe works as expected or that a component receives input correctly. To test user interaction, we'll need to use end-to-end tests instead. End-to-end tests are also called integration tests and these tests are designed to confirm that large components or even entire webpages produce the desired results by mimicking how your end users will interact with your application. Good end-to-end tests can confirm that clicking a specific button always redirects users to a shopping cart page, or that users can only add whole numbers to a specific column in a table of data. It's good practice to always test your code before sharing it with team members
>
> **[1:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=93)** or pushing it into production. This will make maintaining your code much easier as the application and your development team grow in size and complexity. You should also plan for an acceptable level of code coverage, which is a measure of how much and of what type of code you and your team will test. Code coverage varies from project to project and you should work closely with your team to agree on a testing standard. Keep in mind that the more tests you run, the longer your test suite will take to complete. So you might elect to run only a subset of tests during development and a larger, more robust test suite when you push to production. Angular includes the Jasmine test framework with the Karma test runner for [[Unit Testing]] and Protractor for end-to-end tests when you start new projects using the [[CLI]] tool. These are fantastic options, but you can use any setup that works well for your specific need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[Unit Testing]] (1), [[CLI]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** cli (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Basic Karma configuration](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=0)** - [Instructor] Karma is a testing environment that executes source code against a set of tests. These tests run in a browser instance and results are piped to an output of your choice. [[Angular]] includes Karma by default and configures most of the settings for you, so you can start testing your code right away. This is Karma's config file for our project. The file name is karma.conf.js. And it's located in the root directory of our project. Karma does a great job of annotating the config file and even gives you a link at the top, directing you to their documentation website. Karma's website is a great resource. And I encourage you to take a look at all the configuration options. For now, we'll focus on the default configuration for Angular projects. The basePath property sets the root path for all the relative paths used in the config file. An empty string means all paths are relative to the root of your project. But you might want to set this to source or specs or some other path that makes sense for your use case. The frameworks property is an array of testing frameworks you want to use with Karma. Karma only runs your tests in a browser. You need a framework like Jasmine or Mocha to actually write the tests. Angular includes Jasmine by default. But Mocha is also a popular choice. Check out their websites for more info. Karma has a plugin-based architecture for things like testing framework and output options. You declare these plugins here in the plugins array. The client property defines how Karma works with test results. The most common outputs are [[HTML]] in the browser
>
> **[1:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=93)** and text in the terminal. You also use this property to set framework-specific configuration for Jasmine. The jasmineHtmlReporter property is how you customize output from the karma-jasmine-html-reporter plugin. The coverageReporter property is how you configure the output of the karma-coverage plugin. You can learn more about the karma-jasmine-html-reporter and the karma-coverage plugins on the [[npm]] website. The reporters property lets you configure which output you want to use to show test results. Karma supports progress and dots out of the box. Progress gives you full output, and dots simplifies the output to a row of periods, one period for each passing test. Kjhtml is for the karma-jasmine-html-reporter plugin. The port property tells Karma which port to listen on for tests. You enable and disabled terminal colors, using the colors property. Show more or less output in the console, using the logLevel property. Enable and disable watching files for changes, using autoWatch. Use the browsers array to tell Karma which browsers to use to run tests. Remember to add the correct plugin for each browser you want to use. Set the singleRun property to true if you're using Karma as part of a [[Continuous Integration (CI)|continuous integration]] service, a CI service. When true, Karma will run all the tests and report back a zero if all tests pass and a one if any tests fail. When Karma is watching for file changes, it will finish its current run before starting a new one.
>
> **[3:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=188)** Set the restartOnFileChange property to true if you want Karma to abandon its current run and start a new run immediately when a file changes. In Angular projects, Karma also needs the test.ts file located in the source directory. Karma needs this file to load all the test files and their dependencies. I don't recommend changing this file, because it's tightly coupled with Angular, the [[Angular CLI]] tool and Karma.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (5), [[HTML]] (4), [[npm]] (1), [[Continuous Integration (CI)|Continuous integration]] (1), [[Angular CLI]] (1)
> **Code Identifiers:** basepath (1), jasminehtmlreporter (1), coveragereporter (1), loglevel (1), autowatch (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** karma.conf.js (1), test.ts (1)
> **Env Vars:** html (1), cli (1)
> **Tools:** terminal (2)
> **Prerequisites:** configure (2)
> **CLI Commands:** npm (1)

#### [Testing services](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=0)** - Let's add a basic unit test called a spec for our user list service to confirm that it returns an array of 16 users. The [[Angular CLI]] tool created a spec file for us. When we generated the UserListService. [[Angular]] wants to make our lives easier. So it already imported TestBed and our UserListService class. It also makes a simple passing test right here. This is a great starting point for real-world projects but for this video, let's pretend we're starting from scratch without Angular's help. I'm going to delete the content of this file so we can build our tests manually. Select all. Delete. The first thing we do is import our UserListService class. I'll make a new import statement and type import, UserListService from ./user-list.service. Angular comes with the Jasmine testing framework and all Jasmine tests happen inside a describe block like this. describe() is a global function introduced by Jasmine. So there's nothing to import here. This function expects two arguments. The first argument is a string used to describe the collection of tests we're going to run inside this block. You can call your spec suite, whatever you'd like. I'll call mine UserListSurface. The second argument is a callback function that holds all of our tests. Inside this callback, I'll create a new property in our callback function to represent an instance of the service we want to test. I'll make a new line and type let service: UserListService Notice that I use the let keyword here instead of const. This is on purpose.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=92)** Normally it's a good idea to create read only variables using the const keyword. But in this case we need to instantiate a new instance of our service each time we run a test. We do this using Jasmine's beforeEach function. Jasmine runs this function Once before every test that follows in the describe block. It looks like this: This function takes a call back as its first argument. In the callback, I'll set the value of our service property to a new instance of the UserListService, so far so good. But, we don't have any tests yet. For that, we need to use Jasmine's It function. We use this function to declare the actual test logic as well as any test specific setup for the code. The It function takes two arguments. The first is a string to label a test. You can call your test, whatever you'd like I'm going to label mine as should return a User List with 16 users. The second argument is a callback function with all of our test logic and setup code. Angular is asynchronous by design, but Jasmine is not. So we need to tell Jasmine when all the asynchronous work is finished. There are a few ways to do this. But, the simplest way is to use Jasmine's done function. I'll pass in done as the first argument of our callback and I'll set its type as the DoneFn interface. DoneFn is also a global. So, nothing to import here either. By default, Jasmine waits five seconds for asynchronous tests to finish. If a test doesn't finish in time, it's marked as failed, and Jasmine continues with the [[Representational State Transfer (REST)|rest]] of the test suite. You can pass in an optional third argument
>
> **[3:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=185)** to the it function to set a timeout value to something other than five seconds. This timeout value is in milliseconds. So I would pass in 10,000 for 10 seconds, 2000 for two seconds, and so on. The default time will be good enough for our use case here. In the callback for our test, we use our service the same way we would in real app code. I'll move to the inside callback and I'll type service.getAll(). All the test logic happens inside the callback of the then method. I'll pass in the response from getAll like this and I'll make a new line. And I'll hand off this response to Jasmine's test logic using the expect and toBe functions. Expect always takes in the value we're testing. In this case, it's going to be response.length, and the toBe method takes in the value we must see to pass the test. In this case, the integer 16. The toBe function is one of many Jasmine functions we can use to test our code. I recommend reviewing the official Jasmine documentation for a deeper look at all your testing options. The last thing we need to do is call the done function to tell Jasmine, to run our test. I'll make a new line and type done(). That's it. We made our first unit test. We use the Angular CLI tool to run our unit tests. I'll open a new terminal window here in VS Code and type [[npm]] run test.
>
> **[4:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=279)** I could call the ng test command directly, but I like using the npm script to make sure I'm using the locally installed version of ng. Instead of the globally installed version on my machine. When I hit the enter key, Angular will compile our code, launch an instance of [[Google]] Chrome, and run our tests. Let's do that now. And, here are our results. Okay. It looks like we have two failures; One in the web storage service, and the other in the user list component. Now there's a lot of data here in these error messages, but it's mostly a stack trace. The important info is at the top where it says: NullInjectorError: No provider for HTTPClient. We'll take a look at how to fix these errors in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (5), [[Angular CLI]] (2), [[npm]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Google]] (1)
> **CLI Commands:** make (6), npm (2)
> **Code Identifiers:** tobe (3), getall (2), beforeeach (1)
> **Definitions:** is a  (6)
> **Documentation:** spec (3)
> **Env Vars:** cli (2)
> **Tools:** terminal (1), vs code (1)
> **Prerequisites:** setup (2)

#### [Fixing injection dependency errors](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=0)** - [Instructor] In the last video we use the [[npm]] run test command to run our suite of unit tests, and we got two errors, one for the web storage service and the other in user list component. These tests failed because of a no injection error. This is a fancy way of saying the code we want to test has a dependency on another file, and we need to inject that dependency into our test code. But here's where things get tricky, unit tests check code in isolation. We break this rule as soon as we start injecting dependencies into our tests. If the test fails, we want to know the failure happened because of something in our code and not because of an issue in the dependency itself. So instead of injecting real dependencies, we inject fake ones and mock the method calls. There are a few ways to do this, but in this context the cleanest approach is to use angulars testbed class and provide a fake service using Jasmine's spy object. I'm in the spec file for our web storage service. [[Angular]] imported the testbed class when we generated the file, it also called the static method configure testing module in our before each block. Test bed is a versatile class that allows us to initialize services and components in our tests the same way we would by using decorators. Testbed can do a lot, and I encourage you to check out the official documentation for more info. For now, all we need to do is add the HTTP client service to the list of providers and the configure object passed into configure testing module. I'll start by importing the HTTP client class at the top of the file.
>
> **[1:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=93)** I'll make a new line and type import HTTP client from @angular/common/HTTP. Then I'll make a new provider's array in the configure object. This provider's array follows the same rules as the providers array used in decorators. Instead of passing in the HTTP client directly, I'll make a new object inside the array. This object takes two keys. The first key is provide and I assign the HTTP client as its value. The second key tells angular what we want to use in place of the real HTTP client. There are a few ways to do this but the two most common I've seen are either passing in a custom class that mocks all the service calls or use Jasmine to build the mock service for us. Custom mocks are great for complex services but in this case, it's easier to let Jasmine do the heavy lifting for us. I'll pass the use value key into our object and assign it the value of Jasmine.createSpyObj. Jasmine is the global Jasmine instance. So there's nothing to import. CreateSpyObj is one of several Jasmine methods for working with dependencies. Check out the official documentation for all the ways you can use Jasmine to mock services. CreateSpyObj takes two arguments, the first argument is a string to identify this spy object. Usually we use the name of the class we're mocking. So I'll type HTTP client. The second argument is an array of strings representing the methods we want Jasmine to mock. This is always based on what we're testing and which methods get called in the code.
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=187)** If we look at the web storage service itself, we use the get method here and the put method here. So these are the methods we pass into the spike object array. I'll do that now. I'll go back to the spec file, create an array, type get and put. I'll save my work and run the test suite again to see how we did, make a new terminal window type NPM run test and hit enter. Nice. We fixed the error in the web storage service. Next we'll do the same for the user list component. The error in the user list component is similar to the error in the web storage service but we need to be careful about the source of this error. Jasmine reports errors as a stack trace. So while the error message says no injection error, no provider for HTTP client, the source of that error is actually the web storage service which uses the HTTP client to make network calls. And since all Jasmine tests run in isolation, the test for the user list component has no idea that we already fixed the dependency issue in the test for web storage service. This is the spec file for the user list component. I'll start by importing the web storage service. I'll make a new line and type import web storage service from ../services/web-storage.service. Then just like before, I'll add a provider's array to the configure testing module object and I'll copy the provider object from the web storage
>
> **[4:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=281)** service spec into our test for the user list component. Just copy line 12, bring it into our user list component spec, and I'll replace the reference to HTTP client where the reference to web storage service. Copy, paste. Last thing is to update the array of mocked method calls. If we look at the component class itself, we call get remote here online 21 and set remote here online 29. So I'll update the spy object in our spec with those values. Back to the spec file, go to the array of methods, type get remote and set remote. I'll save my changes and run the test suite again. I'll make a new terminal window, type NPM run test and hit enter. Nice, all our tests pass. Keep in mind, this is one way to use angular and Jasmine to speed up your testing. There are a lot of ways to build out a test suite. For large projects, you may want to make a custom wrapper for the test bed class so you can inject common dependencies into all your tests very quickly. Or maybe you want to take advantage of Jasmine and its collection of spy methods. Really, it all comes down to what works best for you and your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (4), [[npm]] (3)
> **Env Vars:** http (11), npm (3)
> **CLI Commands:** make (8), npm (3)
> **Documentation:** spec (7)
> **Prerequisites:** configure (5)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** in the last (1), go back to (1)
> **Tools:** terminal (2)

#### [Testing pipes](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=0)** - Pipes are pure functions by design and they always return the same output for a given input. This makes them very easy to unit test when compared to services and components. I'm in a spec file for highlight text pipe. I used the [[Angular CLI]] tool to generate the pipe and [[Angular]] already populated the spec file with a simple test. Notice that there's no before each block here. That's because pipes are stateless and there's nothing we need to set up before testing the pipe. Let's add a few more tests to check for common use cases as well as a few edge cases. I'll start by making a new it block. I'll call this test wrap a simple string in a span but you can call your test whatever you'd like. In the callback for this test, I'll instantiate a new instance of the highlight text pipe. On the next line, I'll use Jasmine's expect function to actually run our pipe and generate an output to test against. I expect that when I call pipe.transform and pass in a value and a filter, I'll get a string back that includes a span element. We can pass in anything for the value and the filter but I'll keep it simple and use good old foobar as the value. And I'll use foo as the filter. And I expect the return value toBe foobar with foo wrap in a span with the class of highlight dash text followed by bar. There's a lot happening here so let's break it down. This toBe method here,
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=92)** this is one of several testing methods returned from Jasmine's expect function. It uses strict equality to compare the actual result against the expected result. Check out Jasmine's website for a full list of all the testing methods and how they work. In Jasmine tests, we always pass the expected result into the toBe method or whatever testing method we choose. This is usually static data of some kind, a string, a number, a bullying, et cetera. Whatever it is, we know it's correct. In this case, we know the pipe wraps the matched filter text in a span element with the class of highlight dash text. So the result of calling our pipe with these arguments should be foo wrap in the span followed by bar. Let's check our work. I'll go to the terminal menu and open a new terminal and I'll type [[npm]] run a test and hit Enter. All right, there they are. Here's our tests. I'm back in our spec file. Let's clean things up and add a few more tests. Pipes are pure stateless functions. So really we only need one instance of the class for all our tests. I'll move the pipe variable here to the top of the described block and delete the other instance. Next, I'll copy our test a few more times and make small changes to the inputs and outputs. Copy, paste. This test will wrap an uppercase string in a span. I'll update the input value to uppercase FOOBAR and I'll leave the filter as lowercase foobar
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=187)** to test that we're ignoring letter case. The known output, expected output. However, is going to be uppercase FOO and uppercase BAR. I'll copy this test again. Copy, paste. This test will be wrap a string with spaces in a span and the input, I'll put a space in our FOOBAR value and we would expect the output to have a space before BAR in our output. And let's make one more test. Copy, paste. This test will be wrap multiple words in a span. This time instead of the value being FOO BAR, it's going to be FOO and FOO, so FOO twice. And our output should be FOO wrap in a span twice. Save my changes. Let's check our work again. All right, there they are. All our tests. We could add more tests, but the more tests we add, the longer the tests we takes to run. For me, the important thing about [[Unit Testing]] is developer confidence. I want to test my code just enough that I'm confident who does what it's supposed to do even after I change something. If I can do that, then taking the time to write unit tests is well-worth the effort.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular CLI]] (1), [[Angular]] (1), [[npm]] (1), [[Unit Testing]] (1)
> **Env Vars:** foo (6), bar (3), foobar (2), cli (1)
> **CLI Commands:** make (2), npm (1)
> **Code Identifiers:** tobe (3)
> **Documentation:** spec (3)
> **Tools:** terminal (2)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)

#### [Testing components](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=0)** - [Instructor] Let's create a unit test for our app component to confirm that it loads the correct title. The [[Angular CLI]] tool created a spec file for us when we created the project. [[Angular]] wants to make our lives easier, so it already imported TestBed and the AppComponent. It also made a few simple passing tests. This is a great starting point for real-world projects but for this video, let's pretend we're starting from scratch without Angular's help. I'm going to delete the content of his file so we can build our tests manually. Select all, delete. We need to import the class we want to test, as well as Angular's TestBed and ComponentFixture classes. I'll make a new import statement and import TestBed and ComponentFixture from @angular/core/testing. We use the TestBed class to configure our modules and resolve any dependencies our components might need. The ComponentFixture class gives us access to the component itself and its state. We're also going to need to import the class we want to test. I'll make a new import statement and import AppComponent from ./app.component. Angular comes with the Jasmine testing framework and all Jasmine tests happen inside a describe block like this. Describe is a global function introduced by Jasmine so there's nothing to import. This function expects two arguments, the first argument is a string used to describe the collection of tests called the suite we're going to run inside this block. You can call your spec suite whatever you'd like, I'm going to call mine AppComponent.
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=95)** The second argument is a callback function that holds all of our tests. I'll make a new property in the callback to represent an instance of the component we want to test. I'll make a new line and type let component which will be of type AppComponent. We'll also need a property called fixture which will be of type ComponentFixture which itself will be of type AppComponent. Notice that I used the let keyword for these properties instead of const, this is on purpose. Normally, it's a good idea to create read only variables using the const keyword but in this case, we need to instantiate a new instance of our service each time we run a test. We do this using Jasmine's beforeEach function. Jasmine runs this function once before every test that follows in the describe block, it looks like this. This function takes a callback as its first argument. In the body of the callback, I'll set the value of fixture equal to TestBed.createComponent and I'll parse in the AppComponent class. We use createComponent to make an instance of the component we want to test, add that component to the test runners dumb and return a new ComponentFixture. Something to keep in mind, you can't modify TestBed configuration once you call createComponent, so make sure you do all your TestBed configuration before calling this method. In the same callback here, I'll also set the value of the component property equal to fixture.ComponentInstance. componentInstance is how we access all the methods and properties inside the component class. Finally, I'm going to call fixture.detectChanges.
>
> **[3:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=191)** This method triggers a change detection cycle in the component, okay. So far so good, but we still need to configure the App module and resolve dependencies. We do that using the TestBed.configureTestingModule method like this. This method takes an object as its first argument. This object has similar properties to the NgModule decorator and we use it in the same way. I'll add the AppComponent to the array of declarations and then I'll change the compileComponents method onto the configure testing module method like this. We need to call this method to get the [[HTML]] template for our component. This method returns a promise so we'll need to wait for that before doing any more work in the beforeEach block. I'll use [[JavaScript]] async await syntax here because it's a clean solution, no nested then calls. The wavy red line under the await keyword is VSCode telling us there's an error. I can hover over that [[Microsoft Word|word]] to find out more. In this case, the editor is telling us we can only use the await keyword in asynchronous functions. I'll add the async keyword on line nine, just before the callback to fix the error. Now that configuration is done, we can actually test our component. We do that using Jasmine's it function. The it function takes two arguments, the first is a string to label the test. You can call your test whatever you'd like, I'll call mine should have a title. The second argument is a callback function with all our test logic. In the body of the callback, I'll make a new variable called compiled and assign it to the value of fixture.nativeElement. nativeElement is how we access the components dumb.
>
> **[4:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=289)** If we look at the HTML template for the app component, we see an h2 tag with the words Active Users inside. We can target this element using a querySelector. Back in our test file, I'll make a new property in our it block called title and I'll set its value equal to compiled.querySelector, passing in the h2 tag as a string. What we really want to do is target the content of the h2 tag. We can do that using the textContent property on the querySelector. Finally, we want to actually run the test. We do this using Jasmine's expect function. I'll make a new line and type expect open close parentheses. You parse in the title property, and then we chain one of Jasmine's many testing methods onto the end of the statement. Check out Jasmine's website for a full list of all the testing methods. Today, I'm going to use the toBe method. This method checks the expected value against the known value using strict JavaScript equality. I'll pass the known value into the toBe method which is the string active users. Let's check our work. I'll go to the Terminal menu, click on New Terminal, type [[npm]] run test, and hit Enter. Looks like all the tests pass. And here's that test we just made, App Component should have a title. I know that was a lot of code to test such a small string but keep in mind that this is one of many testing patterns you can use for testing components. I highly recommend you check out the official angular documentation for a breakdown of all the available options, and properties
>
> **[6:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=383)** and methods you can use for [[Unit Testing]] components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[HTML]] (2), [[JavaScript]] (2), [[Angular CLI]] (1), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** createcomponent (3), queryselector (3), beforeeach (2), nativeelement (2), tobe (2)
> **CLI Commands:** make (10), find (1), npm (1)
> **Definitions:** is a  (6)
> **Env Vars:** html (2), cli (1)
> **Prerequisites:** configure (3)
> **Documentation:** spec (2)
> **Tools:** terminal (2)

#### [Challenge: Custom test bed wrapper](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-custom-test-bed-wrapper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-custom-test-bed-wrapper?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-custom-test-bed-wrapper?u=76281980&t=5)** - [Instructor] Here's the challenge for you. Make a custom wrapper for [[Angular]]'s TestBed class so you can inject common dependencies, like our web storage service, into all your tests very quickly. The idea here is that this new class can act as a drop-in replacement for Angular's default TestBed. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Solution: Custom test bed wrapper](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=0)** - Okay. Here's my solution for the challenge. Keep in mind that my solution and your solution may be different, and that's okay. I made a class called CustomTestBed using the same ng generate commands we've used in previous videos. This class implements [[Angular]]'s TestBed has a partial. Partial is a utility type introduced in recent versions of TypeScript. It returns a version of whatever type you pass in with all its properties set as optional. It's a great tool for things like this, because we get all the benefits of type safety without needing to implement all of TestBed's properties. Next, I made my own version of configureTestingModule. It has an object full of default values for the testing module config. This is where we store things like the WebStorageService which we want to inject into all our tests. I then return a copy of Angular's TestBed, calling configureTestingModule, and passing in a modified configure object. I use object data sign to merge the default dependencies with whatever extra dependencies are passed in above here. I also recreate the compileComponents and createComponent methods here and here. Here's the spec file for our UserListComponent. In the beforeEach block, instead of using Angular's TestBed class, I use my CustomTestBed class instead. Notice how I still pass in the UserListComponent in the declarations array, but I don't need to pass in the WebStorageService. This is because I already mocked that service
>
> **[1:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=93)** in my CustomTestBed class. I still call compileComponents here and createComponent here as normal. And when we run the test suite, I'll make a new terminal, type [[npm]] run test, hit enter. And when we run the test suite, everything works as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[npm]] (1)
> **Code Identifiers:** configuretestingmodule (2), compilecomponents (2), createcomponent (2), beforeeach (1)
> **CLI Commands:** make (1), npm (1)
> **Documentation:** spec (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)


### 6. End-to-End Testing in Angular

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic Protractor configuration](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=0)** - [Instructor] Protractor is [[Angular]]'s official [[End-to-end Testing]] framework. The Angular team made Protractor specifically for Angular apps, with full support for how Angular compiles these apps and generates DOM structures. Angular includes Protractor by default when you generate new projects using the [[CLI]] tool and it configures most of the settings for you so you can start testing your code right away. This is Protractor's config file. It's located in the top level e-to-e folder under the name protractor.comf.js. We're going to take a quick look at the default configuration, but I recommend you dive into Angular's [[GitHub]] repo for a full breakdown of all your configuration options. Just click the link at the top of the config file. The first thing Angular does is import the SpecReporter and Stacktrace option classes. Protractor uses these classes to enhance it's reporting feedback. Next, we have this comment block where Angular imports the config object from the Protractor dependency. This helps with auto-completion for the file. And here we have the config object itself. It's a standard node export. Let's take a look at the config properties. All scripts timeout is the maximum time in milliseconds that each script can take to run in the browser. This value should be long enough to let your app stabilize after a change event takes place. The default is usually pretty good. The specs array is a list of locations where Protractor should look for test files. These locations are relative to the config file and accept wildcard patterns.
>
> **[1:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=96)** The capabilities object lets you configure the browser instance Protractor will use to run your tests. This is where you set things like the maximum number of browser instances and the output name for log files. Use the multi-capabilities array instead of the capabilities object if you want to test in more than one type of browser. DirectConnect tells Protractor to connect directly to the browser drivers. This property works for only Chrome and Firefox. The [[Selenium]] Promise Manager property changes how Protractor manages [[Control Flow]] for web driver JS. Protractor is asynchronous by design. Set this value to True if you want Protractor to manage resolve in Promises for you, otherwise, you'll need to use async await to manage resolving promises in your code. The base URL property sets how Protractor handles relative URLs in your test code. Protractor is a test runner. You still need a framework for writing the tests. Use this property to set the framework you use for writing those tests. As of this recording, Protractor has full support for Jasmine and partial support for Mocha. You can also pass in a custom framework, if needed. JasmineNodeOpts is where you set options you want passed along to Jasmine. This is where you set things like the default timeout and showing colors in the terminal output. Finally, Protractor calls the onPrepare callback when it's ready to execute tests. Use this space to define any last-minute setup before Protractor executes the test scripts.
>
> **[3:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=190)** The default callback here tells Protractor to find the tsconfig files and use Pretty print for Jasmine's Stacktraces. Speaking of tsconfig files, here's the tsconfig file for Protractor. It extends the project's root tsconfig and tells Protractor how to compile type script files for testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (8), [[End-to-end Testing]] (1), [[CLI]] (1), [[GitHub]] (1), [[Selenium]] (1)
> **Env Vars:** dom (1), cli (1), url (1)
> **Tools:** github (1), firefox (1), terminal (1)
> **Prerequisites:** configure (1), you'll need (1), setup (1)
> **CLI Commands:** node (1), find (1)
> **Definitions:** is a  (2)
> **File Paths:** protractor.comf.js (1)
> **Code Identifiers:** onprepare (1)

#### [End-to-end testing without page objects](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=0)** - [Instructor] Let's add an integration test, also called an e2e test, or end-to-end test in our application, to confirm that the app loads as expected. The [[Angular CLI]] tool created this spec file here for us when we generated the project. And [[Angular]] wants to make our lives easy, so it already imported some useful tools, to aid in writing the tests. This is a great starting point for real-world projects. But for this video, let's pretend we're starting from scratch without Angular's help. I'm going to delete the content of this file so we can build our tests manually. Select All, Delete. I'll start by importing some tools from Protractor. I'll make a new import statement and import a browser, element and by, from Protractor. Browser lets us navigate to specified URLs in our app. Element lets us interact with DOM elements on a page and by lets us locate those elements by CSS or other selectors. Next we need a describe block. All Jasmine tests happen in the callback of this function. This block needs a name. You can call yours whatever you'd like. I'm going to call mine User List App. And I pass that string in as the first argument. We need to tell Protractor to reload the page beforeEach test. We do this inside a beforeEach function. And the callback of this function, I'll call browser.get. The first argument of the get method takes a string representing the relative or absolute path we want to load. In this case, we'll pass in the relative path of our homepage which is /dashboard.
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=95)** Now let's write a test to check for a page header. We'll need Jasmine's it function for that. I'll make a new line and type it, open, closed parentheses. The first argument for it is a description of the test. You can call your test, whatever you'd like, I'm going to call mine "should have a header." The second argument of the it function is a callback. This is where we put all our test logic. If we look at the main [[HTML]] template for our app, we see an h2 tag with the text Active Users at the top. We need to target this element in our test. We can do that using Protractor's By Object Back in our spec file, I'll make a new property inside the callback of the it function. I'll call this property header and the value will equal by.css. The CSS method here targets elements the same way [[JavaScript]]'s native query selector does. And this means we can pass in the h2 tag as a string. This header property represents a Protractor Locator for the HTML element. We need to use the Element Function we imported at the start of this video, to get the actual text from the DOM. I'll make a new property called text and set it's value equal to element, passing in the header locator as the argument. The Element Function here has a lot of methods we can use to interact with the DOM. Right now, all we need to do is get the text from inside the element. I'll use the getText method to do that. Finally, we need to actually test our code. We do that using Jasmine's Expect Function. I'll pass our text property into the expect function
>
> **[3:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=190)** and use the toBe method to check against a known static value. In this case, that value will be Active Users. This wavy line under our static string is VSCode telling us there's an error. Let's see what the problem is. It looks like the expect function is returning a promise but we're checking for a string. How could that be? Well, unlike Jasmine, Protractor is asynchronous by default. This means one of the methods above is returning a promise that we need to resolve. Can you guess which one? Pause the video for a few moments and see if you can find the promise. I'll wait. Did you find it? In VSCode, we can hover over the various methods in this test to see their signatures. And the promise is coming from the getText method right here. I'll use JavaScript's async await syntax to resolve this promise. I'll go to the callback just before the callback and I'll type async. And then just before the element function, I will type await. The browser.get method in the before each block is also asynchronous. So we need to use async await there as well. Let's run our test suite to see how we did. I'll open a new terminal window and type [[npm]] run e2e and hit Enter. Protractor will compile our app, run our tests, and show the results in the terminal. Sometimes if there are a lot of tests, this could take awhile. So please be patient. Nice, our test works. Let's add one more test to check for 16 users on page load. I'll close this terminal here
>
> **[4:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=283)** and then I'll add a new it function and call it should have 16 users on page load. In the callback, I'll make a new property called items, and set the value equal to by.css. In the HTML template for the user list, we load each user on line 10 in it's own list item element. This is the element we'll target in our test. Back in the spec file, I'll pass the list item tag as a string into the css method. Again, this item's property is only a reference to the DOM locator. We need to use the Element Object to target all 16 items. I'll make a new property called users, and set its value equal to element.all passing in the items property. The all method returns an array of all elements found that match our search. Without the all method, the element function returns only the first instance. Our logic for this test looks like this. This reads as I expect users.count toBe 16. Count is another built-in Jasmine function that returns the number of elements in an element.all array. In our case here, this value should equal 16, but wait there is one more wavy line here. Let's see what it says. It looks like another issue with resolving promises. If you'd like, pause the video again and try and find the source of the bug. I'll be here when you get back. All set? That promise is coming from the count method. We'll use the async await syntax to fix this issue. Let's run our test suite again and see how we do.
>
> **[6:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=379)** I'll go to the Terminal menu, open a new terminal, type npm run e2e and hit enter. Excellent. We now have two passing tests. In the next video, we'll make our code much more reusable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Angular]] (2), [[JavaScript]] (2), [[npm]] (2), [[Angular CLI]] (1)
> **CLI Commands:** make (8), find (3), npm (2)
> **Env Vars:** dom (4), html (3), css (2), cli (1)
> **Code Identifiers:** beforeeach (2), gettext (2), tobe (2)
> **Tools:** terminal (5)
> **Documentation:** spec (3)
> **UI Navigation:** go to (2), navigate to (1)
> **Definitions:** is a  (3)

#### [End-to-end testing with page objects](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=0)** - [Man] With Protractor, it's common to load certain pages and target certain DOM elements over and over again. Page objects make these tasks much easier by creating an interface for your tests. [[Angular]] makes a page object for us when we generate the project using [[Angular CLI]]. But for this video, let's pretend we're starting from scratch without Angular's help. I'm going to delete the content of this file so we can build our page object manually. Select all, delete. I'll start by importing some tools from Protractor. I'll make a new import statement and import browser, element, and by from Protractor. The browser object lets us navigate to specified URLs in our app, the element object lets us interact with DOM elements on a page and the by object lets us locate those elements by CSS or some other selector. These are the same tools we used in the last video when we wrote our Protractor tests. Next I'll export a simple TypeScript class. You can call your class whatever you'd like. I'll call mine AppPage. Let's add some public methods in this class to help with page navigation and targeting page elements. I'll make a new method called Get Dashboard. Notice how this method is asynchronous. Protractor is async by design, so it's good practice to make all of our page object methods asynchronous as well. In this method, I'll use browser.get to navigate to the dashboard URL. The get method accepts both relative and absolute URLs. Then I'll return the result of the get method so we can work with it in our tests, if needed.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=94)** And I'll also set the return type on the get dashboard method to equal the return type of the browser.get method, which is a promise of any type. You can confirm this by hovering over the get method to see some more information. I'll make another public method called Get Header Text. This method targets the H2 tag in our main [[HTML]] template, just like we did in the last video. Inside this method, I'll make a property called Header and set its value equal to by.CSS, passing in the H2 selector as a string. Next I'll pass this property into the element function and use the get text method to return the header string and I'll also set the return type of our method to equal the same return type of get text method, which is a promise of type string. Finally, I'll make one more method called Get List Items. This method targets the list item tags on a page. So I'll make a new property called items and set its value equal to by.CSS, passing in the list item selector as a string. Then I'll use the element.all method to unpack the items property and return the results. The all method returns an array of all elements found that match the search. Without the all method, the element function only returns the first instance. The return type of this method will be element array finder, the same return type as element.all. Notice that there's no async keyword here.
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=187)** That's because element.all is a synchronous operation. Let's update our Protractor tests to use the new page object. I'll go to the E2E folder in the sidebar, go to source, click on app.E2E-spec. In our test file here, instead of importing tools from Protractor, we'll import our page object instead. I'll delete the old import statement and make a new one importing AppPage from ./app.po. I'll make a new instance of our page object at the top of the describe block. I'll call this new property Page and set its value equal to a new instance of AppPage. Then I'll update the Before Each Block to use the new page object. Instead of browser.get, we'll use page,getdashboard. Then in our test for the header, we'll delete the header property and use page.getheader text instead of the element function. And finally, for our list test, I'll delete the items property and for the users property, I'll use page.getlistitems. Let's run our tests and see how we did. I'll open a new terminal window, type NPMrunE2E and hit enter. Nice, all our tests still pass. Now keep in mind, this is one way you could set up a page object. I really encourage you to experiment with other architectures that might work better for your needs. Really any way you look at it, page objects are a great way to separate test logic and browser manipulation. So I highly recommend you look into page objects and use them with all your Protractor tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (2), [[Angular CLI]] (1), [[HTML]] (1)
> **CLI Commands:** make (10)
> **Env Vars:** css (3), dom (2), e2e (2), cli (1), url (1)
> **UI Navigation:** go to (2), navigate to (1), in the sidebar (1), click on (1)
> **Definitions:** is a  (3)
> **File Paths:** by.css (2)
> **Cross-References:** in the last (2)
> **Documentation:** spec (1)

#### [Changes for Angular v12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v12?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v12?u=76281980&t=0)** Starting in version 12, the [[Angular]] team deprecated Protractor as the official [[End-to-end Testing]] tool for Angular projects. Shortly after the release of version 16, the Angular team will no longer support Protractor at all, and they recommend all projects use an alternative. Angular now comes with built-in support for Cypress, Nightwatch, and WebdriverIO. You can add any of these to your project by using Angular's command line tool. You can also use Playwright by following the official migration guide on Playwright's website. If you'd rather continue using protractor, the Angular team recommends switching to the never-ending support version available from a group called HeroDevs. HeroDevs specialize in supporting older software, no longer in active development, and they plan to maintain Protractor for as long as needed. Check out Angular's official website for the most up-to-date info on using end-to-end testing in your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (7), [[End-to-end Testing]] (2)
> **Versions:** version 12 (1), version 16 (1)
> **Tools:** command line (1)

#### [Challenge: Testing filter input](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-testing-filter-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-testing-filter-input?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-testing-filter-input?u=76281980&t=5)** - [Instructor] Here's a challenge for you. Make a protractor test that confirms the search box works as expected. When a user searches for the [[Microsoft Word|word]] Davis, they should see only two results in the list, and the word Davis should be highlighted. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Testing filter input](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=0)** - [Narrator] Okay, here's my solution for the challenge. Keep in mind that my solution and your solution may be different and that's okay. I added a new method in the page object called get input. It looks for input elements using the by dot CSS method, and returns the element locator using the element function. In the spec file, I made a new describe block called filter input. I nested this block inside our existing describe block which is great for organizing the test reports. I made two new properties, one called input of type element finder, and the other called items of type element array finder. In the callback for the before each block, I assign the return value of page dot get input to the input property. And I assigned the value of page dot get list items to the items property. This next line is where the magic happens. Right here. I call input dot send keys and pass in the string davis. The send keys method is one of several ways you can interact with Dom elements using protractor. And I use it here to mimic a user and during text into the search field in our app. Send keys, returns a promise. So I wait for the promise to resolve using async await. Below that I have two new tests. The first is called should filter list on user search, and it confirms that the new list is only two items long because there were only two names
>
> **[1:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=91)** in our list that include the search string Davis. I called the second test should highlight filter text and it iterates over the array of items, searches for a child element called span, and confirms that that element has a class of highlight dash text. Let's run our tests and see how things look. I'll make a new terminal window type [[npm]] run e2e, Hit enter. And here's our test results. All the tests pass, and you can see here how one described block is nested inside the other. Again, this is just one way to test the search input but I think it shows some of the ways you can organize your tests and target very specific Dom elements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1)
> **CLI Commands:** make (1), npm (1)
> **Env Vars:** css (1)
> **Documentation:** spec (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)


### 7. Static Code Linting in Angular

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing and running ESLint](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=0)** - [Instructor] Code linting also called static code analysis is a type of automated test that checks your code for errors without compiling or running the code. So if it doesn't run the code, what kind of errors does it look for? Well, think of it as a way to standardize how you write the source code in a project, a grammar guide, if you will. Static code analysis can't tell you if the code will run, but it can tell you if you put the curly brackets in the proper place. The biggest benefit of code linting is consistency between developers. We all have a personal style and linting the code is a great way to make sure everyone on a team is writing the code in a similar way. This makes the code easier to read, more predictable and easier to run a diff against in [[Version Control]]. As of this recording, [[Angular]] includes TSLint as part of its default packages when you generate a new project using the [[Angular CLI]] tool. TSLint was a great option but its code authors deprecated the tool in 2019 and they recommend everyone use [[ESLint]] instead. Until Angular migrates to ESLint, we'll need to install it manually using [[npm]]. I'll open a new terminal window and type npm install eslint
>
> **[1:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=70)** - -save -dev and hit Enter. That's it. We now have ESLint in our project. We also need to add a config file. There's a few ways we can do that but the quickest is to use the init option for ESLint's command line tool. I'll type npx eslint --init and hit Enter. ESLint will ask us some questions to help build the config file. Let's see, what do I want? I want to check syntax, find problems and enforce code style. I'm going to choose that one. What type of modules do we use? Well, these are Angular files so they're imports and exports. I'll choose that one. And which framework do we use? It's not [[React.js|React]], not [[Vue.js|Vue]]. I'll choose, none of these. Does our project use TypeScript? Yes it does. And where does our code run? I'm going to say it runs in the browser. Last question is how do we want to define our styles? We could use a popular guide. We could inspect the [[JavaScript]] files but I'm going to answer a couple of questions. I want my format to be JavaScript. You can have config files in JavaScript, YAML or [[JSON]]. I'm used to using JavaScript. So that's the one I'll choose. What style of indentation do we choose? I like spaces. I'm going to go with that. And what kind of quotes do we want? I'm going to go with single quotes. And what kind of line endings do we want? I'm going to go with Unix. And do we require semi-colons, yes or no? You know, I like semi-colons. I'm going to choose yes. Great, we now have a config file
>
> **[2:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=162)** and the root of our project called .eslintrc.js. We can run ESLint on any file or any group of files by passing it as an argument on the command line. Say, we want to check the app.component.ts file. I would type nps eslint source/app/app.component.ts and hit Enter. ESLint reports errors to the console. And we'll take a look at the details of what those reports look like in a later video. For now, let's finish the install process. The last thing we need to do is delete TSLint. We do that using npm's uninstall command. I'll type npm uninstall tslint and hit Enter. And we're good to go. In the next video, we'll take a closer look at the config file for TSLint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (10), [[npm]] (4), [[JavaScript]] (4), [[Angular]] (3), [[Version Control]] (1)
> **CLI Commands:** npm (4), make (1), npx (1), find (1)
> **File Paths:** eslintrc.js (1), app.component.ts (1), source/app/app.component.ts (1)
> **Env Vars:** cli (1), yaml (1), json (1)
> **Tools:** command line (2), terminal (1)
> **Prerequisites:** install (3)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)

#### [Basic ESLint configuration](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=0)** - [Narrator] In the last video we installed [[ESLint]]. in this video, we'll take a look at ESLint's config file. The config file lives in the root of your project. You can use [[JavaScript]], [[JSON]] or Yaml for your config file syntex. I'm using JavaScript here because that's what I use most often, but you can use the file format that works best for your project. The ENV property gives you predefined global variables for things like the browser, node, and service workers. For [[Angular]] projects I recommend adding node, Jasmine, and Protractor to this list.
>
> **[0:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=34)** - ESLint config files can inherit properties and rules from other config files. Use the extends property here, to list one or more base configs you want to extend from. I like to add the import errors, import warnings, and import TypeScript plugins to my config. These plugins look for issues with import statements. We'll also need to add the [[npm]] package for the plugin. I'll make a new terminal window, type NPM install, ESLint, dash plugin, dash import, dash dash, save, dash dev and hit enter. All set. I'll close this terminal. Use the parser property to set the file parser for your project. ESLlint usually uses Espree, but our parser was set to something different because of how we initialized this particular file. Remember to import the NPM package for your parser if you change the setting here. Next is the parser options property. This lets you set the JavaScript language options you want to support. Use this property to set things like [[ECMAScript]], Syntex, source type, and JSX support. ESLint supports all kinds of third party plugins. Use the plugins property here to define those. I like to add prefer arrow and a JSDoc to my list of plugins. Prefer arrow makes sure I use arrow functions instead of the function keyword. And JSDoc checks doc blocks for errors. Let's import these plugins now. I'll open a new terminal window and type NPM install, ESLint dash plugin, dash prefer arrow, ESLint dash plugin
>
> **[2:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=129)** dash JSDoc, dash dash save, dash dev and hit enter. All set. I'll close this terminal window here. Okay, here's where things get interesting. This rules object is where you customize and override all the Lint rules available to you. The rules you have access to and their defaults will vary based on the plugins and extensions listed in your config file. Most take a similar format. The rule name is the key and it accepts a string, a boolean or an array as a value. Booleans toggle rules on and off, strings set the reporting level to error or warn and an array, lets you pass in additional options for that specific rule. We have four rules here, indent line break style, quotes and semi, which stands for semi-colon. The reporting level for indent is error and the required indent size is four. Line break style also gets reported as an error and requires the use of Unix style line endings. Quotes are reported as an error and they need to be single quotes. And finally semi-colons get reported as an error and are always required. Errors return a non-zero response code on completion. Warnings return zero. I see this used a lot in automated build workflows where a non-zero response value stops the build, but a build keeps going if it's just a warning Let me show you what that looks like. I'll open a new terminal window and let's say we want to check our app dot component dot Ts file
>
> **[3:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=222)** with all the rules set to error. I'll type NPX, ESLint, source, slash app slash app, dot component, dot Ts and hit enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (8), [[npm]] (4), [[JavaScript]] (3), [[JSON]] (1), [[Angular]] (1)
> **CLI Commands:** npm (4), node (2), make (1), npx (1)
> **Env Vars:** npm (4), env (1), jsx (1), npx (1)
> **Tools:** terminal (5)
> **Prerequisites:** install (2)
> **Speakers:** - [narrator] (1), - eslint (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** toggle (1)

#### [Fixing lint errors](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=0)** - [Instructor] Let's run [[ESLint]] on our project files and see what kind of issues we get. I'll open a new terminal window and type npx eslint source, hit Enter. Looks like we have quite a number of errors 209 errors and 6 warnings. One way to fix these issues is manually, the other way is to take advantage of eslint itself and passing the fix option here into the command line. This should automatically fix quite a number of these issues. Let's do that now. I'll run the eslint command again and add the fix option to the end. That's great, saves us a lot of time going into all those files to manually fix things. Not all issues are fixable this way, but many are and it's a good place to start. Just be sure to double check the files before you save your changes. We'll need to fix the remaining issues manually. In the lint report here, issues are broken out by file. The first line tells us which file the issue was found in and the next line tells us what the issue was. These numbers here on the line number and column, this is the type of issue in error or a warning. This is the issue itself and this is the rule that triggered the issue. So this issue here is telling me on line 10 column 19 we have an error of unexpected empty constructor and this error was triggered by the TypeScript eslint no empty function rule. Let's open the user list service file
>
> **[1:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=93)** and see what's going on. If I go to line 10, I can see we have an empty constructor. Now we can manually fix this issue in whatever way it makes sense for our project. In this case, I'll just delete the constructor, save my changes, and when we rerun eslint, the error goes away, 1 down 6 to go. While this workflow of manually fixing lint issues is okay, there is a better way. And that way is through an eslint extension for our code editor. Every code editor is unique and your editor of choice may or may not have an extension for eslint. I'm using visual studio code here, which is a popular choice for many [[Angular]] developers. It does have an extension for eslint, so let's install that now. I'll go up to the view menu, click on extensions and search for eslint. This first one here, this is the extension that I use, so we'll install it now, I'll just click the install button. After we install the extension, we have to click on eslint in the footer of the editor and allow the extension to do its job. I'll click on allow everywhere. With the extension installed and allowed to do its job, we now have an eslint server running in the background. I can click the eslint button here in the footer of my editor to see details. I can also click this problems tab here to see the lint issues in all of my open files. Right now we have no lint issues so let's open a file where we know there's some issues we need to fix.
>
> **[3:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=186)** I'll go back to the terminal and it looks like the error [[Metadata]] service that could use some work, so I'll open that now. I can not go back to the problems tab and see a list of all the issues in my open files. Clicking on an issue takes me to that issue in that file. These issues here are telling me that I need to use a different type for my error argument in the handle error method. It's a good idea to avoid the any type because it doesn't provide any real type safety. I can fix this issue in a few ways but the simplest here in VS code is to hover over the issue, click on quick fix and choose my option. I'm going to choose this first option here, use unknown instead, which will force type safety. We now have some new issues in our custom error object. There's a few ways we can fix this, I'm going to use type guards for now, we can always refactor this code in the future with better type annotations.
>
> **[4:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=244)** For the message property, I'll wrap the error object in parentheses and type as open-close curly brackets message of type string and for the zone property, I'll also wrap the error object in parentheses and type as open-close curly brackets zone of type unknown. The beautiful thing about the eslint editor extension is that it gives me real time feedback as I write code. If I reset the arguments typed any you can see a wavy line show up under my code. And if I set the type back to unknown, that line goes away. You don't need an editor extension to use eslint, but if you like the idea of fixing lint issues in real time I recommend you look into it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (15), [[Angular]] (1), [[Metadata]] (1)
> **UI Navigation:** click on (4), open the (1), go to (1)
> **Tools:** terminal (2), command line (1), visual studio (1), vs code (1)
> **Prerequisites:** install (4)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **CLI Commands:** npx (1)
> **Warnings:** warning (1)

#### [Installing EditorConfig](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=0)** - [Instructor] EditorConfig is a tool to standardize file settings across team members and editors. This is different from static code analysis. Code lending happens at the level of the programming language. And while it can check for things like line endings and semi-colons, it's really about scanning the source code for more complex issues like missing type annotations and too many nested callbacks. You can run static code analysis on a remote server as part of an automated build workflow. You can't do that with EditorConfig. EditorConfig works at the level of the code editor, making sure all the files of a given type are encoded the same way. And this encoding happens in real time. No need to run terminal commands. You can even keep an EditorConfig file in the home directory of your computer. The same way you might keep a GetConfig file or the MRC. This means you can use one EditorConfig file for all your projects. In practice, I find most projects have their own EditorConfig file managed under [[Version Control]]. This makes it easy to share the configuration with new team members. Many code editors come with built in support for EditorConfig and many more have plugins and extensions. Check the official website for EditorConfig to see the status of your editor of choice. I like using visual studio code for writing [[Angular]] apps and I'll need to install an extension to use EditorConfig. I do that by going to the view menu and clicking on extensions, and in the sidebar here, I'll search for EditorConfig. This is the extension I'm looking for. So I'll click the install button here. And that's it, we now have EditorConfig. In the next video we'll look at the Config file in detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Version Control]] (1), [[Angular]] (1)
> **Tools:** terminal (1), visual studio (1)
> **Prerequisites:** install (2)
> **CLI Commands:** find (1)
> **Env Vars:** mrc (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** in the sidebar (1)
> **Exercise Files:** source code (1)

#### [Basic EditorConfig configuration](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=0)** - [Instructor] In the last video we installed the extension for VS code to use editorconfig in our project. Now let's take a look at the config file itself. This is the default config file that [[Angular]] includes when we generate a new project using the [[CLI]] tool. It lives in the root of the project and the file name is .editorconfig right here. Whenever you open a file, the editorconfig plugin looks for a file with the name .editorconfig. It first looks in the same directory as the open file and then it traverses up through the parent directories. The plugin will keep looking for config files until it runs out of directories or it finds one with this root equals true setting. We write the config file using key value pairs and files are parsed from the top down. So later rules override earlier ones. This asterisk is a wildcard selector. It matches any character except file path separators. So basically forward slash. Charset controls the character set used for the file. The default UTF8 is a good file in coding for most use cases. Use indent style to set tabs or spaces as your indent character. Indent size sets the number of columns used for each indentation level. Set insert final new line to true to ensure all files end with an empty new line and use trim trailing white space to remove extra white space at the end of each line I like tidy white space in my files so this one is a personal favorite. This is how we target files with the TypeScript file name extension. I can use the double asterisk wildcard to traverse sub-directories.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=92)** Say I wanted to target TypeScript files only in the source directory, I would type source/double**/*.ts. I can also target multiple types of files using curly braces and commas. Say I wanted to target all the TypeScript files, [[JavaScript]] files and JSX files in the source directory, I would surround the Ts extension with curly braces and then type ,js,jsx. I can do the same thing with file paths. Say I wanted to target both source and build as directories, I would surround source with curly braces type comma and then build. Now this section of the editor config file targets TypeScript, JavaScript and JSX in both the source and build directories. I'll reset the selector back to the default. The quote type key lets you set single or double quotes for strings. This section of the file targets markdown files. Set max line length as off to disable max line length warnings or set it to a number to enforce a character maximum for each line and here's trim trailing white space again. Notice how this time it's set to false. This will override the previous value set earlier in the file, but it will only override the previous value in markdown files because that's the type of file we're targeting in this section of the config file. There are a few more config options and I recommend you check out the official website to see all the things you can do with editorconfig.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Angular]] (1), [[CLI]] (1)
> **Env Vars:** jsx (2), cli (1), utf8 (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the last (1), earlier in (1)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/next-steps?u=76281980&t=0)** - We reviewed a lot of information in this course. And I encourage you to experiment with all your testing and debugging options. While the API for [[Angular]] is mature and stable, the framework and its dependencies are always making improvements. This is why I strongly recommend you regularly check out Angular's official documentation to stay up to date on all the latest changes, additions and updates. TypeScript and RX JS are integral parts of Angular apps. And I recommend you also keep an eye on the official documentation for TypeScript and RX JS. For a deeper look at Angular, I recommend searching through our library. There are tons of courses covering all aspects of Angular and the Angular ecosystem. I'm Derek Peruo, thanks for watching and we'll see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6)
> **Env Vars:** api (1)
> **Speakers:** - we (1)


## Instructor

- [[Derek Peruo]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/Angular-2875342)

## Skills Covered

- Software Testing
- Debugging Code
- Angular

## Path Context

### In [[Explore Web Development with Angular]]
← [[Learning the Angular CLI]] | **3 of 6** | [[Angular- Creating and Hosting a Full-Stack Site]] →

## Appears In

- [[Explore Web Development with Angular]]

## Related Courses

_Courses sharing skills:_

- [[Vue.js- Testing and Debugging]] — Debugging Code, Software Testing
- [[Learning JavaScript Debugging]] — Debugging Code
- [[Software Testing- Planning Tests for Mobile]] — Software Testing
- [[Building Angular and Django Apps]] — Angular
- [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] — Software Testing

---

[↑ Back to top](#)