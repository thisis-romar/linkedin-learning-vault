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
  - '[[Getting Started with Software Testing]]'
prev_courses:
  - '[[Software Testing- Planning Tests for Mobile]]'
next_courses:
  - '[[Learning Playwright]]'
path_nav: '[{"path":"Getting Started with Software Testing","position":5,"total":12,"prev":"Software Testing- Planning Tests for Mobile","next":"Learning Playwright"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/selenium
  - skill/test-automation
status: not-started
created: 2026-04-21
---

![Learning Selenium: Structure, Scale, Run, and Optimize Automated Tests](https://media.licdn.com/dms/image/v2/D560DAQGblcfQboVDhA/learning-public-crop_675_1200/B56ZiFYB7uH0AY-/0/1754584326185?e=2147483647&amp;v=beta&amp;t=NjRx9jtLJZh04d4RmoKVzN2MizAHQUlChsJ0460S6Gw)

# Learning Selenium: Structure, Scale, Run, and Optimize Automated Tests

> In this course, Playwright test automation specialist Qambar Raza guides you through the essentials of Selenium, a cornerstone of browser test automation, including how to write and run tests on both local machines and cloud-based platforms like GitHub Actions. Learn how to set up Selenium, grasp the intricacies of debugging, and capture evidence of test failures using screenshots. Gain proficienc

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests) | 1h 16m | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Qambar Raza]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-selenium-structure-scale-run-and-optimize-automated-tests-5989088/codespaces)

## Skills Covered

- Selenium
- Test Automation

## Table of Contents

### Introduction

#### Learn Selenium for testing
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/learn-selenium-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/learn-selenium-for-testing?u=76281980&t=0)** - If you want to become a software tester or just sharpen your skills with a tool trusted across the industry, then this course is for you.
>
> **[0:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/learn-selenium-for-testing?u=76281980&t=8)** I've used Selenium on real world projects like publishing project, like BBC blogs or appointment booking systems, and I still use it today.
>
> **[0:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/learn-selenium-for-testing?u=76281980&t=17)** Selenium has powered browser test automation for over a decade now.
>
> **[0:22](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/learn-selenium-for-testing?u=76281980&t=22)** Engineering teams at big tech companies like Google, Netflix, BBC, they all use Selenium as their go-to framework.
>
> **[0:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/learn-selenium-for-testing?u=76281980&t=30)** I'll help you with everything step by step.
>
> **[0:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/learn-selenium-for-testing?u=76281980&t=33)** We'll write real world test scripts together, run them on GitHub actions, capture screenshots on failure, and structure your test like a pro using page object models.
>
> **[0:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/learn-selenium-for-testing?u=76281980&t=45)** This course gives you everything you need to build reliable professional grade UI tests.
>
> **[0:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/learn-selenium-for-testing?u=76281980&t=51)** So let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** bbc (2)
> **Code Keywords:** let (1)
> **Tools:** github (1)
> **Speakers:** - if (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=0)** - [Narrator] Before we dive in, let's make sure we are all on the same page.
>
> **[0:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=4)** You'll need a basic sense of how automated test works, the kind where you write assertions, pick elements on a page and structure your test in a way that makes sense.
>
> **[0:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=15)** If you have ever written a simple test before, you are good.
>
> **[0:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=18)** And about Java, don't worry.
>
> **[0:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=20)** You don't need to be a Java expert.
>
> **[0:22](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=22)** We'll keep things clean and focused on test logic, not language tricks.
>
> **[0:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=27)** Just enough Java to get our tests running.
>
> **[0:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=30)** Finally, if you have heard of CI/CD pipelines, even at a higher level, that will come in handy when we write our tests in GitHub actions, but I'll walk you through it when we get there.
>
> **[0:41](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=41)** No stress.
>
> **[0:42](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=42)** In this course I'm going to show you how to set up Selenium on both Windows and Mac, the main difference, just a set of steps.
>
> **[0:50](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=50)** I'll guide you through each one, so no matter what machine you're on, you'll be ready.
>
> **[0:55](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=55)** And once that's done, everything else, the way you write tests, run them, debug them.
>
> **[1:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=60)** That's the same across both.
>
> **[1:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=62)** If you have taken my Playwright design patterns or advanced Playwright courses, this will feel familiar.
>
> **[1:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=68)** We are bringing those same ideas, solid structure, reliable tasks, scalable frameworks into the Selenium world.
>
> **[1:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=75)** And to make life easier, I've set up a GitHub repository with everything you need, code, configs, examples.
>
> **[1:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=81)** You'll find links in the resources, and it's all organized chapter by chapter so you can follow along or build your own flavor of the project.
>
> **[1:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-you-should-know?u=76281980&t=90)** Are you ready? Let's jump in.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), cd (1), find (1)
> **Code Keywords:** let (2), finally, (1), else, (1)
> **Prerequisites:** set up (2), you'll need (1)
> **Tools:** github (2)
> **Speakers:** - [narrator] (1)

#### Selenium vs. modern frameworks
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=0)** - [Narrator] Even in the world of Playwright, Cypress, and Puppeteer, Selenium still matters.
>
> **[0:06](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=6)** Let's talk about why.
>
> **[0:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=7)** Selenium isn't just another tool in the automation space, it's the backbone.
>
> **[0:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=12)** Fortune 500 companies still rely on it for mission-critical tests.
>
> **[0:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=17)** It's backed by W3C, which means it follows web standards.
>
> **[0:22](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=22)** And it integrates smoothly with Jenkins, GitHub Actions, and just about any CI/CD pipeline you can think of.
>
> **[0:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=30)** Even tools like Appium, BrowserStack, and Sauce Labs, they're all built on Selenium.
>
> **[0:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=36)** This is the foundation worth mastering.
>
> **[0:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=40)** If you're working in a large team, Selenium's probably already there.
>
> **[0:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=45)** It supports every major browser, including those older ones like Internet Explorer that some industries still depend on.
>
> **[0:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=52)** It doesn't matter whether your team codes in Java, Python, or C#, Selenium fits in right, and it scales beautifully whether you are testing on mobile, in the cloud, or in industries where reliability and compliance are non-negotiable.
>
> **[1:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=68)** Think banking, healthcare, government.
>
> **[1:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=71)** And what about those modern tools?
>
> **[1:13](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=73)** Playwright is fast and powerful, but no support for older browsers like Internet Explorer.
>
> **[1:19](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=79)** Cypress is super easy to pick up, but it's limited to Chromium and JavaScript.
>
> **[1:25](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=85)** Puppeteer, fantastic for Chrome-specific tasks, but not built for full QA pipelines.
>
> **[1:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=91)** Each has limits, Selenium doesn't.
>
> **[1:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=94)** Here's the real value.
>
> **[1:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=96)** When you learn Selenium, you're not just learning a tool, you're learning how browser automation works at its core.
>
> **[1:43](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=103)** That makes it easier to pick up any other framework down the line because you'll understand what's happening behind the scenes.
>
> **[1:50](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=110)** You'll know how to design tests that scale across teams, platforms, and products.
>
> **[1:55](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=115)** And you'll be ready for a wider range of roles, from QA to DevOps to test engineering.
>
> **[2:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=121)** So if you are here right now, you are on the right track.
>
> **[2:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/selenium-vs-modern-frameworks?u=76281980&t=125)** This course will give you the rock solid foundation in Selenium, and that foundation, it will support you no matter which tool you choose next.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (1), python (1)
> **Code Keywords:** let (1), super (1)
> **Env Vars:** w3c (1)
> **Documentation:** w3c (1)
> **Tools:** github (1)
> **Speakers:** - [narrator] (1)


### 1. Getting Started with Selenium

#### Setting up the Selenium framework for macOS
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=0)** - [Instructor] Let's set up IntelliJ IDEA, download Java 21 and build a Maven-based project on your machine.
>
> **[0:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=7)** So head over to [jetbrains.com/idea/download](https://jetbrains.com/idea/download) and click on Mac OS if you're downloading it from Mac OS.
>
> **[0:16](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=16)** And scroll down to select the community edition, which is free.
>
> **[0:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=20)** Click on download and it'll start downloading the DMG file.
>
> **[0:25](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=25)** Once that DMG file is downloaded, all you need to do is click and then drag the application icon into your applications folder.
>
> **[0:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=33)** I've already done that, so I'm going to skip that part.
>
> **[0:37](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=37)** After successfully installing and launching IntelliJ, you will see this welcome screen.
>
> **[0:42](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=42)** Click on New project.
>
> **[0:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=45)** Make sure the build system is selected as Maven so click on that.
>
> **[0:49](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=49)** In your JDK, click on the dropdown menu, click on Download, and we will be installing the Java version 21 because it has got a long-term support.
>
> **[1:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=60)** Click on Select and click on Create after.
>
> **[1:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=64)** Once you do that, you will see a Maven file, which is a pom.XML, our main.Java, and the pom.XML will show you that you're using Java Version 21.
>
> **[1:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=78)** Head over to the main.Java file, click on the play button at the top and see if it runs.
>
> **[1:24](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=84)** You'll see the code running and the output of the code in the window below, which is "Hello" and "Welcome" and the values of I from one to five.
>
> **[1:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-mac?u=76281980&t=93)** That means that you have set this up correctly.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (9), scroll down (1), select the (1), dropdown (1)
> **Env Vars:** dmg (2), xml (2), idea (1), jdk (1)
> **File Paths:** pom.xml (2), main.java (2)
> **Versions:** version 21 (2), java 21 (1)
> **Tools:** intellij (2)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)

#### Setting up the Selenium framework for Windows
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=0)** - [Instructor] To install IntelliJ IDEA and download Java 21 and build a Maven-based project on your Windows machine, head over to [jetbrains.com/idea/download](https://jetbrains.com/idea/download) and click on Windows.
>
> **[0:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=12)** Here, you will see two options, one to download IntelliJ IDEA Ultimate edition, which is a paid version, another one if you scroll down is a Community Edition, which is free.
>
> **[0:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=23)** Click on Download and it will be downloaded in your browser.
>
> **[0:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=27)** Once it downloads, head over to the Downloads section and double click on the installation to run the installer.
>
> **[0:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=38)** The process for installing is same as any other Windows application.
>
> **[0:41](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=41)** Just click on, Yes. Next, Next, Next, Finish.
>
> **[0:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=45)** Click on all of these options that you see on your screen to ensure that all of these files are now associated with the IntelliJ IDEA.
>
> **[0:53](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=53)** Click on Install, and it will install the IntelliJ IDEA on your machine.
>
> **[1:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=63)** So I'm going to pause the video while it installs so that you can see what happens after the installation and not the progress bar.
>
> **[1:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=71)** After it finishes installing, it will ask you to reboot.
>
> **[1:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=74)** Click on Reboot and click on Finish.
>
> **[1:19](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=79)** Once your computer has restarted, run the IntelliJ and you will see the screen.
>
> **[1:24](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=84)** Click on Confirm, Continue, Don't Send, and you will see the welcome screen.
>
> **[1:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=91)** On this welcome screen, click on the New Project, select the build system as Maven, go to dropdown for JDK, and click on Download.
>
> **[1:44](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=104)** Now here, we will be using the version number 21, which is the latest long-term support version, and click on Select.
>
> **[1:54](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=114)** Let's click on Create now.
>
> **[1:57](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=117)** This will create a Maven-based Java project on your IntelliJ with Java version 21.
>
> **[2:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=125)** And as you can see, it is downloading the ms-21 and doing some background task, which is downloading the JDK behind the scenes.
>
> **[2:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=135)** It will automatically set up everything for you, and all you need to do is click on the Play button to verify your setup once it has finished installing.
>
> **[2:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=146)** So I'm going to go to the Main.java, and I'll wait for it to finish scanning files, set up the project and wait for this green button to appear.
>
> **[2:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=156)** Now you can see the green button is there.
>
> **[2:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=158)** I will click on Play.
>
> **[2:42](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=162)** It will start resolving the Maven dependencies, set up the project.
>
> **[2:46](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=166)** The Play button might not work on the first click, so don't worry about it.
>
> **[2:50](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=170)** Just wait for the resolving of the dependencies to finish.
>
> **[2:56](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=176)** As you can see, it is doing a build and downloading Maven plugins, which will allow us to run this project.
>
> **[3:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=187)** Now as you can see, my Play button has worked.
>
> **[3:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=191)** The output on the screen is there, which says, "Hello and welcome," and it shows the indexes from i to one to i = 5, which means you have done the set up properly.
>
> **[3:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/setting-up-selenium-framework-for-windows?u=76281980&t=201)** Great job.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (15), go to (2), scroll down (1), select the (1), dropdown (1)
> **Prerequisites:** set up (4), install (3), setup (1)
> **Env Vars:** idea (4), jdk (2)
> **Tools:** intellij (6)
> **Code Keywords:** continue (1), let (1)
> **Versions:** java 21 (1), version 21 (1)
> **Definitions:** is a  (2)
> **File Paths:** main.java (1)

#### Write your first Selenium test
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=0)** - [Instructor] Let's build on top of the code base that we created in the last video.
>
> **[0:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=4)** So we have set up a Hello World code base when we were setting up the IntelliJ.
>
> **[0:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=9)** So we have got the main file, we have got a pom file.
>
> **[0:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=12)** So I will go to the folder called test here.
>
> **[0:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=17)** And in this test folder, I will create a file called FirstSeleniumTest.
>
> **[0:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=26)** This is where we will start writing the test, but before we write the test, I want to make sure that I've got the right dependencies in place.
>
> **[0:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=33)** So I will go to the pom.xml file, here, I will add the three important dependencies.
>
> **[0:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=39)** So the first dependency that I need is called Selenium, obviously, because this is a Selenium course, so we will get the Selenium.
>
> **[0:49](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=49)** Second dependency that I need is the web driver manager.
>
> **[0:53](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=53)** So I don't want to manage every browser myself.
>
> **[0:57](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=57)** I will delegate that responsibility to the web driver.
>
> **[1:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=61)** The third important dependency is the Junit.
>
> **[1:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=65)** So using the Junit, I would be able to use the asserts, assertions, and assert equals all those terminologies, which are very standard, so Junit and Jupiter.
>
> **[1:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=78)** So there you go. I've got three dependencies.
>
> **[1:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=81)** Now I will also acquire a plugin, which is the Surefire plugin to tie everything together.
>
> **[1:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=90)** So plugins and plugin, and the syntax is very similar for the plugin, you just need group ID artifact and version.
>
> **[1:43](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=103)** So I need a Maven Surefire plugin, and the version that I need is 3.2.5, and the group ID would be org.apache.maven.plugins.
>
> **[1:58](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=118)** Now when you do this, it would highlight these things in web because you haven't installed the dependencies before.
>
> **[2:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=125)** So just click on this icon, which is Maven Sync Changes.
>
> **[2:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=129)** If you can't see this icon, click on this M and then click it over here.
>
> **[2:13](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=133)** That will sync and download all these dependencies for you.
>
> **[2:16](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=136)** Now if I go to my first Selenium project here, I can start writing my first test.
>
> **[2:22](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=142)** So my first test would be checking the page title, so add a test and the page title, so public void checkPageTitle, and I would be using WebDriverManager, so chromeDriver.setup.
>
> **[2:43](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=163)** And from webDriver, I will use Driver and use a ChromeDriver from there.
>
> **[2:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=172)** So once I've got the driver, I'm going to visit the [practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[2:57](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=177)** So [practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[3:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=183)** And I'm going to check the page title.
>
> **[3:06](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=186)** So assertEquals, I don't know the correct title yet, and the actual title, I can get it from driver.getTitle.
>
> **[3:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=200)** And then I want the driver to close the browser.
>
> **[3:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=203)** So driver.quit.
>
> **[3:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=206)** Now you can see that it's complaining about assertEquals, but it has got all the other imports.
>
> **[3:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=212)** So I'm going to manually import the assertEquals.
>
> **[3:37](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=217)** So import static_org.junit.jupiter.api.assertions, and here you can call in any assertion you need.
>
> **[3:48](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=228)** And now it has satisfied assetEquals.
>
> **[3:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=231)** I can click this Play button to run this test, which will open the browser, check the [practicesoftwaretesting.com](https://practicesoftwaretesting.com), and behind the scenes it will fail the test saying I expected nothing, but I got this as a page title, so I'm going to copy this page title, paste it over here because I know this is the correct title.
>
> **[4:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/write-your-first-selenium-test?u=76281980&t=251)** I will rerun the test and the test passes.

> [!info]- Semantic Content
>
> **Code Identifiers:** assertequals (3), checkpagetitle (1), chromedriver (1), webdriver (1), gettitle (1)
> **UI Navigation:** go to (3), click on (2), open the (1)
> **Code Keywords:** let (1), assert (1), this, (1), public (1)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (3)
> **CLI Commands:** make (1), apache (1)
> **Definitions:** is called (1), is a  (1)
> **Prerequisites:** set up (1), setup (1)
> **File Paths:** pom.xml (1)

#### Locate elements with confidence
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=0)** - [Instructor] Targeting the right element is the heart of every reliable Selenium test.
>
> **[0:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=5)** So in this lesson, we will be testing this contact form using Selenium.
>
> **[0:10](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=10)** But before we get into it, I want to show you the Selenium documentation.
>
> **[0:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=15)** So this is a Selenium documentation, which talks about locator strategies and it shows you the traditional locators.
>
> **[0:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=23)** The main keyword over here is the buy keyword.
>
> **[0:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=26)** So as you can see, if I scroll down, if I want to get any element, I'm getting it using buy and then the type that I want to use, ID or name or tag or link text, et cetera.
>
> **[0:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=40)** So let's try this ourself in our code.
>
> **[0:42](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=42)** So for this lesson, I'm just going to get the heading contact and I'm going to just check this heading is correct.
>
> **[0:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=52)** So if I do inspect element over here.
>
> **[0:55](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=55)** You can basically get it in the browser console by doing document.getElementByTagName.
>
> **[1:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=64)** And the tag name for that is H3 and that could be more than one H3 so I want to select the first one.
>
> **[1:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=71)** So you can see it brings me that if I do inner HTML, I can see what's inside that tag.
>
> **[1:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=78)** Now we will do this same thing using Selenium.
>
> **[1:22](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=82)** Let's build on top of the code that we have already written in the previous video.
>
> **[1:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=86)** So previously we checked the page title.
>
> **[1:29](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=89)** In this test, we will check the tag name.
>
> **[1:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=94)** So checkContactHeading().
>
> **[1:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=100)** And here, we will basically get that web element.
>
> **[1:46](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=106)** So first we need to go to the right page.
>
> **[1:47](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=107)** So I'm going to go to the page, which is the contact.
>
> **[1:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=111)** So page name will change.
>
> **[1:55](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=115)** Second is, I've got a web element, which is a heading.
>
> **[2:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=121)** So using the driver, I'm going to find element by tag name.
>
> **[2:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=128)** And the tag name was H3 on the page.
>
> **[2:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=132)** Now you can see web element is red so I'm just going to import that class and it'll automatically do it for me as you can see here.
>
> **[2:19](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=139)** Now that I've got the element, let me terminate that statement.
>
> **[2:25](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=145)** I can get the heading text.
>
> **[2:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=147)** HeadingText = heading.getText().
>
> **[2:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=154)** Now I can compare this heading text, which is, this is the actual, and this is where I should be adding contact, but I want a test to fail to show you that is working.
>
> **[2:47](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=167)** So I'm not putting anything there. So let's run it.
>
> **[2:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=172)** So it ran two tests.
>
> **[2:54](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=174)** The first test passed and the second test failed.
>
> **[2:57](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=177)** As you can see over here, the first one was checking the title.
>
> **[3:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=180)** Second is saying I expected nothing but I got contact.
>
> **[3:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=184)** So if I put contact over here and run this test again, then we should be able to locate the heading contact.
>
> **[3:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/locate-elements-with-confidence?u=76281980&t=192)** And this test should pass.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (1)
> **UI Navigation:** go to (2), scroll down (1), select the (1)
> **Code Identifiers:** getelementbytagname (1), checkcontactheading (1), gettext (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** html (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Waiting strategy: Page load strategy
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=0)** - [Instructor] The Selenium documentation talks about page load strategy in detail, so I don't have to create special slides for this topic.
>
> **[0:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=8)** As you can see on my screen, the documentation says there are three types of strategies, which is normal, eager, and none.
>
> **[0:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=15)** We will try and implement this in our code.
>
> **[0:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=17)** So I'm going to build on top of the code that we had in the previous video.
>
> **[0:22](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=22)** Let's start from there.
>
> **[0:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=26)** So as you can see, there is no page load strategy defined, but by default there is a normal strategy.
>
> **[0:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=32)** So I'm going to start writing the code to define that normal strategy explicitly.
>
> **[0:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=38)** So after you have set up your web driver manager, just open Chrome options, Chrome options, and in here, just create options, which will be Chrome options.
>
> **[0:55](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=55)** One of the options that you can use is called set page load strategy.
>
> **[1:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=61)** And here, just set the page load strategy to whatever you want.
>
> **[1:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=65)** For example, by default it's normal.
>
> **[1:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=68)** I'm just going to put it as normal to just see what happens.
>
> **[1:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=72)** And we will pass these options into Chrome driver like this.
>
> **[1:19](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=79)** So I'm going to copy this same thing for the next test, and I'm going to run the test and hopefully because we haven't changed anything in the code, both tests should pass.
>
> **[1:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=96)** Now let's just change this contact heading test and say our page load strategy is none.
>
> **[1:46](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=106)** I'm going to on this test and see what happens.
>
> **[1:54](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=114)** As you can see, this test failed because we were checking an element on the page, but we said our page load strategy is none.
>
> **[2:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=125)** So before even the page loaded, we started looking for an element, but the element did not exist.
>
> **[2:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=132)** Let's try the same thing here where we are checking the title.
>
> **[2:24](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=144)** The check page title test still passes because title is the first thing which loads when you open the page.
>
> **[2:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=153)** So if you want to check the title, you don't need the whole page to be loaded.
>
> **[2:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=158)** So the page load strategy none makes sense when you're checking the title, but it doesn't make sense when you're checking the content of the page.
>
> **[2:46](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=166)** Last but not least, if you want to try eager, let's do that as well.
>
> **[2:59](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=179)** Now these are the things that cause the test to become flaky.
>
> **[3:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=182)** So you need to decide what is the right strategy, but when you're in doubt, always use normal.
>
> **[3:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=189)** So this would be the ideal code or ideal pace strategy for these two tests where both of the tests are passing, check contact heading is passing by using the normal page strategy.
>
> **[3:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-page-load-strategy?u=76281980&t=203)** Check page title is passing by using none page strategy, and we have optimized this test to run faster because we are not waiting for the whole page to load.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (2), this. (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### Waiting strategy: Elements
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=0)** - [Instructor] Apart from page load strategies, Selenium also offers element weight strategies.
>
> **[0:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=5)** And there are two types of waiting strategies.
>
> **[0:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=7)** One is implicit, as you can see in the Selenium docs, and another is explicit.
>
> **[0:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=12)** The implicit strategy depends on the browser option timeout, which is by default a zero.
>
> **[0:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=21)** So if you remember in the last video, we had a test which was failing when we had the page load strategy set to none.
>
> **[0:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=31)** So how do we make this test pass?
>
> **[0:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=33)** Well, without changing the page load strategy, I will be using the element load weight strategy to make this test pass.
>
> **[0:43](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=43)** So I'm going to go back to the documentation and copy this line, which is driver manage timeouts implicitly waits.
>
> **[0:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=52)** And I'm going to put this over here just before we look for the element.
>
> **[1:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=60)** And because this is read, I will highlight a word and import this class.
>
> **[1:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=65)** So now let's see, if I run this test again, both tests are passing because now we're actually waiting for the element to load.
>
> **[1:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=77)** And this is an implicit wait.
>
> **[1:19](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=79)** I would advise you over here with my experience to not use this kind of waiting because you don't know how many seconds it would take on the pipeline or someone else's machine, and what would be the internet speed in the home location or wherever they're running the test from, because it will make the test flaky.
>
> **[1:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=99)** But there are use cases for this.
>
> **[1:41](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=101)** Don't completely abandon it, learn about it, but don't use it.
>
> **[1:46](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=106)** Another option that we have got is the explicit wait, which actually waits for the element or some condition to be met.
>
> **[1:54](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=114)** So I'm going to replace this with this wait, and let's import the missing classes.
>
> **[2:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=123)** And this reveal is the element.
>
> **[2:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=125)** So in our case, the element is the heading.
>
> **[2:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=128)** So we can just move this down here because at this point, we have got the heading.
>
> **[2:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=135)** I'm going to copy this, paste it over here, and see if our test passes this time.
>
> **[2:25](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=145)** As you can see, that did not work.
>
> **[2:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=147)** So if I go to checkContactHeadingTest, it says the element was not found.
>
> **[2:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=152)** So we're not waiting for it to be displayed.
>
> **[2:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=155)** We are waiting for it to find the element.
>
> **[2:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=158)** So I'm going to move this on top over here, and then I'm going to add the weight until at this point.
>
> **[2:47](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=167)** So wait until, and my condition that needs to be met is that element is found.
>
> **[2:58](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=178)** And once the element is found, we can do the rest of this stuff.
>
> **[3:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=183)** So let's find the test again after adding that additional bracket that was missing.
>
> **[3:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=195)** And as you can see, the test is passing, and I don't think we need this anymore because we are not waiting for it to be displayed.
>
> **[3:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=201)** We are waiting for it to be found.
>
> **[3:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=203)** So I'm going to run this test one more time. There you go.
>
> **[3:28](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=208)** So this is an example of an explicit wait.
>
> **[3:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/waiting-strategy-elements?u=76281980&t=211)** The previous example was for the implicit wait.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), class. (1), from, (1), this. (1)
> **CLI Commands:** make (3), find (2)
> **Cross-References:** in the last (1), go back to (1)
> **Definitions:** is an  (2)
> **Code Identifiers:** checkcontactheadingtest (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Run tests headlessly
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=0)** - [Qambar] So far, in the previous videos, you saw that every time I ran the test, it opened the browser and showed you how the test was running.
>
> **[0:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=8)** Like if I click on play right now, it will open the browser and run the test.
>
> **[0:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=15)** But sometimes you don't need that.
>
> **[0:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=17)** You just need to see the test passes or fails, and you don't want the browser window to open in front of you.
>
> **[0:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=23)** So, you can run the test in a headless mode.
>
> **[0:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=27)** So, to run the test in the headless mode, I'm just using the code from the previous videos.
>
> **[0:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=32)** So, I've already got Chrome options defined.
>
> **[0:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=35)** So, I just need to use the Chrome options and pass in an argument.
>
> **[0:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=39)** So, I will type options.addArguments, and the argument will be -- headless=new.
>
> **[0:50](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=50)** And because I'm starting a web driver for both the tests, I need to add this to both of these tests.
>
> **[0:59](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=59)** And now if I run the test again, as you can see, no browser window popped up, the test ran and I got the results.
>
> **[1:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-headlessly?u=76281980&t=67)** This is called headless mode.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), new. (1)
> **UI Navigation:** click on (1), open the (1)
> **Code Identifiers:** addarguments (1)
> **Definitions:** is called (1)
> **Speakers:** - [qambar] (1)

#### Build the framework foundation
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=0)** - [Instructor] If you have been wondering why I have got these setup steps every time I write this test, then you're on the right track.
>
> **[0:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=7)** What we will do in this video is we will build a foundation of a framework.
>
> **[0:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=12)** We'll create a base file for the test.
>
> **[0:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=14)** So right click on the folder, new Java class and base test.
>
> **[0:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=20)** And we will move these set of steps in here.
>
> **[0:22](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=22)** So let's create a function called public void setup.
>
> **[0:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=32)** And let's move all the set of steps from here into that function.
>
> **[0:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=39)** We'll do the same for the teardown, public void teardown.
>
> **[0:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=45)** And we will move the teardown steps, which is driver.quit, in here.
>
> **[0:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=51)** So this setup should run before the test starts.
>
> **[0:55](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=55)** So I'm going to do add before each, and teardown should run after the test finishes.
>
> **[1:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=62)** So I'm going to do add after each.
>
> **[1:06](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=66)** The next thing that I need is the driver to be global so that we can use this in the test.
>
> **[1:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=71)** So I will do protected WebDriver driver.
>
> **[1:19](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=79)** And we need to refer to this global driver over here.
>
> **[1:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=83)** So I'm going to get rid of this driver from here so that we are referring to the correct driver.
>
> **[1:29](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=89)** You can see all of these are purple, but in first selenium test, we have got this as red.
>
> **[1:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=95)** So let me just delete the set of steps from here as well, and teardown steps from this test.
>
> **[1:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=105)** And you can see all these drivers are red, which means we don't have the driver reference.
>
> **[1:50](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=110)** So I'm going to just do extends BaseTest, and they're all purple now.
>
> **[1:56](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=116)** Now if you look at the base test, we don't need the page load strategy, so I'm going to get rid of that.
>
> **[2:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=122)** Now, because we got rid of the page load strategy, we don't need any weights and we don't need the weight over here as well.
>
> **[2:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=134)** We just leave this file with a lot of unused imports.
>
> **[2:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=138)** So let's get rid of unused imports from here and from here.
>
> **[2:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=147)** Now this test is ready to run.
>
> **[2:29](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=149)** So I'm going to just run this and see what happens.
>
> **[2:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=155)** As you can see, both tests ran, both are passing, and the test code looks so much simpler.
>
> **[2:41](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=161)** This means that you can add more tests and just do the things that are necessary within the test body rather than restarting the whole browser, caring about teardown, caring about setup.
>
> **[2:53](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/building-framework-foundation?u=76281980&t=173)** So this is how you write tests in production.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), public (2), protected (1), delete (1)
> **Prerequisites:** setup (4)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Fix a failing test
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-fix-a-failing-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-fix-a-failing-test?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-fix-a-failing-test?u=76281980&t=5)** - [Instructor] So, here's a challenge for you.
>
> **[0:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-fix-a-failing-test?u=76281980&t=7)** Every time I run this test, it says NoSuchElementException.
>
> **[0:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-fix-a-failing-test?u=76281980&t=11)** Now, it is complaining about a line in this code, and I don't know how to fix it.
>
> **[0:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-fix-a-failing-test?u=76281980&t=17)** Can you help me with that?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)

#### Solution: Fix a failing test
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980&t=0)** - [Instructor] Now the first thing I will do to fix this test is to find the issue.
>
> **[0:10](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980&t=10)** Now IntelliJ offers me an option to debug or stop the test.
>
> **[0:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980&t=14)** So I'm going to just double click over here and add a break point.
>
> **[0:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980&t=18)** Second is, I know that this is running in headless mode, so I'm going to change the base test file to not run in headless mode anymore.
>
> **[0:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980&t=30)** So I'm going to come in that, and I'm going to go back to the test and click on this bug icon, which will run this test in debugging mode.
>
> **[0:42](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980&t=42)** So it ran the test, it opened the browser, and you can see it is on the contact screen.
>
> **[0:48](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980&t=48)** So I'm going to right click and inspect this element and see what is the selector for this tag.
>
> **[0:58](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980&t=58)** So the select over here is H3, and in my test code it's using H1.
>
> **[1:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980&t=64)** So if I stop this test and run the test right now, the test fails saying NoSuchElementException.
>
> **[1:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-fix-a-failing-test?u=76281980&t=74)** Now, if I change this tag name to H3 and save it, and then rerun on the test again, it now passes.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Tools:** intellij (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Structuring Your Tests

#### What is a page object model (POM)?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=0)** - [Instructor] If you're a tester, you must have already heard of this term, POM.
>
> **[0:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=5)** POM basically means page object model.
>
> **[0:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=8)** It is one of the best practices described on Selenium website.
>
> **[0:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=11)** The page object model is a design pattern that helps us write clean and maintainable Selenium tests.
>
> **[0:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=17)** It models each page, a part of a page as a class.
>
> **[0:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=20)** This keeps the details like locators and actions out of our test logic, so our test focuses only on what they are meant to verify.
>
> **[0:29](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=29)** With POM, when the UI changes, say a field ID changes, you only update your page class, not every test.
>
> **[0:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=35)** This keeps your test code clean and focused, and it works well even as your app grows.
>
> **[0:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=40)** This is how the page object model works in practice.
>
> **[0:43](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=43)** Instead of repeating locators and actions across every test, imagine a test suite of like thousand tests, we just define a contact page class that handles everything for this form.
>
> **[0:55](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=55)** The locators map directly to the form fields and button, and the class provides clean methods like fillForm and sendMessage.
>
> **[1:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=63)** If anything changes on the page, we update it here in one place.
>
> **[1:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-the-page-object-model?u=76281980&t=68)** In the next lesson, we'll build this page object in Selenium and run a real test so that you can see how it all fits together.

> [!info]- Semantic Content
>
> **Env Vars:** pom (3)
> **Code Keywords:** class. (1), class, (1)
> **Code Identifiers:** fillform (1), sendmessage (1)
> **Definitions:** basically means (1), is a  (1)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Create a POM
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=0)** - [Instructor] Let's take an example of this test, which you can find in exercise file O2_O2_b in the Branch.
>
> **[0:06](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=6)** We will be refactoring this test to use POM.
>
> **[0:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=11)** Right now it doesn't use POM at all, so in the src, main, java, I will create a new Java class called ContactPage.
>
> **[0:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=21)** So this is my ContactPage POM, and we will bring all the locators from this test into this POM.
>
> **[0:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=30)** So, because we are using locators, we don't need the WebElement anymore, we don't need to use the driver find by element here, we will do it inside the actions.
>
> **[0:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=39)** So I'm going to get rid of all of this, and the bracket in the end, and change the WebElement to By.
>
> **[0:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=51)** And another thing, because these are locators, I'm going to just add Loc in front of them.
>
> **[0:56](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=56)** Another thing, if you go back to the test, there's another locator being used, which is checking the visibility of alert.
>
> **[1:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=64)** This is used in a wait, so I will bring this as well inside the POM.
>
> **[1:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=71)** So, By alertLoc.
>
> **[1:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=77)** You can name it better in your test.
>
> **[1:19](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=79)** For now, we'll use the name, alertLoc.
>
> **[1:24](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=84)** Next we can see we have a function called fillForm.
>
> **[1:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=87)** So I'm going to copy that.
>
> **[1:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=90)** This is our action, first section, so public void fillForm, and I'll put everything here.
>
> **[1:42](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=102)** Now instead of first name, we have got firstNameLoc.
>
> **[1:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=105)** And if you remember, we had a driver called find by name.
>
> **[1:48](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=108)** So we will use that here within the action.
>
> **[1:50](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=110)** So driver.findElement, and this is firstNameLoc.
>
> **[1:58](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=118)** This will make the sendKeys functionality available to us.
>
> **[2:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=123)** We will do the same for the rest of them.
>
> **[2:06](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=126)** Last name, email, message, and subject.
>
> **[2:13](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=133)** Loc, Loc, Loc, and subjectLoc, and closing bracket.
>
> **[2:25](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=145)** So this function fills the form, but it doesn't take any parameters.
>
> **[2:29](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=149)** We can convert all of these into parameters as well.
>
> **[2:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=152)** But before that, let's fix the driver.
>
> **[2:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=155)** So the ContactPage needs to have the driver reference available to it.
>
> **[2:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=160)** So I'm going to create a global variable called WebDriver driver.
>
> **[2:46](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=166)** And using the constructive for this POM, I will assign the driver the value, which is this.driver is equal to driver.
>
> **[3:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=181)** So I've got the ContactPage, I've got the WebDriver.
>
> **[3:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=184)** I'm using these drivers over here to fill the form.
>
> **[3:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=187)** So that's my fill function.
>
> **[3:10](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=190)** Now let's tackle the next section.
>
> **[3:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=194)** The next section is submit.
>
> **[3:16](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=196)** So I'm going to copy this, public void submitForm, btnSubmit.
>
> **[3:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=206)** Now btnSubmit used to have the driver.findElement.
>
> **[3:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=211)** So I'm going to copy this from here. Paste it over here.
>
> **[3:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=215)** And remember we added the Loc.
>
> **[3:37](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=217)** So driver.findElement, btnSubmitLoc.click.
>
> **[3:44](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=224)** So now we have got the two actions, fillForm, and submit.
>
> **[3:48](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=228)** That completes our refactor for the POM.
>
> **[3:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/create-page-object-model?u=76281980&t=232)** We need to integrate this POM into the test, which we'll do in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** fillform (3), findelement (3), alertloc (2), firstnameloc (2), btnsubmit (2)
> **Code Keywords:** let (3), function (3), this, (2), public (2), this. (1)
> **Env Vars:** pom (8)
> **CLI Commands:** find (3), make (1)
> **Cross-References:** go back to (1), in the next (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### Implement a POM in a test
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=0)** - [Instructor] You've got this POM, how would you use it in the test?
>
> **[0:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=3)** Let's check it out.
>
> **[0:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=4)** So this is my test, FirstSeleniumTest, where I need to indicate the contact page form.
>
> **[0:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=9)** So I'm going to open it on the right-hand side, and I'll move this a little bit around so that we can see it better.
>
> **[0:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=18)** Now, on my right, you can see we already have got locators, so we can get rid of that.
>
> **[0:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=26)** The first method that we need is the FillForm, which exists inside the POM, so let's create an object for the POM.
>
> **[0:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=34)** So new ContactPage.
>
> **[0:37](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=37)** And let's pass in the driver, and it's an object, so let's store it somewhere.
>
> **[0:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=45)** ContactPagePom is going to new. ContactPagePom.
>
> **[0:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=51)** And we will do our first section, which is fillForm.
>
> **[0:54](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=54)** Now, we don't need any of these.
>
> **[0:58](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=58)** Second action is Submit.
>
> **[0:59](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=59)** So contactPagePom.submitForm.
>
> **[1:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=63)** And last but not least, we have got a locator over here.
>
> **[1:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=69)** So we will get rid of this and use the locator from contactPagePom.alertLoc.
>
> **[1:16](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=76)** That's everything.
>
> **[1:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=77)** So now we are actually using the POM within our test.
>
> **[1:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=80)** So let's run the test now.
>
> **[1:28](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=88)** So the test is running in headful mode and you can see it ran successfully and it passed.
>
> **[1:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/implement-page-object-model-in-test?u=76281980&t=95)** That's how you use POM in your test.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), pass (1), new. (1)
> **Code Identifiers:** contactpagepom (2), fillform (1), submitform (1), alertloc (1)
> **Env Vars:** pom (5)
> **Speakers:** - [instructor] (1)

#### Data-driven testing
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=0)** - [Instructor] So this is my login screen, and I've got these default accounts that I want to try and test with this login screen.
>
> **[0:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=7)** Normally you would have to write three different tests by copy pasting this test multiple times and then test it with first customer, then second customer, then third customer.
>
> **[0:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=18)** Let's see how this current test works.
>
> **[0:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=21)** So this test goes to the login page, enters the data about the user and password, and then waits for the page to load and then checks the title is my account.
>
> **[0:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=33)** And let's just see it in action.
>
> **[0:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=34)** So I'm going to click on Play.
>
> **[0:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=40)** It opens the window, enters the password, and then executes the whole test.
>
> **[0:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=45)** So this test is passing right now.
>
> **[0:47](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=47)** It's using two page object models, AccountPage and the LoginPage.
>
> **[0:53](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=53)** AccountPage looks like this, which just checks the page title.
>
> **[0:56](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=56)** LoginPage looks like this, which is just email, password, and button submit.
>
> **[1:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=61)** Now if you go back to our test, I want to test it with three different usernames.
>
> **[1:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=65)** How would I do that?
>
> **[1:06](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=66)** Well, let's just change the method name to WithMultipleUsers.
>
> **[1:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=75)** Now this is just centered so that we can understand what this method is doing.
>
> **[1:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=80)** And instead of using the hardcoded values, I'll type username and password.
>
> **[1:28](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=88)** Now as you can see that this username and password is not coming from anywhere, so we need to pass it into the function.
>
> **[1:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=93)** So string username and string password.
>
> **[1:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=98)** Now this is a test and we are using Junit with Selenium.
>
> **[1:44](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=104)** So we get some additional stuff like ParameterizedTest.
>
> **[1:50](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=110)** So instead of test, you will use ParameterizedTest.
>
> **[1:53](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=113)** And second is you will specify the source.
>
> **[1:56](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=116)** So CSV source, file source.
>
> **[1:59](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=119)** And then you specify where is this located.
>
> **[2:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=122)** Usually we put it in the Resources folder.
>
> **[2:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=124)** I'm going to name that file in the resources folder as login-data.csv.
>
> **[2:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=131)** And there's another option like how many number of lines do you want to skip, just set it to zero.
>
> **[2:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=137)** Now let's create this file in the sources folder.
>
> **[2:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=141)** So I'm going to create the file here called login-data.csv.
>
> **[2:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=147)** Make sure the file name is correct, and we'll copy the details for username and password.
>
> **[2:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=154)** So it's just the email and password that I need.
>
> **[2:37](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=157)** So email this, password this, and it's a CSV file.
>
> **[2:43](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=163)** So comma separated.
>
> **[2:46](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=166)** Two, password, same.
>
> **[2:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=172)** And then third one is this.
>
> **[2:57](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=177)** Let's not add any spaces, it's already comma separated, so.
>
> **[3:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=181)** Make sure the data is correctly created.
>
> **[3:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=185)** So there you go. We have got all the usernames.
>
> **[3:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=188)** Now we are already using it in the test.
>
> **[3:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=191)** So if I go back to the login test, so it's parameterized as CVSFileSource, this, and number of lines skipped.
>
> **[3:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=198)** I'm going to run this test and see what happens.
>
> **[3:24](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=204)** So as you can see, it's running all the tests, and if I go back to the login, you can see that it ran the first test with this username and password, second test, and third test, so they all passed.
>
> **[3:41](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=221)** And what this test was doing is if I go to the test, it goes to the location and checks for a title, that is, after login, I can see the my account page.
>
> **[3:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=232)** So if I manually log in, I can show you what it's looking for.
>
> **[3:58](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=238)** So username is this and password is this.
>
> **[4:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=243)** And it checks for the my account title heading.
>
> **[4:06](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=246)** There you go.
>
> **[4:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/data-driven-testing?u=76281980&t=247)** So that is how you use data in your test by using the ParameterizedTest and CSVFileSource and putting the file name here and inside the resources folder and using the parameters in your test name.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (5), this. (2), pass (1), function (1)
> **Cross-References:** go back to (3)
> **File Paths:** login-data.csv (2)
> **CLI Commands:** make (2)
> **Env Vars:** csv (2)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Organize tests with tags
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=0)** - [Instructor] Not every test should run every time.
>
> **[0:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=2)** Some are fast, some are critical, and some you may want to skip.
>
> **[0:06](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=6)** So in this lesson we learn how to tag a test.
>
> **[0:10](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=10)** So right now, if I run the test suite, it runs all of the tests.
>
> **[0:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=15)** As you can see, the contact test and the login test.
>
> **[0:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=21)** So one, two, three, four, it ran all four tests.
>
> **[0:25](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=25)** But what if I want to run only the login test when I'm doing a smoke?
>
> **[0:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=31)** So let's tag this test using enter tag and name the tag smoke.
>
> **[0:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=38)** Now if I still run it, it'll run all of the tests, so all the four tests.
>
> **[0:44](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=44)** We still need to tell IntelliJ that we only need to run the smoke test, so we'll create a new run configuration.
>
> **[0:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=52)** So if you go on the top and click these three buttons, it'll give you an option to edit.
>
> **[0:58](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=58)** This will open this kind of interface where you can specify what test you want to run, not this one, this doesn't work.
>
> **[1:06](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=66)** So if I click on the plus button over here and select J unit, I can create a new run configuration.
>
> **[1:13](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=73)** Just name it smoke because I'm creating a smoke test.
>
> **[1:16](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=76)** And then in this dropdown, go and select tags and specify the tags that you want to run.
>
> **[1:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=83)** For example, in my case, smoke, supply, okay.
>
> **[1:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=86)** Now you have got two run configuration.
>
> **[1:28](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=88)** So you can have like component test, smoke test, integration, whatever you want.
>
> **[1:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=94)** And you can specify those group of tests with the tags like this.
>
> **[1:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=99)** So if I now run the test on my bottom left of the screen you can see only the login tests are running, which are these three tests.
>
> **[1:48](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/organise-tests-with-tags?u=76281980&t=108)** And because they're parameterized tests, they're using the resource file which has got three lines, that's why it ran three times.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), interface (1), case, (1), this. (1)
> **UI Navigation:** click on (1), dropdown (1)
> **Tools:** intellij (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Refactor POM function
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-refactor-pom-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-refactor-pom-function?u=76281980&t=0)** - [Instructor] All right. It's time for the challenge.
>
> **[0:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-refactor-pom-function?u=76281980&t=7)** So, go to your exercise files and open the 02_06 branch, and you will find this code.
>
> **[0:13](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-refactor-pom-function?u=76281980&t=13)** This is the same code that we saw in the page object model lesson, so we created a page object model.
>
> **[0:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-refactor-pom-function?u=76281980&t=20)** We created this function called fill form, which is using the fill form function here, but this has got hard coded values of John Smith email address, et cetera.
>
> **[0:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-refactor-pom-function?u=76281980&t=31)** What I want to do is I want to be able to pass in these values from this test function here so that I can change these values as I like and write different tests.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), pass (1)
> **UI Navigation:** go to (1), open the (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Refactor POM function
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=5)** - [Instructor] Alright, this is an easy challenge.
>
> **[0:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=7)** There is no catch.
>
> **[0:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=8)** Literally, you need to pass in the values.
>
> **[0:10](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=10)** So if I go back to the page object model, which is this one, I can get the values, which is firstName, lastName, email.
>
> **[0:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=20)** So I'm going to just start typing over here.
>
> **[0:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=23)** Let's actually create it over here because then the function can help us understand what is needed.
>
> **[0:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=27)** So String firstName, String lastName, String email,
>
> **[0:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=36)** and then we need a subject. So String subject.
>
> **[0:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=40)** And last but not least, String message.
>
> **[0:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=45)** So let's just copy all of these values.
>
> **[0:49](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=49)** I'm just going to copy all of this into the test.
>
> **[0:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=52)** Here because I need the values, string values from that.
>
> **[0:57](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=57)** And I'm going to replace this with the variables firstName, lastName, email, subject, and message.
>
> **[1:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=80)** If you saw the lesson about parameterized test, you can already see how much value this is going to get if we are actually using the parameterized test and passing different users, different messages, et cetera.
>
> **[1:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=94)** But anyways, let's just pass in these values.
>
> **[1:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=98)** So we need the firstName, lastName, email, webmaster, which is the subject.
>
> **[1:54](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=114)** And... last but not least, the message.
>
> **[2:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=120)** So the message is really long.
>
> **[2:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=121)** That is why I copy/pasted everything here.
>
> **[2:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=124)** You can wrap this in your editor.
>
> **[2:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=127)** So let's get rid of that and run our test to validate.
>
> **[2:13](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=133)** Always run the test.
>
> **[2:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=134)** So whenever you make a change, make sure you run the test to ensure that the test still works.
>
> **[2:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=140)** So as you can see, the test is working.
>
> **[2:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-refactor-pom-function?u=76281980&t=141)** So good job.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (2), catch. (1), function (1)
> **Code Identifiers:** firstname (4), lastname (4)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Running Tests at Scale

#### Test across browsers locally
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=0)** - [Instructor] With the release of Selenium 4, Selenium also introduced this thing called Selenium Manager.
>
> **[0:06](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=6)** This is the version 4.0 and it's still in beta version.
>
> **[0:10](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=10)** What it does is it helps you manage browsers so you don't have to worry about which driver is compatible with which version of the browser.
>
> **[0:19](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=19)** So in order to use that, so far we have been using the web driver manager.
>
> **[0:24](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=24)** We can get rid of this because this is not a native one.
>
> **[0:28](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=28)** And when we get rid of that, we can get rid of the web driver manager.
>
> **[0:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=31)** And the refactor is very straightforward because now you are actually using Selenium Manager by deleting one line from your code.
>
> **[0:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=38)** So it's like a funniest refactor I've seen in my experience.
>
> **[0:42](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=42)** Now if I run the test to just validate that my tests are still working, you can see now we are using Selenium Manager and we are running the test on Chrome browser.
>
> **[0:55](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=55)** So let's do a very quick refactor.
>
> **[0:56](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=56)** I'm just going to move this in here, Chrome options because we haven't defined any option here.
>
> **[1:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=65)** So it makes sense, it makes a code simple to understand.
>
> **[1:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=68)** You can split it into the variable if you want to.
>
> **[1:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=71)** So the next thing that I'm going to do is I'm going to add a Switch case statement, but what I need is I want to get the parameter from the command line.
>
> **[1:19](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=79)** So the parameter would be where do I want to run the test?
>
> **[1:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=83)** So string browser.
>
> **[1:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=86)** And to get the parameter from command line, we can use system.getProperty.
>
> **[1:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=90)** And the property is browser.
>
> **[1:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=92)** So when you do Maven run, you can specify browser equal to Chrome or browser equal to Firefox and pass that in through command line.
>
> **[1:42](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=102)** So once we get the browser parameter, we'll switch to whatever the browser is passed from the command line.
>
> **[1:49](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=109)** So first case could be Chrome and then this would be the driver, which is a Chrome driver.
>
> **[2:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=120)** Another case could be Firefox and you can do driver equal to new Firefox driver, new Firefox options and break.
>
> **[2:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=138)** And let's do a default.
>
> **[2:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=141)** Default would be the same as, you can pick your own default, doesn't matter.
>
> **[2:28](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=148)** So now we have described what browser we want to use and how do we use it.
>
> **[2:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=153)** Let's run the test again.
>
> **[2:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=156)** So if I run the test, the default is right now Chrome.
>
> **[2:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=160)** So you can see it run on Chrome.
>
> **[2:43](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=163)** And if I want to change it to Firefox, I can go to my base test and replace it here.
>
> **[2:49](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=169)** Firefox.
>
> **[2:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/test-across-browsers-locally?u=76281980&t=171)** So I'm going to rerun this test on Firefox and let me just put a breaking point so that you can actually see the test is actually running on Firefox.

> [!info]- Semantic Content
>
> **Tools:** firefox (8), command line (4)
> **Code Keywords:** let (4), switch (2), pass (1), break. (1), default. (1)
> **UI Navigation:** switch to (1), go to (1)
> **Code Identifiers:** getproperty (1)
> **Versions:** version 4 (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### What is Selenium Grid?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=0)** - [Instructor] Have you heard about Selenium Grid?
>
> **[0:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=2)** Let's find out what it is.
>
> **[0:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=5)** Selenium Grid is a part of Selenium designed to help us run our tests in parallel across different browsers, platforms, or machines.
>
> **[0:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=14)** That means you can run your tests faster and cover more scenarios at once.
>
> **[0:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=17)** It's been completely re-engineered in Selenium 4 to be container-friendly and production grade.
>
> **[0:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=23)** If your local test suite takes too long, or you're testing across many browsers and environments, Grid is your solution.
>
> **[0:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=30)** Whether it's three browsers on two operating systems or 50 tests running in parallel, Grid can scale to handle it all.
>
> **[0:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=38)** Grid is made up of six modular parts.
>
> **[0:41](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=41)** The router, it's designed like a receptionist taking in every request.
>
> **[0:47](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=47)** The queue, it holds requests that haven't been assigned yet.
>
> **[0:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=51)** The distributor, it matches requests to the best available node, which actually runs your test.
>
> **[0:59](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=59)** Session map, it tracks where each test is running.
>
> **[1:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=63)** And the event bus makes sure everyone stays in sync quietly behind the scenes.
>
> **[1:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=71)** If you're asking this question, then the answer is no.
>
> **[1:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=75)** You don't always need to run everything separately.
>
> **[1:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=78)** For local development, small test teams, or CI pipelines, you can use standalone mode, which launches all great components with just one command.
>
> **[1:28](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=88)** It's quick, easy, and gets the job done.
>
> **[1:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=91)** But if you're building a scalable test farm or integrating into a containerized system like Kubernetes, you'll want distributed mode where each piece runs independently.
>
> **[1:42](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=102)** This gives you flexibility, resilience, and full control.
>
> **[1:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=105)** My advice, start with standalone while learning.
>
> **[1:48](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=108)** Scale to distribute only when your use case demands it.
>
> **[1:53](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=113)** Selenium Grid gives you full control and flexibility, especially when you need legacy browser support or customized infrastructure.
>
> **[2:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=122)** Playwright's cloud service, by contrast, is fully managed, faster setup, and perfect for modern browser testing.
>
> **[2:10](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=130)** Use Grid when you need breadth and control.
>
> **[2:13](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/what-is-selenium-grid?u=76281980&t=133)** Use Playwright's testing service when you want speed and simplicity.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), node (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Run tests using Selenium Grid
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=0)** - [Instructor] To run the test on a Selenium grid, you need the Selenium server.
>
> **[0:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=3)** As you can see, this file over here that I have got downloaded.
>
> **[0:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=7)** So I basically went to the Selenium documentation under Grid, Getting started.
>
> **[0:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=12)** There is this link called Latest release.
>
> **[0:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=14)** If you go to this link and scroll down, you can find Selenium server 4.34.
>
> **[0:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=21)** That's the option that you will click on to download this Java file.
>
> **[0:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=26)** So I've opened up the terminal from the left.
>
> **[0:28](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=28)** I will kick off this server.
>
> **[0:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=30)** So to kick off this server, all you need to do is go back to the documentation, see there's a line called java - jar and the file name and the parameter standalone.
>
> **[0:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=39)** So we'll type that java - jar and then selenium s and then standalone.
>
> **[0:49](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=49)** So this kicks off the Selenium grid on port 444.
>
> **[0:53](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=53)** So ignore this 192 IP address, we'll just use the localhost over here.
>
> **[0:58](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=58)** So what is a grid URL?
>
> **[1:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=61)** Well, the grid URL is grid URL, and this would be the URL, which I just said, local host 444 because that's the port over here.
>
> **[1:16](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=76)** Now because we are using URL, we need to ensure that this squiggly line, which is talking about malformed URL exception.
>
> **[1:25](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=85)** So this set of function will now throw this malformed URL exception and this red line will go away.
>
> **[1:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=96)** Now the next thing that you need to do is get rid of all the drivers.
>
> **[1:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=100)** So we are no longer going to use the Chrome driver, Firefox driver, or any other browser driver.
>
> **[1:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=105)** We will basically start using the remote driver over here.
>
> **[1:50](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=110)** So, remote web driver.
>
> **[1:54](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=114)** And remote web driver takes two things.
>
> **[1:57](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=117)** The first thing is the grid URL, the second thing is the option.
>
> **[2:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=122)** So I will place this as well with.
>
> **[2:13](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=133)** There you go.
>
> **[2:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=134)** So we have got remote web driver and we are passing in the grid URL and passing in the options.
>
> **[2:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=140)** And that's the only refactor that you need.
>
> **[2:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=143)** Now if I run the test, let's see if that works.
>
> **[2:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=147)** So I'm going to go back to first Selenium test and click on Play button to run the test.
>
> **[2:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=154)** And let's just see, watch the terminal.
>
> **[2:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=156)** As you can see, the test is running over here on this terminal, on the Selenium grid.
>
> **[2:44](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=164)** So if you want to see it again, I'll run it, run the test one more time.
>
> **[2:48](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=168)** This time I will change the driver to Chrome.
>
> **[2:55](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=175)** So Chrome.
>
> **[2:57](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=177)** And let's run the test again.
>
> **[3:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=182)** And you can see Chrome pops up, the test runs and there's some updates happening in a terminal, which are the updates for the driver that ran the test.
>
> **[3:13](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=193)** So that is how you connect to a remote Selenium grid.
>
> **[3:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=198)** Right now, they were both on my machine, so we use localhost.
>
> **[3:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-using-selenium-grid?u=76281980&t=201)** But in your case, when you would be running the Selenium grid on the pipeline, you would specify the IP address of the instance where the Selenium grid is running.

> [!info]- Semantic Content
>
> **Env Vars:** url (9)
> **Code Keywords:** let (3), function (1), throw (1), case, (1)
> **Tools:** terminal (4), firefox (1)
> **UI Navigation:** click on (2), go to (1), scroll down (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** find (1)
> **Ports:** port 444 (1)
> **Versions:** 4.34 (1)

#### Run tests in parallel
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=0)** - [Instructor] Imagine you have a test suite containing 100 tests.
>
> **[0:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=4)** Now imagine that you're running these tests one at a time.
>
> **[0:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=8)** This is the default behavior of how tests run.
>
> **[0:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=11)** So for example, we have got this test.
>
> **[0:13](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=13)** I'm going to duplicate this test into another test and let's just say call it two.
>
> **[0:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=21)** And if I run all the tests, you will see it'll run the first test.
>
> **[0:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=26)** And then once the first test finishes, it'll run the second test.
>
> **[0:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=31)** So that's highly inefficient.
>
> **[0:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=34)** What we can do is we can paralyze this test.
>
> **[0:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=38)** How do we do that?
>
> **[0:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=39)** Well in Junit, by default, the tests are disabled to run in parallel.
>
> **[0:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=45)** So go to your resources folder, which is source main, resources, right click, create a new file called Junit-platform.properties.
>
> **[0:59](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=59)** And now you can define the properties.
>
> **[1:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=61)** So first is Junit.jupiter, and then we need parallel, right.
>
> **[1:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=69)** So execution, and then I'm looking for parallel enabled, this one, equal to true.
>
> **[1:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=78)** And the second property is concurrent.
>
> **[1:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=80)** So Junit and we need mode default to be concurrent.
>
> **[1:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=90)** Once you define these two properties, now if I go back and run my test, have a look at the area on bottom left here.
>
> **[1:37](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=97)** So I'm going to just make it bigger and run the test again.
>
> **[1:44](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=104)** As you can see, both of them are running at the same time this time.
>
> **[1:49](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-parallel?u=76281980&t=109)** So that is how you would run your test in parallel just by defining these two properties.

> [!info]- Semantic Content
>
> **Analogies:** imagine (2), for example (1)
> **Code Keywords:** let (1), default, (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Use GitHub Codespaces for test dev
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=0)** - [Instructor] GitHub offers a really powerful feature called GitHub Codespaces.
>
> **[0:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=4)** If you haven't heard about this, watch this lesson multiple times and learn how to use it.
>
> **[0:10](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=10)** So for example, if you don't have an ID and you want to still work with Selenium Test, how would you do it?
>
> **[0:16](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=16)** So head over to the GitHub, and on this lesson, head to the branch 03_05.
>
> **[0:22](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=22)** Once you're on this branch, if you don't have access to Codespaces, fork the project on your own GitHub space, and then you will have this option.
>
> **[0:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=31)** Click on this dropdown once you have forked the project and click on Create Codespace for this branch.
>
> **[0:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=39)** What this will do is it will set up a Codespace, which is very similar to your Visual Studio Code editor.
>
> **[0:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=45)** As you can see, all of these options, they're very similar to the Visual Studio Code.
>
> **[0:50](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=50)** So once everything is set up and ready, which will take some time, so you need to be patient because you're doing everything within the browser itself.
>
> **[1:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=60)** You will see some files on the left hand side.
>
> **[1:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=63)** So you've got src, which contains main test, and then there's a file called setup.
>
> **[1:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=69)** Have a look at the README file.
>
> **[1:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=71)** So README file will tell you how to use this space for this particular branch.
>
> **[1:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=77)** So the first thing that we need to do is run this command, which is ./setup in the terminal.
>
> **[1:24](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=84)** So this is the terminal.
>
> **[1:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=86)** I'm waiting for the prompt to appear.
>
> **[1:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=87)** As you can see, the prompt is available now, so in front of this dollar sign, I will just, but when I try to paste it, it will pop up asking me if I should allow pasting.
>
> **[1:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=99)** So just click on Allow and then just paste the ./setup command and press Enter.
>
> **[1:47](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=107)** What this will do is it will install Chrome browser for testing.
>
> **[1:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=112)** So by default, GitHub Codespaces, as you can see the top message over here, it is a default image.
>
> **[1:59](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=119)** Think of it like a Docker container.
>
> **[2:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=121)** So it will already contain Python, Node.js, and some other tools, but that image does not contain the Google Chrome.
>
> **[2:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=131)** So what I'm doing is I'm installing the Google Chrome and setting it up.
>
> **[2:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=135)** While that is happening, I also want to set up my Java extension.
>
> **[2:19](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=139)** So I'm going to click on Install over here and click on Install.
>
> **[2:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=143)** So just like Visual Studio Code, this Java extension will give me access to see the code highlighting and interact with my test scripts very easily.
>
> **[2:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=153)** So as you can see, the colors are appearing on my coordinator, which is great.
>
> **[2:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=159)** And you can see that Google Chrome is being downloaded in the terminal.
>
> **[2:43](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=163)** So this is the area of the terminal.
>
> **[2:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=165)** On the left hand side is the files that you normally see.
>
> **[2:50](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=170)** And on here is the code.
>
> **[2:53](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=173)** This is very similar to, like I said, if you are used to Visual Studio Code, you wouldn't even notice the difference, only the dark mode.
>
> **[3:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=180)** And I think there is an option to do that as well.
>
> **[3:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=184)** So I'm going to pause the video here for it to finish because it will take some time to download all the dependencies.
>
> **[3:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=192)** And then once it's finished, we'll continue from there.
>
> **[3:16](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=196)** So the setup is complete for Google Chrome.
>
> **[3:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=198)** As you can see, this is now ready.
>
> **[3:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=201)** The next command that I will be running is from the README, which is sdk.default java and I will switch to Java 21, and that is done.
>
> **[3:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=212)** And last but not least, I will install all the dependencies for this project by using Maven Clean Install.
>
> **[3:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=220)** So Maven is the dependency manager for this project.
>
> **[3:44](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=224)** As you can see, I'm using the pom file, so let's wait until this is downloaded.
>
> **[3:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=231)** Hopefully it won't take much time. This is the process.
>
> **[3:54](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=234)** You set up the Google Chrome, switch to Java environment, install Maven dependencies.
>
> **[4:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=241)** This command will also execute the test for you.
>
> **[4:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=244)** So you would be able to see the test running, but if you want to run the test another time, you would just run ambient tests.
>
> **[4:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=251)** You don't have to repeat all those three steps again and again, that's the beauty of it.
>
> **[4:16](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=256)** So far in the previous lessons, you have been running the test by clicking the Play button.
>
> **[4:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=261)** In this lesson, we are doing it via terminal, because we don't have the Play button available in the Codespaces.
>
> **[4:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=266)** So now you can see that it is running the test and it's asking me to open the browser.
>
> **[4:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=270)** You don't have to click on that because the tests are running in headless mode.
>
> **[4:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=275)** So you will see the output directly over here.
>
> **[4:38](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=278)** So as you can see, it's running the test, it's running it on the Chrome version 138, which is the version that we have set up in the script.
>
> **[4:47](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=287)** So it's using the script Chrome version, and I'm waiting for it to finish the test.
>
> **[4:53](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=293)** So there you go, it ran the test, the test was finished successfully, and now it said build success.
>
> **[5:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=302)** Now if I want to run the test again, I'm in test, and you can just rerun the test as many times as you want.
>
> **[5:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=311)** If you want to make any changes, you can go and click on one of the files over here.
>
> **[5:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=318)** And for example, if you really want to check that this test is the one that is running, or if this is actually running this file, you can make the test fail by just writing some junk here.
>
> **[5:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=330)** And let's wait for the previous test to finish.
>
> **[5:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=333)** And then we will run this new test after this.
>
> **[5:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=336)** It is a bit slow, but it's really, really good.
>
> **[5:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=340)** Like the overall experience when you don't have the editor and you only have the browser and you want to use spaces, you will just use this.
>
> **[5:48](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=348)** So I'm in test, I've just made a change to make the test fail.
>
> **[5:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=352)** So the test should fail with the message that it doesn't match this bit.
>
> **[5:57](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=357)** So we are waiting for a test to start.
>
> **[6:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=360)** You can see the test is running, which is a ContactTest, which is this test over here.
>
> **[6:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=369)** And you can see the test has failed and it says this bit does not match this bit.
>
> **[6:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/use-github-codespaces-for-test-dev?u=76281980&t=378)** So that is how you use GitHub Codespaces, run the test, and change the code or update a code.

> [!info]- Semantic Content
>
> **Tools:** github (6), terminal (5), visual studio (4)
> **Prerequisites:** install (6), set up (5), setup (4)
> **UI Navigation:** click on (7), switch to (2), dropdown (1), open the (1)
> **Code Keywords:** switch (2), let (2), this. (2), this, (1), default, (1)
> **Analogies:** similar to (3), for example (2), think of it like (1), just like (1)
> **CLI Commands:** make (3), docker (1), python (1), node (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** readme (3)


### 4. Enhancing Tests with Modern Tools

#### Capture screenshots on failure
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=0)** - [Instructor] Screenshots are part of visual testing.
>
> **[0:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=2)** So if your test fails, you can easily communicate to all the all the other team members, like, why the test failed by attaching the screenshot as an evidence on the Jira ticket.
>
> **[0:13](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=13)** Now, this is the contact test that you have been looking at in the previous lessons.
>
> **[0:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=17)** You have already seen the code-based test as well.
>
> **[0:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=20)** What we will do is we will refactor this and we will stop using the WebDriver and we will use a JUnit extension which will help us take screenshot.
>
> **[0:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=30)** So, this extension is called Selenide.
>
> **[0:33](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=33)** So, Selenide helps us take screenshots without writing a lot of code.
>
> **[0:37](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=37)** So, I'm going to go to pom and I will add this dependency called Selenide, and it's from Codeborne.
>
> **[0:48](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=48)** So, there you go. I've got a dependency.
>
> **[0:49](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=49)** I'll just add the scope as well.
>
> **[0:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=51)** So, scope is test.
>
> **[0:53](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=53)** When you do it, you will have this as red because this would be your first time doing it.
>
> **[0:58](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=58)** So, the best thing to do is go to this M option and click on this refresh icon which will download the dependency.
>
> **[1:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=65)** Now, I'm going to go into the base test file here.
>
> **[1:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=69)** I will replace ChromeDriver with the driver that I need.
>
> **[1:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=75)** So, I need the driver from the Selenide.
>
> **[1:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=78)** So, WebDriverRunner, as you can see that is coming from Selenide, .getWebDriver().
>
> **[1:25](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=85)** Now, this needs an initiation.
>
> **[1:29](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=89)** So for that, I'm going to do com.codeborne.selenide and then selenide, dot, and I'm going to run the method open.
>
> **[1:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=99)** It just needs to open a single page.
>
> **[1:42](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=102)** It doesn't matter what it is, so it will initialize.
>
> **[1:46](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=106)** So now the driver starts, we have assigned the driver, selenide, to the driver.
>
> **[1:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=111)** But because this is a JUnit extension, we need to describe it over here.
>
> **[1:55](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=115)** So, @ExtendWith, and it would be ScreenShooterExtension.class.
>
> **[2:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=124)** So, once you have got @ExtendWith and you have described the driver and you have stopped using the driver, all you need to do is configure the driver.
>
> **[2:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=135)** So, we were using Chrome options.
>
> **[2:16](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=136)** We will continue using that, but we need to configure the browser and we will say the browser is Chrome in our case.
>
> **[2:25](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=145)** And we will configure the browser capabilities and pass in the Chrome options that we have been using.
>
> **[2:36](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=156)** So, once you do all of these things, try and run the test and see what happens.
>
> **[2:42](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=162)** So, I'm going to run this test.
>
> **[2:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=165)** The test ran and it successfully passed, but we didn't get any screenshots because I was expecting screenshots on failure.
>
> **[2:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=172)** So, we should get screenshots over here in this build folder.
>
> **[2:55](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=175)** So, I'm going to make this test purposely fail.
>
> **[2:57](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=177)** So, let's just do that and then run it again.
>
> **[3:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=181)** This time when the test runs, it will create the report, it will give you the screenshot.
>
> **[3:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=185)** As you can see, reports is here and you can see the screenshot.
>
> **[3:10](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/capture-screenshots-on-failure?u=76281980&t=190)** There you go.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (1), continue (1), case. (1), pass (1), let (1)
> **UI Navigation:** go to (2), click on (1)
> **Prerequisites:** configure (3)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** getwebdriver (1)
> **Tools:** jira (1)
> **Exercise Files:** download the (1)

#### Mock APIs with WireMock
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=0)** - [Instructor] APIs are often the biggest bottlenecks in end-to-end testing.
>
> **[0:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=3)** They might be down, returning flaky responses, or rate-limited.
>
> **[0:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=7)** That's where mocking comes in.
>
> **[0:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=9)** By simulating API responses with WireMock, you can create reliable local test conditions.
>
> **[0:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=15)** Whether you're testing a success case or simulating a 500 error, WireMock gives you the control.
>
> **[0:21](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=21)** WireMock is a powerful mocking tool built in Java that lets you fake real APIs.
>
> **[0:26](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=26)** You can run it as a standalone server or directly inside the Selenium test code.
>
> **[0:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=31)** With support for stubbing JSON responses and matching request patterns, it becomes a rock solid way to decouple your front test from your backend dependencies.
>
> **[0:41](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=41)** Now, imagine a scenario where you are testing [practicesoftwaretesting.com](https://practicesoftwaretesting.com), which requires a product API to load the products on the page.
>
> **[0:50](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=50)** Now, imagine you are a part of the team who's working only on the frontend, and there's another team who's working on the backend, and you want to isolate the number of products that would be loaded on the website to check basically how the user interface would behave with one product, two product, three product, and so on.
>
> **[1:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=69)** What WireMock does, it gives you that control to manipulate the data and make your frontend use that manipulated data so that you can run your tests in an ideal condition.
>
> **[1:22](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/mock-apis-with-wiremock?u=76281980&t=82)** This makes your UI test more stable, faster, and more focused.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), json (1)
> **Analogies:** imagine (2)
> **CLI Commands:** make (1)
> **Code Keywords:** interface (1)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Run tests in CI with GitHub Actions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=0)** - [Instructor] So once you go to the GitHub, you can see this option over here on the top, which is called Actions.
>
> **[0:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=5)** So this is called a GitHub Action.
>
> **[0:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=7)** So if you click on that, this is where you can create a new workflow for GitHub.
>
> **[0:12](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=12)** So I'm going to click on new workflow and simple workflow is fine for us, so let's configure that.
>
> **[0:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=20)** So what this is saying is, we can use this template or modify this template to create our own workflow where we can run our test.
>
> **[0:29](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=29)** So for us, this is a CI obviously, but it is Selenium test that we are running, so let's name it better.
>
> **[0:37](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=37)** And the branch that we're working on right now is not main, but in most cases it would be main.
>
> **[0:43](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=43)** That's why they already have got the main branch.
>
> **[0:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=45)** So here we are working on a branch 04_03.
>
> **[0:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=51)** So I'm going to just change that to 04_03, both for push and pull.
>
> **[0:58](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=58)** And then, the comments are really helpful, read the comments.
>
> **[1:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=61)** So allows you to run the workflow manually from action step, so we don't have any option over there.
>
> **[1:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=69)** And then jobs, Ubuntu latest, that's fine for us, actions is fine.
>
> **[1:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=75)** And I also want to set up, so from here onwards, we are going to start editing.
>
> **[1:19](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=79)** So let's start with this.
>
> **[1:23](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=83)** So I want to set up Java.
>
> **[1:25](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=85)** So like we have got users over here, we'll just use another one, which will help us set up Java.
>
> **[1:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=92)** So name set up Java, because Selenium uses Java, so we need Java over there.
>
> **[1:39](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=99)** Uses action/setup-java@4.
>
> **[1:46](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=106)** And then, we just specify the parameters, what version we need.
>
> **[1:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=111)** So version is 21.
>
> **[1:55](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=115)** And then distribution is temurin is the most used, most famous distribution.
>
> **[2:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=121)** So we are going to use that.
>
> **[2:02](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=122)** We can also use Microsoft.
>
> **[2:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=123)** When I have tested with that, it works.
>
> **[2:06](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=126)** So name install Chrome.
>
> **[2:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=129)** So we need to install the browser because we would be running the test in headless mode.
>
> **[2:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=134)** And I've already created a script to install the browser, so we'll just use that script. So ./setup.
>
> **[2:20](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=140)** Last but not least, we want to run the test.
>
> **[2:24](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=144)** So name run tests, and then the command would be mvn test because this is Maven, we can delete the rest of it.
>
> **[2:35](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=155)** We don't need this anymore.
>
> **[2:37](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=157)** That is our GitHub action workflow.
>
> **[2:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=160)** Just name it Selenium and commit the changes.
>
> **[2:48](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=168)** Yeah, that's fine.
>
> **[2:51](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=171)** Now, this is committing to the main branch.
>
> **[2:54](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=174)** We don't need to commit to the main branch.
>
> **[2:56](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=176)** So I've accidentally committed to the main branch.
>
> **[2:58](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=178)** What I'm going to do is, I'm going to move this to a separate branch.
>
> **[3:06](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=186)** So let's copy this file. I'm going to go back to the editor, clear, what I'm going to do is, I'm just going to quickly create a folders here.
>
> **[3:15](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=195)** So mkdir .github/workflows/, let's see, workflows, and that's it.
>
> **[3:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=207)** Dash p. So we have got this folder here on this branch.
>
> **[3:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=212)** I'm going to create a new file.
>
> **[3:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=214)** Selenium.yml, and I've just copied that whole thing that we generated on GitHub over here.
>
> **[3:45](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=225)** And let's just commit it manually.
>
> **[3:50](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=230)** Git add .gitHub, selenium git commit.
>
> **[3:57](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=237)** Add selenium workflow.
>
> **[4:04](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=244)** This has on page the workflow to the right branch.
>
> **[4:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=247)** So if I go to the project again and go to the branch 04_03, I can see the workflow, which is this one.
>
> **[4:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=258)** Now, if I go to the actions, we have got Selenium test.
>
> **[4:24](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=264)** And since I did a push here, you can see this is now running something, which is building.
>
> **[4:32](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=272)** And here, you can see the whole workflow happening in action and it ran the contact test and it has passed.
>
> **[4:41](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=281)** So that is how you basically write a workflow, run a workflow in GitHub actions.
>
> **[4:49](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=289)** This is just using the workflow file.
>
> **[4:52](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=292)** So if I go back to the workflow file, you can see the details, what this file looks like that we just created.
>
> **[5:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=301)** If you want to see the actions, how it built, you can go to each of them and see the output over here as well.
>
> **[5:08](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/run-tests-in-ci-with-github-actions?u=76281980&t=308)** So that's it. That's how you use GitHub Actions.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (4), install (3), setup (2), configure (1)
> **Tools:** github (9)
> **Code Keywords:** let (6), this. (1), delete (1)
> **UI Navigation:** go to (5), click on (2)
> **CLI Commands:** git (2), mvn (1), mkdir (1)
> **Definitions:** is called (2), is a  (1)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)

#### Challenge: Run tests in CI with GitHub Actions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980&t=0)** - [Instructor] Now here is the challenge, and it's a powerful one.
>
> **[0:09](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980&t=9)** I want you to run your first Selenium test on a CI environment using GitHub Actions.
>
> **[0:14](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980&t=14)** You can do this using three simple steps.
>
> **[0:17](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980&t=17)** Step one, fork the repo of this course.
>
> **[0:19](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980&t=19)** This would clone the repository on your GitHub account.
>
> **[0:22](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980&t=22)** Step two, if this is your first time using GitHub Actions, you'll need to enable it.
>
> **[0:28](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980&t=28)** So just click the green button.
>
> **[0:30](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980&t=30)** Step three, go inside the workflow file, which you can select from the left menu, and then click on the Run Workflow dropdown, which will pop up this dialogue on the screen.
>
> **[0:41](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980&t=41)** Then click on the Run Workflow button.
>
> **[0:43](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/challenge-run-tests-in-ci-with-github-actions?u=76281980&t=43)** Good luck.

> [!info]- Semantic Content
>
> **Tools:** github (3)
> **UI Navigation:** click on (2), dropdown (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Run tests in CI with GitHub Actions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=5)** - [Instructor] So the solution is quite simple as described in the slides, click on the fork button and then it'll clone the repository on your side and you will have all the admin rights.
>
> **[0:16](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=16)** So you will see the actions button then, click on the actions button, and once you click on the action button, you would see this page.
>
> **[0:24](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=24)** Now remember, you need to run the workflow on the correct branch.
>
> **[0:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=27)** If you run it on 04_03, the workflow will pass.
>
> **[0:31](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=31)** But if you run it on main, it'll fail.
>
> **[0:34](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=34)** So you need to go to 04 and let's go 03 branch and then click on actions.
>
> **[0:40](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=40)** So once you're there, you just go to the Selenium test and run the workflow and select the branch.
>
> **[0:49](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=49)** The branch should be 04_03 and run workflow.
>
> **[0:59](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=59)** So it'll just show you how many workflow runs have happened.
>
> **[1:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=63)** I've just refreshed my screen to see the third one, which is running.
>
> **[1:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=67)** It'll build, it'll do bits of the process, and you can tell that you are on the right branch by looking at a failure.
>
> **[1:16](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=76)** So this previous workflow failed because of the missing set of file, because we don't have that in main.
>
> **[1:25](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=85)** But if I go back to this one, this is running fine and it has gone to the server, has downloading Chrome, and it has run the test.
>
> **[1:37](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/solution-run-tests-in-ci-with-github-actions?u=76281980&t=97)** The test passed, job is complete and you can see the green here.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (2), select the (1)
> **Code Keywords:** pass (1), let (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/next-steps?u=76281980&t=1)** - Well done for finishing this course.
>
> **[0:03](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/next-steps?u=76281980&t=3)** I am so proud of you.
>
> **[0:05](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/next-steps?u=76281980&t=5)** Really good job.
>
> **[0:07](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/next-steps?u=76281980&t=7)** Now, follow me on LinkedIn, because there I will be pushing in more updates.
>
> **[0:11](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/next-steps?u=76281980&t=11)** And if you enjoyed this course, I've got two more courses that you can watch, which is "[[Playwright- Design Patterns]]" and "Playwright Advanced."
>
> **[0:18](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/next-steps?u=76281980&t=18)** And for any further details about Selenium, head over to [selenium.dev/documentation](https://selenium.dev/documentation), because you'll find many more resources over there.
>
> **[0:27](https://www.linkedin.com/learning/learning-selenium-structure-scale-run-and-optimize-automated-tests/next-steps?u=76281980&t=27)** Thank you.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **URLs:** [selenium.dev](https://selenium.dev) (1)
> **Speakers:** - well (1)


## Path Context

### In [[Getting Started with Software Testing]]
← [[Software Testing- Planning Tests for Mobile]] | **5 of 12** | [[Learning Playwright]] →

## Appears In

- [[Getting Started with Software Testing]]

## Related Courses

_Courses sharing skills:_

- [[Selenium Essential Training]] — Test Automation, Selenium
- [[Postman Essential Training]] — Test Automation
- [[Advanced Playwright Techniques- Optimizing Speed, Stability, and Cloud Testing]] — Test Automation
- [[Playwright- Design Patterns]] — Test Automation
- [[Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios]] — Test Automation

---

[↑ Back to top](#)