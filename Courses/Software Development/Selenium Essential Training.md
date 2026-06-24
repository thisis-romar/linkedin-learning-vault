---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: selenium-essential-training
url: "https://www.linkedin.com/learning/selenium-essential-training"
duration_minutes: 119
duration: 1h 59m
level: Intermediate
updated: 5/11/2020
learners: 252652
skills:
  - Selenium
  - Test Automation
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQE-vCuZH-c_Ag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1589403094822?e=2147483647&amp;v=beta&amp;t=Dfn3Q8ThGlU8d8iM-wEPr7hvX5vjHsLBSwP8FmNGO0E"
linkedin_topic: Software Development
learning_paths:
  - '[TestMu AI Test Automation Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/TestMu%20AI%20Test%20Automation%20Professional%20Certificate.md)'
prev_courses:
  - '[Test Automation Foundations](Test%20Automation%20Foundations.md)'
path_nav: '[{"path":"TestMu AI Test Automation Professional Certificate","position":2,"total":2,"prev":"Test Automation Foundations","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/selenium
  - skill/test-automation
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Selenium%20Essential%20Training.md)

![Selenium Essential Training](https://media.licdn.com/dms/image/v2/C4D0DAQE-vCuZH-c_Ag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1589403094822?e=2147483647&amp;v=beta&amp;t=Dfn3Q8ThGlU8d8iM-wEPr7hvX5vjHsLBSwP8FmNGO0E)

# Selenium Essential Training

> Take your Selenium framework skills to the next level. In this course, Meaghan Lewis takes you past the basics covered in Learning Selenium, on to intermediate and advanced options. First, Meaghan reviews the fundamentals and shows you how to get the most out of WebDriver. Next, she takes you into the mechanics of advanced locators and interacting with components. Then she shares how to overcome c

> [LinkedIn Learning](https://www.linkedin.com/learning/selenium-essential-training) | 1h 59m | Intermediate | 253K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Welcome](#welcome)
  - [Get set up](#get-set-up)
- [**1. Review Fundamentals**](#1-review-fundamentals) (5 videos)
  - [The Selenium project](#the-selenium-project)
  - [Using WebDriver](#using-webdriver)
  - [Browser drivers](#browser-drivers)
  - [WebDriver tips and tricks](#webdriver-tips-and-tricks)
  - [Inspecting Elements](#inspecting-elements)
- [**2. Succeeding with WebDriver**](#2-succeeding-with-webdriver) (8 videos)
  - [Look at the test application](#look-at-the-test-application)
  - [Keyboard and mouse input](#keyboard-and-mouse-input)
  - [Using autocomplete](#using-autocomplete)
  - [Scroll to element](#scroll-to-element)
  - [Switch to active window](#switch-to-active-window)
  - [Switch to alert](#switch-to-alert)
  - [Executing JavaScript commands](#executing-javascript-commands)
  - [Drag and drop](#drag-and-drop)
- [**3. Using Advanced Locators**](#3-using-advanced-locators) (4 videos)
  - [Determine which locator to use](#determine-which-locator-to-use)
  - [Combine multiple CSS attributes](#combine-multiple-css-attributes)
  - [Text matching](#text-matching)
  - [Using wildcards](#using-wildcards)
- [**4. Interacting with Components**](#4-interacting-with-components) (5 videos)
  - [Common components](#common-components)
  - [Radio buttons and checkboxes](#radio-buttons-and-checkboxes)
  - [Date pickers](#date-pickers)
  - [Dropdown menus](#dropdown-menus)
  - [File upload](#file-upload)
- [**5. Synchronization Issues**](#5-synchronization-issues) (3 videos)
  - [Why synchronization is an issue](#why-synchronization-is-an-issue)
  - [Implicit waits](#implicit-waits)
  - [Explicit waits](#explicit-waits)
- [**6. Putting It All Together**](#6-putting-it-all-together) (4 videos)
  - [Automate a workflow using WebDriver](#automate-a-workflow-using-webdriver)
  - [Confirm the behavior of the test](#confirm-the-behavior-of-the-test)
  - [Clean up the test](#clean-up-the-test)
  - [Use page objects](#use-page-objects)
- [**7. Project Integration**](#7-project-integration) (4 videos)
  - [Connect to GitHub](#connect-to-github)
  - [Setup CI](#setup-ci)
  - [Run in CI (continuous integration) servers](#run-in-ci-continuous-integration-servers)
  - [Use cloud-based testing tools](#use-cloud-based-testing-tools)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/selenium-essential-training/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/welcome?u=76281980&t=0)** - [Meaghan] [Selenium](../../Skills/Software%20Development/Selenium.md) is a powerful framework for testing web applications in the UI. If you are someone who wants to learn about [Test Automation](../../Skills/Software%20Development/Test%20Automation.md) with Selenium and see how it can be applied to real-world examples, then this course is for you. I'll show you the essentials of Selenium so that you are set up for success using it both personally and professionally. I'll begin by discussing the Selenium project and the fundamentals of test automation. Then I'll show you various examples of how to use WebDriver and build on those examples throughout the course while automating various web components with the help of a test application. Hi, I'm Meaghan Lewis. I'm a quality engineer at [GitHub](../../Skills/Software%20Development/GitHub.md) and I'm an avid Selenium enthusiast and have been an active user for years. I really enjoy speaking at conferences and blogging about [Software Testing](../../Skills/Software%20Development/Software%20Testing.md). So if you're ready, let's dive into the essentials of using Selenium.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (6), [Test Automation](../../Skills/Software%20Development/Test%20Automation.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Software Testing](../../Skills/Software%20Development/Software%20Testing.md) (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [meaghan] (1)

#### [Get set up](https://www.linkedin.com/learning/selenium-essential-training/get-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/get-set-up?u=76281980&t=0)** - [Narrator] I'll be using the four following tools that you will need to download and set up, if you want to follow along with the exercises throughout this course. First up, there is the [Java](../../Skills/Software%20Development/Java.md) SE Development Kit, or the JDK. The JDK provides the environment to build and run Java programs. The JDK also includes useful tools for developing and testing programs written in Java. All tests will be written and run in IntelliJ, which is a Java integrated development environment. It is developed by JetBrains, and is available for free with the Apache 2 License Community Edition. All tests will be run in Chrome, with the use of ChromeDriver. ChromeDriver is the browser driver that runs [Selenium](../../Skills/Software%20Development/Selenium.md) WebDriver tests in Chrome. There are a few other tools I'll be using that I included with the exercise files already. Those are Maven, which is the [Dependency Management](../../Skills/Software%20Development/Dependency%20Management.md) tool for Java, the Selenium WebDriver, language bindings for Java, and [JUnit](../../Skills/Software%20Development/JUnit.md), as the assertion library. Since they are already included, you won't need to worry about doing anything in order to use these tools. Before continuing with the course, I encourage you to stop, download, and setup the JDK, IntelliJ, and Chrome, and ChromeDriver. I've included some instructions that you can refer to that will guide you along in the set up process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (6), [Selenium](../../Skills/Software%20Development/Selenium.md) (2), [Dependency Management](../../Skills/Software%20Development/Dependency%20Management.md) (1), [JUnit](../../Skills/Software%20Development/JUnit.md) (1)
> **Env Vars:** jdk (4)
> **Prerequisites:** set up (2), setup (1)
> **Tools:** intellij (2)
> **CLI Commands:** apache (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Review Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [The Selenium project](https://www.linkedin.com/learning/selenium-essential-training/the-selenium-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/the-selenium-project?u=76281980&t=0)** - [Narrator] [Selenium](../../Skills/Software%20Development/Selenium.md) is a powerful framework for testing web applications and remains to be one of the best options for UI automation. It saves time from constant [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) so you can focus on other types of testing. I'll share a little bit about the history of the Selenium Project. It was created initially in 2004 with Selenium 1.0 and has advanced over the years to where it is now. Selenium WebDriver 3.0, which was initially released in the Fall of 2016. The project is continuing to grow and mature. Selenium has always strived to be a tool that can be used by everyone to help them achieve their automation goals. That is why it supports all major programming languages, platforms, and browsers. In addition, Selenium is an open source project currently licensed under the Apache 2.0 license. It has a strong community of maintainers and contributors. The Selenium Project offers the WebDriver API, which is a powerful client API that has drivers for each of the major browsers. And the API allows for native calls to the browser and emulates user actions such as: clicking, typing, and interacting with web elements. Browser drivers are provided by the vendors of the browser. Previously, Selenium was responsible for maintaining all of the drivers themselves, but in the latest version, 3.0, browser vendors who know and own their browser code will be managing their own driver. W3C specification for a browser automation
>
> **[1:33](https://www.linkedin.com/learning/selenium-essential-training/the-selenium-project?u=76281980&t=93)** is based on the open source web driver, so there will be standards and guidelines for how the API is used. Selenium WebDriver is the most popular choice and most widely used. But, there are also other projects under the Selenium umbrella. First up is Selenium Grid. Selenium Grid provides a hub, or a central location, to allow multiple Selenium test to run concurrently on both local and remote servers across many platforms and browsers. And it allows tests to be run much faster and with a lot more customization. There's also the Selenium IDE, this is a Firefox plugin that records each interaction of an application as test steps. After recording all these steps, those are saved as a script that can be run over and over again. With the IDE test code was able to be generated much more quickly and easily than ever before. The IDE is a great option for those who want to become more acquainted with element locators and creating test scripts. But, the scripts created from the IDE are not maintained or extended easily over time. Because of this, it's recommended that those who are new to Selenium start with the IDE and when they become comfortable with the functionality, use the WebDriver API. In this course, we'll focus primarily on Selenium WebDriver. But, it doesn't hurt to know about all the project offers and what's available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (16), [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (1)
> **Env Vars:** api (5), ide (5), w3c (1)
> **Definitions:** is a  (4), is an  (1)
> **Versions:** 3.0 (2), 1.0 (1), 2.0 (1)
> **Documentation:** w3c (1), specification (1)
> **CLI Commands:** apache (1)
> **Tools:** firefox (1)
> **Analogies:** such as (1)

#### [Using WebDriver](https://www.linkedin.com/learning/selenium-essential-training/using-webdriver?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/using-webdriver?u=76281980&t=0)** - [Narrator] This video is all about understanding how and when to use [Selenium](../../Skills/Software%20Development/Selenium.md) WebDriver. I will also cover how it works under the hood. The goals of WebDriver are to help developers and testers quickly and easily write automated tests. Also, to maintain a standardized API that is friendly to use. And the last goal, is to emulate actions of users such as clicking and typing. This helps to make test writing with WebDriver very straight forward. WebDriver is great for testers who want to save time manually testing so they can focus on additional types of testing. It also enables developers to have confidence in testing to know they aren't introducing regressions. WebDiver is the perfect option for those who have a need to test their web applications across multiple browsers and platforms. There is also a lot of customization to use the WebDriver API, which makes it a very powerful testing framework. If you need an automated web test, WebDriver is definitely the way to go. Selenium WebDriver works using client server communication. When a Selenium test is executed, a new session of the browser is created and the browser window is launched. For each command in the test script a request is sent to the WebDriver API, which is a [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md)-based service. The WebDriver API interprets the request and the step is then executed in the browser. Which acts as the server and just waits for requests to come in. Once each step is complete, the response
>
> **[1:33](https://www.linkedin.com/learning/selenium-essential-training/using-webdriver?u=76281980&t=93)** is sent back to the WebDriver API and then the test script. And this process continues until all steps are complete. So now let's talk about what's supported with Selenium WebDriver. It supports all major programming languages such as: C, [Java](../../Skills/Software%20Development/Java.md), Ruby, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and [JavaScript](../../Skills/Software%20Development/JavaScript.md). Major platforms like macOS, [Windows](../../Glossary/Service/Windows.md), and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). And also the browsers: Chrome, Firefox, and either Explorer or Edge, and Safari.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** api (5)
> **CLI Commands:** make (1), ruby (1), python (1)
> **Tools:** firefox (1), safari (1)
> **Analogies:** such as (2)
> **Code Identifiers:** macos (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Browser drivers](https://www.linkedin.com/learning/selenium-essential-training/browser-drivers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/browser-drivers?u=76281980&t=0)** - [Instructor] I want to take a minute to talk more in detail about the browser drivers used to run test in WebDriver. Each of the major browsers has their own driver, which are maintained by the browser vendor and not [Selenium](../../Skills/Software%20Development/Selenium.md). All the drivers are written in the same language as the browser, and a thin wrapper is implemented around the browser driver, which makes it easy to use the bindings without knowing how the code is working under the hood. More information about the browser drivers can be found at www.[seleniumhq.org/download](https://seleniumhq.org/download). And on this page, scroll down to the third-party drivers, bindings, and plugins section, and each of the browser drivers are listed below. There are a few similarities between the browser drivers. First, there is usually some setup required in order to use them, their API functionality is all pretty similar to allow the same functionality between each driver, and all the drivers are part of the W3C spec standard, which means they follow certain guidelines and standards. There are some differences between the browser drivers as well. When running test across different drivers, it is easy to see that some are faster than others. Certain syntax or functionality might differ slightly as well, and the detail of documentation for drivers is different, mainly because they are all managed by different organizations. So I'll briefly discuss the four major drivers, starting with ChromeDriver. ChromeDriver is maintained by [Google](../../Glossary/Service/Google.md),
>
> **[1:35](https://www.linkedin.com/learning/selenium-essential-training/browser-drivers?u=76281980&t=95)** and it implements WebDriver's wire protocol for Chromium, which is an open source browser project that aims to build a safer, faster, and more stable way for users to experience the Web. The ChromeDriver supports both Web and mobile and is available for Chrome on [Android](../../Glossary/Sdk/Android.md) and Chrome on Desktop. For this course, I will be using ChromeDriver solely. Geckodriver implements the WebDriver protocol to communicate to Gecko browsers like Firefox. The geckodriver is maintained by Mozilla and written in [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md), which is Mozilla's open source system's programming language. Starting with Selenium 3, geckodriver became the default WebDriver implementation for Firefox, and support is best in Firefox 55 or later. Next up is the EdgeDriver. The EdgeDriver is maintained and owned by [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) and written in C#. It has traditionally been a bit slower to execute test steps than some of the other browser drivers. Lastly, SafariDriver is maintained by the Web Developer Experience team at Apple. Starting with Safari 10, the SafariDriver is included by default, so that means the executable can be used without having to do any further configuration. This is one thing that sets SafariDriver apart from all the other browser drivers. SafariDriver is built with WebKit, which is an open source browser and application engine. So those are the basics of the main browser drivers. When deciding which browser to test with,
>
> **[3:08](https://www.linkedin.com/learning/selenium-essential-training/browser-drivers?u=76281980&t=188)** I recommend referring to the usage data of an application to see the most commonly used browsers and versions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (2), [Google](../../Glossary/Service/Google.md) (1), [Android](../../Glossary/Sdk/Android.md) (1), [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Tools:** firefox (3), safari (1)
> **Env Vars:** api (1), w3c (1)
> **Documentation:** w3c (1), spec (1)
> **Definitions:** is an  (2)
> **URLs:** [seleniumhq.org](https://seleniumhq.org) (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** setup (1)

#### [WebDriver tips and tricks](https://www.linkedin.com/learning/selenium-essential-training/webdriver-tips-and-tricks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/webdriver-tips-and-tricks?u=76281980&t=0)** - [Instructor] In this video I'll explain more about how WebDriver works through the use of a simple test written in [Java](../../Skills/Software%20Development/Java.md). The test is shown here in the IDE IntelliJ. At the top of this test class on lines one through four, I start by importing the various packages to use [Selenium](../../Skills/Software%20Development/Selenium.md) functionality. I'll explain how the packages are used in just a minute. For now let's focus on the details of the test class. In line 10 I set the location for the ChromeDriver specifying where the ChromeDriver is downloaded on my local computer. In the body of the test class there is a short test that sets up a new WebDriver instance of ChromeDriver on line 13. On line 16 it navigates to [Google](../../Glossary/Service/Google.md). On line 19 it finds an element with the name of q. On line 22 it sends keys to it. And then on line 25 it submits to that field. Then on line 28 it quits the driver. Now I'll walk through each line of this test in detail. First, a new instance of the ChromeDriver object is instantiated. This utilizes the package org.openqa.selenium.chrome.ChromeDriver. This class is provided as a convenience for easily testing the Chrome browser and the ChromeDriver class is instantiated onto the browser with the WebDriver class. Next, the test navigates to [google.com](https://google.com). This uses the package org.openqa.selenium.WebDriver,
>
> **[1:38](https://www.linkedin.com/learning/selenium-essential-training/webdriver-tips-and-tricks?u=76281980&t=98)** and WebDriver's get method is used to launch a new browser session and directed to the URL that you specify in the parameter. After the browser navigates to [google.com](https://google.com) the real action starts. We find an element with the name of q, and this invokes the package org.openqa.selenium.By. By is the mechanism which is used to locate elements with the specified selector. Finding elements is something you'll be doing a lot of when using WebDriver. Besides by name, there are other ways to find an element which includes ClassName, CssSelector, Id, Name, and Xpath, all of which I will cover throughout the course. After the element is found it is assigned to a WebElement called element. This invokes the package org.openqa.selenium.WebElement, and after that we use the element to perform some type of action. In this case we send keys of Cheese, and this simulates sending the keystrokes to the keyboard. Then we submit, which will submit the search element that the test enters keys for. Actions such as typing and submitting are ways that will often be used in a WebDriver test to drive elements on the page. Other common actions that will be used often throughout this course include click, dragAndDrop, keyDown, and moveToElement. Finally the driver calls the quit method.
>
> **[3:13](https://www.linkedin.com/learning/selenium-essential-training/webdriver-tips-and-tricks?u=76281980&t=193)** This quits the driver and closes associated [Windows](../../Glossary/Service/Windows.md). So this is a sample test that contains some commonly used components. It's important to become familiar with these steps and how to see what's available in the API. It will be good to refer back to the API documentation shown here in order to learn more about the available packages and their functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (5), [Google](../../Glossary/Service/Google.md) (3), [Java](../../Skills/Software%20Development/Java.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** api (2), ide (1), url (1)
> **Code Identifiers:** draganddrop (1), keydown (1), movetoelement (1)
> **CLI Commands:** find (2)
> **URLs:** [google.com](https://google.com) (2)
> **Definitions:** is a  (2)
> **Tools:** intellij (1)
> **Analogies:** such as (1)

#### [Inspecting Elements](https://www.linkedin.com/learning/selenium-essential-training/inspecting-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/inspecting-elements?u=76281980&t=0)** - [Narrator] Inspecting elements is a must to be able to identify the web elements that you plan to use in your test. This is a crucial step in writing WebDriver tests, and this is something that you're going to be doing a lot of throughout this course, and when writing WebDriver tests in general. So, I want to take a moment now to show an example of how to inspect web elements in Chrome. For this example, I will be using the simple WebDriver test from the last video to demonstrate how to inspect a web element. And following the simple test, what I'm first going to do is to navigate to [google.com](https://google.com) in Chrome. Once there, I will hover over the search bar, right-click, that will open a menu. And down at the bottom, I'm going to select the option Inspect. This opens up the Inspector. And the first view that we see here is of all the [HTML](../../Skills/Web%20Development/HTML.md) elements that [compose](../../Glossary/Framework/Jetpack%20Compose.md) the page. The line that is highlighted here is the search bar that we selected to inspect. I can see that this is an input element with many attributes that define it. In the test, the search bar element is found by the name of Q. But if you look, there's also other ways to define this element, such as an ID, a class, and more. When writing tests, you'll end up using a variety of selectors based on what's available. In using the Inspector, I can also inspect other elements on the page by using this button in the top left corner of the Inspector.
>
> **[1:35](https://www.linkedin.com/learning/selenium-essential-training/inspecting-elements?u=76281980&t=95)** I can simply hover over specific elements and see that they are highlighted in the Inspector, and I can see the HTML elements that define these attributes. That's just a quick lesson on inspecting elements for now. And I will continue to use this method to inspect elements throughout the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [Google](../../Glossary/Service/Google.md) (1), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1)
> **UI Navigation:** navigate to (1), right-click (1), select the (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** html (2)
> **URLs:** [google.com](https://google.com) (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


### 2. Succeeding with WebDriver

[↑ Back to Table of Contents](#table-of-contents)

#### [Look at the test application](https://www.linkedin.com/learning/selenium-essential-training/look-at-the-test-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/look-at-the-test-application?u=76281980&t=0)** - [Instructor] In this chapter, I'm going to demonstrate examples of common elements to automate that will be used in [Test Automation](../../Skills/Software%20Development/Test%20Automation.md), in order to help you become more familiar and succeed with WebDriver. For these examples, I will be using a website called Formy at formy-project.[herokuapp.com](https://herokuapp.com). This test application has a collection of form elements and other components. Over this chapter and throughout the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course, I will iterate through all these different examples and show how to automate them with WebDriver. In the future, feel free to refer back to these videos and this test application to help you with your future automation projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Test Automation](../../Skills/Software%20Development/Test%20Automation.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **URLs:** [herokuapp.com](https://herokuapp.com) (1)
> **Speakers:** - [instructor] (1)

#### [Keyboard and mouse input](https://www.linkedin.com/learning/selenium-essential-training/keyboard-and-mouse-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/keyboard-and-mouse-input?u=76281980&t=0)** - [Meaghan] In this video, I will focus on input from the mouse and keyboard. From the test application homepage, I'll scroll down and select the key and mouse press option. On this page, I see that there is a text field for name input, and a button under that. Let's get started with automating a test for this page. First, what I want to do is to hop over and open up the exercise file for this video. From the Welcome to IntelliJ IDEA menu, I'll select Open, and then navigate to the exercise file 02 02 and I'll click on the start directory and open that. Some learners have shared that when they first start IntelliJ, they see a banner at the top of the window with the message, "no JDK running". To fix that, look to the right-hand side of the banner. Select the Configure link and enter the path to where the JDK is downloaded on your computer. Once the project opens, I'll want to build it by going to the top menu, selecting build, and then build project. Once that is done, I will focus now on the test class. This keyboard and mouse input test class. What this test does is first, on line nine, it sets the location for the Chrome driver. You'll need to make sure to set the path to Chrome driver on your computer for this test, and all other tests in this exercise file, going forward. After that, a new instance of the Chrome driver is created on line 11, and on line 13, the driver navigates
>
> **[1:37](https://www.linkedin.com/learning/selenium-essential-training/keyboard-and-mouse-input?u=76281980&t=97)** to the test application key press page. After that line, I'll want to start adding in steps to automate this key press page. To get the details I need for the test, let's go back to the test application. Once there, what I want to do is inspect the text field to find a web element to use in the test. So I will right-click on this full name field, select Inspect, which opens up the inspector, and focus on this highlighted line. I'll go ahead and grab the ID of name and copy that to my clipboard, then going back to my test, I'm going to automate this name field. First, I will define a new web element called name, and I will say driver.findElement by the ID and go ahead and paste this ID, add name into there and add a semicolon at the end. I'll next want to write the step to send keys or type a name into the name field. Feel free to use any name. I'll go ahead and just use mine. So I can type name.sendKeys, and in quotes I will type "Meaghan Lewis". Some elements we need to click into first, or make the field active or selected. In this case, we'll want to use mouse input before sending keys to the field. So after finding the web element name on line 15, I'll add a line before sending the keys, and I can simply type name.click
>
> **[3:12](https://www.linkedin.com/learning/selenium-essential-training/keyboard-and-mouse-input?u=76281980&t=192)** to click into the field first to make it active, and then send keys to that name field. In addition to fields, the mouse input is most commonly used to click buttons. Now I'll want to write a step to click the button on the test application. So going back to the test, in the top left corner I'll select this to inspect the button element and I see that it has an ID of Button. So I can copy that to my clipboard and take that back to my test. I'll skip a line, and then on line 19, I will define a new web element called button, and I will tell the driver to find this element by the ID of button. And on line 20, I can say button.click in order to click the button. So now, my test is complete. And to run it, I can simply right-click on the class title and select the option to run keyboard and mouse input main method. And there's also an associated keyboard shortcut that can be used to run tests, as well. So let's go ahead and run the test now. And what's happening in the background is that Chrome opens up, navigates to the Formy project key press page. Once there, it fills out the name field, clicks on the button, and then closes. Back in the output window of IntelliJ,
>
> **[4:45](https://www.linkedin.com/learning/selenium-essential-training/keyboard-and-mouse-input?u=76281980&t=285)** I can see that the process finished with an exit code of zero, indicating success.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (2), right-click (2), scroll down (1), navigate to (1), click on (1)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** jdk (2), idea (1)
> **Tools:** intellij (3)
> **Exercise Files:** exercise file (3)
> **Code Identifiers:** findelement (1), sendkeys (1)
> **Prerequisites:** configure (1), you'll need (1)
> **Cross-References:** go back to (1)

#### [Using autocomplete](https://www.linkedin.com/learning/selenium-essential-training/using-autocomplete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/using-autocomplete?u=76281980&t=0)** - [Instructor] In this video I'll demonstrate an example of automating an autocomplete field using the [Google](../../Glossary/Service/Google.md) Places API. Fields using autocomplete are useful to know how to automate because they are commonly used in websites today, especially when filling out addresses. To start with I'll open the exercise file for this video. From the welcome to IntelliJ IDEA menu I will select open and navigate to the exercise file under chapter two 02_03 and I will open the start directory. Once the project opens I want to build it. I will select build in the top level menu and then build the project. Next I'll focus on the autocomplete test class. This test starts with the same details as in the last video by importing all necessary packages on lines one through four and inside the main method of the test on line nine it sets the property of the location to the ChromeDriver. Make sure to go ahead and update this to the path of where ever ChromeDriver is located on your computer. On line 11 a new instance of the ChromeDriver is created. On line 13 the driver navigates to the autocomplete page of the test application and on line 15 the driver quits the test application. So now I want to add steps to fill out an autocomplete address form. To do that I'll go back to the test application and focus on this autocomplete page. So on this page we see a series of fields for an address. So I'm gonna go ahead and allow the address,
>
> **[1:34](https://www.linkedin.com/learning/selenium-essential-training/using-autocomplete?u=76281980&t=94)** so for this we can enter any address here and you notice that as I start typing a list of addresses appear below. I can go ahead and click on any address and what that will do is to populate the fields below to complete the address. So now that we're familiar with how the autocomplete functionality works let's go ahead and automate it. So to start automating autocomplete I'll need to send keys to the address field. So I'm gonna go ahead and inspect this address field here and I see that it has an ID of autocomplete. So going back to IntelliJ I will add a line and on line 15 what I'm going to do is to find a new web element called autocomplete and I will say driver.find element by the ID and paste this ID of autocomplete in here and add a semicolon at the end of the field. Then the next step is to send keys to the autocomplete field by typing in some address. So I can say autocomplete.send keys and then in quotes I'll go ahead send some address. So feel free to send any address that you like, but make sure to send a full address including street, city, and state to narrow down the results so there's only one option showing. So I'll go ahead and type 1555 Park Blvd, which is in Palo
>
> **[3:08](https://www.linkedin.com/learning/selenium-essential-training/using-autocomplete?u=76281980&t=188)** Alto, California. So let's go ahead and see what that looks like in our test. So I will hop back over to the test and let's go ahead and refresh this page to clear the results. Now I'm gonna go ahead and paste this, and I see that there is just one result that appears. So now what I want to do is to use mouse input in order to click on this autocomplete result. So now what I'll want to do is to actually find the selector that I want to click on. So I can't exactly inspect this item in the exact same way, because when I do the autocomplete result will close. So I kinda have to do some manual searching here. So I'll scroll down all the way to the bottom and I see that there is this pack container pack logo. When I hover over this that highlights the autocomplete result item. So I'm gonna go ahead and expand this and what I want to click on specifically is this pack item class. So I'll go ahead and copy that and go back over to IntelliJ and I will skip a line and on line 18 I will define a new element called autocomplete result and I will tell the driver to find this element by the class name, which is pack item. Then I'll go ahead and add a semicolon at the end of that line. Then what I can do is to say
>
> **[4:40](https://www.linkedin.com/learning/selenium-essential-training/using-autocomplete?u=76281980&t=280)** autocomplete result.click in order to click on that result in the drop down menu. So now this test is looking good what should happen is that from the main address field we'll send the keys of 1555 Park Blvd and then once a result pops up we will click on that result to populate the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the address fields. So let's go ahead and right click to run this test and Chrome will pop up in the background and start filling out the address. I see pretty quickly that the test actually failed so let's see what the error message is. I see up here that there is an exception in thread main and that there was a no such element exception and it was unable to locate this element based on its class name and pack item result. So I see that the test is failing somewhere on this line, line 18. Luckily when there is a failure the Chrome window stays open. So I can go ahead and go to the Chrome window to figure out what happened to the test. So I can see here that the address was entered and the autocomplete result is showing like we expect. It's really hard to tell because the test is running so fast but this looks like a timing issue. So to slow the test down a bit and see what's happening let's add a sleep statement after entering the address on like 16. So to do that I can type thread.sleep
>
> **[6:15](https://www.linkedin.com/learning/selenium-essential-training/using-autocomplete?u=76281980&t=375)** and this parameter is in terms of millisecond. So I'll go ahead and say sleep for 1,000, which is equal to one second. I can see that there are some kind of unhandled exception here so I can click this red balloon for suggestions and select to add an exception to the method signature, which goes ahead and adds this line throws interrupted exception to use asleep. So sleeps aren't the best option to use long term, but they help to slow the test down and wait for elements to load to see the test running at a normal speed. So for now this is looking good. I'll go ahead and right click to run this test again. In the background the Chrome window is opening, filling out the address, and quitting the driver. This time in the output window I see that the process finished with an exit code of zero, indicating success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **UI Navigation:** click on (6), open the (2), scroll down (1), go to (1)
> **CLI Commands:** find (4), make (2)
> **Tools:** intellij (3)
> **Env Vars:** api (1), idea (1)
> **Cross-References:** in the last (1), go back to (1)
> **Exercise Files:** exercise file (2)
> **Definitions:** is an  (1), is a  (1)

#### [Scroll to element](https://www.linkedin.com/learning/selenium-essential-training/scroll-to-element?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/scroll-to-element?u=76281980&t=0)** - [Instructor] In this video, let's automate a page element that requires scrolling it into view. When automating a long form or page with lots of content, it can be necessary to scroll to the element to be tested. On this scroll page, we see lots of text and after scrolling down a bit to the bottom of the page, there are two fields at the end to enter name and date. Let's automate a test to scroll these text fields into view and then send values to them. From the IntelliJ welcome menu, I will select to open the exercise files for this video. At 02_04, I will select to open the start directory. Once the project is open, I will start by building by selecting build and build project. And once that is successful, I will focus on the scroll to element test class. Just like the test classes in previous videos, this test class just contains the basics to get started by setting the location to the chrome driver, creating a new instance of the chrome driver, navigating the driver to the scroll test page, and then quitting the driver. Now I'll start by filling in the steps of this test and focus on the elements that I want to automate. Going back to the test application, I will first inspect the full name field and I see that this field has an id of name so I'll copy that to my clipboard and go back to the test.
>
> **[1:36](https://www.linkedin.com/learning/selenium-essential-training/scroll-to-element?u=76281980&t=96)** I will skip a line and on line 15, I will define a new WebElement called name and I will tell the driver to find this element by an id of name and have a semicolon at the end of that line. Then to be able to move to an element, we'll need to use a method called move to element which is provided by the actions class. To use the actions class, I'll first want to define a new object of the class by typing Actions and then call the object actions and set that equal to new Actions and that takes the driver as a parameter. So to be able to use this actions class, I need to go ahead and import it. So you can either do that manually or automatically so I'll just go ahead and import this class and I see on line five there is a new import using the actions class. Then what I can do on line 18 is to use that object actions to move to an element. I type actions.moveToElement and in here I specify the name of the element I want to move to which is name. Once the element is in view, I can simply send keys to it on line 19. So there I will type name.sendKeys and in quotes I will type Meaghan Lewis.
>
> **[3:12](https://www.linkedin.com/learning/selenium-essential-training/scroll-to-element?u=76281980&t=192)** To complete the test, I'll want to define a web element for the date field so I'll hop back over to the test application, inspect the date field, and I see that it has an id of date so I'll go ahead and copy that, go back over to IntelliJ, and on line 21 I'll define a new WebElement called date and tell the driver to find the element by id with the id of date and I'll add a semicolon to the end of that line. And finally on line 22, I can say date.sendKeys and just go ahead and send any date to that text field so let's go ahead and pick some date and then that's it. This test is now complete. So I'll go ahead and right click to run this test and in the background chrome opens, scrolls to the bottom of the page, fills out the name and date field, and then closes the browser. And I can see in the output window of IntelliJ that the process finished with an exit code of zero.

> [!info]- Semantic Content
>
> **Code Identifiers:** sendkeys (2), movetoelement (1)
> **Tools:** intellij (3)
> **CLI Commands:** find (2)
> **UI Navigation:** open the (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### [Switch to active window](https://www.linkedin.com/learning/selenium-essential-training/switch-to-active-window?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/switch-to-active-window?u=76281980&t=0)** - [Narrator] Some applications have multiple [Windows](../../Glossary/Service/Windows.md), frames, and alerts that open on a page. [Selenium](../../Skills/Software%20Development/Selenium.md) WebDriver assigns each window a unique ID, so that Selenium can differentiate when it is switching controls from one window to another. The switchTo method is provided by the WebDriver interface and allows the driver to switch between windows, frames, and alerts. It offers the following options. First is the option to switch to a window by providing the window name as a parameter. There's also the option to switch to a frame by providing the frame name as a parameter. And third is the option to switch to a pop-up alert. Now, keep that in mind as I focus on automating a test for switching to an active window. I'll start by opening the exercise file for this video, at 02_05 in the start directory. Once the project opens, I will start by building the project by selecting Build, Build Project. When that finishes, I'll want to focus now on filling out the steps of the test. Now let's hop over to the test application, and on the Switch Window page, I see that there are two buttons. There is a button that opens a new tab and opens an alert. For this video, I'll focus on the first button that opens a new tab, and when clicking that button, in a new tab, the homepage of the test application opens.
>
> **[1:37](https://www.linkedin.com/learning/selenium-essential-training/switch-to-active-window?u=76281980&t=97)** And once I close this page, I go back to my original tab. So to fill in the test, I'll focus on writing a step to open this new tab by clicking on the New Tab button. So I want to inspect this button, and when doing so, I see that this button has an ID of new-tab-button so I'll copy that, and go back over to IntelliJ, and what I wanna do after navigating to the test application Switch Window page, on line 15, I'll define a new web element called newTabButton and tell the driver to find the element by the ID of new-tab-button. On line 16, I want to click on that new tab button in order to open the second tab. So at this point there are two tabs open, and what I want to do is to get both of the window handles, and then switch to the handle for the tab that's open, but before I can do that, we need to know the handle or the ID of the window to switch to. So I'll need to use this method getWindowHandle. So I'll skip a line and on line 18, I'll define a new variable called originalHandle, and say driver.getWindowHandle, and even though another tab is opened at this point, the driver is still focusing on the original window open,
>
> **[3:11](https://www.linkedin.com/learning/selenium-essential-training/switch-to-active-window?u=76281980&t=191)** so by specifying getWindowHandle, I can get the original window handle. Then for the next step what I want to do is to write a for loop to iterate through the two handles, and then be able to switch back to the tab that was opened originally. So, first I'll define a for loop with handle1 and what I want to specify next is driver.getWindowHandles which will get two window handles based on both tabs that are open. Then I'll add a curly brace, and in the body of this for loop, I'll type driver.switchTo.window, and in here I'll specify handle1 as the window handle, and add a semicolon at the end of that. So now what will happen in this for loop is that our test will focus on switching to the second tab that's open, and after that, what I'll want to do is to skip a line, and on line 24 I will switch back to the original window, the first tab, by typing driver.switchTo.window, and then I will pass in the originalHandle for the first tab to go ahead and switch back to that first tab, and the test is complete. So now I will right-click to run it, and I see that the browser opened,
>
> **[4:43](https://www.linkedin.com/learning/selenium-essential-training/switch-to-active-window?u=76281980&t=283)** switched tabs quickly, and then closed, and that the test finishes successfully, and exits with a code of zero.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Selenium](../../Skills/Software%20Development/Selenium.md) (2)
> **Code Identifiers:** switchto (3), getwindowhandle (3), originalhandle (2), newtabbutton (1), getwindowhandles (1)
> **UI Navigation:** switch to (5), click on (1), open the (1), right-click (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Tools:** intellij (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)

#### [Switch to alert](https://www.linkedin.com/learning/selenium-essential-training/switch-to-alert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/switch-to-alert?u=76281980&t=0)** - [Instructor] In this video, I'll demonstrate how to automate opening an alert, switching to an alert, and then closing it. To start with, I'll show how the functionality for the open alert button works. So from the Switch Window page, I can click open alert which opens a browser alert that says this is a test alert and pressing OK closes that alert. So now let's write a test to automate this functionality. I'll start by opening the exercise file for this video. From the IntelliJ window, I'll select open and navigate to chapter two 02_06 and I'll open the start directory. Once the project is open, I will go to build, build project, and wait for that to finish. Once compilation is successful, I can go ahead and automate the steps to my test. So after navigating to the Switch Window page on line 14, I'll start filling in the steps for the test. So let's hop back over to the Switch Window page and what I'll want to do is to inspect the open alert button and I'll go ahead and grab the id of alert button and copy that, then going back to IntelliJ, I can define a new WebElement and I'm gonna call this WebElement alertButton and I'll say driver.findElement(By.id) and then paste in alert-button
>
> **[1:33](https://www.linkedin.com/learning/selenium-essential-training/switch-to-alert?u=76281980&t=93)** and add a semicolon at the end of that line. On line 17, I will say alertButton.click in order to click on that button and then open the alert. Following that, I'll need to use the alert class to define a new alert object and then to be able to switch to that alert. So what I'll want to do is to type Alert and create a new object of that class called alert and say driver.switchTo.alert in order to switch the driver's focus to that open alert. And then what I can do is say alert.accept in order to press OK and then close that alert. So this completes the test for now. I'll go ahead and run it and watch the behavior. So let's right click then select run and that will open the browser, click on the open alert button, close the alert and finish and I see back in the output window for IntelliJ that the test completed successfully.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (3), click on (2), navigate to (1), go to (1), switch to (1)
> **Code Identifiers:** alertbutton (2), findelement (1), switchto (1)
> **Tools:** intellij (3)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Executing JavaScript commands](https://www.linkedin.com/learning/selenium-essential-training/executing-javascript-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/executing-javascript-commands?u=76281980&t=0)** - [Instructor] [JavaScript](../../Skills/Software%20Development/JavaScript.md) commands can sometimes be necessary in WebDriver tests. Luckily, [Selenium](../../Skills/Software%20Development/Selenium.md) supports the JavascriptExecutor. The JavascriptExecutor provides two methods to run JavaScript on the selected window or current page. First is the executeAsyncScript method. This executes an asynchronous piece of JavaScript, and scripts executed with this method must explicitly signal they are finished by invoking the provided callback. There is also the executeScript method. In this method executes JavaScript as the body of an anonymous function. There are a few use cases for using the JavascriptExecutor. First, I've used it when Selenium WebDriver fails to click on any element due to some issue. It can also generate alerts and run other scripts to trigger actions on a page. And third, it can manipulate the page and perform actions like scrolling and zooming. So, in this video, I'll demonstrate a simple example of using the JavascriptExecutor to click on an element within a modal that WebDriver otherwise fails to find. To start with the test, I'll open up the exercise file for this video at zero, two, zero, seven, and open the start directory. First, I'll go to build, build project, in order to build and install any dependencies. Once that completes successfully,
>
> **[1:33](https://www.linkedin.com/learning/selenium-essential-training/executing-javascript-commands?u=76281980&t=93)** I'll then wanna focus on filling in the details for my test after navigating to the modal page on line 14. I'll hop over to the test application now, so that we can become familiar with the functionality offered here. So on the page, I see a title called Modal and a button which says open modal. Clicking on this button then opens a modal with some sample text, as well as two buttons for close and okay. So, generally buttons that are hard to click exist within modals. So, I wanna write a test using the JavascriptExecutor to click the close button within the modal. For the first step of this test, I need to inspect the button open modal, so I'll right click that, inspect, and then I see that this button has an ID of modal dash button, so I'll copy that, and go back over to my test, and on line 16, I'll define a new web element called modal button and tell the driver to find this element by the ID of modal dash button, and I'll add a semicolon to the end of that line. And then on line 17, I'll want to say modal button dot click, in order to click the modal button and then open up the modal. So now, I'll hop back over to the test application to then inspect this close button. And when I do that,
>
> **[3:04](https://www.linkedin.com/learning/selenium-essential-training/executing-javascript-commands?u=76281980&t=184)** I see that it has an ID of close dash button, and I'll go back to the test, skip a line, and define a new web element that I will call close button, and I can tell the driver to find this element by the ID, and go ahead and paste that ID of close button, and add a semicolon. Next, we get to the fun part of using the JavascriptExecutor. So to do that, I will create an object using the JavascriptExecutor class by typing JavascriptExecutor, and I'll just call that object js for short, is equal to, in parentheses, JavascriptExecutor driver, and we'll add a semicolon at the end of that line. Then I can use this JavaScript object, js, to execute a script. So, in this case, I can type js dot-- I'll just go ahead and use executeScript in this situation, as opposed to executeAsyncScript, just for this simple example, and inside this method all have quotes, and type arguments zero dot click,
>
> **[4:21](https://www.linkedin.com/learning/selenium-essential-training/executing-javascript-commands?u=76281980&t=261)** open parentheses, close parentheses, semicolon in order to simulate a click, and send that script. And then I want to click on the close button element, and then I'll add a semicolon at the end of this line. So, this completes the test, and what will happen now is that the modal button will be clicked. Once the modal is open, the JavascriptExecutor will execute a simple script to press the close button, and then the driver will quit. So, I'll go ahead an run this test now, just to confirm that it completes successfully, and wait for it to finish. I see that the test exits with the code of zero, and that it was successful. Feel free to explore the JavascriptExecutor in more detail, and to try out and example using executeAsyncScript at your leisure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [Selenium](../../Skills/Software%20Development/Selenium.md) (2)
> **Code Identifiers:** executeasyncscript (3), executescript (2)
> **UI Navigation:** click on (3), open the (1), go to (1)
> **CLI Commands:** find (3)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise file (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Drag and drop](https://www.linkedin.com/learning/selenium-essential-training/drag-and-drop-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/drag-and-drop-2?u=76281980&t=0)** - [Instructor] Drag and drop can be great for things like moving images around a screen or cropping or resizing images. It can also be great to arrange various components on the screen such as moving virtual note cards around in columns. In this video, I'll demonstrate an example of dragging and dropping an image into a box. Let's start by opening up the exercise file for this video at 02_08 and then selecting the start directory. Once that project is open, I will go up to the top level menu and select Build and Build Project in order to install any necessary dependencies and make sure the project is built successfully, and then I'm ready to dive into the test. So like all the tests before, this starts by setting the location for the Chrome driver, creating a new instance of the Chrome driver, and navigating to a specific page in the test application, which is drag/drop. So then, after navigating to the drag/drop page, I'll be ready to start filling in the steps for my test. To start with, I'll hop over to the test application and understand how this functionality works. At the drag/drop page, I see a prompt to drag the image into the box. In selecting the [Selenium](../../Skills/Software%20Development/Selenium.md) image, I am able to drop it into the box which says drop here, and once I drag the image into the box, I see that the box changes to say dropped to indicate that this image was successfully dragged and dropped into the box. So let me refresh the page to refresh the functionality, and then what I want to start doing is inspecting the image and the box to get those element. So once I press inspect on the image, I see that the image does have an ID of image, so I'm going to go ahead and copy that,
>
> **[1:35](https://www.linkedin.com/learning/selenium-essential-training/drag-and-drop-2?u=76281980&t=95)** and back over in the test on line 16, I'm going to define a new web element called image, and tell the driver to find the element with the ID of image, and I can just paste that ID of image in there, and add a semicolon at the end of the line. Then on line 18, I want to go ahead and define a new web element called box and say driver.findelement by ID, I'm going to go ahead and use the same ID assuming that that ID is most likely is going to be box, but let me just go and check it out first. So then, inspecting the drop here box, I see that it does have an ID of box. So I can copy that back over to my test and paste that value in there for the ID. Then what I'll want to do next is define a new instance of the actions class. So to do that, I can type actions, actions is equal to new actions class, and then that takes the driver as the parameter, and then we'll add a semicolon at the end of that line, and then on the next line I can use the actions object to call the method drag and drop, and drag and drop takes two parameters, so the source and the target, as you can see there, so I'm going to first type in image comma box, and then what I need to do, I say dot build to build this action, and then perform to perform the action, and that's all I need to implement
>
> **[3:09](https://www.linkedin.com/learning/selenium-essential-training/drag-and-drop-2?u=76281980&t=189)** a simple drag and drop example. So now I will right-click on this test and select run draganddrop.main and wait for this test to run and complete, and after running the test, back at my terminal, I can see that the process finished with exit code zero and that was successful. So since the test runs so fast, I would encourage you after this last line here, the drag and drop perform, just to insert some kind of sleep action if you actually want to slow this test down and see how it runs. That might be a good way to either add a sleep or to debug this step so that you can actually see it slow down and see that it completes successfully, but that's it for now, and I'll move onto the next example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (1)
> **UI Navigation:** drag and drop (5), right-click (1)
> **CLI Commands:** make (1), find (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 3. Using Advanced Locators

[↑ Back to Table of Contents](#table-of-contents)

#### [Determine which locator to use](https://www.linkedin.com/learning/selenium-essential-training/determine-which-locator-to-use?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/determine-which-locator-to-use?u=76281980&t=0)** - [Instructor] There are various ways to locate elements to find an [HTML](../../Skills/Web%20Development/HTML.md) using the attributes class name, CSS selector, ID, link text, name, tag name, and XPath. With all these locators, there are usually numerous ways to find an element. And even though all these locator strategies exist to help locate an element, it doesn't mean that all of these options are the best choice to use. Some locators are better than others. The best locators are those that are unique, descriptive, and static or unlikely to change. I typically avoid using the following locators, link text which works as long as links are unique on a page, tag name which is usually not unique or descriptive, and XPath which is definitely not descriptive. I prefer using ID, class, name, and CSS selector all of which are usually unique, descriptive, and static. There is one locator that is the most powerful and that is CSS selectors. A CSS selector can be used in conjunction with all the other types of locators and more. Using CSS selectors allows for a lot of flexibility and are great for even the most hard-to-find elements. I'll show a few examples now. Say we want to find an element using its ID and take for example the following HTML
>
> **[1:35](https://www.linkedin.com/learning/selenium-essential-training/determine-which-locator-to-use?u=76281980&t=95)** where there is an input tag with an ID, class, and name all with a value of q. An ID can be represented with the hash symbol in CSS so to find that, I can specify driver.findElement(By.cssSelector('#q')). Say we want to find an element using class. I have the same HTML here with an input tag and an ID, class, and name all of q. A class can be represented with a dot so driver.findElement(By.cssSelector('.q')) will help find the class name. Any other locator can be found by defining the tag name and then specifying the locator in the value. So let's take that same sample of HTML and say I want to find the name. What I can do is say driver.findElement(By.cssSelector) and I have the tag name and then in brackets the name and then is equal to q which is the value there and that will allow me to be able to find any other locators. The CSS selector can also be used for even more advanced things like finding based on substring or string, using wildcards, and child and sibling nodes. In the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this chapter, I'll show examples for how to use advanced CSS selectors and automation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** css (8), html (4)
> **CLI Commands:** find (9)
> **Code Identifiers:** findelement (3), cssselector (3)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Combine multiple CSS attributes](https://www.linkedin.com/learning/selenium-essential-training/combine-multiple-css-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/combine-multiple-css-attributes?u=76281980&t=0)** - [Instructor] Using multiple CSS selectors can be necessary when a web page has many of the same type of elements, and the CSS selector needs to describe a unique element, and there are no other good options. There are many different combinations of CSS selectors that can be used to locate elements. In this video I'll discuss the following: tag and class or tag and ID, tag and attribute, class and class. But besides the few I cover, there are so many more. Let's talk about using tag and class together. Say I have a simple text field where the [HTML](../../Skills/Web%20Development/HTML.md) is defined as input class is equal to q, type is equal to text. As shown in the last video, I could simply use class name, but say the class name is used somewhere else and I want be a little bit more specific and use the tag name as well to define this CSS selector. So I can use a combination of the two and I can say driver dot find element by CSS selector and in quotes I can say input, using the tag name dot q to also describe the class. The same convention can be followed in situations where I want to combine a tag name of input and an ID of q. The CSS selector can be defined like so: Driver.find element by CSS selector and in quotes input hashtag, q. Combining a tag and attribute to define a CSS selector can also come in handy.
>
> **[1:33](https://www.linkedin.com/learning/selenium-essential-training/combine-multiple-css-attributes?u=76281980&t=93)** Take the html of a radio button for example, where I have an input tag, a type of radio, a value of radio button. There is no class, ID, or name to use. In this case I can find the radio button either based on its type or based on its value, using the CSS selector. So, say I am finding this radio button based on its type. I can say driver.find element by CSS selector and in quotes input, then inside of brackets type is equal to radio. Similarly, I can also find the value using the same combination of tag and attribute by specifying the CSS selector input, in brackets, value is equal to radio button. You can also define a CSS selector with multiple classes. It is common to see an html element that has many classes, especially as classes are stacked on top of each other in order to style elements. So, say that I have the following html to define multiple buttons on the page. Looking at the buttons at a glance, they appear pretty similar. When I look deeper into their class names, I see that there are multiple classes that define the button. There's a button class, a button dash large class, and then another class. That is button dash primary, button dash success, or button dash info. And that is really what is separating those buttons and making them distinct. So, to define a CSS selector for, let's say this success button, that second button there, I can specify a combination of all of its classes
>
> **[3:09](https://www.linkedin.com/learning/selenium-essential-training/combine-multiple-css-attributes?u=76281980&t=189)** by saying driver.find element by CSS selector dot button, dot button dash large, dot button dash success. And that will allow me to specifically find that success button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4)
> **Env Vars:** css (14)
> **CLI Commands:** find (7)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Text matching](https://www.linkedin.com/learning/selenium-essential-training/text-matching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/text-matching?u=76281980&t=0)** - [Instructor] When there are no descriptive selectors, matching by text can come to the rescue. The two best ways to use a CSS selector based on text are by value, which will match text by exact value, there's also wildcard, which will match text based on a selector or part of a selector. In the last video I showed an example of finding a radio button based on its value. Just as a refresher, it looks like driver dot find element by CSS selector, and then inside of quotes specifying the tag name, and inside of brackets specifying the type and setting that equal to its value. As long as an element has a tag name and a value, those can be used to locate the element successfully. If it becomes necessary to match text using a CSS selector, I recommend using the element's value first. If the value's not available for some reason, matching text by wildcard is also acceptable. Here are the ways that we can match based on string or substring. There is the prefix, the suffix, the substring, or using the exact match. So I'll share a few examples of these methods now. First off is by exact match, and say I have the following text field where there is a div and an id of text field. I can do an exact match by specifying driver dot find element by CSS selector,
>
> **[1:37](https://www.linkedin.com/learning/selenium-essential-training/text-matching?u=76281980&t=97)** and then using the tag name div saying id is equal to the value text field. For the second example I can do a match based on the prefix based on the sample [HTML](../../Skills/Web%20Development/HTML.md) here where I have a div, id is equal to text field underscore random id. And the more that you dig into automation the more that you might find that some applications do have id's and classes and names where there are random id's part of those values. So if I want to match based on the prefix I can say driver dot find element by CSS selector, and then in quotes div, and inside of brackets id, and then the caret sign is equal to the value text field to find the prefix of that id. If I want to do a match based on the suffix, I can take this sample of HTML here where it's the exact opposite of just the previous example where I have an id is equal to random id underscore text field. And matching based on suffix I can say driver dot find element by CSS selector, and then have the tag name div, and inside of brackets id, using the dollar sign, is equal to text field. There's also the option to match based on substring, so take for example the following HTML here where I have this div id of 123 underscore text field underscore random id. So I just really want to focus on finding that text field part of the id. What I can do is say driver dot find element by CSS selector
>
> **[3:15](https://www.linkedin.com/learning/selenium-essential-training/text-matching?u=76281980&t=195)** then take the tag name of div, and inside of brackets id asterisk is equal to text field. Here are a few examples of how to use CSS selectors to find elements based on text. It might not be necessary to find elements by CSS selector based on text, but it really depends on the testability of the application. I recommend keeping this strategy in mind for future automation projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3)
> **Env Vars:** css (9), html (3)
> **CLI Commands:** find (9)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using wildcards](https://www.linkedin.com/learning/selenium-essential-training/using-wildcards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/using-wildcards?u=76281980&t=0)** - [Instructor] Using child nodes are helpful when it is difficult to find a unique and descriptive locator for an element. There are a couple ways in which we might want to go about finding child nodes. Either using the child node which is a node directly under another node or the nth-child which is used when there are multiple nodes at the same level under another node. I'll first talk about an example of finding a child node. Take for example the following [HTML](../../Skills/Web%20Development/HTML.md) where there is a div tag and directly under that, an a tag. To find the child element the selector would be driver.findElement(By.cssSelector, and inside of quotes, taking the top-level tag name, div, hashtag, parent space a to specify the child node there. Next I'll show an example of using the nth-child. This is particularly helpful when there are a list of elements and we particularly want to find one element within the list. So take for example the following HTML where there is an unordered list called list and inside of that, three list items. I can use the following CSS selector to help find list items. Driver.findelement(By.cssSelector, and inside of quotes, hashtag list, space, li:nth-child(n), where n is the list items within the list. So if I want to find list item two,
>
> **[1:33](https://www.linkedin.com/learning/selenium-essential-training/using-wildcards?u=76281980&t=93)** I can specify n is equal to two. So as you can see it can be helpful to find the child node when an element is otherwise hard to find.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **CLI Commands:** find (7), node (7)
> **Code Identifiers:** cssselector (2), findelement (1)
> **Env Vars:** html (2), css (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### 4. Interacting with Components

[↑ Back to Table of Contents](#table-of-contents)

#### [Common components](https://www.linkedin.com/learning/selenium-essential-training/common-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/common-components?u=76281980&t=0)** - Sometimes even the most commonly used Web Components can be tricky to automate. Even if the Component just requires input through the mouse or keyboard there can be some nuances with how the Component needs to be automated. In this chapter, I'll show examples of how to automate some of those common Components. This includes Radio Buttons and Checkboxes, which allow us to select values. Date Pickers which allow us to pick a date from a calendar menu. Drop-down Menus with options to select from the Menus. And File upload to upload a local text or image file.

> [!info]- Semantic Content
>
> **Speakers:** - sometimes (1)

#### [Radio buttons and checkboxes](https://www.linkedin.com/learning/selenium-essential-training/radio-buttons-and-checkboxes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/radio-buttons-and-checkboxes?u=76281980&t=0)** - [Instructor] Let's take a minute to talk about radio buttons. They are used commonly in [Forms](../../Skills/Web%20Development/Forms.md) for selecting options. Since radio buttons are used widely in websites and forums, you inevitably need to automate them as well. Radio buttons can be located using a variety of strategies, depending on what [HTML](../../Skills/Web%20Development/HTML.md) is defined for that component. On this page, there are three radio buttons available. I'm gonna walk through examples of using three different strategies to automate these radio buttons. When I inspect these three radio buttons, I find that each button is defined in an input tag and there are various attributes that define each button. I want to start writing a test now to automate these three radio buttons. I'll go over to IntelliJ and from the welcome menu, I will open the exercise file for this video.
>
> **[0:54](https://www.linkedin.com/learning/selenium-essential-training/radio-buttons-and-checkboxes?u=76281980&t=54)** I'll start by building the project and once that is successful, I want to focus on the test class, radiobuttons.[Java](../../Skills/Software%20Development/Java.md). So far, this test class creates a new instance of the ChromeDriver on line 11, navigates to the radio button page on line 13 and then quits the driver. So, now I wanna start filling in the steps to automate the radio buttons. I'll first focus on the first radio button. I'm going back to the test application, I'll inspect that button, and I notice that this is the only button that has an ID. So I'll start with the strategy to automate this radio button based on its ID. Back in the test on line 15, I'll define a new web element called radioButton1, and I will tell the driver to find this element by the ID of radio-button-1 and then go ahead and add a semi-colon at the end of that line. On line 16, I wanna click on that radio button, so to do that, I'll type radioButton1.click. Next, I wanna focus on the second radio button, so let's go back to the test application and inspect radio button 2. So for this radio button, there are no IDs, classes, and the name that is shown is not unique and shared between all the other radio buttons. So for this, I'll go ahead and select to use the value
>
> **[2:29](https://www.linkedin.com/learning/selenium-essential-training/radio-buttons-and-checkboxes?u=76281980&t=149)** to locate radio button 2. Going back to IntelliJ, I will define a new web element called WebElement, radioButton2 and tell the driver to find this element By.cssSelector and for the cssSelector, I will type input and within brackets I can type value is equal to the value name of option2. And add a semicolon at the end of that line. And then on my 19, I will want to call radioButton2.click in order to now click on the second radio button. Now I'm gonna go back to the test application and inspect the third radio button. I see that this HTML is pretty much the same as with the second radio button, but for the sake of this example, let's just say that there is nothing else to uniquely identify the radio button and I wanna go ahead and use XPath. As I've mentioned earlier on in the course, this is not the most recommended locator strategy, but sometimes might be one of the only options. So to find the XPath for an element, what I can do is right-click on it, select copy and then copy Xpath to copy that XPath to my clipboard. Going back to the test on line 21, I will define a new WebElement called radioButton3 and set that equal to driver.findElement By.xpath
>
> **[4:08](https://www.linkedin.com/learning/selenium-essential-training/radio-buttons-and-checkboxes?u=76281980&t=248)** and then go ahead and paste that XPath in there. And what this XPath shows is the path of all the tag names used to get to that element, radio button 3. On line 22, I can say radioButton3.click in order to then click on that third radio button. So there are three different ways that you might go about automating radio buttons. Again, it all depends on the application and the locators that are available. This just goes to show that a radio button can be found in a variety of ways, using a variety of locator strategies. Now that the test is complete, I'll go ahead right-click and select to run Radiobuttons.main(), and the browser will pop up, navigate to the page, and click all three of the radio buttons. I see that the test finished successfully. Checkboxes can also be automated the same way as radio buttons using variety of locator strategies that I showed throughout this video. If you're interested in automating checkboxes, I encourage you to go to the checkbox page in the test application and write a test to automate the three checkboxes there. If you're interested in automating checkboxes, I encourage you to go to the checkbox page in the test application and write a test to automate the three checkboxes there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **UI Navigation:** click on (3), right-click (2), go to (2), checkbox (2), open the (1)
> **Code Identifiers:** radiobutton1 (2), radiobutton2 (2), cssselector (2), radiobutton3 (2), findelement (1)
> **CLI Commands:** find (4)
> **Env Vars:** html (2)
> **Cross-References:** go back to (2)
> **Tools:** intellij (2)
> **File Paths:** radiobuttons.java (1)

#### [Date pickers](https://www.linkedin.com/learning/selenium-essential-training/date-pickers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/date-pickers?u=76281980&t=0)** - [Instructor] I'm going to demonstrate how to automate a Datepicker in a WebDriver test. For this video, I'll be using the test application at the Datepicker page. This example utilizes a pretty typical Datepicker. When clicking on the date field, it opens up a Datepicker with today's date highlighted. When I hover over other dates in the calendar, those dates are highlighted, and once I select a date, the Datepicker closes, and the field is populated with the selected date. Now, I'll start writing a test to automate the Datepicker. I'll begin by opening up the exercise file for this video. Hit zero four, zero three, start. And I'll open that directory. Once the project opens, I'll go to build, build project. Remember to build, and then I'll focus on filling in the details for the Datepicker test class. In this test, on line 12, we create a new instance at the Chrome Driver. On line 14, navigate to the Datepicker application page. Following that on line 16, I wanna start filling in the details for my test. So I'm gonna start by defining a new web element called datefield. And now I need to go back over to the test in order to inspect this field and figure out what locator I want to use. I see it has an ID of Datepicker, so I'll go ahead and copy that. And back in my test, I can say driver.findElement, by ID, and go ahead and paste that ID of Datepicker there
>
> **[1:36](https://www.linkedin.com/learning/selenium-essential-training/date-pickers?u=76281980&t=96)** and add a semicolon at the end of the line. With Datepickers, there are a couple different ways that we could automate this. We could open up the Datepicker and click on a specific field or date. We could also go ahead and just send keys directly to this field here. So say for example, I go ahead and just paste a value into the Datepicker. That will work just fine. So on line 17, I'm gonna go ahead and say dateField.sendKeys in order just to directly send keys to that field. And just type some random date in the future. And any date is really fine here just to make sure to keep the same format of date here and pick a date sometime in the future. After that, I need to actually close the Datepicker. Just by sending these keys to the date field does not actually close the Datepicker 'cause I'm not actually selecting a date. So what I'll need to do is to press enter on the field. And to do that, I want to send keys again, and I'm going to use this class, Keys. And then I can press Keys.RETURN to send the return or enter key. And so this automatically imports the keys package up here for me to be able to send keyboard keys. And that completes the test to automate the Datepicker. So finally, what I'll do is to right-click on this test and select run Datepicker dot main to run the test. And I see the browser quickly opened up
>
> **[3:13](https://www.linkedin.com/learning/selenium-essential-training/date-pickers?u=76281980&t=193)** to the Datepicker page, selected a date, and finish.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), navigate to (1), click on (1), right-click (1)
> **Code Identifiers:** findelement (1), datefield (1), sendkeys (1)
> **CLI Commands:** make (1)
> **Env Vars:** return (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Dropdown menus](https://www.linkedin.com/learning/selenium-essential-training/dropdown-menus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/dropdown-menus?u=76281980&t=0)** - In this video, I'll demonstrate how to automate a typical dropdown menu, using [Selenium](../../Skills/Software%20Development/Selenium.md) Web Driver. On this dropdown page, in the test application, there is a single button on the page called Dropdown button. Clicking this button exposes a dropdown menu that has a list of all the components used within the test application. Clicking on a component in the dropdown list takes me to that component's page and the test application. Let's write a test to automate selecting an option from the dropdown menu. I'll start by opening up the exercise file for this video.
>
> **[0:42](https://www.linkedin.com/learning/selenium-essential-training/dropdown-menus?u=76281980&t=42)** And once the test is open, I will select to build the project, and after that completes successfully I'll start filling in the details for the dropdown test class. I'll start on line 15 after the driver navigates to the dropdown page. I wanted to find a new web element that's going to be called dropdown menu. And to get the locator for this dropdown menu element I'm gonna hop back over to the test application to inspect this dropdown button. Once there, I'll see that it has an ID of dropdown menu button, so I'll go ahead and copy this, and then go back over to the test class. And I can say driver, find element, by ID, and paste the ID of dropdown menu button there and add a semi-colon at the end of the line. Then on line 16, I'll want to click on the dropdown menu, say dropdown menu dot click in order to open that menu and expose the dropdown menu options. I'll go back over to the test class and show what that looks like now. So once I click the button, these options are exposed. And next, what I'll want to do is to actually select an option from the list. So let's go ahead and just inspect the first option. And this is the only one with an ID, so I'm gonna just go ahead and choose to use the auto-complete dropdown menu option. Going back to the test, I'll skip a line. And on line 18, I will define a new web element
>
> **[2:16](https://www.linkedin.com/learning/selenium-essential-training/dropdown-menus?u=76281980&t=136)** called auto-complete item. And I'll tell the driver to find this element by it's ID of auto-complete. And add a semi-colon at the end of that line. And then on line 19, I'm gonna say auto-complete item dot click in order to click on that item, and to redirect to the auto-complete page. After that, I'm gonna right click and select run dropdown dot main and wait for the browser to open. Navigate to the dropdown menu page, select the auto-complete item from the dropdown menu and wait for the browser to close. And I see that the test exits successfully with a code of zero.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (1)
> **UI Navigation:** dropdown (20), click on (2), navigate to (1), select the (1)
> **CLI Commands:** find (3)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [File upload](https://www.linkedin.com/learning/selenium-essential-training/file-upload?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/file-upload?u=76281980&t=0)** - [Instructor] File upload automation seems like something that could be difficult, but it's actually surprisingly easy. In this video, I'll use the test application to upload a file. On this file upload page, the functionality that exists allows me to choose a file. Once I choose a file, the placeholder text is replaced with the selected filename and pressing reset clears that text field and leaves you with a clean slate. The nice thing about uploading files in [Selenium](../../Skills/Software%20Development/Selenium.md) is that we can simply send keys to the upload field instead of going through and choosing a file manually. So while I'm still on the test application, I will inspect the file upload field so I can use it in my test in just a minute. I'll copy the id of file upload field and then I'll open up the exercise file for this video in IntelliJ.
>
> **[1:10](https://www.linkedin.com/learning/selenium-essential-training/file-upload?u=76281980&t=70)** Once the project is open, I'll go ahead and build the project. And then once that's successful, I'll jump in right after navigating to the file upload page on line 14 and start by defining a new web element on line 16 and I'll call this new WebElement fileUploadField and I'll tell the driver to find this element by the id of file-upload-field and add a semicolon at the end of that. Then on line 17, I wanna use the fileUploadField to sendKeys and I'm gonna go ahead and send the keys of the image that I want to upload. So in this test directory, there is an image called file-to-upload.png. So I'm gonna go ahead and simply pass along the full image name to the file upload field here in line 17. So I can type file-to-upload.png.
>
> **[2:16](https://www.linkedin.com/learning/selenium-essential-training/file-upload?u=76281980&t=136)** And it's as easy as that to be able to upload a file using Selenium web driver. So now I'll go ahead and right click on the test and run file upload.main to go ahead and run the test and I'll wait for that to finish successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (2)
> **Code Identifiers:** fileuploadfield (2), sendkeys (1)
> **CLI Commands:** find (1)
> **Tools:** intellij (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. Synchronization Issues

[↑ Back to Table of Contents](#table-of-contents)

#### [Why synchronization is an issue](https://www.linkedin.com/learning/selenium-essential-training/why-synchronization-is-an-issue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/why-synchronization-is-an-issue?u=76281980&t=0)** - [Instructor] Tests usually run really fast, and that's a wonderful thing. However, sometimes it may take a moment or ten for new pages to load, for certain actions to finish, or for components to appear. This chapter's all about synchronization with running tests and learning how to account for the factors that can make a test have unexpected behavior. So, why do synchronization issues occur? One reason is that browser drivers operate at different speeds. ChromeDriver and geckodriver are known to be the fastest browser drivers, while others are a bit slower. You'll also notice that as the number of simultaneous tests increases, there is a discrepancy between running tests in your local machine as opposed to running tests in a remote or virtual machine. Network speed, or connectivity, can be another factor, and make a huge difference in how tests execute. Pages can be slow to render and this will slow down tests. So, you can see there are several different reasons that synchronization issues can creep into tests. What's inevitable is that synchronization will become an issue at some point with [Selenium](../../Skills/Software%20Development/Selenium.md) WebDriver, and it is critical to learn how to manage it in your test. You can usually identify a synchronization issue when running a test and it has a step that gets stuck somewhere. After a moment, the behavior will be followed by a No Such Element exception, which will fail the test and stop the execution. An element not found error can indicate two things. One is that the element cannot be found
>
> **[1:33](https://www.linkedin.com/learning/selenium-essential-training/why-synchronization-is-an-issue?u=76281980&t=93)** by the locator specified at the time of searching for it. And two, the element is not visible or present on the page at the time of searching for it. In the case that the locator has been correctly specified, the only other alternative is that something must be done to search for the element only once it becomes available. The solution is to add a wait. A wait will slow down the test and wait until the element it wants to interact with becomes available. In this chapter, I'll show examples of using the two major types of wait: implicit waits and explicit waits. And I know the anticipation is building and you're dying to know more about waits. So, let's explore those now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Implicit waits](https://www.linkedin.com/learning/selenium-essential-training/implicit-waits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/implicit-waits?u=76281980&t=0)** - [Narrator] The implicit wait tells WebDriver to wait for a specified amount of time before throwing a no such element exception. Because the default setting of waiting for an element is zero, an implicit wait will be set for a time greater than zero to expect the element to become available. Implicit waits are called implicit because they don't depend on a certain element state. Instead, they just wait for a specified time. The format to declare an implicit wait is driver.manage.timeouts.implicitlywait. And the implicitly wait method takes two parameters. The first is the time to wait as an integer, and the second is the time measurement, for example microseconds, milliseconds, or seconds. Let's do a quick example of using an implicit wait now. I'll open up the exercise file for this video by navigating to chapter five, zero five zero two, start, and I'll open up this example. Once this project is open, I'll go ahead and build the project. And now I'll focus on the test class. So this is the auto complete that [Java](../../Skills/Software%20Development/Java.md) test class that you might remember from earlier on in the course, that we automated to complete an auto complete address form. So what I wanna do for this test class, is instead of using a sleep down on line 17, I wanna replace it using an implicit wait. So I'll start by getting rid of this thread.sleep here on line 17, and then I'll have no need for this interrupted exception on the main method signature.
>
> **[1:37](https://www.linkedin.com/learning/selenium-essential-training/implicit-waits?u=76281980&t=97)** Then what I can do, is to add my implicit wait. So in place of the sleep, I'll add an implicit wait by typing driver.manage.timeouts.implicitlywait,
>
> **[1:54](https://www.linkedin.com/learning/selenium-essential-training/implicit-waits?u=76281980&t=114)** and then I need to specify the amount of time to wait, we'll go ahead and say five seconds, and then I wanna specify the time unit. And let's go ahead and just use timeunit.seconds here, and then I'll add a semicolon at the end of that. And then I'll also notice that this imported the time unit package automatically for me, so I'm good to go there. And that is how an implicit wait is formatted within my test. So now what I can do is to right click to run the test, and wait for the browser to open, go to the auto complete page, fill out the auto complete address, and select the auto complete result from the list. I see that my process finished with an exit code of zero, indicating that the test was successful and that I am able to use this implicit wait instead of just using a sleep. The pros of using implicit waits are that they are easy to implement, and non-intrusive, and they can also be applied to all elements in the script, rather than just one. The biggest con of implicit waits is that they can end up waiting for too much time, and if they are waiting when they don't need to be, they are just taking up unnecessary time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **UI Navigation:** go to (1), select the (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Explicit waits](https://www.linkedin.com/learning/selenium-essential-training/explicit-waits-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/explicit-waits-2?u=76281980&t=0)** - [Instructor] The explicit wait waits for a specified amount of time for a certain condition to be true. If the condition is not met in the time specified, an exception is thrown. The explicit wait is intelligent. It gives better options than an implicit wait. It allows for more flexibility as it will wait for dynamically located elements. The first step to using explicit wait is to define a new wait object by specifying web driver wait wait is equal to new web driver wait. This is part of the web driver wait class, and this method takes the driver and the max time to wait in seconds as parameters. Once the wait object is declared, we use that wait in addition to expected conditions to specify what we are waiting for. One example of expected conditions is to wait for an element to become visible. So putting that into a sample statement, that can be declared by web element element is equal to wait until expected conditions dot visibility of element located by. I'll show an example of using an explicit wait now. From IntelliJ I will open the exercise file for this video.
>
> **[1:22](https://www.linkedin.com/learning/selenium-essential-training/explicit-waits-2?u=76281980&t=82)** And once that's opened I'll go ahead and build the project. Now I'll focus on the test class where I'll be using the autocomplete dot [Java](../../Skills/Software%20Development/Java.md) test class again, and I'll replace the sleep on line 19 with an explicit wait. So I'll start by just removing this sleep, as well as the exception on the main method signature. And then what I want to do is start by defining a new web driver wait object by typing web driver wait, and I'll call that object wait, and that is equal to new web driver wait, and I'll pass in the driver and 10 seconds as the max time to wait. After that I want to redefine the web element autocomplete result on line 22. To do that I'll want to remove the current definition, and instead I'm going to use an explicit wait. So here what I'll type is wait dot until, in parentheses, expected conditions dot visibility of element located by class name, and in quotes the name of the class is pac dash item. And I'll add a semicolon at the end of that line. This will now pull to see if this condition is true every 500 milliseconds up until 10 seconds. So this completes the example of using an explicit wait.
>
> **[2:57](https://www.linkedin.com/learning/selenium-essential-training/explicit-waits-2?u=76281980&t=177)** I'll now right-click to run the autocomplete dot main method and confirm that this test completes successfully. I see that this test exits with a code of zero, indicating that it is successful. So besides waiting for an element to be visible, there are many other expected conditions that can be used with an explicit wait, such as element to be clickable, element to be selected, presence of element located, text to be present in element, and more. I recommend checking out the API documentation shown here at [selenium.dev](https://selenium.dev) in order to learn more about all the expected conditions available that can help when writing tests and using explicit waits. The pros of explicit waits are that they allow flexibility to wait for an element to be in a specific condition, and that they pull for the condition to be true every 500 milliseconds, and will likely not take up any unnecessary time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1), [Selenium](../../Skills/Software%20Development/Selenium.md) (1)
> **UI Navigation:** open the (1), right-click (1)
> **URLs:** [selenium.dev](https://selenium.dev) (1)
> **Env Vars:** api (1)
> **Tools:** intellij (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 6. Putting It All Together

[↑ Back to Table of Contents](#table-of-contents)

#### [Automate a workflow using WebDriver](https://www.linkedin.com/learning/selenium-essential-training/automate-a-workflow-using-webdriver?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/automate-a-workflow-using-webdriver?u=76281980&t=0)** - [Presenter] Let's automate this form page which demonstrates creating a new user account for the Formy project. This form has various components such as text fields, radio buttons, check boxes, select menus, and a date picker. After submitting the form, the application is redirected to a confirmation page. Now it's time to start automating this test. I'll start by opening up the exercise file for this video by navigating to chapter six, 06_01, and opening up the start directory. Once the project opens, I'll go to Build, Build Project, and once that's successful, I'll start to fill in the details for the test class called Form. To do that, I'll hop back over to the test application and go ahead and inspect the first name field to get its locator. I see that it has various attributes such as a class and ID placeholder. I'll go ahead and copy the ID here and take it back to the test. And after navigating to the form on line 13, I'll skip a line, and on line 15, I want to define my web element and send keys to it. So, in this video, I won't be defining web elements before driving action on them. I'll go ahead and just do it all on one line. And I can just say driver.findElement, by ID, first-name,
>
> **[1:35](https://www.linkedin.com/learning/selenium-essential-training/automate-a-workflow-using-webdriver?u=76281980&t=95)** and I can send the keys, [John](../../Glossary/Tool/John%20the%20Ripper.md). Then let's go back to the test application and inspect the last name which has an ID of last-name. I can say driver.fingElement, by ID, and go ahead and past in that last-name ID, and send keys of Doe, or whatever keys that you like. Next, I'll move down to inspect the job title field. Which I see has an ID of job title. And I can say driver.findElement, by ID, and paste in that job-title. And then go ahead and send the keys. I'll just send the keys of my job title, which is a QA Engineer. And then let's go back over to the test application again and inspect these radio buttons for the highest level of education. And I see that this radio button is defined as an input type and has an ID, a label, a value. So, I'll go ahead and inspect the second one. I see that it's pretty much the same. And so, I'll go ahead and grab this radio button here. I can say driver.findElement, by ID, radio-button-2, and then I want to click on that radio button. Next, going back over to the text application, I will select my sex, which is female.
>
> **[3:09](https://www.linkedin.com/learning/selenium-essential-training/automate-a-workflow-using-webdriver?u=76281980&t=189)** So I will go ahead and copy this ID of checkbox-2 and then I can go back to the test and say driver.findElement, by ID, of checkbox-2. And then I'll want to click on that check box as well. Alright, so next is a select menu, which we have not encountered before in this class. And this select menu is asking for years of work experience. So let's go ahead and inspect the select menu. And I see that it has a few different options here about years of experience. So, what I can do is to use the CSS selector to choose one of these options based on the value. So let's just go ahead and say that we wanna choose the first one. So I can define a CSS selector with the tag name as option. And then find the value of one. So going back to the test, that would look like driver.findElement, by, and we're gonna use the CSS selector again, and then in quotes, I can specify option as the tag name, and then specify the value that's equal to one. And then go ahead and close that bracket. And then what I'll want to do is it to click on that option. Alright, so then the last field on this page is a date picker, which we have seen before in this course.
>
> **[4:42](https://www.linkedin.com/learning/selenium-essential-training/automate-a-workflow-using-webdriver?u=76281980&t=282)** And I see it has an ID of datepicker. So I'll copy that and go back to the test and say driver.findElement, by ID, and paste in ID of datepicker. And then what I want to do, if you remember how the date picker works, I need to send keys to this date picker. And any keys are fine here. Just pick some date that is in this format of month, day, and year. And pick some day in the future. And then I'll also need to, after this, close the date picker, since it'll be open. So I have to say driver.findElement, by ID, and I'm gonna use that datepicker ID again. And then I want to send keys of keys.return to close the date picker. Alright, now finally I can click on the submit button here, on the bottom of the page. So let's inspect the submit button. And I see that it has various classes here. So, I'll go ahead and copy all the classes and then I'll decide to just find this button by its CSS selector. Going back to the test on line 30, I'll type driver.findElement, by CSS selector, and I'll go ahead and paste all these classes in here. And then I need to remember to annotate them as classes by adding the dot before each class. And then what I'll do is to click on that button. And then that should complete the form automation here.
>
> **[6:20](https://www.linkedin.com/learning/selenium-essential-training/automate-a-workflow-using-webdriver?u=76281980&t=380)** So, I'll go ahead and right click somewhere in the test and select run Form.main to run the test. And the browser will open, fill out all the details of the form, and the browser will successfully exit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [John](../../Glossary/Tool/John%20the%20Ripper.md) (1)
> **Code Identifiers:** findelement (8), fingelement (1)
> **UI Navigation:** click on (5), checkbox (2), go to (1)
> **Env Vars:** css (5)
> **Definitions:** is a  (3), defined as (1)
> **Cross-References:** go back to (3)
> **CLI Commands:** find (2)
> **Analogies:** such as (2)

#### [Confirm the behavior of the test](https://www.linkedin.com/learning/selenium-essential-training/confirm-the-behavior-of-the-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/confirm-the-behavior-of-the-test?u=76281980&t=0)** - [Instructor] Let's confirm the behavior of our test. After the form is submitted the application redirects to the thanks page shown here. There is a header on this page that says "thanks for submitting your form" and an alert banner which says "the form was successfully submitted". At the end of the test from the last video. I'll confirm that the submission was successful. The first thing we'll want to do before confirming this submission is to add an explicit wait which will wait for this thanks page to appear. I'll need to find a specific element to wait for and I'm gonna chose to wait for this alert banner here. So I'll go ahead and inspect this alert banner and I see that is has a class of alert and alert success, I'll go ahead and just grab the first class of alert and copy that to use in my test in just a minute. Next I'll pop over to IntelliJ and I'll open up the exercise file for this video at chapter six, 0602, start. Once this test is open I'll start by going to build and build the project. And once that's successful I wanna focus on adding the step to wait for the thanks page to appear. I'll need to use a wait here because I'm switching pages in my application and it'll take some time for the new page to load. If you remember when finding an element the default time to wait is zero and it'll likely take a little bit longer than zero seconds for the form to redirect the thanks pages after submitting it.
>
> **[1:32](https://www.linkedin.com/learning/selenium-essential-training/confirm-the-behavior-of-the-test?u=76281980&t=92)** So what I wanna start by doing is to add a wait, so I'll define a new web driver wait object here called wait. The web driver wait method takes the driver as a parameter as well as the maximum time to wait, which I'll define as 10 seconds and then on line 37 I will define a new web element called alert and for this web element I will say wait.untiltheexpectedconditions.visibilityofelementlocated
>
> **[2:10](https://www.linkedin.com/learning/selenium-essential-training/confirm-the-behavior-of-the-test?u=76281980&t=130)** by the class name of alert and then add a semi-colon at the end of that line. So this will wait up to 10 seconds for the alert class to be visible. Next what I'll want to do is to add an assertion. Assertions are used in test to confirm values and behaviors. For this video, I will be using the assertion framework called [JUnit](../../Skills/Software%20Development/JUnit.md), which is a popular framework for [Java](../../Skills/Software%20Development/Java.md) projects. So I wanna start thinking about the actual assertion that I wanna write. Since I'm already focusing on the alert banner and have a web element defined for that a good assertion here would be to confirm the text displayed is equal to the expected text. So while I'm here, I'm gonna go ahead and grab this text which is the expected text to use in an assertion. Going back to the test I'll start by grabbing the text from the alert web element, which will be the actual text that I get from the test. So I'll type string alert text is equal to the web element alert.gettext, which will return a string. And then what I want to do is to actually define my assertion, so line 41 I will type assert equals. Then what I'll do is to paste in the expected text of the form was successfully submitted, add a comma, and then compare that to the actual text of alert text. And I'll add a semi-colon at the end of that line.
>
> **[3:47](https://www.linkedin.com/learning/selenium-essential-training/confirm-the-behavior-of-the-test?u=76281980&t=227)** So now the assertion is complete and my test is finished. I'll go ahead and right click on the test to run form.main and wait for the test to submit the form, go to the thanks page, and confirm that the expected text is equal to the actual text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JUnit](../../Skills/Software%20Development/JUnit.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Tools:** intellij (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Clean up the test](https://www.linkedin.com/learning/selenium-essential-training/clean-up-the-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/clean-up-the-test?u=76281980&t=0)** - [Instructor] Let's focus on cleaning up the steps in the test to make them more readable. Readability of a test is important so that it is clear what the test is doing. I'm going to focus on extracting similar functionality and behavior into methods. The first set of steps that I'll focus on are from lines 19 to 34. All of those steps focus on submitting the form. There are many steps here but I can go ahead and condense those steps down into one single method which can submit the form. To do that, I'll start by copying lines 19 to 34 and then I can cut those lines. And then after the main method of my test, I will declare a new method by typing public static void submitForm, which is the name of the method. And this method will take WebDriver driver as the parameter. In the body of this method, I will paste those lines from above that submit the form. Now going back up to the test, on line 19 I can call submitForm, passing in the driver as a parameter in order to call those lines that will submit the form. Next, I'll copy these two lines, lines 21 and 22, which wait for the alert banner to appear. So I can copy and cut those two lines
>
> **[1:35](https://www.linkedin.com/learning/selenium-essential-training/clean-up-the-test?u=76281980&t=95)** and then go down here under the submitForm method and now I can create a new method called waitForAlertBanner. And I'll do that by typing public static void, and the method name will be called waitForAlertBanner and that also takes the WebDriver driver as a parameter. And in the body of this method, I will paste those two lines from above and I'll choose not to assign the WebElement of alert any longer so I don't need to do that there. And then going back up to the test, on line 21, I can call that method now, waitForAlertBanner and pass in the driver as a parameter. Now, I'll focus on an extraction that I can do for getting the alert text and the assertion. For the assertion specifically, I'll want to leave this in my test and to not extract it out into a method where it's hidden and won't have much visibility. So, I'll decide to extract the line that gets the alert banner text. To do that, I will copy and cut line 23, and then I'll go down and below the waitForAlertBanner method I wanted to find a new method called getAlertBannerText and this method will have a return type of a string as it will be returning the banner text and will take in the driver as a parameter. So let's define that method now by typing public static String
>
> **[3:12](https://www.linkedin.com/learning/selenium-essential-training/clean-up-the-test?u=76281980&t=192)** getAlertBannerText as the name of the method and it will take WebDriver driver as the parameter. And then what I'm going to do is to paste that line that I cut from above and just change a few things around. So, what I want to change first is this alert, which we no longer have that reference to the web element, so I can go ahead and just define that web element again by finding the element by the class name of alert, and then I can get the text there, and then I no longer need to define a string of alert text. I can go ahead and simply return that string message. So then I can go back up to the test, and on line 23 where I'm doing my assertion, I can replace the alert text variable here with my method to get the banner text and pass in the driver there. So notice that with just those few extractions, the main tests looks much cleaner. I can read through it and I can tell that, on line 15, a new instance of the Chrome driver is created, on line 17, the driver navigates to the form page, on line 19, the form is submitted, and then we wait for the alert banner to appear. On line 23, there's the assertion that compares the expected banner alert to the actual banner alert text, and then finally, the test quits on line 25. So, even lower factoring can be done,
>
> **[4:48](https://www.linkedin.com/learning/selenium-essential-training/clean-up-the-test?u=76281980&t=288)** such as paramertizing the methods, but for now, I'll just stop and run the test, and confirm that everything is still working successfully. So I see that the test exits with the code of zero, indicating that the extractions that I have done are all successful and the test is still working as expected.

> [!info]- Semantic Content
>
> **Code Identifiers:** waitforalertbanner (4), submitform (3), getalertbannertext (2)
> **CLI Commands:** make (1), find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Use page objects](https://www.linkedin.com/learning/selenium-essential-training/use-page-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/use-page-objects?u=76281980&t=0)** - [Instructor] I'd like to introduce the concept of page objects. Page objects are very useful in [Selenium](../../Skills/Software%20Development/Selenium.md) tests as they allow functionality to be separated into different classes based on pages or area of functionality in the application. The benefits to this are that it can be easy to organize test code and helps to keep the test class, itself, even more clean and readable. In the last video, I did some refactoring to take all the major steps of the test and extract them into methods. Now, I'm going to extend that example and move these methods outside of the test class and into specific page object classes to demonstrate the page object pattern. I'll start by creating a new directory under the root project of start and I'll right-click and select new directory. And I will call this new directory pages. Then, I'll right-click on this directory and create a new [Java](../../Skills/Software%20Development/Java.md) Class called FormPage. In this page object class, I'll want to have the method to submit a form. So I'll hop back over to the form class and what I'll do is I'll copy the submit form method and all of its contents, and cut and paste them into the body of the FormPage class. And be sure to import any necessary classes along with it. Going back to the form test, what I need to do is to create a new object of the form page.
>
> **[1:34](https://www.linkedin.com/learning/selenium-essential-training/use-page-objects?u=76281980&t=94)** So immediately above the submit form method, on line 19, I will say FormPage and create a new form page object called formPage and that is equal to new FormPage();. And then, immediately before calling the submit form method on line 20, I can say formPage.submitForm, in order to call this method now directly from the FormPage test class. Next, I'll create a new page called confirmation page, which will have all the functionality after submitting the form. So I'll go up to pages, right-click, select a new Java Class called ConfirmationPage. And that will go ahead and create that new class for me. Then, I'll want to just briefly go back to the form test and I will copy and cut these two methods to await for the alert banner and to get the alert banner text. And then, going back to the ConfirmationPage, in the body of this class, I will paste those two methods and import any necessary classes. Then, I'll go back over to the form test and I need to do the same thing that I just did with the FormPage and create a new object of the ConfirmationPage.
>
> **[3:00](https://www.linkedin.com/learning/selenium-essential-training/use-page-objects?u=76281980&t=180)** And then, I can use that object to call the methods on that page. So I will type on line 23, confirmationPage.waitForAlertBanner, and then before calling getAlertBannerText on line 25, I'll call confirmationPage.getAlertBannerText. And now, that's it. Using the page object pattern can be easy and can help clean up the test even more and to make it more readable by creating a separation of the test class and its associated code. So now I'm just gonna go ahead and right-click to run the test class and to ensure that everything is still passing successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Selenium](../../Skills/Software%20Development/Selenium.md) (1)
> **Code Identifiers:** formpage (2), confirmationpage (2), getalertbannertext (2), submitform (1), waitforalertbanner (1)
> **UI Navigation:** right-click (4)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)


### 7. Project Integration

[↑ Back to Table of Contents](#table-of-contents)

#### [Connect to GitHub](https://www.linkedin.com/learning/selenium-essential-training/connect-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/connect-to-github?u=76281980&t=0)** - It's a good idea to connect a project to a source control repository. This way the project is hosted on the web and isn't contained to one machine. It is good for collaboration, by allowing the project to be shared and worked on with others. It also helps to allow further integrations with the WebDriver project, such as connecting it to a [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) server to run test every time code changes in the repository. I'll demonstrate setting up the exercise files directory, with [Git](../../Skills/Software%20Development/Git.md) and [GitHub](../../Skills/Software%20Development/GitHub.md). In order to do this, it's necessary to have Git. If you don't already, it can be downloaded from [git-scm.com/downloads](https://git-scm.com/downloads) which is shown here. And if you're not sure whether or not you have Git, from the terminal you can type, git space dash dash version, which will spit out a version if you already have Git installed or an error if you do not. Once Git is installed on your system, you'll want to navigate to where the exercise files are on your computer. On my computer, they're on my desktop. So once you're at that location, you can type git space init in order to create a new Git repository. Next, you'll want to create a new GitHub repository. You'll need to first make sure you have a GitHub account. If you don't you can go to [GitHub.com/join](https://GitHub.com/join), and fill out a short form to create a new account. Once logged into GitHub, you'll want to create
>
> **[1:34](https://www.linkedin.com/learning/selenium-essential-training/connect-to-github?u=76281980&t=94)** a new repository. From the home page, in the upper right hand corner, select the plus sign and then new repository. This will allow you to create a new repository by giving the repository a name first. And this will be a public repository. And then that's all we need to do. So I'll press the create repository button, which will then create the repository and take me to that home page. Once there I'm gonna choose the instructions to push an existing repository from the command line. So I'll first need to add a remote, which will allow me to set up a URL in a location to send code to GitHub. Going back to the terminal, I want to paste that line to add the origin, and then I can confirm my remote was added by typing, git space remote space dash v. And that will print out the location of my remote. Then I can also type, git status, and I see that I have untracked files that I must add and commit. To add all the files, I'll type, git space add space dash dash all, to add all the files, and then I will commit the files by typing, git space commit space dash m and in quotes i'll call this commit, "Initial commt", which is the commit messaage, and now I can go ahead and push up all these changes
>
> **[3:09](https://www.linkedin.com/learning/selenium-essential-training/connect-to-github?u=76281980&t=189)** locally to GitHub by typing, git push origin master. So this is pushing all of my local changes up to that remote. That will just take a few minutes. Once that's finished, I can go back to the GitHub repository and refresh the page, and now I can see that I have all of my files from that initial commit in GitHub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (14), [GitHub](../../Skills/Software%20Development/GitHub.md) (9), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1)
> **CLI Commands:** git (14), make (1)
> **Tools:** github (9), terminal (2), command line (1)
> **UI Navigation:** navigate to (1), go to (1), select the (1)
> **Prerequisites:** you'll need (1), make sure you have (1), set up (1)
> **URLs:** [git-scm.com](https://git-scm.com) (1), [github.com](https://github.com) (1)
> **Exercise Files:** exercise files (2)
> **Env Vars:** url (1)

#### [Setup CI](https://www.linkedin.com/learning/selenium-essential-training/setup-ci?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/setup-ci?u=76281980&t=0)** - [Instructor] [Selenium](../../Skills/Software%20Development/Selenium.md) Grid is a proxy server that routes commands to remote browser instances. It spreads the load of testing across several machines, and those machines can run different browsers and browser versions, and different platforms as well. With Selenium Grid, one server acts as the hub, and routes [JSON](../../Skills/Web%20Development/JSON.md) formatted test commands to one or more registered grid nodes to access browser instances. A hub is a central point from where tests are executed. A hub also provides a list of servers that provide access to browser instances or web server nodes. Nodes are where tests are run. Each node is a machine that has their own individual Selenium instances. Selenium Grid is great, because it allows running tests in parallel on multiple machines and the ability to manage different browser versions and browser configurations centrally. To use Selenium Grid, you first need to download the Selenium stand alone server from [selenium.dev/downloads](https://selenium.dev/downloads) as shown here. Once I'm at the download page, I'll scroll down until I get to Selenium Server Grid, and then I want to choose to install the latest stable version, so I'll click on that and wait for the download to install, and select yes that I want to keep this jar file. So when that's downloaded, next I want to use the Selenium server stand alone to start up a hub. So once I'm at my terminal, I need to make sure that I'm at the location where the jar file is downloaded, so for me that's my downloads directory. So I can cd to the downloads directory, and then once there, I'm going to execute the Selenium server stand alone jar to start a hub.
>
> **[1:34](https://www.linkedin.com/learning/selenium-essential-training/setup-ci?u=76281980&t=94)** So to do that, I can type [Java](../../Skills/Software%20Development/Java.md) space dash jar selenium server stand alone dash 3.141.59, which is the version that I just downloaded, but note this might be different for you, depending on what version that you have downloaded. And then I need to specify the role of the hub to specify that I want to start up a hub, so I see some terminal output. I see the Selenium Grid hub is up and running, that nodes should register to this address, and that clients should connect to this address. So let me go ahead and copy this address here, just the IP address and the port. And going back up to my browser, I'm going to open up a new tab and after the port number, I'm going to specify dash grid dash console to go ahead an open up the grid console. So this confirms that the hub is successfully up and running, and there's not a lot here right now that is very interesting. I just see basically the version that I'm running and config, but next what I want to do is to register a node to this hub, and then I'll be able to see the nodes appear here. So going back to my terminal, I want to open up a new tab, and make sure that I'm, and again, in the same directory as the Selenium server stand alone, so just to be sure, I can cd to the downloads directory, and once I'm there I'm going to type java space dash jar selenium server dash stand alone dash 3.141.59 dot jar, and I'm going to specify the role is the node,
>
> **[3:07](https://www.linkedin.com/learning/selenium-essential-training/setup-ci?u=76281980&t=187)** and I want to register this to my hub. So for this, I'm going to go ahead and paste in that address for where my hub is registered, and then I can press enter. And I see that some output is printed here. Towards the bottom I see that we are registering the node to the hub at this address, and that the node is registered to the hub and ready to use. Switching back over to my first terminal window, where I'm running the hub, I see that a new node was registered at this location. Now once I go back to the Grid Console, and refresh the page, I see that there is a node there with a default configuration of five Firefox browsers, a Safari browser, and five Chrome browsers. And with that, I'm able to start running tests against this local instance of my Selenium Grid. So that's how easy it is to set up a local instance of Selenium Grid, and get started with running tests. So I want to point out a couple more interesting things to know about the grid. The first is that you will have to maintain your own infrastructure. And you will have to set up the hub and nodes manually. This can become time consuming, depending on the amount of nodes that you want to configure. In addition, you will also need to determine if you will use physical infrastructure, or virtual infrastructure to host the grid. Depending on the resources that you have allocated, I encourage you to try out setting up a hub and nodes yourself to determine if using the grid is right for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (16), [Java](../../Skills/Software%20Development/Java.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** node (7), make (2), cd (2)
> **Tools:** terminal (4), firefox (1), safari (1)
> **Prerequisites:** install (2), set up (2), configure (1)
> **Definitions:** is a  (4)
> **Versions:** 3.141.59 (2)
> **UI Navigation:** scroll down (1), click on (1)
> **URLs:** [selenium.dev](https://selenium.dev) (1)

#### [Run in CI (continuous integration) servers](https://www.linkedin.com/learning/selenium-essential-training/run-in-ci-continuous-integration-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/run-in-ci-continuous-integration-servers?u=76281980&t=0)** - [Instructor] [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) is your friend. It provides continuous feedback that tests are working and validates that the functionality of the application is working as expected. Luckily, there are many continuous integration servers that integrate well with [Selenium](../../Skills/Software%20Development/Selenium.md) WebDriver and can be run automatically on a regular basis. I want to share a few continuous integration servers that I recommend. First up, there's CircleCI. CircleCI is a cloud service that supports [GitHub](../../Skills/Software%20Development/GitHub.md) projects and all major programming languages. CircleCI is a flexible tool that offers support to run jobs concurrently up to 16 parallel builds, each isolated in their own container. The basic plan is free to get started with. Next up is [Jenkins](../../Skills/DevOps/Jenkins.md). Jenkins is a great open-source CI tool written in [Java](../../Skills/Software%20Development/Java.md) that can be hosted locally or remotely. It is a cross-platform tool that offers configuration both through a GUI interface as well as console commands. It remains to be one of the best solutions out there, although setting up Jenkins does require some expertise. TeamCity is another popular option. It is from the JetBrains company, which has built other great tools, such as Intellij. TeamCity offers all of its features in its free version, and in addition, it's a great solution for enterprise needs as well. And then there's Travis CI. It's one of the oldest CI servers around and offers both hosted and on-premise variants.
>
> **[1:35](https://www.linkedin.com/learning/selenium-essential-training/run-in-ci-continuous-integration-servers?u=76281980&t=95)** It's free for all open-source projects hosted on GitHub and for the first 100 builds. Travis CI is a mature solution that is used and loved by many teams. So, in terms of picking a CI server, it's all about looking at certain factors like infrastructure cost, the ease of setup, maintenance needs, and flexibility to run tests in various configurations. I recommend choosing a CI server based on the criteria that matter most to you and your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (3), [Jenkins](../../Skills/DevOps/Jenkins.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Selenium](../../Skills/Software%20Development/Selenium.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Definitions:** is a  (5)
> **Tools:** github (2), intellij (1)
> **Env Vars:** gui (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Use cloud-based testing tools](https://www.linkedin.com/learning/selenium-essential-training/use-cloud-based-testing-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/use-cloud-based-testing-tools?u=76281980&t=0)** - [Instructor] Cloud-based test tools allow for hundreds of thousands of combinations of cross-browser, cross-device, and cross-platform testing. It's an alternative for building out your own [Selenium](../../Skills/Software%20Development/Selenium.md) Grid infrastructure where you don't have to worry about maintaining that infrastructure yourself. With cloud-based test tools, [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) can be spun up on demand with a certain set of specifications, run test, and then shut down. The cloud-based test tool that I recommend using is Sauce Labs, which you can learn more about on their website, shown here at [saucelabs.com](https://saucelabs.com). It is easy to set up and offers great support. In addition, Sauce Labs offers the following advantages. It supports all major programming languages. It allows for real device testing in addition to using emulators. It is also a great option to run Selenium test and integrates well with major CI servers, like the ones I mentioned in the last video. Sauce Labs is also super easy to set up in your project. All you need to do is specify your Sauce username, Sauce access key, and URL to spin up a new virtual machine to specified capabilities, and then those are used to create a new remote WebDriver. I'll take a minute to show an example test now. At the beginning of the test, I define my Sauce username, access key, and URL, which is just a combination of the username and access key, to set up a Grid instance built by Sauce Labs.
>
> **[1:34](https://www.linkedin.com/learning/selenium-essential-training/use-cloud-based-testing-tools?u=76281980&t=94)** Then, in the test, lines 14 through 16, I define capabilities for my ChromeDriver, such as the platform and version to run. Then, in line 18, I create a new instance of a remote WebDriver by passing in the URL and capabilities. Then after that, the test can continue to run just as it did locally, but on a Sauce Labs virtual machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (2), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1)
> **Env Vars:** url (3)
> **Prerequisites:** set up (3)
> **URLs:** [saucelabs.com](https://saucelabs.com) (1)
> **Cross-References:** in the last (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/selenium-essential-training/next-steps-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/selenium-essential-training/next-steps-2?u=76281980&t=0)** - [Instructor] Thank you so much for watching my course on the essentials of [Selenium](../../Skills/Software%20Development/Selenium.md). I have shared the fundamentals of the Selenium project, and how to get more acclimated with the web driver API and functionality. I have demonstrated different strategies to use locators in test, and tips for automating various components. I've also touched on how to account for timing issues within the web driver test, and suggestions for test optimizations and integrations that you can set up with Selenium. My hope is that you have a deeper understanding of Selenium, and are excited about going out and writing automated tests with Selenium in the future. To continue to advance your skills using Selenium, I encourage you to write more automated tests with WebDriver. Feel free to use the test application in this course, or a web application of your choice. I also encourage you to connect with the Selenium community, either online, via meetups, or at their conferences, which are held twice a year. If you'd like to continue learning about all that Selenium has to offer, I recommend that you refer to their documentation at www.[selenium.dev](https://selenium.dev). I also recommend that you refer to their documentation on the SeleniumHQ website hosted on [GitHub](../../Skills/Software%20Development/GitHub.md). There, at the wiki you can see lots of helpful information. You can reach that at [github.com/seleniumhq/selenium/wiki](https://github.com/seleniumhq/selenium/wiki). If you'd like to contact me, I'd enjoy hearing from you or answering any questions you might have. You can reach me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), on [Twitter.com](https://Twitter.com),
>
> **[1:36](https://www.linkedin.com/learning/selenium-essential-training/next-steps-2?u=76281980&t=96)** or on my website at [meaghanlewis.com](https://meaghanlewis.com). Cheers, see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (10), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **URLs:** [selenium.dev](https://selenium.dev) (1), [github.com](https://github.com) (1), [twitter.com](https://twitter.com) (1), [meaghanlewis.com](https://meaghanlewis.com) (1)
> **Tools:** github (2)
> **Env Vars:** api (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Meaghan Lewis](../../Instructors/Software%20Development/Meaghan%20Lewis.md)

## Resources

- Exercise files available

## Skills Covered

- Selenium
- Test Automation

## Path Context

### In [TestMu AI Test Automation Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/TestMu%20AI%20Test%20Automation%20Professional%20Certificate.md)
← [Test Automation Foundations](Test%20Automation%20Foundations.md) | **2 of 2**

## Part of

- [TestMu AI Test Automation Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/TestMu%20AI%20Test%20Automation%20Professional%20Certificate.md)

## Appears In

- [TestMu AI Test Automation Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/TestMu%20AI%20Test%20Automation%20Professional%20Certificate.md)

## Related Courses

_Courses sharing skills:_

- [Learning Selenium- Structure, Scale, Run, and Optimize Automated Tests](Learning%20Selenium-%20Structure%2C%20Scale%2C%20Run%2C%20and%20Optimize%20Automated%20Tests.md) — Test Automation, Selenium
- [Postman Essential Training](Postman%20Essential%20Training.md) — Test Automation
- [Advanced Playwright Techniques- Optimizing Speed, Stability, and Cloud Testing](Advanced%20Playwright%20Techniques-%20Optimizing%20Speed%2C%20Stability%2C%20and%20Cloud%20Testing.md) — Test Automation
- [Playwright- Design Patterns](Playwright-%20Design%20Patterns.md) — Test Automation
- [Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios](Playwright%20Essential%20Training-%20Abstractions%2C%20Fixtures%2C%20and%20Complex%20Scenarios.md) — Test Automation

---

[↑ Back to top](#)