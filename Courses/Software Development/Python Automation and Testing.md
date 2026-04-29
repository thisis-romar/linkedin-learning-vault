---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-automation-and-testing
url: "https://www.linkedin.com/learning/python-automation-and-testing"
duration_minutes: 98
duration: 1h 38m
level: Intermediate
updated: 3/6/2024
learners: 107193
skills:
  - Python (Programming Language)
  - Test Automation
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQH0CzFeraiXWQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1620678936944?e=2147483647&amp;v=beta&amp;t=H-GGFJpuxObnSk03o7D4MD3LRT19N2UsNLwvWByd3FY"
linkedin_topic: Software Development
learning_paths:
  - '[[Advance Your Skills in Python]]'
prev_courses:
  - '[[Python Data Structures and Algorithms]]'
next_courses:
  - '[[Python GUI Development with Tkinter]]'
path_nav: '[{"path":"Advance Your Skills in Python","position":4,"total":7,"prev":"Python Data Structures and Algorithms","next":"Python GUI Development with Tkinter"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/test-automation
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Automation%20and%20Testing.md)

![Python Automation and Testing](https://media.licdn.com/dms/image/v2/C4E0DAQH0CzFeraiXWQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1620678936944?e=2147483647&amp;v=beta&amp;t=H-GGFJpuxObnSk03o7D4MD3LRT19N2UsNLwvWByd3FY)

# Python Automation and Testing

> Do you spend too much time manually testing your user interfaces? Automation is the answer. Python and Selenium offer a simple but powerful framework to script any testing. Here, instructor Bhoomika Agarwal shows how to use the combination of Selenium WebDriver and Python code to automate web UI tests. Follow along and learn how to locate elements, navigate pages, test user interactions with forms

> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing) | 1h 38m | Intermediate | 107K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. What Is Automation Testing and Python-Selenium Framework?]]** (5 videos)
- **[[#3. 2. Parsing the HTML DOM Structure]]** (11 videos)
- **[[#4. 3. Navigating through Pages]]** (5 videos)
- **[[#5. 4. Waits]]** (3 videos)
- **[[#6. Conclusion]]** (1 videos)

### 1. Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980&t=0)** - [Bhoomika] Welcome to Automating Web Testing with Python.
>
> **[0:04](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980&t=4)** I'm Bhoomika Agarwal, and I'm your pilot for this topic.
>
> **[0:08](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980&t=8)** Have you spent a large portion of your time manually testing your web UI?
>
> **[0:13](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980&t=13)** If yes, you should hop onto this flight.
>
> **[0:16](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980&t=16)** I'm a huge fan of test automation using Python Selenium for the simple reason that it's so easy to use and so powerful at the same time.
>
> **[0:27](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980&t=27)** The main problem with test automation is that its importance is underrated and its complexity is overrated.
>
> **[0:36](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980&t=36)** Python Selenium breaks both these myths by giving you a very simple framework that can automation any web UI testing for you in a jiffy.
>
> **[0:47](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980&t=47)** You will see this for yourself, as you jump on board the plane and take off with me.
>
> **[0:52](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980&t=52)** We'll be covering locating elements, navigating through pages, user interaction, waits, and much more.
>
> **[1:02](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980&t=62)** Before you know it, you'll have arrived at your destination.
>
> **[1:08](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980&t=68)** So let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3)
> **Code Keywords:** let (1)
> **Speakers:** - [bhoomika] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980&t=0)** - [Instructor] What do you need to know to get started with this course?
>
> **[0:04](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980&t=4)** Essentially, no prior knowledge is required.
>
> **[0:07](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980&t=7)** However, it is good to have some knowledge of Python which covers the basics, syntax and object-oriented programming concepts.
>
> **[0:18](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980&t=18)** It is also good to have a basic working knowledge of HTML as we will be working with Web UIs.
>
> **[0:26](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980&t=26)** I personally recommend you to try out the courses [[Python Essential Training]] and [[HTML Essential Training]].
>
> **[0:34](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980&t=34)** In addition to the knowledge that you require, we will be using the following tools.
>
> **[0:39](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980&t=39)** You are required to have Python installed on your system.
>
> **[0:43](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980&t=43)** Python is installed by default on Linux, Mac, Ubuntu, etc.
>
> **[0:49](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980&t=49)** On Windows, you have to install Python separately.
>
> **[0:53](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980&t=53)** We will be using the web ID IDLE throughout this course which comes installed by default with Python on Windows.
>
> **[1:01](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980&t=61)** You will have to install it separately on all other operating systems.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6)
> **Env Vars:** html (2), idle (1)
> **Prerequisites:** install (2), required to (1)
> **Code Keywords:** require (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=0)** - [Instructor] I want to familiarize you with how to use the exercise files.
>
> **[0:05](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=5)** Always remember that the best way to learn coding is to try out the codes yourself.
>
> **[0:11](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=11)** It is always better to use these files just as a reference.
>
> **[0:16](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=16)** You have access to the same exercise files that I have here with me.
>
> **[0:21](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=21)** Let's see how these files are structured.
>
> **[0:24](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=24)** I have placed the folder on my desktop, but you can put them at any location convenient to you.
>
> **[0:31](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=31)** In the Exercise Files folder, all the files are structured according to the chapter.
>
> **[0:37](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=37)** Within each chapter folder, the files are structured according to the video that we are going to look at.
>
> **[0:43](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=43)** Within each folder, you'll see the files that you'll require for that video.
>
> **[0:48](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=48)** I just want to bring to your notice that, in the second chapter, within each video, we have two separate folders for the start files and the completed files.
>
> **[1:00](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=60)** This is because we'll be building upon the code in each subsequent video.
>
> **[1:05](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=65)** The start folder contains the files that we get started with, and the completed folder has the files that you will get at the end of this video.
>
> **[1:15](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=75)** For any common files that are being used throughout the chapter, those are placed in the chapter folder.
>
> **[1:21](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=81)** I would strongly encourage you to try out the codes for yourself and use these exercise files just as a reference.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (4)
> **Code Keywords:** let (1), require (1)
> **Speakers:** - [instructor] (1)


### 2. 1. What Is Automation Testing and Python-Selenium Framework?

#### What is automated testing?
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=0)** - [Instructor] Understanding the importance of automated testing is the key to an effective test strategy.
>
> **[0:07](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=7)** Automating our test cases saves cost and time of testing while increasing the quality and test coverage.
>
> **[0:16](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=16)** Test automation enables continuous delivery of software by allowing quick testing around the clock.
>
> **[0:24](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=24)** Also, it enables faster regression testing that may be required after debugging or upon further development of software.
>
> **[0:34](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=34)** It is easy to scale to a variety of devices and environments, thereby allowing cross browser and cross device testing easily.
>
> **[0:47](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=47)** Mike Cohn defines three layers of test automation.
>
> **[0:51](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=51)** Unit tests, API or service tests, and UI tests.
>
> **[0:58](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=58)** The bottom most layer of the pyramid is comprised of unit tests.
>
> **[1:04](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=64)** These are the most numerous and have maximum coverage.
>
> **[1:09](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=69)** A unit test can pinpoint bugs in code to the level of the line where it has occurred.
>
> **[1:16](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=76)** They are used to test small pieces of code, and hence, can not be used for integration testing or system testing.
>
> **[1:25](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=85)** Let's skip to the UI layer of the pyramid and look at it next.
>
> **[1:29](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=89)** The UI layer should be used to test only the functionality of the UI elements.
>
> **[1:36](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=96)** Let's take the example of a simple calculator application that allows a user to add, subtract, multiply, or divide two integers and displays the answer to the user.
>
> **[1:49](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=109)** To test this application through the UI, we would write a test to launch the application, enter values into the field, enter the operation to be performed, and then check the actual and expected result.
>
> **[2:02](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=122)** This form of testing is a redundant in that it is brittle, expensive, and time consuming.
>
> **[2:10](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=130)** Each test will invoke the code for the operation and also test the code that displays the result.
>
> **[2:17](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=137)** Although many test cases need to checked, not all of them need to run through the UI.
>
> **[2:23](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=143)** This is where the API or service layer plays a role.
>
> **[2:29](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=149)** The service layer of the pyramid tests the functionality in terms of services.
>
> **[2:35](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=155)** A service is a function or an operation that the application performs on some inputs to produce an output.
>
> **[2:44](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=164)** In the case of the calculator, there are four services for each of the four operations that it can perform.
>
> **[2:51](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=171)** The aim of service layer of testing is to separate UI testing from functionality testing, thereby, saving on the costs and time of UI testing.
>
> **[3:04](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=184)** This layer is often missed out and is essential to an affective test strategy.
>
> **[3:09](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=189)** As the number of UI tests increases, so does the cost to maintain them, and time of execution.
>
> **[3:18](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=198)** At the same time, the quality of testing and the end to end test coverage increases.
>
> **[3:24](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=204)** Separation of automation test cases into these three layers helps optimize the trade off between cost, quality, and time.
>
> **[3:34](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=214)** In this course, we will look at the top most layer of the pyramid, that is the UI layer.
>
> **[3:42](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=222)** Python provides many in built libraries for automated web testing.
>
> **[3:47](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=227)** For unit testing and API testing, the Python library's unittest, pytest, and nose provide support for UI level testing.
>
> **[3:56](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=236)** Selenium and Python are commonly used.
>
> **[3:59](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=239)** In this course we will explore automated web testing at the UI level using Selenium and Python.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Code Keywords:** let (2), function (1)
> **Env Vars:** api (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Python-Selenium bindings
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=0)** - [Instructor] As the tagline of Selenium states, Selenium automates browsers.
>
> **[0:05](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=5)** In testing it is used for the functional and integration testing.
>
> **[0:10](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=10)** Selenium is primarily used for web UI automation which is the automatic execution of the actions performed in a web browser window by a user.
>
> **[0:21](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=21)** It enables robust browser based regression testing.
>
> **[0:25](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=25)** Selenium is also used to scale tests to multiple browsers and environments using the Selenium grid.
>
> **[0:35](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=35)** The Python Selenium bindings are used to leverage the power of the Selenium WebDriver through Python.
>
> **[0:42](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=42)** The main motive is to access all the functionalities of the Selenium web driver in an intuitive way.
>
> **[0:50](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=50)** Now let's head over to the installation of Selenium.
>
> **[0:54](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=54)** I'm going to go to my browser and open the official Python Selenium documentation for the same.
>
> **[1:02](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=62)** In order to install Selenium you are required to have Python installed along with Pip which is Python's package installation manager.
>
> **[1:11](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=71)** In case you do not have Python installed on your Windows machine, you can follow these steps to install it.
>
> **[1:19](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=79)** While installing Python on Windows using the MSI given here, there's an option that you can check to add Python to the path environment variable.
>
> **[1:31](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=91)** In case you have missed that out then you can follow these steps to install Python Selenium on your machine.
>
> **[1:39](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=99)** In the case that you have added Python to your path environment variable then you can go ahead and install Python using Pip.
>
> **[1:48](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=108)** The process of installing Selenium using Pip is very simple.
>
> **[1:54](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=114)** All you need to do is run a single command that is pip install selenium.
>
> **[1:59](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=119)** This command will work irrespective of your OS if you're installing Selenium using Python Pip.
>
> **[2:06](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=126)** Along with installing Selenium on your system you will also need to install the drivers for the browser of your choice.
>
> **[2:15](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=135)** In this course we will be using Firefox as the default browser.
>
> **[2:20](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=140)** For Firefox the geckodriver needs to be installed from the following link.
>
> **[2:26](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=146)** In the case that you wish to use a browser of your choice you have to install the drivers for that browser as well.
>
> **[2:35](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=155)** You need to ensure that the driver for the browser that you're installing is placed in the path environment variable of your system.
>
> **[2:44](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=164)** This path environment variable can be located in different places in different OS's.
>
> **[2:50](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=170)** Regardless of that you have to ensure that the driver is placed in the path environment variable to get the script up and running.
>
> **[2:59](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=179)** Let's now ensure that the installation is complete and get a feel of what the Selenium framework can do using the simple test script.
>
> **[3:09](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=189)** So I'm going to minimize my browser window and head over to the exercise files and run a simple test script from there.
>
> **[3:18](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=198)** I have the exercise files folder here, we're gonna head to chapter one and to the second video in the course.
>
> **[3:26](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=206)** I have a Python test script already saved here.
>
> **[3:30](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=210)** I open it with Idle which is a Python editor.
>
> **[3:36](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=216)** We look at the details of this program line by line later on during the course.
>
> **[3:42](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=222)** I will go ahead and run this script and we can then look at what it does.
>
> **[3:50](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=230)** So as you can see this script opens the Selenium official website, that is [seleniumhq.org](https://seleniumhq.org).
>
> **[3:58](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=238)** Now that we have the script up and running as expected we know that the installation is complete and the Python Selenium bindings have been installed successfully.

> [!info]- Semantic Content
>
> **CLI Commands:** python (15), pip (5)
> **Prerequisites:** install (7)
> **Code Keywords:** let (2)
> **Tools:** firefox (2)
> **Exercise Files:** exercise files (2)
> **URLs:** [seleniumhq.org](https://seleniumhq.org) (1)
> **Env Vars:** msi (1)
> **UI Navigation:** go to (1)

#### A simple code example
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=0)** - [Instructor] Let's take a quick run through a simple code example to get a better idea of how the Python Selenium bindings work.
>
> **[0:08](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=8)** I'll head over to the exercise files where I go to chapter 1 and do the third video.
>
> **[0:14](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=14)** I have a Python script already.
>
> **[0:15](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=15)** This is the audio.
>
> **[0:17](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=17)** So I'm going to open the script with IDLE.
>
> **[0:20](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=20)** In this script, we open a new browser instance.
>
> **[0:23](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=23)** We head over the the site [python.org](https://python.org).
>
> **[0:26](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=26)** In the website, we'll be looking for the search box and we'll be typing in the keyword pycon.
>
> **[0:32](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=32)** Once we search for the keyword pycon, the search results will be available for eight seconds because we're making the browser window sleep for eight seconds.
>
> **[0:41](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=41)** Following which, it will close.
>
> **[0:44](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=44)** So I'm quickly gonna run this script and we can see how it works.
>
> **[0:52](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=52)** So, you can see that the keyword of Python is so much fun we get to search results.
>
> **[0:57](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=57)** And for after eight seconds, the browser window closes.
>
> **[1:01](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=61)** This test script is just the tip of the iceberg with regards to what test automation using selenium can do for you.
>
> **[1:10](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=70)** In order to be able to write your own automation test scripts, it is essential to understand the HTML dom structure and how to pass it.
>
> **[1:20](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=80)** We will look at this in the next chapter.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Code Keywords:** let (1), pass (1)
> **Env Vars:** idle (1), html (1)
> **UI Navigation:** go to (1), open the (1)
> **URLs:** [python.org](https://python.org) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Cross-browser support
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=0)** - The Selenium WebDriver supports various browsers including Firefox, Chrome, Internet Explorer, and Safari.
>
> **[0:09](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=9)** This is useful when you want to run a single script on multiple browsers to ensure that your code is compatible with all the browsers available.
>
> **[0:19](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=19)** Selenium can also be extended to run on various systems and platforms.
>
> **[0:24](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=24)** Here since we're checking for web UI support we're going to check cross-browser compatibility in specific.
>
> **[0:31](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=31)** In the case of Firefox, the FirefoxDriver binary needs to be installed separately from the Python site and added to the system path.
>
> **[0:41](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=41)** An instance of Firefox browser can be created through your code using the following line.
>
> **[0:47](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=47)** Driver = webdriver.Firefox.
>
> **[0:51](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=51)** Let me quickly shift to the browser and show you how the Firefox binary can be installed and added to your system path.
>
> **[1:00](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=60)** The binaries for the various web drivers provided by Selenium can be installed from the following site selenium-python.[readthedocs.io/installation.html](https://readthedocs.io/installation.html).
>
> **[1:12](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=72)** The driver is available for Chrome, Edge, Firefox, and Safari.
>
> **[1:17](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=77)** Once you have downloaded the driver, you need to add it to your system path so that it can be run from your script.
>
> **[1:25](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=85)** Let me show you how to do that as well.
>
> **[1:28](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=88)** For Windows, you need to go to your PC, right click, go to Properties, go to Advanced Systems settings, Environment Variables.
>
> **[1:39](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=99)** You will see a path environment variable.
>
> **[1:42](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=102)** You edit this and add the path for your various drivers here.
>
> **[1:47](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=107)** Once you have added the path to your driver in the path system variable, you can access that browser from your script.
>
> **[1:57](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=117)** So once all of this is done, let me now show you how you can use the Chrome driver in your script.
>
> **[2:05](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=125)** So I'll quickly run to item and the sample script that we use let us run it using Chrome.
>
> **[2:14](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=134)** So I first import webdriver.
>
> **[2:18](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=138)** Once I have imported webdriver I'm also going to import time so that we can see the driver being installed.
>
> **[2:27](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=147)** And to create an instance of the Chrome driver I just say webdriver.Chrome.
>
> **[2:35](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=155)** In the case of Firefox, we were using webdriver.Firefox, for Edge, we'll simply change it to webdriver.Edge.
>
> **[2:44](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=164)** This is the only line that needs to be changed.
>
> **[2:47](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=167)** The rest of your code remains the same.
>
> **[2:49](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=169)** So I navigate my site, [seleniumhq.org](https://seleniumhq.org), and I can add a time, width of two seconds, and then close my driver.
>
> **[3:06](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=186)** With this, the script as you can see, the script is the same.
>
> **[3:10](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=190)** The only line that you need to change is the driver that you're using.
>
> **[3:15](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=195)** So I'll save this in my working code folder, as code five one.
>
> **[3:26](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=206)** And let's run this.
>
> **[3:28](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=208)** Instead of opening Firefox, this should open Chrome.
>
> **[3:33](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=213)** So you can see the Chrome browser being run and the script being run on Chrome.
>
> **[3:38](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=218)** Similarly you can do the same for Internet Explorer.
>
> **[3:44](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=224)** For FirefoxDriver this is what we use.
>
> **[3:46](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=226)** For ChromeDriver, you need to give webdriver.Chrome.
>
> **[3:52](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=232)** And for EdgeDriver, once you have placed the binary and added it to the system path, you say webdriver.Edge.
>
> **[4:00](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=240)** This is the only change that you need to make.
>
> **[4:03](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=243)** And your script will be compatible with all the browsers that you want to run it on.

> [!info]- Semantic Content
>
> **Tools:** firefox (9), safari (2)
> **Code Keywords:** let (5), this, (1), this. (1)
> **CLI Commands:** python (2), make (1)
> **UI Navigation:** go to (3)
> **URLs:** [readthedocs.io](https://readthedocs.io) (1), [seleniumhq.org](https://seleniumhq.org) (1)
> **File Paths:** selenium-python.readthedocs.io/installation.html (1)
> **Speakers:** - the (1)

#### Cross-browser support
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=1)** - [Iinstructor] The Selenium WebDriver supports various browsers including Firefox, Chrome, Internet Explorer, and Safari.
>
> **[0:12](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=12)** This is useful when you want to run a single script on multiple browsers to ensure that your code is compatible with all available browsers.
>
> **[0:25](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=25)** Selenium can also be extended to run on various systems and platforms.
>
> **[0:31](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=31)** Here, since we are checking for web UI automation, we will focus specifically on cross-browser compatibility.
>
> **[0:42](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=42)** In the case of Firefox, the Firefox driver binary needs to be installed separately and then placed in the system path so that web driver can locate it.
>
> **[0:56](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=56)** This can then be accessed using the line, driver = webdriver.Firefox().
>
> **[1:03](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=63)** Let's quickly go to the Selenium Python documentation see how to install these drivers and then place them in the system path.
>
> **[1:15](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=75)** The drivers for different browsers can be installed from this webpage, seleniumpython.[readthedocs.io/installation](https://readthedocs.io/installation).
>
> **[1:28](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=88)** Here, we can see the drivers for Chrome, Edge, Firefox and Safari.
>
> **[1:36](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=96)** Once we have downloaded these drivers, we need to place them in the path environment variable.
>
> **[1:44](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=104)** Let me quickly switch over to the windows file explorer and show you how to do that.
>
> **[1:51](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=111)** So here in the windows file explorer, we right click, go to properties, advanced system settings, and then we can see a button for environment variables.
>
> **[2:06](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=126)** When we click on this, we are going to look for the path environment variable.
>
> **[2:12](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=132)** And we edit this and add the path of the Chrome driver, get co-driver, edge driver and all the other drivers that we need and save this.
>
> **[2:25](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=145)** With this, we have all of our set up ready for Firefox.
>
> **[2:30](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=150)** In the case of Chrome, a similar process needs to be followed by installing the binary, placing it in the system path, and then we can access it using the line, driver = webdriver.Chrome().
>
> **[2:46](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=166)** The only thing that changes here is the name of the browser.
>
> **[2:51](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=171)** It's that simple to get your script compatible to different browsers.
>
> **[2:56](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=176)** Let me quickly switch to the code editor and show you how we can write a simple script to open a webpage in Chrome.
>
> **[3:08](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=188)** So here we are on our code editor and as with all other scripts we start with importing the WebDriver.
>
> **[3:20](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=200)** Then we are going to import the time module so that we can see our script in action.
>
> **[3:28](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=208)** And let's create an instance of the Chrome driver using webdriver.Chrome().
>
> **[3:38](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=218)** Now that we have this driver ready, we are going to use it to navigate to the selenium website, which is [selenium.dev](https://selenium.dev).
>
> **[3:54](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=234)** And then we add a time sleep of two seconds so that we can see the website opening.
>
> **[4:04](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=244)** And finally, we close our driver with driver.close.
>
> **[4:11](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=251)** And with this, we have a script that will run on Chrome.
>
> **[4:15](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=255)** Let me save this in my working code folder
>
> **[4:24](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=264)** as code one four,
>
> **[4:32](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=272)** and now let's run this.
>
> **[4:39](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=279)** So as you can see, we have a webpage opening in Chrome, navigating through the website and returning back.
>
> **[4:47](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=287)** In the case of EdgeDriver, we again need to install the binary, place it in the system path, and use driver = webdriver.Edge.
>
> **[5:00](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=300)** So just by changing the name of the driver it's really simple to make your code compatible to different browsers and to different environments.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (3), switch (2), this. (2), module (1)
> **Tools:** firefox (6), safari (2)
> **UI Navigation:** go to (2), click on (1), switch to (1)
> **Prerequisites:** install (2), set up (1)
> **CLI Commands:** python (1), make (1)
> **URLs:** [readthedocs.io](https://readthedocs.io) (1), [selenium.dev](https://selenium.dev) (1)
> **Speakers:** - [iinstructor] (1)


### 3. 2. Parsing the HTML DOM Structure

#### What is the HTML DOM structure?
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980&t=0)** - [Instructor] The HTML document object model, or the HTML DOM defines the standard way for accessing and manipulating HTML documents.
>
> **[0:09](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980&t=9)** In the document object model, documents have a logical structure which is very much like a tree.
>
> **[0:16](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980&t=16)** To be more precise it is like a forest or grove which can contain more than one tree.
>
> **[0:23](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980&t=23)** The DOM presents an HTML document as a tree structure with elements, attributes, and text.
>
> **[0:30](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980&t=30)** The structure of the DOM for any document will resemble the actual structure of the mock up of the document.
>
> **[0:38](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980&t=38)** With the DOM, programmers can create and build documents, navigate their structure, and add, modify, or delete elements and content.
>
> **[0:50](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980&t=50)** Consider the following HTML document.
>
> **[0:53](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980&t=53)** The DOM for this document includes all the elements and any text nodes within those elements.
>
> **[1:00](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980&t=60)** The core above, creates an object hierarchy as shown in the diagram.
>
> **[1:05](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980&t=65)** Each element under the document root, that is HTML, there's an element node, and these element nodes have text nodes containing the text that is within the element.
>
> **[1:19](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980&t=79)** If there were an element with attributes, an attribute node would be created for that element and any text for the attribute would create a text node under that attribute node.

> [!info]- Semantic Content
>
> **Env Vars:** html (6), dom (5)
> **CLI Commands:** node (4)
> **Code Keywords:** delete (1)
> **Speakers:** - [instructor] (1)

#### Locating elements by ID
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=0)** - [Instructor] The very first step in test automation is to locate HTML elements.
>
> **[0:06](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=6)** Let's take a look at locating elements using the id attribute along with a code example for the same.
>
> **[0:13](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=13)** The HTML id attribute specifies a unique id for an HTML element.
>
> **[0:20](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=20)** The rules for the id attribute are: it must contain at least one character, it must not contain any space characters, the id value is case sensitive, and it must be unique in a document.
>
> **[0:38](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=38)** We use this method to locate elements when the id attribute of an element is known.
>
> **[0:44](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=44)** The first element with a matching attribute value will be returned.
>
> **[0:49](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=49)** Let's go ahead and try a hands-on on how to locate the elements using the id attribute.
>
> **[0:55](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=55)** I'm going to head over to the exercise files where under chapter two I have an HTML code file that we will be using for the whole of chapter two to run our code.
>
> **[1:09](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=69)** So I'm going to open this script with sublime text.
>
> **[1:14](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=74)** As you can see, we have a form element with id loginform.
>
> **[1:18](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=78)** We'll be writing a python script to locate this form element.
>
> **[1:24](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=84)** I'm going to head over to the exercise files again and run this script to see what the HTML file looks like in the browser.
>
> **[1:32](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=92)** So when I double click on it I see the output which says it's a form example.
>
> **[1:38](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=98)** It has two fields, a login button, and a clear button.
>
> **[1:43](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=103)** So this is the path of the HTML file.
>
> **[1:47](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=107)** I'm going to copy this because we will be needing this in our python script.
>
> **[1:52](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=112)** Now I'll head over to IDLE and we'll start writing our python script to locate HTML elements.
>
> **[2:02](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=122)** So I'll open IDLE and here I'll create a new file.
>
> **[2:08](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=128)** In this file let's start writing our script.
>
> **[2:13](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=133)** So the very first thing that we need to remember for any Selenium script is to import the web driver from selenium.
>
> **[2:21](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=141)** So this line imports the web driver which is used to control the browser instance.
>
> **[2:28](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=148)** Then I create a driver variable which holds an instance of my web browser.
>
> **[2:37](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=157)** Since we're using Firefox in our tutorial, I'm going to specify webdriver.Firefox().
>
> **[2:44](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=164)** So this will create a new instance of Firefox and initialize it.
>
> **[2:52](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=172)** After this, I will open the file.
>
> **[2:55](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=175)** I've already copied the path of the HTML file, so I'm going to paste it right here.
>
> **[3:01](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=181)** Close the quotes and close the bracket.
>
> **[3:05](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=185)** This line will open the HTML file in a browser instance of Firefox.
>
> **[3:11](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=191)** I will then create a login form variable, and I need to use this variable to locate my login form by id.
>
> **[3:21](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=201)** So the function used for locating elements by id in python selenium is called find_element_by_id.
>
> **[3:33](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=213)** Pretty intuitive right?
>
> **[3:35](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=215)** So, here I will put the id value of my login form.
>
> **[3:41](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=221)** So what this will do is locate an element by id login form and store it in the variable login_form.
>
> **[3:52](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=232)** Next, what I want to do is print this variable.
>
> **[3:55](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=235)** So I will first say my login form element is
>
> **[4:05](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=245)** and then I will print the variable login_form.
>
> **[4:12](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=252)** Now the user would want to close the browser instance so there's a function called close which is invoked on the web browser instance.
>
> **[4:24](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=264)** In this case that instance is stored in driver.
>
> **[4:26](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=266)** So I say driver.close to close my web browser.
>
> **[4:29](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=269)** With this we have our script ready.
>
> **[4:32](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=272)** So let's save it.
>
> **[4:37](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=277)** I'm going to save this on the desktop.
>
> **[4:40](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=280)** I'll create a new folder, and let's call it working code.
>
> **[4:48](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=288)** Inside the working code folder I'm going to store my file as code2, simply because we're on the second chapter, and let's save this.
>
> **[4:58](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=298)** Now that we are all ready with the script, let's run it and see what the output is.
>
> **[5:06](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=306)** So our file is open and you can see the output as my login form element is, and this is your login form element.
>
> **[5:14](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=314)** So this is how we use python selenium to locate HTML elements by their id attribute.

> [!info]- Semantic Content
>
> **Env Vars:** html (10), idle (2)
> **Code Keywords:** let (7), function (2), this, (1), this. (1)
> **CLI Commands:** python (5)
> **Tools:** firefox (4), sublime (1)
> **Code Identifiers:** login_form (2), find_element_by_id (1)
> **UI Navigation:** open the (2), click on (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is called (1)

#### Locating elements by name
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=0)** - [Instructor] We can also look at elements using the name attribute.
>
> **[0:04](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=4)** Let's take a look at this along with the code example.
>
> **[0:08](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=8)** The HTML name attribute specifies a name for an HTML element.
>
> **[0:13](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=13)** It does not have to be unique in a document and the name attribute is usually used in forms to reference the element when the data is submitted.
>
> **[0:25](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=25)** This is commonly used for logging into a website with a username and password.
>
> **[0:30](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=30)** We use this method to look at elements when the name attribute of an element is known.
>
> **[0:37](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=37)** In the case that there are multiple elements with the same name, the first element with the matching attribute value will be returned.
>
> **[0:45](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=45)** Let's head over to the HTML webpage that we used in our previous video.
>
> **[0:51](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=51)** So we are going to look at the input element using its name attribute, that is username.
>
> **[0:58](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=58)** I'm going to copy this, so we can use this in our code.
>
> **[1:02](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=62)** Now, I'll head over to the Python script that we used in our previous video.
>
> **[1:07](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=67)** So here, I am going to first change the name of the variable to username.
>
> **[1:15](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=75)** And now I need a method to look at elements by name.
>
> **[1:19](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=79)** So in Python Python Selenium, that method is simply called find element by name, pretty intuitive again.
>
> **[1:25](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=85)** Here I will paste the username that I copied and I'm also going to change my print statements.
>
> **[1:34](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=94)** My input element is and I will also change this to the variable name.
>
> **[1:41](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=101)** So with this, we have all the changes made in our file.
>
> **[1:45](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=105)** Now let's go ahead and run this and see what the output is like.
>
> **[1:53](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=113)** So here you see that the output printer is my input element is and the input element is printed after it's located by name, so in Python Selenium, this is how we look at HTML elements by name.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), find (1)
> **Code Keywords:** let (3), this, (2)
> **Env Vars:** html (4)
> **Cross-References:** previous video (2)
> **Speakers:** - [instructor] (1)

#### Locating elements by XPath
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=0)** - [Narrator] Besides the ID and the name attributes, we can also locate elements using the XPath.
>
> **[0:08](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=8)** Let's take a look at this along with a code example.
>
> **[0:12](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=12)** XPath stands for XML path language.
>
> **[0:16](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=16)** It uses path expressions to identify and navigate nodes in an XML document.
>
> **[0:23](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=23)** As HTML is an implementation of XML, the power of XPath can be extended to HTML.
>
> **[0:31](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=31)** These path expressions look very much like the path expressions that we use in traditional computer file systems.
>
> **[0:41](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=41)** That is, they follow a tree or a folder structure.
>
> **[0:46](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=46)** The HTML node is selected by following a path or steps along the dome tree and can be used to select one or more nodes in the document.
>
> **[0:58](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=58)** XPath is used to locate elements when a specific ID or name attribute is not available for a node.
>
> **[1:08](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=68)** It can be used to locate nodes in absolute or relative terms.
>
> **[1:14](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=74)** In the case of an absolute path, the path of the name is specified right from the root node.
>
> **[1:21](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=81)** In the case of relative paths, the path of the node is specified relative to another node that has an identifying attribute.
>
> **[1:31](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=91)** It is generally advised to not use an absolute XPath as even the slightest change in the application structure could cause it to fail and become invalid.
>
> **[1:44](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=104)** Let's head over to the HTML code that we were using.
>
> **[1:49](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=109)** We are going to locate the form element with ID loginForm using XPath.
>
> **[1:55](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=115)** We'll take a look at how to do this using relative terms and absolute terms.
>
> **[2:02](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=122)** So I'm going to close this and head over to my desktop, where I go to the working code folder.
>
> **[2:10](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=130)** We'll get started with the code that we were using so far in this chapter, and since we're locating the login form element, I'm going to replace the username variable with login_form.
>
> **[2:24](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=144)** Let's take a look at how to do this in absolute terms first.
>
> **[2:28](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=148)** So I'll call my variable login_form_absolute.
>
> **[2:33](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=153)** The function to locate elements using XPath is called find elements using XPath.
>
> **[2:40](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=160)** So here we will specify the complete or the absolute XPath.
>
> **[2:46](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=166)** So we first start from the HTML element.
>
> **[2:49](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=169)** Now we get to the body element, and then we specify that we want the first form element to be selected.
>
> **[2:57](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=177)** I would generally not advise you to use the absolute path because any changes in the intermediate path structure could cause it to become invalid.
>
> **[3:07](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=187)** So, what's a better way to do this?
>
> **[3:10](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=190)** In this case, we use a relative XPath, so let's see a relative XPath for the same element.
>
> **[3:19](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=199)** So I'll call the variable login_form_relative and I say driver.find_element_by_xpath, and just to cut down on the complete path, I'm going to give the levels using backslashes, and then say that I want to select the form element at the third level.
>
> **[3:42](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=222)** So this is a relative path, and in this case any changes in the intermediate path will not affect the path of the form element.
>
> **[3:51](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=231)** So I would advise you to use this as it is much safer, and in case I want to make this relative path more specific using a given ID or the name element, there's also a way to do that.
>
> **[4:06](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=246)** So I'm going to use the ID element of this form to locate it.
>
> **[4:10](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=250)** So I'll call the variable login_form_id and I say I want to find the element by XPath...
>
> **[4:25](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=265)** And again, I give the relative path.
>
> **[4:29](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=269)** So I will give form, and instead of specifying that it's the first element I will say that I want ID login form.
>
> **[4:40](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=280)** So here, as you can see, I've made the relative path much more specific.
>
> **[4:45](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=285)** Now that we have all these elements, let's change our print statement.
>
> **[4:51](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=291)** So, I say "My login form is," and in the print statements I change the variable names again.
>
> **[4:59](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=299)** So, I say login_form_absolute and I'll copy this print statement for the others and paste it here.
>
> **[5:14](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=314)** I need another one here since we have three elements, so I say I want the relative one to be printed, and the one with the ID to be printed.
>
> **[5:26](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=326)** So with this we have our code all ready to run, so I'll save it and let's run the module and see how it works.
>
> **[5:39](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=339)** So as you can see, we have the three login form elements printed.
>
> **[5:44](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=344)** The three variables have been printed out here.
>
> **[5:46](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=346)** So this is how you use absolute and relative paths in XPath.
>
> **[5:52](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=352)** Again, I would like to remind you that XPath is more for worst case scenario.
>
> **[5:58](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=358)** That is, you use it only when a specific ID, or name, or class attribute is not available, and also if you are using an XPath it's always more advisable to use a relative one over an absolute one.
>
> **[6:13](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=373)** So this is how you locate elements using XPath in Python Selene.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), find (2), make (1), python (1)
> **Code Keywords:** let (6), function (1), case, (1), module (1)
> **Env Vars:** html (5), xml (3)
> **Code Identifiers:** login_form_absolute (2), loginform (1), login_form (1), login_form_relative (1), find_element_by_xpath (1)
> **Definitions:** stands for (1), is an  (1), is called (1), is a  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### Locating elements by class
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=0)** - [Instructor] Along with the methods that we've seen so far we can also locate elements using the class attribute.
>
> **[0:08](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=8)** Let's take a look at this along with a code example.
>
> **[0:10](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=10)** The HTML class attribute specifies one or more class names for an HTML element.
>
> **[0:19](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=19)** These class names are used to point to a calls in a stylesheet.
>
> **[0:25](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=25)** Typically a class is used to group a number of elements that have the same format or the same transition or have the same form, color, or anything in common.
>
> **[0:36](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=36)** We use this method to locate elements when we know the class attribute of one or more elements.
>
> **[0:45](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=45)** The first element with a matching attribute value will be returned.
>
> **[0:51](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=51)** Let's take a look at the HTML code that we have been using so far.
>
> **[0:56](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=56)** So here, we have a heading element with a class, content.
>
> **[1:01](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=61)** So I'm going to copy this class name so that we can use it in our code.
>
> **[1:07](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=67)** Let's head over to the desktop where I'll go to the Working Code folder, and I'll open the code that we have been working with so far here.
>
> **[1:20](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=80)** Since we do not need multiple elements, I'll delete the first two, and let's rename this login_form element to content since we're looking at the content class.
>
> **[1:31](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=91)** The method to locate elements using class name in Python is called class, find_element_by_class_name.
>
> **[1:40](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=100)** Again it's pretty intuitive and here I'll add the class name that we have copied from the HTML file and let's place that here, and format this properly.
>
> **[1:55](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=115)** While printing, again we do not need multiple print statements, and let's change this element name to the valuable name that we have been using.
>
> **[2:05](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=125)** Also, let's change the print statement itself.
>
> **[2:08](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=128)** So I'll call this my class element, and with this we have our code ready to run.
>
> **[2:17](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=137)** So let's save this and let's run it.
>
> **[2:27](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=147)** So as you can see here, we have located an element successfully using the class attribute.
>
> **[2:35](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=155)** Generally I would advise you to use the class element when you want to locate a group of elements besides the class attribute and the one that we have seen so far, there are other attributes that you can locate elements using such as CSS locators, tag names, et cetera.
>
> **[2:53](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=173)** But generally these are the most frequently used one, and they're a good thing to have in your tool bag.
>
> **[3:00](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=180)** This is how we use the class attribute to locate elements in Python selenium.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), class, (2), delete (1), class. (1)
> **Env Vars:** html (4), css (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** login_form (1), find_element_by_class_name (1)
> **UI Navigation:** go to (1), open the (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=0)** (intense whoosh)
>
> **[0:03](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=3)** - [Instructor] Now that we have looked at how to locate the elements using different attributes and different nodes, let's do a small challenge on the same and see how far we have got with our learning.
>
> **[0:16](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=16)** In this challenge, I have a couple of five steps for you that should take you all of five minutes to do overall.
>
> **[0:22](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=22)** The first step that I want you to do is head over to the site [seleniumhq.org](https://seleniumhq.org), so let's head over to the site and see what it looks like.
>
> **[0:33](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=33)** This is the site [seleniumhq.org](https://seleniumhq.org) which is the official Selenium site.
>
> **[0:39](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=39)** In this site, let's do the following.
>
> **[0:42](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=42)** The first thing you do is locate an element by id "q" and print it out.
>
> **[0:48](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=48)** Locate an element by name "q".
>
> **[0:52](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=52)** We locate an element with the heading "What is Selenium?"
>
> **[0:55](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=55)** using the XPath.
>
> **[0:58](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=58)** And lastly, we locate an element with class "selenium-sponsors" and we print all of these.
>
> **[1:06](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=66)** It's a pretty simple challenge.
>
> **[1:07](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=67)** Let's go ahead and see how we do this.
>
> **[1:11](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=71)** I'll let you go ahead and give it a shot.
>
> **[1:14](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=74)** In the next video, we walk through it step by step and see how to solve it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (1)
> **URLs:** [seleniumhq.org](https://seleniumhq.org) (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=3)** - [Narrator] Now that we have seen the challenge that we have taken up, let's take a step by step walkthrough of how to solve it.
>
> **[0:11](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=11)** One thing to remember is that there are many ways to do the solution to this challenge, and we are going to look at one of those solutions only.
>
> **[0:19](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=19)** So we start off, I'm going to open the code editor directly, and we go through the first step so.
>
> **[0:27](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=27)** As with every Python Selenium script, we have to import the web driver first.
>
> **[0:32](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=32)** So once that is done, I open a driver window.
>
> **[0:42](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=42)** Now the next step to do is to open the Selenium HQ site.
>
> **[0:48](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=48)** So I'm just gonna type in this site name.
>
> **[0:55](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=55)** [seleniumhq.org](https://seleniumhq.org).
>
> **[0:59](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=59)** Now the next step that we have to do is to find an element with its ID, so I'm going call the variable name element ID, and we have to find an element with ID Q.
>
> **[1:19](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=79)** And here I specify the ID that is Q.
>
> **[1:25](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=85)** Next, we are going to print out this element, so I give the variable name element ID.
>
> **[1:32](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=92)** This is the first two steps of how would you done.
>
> **[1:37](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=97)** The next step that we have to do is to locate an element by name, so I'm going to call the variable element name here, just to keep things simple.
>
> **[1:48](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=108)** And the function to find an element by name is find element by name.
>
> **[1:55](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=115)** And the name of the element is Q again.
>
> **[1:59](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=119)** So this will find the element by name Q, and then we print it out.
>
> **[2:07](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=127)** The next step that we have is to find a heading by xpath.
>
> **[2:13](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=133)** At times, it can get a little tricky to find the xpath of an element, so we're going to head over to the site and see how to do this in a simple way.
>
> **[2:23](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=143)** So I'm going to head over to the browser.
>
> **[2:25](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=145)** And I know that this is the heading element, so what I will do is select the element, right-click, inspect element.
>
> **[2:34](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=154)** And here you can see the DOM structure of this element.
>
> **[2:38](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=158)** Also you can see the xpath in a hierarchical manner at the bottom.
>
> **[2:44](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=164)** There are many ways to find the xpath.
>
> **[2:47](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=167)** One way to do it would be the absolute xpath which would go right from the HTML up to the H2.
>
> **[2:54](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=174)** This can be a little tricky in case the folder structure changes, so I would advise you against it.
>
> **[3:01](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=181)** So let's look at the alternative, that is to find the relative path of this element.
>
> **[3:07](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=187)** In that case, we will find the closest ID or class or name attribute element.
>
> **[3:12](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=192)** Here you can see that is a div with ID main content, which is right above the heading in the hierarchy.
>
> **[3:20](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=200)** So we'll first navigate to the element with ID main content, and then from there, we will navigate to the first heading.
>
> **[3:29](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=209)** Heading back to the code, the xpath for that would look like driver, so I'm going to give the method name that is find element by xpath and, let's specify the xpath here so I know that there is at least two levels in the hierarchy.
>
> **[3:54](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=234)** The star specifies that there can be any number of intermediate levels.
>
> **[3:59](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=239)** After that, I know that my ID is main content.
>
> **[4:08](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=248)** And from here, I navigate to the next hierarchical level, and find the first heading element.
>
> **[4:17](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=257)** So as you can see, we have navigated first to the ID and then from there, gone to the heading element.
>
> **[4:25](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=265)** Following this, we'll just print this variable.
>
> **[4:32](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=272)** The final step is to locate an element by the class name.
>
> **[4:38](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=278)** So as you remember, the function name is find element by class name, and the element that we are looking for has a class name, selenium sponsors.
>
> **[4:56](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=296)** So this will locate the element and let's print it out.
>
> **[5:04](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=304)** To wind things up, we'll close the driver, and with this, our code is ready.
>
> **[5:11](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=311)** Let's save it.
>
> **[5:18](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=318)** I'm going to save it in the working code as challenge two.
>
> **[5:29](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=329)** And let's run it.
>
> **[5:37](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=337)** In the console, you can see the four elements printed out for you.
>
> **[5:42](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=342)** Here we have taken up a challenge where we have located various elements using the ID name and various attributes in Selenium.
>
> **[5:51](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=351)** As we have seen four different ways to do this, so you can use a combination of these, you can use various other methods.
>
> **[5:58](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=358)** And this is very useful when you're starting to automate code and you want to know which element to use.
>
> **[6:04](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=364)** So this is very first step in automation, and let's look at what we can do further from here.

> [!info]- Semantic Content
>
> **CLI Commands:** find (13), python (1)
> **Code Keywords:** let (7), this, (3), function (2), case, (1)
> **UI Navigation:** navigate to (3), open the (2), select the (1), right-click (1)
> **Env Vars:** dom (1), html (1)
> **URLs:** [seleniumhq.org](https://seleniumhq.org) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=0)** - [Instructor] Now that we have looked at how to locate elements using different attributes and different nodes, let's do a small challenge on this and see how far we have gotten with our learning.
>
> **[0:20](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=20)** In this challenge, I have five steps for you, that should take you all of five minutes to do overall.
>
> **[0:29](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=29)** The first step that I want you to do is navigate to the website, [selenium.dev](https://selenium.dev).
>
> **[0:37](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=37)** Let's head over to the site quickly and see what it looks like.
>
> **[0:42](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=42)** This is the official Selenium site, [selenium.dev](https://selenium.dev).
>
> **[0:47](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=47)** On the site, let's do the following.
>
> **[0:52](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=52)** The first thing you have to do is locate an element by id "gsc-iw-id1" and print it out.
>
> **[1:03](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=63)** Then, locate an element by name, "submit" Then locate an element by heading, "Selenium automates browsers. That's it!" using XPath.
>
> **[1:19](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=79)** And lastly, relocate an element with class "selenium-backers", and print it out.
>
> **[1:28](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=88)** It's a pretty simple challenge.
>
> **[1:31](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=91)** How about you go ahead and give it a shot yourself first.
>
> **[1:36](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=96)** In the next video, we will walk through it step by step and see how to solve it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **URLs:** [selenium.dev](https://selenium.dev) (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=0)** - [Instructor] Now that we have seen the challenge that we have taken up, let's take a step by step walk through of how to solve it.
>
> **[0:15](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=15)** To start off, I'm going to open the code editor directly and let's jump right into the first step.
>
> **[0:23](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=23)** As with all our code, I'm going to start off with importing the webdriver from selenium.
>
> **[0:31](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=31)** So from selenium import webdriver and the next thing I'm going to do is create an instance of Firefox using this webdriver with webdriver.Firefox.
>
> **[0:50](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=50)** Now, the first step is to navigate to the selenium official website.
>
> **[0:55](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=55)** So let's use driver.get to do that.
>
> **[1:00](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=60)** And in here, I'm going to get the URL, which is [https://selenium.dev](https://selenium.dev).
>
> **[1:10](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=70)** And with this, we are already done with our first step.
>
> **[1:14](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=74)** The second step is to locate an element by its ID and then print it out.
>
> **[1:20](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=80)** To make the printing out easier.
>
> **[1:23](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=83)** I'm going to create a variable element_id and store the element that we find into this variable.
>
> **[1:34](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=94)** So I'm going to use driver.find_element_by_id method
>
> **[1:43](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=103)** and in here, I'm going to specify the id that I'm searching for, which is gsc-iw-id1.
>
> **[1:53](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=113)** And now that we have found this element, let's print it out using the variable we created.
>
> **[2:01](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=121)** Similarly for element_name which is the third step, we are going to create a variable and use the driver.find_element_by_name method
>
> **[2:18](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=138)** and here we are going to specify the name of the element that we are searching for, which is 'submit.'
>
> **[2:30](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=150)** And then we are going to print out this element using the variable that we created.
>
> **[2:39](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=159)** Here we're already done with more than half of the challenge.
>
> **[2:44](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=164)** I repeat here, we already done with more than half of a challenge.
>
> **[2:50](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=170)** The next step is to find a heading by xpath.
>
> **[2:54](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=174)** At times it can get a little tricky to find the xpath often element.
>
> **[3:00](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=180)** So we are going to head over to the website and see how to do this in a very simple way.
>
> **[3:05](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=185)** So off to the browser we go.
>
> **[3:10](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=190)** I know that this is a heading element so what I will do is select this heading, right click and inspect this element.
>
> **[3:20](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=200)** So here we can see the dome, structure of this element displayed and at the bottom of the page, we can see the hierarchical xpath.
>
> **[3:30](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=210)** There are many ways to find the xpath.
>
> **[3:33](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=213)** One way to do it, would be to use the absolute xpath, which goes right from the HTML element up to the h1 heading element.
>
> **[3:43](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=223)** This can be a little tricky in case the folder structure changes and it would break the entire code.
>
> **[3:52](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=232)** Personally, I would advise against this.
>
> **[3:55](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=235)** The alternative in this case is to use a relative xpath.
>
> **[4:01](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=241)** So what we do in this case is find the closest ID or class or name attribute, which is identifiable and then we navigate from there.
>
> **[4:15](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=255)** Here, you can see that the section element has a class hero homepage.
>
> **[4:22](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=262)** So we shall use that and navigate to the heading element from there.
>
> **[4:28](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=268)** So, now heading back to the code, I'm going to create an element called element_xpath and I'm going to use the driver.find_element_by_xpath method.
>
> **[4:54](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=294)** And here let's type out the xpath.
>
> **[4:58](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=298)** So I remember that there were two hierarchical levels, so I will add two slashes, then we come to a section element and in the section element, we have a class which is equal to hero homepage.
>
> **[5:20](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=320)** From the section element, we want to go to the first heading element.
>
> **[5:26](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=326)** So this is our entire relative xpath.
>
> **[5:31](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=331)** Let's print this out using the variable we created.
>
> **[5:38](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=338)** And the final step is to find an element by its class name.
>
> **[5:44](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=344)** So I'm going to create a variable again and use driver.find_element_by_class_name method
>
> **[5:59](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=359)** and in here, I'm going to specify the class name which is selenium-backers and to complete the last step, we are going to also print out this element.
>
> **[6:22](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=382)** As with all our other programs, to clean up, we close the driver and we're done with this code.
>
> **[6:30](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=390)** So let's go ahead and save this.
>
> **[6:35](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=395)** I will save this in my working code folder on the desktop as Challenge_01 and now let's run this.
>
> **[6:52](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=412)** So let's open the browser and here you can see four elements printed out for you.
>
> **[7:02](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=422)** So this is the code running and completed well, and here we have taken up a challenge where we located various elements using the id, name, and various attributes in selenium.
>
> **[7:18](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=438)** We have seen four different ways to do this but you can use a combination of these and various other available methods.
>
> **[7:28](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=448)** This is very useful when you're starting to automate your code and you want to know which element to use.
>
> **[7:36](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=456)** So, this is the very first step in automation and let's look at what we can do further from here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (3), for, (2), this, (1)
> **CLI Commands:** find (6), make (1)
> **Code Identifiers:** element_id (1), find_element_by_id (1), element_name (1), find_element_by_name (1), element_xpath (1)
> **UI Navigation:** open the (2), navigate to (1), go to (1)
> **Env Vars:** url (1), html (1)
> **Tools:** firefox (2)
> **URLs:** [https://selenium.dev](https://selenium.dev) (1)
> **Definitions:** is a  (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=0)** (soft music)
>
> **[0:05](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=5)** - [Instructor] Now that we have looked at how to locate elements using different attributes and different nodes, let's do a small challenge on this and see how far we have gotten with our learning.
>
> **[0:19](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=19)** In this challenge, I have five steps for you that should take you all five minutes to do overall.
>
> **[0:26](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=26)** The first step that I want you to do is go to the Python website, [python.org](https://python.org).
>
> **[0:32](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=32)** Let's head over to the site quickly and see what it looks like.
>
> **[0:37](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=37)** This is the official Python site, [python.org](https://python.org).
>
> **[0:42](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=42)** On this site, let's do the following: The first thing you have to do is locate an element by id "submit" and print it out.
>
> **[0:51](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=51)** Then locate an element by name "submit" and print it out.
>
> **[0:57](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=57)** Following this, locate the Python logo image in the top header by XPath and print it.
>
> **[1:05](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=65)** And lastly, locate an element by class "search-button" and print it out.
>
> **[1:11](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=71)** It's a pretty simple challenge.
>
> **[1:14](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=74)** How about you go ahead and give it a shot yourself first.
>
> **[1:19](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=79)** In the next video, we will walk through it step by step and see how to solve it.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5)
> **Code Keywords:** let (3), this, (1)
> **URLs:** [python.org](https://python.org) (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=0)** - [Instructor] Now that we have seen the challenge that we have taken up, let's take a step by step walkthrough of how to solve it.
>
> **[0:10](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=10)** To start off, I'm going to open the code editor directly and let's jump right into the first step.
>
> **[0:18](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=18)** As with all our code, I'm going to start off with importing the web driver from Selenium.
>
> **[0:25](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=25)** So from Selenium import web driver.
>
> **[0:35](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=35)** The next thing I'm going to do is create an instance of Firefox using the web driver with webdriver.firefox
>
> **[0:52](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=52)** The first step is to navigate to the official Python website.
>
> **[0:56](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=56)** So let's use driver.get to do that, and in here I type the URL that we want to navigate to, which is https www.[python.org](https://python.org).
>
> **[1:16](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=76)** And with this, we are already done with our first step.
>
> **[1:21](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=81)** The second step is to locate an element by its id and print it out.
>
> **[1:27](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=87)** To make the printing out easier, I'm going to create a variable element id and we are going to store the element that we find into this variable.
>
> **[1:40](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=100)** So I use the driver dot find element by id method, and in here we are going to specify the id that we are searching for, which is submit.
>
> **[1:56](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=116)** And let's print out this element using the variable that we created.
>
> **[2:03](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=123)** Similarly for element name, which is the third step, I'm going to create a variable and use the driver dot find element by name method.
>
> **[2:19](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=139)** And in here we are going to specify the name we are searching for, which is also submit.
>
> **[2:27](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=147)** And let's print out this element here.
>
> **[2:33](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=153)** We're already done with more than half the challenge.
>
> **[2:37](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=157)** The next step is to find an image using XPath.
>
> **[2:42](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=162)** At times it can get a little tricky to find the XPath part of an element.
>
> **[2:50](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=170)** So we are going to head over to the website and see how to do this in a very simple way.
>
> **[2:57](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=177)** So off to the browser we go.
>
> **[3:00](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=180)** I know that this is an image element, so I will select this image, right click on the mouse and inspect it.
>
> **[3:11](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=191)** Here we can see the dome structure of the element displayed, and at the bottom we can see the hierarchical XPath as well.
>
> **[3:22](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=202)** I'm going to select this element, right click and copy the XPath.
>
> **[3:29](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=209)** And now let's head back to the code.
>
> **[3:33](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=213)** I'm going to create a variable called Element XPath and use the driver dot find element by XPath method.
>
> **[3:46](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=226)** And in here I'm going to paste the XPath that we copied from the browser and let's print out this element.
>
> **[4:00](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=240)** The final step is to find an element by its class name.
>
> **[4:05](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=245)** So I'm going to create a variable again and use the driver dot find element by class name method.
>
> **[4:20](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=260)** And in here we are going to specify the class name that we are searching for, which is search button.
>
> **[4:29](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=269)** And to complete the step, let's print it out.
>
> **[4:34](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=274)** As with all our other programs, to clean up, we close the driver and we are done with this code.
>
> **[4:43](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=283)** So let's go ahead and save this.
>
> **[4:47](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=287)** I'm going to save it on my desktop in the working code folder as challenge one.
>
> **[4:57](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=297)** And now to the most exciting part, let's run this code.
>
> **[5:04](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=304)** The code opens the web browser and we see four elements printed out here.
>
> **[5:11](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=311)** So this is the completed code running and executed well.
>
> **[5:17](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=317)** In this video, we have taken up a challenge where we located four different elements using the ID, name and various attributes in Selenium.
>
> **[5:30](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=330)** We have seen four different ways to do this, but you can use a combination of these and various other available methods.
>
> **[5:40](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=340)** This is very useful when you're starting to automate your code and you want to know which element to use.
>
> **[5:49](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=349)** This is the very first step in automation, and let's look at what we can do further from here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), for, (3), this, (2), this. (1)
> **CLI Commands:** find (8), python (2), make (1)
> **UI Navigation:** open the (1), navigate to (1), click on (1)
> **Tools:** firefox (2)
> **URLs:** [python.org](https://python.org) (1)
> **Env Vars:** url (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Navigating through Pages

#### Page interaction
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=0)** - [Instructor] So far, we have looked at how to find elements on a web page, however, just landing on a page and locating elements is not enough to automate your web UI.
>
> **[0:12](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=12)** The next step in automation is to interact with the elements on the webpage once they are selected.
>
> **[0:19](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=19)** So let's take a look at interacting with a page as actions would be performed by a user while they are browsing the webpage.
>
> **[0:27](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=27)** So what we will do, is we will use the the code example that we initially looked at and go in detail of it to understand how it's working.
>
> **[0:36](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=36)** So in this code what we're gonna do, is we're going to open the website [Python.org](https://Python.org), locate that search box, enter out text to the search box, and perform the search.
>
> **[0:48](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=48)** So to start out with as with any other Python selenium script, I import the WebDriver.
>
> **[0:56](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=56)** (keyboard clicking) We need another import for entering the keys.
>
> **[1:05](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=65)** (keyboard clicking) So that is common.keys.
>
> **[1:10](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=70)** I'm going to import it as Keys.
>
> **[1:12](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=72)** And we're also going to import the time module, which will help us to pace our module and the entire script so that we can see the actions being performed.
>
> **[1:23](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=83)** So now I'm going to create an instance of my browser.
>
> **[1:27](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=87)** (keyboard clicking) And we're going to open [Python.org](https://Python.org).
>
> **[1:35](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=95)** (keyboard clicking)
>
> **[1:44](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=104)** So with this, we have the site open.
>
> **[1:47](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=107)** Now the next thing that we need to do is locate the search box, so I'm going to name the valuable as search, and I find it by the element name, Q.
>
> **[2:08](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=128)** Now, I have found the element and the next thing to do is to delete any existing text that is there.
>
> **[2:16](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=136)** Search.clear.
>
> **[2:19](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=139)** This will clear out any existing text for me, and there's another function called send keys, which will help me to enter text into the text box.
>
> **[2:31](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=151)** So the keys that I'm going to send is pycon, so this will enter the text into my search box, and following this I need to perform the search.
>
> **[2:43](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=163)** So for this I need to send across and enter.
>
> **[2:48](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=168)** That is a return.
>
> **[2:54](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=174)** Now that I have sent my return, and I want to see the search results, I'll let the browser window pause for four seconds so that we can see the search results and then I'll close the browser.
>
> **[3:09](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=189)** So this is our script ready.
>
> **[3:11](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=191)** Let's save it in the Working Code Folder.
>
> **[3:17](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=197)** And let's run it and see how it goes.
>
> **[3:27](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=207)** So we have opened the browser, we've navigated to [Python.org](https://Python.org), performed the search, and we're waiting, and everything's done here.
>
> **[3:36](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=216)** As you can see, this is how we interact with a webpage on behalf of a user by automating the entire thing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), module (2), this, (1), delete (1), function (1)
> **CLI Commands:** python (4), find (2)
> **Non-Speech:** (keyboard clicking) (4), (clicking) (1)
> **URLs:** [python.org](https://python.org) (3)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Filling forms
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=0)** - [Narrator] So far, we have seen how to send keys to text inputs and text areas.
>
> **[0:06](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=6)** The question at hand is how to deal with other form elements.
>
> **[0:11](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=11)** Selenium comes with a wide toolbox of classes and functions that can help you deal with other form elements.
>
> **[0:18](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=18)** The select class helps you deal with select elements in the form and it also comes with a submit method that works on every element in the form.
>
> **[0:27](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=27)** So, let's go to a code example and see how to use these functions and classes.
>
> **[0:34](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=34)** I'm going to head over to the exercise files folder on the desktop.
>
> **[0:39](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=39)** In the exercise files, I'm going to go to chapter three, second part.
>
> **[0:44](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=44)** I have an HTML code that I'm going to be using as a form for this chapter.
>
> **[0:51](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=51)** So let's run this code and see what the output is.
>
> **[0:54](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=54)** So you can see there's a select element with a variety of values and a submit element.
>
> **[1:01](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=61)** I'm going to to copy the path of this file so that we can use it directly within our code.
>
> **[1:06](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=66)** Now I'm going to head over to IDLE, where I'll open a new file.
>
> **[1:14](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=74)** Let's quickly look at the HTML code once before that.
>
> **[1:18](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=78)** This is the HTML code that we're using as a login form.
>
> **[1:22](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=82)** It has the form element with ID loginForm.
>
> **[1:25](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=85)** Inside this form element, there's a select element with the ID number ReturnSelect, and a variety of options with the visible text and the value.
>
> **[1:37](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=97)** Following the select option, we have an input element which is of type submit, with the name continue and the value submit.
>
> **[1:47](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=107)** So this is a simple HTML form that we're going to use.
>
> **[1:51](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=111)** Now let's head over to IDLE and start with the code right away.
>
> **[1:56](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=116)** I'm going to open a new file and here let's begin with the coding.
>
> **[2:02](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=122)** So, as with any other code, I import the web driver first.
>
> **[2:08](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=128)** Once we have the web driver, I'm going to import the time module so that we can modulate the time and the speed of our script.
>
> **[2:18](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=138)** Lastly, I need to import the select class, so I'm going to go to selenium.webdriver.support.ui and I'm going to import the select class.
>
> **[2:32](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=152)** With this, all our function inputs are done.
>
> **[2:35](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=155)** Let's head over to opening the browser.
>
> **[2:38](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=158)** So I'm opening the Firefox instance and in this instance I will open the file path that I copied.
>
> **[2:49](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=169)** So I'm going to paste the file path, close the parenthesis and the codes, and now I'm going to look at the select class.
>
> **[2:58](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=178)** So, I'm going to create a variable, select, which is an instance of the select class, and here I'm going to find the select element in the form by its name.
>
> **[3:14](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=194)** As you remember from the HTML code, the name of the select element is numReturnSelect.
>
> **[3:21](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=201)** Now I have an instance of the select element created as a select class.
>
> **[3:26](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=206)** There are various ways to select elements: by index, by visible text, and by value.
>
> **[3:33](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=213)** So we're going to look at each of those.
>
> **[3:36](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=216)** Let's first look at selecting an element by its index.
>
> **[3:41](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=221)** So we have a function, select_by_index, where you give an integer value, which is the index of the index of the option that you want to select.
>
> **[3:50](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=230)** I'm going to give a short sleep of two seconds so that we can see the select in action.
>
> **[3:57](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=237)** Next, I'm going to select by visible text.
>
> **[4:01](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=241)** Again, the function name is very intuitive, and here, let's see, I select by visible text 200.
>
> **[4:11](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=251)** I'm going to give a sleep again, so I will copy the sleep and paste it here.
>
> **[4:18](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=258)** The next method of select is by select_by_value.
>
> **[4:24](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=264)** So here, I'm going to select an element by value, 250.
>
> **[4:30](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=270)** We need to place this into quotes.
>
> **[4:35](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=275)** And I'm going to give a sleep, again, of two seconds.
>
> **[4:40](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=280)** With this we have seen the various ways to select options.
>
> **[4:44](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=284)** Also, if you want to print out all the available options, select comes with a function, select.options, which will return an area for all the available options on that select element.
>
> **[5:01](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=301)** Let's print out this area.
>
> **[5:08](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=308)** As we saw in the PPT, there's also submit function that can be invoked on any select element to submit the form.
>
> **[5:16](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=316)** So let's create an instance of the submit button, or locate it, driver.find_element_by_name,
>
> **[5:29](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=329)** and the name of the select element was continue.
>
> **[5:33](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=333)** So here we have located the submit element and I'm going to call this submit function on the select button element, which will submit my form.
>
> **[5:45](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=345)** I'm going to add another sleep here so that we can see the submit in action, and we are going to close the function.
>
> **[5:54](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=354)** With this, our script is ready.
>
> **[5:57](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=357)** Let's save it.
>
> **[5:58](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=358)** I'm going to head over to my working code and save it as code 3, 2.
>
> **[6:10](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=370)** Finally, our code is ready.
>
> **[6:12](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=372)** Let's run it and see it in action.
>
> **[6:17](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=377)** So, we have the Selenium browser open, the first value selected, second value selected, third value selected, and then the form is submitted, as you can see here.
>
> **[6:29](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=389)** Also, the list of all available options is printed out here.
>
> **[6:33](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=393)** So, this way we can deal with various form elements using the powerful add-y of classes and functions that are provided to us by Selenium.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (7), class. (3), continue (2), class, (2)
> **Env Vars:** html (5), idle (2), ppt (1)
> **Code Identifiers:** loginform (1), numreturnselect (1), select_by_index (1), select_by_value (1), find_element_by_name (1)
> **UI Navigation:** go to (3), open the (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Cross-References:** as we saw (1)

#### Drag and drop elements
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=0)** - [Instructor] The sites performing actions such as entering text and filling forms, users also drag and drop elements as part of the UI interaction.
>
> **[0:11](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=11)** The Selenium WebDriver provides classes that enables us to automate the drag and drop actions as well.
>
> **[0:19](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=19)** In the Selenium WebDriver you can drag and drop a source element to a target element and also drag and drop a source element by a specific x-offset and a specific y-offset.
>
> **[0:32](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=32)** Let's take a look at a code example to see how this can be done.
>
> **[0:37](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=37)** Let's open IDE and directly being coding.
>
> **[0:40](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=40)** So I'm going to open a new file and as with any other Selenium code, I'm going to import the webdriver first.
>
> **[0:51](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=51)** Also, I'm going to import the time module in order to modulate the timing of our script.
>
> **[0:58](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=58)** Besides this, I'm also going to import ActionChains which is a class that we'll be using during this program.
>
> **[1:08](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=68)** I'll be explaining the function of ActionChains in a while.
>
> **[1:13](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=73)** So let's begin by creating a driver instance.
>
> **[1:20](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=80)** And we'll open the URL, http [jqueryui.com/droppable](https://jqueryui.com/droppable).
>
> **[1:34](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=94)** This UI has a sample drag and drop interface that we're going to automate and use in this script.
>
> **[1:41](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=101)** Besides this, we also have to switch the frame to the first one so that we can access the drag and drop interface directly.
>
> **[1:54](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=114)** Now we're going to create an ActionChains instance.
>
> **[1:59](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=119)** ActionChains is a class provided by the Selenium WebDriver which enables us to automate actions such as drag and drop, hover, et cetera.
>
> **[2:09](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=129)** So when you add a method to the ActionChains, it is queued and when the perform function is called, these actions are performed as they're added to the queue.
>
> **[2:20](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=140)** To begin coding, we'll first look at our source element by the ID which is draggable.
>
> **[2:32](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=152)** And moving on, we look it at the target element by its ID which is droppable.
>
> **[2:46](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=166)** And now we're going to start off with the ActionChains.
>
> **[2:51](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=171)** So I invoke drag_and_drop_by_offset on the action chain.
>
> **[3:02](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=182)** Here I'm going to say that I want to drag my source element by an x-offset of 100 and a y-offset of 100.
>
> **[3:13](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=193)** And then I'm going to call the perform method to perform or execute these actions by the action chains.
>
> **[3:22](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=202)** I'm going to add a sleep of two seconds so that we can see the action and then we're going to call drag and drop from the source element to the target element.
>
> **[3:37](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=217)** And I'm going to ask action chains to perform this action to me.
>
> **[3:42](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=222)** Again, I'm going to add a sleep of two seconds and then I'm going to close my driver.
>
> **[3:50](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=230)** This small typo between action and chains, I'm going to switch the period to an underscore so that the variable name is right.
>
> **[3:58](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=238)** And now we can go ahead and save this file.
>
> **[4:02](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=242)** I'm going to save it in the Working code folder on the Desktop as code_03_03 and we're ready to run this module.
>
> **[4:19](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=259)** So the site is open.
>
> **[4:21](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=261)** There's a drag and drop by an offset and from the source to the target element as you can see.
>
> **[4:27](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=267)** So in this way we have automated the drag and drop action as it is performed by the user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (2), this, (2), function (2), interface (2)
> **UI Navigation:** drag and drop (10), open the (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** ide (1), url (1)
> **Analogies:** such as (2)
> **Code Identifiers:** drag_and_drop_by_offset (1)
> **URLs:** [jqueryui.com](https://jqueryui.com) (1)
> **Speakers:** - [instructor] (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=0)** (intense whoosh)
>
> **[0:03](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=3)** - [Instructor] So far, we have seen how to perform user actions in an automated way using Selenium WebDriver.
>
> **[0:09](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=9)** So let's take up a small challenge together and perform the same actions.
>
> **[0:15](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=15)** So the challenge is, you have to navigate to this site and you have to perform a search and also change the value for select bar.
>
> **[0:24](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=24)** So I'm going to navigate to the site and show you where what it is to be done.
>
> **[0:30](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=30)** This is the website that you have to navigate to.
>
> **[0:33](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=33)** In the search bar, you perform a search for the text beginner.
>
> **[0:38](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=38)** And in the select bar that we have here, you change the value to raw text.
>
> **[0:45](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=45)** This is a challenge that we're going to do together.
>
> **[0:48](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=48)** In the subsequent video, I will show you my solution for it which is one of the many solutions that we can have here.
>
> **[0:55](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=55)** The entire challenge should take you all of three minutes since it's three simple steps that you have to perform.
>
> **[1:01](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=61)** Let's try this out together and go ahead with it.

> [!info]- Semantic Content
>
> **UI Navigation:** navigate to (3)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=0)** (logo chimes)
>
> **[0:03](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=3)** - [Instructor] Let's take a quick step-by-step walk-through of the solution.
>
> **[0:08](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=8)** As you will see, it's a very short solution.
>
> **[0:11](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=11)** And there are also possibilities of other solutions.
>
> **[0:14](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=14)** This is one of the possible solutions.
>
> **[0:17](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=17)** The very first step that we have to perform is to navigate to this URL.
>
> **[0:22](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=22)** So I'm going to copy this URL, and let's head over to the code editor and begin coding.
>
> **[0:29](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=29)** (keyboard clicks) The very first step for us is to import the web driver.
>
> **[0:35](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=35)** I'm also going to import the time module.
>
> **[0:39](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=39)** Now, let's create a browser instance.
>
> **[0:45](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=45)** webdriver.Firefox.
>
> **[0:48](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=48)** And navigate to the URL.
>
> **[0:51](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=51)** Since we already have the URL copied, I'm just going to paste it here.
>
> **[0:58](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=58)** With this, our very first step is completed.
>
> **[1:01](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=61)** The second step is to look for the search box, locate it, and then enter some text into it for the search.
>
> **[1:10](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=70)** We do not have a locator for the search box as yet.
>
> **[1:14](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=74)** So let's head over to the browser and find a locator first.
>
> **[1:18](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=78)** So let's head over to the browser.
>
> **[1:21](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=81)** This is the search box that we need to work with.
>
> **[1:24](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=84)** So I'm quickly going to inspect it.
>
> **[1:27](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=87)** As you can see, there's an ID for it.
>
> **[1:30](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=90)** So let's copy this ID and find the element using it.
>
> **[1:36](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=96)** I'll create a variable search box, and let's use the find_element_by_id function.
>
> **[1:46](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=106)** Here, I'm quickly going to paste the ID that we copied.
>
> **[1:51](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=111)** With this, we have located our search box.
>
> **[1:55](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=115)** So let's clear it out.
>
> **[2:01](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=121)** Now we need to send the search input to it.
>
> **[2:05](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=125)** So I send_keys, and I give the search text that is big enough.
>
> **[2:15](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=135)** In order to perform this search, I need to send an enter key, so I'm going to give Keys.RETURN.
>
> **[2:27](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=147)** We are quickly going to go to the top and include the import for the keys class.
>
> **[2:33](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=153)** So from selenium.webdriver.common.keys,
>
> **[2:44](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=164)** I import the Keys matter.
>
> **[2:49](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=169)** I have a typo here.
>
> **[2:54](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=174)** And with this, we have our search performed.
>
> **[2:57](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=177)** I'm going to add a quick sleep of five seconds so that we can see our action.
>
> **[3:03](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=183)** The next step is to locate the select box and then change the visible text.
>
> **[3:09](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=189)** So let's head back to the browser and find a locator for the select box.
>
> **[3:15](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=195)** This is the select box that we need to work with, so I'm going to inspect it.
>
> **[3:21](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=201)** As you can see, there's no unique name or ID for it, so we have to result to a last option of using an XPath, so let's copy the XPath, and then head back to our code.
>
> **[3:36](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=216)** So I create a variable select, which is an instance of the select class.
>
> **[3:43](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=223)** Here, I'm going to find the element_by_xpath, and I'll paste the XPath that we copied here.
>
> **[3:56](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=236)** As you can see, this is a completely absolute path.
>
> **[4:00](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=240)** So let's simplify it a bit and make it more relative.
>
> **[4:05](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=245)** I know that there will definitely be two levels.
>
> **[4:08](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=248)** And after that, there are a couple of intermediate levels, which I can represent with an asterisk.
>
> **[4:15](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=255)** And then I know there's a form, a div, and a select.
>
> **[4:19](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=259)** So this is a model relative URL that is much safer to use.
>
> **[4:24](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=264)** Now, I'm going to change the visible text, and I know that the visible text I need is Raw Text.
>
> **[4:38](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=278)** Lastly, I'm going to add a sleep of five seconds so that we have time to see the action.
>
> **[4:45](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=285)** And let's end it by closing the trial.
>
> **[4:48](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=288)** With this, we have our code ready.
>
> **[4:52](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=292)** If you can see, we have used the select class but not imported it, so I'm quickly going to import the select class on top.
>
> **[5:02](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=302)** .webdriver.support.ui import Select.
>
> **[5:10](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=310)** So with this, we have our code all ready.
>
> **[5:13](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=313)** Let's save it.
>
> **[5:16](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=316)** I'm going to head over to the working code folder and save it as challenge three.
>
> **[5:25](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=325)** Now, let's finally run it.
>
> **[5:30](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=330)** So the link is open, the search is performed, and the select text is changed as required.
>
> **[5:39](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=339)** With this, we have completed this challenge together, and good job with it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this, (6), class. (2), module (1), function (1)
> **Env Vars:** url (5), return (1)
> **CLI Commands:** find (4), make (1)
> **Code Identifiers:** find_element_by_id (1), send_keys (1), element_by_xpath (1)
> **UI Navigation:** navigate to (2), go to (1)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Waits

#### What are waits and why do we need them?
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=0)** - [Instructor] Waits are very important when it comes to placing your automation script.
>
> **[0:06](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=6)** Most websites today use asynchronous techniques such as Ajax.
>
> **[0:11](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=11)** When a webpage is loaded by the browser, the elements may be loaded at different time intervals due to this.
>
> **[0:18](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=18)** So elements may take much longer to load as compared to others.
>
> **[0:24](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=24)** This could be something like an image, a video, or any other element that requires more time to load.
>
> **[0:31](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=31)** This poses a problem while locating elements on a page.
>
> **[0:35](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=35)** If an element is not found by a script at that time, an exception is raised and your script will run into an issue and stop.
>
> **[0:47](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=47)** This is where waits come into the picture.
>
> **[0:49](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=49)** Waiting adds a time interval between the actions performed by the WebDriver.
>
> **[0:55](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=55)** That is, it adds a wait between locating elements and performing operations on them.
>
> **[1:00](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=60)** The selenium WebDriver provides two types of waits, explicit and implicit.
>
> **[1:07](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=67)** An explicit wait stops execution until a certain condition is satisfied.
>
> **[1:13](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=73)** An implicit wait on the other hand, polls the DOM for a given amount of time while trying to locate a specific element.
>
> **[1:23](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=83)** Typically waits seem like a very complicated topic, but once you understand the use case of each, it is a very simple topic to code, and also it is very important to understand where to use waits and where not to use waits, and which type of wait to use where.
>
> **[1:40](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=100)** We're going to explore more about waits in the subsequent videos, so let's go ahead and jump right into the topic.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), let (1)
> **Analogies:** such as (1), picture (1)
> **Env Vars:** dom (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Explicit waits
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=0)** - [Instructor] An explicit wait is one where you want your code to pause until a certain condition has been satisfied.
>
> **[0:08](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=8)** Typically in test automation scripts, if you're testing an image and you want to wait for the presence of that image to be loaded, then you will add and explicit wait.
>
> **[0:18](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=18)** In case you do not add an explicit wait there, the image will not be loaded at the right time in your script and an element not found exception will be thrown.
>
> **[0:27](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=27)** So it is always better to add explicit waits when expecting certain elements to take much longer to load than the other elements in the webpage, and you want to wait for those elements because they're essential to your script being able to run.
>
> **[0:41](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=41)** The Selenium WebDriver provides a lot of convenient methods that enable you to add the required explicit waits in your code.
>
> **[0:51](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=51)** A combination of the classes WebDriverWait and ExpectedConditions are used to add explicit waits.
>
> **[0:57](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=57)** These convenient methods could test conditions ranging from the title list to visibility of an element being located to an alert being present, to text being present, and much more.
>
> **[1:12](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=72)** Let's look at how to add explicit waits with an example using code.
>
> **[1:19](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=79)** I'll open a new file.
>
> **[1:23](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=83)** As with any other code, I'm going to first import WebDriver and I'm going to add the rest of the classes that I would need for my explicit waits to work.
>
> **[1:39](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=99)** So the first class that I add is by.
>
> **[1:46](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=106)** We'll be looking at the use cases of these as we write the code.
>
> **[1:50](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=110)** The next class that I add is... (keyboard clicking) WebdriverWait.
>
> **[2:04](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=124)** And lastly, I add the class ExpectedConditions.
>
> **[2:09](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=129)** (keyboard clicking)
>
> **[2:20](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=140)** With this we have our line codes, so let's start with a code.
>
> **[2:26](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=146)** (keyboard clicking) We've created a Firefox instance here.
>
> **[2:33](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=153)** I'm going to navigate to the webpage [python.org](https://python.org).
>
> **[2:37](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=157)** (keyboard clicking)
>
> **[2:45](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=165)** Now that I have navigated to my page, I'm going to test for the presence of an element by ID start shell.
>
> **[2:54](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=174)** So here I'm going to add a wait of 10 seconds.
>
> **[2:57](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=177)** If the element is loaded within 10 seconds, then this script proceeds.
>
> **[3:03](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=183)** In the case that the element is not loaded within 10 seconds a timeout exception is thrown.
>
> **[3:09](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=189)** So in order to handle the exception, I'll add a try.
>
> **[3:14](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=194)** I'm going to create a variable element, which is of type WebDriverWait, and I set a wait of 10 seconds here, and next thing that I add is the condition where I say I want to wait until the expected condition that the presence of the element is located, and here I specify the element that I want to look for.
>
> **[3:46](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=226)** So I give an element which has an ID start-shell, and I close my WebDriverWait.
>
> **[3:57](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=237)** This is required.
>
> **[3:59](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=239)** One of the use cases of this could be that the element with ID start-shell takes much longer to load than the other elements, and we want to test it in our script.
>
> **[4:09](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=249)** So we are going to wait for it to load.
>
> **[4:12](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=252)** Then I close my driver, and finally I save the file and run it.
>
> **[4:19](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=259)** I'm going to save it in the Working Code folder as code_04_02.
>
> **[4:28](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=268)** Let's save this and run the module.
>
> **[4:37](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=277)** Since the element has been found within 10 seconds, the script has not timed out and proceeded to close the driver.
>
> **[4:45](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=285)** In the event that the element would not have been loaded within 10 seconds, the script would have thrown an element not found exception.
>
> **[4:52](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=292)** So here we see how explicit waits are essential to writing scripts, wherein a certain element could take much longer to load than the others.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), try. (1), for. (1), module (1)
> **Non-Speech:** (keyboard clicking) (4)
> **CLI Commands:** python (1)
> **URLs:** [python.org](https://python.org) (1)
> **Tools:** firefox (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### Implicit waits
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=0)** - [Instructor] An implicit wait is one where you want your code to pause for a certain amount of time before every action or every element to be loaded.
>
> **[0:10](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=10)** The typical use case for implicit waits is when you have a slow internet connection and you know that every element in the site will load much slowly than expected.
>
> **[0:21](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=21)** So you add an implicit wait before every call, so once the element is loaded.
>
> **[0:26](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=26)** If the element is loaded within the specified time, then the script moves on.
>
> **[0:32](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=32)** If the element is not loaded within the specified amount of time, then an exception is thrown.
>
> **[0:38](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=38)** The main difference between implicit and explicit waits is that explicit wait, waits for a certain condition only.
>
> **[0:45](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=45)** Implicit wait waits before every call that is made from your script.
>
> **[0:52](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=52)** The waiting time in the case of implicit wait is specified in seconds.
>
> **[0:56](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=56)** Let's look at a small code example to see how implicit waits can be used.
>
> **[1:02](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=62)** And we have a new file here.
>
> **[1:06](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=66)** So I'm going to first import the WebDriver, (keyboard clicking) and I will create a driver instance.
>
> **[1:15](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=75)** (keyboard clicking) I'm going to add implicit wait with the function implicity_wait, and I specify the wait time in seconds as a parameter to this function.
>
> **[1:33](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=93)** This will ensure that every call for every element waits for at least ten seconds before the script moves on.
>
> **[1:41](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=101)** If it is not loaded within ten sections, then an exception is thrown.
>
> **[1:47](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=107)** After this, I load my site.
>
> **[1:52](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=112)** So I'm going to load [python.org](https://python.org).
>
> **[1:55](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=115)** So in this case it would wait for the site itself to load for 10 seconds first, and then I'm just going to specify some dynamic element.
>
> **[2:07](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=127)** So let's say I'm looking for an element with a specific ID, (keyboard clicking) and the ID of the element is start-shell.
>
> **[2:22](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=142)** (keyboard clicking) So here again, first it will wait for the site to be loaded for 10 seconds, and then it will wait for the element to load for ten seconds.
>
> **[2:35](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=155)** If I specify another element, it will wait for 10 seconds, for a maximum of ten seconds before that element to be loaded as well.
>
> **[2:43](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=163)** So our wait is implicitly added before every call.
>
> **[2:47](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=167)** So with this, our script is ready.
>
> **[2:50](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=170)** I'm going to save it in the Working Code folder, as code_04_03, and save it, and let's run this.
>
> **[3:08](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=188)** So our script has run as expected since all the elements as specified loaded in less than 10 seconds, the script successfully ran.
>
> **[3:17](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=197)** This is how implicit waits are used to add a wait before every call of every element to be loaded.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), this, (2), this. (1)
> **Non-Speech:** (keyboard clicking) (4)
> **CLI Commands:** python (1)
> **Code Identifiers:** implicity_wait (1)
> **URLs:** [python.org](https://python.org) (1)
> **Speakers:** - [instructor] (1)


### 6. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/next-steps?u=76281980&t=0)** - [Bhoomika] Are you ready to begin automating your own web UI using Python and Selenium?
>
> **[0:06](https://www.linkedin.com/learning/python-automation-and-testing/next-steps?u=76281980&t=6)** You are now equipped with the understanding of the importance of test automation and how to use Python Selenium.
>
> **[0:14](https://www.linkedin.com/learning/python-automation-and-testing/next-steps?u=76281980&t=14)** In this course, we have seen how to automate step by step, beginning with the understanding of the DOM structure, locating elements, and then moving on to navigating and interacting with pages.
>
> **[0:30](https://www.linkedin.com/learning/python-automation-and-testing/next-steps?u=76281980&t=30)** We have also looked at weights and how to use them.
>
> **[0:34](https://www.linkedin.com/learning/python-automation-and-testing/next-steps?u=76281980&t=34)** More importantly, you must remember that if you run into any roadblocks, the official documentation and the vast online Python developer community is always available to your rescue.
>
> **[0:50](https://www.linkedin.com/learning/python-automation-and-testing/next-steps?u=76281980&t=50)** With this knowledge, you are all set to go with test automation using Python Selenium.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Env Vars:** dom (1)
> **Speakers:** - [bhoomika] (1)


## Instructor

- [[Bhoomika Agarwal]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Test Automation

## Path Context

### In [[Advance Your Skills in Python]]
← [[Python Data Structures and Algorithms]] | **4 of 7** | [[Python GUI Development with Tkinter]] →

## Appears In

- [[Advance Your Skills in Python]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Postman Essential Training]] — Test Automation

---

[↑ Back to top](#)