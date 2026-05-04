---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-selenium-structure-scale-run-and-optimize-automated-tests
url: "https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests"
duration_minutes: 76
duration: 1h 16m
level: Beginner
updated: 8/15/2025
learners: 3028
skills:
  - Selenium
  - Test Automation
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-selenium-structure-scale-run-and-optimize-automated-tests-5989088/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGblcfQboVDhA/learning-public-crop_675_1200/B56ZiFYB7uH0AY-/0/1754584326185?e=2147483647&amp;v=beta&amp;t=NjRx9jtLJZh04d4RmoKVzN2MizAHQUlChsJ0460S6Gw"
linkedin_topic: Software Development
learning_paths:
  - '[Getting Started with Software Testing](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20with%20Software%20Testing.md)'
prev_courses:
  - '[Software Testing- Planning Tests for Mobile](Software%20Testing-%20Planning%20Tests%20for%20Mobile.md)'
next_courses:
  - '[Learning Playwright](Learning%20Playwright.md)'
path_nav: '[{"path":"Getting Started with Software Testing","position":5,"total":12,"prev":"Software Testing- Planning Tests for Mobile","next":"Learning Playwright"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/selenium
  - skill/test-automation
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Learning%20Selenium-%20Structure%2C%20Scale%2C%20Run%2C%20and%20Optimize%20Automated%20Tests.md)

![Learning Selenium: Structure, Scale, Run, and Optimize Automated Tests](https://media.licdn.com/dms/image/v2/D560DAQGblcfQboVDhA/learning-public-crop_675_1200/B56ZiFYB7uH0AY-/0/1754584326185?e=2147483647&amp;v=beta&amp;t=NjRx9jtLJZh04d4RmoKVzN2MizAHQUlChsJ0460S6Gw)

# Learning Selenium: Structure, Scale, Run, and Optimize Automated Tests

> In this course, Playwright test automation specialist Qambar Raza guides you through the essentials of Selenium, a cornerstone of browser test automation, including how to write and run tests on both local machines and cloud-based platforms like GitHub Actions. Learn how to set up Selenium, grasp the intricacies of debugging, and capture evidence of test failures using screenshots. Gain proficienc

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests) | 1h 16m | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learn Selenium for testing](#learn-selenium-for-testing)
  - [What you should know](#what-you-should-know)
  - [Selenium vs. modern frameworks](#selenium-vs-modern-frameworks)
- [**1. Getting Started with Selenium**](#1-getting-started-with-selenium) (10 videos)
  - [Setting up the Selenium framework for macOS](#setting-up-the-selenium-framework-for-macos)
  - [Setting up the Selenium framework for Windows](#setting-up-the-selenium-framework-for-windows)
  - [Write your first Selenium test](#write-your-first-selenium-test)
  - [Locate elements with confidence](#locate-elements-with-confidence)
  - [Waiting strategy: Page load strategy](#waiting-strategy-page-load-strategy)
  - [Waiting strategy: Elements](#waiting-strategy-elements)
  - [Run tests headlessly](#run-tests-headlessly)
  - [Build the framework foundation](#build-the-framework-foundation)
  - [Challenge: Fix a failing test](#challenge-fix-a-failing-test)
  - [Solution: Fix a failing test](#solution-fix-a-failing-test)
- [**2. Structuring Your Tests**](#2-structuring-your-tests) (7 videos)
  - [What is a page object model (POM)?](#what-is-a-page-object-model-pom)
  - [Create a POM](#create-a-pom)
  - [Implement a POM in a test](#implement-a-pom-in-a-test)
  - [Data-driven testing](#data-driven-testing)
  - [Organize tests with tags](#organize-tests-with-tags)
  - [Challenge: Refactor POM function](#challenge-refactor-pom-function)
  - [Solution: Refactor POM function](#solution-refactor-pom-function)
- [**3. Running Tests at Scale**](#3-running-tests-at-scale) (5 videos)
  - [Test across browsers locally](#test-across-browsers-locally)
  - [What is Selenium Grid?](#what-is-selenium-grid)
  - [Run tests using Selenium Grid](#run-tests-using-selenium-grid)
  - [Run tests in parallel](#run-tests-in-parallel)
  - [Use GitHub Codespaces for test dev](#use-github-codespaces-for-test-dev)
- [**4. Enhancing Tests with Modern Tools**](#4-enhancing-tests-with-modern-tools) (5 videos)
  - [Capture screenshots on failure](#capture-screenshots-on-failure)
  - [Mock APIs with WireMock](#mock-apis-with-wiremock)
  - [Run tests in CI with GitHub Actions](#run-tests-in-ci-with-github-actions)
  - [Challenge: Run tests in CI with GitHub Actions](#challenge-run-tests-in-ci-with-github-actions)
  - [Solution: Run tests in CI with GitHub Actions](#solution-run-tests-in-ci-with-github-actions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn Selenium for testing](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/learn-selenium-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/learn-selenium-for-testing?u=76281980&t=0)** - If you want to become a software tester or just sharpen your skills with a tool trusted across the industry, then this course is for you. I've used [Selenium](../../Skills/Software%20Development/Selenium.md) on real world projects like publishing project, like BBC blogs or appointment booking systems, and I still use it today. Selenium has powered browser [Test Automation](../../Skills/Software%20Development/Test%20Automation.md) for over a decade now. Engineering teams at big tech companies like [Google](../../Glossary/Service/Google.md), Netflix, BBC, they all use Selenium as their go-to framework. I'll help you with everything step by step. We'll write real world test scripts together, run them on [GitHub](../../Skills/Software%20Development/GitHub.md) actions, capture screenshots on failure, and structure your test like a pro using page object models. This course gives you everything you need to build reliable professional grade UI tests. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (3), [Test Automation](../../Skills/Software%20Development/Test%20Automation.md) (1), [Google](../../Glossary/Service/Google.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** bbc (2)
> **Tools:** github (1)
> **Speakers:** - if (1)

#### [What you should know](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=0)** - [Narrator] Before we dive in, let's make sure we are all on the same page. You'll need a basic sense of how automated test works, the kind where you write assertions, pick elements on a page and structure your test in a way that makes sense. If you have ever written a simple test before, you are good. And about [Java](../../Skills/Software%20Development/Java.md), don't worry. You don't need to be a Java expert. We'll keep things clean and focused on test logic, not language tricks. Just enough Java to get our tests running. Finally, if you have heard of CI/CD pipelines, even at a higher level, that will come in handy when we write our tests in [GitHub](../../Skills/Software%20Development/GitHub.md) actions, but I'll walk you through it when we get there. No stress. In this course I'm going to show you how to set up [Selenium](../../Skills/Software%20Development/Selenium.md) on both [Windows](../../Glossary/Service/Windows.md) and Mac, the main difference, just a set of steps. I'll guide you through each one, so no matter what machine you're on, you'll be ready. And once that's done, everything else, the way you write tests, run them, debug them. That's the same across both. If you have taken my Playwright [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) or advanced Playwright courses, this will feel familiar. We are bringing those same ideas, solid structure, reliable tasks, scalable frameworks into the Selenium world. And to make life easier, I've set up a GitHub repository with everything you need, code, configs, examples. You'll find links in the resources, and it's all organized chapter by chapter so you can follow along or build your own flavor of the project. Are you ready? Let's jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Selenium](../../Skills/Software%20Development/Selenium.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **CLI Commands:** make (2), cd (1), find (1)
> **Prerequisites:** set up (2), you'll need (1)
> **Tools:** github (2)
> **Speakers:** - [narrator] (1)

#### [Selenium vs. modern frameworks](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=0)** - [Narrator] Even in the world of Playwright, Cypress, and Puppeteer, [Selenium](../../Skills/Software%20Development/Selenium.md) still matters. Let's talk about why. Selenium isn't just another tool in the automation space, it's the backbone. Fortune 500 companies still rely on it for mission-critical tests. It's backed by W3C, which means it follows [Web Standards](../../Skills/Web%20Development/Web%20Standards.md). And it integrates smoothly with [Jenkins](../../Skills/DevOps/Jenkins.md), [GitHub](../../Skills/Software%20Development/GitHub.md) Actions, and just about any CI/CD pipeline you can think of. Even tools like Appium, BrowserStack, and Sauce Labs, they're all built on Selenium. This is the foundation worth mastering. If you're working in a large team, Selenium's probably already there. It supports every major browser, including those older ones like Internet Explorer that some industries still depend on. It doesn't matter whether your team codes in [Java](../../Skills/Software%20Development/Java.md), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), or C#, Selenium fits in right, and it scales beautifully whether you are testing on mobile, in the cloud, or in industries where reliability and compliance are non-negotiable. Think [Banking](../../Skills/Software%20Development/Banking.md), healthcare, government. And what about those modern tools? Playwright is fast and powerful, but no support for older browsers like Internet Explorer. Cypress is super easy to pick up, but it's limited to Chromium and [JavaScript](../../Skills/Software%20Development/JavaScript.md). Puppeteer, fantastic for Chrome-specific tasks, but not built for full QA pipelines. Each has limits, Selenium doesn't.
>
> **[1:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=94)** Here's the real value. When you learn Selenium, you're not just learning a tool, you're learning how browser automation works at its core. That makes it easier to pick up any other framework down the line because you'll understand what's happening behind the scenes. You'll know how to design tests that scale across teams, platforms, and [products](../../Skills/Software%20Development/Microsoft%20Products.md). And you'll be ready for a wider range of roles, from QA to [DevOps](../../Topics/DevOps.md) to test engineering. So if you are here right now, you are on the right track. This course will give you the rock solid foundation in Selenium, and that foundation, it will support you no matter which tool you choose next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (8), [Web Standards](../../Skills/Web%20Development/Web%20Standards.md) (1), [Jenkins](../../Skills/DevOps/Jenkins.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** cd (1), python (1)
> **Env Vars:** w3c (1)
> **Documentation:** w3c (1)
> **Tools:** github (1)
> **Speakers:** - [narrator] (1)


### 1. Getting Started with Selenium

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up the Selenium framework for macOS](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=0)** - [Instructor] Let's set up IntelliJ IDEA, download [Java](../../Skills/Software%20Development/Java.md) 21 and build a Maven-based project on your machine. So head over to [jetbrains.com/idea/download](https://jetbrains.com/idea/download) and click on Mac OS if you're downloading it from Mac OS. And scroll down to select the community edition, which is free. Click on download and it'll start downloading the DMG file. Once that DMG file is downloaded, all you need to do is click and then drag the application icon into your applications folder. I've already done that, so I'm going to skip that part. After successfully installing and launching IntelliJ, you will see this welcome screen. Click on New project. Make sure the build system is selected as Maven so click on that. In your JDK, click on the dropdown menu, click on Download, and we will be installing the Java version 21 because it has got a long-term support. Click on Select and click on Create after. Once you do that, you will see a Maven file, which is a pom.XML, our main.Java, and the pom.XML will show you that you're using Java Version 21. Head over to the main.Java file, click on the play button at the top and see if it runs. You'll see the code running and the output of the code in the window below, which is "Hello" and "Welcome" and the values of I from one to five.
>
> **[1:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=93)** That means that you have set this up correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (5)
> **UI Navigation:** click on (9), scroll down (1), select the (1), dropdown (1)
> **Env Vars:** dmg (2), xml (2), idea (1), jdk (1)
> **File Paths:** pom.xml (2), main.java (2)
> **Versions:** version 21 (2), java 21 (1)
> **Tools:** intellij (2)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)

#### [Setting up the Selenium framework for Windows](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=0)** - [Instructor] To install IntelliJ IDEA and download [Java](../../Skills/Software%20Development/Java.md) 21 and build a Maven-based project on your [Windows](../../Glossary/Service/Windows.md) machine, head over to [jetbrains.com/idea/download](https://jetbrains.com/idea/download) and click on Windows. Here, you will see two options, one to download IntelliJ IDEA Ultimate edition, which is a paid version, another one if you scroll down is a Community Edition, which is free. Click on Download and it will be downloaded in your browser. Once it downloads, head over to the Downloads section and double click on the installation to run the installer. The process for installing is same as any other Windows application. Just click on, Yes. Next, Next, Next, Finish. Click on all of these options that you see on your screen to ensure that all of these files are now associated with the IntelliJ IDEA. Click on Install, and it will install the IntelliJ IDEA on your machine. So I'm going to pause the video while it installs so that you can see what happens after the installation and not the progress bar. After it finishes installing, it will ask you to reboot. Click on Reboot and click on Finish. Once your computer has restarted, run the IntelliJ and you will see the screen. Click on Confirm, Continue, Don't Send, and you will see the welcome screen. On this welcome screen, click on the New Project,
>
> **[1:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=95)** select the build system as Maven, go to dropdown for JDK, and click on Download. Now here, we will be using the version number 21, which is the latest long-term support version, and click on Select. Let's click on Create now. This will create a Maven-based Java project on your IntelliJ with Java version 21. And as you can see, it is downloading the ms-21 and doing some background task, which is downloading the JDK behind the scenes. It will automatically set up everything for you, and all you need to do is click on the Play button to verify your setup once it has finished installing. So I'm going to go to the Main.java, and I'll wait for it to finish scanning files, set up the project and wait for this green button to appear. Now you can see the green button is there. I will click on Play. It will start resolving the Maven dependencies, set up the project. The Play button might not work on the first click, so don't worry about it. Just wait for the resolving of the dependencies to finish. As you can see, it is doing a build and downloading Maven plugins, which will allow us to run this project. Now as you can see, my Play button has worked.
>
> **[3:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=191)** The output on the screen is there, which says, "Hello and welcome," and it shows the indexes from i to one to i = 5, which means you have done the set up properly. Great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4), [Windows](../../Glossary/Service/Windows.md) (3)
> **UI Navigation:** click on (15), go to (2), scroll down (1), select the (1), dropdown (1)
> **Prerequisites:** set up (4), install (3), setup (1)
> **Env Vars:** idea (4), jdk (2)
> **Tools:** intellij (6)
> **Versions:** java 21 (1), version 21 (1)
> **Definitions:** is a  (2)
> **File Paths:** main.java (1)

#### [Write your first Selenium test](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=0)** - [Instructor] Let's build on top of the code base that we created in the last video. So we have set up a Hello World code base when we were setting up the IntelliJ. So we have got the main file, we have got a pom file. So I will go to the folder called test here. And in this test folder, I will create a file called FirstSeleniumTest. This is where we will start writing the test, but before we write the test, I want to make sure that I've got the right dependencies in place. So I will go to the pom.xml file, here, I will add the three important dependencies. So the first dependency that I need is called [Selenium](../../Skills/Software%20Development/Selenium.md), obviously, because this is a Selenium course, so we will get the Selenium. Second dependency that I need is the web driver manager. So I don't want to manage every browser myself. I will delegate that responsibility to the web driver. The third important dependency is the [JUnit](../../Skills/Software%20Development/JUnit.md). So using the Junit, I would be able to use the asserts, assertions, and assert equals all those terminologies, which are very standard, so Junit and Jupiter. So there you go. I've got three dependencies. Now I will also acquire a plugin, which is the Surefire plugin to tie everything together. So plugins and plugin,
>
> **[1:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=95)** and the syntax is very similar for the plugin, you just need group ID artifact and version. So I need a Maven Surefire plugin, and the version that I need is 3.2.5, and the group ID would be org.apache.maven.plugins. Now when you do this, it would highlight these things in web because you haven't installed the dependencies before. So just click on this icon, which is Maven Sync Changes. If you can't see this icon, click on this M and then click it over here. That will sync and download all these dependencies for you. Now if I go to my first Selenium project here, I can start writing my first test. So my first test would be checking the page title, so add a test and the page title, so public void checkPageTitle, and I would be using WebDriverManager, so chromeDriver.setup. And from webDriver, I will use Driver and use a ChromeDriver from there. So once I've got the driver, I'm going to visit the [practicesoftwaretesting.com](https://practicesoftwaretesting.com). So [practicesoftwaretesting.com](https://practicesoftwaretesting.com). And I'm going to check the page title. So assertEquals, I don't know the correct title yet,
>
> **[3:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=192)** and the actual title, I can get it from driver.getTitle. And then I want the driver to close the browser. So driver.quit. Now you can see that it's complaining about assertEquals, but it has got all the other imports. So I'm going to manually import the assertEquals. So import static_org.junit.jupiter.api.assertions, and here you can call in any assertion you need. And now it has satisfied assetEquals. I can click this Play button to run this test, which will open the browser, check the [practicesoftwaretesting.com](https://practicesoftwaretesting.com), and behind the scenes it will fail the test saying I expected nothing, but I got this as a page title, so I'm going to copy this page title, paste it over here because I know this is the correct title. I will rerun the test and the test passes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (4), [JUnit](../../Skills/Software%20Development/JUnit.md) (4)
> **Code Identifiers:** assertequals (3), checkpagetitle (1), chromedriver (1), webdriver (1), gettitle (1)
> **UI Navigation:** go to (3), click on (2), open the (1)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (3)
> **CLI Commands:** make (1), apache (1)
> **Definitions:** is called (1), is a  (1)
> **Prerequisites:** set up (1), setup (1)
> **File Paths:** pom.xml (1)

#### [Locate elements with confidence](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=0)** - [Instructor] Targeting the right element is the heart of every reliable [Selenium](../../Skills/Software%20Development/Selenium.md) test. So in this lesson, we will be testing this contact form using Selenium. But before we get into it, I want to show you the Selenium documentation. So this is a Selenium documentation, which talks about locator strategies and it shows you the traditional locators. The main keyword over here is the buy keyword. So as you can see, if I scroll down, if I want to get any element, I'm getting it using buy and then the type that I want to use, ID or name or tag or link text, et cetera. So let's try this ourself in our code. So for this lesson, I'm just going to get the heading contact and I'm going to just check this heading is correct. So if I do inspect element over here. You can basically get it in the browser console by doing document.getElementByTagName. And the tag name for that is H3 and that could be more than one H3 so I want to select the first one. So you can see it brings me that if I do inner [HTML](../../Skills/Web%20Development/HTML.md), I can see what's inside that tag. Now we will do this same thing using Selenium. Let's build on top of the code that we have already written in the previous video. So previously we checked the page title. In this test, we will check the tag name. So checkContactHeading().
>
> **[1:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=100)** And here, we will basically get that web element. So first we need to go to the right page. So I'm going to go to the page, which is the contact. So page name will change. Second is, I've got a web element, which is a heading. So using the driver, I'm going to find element by tag name. And the tag name was H3 on the page. Now you can see web element is red so I'm just going to import that class and it'll automatically do it for me as you can see here. Now that I've got the element, let me terminate that statement. I can get the heading text. HeadingText = heading.getText(). Now I can compare this heading text, which is, this is the actual, and this is where I should be adding contact, but I want a test to fail to show you that is working. So I'm not putting anything there. So let's run it. So it ran two tests. The first test passed and the second test failed. As you can see over here, the first one was checking the title. Second is saying I expected nothing but I got contact. So if I put contact over here and run this test again, then we should be able to locate the heading contact. And this test should pass.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (5), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **UI Navigation:** go to (2), scroll down (1), select the (1)
> **Code Identifiers:** getelementbytagname (1), checkcontactheading (1), gettext (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** html (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Waiting strategy: Page load strategy](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=0)** - [Instructor] The [Selenium](../../Skills/Software%20Development/Selenium.md) documentation talks about page load strategy in detail, so I don't have to create special slides for this topic. As you can see on my screen, the documentation says there are three types of strategies, which is normal, eager, and none. We will try and implement this in our code. So I'm going to build on top of the code that we had in the previous video. Let's start from there. So as you can see, there is no page load strategy defined, but by default there is a normal strategy. So I'm going to start writing the code to define that normal strategy explicitly. So after you have set up your web driver manager, just open Chrome options, Chrome options, and in here, just create options, which will be Chrome options. One of the options that you can use is called set page load strategy. And here, just set the page load strategy to whatever you want. For example, by default it's normal. I'm just going to put it as normal to just see what happens. And we will pass these options into Chrome driver like this. So I'm going to copy this same thing for the next test, and I'm going to run the test and hopefully because we haven't changed anything in the code, both tests should pass.
>
> **[1:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=96)** Now let's just change this contact heading test and say our page load strategy is none. I'm going to on this test and see what happens. As you can see, this test failed because we were checking an element on the page, but we said our page load strategy is none. So before even the page loaded, we started looking for an element, but the element did not exist. Let's try the same thing here where we are checking the title.
>
> **[2:24](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=144)** The check page title test still passes because title is the first thing which loads when you open the page. So if you want to check the title, you don't need the whole page to be loaded. So the page load strategy none makes sense when you're checking the title, but it doesn't make sense when you're checking the content of the page. Last but not least, if you want to try eager, let's do that as well. Now these are the things that cause the test to become flaky. So you need to decide what is the right strategy, but when you're in doubt, always use normal. So this would be the ideal code or ideal pace strategy for these two tests where both of the tests are passing, check contact heading is passing by using the normal page strategy. Check page title is passing by using none page strategy, and we have optimized this test to run faster because we are not waiting for the whole page to load.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### [Waiting strategy: Elements](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=0)** - [Instructor] Apart from page load strategies, [Selenium](../../Skills/Software%20Development/Selenium.md) also offers element weight strategies. And there are two types of waiting strategies. One is implicit, as you can see in the Selenium docs, and another is explicit. The implicit strategy depends on the browser option timeout, which is by default a zero. So if you remember in the last video, we had a test which was failing when we had the page load strategy set to none. So how do we make this test pass? Well, without changing the page load strategy, I will be using the element load weight strategy to make this test pass. So I'm going to go back to the documentation and copy this line, which is driver manage timeouts implicitly waits. And I'm going to put this over here just before we look for the element. And because this is read, I will highlight a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) and import this class. So now let's see, if I run this test again, both tests are passing because now we're actually waiting for the element to load. And this is an implicit wait. I would advise you over here with my experience to not use this kind of waiting because you don't know how many seconds it would take on the pipeline or someone else's machine, and what would be the internet speed in the home location
>
> **[1:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=96)** or wherever they're running the test from, because it will make the test flaky. But there are use cases for this. Don't completely abandon it, learn about it, but don't use it. Another option that we have got is the explicit wait, which actually waits for the element or some condition to be met. So I'm going to replace this with this wait, and let's import the missing classes. And this reveal is the element. So in our case, the element is the heading. So we can just move this down here because at this point, we have got the heading. I'm going to copy this, paste it over here, and see if our test passes this time. As you can see, that did not work. So if I go to checkContactHeadingTest, it says the element was not found. So we're not waiting for it to be displayed. We are waiting for it to find the element. So I'm going to move this on top over here, and then I'm going to add the weight until at this point. So wait until, and my condition that needs to be met is that element is found. And once the element is found, we can do the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this stuff. So let's find the test again after adding that additional bracket that was missing.
>
> **[3:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=195)** And as you can see, the test is passing, and I don't think we need this anymore because we are not waiting for it to be displayed. We are waiting for it to be found. So I'm going to run this test one more time. There you go. So this is an example of an explicit wait. The previous example was for the implicit wait.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (3), find (2)
> **Cross-References:** in the last (1), go back to (1)
> **Definitions:** is an  (2)
> **Code Identifiers:** checkcontactheadingtest (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Run tests headlessly](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=0)** - [Qambar] So far, in the previous videos, you saw that every time I ran the test, it opened the browser and showed you how the test was running. Like if I click on play right now, it will open the browser and run the test. But sometimes you don't need that. You just need to see the test passes or fails, and you don't want the browser window to open in front of you. So, you can run the test in a headless mode. So, to run the test in the headless mode, I'm just using the code from the previous videos. So, I've already got Chrome options defined. So, I just need to use the Chrome options and pass in an argument. So, I will type options.addArguments, and the argument will be -- headless=new. And because I'm starting a web driver for both the tests, I need to add this to both of these tests. And now if I run the test again, as you can see, no browser window popped up, the test ran and I got the results. This is called headless mode.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (1), open the (1)
> **Code Identifiers:** addarguments (1)
> **Definitions:** is called (1)
> **Speakers:** - [qambar] (1)

#### [Build the framework foundation](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=0)** - [Instructor] If you have been wondering why I have got these setup steps every time I write this test, then you're on the right track. What we will do in this video is we will build a foundation of a framework. We'll create a base file for the test. So right click on the folder, new [Java](../../Skills/Software%20Development/Java.md) class and base test. And we will move these set of steps in here. So let's create a function called public void setup.
>
> **[0:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=32)** And let's move all the set of steps from here into that function. We'll do the same for the teardown, public void teardown. And we will move the teardown steps, which is driver.quit, in here. So this setup should run before the test starts. So I'm going to do add before each, and teardown should run after the test finishes. So I'm going to do add after each. The next thing that I need is the driver to be global so that we can use this in the test. So I will do protected WebDriver driver. And we need to refer to this global driver over here. So I'm going to get rid of this driver from here so that we are referring to the correct driver. You can see all of these are purple, but in first [Selenium](../../Skills/Software%20Development/Selenium.md) test, we have got this as red. So let me just delete the set of steps from here as well, and teardown steps from this test. And you can see all these drivers are red, which means we don't have the driver reference. So I'm going to just do extends BaseTest, and they're all purple now. Now if you look at the base test, we don't need the page load strategy, so I'm going to get rid of that. Now, because we got rid of the page load strategy,
>
> **[2:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=125)** we don't need any weights and we don't need the weight over here as well. We just leave this file with a lot of unused imports. So let's get rid of unused imports from here and from here. Now this test is ready to run. So I'm going to just run this and see what happens. As you can see, both tests ran, both are passing, and the test code looks so much simpler. This means that you can add more tests and just do the things that are necessary within the test body rather than restarting the whole browser, caring about teardown, caring about setup. So this is how you write tests in production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1), [Selenium](../../Skills/Software%20Development/Selenium.md) (1)
> **Prerequisites:** setup (4)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Fix a failing test](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-fix-a-failing-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-fix-a-failing-test?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-fix-a-failing-test?u=76281980&t=5)** - [Instructor] So, here's a challenge for you. Every time I run this test, it says NoSuchElementException. Now, it is complaining about a line in this code, and I don't know how to fix it. Can you help me with that?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Fix a failing test](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980&t=0)** - [Instructor] Now the first thing I will do to fix this test is to find the issue. Now IntelliJ offers me an option to debug or stop the test. So I'm going to just double click over here and add a break point. Second is, I know that this is running in headless mode, so I'm going to change the base test file to not run in headless mode anymore. So I'm going to come in that, and I'm going to go back to the test and click on this bug icon, which will run this test in debugging mode. So it ran the test, it opened the browser, and you can see it is on the contact screen. So I'm going to right click and inspect this element and see what is the selector for this tag. So the select over here is H3, and in my test code it's using H1. So if I stop this test and run the test right now, the test fails saying NoSuchElementException. Now, if I change this tag name to H3 and save it, and then rerun on the test again, it now passes.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Tools:** intellij (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Structuring Your Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a page object model (POM)?](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=0)** - [Instructor] If you're a tester, you must have already heard of this term, POM. POM basically means page object model. It is one of the best practices described on [Selenium](../../Skills/Software%20Development/Selenium.md) website. The page object model is a design pattern that helps us write clean and maintainable Selenium tests. It models each page, a part of a page as a class. This keeps the details like locators and actions out of our test logic, so our test focuses only on what they are meant to verify. With POM, when the UI changes, say a field ID changes, you only update your page class, not every test. This keeps your test code clean and focused, and it works well even as your app grows. This is how the page object model works in practice. Instead of repeating locators and actions across every test, imagine a test suite of like thousand tests, we just define a contact page class that handles everything for this form. The locators map directly to the form fields and button, and the class provides clean methods like fillForm and sendMessage. If anything changes on the page, we update it here in one place. In the next lesson, we'll build this page object in Selenium and run a real test so that you can see how it all fits together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (3)
> **Env Vars:** pom (3)
> **Code Identifiers:** fillform (1), sendmessage (1)
> **Definitions:** basically means (1), is a  (1)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Create a POM](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=0)** - [Instructor] Let's take an example of this test, which you can find in exercise file O2_O2_b in the Branch. We will be refactoring this test to use POM. Right now it doesn't use POM at all, so in the src, main, [Java](../../Skills/Software%20Development/Java.md), I will create a new Java class called ContactPage. So this is my ContactPage POM, and we will bring all the locators from this test into this POM. So, because we are using locators, we don't need the WebElement anymore, we don't need to use the driver find by element here, we will do it inside the actions. So I'm going to get rid of all of this, and the bracket in the end, and change the WebElement to By. And another thing, because these are locators, I'm going to just add Loc in front of them. Another thing, if you go back to the test, there's another locator being used, which is checking the visibility of alert. This is used in a wait, so I will bring this as well inside the POM. So, By alertLoc. You can name it better in your test. For now, we'll use the name, alertLoc. Next we can see we have a function called fillForm. So I'm going to copy that. This is our action, first section, so public void fillForm,
>
> **[1:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=98)** and I'll put everything here. Now instead of first name, we have got firstNameLoc. And if you remember, we had a driver called find by name. So we will use that here within the action. So driver.findElement, and this is firstNameLoc. This will make the sendKeys functionality available to us. We will do the same for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of them. Last name, email, message, and subject. Loc, Loc, Loc, and subjectLoc, and closing bracket. So this function fills the form, but it doesn't take any parameters. We can convert all of these into parameters as well. But before that, let's fix the driver. So the ContactPage needs to have the driver reference available to it. So I'm going to create a global variable called WebDriver driver. And using the constructive for this POM, I will assign the driver the value, which is this.driver is equal to driver. So I've got the ContactPage, I've got the WebDriver. I'm using these drivers over here to fill the form. So that's my fill function. Now let's tackle the next section.
>
> **[3:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=194)** The next section is submit. So I'm going to copy this, public void submitForm, btnSubmit. Now btnSubmit used to have the driver.findElement. So I'm going to copy this from here. Paste it over here. And remember we added the Loc. So driver.findElement, btnSubmitLoc.click. So now we have got the two actions, fillForm, and submit. That completes our refactor for the POM. We need to integrate this POM into the test, which we'll do in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** fillform (3), findelement (3), alertloc (2), firstnameloc (2), btnsubmit (2)
> **Env Vars:** pom (8)
> **CLI Commands:** find (3), make (1)
> **Cross-References:** go back to (1), in the next (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Implement a POM in a test](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=0)** - [Instructor] You've got this POM, how would you use it in the test? Let's check it out. So this is my test, FirstSeleniumTest, where I need to indicate the contact page form. So I'm going to open it on the right-hand side, and I'll move this a little bit around so that we can see it better. Now, on my right, you can see we already have got locators, so we can get rid of that. The first method that we need is the FillForm, which exists inside the POM, so let's create an object for the POM. So new ContactPage. And let's pass in the driver, and it's an object, so let's store it somewhere. ContactPagePom is going to new. ContactPagePom. And we will do our first section, which is fillForm. Now, we don't need any of these. Second action is Submit. So contactPagePom.submitForm. And last but not least, we have got a locator over here. So we will get rid of this and use the locator from contactPagePom.alertLoc. That's everything. So now we are actually using the POM within our test. So let's run the test now. So the test is running in headful mode and you can see it ran successfully and it passed.
>
> **[1:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=95)** That's how you use POM in your test.

> [!info]- Semantic Content
>
> **Code Identifiers:** contactpagepom (2), fillform (1), submitform (1), alertloc (1)
> **Env Vars:** pom (5)
> **Speakers:** - [instructor] (1)

#### [Data-driven testing](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=0)** - [Instructor] So this is my login screen, and I've got these default accounts that I want to try and test with this login screen. Normally you would have to write three different tests by copy pasting this test multiple times and then test it with first customer, then second customer, then third customer. Let's see how this current test works. So this test goes to the login page, enters the data about the user and password, and then waits for the page to load and then checks the title is my account. And let's just see it in action. So I'm going to click on Play. It opens the window, enters the password, and then executes the whole test. So this test is passing right now. It's using two page object models, AccountPage and the LoginPage. AccountPage looks like this, which just checks the page title. LoginPage looks like this, which is just email, password, and button submit. Now if you go back to our test, I want to test it with three different usernames. How would I do that? Well, let's just change the method name to WithMultipleUsers. Now this is just centered so that we can understand what this method is doing. And instead of using the hardcoded values, I'll type username and password. Now as you can see that this username and password is not coming from anywhere, so we need to pass it into the function.
>
> **[1:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=93)** So string username and string password. Now this is a test and we are using [JUnit](../../Skills/Software%20Development/JUnit.md) with [Selenium](../../Skills/Software%20Development/Selenium.md). So we get some additional stuff like ParameterizedTest. So instead of test, you will use ParameterizedTest. And second is you will specify the source. So CSV source, file source. And then you specify where is this located. Usually we put it in the Resources folder. I'm going to name that file in the resources folder as login-data.csv. And there's another option like how many number of lines do you want to skip, just set it to zero. Now let's create this file in the sources folder. So I'm going to create the file here called login-data.csv. Make sure the file name is correct, and we'll copy the details for username and password. So it's just the email and password that I need. So email this, password this, and it's a CSV file. So comma separated. Two, password, same. And then third one is this. Let's not add any spaces, it's already comma separated, so. Make sure the data is correctly created. So there you go. We have got all the usernames.
>
> **[3:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=188)** Now we are already using it in the test. So if I go back to the login test, so it's parameterized as CVSFileSource, this, and number of lines skipped. I'm going to run this test and see what happens. So as you can see, it's running all the tests, and if I go back to the login, you can see that it ran the first test with this username and password, second test, and third test, so they all passed. And what this test was doing is if I go to the test, it goes to the location and checks for a title, that is, after login, I can see the my account page. So if I manually log in, I can show you what it's looking for. So username is this and password is this. And it checks for the my account title heading. There you go. So that is how you use data in your test by using the ParameterizedTest and CSVFileSource and putting the file name here and inside the resources folder and using the parameters in your test name.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JUnit](../../Skills/Software%20Development/JUnit.md) (1), [Selenium](../../Skills/Software%20Development/Selenium.md) (1)
> **Cross-References:** go back to (3)
> **File Paths:** login-data.csv (2)
> **CLI Commands:** make (2)
> **Env Vars:** csv (2)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Organize tests with tags](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=0)** - [Instructor] Not every test should run every time. Some are fast, some are critical, and some you may want to skip. So in this lesson we learn how to tag a test. So right now, if I run the test suite, it runs all of the tests. As you can see, the contact test and the login test. So one, two, three, four, it ran all four tests. But what if I want to run only the login test when I'm doing a smoke? So let's tag this test using enter tag and name the tag smoke. Now if I still run it, it'll run all of the tests, so all the four tests. We still need to tell IntelliJ that we only need to run the smoke test, so we'll create a new run configuration. So if you go on the top and click these three buttons, it'll give you an option to edit. This will open this kind of interface where you can specify what test you want to run, not this one, this doesn't work. So if I click on the plus button over here and select J unit, I can create a new run configuration. Just name it smoke because I'm creating a smoke test. And then in this dropdown, go and select tags and specify the tags that you want to run. For example, in my case, smoke, supply, okay. Now you have got two run configuration. So you can have like component test, smoke test, integration, whatever you want.
>
> **[1:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=94)** And you can specify those group of tests with the tags like this. So if I now run the test on my bottom left of the screen you can see only the login tests are running, which are these three tests. And because they're parameterized tests, they're using the resource file which has got three lines, that's why it ran three times.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (1), dropdown (1)
> **Tools:** intellij (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Refactor POM function](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-refactor-pom-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-refactor-pom-function?u=76281980&t=0)** - [Instructor] All right. It's time for the challenge. So, go to your exercise files and open the 02_06 branch, and you will find this code. This is the same code that we saw in the page object model lesson, so we created a page object model. We created this function called fill form, which is using the fill form function here, but this has got hard coded values of [John](../../Glossary/Tool/John%20the%20Ripper.md) Smith email address, et cetera. What I want to do is I want to be able to pass in these values from this test function here so that I can change these values as I like and write different tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [John](../../Glossary/Tool/John%20the%20Ripper.md) (1)
> **UI Navigation:** go to (1), open the (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Refactor POM function](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=5)** - [Instructor] Alright, this is an easy challenge. There is no catch. Literally, you need to pass in the values. So if I go back to the page object model, which is this one, I can get the values, which is firstName, lastName, email. So I'm going to just start typing over here. Let's actually create it over here because then the function can help us understand what is needed. So String firstName, String lastName, String email,
>
> **[0:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=36)** and then we need a subject. So String subject. And last but not least, String message. So let's just copy all of these values. I'm just going to copy all of this into the test. Here because I need the values, string values from that. And I'm going to replace this with the variables firstName, lastName, email, subject, and message. If you saw the lesson about parameterized test, you can already see how much value this is going to get if we are actually using the parameterized test and passing different users, different messages, et cetera. But anyways, let's just pass in these values. So we need the firstName, lastName, email, webmaster, which is the subject. And... last but not least, the message. So the message is really long. That is why I copy/pasted everything here. You can wrap this in your editor. So let's get rid of that
>
> **[2:10](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=130)** and run our test to validate. Always run the test. So whenever you make a change, make sure you run the test to ensure that the test still works. So as you can see, the test is working. So good job.

> [!info]- Semantic Content
>
> **Code Identifiers:** firstname (4), lastname (4)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Running Tests at Scale

[↑ Back to Table of Contents](#table-of-contents)

#### [Test across browsers locally](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=0)** - [Instructor] With the release of [Selenium](../../Skills/Software%20Development/Selenium.md) 4, Selenium also introduced this thing called Selenium Manager. This is the version 4.0 and it's still in beta version. What it does is it helps you manage browsers so you don't have to worry about which driver is compatible with which version of the browser. So in order to use that, so far we have been using the web driver manager. We can get rid of this because this is not a native one. And when we get rid of that, we can get rid of the web driver manager. And the refactor is very straightforward because now you are actually using Selenium Manager by deleting one line from your code. So it's like a funniest refactor I've seen in my experience. Now if I run the test to just validate that my tests are still working, you can see now we are using Selenium Manager and we are running the test on Chrome browser. So let's do a very quick refactor. I'm just going to move this in here, Chrome options because we haven't defined any option here. So it makes sense, it makes a code simple to understand. You can split it into the variable if you want to. So the next thing that I'm going to do is I'm going to add a Switch case statement, but what I need is I want to get the parameter from the command line. So the parameter would be where do I want to run the test? So string browser. And to get the parameter from command line, we can use system.getProperty. And the property is browser.
>
> **[1:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=92)** So when you do Maven run, you can specify browser equal to Chrome or browser equal to Firefox and pass that in through command line. So once we get the browser parameter, we'll switch to whatever the browser is passed from the command line. So first case could be Chrome and then this would be the driver, which is a Chrome driver. Another case could be Firefox and you can do driver equal to new Firefox driver, new Firefox options and break. And let's do a default. Default would be the same as, you can pick your own default, doesn't matter. So now we have described what browser we want to use and how do we use it. Let's run the test again. So if I run the test, the default is right now Chrome. So you can see it run on Chrome. And if I want to change it to Firefox, I can go to my base test and replace it here. Firefox. So I'm going to rerun this test on Firefox and let me just put a breaking point so that you can actually see the test is actually running on Firefox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (5)
> **Tools:** firefox (8), command line (4)
> **UI Navigation:** switch to (1), go to (1)
> **Code Identifiers:** getproperty (1)
> **Versions:** version 4 (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [What is Selenium Grid?](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=0)** - [Instructor] Have you heard about [Selenium](../../Skills/Software%20Development/Selenium.md) Grid? Let's find out what it is. Selenium Grid is a part of Selenium designed to help us run our tests in parallel across different browsers, platforms, or machines. That means you can run your tests faster and cover more scenarios at once. It's been completely re-engineered in Selenium 4 to be container-friendly and production grade. If your local test suite takes too long, or you're testing across many browsers and environments, Grid is your solution. Whether it's three browsers on two operating systems or 50 tests running in parallel, Grid can scale to handle it all. Grid is made up of six modular parts. The router, it's designed like a receptionist taking in every request. The queue, it holds requests that haven't been assigned yet. The distributor, it matches requests to the best available node, which actually runs your test. Session map, it tracks where each test is running. And the event bus makes sure everyone stays in sync quietly behind the scenes. If you're asking this question, then the answer is no. You don't always need to run everything separately. For local development, small test teams, or CI pipelines, you can use standalone mode, which launches all great components with just one command. It's quick, easy, and gets the job done. But if you're building a scalable test farm
>
> **[1:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=93)** or integrating into a containerized system like [Kubernetes](../../Skills/DevOps/Kubernetes.md), you'll want distributed mode where each piece runs independently. This gives you flexibility, resilience, and full control. My advice, start with standalone while learning. Scale to distribute only when your use case demands it. Selenium Grid gives you full control and flexibility, especially when you need legacy browser support or customized infrastructure. Playwright's cloud service, by contrast, is fully managed, faster setup, and perfect for modern browser testing. Use Grid when you need breadth and control. Use Playwright's testing service when you want speed and simplicity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (5), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **CLI Commands:** find (1), node (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Run tests using Selenium Grid](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=0)** - [Instructor] To run the test on a [Selenium](../../Skills/Software%20Development/Selenium.md) grid, you need the Selenium server. As you can see, this file over here that I have got downloaded. So I basically went to the Selenium documentation under Grid, Getting started. There is this link called Latest release. If you go to this link and scroll down, you can find Selenium server 4.34. That's the option that you will click on to download this [Java](../../Skills/Software%20Development/Java.md) file. So I've opened up the terminal from the left. I will kick off this server. So to kick off this server, all you need to do is go back to the documentation, see there's a line called java - jar and the file name and the parameter standalone. So we'll type that java - jar and then selenium s and then standalone. So this kicks off the Selenium grid on port 444. So ignore this 192 IP address, we'll just use the localhost over here. So what is a grid URL? Well, the grid URL is grid URL, and this would be the URL, which I just said, local host 444 because that's the port over here. Now because we are using URL, we need to ensure that this squiggly line, which is talking about malformed URL exception. So this set of function will now throw this malformed URL exception and this red line will go away.
>
> **[1:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=96)** Now the next thing that you need to do is get rid of all the drivers. So we are no longer going to use the Chrome driver, Firefox driver, or any other browser driver. We will basically start using the remote driver over here. So, remote web driver. And remote web driver takes two things. The first thing is the grid URL, the second thing is the option. So I will place this as well with.
>
> **[2:13](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=133)** There you go. So we have got remote web driver and we are passing in the grid URL and passing in the options. And that's the only refactor that you need. Now if I run the test, let's see if that works. So I'm going to go back to first Selenium test and click on Play button to run the test. And let's just see, watch the terminal. As you can see, the test is running over here on this terminal, on the Selenium grid. So if you want to see it again, I'll run it, run the test one more time. This time I will change the driver to Chrome. So Chrome. And let's run the test again. And you can see Chrome pops up, the test runs and there's some updates happening in a terminal, which are the updates for the driver that ran the test. So that is how you connect to a remote Selenium grid. Right now, they were both on my machine, so we use localhost. But in your case, when you would be running the Selenium grid on the pipeline, you would specify the IP address of the instance where the Selenium grid is running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (11), [Java](../../Skills/Software%20Development/Java.md) (3)
> **Env Vars:** url (9)
> **Tools:** terminal (4), firefox (1)
> **UI Navigation:** click on (2), go to (1), scroll down (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** find (1)
> **Ports:** port 444 (1)
> **Versions:** 4.34 (1)

#### [Run tests in parallel](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=0)** - [Instructor] Imagine you have a test suite containing 100 tests. Now imagine that you're running these tests one at a time. This is the default behavior of how tests run. So for example, we have got this test. I'm going to duplicate this test into another test and let's just say call it two. And if I run all the tests, you will see it'll run the first test. And then once the first test finishes, it'll run the second test. So that's highly inefficient. What we can do is we can paralyze this test. How do we do that? Well in [JUnit](../../Skills/Software%20Development/JUnit.md), by default, the tests are disabled to run in parallel. So go to your resources folder, which is source main, resources, right click, create a new file called Junit-platform.properties.
>
> **[0:59](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=59)** And now you can define the properties. So first is Junit.jupiter, and then we need parallel, right. So execution, and then I'm looking for parallel enabled, this one, equal to true. And the second property is concurrent. So Junit and we need mode default to be concurrent.
>
> **[1:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=90)** Once you define these two properties, now if I go back and run my test, have a look at the area on bottom left here. So I'm going to just make it bigger and run the test again. As you can see, both of them are running at the same time this time. So that is how you would run your test in parallel just by defining these two properties.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JUnit](../../Skills/Software%20Development/JUnit.md) (4)
> **Analogies:** imagine (2), for example (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Use GitHub Codespaces for test dev](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=0)** - [Instructor] [GitHub](../../Skills/Software%20Development/GitHub.md) offers a really powerful feature called GitHub [Codespaces](../../Skills/Software%20Development/Codespaces.md). If you haven't heard about this, watch this lesson multiple times and learn how to use it. So for example, if you don't have an ID and you want to still work with [Selenium](../../Skills/Software%20Development/Selenium.md) Test, how would you do it? So head over to the GitHub, and on this lesson, head to the branch 03_05. Once you're on this branch, if you don't have access to Codespaces, fork the project on your own GitHub space, and then you will have this option. Click on this dropdown once you have forked the project and click on Create Codespace for this branch. What this will do is it will set up a Codespace, which is very similar to your Visual Studio Code editor. As you can see, all of these options, they're very similar to the Visual Studio Code. So once everything is set up and ready, which will take some time, so you need to be patient because you're doing everything within the browser itself. You will see some files on the left hand side. So you've got src, which contains main test, and then there's a file called setup. Have a look at the README file. So README file will tell you how to use this space for this particular branch. So the first thing that we need to do is run this command, which is ./setup in the terminal. So this is the terminal. I'm waiting for the prompt to appear. As you can see, the prompt is available now, so in front of this dollar sign, I will just,
>
> **[1:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=94)** but when I try to paste it, it will pop up asking me if I should allow pasting. So just click on Allow and then just paste the ./setup command and press Enter. What this will do is it will install Chrome browser for testing. So by default, GitHub Codespaces, as you can see the top message over here, it is a default image. Think of it like a Docker container. So it will already contain [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), [Node.js](../../Skills/Web%20Development/Node.js.md), and some other tools, but that image does not contain the [Google](../../Glossary/Service/Google.md) Chrome. So what I'm doing is I'm installing the Google Chrome and setting it up. While that is happening, I also want to set up my [Java](../../Skills/Software%20Development/Java.md) extension. So I'm going to click on Install over here and click on Install. So just like Visual Studio Code, this Java extension will give me access to see the code highlighting and interact with my test scripts very easily. So as you can see, the colors are appearing on my coordinator, which is great. And you can see that Google Chrome is being downloaded in the terminal. So this is the area of the terminal. On the left hand side is the files that you normally see. And on here is the code. This is very similar to, like I said, if you are used to Visual Studio Code, you wouldn't even notice the difference, only the dark mode. And I think there is an option to do that as well. So I'm going to pause the video here for it to finish
>
> **[3:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=187)** because it will take some time to download all the dependencies. And then once it's finished, we'll continue from there. So the setup is complete for Google Chrome. As you can see, this is now ready. The next command that I will be running is from the README, which is sdk.default java and I will switch to Java 21, and that is done. And last but not least, I will install all the dependencies for this project by using Maven Clean Install. So Maven is the dependency manager for this project. As you can see, I'm using the pom file, so let's wait until this is downloaded. Hopefully it won't take much time. This is the process. You set up the Google Chrome, switch to Java environment, install Maven dependencies. This command will also execute the test for you. So you would be able to see the test running, but if you want to run the test another time, you would just run ambient tests. You don't have to repeat all those three steps again and again, that's the beauty of it. So far in the previous lessons, you have been running the test by clicking the Play button. In this lesson, we are doing it via terminal, because we don't have the Play button available in the Codespaces. So now you can see that it is running the test and it's asking me to open the browser. You don't have to click on that because the tests are running in headless mode. So you will see the output directly over here. So as you can see, it's running the test,
>
> **[4:41](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=281)** it's running it on the Chrome version 138, which is the version that we have set up in the script. So it's using the script Chrome version, and I'm waiting for it to finish the test. So there you go, it ran the test, the test was finished successfully, and now it said build success. Now if I want to run the test again, I'm in test, and you can just rerun the test as many times as you want. If you want to make any changes, you can go and click on one of the files over here. And for example, if you really want to check that this test is the one that is running, or if this is actually running this file, you can make the test fail by just writing some junk here. And let's wait for the previous test to finish. And then we will run this new test after this. It is a bit slow, but it's really, really good. Like the overall experience when you don't have the editor and you only have the browser and you want to use spaces, you will just use this. So I'm in test, I've just made a change to make the test fail. So the test should fail with the message that it doesn't match this bit. So we are waiting for a test to start. You can see the test is running, which is a ContactTest, which is this test over here. And you can see the test has failed and it says this bit does not match this bit.
>
> **[6:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=378)** So that is how you use GitHub Codespaces, run the test, and change the code or update a code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (5), [Google](../../Glossary/Service/Google.md) (5), [Java](../../Skills/Software%20Development/Java.md) (5), [Selenium](../../Skills/Software%20Development/Selenium.md) (1)
> **Tools:** github (6), terminal (5), visual studio (4)
> **Prerequisites:** install (6), set up (5), setup (4)
> **UI Navigation:** click on (7), switch to (2), dropdown (1), open the (1)
> **Analogies:** similar to (3), for example (2), think of it like (1), just like (1)
> **CLI Commands:** make (3), docker (1), python (1), node (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** readme (3)


### 4. Enhancing Tests with Modern Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Capture screenshots on failure](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=0)** - [Instructor] Screenshots are part of visual testing. So if your test fails, you can easily communicate to all the all the other team members, like, why the test failed by attaching the screenshot as an evidence on the [Jira](../../Skills/DevOps/Jira.md) ticket. Now, this is the contact test that you have been looking at in the previous lessons. You have already seen the code-based test as well. What we will do is we will refactor this and we will stop using the WebDriver and we will use a [JUnit](../../Skills/Software%20Development/JUnit.md) extension which will help us take screenshot. So, this extension is called Selenide. So, Selenide helps us take screenshots without writing a lot of code. So, I'm going to go to pom and I will add this dependency called Selenide, and it's from Codeborne. So, there you go. I've got a dependency. I'll just add the scope as well. So, scope is test. When you do it, you will have this as red because this would be your first time doing it. So, the best thing to do is go to this M option and click on this refresh icon which will download the dependency. Now, I'm going to go into the base test file here. I will replace ChromeDriver with the driver that I need. So, I need the driver from the Selenide. So, WebDriverRunner, as you can see that is coming from Selenide, .getWebDriver(). Now, this needs an initiation. So for that, I'm going to do com.codeborne.selenide and then selenide, dot,
>
> **[1:37](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=97)** and I'm going to run the method open. It just needs to open a single page. It doesn't matter what it is, so it will initialize. So now the driver starts, we have assigned the driver, selenide, to the driver. But because this is a JUnit extension, we need to describe it over here. So, @ExtendWith, and it would be ScreenShooterExtension.class. So, once you have got @ExtendWith and you have described the driver and you have stopped using the driver, all you need to do is configure the driver. So, we were using Chrome options. We will continue using that, but we need to configure the browser and we will say the browser is Chrome in our case. And we will configure the browser capabilities and pass in the Chrome options that we have been using. So, once you do all of these things, try and run the test and see what happens. So, I'm going to run this test. The test ran and it successfully passed, but we didn't get any screenshots because I was expecting screenshots on failure. So, we should get screenshots over here in this build folder. So, I'm going to make this test purposely fail. So, let's just do that and then run it again. This time when the test runs, it will create the report, it will give you the screenshot. As you can see, reports is here and you can see the screenshot.
>
> **[3:10](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=190)** There you go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JUnit](../../Skills/Software%20Development/JUnit.md) (2), [Jira](../../Skills/DevOps/Jira.md) (1)
> **UI Navigation:** go to (2), click on (1)
> **Prerequisites:** configure (3)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** getwebdriver (1)
> **Tools:** jira (1)
> **Exercise Files:** download the (1)

#### [Mock APIs with WireMock](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=0)** - [Instructor] APIs are often the biggest bottlenecks in [End-to-end Testing](../../Skills/Software%20Development/End-to-end%20Testing.md). They might be down, returning flaky responses, or rate-limited. That's where mocking comes in. By simulating API responses with WireMock, you can create reliable local test conditions. Whether you're testing a success case or simulating a 500 error, WireMock gives you the control. WireMock is a powerful mocking tool built in [Java](../../Skills/Software%20Development/Java.md) that lets you fake real APIs. You can run it as a standalone server or directly inside the [Selenium](../../Skills/Software%20Development/Selenium.md) test code. With support for stubbing [JSON](../../Skills/Web%20Development/JSON.md) responses and matching request patterns, it becomes a rock solid way to decouple your front test from your backend dependencies. Now, imagine a scenario where you are testing [practicesoftwaretesting.com](https://practicesoftwaretesting.com), which requires a product API to load the [products](../../Skills/Software%20Development/Microsoft%20Products.md) on the page. Now, imagine you are a part of the team who's working only on the frontend, and there's another team who's working on the backend, and you want to isolate the number of products that would be loaded on the website to check basically how the user interface would behave with one product, two product, three product, and so on. What WireMock does, it gives you that control to manipulate the data and make your frontend use that manipulated data so that you can run your tests in an ideal condition. This makes your UI test more stable, faster, and more focused.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [End-to-end Testing](../../Skills/Software%20Development/End-to-end%20Testing.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Selenium](../../Skills/Software%20Development/Selenium.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** api (2), json (1)
> **Analogies:** imagine (2)
> **CLI Commands:** make (1)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Run tests in CI with GitHub Actions](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=0)** - [Instructor] So once you go to the [GitHub](../../Skills/Software%20Development/GitHub.md), you can see this option over here on the top, which is called Actions. So this is called a GitHub Action. So if you click on that, this is where you can create a new workflow for GitHub. So I'm going to click on new workflow and simple workflow is fine for us, so let's configure that. So what this is saying is, we can use this template or modify this template to create our own workflow where we can run our test. So for us, this is a CI obviously, but it is [Selenium](../../Skills/Software%20Development/Selenium.md) test that we are running, so let's name it better. And the branch that we're working on right now is not main, but in most cases it would be main. That's why they already have got the main branch. So here we are working on a branch 04_03. So I'm going to just change that to 04_03, both for push and pull. And then, the comments are really helpful, read the comments. So allows you to run the workflow manually from action step, so we don't have any option over there. And then jobs, [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) latest, that's fine for us, actions is fine. And I also want to set up, so from here onwards, we are going to start editing. So let's start with this. So I want to set up [Java](../../Skills/Software%20Development/Java.md). So like we have got users over here, we'll just use another one, which will help us set up Java. So name set up Java,
>
> **[1:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=96)** because Selenium uses Java, so we need Java over there. Uses action/setup-java@4. And then, we just specify the parameters, what version we need. So version is 21. And then distribution is temurin is the most used, most famous distribution. So we are going to use that. We can also use [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). When I have tested with that, it works. So name install Chrome. So we need to install the browser because we would be running the test in headless mode. And I've already created a script to install the browser, so we'll just use that script. So ./setup. Last but not least, we want to run the test. So name run tests, and then the command would be mvn test because this is Maven, we can delete the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of it. We don't need this anymore. That is our GitHub action workflow. Just name it Selenium and commit the changes. Yeah, that's fine. Now, this is committing to the main branch. We don't need to commit to the main branch. So I've accidentally committed to the main branch. What I'm going to do is, I'm going to move this to a separate branch. So let's copy this file. I'm going to go back to the editor, clear, what I'm going to do is,
>
> **[3:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=194)** I'm just going to quickly create a folders here. So mkdir .github/workflows/, let's see, workflows, and that's it. Dash p. So we have got this folder here on this branch. I'm going to create a new file. Selenium.yml, and I've just copied that whole thing that we generated on GitHub over here. And let's just commit it manually. [Git](../../Skills/Software%20Development/Git.md) add .gitHub, selenium git commit. Add selenium workflow. This has on page the workflow to the right branch. So if I go to the project again and go to the branch 04_03, I can see the workflow, which is this one. Now, if I go to the actions, we have got Selenium test. And since I did a push here, you can see this is now running something, which is building. And here, you can see the whole workflow happening in action and it ran the contact test and it has passed. So that is how you basically write a workflow, run a workflow in GitHub actions.
>
> **[4:49](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=289)** This is just using the workflow file. So if I go back to the workflow file, you can see the details, what this file looks like that we just created. If you want to see the actions, how it built, you can go to each of them and see the output over here as well. So that's it. That's how you use GitHub Actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (9), [Selenium](../../Skills/Software%20Development/Selenium.md) (7), [Java](../../Skills/Software%20Development/Java.md) (6), [Git](../../Skills/Software%20Development/Git.md) (2), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **Prerequisites:** set up (4), install (3), setup (2), configure (1)
> **Tools:** github (9)
> **UI Navigation:** go to (5), click on (2)
> **CLI Commands:** git (2), mvn (1), mkdir (1)
> **Definitions:** is called (2), is a  (1)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)

#### [Challenge: Run tests in CI with GitHub Actions](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980&t=0)** - [Instructor] Now here is the challenge, and it's a powerful one. I want you to run your first [Selenium](../../Skills/Software%20Development/Selenium.md) test on a CI environment using [GitHub](../../Skills/Software%20Development/GitHub.md) Actions. You can do this using three simple steps. Step one, fork the repo of this course. This would clone the repository on your GitHub account. Step two, if this is your first time using GitHub Actions, you'll need to enable it. So just click the green button. Step three, go inside the workflow file, which you can select from the left menu, and then click on the Run Workflow dropdown, which will pop up this dialogue on the screen. Then click on the Run Workflow button. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Selenium](../../Skills/Software%20Development/Selenium.md) (1)
> **Tools:** github (3)
> **UI Navigation:** click on (2), dropdown (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Run tests in CI with GitHub Actions](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=5)** - [Instructor] So the solution is quite simple as described in the slides, click on the fork button and then it'll clone the repository on your side and you will have all the admin rights. So you will see the actions button then, click on the actions button, and once you click on the action button, you would see this page. Now remember, you need to run the workflow on the correct branch. If you run it on 04_03, the workflow will pass. But if you run it on main, it'll fail. So you need to go to 04 and let's go 03 branch and then click on actions. So once you're there, you just go to the [Selenium](../../Skills/Software%20Development/Selenium.md) test and run the workflow and select the branch. The branch should be 04_03 and run workflow.
>
> **[0:59](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=59)** So it'll just show you how many workflow runs have happened. I've just refreshed my screen to see the third one, which is running. It'll build, it'll do bits of the process, and you can tell that you are on the right branch by looking at a failure. So this previous workflow failed because of the missing set of file, because we don't have that in main. But if I go back to this one, this is running fine and it has gone to the server, has downloading Chrome, and it has run the test. The test passed, job is complete and you can see the green here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (1)
> **UI Navigation:** click on (4), go to (2), select the (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/next-steps?u=76281980&t=1)** - Well done for finishing this course. I am so proud of you. Really good job. Now, follow me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), because there I will be pushing in more updates. And if you enjoyed this course, I've got two more courses that you can watch, which is "[Playwright- Design Patterns](Playwright-%20Design%20Patterns.md)" and "Playwright Advanced." And for any further details about [Selenium](../../Skills/Software%20Development/Selenium.md), head over to [selenium.dev/documentation](https://selenium.dev/documentation), because you'll find many more resources over there. Thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **CLI Commands:** find (1)
> **URLs:** [selenium.dev](https://selenium.dev) (1)
> **Speakers:** - well (1)


## Instructor

- [Qambar Raza](../../Instructors/Software%20Development/Qambar%20Raza.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-selenium-structure-scale-run-and-optimize-automated-tests-5989088/codespaces)

## Skills Covered

- Selenium
- Test Automation

## Path Context

### In [Getting Started with Software Testing](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20with%20Software%20Testing.md)
← [Software Testing- Planning Tests for Mobile](Software%20Testing-%20Planning%20Tests%20for%20Mobile.md) | **5 of 12** | [Learning Playwright](Learning%20Playwright.md) →

## Appears In

- [Getting Started with Software Testing](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20with%20Software%20Testing.md)

## Related Courses

_Courses sharing skills:_

- [Selenium Essential Training](Selenium%20Essential%20Training.md) — Test Automation, Selenium
- [Postman Essential Training](Postman%20Essential%20Training.md) — Test Automation
- [Advanced Playwright Techniques- Optimizing Speed, Stability, and Cloud Testing](Advanced%20Playwright%20Techniques-%20Optimizing%20Speed%2C%20Stability%2C%20and%20Cloud%20Testing.md) — Test Automation
- [Playwright- Design Patterns](Playwright-%20Design%20Patterns.md) — Test Automation
- [Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios](Playwright%20Essential%20Training-%20Abstractions%2C%20Fixtures%2C%20and%20Complex%20Scenarios.md) — Test Automation

---

[↑ Back to top](#)