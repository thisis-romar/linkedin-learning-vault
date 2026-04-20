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
  - Master Your Python Skills
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/unit-testing
status: not-started
created: 2026-04-20
---

![Unit Testing in Python](https://media.licdn.com/dms/image/v2/C4E0DAQHWDGkTmekVlg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619134209417?e=2147483647&amp;v=beta&amp;t=ZNDO58GhiNdg2mXCnDdbSzvfj65HO68HJoTNx83bPt0)

# Unit Testing in Python

> Unit testing—which involves testing small, isolatable pieces of code—can help you catch and fix bugs before they crop up in your final product. And by adopting test-driven development (TDD) and writing unit tests before production code, you can take even greater responsibility for your project's quality. Curious about how to best approach unit testing in your own Python projects? This course shows

> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python) | 1h 31m | Advanced | 12K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Jasmine Omeke]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/coding-geographies/dockerized-pytest-course)

## Skills Covered

- Python (Programming Language)
- Unit Testing

## Table of Contents

### Introduction

#### Python unit testing with pytest
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=0)** - As a developer, you're constantly prioritizing what you should focus on and figuring out how today's work fits into those long-term goals.
>
> **[0:09](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=9)** When building and testing Python projects from scratch, you may lose sight of this goal as you try to implement too many features at once.
>
> **[0:17](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=17)** When maintaining a Legacy project, you may feel overwhelmed as you find it has too few or no tests.
>
> **[0:24](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=24)** Believe it or not, test-driven development may be just what you need to organize the path ahead of you.
>
> **[0:30](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=30)** We'll explore that in this course in concert with pytest, a testing framework.
>
> **[0:36](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=36)** I'm Jasmine Omeke, and I'm a software developer working on a big data and analytics platform.
>
> **[0:42](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=42)** I've also contributed to open source projects such as gRPC, Apache Airflow, and pytest.
>
> **[0:49](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=49)** I have learned a lot about prioritization, and I want to talk about that through the lens of pytest.
>
> **[0:55](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=55)** We will focus on pytest and its capabilities.
>
> **[0:58](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=58)** Paired with test-driven development, pytest will help you become more productive as you pragmatically write modular tests.
>
> **[1:06](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=66)** To help you continue practicing your newfound pytest knowledge, I will recommend potential sample projects as we make our way through the course.
>
> **[1:14](https://www.linkedin.com/learning/unit-testing-in-python/python-unit-testing-with-pytest?u=76281980&t=74)** I'm excited to have you join me, and please let me know what feedback you have.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1), find (1), apache (1), make (1)
> **Code Keywords:** continue (1), let (1)
> **Code Identifiers:** grpc (1)
> **Analogies:** such as (1)
> **Speakers:** - as (1)

#### Why pytest?
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=0)** - Pytest has a few critical features that set it apart from other testing frameworks, such as unittest, nose, and doctest.
>
> **[0:09](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=9)** There are many resources that account for the pros and cons between these four frameworks.
>
> **[0:14](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=14)** For our purposes, I'll give you an overview of how they perform in comparison to pytest when used in larger projects with many dependencies.
>
> **[0:24](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=24)** First, the pytest framework allows you to run a standalone test function as its own case, unlike unittest, where you need to put your test into classes and handle class inheritance.
>
> **[0:36](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=36)** This is great because that means it'll be easier for you to define tests and also easier for the next programmer to come along and maintain your tests.
>
> **[0:46](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=46)** Additionally, pytest has an easy to read syntax, allowing you to use the standard assert method in combination with comparison operators to test scenarios in your test functions.
>
> **[0:58](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=58)** Unittest, on the other hand, has over 10 different assertion methods for tests.
>
> **[1:03](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=63)** While they are specific, they have changed in different versions of Python.
>
> **[1:08](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=68)** This requires you to keep up with these changes and update your project with the proper method if the old version becomes deprecated.
>
> **[1:15](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=75)** To help you iterate through refactoring in a focused manner, pytest also gives you a powerful command-line interface to control the tests you'd like to run over or even skip with markers.
>
> **[1:27](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=87)** This comes in handy when you are updating a portion of your test and don't want to run the entire test suite as you iterate through a small set of changes.
>
> **[1:36](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=96)** Furthermore, pytest uses fixtures to automate test setup, teardown, and common test scenarios for use in varying scopes.
>
> **[1:45](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=105)** Fixtures also help you share data and code between tests that need common setup functions.
>
> **[1:51](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=111)** The test automation Python provides doesn't stop there.
>
> **[1:55](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=115)** It also comes with a feature called parameterization, which enables you to automate test functions to run over a variety of scenarios in one swoop.
>
> **[2:04](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=124)** This makes pytest a great framework for complex testing scenarios, unlike doctest, which is great for basic tests but it limits your test to doc strings.
>
> **[2:15](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=135)** Lastly, Python is actively maintained.
>
> **[2:18](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=138)** While it may be compelling for you to use nose, another framework, it's no longer actively managed.
>
> **[2:24](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=144)** In comparison, the pytest open source project is actively developed and even you can create issues for others to work on, or submit pull requests to improve the framework.
>
> **[2:34](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=154)** You can read more about pytest when you visit their documentation website for detailed information and walkthroughs for the framework's capabilities.
>
> **[2:43](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=163)** To get to the core of each concept, I will walk you through how to implement it yourself.
>
> **[2:48](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=168)** Toward the end, we will cover how to spot these pytest features in an already set up project.
>
> **[2:54](https://www.linkedin.com/learning/unit-testing-in-python/why-pytest?u=76281980&t=174)** This will be a great skill to have as a developer because you'll inevitably have to maintain projects written by others and refactor them.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), case, (1), assert (1), interface (1)
> **CLI Commands:** python (3)
> **Prerequisites:** setup (2), set up (1)
> **Analogies:** such as (1)
> **Speakers:** - pytest (1)

#### Roadmap
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=0)** - In this course we will focus on how to create and maintain a Python project's testing suite with pytest.
>
> **[0:07](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=7)** As we progress we will cover how to use this testing framework as you develop code in a test-driven development format, also known as TDD.
>
> **[0:17](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=17)** While there are several types of tests such as unit, integration, linting, smoke, and functional tests, we will focus on unit tests that cover the behavior we would like our source code methods to carry out.
>
> **[0:29](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=29)** We'll be covering the basics of the pytest framework's core features, such as assertions, exceptions, fixtures, and parametrization.
>
> **[0:38](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=38)** After that, we'll cover how to modularize common test utility functions with conftest.py.
>
> **[0:45](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=45)** A file that is automatically available to all our tests in our test directory.
>
> **[0:50](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=50)** For the final section, I'll give you an existing pytest project and walk you through how to determine its functionality by looking at the test first.
>
> **[0:58](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=58)** While doing this, we will use TDD to add in new functionality.
>
> **[1:03](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=63)** For this course I will be using a Docker container to run the project, and we'll be using Visual Studio as my interactive development environment, or IDE.
>
> **[1:13](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=73)** For those of you who haven't used Docker, here's a quick rundown.
>
> **[1:17](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=77)** Docker is a platform that allows you to create a container, a predefined environment that we can customize with certain installations.
>
> **[1:24](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=84)** A container's installed packages allow us to run our app, and the container itself runs on the installed Docker engine, which runs on your computer's operating system.
>
> **[1:34](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=94)** Feel free to skip around the videos as needed.
>
> **[1:37](https://www.linkedin.com/learning/unit-testing-in-python/roadmap?u=76281980&t=97)** If you're new to pytest though, feel free to stick with me from start to finish.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (4), python (1)
> **Env Vars:** tdd (2), ide (1)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** such as (2)
> **File Paths:** conftest.py (1)
> **Code Keywords:** this, (1)
> **Tools:** visual studio (1)
> **Exercise Files:** source code (1)

#### Exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=0)** - [Instructor] The materials for this course are hosted on [github.com](https://github.com).
>
> **[0:04](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=4)** Once you pull up the GitHub repository, you'll see a green button to the right where you can download the project via SSH or HTTP.
>
> **[0:12](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=12)** If you don't have administrative access to the computer you're using, you can use the HTTPS option to download it on your machine.
>
> **[0:19](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=19)** This is also helpful if you don't have a GitHub account.
>
> **[0:23](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=23)** Once that's downloaded, you can move to open that file.
>
> **[0:27](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=27)** Make sure to move the file to a place on your machine that you can remember.
>
> **[0:31](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=31)** In my case, I'll move it to the desktop.
>
> **[0:34](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=34)** Now, moving back to the repository, I want to point out a few things.
>
> **[0:39](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=39)** We can clear this.
>
> **[0:42](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=42)** This repository is set up for you according to a branch structure.
>
> **[0:46](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=46)** First you'll see that we're on our master branch.
>
> **[0:49](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=49)** Now that we're on the master branch, let's explore.
>
> **[0:52](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=52)** The folder that we're primarily concerned with is our test folder.
>
> **[0:55](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=55)** Here you can navigate to different subdirectories that match the accompanying chapters in this course.
>
> **[1:02](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=62)** Let's go to chapter 2, video 2.
>
> **[1:05](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=65)** Here you'll see a test file.
>
> **[1:07](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=67)** This one is called test_mapmaker_start.
>
> **[1:09](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=69)** This shows you the starting phase for this particular video.
>
> **[1:14](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=74)** All of the other subdirectories are also set up in this format.
>
> **[1:18](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=78)** At the end of the course, if you're curious to see how these files should look in their end state, you can head back to the home page and switch branches.
>
> **[1:27](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=87)** Instead, click final-state-per-chapter.
>
> **[1:31](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=91)** Here, if we go back to our tests, chapter 2, video 2, in this folder, you'll see that file has changed to the name test_mapmaker_end.
>
> **[1:42](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=102)** On this branch, this is the common naming convention that you'll spot, and if you were to run all of the tests, you would be running the end states of each file.
>
> **[1:51](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=111)** You can move to examine the file and you'll see the final state that we need to get this test passing.
>
> **[1:58](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=118)** With that, we can move back to the home page.
>
> **[2:01](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=121)** For this course, again, we're starting off on master.
>
> **[2:05](https://www.linkedin.com/learning/unit-testing-in-python/exercise-files?u=76281980&t=125)** This will be the branch that we'll open up in VS code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), this. (1), switch (1)
> **Tools:** github (3), vs code (1)
> **Env Vars:** ssh (1), http (1), https (1)
> **CLI Commands:** ssh (1), make (1)
> **Code Identifiers:** test_mapmaker_start (1), test_mapmaker_end (1)
> **UI Navigation:** navigate to (1), go to (1)
> **Prerequisites:** set up (2)
> **URLs:** [github.com](https://github.com) (1)


### 1.  Installation and Setup

#### Docker and VS Code (Mac)
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=0)** - [Instructor] Before we delve into the code, there are a few things you need installed.
>
> **[0:04](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=4)** First we'll make sure you have the latest version of Docker Desktop and that it's working.
>
> **[0:08](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=8)** At the time of this recording, these instructions are for MACs running on OS 10.13 or later.
>
> **[0:15](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=15)** Once we do that, we then run a Docker image that will install pertinent packages for us.
>
> **[0:21](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=21)** Like mentioned earlier, Docker runs an engine on your operating system.
>
> **[0:25](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=25)** Once we've installed the software so the engine can begin running, we can then start creating containers with the installations we need to run our application.
>
> **[0:33](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=33)** First you'll need to create or log into your Docker Hub account on hub.[docker.com](https://docker.com).
>
> **[0:38](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=38)** I'm already logged into mine.
>
> **[0:41](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=41)** After you're logged in, move forward to click Get started with Docker Desktop on that web page.
>
> **[0:47](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=47)** From here you can continue to click Download Docker Desktop for Mac.
>
> **[0:52](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=52)** Once this file has finished installing, you can double click it.
>
> **[0:57](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=57)** You'll next see the following prompt to drag the Docker application into your applications folder.
>
> **[1:04](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=64)** Once that's complete, let's double click Docker.
>
> **[1:07](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=67)** It will now ask you if you want to open this, and you should click yes, you do want to open it.
>
> **[1:12](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=72)** So click the Open.
>
> **[1:14](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=74)** And then it will also prompt you that Docker needs privileged access.
>
> **[1:18](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=78)** You should click OK and then supply your password.
>
> **[1:22](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=82)** From here Docker will start up, and we'll need to enter in our user name and password.
>
> **[1:32](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=92)** All right, now we're logged in, and we should wait for the Docker Desktop to continue starting.
>
> **[1:36](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=96)** And now we can see it's up and running.
>
> **[1:39](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=99)** And that's it.
>
> **[1:40](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=100)** Now you have Docker installed.
>
> **[1:42](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=102)** Next, we'll move on to our VS code installation.
>
> **[1:45](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=105)** You can go back to your browser, and go to code.[visualstudio.com](https://visualstudio.com).
>
> **[1:50](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=110)** Here you can download Visual Studio for Mac.
>
> **[1:55](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=115)** On my browser, you can see an auto-installed at the top.
>
> **[1:58](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=118)** If that doesn't occur, you can click download, and then go back to clicking this again.
>
> **[2:07](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=127)** So now that it's downloaded, we can double click it.
>
> **[2:11](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=131)** And it will ask us a similar prompt as Docker had.
>
> **[2:14](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=134)** Do you want to open this?
>
> **[2:16](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=136)** We can click Open.
>
> **[2:18](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-mac?u=76281980&t=138)** And there we go, Visual Studio is up and running.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (14), make (1)
> **Tools:** docker desktop (4), visual studio (2), vs code (1)
> **Code Keywords:** continue (2), let (1), this, (1)
> **Prerequisites:** make sure you have (1), install (1), you'll need (1)
> **URLs:** [docker.com](https://docker.com) (1), [visualstudio.com](https://visualstudio.com) (1)
> **Cross-References:** go back to (2)
> **Versions:** 10.13 (1)
> **UI Navigation:** go to (1)

#### Docker and VS Code (PC)
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=0)** - [Instructor] Before we delve into the code, there are a few things you need installed.
>
> **[0:04](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=4)** First, we'll make sure we have the latest version of Docker Desktop and that it's working.
>
> **[0:09](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=9)** At the time of this recording, these instructions are for Windows PCs running on the 10 Pro 64-bit version.
>
> **[0:17](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=17)** Once we do that, we then will run a Docker image that will install pertinent packages for us.
>
> **[0:23](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=23)** Like I mentioned earlier, Docker runs an engine on your operating system.
>
> **[0:27](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=27)** Once we've installed the software so the engine can begin running, we can then start creating containers with the installations we need to run our application.
>
> **[0:35](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=35)** First, you need to create or log into your Docker Hub account on hub.[docker.com](https://docker.com).
>
> **[0:40](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=40)** I've already logged into mine.
>
> **[0:42](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=42)** After you're logged in, move forward to the installation page under Get started with Docker Desktop.
>
> **[0:50](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=50)** Here you'll be taken to the subsequent page where you can continue the download by clicking this blue button saying Download Docker Desktop for Windows.
>
> **[0:59](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=59)** It will then proceed to download the executable.
>
> **[1:03](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=63)** After it's finished, you can click on the executable file.
>
> **[1:07](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=67)** Once you see the system prompt, you should click, yes, you want to allow the app to make changes to your device.
>
> **[1:13](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=73)** After you've clicked yes, you will see this following screen.
>
> **[1:16](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=76)** For our configuration, we want to add the shortcut to our desktop.
>
> **[1:21](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=81)** We don't need to worry about the second one at this point.
>
> **[1:23](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=83)** When we run Python in later videos we'll be using Linux containers and we don't need to worry about Windows containers.
>
> **[1:33](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=93)** All right, looks like our installation has succeeded.
>
> **[1:38](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=98)** Now that my installation is complete, I can double click on Docker Desktop.
>
> **[1:43](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=103)** At this point, you'll see the following prompt.
>
> **[1:45](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=105)** For this system, Hyper-V is not enabled and Docker wants us to enable it so that it can work properly.
>
> **[1:52](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=112)** You may or may not see this on your computer depending on your configuration.
>
> **[1:56](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=116)** For us, we do want this computer to restart if you see this popup.
>
> **[2:02](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=122)** Now that we're back from the restart, let's install our interactive development environment.
>
> **[2:07](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=127)** During this course, we'll be using Visual Studio Code an IDE also known as VS Code.
>
> **[2:13](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=133)** Within VS Code, we can open the terminal, which we will use to run our pytest tests.
>
> **[2:19](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=139)** If you already have Visual Studio installed, feel free to continue.
>
> **[2:23](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=143)** Otherwise, stick around for the installation instructions if you want to follow along with me.
>
> **[2:28](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=148)** So our first step should be to click on the Windows icon here so we can install the appropriate version.
>
> **[2:35](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=155)** On your screen it should automatically download the executable file and then we can double click it here.
>
> **[2:42](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=162)** After we've clicked our executable, we will now see this license agreement, which we can accept, we'll continue to click next, here on the select destination location prompt you can also click next, same for this following page.
>
> **[3:00](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=180)** And then here we want to keep this configuration.
>
> **[3:03](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=183)** We may also want to create a desktop icon so we can easily get to VS Code, but after that we can click next and then we can finally install.
>
> **[3:16](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=196)** After that, you've finished installing VS Code.
>
> **[3:19](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=199)** Let's click Finish to launch it.
>
> **[3:24](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=204)** Now that we've installed VS Code and Docker, let's make sure our setup is in order.
>
> **[3:29](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=209)** We'll first begin by opening the folder to our exercise files.
>
> **[3:34](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=214)** I've saved it on my desktop, but please navigate to the appropriate location on your computer.
>
> **[3:40](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=220)** After you've opened the file, you should be able to see it on the far left in the navigation pane.
>
> **[3:46](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=226)** Next, what we'll do here to make sure that Docker is in sync with VS Code, we'll click View and then Terminal.
>
> **[3:54](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=234)** It was already opened for me, but you might not see this when you open your VS Code.
>
> **[3:59](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=239)** Since we've already opened our project location, we should see it down here.
>
> **[4:05](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=245)** If not, in the Terminal please use cd to navigate to the appropriate location.
>
> **[4:11](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=251)** Before we do any Docker commands here, what I first want to check is that Docker has access to my C drive, which is where I've saved this file.
>
> **[4:20](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=260)** I can go down into my toolbar and click Docker Desktop.
>
> **[4:24](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=264)** I can see that it's running and I can click settings.
>
> **[4:30](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=270)** Here, move to the shared drives location.
>
> **[4:33](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=273)** Make sure you've checked the drive that you're using, in my case it's C.
>
> **[4:39](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=279)** Next you can click Apply.
>
> **[4:41](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=281)** After you've done that, you can exit out of this settings pane.
>
> **[4:45](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=285)** Moving back to VS Code, we can go to our Terminal to run the following commands.
>
> **[4:51](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=291)** The first one is docker-compose build.
>
> **[4:55](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=295)** This command will build the configuration needed for our project.
>
> **[4:59](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=299)** Since I've previously built it before, it was pretty quick, but it might take more time on your computer.
>
> **[5:06](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=306)** You can now substitute the hyphen in docker-compose with a space.
>
> **[5:11](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=311)** Read this GitHub issue for more information.
>
> **[5:14](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=314)** Next, we want to actually run the environment that we've built.
>
> **[5:18](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=318)** We can type docker-compose run test sh.
>
> **[5:23](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=323)** After running this, this should open the environment where we will be running our pytest test in.
>
> **[5:29](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=329)** After doing that, you should see the hashtag, here we can type the command pytest.
>
> **[5:36](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=336)** Here you should be able to see that the pytest tests have run.
>
> **[5:40](https://www.linkedin.com/learning/unit-testing-in-python/docker-and-vs-code-pc?u=76281980&t=340)** Now that we've been able to open our project in VS Code and run Docker commands, we can see that our setup is good to go.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (18), make (5), python (1), cd (1)
> **Tools:** vs code (9), docker desktop (5), terminal (4), visual studio (2), github (1)
> **Code Keywords:** continue (3), let (3), this, (1)
> **UI Navigation:** click on (3), open the (2), navigate to (1), go to (1)
> **Prerequisites:** install (4), setup (2)
> **Exercise Files:** download the (1), exercise files (1)
> **URLs:** [docker.com](https://docker.com) (1)
> **Env Vars:** ide (1)

#### Running pytest with Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=0)** - [Instructor] Let's make sure VS Code is setup correctly to run Pytest and Docker.
>
> **[0:05](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=5)** From VS Code, you can open the project repository.
>
> **[0:10](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=10)** And from here, we've saved our project to the desktop, but for you, if you saved it elsewhere, navigate to that location.
>
> **[0:16](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=16)** Right here, what I'll do is I'll click that folder and go no further, and we'll double click and then hit open.
>
> **[0:23](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=23)** And you can examine the project structure on the left navigation pane, we see our scripts, folder, tests, and then you'll also notice the Docker file.
>
> **[0:31](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=31)** So let's open this up.
>
> **[0:34](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=34)** Now, this Docker file contains a few different things, but let me explain it first.
>
> **[0:39](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=39)** This Docker file will enable us to run our code within a Docker container, that will act almost like a virtual machine.
>
> **[0:45](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=45)** It will install all the packages we need and allow your test setup to be just like mine without needing to change your underlying system's configuration.
>
> **[0:53](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=53)** All the code we execute, occurs in the Docker container.
>
> **[0:56](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=56)** You can think of this script like a recipe for creating our code environment, called a container.
>
> **[1:01](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=61)** For this course, we'll be running Python 3.7 and you'll see here on this file it's using a test-requirements.txt.
>
> **[1:11](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=71)** What it's doing here is it's copying this file into our container and then it'll run pip install over all of those test requirements.
>
> **[1:18](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=78)** Let's open up that file.
>
> **[1:20](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=80)** Here, we can see it's referencing different libraries that are being installed.
>
> **[1:25](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=85)** For now, the most important one is Pytest.
>
> **[1:27](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=87)** We're installing it to version 5.2.0.
>
> **[1:30](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=90)** As we move further into our testing, we'll explore some of these other packages as they play a role in our testing workflow.
>
> **[1:36](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=96)** After you've examined these files, let's open our terminal.
>
> **[1:40](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=100)** We can do that by clicking view and then terminal.
>
> **[1:44](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=104)** And since we've already opened our file and you see it on the left, the terminal will also go to that location.
>
> **[1:50](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=110)** If that hasn't happened, you can use cd to go to wherever you may have saved that, be that in, you know, downloads, or some other location.
>
> **[1:58](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=118)** Let's build our project and open the container shell, which will let us run commands.
>
> **[2:03](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=123)** We can do so by running the following.
>
> **[2:05](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=125)** The first one will be docker-compose build and what this is doing is it's basically kind of taking that recipe that we built up in the Docker file and just creating our container environment.
>
> **[2:21](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=141)** Now that that's built, we can run our next command, docker-compose run test sh.
>
> **[2:27](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=147)** And what this will do, it'll open the container.
>
> **[2:30](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=150)** From here, we can type Pytest and this will run all of our tests.
>
> **[2:36](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=156)** That command ran all of our existing tests.
>
> **[2:39](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=159)** If we want to run a certain test, we can run this special command.
>
> **[2:42](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=162)** What I'll do here is just cherry pick a test that we'll look into a little bit later.
>
> **[2:46](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=166)** So we can use pytest -k, which is the keyword argument, and we can run any test that matches our keyword arguments.
>
> **[2:54](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=174)** So let's say, I think you can see here, we have like a fitness log, so we can run our fitness log and what Pytest will do, it'll collect all the tests for that certain keyword.
>
> **[3:06](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=186)** If you ever need help, you can also type pytest -h, this will give you information about all the different capabilities Pytest may have if you have any questions.
>
> **[3:19](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=199)** To exit the shell, on the same line, we can click exit.
>
> **[3:23](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=203)** And we're back into our project directory.
>
> **[3:25](https://www.linkedin.com/learning/unit-testing-in-python/running-pytest-with-docker?u=76281980&t=205)** Now that we've validated that VS Code is set up and we can run our Docker commands, we should be good to go.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (10), make (1), python (1), pip (1), cd (1)
> **Code Keywords:** let (8)
> **Tools:** vs code (3), terminal (3)
> **UI Navigation:** open the (3), go to (2), navigate to (1)
> **Prerequisites:** setup (2), install (2), set up (1)
> **Versions:** python 3 (1), version 5 (1), 2.0 (1)
> **File Paths:** test-requirements.txt (1)
> **Analogies:** just like (1)


### 2. Overview of Test-Driven Development and Pytest Features

#### Overview of TDD
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=0)** - Before moving to our exercises, I want to take a step back to explain how test-driven development relates to unit testing.
>
> **[0:07](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=7)** As we move through this section we will primarily use the lens of test-driven development to implement functionality in the source code and write accompanying tests.
>
> **[0:17](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=17)** To guide how we use test-driven development, it's important to first think about what behaviors we want our system to execute, even before we implement it in code.
>
> **[0:27](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=27)** Test-driven development is a software development process that can be used while writing unit tests.
>
> **[0:33](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=33)** Using this method of writing software at the start, influences how the developer writes modular tests that will illustrate what features their system will carry out.
>
> **[0:42](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=42)** First, the developer writes a test that will surely fail without code to implement its behavior.
>
> **[0:48](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=48)** This is also known as being in a red failure state.
>
> **[0:52](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=52)** Then the developer must make sure it eventually passes by writing the minimum implementation code needed to get this test passing.
>
> **[1:00](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=60)** Once that's been done, this test, along with the rest of the tests should be run to make sure the entire project is in a passing state.
>
> **[1:07](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=67)** If the new implementation code has caused other tests to fail, then the developer needs to refactor as necessary.
>
> **[1:14](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=74)** After all needed factoring is complete the tests are now in a green, or passing state.
>
> **[1:19](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=79)** This shortens the development cycle, influencing the developer to focus on functionality in small pieces on the forefront.
>
> **[1:26](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=86)** It's their job to iteratively stitch these pieces together to get a final system.
>
> **[1:31](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=91)** Additionally, when behaviors are clearly defined during the development process, the developer can think about ways they might extend the project to include new features in the future.
>
> **[1:41](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=101)** As such, new code written down the line can be structured to potentially build off of or reuse existing behaviors.
>
> **[1:48](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=108)** This helps the developer avoid being overwhelmed by the desire to implement all the core functionality at once.
>
> **[1:55](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=115)** Instead, they can focus on gradually adding features as they go.
>
> **[2:00](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=120)** Using test-driven development with behaviors in mind also facilitates code reuse in the broader community.
>
> **[2:06](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=126)** Think about it like this, if you downloaded another developer's project that promised to solve a huge problem you had, you'd expect to make use of the functionality they promised.
>
> **[2:16](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=136)** However, if you ran their code and encountered errors, you most likely avoid using their projects and search for another solution.
>
> **[2:24](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=144)** To avoid a situation like this ourselves, it's important to communicate behaviors explicitly as you develop, verifying that those behaviors are indeed occurring.
>
> **[2:33](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=153)** We will use the test-driven development method of writing tests strategically within this course with behaviors in mind.
>
> **[2:40](https://www.linkedin.com/learning/unit-testing-in-python/overview-of-tdd?u=76281980&t=160)** As we do this, we will cover basic debugging tips and tricks that will help us navigate the refactoring process as we attempt to get our test passing again, or in the green.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** this, (2)
> **Definitions:** is a  (1), known as (1)
> **Exercise Files:** source code (1)
> **Speakers:** - before (1)

#### Basic tests and assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=0)** - [Instructor] Test-driven development is one of many tools you can use when developing code.
>
> **[0:05](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=5)** We'll use it in the beginning, but the majority of this course will cover Python testing with pytest more closely.
>
> **[0:11](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=11)** And you may notice that's depart from test-driven development from time to time.
>
> **[0:15](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=15)** The shift in focus is just like you would at work: using many tools to get the job done.
>
> **[0:20](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=20)** Now, let's move to the code.
>
> **[0:22](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=22)** I'll be using a Mac for the remainder of this course.
>
> **[0:25](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=25)** Your experience should be similar on Windows since we're using Docker containers to run our tests.
>
> **[0:31](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=31)** Let's start to define behaviors we want our code to execute.
>
> **[0:34](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=34)** In VS Code, we'll start by opening the Exercise folder.
>
> **[0:42](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=42)** Once we've done that, you should see the project in the left navigation pane.
>
> **[0:47](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=47)** Let's start by opening up two files.
>
> **[0:49](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=49)** The first one will be in the scripts folder, under chp2, video2.
>
> **[0:55](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=55)** It's called mapmaker_start.
>
> **[0:57](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=57)** The next file is under the tests folder.
>
> **[1:01](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=61)** It's under, also chp2, video2, and it's called test_mapmaker_start.
>
> **[1:08](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=68)** It may be handy to split the screen, so that you could see both of these at the same time.
>
> **[1:13](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=73)** I'm going to select Split Left, so I have the test_mapmaker on one side and then my mapmaker_start on the other.
>
> **[1:21](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=81)** You may see that VS Code also opens the test file here, but you can close it.
>
> **[1:26](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=86)** While setting up these two files, you might see that VS Code prompts you to install the Python extension.
>
> **[1:33](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=93)** We can disregard this.
>
> **[1:34](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=94)** Since we're running our tests in Docker, it will take care of all the Python package installations we need.
>
> **[1:40](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=100)** In essence, this is what makes Docker great.
>
> **[1:42](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=102)** You don't need to change your underlying configuration to run tests.
>
> **[1:46](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=106)** Next, we'll want to open the terminal window.
>
> **[1:49](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=109)** You can do that by going to View, and Terminal.
>
> **[1:54](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=114)** It will open in the bottom section of your editor.
>
> **[1:57](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=117)** If you've already built the project with the docker-compose build command, you can proceed to run docker-compose run test sh to enter the shell that allows us to run pytest in the Docker container.
>
> **[2:08](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=128)** Once you see the hashtag, that means we're in the Docker container and we're ready to run our pytest commands.
>
> **[2:14](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=134)** To get started, let's run the test file that we have to the left.
>
> **[2:17](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=137)** We can do this by writing pytest down here.
>
> **[2:21](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=141)** Make sure we spell it right.
>
> **[2:23](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=143)** We can use our keyword args to then run this file specifically, so we can use a keyword like, let's say map, which is a portion of that file name and that will allow pytest to automatically pick up this particular test to run.
>
> **[2:38](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=158)** As we see here, pytest has run our test and at this point, it's passed.
>
> **[2:41](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=161)** It's not really doing anything.
>
> **[2:43](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=163)** Let's move to start writing this test and get it into a red state first where we'll introduce what functionality we want our source code to the right to implement.
>
> **[2:52](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=172)** Before doing that, let's clear our output in the terminal.
>
> **[2:56](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=176)** For this example, we will define a module to create points that consist of a city name, its latitude and longitude coordinates.
>
> **[3:04](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=184)** Let's start by creating a point in our test to verify.
>
> **[3:06](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=186)** We import our source code as expected.
>
> **[3:09](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=189)** At this point, the test should fail after we do that.
>
> **[3:12](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=192)** To get started, let's change this pass portion to p1.
>
> **[3:17](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=197)** This will be our first point and we want to instantiate it to be a part of the Point class, so it will be an at, like a point.
>
> **[3:25](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=205)** Let's save.
>
> **[3:27](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=207)** Once we've done that, we can go back to our terminal and run the pytest command as we had before.
>
> **[3:32](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=212)** So again, that's pytest -k and then map.
>
> **[3:36](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=216)** So we're picking up that keyword argument.
>
> **[3:39](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=219)** Aha, we have one error.
>
> **[3:40](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=220)** Right here, you can see NameError, name Point is not defined.
>
> **[3:45](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=225)** This indicates that the test can't find the Point module to create the Point.
>
> **[3:49](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=229)** In our red/green development cycle, we're currently in the red phase and need to fix this error.
>
> **[3:54](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=234)** We can make our test pass or in other words, go green, by actually importing the source code.
>
> **[4:00](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=240)** Let's do that.
>
> **[4:01](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=241)** At the top of our file, what we need to do is import the file to the right.
>
> **[4:07](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=247)** So we can do that by typing the keyword from and then the path to that file, which in our case, is scripts.chp2.video2, and then, we need the file itself, mapmaker_start, and then we import the actual class that we're using, which is Point.
>
> **[4:27](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=267)** You may notice that VS Code attempts to autocomplete it for you.
>
> **[4:30](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=270)** Now that we've done that, let's run our test again and make sure to save before you run it in the terminal.
>
> **[4:38](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=278)** If we examine our terminal, on this first line, we see that our test_make_one_point has passed.
>
> **[4:44](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=284)** However, you'll see a few Pyflake's failures.
>
> **[4:47](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=287)** This is because pytest runs linting checks before running the unit test.
>
> **[4:51](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=291)** It catches that our p1 variable, while successfully assigned to the instantiation of the Point class, is not used in any test.
>
> **[4:58](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=298)** You'll see that right here where it says UnusedVariable.
>
> **[5:02](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=302)** This is one of Pyflake's default linting rules.
>
> **[5:05](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=305)** We can fix this as we move back to our test.
>
> **[5:08](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=308)** Before we do that, let's clear our output.
>
> **[5:11](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=311)** Moving back to our tests, let's refactor it to actually make use of the Point class.
>
> **[5:16](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=316)** Remember those behaviors we mentioned before?
>
> **[5:18](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=318)** We should be able to give a point a city name and also assign it a longitude and latitude.
>
> **[5:24](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=324)** After that, we can then assert that it has the qualities we have assigned to it.
>
> **[5:29](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=329)** To get started, let's just do that.
>
> **[5:31](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=331)** We're going to add a name.
>
> **[5:33](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=333)** In our case, we'll call the city Dakar, and then we're going to give it coordinates of 14.7167, and then its longitude should be 17.4677.
>
> **[5:48](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=348)** Next, we want to assert that this Point actually has the latitude and longitude that we've assigned to it.
>
> **[5:58](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=358)** Let's make up a function.
>
> **[5:59](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=359)** In our case, maybe, you know, we can call it get_lat_long.
>
> **[6:05](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=365)** This function should return to us those two points that we've set up before.
>
> **[6:09](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=369)** Let's say it brings back a tuple, would bring us back that 14.7167 and that again, that longitude that we set up, and once we've done that, we have a functioning test.
>
> **[6:22](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=382)** Let's get rid of this whitespace.
>
> **[6:25](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=385)** Our linter will pick up that there's whitespace at the end of the file and it doesn't like that.
>
> **[6:29](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=389)** Let's save, and then overall, we expect this test to not pass.
>
> **[6:35](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=395)** As you can see in the code to the right, we haven't implemented this in our Point class, but this is a great start for us to get our functionality all down on paper.
>
> **[6:45](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=405)** To run our tests and see our expected failure, again, we can run pytests with our keyword flag and then simply put map.
>
> **[6:53](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=413)** Aha, and we see here, test_make_one_point has failed and it's because the Point class takes no arguments and we can fix that quite simply by going to the source code.
>
> **[7:03](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=423)** In our source code, we want to do two things.
>
> **[7:06](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=426)** First, we need an init function.
>
> **[7:09](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=429)** This will allow the Point class to take three arguments, which in our case, is the city name, latitude and longitude.
>
> **[7:15](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=435)** Next, we want to create that function that we talked about on the left, get_lat_long.
>
> **[7:21](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=441)** This should return to us, the lat and the longitude that we pass to the Point in the first place.
>
> **[7:27](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=447)** Let's get started.
>
> **[7:28](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=448)** If we move down to the pass, we can remove this.
>
> **[7:31](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=451)** This was a great way to get the test to pick up the source code, being an empty class, but we want to fill our class now, so we'll start by creating our first function, which is at an init function.
>
> **[7:42](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=462)** In order to make use of this function, first we have to pass itself, a name argument, latitude, and then also longitude.
>
> **[7:55](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=475)** Now that we've done that, in order to make the Point class access each argument as a part of its class instance, we can do this as follows.
>
> **[8:04](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=484)** We'll create an argument for the class name name and what it'll do is pick up the name, argument that we've passed.
>
> **[8:12](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=492)** We'll also do the same for longitude and latitude.
>
> **[8:21](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=501)** Additionally, if we want to make sure that these instance objects are not accessible to the average user, we should go back and put an underscore in front of each one.
>
> **[8:32](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=512)** After we've done this, we can move on to that next function.
>
> **[8:35](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=515)** That was our def get_lat_long.
>
> **[8:39](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=519)** This function doesn't need to have any arguments.
>
> **[8:43](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=523)** It only needs to refer to the class instance.
>
> **[8:47](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=527)** Next, we want this function to simply return the latitude and the longitude.
>
> **[8:52](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=532)** Additionally, we want to do this in a tuple format, so we'll create our tuple here.
>
> **[8:57](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=537)** We should return our latitude and our longitude.
>
> **[9:04](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=544)** Make sure we save this.
>
> **[9:07](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=547)** After we've added this functionality, let's run our tests.
>
> **[9:12](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=552)** First, let's clear our output.
>
> **[9:15](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=555)** We want to run a fresh pytest run.
>
> **[9:18](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=558)** Oh wait, I spotted one error.
>
> **[9:20](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=560)** Let's fix this before proceeding.
>
> **[9:23](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=563)** Moving back to our Point class, let's make sure that we're actually returning the class instantiation of latitude and longitude.
>
> **[9:31](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=571)** We can do this by appending self for each.
>
> **[9:36](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=576)** After we've done that, let's save our file, and we'll move back to our terminal to run this test.
>
> **[9:42](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=582)** Again, we can type pytest with our keyword flag, and then map to run the test on the left.
>
> **[9:49](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=589)** It looks like our test_make_one_point has passed.
>
> **[9:53](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=593)** The last thing we need to deal with are a few PEP8 failures.
>
> **[9:57](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=597)** Over two errors, the first one expects that there be two blank lines in front of our test_make_one_point function.
>
> **[10:04](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=604)** The next one expects a blank line at the end of the file.
>
> **[10:08](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=608)** However, we can see that the file to the left has no blank line.
>
> **[10:12](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=612)** This indicates to me that there might be a disconnect between the container and the VS Code configuration.
>
> **[10:19](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=619)** We can get by this for this video by adding a blank line to the end of this file.
>
> **[10:24](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=624)** This is how we'll handle this minor bug for this course.
>
> **[10:27](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=627)** However, in your own testing environment, this shouldn't be something you need to do.
>
> **[10:32](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=632)** The first thing I'll do is add that extra blank line that we need in front of our test function.
>
> **[10:37](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=637)** The next thing I'll do is go to the bottom of our file and add another blank line, making sure to remove any whitespace proceeding it.
>
> **[10:45](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=645)** Make sure to save that file and then we'll move back to our terminal and run pytest -k and then map.
>
> **[10:53](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=653)** Aha.
>
> **[10:54](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=654)** We can see here that our test_make_one_point has passed and so are the linting tests.
>
> **[10:58](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=658)** We're now in a green state.
>
> **[11:01](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=661)** Now, you've iterated through the red/green development process, a part of test-driven development.
>
> **[11:06](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=666)** This type of iteration will help us keep in mind what types of core functionality we want to include in our source code.
>
> **[11:13](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=673)** It will also help us isolate and fix potential errors in small chunks, rather than writing our code in large sweeps.
>
> **[11:20](https://www.linkedin.com/learning/unit-testing-in-python/basic-tests-and-assertions?u=76281980&t=680)** This helps us avoid the need to tackle multiple types of errors at once.

> [!info]- Semantic Content
>
> **Code Keywords:** let (25), function (12), pass (6), class, (5), case, (4)
> **CLI Commands:** make (11), docker (7), python (3), find (1)
> **Code Identifiers:** test_make_one_point (5), mapmaker_start (3), get_lat_long (3), test_mapmaker_start (1), test_mapmaker (1)
> **Tools:** terminal (8), vs code (5)
> **Exercise Files:** source code (7)
> **Versions:** 14.7167 (2), 17.4677 (1)
> **Cross-References:** go back to (1), we mentioned (1), we talked about (1)
> **Definitions:** is a  (2), in other words (1)

#### Exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=0)** - [Instructor] Like mentioned earlier, in test driven Python, we want to think about behaviors including unwanted behaviors.
>
> **[0:06](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=6)** In our case, our program should validate its inputs, output results, and actions to be performed.
>
> **[0:12](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=12)** If any of the aforementioned are unexpected, we have two choices.
>
> **[0:16](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=16)** We can make our system explicitly raise an exception so it avoids completing the wrong behavior.
>
> **[0:22](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=22)** This spares your intended end user from encountering errors and avoids malfunctions that could degrade the larger system itself.
>
> **[0:29](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=29)** In other cases, we may want the system to continue code execution while avoiding the unwanted behavior.
>
> **[0:35](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=35)** In this case, the system would log that it didn't complete an action to the user, and continue running.
>
> **[0:41](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=41)** In our case, we will opt for the former, and explicitly raise an exception.
>
> **[0:46](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=46)** To indicate that an exception is to be expected in pytest, you must use a context manager like so.
>
> **[0:52](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=52)** Here, in this test, we can see on lines 10 and 11 this comment that includes the pytest context manager.
>
> **[1:00](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=60)** In pytest, you can use the context manager to capture an exception which you can see on line 11.
>
> **[1:07](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=67)** Manually here, we're raising a generic exception, and for pytest, if this context manager is able to raise an exception, the test will subsequently pass.
>
> **[1:17](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=77)** If the context manager does not catch an exception then the test will fail.
>
> **[1:22](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=82)** Let's try using this by adding validation capabilities to our point class.
>
> **[1:26](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=86)** We want our user to only be able to create latitude coordinates that are either more than or equal to -90 or less than or equal to 90.
>
> **[1:36](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=96)** For our longitude coordinate, we want our user to create points that are either more than or equal to -180 or less than or equal to 180.
>
> **[1:44](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=104)** To catch given coordinates that are beyond these ranges, we can use our context manager to isolate the unwanted behavior and communicate the expectation that an exception should be explicitly raised.
>
> **[1:56](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=116)** If the context manager catches such an error, the test will pass when we run pytest.
>
> **[2:01](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=121)** Let's begin by editing our test.
>
> **[2:04](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=124)** I'm going to adjust the terminal window slightly.
>
> **[2:09](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=129)** First, we need to import pytest to make use of the context manager.
>
> **[2:14](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=134)** Then, we can move to the test called test_invalid_point_generation.
>
> **[2:18](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=138)** On line 13, we can remove the pass keyword, which we needed as a placeholder while the test was not in use.
>
> **[2:26](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=146)** We'll also uncomment the context manager.
>
> **[2:30](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=150)** We'll move forward to make use of our context manager by first instantiating a point.
>
> **[2:35](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=155)** For this section, we don't need to assign it to a variable.
>
> **[2:40](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=160)** And we'll first give it a city name, a latitude, and a longitude.
>
> **[2:44](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=164)** I'll choose a city I've been really wanting to go to, Buenos Aires.
>
> **[2:49](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=169)** Next, we'll give it a latitude.
>
> **[2:51](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=171)** For this, we'll make it valid.
>
> **[2:54](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=174)** For the longitude value, we'll give it something that violates the rules that we set out.
>
> **[2:59](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=179)** Let's say this is -555 which is less than 180, which we don't want.
>
> **[3:05](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=185)** And then give it just a realistic format.
>
> **[3:08](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=188)** After we've done this, let's try running our test.
>
> **[3:12](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=192)** Just like before, we can run pytest -k but instead let's use a new keyword.
>
> **[3:19](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=199)** For this test, it's called test exception start.
>
> **[3:23](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=203)** We can just say pytest -k except.
>
> **[3:27](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=207)** We'll see that this has failed because no exception has been raised.
>
> **[3:32](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=212)** We will need to edit our source code in order to raise an exception.
>
> **[3:36](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=216)** Let's do that.
>
> **[3:37](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=217)** In our case, we want to add conditional statements to the init method to check the parameters given when a point is initialized.
>
> **[3:45](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=225)** First, we'll check the validity of the latitude parameter, and also our longitude parameter.
>
> **[3:50](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=230)** If either don't adhere to the rule we created, it will throw a value error.
>
> **[3:54](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=234)** With this error, we want to also define a custom message.
>
> **[4:03](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=243)** Moving to the terminal, we can run our test again, and this time we should see an exception was raised.
>
> **[4:13](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=253)** Here, if we scroll up a little bit in our terminal, we should see that our test indeed passed.
>
> **[4:20](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=260)** We have a few linting errors that we can fix.
>
> **[4:25](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=265)** The first thing we can do is remove the white space.
>
> **[4:31](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=271)** We do that first from line 14, and then remove the white space from the final line, 13.
>
> **[4:38](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=278)** You'll also see the error saying that local variable exp is assigned to, but never used.
>
> **[4:44](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=284)** We can make use of this variable in a few different ways.
>
> **[4:47](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=287)** The first one is to examine what the error message is.
>
> **[4:51](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=291)** As you can see on the right, we set a very clear error message, and we can make sure that when we raise an exception that it indeed returns the error message we expect.
>
> **[5:01](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=301)** If you've never handled this exception object before, you can examine it as you run your test.
>
> **[5:07](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=307)** We'll do this by going back in and adding in a break point.
>
> **[5:11](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=311)** We specifically unindented, so it's not within the context manager because the messages return after the context manager exits.
>
> **[5:19](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=319)** Once we save this, we should go back to pytest.
>
> **[5:27](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=327)** In this state, let's examine what variables are available to us in the debugging session by running the following.
>
> **[5:33](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=333)** {k: v for k,v in locals().items() if '__' not in k and 'pdb' not in k}.
>
> **[5:45](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=345)** I spot one small error, if we go back.
>
> **[5:48](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=348)** We have to make sure that we pass parenthesis to items.
>
> **[5:54](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=354)** This brings back a dictionary of all the variables available during the test run.
>
> **[5:58](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=358)** As we can see here, the variable exp that we set earlier is down below.
>
> **[6:04](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=364)** In order to see how we can access this object, we can use dir, a function to examine variables on exp and we can see there are a lot of possible methods associated with this variable.
>
> **[6:17](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=377)** Because the exp variable is an exception info object, we can use the value function to return the value of our message.
>
> **[6:26](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=386)** We can do that by typing exp.value.
>
> **[6:29](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=389)** And here, we can see, ValueError invalid latitude longitude combination.
>
> **[6:34](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=394)** Moving forward, we don't want the value error object, we only want its string representation.
>
> **[6:39](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=399)** To do so, we can type str(exp.value) and then right there we return it straight in the debugger.
>
> **[6:50](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=410)** We can add this to the test as follows.
>
> **[6:54](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=414)** We can first remove our usage of the breakpoint, and instead assert that str(exp.value) =
>
> **[7:05](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=425)** 'Invalid latitude, longitude combination'.
>
> **[7:12](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=432)** Additionally, since we know this is a ValueError, we can remove the generic exception on line 11, and replace that with ValueError.
>
> **[7:20](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=440)** Make sure to save your file, and we'll move back down to the terminal.
>
> **[7:25](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=445)** Exit from the debugger, we'll clear our session one more time, and then run pytest with our keyword argument.
>
> **[7:37](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=457)** And now we can see that our test has been successful.
>
> **[7:40](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=460)** Creating exceptions like this help us validate objects we create and test to make sure that they adhere to our desired functionality.
>
> **[7:46](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=466)** We test this in order to make sure that unwanted behavior throws an exception under the right conditions and includes the right messaging.
>
> **[7:53](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=473)** Down the line, if source code changes, and the exception is no long thrown, pytest will raise an error, alerting you that the exception is no longer catching unwanted behavior.
>
> **[8:03](https://www.linkedin.com/learning/unit-testing-in-python/exceptions?u=76281980&t=483)** This alert can help us navigate how to refactor our code further or catch new additions that may have caused old tests to no longer pass.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), raise (6), pass (5), case, (4), this, (3)
> **CLI Commands:** make (10), python (1)
> **Tools:** terminal (4)
> **UI Navigation:** go to (1), scroll up (1)
> **Exercise Files:** source code (2)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** test_invalid_point_generation (1)
> **Cross-References:** go back to (1)

#### Challenge: Exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=0)** - [Instructor] Now that we can raise an exception for improper latitude and longitude coordinates, how about trying to create another exception?
>
> **[0:13](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=13)** We want the user to supply a city name that can only be a string object.
>
> **[0:18](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=18)** If they don't do this, we should throw an error if another data type is provided.
>
> **[0:23](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=23)** Make sure to begin writing from the test, then run pytest to spot the test failure.
>
> **[0:30](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=30)** After doing so, you can write the accompanying source code to make the test pass.
>
> **[0:35](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=35)** One special note.
>
> **[0:36](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=36)** In the original code, we expected a value error to be raised or a type error would be more appropriate.
>
> **[0:43](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=43)** Here's one hint.
>
> **[0:45](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=45)** Try adding validation logic to the instantiation method of the point class.
>
> **[0:50](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=50)** Remember that you can add in the built-in breakpoint function so that you can examine the current variables and objects that you're able to access during your test run.
>
> **[0:59](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=59)** This challenge should take you about five minutes.
>
> **[1:02](https://www.linkedin.com/learning/unit-testing-in-python/challenge-exceptions?u=76281980&t=62)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (1), this, (1), throw (1), pass (1), class. (1)
> **CLI Commands:** make (2)
> **Exercise Files:** source code (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=0)** - [Instructor] Here's one manner of completing this challenge.
>
> **[0:08](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=8)** We can begin by adding an invalid point whose name will be five instead of a standard string.
>
> **[0:13](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=13)** You can see this on line 16.
>
> **[0:15](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=15)** Since we want to create an isolated test that only checks the validity of the city name argument, let's give a valid latitude and longitude coordinate.
>
> **[0:24](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=24)** When you run pytest, you should see an error at this point because we don't have a matching source code function to trigger this error.
>
> **[0:31](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=31)** When moving to update it, you could have done so as follows: expanding the window with our source code, we can see the following: we can check if the name is a string instance during the initialization of the point and its init method.
>
> **[0:46](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=46)** You can opt to either use is instance or type methods to make this validation.
>
> **[0:52](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=52)** In my case, I chose to use is instance.
>
> **[0:56](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=56)** If this function returns false, we want to raise a value error.
>
> **[1:00](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=60)** Additionally, if we don't trigger a value error, we can move on to assigning our name argument to our class instantiation of name.
>
> **[1:08](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=68)** Once we've done this, we can rerun pytest, and our test should pass.
>
> **[1:12](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=72)** As we've seen, exception testing is a great way to define unwanted behaviors and make sure your code handles them appropriately.
>
> **[1:19](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=79)** Next, we will tie this into how we structure expected positive and unexpected negative case testing into our test suite.
>
> **[1:27](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=87)** For more practice, try creating a map class.
>
> **[1:29](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=89)** This class should assemble points you've created into a data structure.
>
> **[1:35](https://www.linkedin.com/learning/unit-testing-in-python/solution-exceptions?u=76281980&t=95)** Create one test to make sure the map has the appropriate points, and create another test to raise an exception if you assert the map has a point it has not previously stored.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), raise (2), let (1), case, (1), this, (1)
> **CLI Commands:** make (3)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (2)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Happy path testing
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=0)** - [Instructor] Now that you've seen how to test for expected and unexpected behavior with assertions and exceptions, we should begin thinking about how to structure out test in a way that helps us show which behaviors are intended, and which unexpected ones our system should guard against.
>
> **[0:16](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=16)** This will help you and other developers gain a clear idea of what behaviors your system should carry out.
>
> **[0:22](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=22)** It will also help you focus on creating code that is straightforward to use since you'll be the first person utilizing it in your test.
>
> **[0:30](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=30)** While it may be tempting to lump both tests to show how positive and negative behaviors are handled into the same test function, we should separate this logic.
>
> **[0:39](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=39)** We can do this by creating one test function that displays a happy path test for positive test behaviors.
>
> **[0:47](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=47)** A separate function should show the function sad path for negative case that we'd like to validate against.
>
> **[0:53](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=53)** Either guarding against it by halting the flow of code execution, in other words throwing an exception, or by gracefully logging that an action could not be taken and continuing code execution.
>
> **[1:05](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=65)** More specifically, sad path test, also know as negative case test, should show how your system validates or raises errors when encountering invalid input data.
>
> **[1:16](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=76)** Let's explore this type of testing in our next example.
>
> **[1:21](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=81)** Parsing, mapping, and aggregating data from file input is a common real life use case you may encounter.
>
> **[1:27](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=87)** In this next example, we have a CSV reader.
>
> **[1:31](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=91)** It can parse a file and return its data.
>
> **[1:34](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=94)** Each row of data will be represented as a dictionary, and for each row, we will convert a few values to float values.
>
> **[1:41](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=101)** Those being the latitude, longitude, and altitude.
>
> **[1:45](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=105)** If we are unable to do such, we'll raise an exception.
>
> **[1:49](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=109)** Moving back to our test, let's examine the test we have so far.
>
> **[1:55](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=115)** We first have a very simple test that checks to make sure the CSV reader parsed the correct headers.
>
> **[2:00](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=120)** The CSV file that we are parsing includes the following headers: Country, City, State or Province, Lat, Long, or Altitude.
>
> **[2:08](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=128)** This serves as a simple happy path test.
>
> **[2:11](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=131)** We are making sure that the CSV reader has completed the behavior we expected and has parsed the right header fields.
>
> **[2:17](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=137)** Let's build out another happy path test together.
>
> **[2:20](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=140)** We can copy the following line from the previous test to get us started.
>
> **[2:25](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=145)** This line is loading our data into a data variable.
>
> **[2:29](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=149)** In a later video, we will check more about the process data function that it's calling.
>
> **[2:33](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=153)** For now, we're using it to call the CSV reader and return our data object as a list of rows.
>
> **[2:40](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=160)** Each row will be represented as a dictionary.
>
> **[2:43](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=163)** Now that we've loaded our data, we want to check that each row within the data has the appropriate data type.
>
> **[2:50](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=170)** Before moving forward, let's add a breakpoint and run pytest -k with a shorter name to our file so that we can examine the structure of our test.
>
> **[3:00](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=180)** If you'd like to open the terminal quickly, you can use the shortcut Control + back tick so it opens up below.
>
> **[3:07](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=187)** Now that the terminal is open, let's run pytest.
>
> **[3:10](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=190)** This time, our keyword argument will be happy, short for test happy path start.py.
>
> **[3:17](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=197)** Here in our debugger, since we've placed the breakpoint right under the instantiation of the data object, we can access it directly.
>
> **[3:25](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=205)** Let's start by checking out its type.
>
> **[3:29](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=209)** We can see that it's a list.
>
> **[3:30](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=210)** Let's look at its first entry.
>
> **[3:34](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=214)** We will now see that the first entry is an ordered dictionary of column information.
>
> **[3:39](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=219)** Since an ordered dictionary in Python is accessible, just like a normal dictionary, we can access information about it as such.
>
> **[3:46](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=226)** For this first entry, let's access the country information.
>
> **[3:54](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=234)** We will return the row's entry value for country, which is Andorra.
>
> **[3:58](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=238)** While we don't want to test this hard-coded value, it would be helpful to make sure each row's country entry is a string, and we can try this out in the debugger as follows.
>
> **[4:08](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=248)** The type is instance, we want to access that first object of the dictionary, consult its country entry, and then check if its a string.
>
> **[4:21](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=261)** And here, we can see that it returns true.
>
> **[4:24](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=264)** Now that we understand how to interact with a data object, let's do so in our code.
>
> **[4:30](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=270)** Before moving back to the IDE, let's exit out of Pdb and clear our output.
>
> **[4:37](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=277)** Let's move further down in our test.
>
> **[4:40](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=280)** We first want to iterate through our data object, which is a list.
>
> **[4:45](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=285)** We can do so by saying, for row in data, and then complete operations here.
>
> **[4:53](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=293)** We want to assert whether or not, let's say, our country row is an instance of a string, and we can do so just as we did in our debugger.
>
> **[5:03](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=303)** With a small variation since we're iterating on a row basis.
>
> **[5:08](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=308)** And we can copy this three times.
>
> **[5:12](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=312)** We want to do this, also, for another field in our CSV file.
>
> **[5:17](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=317)** Which is city.
>
> **[5:19](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=319)** Another one, which is state or province.
>
> **[5:25](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=325)** And remember, to the right, we were talking about three fields that we converted to a float.
>
> **[5:29](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=329)** We can use this line, but change it slightly.
>
> **[5:33](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=333)** Instead, this instance will check against whether or not the object is a float, and this time it will check the latitude.
>
> **[5:41](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=341)** Next, we'll check the longitude argument, and then lastly, altitude.
>
> **[5:51](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=351)** Additionally, we can cross-reference our CSV file and make sure the data was transmitted in full by adding the following to our test.
>
> **[6:00](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=360)** We can first assert that the length of our data is equal to 180, and then we can also assert that the first object of our data includes, let's say we have the country of Andorra, which we saw below.
>
> **[6:20](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=380)** And then, lastly, we want to check that the final country listed is the United States.
>
> **[6:27](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=387)** If you're wondering more about the underlying CSV file that we're pulling in to generate this data, you can check it out yourself.
>
> **[6:35](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=395)** Moving to that file, here on the right, I've pulled it up.
>
> **[6:40](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=400)** Here we have our clean_map.csv, and all those headings that I mentioned before are right at the top.
>
> **[6:46](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=406)** If we move back to our test, we're good to go to run pytest.
>
> **[6:52](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=412)** So again, we run pytest with our keyword argument, and you'll see one small issue, we've kept our breakpoint.
>
> **[6:59](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=419)** Let's exit out of this, clear this below, and then we're going to move back up into our source code.
>
> **[7:07](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=427)** After we remove our breakpoint, we can move back into our terminal to run pytest.
>
> **[7:16](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=436)** Examining this one more time, let's see what the failure is.
>
> **[7:19](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=439)** All right, it looks like our test has passed, and we have a few linting checks that we need to take care of.
>
> **[7:26](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=446)** First, let's remove the white space on line 30.
>
> **[7:29](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=449)** In the process, we also removed the extra blank line that was right above line 32, which is now line 31.
>
> **[7:38](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=458)** Let's clear our output and run pytest once more.
>
> **[7:45](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=465)** And now, our code has passed.
>
> **[7:47](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=467)** Practically speaking, if you're making code that reads data from a CSV, we want to validate that input to make sure it's the right kind of information, and if there's a instance that we have malformed data.
>
> **[7:59](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=479)** We can begin to separate expected and unexpected behaviors, and to sad and to happy path tests.
>
> **[8:04](https://www.linkedin.com/learning/unit-testing-in-python/happy-path-testing?u=76281980&t=484)** This will show others reading your code what the desired and undesired functionality of your project entails.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (5), assert (3), type. (2), this, (2)
> **Env Vars:** csv (9), ide (1)
> **Definitions:** is a  (4), is an  (2), in other words (1), short for (1)
> **CLI Commands:** make (4), python (1)
> **Tools:** terminal (3)
> **File Paths:** start.py (1), clean_map.csv (1)
> **UI Navigation:** open the (1), go to (1)
> **Code Identifiers:** clean_map (1)

#### Sad path testing
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=0)** - [Instructor] When creating unit tests, we don't want to forget sad path tests, also known as negative case tests.
>
> **[0:07](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=7)** Let's create a sad path test that demonstrates the validation capabilities within the CSV reader on lines 9 through 11.
>
> **[0:16](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=16)** In the resources folder, you'll find a malformed CSV file.
>
> **[0:22](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=22)** This file contains strings in one of the three columns we want to convert to a float.
>
> **[0:27](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=27)** For instance, on line 2 for Cape Verde, you'll see that its altitude value is indeed a string.
>
> **[0:33](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=33)** The same for India on line 3, its latitude value is a value that can't be cast.
>
> **[0:40](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=40)** We can then write a new test that references this malformed file.
>
> **[0:44](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=44)** In this video, we'll primarily show how to create tests that anticipate exceptions or errors.
>
> **[0:50](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=50)** Doing this shares important information you may find while developing with others on your team.
>
> **[0:55](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=55)** Within the example, you'll notice a city_list_location_malformed function.
>
> **[1:02](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=62)** This function is called within our test to supply a CSV path.
>
> **[1:06](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=66)** Above it, you'll see the annotation @pytest.fixture(scope="function").
>
> **[1:12](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=72)** We won't cover fixture annotations in this video, but we will cover them in depth in Chapter 3.
>
> **[1:18](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=78)** First, we'll pull back up the data processor as a reference.
>
> **[1:23](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=83)** Moving to our test, first, we need to import pytest.
>
> **[1:28](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=88)** Then we want to move to import our data processor.
>
> **[1:34](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=94)** Moving to our test, we want to uncomment line 18.
>
> **[1:37](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=97)** We'll need to wrap this in the exceptions content manager.
>
> **[1:49](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=109)** Let's move to run pytest again.
>
> **[1:52](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=112)** Below, I can see I'm not yet in my docker container.
>
> **[1:55](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=115)** I can fix that by running docker compose run test sh.
>
> **[2:01](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=121)** Now, let's run pytest.
>
> **[2:03](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=123)** We'll do it as we have before with our keyword argument, but this time, use the keyword sad, short for test sad path start.py.
>
> **[2:12](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=132)** If we look into our output, we can see that our test_csv_reader_malformed_data_contents function passed.
>
> **[2:20](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=140)** We just have a few things to edit in our linter.
>
> **[2:24](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=144)** It says here that the variable exp is assigned but never used.
>
> **[2:28](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=148)** Let's make our test more robust by actually exposing the error message that the data processor brings back.
>
> **[2:35](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=155)** First, I'll clear my contents below, and then we'll move back up into the test.
>
> **[2:42](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=162)** Let's update our test to assert that the caught exception is the message we expect.
>
> **[2:47](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=167)** At this point, we're not quite sure what it might be, so let's just leave a placeholder.
>
> **[2:53](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=173)** When we run our test, we should see the placeholder compare to the actual message.
>
> **[3:00](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=180)** Moving back to the terminal, we'll run pytest again.
>
> **[3:06](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=186)** If we go up and look at our output, we should see that the word unsure was compared to the actual exception message.
>
> **[3:14](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=194)** In our case, the CSV reader to the right is returning, "Could not convert string to float: not_an_altitude."
>
> **[3:22](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=202)** That's the value that we saw for Cape Verde on the second line of the malformed CSV.
>
> **[3:27](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=207)** Let's update our test to have this error message.
>
> **[3:30](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=210)** We can do that by first copying the error message that we see.
>
> **[3:35](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=215)** And then in our test, we can set that in.
>
> **[3:39](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=219)** Let's save our file.
>
> **[3:41](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=221)** And back in our terminal, we can clear our output once more and run pytest.
>
> **[3:50](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=230)** And we can check.
>
> **[3:53](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=233)** It seems I forgot one thing, the last quotation mark.
>
> **[3:55](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=235)** Let's add that back in.
>
> **[3:58](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=238)** Once we've added in that quotation mark, our test should be good to go.
>
> **[4:04](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=244)** If we look at the test results, we can see that our test indeed has passed, we just have a few linting things to edit so that we can get the test fully in the green.
>
> **[4:14](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=254)** To start, going back into the file, let's make sure to add in a space below line 21, and then on line 17, it appears we have extra white space, so let's remove that.
>
> **[4:30](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=270)** Let's make sure to clear our output, and then run pytest once more.
>
> **[4:36](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=276)** And ha, here we have it.
>
> **[4:38](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=278)** Not only has our test gone green, but so has our lint checks.
>
> **[4:42](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=282)** Negative case testing like this highlights unintended functionality that we want our code to guard against.
>
> **[4:49](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=289)** This can help another developer looking through your code base understand the core features of your scripts rather quickly.
>
> **[4:56](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=296)** It can also help them understand what types of CSV files the data processor can read.
>
> **[5:02](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=302)** This helps others using your code be able to use it as your test outline.
>
> **[5:07](https://www.linkedin.com/learning/unit-testing-in-python/sad-path-testing?u=76281980&t=307)** While this may not guard against all potential negative cases, it can put others on the right track when using your system.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (4), assert (1), case, (1)
> **CLI Commands:** make (3), find (2), docker (2)
> **Env Vars:** csv (6)
> **Definitions:** known as (1), is a  (1), is called (1), short for (1)
> **Code Identifiers:** city_list_location_malformed (1), test_csv_reader_malformed_data_contents (1), not_an_altitude (1)
> **Tools:** terminal (2)
> **Best Practices:** make sure to (2)
> **File Paths:** start.py (1)


### 3. Test Automation with Fixtures and Parametrization

#### Fixtures to amortize costly operations
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=0)** - [Instructor] In the previous chapter, we focused on the basics of testing using test-driven development.
>
> **[0:06](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=6)** Now we'll walk through existing testing code snippets to highlight how we can effectively use pytest.
>
> **[0:12](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=12)** pytest is a great framework to organize how you test, making it clear for other developers.
>
> **[0:18](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=18)** As you continue setting up your test suite, you may find that you need to test operations that require set up and tear down of network access or a connection of some sort.
>
> **[0:28](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=28)** One example of this may be a database connection.
>
> **[0:31](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=31)** Imagine if several test functions are using a mock database and you're setting up test operations on it.
>
> **[0:37](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=37)** You can implement these functions to use a common database through a fixture to streamline setup and avoid code duplication.
>
> **[0:44](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=44)** Moreover, you can use scoping parameters on a fixture to set up your database, ensuring that it runs once for the entire test session or module instead of setting it up for each test.
>
> **[0:56](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=56)** When using fixtures, we can scope them according to the following four scopes.
>
> **[1:01](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=61)** Here they are displayed from the highest scope, which is our test session, down to the lowest scope, the function level.
>
> **[1:09](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=69)** Using scoping minimizes the number of active fixtures during test runs and may help you avoid adding operations that slow down your entire test suite.
>
> **[1:18](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=78)** This happens because they're invoked for the entire session rather than for each function.
>
> **[1:25](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=85)** In our current code, we have a Happy Path and Sad Path test.
>
> **[1:29](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=89)** The Happy Path test, starting on line five, transforms our data to include population counts for each row of the country data.
>
> **[1:38](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=98)** It appends a new column indicating if the row was updated or not.
>
> **[1:43](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=103)** Looking to the clean_map_csv file, on line two, since the Country of Andorra is indicated in the population dictionary, it would gain an additional population field with the value from the dictionary.
>
> **[1:56](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=116)** After it's been transformed, it will also receive a field updated and that would evaluate to true since it has been updated.
>
> **[2:04](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=124)** On the other hand, the Country Angola on line nine is not indicated in our population dictionary.
>
> **[2:11](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=131)** Its population field would be a non-value.
>
> **[2:17](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=137)** Back in our code, we have a Sad Path test on line 33.
>
> **[2:21](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=141)** Within this test, we make sure that we cannot attempt to transform the data twice on lines 58 through 60.
>
> **[2:30](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=150)** We define the inability to transform data twice in the following script, in our source code, in map_population update.py.
>
> **[2:38](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=158)** It initially loads the data as being untransformed.
>
> **[2:42](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=162)** The state of the transformation is tracked and the updated_population_count function as a true or false value.
>
> **[2:50](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=170)** Then, the add_population function proceeds to either add a population entry to the row or add an null value if none is available in the population dictionary.
>
> **[3:00](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=180)** However, if the row has previously been transformed, this function will raise an exception.
>
> **[3:06](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=186)** You should not be able to transform the data twice.
>
> **[3:10](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=190)** Moving back to the test, you can see we've duplicated quite a bit of code needed to set up both of the functions.
>
> **[3:17](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=197)** The lines 39 to 54 in the Sad Path test are identical to the lines nine to 24 in our Happy Path test.
>
> **[3:28](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=208)** We can streamline our common setup across these functions by moving it into a fixture.
>
> **[3:34](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=214)** We want to be careful to set this fixture scope to the function.
>
> **[3:38](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=218)** Since we are testing that the data can't be transformed twice in the Sad Path test, we don't want the proceedings test transformation to impact it.
>
> **[3:46](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=226)** We want to pay special attention to this when unit testing.
>
> **[3:49](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=229)** We want to avoid having closely coupled tests.
>
> **[3:53](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=233)** I want to show you how we can streamline these tests.
>
> **[3:56](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=236)** I moved over to the branch showing the final state of the project, the final-state-per-chapter branch.
>
> **[4:03](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=243)** And the inversion of this file, text_fixtures_end.py, I've added two fixtures.
>
> **[4:09](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=249)** On line six, we have the map_data_location fixture, which yields the location of the clean_map.csv data once per test session.
>
> **[4:18](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=258)** Next on line 10, the prep_transform_data fixture takes the map_data_location fixture as an argument.
>
> **[4:25](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=265)** On line 25, it then instantiates a map_data object.
>
> **[4:30](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=270)** This object is created using the data loaded on line 24 and a Boolean value of false to indicate that the data has not been transformed previously to include population info.
>
> **[4:42](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=282)** We've also defined our population dictionary here.
>
> **[4:46](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=286)** In the final step on line 26, we yield the data to be transformed in the population dictionary.
>
> **[4:54](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=294)** Using the prep_transform_data fixture, we can update our Sad and Happy Path tests.
>
> **[4:59](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=299)** They can now use the fixture as an argument.
>
> **[5:01](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=301)** This removes the need to do initial test setup in either function.
>
> **[5:06](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=306)** Using fixtures, limits code duplication and potential points of error in the case that our duplicated code does not match.
>
> **[5:13](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=313)** It also streamlines each test so that anyone reading it can quickly surmise the core functionality being tested in each function.
>
> **[5:20](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=320)** Additionally, if you have a utility function that's ubiquitous and used by all of your other test functions, consider including it as a fixture.
>
> **[5:30](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=330)** This will allow you to control the scope of its invocation and usage throughout the test suite.
>
> **[5:35](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=335)** First, let's create a fixture called prep_transform_data.
>
> **[5:40](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=340)** In order to do this, we should use the pytest decorator, @pytest fixture.
>
> **[5:45](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=345)** I'm going to set the scope to function.
>
> **[5:48](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=348)** Here, we should first add our population dictionary and then the operations performed upon it.
>
> **[5:55](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=355)** First, we load our data using the CSV reader, and then we prep the data to be transformed.
>
> **[6:03](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=363)** Using the map_population_update function, we load the data as map data and we set its initial transformation value as false.
>
> **[6:10](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=370)** At this point, we have not transformed the data.
>
> **[6:13](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=373)** Now we're ready.
>
> **[6:15](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=375)** We can yield the data to transform and also the population dictionary.
>
> **[6:20](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=380)** One helpful thing here to do as well.
>
> **[6:22](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=382)** Instead of manually having the map_data_location be here, we can make that into a fixture as well.
>
> **[6:28](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=388)** Moving that to be a separate fixture that is invoked on the session scope, we can yield to the location to our clean_map.csv.
>
> **[6:37](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=397)** At this point, you should have two fixtures: one, giving us a location of our data; and a second one that preps the transformation data.
>
> **[6:45](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=405)** This will be used in our Happy Path and Sad Path functions.
>
> **[6:50](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=410)** In our Happy path test, we can edit that function to use the prep_transform_data as an input argument.
>
> **[6:57](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=417)** From there, we can access the fixture data and set that to the data to transform in a population_dict and then use that to transform the data.
>
> **[7:06](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=426)** After that, we can move on to making the assertions as we had before.
>
> **[7:12](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=432)** In our Sad Path test, we want to exactly the same thing using the fixture as an argument and then setting the data that the fixture has yielded to a data to transform and population_dict variable.
>
> **[7:24](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=444)** And then we can run our function once more to see that it detects the second transformation, which should raise an exception.
>
> **[7:31](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=451)** By using a fixture, we've saved the need to duplicate our test setup, including the population dictionary and the use of the CSV reader.
>
> **[7:40](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=460)** This helps us limit code duplication and potential points of error, in our case, that duplicated code doesn't match, for example.
>
> **[7:48](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=468)** And also it streamlines each test so that anyone reading it can quickly surmise the core functionality being tested in each function instead of seeing duplicated code.
>
> **[7:57](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=477)** Lastly, if you have a utility function that is ubiquitous and all your functions use it, you can consider setting the scope to also include autouse = true.
>
> **[8:08](https://www.linkedin.com/learning/unit-testing-in-python/fixtures-to-amortize-costly-operations?u=76281980&t=488)** This means that your fixture decorator will be used automatically even without being passed to your test functions explicitly.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), yield (3), raise (2), continue (1), require (1)
> **Code Identifiers:** prep_transform_data (4), map_data_location (3), clean_map (2), population_dict (2), clean_map_csv (1)
> **Prerequisites:** setup (4), set up (3)
> **File Paths:** clean_map.csv (2), update.py (1), text_fixtures_end.py (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** csv (2)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** imagine (1), for example (1)

#### Factory fixtures
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=0)** - [Instructor] So far, we've used fixtures to return hard coded objects directly.
>
> **[0:05](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=5)** We can instead customize our fixtures to return an object based on what arguments are passed to it.
>
> **[0:11](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=11)** This allows us to make use of the fixture as a factory, generating an object based on the needs of our tests.
>
> **[0:18](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=18)** Let's take a look at line 11, which has the process_data fixture in test_factory_start.py.
>
> **[0:24](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=24)** In this version of the test, our fixture is set up to process data for the clean_map.csv only.
>
> **[0:31](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=31)** This is because it uses the city_list_location fixture on line six.
>
> **[0:36](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=36)** That fixture is hard coding the location of the file.
>
> **[0:40](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=40)** If we wanted to process another CSV file or even JSON data, we would need to duplicate code.
>
> **[0:47](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=47)** You can see that on line 17 where we've created a separate fixture that hard codes the path to the malformed CSV, which will be used in our Sad Path test.
>
> **[0:56](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=56)** This is not ideal to continue testing in this fashion.
>
> **[0:59](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=59)** As an update, a more intuitive way to set up this function would be to reverse the logic shown and check that if a file name type is a JSON, for example, then use the JSON reader.
>
> **[1:11](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=71)** You would do this rather than using the not equal sign to check for the opposite.
>
> **[1:16](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=76)** At this point, we can rewrite the fixture to work as a factory.
>
> **[1:20](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=80)** Instead of returning an object directly, it can return a function that takes arguments, which impact how it creates and returns the ultimate data object we need.
>
> **[1:30](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=90)** For our purposes, generating a data object, either based on a clean map or invalid map, we can update the fixture to be more malleable.
>
> **[1:40](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=100)** Again, I've moved to the final state per chapter branch to show how we can refactor our tests.
>
> **[1:45](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=105)** To edit our process_data fixture to be used as a factory, we can add a nested function.
>
> **[1:52](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=112)** In this case, it is called _specify_type on line 16.
>
> **[1:57](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=117)** This allows us to pass a file name or type variable to the fixture.
>
> **[2:02](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=122)** Based on this variable, the fixture will either make use of the CSV reader or even a JSON reader in the conditional branches on line 19 through 21.
>
> **[2:13](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=133)** This allows subsequent test functions to access this factory fixture, like the Happy Path test does on line 33.
>
> **[2:22](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=142)** Not only does it use the fixture passed as an argument, but it can specify which file is needed for the test.
>
> **[2:29](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=149)** In the Sad Path function, it can also access the fixture.
>
> **[2:34](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=154)** This time though, it will specify that the malformed data is needed.
>
> **[2:38](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=158)** The fixture will proceed to call the correct data reader and yield the malformed data within the pytest context manager on lines 71 through 72.
>
> **[2:48](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=168)** Factory fixtures are one method of making our fixtures customizable.
>
> **[2:53](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=173)** If you choose to include factory fixtures in your code, be sure to keep track of dependencies.
>
> **[2:58](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=178)** For instance, in our code, we want to keep track of what argument is needed to make sure that the process_data fixture uses the right kind of data reader.
>
> **[3:07](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=187)** For extra practice, try adding a simple XML or JSON data_processor to our data_processor.py.
>
> **[3:15](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=195)** After doing that, update the factory fixture to also allow a user to pass in data in the appropriate format.
>
> **[3:22](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=202)** If you need help getting started, there's a JSON file with scooter data in test_resources_scooter.json.
>
> **[3:29](https://www.linkedin.com/learning/unit-testing-in-python/factory-fixtures?u=76281980&t=209)** A very simple implementation of a JSON reader can be found in the scripts folder.

> [!info]- Semantic Content
>
> **Env Vars:** json (7), csv (3), xml (1)
> **Code Keywords:** function (4), pass (2), let (1), continue (1), case, (1)
> **Code Identifiers:** process_data (3), data_processor (2), test_factory_start (1), clean_map (1), city_list_location (1)
> **File Paths:** test_factory_start.py (1), clean_map.csv (1), data_processor.py (1), test_resources_scooter.json (1)
> **CLI Commands:** make (3)
> **Prerequisites:** set up (2), getting started (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (1), for instance (1)

#### Parametrization
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=0)** - [Instructor] When making tests, you may realize that there are a few different cases you want your test to cover.
>
> **[0:05](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=5)** For instance, let's say you have a function that returns statistics, either a mean or a median for a specified country within our processed CSV data.
>
> **[0:16](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=16)** On line 28 of the test_parametrized_start.py file, you can see the test function verifying that a returned dictionary object contains the appropriate average altitude for Andorra.
>
> **[0:27](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=27)** On line 35, a separate test checks if the function returns a dictionary with the appropriate median altitude for the country as well.
>
> **[0:37](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=37)** We can use Pytest parameterization decorator to combine both of these happy path tests into one and also include other testing scenarios we'd like to check.
>
> **[0:47](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=47)** When looking at the Pytest documentation, you'll see information about the parametrized decorator.
>
> **[0:54](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=54)** Here you'll notice that they spell parametrize according to the British spelling, instead of the American alternative.
>
> **[1:00](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=60)** In the past there have been requests to add an alias until Pytest contributors add this alternative spelling, you have to remember the British spelling if you're from the US.
>
> **[1:12](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=72)** All right, let's get back to work in our IDE.
>
> **[1:15](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=75)** To refactor these tests into one parametrized happy path test, let's begin by renaming our function on line 28 to def altitude_stat_per_country.
>
> **[1:25](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=85)** We will also append the Pytest.mark parametrized decorator above our new function.
>
> **[1:33](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=93)** In this decorator, we can define a list or tuple of argument names.
>
> **[1:38](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=98)** We'll start by defining three arguments.
>
> **[1:41](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=101)** The first will be country, the next stat, and then expected.
>
> **[1:46](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=106)** Next, we also need to instantiate a list.
>
> **[1:50](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=110)** Each entry of the list will contain tuples containing our three arguments.
>
> **[1:55](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=115)** This will cause our function to run for each tuple in our decorator.
>
> **[1:59](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=119)** Country, stat and expected describe the contents of each tuple, but they also serve as arguments that will be needed in order for our test function to access the values within each tuple.
>
> **[2:10](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=130)** To get us started, let's say we run this for Andorra again, and the next, we want to check out the mean.
>
> **[2:20](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=140)** And let's just say that the mean is this value.
>
> **[2:25](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=145)** We'll do this again for the same country, but this time we'll look at its median, which is this value.
>
> **[2:35](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=155)** And then finally we'll do this for one other country.
>
> **[2:41](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=161)** And here we need to make sure that we close all of our parentheses.
>
> **[2:45](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=165)** Then we will update the function to use the tuple value supplied on each run.
>
> **[2:50](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=170)** Doing this will involve substituting the hard coded values on line 34, and then next on line 36, we should do this as well.
>
> **[3:04](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=184)** Finally, we can remove our function below.
>
> **[3:07](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=187)** It is no longer needed because the function on line 32 is testing both the case that we are looking for the mean and the median.
>
> **[3:14](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=194)** One small note.
>
> **[3:16](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=196)** This function should also contain the expected variable as another parameter of our test function.
>
> **[3:22](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=202)** This was left off in the original video.
>
> **[3:24](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=204)** We'll need this for our test to run the assertion.
>
> **[3:27](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=207)** Otherwise, Pytest will trigger an error, stating the variable expected is not defined.
>
> **[3:33](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=213)** Parametrization is a nifty tool to use when you'd like to automate your test to run over multiple scenarios.
>
> **[3:39](https://www.linkedin.com/learning/unit-testing-in-python/parametrization?u=76281980&t=219)** Additionally, it organizes your tests so that another developer can quickly understand which test scenarios are deemed important.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), let (5), finally, (1)
> **Code Identifiers:** test_parametrized_start (1), altitude_stat_per_country (1)
> **Env Vars:** csv (1), ide (1)
> **File Paths:** test_parametrized_start.py (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Parametrization
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=0)** - [Instructor] Alright, now it's your turn.
>
> **[0:07](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=7)** Here's a challenge for you to complete.
>
> **[0:10](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=10)** We have another test called test_csv_writer.
>
> **[0:13](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=13)** I would like you to update it to be parameterized with the following three scenarios.
>
> **[0:19](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=19)** Moving to the IDE, let's check out the test as it is written now in test_param_challenge.py on line 29.
>
> **[0:27](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=27)** On line 44, further down in this test, it uses a data aggregator to load the median statistic for Andorra.
>
> **[0:34](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=34)** And then, on line 46, it writes the data to a csv.
>
> **[0:39](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=39)** To focus this test on functionality, it is writing to string IO rather than an actual location on disk.
>
> **[0:47](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=47)** On line 48, we get the value written and finally assert that it is what we expect on line 49.
>
> **[0:54](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=54)** Please refactor this test so it can be run over the three scenarios commented out on line 32 through 34.
>
> **[1:01](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=61)** Here's one hint.
>
> **[1:03](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=63)** In the final assertion, you will need to inject the arguments applied to the function to replace certain parts of the string we compare as the result.
>
> **[1:11](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=71)** You can do this in Python 3.7 with F strings.
>
> **[1:15](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=75)** To do this, append an F in front of the string and surround the variable you'd like to insert in that string with curly braces.
>
> **[1:23](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=83)** For example, if you look to line 40, if at the beginning of the string we put F quotation curly brace stat end curly brace, that would inject the string statistic that we use for the csv writer.
>
> **[1:37](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=97)** This challenge should take you about five minutes.
>
> **[1:40](https://www.linkedin.com/learning/unit-testing-in-python/challenge-parametrization?u=76281980&t=100)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), assert (1), function (1), this, (1)
> **Code Identifiers:** test_csv_writer (1), test_param_challenge (1)
> **File Paths:** test_param_challenge.py (1)
> **CLI Commands:** python (1)
> **Env Vars:** ide (1)
> **Versions:** python 3 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Solution: Parameterization
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=0)** - [Instructor] Let's walk through the solution.
>
> **[0:07](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=7)** First, we can use the pytest parametrize decorator and append it to the top of our test as shown on line 29.
>
> **[0:14](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=14)** Next, we define three arguments: country, stat, and expected, which we will use within our test function.
>
> **[0:22](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=22)** Then, we should create a list with Tuple entries.
>
> **[0:26](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=26)** Each Tuple entry on lines 30 through 32 defines one of the three given test scenarios.
>
> **[0:32](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=32)** We must make sure to update the decorators to find attributes as our function arguments.
>
> **[0:37](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=37)** This is done on line 34.
>
> **[0:40](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=40)** Now we must move on to change other contents of this function.
>
> **[0:44](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=44)** For example, on line 36 which is aggregating our data into a statistic, we need to sub out the hard-coded country and the stat for our country and stat argument.
>
> **[0:56](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=56)** Then on line 41, we substitute stat, country, and expected into the final string.
>
> **[1:02](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=62)** This will be used to check if the retrieved csv data was written correctly.
>
> **[1:07](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=67)** Now that you've gotten practice parametrizing functions, this is a great way to automate your tests so that they run over multiple scenarios.
>
> **[1:15](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=75)** This allows you to not need to duplicate code into separate functions for each scenario.
>
> **[1:20](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=80)** If you want to take this work further, try creating a user class.
>
> **[1:24](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=84)** Each user should have a height and a favorite color.
>
> **[1:28](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=88)** Based on their height, create a function that awards them different types of candy.
>
> **[1:32](https://www.linkedin.com/learning/unit-testing-in-python/solution-parameterization?u=76281980&t=92)** Try working from the test first as you add in this functionality, and think of ways to parametrize your test.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (1), class. (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Organizing Your Pytest Project

#### Using Conftest.py for common functions
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=0)** - [Instructor] When you create a test suite, you may realize that you are using common test fixtures across multiple separate test files.
>
> **[0:08](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=8)** With conftest.py, we can store these common utility test fixtures there and access them globally within the testing suite.
>
> **[0:16](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=16)** Functions housed within conftest.py act as plug-ins that contain directory specific extension code that the base code in your test can call.
>
> **[0:26](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=26)** This extension code is often referred to as hook implementations.
>
> **[0:30](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=30)** This can be useful when you want to offer such extensibility without code duplication.
>
> **[0:36](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=36)** It's also helpful when you don't want certain non-essential setup or utility functions to be exposed in the code.
>
> **[0:43](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=43)** Additionally, if you're ever reading another developer's test suite and spot test function parameters that are not mentioned either in the file as fixtures or functions, then you should check the conftest.py file to see if those parameters reference a test fixture stored there.
>
> **[0:59](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=59)** Moving back to the IDE, let's look at our factory fixture process data.
>
> **[1:04](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=64)** We've used it here in this test and testconfteststart.py.
>
> **[1:09](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=69)** Instead of having it here, we can move that function and its entirety to conftest.py in our test folder.
>
> **[1:15](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=75)** Here, I've done so.
>
> **[1:18](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=78)** The same functionality has been specified on its own in conftest.py.
>
> **[1:23](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=83)** Moving back to our test file, we can remove this fixture in its entirety.
>
> **[1:31](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=91)** Lastly, make sure to remove the associated OS import and the data processor imports.
>
> **[1:37](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=97)** Those were used previously for the fixture when it was in this file.
>
> **[1:41](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=101)** We can now run pytest to make sure this test still passes.
>
> **[1:45](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=105)** We'll do it again using pytest in our keyword argument, and this time, I'll say conftest_start, and before I run this, I want to make sure I've saved this in the IDE, and here we see it.
>
> **[1:59](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=119)** Our test still passes even though the fixture is not directly in this file.
>
> **[2:03](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=123)** Using conftest.py helps us keep our test modules focused on the core behaviors we intend to test.
>
> **[2:09](https://www.linkedin.com/learning/unit-testing-in-python/using-conftest-py-for-common-functions?u=76281980&t=129)** Helper functions are loaded from conftest.py and your core testing logic is brought to the forefront.

> [!info]- Semantic Content
>
> **File Paths:** conftest.py (7), testconfteststart.py (1)
> **Code Keywords:** function (2), let (1), this, (1)
> **CLI Commands:** make (3)
> **Env Vars:** ide (2)
> **Code Identifiers:** conftest_start (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Modularizing conftest.py
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=0)** - [Instructor] In the previous example, our conftest.py file held two fixtures but imagine what would happen if your system grew.
>
> **[0:07](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=7)** This file could grow to contain a large amount of fixtures giving each one limited visibility.
>
> **[0:13](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=13)** One way to overcome this problem is to modularize your fixtures or store them in their own directories.
>
> **[0:19](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=19)** Then you can import them into conftest.py and use them as you had before.
>
> **[0:25](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=25)** You can achieve this in a few ways.
>
> **[0:27](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=27)** I'll show you two that I'm familiar with.
>
> **[0:30](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=30)** Before we begin, you'll notice that this file, conftest_start.py is nested under our test directory two levels deep.
>
> **[0:38](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=38)** It's under chapter four, video two.
>
> **[0:41](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=41)** This file is being shown for walkthrough purposes only.
>
> **[0:44](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=44)** Normally, conftest.py should be located directly under the test folder.
>
> **[0:49](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=49)** This gives other tests the ability to access its fixtures and functions directly.
>
> **[0:55](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=55)** To achieve modularization, first, let's delete our fixtures from conftest.py.
>
> **[1:04](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=64)** Make sure to leave one blank line at the end of this file.
>
> **[1:08](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=68)** Additionally, we can remove all of our imports except pytest.
>
> **[1:14](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=74)** Before proceeding, let's check out where I've moved these fixtures.
>
> **[1:18](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=78)** I've moved them to locations under the utility folder in our test suite.
>
> **[1:23](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=83)** Here, in cities.py, you'll see the fixture city_list_location is returning our test directory's path to our files.
>
> **[1:32](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=92)** Next, let's load these modules into conftest_stsart.py.
>
> **[1:37](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=97)** To get started, you could use the pytest plugins keyword and put them into a list making each line reference an import.
>
> **[1:51](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=111)** Before I run the test, I can even remove the pytest import.
>
> **[2:00](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=120)** And here we have it, your test still runs.
>
> **[2:03](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=123)** Now, let me show you another way we could achieve the same thing.
>
> **[2:06](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=126)** I'm going to clear the output before I move back into the IDE.
>
> **[2:12](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=132)** Another way of doing this is to import the files directly into the conftest.py file but you will need to disable Pylint and Pyflakes from linting the file and throwing a error because the import will remain unused in the file.
>
> **[2:27](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=147)** One thing to remember if you're using a fixture scoped to the session and marked for auto use, it cannot be imported.
>
> **[2:33](https://www.linkedin.com/learning/unit-testing-in-python/modularizing-conftest-py?u=76281980&t=153)** It must remain in the conftest.py.

> [!info]- Semantic Content
>
> **File Paths:** conftest.py (6), conftest_start.py (1), cities.py (1), conftest_stsart.py (1)
> **Code Keywords:** let (4), import. (2), delete (1)
> **Code Identifiers:** conftest_start (1), city_list_location (1), conftest_stsart (1)
> **CLI Commands:** make (1)
> **Env Vars:** ide (1)
> **Analogies:** imagine (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 5. Using Pytest with an Existing Project

#### Reading tests to surmise understand behavior
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=0)** - [Instructor] The great thing about test-driven development with pytest is that it fosters shared practices for test setup that allows us to quickly gain information.
>
> **[0:09](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=9)** We can use this to our advantage to understand the source code by viewing that behavior in the test suite first.
>
> **[0:16](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=16)** In this video we will take a look at a written test suite and try to surmise the functionality of the code.
>
> **[0:22](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=22)** Only once we have a few key guesses will we turn to the source code to validate our assumptions.
>
> **[0:27](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=27)** While this is not a rule for understanding the behavior of a system, this is a great tactic for understanding how the code will be used in practice.
>
> **[0:36](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=36)** In the test_fitness_log.py file, we have a test suite that focuses on a fitness tracker.
>
> **[0:42](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=42)** First, a test fixture called create tracker is being used to instantiate the fitness tracker on line eight.
>
> **[0:50](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=50)** The tracker then uses a method called log_activity on line 13 to add an activity called run with a start and end time.
>
> **[0:58](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=58)** This fixture is scoped to yield the final tracker at the start of each function.
>
> **[1:04](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=64)** Below this we can see that there are two functions using this fixture.
>
> **[1:08](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=68)** The first one on line 18 appears to be a happy path test case.
>
> **[1:13](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=73)** This function called test_add_valid_activities asserts that one object was added to the tracker and that its activity matches the description run.
>
> **[1:23](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=83)** Next, on line 35 we appear to have a negative test case called test_add_invalid_activity.
>
> **[1:31](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=91)** It uses the create_tracker fixture in addition to a second fixture called create_overlapping_times which is defined on line 28.
>
> **[1:40](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=100)** This fixture is used to yield start and end times for an activity that overlaps with the proceeding run activity, which is initially recorded in the tracker.
>
> **[1:50](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=110)** On line 40, this test uses those overlapping times when attempting to record another run activity causing an exception to be thrown.
>
> **[1:59](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=119)** So far the test suite shows that the source code consists of a fitness tracker object.
>
> **[2:04](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=124)** This object allows you to add activities that cannot overlap with one another.
>
> **[2:08](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=128)** The one thing we don't know at this point is what logic may be controlling why we can't add an overlapping activity.
>
> **[2:16](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=136)** Let's look to our source code in fitness_log.py.
>
> **[2:20](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=140)** Here we'll see if our assumptions were correct.
>
> **[2:24](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=144)** In our test file we saw that there was a log activity function being used in our fixtures.
>
> **[2:29](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=149)** We can see it here on line eight.
>
> **[2:32](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=152)** It appears that before adding an activity to the fitness tracker, it's calling to other functions, one called validate_entry and the other one called overlapping_entry.
>
> **[2:43](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=163)** If we scroll down, we can see these functions defined on line 16 and 26 respectively.
>
> **[2:50](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=170)** On line 16, validate_entry checks the start and end time for one activity.
>
> **[2:56](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=176)** If an activity has a valid start and end time it returns true.
>
> **[3:00](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=180)** If not it returns false.
>
> **[3:02](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=182)** Since the start and end time are date-time objects it checks a few things.
>
> **[3:07](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=187)** First, it looks to see if they occur on the same year, month, and day.
>
> **[3:11](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=191)** On line 20 it makes a final check that the start time's hour-minute combination is earlier than the end time.
>
> **[3:19](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=199)** On line 26 the function overlapping_entry compares all of the previously-logged activities to a new one to be added.
>
> **[3:27](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=207)** If the new activity overlaps with the logged entry this function should return true.
>
> **[3:33](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=213)** Otherwise, if the activity does not overlap with another, this function will return false.
>
> **[3:39](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=219)** It seems that while people can multitask in real life the fitness tracker doesn't allow us to log simultaneous activity.
>
> **[3:47](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=227)** Now we understand that the log activity function raises an exception if validate_entry returns false and overlapping_entry returns true.
>
> **[3:57](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=237)** Lastly, if we look to the bottom of the source code we can see that there is a function on line 40 that deletes activities and a get_activities function on line 46 that lists all the activities in the tracker.
>
> **[4:11](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=251)** If we think back to when we read our test suite the happy and sad path tests gave us a good amount of insight into the functionality of the fitness tracker.
>
> **[4:20](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=260)** While we see richer details in the source code we have gleaned a fair amount of information from the tests.
>
> **[4:26](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=266)** Reading the tests first and then moving to the source code can help bridge your understanding to how the code is used.
>
> **[4:32](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=272)** If you want to continue practicing these skills try finding an open source project in Python with pytest unit tests.
>
> **[4:40](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=280)** Try reading those tests before attempting to read the source code.
>
> **[4:43](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=283)** Do your assumptions made while reading the tests match what you find in the source code?
>
> **[4:48](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=288)** Try doing this repeatedly over a few projects that use the pytest framework.
>
> **[4:52](https://www.linkedin.com/learning/unit-testing-in-python/reading-tests-to-surmise-behavior?u=76281980&t=292)** In the readme file on GitHub you will find a detailed list of a few projects you can get started with.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), yield (2), case. (1), let (1), continue (1)
> **Code Identifiers:** validate_entry (3), overlapping_entry (3), test_fitness_log (1), log_activity (1), test_add_valid_activities (1)
> **Exercise Files:** source code (9)
> **CLI Commands:** find (2), python (1)
> **File Paths:** test_fitness_log.py (1), fitness_log.py (1)
> **Definitions:** is a  (2)
> **Documentation:** the readme (1)
> **Tools:** github (1)

#### Challenge: Adding test coverage
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=0)** - [Instructor] Now that we have described the behavior of the fitness tracker as defined in the test suite, do you remember seeing any behavior that was not covered in the test?
>
> **[0:14](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=14)** Using the method we used in a previous video, find the path or function in the source code that is not tested.
>
> **[0:21](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=21)** Write a test of your own at the end of the challenge to expand the source code's coverage.
>
> **[0:26](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=26)** At the bottom of line 53, you'll see an area to write your own test function.
>
> **[0:31](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=31)** Please rename it to reference the source code function you are testing.
>
> **[0:35](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=35)** For example, if you were testing a function called hula hoop you'd change your test function to be called test hula hoop.
>
> **[0:43](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=43)** If you'd like to explore the percentage of test coverage for the fitness log, you can use pytest coverage plug-in to help you.
>
> **[0:49](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=49)** We installed this package into our Docker container at the very start.
>
> **[0:54](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=54)** With this plug-in, you can run pytest--cov scripts to expose test coverage within our scripts package.
>
> **[1:04](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=64)** Here we can see that the fitness log has 93% test coverage.
>
> **[1:08](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=68)** That indicates to us that there are a few functions that we could probably test.
>
> **[1:12](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=72)** When thinking about test coverage, don't only think about functions.
>
> **[1:17](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=77)** You also need to think about testing paths.
>
> **[1:20](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=80)** When thinking about paths, you can see them as following the conditional logic of your function.
>
> **[1:26](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=86)** For example, if you have if else statements, when using control flow, you might write a test that covers the if statement but not the else statement.
>
> **[1:36](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=96)** Running the pytest coverage plug-in would pick up that missing test.
>
> **[1:40](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=100)** And remember, you can always check out the source code directly to see which functions are not mentioned in the test.
>
> **[1:47](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=107)** This challenge should take 10 minutes.
>
> **[1:50](https://www.linkedin.com/learning/unit-testing-in-python/challenge-adding-test-coverage?u=76281980&t=110)** Good luck!

> [!info]- Semantic Content
>
> **Code Keywords:** function (6)
> **Exercise Files:** source code (4)
> **CLI Commands:** find (1), docker (1)
> **Analogies:** for example (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Adding test coverage
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/solution-adding-test-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/solution-adding-test-coverage?u=76281980&t=0)** - [Instructor] When solving this challenge, it's important to take time to see which functions are called directly and indirectly by the test suite.
>
> **[0:12](https://www.linkedin.com/learning/unit-testing-in-python/solution-adding-test-coverage?u=76281980&t=12)** After systematically reading our current test file and comparing it to the source code, we can see that one of the methods without test coverage is the delete activity function on line 40.
>
> **[0:23](https://www.linkedin.com/learning/unit-testing-in-python/solution-adding-test-coverage?u=76281980&t=23)** After ascertaining this, we can switch back to the test suite and write a function as follows: on line 47, I've added a test delete activity function.
>
> **[0:34](https://www.linkedin.com/learning/unit-testing-in-python/solution-adding-test-coverage?u=76281980&t=34)** It first loads the fitness tracker and uses the get activities method on line 50 and 51 to check that we have one activity to start with.
>
> **[0:43](https://www.linkedin.com/learning/unit-testing-in-python/solution-adding-test-coverage?u=76281980&t=43)** We then run the deletion on line 47 after teasing out the appropriate values to pass to this function, and then on line 59, we make a final check that we expect for there to be no activities left in our tracker.
>
> **[0:57](https://www.linkedin.com/learning/unit-testing-in-python/solution-adding-test-coverage?u=76281980&t=57)** If you're up for an additional challenge, try adding validation to the delete function.
>
> **[1:02](https://www.linkedin.com/learning/unit-testing-in-python/solution-adding-test-coverage?u=76281980&t=62)** It should guard against processing a deletion for data that was never added to the log.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), delete (3), this, (1), switch (1), pass (1)
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980&t=0)** - Thank you for joining me for this course about Python unit testing and Docker.
>
> **[0:05](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980&t=5)** During this lesson, we learned quite a bit about test-driven development, and pytest, with the use of assertions, exception handling, fixtures, and parametrization.
>
> **[0:15](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980&t=15)** We then covered how to organize common test setup functions in comftest.py and how to approach adding more test coverage for an existing project.
>
> **[0:23](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980&t=23)** This is a great skill to have as you continue to develop in Python, share your source code with others, and also maintain code written by other developers.
>
> **[0:33](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980&t=33)** Throughout this course, I've mentioned other projects that you may be interested in completing on your own to continue learning this content.
>
> **[0:40](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980&t=40)** Refer to the README file of the GitHub repository to get the full list of these projects.
>
> **[0:45](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980&t=45)** In that list you'll also see suggestions for contributing to opensource projects that use pytest.
>
> **[0:51](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980&t=51)** Be sure to check the standards of contribution on each project before beginning.
>
> **[0:56](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980&t=56)** When contributing to opensource, you can update things like documentation, testing, or source code functionality.
>
> **[1:03](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980&t=63)** Even submitting an update to documentation is a worthy addition.
>
> **[1:07](https://www.linkedin.com/learning/unit-testing-in-python/next-steps?u=76281980&t=67)** Thank you again for joining me for this course, and remember to continue practicing.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), docker (1)
> **Code Keywords:** continue (3)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (2)
> **File Paths:** comftest.py (1)
> **Env Vars:** readme (1)
> **Documentation:** the readme (1)
> **Tools:** github (1)


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