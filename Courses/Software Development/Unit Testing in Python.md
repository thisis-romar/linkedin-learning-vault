---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: unit-testing-in-python
url: "https://www.linkedin.com/learning/unit-testing-in-python"
duration_minutes: 91
duration: 1h 31m
level: Advanced
updated: 5/10/2024
learners: 11633
skills:
  - Python (Programming Language)
  - Unit Testing
exercise_files: true
github: "https://github.com/coding-geographies/dockerized-pytest-course"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHWDGkTmekVlg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619134209417?e=2147483647&amp;v=beta&amp;t=ZNDO58GhiNdg2mXCnDdbSzvfj65HO68HJoTNx83bPt0"
linkedin_topic: Software Development
learning_paths:
  - '[[Master Your Python Skills]]'
prev_courses:
  - '[[Advanced Python- Practical Database Examples]]'
next_courses:
  - '[[Advanced Python- Working with Databases]]'
path_nav: '[{"path":"Master Your Python Skills","position":7,"total":11,"prev":"Advanced Python- Practical Database Examples","next":"Advanced Python- Working with Databases"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/unit-testing
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Unit%20Testing%20in%20Python.md)

![Unit Testing in Python](https://media.licdn.com/dms/image/v2/C4E0DAQHWDGkTmekVlg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619134209417?e=2147483647&amp;v=beta&amp;t=ZNDO58GhiNdg2mXCnDdbSzvfj65HO68HJoTNx83bPt0)

# Unit Testing in Python

> Unit testing—which involves testing small, isolatable pieces of code—can help you catch and fix bugs before they crop up in your final product. And by adopting test-driven development (TDD) and writing unit tests before production code, you can take even greater responsibility for your project's quality. Curious about how to best approach unit testing in your own Python projects? This course shows

> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python) | 1h 31m | Advanced | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Python unit testing with pytest](#python-unit-testing-with-pytest)
  - [Why pytest?](#why-pytest)
  - [Roadmap](#roadmap)
  - [Exercise files](#exercise-files)
- [**1.  Installation and Setup**](#1-installation-and-setup) (3 videos)
  - [Docker and VS Code (Mac)](#docker-and-vs-code-mac)
  - [Docker and VS Code (PC)](#docker-and-vs-code-pc)
  - [Running pytest with Docker](#running-pytest-with-docker)
- [**2. Overview of Test-Driven Development and Pytest Features**](#2-overview-of-test-driven-development-and-pytest-features) (7 videos)
  - [Overview of TDD](#overview-of-tdd)
  - [Basic tests and assertions](#basic-tests-and-assertions)
  - [Exceptions](#exceptions)
  - [Challenge: Exceptions](#challenge-exceptions)
  - [Solution: Exceptions](#solution-exceptions)
  - [Happy path testing](#happy-path-testing)
  - [Sad path testing](#sad-path-testing)
- [**3. Test Automation with Fixtures and Parametrization**](#3-test-automation-with-fixtures-and-parametrization) (5 videos)
  - [Fixtures to amortize costly operations](#fixtures-to-amortize-costly-operations)
  - [Factory fixtures](#factory-fixtures)
  - [Parametrization](#parametrization)
  - [Challenge: Parametrization](#challenge-parametrization)
  - [Solution: Parameterization](#solution-parameterization)
- [**4. Organizing Your Pytest Project**](#4-organizing-your-pytest-project) (2 videos)
  - [Using Conftest.py for common functions](#using-conftestpy-for-common-functions)
  - [Modularizing conftest.py](#modularizing-conftestpy)
- [**5. Using Pytest with an Existing Project**](#5-using-pytest-with-an-existing-project) (3 videos)
  - [Reading tests to surmise understand behavior](#reading-tests-to-surmise-understand-behavior)
  - [Challenge: Adding test coverage](#challenge-adding-test-coverage)
  - [Solution: Adding test coverage](#solution-adding-test-coverage)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Python unit testing with pytest](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=0)** - As a developer, you're constantly prioritizing what you should focus on and figuring out how today's work fits into those long-term goals. When building and testing [[Python (Programming Language)|Python]] projects from scratch, you may lose sight of this goal as you try to implement too many features at once. When maintaining a Legacy project, you may feel overwhelmed as you find it has too few or no tests. Believe it or not, [[Test-Driven Development]] may be just what you need to organize the path ahead of you. We'll explore that in this course in concert with pytest, a testing framework. I'm Jasmine Omeke, and I'm a software developer working on a [[Big Data]] and analytics platform. I've also contributed to open source projects such as gRPC, [[Apache Airflow]], and pytest. I have learned a lot about prioritization, and I want to talk about that through the lens of pytest. We will focus on pytest and its capabilities. Paired with test-driven development, pytest will help you become more productive as you pragmatically write modular tests. To help you continue practicing your newfound pytest knowledge, I will recommend potential sample projects as we make our way through the course. I'm excited to have you join me, and please let me know what feedback you have.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (2), [[Python (Programming Language)|Python]] (1), [[Big Data]] (1), [[Apache Airflow]] (1)
> **CLI Commands:** python (1), find (1), apache (1), make (1)
> **Code Identifiers:** grpc (1)
> **Analogies:** such as (1)
> **Speakers:** - as (1)

#### [Why pytest?](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=0)** - Pytest has a few critical features that set it apart from other testing frameworks, such as unittest, nose, and doctest. There are many resources that account for the pros and cons between these four frameworks. For our purposes, I'll give you an overview of how they perform in comparison to pytest when used in larger projects with many dependencies. First, the pytest framework allows you to run a standalone test function as its own case, unlike unittest, where you need to put your test into classes and handle class inheritance. This is great because that means it'll be easier for you to define tests and also easier for the next programmer to come along and maintain your tests. Additionally, pytest has an easy to read syntax, allowing you to use the standard assert method in combination with comparison operators to test scenarios in your test functions. Unittest, on the other hand, has over 10 different assertion methods for tests. While they are specific, they have changed in different versions of [[Python (Programming Language)|Python]]. This requires you to keep up with these changes and update your project with the proper method if the old version becomes deprecated. To help you iterate through refactoring in a focused manner, pytest also gives you a powerful command-line interface to control the tests you'd like to run over or even skip with markers. This comes in handy when you are updating a portion of your test and don't want to run the entire test suite as you iterate
>
> **[1:33](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=93)** through a small set of changes. Furthermore, pytest uses fixtures to automate test setup, teardown, and common test scenarios for use in varying scopes. Fixtures also help you share data and code between tests that need common setup functions. The [[Test Automation]] Python provides doesn't stop there. It also comes with a feature called parameterization, which enables you to automate test functions to run over a variety of scenarios in one swoop. This makes pytest a great framework for complex testing scenarios, unlike doctest, which is great for basic tests but it limits your test to doc strings. Lastly, Python is actively maintained. While it may be compelling for you to use nose, another framework, it's no longer actively managed. In comparison, the pytest open source project is actively developed and even you can create issues for others to work on, or submit pull requests to improve the framework. You can read more about pytest when you visit their documentation website for detailed information and walkthroughs for the framework's capabilities. To get to the core of each concept, I will walk you through how to implement it yourself. Toward the end, we will cover how to spot these pytest features in an already set up project. This will be a great skill to have as a developer because you'll inevitably have to maintain projects written by others and refactor them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Test Automation]] (1)
> **CLI Commands:** python (3)
> **Prerequisites:** setup (2), set up (1)
> **Analogies:** such as (1)
> **Speakers:** - pytest (1)

#### [Roadmap](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=0)** - In this course we will focus on how to create and maintain a [[Python (Programming Language)|Python]] project's testing suite with pytest. As we progress we will cover how to use this testing framework as you develop code in a [[Test-Driven Development]] format, also known as TDD. While there are several types of tests such as unit, integration, linting, smoke, and functional tests, we will focus on unit tests that cover the behavior we would like our source code methods to carry out. We'll be covering the basics of the pytest framework's core features, such as assertions, exceptions, fixtures, and parametrization. After that, we'll cover how to modularize common test utility functions with conftest.py. A file that is automatically available to all our tests in our test directory. For the final section, I'll give you an existing pytest project and walk you through how to determine its functionality by looking at the test first. While doing this, we will use TDD to add in new functionality. For this course I will be using a Docker container to run the project, and we'll be using Visual Studio as my interactive development environment, or IDE. For those of you who haven't used Docker, here's a quick rundown. Docker is a platform that allows you to create a container, a predefined environment that we can customize with certain installations. A container's installed packages allow us to run our app, and the container itself runs on the installed Docker engine, which runs on your computer's operating system.
>
> **[1:34](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=94)** Feel free to skip around the videos as needed. If you're new to pytest though, feel free to stick with me from start to finish.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Test-Driven Development]] (1)
> **CLI Commands:** docker (4), python (1)
> **Env Vars:** tdd (2), ide (1)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** such as (2)
> **File Paths:** conftest.py (1)
> **Tools:** visual studio (1)
> **Exercise Files:** source code (1)

#### [Exercise files](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=0)** - [Instructor] The materials for this course are hosted on [github.com](https://github.com). Once you pull up the [[GitHub]] repository, you'll see a green button to the right where you can download the project via SSH or HTTP. If you don't have administrative access to the computer you're using, you can use the HTTPS option to download it on your machine. This is also helpful if you don't have a GitHub account. Once that's downloaded, you can move to open that file. Make sure to move the file to a place on your machine that you can remember. In my case, I'll move it to the desktop. Now, moving back to the repository, I want to point out a few things. We can clear this. This repository is set up for you according to a branch structure. First you'll see that we're on our master branch. Now that we're on the master branch, let's explore. The folder that we're primarily concerned with is our test folder. Here you can navigate to different subdirectories that match the accompanying chapters in this course. Let's go to chapter 2, video 2. Here you'll see a test file. This one is called test_mapmaker_start. This shows you the starting phase for this particular video. All of the other subdirectories are also set up in this format. At the end of the course, if you're curious to see how these files should look in their end state, you can head back to the home page and switch branches. Instead, click final-state-per-chapter. Here, if we go back to our tests,
>
> **[1:34](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=94)** chapter 2, video 2, in this folder, you'll see that file has changed to the name test_mapmaker_end. On this branch, this is the common naming convention that you'll spot, and if you were to run all of the tests, you would be running the end states of each file. You can move to examine the file and you'll see the final state that we need to get this test passing. With that, we can move back to the home page. For this course, again, we're starting off on master. This will be the branch that we'll open up in VS code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3)
> **Tools:** github (3), vs code (1)
> **Env Vars:** ssh (1), http (1), https (1)
> **CLI Commands:** ssh (1), make (1)
> **Code Identifiers:** test_mapmaker_start (1), test_mapmaker_end (1)
> **UI Navigation:** navigate to (1), go to (1)
> **Prerequisites:** set up (2)
> **URLs:** [github.com](https://github.com) (1)


### 1.  Installation and Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [Docker and VS Code (Mac)](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=0)** - [Instructor] Before we delve into the code, there are a few things you need installed. First we'll make sure you have the latest version of Docker Desktop and that it's working. At the time of this recording, these instructions are for MACs running on OS 10.13 or later. Once we do that, we then run a Docker image that will install pertinent packages for us. Like mentioned earlier, Docker runs an engine on your operating system. Once we've installed the software so the engine can begin running, we can then start creating containers with the installations we need to run our application. First you'll need to create or log into your Docker Hub account on hub.[docker.com](https://docker.com). I'm already logged into mine. After you're logged in, move forward to click Get started with Docker Desktop on that web page. From here you can continue to click Download Docker Desktop for Mac. Once this file has finished installing, you can double click it. You'll next see the following prompt to drag the Docker application into your applications folder. Once that's complete, let's double click Docker. It will now ask you if you want to open this, and you should click yes, you do want to open it. So click the Open. And then it will also prompt you that Docker needs privileged access. You should click OK and then supply your password. From here Docker will start up, and we'll need to enter in our user name and password. All right, now we're logged in,
>
> **[1:33](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=93)** and we should wait for the Docker Desktop to continue starting. And now we can see it's up and running. And that's it. Now you have Docker installed. Next, we'll move on to our VS code installation. You can go back to your browser, and go to code.[visualstudio.com](https://visualstudio.com). Here you can download Visual Studio for Mac. On my browser, you can see an auto-installed at the top. If that doesn't occur, you can click download, and then go back to clicking this again. So now that it's downloaded, we can double click it. And it will ask us a similar prompt as Docker had. Do you want to open this? We can click Open. And there we go, Visual Studio is up and running.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (14), make (1)
> **Tools:** docker desktop (4), visual studio (2), vs code (1)
> **Prerequisites:** make sure you have (1), install (1), you'll need (1)
> **URLs:** [docker.com](https://docker.com) (1), [visualstudio.com](https://visualstudio.com) (1)
> **Cross-References:** go back to (2)
> **Versions:** 10.13 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Docker and VS Code (PC)](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=0)** - [Instructor] Before we delve into the code, there are a few things you need installed. First, we'll make sure we have the latest version of Docker Desktop and that it's working. At the time of this recording, these instructions are for [[Windows]] PCs running on the 10 Pro 64-bit version. Once we do that, we then will run a Docker image that will install pertinent packages for us. Like I mentioned earlier, Docker runs an engine on your operating system. Once we've installed the software so the engine can begin running, we can then start creating containers with the installations we need to run our application. First, you need to create or log into your Docker Hub account on hub.[docker.com](https://docker.com). I've already logged into mine. After you're logged in, move forward to the installation page under Get started with Docker Desktop. Here you'll be taken to the subsequent page where you can continue the download by clicking this blue button saying Download Docker Desktop for Windows. It will then proceed to download the executable. After it's finished, you can click on the executable file. Once you see the system prompt, you should click, yes, you want to allow the app to make changes to your device. After you've clicked yes, you will see this following screen. For our configuration, we want to add the shortcut to our desktop. We don't need to worry about the second one at this point. When we run [[Python (Programming Language)|Python]] in later videos we'll be using [[Linux]] containers and we don't need to worry about Windows containers. All right, looks like our installation has succeeded.
>
> **[1:38](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=98)** Now that my installation is complete, I can double click on Docker Desktop. At this point, you'll see the following prompt. For this system, Hyper-V is not enabled and Docker wants us to enable it so that it can work properly. You may or may not see this on your computer depending on your configuration. For us, we do want this computer to restart if you see this popup. Now that we're back from the restart, let's install our interactive development environment. During this course, we'll be using Visual Studio Code an IDE also known as VS Code. Within VS Code, we can open the terminal, which we will use to run our pytest tests. If you already have Visual Studio installed, feel free to continue. Otherwise, stick around for the installation instructions if you want to follow along with me. So our first step should be to click on the Windows icon here so we can install the appropriate version. On your screen it should automatically download the executable file and then we can double click it here. After we've clicked our executable, we will now see this license agreement, which we can accept, we'll continue to click next, here on the select destination location prompt you can also click next, same for this following page. And then here we want to keep this configuration. We may also want to create a desktop icon so we can easily get to VS Code, but after that we can click next
>
> **[3:11](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=191)** and then we can finally install. After that, you've finished installing VS Code. Let's click Finish to launch it. Now that we've installed VS Code and Docker, let's make sure our setup is in order. We'll first begin by opening the folder to our exercise files. I've saved it on my desktop, but please navigate to the appropriate location on your computer. After you've opened the file, you should be able to see it on the far left in the navigation pane. Next, what we'll do here to make sure that Docker is in sync with VS Code, we'll click View and then Terminal. It was already opened for me, but you might not see this when you open your VS Code. Since we've already opened our project location, we should see it down here. If not, in the Terminal please use cd to navigate to the appropriate location. Before we do any Docker commands here, what I first want to check is that Docker has access to my C drive, which is where I've saved this file. I can go down into my toolbar and click Docker Desktop. I can see that it's running and I can click settings. Here, move to the shared drives location. Make sure you've checked the drive that you're using, in my case it's C. Next you can click Apply. After you've done that, you can exit out of this settings pane.
>
> **[4:45](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=285)** Moving back to VS Code, we can go to our Terminal to run the following commands. The first one is docker-[[Jetpack Compose|compose]] build. This command will build the configuration needed for our project. Since I've previously built it before, it was pretty quick, but it might take more time on your computer. You can now substitute the hyphen in docker-compose with a space. Read this [[GitHub]] issue for more information. Next, we want to actually run the environment that we've built. We can type docker-compose run test sh. After running this, this should open the environment where we will be running our pytest test in. After doing that, you should see the hashtag, here we can type the command pytest. Here you should be able to see that the pytest tests have run. Now that we've been able to open our project in VS Code and run Docker commands, we can see that our setup is good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Jetpack Compose|Compose]] (3), [[Python (Programming Language)|Python]] (1), [[Linux]] (1), [[GitHub]] (1)
> **CLI Commands:** docker (18), make (5), python (1), cd (1)
> **Tools:** vs code (9), docker desktop (5), terminal (4), visual studio (2), github (1)
> **UI Navigation:** click on (3), open the (2), navigate to (1), go to (1)
> **Prerequisites:** install (4), setup (2)
> **Exercise Files:** download the (1), exercise files (1)
> **URLs:** [docker.com](https://docker.com) (1)
> **Env Vars:** ide (1)

#### [Running pytest with Docker](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=0)** - [Instructor] Let's make sure VS Code is setup correctly to run Pytest and Docker. From VS Code, you can open the project repository. And from here, we've saved our project to the desktop, but for you, if you saved it elsewhere, navigate to that location. Right here, what I'll do is I'll click that folder and go no further, and we'll double click and then hit open. And you can examine the project structure on the left navigation pane, we see our scripts, folder, tests, and then you'll also notice the Docker file. So let's open this up. Now, this Docker file contains a few different things, but let me explain it first. This Docker file will enable us to run our code within a Docker container, that will act almost like a virtual machine. It will install all the packages we need and allow your test setup to be just like mine without needing to change your underlying system's configuration. All the code we execute, occurs in the Docker container. You can think of this script like a recipe for creating our code environment, called a container. For this course, we'll be running [[Python (Programming Language)|Python]] 3.7 and you'll see here on this file it's using a test-requirements.txt. What it's doing here is it's copying this file into our container and then it'll run pip install over all of those test requirements. Let's open up that file. Here, we can see it's referencing different libraries that are being installed. For now, the most important one is Pytest. We're installing it to version 5.2.0. As we move further into our testing,
>
> **[1:32](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=92)** we'll explore some of these other packages as they play a role in our testing workflow. After you've examined these files, let's open our terminal. We can do that by clicking view and then terminal. And since we've already opened our file and you see it on the left, the terminal will also go to that location. If that hasn't happened, you can use cd to go to wherever you may have saved that, be that in, you know, downloads, or some other location. Let's build our project and open the container shell, which will let us run commands. We can do so by running the following. The first one will be docker-[[Jetpack Compose|compose]] build and what this is doing is it's basically kind of taking that recipe that we built up in the Docker file and just creating our container environment. Now that that's built, we can run our next command, docker-compose run test sh. And what this will do, it'll open the container. From here, we can type Pytest and this will run all of our tests. That command ran all of our existing tests. If we want to run a certain test, we can run this special command. What I'll do here is just cherry pick a test that we'll look into a little bit later. So we can use pytest -k, which is the keyword argument, and we can run any test that matches our keyword arguments. So let's say, I think you can see here, we have like a fitness log, so we can run our fitness log and what Pytest will do, it'll collect all the tests for that certain keyword. If you ever need help, you can also type pytest -h,
>
> **[3:10](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=190)** this will give you information about all the different capabilities Pytest may have if you have any questions. To exit the shell, on the same line, we can click exit. And we're back into our project directory. Now that we've validated that VS Code is set up and we can run our Docker commands, we should be good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** docker (10), make (1), python (1), pip (1), cd (1)
> **Tools:** vs code (3), terminal (3)
> **UI Navigation:** open the (3), go to (2), navigate to (1)
> **Prerequisites:** setup (2), install (2), set up (1)
> **Versions:** python 3 (1), version 5 (1), 2.0 (1)
> **File Paths:** test-requirements.txt (1)
> **Analogies:** just like (1)


### 2. Overview of Test-Driven Development and Pytest Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of TDD](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=0)** - Before moving to our exercises, I want to take a step back to explain how [[Test-Driven Development]] relates to [[Unit Testing]]. As we move through this section we will primarily use the lens of test-driven development to implement functionality in the source code and write accompanying tests. To guide how we use test-driven development, it's important to first think about what behaviors we want our system to execute, even before we implement it in code. Test-driven development is a [[Software Development]] process that can be used while writing unit tests. Using this method of writing software at the start, influences how the developer writes modular tests that will illustrate what features their system will carry out. First, the developer writes a test that will surely fail without code to implement its behavior. This is also known as being in a red failure state. Then the developer must make sure it eventually passes by writing the minimum implementation code needed to get this test passing. Once that's been done, this test, along with the [[Representational State Transfer (REST)|rest]] of the tests should be run to make sure the entire project is in a passing state. If the new implementation code has caused other tests to fail, then the developer needs to refactor as necessary. After all needed factoring is complete the tests are now in a green, or passing state. This shortens the development cycle, influencing the developer to focus on functionality in small pieces on the forefront. It's their job to iteratively stitch these pieces together to get a final system. Additionally, when behaviors are clearly defined
>
> **[1:34](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=94)** during the development process, the developer can think about ways they might extend the project to include new features in the future. As such, new code written down the line can be structured to potentially build off of or reuse existing behaviors. This helps the developer avoid being overwhelmed by the desire to implement all the core functionality at once. Instead, they can focus on gradually adding features as they go. Using test-driven development with behaviors in mind also facilitates code reuse in the broader community. Think about it like this, if you downloaded another developer's project that promised to solve a huge problem you had, you'd expect to make use of the functionality they promised. However, if you ran their code and encountered errors, you most likely avoid using their projects and search for another solution. To avoid a situation like this ourselves, it's important to communicate behaviors explicitly as you develop, verifying that those behaviors are indeed occurring. We will use the test-driven development method of writing tests strategically within this course with behaviors in mind. As we do this, we will cover basic debugging tips and tricks that will help us navigate the refactoring process as we attempt to get our test passing again, or in the green.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (6), [[Unit Testing]] (1), [[Software Development]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), known as (1)
> **Exercise Files:** source code (1)
> **Speakers:** - before (1)

#### [Basic tests and assertions](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=0)** - [Instructor] [[Test-Driven Development]] is one of many tools you can use when developing code. We'll use it in the beginning, but the majority of this course will cover [[Python (Programming Language)|Python]] testing with pytest more closely. And you may notice that's depart from test-driven development from time to time. The shift in focus is just like you would at work: using many tools to get the job done. Now, let's move to the code. I'll be using a Mac for the remainder of this course. Your experience should be similar on [[Windows]] since we're using Docker containers to run our tests. Let's start to define behaviors we want our code to execute. In VS Code, we'll start by opening the Exercise folder. Once we've done that, you should see the project in the left navigation pane. Let's start by opening up two files. The first one will be in the scripts folder, under chp2, video2. It's called mapmaker_start. The next file is under the tests folder. It's under, also chp2, video2, and it's called test_mapmaker_start. It may be handy to split the screen, so that you could see both of these at the same time. I'm going to select Split Left, so I have the test_mapmaker on one side and then my mapmaker_start on the other. You may see that VS Code also opens the test file here, but you can close it. While setting up these two files, you might see that VS Code prompts you to install the Python extension.
>
> **[1:33](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=93)** We can disregard this. Since we're running our tests in Docker, it will take care of all the Python package installations we need. In essence, this is what makes Docker great. You don't need to change your underlying configuration to run tests. Next, we'll want to open the terminal window. You can do that by going to View, and Terminal. It will open in the bottom section of your editor. If you've already built the project with the docker-[[Jetpack Compose|compose]] build command, you can proceed to run docker-compose run test sh to enter the shell that allows us to run pytest in the Docker container. Once you see the hashtag, that means we're in the Docker container and we're ready to run our pytest commands. To get started, let's run the test file that we have to the left. We can do this by writing pytest down here. Make sure we spell it right. We can use our keyword args to then run this file specifically, so we can use a keyword like, let's say map, which is a portion of that file name and that will allow pytest to automatically pick up this particular test to run. As we see here, pytest has run our test and at this point, it's passed. It's not really doing anything. Let's move to start writing this test and get it into a red state first where we'll introduce what functionality we want our source code to the right to implement. Before doing that, let's clear our output in the terminal. For this example, we will define a module to create points that consist of a city name, its latitude and longitude coordinates. Let's start by creating a point in our test to verify.
>
> **[3:06](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=186)** We import our source code as expected. At this point, the test should fail after we do that. To get started, let's change this pass portion to p1. This will be our first point and we want to instantiate it to be a part of the Point class, so it will be an at, like a point. Let's save. Once we've done that, we can go back to our terminal and run the pytest command as we had before. So again, that's pytest -k and then map. So we're picking up that keyword argument. Aha, we have one error. Right here, you can see NameError, name Point is not defined. This indicates that the test can't find the Point module to create the Point. In our red/green development cycle, we're currently in the red phase and need to fix this error. We can make our test pass or in other words, go green, by actually importing the source code. Let's do that. At the top of our file, what we need to do is import the file to the right. So we can do that by typing the keyword from and then the path to that file, which in our case, is scripts.chp2.video2, and then, we need the file itself, mapmaker_start, and then we import the actual class that we're using, which is Point. You may notice that VS Code attempts to autocomplete it for you. Now that we've done that, let's run our test again and make sure to save before you run it in the terminal. If we examine our terminal,
>
> **[4:40](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=280)** on this first line, we see that our test_make_one_point has passed. However, you'll see a few Pyflake's failures. This is because pytest runs linting checks before running the unit test. It catches that our p1 variable, while successfully assigned to the instantiation of the Point class, is not used in any test. You'll see that right here where it says UnusedVariable. This is one of Pyflake's default linting rules. We can fix this as we move back to our test. Before we do that, let's clear our output. Moving back to our tests, let's refactor it to actually make use of the Point class. Remember those behaviors we mentioned before? We should be able to give a point a city name and also assign it a longitude and latitude. After that, we can then assert that it has the qualities we have assigned to it. To get started, let's just do that. We're going to add a name. In our case, we'll call the city Dakar, and then we're going to give it coordinates of 14.7167, and then its longitude should be 17.4677. Next, we want to assert that this Point actually has the latitude and longitude that we've assigned to it. Let's make up a function. In our case, maybe, you know, we can call it get_lat_long. This function should return to us those two points that we've set up before. Let's say it brings back a tuple, would bring us back that 14.7167
>
> **[6:16](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=376)** and that again, that longitude that we set up, and once we've done that, we have a functioning test. Let's get rid of this whitespace. Our linter will pick up that there's whitespace at the end of the file and it doesn't like that. Let's save, and then overall, we expect this test to not pass. As you can see in the code to the right, we haven't implemented this in our Point class, but this is a great start for us to get our functionality all down on paper. To run our tests and see our expected failure, again, we can run pytests with our keyword flag and then simply put map. Aha, and we see here, test_make_one_point has failed and it's because the Point class takes no arguments and we can fix that quite simply by going to the source code. In our source code, we want to do two things. First, we need an init function. This will allow the Point class to take three arguments, which in our case, is the city name, latitude and longitude. Next, we want to create that function that we talked about on the left, get_lat_long. This should return to us, the lat and the longitude that we pass to the Point in the first place. Let's get started. If we move down to the pass, we can remove this. This was a great way to get the test to pick up the source code, being an empty class, but we want to fill our class now, so we'll start by creating our first function, which is at an init function. In order to make use of this function, first we have to pass itself, a name argument, latitude, and then also longitude.
>
> **[7:55](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=475)** Now that we've done that, in order to make the Point class access each argument as a part of its class instance, we can do this as follows. We'll create an argument for the class name name and what it'll do is pick up the name, argument that we've passed. We'll also do the same for longitude and latitude. Additionally, if we want to make sure that these instance objects are not accessible to the average user, we should go back and put an underscore in front of each one. After we've done this, we can move on to that next function. That was our def get_lat_long. This function doesn't need to have any arguments. It only needs to refer to the class instance. Next, we want this function to simply return the latitude and the longitude. Additionally, we want to do this in a tuple format, so we'll create our tuple here. We should return our latitude and our longitude. Make sure we save this. After we've added this functionality, let's run our tests. First, let's clear our output. We want to run a fresh pytest run. Oh wait, I spotted one error. Let's fix this before proceeding. Moving back to our Point class, let's make sure that we're actually returning the class instantiation
>
> **[9:29](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=569)** of latitude and longitude. We can do this by appending self for each. After we've done that, let's save our file, and we'll move back to our terminal to run this test. Again, we can type pytest with our keyword flag, and then map to run the test on the left. It looks like our test_make_one_point has passed. The last thing we need to deal with are a few PEP8 failures. Over two errors, the first one expects that there be two blank lines in front of our test_make_one_point function. The next one expects a blank line at the end of the file. However, we can see that the file to the left has no blank line. This indicates to me that there might be a disconnect between the container and the VS Code configuration. We can get by this for this video by adding a blank line to the end of this file. This is how we'll handle this minor bug for this course. However, in your own testing environment, this shouldn't be something you need to do. The first thing I'll do is add that extra blank line that we need in front of our test function. The next thing I'll do is go to the bottom of our file and add another blank line, making sure to remove any whitespace proceeding it. Make sure to save that file and then we'll move back to our terminal and run pytest -k and then map. Aha. We can see here that our test_make_one_point has passed and so are the linting tests. We're now in a green state. Now, you've iterated
>
> **[11:02](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=662)** through the red/green development process, a part of test-driven development. This type of iteration will help us keep in mind what types of core functionality we want to include in our source code. It will also help us isolate and fix potential errors in small chunks, rather than writing our code in large sweeps. This helps us avoid the need to tackle multiple types of errors at once.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (3), [[Python (Programming Language)|Python]] (3), [[Jetpack Compose|Compose]] (2), [[Windows]] (1)
> **CLI Commands:** make (11), docker (7), python (3), find (1)
> **Code Identifiers:** test_make_one_point (5), mapmaker_start (3), get_lat_long (3), test_mapmaker_start (1), test_mapmaker (1)
> **Tools:** terminal (8), vs code (5)
> **Exercise Files:** source code (7)
> **Versions:** 14.7167 (2), 17.4677 (1)
> **Cross-References:** go back to (1), we mentioned (1), we talked about (1)
> **Definitions:** is a  (2), in other words (1)

#### [Exceptions](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=0)** - [Instructor] Like mentioned earlier, in test driven [[Python (Programming Language)|Python]], we want to think about behaviors including unwanted behaviors. In our case, our program should validate its inputs, output results, and actions to be performed. If any of the aforementioned are unexpected, we have two choices. We can make our system explicitly raise an exception so it avoids completing the wrong behavior. This spares your intended end user from encountering errors and avoids malfunctions that could degrade the larger system itself. In other cases, we may want the system to continue code execution while avoiding the unwanted behavior. In this case, the system would log that it didn't complete an action to the user, and continue running. In our case, we will opt for the former, and explicitly raise an exception. To indicate that an exception is to be expected in pytest, you must use a context manager like so. Here, in this test, we can see on lines 10 and 11 this comment that includes the pytest context manager. In pytest, you can use the context manager to capture an exception which you can see on line 11. Manually here, we're raising a generic exception, and for pytest, if this context manager is able to raise an exception, the test will subsequently pass. If the context manager does not catch an exception then the test will fail. Let's try using this by adding validation capabilities to our point class. We want our user to only be able to create latitude coordinates that are either more than or equal to -90
>
> **[1:33](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=93)** or less than or equal to 90. For our longitude coordinate, we want our user to create points that are either more than or equal to -180 or less than or equal to 180. To catch given coordinates that are beyond these ranges, we can use our context manager to isolate the unwanted behavior and communicate the expectation that an exception should be explicitly raised. If the context manager catches such an error, the test will pass when we run pytest. Let's begin by editing our test. I'm going to adjust the terminal window slightly. First, we need to import pytest to make use of the context manager. Then, we can move to the test called test_invalid_point_generation. On line 13, we can remove the pass keyword, which we needed as a placeholder while the test was not in use. We'll also uncomment the context manager. We'll move forward to make use of our context manager by first instantiating a point. For this section, we don't need to assign it to a variable. And we'll first give it a city name, a latitude, and a longitude. I'll choose a city I've been really wanting to go to, Buenos Aires. Next, we'll give it a latitude. For this, we'll make it valid. For the longitude value, we'll give it something that violates the rules that we set out. Let's say this is -555 which is less than 180, which we don't want. And then give it just a realistic format.
>
> **[3:08](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=188)** After we've done this, let's try running our test. Just like before, we can run pytest -k but instead let's use a new keyword. For this test, it's called test exception start. We can just say pytest -k except. We'll see that this has failed because no exception has been raised. We will need to edit our source code in order to raise an exception. Let's do that. In our case, we want to add conditional statements to the init method to check the parameters given when a point is initialized. First, we'll check the validity of the latitude parameter, and also our longitude parameter. If either don't adhere to the rule we created, it will throw a value error. With this error, we want to also define a custom message. Moving to the terminal, we can run our test again, and this time we should see an exception was raised. Here, if we scroll up a little bit in our terminal, we should see that our test indeed passed. We have a few linting errors that we can fix. The first thing we can do is remove the white space. We do that first from line 14, and then remove the white space from the final line, 13. You'll also see the error saying that local variable exp is assigned to,
>
> **[4:42](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=282)** but never used. We can make use of this variable in a few different ways. The first one is to examine what the error message is. As you can see on the right, we set a very clear error message, and we can make sure that when we raise an exception that it indeed returns the error message we expect. If you've never handled this exception object before, you can examine it as you run your test. We'll do this by going back in and adding in a break point. We specifically unindented, so it's not within the context manager because the messages return after the context manager exits. Once we save this, we should go back to pytest. In this state, let's examine what variables are available to us in the debugging session by running the following. {k: v for k,v in locals().items() if '__' not in k and 'pdb' not in k}. I spot one small error, if we go back. We have to make sure that we pass parenthesis to items. This brings back a dictionary of all the variables available during the test run. As we can see here, the variable exp that we set earlier is down below. In order to see how we can access this object, we can use dir, a function to examine variables on exp and we can see there are a lot of possible methods
>
> **[6:14](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=374)** associated with this variable. Because the exp variable is an exception info object, we can use the value function to return the value of our message. We can do that by typing exp.value. And here, we can see, ValueError invalid latitude longitude combination. Moving forward, we don't want the value error object, we only want its string representation. To do so, we can type str(exp.value) and then right there we return it straight in the debugger. We can add this to the test as follows. We can first remove our usage of the breakpoint, and instead assert that str(exp.value) =
>
> **[7:05](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=425)** 'Invalid latitude, longitude combination'. Additionally, since we know this is a ValueError, we can remove the generic exception on line 11, and replace that with ValueError. Make sure to save your file, and we'll move back down to the terminal. Exit from the debugger, we'll clear our session one more time, and then run pytest with our keyword argument. And now we can see that our test has been successful. Creating exceptions like this help us validate objects we create and test to make sure that they adhere to our desired functionality. We test this in order to make sure that unwanted behavior throws an exception under the right conditions and includes the right messaging. Down the line, if source code changes, and the exception is no long thrown, pytest will raise an error, alerting you that the exception is no longer catching unwanted behavior. This alert can help us navigate how to refactor our code further or catch new additions that may have caused old tests to no longer pass.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (10), python (1)
> **Tools:** terminal (4)
> **UI Navigation:** go to (1), scroll up (1)
> **Exercise Files:** source code (2)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** test_invalid_point_generation (1)
> **Cross-References:** go back to (1)

#### [Challenge: Exceptions](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=0)** - [Instructor] Now that we can raise an exception for improper latitude and longitude coordinates, how about trying to create another exception? We want the user to supply a city name that can only be a string object. If they don't do this, we should throw an error if another data type is provided. Make sure to begin writing from the test, then run pytest to spot the test failure. After doing so, you can write the accompanying source code to make the test pass. One special note. In the original code, we expected a value error to be raised or a type error would be more appropriate. Here's one hint. Try adding validation logic to the instantiation method of the point class. Remember that you can add in the built-in breakpoint function so that you can examine the current variables and objects that you're able to access during your test run. This challenge should take you about five minutes. Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Exercise Files:** source code (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Exceptions](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=0)** - [Instructor] Here's one manner of completing this challenge. We can begin by adding an invalid point whose name will be five instead of a standard string. You can see this on line 16. Since we want to create an isolated test that only checks the validity of the city name argument, let's give a valid latitude and longitude coordinate. When you run pytest, you should see an error at this point because we don't have a matching source code function to trigger this error. When moving to update it, you could have done so as follows: expanding the window with our source code, we can see the following: we can check if the name is a string instance during the initialization of the point and its init method. You can opt to either use is instance or type methods to make this validation. In my case, I chose to use is instance. If this function returns false, we want to raise a value error. Additionally, if we don't trigger a value error, we can move on to assigning our name argument to our class instantiation of name. Once we've done this, we can rerun pytest, and our test should pass. As we've seen, exception testing is a great way to define unwanted behaviors and make sure your code handles them appropriately. Next, we will tie this into how we structure expected positive and unexpected negative case testing into our test suite. For more practice, try creating a map class. This class should assemble points you've created into a data structure.
>
> **[1:35](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=95)** Create one test to make sure the map has the appropriate points, and create another test to raise an exception if you assert the map has a point it has not previously stored.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (2)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Happy path testing](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=0)** - [Instructor] Now that you've seen how to test for expected and unexpected behavior with assertions and exceptions, we should begin thinking about how to structure out test in a way that helps us show which behaviors are intended, and which unexpected ones our system should guard against. This will help you and other developers gain a clear idea of what behaviors your system should carry out. It will also help you focus on creating code that is straightforward to use since you'll be the first person utilizing it in your test. While it may be tempting to lump both tests to show how positive and negative behaviors are handled into the same test function, we should separate this logic. We can do this by creating one test function that displays a happy path test for positive test behaviors. A separate function should show the function sad path for negative case that we'd like to validate against. Either guarding against it by halting the flow of code execution, in other words throwing an exception, or by gracefully logging that an action could not be taken and continuing code execution. More specifically, sad path test, also know as negative case test, should show how your system validates or raises errors when encountering invalid input data. Let's explore this type of testing in our next example. Parsing, mapping, and aggregating data from file input is a common real life use case you may encounter. In this next example, we have a CSV reader. It can parse a file and return its data.
>
> **[1:34](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=94)** Each row of data will be represented as a dictionary, and for each row, we will convert a few values to float values. Those being the latitude, longitude, and altitude. If we are unable to do such, we'll raise an exception. Moving back to our test, let's examine the test we have so far. We first have a very simple test that checks to make sure the CSV reader parsed the correct headers. The CSV file that we are parsing includes the following headers: Country, City, State or Province, Lat, Long, or Altitude. This serves as a simple happy path test. We are making sure that the CSV reader has completed the behavior we expected and has parsed the right header fields. Let's build out another happy path test together. We can copy the following line from the previous test to get us started. This line is loading our data into a data variable. In a later video, we will check more about the process data function that it's calling. For now, we're using it to call the CSV reader and return our data object as a list of rows. Each row will be represented as a dictionary. Now that we've loaded our data, we want to check that each row within the data has the appropriate data type. Before moving forward, let's add a breakpoint and run pytest -k with a shorter name to our file so that we can examine the structure of our test. If you'd like to open the terminal quickly, you can use the shortcut Control + back tick so it opens up below.
>
> **[3:07](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=187)** Now that the terminal is open, let's run pytest. This time, our keyword argument will be happy, short for test happy path start.py. Here in our debugger, since we've placed the breakpoint right under the instantiation of the data object, we can access it directly. Let's start by checking out its type. We can see that it's a list. Let's look at its first entry. We will now see that the first entry is an ordered dictionary of column information. Since an ordered dictionary in [[Python (Programming Language)|Python]] is accessible, just like a normal dictionary, we can access information about it as such. For this first entry, let's access the country information. We will return the row's entry value for country, which is Andorra. While we don't want to test this hard-coded value, it would be helpful to make sure each row's country entry is a string, and we can try this out in the debugger as follows. The type is instance, we want to access that first object of the dictionary, consult its country entry, and then check if its a string. And here, we can see that it returns true. Now that we understand how to interact with a data object, let's do so in our code. Before moving back to the IDE, let's exit out of Pdb and clear our output. Let's move further down in our test.
>
> **[4:40](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=280)** We first want to iterate through our data object, which is a list. We can do so by saying, for row in data, and then complete operations here. We want to assert whether or not, let's say, our country row is an instance of a string, and we can do so just as we did in our debugger. With a small variation since we're iterating on a row basis. And we can copy this three times. We want to do this, also, for another field in our CSV file. Which is city. Another one, which is state or province. And remember, to the right, we were talking about three fields that we converted to a float. We can use this line, but change it slightly. Instead, this instance will check against whether or not the object is a float, and this time it will check the latitude. Next, we'll check the longitude argument, and then lastly, altitude. Additionally, we can cross-reference our CSV file and make sure the data was transmitted in full by adding the following to our test. We can first assert that the length of our data is equal to 180, and then we can also assert that the first object of our data includes, let's say we have the country of Andorra,
>
> **[6:18](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=378)** which we saw below. And then, lastly, we want to check that the final country listed is the United States. If you're wondering more about the underlying CSV file that we're pulling in to generate this data, you can check it out yourself. Moving to that file, here on the right, I've pulled it up. Here we have our clean_map.csv, and all those headings that I mentioned before are right at the top. If we move back to our test, we're good to go to run pytest. So again, we run pytest with our keyword argument, and you'll see one small issue, we've kept our breakpoint. Let's exit out of this, clear this below, and then we're going to move back up into our source code. After we remove our breakpoint, we can move back into our terminal to run pytest. Examining this one more time, let's see what the failure is. All right, it looks like our test has passed, and we have a few linting checks that we need to take care of. First, let's remove the white space on line 30. In the process, we also removed the extra blank line that was right above line 32, which is now line 31. Let's clear our output and run pytest once more. And now, our code has passed. Practically speaking, if you're making code that reads data
>
> **[7:51](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=471)** from a CSV, we want to validate that input to make sure it's the right kind of information, and if there's a instance that we have malformed data. We can begin to separate expected and unexpected behaviors, and to sad and to happy path tests. This will show others reading your code what the desired and undesired functionality of your project entails.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Env Vars:** csv (9), ide (1)
> **Definitions:** is a  (4), is an  (2), in other words (1), short for (1)
> **CLI Commands:** make (4), python (1)
> **Tools:** terminal (3)
> **File Paths:** start.py (1), clean_map.csv (1)
> **UI Navigation:** open the (1), go to (1)
> **Code Identifiers:** clean_map (1)

#### [Sad path testing](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=0)** - [Instructor] When creating unit tests, we don't want to forget sad path tests, also known as negative case tests. Let's create a sad path test that demonstrates the validation capabilities within the CSV reader on lines 9 through 11. In the resources folder, you'll find a malformed CSV file. This file contains strings in one of the three columns we want to convert to a float. For instance, on line 2 for Cape Verde, you'll see that its altitude value is indeed a string. The same for India on line 3, its latitude value is a value that can't be cast. We can then write a new test that references this malformed file. In this video, we'll primarily show how to create tests that anticipate exceptions or errors. Doing this shares important information you may find while developing with others on your team. Within the example, you'll notice a city_list_location_malformed function. This function is called within our test to supply a CSV path. Above it, you'll see the annotation @pytest.fixture(scope="function"). We won't cover fixture annotations in this video, but we will cover them in depth in Chapter 3. First, we'll pull back up the data processor as a reference. Moving to our test, first, we need to import pytest. Then we want to move to import our data processor. Moving to our test, we want to uncomment line 18.
>
> **[1:37](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=97)** We'll need to wrap this in the exceptions content manager.
>
> **[1:49](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=109)** Let's move to run pytest again. Below, I can see I'm not yet in my docker container. I can fix that by running docker [[Jetpack Compose|compose]] run test sh. Now, let's run pytest. We'll do it as we have before with our keyword argument, but this time, use the keyword sad, short for test sad path start.py. If we look into our output, we can see that our test_csv_reader_malformed_data_contents function passed. We just have a few things to edit in our linter. It says here that the variable exp is assigned but never used. Let's make our test more robust by actually exposing the error message that the data processor brings back. First, I'll clear my contents below, and then we'll move back up into the test. Let's update our test to assert that the caught exception is the message we expect. At this point, we're not quite sure what it might be, so let's just leave a placeholder. When we run our test, we should see the placeholder compare to the actual message. Moving back to the terminal, we'll run pytest again. If we go up and look at our output, we should see that the [[Microsoft Word|word]] unsure was compared to the actual exception message. In our case, the CSV reader to the right is returning, "Could not convert string to float: not_an_altitude." That's the value that we saw for Cape Verde
>
> **[3:24](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=204)** on the second line of the malformed CSV. Let's update our test to have this error message. We can do that by first copying the error message that we see. And then in our test, we can set that in. Let's save our file. And back in our terminal, we can clear our output once more and run pytest. And we can check. It seems I forgot one thing, the last quotation mark. Let's add that back in. Once we've added in that quotation mark, our test should be good to go. If we look at the test results, we can see that our test indeed has passed, we just have a few linting things to edit so that we can get the test fully in the green. To start, going back into the file, let's make sure to add in a space below line 21, and then on line 17, it appears we have extra white space, so let's remove that. Let's make sure to clear our output, and then run pytest once more. And ha, here we have it. Not only has our test gone green, but so has our lint checks. Negative case testing like this highlights unintended functionality that we want our code to guard against. This can help another developer looking through your code base understand the core features of your scripts rather quickly. It can also help them understand
>
> **[4:57](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=297)** what types of CSV files the data processor can read. This helps others using your code be able to use it as your test outline. While this may not guard against all potential negative cases, it can put others on the right track when using your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (3), find (2), docker (2)
> **Env Vars:** csv (6)
> **Definitions:** known as (1), is a  (1), is called (1), short for (1)
> **Code Identifiers:** city_list_location_malformed (1), test_csv_reader_malformed_data_contents (1), not_an_altitude (1)
> **Tools:** terminal (2)
> **Best Practices:** make sure to (2)
> **File Paths:** start.py (1)


### 3. Test Automation with Fixtures and Parametrization

[↑ Back to Table of Contents](#table-of-contents)

#### [Fixtures to amortize costly operations](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=0)** - [Instructor] In the previous chapter, we focused on the basics of testing using [[Test-Driven Development]]. Now we'll walk through existing testing code snippets to highlight how we can effectively use pytest. pytest is a great framework to organize how you test, making it clear for other developers. As you continue setting up your test suite, you may find that you need to test operations that require set up and tear down of network access or a connection of some sort. One example of this may be a database connection. Imagine if several test functions are using a mock database and you're setting up test operations on it. You can implement these functions to use a common database through a fixture to streamline setup and avoid code duplication. Moreover, you can use scoping parameters on a fixture to set up your database, ensuring that it runs once for the entire test session or module instead of setting it up for each test. When using fixtures, we can scope them according to the following four scopes. Here they are displayed from the highest scope, which is our test session, down to the lowest scope, the function level. Using scoping minimizes the number of active fixtures during test runs and may help you avoid adding operations that slow down your entire test suite. This happens because they're invoked for the entire session rather than for each function. In our current code, we have a Happy Path and Sad Path test. The Happy Path test, starting on line five, transforms our data to include population counts
>
> **[1:35](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=95)** for each row of the country data. It appends a new column indicating if the row was updated or not. Looking to the clean_map_csv file, on line two, since the Country of Andorra is indicated in the population dictionary, it would gain an additional population field with the value from the dictionary. After it's been transformed, it will also receive a field updated and that would evaluate to true since it has been updated. On the other hand, the Country Angola on line nine is not indicated in our population dictionary. Its population field would be a non-value. Back in our code, we have a Sad Path test on line 33. Within this test, we make sure that we cannot attempt to transform the data twice on lines 58 through 60. We define the inability to transform data twice in the following script, in our source code, in map_population update.py. It initially loads the data as being untransformed. The state of the transformation is tracked and the updated_population_count function as a true or false value. Then, the add_population function proceeds to either add a population entry to the row or add an null value if none is available in the population dictionary. However, if the row has previously been transformed, this function will raise an exception. You should not be able to transform the data twice.
>
> **[3:10](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=190)** Moving back to the test, you can see we've duplicated quite a bit of code needed to set up both of the functions. The lines 39 to 54 in the Sad Path test are identical to the lines nine to 24 in our Happy Path test. We can streamline our common setup across these functions by moving it into a fixture. We want to be careful to set this fixture scope to the function. Since we are testing that the data can't be transformed twice in the Sad Path test, we don't want the proceedings test transformation to impact it. We want to pay special attention to this when [[Unit Testing]]. We want to avoid having closely coupled tests. I want to show you how we can streamline these tests. I moved over to the branch showing the final state of the project, the final-state-per-chapter branch. And the inversion of this file, text_fixtures_end.py, I've added two fixtures. On line six, we have the map_data_location fixture, which yields the location of the clean_map.csv data once per test session. Next on line 10, the prep_transform_data fixture takes the map_data_location fixture as an argument. On line 25, it then instantiates a map_data object. This object is created using the data loaded on line 24 and a Boolean value of false to indicate that the data has not been transformed previously to include population info. We've also defined our population dictionary here.
>
> **[4:46](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=286)** In the final step on line 26, we yield the data to be transformed in the population dictionary. Using the prep_transform_data fixture, we can update our Sad and Happy Path tests. They can now use the fixture as an argument. This removes the need to do initial test setup in either function. Using fixtures, limits code duplication and potential points of error in the case that our duplicated code does not match. It also streamlines each test so that anyone reading it can quickly surmise the core functionality being tested in each function. Additionally, if you have a utility function that's ubiquitous and used by all of your other test functions, consider including it as a fixture. This will allow you to control the scope of its invocation and usage throughout the test suite. First, let's create a fixture called prep_transform_data. In order to do this, we should use the pytest decorator, @pytest fixture. I'm going to set the scope to function. Here, we should first add our population dictionary and then the operations performed upon it. First, we load our data using the CSV reader, and then we prep the data to be transformed. Using the map_population_update function, we load the data as map data and we set its initial transformation value as false. At this point, we have not transformed the data. Now we're ready. We can yield the data to transform and also the population dictionary.
>
> **[6:20](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=380)** One helpful thing here to do as well. Instead of manually having the map_data_location be here, we can make that into a fixture as well. Moving that to be a separate fixture that is invoked on the session scope, we can yield to the location to our clean_map.csv. At this point, you should have two fixtures: one, giving us a location of our data; and a second one that preps the transformation data. This will be used in our Happy Path and Sad Path functions. In our Happy path test, we can edit that function to use the prep_transform_data as an input argument. From there, we can access the fixture data and set that to the data to transform in a population_dict and then use that to transform the data. After that, we can move on to making the assertions as we had before. In our Sad Path test, we want to exactly the same thing using the fixture as an argument and then setting the data that the fixture has yielded to a data to transform and population_dict variable. And then we can run our function once more to see that it detects the second transformation, which should raise an exception. By using a fixture, we've saved the need to duplicate our test setup, including the population dictionary and the use of the CSV reader. This helps us limit code duplication and potential points of error, in our case, that duplicated code doesn't match, for example. And also it streamlines each test so that anyone reading it can quickly surmise the core functionality being tested in each function
>
> **[7:55](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=475)** instead of seeing duplicated code. Lastly, if you have a utility function that is ubiquitous and all your functions use it, you can consider setting the scope to also include autouse = true. This means that your fixture decorator will be used automatically even without being passed to your test functions explicitly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (1), [[Unit Testing]] (1)
> **Code Identifiers:** prep_transform_data (4), map_data_location (3), clean_map (2), population_dict (2), clean_map_csv (1)
> **Prerequisites:** setup (4), set up (3)
> **File Paths:** clean_map.csv (2), update.py (1), text_fixtures_end.py (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** csv (2)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** imagine (1), for example (1)

#### [Factory fixtures](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=0)** - [Instructor] So far, we've used fixtures to return hard coded objects directly. We can instead customize our fixtures to return an object based on what arguments are passed to it. This allows us to make use of the fixture as a factory, generating an object based on the needs of our tests. Let's take a look at line 11, which has the process_data fixture in test_factory_start.py. In this version of the test, our fixture is set up to process data for the clean_map.csv only. This is because it uses the city_list_location fixture on line six. That fixture is hard coding the location of the file. If we wanted to process another CSV file or even [[JSON]] data, we would need to duplicate code. You can see that on line 17 where we've created a separate fixture that hard codes the path to the malformed CSV, which will be used in our Sad Path test. This is not ideal to continue testing in this fashion. As an update, a more intuitive way to set up this function would be to reverse the logic shown and check that if a file name type is a JSON, for example, then use the JSON reader. You would do this rather than using the not equal sign to check for the opposite. At this point, we can rewrite the fixture to work as a factory. Instead of returning an object directly, it can return a function that takes arguments, which impact how it creates and returns the ultimate data object we need. For our purposes, generating a data object, either based on a clean map
>
> **[1:35](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=95)** or invalid map, we can update the fixture to be more malleable. Again, I've moved to the final state per chapter branch to show how we can refactor our tests. To edit our process_data fixture to be used as a factory, we can add a nested function. In this case, it is called _specify_type on line 16. This allows us to pass a file name or type variable to the fixture. Based on this variable, the fixture will either make use of the CSV reader or even a JSON reader in the conditional branches on line 19 through 21. This allows subsequent test functions to access this factory fixture, like the Happy Path test does on line 33. Not only does it use the fixture passed as an argument, but it can specify which file is needed for the test. In the Sad Path function, it can also access the fixture. This time though, it will specify that the malformed data is needed. The fixture will proceed to call the correct data reader and yield the malformed data within the pytest context manager on lines 71 through 72. Factory fixtures are one method of making our fixtures customizable. If you choose to include factory fixtures in your code, be sure to keep track of dependencies. For instance, in our code, we want to keep track of what argument is needed to make sure that the process_data fixture uses the right kind of data reader.
>
> **[3:07](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=187)** For extra practice, try adding a simple XML or JSON data_processor to our data_processor.py. After doing that, update the factory fixture to also allow a user to pass in data in the appropriate format. If you need help getting started, there's a JSON file with scooter data in test_resources_scooter.json. A very simple implementation of a JSON reader can be found in the scripts folder.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (8)
> **Env Vars:** json (7), csv (3), xml (1)
> **Code Identifiers:** process_data (3), data_processor (2), test_factory_start (1), clean_map (1), city_list_location (1)
> **File Paths:** test_factory_start.py (1), clean_map.csv (1), data_processor.py (1), test_resources_scooter.json (1)
> **CLI Commands:** make (3)
> **Prerequisites:** set up (2), getting started (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (1), for instance (1)

#### [Parametrization](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=0)** - [Instructor] When making tests, you may realize that there are a few different cases you want your test to cover. For instance, let's say you have a function that returns [[Statistics]], either a mean or a median for a specified country within our processed CSV data. On line 28 of the test_parametrized_start.py file, you can see the test function verifying that a returned dictionary object contains the appropriate average altitude for Andorra. On line 35, a separate test checks if the function returns a dictionary with the appropriate median altitude for the country as well. We can use Pytest parameterization decorator to combine both of these happy path tests into one and also include other testing scenarios we'd like to check. When looking at the Pytest documentation, you'll see information about the parametrized decorator. Here you'll notice that they spell parametrize according to the British spelling, instead of the American alternative. In the past there have been requests to add an alias until Pytest contributors add this alternative spelling, you have to remember the British spelling if you're from the US. All right, let's get back to work in our IDE. To refactor these tests into one parametrized happy path test, let's begin by renaming our function on line 28 to def altitude_stat_per_country. We will also append the Pytest.mark parametrized decorator above our new function. In this decorator, we can define a list
>
> **[1:36](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=96)** or tuple of argument names. We'll start by defining three arguments. The first will be country, the next stat, and then expected. Next, we also need to instantiate a list. Each entry of the list will contain tuples containing our three arguments. This will cause our function to run for each tuple in our decorator. Country, stat and expected describe the contents of each tuple, but they also serve as arguments that will be needed in order for our test function to access the values within each tuple. To get us started, let's say we run this for Andorra again, and the next, we want to check out the mean. And let's just say that the mean is this value. We'll do this again for the same country, but this time we'll look at its median, which is this value. And then finally we'll do this for one other country. And here we need to make sure that we close all of our parentheses. Then we will update the function to use the tuple value supplied on each run. Doing this will involve substituting the hard coded values on line 34, and then next on line 36, we should do this as well.
>
> **[3:04](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=184)** Finally, we can remove our function below. It is no longer needed because the function on line 32 is testing both the case that we are looking for the mean and the median. One small note. This function should also contain the expected variable as another parameter of our test function. This was left off in the original video. We'll need this for our test to run the assertion. Otherwise, Pytest will trigger an error, stating the variable expected is not defined. Parametrization is a nifty tool to use when you'd like to automate your test to run over multiple scenarios. Additionally, it organizes your tests so that another developer can quickly understand which test scenarios are deemed important.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **Code Identifiers:** test_parametrized_start (1), altitude_stat_per_country (1)
> **Env Vars:** csv (1), ide (1)
> **File Paths:** test_parametrized_start.py (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Parametrization](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=0)** - [Instructor] Alright, now it's your turn. Here's a challenge for you to complete. We have another test called test_csv_writer. I would like you to update it to be parameterized with the following three scenarios. Moving to the IDE, let's check out the test as it is written now in test_param_challenge.py on line 29. On line 44, further down in this test, it uses a data aggregator to load the median statistic for Andorra. And then, on line 46, it writes the data to a csv. To focus this test on functionality, it is writing to string IO rather than an actual location on disk. On line 48, we get the value written and finally assert that it is what we expect on line 49. Please refactor this test so it can be run over the three scenarios commented out on line 32 through 34. Here's one hint. In the final assertion, you will need to inject the arguments applied to the function to replace certain parts of the string we compare as the result. You can do this in [[Python (Programming Language)|Python]] 3.7 with F strings. To do this, append an F in front of the string and surround the variable you'd like to insert in that string with curly braces. For example, if you look to line 40, if at the beginning of the string we put F quotation curly brace stat end curly brace, that would inject the string statistic
>
> **[1:35](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=95)** that we use for the csv writer. This challenge should take you about five minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** test_csv_writer (1), test_param_challenge (1)
> **File Paths:** test_param_challenge.py (1)
> **CLI Commands:** python (1)
> **Env Vars:** ide (1)
> **Versions:** python 3 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Parameterization](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=0)** - [Instructor] Let's walk through the solution. First, we can use the pytest parametrize decorator and append it to the top of our test as shown on line 29. Next, we define three arguments: country, stat, and expected, which we will use within our test function. Then, we should create a list with Tuple entries. Each Tuple entry on lines 30 through 32 defines one of the three given test scenarios. We must make sure to update the decorators to find attributes as our function arguments. This is done on line 34. Now we must move on to change other contents of this function. For example, on line 36 which is aggregating our data into a statistic, we need to sub out the hard-coded country and the stat for our country and stat argument. Then on line 41, we substitute stat, country, and expected into the final string. This will be used to check if the retrieved csv data was written correctly. Now that you've gotten practice parametrizing functions, this is a great way to automate your tests so that they run over multiple scenarios. This allows you to not need to duplicate code into separate functions for each scenario. If you want to take this work further, try creating a user class. Each user should have a height and a favorite color. Based on their height, create a function that awards them different types of candy.
>
> **[1:32](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=92)** Try working from the test first as you add in this functionality, and think of ways to parametrize your test.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Organizing Your Pytest Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Conftest.py for common functions](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=0)** - [Instructor] When you create a test suite, you may realize that you are using common test fixtures across multiple separate test files. With conftest.py, we can store these common utility test fixtures there and access them globally within the testing suite. Functions housed within conftest.py act as plug-ins that contain directory specific extension code that the base code in your test can call. This extension code is often referred to as hook implementations. This can be useful when you want to offer such extensibility without code duplication. It's also helpful when you don't want certain non-essential setup or utility functions to be exposed in the code. Additionally, if you're ever reading another developer's test suite and spot test function parameters that are not mentioned either in the file as fixtures or functions, then you should check the conftest.py file to see if those parameters reference a test fixture stored there. Moving back to the IDE, let's look at our factory fixture process data. We've used it here in this test and testconfteststart.py. Instead of having it here, we can move that function and its entirety to conftest.py in our test folder. Here, I've done so. The same functionality has been specified on its own in conftest.py. Moving back to our test file, we can remove this fixture in its entirety. Lastly, make sure to remove the associated OS import
>
> **[1:35](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=95)** and the data processor imports. Those were used previously for the fixture when it was in this file. We can now run pytest to make sure this test still passes. We'll do it again using pytest in our keyword argument, and this time, I'll say conftest_start, and before I run this, I want to make sure I've saved this in the IDE, and here we see it. Our test still passes even though the fixture is not directly in this file. Using conftest.py helps us keep our test modules focused on the core behaviors we intend to test. Helper functions are loaded from conftest.py and your core testing logic is brought to the forefront.

> [!info]- Semantic Content
>
> **File Paths:** conftest.py (7), testconfteststart.py (1)
> **CLI Commands:** make (3)
> **Env Vars:** ide (2)
> **Code Identifiers:** conftest_start (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Modularizing conftest.py](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=0)** - [Instructor] In the previous example, our conftest.py file held two fixtures but imagine what would happen if your system grew. This file could grow to contain a large amount of fixtures giving each one limited visibility. One way to overcome this problem is to modularize your fixtures or store them in their own directories. Then you can import them into conftest.py and use them as you had before. You can achieve this in a few ways. I'll show you two that I'm familiar with. Before we begin, you'll notice that this file, conftest_start.py is nested under our test directory two levels deep. It's under chapter four, video two. This file is being shown for walkthrough purposes only. Normally, conftest.py should be located directly under the test folder. This gives other tests the ability to access its fixtures and functions directly. To achieve modularization, first, let's delete our fixtures from conftest.py. Make sure to leave one blank line at the end of this file. Additionally, we can remove all of our imports except pytest. Before proceeding, let's check out where I've moved these fixtures. I've moved them to locations under the utility folder in our test suite. Here, in cities.py, you'll see the fixture city_list_location is returning our test directory's path to our files. Next, let's load these modules into conftest_stsart.py.
>
> **[1:37](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=97)** To get started, you could use the pytest plugins keyword and put them into a list making each line reference an import.
>
> **[1:51](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=111)** Before I run the test, I can even remove the pytest import. And here we have it, your test still runs. Now, let me show you another way we could achieve the same thing. I'm going to clear the output before I move back into the IDE. Another way of doing this is to import the files directly into the conftest.py file but you will need to disable Pylint and Pyflakes from linting the file and throwing a error because the import will remain unused in the file. One thing to remember if you're using a fixture scoped to the session and marked for auto use, it cannot be imported. It must remain in the conftest.py.

> [!info]- Semantic Content
>
> **File Paths:** conftest.py (6), conftest_start.py (1), cities.py (1), conftest_stsart.py (1)
> **Code Identifiers:** conftest_start (1), city_list_location (1), conftest_stsart (1)
> **CLI Commands:** make (1)
> **Env Vars:** ide (1)
> **Analogies:** imagine (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 5. Using Pytest with an Existing Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Reading tests to surmise understand behavior](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=0)** - [Instructor] The great thing about [[Test-Driven Development]] with pytest is that it fosters shared practices for test setup that allows us to quickly gain information. We can use this to our advantage to understand the source code by viewing that behavior in the test suite first. In this video we will take a look at a written test suite and try to surmise the functionality of the code. Only once we have a few key guesses will we turn to the source code to validate our assumptions. While this is not a rule for understanding the behavior of a system, this is a great tactic for understanding how the code will be used in practice. In the test_fitness_log.py file, we have a test suite that focuses on a fitness tracker. First, a test fixture called create tracker is being used to instantiate the fitness tracker on line eight. The tracker then uses a method called log_activity on line 13 to add an activity called run with a start and end time. This fixture is scoped to yield the final tracker at the start of each function. Below this we can see that there are two functions using this fixture. The first one on line 18 appears to be a happy path test case. This function called test_add_valid_activities asserts that one object was added to the tracker and that its activity matches the description run. Next, on line 35 we appear to have a negative test case called test_add_invalid_activity. It uses the create_tracker fixture in addition
>
> **[1:34](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=94)** to a second fixture called create_overlapping_times which is defined on line 28. This fixture is used to yield start and end times for an activity that overlaps with the proceeding run activity, which is initially recorded in the tracker. On line 40, this test uses those overlapping times when attempting to record another run activity causing an exception to be thrown. So far the test suite shows that the source code consists of a fitness tracker object. This object allows you to add activities that cannot overlap with one another. The one thing we don't know at this point is what logic may be controlling why we can't add an overlapping activity. Let's look to our source code in fitness_log.py. Here we'll see if our assumptions were correct. In our test file we saw that there was a log activity function being used in our fixtures. We can see it here on line eight. It appears that before adding an activity to the fitness tracker, it's calling to other functions, one called validate_entry and the other one called overlapping_entry. If we scroll down, we can see these functions defined on line 16 and 26 respectively. On line 16, validate_entry checks the start and end time for one activity. If an activity has a valid start and end time it returns true. If not it returns false. Since the start and end time are date-time objects it checks a few things.
>
> **[3:07](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=187)** First, it looks to see if they occur on the same year, month, and day. On line 20 it makes a final check that the start time's hour-minute combination is earlier than the end time. On line 26 the function overlapping_entry compares all of the previously-logged activities to a new one to be added. If the new activity overlaps with the logged entry this function should return true. Otherwise, if the activity does not overlap with another, this function will return false. It seems that while people can multitask in real life the fitness tracker doesn't allow us to log simultaneous activity. Now we understand that the log activity function raises an exception if validate_entry returns false and overlapping_entry returns true. Lastly, if we look to the bottom of the source code we can see that there is a function on line 40 that deletes activities and a get_activities function on line 46 that lists all the activities in the tracker. If we think back to when we read our test suite the happy and sad path tests gave us a good amount of insight into the functionality of the fitness tracker. While we see richer details in the source code we have gleaned a fair amount of information from the tests. Reading the tests first and then moving to the source code can help bridge your understanding to how the code is used. If you want to continue practicing these skills try finding an open source project in [[Python (Programming Language)|Python]] with pytest unit tests.
>
> **[4:40](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=280)** Try reading those tests before attempting to read the source code. Do your assumptions made while reading the tests match what you find in the source code? Try doing this repeatedly over a few projects that use the pytest framework. In the readme file on [[GitHub]] you will find a detailed list of a few projects you can get started with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (1), [[Python (Programming Language)|Python]] (1), [[GitHub]] (1)
> **Code Identifiers:** validate_entry (3), overlapping_entry (3), test_fitness_log (1), log_activity (1), test_add_valid_activities (1)
> **Exercise Files:** source code (9)
> **CLI Commands:** find (2), python (1)
> **File Paths:** test_fitness_log.py (1), fitness_log.py (1)
> **Definitions:** is a  (2)
> **Documentation:** the readme (1)
> **Tools:** github (1)

#### [Challenge: Adding test coverage](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=0)** - [Instructor] Now that we have described the behavior of the fitness tracker as defined in the test suite, do you remember seeing any behavior that was not covered in the test? Using the method we used in a previous video, find the path or function in the source code that is not tested. Write a test of your own at the end of the challenge to expand the source code's coverage. At the bottom of line 53, you'll see an area to write your own test function. Please rename it to reference the source code function you are testing. For example, if you were testing a function called hula hoop you'd change your test function to be called test hula hoop. If you'd like to explore the percentage of test coverage for the fitness log, you can use pytest coverage plug-in to help you. We installed this package into our Docker container at the very start. With this plug-in, you can run pytest--cov scripts to expose test coverage within our scripts package. Here we can see that the fitness log has 93% test coverage. That indicates to us that there are a few functions that we could probably test. When thinking about test coverage, don't only think about functions. You also need to think about testing paths. When thinking about paths, you can see them as following the conditional logic of your function. For example, if you have if else statements, when using [[Control Flow]], you might write a test
>
> **[1:33](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=93)** that covers the if statement but not the else statement. Running the pytest coverage plug-in would pick up that missing test. And remember, you can always check out the source code directly to see which functions are not mentioned in the test. This challenge should take 10 minutes. Good luck!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (1)
> **Exercise Files:** source code (4)
> **CLI Commands:** find (1), docker (1)
> **Analogies:** for example (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Adding test coverage](https://www.linkedin.com/learning/unit-testing-in-python/solution-adding-test-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/solution-adding-test-coverage?u=76281980&t=0)** - [Instructor] When solving this challenge, it's important to take time to see which functions are called directly and indirectly by the test suite. After systematically reading our current test file and comparing it to the source code, we can see that one of the methods without test coverage is the delete activity function on line 40. After ascertaining this, we can switch back to the test suite and write a function as follows: on line 47, I've added a test delete activity function. It first loads the fitness tracker and uses the get activities method on line 50 and 51 to check that we have one activity to start with. We then run the deletion on line 47 after teasing out the appropriate values to pass to this function, and then on line 59, we make a final check that we expect for there to be no activities left in our tracker. If you're up for an additional challenge, try adding validation to the delete function. It should guard against processing a deletion for data that was never added to the log.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980&t=0)** - Thank you for joining me for this course about [[Python (Programming Language)|Python]] [[Unit Testing]] and Docker. During this lesson, we learned quite a bit about [[Test-Driven Development]], and pytest, with the use of assertions, exception handling, fixtures, and parametrization. We then covered how to organize common test setup functions in comftest.py and how to approach adding more test coverage for an existing project. This is a great skill to have as you continue to develop in Python, share your source code with others, and also maintain code written by other developers. Throughout this course, I've mentioned other projects that you may be interested in completing on your own to continue learning this content. Refer to the README file of the [[GitHub]] repository to get the full list of these projects. In that list you'll also see suggestions for contributing to opensource projects that use pytest. Be sure to check the standards of contribution on each project before beginning. When contributing to opensource, you can update things like documentation, testing, or source code functionality. Even submitting an update to documentation is a worthy addition. Thank you again for joining me for this course, and remember to continue practicing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Unit Testing]] (1), [[Test-Driven Development]] (1), [[GitHub]] (1)
> **CLI Commands:** python (2), docker (1)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (2)
> **File Paths:** comftest.py (1)
> **Env Vars:** readme (1)
> **Documentation:** the readme (1)
> **Tools:** github (1)


## Instructor

- [[Jasmine Omeke]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/coding-geographies/dockerized-pytest-course)

## Skills Covered

- Python (Programming Language)
- Unit Testing

## Path Context

### In [[Master Your Python Skills]]
← [[Advanced Python- Practical Database Examples]] | **7 of 11** | [[Advanced Python- Working with Databases]] →

## Appears In

- [[Master Your Python Skills]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)