---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: create-an-open-source-project-in-python
url: "https://www.linkedin.com/learning/create-an-open-source-project-in-python"
duration_minutes: 84
duration: 1h 24m
level: Intermediate
updated: 3/30/2023
learners: 99574
skills:
  - Python (Programming Language)
  - Open-Source Development
exercise_files: true
github: "https://github.com/LinkedInLearning/creating-an-open-source-project-in-python-3085072"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEh8rkWx4V2MQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1680032934598?e=2147483647&amp;v=beta&amp;t=97RGy2nr1Ul4q6Bx7siDs87h-kuPfHldBdK4mlS9AM0"
linkedin_topic: Software Development
learning_paths:
  - '[[Python Hands-On Practice]]'
  - '[[Advance Your Skills in Python]]'
prev_courses:
  - '[[Python Projects- Create an Interactive Quiz Application]]'
  - '[[Python GUI Development with Tkinter]]'
next_courses:
  - '[[Python Projects]]'
  - '[[Build Three Real-World Python Applications]]'
path_nav: '[{"path":"Python Hands-On Practice","position":8,"total":14,"prev":"Python Projects- Create an Interactive Quiz Application","next":"Python Projects"},{"path":"Advance Your Skills in Python","position":6,"total":7,"prev":"Python GUI Development with Tkinter","next":"Build Three Real-World Python Applications"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/open-source-development
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Create%20an%20Open-Source%20Project%20in%20Python.md)

![Create an Open-Source Project in Python](https://media.licdn.com/dms/image/v2/C560DAQEh8rkWx4V2MQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1680032934598?e=2147483647&amp;v=beta&amp;t=97RGy2nr1Ul4q6Bx7siDs87h-kuPfHldBdK4mlS9AM0)

# Create an Open-Source Project in Python

> For open-source projects, it can be a challenge to ensure development coherence and avoid errors and bugs. In this course, Python community leader Cheuk Ting Ho guides you through the complete process of starting, building, testing, and maintaining an open-source project in Python. Cheuk introduces you to Poetry, a popular dependency management tool, and shows you how to use it in starting a Pytho

> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python) | 1h 24m | Intermediate | 100K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Starting a Project with Poetry** (7 videos)
- **3. 2. Power Up Your Tests** (9 videos)
- **4. 3. Tidy Up Your Code** (7 videos)
- **5. 4. Standardize Testing Using tox** (4 videos)
- **6. 5. Setting up a Workflow on GitHub Action** (4 videos)
- **7. Conclusion** (1 videos)

### 1. Introduction

#### Create an open-source project in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/create-an-open-source-project-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/create-an-open-source-project-in-python?u=76281980&t=0)** - [Cheuk] Welcome to this course on creating an open-source project in Python.
>
> **[0:04](https://www.linkedin.com/learning/create-an-open-source-project-in-python/create-an-open-source-project-in-python?u=76281980&t=4)** We will cover the foundational tools and setup required to create your first open-source project in Python.
>
> **[0:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/create-an-open-source-project-in-python?u=76281980&t=10)** I'm Cheuk Ting Ho, and I'm a Python community leader.
>
> **[0:14](https://www.linkedin.com/learning/create-an-open-source-project-in-python/create-an-open-source-project-in-python?u=76281980&t=14)** Open-source software project are unique in the sense that everyone in the community can impact, modify, and enhance the source code under the supervision of typically a few volunteer community leaders who act as the project maintainers.
>
> **[0:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/create-an-open-source-project-in-python?u=76281980&t=28)** The developers, as users themselves, understand the project's need and what features are lacking.
>
> **[0:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/create-an-open-source-project-in-python?u=76281980&t=34)** Most open-source projects do not have customer service and require some technical know-how to be able to use them.
>
> **[0:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/create-an-open-source-project-in-python?u=76281980&t=40)** I know you're excited to build your project.
>
> **[0:42](https://www.linkedin.com/learning/create-an-open-source-project-in-python/create-an-open-source-project-in-python?u=76281980&t=42)** But, before that, we will go over some details that you need to know before starting the course.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3)
> **Code Keywords:** require (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [cheuk] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-you-should-know?u=76281980&t=0)** - [Instructor] If you want to follow along with the course, it's helpful if you know the basics of Python programming.
>
> **[0:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-you-should-know?u=76281980&t=5)** Including working with packages and writing test for your code.
>
> **[0:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-you-should-know?u=76281980&t=9)** We'll be using the terminal throughout the course to run the commands, manage our projects and run git commands.
>
> **[0:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-you-should-know?u=76281980&t=15)** Now, if you want to have a good idea of the tools we use you can watch the first couple of videos of each chapter where I go over the basics of the tools used for that chapter.
>
> **[0:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-you-should-know?u=76281980&t=25)** Shall we begin?

> [!info]- Semantic Content
>
> **CLI Commands:** python (1), git (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Starting a Project with Poetry

#### What is Poetry?
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=0)** - [Instructor] Poetry is both a Python packaging tool and a dependency management tool.
>
> **[0:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=6)** In this course though, we are only going to use Poetry as a dependency management tool.
>
> **[0:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=12)** The most straightforward way of managing your dependencies in the Python project is to first list all the external libraries and diversion numbers in the requirements doc text file.
>
> **[0:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=22)** Then you use pip, which comes with most distribution of Python to install the dependencies listed in the file.
>
> **[0:30](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=30)** This is what we call the bare minimum setup but there's some problems with it.
>
> **[0:36](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=36)** To start with, you'll end up with a lot of dependencies that you have no idea where they come from.
>
> **[0:42](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=42)** For example, with this requirements doc text file you'll end up with all these libraries installed.
>
> **[0:49](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=49)** Reason being that some of the libraries in the requirements doc text file depend on other libraries as well, and they will all get installed.
>
> **[0:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=57)** This is to make sure that you have everything you need in this environment for your projects to work, but then you end up with a lot more dependencies than what you're expecting.
>
> **[1:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=69)** Now, to make things worse if you're working with multiple projects they won't be installed in isolated environments.
>
> **[1:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=77)** In other words, each project requirements doc text and all their dependencies will get mixed up with each other, and at the end of the day you will have no idea which dependencies come from which project because again you can't trace where they're coming from.
>
> **[1:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=91)** If you're lucky enough, everything will still work and you won't end up with conflicts.
>
> **[1:36](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=96)** Sometimes it may happens that project requires a specific version of library while other projects requires a different version of it, but since it's not allowed to have two versions of the same library installed in the same environment, a conflict is created.
>
> **[1:53](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=113)** You cannot get both projects working fine at the same time with same environment, and that's why we use Poetry.
>
> **[2:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=121)** Poetry provides a solution for all these problems.
>
> **[2:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=125)** First, it provides a way of tracking where dependencies comes from.
>
> **[2:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=129)** The simple command poetry show --three, shows all your dependencies in a tree diagram showing you exactly what you have in your environment and why they are there.
>
> **[2:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=142)** The second thing Poetry provides are isolated environments for each project you create.
>
> **[2:27](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=147)** And since you they don't share the same environment, the risk of conflict is minimized.
>
> **[2:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=152)** Finally, many projects support multiple version of Python.
>
> **[2:36](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=156)** If you ship your projects to another person with a different version of Python, Poetry will try to find the appropriate versions of the dependencies automatically and install them to make sure it works for all supported version of Python.
>
> **[2:49](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=169)** Yes, Poetry is that great.
>
> **[2:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=172)** So let's start using it.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), make (3), pip (1), find (1)
> **Code Keywords:** from. (3), finally, (1), let (1)
> **Prerequisites:** install (2), setup (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Install Poetry
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=0)** - Installing poetry is very simple.
>
> **[0:02](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=2)** You can install it with PIP, just like with any other Python library, but it is not recommended.
>
> **[0:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=9)** Reason being that if you have multiple versions of Python in your computer, the installation of poetry via PIP is only tied to the Python version present during the install.
>
> **[0:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=21)** This means that you would need to install poetry separately for each version of Python.
>
> **[0:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=26)** The solution is to install poetry using the script hosted on install.[python-poetry.org](https://python-poetry.org).
>
> **[0:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=34)** It is a Python script that acts as an installer.
>
> **[0:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=37)** By installing it this way, poetry will be isolated and will have its own environment.
>
> **[0:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=43)** Also, poetry will be accessible between different Python versions and virtual environments in your computer.
>
> **[0:49](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=49)** You can keep using whatever Python environment your project is in without installing poetry in that environment.
>
> **[0:56](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=56)** To install using the script on install the python [poetry.org](https://poetry.org) is easy.
>
> **[1:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=61)** With a curl command, you can ask Python to run the script.
>
> **[1:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=65)** Make sure you're running it with Python three, not Python two.
>
> **[1:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=69)** If you are using powershell on Windows, you have to use the curl command in a slightly different way.
>
> **[1:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=75)** Check the official documentation for exactly how.
>
> **[1:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=78)** Once poetry is installed, you can use poetry --version to check the version that was installed.
>
> **[1:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=86)** To uninstall poetry, run the same installer script with the --uninstalled flag.
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=93)** You can also install a specific version of poetry by adding the version number with the --version flag when running the installer script.
>
> **[1:42](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=102)** Finally, to update poetry, use the poetry self update command.
>
> **[1:48](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=108)** And these are the basic commands to manage your poetry installation.

> [!info]- Semantic Content
>
> **CLI Commands:** python (12), pip (2), curl (2), make (1)
> **Prerequisites:** install (8)
> **Code Keywords:** finally, (1), self (1)
> **URLs:** [python-poetry.org](https://python-poetry.org) (1), [poetry.org](https://poetry.org) (1)
> **Env Vars:** pip (2)
> **Definitions:** means that (1), is a  (1)
> **Tools:** powershell (1)
> **Analogies:** just like (1)

#### Starting a project
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=0)** - [Instructor] So let's have a look at how to start a Poetry project from scratch.
>
> **[0:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=5)** I type ls to show that I'm in an empty directory and then poetry --version to see that I already have poetry version 1.1.13 installed.
>
> **[0:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=17)** Then I start a project with command poetry init, which starts the series of questions to set you up with the pyproject.toml configuration file.
>
> **[0:27](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=27)** First of all, you are asked for the project name, Poetry suggests the name of your current directory, which in my case is os-in-python, but you can type in whatever name you like.
>
> **[0:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=39)** I'm fine with the default name, so I press Enter.
>
> **[0:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=43)** Next is the version of this project.
>
> **[0:46](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=46)** Now, since poetry uses semantic versioning, it defaults to version 0.1.0, and again, you can set it to another version if necessary.
>
> **[0:55](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=55)** In my case, I press Enter to use the default value suggested.
>
> **[0:59](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=59)** Next, you ask for a short description, which is optional and can be leaved blank.
>
> **[1:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=66)** Then you can set who the author of the project is, which defaults to your GitHub username.
>
> **[1:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=72)** Next, you can specify a license for your project, which is always a good idea.
>
> **[1:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=78)** The most popular ones used for open-source projects are the MIT and Apache 2.0 licenses.
>
> **[1:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=85)** Let's type MIT here and press Enter.
>
> **[1:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=89)** Next for the Compatible Python versions, by default, Poetry will pick something for you depending on the current version of Python you have on your machine, which in my case is Python 3.10.
>
> **[1:41](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=101)** So Poetry will assume that this project supports compatible update from Python 3.10 up to Python 4.0.
>
> **[1:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=110)** In other words, it will support anything above or equal to Python 3.10 but below Python 4.0.
>
> **[1:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=117)** If you want to support other versions of Python, you can put in something like above or equal to Python 3.8.
>
> **[2:04](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=124)** Then you'll be asked whether you want to define your dependencies interactively now.
>
> **[2:11](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=131)** I will say no since we are going to do that in another video later on.
>
> **[2:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=135)** I will also say no to the next question.
>
> **[2:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=138)** Again, we'll do it in another video.
>
> **[2:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=141)** And last, you will have to confirm whether you want all these answers to be used to generate a pyproject.toml.
>
> **[2:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=149)** This is the chance for you to double check to see if everything is okay.
>
> **[2:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=153)** But don't worry too much, since you can change it later on by editing the pyproject.toml file.
>
> **[2:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=160)** And there you go.
>
> **[2:41](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=161)** We have started a new project.
>
> **[2:44](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=164)** It may seem like nothing happened, but to check, simply look at the directory and see that pyproject.toml file was created.
>
> **[2:55](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=175)** Now we can check the name and the version of our project with poetry version command.
>
> **[3:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=183)** And to enter Poetry's virtual environment for this project, you use the poetry shell command.
>
> **[3:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=190)** In the new environment with pip list command, we see that we have the standard starter packages installed and nothing else.
>
> **[3:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=200)** To exit the environment, just type exit and press Enter.
>
> **[3:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=205)** And there you go, our base project is set up.
>
> **[3:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=208)** But before we add our dependencies, let's take a look at what the pyproject.toml file does.

> [!info]- Semantic Content
>
> **CLI Commands:** python (10), ls (1), apache (1), pip (1)
> **Versions:** python 3 (4), python 4 (2), version 1 (1), 1.13 (1), version 0 (1)
> **Code Keywords:** let (3), case, (1), default, (1), else. (1)
> **File Paths:** pyproject.toml (5)
> **Env Vars:** mit (2)
> **Tools:** github (1)
> **Definitions:** in other words (1)
> **Prerequisites:** set up (1)

#### What is pyproject.toml?
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=0)** - [Instructor] Let's have a look at the pyproject.toml.
>
> **[0:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=3)** It is a text file to specify what build dependencies your Python package needs.
>
> **[0:08](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=8)** It was proposed in the Python enhancement proposal or PEP 518, and is widely adopted since.
>
> **[0:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=17)** Even if we are not packaging our project, we can also use pyproject.toml with poetry to manage our project dependencies.
>
> **[0:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=25)** In PEP 518 pyproject.toml is proposed to solve a build dependency problem that has arised in Python community.
>
> **[0:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=34)** Before, most Python softwares use setup.py to specify the build dependencies, such as other Python packages that they are depending on.
>
> **[0:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=45)** However, being an executable file itself, setup.py may require certain Python packages to work properly.
>
> **[0:53](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=53)** This create a chicken and egg problem.
>
> **[0:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=57)** Therefore, instead of relying on setup.py or the build dependencies, including those required by setup.py, should be listed in another file.
>
> **[1:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=67)** After considering several different file formats, such as json and yaml formats, the TOML formats was chosen and the pyproject.toml file become the new standard of listing dependencies in Python projects.
>
> **[1:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=82)** This is the pyproject.toml of our project.
>
> **[1:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=85)** It was generated by poetry when we initialized the project.
>
> **[1:30](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=90)** Poetry asked you some questions, when you run the poetry in it command, and create this file for you depending on your answers.
>
> **[1:38](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=98)** These sections, starting with tools.poetry in the header, will be used by poetry.
>
> **[1:44](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=104)** The first section hosts the information about your project or package.
>
> **[1:49](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=109)** The other two sections list all the dependencies of your project.
>
> **[1:53](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=113)** One for the dependencies needed to run the project or required to make the software work, and another for the dependencies that are needed only when you are developing the project.
>
> **[2:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=125)** For example, packages required for testing the code.
>
> **[2:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=130)** Finally, the last section shows what tools are required to build this package.
>
> **[2:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=135)** But since we are not talking about packaging in this course, we will not go into details here.
>
> **[2:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=141)** And this is what it is for now.
>
> **[2:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=143)** Later, when more dependencies are added, there will be more information about what libraries are required in this project.

> [!info]- Semantic Content
>
> **File Paths:** pyproject.toml (5), setup.py (4)
> **CLI Commands:** python (7), make (1)
> **Prerequisites:** setup (4), required to (2)
> **Code Keywords:** let (1), require (1), finally, (1)
> **Env Vars:** pep (2), toml (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Adding dependencies
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=0)** - [Instructor] Back to our command-line interface.
>
> **[0:02](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=2)** It's time to add some dependencies to the project, using the Poetry Add command, followed by the library and its version that you want.
>
> **[0:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=10)** For example, our project uses Click, a library to create pretty command line interfaces.
>
> **[0:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=15)** There are many ways to specify what version of the library are required.
>
> **[0:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=20)** If you are not sure about how, check the documentation of Poetry.
>
> **[0:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=24)** Here we show some common examples.
>
> **[0:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=26)** For example, with Click, we want the compatible update of Version 8.1.0.
>
> **[0:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=35)** Once you run the command, the dependency is installed, and you can see it by using the Poetry Show command to see all the available packages that are installed.
>
> **[0:47](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=47)** Now, to add development dependency, you simply add the --dev flag to Add command.
>
> **[0:55](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=55)** For example, we want to add the latest version of Pytest to our development environment.
>
> **[1:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=61)** We type "poetry add --dev pytest@latest."
>
> **[1:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=72)** Now, if you have many dependencies, you can add them all in one single command.
>
> **[1:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=77)** You can even skip specifying the versions and let Poetry select them for you, judging from the compatibility or your current environment setup.
>
> **[1:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=86)** To do that, you simply list them after the dev flag, like this.
>
> **[1:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=95)** So now that I've got everything installed, I will run Poetry Show again and see that there are an overwhelming number of things installed.
>
> **[1:47](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=107)** But if we add the --tree flag, we can see the dependencies as tree hierarchy.
>
> **[1:55](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=115)** At this point, we can go into the virtual environment by using Poetry Shell and then use the Pip List command to see all the installed libraries, which, as you can see, Poetry provides a much better view than this.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), interface (1), let (1)
> **Analogies:** for example (3)
> **Versions:** version 8 (1), 1.0 (1)
> **CLI Commands:** pip (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Poetry lock and install
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=0)** - Once you run the install command, poetry installs all the dependencies and creates a file called poetry.lock.
>
> **[0:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=9)** Notice that when we specify our dependencies we may only set a criteria for the needed version rather than specifying an exact version.
>
> **[0:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=18)** So during install, after poetry finds the exact compatible version for you, it adds that information for every dependency installed in the poetry.lock file.
>
> **[0:30](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=30)** Therefore, it is highly recommended to keep this poetry.lock file around, so make sure to add it on commit to your git repository, or whatever version control system you use.
>
> **[0:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=43)** It will be needed if you want to preserve the exact environment that you have with this project, and it is essential when installing your project in a new environment.
>
> **[0:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=54)** Imagine you have to reinstall your environment because you have a new computer, or your colleague is picking up your project and wants to set up the same environment in their computer.
>
> **[1:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=65)** You can use the poetry install command and create a new virtual environment where all the dependencies will be installed.
>
> **[1:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=75)** However, depending on which files already exist in the directory poetry will set up this environment differently.
>
> **[1:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=83)** If the poetry.lock file is not present, it means that either that environment has never been installed or the file is lost.
>
> **[1:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=92)** Poetry will then try to create a workable environment depending on the pyproject.toml file.
>
> **[1:38](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=98)** Bear in mind, pyproject.tomo only documents the compatible versions but not an exact version of any dependencies used, unless a specific version is specified.
>
> **[1:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=110)** In that case, new poetry.lock will be created, but it is not guaranteed that this poetry.lock file will always be the same since the new versions of the library may have become available, And poetry will update the file to the newest available and compatible versions.
>
> **[2:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=129)** So, if you follow my advice and keep the poetry.lock file, poetry will look at it and install the exact versions of all the dependencies in this new environment for you.
>
> **[2:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=142)** Let's say it has been months since your last install of your old environment, you can be assured that the libraries using this new environment will be of the exact same version, even if a newer version is now available.
>
> **[2:36](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=156)** And then, if you need to update to the latest compatible versions of the dependencies simply use the poetry update command This gives you control and makes it easier to manage your project environment.

> [!info]- Semantic Content
>
> **File Paths:** poetry.lock (7), pyproject.toml (1)
> **Prerequisites:** install (5), set up (2)
> **CLI Commands:** make (1), git (1)
> **Code Keywords:** case, (1), let (1)
> **Best Practices:** recommended (1), make sure to (1)
> **Definitions:** means that (1)
> **Analogies:** imagine (1)
> **Speakers:** - once (1)

#### Checkpoint: What you have so far
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=0)** - [Instructor] Congratulations, you have made it to the end of this chapter.
>
> **[0:04](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=4)** And before we move on, let's take a look at what we have learned so far.
>
> **[0:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=9)** We have seen that Poetry is a useful tool to manage your project environment.
>
> **[0:13](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=13)** We saw how to install Poetry properly on its own isolated environment.
>
> **[0:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=18)** We saw how to start a project using Poetry to manage the project's environment and dependencies.
>
> **[0:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=24)** We learned how to add project dependencies for both our production and development environments separately.
>
> **[0:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=31)** Finally, we learned how to recreate the exact same project environment in another machine.
>
> **[0:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=37)** Let's check what we have in our project directory so far.
>
> **[0:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=40)** First of all, we have a pyproject.toml file which stores information about our project and its dependency requirements.
>
> **[0:48](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=48)** Second, we have the poetry.lock file which is the exact same blueprint of your project's environment setup.
>
> **[0:55](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=55)** And, as a reminder, all the files that I created in this chapter are available on GitHub for your reference.
>
> **[1:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=61)** If everything is fine, I will see you in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **File Paths:** pyproject.toml (1), poetry.lock (1)
> **Prerequisites:** install (1), setup (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Power Up Your Tests

#### What is pytest?
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=0)** - [Instructor] Welcome to the chapter where we'll learn how to write better tests for our programs.
>
> **[0:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=5)** The testing library we are going to use is called pytest.
>
> **[0:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=9)** Pytest is a Python testing framework that allows you to write small tests such as unit tests with ease.
>
> **[0:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=15)** The standard testing library that comes with a CPython distribution is called unittest.
>
> **[0:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=20)** However, I prefer pytest for reasons we'll discuss later.
>
> **[0:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=24)** Pytest is very popular.
>
> **[0:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=26)** It has over 9,000 stars on the GitHub page, which for an open-source project is very good.
>
> **[0:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=32)** And due to its popularity, several plug-ins for pytest have been developed, such as pytest-cov for test code coverage, pytest-django for testing Django, a Python web framework, and pytest-asyncio for testing asynchronous code.
>
> **[0:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=50)** Now, as I mentioned earlier, a lot of Python developers prefer pytest over unittest.
>
> **[0:56](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=56)** The first reason is pytest provides several powerful built-in functions that make managing your test very easy.
>
> **[1:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=63)** Second, pytest structures tests in a way that makes it easier to work with.
>
> **[1:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=69)** In unittest, a test case class has to be defined and the tests are written inside it.
>
> **[1:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=75)** But with pytest, you simply write your test functions and assert if your code is correct inside a much more straightforward process.
>
> **[1:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=83)** A third advantage pytest has is the many plug-ins available for it.
>
> **[1:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=88)** As I mentioned before, there are plug-ins to help with testing several different applications.
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=93)** Finally, pytest provides a better-looking error report.
>
> **[1:38](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=98)** It shows how many tests have failed, how many tests were skipped, and how many tests have passed in a nicely laid out summary from which you can dive into the fail tests and resolve them.
>
> **[1:51](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=111)** Pytest is a very useful tool for testing.
>
> **[1:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=114)** Let's see how we can use it to test our project.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), make (1)
> **Definitions:** is called (2), is a  (2)
> **Code Keywords:** assert (1), finally, (1), let (1)
> **Analogies:** such as (2)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Introduction to your project
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=0)** - Our project is a simple command line application written in Python.
>
> **[0:04](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=4)** Let's have a quick look at what it does before looking at the code.
>
> **[0:08](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=8)** Before we run the application we can enter our poetry environment or add the poetry run command before the Python command you want to run.
>
> **[0:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=16)** For example, I may want to run the reminder of py files help command, but since we are going to execute multiple commands, I prefer to enter the environment first instead of adding the poetry run every time.
>
> **[0:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=31)** So I type poetry shell to enter the poetry environment and now I run the command to add a reminder.
>
> **[0:38](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=38)** To list the reminders, I use the list command.
>
> **[0:46](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=46)** And to add a task with a deadline, I use the add command with deadline option.
>
> **[0:53](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=53)** Let's list them again and we see that the task which has passed the deadline is shown in red.
>
> **[0:59](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=59)** Now, to mark something as done, we used a done command like this: and list them.
>
> **[1:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=70)** To see that the tasks are marked as done are shown in green.
>
> **[1:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=75)** Finally, to remove an item we used to remove command like this and then list them and it's gone.
>
> **[1:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=86)** So this is how our app works.
>
> **[1:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=89)** Now let's look at the code by typing vim reminder dot py.
>
> **[1:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=97)** No stats. This Python code is not polished at all.
>
> **[1:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=100)** And is not even tested. It kind of just worked.
>
> **[1:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=105)** Our goal is make sure this code is tested and tidy so it's easy to maintain.
>
> **[1:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=110)** We see here in the code that there are lots of functions with name started with an underscore like the get task list on line 14, here.
>
> **[1:59](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=119)** In Python, a function that starts with an underscore usually indicates it's an internal or private function.
>
> **[2:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=127)** So these are the helper functions for our app and we'll be writing test for these functions.
>
> **[2:13](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=133)** Now you can see that the rest of the code is using Click, one of our dependency libraries, to create the commands for the app.
>
> **[2:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=141)** But since this course is not about Click, we'll not go into details here. And that's it.
>
> **[2:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=148)** We have seen how the app works and where the source code is.
>
> **[2:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=152)** We are ready to start writing some tests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), this: (1), finally, (1), this
( (1)
> **CLI Commands:** python (4), make (1)
> **Non-Speech:** (typing) (4)
> **Tools:** command line (1), vim (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - our (1)

#### Writing simple tests
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=0)** - To create a test file in our app, we'll use the touch command Usually in a more complex project it's good practice to place our source code and our test files in separate folders.
>
> **[0:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=12)** But since this is a very small project with only one source code file we are going to leave the pytest of py file in the same directory and write all our tests in it.
>
> **[0:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=22)** So let's open our test py file and start writing our tests.
>
> **[0:27](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=27)** First we need to import our script so that we can use the objects and functions created there.
>
> **[0:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=32)** So I import the reminders app and from the reminder we import tasks.
>
> **[0:38](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=38)** Then we read our first test functions to test define task function.
>
> **[0:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=45)** The convention is to name the test function by adding test in front of the function name.
>
> **[0:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=50)** Let's omit underscore at the beginning.
>
> **[0:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=52)** So it is test find task.
>
> **[0:56](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=56)** Now we need a dummy task list to test with.
>
> **[0:58](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=58)** So we defined a task list to be a list of task items.
>
> **[1:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=63)** We have two items to start with one with the name pay rent and the other buy bread.
>
> **[1:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=72)** Then we use the assert statement, which should only be used in testing to compare the functions result against the expected results.
>
> **[1:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=80)** So I type assert The name of the function I want to test, app dot find task and I give buy bread as the search parameter and task list as the list to look into.
>
> **[1:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=97)** The result should be the task.
>
> **[1:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=99)** We have the name buy bread.
>
> **[1:42](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=102)** Great, our test is written, so let's run it with pytest.
>
> **[1:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=105)** We first saved the file and go back to the terminal and then we use pytest command to run the test.
>
> **[1:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=114)** As you can see, we ran one test and it passed as shown by the green dot.
>
> **[1:59](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=119)** But what does it look like if it fails?
>
> **[2:02](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=122)** Let's try it out by editing our test pyfile.
>
> **[2:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=126)** I'm going to change the assert statements slightly to make it fail.
>
> **[2:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=129)** I changed this last name to buy milk save and quit and run it again.
>
> **[2:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=138)** As you can see, instead of the green dot we now have a red F showing it failed.
>
> **[2:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=144)** There's also a message showing why it fail.
>
> **[2:27](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=147)** In our case it says that there's a difference in the name attribute.
>
> **[2:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=151)** To see the detailed comparison we can run the test again with the dash VV option.
>
> **[2:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=157)** Now you can see the comparison side by side which is really handy especially when you are dealing with more complex objects with Nest dictionary or objects with multiple attributes.
>
> **[2:47](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=167)** Now let's go back to fix the test from the buy milk back to buy bread.
>
> **[2:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=172)** And let's also write another test where if nothing is found in the list, none will be returned.
>
> **[3:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=180)** So I copy the first test and modify by changing the assess statement to is none instead of comparing it to a test like before.
>
> **[3:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=190)** Okay, so save and quit and run the test again to make sure all tests passed.
>
> **[3:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=203)** As you can see, we have two green dots instead of just one.
>
> **[3:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=206)** That is because we now have two tests.
>
> **[3:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=209)** This is very nice, but what if I want to write more test against defined task function?
>
> **[3:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=214)** I could repeat the copy and paste process several times but it can become very messy especially if we mix them up with other tests.
>
> **[3:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=223)** In the next video we'll use a trick called parameterize to create multiple tests for the same function with different parameters in a neat way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (6), assert (3)
> **CLI Commands:** find (2), make (2)
> **Non-Speech:** (typing) (4)
> **Cross-References:** go back to (2), in the next (1)
> **Exercise Files:** source code (2)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)

#### Testing with multiple parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=0)** - [Instructor] To be able to parameterize our tests, we first need to add the parametrize feature to our code.
>
> **[0:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=6)** So let's open it and import pytest with this feature.
>
> **[0:11](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=11)** So I type import pytest, (keyboard clacking) and then we add the decorator to the existing test function.
>
> **[0:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=18)** So let's put it on the first one.
>
> **[0:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=23)** Now we need to put the parameters in.
>
> **[0:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=26)** If we look closely at the two tests, they both need two parameters, an input to be test and an expected result.
>
> **[0:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=34)** Let's name these parameters "test_input" and "expected" and add them in the decorator.
>
> **[0:41](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=41)** (keyboard clacking) Then, we define a function called test_find_task that receive that test input and the expected values.
>
> **[0:49](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=49)** (keyboard clacking) And then we change the function accordingly by using the assert to compare the result of the function against the expected values.
>
> **[0:58](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=58)** (keyboard clacking) But we are still missing something.
>
> **[1:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=65)** The decorator needs two inputs.
>
> **[1:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=67)** The first one is a string where we define the parameters separated with commas, in our case that's test_input, expected.
>
> **[1:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=78)** The second input is a list of parameter values which are tuples holding all the test case values.
>
> **[1:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=84)** Our first test case is buy bread, along with the task object that remind us to buy bread.
>
> **[1:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=91)** So let's put it in our list by adding a list with the tuple, buy bread, and the task.
>
> **[1:38](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=98)** (keyboard clacking) Now let's add the second test case for buy banana and expect to have a none object in return.
>
> **[1:48](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=108)** So we add another tuple with buy banana and none for the expected value.
>
> **[1:55](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=115)** (keyboard clacking) Finally, we can delete the second test functions since we are covered by the new parameterized tests.
>
> **[2:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=123)** Let's save and quit and run the test again.
>
> **[2:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=126)** (keyboard clacking) We can see that we still have two green dots indicating two tests have passed, even though we have only wrote one test function in our file.
>
> **[2:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=138)** It is because when we ran our tests, the parameterized decorator magically change our test function into two test functions that are exactly the same, except the parameters, since each test case is actually a separate test in pytest.
>
> **[2:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=153)** And so if one set of parameters fail, it shows each fail independently.
>
> **[2:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=159)** Let's see if that's true.
>
> **[2:41](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=161)** Let's go back to the file and make some changes.
>
> **[2:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=163)** (keyboard clacking) Let's change the second test case slightly by changing the none to a task name "buy banana" (keyboard clacking) and run it again.
>
> **[2:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=177)** And here we go, we have one pass and one fail.
>
> **[3:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=181)** This is expected because we don't have buy banana in our list.
>
> **[3:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=186)** So let's go back and fix our file by placing the none back.
>
> **[3:11](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=191)** (keyboard clacking) Now here's a little challenge for you before we go on to the next video.
>
> **[3:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=200)** Can you try to add one more test to the parameterized test?
>
> **[3:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=203)** Let's add the test to see if the function can find the pay rent task in the list.
>
> **[3:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=208)** You may want to check if the capitalization matters in our find task function, so let's make the input all caps.
>
> **[3:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=215)** Pause the video and tried it on your own before seeing the result.
>
> **[3:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=219)** Okay, did you get it?
>
> **[3:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=225)** This is how I did it.
>
> **[3:46](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=226)** I add another tuple to the list with pay rent and a task name "pay rent" as the expected value.
>
> **[3:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=234)** (keyboard clacking) Once again, we save and quit and run our tests.
>
> **[4:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=240)** (keyboard clacking) As we see, all three tests passed.
>
> **[4:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=247)** Now you know how to create parameterized test.
>
> **[4:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=250)** Make good use of it in the future, and let's keep going and write some more tests in the next videos.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (8), assert (1), return. (1), finally, (1)
> **CLI Commands:** make (3), find (2)
> **Code Identifiers:** test_input (2), test_find_task (1)
> **Cross-References:** go back to (1), next video (1), in the next (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Test if an exception is raised
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=0)** - [Instructor] This time, we want to test the two date function.
>
> **[0:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=3)** We should pass as string in a year, month, date format to a date object in Python.
>
> **[0:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=10)** Let's open the file.
>
> **[0:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=12)** Import datetime from from the standard library as dt, and then write the test_to_date function using the assert command.
>
> **[0:19](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=19)** (keyboard typing) Now let's run it.
>
> **[0:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=26)** (keyboard typing) And it works, but we have a problem.
>
> **[0:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=32)** What happens if someone inputs the wrong strain format for the date?
>
> **[0:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=37)** By design, it gives us an error saying that the input is not the right format, but we want to check if the error message is raised correctly.
>
> **[0:47](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=47)** For that, we need to use the Pytest.raises context tool.
>
> **[0:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=52)** To use it, we need to write a new test to catch the exception.
>
> **[0:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=57)** (keyboard typing) Now, to use the context, we use the Python with statement followed by Pytest.raises(ValueError).
>
> **[1:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=69)** Note that ValueError is the exceptions that we are expecting.
>
> **[1:13](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=73)** Now, we can create a test that is supposed to raise an error by giving it 1, 2, 3, 4, 5 as the parameter.
>
> **[1:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=80)** (keyboard typing) Let's test it.
>
> **[1:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=84)** (keyboard typing) It passed the test, which means the value error is raised when the test is run.
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=93)** Now, let's try to make this test fail.
>
> **[1:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=97)** If we change the 1, 2, 3, 4, 5 to a proper date (keyboard typing) and run it again, (keyboard typing) we see that it fails since it didn't raise the value error.
>
> **[1:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=112)** Let's go back to fix it.
>
> **[1:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=114)** (keyboard typing) However, to make this test more robust, we have to go beyond simply checking if any value error was raised, not necessarily the ones we raised in our code.
>
> **[2:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=127)** To check if the error message is exactly what we are expecting, we can change it with statement a bit by adding the match parameter and specifying what the error message should be.
>
> **[2:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=138)** (keyboard typing) Let's run the test again.
>
> **[2:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=144)** (keyboard typing) And as you can see, all our beautiful tests pass.
>
> **[2:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=151)** This is how you check if an expected error is raised.
>
> **[2:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=155)** Very useful, especially when dealing with functions that can raise multiple different errors by design.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), raise (3), function (2), pass (2), assert (1)
> **Non-Speech:** (keyboard typing) (10)
> **CLI Commands:** python (2), make (2)
> **Code Identifiers:** test_to_date (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### What is a fixture?
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=0)** - [Instructor] Before we moved on to write more tests, let's have a look at what a fixture is and how it can be useful for writing our tests.
>
> **[0:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=9)** Pytests provides a feature called fixture.
>
> **[0:13](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=13)** It can be useful when a constant context needs to be provided to the tests.
>
> **[0:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=18)** Fixtures are created outside of the tests and can be used multiple times in different tests, or even used in other created fixtures.
>
> **[0:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=29)** We will go through some examples of when it is useful later.
>
> **[0:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=33)** By using fixture, you can make more complicated tests and have full control of the testing environment including setting up external environments for your tests via fixtures.
>
> **[0:46](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=46)** Your tests can have access to these external environments that got set up.
>
> **[0:51](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=51)** For example, you can provide information from an external process that is set up by the fixtures.
>
> **[0:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=57)** So what did I mean by saying that fixtures can provide constant context from an external testing environment?
>
> **[1:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=65)** Here are few examples of fixtures that are being used.
>
> **[1:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=69)** First, when we have an external surface, let's say one that lives in a Docker container, and can be accessed by API calls, you may not want to spin this surface up multiple times and you'd probably like to keep the surface running until you're finished with all the tests.
>
> **[1:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=88)** For that, we need a fixture to share the surface among multiple tests.
>
> **[1:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=92)** Another scenario is when we are using external data files or database where the data is stored and should shared amount tests.
>
> **[1:42](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=102)** We'll see this use case in the following videos when we write more tests for our application.
>
> **[1:48](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=108)** Finally, the benefits of using a fixture is that we can separate other dependencies from the test itself to write efficient unit tests, the test themselves should have less dependency on external variables so any errors on the tests can be pinpointed to the feature that the unit test is testing.
>
> **[2:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=127)** By taking some of these dependencies out as a fixture and feeding them into the tests, we know that if the fixture fail, it has nothing to do with the tests and that helps a lot when troubleshooting.
>
> **[2:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=141)** Let's see how we use fixture in code.
>
> **[2:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=144)** This example here is a bit silly, but it shows the syntax of creating a fixture and using it.
>
> **[2:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=151)** To create a fixture, we code in the fixture decorator from the pytest module and add it to a function.
>
> **[2:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=159)** The function then will turn into a fixture.
>
> **[2:42](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=162)** To use the fixture, just pass the fixture as a parameter to the test function.
>
> **[2:47](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=167)** Then the fixture here is fully accessible by the test function.
>
> **[2:51](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=171)** In this example, we pushed the fixture together with the test function in one file.
>
> **[2:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=177)** For more complex test set up, you may see sometimes the fixtures are created in a separate file called conftest.py, and the scope set to module.
>
> **[3:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=187)** This is to make the fixture accessible and shareable across all the text files, but it is more complex and for this course, we will not be using fixture this way.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (3), module (2), finally, (1), pass (1)
> **CLI Commands:** make (2), docker (1)
> **Prerequisites:** set up (3)
> **File Paths:** conftest.py (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using fixture
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=0)** - Now that we know what a fixture is let's use it in a very simple scenario.
>
> **[0:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=6)** As usual, we start editing our tests.
>
> **[0:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=10)** Now let's see what we can change into a fixture.
>
> **[0:14](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=14)** What do you think?
>
> **[0:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=16)** Something that is constant and can be reused in other tests.
>
> **[0:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=20)** Okay, let's see if you are thinking the same.
>
> **[0:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=24)** We are going to make the task list in test find task into a fixture so we can reuse it in other tests.
>
> **[0:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=33)** First, remember that we will post the fixture in as a parameter.
>
> **[0:38](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=38)** So let's add that in the parameter list for test find task.
>
> **[0:44](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=44)** Then we write the fixture like this.
>
> **[0:48](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=48)** Let's edit before the test function.
>
> **[0:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=50)** If you feel like a challenge, post a video and try writing it yourself before watching me doing it.
>
> **[0:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=57)** (energetic music) Also, don't forget to delete the test list in the test function since we don't need it any longer.
>
> **[1:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=75)** Now, let's test if it still works.
>
> **[1:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=77)** Okay, like you did before.
>
> **[1:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=80)** So save and quit.
>
> **[1:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=82)** Let's test it out All green!
>
> **[1:27](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=87)** So no problems at all.
>
> **[1:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=89)** So now that we have a fixture let's reuse it and write another test.
>
> **[1:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=97)** Let's write a test for the save and load functions.
>
> **[1:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=100)** Here, we will use the test list fixture like you show.
>
> **[1:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=105)** Feel free to post a video and try it yourself.
>
> **[1:48](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=108)** (energetic music) Let's test if the fixture also works in this test.
>
> **[2:02](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=122)** Let's save and quit and run the test.
>
> **[2:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=130)** We also got all pass with no problems.
>
> **[2:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=132)** With this small example we see how fixture works syntactically.
>
> **[2:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=137)** However, it is not using the true power of fixtures.
>
> **[2:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=141)** Fixtures can be more useful in more complicated scenarios but it is a good start for us.
>
> **[2:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=148)** As you can see, the task looks tidy and we can reuse some elements for multiple tests in a way that is easy to manage and understand.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (2), this. (1), delete (1), pass (1)
> **Non-Speech:** (typing) (3), (energetic music) (2)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - now (1)

#### Skipping a test, with good reasons
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=0)** - [Instructor] Before we finish this chapter, the last useful tip to help writing and maintaining tests is to skip some tests.
>
> **[0:08](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=8)** Yes, you heard it right.
>
> **[0:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=10)** Some test are expected to fail under certain circumstances.
>
> **[0:14](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=14)** So we must deal with them.
>
> **[0:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=17)** For example, if certain features are not supported on a certain platform, they should not be tested against that platform.
>
> **[0:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=25)** Sometimes feature in our application are not backwards-compatible, meaning that they will only work on newer versions of Python.
>
> **[0:36](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=36)** The reverse can also happen when an old feature no longer works on the newer versions of Python.
>
> **[0:42](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=42)** Another good reason to skip a test is that the feature is simply not implemented yet, or it is temporarily removed or unavailable.
>
> **[0:51](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=51)** We do not want to test features that are not supposed to be working yet.
>
> **[0:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=57)** So, now that we know why we will skip some tests, how do we do it?
>
> **[1:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=63)** In pytest, it's very simple.
>
> **[1:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=66)** You can skip the whole test by using the skip decorator.
>
> **[1:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=70)** You can even provide a reason why the test is being skipped, as a reminder for yourself and other developers.
>
> **[1:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=78)** Alternatively, you can skip the test during execution by using the pytest.skip function.
>
> **[1:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=84)** This gives you more control over when we should give up testing.
>
> **[1:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=89)** In the example, we are skipping the test when the platform is not valid.
>
> **[1:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=94)** Another way to skip a test is to use the skipif decorator.
>
> **[1:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=99)** Instead of skipping the test during execution, the condition is tested before entering the test.
>
> **[1:46](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=106)** Like the skip decorator, you can add a reason for it, along with the condition that checks to skip the test or not.
>
> **[1:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=114)** In the example, we skip the test when Python version is below 3.8.
>
> **[1:59](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=119)** Other than skipping a test, sometimes we're expecting a test to fail, so we mark it to come back to it later.
>
> **[2:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=126)** This is specially handy when you are tackling a complicated bug that would take more than one coding session to finish.
>
> **[2:14](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=134)** You can mark the test to be expected to fail, and save it to be fixed later.
>
> **[2:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=140)** Also, marking a test as xfail does not fail the entire test.
>
> **[2:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=145)** So, if it's not an important bug, we let it pass in order to not be a block for other developments.
>
> **[2:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=152)** Marking a test as xfail is as easy as skipping it.
>
> **[2:36](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=156)** We can add the xfail decorator to pytest.mark, again, with reason for it.
>
> **[2:41](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=161)** In fact, it's a good practice to always provide a reason when test failed.
>
> **[2:47](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=167)** Note that in this example, the reason is oversimplified, and you should normally have a lot more explanation than this.
>
> **[2:55](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=175)** On top of that, you can also provide condition of when this test is expected to fail.
>
> **[3:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=181)** Sometimes we know a test only fails on a certain platform, or a certain version of Python.
>
> **[3:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=186)** And with that, the test can still be executed when it does not meet those conditions.
>
> **[3:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=192)** Okay, great!
>
> **[3:14](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=194)** We have now gone over the last tip for testing.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Code Keywords:** function (1), let (1), pass (1), this. (1)
> **Versions:** 3.8 (1)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Checkpoint: What you have so far
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=0)** - [Instructor] We have come to the end of this chapter so let's sum up what we have learned so far.
>
> **[0:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=6)** First of all, we were introduced to pytest, a popular testing library and we used it to write some tests for our mock project.
>
> **[0:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=15)** We explore some features of pytest such as parameterize which can combine similar tests into one test with multiple parameters, which helps tidy up your code.
>
> **[0:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=28)** We have also learned how to test for expected exceptions and how to treat them appropriately.
>
> **[0:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=34)** We also learned about fixture which allow us to take some elements that is irrelevant to the test out of the test itself.
>
> **[0:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=43)** This makes managing the test much easier.
>
> **[0:46](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=46)** Last but not least, we know what to do if we have tests that are expected to fail under certain conditions.
>
> **[0:53](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=53)** We can then skip the test or mark it as known fail.
>
> **[0:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=57)** This way, we can get past the test and not block further development.
>
> **[1:02](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=62)** Now before we move on let's check if we still have all the files that we need in the project.
>
> **[1:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=69)** Like in the previous chapter we still have our pyproject.toml and the poetry.lock files.
>
> **[1:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=77)** Even though we are not changing them it is important to keep them so we have our project set up saved.
>
> **[1:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=84)** Then we have reminder.py our mock application that lives inside of it.
>
> **[1:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=89)** You may also find out that we have reminder.p This is a picker file that our application generated to store our task list.
>
> **[1:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=97)** Finally, we have the fruit of our work in this chapter, tests.py We store all of our tests.
>
> **[1:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=105)** Feel free to develop them further and come back to it if you want to remind yourself of what we have learned.
>
> **[1:51](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=111)** If you are not sure if you have everything all the project files can be found on the GitHub repo.
>
> **[1:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=117)** Now let's move on to the next chapter.

> [!info]- Semantic Content
>
> **File Paths:** pyproject.toml (1), poetry.lock (1), reminder.py (1), tests.py (1)
> **Code Keywords:** let (3), finally, (1)
> **Cross-References:** previous chapter (1), next chapter (1)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)


### 4. 3. Tidy Up Your Code

#### What is PEP 8?
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=0)** - [Instructor] Before we talk about PEP 8 specifically, let's talk about what a Python enhancement proposal or PEP is.
>
> **[0:08](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=8)** A PEP is a document that describe a new feature or change that will potentially improve Python.
>
> **[0:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=15)** It contains the technical details and the reasons why the new feature or change is needed.
>
> **[0:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=20)** If the PEP is accepted, it functions as a guide for the core Python developers to implement the changes in the following Python releases.
>
> **[0:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=28)** In other words, a PEP is a very important document.
>
> **[0:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=32)** Who can propose these important changes?
>
> **[0:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=35)** You can, so can I.
>
> **[0:38](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=38)** That's right.
>
> **[0:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=39)** PEP act as an input from the community to determine the future of Python.
>
> **[0:44](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=44)** PEPs requires a lot of thought and discussion within the community to be able to reach a consensus and have it accepted.
>
> **[0:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=52)** It is the author's responsibility to develop the PEP and gather support from the community to get it approved.
>
> **[0:59](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=59)** One of the most famous PEPs is PEP 8.
>
> **[1:02](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=62)** We talk a lot about it in the community.
>
> **[1:04](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=64)** Not only has it been accepted for a long time, it's footprint is seen in many other PEPs.
>
> **[1:11](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=71)** If you look at all the references a PEP makes, you'll surely find that many of them trace all the way back to PEP 8, directly or indirectly.
>
> **[1:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=80)** So what is PEP 8?
>
> **[1:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=82)** PEP 8 is a style guide for Python, now a new feature in the Python interpreter.
>
> **[1:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=88)** It's a guide or rules of thumbs on how to style your Python code.
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=93)** The Python syntax is very flexible and can be formatted quite freely, yet it will be interpreted the same way by the Python interpreter and work just fine.
>
> **[1:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=103)** You can think of PEP 8 as a set of rules the community agreed upon to dictate how Python code should look like.
>
> **[1:49](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=109)** You may wonder why it is needed.
>
> **[1:51](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=111)** Actually, stricter formatting do have benefits in many ways.
>
> **[1:56](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=116)** First, it improved the readability of the code.
>
> **[1:59](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=119)** It will keep a straight and consistent format.
>
> **[2:02](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=122)** The code is more neat and it's much easier to read.
>
> **[2:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=126)** It is just our human nature to like looking at things that is symmetric and tidy.
>
> **[2:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=132)** Consistency can also minimize the unnecessary distraction when reading the code.
>
> **[2:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=138)** When the code is easier to read, it is easier to avoid making mistake.
>
> **[2:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=143)** If there's any, it is easier to spot.
>
> **[2:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=145)** When unnecessary distractions, which I mean inconsistency in formatting is removed, we can focus on what the code is actually about.
>
> **[2:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=155)** Also, anything that is out of the ordinary which is a hint of a potential bug, can be picked out easily.
>
> **[2:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=163)** Another benefit is in open source, there are usually multiple contributors and they will have to all agree on a coherent format anyway.
>
> **[2:51](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=171)** Otherwise, the code is looking messy, again, due to inconsistency which we are trying to avoid due to reasons above.
>
> **[2:59](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=179)** Instead of finding a set of rules for each single project, a universal formatting rule can benefit the Python community as a whole.
>
> **[3:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=187)** There are a lot of rules that is mentioned in PEP 8.
>
> **[3:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=190)** Here are some that is well known in the community.
>
> **[3:13](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=193)** First, the most famous four spaces, not tab rules for the code indentation.
>
> **[3:19](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=199)** It is leading by four spaces, but not anything else.
>
> **[3:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=203)** It is also this reason many of us set our code editor to automatically convert tabs to four spaces or do the correct four space indentation for us.
>
> **[3:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=214)** Then we have a maximum line length rule.
>
> **[3:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=217)** It is wise to avoid super long line to make it easier to read.
>
> **[3:41](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=221)** There are many ways to restructure code to make the line length fall under the maximum and this is considered the best practice.
>
> **[3:48](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=228)** Next is to use blank lines properly.
>
> **[3:51](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=231)** Using two blank lines to separate definition of top level classes and within each class, using one blank line to separate definition of each method.
>
> **[4:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=241)** This is a bit like using titles and sub titles to separate paragraphs in articles.
>
> **[4:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=246)** Inside PEP 8, there are also details about naming conventions, when to use capital cases, when to use underscore in names, what names we should avoid using, et cetera.
>
> **[4:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=257)** With these naming conventions, it is easy to see what variable is about.
>
> **[4:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=262)** Is it a class object or is it a method within the class object?
>
> **[4:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=266)** Is it supposed to be internal use only or to make things more obvious in the code?
>
> **[4:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=271)** PEP 8 also mentioned the use of documentation strings, most commonly called docstrings.
>
> **[4:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=277)** This is text that is put in the code that serve as a documentation for a module, a class, or a function, et cetera.
>
> **[4:46](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=286)** It is a good idea to keep the documentation within the code as when we update the code, it is less likely that we forgot to update the docstrings.
>
> **[4:55](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=295)** There's so much more that is written in details in PEP 8, like when to use whitespaces, when to use trailing commas, et cetera, all to try making the code look as coherent and easy to understand as possible.
>
> **[5:08](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=308)** If you would like to check out PEP 8 yourself, you can find it at the Python official website.
>
> **[5:13](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=313)** Link is as shown.
>
> **[5:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=315)** Now we know what PEP 8 is about.
>
> **[5:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=317)** We'll have to follow it from now on.
>
> **[5:19](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=319)** It sounds really difficult.
>
> **[5:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=321)** How can we do that?
>
> **[5:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=322)** We are going to find out in the rest of this chapter.

> [!info]- Semantic Content
>
> **CLI Commands:** python (13), find (3), make (3)
> **Env Vars:** pep (19)
> **Code Keywords:** class, (2), let (1), else. (1), super (1), module (1)
> **Definitions:** is a  (6), in other words (1)
> **Documentation:** the documentation (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### What is Black?
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=0)** - [Instructor] Last video, we talked about the importance of following the PEP 8.
>
> **[0:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=5)** However, it seems very difficult to follow it correctly all the time.
>
> **[0:08](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=8)** Don't worry, as developer have tools to help us do it.
>
> **[0:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=12)** One of them is Black.
>
> **[0:13](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=13)** Black is a code formatter, meaning that it will rewrite your code without changing how it works to fulfill certain style or format.
>
> **[0:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=21)** While using Black, your code will be format to the black code style.
>
> **[0:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=26)** You may customize the resulting format a little bit, but the option to change the format is limited.
>
> **[0:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=32)** You can read more about what is Black code style at that documentation if interested.
>
> **[0:36](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=36)** However, the most important point that we are using it here is that the code style is PEP 8 compliant.
>
> **[0:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=43)** Meaning, after formatting your code, it will be PEP 8 compliance automatically.
>
> **[0:48](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=48)** Black is a project that is hosted on a Python package index or PyPI, meaning that you can PEP install it easily.
>
> **[0:56](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=56)** Since Black has been launched, it has become more and more popular and now almost everyone is using it.
>
> **[1:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=63)** Here is a few reason why it is loved and it's good to use Black.
>
> **[1:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=67)** First of all, the ease of auto formatting the code, Black is super easy to use and it makes the pressure to be aware of deformatting of your code away.
>
> **[1:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=77)** While coding, you can focus on the code logic and code syntax and not worrying about the code format.
>
> **[1:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=83)** As you know, they will be all fixed with a single command by Black.
>
> **[1:27](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=87)** Second, as Black has a very tight forming style, even tighter than PEP 8, the project that has multiple contributors and authors would have the code that looks very clean and coherent.
>
> **[1:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=99)** You can even check if the code contribution fulfills the Black code style in your CI pipeline.
>
> **[1:44](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=104)** Last, if you run your code in the Black and black gives you an error while formatting, chances are, you have some typo or syntax mistake somewhere.
>
> **[1:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=112)** You can already start debugging before running any tests.
>
> **[1:56](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=116)** Using Black is super simple and there are multiple ways of using it.
>
> **[2:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=120)** First and most straightforward is to ask Black to format your code manually, via the black command on the command line.
>
> **[2:08](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=128)** You can choose to format a single file or everything under directory.
>
> **[2:13](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=133)** Or you can add Black to your pre-commit hook, so every time you try to commit your code, it will run Black automatically for you.
>
> **[2:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=141)** This is a proper way of using Black and we'll explore it later in this chapter.
>
> **[2:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=146)** Last, if you have a project and would like to enforce the Black code style, you can add the check in the CI to make sure the code contribution fulfill the style format.
>
> **[2:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=155)** You can check the documentation of the project to see the details of using Black.
>
> **[2:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=160)** We'll also demonstrate some basic usage of Black in the next video.
>
> **[2:44](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=164)** See you then.

> [!info]- Semantic Content
>
> **Env Vars:** pep (5)
> **Definitions:** is a  (4)
> **Cross-References:** we talked about (1), later in (1), in the next (1)
> **CLI Commands:** python (1), make (1)
> **Code Keywords:** super (2)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)
> **Warnings:** be aware (1)

#### Formatting your code with Black
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=0)** - [Instructor] Now that we have learned what Black is, let's put it into practice.
>
> **[0:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=5)** First of all, we want to make sure we have Black installed by using this command.
>
> **[0:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=10)** Now, let's use Black to format test of py.
>
> **[0:13](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=13)** Let us remind ourselves what is the file by opening it in Vim.
>
> **[0:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=18)** Okay, to format test of py, we only need a single Black command.
>
> **[0:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=23)** Let's first use a special command to check if tests the py fulfills the Black code style.
>
> **[0:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=31)** As you can see, we get a prompt saying that tests the py will be reformatted.
>
> **[0:36](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=36)** So, let's check what exit code we have.
>
> **[0:42](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=42)** The check command exists with code one, which means that it does not fulfill the Black code style.
>
> **[0:48](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=48)** So, let's do it now.
>
> **[0:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=50)** Now, we get the all done prompt.
>
> **[0:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=54)** Test the py has been reformatted.
>
> **[0:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=57)** Let's check the reformatted file using Vim.
>
> **[1:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=60)** Can you spot the difference?
>
> **[1:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=63)** It will be more obvious if you use git, as I am here.
>
> **[1:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=66)** All you need to do is to use the git diff command.
>
> **[1:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=72)** As you can see, a few simple lines are added to make it compliant with PLA eight and the black case in parameterized have been nicely reformatted.
>
> **[1:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=82)** One last thing.
>
> **[1:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=83)** We can now check if the new tests the py fulfill the blacko style by using the check command again.
>
> **[1:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=89)** We get all done, again.
>
> **[1:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=91)** So what exit code do we have now?
>
> **[1:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=95)** The check command exit with code zero.
>
> **[1:38](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=98)** This check command is useful when you want to check if the code fulfills the blacko style in your CI.
>
> **[1:44](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=104)** We will come back to it when we set up our GitHub action workflow in the future.
>
> **[1:48](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=108)** So we are all done with Black for now.
>
> **[1:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=110)** In the next video, we'll learn more about linking our code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7)
> **CLI Commands:** make (2), git (2)
> **Tools:** vim (2), github (1)
> **Env Vars:** pla (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### What is a linter?
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=0)** - [Instructor] Let's talk a bit about linter before we moved on in our chapter.
>
> **[0:04](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=4)** What is a linter?
>
> **[0:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=6)** Do you use a grammar checker when you write an article?
>
> **[0:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=9)** Think of linter as a grammar checker for your code.
>
> **[0:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=12)** It can be used to pick up potential errors in your code without executing your code.
>
> **[0:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=17)** The linter will scan your code and check the syntax of your code.
>
> **[0:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=21)** Also, it'll check other hazardous things in the code, like misspelling of variables, weird formatting, etcetera.
>
> **[0:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=28)** As Python codes in a good coding style, for example, following PEP 8, will be less likely to have error.
>
> **[0:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=35)** The linter will also check for code style, checking if the code is PEP 8 compliant, is common in Python linters.
>
> **[0:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=43)** Using a linter not just help us to spot and avoid errors, it goes hand in hand with code formatting and help keeping code with various authors having a consistent code style.
>
> **[0:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=54)** As using linter is so important in the Python ecosystem, there's some popular linters to choose from.
>
> **[1:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=60)** The major players are Pylint, Flag8 and Mupy.
>
> **[1:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=65)** Most of the time, you'll come across one or more of them in Python open source projects besides the one mentioned above.
>
> **[1:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=72)** As we demonstrate in the last video, we can also use Black as linter to check the formatting of our code.
>
> **[1:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=78)** However, there are things that other linters picked up that Blacks does not.
>
> **[1:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=83)** It's just not uncommon to see more than one linter being used in a single project.
>
> **[1:27](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=87)** Now, we know other linters commonly used in Python project.
>
> **[1:30](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=90)** Why don't we have a deeper look and try using one.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5)
> **Code Keywords:** let (1), from. (1)
> **Env Vars:** pep (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Linting your code with Flake8
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=0)** - [Instructor] In this video we'll use Flake8 to check the format of our code.
>
> **[0:04](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=4)** Before we start, let's check if we have Flake8 installed.
>
> **[0:08](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=8)** In my environment, I'm using version 5.0.4.
>
> **[0:13](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=13)** Now we will try to use Flake8 to check our code.
>
> **[0:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=17)** Remember that we used Black to reformat tests.py.
>
> **[0:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=21)** Let's use Flake8 to check if there's any formatting problems with it.
>
> **[0:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=26)** As you can see, nothing happened.
>
> **[0:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=29)** This is good news.
>
> **[0:30](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=30)** Flake8 did not pick up any problems.
>
> **[0:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=33)** Our code seems to be okay, which is expected since we already use Black to clean up the code.
>
> **[0:38](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=38)** However, it is no fun when everything works fine.
>
> **[0:41](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=41)** Let's have a look at reminder.py.
>
> **[0:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=45)** Whoa. As you can see, Flake8 has picked up quite a lot of problems in the code's format.
>
> **[0:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=50)** Guess what we must do now?
>
> **[0:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=52)** Yes, that's right.
>
> **[0:53](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=53)** We can use Black on reminder.py to clean things up a bit.
>
> **[0:59](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=59)** Okay, now that we have reformed reminder.py let's use Flake8 to check again.
>
> **[1:04](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=64)** Oh no.
>
> **[1:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=65)** There's still three problems that Black did not help us with.
>
> **[1:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=69)** However, it is not too difficult to fix it.
>
> **[1:11](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=71)** By the way, all the issues that Flake8 picked up assigned with an error code and you can check the documentation site to see what the error codes mean.
>
> **[1:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=80)** Let's look at the first issue on line 51 with the code FH21, which says task list is undefined.
>
> **[1:30](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=90)** As we can see, Flake8 picked up a potential error as task list is never passed into the find match function.
>
> **[1:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=97)** This got picked up even before we wrote any test for the function, which is very helpful.
>
> **[1:42](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=102)** So let's go and fix it.
>
> **[1:44](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=104)** First we have to pass task list into find match function definition.
>
> **[1:48](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=108)** (keyboard clicks) Then we must pass the second variable when we call the function.
>
> **[1:59](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=119)** Here.
>
> **[2:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=120)** (keyboard clicks) Remember to save and quit.
>
> **[2:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=123)** Okay, let's check again.
>
> **[2:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=126)** Now we only have two issues.
>
> **[2:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=129)** The first one has been resolved. Hurray.
>
> **[2:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=132)** The remaining issues are the same.
>
> **[2:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=135)** The line is exceeding the character limits that PEP 8 recommends.
>
> **[2:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=138)** We can of course, go and reformat our code.
>
> **[2:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=141)** However, we are going to do something slightly naughty here.
>
> **[2:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=145)** For demonstration purposes let's add a custom configuration to bypass this type of error with the code E501.
>
> **[2:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=152)** If you read the documentation of Flake8 you know there are multiple places you can put in custom configurations.
>
> **[2:38](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=158)** In our case, we'll use tox, so we'll put it in a file called tox.n, (keyboard clicks) and then we save and quit.
>
> **[2:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=172)** Now let's run the check with Flake8 again.
>
> **[2:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=177)** Now all the issues went away.
>
> **[3:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=180)** So if we want to relax the PEP 8 rule a bit and ignore a certain type of issues we can use custom configurations to do so.
>
> **[3:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=187)** However, take this with a grain of salt, as by doing so it will not be PEP 8 compliant anymore.
>
> **[3:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=195)** We should never do it without a good reasoning behind it.
>
> **[3:18](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=198)** And there you go.
>
> **[3:19](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=199)** We have learned how to use Flake8 to check our code and how to use custom configurations.
>
> **[3:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=205)** In the next video, we'll learn how to use Black and Flake8 in a more efficient way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (4), pass (2), case, (1)
> **Env Vars:** pep (3), fh21 (1), e501 (1)
> **File Paths:** reminder.py (3), tests.py (1)
> **CLI Commands:** find (2)
> **Versions:** version 5 (1), 0.4 (1)
> **Documentation:** the documentation (2)
> **Cross-References:** in the next (1)
> **Best Practices:** remember to (1)

#### Using pre-commit to clean up automatically
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=0)** - In the previous videos, we have seen how to use black to auto format our code and make it PEP 8 compliant.
>
> **[0:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=7)** It is a way to have a consistent code style throughout the project.
>
> **[0:11](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=11)** However, we must remember to use black before we commit our code using git.
>
> **[0:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=15)** Now, wouldn't it be great if my code is blackened automatically whenever I commit the code?
>
> **[0:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=21)** To do that, we'll set up a pre-commit hook.
>
> **[0:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=24)** A pre-commit hook is a process that is triggered when we commit using git.
>
> **[0:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=28)** The easiest way to set it up is to use the Python library code pre-commit.
>
> **[0:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=32)** First, let's check if we have pre-commit installed.
>
> **[0:36](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=36)** We are using version 2.20.0.
>
> **[0:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=39)** Pre-commit makes it very easy to share hooks with other contributors.
>
> **[0:44](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=44)** All you need to share is a file called pre-commit.config.yamo and if they have pre-commit installed, they can set up the hook with a simple command.
>
> **[0:53](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=53)** Let's do it together now.
>
> **[0:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=54)** To start with, since no one is sharing the configuration with us, we need to create one.
>
> **[1:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=65)** Here, we are using black before we commit but before we can use it, we'll have to install the hook by running the command.
>
> **[1:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=76)** The hook with git is now installed and it's always a good idea to test run the hook after installing it.
>
> **[1:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=81)** To do it, we used the command.
>
> **[1:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=86)** Here, you see we ran black and it passed.
>
> **[1:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=89)** This is because we clean up all of our files in the previous videos.
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=93)** For demonstration purposes, We will now mess up the formatting deliberately.
>
> **[1:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=105)** And then, we save and quit.
>
> **[1:47](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=107)** Now let's try to commit our changes.
>
> **[1:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=114)** As you see, black failed because we have one file that has been reformatted.
>
> **[1:59](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=119)** Remember that black exists with code one.
>
> **[2:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=121)** if a code does not fulfill the black code styling.
>
> **[2:04](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=124)** In this case, we didn't manage to commit a code.
>
> **[2:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=127)** Instead, our code was formatted by black.
>
> **[2:11](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=131)** Don't trust me?
>
> **[2:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=132)** Let's check.
>
> **[2:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=136)** As we see the formatting, go back to the nice one with proper line spacing.
>
> **[2:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=140)** So if we commit again now, it should pass.
>
> **[2:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=148)** With this, we can be sure that all the code committed fulfills the black code style which is PEP 8 compliant.
>
> **[2:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=154)** Now here comes homework for you.
>
> **[2:36](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=156)** Are you able to add Flag 8 to the commit hook as well?
>
> **[2:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=160)** Check the pre-commit documentation to see what hooks are available and how to add them.
>
> **[2:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=165)** The finished the pre-commit.config.yamo is available on GitHub repo for your convenience.
>
> **[2:51](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=171)** In the next video, we'll wrap up what we have learned in this chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1), pass (1), this, (1)
> **CLI Commands:** git (3), make (1), python (1)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (2), install (1)
> **File Paths:** pre-commit.config (2)
> **Env Vars:** pep (2)
> **Versions:** version 2 (1), 20.0 (1)
> **Cross-References:** go back to (1), in the next (1)

#### Checkpoint: What you have so far
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=0)** - [Cheuk] It's time to recap what we have learned in this chapter.
>
> **[0:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=3)** First, we have learned what is PEP 8, a proposal regarding the Python code style, is the standard in the community, and most open-source projects in Python are following this standard.
>
> **[0:14](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=14)** Then, we know about Black, a convenient auto formatter to help you clean up your code to be PEP 8 compliant.
>
> **[0:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=21)** It also helped to keep a consistency in a project with multiple contributors.
>
> **[0:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=26)** Next, we have our linter, Flake8, which helps to pick up problems in the code before testing and make sure the code is following the Pep 8 standard.
>
> **[0:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=35)** Last, we have demonstrate how to use pre-commit to install a hook with Git.
>
> **[0:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=39)** So every time you commit your code, it will automatically use your favorite auto formatter and linter like Black and Flake8 to make sure you are publishing clean code.
>
> **[0:49](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=49)** Now, let's check what we have in our project.
>
> **[0:53](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=53)** Of course, we have the files that we had in last chapter.
>
> **[0:56](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=56)** But we have a clean and easy to-read tests.py, and reminder.py thanks to Black and Flake8.
>
> **[1:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=63)** Plus, now we have tox.ini and .pre-commit-config.yaml which is used to store our Flake8 and pre-commit custom settings.
>
> **[1:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=72)** It will be useful in future chapters as well.
>
> **[1:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=76)** If you are not sure, check all those files in the course GitHub repo.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), make (2), git (1)
> **File Paths:** tests.py (1), reminder.py (1), tox.ini (1), pre-commit-config.yaml (1)
> **Env Vars:** pep (2)
> **Code Keywords:** let (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Prerequisites:** install (1)
> **Speakers:** - [cheuk] (1)


### 5. 4. Standardize Testing Using tox

#### What is tox?
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=0)** - [Instructor] Remember that in the previous chapters, we set up a file called tox.int.
>
> **[0:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=5)** You may be wondering, "What is tox?"
>
> **[0:08](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=8)** Tox is a Python tool used for virtual environment management.
>
> **[0:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=12)** It creates and manages multiple separate Python environments, like Poetry.
>
> **[0:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=16)** However, tox is specifically designed for testing purposes, whereas poetry is used for development environments.
>
> **[0:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=24)** We do not enter the environments created by tox to write code, like we did with the environment created by Poetry.
>
> **[0:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=31)** Instead, tox automates the creation of separate testing environments and runs standardized tests.
>
> **[0:36](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=36)** The procedure are standardized, and they will be the same in various Python environments created by tox.
>
> **[0:42](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=42)** You may now wonder why we need tox.
>
> **[0:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=45)** There are a lot of reasons why.
>
> **[0:47](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=47)** First, it allow user to run our test suite in different versions of Python.
>
> **[0:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=52)** For some projects, it supports multiple versions of Python and we would like to make sure it runs, not just on my Python version, but all other versions that are supported.
>
> **[1:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=61)** With tox, the tests are run in isolated environments, allowing us to test in multiple Python versions and if an issue arises in specific version, the test will fail, and we can quickly identify the problem.
>
> **[1:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=76)** Tox simplifies the CI workflow on GitHub Action by automating the process of creating environments and running tests.
>
> **[1:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=83)** In the next video, we will start using tox to run tests across different Python versions.

> [!info]- Semantic Content
>
> **CLI Commands:** python (8), make (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### tox basic usage
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=0)** - [speaker] Now that we understand tox, and its purpose in our project, let's use it.
>
> **[0:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=5)** We'll use Tox.ini, created in the last chapter, as the home to our tox setup.
>
> **[0:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=10)** So let's start there.
>
> **[0:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=15)** So far we only have the flake8 settings, and we need to add the tox settings.
>
> **[0:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=21)** Okay, let's stop for a second, and let me explain.
>
> **[0:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=24)** We set isolated builds to True because we are using Poetry for the build, and we don't want tox to use setup.py and setup.config.
>
> **[0:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=33)** Which is the older way of storing Python project settings.
>
> **[0:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=37)** We use pyproject.toml instead.
>
> **[0:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=39)** Next, the envlist settings allow us to set up multiple environments for testing such as, testing for different Python versions.
>
> **[0:47](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=47)** Here, As a start, we're only using Python 3.10.
>
> **[0:51](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=51)** Remember, that our project supports any versions of Python above 3.8.
>
> **[0:55](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=55)** We may want to test all of those as well.
>
> **[0:58](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=58)** We will see how to do it later in this chapter.
>
> **[1:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=61)** Next, let's add the settings for the testing environment.
>
> **[1:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=66)** So we set pytest as the test dependency, and pytest tests the py as the command to run the test.
>
> **[1:14](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=74)** Now save and quit, and run the test using the command tox.
>
> **[1:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=82)** Oh no, what's going on?
>
> **[1:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=83)** We see some error messages.
>
> **[1:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=85)** What does that mean?
>
> **[1:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=86)** Let me decipher it for you.
>
> **[1:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=88)** Poetry is saying that it cannot find a project os-in-Python.
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=93)** That sounds familiar, So let's check the pyproject.toml file.
>
> **[1:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=100)** Remember, we set our project name to os-in-Python.
>
> **[1:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=103)** Turns out that, Poetry, will automatically assume that is the name of the app.
>
> **[1:47](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=107)** Our app is called reminder.py, so that's why Poetry is confused.
>
> **[1:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=112)** To fix it, let's change the name of our projects to reminder.
>
> **[2:02](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=122)** Save and quit, and let's run tox again.
>
> **[2:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=127)** Now when we run tox we'll see py310 installed in the prompt.
>
> **[2:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=132)** The output is the same as when we run pytests, but we haven't run the linters, nor multiple environments yet.
>
> **[2:19](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=139)** We will learn how to do that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9)
> **CLI Commands:** python (6), find (1)
> **File Paths:** pyproject.toml (2), tox.ini (1), setup.py (1), setup.config (1), reminder.py (1)
> **Prerequisites:** setup (3), set up (1)
> **Cross-References:** in the last (1), later in (1), in the next (1)
> **Versions:** python 3 (1), 3.8 (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)

#### tox advance usage
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=0)** - It's time to improve our tox settings for running tests on multiple Python versions.
>
> **[0:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=5)** First, let's open the tox.ini file.
>
> **[0:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=9)** To make a test run on multiple versions of Python, instead of py310 in the envlist, we will add the other versions as well.
>
> **[0:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=17)** Here we will run the test on Python 3.8, 3.9, and 3.10.
>
> **[0:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=23)** In the envlist sessions replace py310 with py three eight, three nine, three 10, to run the test on Python 3.8, 3.9, and 3.10.
>
> **[0:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=35)** Save and quit the file, then run tox again.
>
> **[0:42](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=42)** The first thing we see, it's now running py38 instead of py310 like in the last video.
>
> **[0:49](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=49)** Next, we see it runs on py39.
>
> **[0:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=52)** Then, finally, on py310.
>
> **[0:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=54)** Now the test suite takes longer to complete as it runs on each of the Python versions.
>
> **[1:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=60)** Next, let's set up linking to ensure code cleanliness and that it's complying with PEP8.
>
> **[1:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=66)** Open the tox.ini file again.
>
> **[1:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=69)** Add a new test environment called lint to the envlist.
>
> **[1:14](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=74)** Then, add the environment settings like descriptions and the dependency black and flake8.
>
> **[1:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=84)** We skip the installation of our app since we are not running the code.
>
> **[1:27](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=87)** We are only checking if the formatting is correct.
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=93)** Finally, add the commands for formatting and minting.
>
> **[1:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=97)** Save and quit and let's test the process again.
>
> **[1:44](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=104)** After running the tests on different Python versions as before, you should see that the black and flake8 linking process have been run within the Lint environment.
>
> **[1:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=114)** In the next chapter, we will set up this process in our GitHub action workflow.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), make (1)
> **Versions:** python 3 (2), 3.9 (2), 3.10 (2)
> **Code Keywords:** let (3), finally, (2)
> **File Paths:** tox.ini (2)
> **Cross-References:** in the last (1), in the next (1)
> **UI Navigation:** open the (2)
> **Prerequisites:** set up (2)
> **Env Vars:** pep8 (1)

#### Checkpoint: What you have so far
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980&t=0)** - [Instructor] It's time for check-in again to see what we have learned in this chapter.
>
> **[0:04](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980&t=4)** In this chapter, we have introduced a new tool called tox.
>
> **[0:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980&t=7)** It is used to create multiple isolated testing environments.
>
> **[0:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980&t=10)** This is very useful when we want to test our application on multiple versions of Python.
>
> **[0:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980&t=15)** Next, we went through the process of setting up tox by making changes in the tox.ini file as per tox documentation.
>
> **[0:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980&t=23)** We successfully tested our application on multiple Python versions.
>
> **[0:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980&t=28)** We also set up a separate environment for our linting tools, black and lint in the tox.ini file.
>
> **[0:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980&t=34)** Before moving on, let's reveal our project setup to ensure everything is on track.
>
> **[0:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980&t=39)** Our original files remain unchanged, but we have made modifications to pyproject.toml, and added tox settings in the tox.ini.
>
> **[0:49](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980&t=49)** So that's it for this chapter.
>
> **[0:51](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980&t=51)** In the next chapter, we will integrate our tox setup with GitHub Actions.

> [!info]- Semantic Content
>
> **File Paths:** tox.ini (3), pyproject.toml (1)
> **Prerequisites:** setup (2), set up (1)
> **CLI Commands:** python (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Setting up a Workflow on GitHub Action

#### What is GitHub Action?
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=0)** - [Instructor] GitHub Actions is a CI/CD platform.
>
> **[0:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=3)** Let's first understand what CI/CD means and why this is important.
>
> **[0:08](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=8)** CI/CD stands for continuous integration and continuous delivery, which is a widely adapted standard for software development.
>
> **[0:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=15)** Most companies use the CI/CD pipeline to automate their deployment process, from running tests to building applications, from source code to making releases.
>
> **[0:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=25)** A continuous integration and continuous delivery platform provide automate pipeline for not just the deployment, but also running the tests, building the application from source and making a release.
>
> **[0:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=37)** This enable developers to shift software quickly and efficiently, as the majority of the release process is automated and standardized, leaving them more time to focus on fixing bugs and developing new features.
>
> **[0:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=50)** So let's finally talk about the star of this video: GitHub Action.
>
> **[0:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=54)** The beta version was released in late 2019 and was quickly become preferred CI/CD tool for many open source projects host on GitHub.
>
> **[1:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=63)** There are also many online resources available to help you learn and use it.
>
> **[1:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=67)** One reason for its popularity is that it's free.
>
> **[1:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=70)** As many open source projects are already hosted on GitHub there's no need for extra signups or hooks.
>
> **[1:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=76)** Another advantage is that there are many open source tools that can be easily integrated into your GitHub Actions pipeline.
>
> **[1:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=83)** We will, for example, put a code coverage into our pipeline and use it.
>
> **[1:28](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=88)** It's straightforward and simple.
>
> **[1:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=91)** I know now you can't wait to try out GitHub Action, so if you haven't already, go ahead and sign up for a GitHub account and host your code from this course.
>
> **[1:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=100)** See you in the next video.

> [!info]- Semantic Content
>
> **Tools:** github (7)
> **CLI Commands:** cd (5)
> **Definitions:** is a  (2), stands for (1)
> **Code Keywords:** let (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** source code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Setting up a workflow for testing
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=0)** - [Instructor] Okay, assuming you now have a GitHub account, the first thing we need to do is to create a repository to host our project.
>
> **[0:08](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=8)** Click on the plus sign on the upper right and select New repository, and you'll end up on this page.
>
> **[0:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=16)** Choose a name for the repository, I'm going to call it OS in Python.
>
> **[0:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=20)** I'll put this is my first open source project as the description and make the repository public so others can contribute to it.
>
> **[0:30](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=30)** Next, you can add a ReadMe file, a gitignore file and a license.
>
> **[0:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=35)** It's always good to have these specified, especially the ReadMe and the license but we can add these later.
>
> **[0:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=43)** Now, we have a few options to start our repository.
>
> **[0:47](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=47)** If you have not started using Git for our project locally, create a new repository on the command line from the Git init command.
>
> **[0:56](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=56)** Instead of git add README.md you would like to use the command git add dot to add all our files instead.
>
> **[1:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=65)** If you are already using git, we'll push an existing repository from the command line.
>
> **[1:11](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=71)** Now, pause the video and do that, come back when your code is uploaded to GitHub.
>
> **[1:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=76)** (instrumental music)
>
> **[1:19](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=79)** - [Narrator] Okay, now we have our code in GitHub.
>
> **[1:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=82)** Let's add a ReadMe like it suggested.
>
> **[1:27](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=87)** You can see that there's only the name of the repo and the short description.
>
> **[1:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=92)** The ReadMe is used to give information about your software, how to install it, how to use it, how to contribute to it but we're going to just leave it like this for now.
>
> **[1:42](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=102)** Remember to go to the bottom and Commit the new file.
>
> **[1:47](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=107)** Next to add our license, click on Add file then create a new file.
>
> **[1:53](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=113)** Let's name it license in all caps and choose one from the most commonly used license templates here on the right hand side.
>
> **[2:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=123)** Be sure to pick the right one for you in terms of what permission you are giving people.
>
> **[2:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=127)** Check the conditions and limitations to using your softwares.
>
> **[2:13](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=133)** I will choose the MIT license and then I'll review and submit your license.
>
> **[2:19](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=139)** You can just commit to the main branch without creating a new branch for now.
>
> **[2:25](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=145)** Finally, to set our GitHub action, we create a new file and name it .github, and then slash to create new directory and then we create another directory called workflows.
>
> **[2:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=159)** Let's name our file check.yml here.
>
> **[2:44](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=164)** It will create a YAML file that stores the information about our GitHub action workflow.
>
> **[2:49](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=169)** First, let's name the workflow.
>
> **[2:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=172)** Then we will specified when the workflow should be triggered In our case, when there's a push and a pull request.
>
> **[3:02](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=182)** Then we define the jobs, which now we have only one.
>
> **[3:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=189)** Here for strategy, we specify that the this job will be running on Python versions 3.8, 3.9 and 3.10 just like we did with tox.
>
> **[3:19](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=199)** We have to set it up here because each workflow will only have one version of Python So we have to create a job for each different versions of Python.
>
> **[3:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=209)** Then we put in the actual commands for each job.
>
> **[3:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=212)** Make sure we have the most updated version of pip, then install tox and run tox.
>
> **[3:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=220)** Now, that we have the workflow in place let's commit this new file.
>
> **[3:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=225)** (mouse clicking)
>
> **[3:53](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=233)** - After that, when you click on actions at the top you'll see that our workflow is running, and now we have a GitHub workflow that runs our testing and linting process.
>
> **[4:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=243)** Whenever there's a change, a proposed change in our code but this is not all.
>
> **[4:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=249)** In the next video, we'll learn about code coverage and why we need it.

> [!info]- Semantic Content
>
> **CLI Commands:** git (5), python (4), make (2), pip (1)
> **Tools:** github (7), command line (2)
> **Code Keywords:** let (5), public (1), finally, (1), case, (1)
> **UI Navigation:** click on (3), go to (1)
> **Env Vars:** readme (1), mit (1), yaml (1)
> **Versions:** 3.8 (1), 3.9 (1), 3.10 (1)
> **Speakers:** - [instructor] (1), - [narrator] (1), - after (1)
> **File Paths:** readme.md (1), check.yml (1)

#### Why do you need code coverage?
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980&t=0)** - [Instructor] The last topic of this course, we will talk about code coverage.
>
> **[0:04](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980&t=4)** Code coverage is a metric that shows the percentage of our code that is tested.
>
> **[0:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980&t=10)** It is not limited to open-source projects, but it is especially important for open-source projects.
>
> **[0:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980&t=16)** It is used to measure how much of our code is tested, usually represent with a percentage.
>
> **[0:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980&t=22)** There are slightly different ways of measuring code coverage, but in general, it reflects how many lines of code were successfully validated during our tests.
>
> **[0:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980&t=32)** But why do we need code coverage?
>
> **[0:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980&t=34)** First of all, as an open-source project, we want to show users that our code is well-tested.
>
> **[0:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980&t=40)** It's also a good way for developers to check if some code or some features has not been tested.
>
> **[0:46](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980&t=46)** Some projects use it to safeguard their project's contributions so that when there is a pull request, tests need to be written for the new code so that the coverage percentage remains the same or increases.
>
> **[0:59](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980&t=59)** So now we know we need code coverage.
>
> **[1:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980&t=61)** Let's add that to our project in the next video.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Adding code coverage to workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=0)** - [Instructor] Now, that we know why we need code coverage, let's add the code coverage report to our project.
>
> **[0:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=6)** To make it happen, we will use a Python library code, coverage, that generates the code coverage report when we run the test.
>
> **[0:14](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=14)** To incorporate that, we need to modify our tox.ini.
>
> **[0:17](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=17)** But before we start, let's quickly get all the changes that we have made on GitHub.
>
> **[0:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=22)** Now, we can edit Tox.ini.
>
> **[0:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=26)** In the testenv setting, we need to add coverage as a dependency.
>
> **[0:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=33)** Then, when we run the commands we use coverage to run the tests.
>
> **[0:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=40)** We also want to report the coverage result after generating the coverage metrics.
>
> **[0:48](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=48)** And, we want to generate an XML formatted report for online reporting.
>
> **[0:56](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=56)** Notice that we use the option omit to omit the test of py, which is the test file which will be 100% coverage, no matter what.
>
> **[1:05](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=65)** Now, save and quit and run tox.
>
> **[1:11](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=71)** Notice that now we have a report every time we run the tests, our code coverage is less than 50%, which is very bad.
>
> **[1:20](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=80)** Different projects will have different standards of how much coverage they required but it's usually between 80% to 100%.
>
> **[1:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=89)** That means we still have a long way to go.
>
> **[1:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=92)** If we look at other files, we notice that we have a .coverage file and coverage.xml file that is generated by coverage.
>
> **[1:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=103)** Let's commit and add our changes to the GitHub Ripple.
>
> **[1:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=114)** This is nice, but what if we want to see the coverage report on our GitHub Ripple?
>
> **[2:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=120)** No problem.
>
> **[2:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=121)** We can use a web service call Codecov.
>
> **[2:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=126)** You can sign up for free with your GitHub account on [Codecov.io](https://Codecov.io), and once you sign up you'll see your GitHub accounts repositories.
>
> **[2:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=135)** Pause the video and do that.
>
> **[2:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=136)** And after signing up, check that your project is on the list and click on it.
>
> **[2:22](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=142)** (techno music) Since we've just started, Codecov give us a set of instructions on how to set up the report with your GitHub action.
>
> **[2:31](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=151)** Pause the video and follow the first two steps to set ups the token and the GitHub app.
>
> **[2:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=157)** Stop at step three so that we'll do it together.
>
> **[2:41](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=161)** (techno music) Now, we need to add a new job in the workflow on Git for action.
>
> **[2:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=170)** Let's edit check.yml and add the following to the end of the file.
>
> **[2:57](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=177)** Remember to commit the changes.
>
> **[3:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=183)** This is to tell the action provided by Codecov to use the coverage, the XML that we generated for the report.
>
> **[3:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=190)** Now, let's create a testing pull request to see if Codecov is working.
>
> **[3:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=196)** Let's edit test.py and add a new test.
>
> **[3:30](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=210)** When we commit the changes, choose create a new branch.
>
> **[3:38](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=218)** Now, let's create a new pull request.
>
> **[3:41](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=221)** Normally, we will put a lot more information here, but since we are only testing Codecov, we'll create it as is.
>
> **[3:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=232)** Running these tests will take a while to finish and for Codecov to put the report in per request.
>
> **[3:58](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=238)** So, let's cut to it when it's finished.
>
> **[4:02](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=242)** And here is the report.
>
> **[4:04](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=244)** And we see that we have increased our code coverage from less than 50% to slightly more than 50% if we merge this pull request.
>
> **[4:13](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=253)** Yay, a small improvement!
>
> **[4:15](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=255)** Now, as the last homework for this course, do you think you can increase the code coverage to more than 80% by writing more tests?
>
> **[4:24](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=264)** In the next video, we'll wrapped up with what we have achieved so far in this course.
>
> **[4:29](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=269)** Congratulations to you on setting up your first open source project in Python!

> [!info]- Semantic Content
>
> **Code Keywords:** let (8)
> **Tools:** github (7)
> **File Paths:** tox.ini (2), coverage.xml (1), check.yml (1), test.py (1)
> **CLI Commands:** python (2), make (1), git (1)
> **Env Vars:** xml (2)
> **Prerequisites:** before we start (1), set up (1)
> **Non-Speech:** (techno music) (2)
> **URLs:** [codecov.io](https://codecov.io) (1)


### 7. Conclusion

#### Open-source project with good practice
> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=0)** - [Instructor] Congratulations, you have reached the end of this course.
>
> **[0:03](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=3)** We have covered a lot in a very short period of time.
>
> **[0:06](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=6)** We have started with a very basic setup for an open-source project in Python using several tools.
>
> **[0:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=12)** We saw how to use Poetry to manage a project's dependencies so that the development environment can be reproduced on other people's computers.
>
> **[0:21](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=21)** We learned how to write tests efficiently to make sure the application is reliable.
>
> **[0:26](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=26)** We used some formatting and linting tools to make sure the code style's consistent throughout the project.
>
> **[0:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=32)** We created a CI/CD pipeline with GitHub Actions to automate testing and linting processes.
>
> **[0:39](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=39)** We even included code coverage in it to increase project transparency and help keep high coding and testing standards, but we have only scratched the surface of the open-source world.
>
> **[0:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=50)** For each of the topics we covered in the course, there's much more advanced usage among them, and I highly encourage you to look deeper into each of the topics we covered and learn more using them.
>
> **[1:01](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=61)** Beyond the topics that we covered, to create a successful open-source project, there are things that we don't even have the time to talk about.
>
> **[1:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=69)** Here are some other things that if you are interested in learning more about creating or maintaining an open-source project, I highly recommend looking at a few more things, how to create and maintain good documentation for your project.
>
> **[1:23](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=83)** For new users, it is critical to have good documentation to help them get started.
>
> **[1:27](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=87)** Then look into packaging and releasing, how to make your projects available to users in an effective and secure way.
>
> **[1:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=94)** Last but not least, for any open-source project to become successful, having a healthy and constructive community is very important, so it's knowing how to build and grow one.
>
> **[1:44](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=104)** So let's keep learning.
>
> **[1:46](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=106)** You have already taken the first step, and now you can learn more by practicing it.
>
> **[1:50](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=110)** I hope you enjoyed the course and hope to see you again.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), python (1), cd (1)
> **Cross-References:** we covered (3)
> **Code Keywords:** let (1)
> **Tools:** github (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Cheuk Ting Ho]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/creating-an-open-source-project-in-python-3085072)

## Skills Covered

- Python (Programming Language)
- Open-Source Development

## Path Context

### In [[Python Hands-On Practice]]
← [[Python Projects- Create an Interactive Quiz Application]] | **8 of 14** | [[Python Projects]] →

### In [[Advance Your Skills in Python]]
← [[Python GUI Development with Tkinter]] | **6 of 7** | [[Build Three Real-World Python Applications]] →

## Appears In

- [[Python Hands-On Practice]]
- [[Advance Your Skills in Python]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)