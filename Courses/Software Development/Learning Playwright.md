---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-playwright
url: "https://www.linkedin.com/learning/learning-playwright"
level: Intermediate
updated: 11/21/2024
learners: 27269
skills:
  - Test Automation Tools
  - Automation
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-playwright-5911873"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQH9KXFauT3_nw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730827611420?e=2147483647&amp;v=beta&amp;t=Hgonc3KqLVcsREG50BjKBFZ07NP2DY-pksa9-Oweu7Q"
linkedin_topic: Software Development
learning_paths:
  - '[[Master Test Automation with Playwright]]'
  - '[[Getting Started with Software Testing]]'
prev_courses:
  - null
  - '[[Learning Selenium- Structure, Scale, Run, and Optimize Automated Tests]]'
next_courses:
  - '[[Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios]]'
  - '[[JMeter- Performance and Load Testing]]'
path_nav: '[{"path":"Master Test Automation with Playwright","position":1,"total":4,"prev":null,"next":"Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios"},{"path":"Getting Started with Software Testing","position":6,"total":12,"prev":"Learning Selenium- Structure, Scale, Run, and Optimize Automated Tests","next":"JMeter- Performance and Load Testing"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - skill/test-automation-tools
  - skill/automation
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Learning%20Playwright.md)

![Learning Playwright](https://media.licdn.com/dms/image/v2/D4D0DAQH9KXFauT3_nw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730827611420?e=2147483647&amp;v=beta&amp;t=Hgonc3KqLVcsREG50BjKBFZ07NP2DY-pksa9-Oweu7Q)

# Learning Playwright

> It’s no surprise that Playwright has joined the ranks of other top-rated open-source automation tools. Playwright’s comprehensive feature set allows testers and developers to quickly create new test automation projects without having to combine multiple libraries and other tools. Whether you’re a manual tester, a quality assurance specialist, a software developer, or a seasoned automation engineer

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-playwright) | Intermediate | 27K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Unlock the future of test automation with Playwright](#unlock-the-future-of-test-automation-with-playwright)
  - [What is Playwright, and why choose it?](#what-is-playwright-and-why-choose-it)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Playwright Installation and Configuration**](#1-playwright-installation-and-configuration) (7 videos)
  - [Installing Playwright](#installing-playwright)
  - [Updating the Playwright config](#updating-the-playwright-config)
  - [Playwright config browsers and projects](#playwright-config-browsers-and-projects)
  - [Exploring the test runner command line interface](#exploring-the-test-runner-command-line-interface)
  - [Overview of package.json](#overview-of-packagejson)
  - [Exploring the VS Code extension](#exploring-the-vs-code-extension)
  - [Exploring the Playwright UI Mode](#exploring-the-playwright-ui-mode)
- [**2. Creating Tests with Playwright**](#2-creating-tests-with-playwright) (11 videos)
  - [Overview of the website under test](#overview-of-the-website-under-test)
  - [Generating tests with codegen](#generating-tests-with-codegen)
  - [Overview of locator strategies in Playwright](#overview-of-locator-strategies-in-playwright)
  - [Overview of assertions in Playwright](#overview-of-assertions-in-playwright)
  - [Structuring Playwright tests](#structuring-playwright-tests)
  - [Handling cookie authentication in Playwright](#handling-cookie-authentication-in-playwright)
  - [Visual testing in Playwright](#visual-testing-in-playwright)
  - [API testing in Playwright](#api-testing-in-playwright)
  - [Automating the right things with Playwright](#automating-the-right-things-with-playwright)
  - [Challenge: Create three automated tests](#challenge-create-three-automated-tests)
  - [Solution: Create three automated tests](#solution-create-three-automated-tests)
- [**3. Maintaining Playwright Tests**](#3-maintaining-playwright-tests) (4 videos)
  - [Introduction to maintaining tests with Playwright](#introduction-to-maintaining-tests-with-playwright)
  - [Playwright screenshots, videos, and reporters](#playwright-screenshots-videos-and-reporters)
  - [Playwright trace viewer](#playwright-trace-viewer)
  - [Scaling Playwright tests](#scaling-playwright-tests)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Unlock the future of test automation with Playwright](https://www.linkedin.com/learning/learning-playwright/unlock-the-future-of-test-automation-with-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/unlock-the-future-of-test-automation-with-playwright?u=76281980&t=0)** - [Butch] Have you seen all the buzz using Playwright for [[Test Automation]] and feeling left out?
>
> **[0:06](https://www.linkedin.com/learning/learning-playwright/unlock-the-future-of-test-automation-with-playwright?u=76281980&t=6)** That's probably because Playwright is the test automation tool of the future.
>
> **[0:12](https://www.linkedin.com/learning/learning-playwright/unlock-the-future-of-test-automation-with-playwright?u=76281980&t=12)** I'm Butch Mayhew, a Playwright ambassador.
>
> **[0:14](https://www.linkedin.com/learning/learning-playwright/unlock-the-future-of-test-automation-with-playwright?u=76281980&t=14)** I've helped countless people with learning Playwright through my blog, [playwrightsolutions.com](https://playwrightsolutions.com), and I'd like to help you too.
>
> **[0:22](https://www.linkedin.com/learning/learning-playwright/unlock-the-future-of-test-automation-with-playwright?u=76281980&t=22)** Are you ready to learn the basics of Playwright?
>
> **[0:25](https://www.linkedin.com/learning/learning-playwright/unlock-the-future-of-test-automation-with-playwright?u=76281980&t=25)** Come join me as we commence on this journey together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (2)
> **URLs:** [playwrightsolutions.com](https://playwrightsolutions.com) (1)
> **Speakers:** - [butch] (1)

#### [What is Playwright, and why choose it?](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=0)** - [Instructor] So, you decided to go for it.
>
> **[0:02](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=2)** You've made the right choice.
>
> **[0:05](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=5)** Now it's time to start our learning journey together.
>
> **[0:08](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=8)** Let's first begin by defining Playwright.
>
> **[0:12](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=12)** Playwright is an open-source tool built by [[Microsoft]] that enables reliable end-to-end UI and API automation testing for modern web apps.
>
> **[0:24](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=24)** This tool is gaining a lot of traction by providing a ton of value to companies as a leading choice within the [[Test Automation]] tooling.
>
> **[0:33](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=33)** Playwright provides access to multiple browsers, which include Chromium, Chrome, Microsoft Edge, Firefox, Webkit, which is what Safari is built from.
>
> **[0:45](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=45)** Every Playwright release will have a set version of each of these browsers bundled when installing Playwright.
>
> **[0:53](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=53)** Let's take a look deeper into what makes Playwright special.
>
> **[0:57](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=57)** It's highly rated on [[GitHub]], currently over 66,000 stars at the time of this recording.
>
> **[1:05](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=65)** They release new features around once a month.
>
> **[1:09](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=69)** They support TypeScript, [[JavaScript]], [[Python (Programming Language)|Python]], .NET and [[Java]] officially, but there's also a Ruby and Go Community version.
>
> **[1:20](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=80)** TypeScript is where we will focus in this course.
>
> **[1:24](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=84)** Playwright is closer to [[Selenium]] WebDriver than Cypress.
>
> **[1:29](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=89)** Why?
>
> **[1:30](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=90)** It's an out-of-process automation driver that is not limited by the scope of in-page JavaScript execution.
>
> **[1:38](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=98)** This is one of the Cypress limitations.
>
> **[1:42](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=102)** Playwright, on the other hand, drives the browser that's being used from the outside like Selenium WebDriver, rather than being baked into the browser.
>
> **[1:52](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=112)** Playwright can be used as a library or as a test framework.
>
> **[1:58](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=118)** This course will be focusing on covering the Playwright Test framework specifically.
>
> **[2:04](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=124)** So, what exactly is Playwright Test?
>
> **[2:07](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=127)** Playwright Test has a built-in test runner that's very similar to Jest.
>
> **[2:13](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=133)** This allows you to build out test steps using Playwright-specific syntax.
>
> **[2:19](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=139)** Playwright Test allows you to run all your tests in parallel with no cost restrictions.
>
> **[2:25](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=145)** It also allows you to run X amount of retries.
>
> **[2:29](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=149)** Playwright Test shines the brightest with the ability to utilize built-in reporters to view detailed test runs, screenshots, videos, and trace files that show the exact state of the browser was in when the test was running.
>
> **[2:45](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=165)** There's also a helpful VS Code extension that allows you to build, maintain, and debug tests all from within VS Code.
>
> **[2:55](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=175)** So, this begs the question, why choose Playwright rather than some other tool?
>
> **[3:02](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=182)** Well, the ability to run API and UI regression tests in the same framework was a big factor in my decision.
>
> **[3:11](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=191)** I found developers and testers using one framework for both of these types of tests is a big benefit.
>
> **[3:18](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=198)** We've mentioned some of the rich reporting and ability to run tests in parallel.
>
> **[3:23](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=203)** This is only a portion of the built-in functionality that Playwright provides.
>
> **[3:28](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=208)** There's excellent error handling.
>
> **[3:30](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=210)** When a Playwright test fails, it's always super clear what the problem is from the error message.
>
> **[3:37](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=217)** Not all tools have error messages as helpful as Playwright.
>
> **[3:41](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=221)** The ability to configure projects in many different ways is also a game-changer when it comes to the flexibility Playwright offers.
>
> **[3:51](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=231)** Playwright locators also have built-in auto-waiting and retry abilities.
>
> **[3:58](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=238)** In the end, the reason why you should choose Playwright?
>
> **[4:01](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=241)** Using Playwright for regression testing can give you confidence in future software releases.
>
> **[4:09](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=249)** This is the point.
>
> **[4:10](https://www.linkedin.com/learning/learning-playwright/what-is-playwright-why-choose-playwright?u=76281980&t=250)** We want to ensure we have high-quality releases, and Playwright is a great tool to help solve that problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[JavaScript]] (2), [[Selenium]] (2), [[Test Automation]] (1), [[GitHub]] (1)
> **Tools:** vs code (2), firefox (1), safari (1), github (1)
> **Env Vars:** api (2), net (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** python (1), ruby (1)
> **Analogies:** similar to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/learning-playwright/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/using-the-exercise-files?u=76281980&t=0)** - [Instructor] As a part of this course, we've provided a [[GitHub]] repository that you can use during each video.
>
> **[0:07](https://www.linkedin.com/learning/learning-playwright/using-the-exercise-files?u=76281980&t=7)** The main README provides some guidelines on the branch-naming strategies, and provide some useful tips for getting through error messages.
>
> **[0:16](https://www.linkedin.com/learning/learning-playwright/using-the-exercise-files?u=76281980&t=16)** As you scroll down, there are also links to install Node, [[Git]] or GitHub Desktop, VS Code, and the VS Code extension.
>
> **[0:26](https://www.linkedin.com/learning/learning-playwright/using-the-exercise-files?u=76281980&t=26)** Within this repo, I've also included a RESOURCES.md.
>
> **[0:31](https://www.linkedin.com/learning/learning-playwright/using-the-exercise-files?u=76281980&t=31)** In this Markdown file, I've included links to specific Playwright documentation and links to different GitHub branches that are created within the repository to follow along with each video.
>
> **[0:44](https://www.linkedin.com/learning/learning-playwright/using-the-exercise-files?u=76281980&t=44)** I would recommend either having this file open on a separate screen locally, or browsing the GitHub repository page and viewing it from there.
>
> **[0:54](https://www.linkedin.com/learning/learning-playwright/using-the-exercise-files?u=76281980&t=54)** Let's get this party started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Git]] (1)
> **Tools:** github (4), vs code (2)
> **Env Vars:** readme (1), git (1), resources (1)
> **CLI Commands:** node (1), git (1)
> **File Paths:** resources.md (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Playwright Installation and Configuration

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing Playwright](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=0)** - [Instructor] Before we embark on this learning journey, we must first build our development environment that we'll be using during this course.
>
> **[0:07](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=7)** This will include installing Node, installing Playwright through the terminal commands, installing VS Code, and installing the Playwright VS Code extension.
>
> **[0:17](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=17)** If you're on a Mac or [[Linux]] machine, you're more than likely already have Node installed.
>
> **[0:23](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=23)** If not, you can follow the link and install it how you see fit.
>
> **[0:27](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=27)** I'm a big fan of using the Node Prebuilt Installer that can be found at this link.
>
> **[0:32](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=32)** Once installed and configured, you can pull up a terminal and you should be able to run the command, node --version, and it should return a number.
>
> **[0:45](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=45)** I currently have version 18.18.2 installed.
>
> **[0:49](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=49)** Any newer version of Node should work for this exercise in this lesson.
>
> **[0:55](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=55)** Next, we're going to install Playwright through a very specific initialize command that the Playwright team has provided.
>
> **[1:02](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=62)** It's going to walk us through a bit of an installation wizard.
>
> **[1:06](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=66)** Now would actually be a good time, if you're not already, go ahead and download the Learning Playwright Repo and go ahead and swap to the 01_01b branch.
>
> **[1:20](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=80)** So I have Learning Playwright Repository pulled down locally, and I am on the branch 01_01b, which stands for beginning.
>
> **[1:31](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=91)** From here on out, we will be using this repository to track all of our changes.
>
> **[1:36](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=96)** Once you have this branch checked out, we're going to go ahead and install Playwright at the root of this directory.
>
> **[1:42](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=102)** We're going to do that by using the command [[npm]] init playwright@latest.
>
> **[1:52](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=112)** When you hit enter, it's going to walk you through a step of questions.
>
> **[1:55](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=115)** You may have to hit yes to first get things started, but the first question here is, do you want to install TypeScript or [[JavaScript]]?
>
> **[2:02](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=122)** We're going to hit enter and choose the default TypeScript.
>
> **[2:06](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=126)** Where do you want to put your end-to-end tests?
>
> **[2:07](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=127)** I'm going to hit enter and choose the test folder.
>
> **[2:12](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=132)** Do you want to add a [[GitHub]] Actions workflow?
>
> **[2:14](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=134)** For this, I'm going to leave this as false as well, so I'm going to hit enter.
>
> **[2:19](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=139)** And install Playwright browsers.
>
> **[2:20](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=140)** This can be done manually via npx playwright install.
>
> **[2:24](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=144)** Yes or no?
>
> **[2:25](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=145)** It is set to true here.
>
> **[2:27](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=147)** I'm going to hit enter.
>
> **[2:28](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=148)** And if you already have the browsers installed, it's not going to take very long, but if you don't have 'em installed, you're going to have to wait two or three, four minutes for all those browsers to install.
>
> **[2:40](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=160)** Once everything is done running, you'll see a screen like this.
>
> **[2:43](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=163)** Happy hacking!
>
> **[2:44](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=164)** To ensure that everything is installed properly, the next thing we can do is actually run the tests and make sure everything's working properly on our machine.
>
> **[2:54](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=174)** So to do that, I'm going to type in npx playwright test.
>
> **[3:01](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=181)** I'm going to hit enter and this should kick off all the tests.
>
> **[3:05](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=185)** So it's running six tests using four workers.
>
> **[3:08](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=188)** Six tests passed.
>
> **[3:09](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=189)** It took 3.6 seconds.
>
> **[3:12](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=192)** and I successfully ran Playwright Test on my computer.
>
> **[3:16](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=196)** One of the final steps, it's somewhat optional, but highly recommended, is going ahead and installing VS Code.
>
> **[3:24](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=204)** You can find that from the link in the resources guide.
>
> **[3:28](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=208)** Once it's downloaded and installed, it should look like this.
>
> **[3:32](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=212)** Now we want to open the repo that we're working from within VS Code.
>
> **[3:37](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=217)** To do this, you can go to File, Open Folder, and select the Learning playwright folder in your directory, wherever you downloaded it to.
>
> **[3:50](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=230)** Clicking Open will open the directory in VS Code and I can see all the different files.
>
> **[3:57](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=237)** Once this folder's open, you'll likely receive a popup in the bottom right-hand corner asking you to install some different extensions.
>
> **[4:05](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=245)** I would recommend you go ahead and install those extensions.
>
> **[4:08](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=248)** That should install [[ESLint]], the GitHub Theme, the Playwright Test extension, and the Prettier Code formatter.
>
> **[4:16](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=256)** These extensions will help you as you're building out your Playwright Tests.
>
> **[4:20](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=260)** To recap, we installed and validated that we had Node installed.
>
> **[4:24](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=264)** We initiated a new Playwright Test TypeScript project, and we installed the appropriate browser dependencies.
>
> **[4:32](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=272)** We ensured the example tests provided were able to run, and we also installed VS Code and the Code extension.
>
> **[4:39](https://www.linkedin.com/learning/learning-playwright/installing-playwright?u=76281980&t=279)** We are now ready to set sail on our learning adventure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Linux]] (1), [[npm]] (1), [[JavaScript]] (1), [[ESLint]] (1)
> **CLI Commands:** node (6), npx (2), npm (1), make (1), find (1)
> **Tools:** vs code (6), terminal (2), github (2)
> **Prerequisites:** install (10)
> **UI Navigation:** open the (2), go to (1), select the (1)
> **Versions:** version 18 (1), 18.2 (1), 3.6 (1)
> **Definitions:** stands for (1)
> **Best Practices:** recommended (1)

#### [Updating the Playwright config](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=0)** - [Instructor] Now that we have Playwright installed, we will be taking some time to work on our configuration for our project.
>
> **[0:07](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=7)** We're going to spend this lesson reviewing the playwright.config.ts file.
>
> **[0:12](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=12)** Let's go ahead and open that up in VS Code and take a look.
>
> **[0:16](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=16)** The first thing to note is this file was automatically generated when we ran the playwright init command.
>
> **[0:23](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=23)** Inspecting the file, we can see the main method is actually defineConfig.
>
> **[0:29](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=29)** With this, there are different levels and options available.
>
> **[0:32](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=32)** The top most level is where a lot of the Playwright test runner options are found.
>
> **[0:37](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=37)** Within the main test runner config, let's break down a few of what these options are doing.
>
> **[0:42](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=42)** Starting with fullyParallel, which is set to true.
>
> **[0:45](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=45)** This option allows multiple test files to be run in parallel.
>
> **[0:49](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=49)** More details can be found in the docs provided in this hover over section.
>
> **[0:55](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=55)** Another important section is the retries option.
>
> **[0:59](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=59)** Playwright gives us the ability to assign how many retries we want to attempt based on the values we add for retries.
>
> **[1:07](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=67)** As you can see, the default value is process.env.CI with a question mark, with a two, a colon, and a zero.
>
> **[1:16](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=76)** This is a conditional. It's actually a ternary operator.
>
> **[1:20](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=80)** It's basically telling us that if process.env.ci, when it's evaluated, if it's true, it's going to use the first value, two.
>
> **[1:30](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=90)** If it's false, it's going to use the second value, zero.
>
> **[1:33](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=93)** By default, anything run in a CI environment such as [[GitHub]] Actions with that environment variable set, we'll have two retry attempts, but anything run on a local machine will have zero retry attempts.
>
> **[1:47](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=107)** Let's go ahead and refactor this to have one retry when we're running on our local machine from changing the value from a zero to a one.
>
> **[1:57](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=117)** Let's also go ahead and update the text.
>
> **[1:59](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=119)** Retry on CI two times and locally one time.
>
> **[2:04](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=124)** You can see that the workers option has a similar value with a ternary operator.
>
> **[2:10](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=130)** Having a programmable configuration file is really helpful in that we can add creative logic to open a ton of other configuration possibilities.
>
> **[2:20](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=140)** A list of different options on this level can be found within the Playwright docs under the testconfig class.
>
> **[2:28](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=148)** We also have reporters. [[HTML]] is by default.
>
> **[2:33](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=153)** We're not going to dive into that here, but we will in a later video.
>
> **[2:38](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=158)** There are some default timeouts in Playwright that aren't listed in the config that I find it useful to go ahead and add to the config so I know what to expect and make them easy to change in the future.
>
> **[2:51](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=171)** So at the top of our defineConfig, let's go ahead and add a new line, and let's type in timeout:, and I'm going to type in 30_000.
>
> **[3:05](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=185)** This is indicating 30 seconds or 30,000 milliseconds.
>
> **[3:11](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=191)** So this is the test timeout.
>
> **[3:13](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=193)** If 30 seconds goes by and the test is not complete, the test will fail.
>
> **[3:19](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=199)** There's also a globalTimeout.
>
> **[3:22](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=202)** Let's type that, globalTimeout, and we're going to set that to 10 minutes.
>
> **[3:26](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=206)** This is some other syntax you can use.
>
> **[3:29](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=209)** So we're saying 10 minutes or 10 * 60 * 1000.
>
> **[3:36](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=216)** This is just another way to visualize 10 minutes in the config file.
>
> **[3:41](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=221)** This config says if all of your tests take longer than 10 minutes to run, your Playwright test will fail.
>
> **[3:49](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=229)** So if you have a longer test suite, or as your test suite grows, you may have to increase this timeout.
>
> **[3:55](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=235)** The use section down below here is really where we get into the nitty gritty details of the browser, the browser configuration settings, and how the browser is going to interact when running test.
>
> **[4:08](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=248)** I'll go ahead and mention, even though we're not going to dive into this now, there's another section called projects below.
>
> **[4:15](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=255)** The projects section also has a use section.
>
> **[4:18](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=258)** The use on the highest level underneath the defineConfig where we're looking now is the overall default that is set, but on an individual project level, you can override these settings.
>
> **[4:30](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=270)** You can even do it on the test level by calling test.use.
>
> **[4:35](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=275)** Let's go ahead and add a few things to the use section that will be useful for us.
>
> **[4:40](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=280)** So let's start by adding actionTimeout: 0.
>
> **[4:45](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=285)** (keyboard clacking) I'm going to hit comma, I'm also going to add ignoreHTTPSErrors, we're going to set that to true.
>
> **[4:57](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=297)** And I'm a big fan of enabling traces to always be on by default is set on-first-retry.
>
> **[5:05](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=305)** You know, if I hover over this, I can see the different options.
>
> **[5:07](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=307)** I'm going to just set this to on, so I'm going to update this config.
>
> **[5:12](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=312)** The trace file is going to include things like network request, console error logs, and all sorts of different elements on the screen along with a timeline view of the how that happened.
>
> **[5:23](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=323)** We'll look into that deeper in a future video.
>
> **[5:26](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=326)** I also like to set a video to retain on failure, so let's add that in here, video: 'retain-on-failure'.
>
> **[5:37](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=337)** Let's also add that for screenshot as well, screenshot: 'only-on-failure'.
>
> **[5:48](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=348)** Let's also go ahead and add headless, and we're going to set this to true.
>
> **[5:54](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=354)** This is the default.
>
> **[5:55](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=355)** I don't want my browser popping up and interrupting my flow when I want to run a test from my command line.
>
> **[6:02](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=362)** There are ways to enable this through the [[CLI]], which we'll look at a little later, but it's always best to set this as true.
>
> **[6:09](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=369)** The last thing we're going to look at is this baseURL.
>
> **[6:12](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=372)** It's currently already set here, but it's commented out.
>
> **[6:15](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=375)** So we're going to uncomment this, and we're going to update this to our test website.
>
> **[6:21](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=381)** That's going to be [https://practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[6:30](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=390)** This baseURL is unique in that it allows you to set a URL.
>
> **[6:34](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=394)** It's a base, so you can have your own .com or io or .net domain.
>
> **[6:39](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=399)** You can also use a variable here in this config file if you wanted to use that and override that based on other configs.
>
> **[6:48](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=408)** By default, this baseURL is available in your test.
>
> **[6:52](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=412)** By default, it's going to attempt to use this first.
>
> **[6:55](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=415)** So you can pass things like page.goto and just pass in /login instead of the full URL, and it will go to this full URL /login for you.
>
> **[7:06](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=426)** This is really useful as we're setting up our test, and you'll see this use later.
>
> **[7:12](https://www.linkedin.com/learning/learning-playwright/updating-the-playwright-config?u=76281980&t=432)** There are also lower level config options in use, such as web server and different expect things that you can read about in the official Playwright docs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[HTML]] (1), [[CLI]] (1)
> **Code Identifiers:** defineconfig (3), baseurl (3), globaltimeout (2), fullyparallel (1), actiontimeout (1)
> **Env Vars:** url (3), html (1), cli (1)
> **File Paths:** process.env (2), playwright.config.ts (1)
> **Tools:** vs code (1), github (1), command line (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** such as (2)
> **URLs:** [https://practicesoftwaretesting.com](https://practicesoftwaretesting.com) (1)

#### [Playwright config browsers and projects](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=0)** - [Instructor] It's time to journey deeper into the Playwright config as we look at how you can configure the browsers and project settings of the config.
>
> **[0:09](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=9)** So let's jump in.
>
> **[0:10](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=10)** As we pull up our existing config, you'll notice in the projects section, you have different browsers.
>
> **[0:18](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=18)** This is very important to the Playwright test runner.
>
> **[0:21](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=21)** You can think of these projects as different projects that will run all the tests for each different project.
>
> **[0:28](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=28)** So by default, the playwright init command, which we ran in lesson 0101, created the default settings with Chrome Desktop browser with Firefox Desktop, with Desktop Safari.
>
> **[0:43](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=43)** The original playwright init also provides you with mobile viewports, but these are commented out.
>
> **[0:49](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=49)** By default, you could uncomment these and run against all sorts of different sized browsers as well.
>
> **[0:55](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=55)** This is very useful if you want to do cross-browser testing.
>
> **[0:59](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=59)** That means run your existing tests across different browsers to validate that websites work against all these different configurations.
>
> **[1:09](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=69)** The pro is Playwright gives you these browsers out of the box, and you're able to use them with very little configuration.
>
> **[1:16](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=76)** One of the drawbacks when using Playwright is you're locked into a specific version of Chromium, Firefox, or WebKit.
>
> **[1:24](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=84)** This version that is packaged with each version released with Playwright.
>
> **[1:29](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=89)** To see these, you can go visit the release notes.
>
> **[1:32](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=92)** Let's check out the browser version for Playwright release 1.46.
>
> **[1:38](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=98)** So let's find our Playwright release notes.
>
> **[1:40](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=100)** This is version 1.46.
>
> **[1:42](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=102)** If I scroll down, I can see the browsers released with 1.46 are Chromium 128, Firefox 128, and WebKit 18.
>
> **[1:52](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=112)** What this means is you'll be limited to using whatever browser version is bundled with Playwright.
>
> **[1:59](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=119)** This is one of the trade-offs you take with Playwright with the benefit of the browsers can be installed with a single command.
>
> **[2:06](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=126)** Let's go back to our project code.
>
> **[2:08](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=128)** Projects can also be used to set up data, to segregate tests, or to override certain browser configurations on a per-project basis.
>
> **[2:19](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=139)** So let's go ahead and walk through the steps on how to create a project with a setup dependency.
>
> **[2:25](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=145)** This will ensure that the setup project is always run and passes before running any other projects.
>
> **[2:33](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=153)** So to do this, the first thing we want to do is find our project array and we're going to add a new object.
>
> **[2:43](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=163)** So it's going to be open curlys, we're going to type in name.
>
> **[2:48](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=168)** The name: "setup", we're going to add a comma.
>
> **[2:52](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=172)** We're going to add testMatch, and we're going to add some regex or a regular expression.
>
> **[3:01](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=181)** You don't have to know exactly what this does.
>
> **[3:04](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=184)** You can trust me a bit here.
>
> **[3:06](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=186)** This option is what Playwright looks at to know how to match file names as test for the project.
>
> **[3:14](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=194)** Specifically, we'll be naming our setup files as name.setup.ts rather than name.spec.ts, which is a default setting.
>
> **[3:24](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=204)** Next, we'll go into the other projects that are active, and add the option dependencies with the value array with a string of setup in between.
>
> **[3:35](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=215)** So under the chromium project, we're going to add dependencies.
>
> **[3:39](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=219)** We're going to make an array. We're going to type in setup.
>
> **[3:43](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=223)** We're going to add a comma at the end, and we're going to add this to the other sections as well, so WebKit and Firefox.
>
> **[3:55](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=235)** What this is going to do is before each of these projects run, it's going to ensure that the dependencies, whatever is set here, which is the setup name, run successfully before those run.
>
> **[4:10](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=250)** It's important to note that the Playwright config does have a lot of defaults that are used even though they aren't listed as options in the command.
>
> **[4:18](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=258)** For example, I mentioned the default setting for spec matching name.spec.ts.
>
> **[4:24](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=264)** Well, let's take a look at the docs and what that actually looks like as a test matcher.
>
> **[4:31](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=271)** So the actual code or the actual default underneath is this glob pattern here that's actually looking for spec or test dot j or ts.
>
> **[4:42](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=282)** That's what that is doing.
>
> **[4:44](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=284)** This means that [[JavaScript]] or TypeScript files with .test or .spec will get picked up by default.
>
> **[4:51](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=291)** This default setting will be applied to the projects unless we overwrite it.
>
> **[4:56](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=296)** Some other useful defaults that are worth calling out, grep, this will match the test title or tags.
>
> **[5:03](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=303)** This is useful to group certain tests to a certain project.
>
> **[5:07](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=307)** We also have grepInvert.
>
> **[5:09](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=309)** This will match tests that are not included in the test or title tags.
>
> **[5:14](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=314)** We've got testDir.
>
> **[5:16](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=316)** This allows you to set a test directory that the project will recursively scan to identify test and the directory.
>
> **[5:24](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=324)** We also have testIgnore.
>
> **[5:26](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=326)** This allows you to specify patterns to match that will not be executed as test files.
>
> **[5:32](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=332)** And then there's use, which we discussed earlier.
>
> **[5:35](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=335)** This section is where you can set many different options.
>
> **[5:39](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=339)** Those options can be found here in this section.
>
> **[5:44](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=344)** One option that we want to go ahead and add to our test is the permission for clipboard-read.
>
> **[5:50](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=350)** So let's go ahead and do that.
>
> **[5:52](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=352)** We're going to add this for chromium.
>
> **[5:54](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=354)** We're going to come after our devices, we're going to add a comma.
>
> **[5:58](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=358)** We're going to add permissions with an S.
>
> **[6:02](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=362)** We're going to make an array, we're going to type in clipboard-read.
>
> **[6:08](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=368)** We're just going to make sure everything is good.
>
> **[6:11](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=371)** We'll save it.
>
> **[6:12](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=372)** This will allow me to programmatically access the clipboard within Chrome.
>
> **[6:17](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=377)** So these are the types of things that you can pass in to different projects.
>
> **[6:22](https://www.linkedin.com/learning/learning-playwright/playwright-config-browsers-and-projects?u=76281980&t=382)** We've only touched the surface of what can be done through the Playwright config, but this should be enough to get you headed in the right direction for success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Prerequisites:** setup (8), configure (1), set up (1)
> **CLI Commands:** make (3), find (2), grep (1)
> **Documentation:** spec (5), the docs (1)
> **Tools:** firefox (4), safari (1)
> **Code Identifiers:** testmatch (1), grepinvert (1), testdir (1), testignore (1)
> **File Paths:** name.spec.ts (2), name.setup.ts (1)
> **Versions:** 1.46 (2), version 1 (1)

#### [Exploring the test runner command line interface](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=0)** - [Instructor] One of the main ways that Playwright tests are run is through the command line interface, or as I'll refer to it in this video, the [[CLI]].
>
> **[0:09](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=9)** To run commands within VS Code this way, you can select the Terminal dropdown, and select New Terminal.
>
> **[0:17](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=17)** In this video, we'll walk through and run tests using some of the most useful commands.
>
> **[0:22](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=22)** A full list of the commands can be found in the official Playwright docs.
>
> **[0:27](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=27)** One thing to note is any options passed into the Playwright command when running from the CLI will override any configuration settings that are set in the Playwright config.
>
> **[0:39](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=39)** For example, if I wanted to run all my tests in headed mode, meaning the browsers will pop up and I'll be able to see the actions, there's two things I can do.
>
> **[0:49](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=49)** I can go update the Playwright config file, or I can just pass in the option through the CLI headed in the command line interface.
>
> **[0:58](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=58)** So let's go ahead and run that command.
>
> **[1:01](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=61)** It is going to be npx, space, playwright, space, test, --headed.
>
> **[1:07](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=67)** (keys clicking) This should run all the projects in headed mode.
>
> **[1:13](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=73)** So you see Firefox, you see Chrome, you see WebKit all opened up.
>
> **[1:17](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=77)** So six tests passed, six tests will run.
>
> **[1:20](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=80)** Another popular option is passing in the --project with a project name.
>
> **[1:26](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=86)** For our example, let's pass in the Chromium project name.
>
> **[1:30](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=90)** So npx, space, playwright, space, test,
>
> **[1:34](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=94)** - -project, space, chromium.
>
> **[1:38](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=98)** I'm going to type Enter.
>
> **[1:39](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=99)** And now, we'll see only two tests get run.
>
> **[1:41](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=101)** So we're only running the Chromium project.
>
> **[1:45](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=105)** What's really nice about this command is you can pass in multiple projects by passing in another project option.
>
> **[1:53](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=113)** So I'm going to hit the up arrow key to get my previous command, and I'm just going to add onto it --project, space, firefox.
>
> **[2:04](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=124)** I'm expecting, when I run this, for four tests to run.
>
> **[2:08](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=128)** Four tests, four workers, Firefox, Chromium, everything passed.
>
> **[2:13](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=133)** Another thing that's nice about the project option is it is an argument, and the argument can also be matched to regular expressions.
>
> **[2:24](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=144)** So for example, I can type in npx playwright test --project, space, I'm going to put a quote here, "*omium," and that is going to match the Chromium project.
>
> **[2:40](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=160)** I did have to put quotes here due to the star.
>
> **[2:43](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=163)** In some terminals, you may have to escape that with a backslash.
>
> **[2:48](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=168)** It depends on what operating system you're on.
>
> **[2:50](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=170)** To make things simpler in our project, I'm going to take a minute and comment out our Firefox and WebKit projects in our Playwright config.
>
> **[2:58](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=178)** So I'm going to click playwright.config.
>
> **[3:01](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=181)** We're going to scroll down to our project section, and I'm going to go ahead and comment these two out.
>
> **[3:09](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=189)** So by doing this, I'm holding down Shift as I click from top to bottom, I'm going to hold down Command or Control, and I'm going to press the back slash key.
>
> **[3:18](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=198)** That's the key that is connected with a question mark.
>
> **[3:23](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=203)** And that's going to comment out all my selected files.
>
> **[3:26](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=206)** I'm going to go ahead and save my file.
>
> **[3:29](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=209)** I also might need to take out this last comma on this object.
>
> **[3:34](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=214)** So let's go ahead and I'm just going to run the previous command, just to make sure all the tests pass.
>
> **[3:41](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=221)** Alright, my config's good, all the tests passed, everything's good.
>
> **[3:45](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=225)** Before we move on, there are a few other useful commands that could come in handy as your Playwright project grows.
>
> **[3:52](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=232)** For example, you can narrow down your runs further by running all the tests within a specific file.
>
> **[3:59](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=239)** To do this, I'm going to hit the up arrow key to get the previous command, I'm going to add on here /example.spec.ts.
>
> **[4:09](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=249)** I'm going to run that, and that should run the two tests in this example file.
>
> **[4:14](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=254)** What's even a little more crazy is you can run the specific test from the file if you specify the line number of the file.
>
> **[4:23](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=263)** So in our example, the second test starts on line 10.
>
> **[4:27](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=267)** So I'm going to hit the up arrow key in my terminal again, add a colon, and add 10 to indicate the 10th line.
>
> **[4:35](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=275)** Running this test, I would only expect one test to run, the test get started link.
>
> **[4:41](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=281)** And it did, and it passed.
>
> **[4:43](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=283)** You may have run into a situation where you've had a group of tests that you didn't want to group in the same folder, but you did want to run them all together.
>
> **[4:53](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=293)** There's another option called grep, G-R-E-P, it lets you accomplish this goal.
>
> **[4:59](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=299)** First you must categorize your test, and for this, we're going to use the Playwright tagging functionality.
>
> **[5:05](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=305)** So if I hover over this test option, yeah, I've got some nice inline documentation.
>
> **[5:13](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=313)** And here, there is details about tags, "You can tag tests by providing additional test details.
>
> **[5:19](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=319)** Alternately, you can include tags in the test title."
>
> **[5:23](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=323)** This example, they have the test, the test title, and they have a comma, an open param, tag, with a string, and then the closed param.
>
> **[5:33](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=333)** This is all before the async page.
>
> **[5:35](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=335)** So let's go ahead and add a tag to this test, on line 10.
>
> **[5:40](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=340)** (keys clicking) Tag, colon.
>
> **[5:43](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=343)** And we're going to make this called first, and we're going to add the comma afterwards.
>
> **[5:49](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=349)** We should save it, and everything is happy.
>
> **[5:52](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=352)** Now, if we wanted to run this code or just the first test, the way we would do that is by typing npx playwright test.
>
> **[6:02](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=362)** We're going to do --grep, space, @first.
>
> **[6:08](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=368)** This should only run the first tag in the test.
>
> **[6:13](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=373)** Well, let's say I want to run all the tests except for the tag first, well there's a nice command for that.
>
> **[6:19](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=379)** I'm going to hit the up arrow again, and we're going to change this grep to grep-invert.
>
> **[6:26](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=386)** And this will run all the tests that do not have the first tag.
>
> **[6:32](https://www.linkedin.com/learning/learning-playwright/exploring-the-test-runner-command-line-interface?u=76281980&t=392)** Learning these commands will allow you to build very specific CI/CD pipelines, ensuring the right tests are run against the right browsers and projects and feature set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (3)
> **CLI Commands:** npx (4), grep (4), make (3), cd (1)
> **Tools:** firefox (4), terminal (3), command line (2), vs code (1)
> **Env Vars:** cli (3)
> **UI Navigation:** select the (1), dropdown (1), scroll down (1)
> **Analogies:** for example (3)
> **File Paths:** playwright.config (1), example.spec.ts (1)
> **Non-Speech:** (keys clicking) (2)

#### [Overview of package.json](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of the different ways we can run our Playwright tests from the command line, let's take a look at the package.[[JSON]] file.
>
> **[0:10](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=10)** We'll start by, what is it?
>
> **[0:12](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=12)** It is a file that gets generated as a part of the initialization of a project.
>
> **[0:17](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=17)** You can think of it as a cookbook for your project.
>
> **[0:20](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=20)** This file tells you what packages and versions should be installed in the node_modules directory.
>
> **[0:26](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=26)** Let's pull up our package.json file now.
>
> **[0:30](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=30)** As you can see, from the file and from the file extension, this is a JSON file.
>
> **[0:35](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=35)** So any additions or updates to this must respect that format.
>
> **[0:39](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=39)** In our project, we have two dependencies currently, playwright/test and types/node.
>
> **[0:46](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=46)** Each of them also have a version associated with them.
>
> **[0:50](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=50)** As you add additional packages, this list will grow.
>
> **[0:55](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=55)** So what are some of the features?
>
> **[0:56](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=56)** You know, all the [[npm]] commands that you've run from the command line, those are commands that use the NPM [[CLI]] command line interface.
>
> **[1:07](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=67)** npm install, for example, is one of the most common commands.
>
> **[1:11](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=71)** What that does is it creates and updates this package-lock.json file, and it installs all the different libraries in this node_modules folder.
>
> **[1:24](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=84)** For this course and [[Test Automation]] projects in general, there are only two areas in the package.json that matter most.
>
> **[1:31](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=91)** This dependencies, this is where new packages will get installed and you can manage the version of these packages.
>
> **[1:38](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=98)** For example, when Playwright 48 gets released, I can come in here and update this to 48, save the file, do an npm install and it will install the latest version of Playwright.
>
> **[1:52](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=112)** There's also the scripts section on line six.
>
> **[1:55](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=115)** This allows us to create an alias for longer commands to be run from the terminal, making our lives and our developers lives much easier as our project grows.
>
> **[2:07](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=127)** So let's look at a few examples.
>
> **[2:10](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=130)** For our first example, let's create a basic alias named test.
>
> **[2:15](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=135)** The goal of test, for it to be able to run NPX Playwright test.
>
> **[2:20](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=140)** So let's do that.
>
> **[2:21](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=141)** So here, I'm going to add a string of test.
>
> **[2:26](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=146)** This is kind of like the key.
>
> **[2:28](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=148)** The value here will be npx space playwright space test, and we're going to save it.
>
> **[2:36](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=156)** Now, if I run npm run test, it will now execute npx playwright test.
>
> **[2:46](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=166)** So you can think this is like an alias.
>
> **[2:49](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=169)** Let's add a few more commands.
>
> **[2:51](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=171)** Now let's create a command to run the chromium project.
>
> **[2:55](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=175)** So to run that, I'm going to add a comma.
>
> **[2:58](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=178)** I'm going to set the name to test:chromium, and the command we're going to run is npx space playwright space test dash dash project space chromium.
>
> **[3:15](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=195)** So now I should be able to run npm run test:chromium, and this should run the chromium project.
>
> **[3:25](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=205)** I'm a really big fan of using this colon syntax in my script commands because it makes it really easy to read and really easy to follow.
>
> **[3:33](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=213)** So we're going to go ahead and add a few more of these commands, and I'm just going to just do a little bit of copying and pasting to save us a little bit of typing, but it'll be test.
>
> **[3:45](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=225)** Let's add one for the first tag, so we're going to run test:first.
>
> **[3:51](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=231)** And here, we will have a dash dash grep and the tag will be first.
>
> **[3:57](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=237)** And let's go ahead and create one for, you know, maybe we want to run our test against a local branch, so maybe we'll bypass the base URL.
>
> **[4:06](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=246)** So this is a common example, even though we won't be using this in this course, but this will be useful.
>
> **[4:12](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=252)** So we're going to set the BASE_URL, the BASE_URL environment variable, set to http, localhost 4200 is where the UI runs for this one.
>
> **[4:29](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=269)** So what this allows me to do now is if I'm running the project on my local, I can run just this different test command, test:local, and it will pass in this environment variable called BASE_URL.
>
> **[4:42](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=282)** All right, we're going to add two more.
>
> **[4:46](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=286)** We're going to add one with a test:report.
>
> **[4:50](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=290)** So this is going to by default run the test, and then after the test is run, it's going to go ahead and run a second command to actually open up the test:report.
>
> **[5:01](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=301)** So the test:report will open whether it passes or failed, playwright show-report.
>
> **[5:09](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=309)** So in this example, I'm actually chaining two different commands.
>
> **[5:12](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=312)** So test colon:report will run this first command.
>
> **[5:16](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=316)** Once that's done, it's going to run the npx playwright show-report command.
>
> **[5:21](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=321)** And the last one we're going to add down here is test:ui And what this is going to do is it's just a shortcut to run Playwright in UI mode, which is useful when you are debugging your tests, dash dash UI, and we're going to save this.
>
> **[5:40](https://www.linkedin.com/learning/learning-playwright/overview-of-package-json?u=76281980&t=340)** Having scripts built and stored in the package.json file will empower you and other developers and testers and CI pipelines to the project to have easy access to specific ways to run your automated tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (6), [[npm]] (6), [[CLI]] (1), [[Test Automation]] (1)
> **CLI Commands:** npm (6), npx (5), node (1), grep (1)
> **Env Vars:** base_url (3), npm (2), json (1), cli (1), npx (1)
> **File Paths:** package.json (4), package-lock.json (1)
> **Tools:** command line (3), terminal (1)
> **Analogies:** for example (2), think of it as (1), kind of like (1)
> **Prerequisites:** install (3), initialization (1)
> **Definitions:** is a  (3)

#### [Exploring the VS Code extension](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=0)** - [Instructor] Another tool you'll find useful while in your Playwright journey is the Playwright Test VS code extension.
>
> **[0:07](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=7)** This can be installed via the URL and the resources handout, or in the extensions tab, you can type in Playwright test and look for the extension that's released by [[Microsoft]].
>
> **[0:19](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=19)** Once this is installed, which you may have to reboot your VS code, you'll have access to this test speaker.
>
> **[0:28](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=28)** If for some reason you don't see any of your tests loading in this section up here, one thing you'll always want to check is just to ensure that the projects that you have set up in your config file are checked.
>
> **[0:43](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=43)** So if I were to uncheck our Chromium and refresh this, it's likely these tests would not show up.
>
> **[0:49](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=49)** But with these set up and Chromium installed, we see the test load and everything is happy.
>
> **[0:56](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=56)** Now this test is the directory.
>
> **[0:58](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=58)** The example .spec is the spec file that was bundled.
>
> **[1:03](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=63)** This is our default Playwright test, and we're just going to interact with this section up here.
>
> **[1:10](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=70)** So you've got a way to filter different tests.
>
> **[1:13](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=73)** So if I need to filter by has or found a filter by @first, which is one of the tags that we added, you can actually see that things will get filtered properly.
>
> **[1:26](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=86)** So this is the get started link test that is filtered there.
>
> **[1:30](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=90)** And you also have a way to run test in lots of different ways.
>
> **[1:35](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=95)** I can run all the tests by just clicking this play button.
>
> **[1:38](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=98)** I can run a specific spec file, which in this case are two different tests, or I can run a specific test just by clicking these buttons over here.
>
> **[1:48](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=108)** This second button here, that's a play button with a bug on it, is a way to debug your test.
>
> **[1:54](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=114)** Now this is a really useful tool that you'll use a lot when you are writing tests and maintaining tests and trying to understand what's happening within the browser.
>
> **[2:03](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=123)** And to enable this, I'm going to add a debug breakpoint here.
>
> **[2:10](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=130)** I'm going to debug this test.
>
> **[2:12](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=132)** Now, anytime you debug a test, this will open up a browser and it's going to pause the browser on the step that you are debugging.
>
> **[2:21](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=141)** So I went to this webpage.
>
> **[2:23](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=143)** I'm waiting to get this role by link, name, get started.
>
> **[2:29](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=149)** And the goal on this line of code is to click it.
>
> **[2:32](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=152)** So you can actually see this get started.
>
> **[2:34](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=154)** It is actually highlighted.
>
> **[2:35](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=155)** This is Playwright actually showing this off, and I can use this debug toolbar up here to do different things.
>
> **[2:44](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=164)** So this button right here will continue the test.
>
> **[2:47](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=167)** So it would continue it all the way to the end.
>
> **[2:50](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=170)** This step over will basically step over to the next line of code.
>
> **[2:56](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=176)** And then this is very interesting.
>
> **[2:58](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=178)** This is where you can actually step into code.
>
> **[3:00](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=180)** So this would actually step into this page .getrole and actually dip down into the Playwright logic if you really want to understand what's happening.
>
> **[3:11](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=191)** And you've got a restart and you've got a stop as well.
>
> **[3:14](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=194)** So in this scenario, I'm just going to step over.
>
> **[3:17](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=197)** I found this is a really useful thing.
>
> **[3:19](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=199)** So it should have clicked the get started link.
>
> **[3:22](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=202)** And now we are expecting the page role heading name installation to be visible.
>
> **[3:29](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=209)** So I'm just going to pull up the browser here.
>
> **[3:30](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=210)** And it looks like this is actually the element that it's looking for, and it looks like it's visible.
>
> **[3:36](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=216)** So this test should pass.
>
> **[3:39](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=219)** So I'm going to step over to the end.
>
> **[3:41](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=221)** I'm actually going to continue all the way through.
>
> **[3:44](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=224)** And the test passed.
>
> **[3:48](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=228)** Debugging is also really useful if you're wanting to look at different variables or things like that.
>
> **[3:53](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=233)** And we will show an example later in this course on how to debug a little deeper.
>
> **[3:58](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=238)** Another useful icon here is this icon here.
>
> **[4:03](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=243)** This will take you to the test.
>
> **[4:04](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=244)** So if you're working with a big long list of tests, and you want to go directly to test, you can click that button and it will take you to the test specifically.
>
> **[4:13](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=253)** So you're not having to do a bunch of searching.
>
> **[4:15](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=255)** And this last icon is also very interesting.
>
> **[4:19](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=259)** This is turning on continuous run.
>
> **[4:21](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=261)** So what this will do, you can enable this for your whole suite or just for a specific test, is if you are making changes to the test file, and as you save those changes, it's actually going to attempt to rerun the test and see if it passes or fails.
>
> **[4:37](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=277)** So I'm just going to change this to installation.
>
> **[4:41](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=281)** It's going to be wrong. I'm expecting this to fail.
>
> **[4:45](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=285)** Looks like it'll fail in a couple seconds, I think. Yep.
>
> **[4:48](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=288)** So hey, that's not correct. It's failing.
>
> **[4:50](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=290)** If I go fix it, it's going to run it, it's going to pass.
>
> **[4:54](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=294)** But anytime I save the file, it's going to execute the test, which can be really useful if you're debugging through some stuff.
>
> **[5:04](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=304)** All right, so I'm going to un-click that, and we're going to dive down into this next section down here, the Playwright section, specifically the settings to allow us to show a browser.
>
> **[5:15](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=315)** So by default, when we're running these, the browser's not popping up.
>
> **[5:18](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=318)** But if I wanted to show the browser, I could enable that and the browser button will stay up.
>
> **[5:23](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=323)** And as I run another test, it'll actually continue to pop the browser up.
>
> **[5:28](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=328)** So I'm going to un-click that.
>
> **[5:30](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=330)** You can also show the trace viewer.
>
> **[5:32](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=332)** That's another very useful tool.
>
> **[5:35](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=335)** So you can actually see what happened during the test.
>
> **[5:39](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=339)** We'll look into this a little later as we explore things.
>
> **[5:44](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=344)** And this is another tool that we're going to look at as well.
>
> **[5:48](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=348)** This is the record a new test.
>
> **[5:52](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=352)** So I'm going to click this button.
>
> **[5:53](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=353)** What this is going to do is it's going to open up a web browser.
>
> **[5:58](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=358)** We've got the test that has basically been written down here, and as we interact with the web browser, it's going to record things.
>
> **[6:07](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=367)** I'm going to go ahead and type in the Playwright site, [Playwright.dev](https://Playwright.dev).
>
> **[6:13](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=373)** I'm going to enter, and from here, any of these actions, I can click on them, interact with them.
>
> **[6:20](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=380)** I'm actually going to click on community, I'm going to find ambassadors.
>
> **[6:25](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=385)** Let's go ahead and click on that.
>
> **[6:28](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=388)** And so I've got a couple different options up here.
>
> **[6:31](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=391)** So I can pick a locator, assert visibility, assert some text.
>
> **[6:37](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=397)** So let's just go ahead and assert some text.
>
> **[6:38](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=398)** We're going to assert that Butch Mayhew is still on the ambassador page.
>
> **[6:43](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=403)** You know, maybe one day I'm not.
>
> **[6:45](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=405)** But as you can see, we've actually got some code that's been written for us.
>
> **[6:50](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=410)** So I'm going to go ahead and close this.
>
> **[6:52](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=412)** So that's going to, you know, stop the recording.
>
> **[6:56](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=416)** And let's just play this.
>
> **[6:57](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=417)** I'm going to show the browser, make sure it is working.
>
> **[7:02](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=422)** All right, so it ran, it passed, and now we have a new test.
>
> **[7:07](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=427)** Testone.spec.ts.
>
> **[7:10](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=430)** Recording a new test is actually a powerful tool that we'll use in a future section.
>
> **[7:15](https://www.linkedin.com/learning/learning-playwright/exploring-the-vs-code-extension?u=76281980&t=435)** Feel free to take a few minutes and explore the functionality on your own before the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Documentation:** spec (4)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (3)
> **Cross-References:** later in (1), next video (1)
> **Tools:** vs code (2)
> **Prerequisites:** set up (2)

#### [Exploring the Playwright UI Mode](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=0)** - [Instructor] For those times when you want to create and update Playwright test on your local machine and get immediate feedback anytime a test is changed, Playwright UI mode is the tool to do it.
>
> **[0:11](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=11)** To start playwright UI mode, we can use the MPM run script that we created from the previous videos, "[[npm]] run [[Representational State Transfer (REST)|rest]]:ui".
>
> **[0:22](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=22)** This is going to run the NPX Playwright test UI command, and you can see it is loaded.
>
> **[0:29](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=29)** On the left hand side, you'll notice a similar interface to VS Code in order to run your test.
>
> **[0:35](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=35)** You'll also notice that this first tag is one of the tags we added, is available here.
>
> **[0:40](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=40)** I can even click on it and filter down by all those tags, which is really useful when you have a larger test suite.
>
> **[0:48](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=48)** You can also run all the tests here or use F5, the keyboard shortcut to do that.
>
> **[0:55](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=55)** I'm going to go ahead and run these.
>
> **[0:57](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=57)** So all the tests ran, everything passed.
>
> **[1:00](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=60)** These did run in headless mode, but you can see on the right hand side when I go look at some of the details, that we actually do have a picture of the dom.
>
> **[1:13](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=73)** So even though the browser didn't pop up, we've got this information over here.
>
> **[1:18](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=78)** The first thing you can notice is each of these different steps will change what you see on the webpage and you can even hover over this timeline and go into the future or back to the future.
>
> **[1:33](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=93)** Feeling like Marty McFly a little bit?
>
> **[1:35](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=95)** Not only can you see the steps over here, but you can also look at the source code.
>
> **[1:41](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=101)** So as each step happens, you can actually step and see, you know, what code is actually being called to run these things.
>
> **[1:50](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=110)** Below the web view, you can also see a ton of other information.
>
> **[1:55](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=115)** I'm specifically going to look at the logs.
>
> **[1:57](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=117)** So these are Playwright logs.
>
> **[1:59](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=119)** So for example, to be able to click this doc in the sidebar, this is all the steps that Playwright did to go do that.
>
> **[2:10](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=130)** This can be really helpful when debugging or looking into errors into your test if you're having issues with trying to find a locator.
>
> **[2:19](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=139)** You also have access to different errors if there's on the page or any console errors.
>
> **[2:25](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=145)** You also have access to network requests.
>
> **[2:27](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=147)** This is a superpower, we will look into this in the future, but just know that it exists.
>
> **[2:34](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=154)** Let's shift our focus up to this timeline view.
>
> **[2:36](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=156)** Another nice thing is you can click and drag and actually show which steps based on this timeline.
>
> **[2:45](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=165)** So just another useful thing, there's a lot of hidden goodies that aren't noticeable when you first start looking at it.
>
> **[2:52](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=172)** I'll show one other section in this locator click, so this is the ambassador click step.
>
> **[3:00](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=180)** You can see the action, which is currently highlighted, but you can also see, what did it look like before the action?
>
> **[3:06](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=186)** And then what did it look like after the action?
>
> **[3:09](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=189)** So you can kind of see how the page changes, how the link turned green, you know, once it's active.
>
> **[3:16](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=196)** And you can also see the action itself, indicated by the red circle.
>
> **[3:21](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=201)** Not only that, but let's say I wanted to interact with the video element, I can use this pick locator, it looks like a target.
>
> **[3:29](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=209)** I can click video link and now I have Playwright generated code that I could go add to my code and update a locator if I wanted to click on something different.
>
> **[3:41](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=221)** So let's see what happens if a test fails in this scenario.
>
> **[3:46](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=226)** Let me go pull up my test file.
>
> **[3:49](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=229)** We're going to go use this section.
>
> **[3:51](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=231)** Let's say that we're looking for Butch Maghew and I'm going to go ahead and rerun the test in this mode
>
> **[4:07](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=247)** and we can see the test is running, I can kind of see it in real time, and it looks like it failed.
>
> **[4:13](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=253)** So I can click here to see why it failed.
>
> **[4:15](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=255)** I can see up in this section, you know, the timeline of which it failed, and I can come down here and see the errors.
>
> **[4:22](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=262)** And this is it.
>
> **[4:23](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=263)** "The expected string Butch Maghew is not included in this receive string."
>
> **[4:29](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=269)** So if I wanted to fix this, let's just go ahead and turn on the watch mode.
>
> **[4:35](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=275)** So it should automatically run as soon as I save it.
>
> **[4:39](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=279)** Let's go fix our test. We'll save it.
>
> **[4:43](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=283)** Looks like it's already run, it's already passed, and everything is good to go.
>
> **[4:48](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=288)** So the reason this tool is so important and so helpful is it gives you instantaneous feedback as you're building your test, as you're running your test, without having to click through or open manual reports.
>
> **[5:02](https://www.linkedin.com/learning/learning-playwright/exploring-playwright-ui-mode?u=76281980&t=302)** Everything is right here at your fingertips, ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** npm (1), npx (1), find (1)
> **UI Navigation:** click on (2), in the sidebar (1)
> **Env Vars:** mpm (1), npx (1)
> **Analogies:** picture (1), for example (1)
> **Tools:** vs code (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)


### 2. Creating Tests with Playwright

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of the website under test](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=0)** - [Instructor] From here on out, we'll be using a dedicated site to test against, [practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[0:08](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=8)** This is a site built by Roy de Kleijn and is useful for practicing [[Software Testing]], hence the name.
>
> **[0:15](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=15)** It's always a good idea to take some time and explore the website you plan to automate, so let's do that now.
>
> **[0:21](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=21)** In the resource guide, we have a link to it.
>
> **[0:23](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=23)** The first thing I notice when I visit the site is there's a lot of images that are tools.
>
> **[0:28](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=28)** It almost looks like it's a shop, maybe an [[E-Commerce]] store.
>
> **[0:32](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=32)** On the left hand side, I do notice there's a lot of different ways to filter things.
>
> **[0:37](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=37)** I can filter down by a wrench and I see different wrenches.
>
> **[0:41](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=41)** I can filter down by a specific brand and that will filter things down on the brand.
>
> **[0:48](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=48)** If I go look at the URL, I see there's no URL parameters.
>
> **[0:53](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=53)** That's interesting.
>
> **[0:55](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=55)** I wonder how it knows how to filter?
>
> **[0:58](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=58)** This also looks like there's a sign in page and maybe there's a cart, potentially?
>
> **[1:05](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=65)** If I click one of these, okay, so I can probably add something to cart.
>
> **[1:09](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=69)** So these are all interesting things.
>
> **[1:11](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=71)** Let's take a look a little deeper and see on the network tab.
>
> **[1:17](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=77)** So I right clicked, I clicked inspect, I opened up the network tab and I clicked this [[Fetch]] XHR.
>
> **[1:27](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=87)** This filters down any request only to API calls.
>
> **[1:32](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=92)** Let me go ahead and click the wrench category again.
>
> **[1:36](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=96)** I see there's a new call down here and I see it's actually hitting an API.
>
> **[1:40](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=100)** So api.[practicesoftwaretesting.com/products](https://practicesoftwaretesting.com/products) and then that has some query parameters with a price and some other stuff.
>
> **[1:50](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=110)** And I can actually see the data that's actually returned matches up with what's on the screen.
>
> **[1:56](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=116)** One, two, three different items.
>
> **[1:59](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=119)** So this is going to be a nice site to test with 'cause it's probably similar to a site you might be testing with in a professional setting.
>
> **[2:07](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=127)** Let's take a look now at the sign in page.
>
> **[2:10](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=130)** So I'm going to close the network tab.
>
> **[2:12](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=132)** Let's click sign in.
>
> **[2:14](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=134)** Let me just go ahead and look at the URL.
>
> **[2:16](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=136)** So this is [practicesoftwaretesting.com/off/login](https://practicesoftwaretesting.com/off/login).
>
> **[2:22](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=142)** And we need a login.
>
> **[2:25](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=145)** Good thing Mr. Roy has built a nice little [[GitHub]] repo page, which actually has some provided logins.
>
> **[2:33](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=153)** So this is another companion that's in your resource page to go check out the GitHub repo that this site lives in.
>
> **[2:42](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=162)** If I scroll down, I can see we've got some default accounts.
>
> **[2:45](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=165)** We've got [[John the Ripper|John]] Doe, Jane Doe with an email address and a password.
>
> **[2:49](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=169)** This is going to be helpful for testing different scenarios.
>
> **[2:53](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=173)** There's also some different versions of the website.
>
> **[2:57](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=177)** So if you want to look at a version with bugs, those exist.
>
> **[3:01](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=181)** We're not going to get into that in this lesson, but feel free to explore that on your own.
>
> **[3:07](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=187)** Let's go ahead and use one of these logins.
>
> **[3:09](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=189)** We'll use the user login.
>
> **[3:12](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=192)** So customer, I'm just going to copy this.
>
> **[3:15](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=195)** I'm going to take note that the password is welcome01, and let's go ahead and utilize this.
>
> **[3:22](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=202)** I'm going to paste customer@practicesoftwaretesting.
>
> **[3:25](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=205)** I'm going to type in welcome01.
>
> **[3:28](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=208)** I'm going to click login.
>
> **[3:30](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=210)** And I see that yes, I'm in an authenticated section where I've got a profile and some other information.
>
> **[3:38](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=218)** So in all this, let's go ahead and just run through maybe the happiest path scenario that I can think of that's more of an end-to-end test.
>
> **[3:48](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=228)** So let's go try to add one of these tools to our cart and attempt to check out.
>
> **[3:52](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=232)** So I'm going to pick the combination pliers.
>
> **[3:56](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=236)** We're going to add it to cart.
>
> **[3:58](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=238)** Okay, so it looks like we've got a little notification.
>
> **[4:01](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=241)** We've got a cart icon that shows up.
>
> **[4:03](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=243)** It looks like I have to click on the cart icon to go through the process.
>
> **[4:08](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=248)** And we're just going to walk through this, step through this and add any additional information as needed.
>
> **[4:15](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=255)** So maybe we'll add a state, maybe add a postal code.
>
> **[4:21](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=261)** And we're just adding random test data, payment method.
>
> **[4:26](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=266)** Let's choose cash on delivery and see what happens.
>
> **[4:30](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=270)** We'll click confirm.
>
> **[4:31](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=271)** All right, it tells me the payment is successful.
>
> **[4:34](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=274)** This is useful information as we can walk through and validate this in a test.
>
> **[4:41](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=281)** Feel free to take some additional time and explore the site before the next video.
>
> **[4:46](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=286)** Feel free to look deeper into web tools, see what other APIs are available.
>
> **[4:51](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=291)** All these are available for us to utilize with Playwright.
>
> **[4:54](https://www.linkedin.com/learning/learning-playwright/overview-of-the-website-under-test?u=76281980&t=294)** So understanding the site under tests will only make it easier as we start automating certain actions in the site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Software Testing]] (1), [[E-Commerce]] (1), [[Fetch]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** url (3), api (2), xhr (1)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (3)
> **Tools:** github (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Exercise Files:** github repo (2)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)

#### [Generating tests with codegen](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=0)** - [Instructor] One of the most useful tools that Playwright offers when getting started with your first test is the Code Gen tool.
>
> **[0:06](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=6)** This is short for Code Generator.
>
> **[0:08](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=8)** This tool will help us give a headstart by recording locators that we interact with to build out our first test from scratch against the website that we're testing against.
>
> **[0:19](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=19)** To run the Code Gen tool, you can run the command MPX space Playwright, space Code Gen.
>
> **[0:25](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=25)** So let's go ahead and run that.
>
> **[0:27](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=27)** (keyboard clacking) Upon hitting enter, you'll notice two [[Windows]] pop up.
>
> **[0:33](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=33)** You've got the Playwright inspector.
>
> **[0:36](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=36)** This is going to be where all of our code is generated to.
>
> **[0:40](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=40)** And you've got the Chrome browser over here.
>
> **[0:44](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=44)** This is where we're going to be browsing to the webpage.
>
> **[0:47](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=47)** So let's go ahead and put in the address bar, our [PracticeSoftwareTesting.com](https://PracticeSoftwareTesting.com) URL.
>
> **[0:53](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=53)** We're going to browse to it and for our first test, we are going to go ahead and record what a sign in flow would look like for the first customer.
>
> **[1:04](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=64)** So let's go ahead and click sign in.
>
> **[1:08](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=68)** Let's click our email.
>
> **[1:09](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=69)** We're going to type in customer@[practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[1:15](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=75)** The password, it's going to be welcome01.
>
> **[1:20](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=80)** We're going to click login and notice each time we interacted with the webpage, we have code that is generated for us.
>
> **[1:30](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=90)** Now this isn't quite a test yet, in my opinion.
>
> **[1:34](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=94)** We're doing a bunch of actions on the page, but we are not making any assertions.
>
> **[1:38](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=98)** So to make an assertion, we're going to go find this little AB.
>
> **[1:41](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=101)** This is going to let us assert on text.
>
> **[1:45](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=105)** I'm going to click it.
>
> **[1:46](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=106)** I'm going to go find some text that I want to assert on.
>
> **[1:49](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=109)** So I could choose Jane Doe.
>
> **[1:51](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=111)** I could choose my account.
>
> **[1:52](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=112)** Maybe we'll do both.
>
> **[1:54](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=114)** I'll choose Jane Doe first.
>
> **[1:55](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=115)** We're going to assert that the element contains the text, and let's also go ahead and just validate that my account is on the screen as well.
>
> **[2:04](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=124)** And you can see the code is being generated over here.
>
> **[2:09](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=129)** Now let's take a look at this code a little deeper.
>
> **[2:11](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=131)** But before we just get done, I want to copy this code.
>
> **[2:15](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=135)** So I should be able to click this button, should copy the code to the clipboard.
>
> **[2:20](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=140)** I'm going to go to my test folder.
>
> **[2:24](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=144)** We're going to create a new file.
>
> **[2:27](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=147)** We're going to call it login.spec.TS, and we're just going to paste that code in this file.
>
> **[2:37](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=157)** I'm going to go ahead and save it.
>
> **[2:38](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=158)** Also want to go ahead and run this just to make sure everything is working properly.
>
> **[2:43](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=163)** So one way to do that would be clicking on the testing icon and finding the test.
>
> **[2:48](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=168)** Right now is just named test.
>
> **[2:49](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=169)** Let's go ahead and name this to login test.
>
> **[2:54](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=174)** Or you can just click this green button here next to the test and we'll ensure that everything passes.
>
> **[3:04](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=184)** All right, so the test ran.
>
> **[3:07](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=187)** The test passed.
>
> **[3:09](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=189)** I'm going to go ahead and unclick this show browser, so in the future that will not be popping up on me.
>
> **[3:17](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=197)** Let's just run it one more time.
>
> **[3:20](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=200)** Everything looks good, it passed.
>
> **[3:23](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=203)** So I'm going to go ahead and commit this code to our repository and congratulations.
>
> **[3:28](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=208)** We just completed our first test.
>
> **[3:30](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=210)** Now the Code Gen tool is still running in the background.
>
> **[3:33](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=213)** You can either close it up here or you can hit control or command C at the terminal, and that will close the windows for us.
>
> **[3:41](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=221)** One other thing to note before we save and commit this is we will need to clean this up a bit.
>
> **[3:47](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=227)** So right now we are visiting the site.
>
> **[3:50](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=230)** We are clicking sign in, that's needed.
>
> **[3:52](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=232)** Page locator clicking email.
>
> **[3:55](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=235)** I don't think we need to click the email.
>
> **[3:57](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=237)** I think we can just fill it.
>
> **[3:58](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=238)** So I'm going to take off the click of the email and I'm also going to take off the click of the password field, and we're just going to fill those instead of clicking.
>
> **[4:10](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=250)** All right, I think everything's good.
>
> **[4:11](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=251)** Let's just run it one more time to make sure everything's passing.
>
> **[4:15](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=255)** All right.
>
> **[4:16](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=256)** You'll also notice in this video there are locators that are created with this data-test attribute.
>
> **[4:23](https://www.linkedin.com/learning/learning-playwright/generating-tests-with-codegen?u=76281980&t=263)** This is something we're going to be covering in the next videos as we look at different ways we can build locators for our tests from scratch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2)
> **CLI Commands:** make (3), find (2)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (2)
> **Env Vars:** mpx (1), url (1)
> **File Paths:** login.spec.ts (1)
> **Cross-References:** in the next (1)
> **Documentation:** spec (1)
> **Tools:** terminal (1)

#### [Overview of locator strategies in Playwright](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=0)** - [Instructor] Much like other test-automation tools, Playwright is able to interact with the DOM, which stands for [[Document Object Model (DOM)|Document Object Model]].
>
> **[0:09](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=9)** In many cases today, the DOM will look different than the original [[HTML]] as the DOM includes any [[JavaScript]] modifications.
>
> **[0:18](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=18)** The DOM is what is viewable when you use Chrome DevTools and look in the elements tab.
>
> **[0:24](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=24)** Playwright interacts with a DOM using two types of locators, the recommended built-in locators and the legacy locators, which include things like CSS selectors and XPATH, that you may be familiar with if you've done [[Test Automation]] before.
>
> **[0:39](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=39)** We will dive into different types of locators, along with some examples in this video.
>
> **[0:44](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=44)** This is a list of the built-in locators recommended to use first by the Playwright development team.
>
> **[0:52](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=52)** Let's take a look at a few of these.
>
> **[0:55](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=55)** The first is page.getByRole.
>
> **[0:58](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=58)** This example shows the syntax , we are getting the role button with the name sign in and we're clicking the button as the action.
>
> **[1:08](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=68)** One thing to note is if you're interacting with or asserting against an element, you will need the await syntax at the beginning of the locator.
>
> **[1:18](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=78)** You'll see this over and over in our examples, so take note.
>
> **[1:22](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=82)** In this next example you can see we are also able to get locators by text within the DOM.
>
> **[1:28](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=88)** The element within the DOM we want to interact with has text, Jane Doe.
>
> **[1:34](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=94)** In this specific line of code is expecting this element to be visible.
>
> **[1:39](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=99)** If for some reason an element that was matching this locator didn't exist or was hidden state, the Playwright test would fail.
>
> **[1:47](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=107)** When we look at getByLabel locator, this is typically useful for inputs within applications as labels are used for making websites more accessible.
>
> **[1:58](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=118)** In this example, we're calling the .fill method and passing in an email address.
>
> **[2:04](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=124)** This will automatically add the email string into the input box.
>
> **[2:09](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=129)** It uses JavaScript to do this.
>
> **[2:11](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=131)** If you need to actually type each letter, there is another command to do that.
>
> **[2:15](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=135)** Press sequentially, which you can check out in the Playwright docs.
>
> **[2:21](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=141)** Before we cover get by test ID, we will need to add this configuration option to our Playwright Config.
>
> **[2:28](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=148)** Within the define config use-section, we'll need to add testIdAttribute and set this to data-test because the website we are testing with uses this as the test ID attribute.
>
> **[2:44](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=164)** This overrides the Playwright default.
>
> **[2:47](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=167)** So let's take a minute and go ahead and update our local config file with this change, as we'll need it to be in place for the next session.
>
> **[2:56](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=176)** So I've opened up my Playwright config and I'm going to scroll down to the use section.
>
> **[3:03](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=183)** And within this use section, this is where we'll add this test ID attribute.
>
> **[3:08](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=188)** (keyboard keys clicking) We're going to set it to string data-test.
>
> **[3:16](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=196)** We'll have to add a comma here because this is a [[JSON]] file.
>
> **[3:22](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=202)** With that change in place against our test site, we can see the code getByTestId nav-sign-in.click.
>
> **[3:31](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=211)** We'll now click the sign-in button.
>
> **[3:34](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=214)** The previous get by test ID example can also be seen here using the legacy locator pattern.
>
> **[3:41](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=221)** This is setting the locator based on the data test ID custom attribute.
>
> **[3:47](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=227)** Note this example and the previous example are doing the exact same thing, but the syntax is slightly different.
>
> **[3:55](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=235)** The CSS locator's example allows you to pass any CSS selector after CCS equals.
>
> **[4:02](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=242)** This specific example is very generic, and if there is more than one button within the DOM, this test would likely fail with an error message letting us know that there are multiple buttons that were matched.
>
> **[4:16](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=256)** For examples where you want to combine locators, you can use any CSS selector.
>
> **[4:22](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=262)** In this example, we use the article and utilize the has text matcher that is provided within playwright locators.
>
> **[4:30](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=270)** More details can, of course, be found in the Playwright docs.
>
> **[4:34](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=274)** Legacy locators can also have two locators when splitting them with a comma.
>
> **[4:41](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=281)** This code would click a button with a text sign-in or login.
>
> **[4:46](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=286)** This isn't something that is used often, as most of our tests should be deterministic, but could be useful if you're writing tests for AB testing scenarios.
>
> **[4:58](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=298)** You're also able to utilize Xpath within the legacy locators.
>
> **[5:03](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=303)** I usually use this as a last resort as it's more difficult to maintain and less readable.
>
> **[5:10](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=310)** To review, you should use the recommended locators.
>
> **[5:13](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=313)** This is a good indication if your website is testable or not.
>
> **[5:18](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=318)** You're able to chain locators together or filter items to get to specific elements within the DOM that you want to interact or assert against.
>
> **[5:28](https://www.linkedin.com/learning/learning-playwright/overview-of-locator-strategies-in-playwright?u=76281980&t=328)** Feel free to use legacy locators if needed, and always remember to use a weight when interacting with or asserting against elements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Document Object Model (DOM)|Document object model]] (1), [[HTML]] (1), [[Test Automation]] (1), [[JSON]] (1)
> **Env Vars:** dom (9), css (4), html (1), xpath (1), json (1)
> **Code Identifiers:** getbyrole (1), getbylabel (1), testidattribute (1), getbytestid (1)
> **Definitions:** is a  (3), stands for (1)
> **Best Practices:** recommended (3), remember to (1)
> **Tools:** chrome devtools (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Overview of assertions in Playwright](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=0)** - [Presenter] Assertions are an essential part of building out your [[Test Automation]] framework.
>
> **[0:05](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=5)** Without an assertion to validate what you're expecting, are you really even testing?
>
> **[0:10](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=10)** With Playwright, there are two general categories of assertions, locator assertions and value assertions.
>
> **[0:17](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=17)** The locator assertions are special in that this type of assertion fails, it will automatically get retried until it either passes or it reaches the timeout.
>
> **[0:29](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=29)** The value assertion, on the other hand, will be evaluated one time and either pass or fail.
>
> **[0:36](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=36)** Here are a few the locator assertions.
>
> **[0:39](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=39)** One thing to note here is that we are using an await at the beginning of each of these assertions.
>
> **[0:46](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=46)** This is because we are interacting with and asserting against the browser or the DOM.
>
> **[0:52](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=52)** The way this may play out is if I'm on a page URL and I click a button which submits a form, if there are a few redirects to different URLs before landing on the final URL, if I use await expect(page).toHaveURL() with the URL value assertion, I can put the final URL I would expect, and the test won't fail immediately if it gets back one of the URLs that are still a part of the redirect process.
>
> **[1:24](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=84)** This can be really useful to ensure that your page is on the correct page before moving on with any further automation.
>
> **[1:33](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=93)** This assertion also acts as an implicit wait in your test.
>
> **[1:39](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=99)** Here are some examples of different value assertions.
>
> **[1:43](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=103)** Note that this doesn't have the await syntax in front of the expect, though you may potentially need to await certain values in your test, depending on what values are used.
>
> **[1:55](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=115)** A full list of assertions can be found in the docs.
>
> **[1:58](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=118)** Let's jump into some code and see how this works in action.
>
> **[2:03](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=123)** Let's start by writing a test for the practice site's homepage.
>
> **[2:07](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=127)** So let's go ahead and open our VS Code, let's go into the test folder, and let's create a new file called home.spec.ts.
>
> **[2:19](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=139)** This is going to house the new test that we're going to write together, and we're going to go ahead and start by importing (keys clicking) test and expect (keys clicking) from (keys clicking) @playwright/test.
>
> **[2:37](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=157)** So we've imported test and expect, so we can interact with it.
>
> **[2:41](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=161)** I'm going to go ahead and add a test block here.
>
> **[2:46](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=166)** It's going to be "Home page."
>
> **[2:48](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=168)** After the title, we're going to add a comma, async.
>
> **[2:52](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=172)** After async, it's going to be open parentheses, open brackets.
>
> **[2:57](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=177)** We're going to add page in there.
>
> **[2:59](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=179)** We're going to add a hash rocket.
>
> **[3:01](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=181)** This is going to be an equal and a greater than sign, and then an open bracket, and this is where our tests are going to go.
>
> **[3:09](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=189)** So this is the Playwright syntax to create a test.
>
> **[3:13](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=193)** And the first thing we definitely want to do is we want to do an await page.goto.
>
> **[3:20](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=200)** The goto command allows you to go browse a site, [practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[3:31](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=211)** We'll go ahead and add a slash to the end, and from here, we're going to go to this page.
>
> **[3:37](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=217)** Let's actually, I'm going to show the browser 'cause I want to see it running.
>
> **[3:42](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=222)** So I'm just going to run this test, and I should expect the webpage to load that tells me everything is running the way it should.
>
> **[3:51](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=231)** And let's go ahead and identify what are those tests going to be.
>
> **[3:54](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=234)** So I think the first thing we can do is ensure the sign-in link is present.
>
> **[4:00](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=240)** So let's Ensure the sign-in link is present, and I'm just adding comments here just so I have some placeholder text so we can add some additional stuff.
>
> **[4:12](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=252)** We're going to Check the title of the page, so this is going to be what would be displayed in a tab.
>
> **[4:19](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=259)** We're going to Check the count of items displayed, (keys clicking) and we'll make that a comment 'cause it's not real code.
>
> **[4:28](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=268)** And we're also going to make an assertion for SEarch for Thor Hammer and check the result.
>
> **[4:37](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=277)** So the first thing we want to do is ensure the sign-in link is present, so let's just walk through what that would look like.
>
> **[4:44](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=284)** So I'm going to go pull up the browser that we have over here, and I just want to validate that this sign-in link is present.
>
> **[4:52](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=292)** So the easiest way to validate this stuff is open up a web browser, right click on the page, run an element, click inspect.
>
> **[5:00](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=300)** This will pull up your developer tools, and we're going to look inside the elements and kind of drive into the element we want.
>
> **[5:08](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=308)** I really like viewing this on the bottom versus on the side, so I'm going to dock this to the bottom by clicking the three dots here and choosing the bottom.
>
> **[5:17](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=317)** And I'm going to go ahead and click this inspector tool, and I'm going to click this sign-in.
>
> **[5:24](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=324)** This is going to take me to the exact element, which I can see there is a data-test value here.
>
> **[5:31](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=331)** In a previous episode, we set our data attribute ID to data-test, so we should be able to ensure that the sign-in link is present by doing an await expect page.getByTestId,
>
> **[5:52](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=352)** and let's go see what that ID is.
>
> **[5:55](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=355)** The ID is nav-sign-n, so I'm just going to copy that, and after the expect, I want to have a toHaveText.
>
> **[6:11](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=371)** We're going to pass and Sign in or sign in.
>
> **[6:17](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=377)** Is it uppercase or lowercase, this is important.
>
> **[6:20](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=380)** It is lowercase, okay, so we'll leave that lowercase.
>
> **[6:24](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=384)** What I'm going to do is I'm just going to run this test.
>
> **[6:25](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=385)** I'm going to make sure it passes.
>
> **[6:28](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=388)** Okay, it passes.
>
> **[6:29](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=389)** I also just want to make sure that if something does change, it does fail, so let's just make Sign In capital and see, I should expect this to fail.
>
> **[6:42](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=402)** All right, it fails.
>
> **[6:44](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=404)** It tells me why it fails because it is expecting the capital I-N.
>
> **[6:49](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=409)** It got the lowercase I-N, so always a good idea to just make sure your test fails when it should fail on certain assertions before you commit the code.
>
> **[7:01](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=421)** So that's pretty simple.
>
> **[7:02](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=422)** We have a test that makes sure the sign-in button is there.
>
> **[7:05](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=425)** Let's go ahead and check the title of the page.
>
> **[7:08](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=428)** What this is going to look like is this is going to be an await, we're going to do an expect, and we're going to pass in page and we're going to expect the page or the browser context that Playwright knows about toHaveTitle, and it's actually going to be Practice [[Software Testing]] - Tool Shop - v.0 It's going to be this right here.
>
> **[7:34](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=454)** So this information can be gettable.
>
> **[7:37](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=457)** It's basically up here at the top.
>
> **[7:39](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=459)** Practice Software Testing - Tool Shop - v.0 So let's go ahead and run this, make sure both of these pass, okay, they do.
>
> **[7:48](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=468)** Let's just make sure this does fail again.
>
> **[7:51](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=471)** We want to make sure that our tests are doing what they should be doing.
>
> **[7:55](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=475)** All right, so that is going to fail, all right, wonderful.
>
> **[8:00](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=480)** So we're going to set it back to 5.0.
>
> **[8:03](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=483)** And the next thing is to check the count of items displayed, so let's go back to our webpage.
>
> **[8:09](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=489)** And we want it to just expect 1, 2, 3, 4, 5, 6, 7, 8, 9 items are displayed on this homepage, so to do that, we need to identify how can we count these?
>
> **[8:23](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=503)** So first thing we need to do is figure out like what kind of div are they in, or where are they in the DOM, how can we find them?
>
> **[8:31](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=511)** So I used my little helper tool and I kind of just hovered over until I found an area where it looks like it's capturing all of them.
>
> **[8:38](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=518)** It's this div container.
>
> **[8:40](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=520)** Now, this does have a pretty gnarly ID here.
>
> **[8:43](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=523)** We're not going to use that.
>
> **[8:44](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=524)** I think that gets randomly created.
>
> **[8:46](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=526)** It does have a data test attribute, but there's no value, so we're not going to be able to use this, but let's see if there's anything else we can use that is similar to this.
>
> **[8:58](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=538)** So it looks like there is a div right above this container that does have a class of col-md-9, so we're going to try to use that, and I'm going to show you a little trick that can come in handy.
>
> **[9:13](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=553)** So we're going to call that the product grid, so productGrid, and we are going to set that equal to, actually, we're going to set it as a constant variable.
>
> **[9:27](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=567)** This const syntax, we'll set it as a variable, a variable that is not going to change.
>
> **[9:32](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=572)** So productGrid = page.locator.
>
> **[9:37](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=577)** So this is using a legacy locator, if you remember from our first locator lesson.
>
> **[9:43](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=583)** We're going to pass in .col-md-9.
>
> **[9:49](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=589)** The productGrid here is set to the page.locator.col-md-9, and this dot indicates it's a class, which can be identified here as well, class = .
>
> **[10:03](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=603)** So what this allows me to do is this value is now this locator, so I can actually use that when interacting with another locator.
>
> **[10:13](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=613)** So let's say for our expect, we're going to do an await expect, and we're going to say productGrid, and then within the productGrid, we're going to do a getByRole("link"), and we want this .toHaveCount(9); all right?
>
> **[10:41](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=641)** So what we're saying is within this productGrid, go get all the links, and we expect that to have a count of nine.
>
> **[10:51](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=651)** So what that would look like if I was doing it manually is within this grid, I'm going to go find all the different A tags, which are links.
>
> **[11:00](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=660)** There should be nine.
>
> **[11:02](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=662)** I want it to have that count of nine.
>
> **[11:05](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=665)** I'll also walk you through how you would do this using a non-locator assertion.
>
> **[11:11](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=671)** So in this example, we're using a locator assertion to validate it, but you can also use a non-locator assertion as well, and this is what that will look like.
>
> **[11:22](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=682)** Expect, we're going to do an await productGrid.GetByRole,
>
> **[11:30](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=690)** we're going to pass in ("link"), so a lot of the syntax is the same, but you can see the ordering is a little different.
>
> **[11:37](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=697)** And inside this expect, I'm actually going to do a count, so I'm going to basically say get the role count, and we want to assert that to be nine, right?
>
> **[11:53](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=713)** The difference here is this is a locator assertion where I'm actually expecting, I'm passing it a locator to have a count, and this is going to wait, whereas this is going to have the await inside the expect, and it's actually going to get a count, and it's just going to say, is nine equal to nine versus, you know, does it have a count of nine inside the elements?
>
> **[12:16](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=736)** So there's a lot of flexibility here, and there's a lot of documentation to kind of walk through those different things, but that is one example.
>
> **[12:23](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=743)** Let's just run this and make sure everything looks good.
>
> **[12:27](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=747)** All right, everything passed, good to go.
>
> **[12:30](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=750)** Now it's going to be your turn, so let's go back to our slides.
>
> **[12:35](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=755)** Here's a mini challenge for you.
>
> **[12:37](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=757)** I want you to take a few minutes and see if you can build out the fourth assertion.
>
> **[12:42](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=762)** So search for ThorHammer is the action, and then check the result in the grid is the assertion.
>
> **[12:50](https://www.linkedin.com/learning/learning-playwright/overview-of-assertions-in-playwright?u=76281980&t=770)** I'll walk through the code for this in the next section as we look at organizing our test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Testing]] (2), [[Test Automation]] (1)
> **Code Identifiers:** productgrid (7), tohaveurl (1), getbytestid (1), tohavetext (1), tohavetitle (1)
> **CLI Commands:** make (10), find (2)
> **Env Vars:** url (4), dom (2)
> **Definitions:** is a  (4)
> **Non-Speech:** (keys clicking) (4)
> **Cross-References:** go back to (2), in the next (1)
> **Documentation:** the docs (1), spec (1)

#### [Structuring Playwright tests](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=0)** - [Instructor] Let's take a look at the fourth assertion challenge from the previous lesson.
>
> **[0:05](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=5)** First, we need to find the test ID, so let's walk through what that would look like for the search input box.
>
> **[0:13](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=13)** So let's use our selector, select search, and we can see the data test ID is search query.
>
> **[0:22](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=22)** From here, we'd want to fill in Thor hammer, and then we would also want to click the search key.
>
> **[0:33](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=33)** So let's see the search button.
>
> **[0:36](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=36)** So we can see that is search-submit.
>
> **[0:40](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=40)** Once that is clicked, we can use the container that we identified before and it looks like there is a get by alt text, Thor hammer.
>
> **[0:50](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=50)** That can be our locator.
>
> **[0:53](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=53)** So this is the alt text here.
>
> **[0:56](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=56)** So that may be for the overall picture.
>
> **[1:00](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=60)** So that is the alt text for the image that is actually showing up there that Playwright's kind of showing us.
>
> **[1:07](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=67)** So these are the things we can search by and assert against.
>
> **[1:11](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=71)** So this is what the code could look like.
>
> **[1:15](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=75)** Get by test ID search query, we're going to fill with Thor hammer.
>
> **[1:18](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=78)** We're going to get the search submit button and click it, and then we're going to have an expect down here.
>
> **[1:27](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=87)** Expect this to have a count of one.
>
> **[1:28](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=88)** And we're also going to expect that the alt text, so the picture of Thor hammer is visible.
>
> **[1:36](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=96)** And I ran this, everything looked good and everything is great.
>
> **[1:42](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=102)** As we continue to build out test on this page though, we can see it's going to get really tricky, right, if I have 50 more assertions I want to write on this page.
>
> **[1:53](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=113)** We could continue to write lots of other specific assertions for these elements on the page, and other interactions, but now it's actually a good time to start discussing how to structure your Playwright test.
>
> **[2:06](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=126)** For example, we now have four different tests in this one test block.
>
> **[2:11](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=131)** So let's take a few minutes and work through refactoring this file and structuring our test so they're more actionable and maintainable.
>
> **[2:19](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=139)** There will be a few new concepts introduced.
>
> **[2:22](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=142)** We're going to introduce the describe block, which is used to group tests together, the before all and before each and after each blocks.
>
> **[2:30](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=150)** These are things that can be run from within the describe block, outside of a test context.
>
> **[2:36](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=156)** So let's go ahead and start with that.
>
> **[2:38](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=158)** At the top of your test, let's add a new line.
>
> **[2:42](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=162)** It's going to be test.describe.
>
> **[2:46](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=166)** We're going to pass in homepage.
>
> **[2:50](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=170)** We're going to use open parentheses, we're going to do the hash rocket, and then we're going to open bracket, and you can see this is a describe block.
>
> **[3:00](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=180)** Now we actually just want to wrap our existing test in this describe block.
>
> **[3:05](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=185)** So I'm going to copy these last two, close bracket and close parentheses.
>
> **[3:10](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=190)** I'm going to right click, I'm going to cut these, and I'm going to move them all the way to the bottom of the file and right click and paste.
>
> **[3:20](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=200)** And this should reformat everything upon you saving, and indent everything properly.
>
> **[3:26](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=206)** So we have a test describe block and a test block as well.
>
> **[3:32](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=212)** Now let's split up our test into different checks.
>
> **[3:35](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=215)** To do this, let's go ahead and comment out our assertions that we aren't using for now.
>
> **[3:40](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=220)** So we're going to go ahead and come all the way to the bottom.
>
> **[3:44](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=224)** We're going to select all of these.
>
> **[3:47](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=227)** I'm going to hold down command or control, and I'm going to hit the back slash button, the one that's on the question mark to comment out the test.
>
> **[3:55](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=235)** Let's start by renaming the first test to check sign in.
>
> **[3:59](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=239)** So we've got homepage, check sign in.
>
> **[4:04](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=244)** All right, let's go ahead and run this test and just make sure everything is working properly, everything passed.
>
> **[4:11](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=251)** So this test is actually complete.
>
> **[4:13](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=253)** I'm going to go ahead and move the bottom of this test block to the bottom of this test block.
>
> **[4:20](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=260)** We're going to go ahead and create the next test in its own test block.
>
> **[4:24](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=264)** So let's hit enter and we're going to add a new test block for validate page title.
>
> **[4:32](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=272)** It's going to be the same syntax.
>
> **[4:36](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=276)** Pass in page, it's going to be the hash rocket.
>
> **[4:40](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=280)** And I'm just going to go ahead and cut this and paste it in this test block.
>
> **[4:47](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=287)** And then I'm also going to select it.
>
> **[4:49](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=289)** I'm going to hit command or control in the backslash to uncomment that out, and we can remove this comment as well.
>
> **[4:55](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=295)** So in this test we're going to validate the page title.
>
> **[4:59](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=299)** We're just going to run this assertion.
>
> **[5:01](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=301)** So let's go ahead and run our test and see what happens.
>
> **[5:06](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=306)** And we're noticing this second test fails.
>
> **[5:08](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=308)** So let's go look at the Chrome window and it looks like it's not on a webpage.
>
> **[5:14](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=314)** This leads to an important thing to remember when writing Playwright test.
>
> **[5:18](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=318)** For every test block, you have a brand new browser context.
>
> **[5:23](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=323)** Think of it like a clean web browser with no history, no cookies.
>
> **[5:28](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=328)** This may seem like a negative thing at first, but I can tell you from experience, it's a blessing which will prevent you from having a lot of flaky tests in the future.
>
> **[5:37](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=337)** So to handle this scenario, let's utilize a before block.
>
> **[5:41](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=341)** We have two options. We can use before all or before each.
>
> **[5:45](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=345)** For this specific scenario, we'll need a before each block.
>
> **[5:49](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=349)** So let's add the code there and run our test, and it should pass.
>
> **[5:53](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=353)** So underneath the describe block, we're going to hit enter down.
>
> **[5:57](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=357)** We're going to type in test.before each, open parentheses a sync, we're going to have a space, open parentheses, open bracket.
>
> **[6:09](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=369)** We're going to pass in page and I'm going to arrow key out twice.
>
> **[6:14](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=374)** We're going to have our hash rocket, open bracket, we're going to hit enter, and this is where we're going to move this await page go-to code.
>
> **[6:25](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=385)** So I'm just going to select this, right click cut, and we're going to right click paste.
>
> **[6:32](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=392)** And when we save this, it should format it properly.
>
> **[6:36](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=396)** So let's go ahead and run this test now and see if everything passes.
>
> **[6:41](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=401)** So now everything passes.
>
> **[6:43](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=403)** I'm going to clean up my comments, and I'm going to go ahead and work on writing out the other two test blocks for the next two sections.
>
> **[6:52](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=412)** For this, I'm going to take a bit of a shortcut.
>
> **[6:54](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=414)** I'm just going to copy this test block.
>
> **[6:57](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=417)** I'm going to copy the end of the test block, and we're going to update the page title to grid loads with nine items.
>
> **[7:08](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=428)** And we're going to go ahead and uncomment this.
>
> **[7:13](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=433)** We'll clean up this comment and we're going to do that one more time for searching for Thor hammer.
>
> **[7:22](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=442)** And we're going to uncomment this code.
>
> **[7:29](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=449)** We're going to type, search for Thor hammer.
>
> **[7:34](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=454)** All right, and I'm going to run these things.
>
> **[7:37](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=457)** I do see a red squiggly line, so we'll take a look and see if it fails.
>
> **[7:42](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=462)** It should fail, I think, if there's a red squiggly.
>
> **[7:46](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=466)** Let's see what it says.
>
> **[7:47](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=467)** It says, "Reference error, product grid is not defined."
>
> **[7:51](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=471)** So the product grid is something that we did define in the third test, but because we put these all in their own test blocks, this product grid is not available down here.
>
> **[8:02](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=482)** For now, we're going to go ahead and copy this variable.
>
> **[8:06](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=486)** We're just going to duplicate it within this test, and in a later lesson, we'll talk more about how we can reduce duplication of code and really work on making our code DRY.
>
> **[8:19](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=499)** DRY stands for, "Do not repeat yourself."
>
> **[8:22](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=502)** So let's run our test one more time, make sure everything is passing, and we are good.
>
> **[8:29](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=509)** Let's go take a look at the test files.
>
> **[8:32](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=512)** And now we actually have our homepage.
>
> **[8:35](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=515)** We're going to check the sign in, validate page title, the grid loads.
>
> **[8:38](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=518)** So I have very clear names.
>
> **[8:40](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=520)** My test is structured well and is super clear that if something were to fail, where the failure occurred.
>
> **[8:47](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=527)** So as an analogy of what I mean here is when going to look at a new home to buy, you'd expect your realtor to send you a specific address and a house number rather than a street name and a house color, right?
>
> **[9:01](https://www.linkedin.com/learning/learning-playwright/structuring-playwright-tests?u=76281980&t=541)** You want to make it as easy as possible for your future self to locate the issues in your test.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Analogies:** picture (2), for example (1), think of it like (1)
> **Definitions:** is a  (2), stands for (1)
> **Env Vars:** dry (2)
> **Speakers:** - [instructor] (1)

#### [Handling cookie authentication in Playwright](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=0)** - [Instructor] Now that we've got a few homepage tests in place, let's look at what it's like testing the system from a logged-in user's perspective.
>
> **[0:08](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=8)** We created a login spec already, but from the last lesson, you may notice a challenge we may be facing.
>
> **[0:15](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=15)** Every test creates a new browser context.
>
> **[0:19](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=19)** How can we quickly and easily get our test into a logged-in state for the tests that require login?
>
> **[0:26](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=26)** The simple answer is we just go through the login steps before each step.
>
> **[0:31](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=31)** But this will add a lot of time to our test execution time and it'd be a lot of repeated code.
>
> **[0:37](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=37)** Thankfully the Playwright team has built some awesome tools to help us store an authentication state, all within Playwright.
>
> **[0:45](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=45)** When we were setting up the project section in the Playwright config file, You may remember that, with the setup project, with something we built, we'll be using this project to handle authentication within the system once, and saving the state to be used within other tests.
>
> **[1:03](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=63)** So let's start by creating a new file in the test directory.
>
> **[1:06](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=66)** We'll name it auth.setup.ts.
>
> **[1:12](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=72)** We'll start by importing test as setup, and expect from @playwright.
>
> **[1:19](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=79)** Using the syntax makes it so I can type setup rather than test when creating my setup file.
>
> **[1:26](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=86)** Let's name the setup step as create customer 01 auth, and we'll need to pass both the page and the context here, as the browser context is needed to save the storage seat.
>
> **[1:39](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=99)** So setup, Create customer 01 auth, async.
>
> **[1:47](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=107)** Open parentheses, open paren.
>
> **[1:50](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=110)** We're going to pass in page, and then context.
>
> **[1:54](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=114)** And then after those is going to be the hash rocket.
>
> **[1:56](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=116)** And then open brackets.
>
> **[2:00](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=120)** And in this section, this is where we can create our steps.
>
> **[2:03](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=123)** We're going to be using the same customer that we logged in with before, but rather than typing out the email in our test, I'm going to go ahead and create a variable.
>
> **[2:14](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=134)** So we're going to create a const variable named email.
>
> **[2:18](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=138)** We're going to set it to customer@[practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[2:24](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=144)** And I'm going to add a second variable named password.
>
> **[2:30](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=150)** Welcome01.
>
> **[2:31](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=151)** And I'm also going to go ahead and create a constant for the customer01AuthFile, which we'll be using a little later.
>
> **[2:42](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=162)** In this scenario, I'm going to create a new folder, a .auth folder.
>
> **[2:47](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=167)** Within that folder we're going to create a customer01.[[JSON]] file that will be saved, and this is where the credentials or the cookies will be saved for customer 01.
>
> **[3:01](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=181)** Let's go ahead and write the code to go log in to the site.
>
> **[3:04](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=184)** So we're going to write await page.goto.
>
> **[3:09](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=189)** We're going to pass in our [practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[3:15](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=195)** And I know what page I want to go to.
>
> **[3:17](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=197)** I want to go to the /auth/login.
>
> **[3:21](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=201)** So rather than go to a page and clicking on a button, I want to go directly to this page.
>
> **[3:27](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=207)** Once we get to the login site, there are going to be three things we'll want to do.
>
> **[3:31](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=211)** One is fill the email.
>
> **[3:35](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=215)** We'll also want to fill the password.
>
> **[3:38](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=218)** We're also going to want to click the Submit button.
>
> **[3:42](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=222)** And then after that we'll want to save off the authentication file.
>
> **[3:46](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=226)** So these are little placeholders for me so we can follow along.
>
> **[3:50](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=230)** So the first thing we want to do is we want to do an await page, and let's see what our email element is.
>
> **[3:58](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=238)** Let's go back to this page, use our selector.
>
> **[4:02](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=242)** Looks like our data test ID is email.
>
> **[4:06](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=246)** We're going to go ahead and check the password 'cause I think we can remember that.
>
> **[4:11](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=251)** The password is going to be 'Password,' and the login button is going to be login/submit.
>
> **[4:19](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=259)** All right, so await page.getByTestID, email, .fill.
>
> **[4:29](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=269)** And for the fill we want to pass in this email constant.
>
> **[4:35](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=275)** So we're going to get the TestID, email, .fill.
>
> **[4:39](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=279)** And we're going to pass in the email.
>
> **[4:41](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=281)** We're going to do the same thing for the password.
>
> **[4:44](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=284)** Await page.getByTestId, password.
>
> **[4:51](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=291)** The action is going to be fill with the password.
>
> **[4:56](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=296)** And again, this password is this Welcome01 constant that we created.
>
> **[5:01](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=301)** And to click Submit, we're going to do an await page.getByTestId, login-submit.
>
> **[5:11](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=311)** .click.
>
> **[5:13](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=313)** It's important to have your open-close parens at the end of a function.
>
> **[5:19](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=319)** So this should take me to a authenticated place.
>
> **[5:22](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=322)** I'm going to go ahead and run this.
>
> **[5:24](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=324)** Even though it says setup, it's still a test.
>
> **[5:27](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=327)** We're just renaming it to setup.
>
> **[5:29](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=329)** All right, so I'm actually on this page.
>
> **[5:31](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=331)** I'll also want to go ahead and validate that the nav-menu contains Jane Doe.
>
> **[5:37](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=337)** That is something we wrote in one of our other tests.
>
> **[5:41](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=341)** So let's go ahead and paste that in here from our other test.
>
> **[5:47](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=347)** I'm going to go ahead and remove our comments so things are clear.
>
> **[5:51](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=351)** I do like to group my different steps with spaces where it makes sense.
>
> **[5:56](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=356)** And then after our expect, this is where the magic happens.
>
> **[6:00](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=360)** We're going to use await context.storageState, and state is capital there, the S in State.
>
> **[6:11](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=371)** And then we're going to pass in a path.
>
> **[6:15](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=375)** And the path is going to be the customer01AuthFile.
>
> **[6:19](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=379)** So the path is going to be this right here.
>
> **[6:22](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=382)** So what this is going to do, when this runs, I believe it will, we might have to go manually create a folder, but we'll find out.
>
> **[6:28](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=388)** I'm going to run this.
>
> **[6:30](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=390)** And let's see if it actually creates the folder in the file.
>
> **[6:33](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=393)** So it creates the folder, it creates the file.
>
> **[6:37](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=397)** Within this file is all the cookie information that that browser session has.
>
> **[6:43](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=403)** So one thing that we'll want to go ahead and do, 'cause you don't want to be committing this to a repository, is we're going to go ahead and update our gitignore file.
>
> **[6:53](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=413)** So let's go ahead and click on that.
>
> **[6:54](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=414)** Let's go ahead and add .auth/, here.
>
> **[6:59](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=419)** so this doesn't get picked up and sent to [[GitHub]] or any of your repositories.
>
> **[7:04](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=424)** 'Cause this is going to get updated and changed every single test run.
>
> **[7:09](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=429)** Because we are using the setup spec file.
>
> **[7:13](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=433)** And if you remember back to our Playwright config, we have the setup project that is going to run.
>
> **[7:20](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=440)** And the Chromium project has a dependency on setup.
>
> **[7:24](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=444)** Anytime we run new test, you'll notice that the setup project is going to run first and then the [[Representational State Transfer (REST)|rest]] of the test will follow.
>
> **[7:36](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=456)** Now, we've been able to save browser context, but how do we use that in a test?
>
> **[7:41](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=461)** Let's walk through that.
>
> **[7:43](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=463)** So we're going to go back to our home spec, and we're going to refactor this a bit to walk through an example.
>
> **[7:49](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=469)** So in this test.describe section, we're just going to go ahead and note this, that this is homepage with no auth.
>
> **[7:59](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=479)** So there's no authorization in these homepage tests.
>
> **[8:02](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=482)** But we're going to go ahead and write some new tests that will have auth down below.
>
> **[8:07](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=487)** So you can have multiple test.describe blocks within a single file.
>
> **[8:12](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=492)** But each test.describe block is its own group.
>
> **[8:15](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=495)** So we're going to come down to the bottom and we're going to create a new test.describe block.
>
> **[8:23](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=503)** We're going to call the group Home page customer 01 auth.
>
> **[8:29](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=509)** So this is visiting the homepage with the auth of customer 01.
>
> **[8:35](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=515)** We're going to have our logic here.
>
> **[8:39](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=519)** And within this describe block, this is where the magic happens.
>
> **[8:43](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=523)** We're going to use a test.use, open parentheses, open bracket.
>
> **[8:49](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=529)** We're going to type in storageState, and we're going to pass it a file name in a string.
>
> **[8:58](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=538)** So .auth/customer01.json.
>
> **[9:03](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=543)** We're going to save it.
>
> **[9:04](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=544)** And this should apply the storage state.
>
> **[9:07](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=547)** Let's go ahead and add the beforeEach block.
>
> **[9:10](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=550)** Test.beforeEach, async.
>
> **[9:14](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=554)** We're going to pass in page here.
>
> **[9:17](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=557)** Mess in the hash rocket.
>
> **[9:21](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=561)** And we're going to do the await page.goto.
>
> **[9:25](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=565)** We're going to pass in our website that we're using.
>
> **[9:27](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=567)** So I'm just going to steal it from up here.
>
> **[9:31](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=571)** Copy, paste.
>
> **[9:33](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=573)** And for our specific test, I'm going to go ahead and space that down.
>
> **[9:38](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=578)** We're going to check that customer 01 is signed.
>
> **[9:43](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=583)** And we're going to pass the async.
>
> **[9:47](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=587)** We're going to pass in page, 'cause we're going to be interacting with a page.
>
> **[9:51](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=591)** Hash rocket syntax.
>
> **[9:53](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=593)** We're going to say await expect page, getByTestId.
>
> **[10:00](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=600)** We're going to do the nav-sign-in.
>
> **[10:04](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=604)** And here.
>
> **[10:05](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=605)** So this is, you know, pretty much the same exact test that we are doing up here on this, expecting it to be in.
>
> **[10:13](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=613)** We're expecting the page to have this text.
>
> **[10:17](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=617)** We're actually going to, down here, say we want to expect this not.toBeBisible.
>
> **[10:27](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=627)** So with every assertion, you actually have this not clause.
>
> **[10:31](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=631)** So you can say, "Is it visible or is it not to be visible?"
>
> **[10:36](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=636)** So let's go ahead and run this, and make sure everything works properly.
>
> **[10:40](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=640)** I'm just going to run this one describe block.
>
> **[10:42](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=642)** So the auth setup is running.
>
> **[10:46](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=646)** That's happening.
>
> **[10:47](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=647)** And we're actually logged in, and this test passed.
>
> **[10:51](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=651)** So if we wanted to go ahead and, you know, add an additional check, we could say that getByTestId, nav-menu does contain Jane Doe as well.
>
> **[11:03](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=663)** So we can have, like, a positive test, and a negative test in this.
>
> **[11:08](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=668)** So let's go ahead and run these tests, and just make sure we didn't break these.
>
> **[11:14](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=674)** So this is running through the login test, setting the auth, and then it's going through all the different tests and the non-authenticated describe block, and notice that we're not signed in.
>
> **[11:27](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=687)** And all the tasks passed.
>
> **[11:29](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=689)** Now, if we wanted to run all these together, one way to do that would be npx playwright test.
>
> **[11:37](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=697)** And if you remember back to our [[CLI]] command, we can just pass in home.spec.
>
> **[11:42](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=702)** And this is going to run all the tests together in the same file.
>
> **[11:47](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=707)** A part of the same worker automation run, right?
>
> **[11:50](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=710)** Looks like everything is passing.
>
> **[11:52](https://www.linkedin.com/learning/learning-playwright/handling-cookie-authentication-in-playwright?u=76281980&t=712)** From here we have a pattern to follow, and we could create an admin setup step, a customer O2 setup step, or any other username and password combination we wanted to create.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[GitHub]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[CLI]] (1)
> **Prerequisites:** setup (16)
> **Code Identifiers:** getbytestid (5), customer01authfile (2), storagestate (2), beforeeach (2), tobebisible (1)
> **CLI Commands:** make (2), find (1), npx (1)
> **Documentation:** spec (4)
> **UI Navigation:** go to (3), click on (1)
> **File Paths:** auth.setup.ts (1), customer01.json (1), auth/customer01.json (1)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (2)

#### [Visual testing in Playwright](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=0)** - [Instructor] Another popular way to test web applications is through visual testing.
>
> **[0:05](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=5)** The concept here is while the test is in a certain state, you take a screenshot of the page or certain elements on the page and save them as a snapshot.
>
> **[0:16](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=16)** This snapshot is a part of the repository.
>
> **[0:19](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=19)** It is used as a baseline image to compare future screenshots against.
>
> **[0:24](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=24)** This can be a useful strategy to use depending on the application and context you're testing in.
>
> **[0:30](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=30)** Let's build out an example of a visual test using the home.spec.ts we've been working on.
>
> **[0:36](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=36)** We'll add two different visual tests within each describe block.
>
> **[0:40](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=40)** The syntax is as easy as adding the .toHaveScreenshot with a name assertion to a test file.
>
> **[0:48](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=48)** We'll add one for auth and one for no auth, so let's start at the top.
>
> **[0:52](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=52)** We're going to create its own test block.
>
> **[0:58](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=58)** (keys clicking) Test, we're going to call this "visual test", async.
>
> **[1:04](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=64)** We're going to pass in ({ page }), we're going to do an await expect (page) .toHaveScreenshot, and we're going to give it a specific name, ("home-page-no-auth.png"); So I'm going to go ahead and execute this test, and we'll see what happens.
>
> **[1:29](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=89)** So npx playwright test tests/home.spec.ts:8.
>
> **[1:37](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=97)** So I'm going to run the test on line eight from the command line.
>
> **[1:41](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=101)** So it's running up the setup.
>
> **[1:43](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=103)** It's making sure that we have a fresh authentication.
>
> **[1:48](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=108)** Alright, and we have a failure.
>
> **[1:50](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=110)** The message here is, let's go see why it failed.
>
> **[1:55](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=115)** Error: a snapshot doesn't exist, writing actual.
>
> **[1:59](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=119)** So this test actually failed, but in the process of failing, it went ahead and created this snapshot for us, and this is going to be the new baseline.
>
> **[2:10](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=130)** So if we run this test again, we'll just run the same thing, I would expect it would pass.
>
> **[2:17](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=137)** Alright, it passed, so let's go ahead and add a visual test for the authorized describe block.
>
> **[2:25](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=145)** So we'll add it down here.
>
> **[2:27](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=147)** We'll say test.
>
> **[2:28](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=148)** We're going to call it visual test, we're going to say authorized, and we'll pass an async, ({ page }) => We're going to do the same thing, await expect(page).toHaveScreenshot, and we're going to pass, this name is going to be ("home-page-customer01.png") It did not like that 'cause I did not type it right.
>
> **[3:07](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=187)** Alright, now everybody's happy, and this should be png.
>
> **[3:11](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=191)** Alright, so I'm going to go ahead and run 42, but rather than just running this and it failing, I'm going to show you a nice little command line that you can use.
>
> **[3:21](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=201)** So npx playwright test If I pass in the tests/home.spec, I can pass in a new flag, --update-snapshots What this will do is it will regenerate snapshots for any of these assertions by default.
>
> **[3:44](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=224)** So because this doesn't have one, it's going to create a new one, but it's not going to fail the test, and you can see it wrote that actual.
>
> **[3:51](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=231)** So now we've got, this one is not authenticated, this one is authenticated.
>
> **[3:57](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=237)** Doesn't quite look like Jane Doe actually rendered, but this is what it was captured.
>
> **[4:01](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=241)** My guess is it would probably render right after everything loaded.
>
> **[4:05](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=245)** So let's go ahead and let's just rename this one to the other one.
>
> **[4:12](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=252)** I want to demonstrate a failure.
>
> **[4:15](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=255)** So I'm just going to rename this.
>
> **[4:18](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=258)** We're going to call this .old, and we're just going to pop this one into the new one.
>
> **[4:24](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=264)** So this is the home-page-no-auth.
>
> **[4:27](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=267)** That's what I want to run, and I want to demonstrate a failure and what that looks like.
>
> **[4:32](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=272)** So we're back on test number eight, npx Playwright test tests/home.spec.ts, and we're going to run line eight.
>
> **[4:46](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=286)** I'm going to expect this test to fail, and it's going to fail because the image comparison didn't match.
>
> **[4:52](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=292)** It's a different snapshot, but let's see what that looks like in the Playwright report.
>
> **[4:58](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=298)** So it's going through a second retry.
>
> **[5:02](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=302)** Alright, so here's the Playwright report, and it looks like, ooh, this actually failed waiting on a timeout, but it looks like it eventually passed, and then our failure for the homepage spec, this failed twice, so it's very clear that it expected one thing, it received one, and there's a diff, there's a bunch of text up here, but if I scroll down, I can actually see a nice tool down here to see what are the differences.
>
> **[5:34](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=334)** So it looks like all this stuff seems the same, and just the stuff that's highlighted in red and orange, those are the things that are different.
>
> **[5:42](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=342)** So this is the actual, this is the expected, and you can see one has a sign-in button, one is missing the sign-in button.
>
> **[5:50](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=350)** You can also look at these side by side, or there's also a nice little slider where you can actually see the differences manually checking this out.
>
> **[5:59](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=359)** You've also got links to the files here, which can be really helpful, along with the video recording of what was visible.
>
> **[6:08](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=368)** So we're going to not keep the snapshots, so we're just going to update all of our snapshots.
>
> **[6:16](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=376)** Update snapshots, so this will get these files in a clean state.
>
> **[6:23](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=383)** I might have to delete this 'cause it said .old, it's not going to get overwritten and we don't want to commit that.
>
> **[6:31](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=391)** But everything is written, everything is passed.
>
> **[6:34](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=394)** You may run into issues at some point where certain fields, maybe an ad block is actually not rendering, and you may need a way to hide that.
>
> **[6:44](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=404)** So I'm going to walk you through one simple way to do that.
>
> **[6:48](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=408)** To do that, we're going to go look at the Playwright documentation to have screenshot documentation, and you can see all the different arguments that you can pass in here.
>
> **[6:58](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=418)** The specific argument that we care about is the mask argument.
>
> **[7:03](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=423)** This is where we can specify specific locators that can be masked by default with a pink box, but you can also change the colors if you want.
>
> **[7:12](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=432)** This makes this visual checking a lot more focused on the things you care about and the things that you aren't expecting to change.
>
> **[7:20](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=440)** So let's go ahead and implement that in our two tests and we'll wrap this lesson up.
>
> **[7:25](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=445)** So to do that, we are going to, at the end of our png, add a comma, an open object.
>
> **[7:36](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=456)** We're going to type in mask, and then we're going to pass in the locator that we want to mask.
>
> **[7:43](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=463)** So I know we want to mask: [Page.getByTitle] and it's going to be, I need to go find our browser so we can actually find it.
>
> **[7:54](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=474)** So let me go ahead and run this test.
>
> **[7:59](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=479)** It might fail, but I want the browser.
>
> **[8:02](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=482)** Alright, I actually want to take this tool shop, this moving.
>
> **[8:07](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=487)** This is what I care about masking.
>
> **[8:09](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=489)** So let's go find what the locator is in this thing.
>
> **[8:13](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=493)** So it looks like there is a title of practice [[Software Testing]] -tool shop.
>
> **[8:20](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=500)** So if you all can see that this title is what I want to work off of.
>
> **[8:24](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=504)** So I'm going to copy this text.
>
> **[8:27](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=507)** I'm going to paste this in here, and I'm also going to add the same mask to the next page.
>
> **[8:37](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=517)** So I'm just going to copy this into our other visual test.
>
> **[8:47](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=527)** So it's going to be after this.
>
> **[8:50](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=530)** Note that this needs a comma before this open bracket.
>
> **[8:55](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=535)** And we're just going to run the test.
>
> **[8:57](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=537)** We're going to update the snapshots one more time.
>
> **[9:00](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=540)** What this should do is it should change these snapshots from a full picture to a pink box up here.
>
> **[9:06](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=546)** So we'll see if it does that once they're running.
>
> **[9:10](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=550)** I'm going to click up.
>
> **[9:11](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=551)** It actually updated that one.
>
> **[9:13](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=553)** It updated that one.
>
> **[9:15](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=555)** I think we are in a good spot.
>
> **[9:17](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=557)** As you're building out visual tests, one thing you'll want to do is ensure the browser is in a consistent state before you take the screenshot.
>
> **[9:28](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=568)** One way to help ensure this is by adding in await page.waitForLoadState, and you've got a couple different options.
>
> **[9:39](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=579)** I believe that network idle is a good thing to wait for.
>
> **[9:44](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=584)** This waits for all of the network requests to complete before taking the screenshot, which typically by that time, all the elements on the page will load.
>
> **[9:54](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=594)** So we're going to add that to the visual authorized test, and we're also going to add it to the non-authorized visual test.
>
> **[10:02](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=602)** At this point, we can go ahead and recreate our snapshots.
>
> **[10:07](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=607)** So let's update our snapshots, ensure everything is built, gets saved properly with our masks, and let's go ahead and run our test without updating our snapshots to ensure everything is still working properly.
>
> **[10:25](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=625)** So here you can see the whole page loads.
>
> **[10:28](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=628)** We've got Jane Doe, we've got the sign in.
>
> **[10:31](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=631)** All the tools are loading, everything is happy.
>
> **[10:35](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=635)** One caveat to note that if you are running visual tests in CI servers and they have different operating systems than the tests you're building the test on or generating the snapshots on, you will have to generate CI specific snapshots.
>
> **[10:50](https://www.linkedin.com/learning/learning-playwright/visual-testing-in-playwright?u=76281980&t=650)** There are ways to do that using docker containers that are available through the Playwright documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Testing]] (1)
> **CLI Commands:** npx (3), find (3), docker (1)
> **Code Identifiers:** tohavescreenshot (3), getbytitle (1), waitforloadstate (1)
> **Documentation:** spec (5)
> **File Paths:** tests/home.spec.ts (2), home.spec.ts (1)
> **Definitions:** is a  (3)
> **Warnings:** note that (2), caveat (1)
> **Tools:** command line (2)

#### [API testing in Playwright](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=0)** - [Instructor] API stands for Application Programming Interface.
>
> **[0:04](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=4)** Most modern websites are built with an API first approach where the business logic lives behind an API.
>
> **[0:12](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=12)** A major feature that Playwright supports is the ability to interact with network traffic during a UI test, but it also provides tools to test APIs directly.
>
> **[0:23](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=23)** What's nice about this is that you can use Playwright test framework for both UI and API test, all within the same repository.
>
> **[0:32](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=32)** We'll write two API test examples, one for GET request and another for a POST request.
>
> **[0:39](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=39)** So let's go ahead and create a new file.
>
> **[0:42](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=42)** We're going to name it api.spec.ts.
>
> **[0:46](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=46)** We'll do it in our tests directory, and we're going to go ahead and import Playwright the same way we have in the past.
>
> **[0:59](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=59)** We're going to import test and expect from @playwright/test.
>
> **[1:09](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=69)** This looks familiar.
>
> **[1:10](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=70)** Now we're going to go ahead and create a test block, and we're going to make a test to get the [[Microsoft Products|products]] endpoint.
>
> **[1:20](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=80)** It's going to be async.
>
> **[1:22](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=82)** It's going to be open parentheses, open brackets.
>
> **[1:25](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=85)** Instead of importing page, we're actually going to import request.
>
> **[1:30](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=90)** This is going to be what is made to make the API request.
>
> **[1:34](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=94)** We're going to add our hash rocket, and our open bracket, and we have a test begun.
>
> **[1:41](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=101)** But before we go too much further, let's go ahead and explore the site and get a full understanding of what we want to automate.
>
> **[1:49](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=109)** So here's the site here.
>
> **[1:51](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=111)** I've opened up dev tools by right clicking and clicking inspect.
>
> **[1:55](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=115)** I've moved to the Network tab, and I've gone ahead and cleared any previous network requests.
>
> **[2:01](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=121)** And I'm just going to refresh this homepage, and with our request filter down to XHR or [[Fetch]]/XHR, there's only a few requests in here, and I'm going to be looking for products.
>
> **[2:18](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=138)** So this is an API call made to api.[practicesoftwaretesting.com/products](https://practicesoftwaretesting.com/products).
>
> **[2:25](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=145)** And then there's some query parameters that are passed in.
>
> **[2:28](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=148)** It's a GET request, and the response it got back was a 200.
>
> **[2:34](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=154)** There's also some response headers, so these are headers that are received.
>
> **[2:39](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=159)** And then request headers, these are headers that the browser sent to the API.
>
> **[2:44](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=164)** One important thing to note is this URL is api.practicesoftwaretesting, whereas the main site is just [practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[2:54](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=174)** So when we create our URL, we're going to be using the api.practicesoftwaretesting.
>
> **[3:01](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=181)** We can also see if there's a payload sent.
>
> **[3:03](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=183)** So here we just see the query parameters, but if there was a request body, we could see that here.
>
> **[3:09](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=189)** And then we've got two tabs to see the response.
>
> **[3:12](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=192)** One is Preview and one is Response.
>
> **[3:15](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=195)** The Preview lets you kind of click through and you get to open up the things you want to look at.
>
> **[3:21](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=201)** Whereas Response is just a big giant [[JSON]] object.
>
> **[3:25](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=205)** So let's go ahead and codify this example and make a GET request to this URL.
>
> **[3:31](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=211)** So I'm going to go ahead and copy this request URL.
>
> **[3:34](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=214)** In this scenario, I'm going to create a variable, constant variable, called apiUrl.
>
> **[3:42](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=222)** We're going to set it equal to the URL.
>
> **[3:46](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=226)** I'm going to go ahead and remove the end here.
>
> **[3:51](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=231)** And we're just going to add this as a part of our request.
>
> **[3:54](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=234)** So the next thing we want to do is we want to set a variable for the response.
>
> **[3:59](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=239)** So const response equals await.
>
> **[4:04](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=244)** Here's where we're going to use request.
>
> **[4:08](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=248)** And on request, as soon as I hit dot, you can see all the different options I've got available to request.
>
> **[4:14](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=254)** In this scenario, we're going to make a GET request, and we are going to pass in the apiUrl, and we're going to pipe in the end of the URL here.
>
> **[4:28](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=268)** So this is going to bring this down here and then push this as well.
>
> **[4:32](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=272)** When we get the response back, the first thing you typically want to do is expect the response status to be what the response status should be.
>
> **[4:42](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=282)** So let's go ahead and write the expect for that, expect response.status.
>
> **[4:48](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=288)** So this is a method that can be called on the response.
>
> **[4:52](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=292)** It's going to be to, oh, I did not spell this right, response.
>
> **[5:00](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=300)** This is going to be toBe 200.
>
> **[5:05](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=305)** All right, so I should be able to run this and this should get a 200 response.
>
> **[5:12](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=312)** Let's see if this passes or fails.
>
> **[5:15](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=315)** All right, so it looks like it passed.
>
> **[5:18](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=318)** So it did get a 200 response.
>
> **[5:20](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=320)** And let's go ahead and just make another assertion.
>
> **[5:23](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=323)** So with this response body, there's a lot of things that come back from the request URL, such as the JSON object that gets returned.
>
> **[5:32](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=332)** But to get access to that, we're going to create another variable called body.
>
> **[5:37](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=337)** This is going to be the response body, and we're going to set it equal to await.
>
> **[5:44](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=344)** So we do have to await this, response.json.
>
> **[5:49](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=349)** So what this is going to do is going to set the body variable to this response.
>
> **[5:55](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=355)** I'm going to go ahead and just do a console.log body.
>
> **[6:00](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=360)** So we will log this out, but the main reason I want to do this is just so I have a place to put a break point, 'cause we're going to debug this test and really look inside this body and see what exists.
>
> **[6:12](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=372)** So I'm going to right click on the test.
>
> **[6:15](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=375)** I'm going to click Debug Test.
>
> **[6:16](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=376)** It is going to run the setup file, because that is a dependency even though we're not using it in this specific test.
>
> **[6:22](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=382)** And now we should have access to the body.
>
> **[6:28](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=388)** So if I look over here in my debug window, I see this body variable is actually set to the JSON response that's returned.
>
> **[6:39](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=399)** So let's come up with a few things we can assert on.
>
> **[6:42](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=402)** One could be that this, it looks like this is an array that will be returned in this data object.
>
> **[6:49](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=409)** It looks like it has a length of nine.
>
> **[6:52](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=412)** Looks like there's also a value total of 50.
>
> **[6:57](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=417)** Let's go ahead and write assertions for those two things.
>
> **[7:00](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=420)** So I'm going to go ahead and let this finish.
>
> **[7:04](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=424)** All right, and we're going to remove this console.log.
>
> **[7:08](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=428)** We don't need that anymore.
>
> **[7:09](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=429)** We're going to go ahead and make our assertions.
>
> **[7:12](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=432)** So the first is going to be expect body.
>
> **[7:15](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=435)** So that's our response.
>
> **[7:16](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=436)** The first thing was data, and we're going to say the length of the data.
>
> **[7:21](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=441)** So data was an array.
>
> **[7:23](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=443)** We're going to say the length of that, to be nine.
>
> **[7:30](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=450)** So we're expecting the data to have nine things within the array, and we also want to expect the body that total to be 50.
>
> **[7:45](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=465)** Now if these were strings, I could assert that they're strings.
>
> **[7:48](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=468)** These did appear to be numbers.
>
> **[7:50](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=470)** So let's just run this and confirm.
>
> **[7:54](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=474)** All right, so two passed, everything looks good, our assertions passed.
>
> **[7:59](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=479)** Let's just make sure that our assertions were actually checking something.
>
> **[8:03](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=483)** So I'm going to make it fail.
>
> **[8:07](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=487)** All right, it failed, it received 50, it expected 51.
>
> **[8:10](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=490)** So that tells me that we've got a decent test written.
>
> **[8:14](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=494)** So let's go ahead and write a second test.
>
> **[8:16](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=496)** So this is test for GET /products.
>
> **[8:18](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=498)** Let's go ahead and write a second test for posting the user login.
>
> **[8:23](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=503)** So let's just walk through that in the UI.
>
> **[8:25](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=505)** So I'm going to log out, going to inspect the page, pull up the Network tab.
>
> **[8:33](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=513)** We're going to view the Fetch/XHR.
>
> **[8:36](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=516)** We're going to go ahead and log in.
>
> **[8:38](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=518)** But before we click Login, I want to go ahead and clear the history.
>
> **[8:42](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=522)** I also want to click on Preserve log.
>
> **[8:46](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=526)** This will preserve any of our API requests.
>
> **[8:49](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=529)** So I'm going to type in, customer@[practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[8:56](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=536)** The password will be welcome01.
>
> **[9:00](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=540)** We're going to click Login, and we should have a login API recall.
>
> **[9:06](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=546)** So this is a POST to api.[practicesoftwaretesting.com/user/login](https://practicesoftwaretesting.com/user/login).
>
> **[9:12](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=552)** So just to make things simple, I'm going to go ahead and copy our first test, and we're just going to adjust it.
>
> **[9:21](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=561)** I'm going to change this a bit.
>
> **[9:23](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=563)** And this is going to be a POST, and it's going to be a post to /users/login.
>
> **[9:30](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=570)** I really like to make the titles the actually path that we're testing, that makes your test really readable when you're running them back and you know, trying to figure out what tests failed.
>
> **[9:41](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=581)** So this apiUrl, it's going to stay the same.
>
> **[9:44](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=584)** As you can see we could probably even maybe move that to a before block now that we're starting to see some repeated code in some of our tests.
>
> **[9:53](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=593)** And we're going to keep a response, but our request is not going to make a GET.
>
> **[9:58](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=598)** It's actually going to make a POST.
>
> **[10:01](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=601)** And we're going to make a POST call to the URL plus users/login.
>
> **[10:06](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=606)** Now this one is going to be a little different, because we actually want to post a body into this request.
>
> **[10:13](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=613)** So let's go take a look at the actual request that was made.
>
> **[10:16](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=616)** There's a POST, the payload that it sent includes this request body that has an email and a password.
>
> **[10:24](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=624)** So it's really just this object here.
>
> **[10:27](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=627)** If I click View source, this is probably an easier way to see it.
>
> **[10:30](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=630)** So email with a username, and then a password with a password.
>
> **[10:35](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=635)** So for the body, the syntax for that is we're going to go to our test title.
>
> **[10:41](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=641)** We're going to add a comma, we're going to do a open bracket.
>
> **[10:44](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=644)** Within that open bracket, we are going to add data.
>
> **[10:48](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=648)** This is going to be data that we are posting to the server, and we're going to pass in email, and we're going to have a string.
>
> **[10:56](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=656)** We're going to add the actual email address here, and then we're going to pass a password.
>
> **[11:02](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=662)** This is going to be welcome01.
>
> **[11:04](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=664)** So the string is going to be customer@[practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[11:12](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=672)** All right, so we've got our email, we've got our password, we've got the end of our data block.
>
> **[11:18](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=678)** At this point, we just want to make sure that we have some kind of assertion, right?
>
> **[11:23](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=683)** So I can run this, but if we're not asserting on the response, this API request could fail and we would never know.
>
> **[11:30](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=690)** So let's go ahead and add an expect response.status toBe 200.
>
> **[11:39](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=699)** Maybe it's going to be a 200. Let's see.
>
> **[11:43](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=703)** Let's see what the response body was.
>
> **[11:46](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=706)** Yeah, the status code is a 200.
>
> **[11:48](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=708)** So that's what we're going to expect.
>
> **[11:51](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=711)** And we can go ahead and set the const body equals to await response.json, so we can assert on the body.
>
> **[12:00](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=720)** Let's actually see what gets returned.
>
> **[12:05](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=725)** Let's see, this is what we send, and it looks like we don't even get a response, at least not in this view, but let's go take a look.
>
> **[12:13](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=733)** Maybe we will just debug this and see if anything does come back, console.log body.
>
> **[12:19](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=739)** All right, so I'm going to add another break point here, and we're going to debug this test.
>
> **[12:24](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=744)** We're going to see just what comes back in the response body.
>
> **[12:31](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=751)** All right, so it looks like in the body, this wasn't visible in Chrome, which is interesting, but it looks like we have an access_token, we have an expires_in 300, and there's a token_type bearer.
>
> **[12:43](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=763)** So that's what's coming back.
>
> **[12:45](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=765)** So one easy test we can add to this could just be to make sure that the access token actually exists on the response.
>
> **[12:54](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=774)** So to do that, we're going to do an expect.
>
> **[12:57](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=777)** We're going to say body.access_token, and we're going to say toBeTruthy.
>
> **[13:04](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=784)** So basically saying this body should have an access token.
>
> **[13:09](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=789)** If that's true, pass. If not fail.
>
> **[13:13](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=793)** So let's go ahead and run this test.
>
> **[13:15](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=795)** Just make sure everything passes.
>
> **[13:19](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=799)** All right, everything is good.
>
> **[13:20](https://www.linkedin.com/learning/learning-playwright/api-testing-in-playwright?u=76281980&t=800)** For more information, the Playwright docs provide even greater detail into the possibilities of what you can do when testing API requests with Playwright.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5), [[Microsoft Products|Products]] (4), [[Fetch]] (2)
> **Env Vars:** api (12), url (8), post (6), xhr (3), json (3)
> **CLI Commands:** make (16)
> **Code Identifiers:** apiurl (3), tobe (2), access_token (2), expires_in (1), token_type (1)
> **API Endpoints:** get  (5), post  (2), post
 (1)
> **Definitions:** is a  (4), is an  (2)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (5)
> **File Paths:** response.json (2), api.spec.ts (1)

#### [Automating the right things with Playwright](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=0)** - [Instructor] As we've learned about a lot of the core functionality that Playwright offers, it's easy to get carried away and want to automate all the things.
>
> **[0:09](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=9)** I mean, that's probably what your manager wants, right?
>
> **[0:12](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=12)** Well I believe it's more important to automate all the right things.
>
> **[0:15](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=15)** When I say all the right things, I mean to utilize Playwright for its strengths and utilize other tooling for their strengths.
>
> **[0:24](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=24)** Let's take a look at some of the different types of [[Test Automation]] that can be done.
>
> **[0:28](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=28)** You've got unit or component tests, you've got API regression tests, you've got UI regression tests, smoke tests, performance tests, and security tests.
>
> **[0:41](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=41)** Ask yourself, which of these areas do you believe Playwright is best used for?
>
> **[0:46](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=46)** As I hope you've seen from the video so far, Playwright really shines when doing automated API, UI regression, and smoke testing.
>
> **[0:56](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=56)** Let's take a look slightly deeper at a model of a login flow and what happens from a technical perspective.
>
> **[1:04](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=64)** This is an example of what happens within a web application when you try and log in.
>
> **[1:10](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=70)** From the highest level, you're interacting with the UI, entering the username and password.
>
> **[1:16](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=76)** [[JavaScript]] on the page fires when you click submit.
>
> **[1:20](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=80)** This will send an API request to the API server, potentially with a CSFR token.
>
> **[1:26](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=86)** This may talk to a security service to ensure that you're able to connect to the database and validate the CSFR token.
>
> **[1:34](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=94)** Then a call is made to the database to validate the username and password that they're valid.
>
> **[1:39](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=99)** At that point, an access token could be granted, giving you access to the site that would get returned in an API response, in a response header, or in a body.
>
> **[1:50](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=110)** Typically, the JavaScript on the UI would get this authenticated response and load the authenticated homepage along with any additional information that would be retrieved from the API.
>
> **[2:03](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=123)** Where we can focus with Playwright are the interfaces that are exposed to test with, specifically the UI, or as I like to say, the DOM to the database, or through the API all the way down to the database.
>
> **[2:18](https://www.linkedin.com/learning/learning-playwright/automating-the-right-things-with-playwright?u=76281980&t=138)** Playwright excels at interacting with both of these in testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Test Automation]] (1)
> **Env Vars:** api (7), csfr (2), dom (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create three automated tests](https://www.linkedin.com/learning/learning-playwright/challenge-create-3-automated-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/learning-playwright/challenge-create-3-automated-tests?u=76281980&t=5)** - [Instructor] Now that we've covered a lot of the basics with Playwright [[Test Automation]], now it's your turn to write some code.
>
> **[0:12](https://www.linkedin.com/learning/learning-playwright/challenge-create-3-automated-tests?u=76281980&t=12)** For this challenge, I want you to create an automated test that adds an item to the shopping cart, goes through the checkout process, and when paying, selects buy now, pay later.
>
> **[0:25](https://www.linkedin.com/learning/learning-playwright/challenge-create-3-automated-tests?u=76281980&t=25)** I also want you to create a visual test to the checkout flow to validate the final payment screen.
>
> **[0:32](https://www.linkedin.com/learning/learning-playwright/challenge-create-3-automated-tests?u=76281980&t=32)** And lastly, create an API test against the endpoint slash [[Microsoft Products|products]] slash unique ID, ensuring the correct product details are returned in the API response.
>
> **[0:45](https://www.linkedin.com/learning/learning-playwright/challenge-create-3-automated-tests?u=76281980&t=45)** I'll leave you with a few hints to help you get started.
>
> **[0:48](https://www.linkedin.com/learning/learning-playwright/challenge-create-3-automated-tests?u=76281980&t=48)** Back in video six, where we walked through setting up the storage state, this includes an authenticated user for one of the customers.
>
> **[0:57](https://www.linkedin.com/learning/learning-playwright/challenge-create-3-automated-tests?u=76281980&t=57)** Using this will save you a few steps in your test.
>
> **[1:01](https://www.linkedin.com/learning/learning-playwright/challenge-create-3-automated-tests?u=76281980&t=61)** Also, for the API test, the product IDs get automatically updated every two hours due to the database resetting.
>
> **[1:10](https://www.linkedin.com/learning/learning-playwright/challenge-create-3-automated-tests?u=76281980&t=70)** This is a practice test site.
>
> **[1:12](https://www.linkedin.com/learning/learning-playwright/challenge-create-3-automated-tests?u=76281980&t=72)** You'll need to find a way to reliably get the product ID to make the API call in the test.
>
> **[1:20](https://www.linkedin.com/learning/learning-playwright/challenge-create-3-automated-tests?u=76281980&t=80)** With that, go ahead and try on your own and I'll see you in the next video where I'll walk through how I would solve the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** api (4)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create three automated tests](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=0)** - [Instructor] Hopefully you were able to solve the challenge or get very close on your own.
>
> **[0:10](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=10)** I'll walk through my solution and explain my whys on the decisions I made when writing the code.
>
> **[0:17](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=17)** You also may pick up on a few features we haven't talked about as well.
>
> **[0:22](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=22)** So I started off by creating a challenge.spec.ts, and I have two different describe blocks.
>
> **[0:30](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=30)** So I'm going to go ahead and collapse these down.
>
> **[0:32](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=32)** So I've got a describe, this is the, "Checkout Challenge," and a describe, this is the, "API Challenge."
>
> **[0:39](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=39)** We'll start with the, "Checkout Challenge," first.
>
> **[0:42](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=42)** The first thing I do within the describe block is I go ahead and use the storageState from the .auth/customer01.
>
> **[0:51](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=51)** This is what gets generated in our setup file.
>
> **[0:55](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=55)** I then have a beforeEach block that goes to the practicesoftwaretesting page So if I add more tests, I've already got the browser going there.
>
> **[1:06](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=66)** And I've written my test down here.
>
> **[1:09](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=69)** I'm passing in headless, which we'll use a little later.
>
> **[1:13](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=73)** But page is the main thing we are interacting with the page on.
>
> **[1:17](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=77)** I'm going and finding the Claw Hammer.
>
> **[1:21](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=81)** I'm adding it to cart by clicking it, and then I go ahead and make an assertion to validate that the cart quantity is 1.
>
> **[1:31](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=91)** So I'm going to go ahead and run this, debug this, so we can see it, and we'll walk through the [[Representational State Transfer (REST)|rest]] of it in debug mode.
>
> **[1:41](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=101)** So there's my setup file.
>
> **[1:45](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=105)** Now we are running and we are paused on this cart-quantity.
>
> **[1:49](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=109)** So let's see if we can move this to the right, and we can just look at these together.
>
> **[1:59](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=119)** All right, so you can see up here that we're validating that that 1 does exist on the cart.
>
> **[2:06](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=126)** All right, we're going to go ahead and step through.
>
> **[2:08](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=128)** The next thing we're going to do, is click on the nav-cart.
>
> **[2:12](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=132)** And from here, there's not really any action to do.
>
> **[2:15](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=135)** I could've made some assertions, but I decided we'll go ahead and click to proceed.
>
> **[2:20](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=140)** So I'm just using TestID proceed-1, TestID proceed-2.
>
> **[2:27](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=147)** So this is the sign in page.
>
> **[2:30](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=150)** The next is the billing address.
>
> **[2:33](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=153)** Here I'm actually validating that the step-indicator filter has a 2, and I'm validating that it has the CSS background-color, and this is green.
>
> **[2:48](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=168)** So I'm basically validating that when I'm on the Billing Address page that this is actually green.
>
> **[2:55](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=175)** It's a little deep for an assertion, but it just kind of shows some other examples of things you can assert on along the way.
>
> **[3:03](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=183)** This next section, I'm actually just filling out the address information.
>
> **[3:08](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=188)** So we're going to just click through this.
>
> **[3:12](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=192)** You can see I click through on the left hand side, and I went ahead and clicked proceed-3.
>
> **[3:19](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=199)** Here, I actually do a negative test.
>
> **[3:21](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=201)** So by default, this Confirm button should not be active, it should be disabled.
>
> **[3:27](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=207)** I saw that through exploring the test.
>
> **[3:29](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=209)** So I want to go ahead and just make an assertion that, "Hey, this is disabled right now."
>
> **[3:34](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=214)** And then we're going to go ahead and select our payment option.
>
> **[3:37](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=217)** So I am basically getting the payment-method ID.
>
> **[3:44](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=224)** And then the selectOption, I'm just passing in the string, "Buy Now Pay Later," and it's going to go select that out of the dropdown.
>
> **[3:54](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=234)** All right, once that's set, there's actually a new dropdown that comes by and here is where we're going to set it to 6 Monthly Installments.
>
> **[4:05](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=245)** Next, we're going to click Finish, which it is now enabled, and we're going to expect this help-block to show, Payment was Successful.
>
> **[4:18](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=258)** So I could change this and ensure it fails and run it again.
>
> **[4:22](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=262)** This next section is where we use headless.
>
> **[4:25](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=265)** So what headless does, let's see if we can, if it will tell us what it does by hovering over it.
>
> **[4:32](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=272)** I guess it doesn't want to right now.
>
> **[4:33](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=273)** Maybe it will up here.
>
> **[4:38](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=278)** It does not, 'cause the test is running.
>
> **[4:40](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=280)** What headless does is it lets us know if we're running the test with the browser open or with the browser closed and behind the scenes.
>
> **[4:49](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=289)** This is a ternary operator, so this headless currently is false, because I've got the window right here, and when it is false, it's going to skip this test step, and it's just going to log the console.
>
> **[5:05](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=305)** We're running in Headed mode, no screenshot comparison.
>
> **[5:09](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=309)** So this is my Screenshot Comparison Test.
>
> **[5:13](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=313)** I actually just made it a part of this test.
>
> **[5:16](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=316)** I just create an additional test.step Step one important thing is you do have to await any test.steps that you create, but you can give it a nice title and you can kind of wrap different logic within there.
>
> **[5:29](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=329)** And that's where I'm basically just doing the expect the page to have a Screenshot, and then we're creating a snapshot, and then we are masking the Toolshop logo up here.
>
> **[5:41](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=341)** And again, by default, this is not going to run when headless is false, but when it is running headless, it will capture the screenshot and do a comparison.
>
> **[5:51](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=351)** The reason I have it like this is you might have recognized the screenshot comparison is different if you're running in headless versus running in a browser.
>
> **[6:00](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=360)** Specifically, if you're using the VS code extension to run your test, opening the browser, your visual comparisons are going to be pixels off and it's going to be frustrating.
>
> **[6:10](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=370)** So this is the approach I took in just making my test less flaky.
>
> **[6:15](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=375)** So let's go ahead and finish stepping through this, and we're going to run the test past, as we can see back here.
>
> **[6:28](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=388)** All right, so that is the first two challenges.
>
> **[6:30](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=390)** The next challenge, which is a little more complicated, is this, "API Challenge."
>
> **[6:37](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=397)** Let's go ahead and minimize this.
>
> **[6:39](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=399)** Open up the, "API Challenge."
>
> **[6:41](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=401)** And I took somewhat of a different approach here.
>
> **[6:43](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=403)** So let me go ahead and just walk through some of my thoughts through the website.
>
> **[6:50](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=410)** So I wanted to validate that Thor hammer, we've already looked a little bit at that API.
>
> **[6:58](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=418)** I wanted to get the ID and then I wanted to go make a GET request against that ID.
>
> **[7:05](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=425)** So specifically, if I inspect this page, I go to Network, I come over here and type in Thor hammer, (keyboard clicks) click Search.
>
> **[7:18](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=438)** I'm going to make a API request.
>
> **[7:22](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=442)** It's also going to show up on the front end here.
>
> **[7:26](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=446)** It's going to return this data.
>
> **[7:28](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=448)** And I wanted to get this ID and go directly so that there's another API request that happens when you click specifically on an item.
>
> **[7:39](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=459)** It makes this request, which is APIpracticesoftwaretesting/[[Microsoft Products|products]]/id.
>
> **[7:47](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=467)** So I'm going to make two API calls in my test.
>
> **[7:50](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=470)** The first one to get the ID.
>
> **[7:52](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=472)** The second one is where we're actually going to do the assertions.
>
> **[7:56](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=476)** So let's just walk through that here.
>
> **[7:59](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=479)** So I've got a debug point here.
>
> **[8:02](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=482)** And as we start walking through this.
>
> **[8:09](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=489)** All right, so we've got our debug field here.
>
> **[8:12](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=492)** So the first thing we're doing, we're setting our API URL.
>
> **[8:16](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=496)** This is a getProductResponse variable.
>
> **[8:20](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=500)** And we're making our first request.get to the search the Thor hammer.
>
> **[8:26](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=506)** And what we're saving is this is the productBody we're getting.
>
> **[8:31](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=511)** So there's a data array and then there's an ID in here.
>
> **[8:36](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=516)** So I'm basically creating a new variable called productID and I'm setting it equal to the productBody.data.
>
> **[8:46](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=526)** The zero is like the first item in the array .id.
>
> **[8:50](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=530)** So I'm trying to set this ID to this variable.
>
> **[8:54](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=534)** So as we walk through that, you can see now, if I hover over that, that value is set.
>
> **[9:00](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=540)** Now I'm able to go ahead and make my second API call.
>
> **[9:04](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=544)** I find that saving the response variable name is useful for the final API response that you're making an API request on.
>
> **[9:13](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=553)** You can really use any name you want, but I've just found that to be a good pattern when I'm writing API tests.
>
> **[9:20](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=560)** So we're going to set response equal to the post, and then if we look over here, we're actually passing in the productID to the get request.
>
> **[9:30](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=570)** So we'll go ahead and step through these.
>
> **[9:35](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=575)** We're going to expect the response is 200.
>
> **[9:37](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=577)** We're going to set the body to response body.
>
> **[9:40](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=580)** So let's go look and see what information is here now.
>
> **[9:44](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=584)** So we've got Brand, we've got Category, we've got a lot of information in here.
>
> **[9:49](https://www.linkedin.com/learning/learning-playwright/solution-create-3-automated-tests?u=76281980&t=589)** And we're basically just validating that these things are false.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** api (12), css (1), url (1)
> **Code Identifiers:** productbody (2), productid (2), storagestate (1), beforeeach (1), selectoption (1)
> **CLI Commands:** make (6), find (1)
> **UI Navigation:** dropdown (2), click on (1), go to (1)
> **Definitions:** is a  (3)
> **Prerequisites:** setup (2)
> **File Paths:** challenge.spec.ts (1)


### 3. Maintaining Playwright Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to maintaining tests with Playwright](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=0)** - [Instructor] From my experience, the time maintaining an automated test is close to equal of the time it takes to create a specific test.
>
> **[0:09](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=9)** Writing the test is only the first step in the automation journey.
>
> **[0:13](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=13)** Once written, the test is there to provide the testers and developers on the team feedback automatically.
>
> **[0:20](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=20)** It's still up to us to take that feedback, the passing or the failing of a test and doing something with it.
>
> **[0:27](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=27)** Typically, most of this maintaining time is looking into failed tests.
>
> **[0:34](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=34)** I found that failed tests typically fall into four different categories: A bug.
>
> **[0:41](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=41)** The code that we are testing is broken.
>
> **[0:44](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=44)** A bug was introduced that failed our assertion or prevented automation actions from occurring.
>
> **[0:51](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=51)** An intended change.
>
> **[0:53](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=53)** The code that we are testing has changed.
>
> **[0:56](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=56)** A change to the system was made, but it was intended, and we need to go update our automated tests to account for it.
>
> **[1:04](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=64)** Before we go too much further, flaky pie crust is good.
>
> **[1:09](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=69)** Flakey test? Not so good, they're bad.
>
> **[1:13](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=73)** Let's define what a flakey test is.
>
> **[1:15](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=75)** This means when your tests pass sometimes and other times they fail, regardless of the state of the website that's being tested.
>
> **[1:24](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=84)** Typically, the test doesn't follow best practices or web first assertions like you're making an assertion for a value that may not be loaded on the page yet, or the test doesn't account for certain actions within the webpage, like a page is redirecting or content that dynamically loads after scrolling down a page isn't there yet to assert against or interact with.
>
> **[1:49](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=109)** Or it could be a test is using test data, which causes a failure, something like an invalid email address or an invalid phone number.
>
> **[1:56](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=116)** It also could be a test that may rely on some specific configuration or state of the website that another test might have changed, and then there's flakey infrastructure.
>
> **[2:09](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=129)** The infrastructure that the code is running on is having issues.
>
> **[2:13](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=133)** This could mean the code is perfectly fine.
>
> **[2:15](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=135)** The logic in the code is fine, but the server's crashing or is causing some kind of network errors.
>
> **[2:22](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=142)** Some examples are the site may be under too much load and it just crashed.
>
> **[2:27](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=147)** It could be the database responses were taking longer than 30 seconds and our tests just timed out and it failed the test.
>
> **[2:36](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=156)** This could be a bug too, so don't just assume infrastructure is your problem.
>
> **[2:41](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=161)** It could be a domain name that expired for a test site, et cetera.
>
> **[2:45](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=165)** In each of these areas, it'll be important to be able to review and inspect failed tests and interpret the results.
>
> **[2:54](https://www.linkedin.com/learning/learning-playwright/introduction-to-maintaining-tests-with-playwright?u=76281980&t=174)** We'll be exploring Playwright's rich feature set that will help you maintain your test as your automation project grows.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Playwright screenshots, videos, and reporters](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=0)** - [Instructor] As you execute Automated Test, it's critical that you inspect the results of each run.
>
> **[0:06](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=6)** By default, Playwright has many built-in Test Reporters.
>
> **[0:11](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=11)** In this video, we'll walk through a few of the different options.
>
> **[0:15](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=15)** A link can be found in the playwright.config near the Reporter's option.
>
> **[0:23](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=23)** So here is Reporter and we can follow this link and you can see here's all the different built-in Reporters we have access to.
>
> **[0:34](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=34)** Before we get going, let's go ahead and update our screenshot to on.
>
> **[0:43](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=43)** This is going to be temporarily.
>
> **[0:45](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=45)** And let's update our video to on, so we can actually see what these look like in the Reports.
>
> **[0:53](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=53)** This will ensure that every test this run, if it's passed or failed, we'll have a screenshot and a video for our testing purposes.
>
> **[1:02](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=62)** We'll save our previous settings back at the end of the video.
>
> **[1:05](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=65)** Once the config is saved, let's run [[npm]] run test. (keyboard clicks) Let's hope there's no failures.
>
> **[1:15](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=75)** Their test run is complete and I have this command, npx playwright show-report to view the [[HTML]] Reporter. (keyboard clicks) So let's run that command.
>
> **[1:29](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=89)** You'll notice this opens up a HDP server, and I am able to quickly view any of the tests.
>
> **[1:36](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=96)** I can search by Tags or by Projects very quickly.
>
> **[1:45](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=105)** Here's the first Tag.
>
> **[1:48](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=108)** And I can also click into each of these.
>
> **[1:50](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=110)** So let's go find the, "Checkout Challenge."
>
> **[1:53](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=113)** I can see all the different test steps.
>
> **[1:57](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=117)** I can see the screenshot of where the test completed.
>
> **[2:01](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=121)** I've got an option to View Traces, which is also very useful, and we've got the video, so I can actually see what was happening on the screen during the test.
>
> **[2:14](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=134)** By default, the HTML Report is saved to the playwright-report folder.
>
> **[2:20](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=140)** This folder can be uploaded to an S3 bucket or any kind of web server to be viewable for any of these single test runs.
>
> **[2:30](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=150)** Let's go ahead and add a second Reporter List.
>
> **[2:34](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=154)** In order to add the List Reporter, we have to convert this string to an array of arrays.
>
> **[2:40](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=160)** This is how Playwright supports multiple options in the config file for the Reporter.
>
> **[2:45](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=165)** So let's convert this.
>
> **[2:47](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=167)** We're going to have two arrays.
>
> **[2:50](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=170)** We've got the first array, and we're going to add the List Reporter, we've got to close this out.
>
> **[2:56](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=176)** Don't forget to add your comma, and let's go ahead and run the same command, npm run test.
>
> **[3:05](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=185)** As the tests are running, you can see the List Reporter in action.
>
> **[3:10](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=190)** As the test runs, you've got the output of what's complete.
>
> **[3:16](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=196)** You've got the green check mark on the left.
>
> **[3:17](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=197)** You've got the time on the right.
>
> **[3:20](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=200)** I find this is a very useful Reporter to use when you're either debugging tests that are running in parallel or with multiple workers, and also to visualize what tests are running in a CI environment.
>
> **[3:35](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=215)** As you can see, there are more details that get presented right there within the command line.
>
> **[3:40](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=220)** This Reporter can be really useful when debugging tests locally or running tests in CI.
>
> **[3:46](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=226)** You can watch the progress in [[Real-Time]].
>
> **[3:49](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=229)** Let's open up the Test Reporters Documentation and look at a few of these other Reporters.
>
> **[3:55](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=235)** Another popular Reporter is the Blob Reporter.
>
> **[3:58](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=238)** This Reporter allows you to easily manage parallel runs when running in a CI environment and combine the Reports back together.
>
> **[4:07](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=247)** There's also the [[JSON]] Reporter.
>
> **[4:10](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=250)** This Reporter provides JSON output of the test run.
>
> **[4:14](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=254)** Another popular option is the [[JUnit]] Reporter.
>
> **[4:18](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=258)** This is one of the most Standardized Test Reporter Formats in the testing industry.
>
> **[4:23](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=263)** These Reports can be imported into many different tools.
>
> **[4:28](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=268)** You can also build your own Custom Reporter, or you can use an existing Third Party Reporter that exists.
>
> **[4:36](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=276)** There are many, many different options to meet whatever needs you have.
>
> **[4:41](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=281)** Feel free to take some extra time after this video and explore some of the other built-in and Third Party Playwright Reporter options on your own.
>
> **[4:49](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=289)** Before we move on, let's go ahead and set our video and screenshots back to their defaults.
>
> **[4:56](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=296)** We'll leave the Reporter Test there, so I'm just going to revert this change and revert.
>
> **[5:04](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=304)** It looks like both of those reverted, and we've still got our list.
>
> **[5:08](https://www.linkedin.com/learning/learning-playwright/playwright-screenshots-videos-and-reporters?u=76281980&t=308)** This way we're keeping our HTML Reporter size small.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[npm]] (2), [[JSON]] (2), [[Real-Time]] (1), [[JUnit]] (1)
> **Env Vars:** html (3), json (2), hdp (1)
> **CLI Commands:** npm (2), find (2), npx (1)
> **File Paths:** playwright.config (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Playwright trace viewer](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=0)** - [Instructor] In the previous video, we showed off the [[HTML]] reporter.
>
> **[0:04](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=4)** This next session will be somewhat of a review from what we saw when we discussed the Playwright UI mode.
>
> **[0:12](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=12)** We're going to take a look and explore the trace viewer that is built into the HTML report.
>
> **[0:18](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=18)** All right, let's start by running our test.
>
> **[0:20](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=20)** We're going to use the mpm run test:report command.
>
> **[0:26](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=26)** What this is going to do is run the test command and then directly after it, go ahead and show the Playwright report all in one command.
>
> **[0:38](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=38)** All right, let's choose the Create customer 01 auth, this is the setup test, and let's go ahead and scroll down to the traces section and click on this image down here.
>
> **[0:51](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=51)** There are a few things I want us to observe while we're here.
>
> **[0:55](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=55)** First, let's look at the console tab.
>
> **[0:57](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=57)** In my view, I can see there are two console error messages that were produced while this test was running.
>
> **[1:04](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=64)** This information can be really useful.
>
> **[1:06](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=66)** For some reason, you're getting a [[JavaScript]] error in the code as this error will be persisted as long as the HTML test report exists.
>
> **[1:17](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=77)** Let's back out of this test and go look at one of the API tests, the GET/[[Microsoft Products|products]] test.
>
> **[1:25](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=85)** Let's go look at the trace, and here I want us to view the network tab.
>
> **[1:32](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=92)** In this network tab we have access to the same thing we have when using Chrome dev tools.
>
> **[1:38](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=98)** I can click, I can see the request, I can see the response, I can see the response headers, and I can even see the response body.
>
> **[1:49](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=109)** Having access to this after a test has run to be able to go inspect the state of what the system was in while the test was running is a crucial tool.
>
> **[2:00](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=120)** It's going to give us a ton of observability into our [[Test Automation]].
>
> **[2:05](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=125)** What's nice about this network tab as well is that it shows all the HTTP requests that were made from within a Playwright test, not just the URL that you're testing against, but any third parties that may have requests as well.
>
> **[2:21](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=141)** One last thing I want us to review is let's open the checkout spec.
>
> **[2:30](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=150)** This is the spec that we did for the challenge.
>
> **[2:33](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=153)** If you didn't complete the challenge, you can download the repository and check out the branch 03_03B.
>
> **[2:43](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=163)** Once you've got that open, let's go click on the traces, and by selecting the image within the Trace Viewer section up here at the top, you can hover over each step and actually see the test completing through all the different steps.
>
> **[2:59](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=179)** This is really useful if you're not sure what was happening on the screen when a test failed.
>
> **[3:05](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=185)** And all this information is also updated as each step is clicked into in this actions section.
>
> **[3:14](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=194)** One other tip is you can also click on this target icon in the top left and also select different DOM elements.
>
> **[3:22](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=202)** This is very similar to the UI mode.
>
> **[3:25](https://www.linkedin.com/learning/learning-playwright/playwright-trace-viewer?u=76281980&t=205)** This is also very helpful if you need to quickly interact with different DOM elements during a test step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (1), [[Microsoft Products|Products]] (1), [[Test Automation]] (1)
> **Env Vars:** html (3), dom (2), api (1), http (1), url (1)
> **UI Navigation:** click on (2), scroll down (1), open the (1)
> **Cross-References:** previous video (1), we discussed (1)
> **Documentation:** spec (2)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### [Scaling Playwright tests](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=0)** - [Instructor] As your Playwright [[Test Automation]] suite grows, you'll find the need for greater organization and maintainability as needed within your test.
>
> **[0:10](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=10)** You'll also need to have some strategies on hand in order to abstract away duplicate code and simplify your code as much as possible.
>
> **[0:19](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=19)** Let's take a few minutes and add some organization to our test today.
>
> **[0:24](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=24)** Let's go ahead and create a new folder called API within tests, we can have all of our API tests live in this directory.
>
> **[0:33](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=33)** Let's move our API spec into that folder.
>
> **[0:37](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=37)** You can do that by dragging and dropping it.
>
> **[0:40](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=40)** Now we will go ahead and create folders for the other tests.
>
> **[0:45](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=45)** Checkout, homepage, and login, and let's go ahead and drop each test in their folders.
>
> **[1:02](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=62)** All right, so we've got our login.
>
> **[1:06](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=66)** We'll go to login.
>
> **[1:08](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=68)** I'm going to go ahead and say, don't ask me again.
>
> **[1:12](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=72)** Yes, update the imports.
>
> **[1:16](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=76)** Homepage will go to homepage.
>
> **[1:19](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=79)** This can be deleted.
>
> **[1:25](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=85)** We can go ahead and delete this too.
>
> **[1:27](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=87)** We're cleaning house.
>
> **[1:32](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=92)** And then our challenge is currently broken up into, I've got one big test file for multiple things.
>
> **[1:39](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=99)** So the best thing to do here would be to go ahead and break this out to two different files.
>
> **[1:46](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=106)** So we're going to go ahead and add this first one to checkout.
>
> **[1:50](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=110)** So I'm going to create a new file.
>
> **[1:51](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=111)** I'm going to call this the checkoutChallenge.spec.ts and we'll just copy and paste some code over there.
>
> **[2:03](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=123)** So I'm going to go get this whole first test.
>
> **[2:07](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=127)** We'll dump that here and we'll go back to our challenge spec.
>
> **[2:12](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=132)** I'm going to leave the import, I'm going to take out everything from the first describe block down, and we'll go ahead and rename this to our API challenge.
>
> **[2:29](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=149)** And we'll drop this in the API folder.
>
> **[2:32](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=152)** So now we've got things a little more organized.
>
> **[2:35](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=155)** One thing to note is you will need to update the snapshots to the right folder as well.
>
> **[2:42](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=162)** So I'm going to grab these homes, drop it in the homepage folder.
>
> **[2:48](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=168)** So these need to live together.
>
> **[2:50](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=170)** If you do update the home.spec file name, you will need to also rename folder and file names for the snapshots.
>
> **[3:00](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=180)** We'll also go ahead and drop this in the checkout folder.
>
> **[3:07](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=187)** And again, since we rename this, we'll actually just rerecord these.
>
> **[3:11](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=191)** We're not going to worry about renaming 'em.
>
> **[3:14](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=194)** All right, let's go ahead and run our test and regenerate any snapshots, npx playwright test --update-snapshots.
>
> **[3:30](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=210)** All right, looks like we've got updated snapshots, everything passed, and we also don't need this test examples folder.
>
> **[3:39](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=219)** This comes by default with Playwright.
>
> **[3:41](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=221)** So we're going to go ahead and clean this up as well.
>
> **[3:45](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=225)** One thing we haven't discussed is the ability to abstract away complex logic from your test files into other files.
>
> **[3:53](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=233)** This can be done in Playwright using functions that can be used across any of your tests utilizing a page object class or utilizing Playwright fixtures.
>
> **[4:04](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=244)** We won't have time to explore all these concepts in this course, but we will look at one example of what it would look like to implement a page object in our code base.
>
> **[4:14](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=254)** So I've created the pages folder up here, and I've created a login folder within that.
>
> **[4:20](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=260)** And I've created a login page, page object model.
>
> **[4:25](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=265)** This is our page object class.
>
> **[4:28](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=268)** Within the page object file, I've created locators, and below the constructor with the locators, I have some different functions.
>
> **[4:37](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=277)** So I've got a go-to and a login using the different locators.
>
> **[4:42](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=282)** For example, this go-to function will navigate, it will do a page, do go to, and it will go to practice [[Software Testing]], plus off login.
>
> **[4:55](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=295)** The login function, when calling that, I can pass in an email and a password, and it will input the email in the email field, the password and the password input field, and it'll go ahead and click the login button for us.
>
> **[5:09](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=309)** I could also add an assertion to the end of this just to confirm that the page loaded and things passed.
>
> **[5:16](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=316)** It's another option.
>
> **[5:18](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=318)** So let's see what this looks like in the Playwright test.
>
> **[5:22](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=322)** The login test.
>
> **[5:24](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=324)** So I've gone ahead and updated the original test to be login without page object.
>
> **[5:31](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=331)** I didn't change it outside of that.
>
> **[5:33](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=333)** I did import the login page.
>
> **[5:36](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=336)** So this is what it would look like to import this class into your file.
>
> **[5:41](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=341)** And I've gone ahead and written this test down here.
>
> **[5:46](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=346)** So this is the same exact test as what's above.
>
> **[5:49](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=349)** We're going to log in with page object.
>
> **[5:51](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=351)** We're going to first set the variable login page to the login page class passing in the page into the class.
>
> **[6:00](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=360)** At that point, we call the goto function.
>
> **[6:04](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=364)** Then we're manually inputting the password input field, we're clicking the login button, and then we have an assertion.
>
> **[6:12](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=372)** It's possible that I could replace these three fields with an await loginPage.login and I could pass in this string, comma, welcome01.
>
> **[6:32](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=392)** And this would do the same thing as that.
>
> **[6:35](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=395)** So I could comment this out, I could go to the login page, I could then log in with this username and password, and let's just run this and ensure everything works.
>
> **[6:48](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=408)** All right, everything passed, things were able to log in.
>
> **[6:52](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=412)** As you could see, the login page is much easier to read.
>
> **[6:56](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=416)** It's a little smaller, depending on how you want to organize and structure your test.
>
> **[7:01](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=421)** I'm going to go ahead and leave this a little more verbose for now.
>
> **[7:07](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=427)** Now that we have this example, another thing to consider is the ability to run our test automation scripts across multiple environments.
>
> **[7:16](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=436)** A good pattern I've seen used is using a .env file and updating your test with a process.env.URL.
>
> **[7:26](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=446)** So let's walk through what that would look like, implementing it within the page object.
>
> **[7:32](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=452)** So the first thing I would want to do is go to the playwright.config, and you can see at the top of the playwright.config, I've got three lines commented out.
>
> **[7:43](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=463)** This is importing the dotenv node package and the path from [[JavaScript]].
>
> **[7:49](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=469)** And then it's initializing the dotenv, looking for an .env file within our file directory.
>
> **[7:56](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=476)** So I'm going to go ahead and uncomment this out.
>
> **[7:59](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=479)** You'll notice that this is currently red because it says I can't find this module.
>
> **[8:04](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=484)** That's because we need to install the module.
>
> **[8:07](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=487)** So I'm going to go to my terminal.
>
> **[8:09](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=489)** I'm going to type in [[npm]] install dotenv --save.
>
> **[8:16](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=496)** What this is going to do is install the dotenv plugin.
>
> **[8:21](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=501)** It's going to update my package.[[JSON]] file.
>
> **[8:25](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=505)** So you're going to see a new dependency added.
>
> **[8:30](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=510)** We're going to do a save dev.
>
> **[8:33](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=513)** So by typing npm install dotenv --save-dev, this installed the dotenv file under my dev dependencies.
>
> **[8:43](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=523)** This also installed the dotenv information into my node_modules.
>
> **[8:50](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=530)** The last thing I need to do to get this to work is I need to create a new file named ".env" at the root directory.
>
> **[8:59](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=539)** And we're going to go ahead and set a URL.
>
> **[9:02](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=542)** So I'm going to just, in capital letters, URL=[https://practicesoftwaretesting.com](https://practicesoftwaretesting.com)
>
> **[9:14](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=554)** and now I should be able to go to my page object for login, and I should be able to replace this string with process.env.URL.
>
> **[9:29](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=569)** Now, this should pull this in for any of our testing on the login page.
>
> **[9:37](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=577)** So let's go run the login spec with the page object.
>
> **[9:42](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=582)** Let's just make sure everything passes.
>
> **[9:46](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=586)** Voila.
>
> **[9:47](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=587)** As you build out your Playwright test automation projects and begin to scale, you'll find this and other methods to be able to abstract and reuse code extremely useful.
>
> **[9:59](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=599)** In doing so, will cut down on your maintenance cost as well.
>
> **[10:03](https://www.linkedin.com/learning/learning-playwright/scaling-playwright-tests?u=76281980&t=603)** My advice is, whatever strategies you choose, pick a pattern, stick to it, and as long as it's working for you and your team, don't worry about what everyone else is doing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (3), [[npm]] (2), [[Software Testing]] (1), [[JavaScript]] (1), [[JSON]] (1)
> **CLI Commands:** find (3), npm (2), npx (1), node (1), go run (1)
> **Env Vars:** api (5), url (4)
> **UI Navigation:** go to (8)
> **File Paths:** process.env (2), playwright.config (2), checkoutchallenge.spec.ts (1), package.json (1)
> **Documentation:** spec (5)
> **Prerequisites:** install (4)
> **Code Identifiers:** checkoutchallenge (1), loginpage (1), node_modules (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=0)** - [Butch] Congratulations for completing this voyage and learning Playwright with me.
>
> **[0:06](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=6)** As you continue your learning journey, I want to encourage you to find ways to use the skills you've learned to build automated tests with Playwright.
>
> **[0:15](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=15)** Through this course, we only touch the tip of the iceberg of the functionality that the Playwright team has built in this tool.
>
> **[0:23](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=23)** I want to encourage you to go forth and read the official docs.
>
> **[0:28](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=28)** When I first started learning Playwright, I spent around one hour a day just reading the official Playwright docs, and over a few weeks, I had a huge advantage.
>
> **[0:39](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=39)** Even though I didn't memorize everything, I had an idea of Playwright's capabilities, and I found myself remembering where to look when I did face a problem.
>
> **[0:50](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=50)** You can also check out the Playwright YouTube channel.
>
> **[0:54](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=54)** You can also join the Playwright Discord, connect with others, ask questions, find articles and video content, and eventually, you'll be able to help others with their problems.
>
> **[1:07](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=67)** You can also check out the Playwright [[GitHub]] repo.
>
> **[1:10](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=70)** Here, you can subscribe to releases, report bugs, or even request features, or vote on feature requests.
>
> **[1:18](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=78)** The developers and the Playwright team, they live here.
>
> **[1:21](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=81)** This is where they prioritize their work.
>
> **[1:24](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=84)** You can also subscribe to my newsletter at [PlaywrightSolutions.com](https://PlaywrightSolutions.com).
>
> **[1:29](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=89)** As I write, I am trying to always provide actionable solutions, things that you can replicate with a test repo, or with test code on your own machine.
>
> **[1:41](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=101)** You can also connect with me on [[LinkedIn]].
>
> **[1:43](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=103)** I love hearing stories about people learning and growing, so please do reach out, and let me know if this course was helpful to you.
>
> **[1:52](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=112)** I'll leave you with this.
>
> **[1:53](https://www.linkedin.com/learning/learning-playwright/next-steps?u=76281980&t=113)** Stay curious, and never stop learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[LinkedIn]] (1)
> **CLI Commands:** find (2)
> **Tools:** discord (1), github (1)
> **URLs:** [playwrightsolutions.com](https://playwrightsolutions.com) (1)
> **Documentation:** official docs (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [butch] (1)


## Instructor

- [[Butch Mayhew]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-playwright-5911873)

## Skills Covered

- Test Automation Tools
- Automation

## Path Context

### In [[Master Test Automation with Playwright]]
**1 of 4** | [[Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios]] →

### In [[Getting Started with Software Testing]]
← [[Learning Selenium- Structure, Scale, Run, and Optimize Automated Tests]] | **6 of 12** | [[JMeter- Performance and Load Testing]] →

## Appears In

- [[Master Test Automation with Playwright]]
- [[Getting Started with Software Testing]]

## Related Courses

_Courses sharing skills:_

- [[Jira Administration- Automation]] — Automation
- [[Ai Agents For Everyday Professionals Simple Automations To Speed Up Your Work No Code Required]] — Automation

---

[↑ Back to top](#)