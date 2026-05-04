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
  - '[Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)'
  - '[Advance Your Skills in Python](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20Skills%20in%20Python.md)'
prev_courses:
  - '[Python Projects- Create an Interactive Quiz Application](Python%20Projects-%20Create%20an%20Interactive%20Quiz%20Application.md)'
  - '[Python GUI Development with Tkinter](Python%20GUI%20Development%20with%20Tkinter.md)'
next_courses:
  - '[Python Projects](Python%20Projects.md)'
  - '[Build Three Real-World Python Applications](Build%20Three%20Real-World%20Python%20Applications.md)'
path_nav: '[{"path":"Python Hands-On Practice","position":8,"total":14,"prev":"Python Projects- Create an Interactive Quiz Application","next":"Python Projects"},{"path":"Advance Your Skills in Python","position":6,"total":7,"prev":"Python GUI Development with Tkinter","next":"Build Three Real-World Python Applications"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/open-source-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Create%20an%20Open-Source%20Project%20in%20Python.md)

![Create an Open-Source Project in Python](https://media.licdn.com/dms/image/v2/C560DAQEh8rkWx4V2MQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1680032934598?e=2147483647&amp;v=beta&amp;t=97RGy2nr1Ul4q6Bx7siDs87h-kuPfHldBdK4mlS9AM0)

# Create an Open-Source Project in Python

> For open-source projects, it can be a challenge to ensure development coherence and avoid errors and bugs. In this course, Python community leader Cheuk Ting Ho guides you through the complete process of starting, building, testing, and maintaining an open-source project in Python. Cheuk introduces you to Poetry, a popular dependency management tool, and shows you how to use it in starting a Pytho

> [LinkedIn Learning](https://www.linkedin.com/learning/create-an-open-source-project-in-python) | 1h 24m | Intermediate | 100K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Create an open-source project in Python](#create-an-open-source-project-in-python)
  - [What you should know](#what-you-should-know)
- [**1. Starting a Project with Poetry**](#1-starting-a-project-with-poetry) (7 videos)
  - [What is Poetry?](#what-is-poetry)
  - [Install Poetry](#install-poetry)
  - [Starting a project](#starting-a-project)
  - [What is pyproject.toml?](#what-is-pyprojecttoml)
  - [Adding dependencies](#adding-dependencies)
  - [Poetry lock and install](#poetry-lock-and-install)
  - [Checkpoint: What you have so far](#checkpoint-what-you-have-so-far)
- [**2. Power Up Your Tests**](#2-power-up-your-tests) (9 videos)
  - [What is pytest?](#what-is-pytest)
  - [Introduction to your project](#introduction-to-your-project)
  - [Writing simple tests](#writing-simple-tests)
  - [Testing with multiple parameters](#testing-with-multiple-parameters)
  - [Test if an exception is raised](#test-if-an-exception-is-raised)
  - [What is a fixture?](#what-is-a-fixture)
  - [Using fixture](#using-fixture)
  - [Skipping a test, with good reasons](#skipping-a-test-with-good-reasons)
  - [Checkpoint: What you have so far](#checkpoint-what-you-have-so-far)
- [**3. Tidy Up Your Code**](#3-tidy-up-your-code) (7 videos)
  - [What is PEP 8?](#what-is-pep-8)
  - [What is Black?](#what-is-black)
  - [Formatting your code with Black](#formatting-your-code-with-black)
  - [What is a linter?](#what-is-a-linter)
  - [Linting your code with Flake8](#linting-your-code-with-flake8)
  - [Using pre-commit to clean up automatically](#using-pre-commit-to-clean-up-automatically)
  - [Checkpoint: What you have so far](#checkpoint-what-you-have-so-far)
- [**4. Standardize Testing Using tox**](#4-standardize-testing-using-tox) (4 videos)
  - [What is tox?](#what-is-tox)
  - [tox basic usage](#tox-basic-usage)
  - [tox advance usage](#tox-advance-usage)
  - [Checkpoint: What you have so far](#checkpoint-what-you-have-so-far)
- [**5. Setting up a Workflow on GitHub Action**](#5-setting-up-a-workflow-on-github-action) (4 videos)
  - [What is GitHub Action?](#what-is-github-action)
  - [Setting up a workflow for testing](#setting-up-a-workflow-for-testing)
  - [Why do you need code coverage?](#why-do-you-need-code-coverage)
  - [Adding code coverage to workflow](#adding-code-coverage-to-workflow)
- [**Conclusion**](#conclusion) (1 videos)
  - [Open-source project with good practice](#open-source-project-with-good-practice)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Create an open-source project in Python](https://www.linkedin.com/learning/create-an-open-source-project-in-python/create-an-open-source-project-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/create-an-open-source-project-in-python?u=76281980&t=0)** - [Cheuk] Welcome to this course on creating an open-source project in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). We will cover the foundational tools and setup required to create your first open-source project in Python. I'm Cheuk Ting Ho, and I'm a Python community leader. [Open-Source Software](../../Skills/Cybersecurity/Open-Source%20Software.md) project are unique in the sense that everyone in the community can impact, modify, and enhance the source code under the supervision of typically a few volunteer community leaders who act as the project maintainers. The developers, as users themselves, understand the project's need and what features are lacking. Most open-source projects do not have customer service and require some technical know-how to be able to use them. I know you're excited to build your project. But, before that, we will go over some details that you need to know before starting the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Open-Source Software](../../Skills/Cybersecurity/Open-Source%20Software.md) (1)
> **CLI Commands:** python (3)
> **Exercise Files:** source code (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [cheuk] (1)

#### [What you should know](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-you-should-know?u=76281980&t=0)** - [Instructor] If you want to follow along with the course, it's helpful if you know the basics of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming. Including working with packages and writing test for your code. We'll be using the terminal throughout the course to run the commands, manage our projects and run [Git](../../Skills/Software%20Development/Git.md) commands. Now, if you want to have a good idea of the tools we use you can watch the first couple of videos of each chapter where I go over the basics of the tools used for that chapter. Shall we begin?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **CLI Commands:** python (1), git (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 1. Starting a Project with Poetry

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Poetry?](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=0)** - [Instructor] Poetry is both a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) packaging tool and a [Dependency Management](../../Skills/Software%20Development/Dependency%20Management.md) tool. In this course though, we are only going to use Poetry as a dependency management tool. The most straightforward way of managing your dependencies in the Python project is to first list all the external libraries and diversion numbers in the requirements doc text file. Then you use pip, which comes with most distribution of Python to install the dependencies listed in the file. This is what we call the bare minimum setup but there's some problems with it. To start with, you'll end up with a lot of dependencies that you have no idea where they come from. For example, with this requirements doc text file you'll end up with all these libraries installed. Reason being that some of the libraries in the requirements doc text file depend on other libraries as well, and they will all get installed. This is to make sure that you have everything you need in this environment for your projects to work, but then you end up with a lot more dependencies than what you're expecting. Now, to make things worse if you're working with multiple projects they won't be installed in isolated environments. In other words, each project requirements doc text and all their dependencies will get mixed up with each other, and at the end of the day you will have no idea which dependencies come from which project because again you can't trace where they're coming from. If you're lucky enough, everything will still work
>
> **[1:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-poetry?u=76281980&t=94)** and you won't end up with conflicts. Sometimes it may happens that project requires a specific version of library while other projects requires a different version of it, but since it's not allowed to have two versions of the same library installed in the same environment, a conflict is created. You cannot get both projects working fine at the same time with same environment, and that's why we use Poetry. Poetry provides a solution for all these problems. First, it provides a way of tracking where dependencies comes from. The simple command poetry show --three, shows all your dependencies in a tree diagram showing you exactly what you have in your environment and why they are there. The second thing Poetry provides are isolated environments for each project you create. And since you they don't share the same environment, the risk of conflict is minimized. Finally, many projects support multiple version of Python. If you ship your projects to another person with a different version of Python, Poetry will try to find the appropriate versions of the dependencies automatically and install them to make sure it works for all supported version of Python. Yes, Poetry is that great. So let's start using it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Dependency Management](../../Skills/Software%20Development/Dependency%20Management.md) (2)
> **CLI Commands:** python (6), make (3), pip (1), find (1)
> **Prerequisites:** install (2), setup (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Install Poetry](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=0)** - Installing poetry is very simple. You can install it with PIP, just like with any other [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library, but it is not recommended. Reason being that if you have multiple versions of Python in your computer, the installation of poetry via PIP is only tied to the Python version present during the install. This means that you would need to install poetry separately for each version of Python. The solution is to install poetry using the script hosted on install.[python-poetry.org](https://python-poetry.org). It is a Python script that acts as an installer. By installing it this way, poetry will be isolated and will have its own environment. Also, poetry will be accessible between different Python versions and virtual environments in your computer. You can keep using whatever Python environment your project is in without installing poetry in that environment. To install using the script on install the python [poetry.org](https://poetry.org) is easy. With a curl command, you can ask Python to run the script. Make sure you're running it with Python three, not Python two. If you are using [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) on [Windows](../../Glossary/Service/Windows.md), you have to use the curl command in a slightly different way. Check the official documentation for exactly how. Once poetry is installed, you can use poetry --version to check the version that was installed. To uninstall poetry, run the same installer script with the --uninstalled flag. You can also install a specific version of poetry
>
> **[1:36](https://www.linkedin.com/learning/create-an-open-source-project-in-python/install-poetry?u=76281980&t=96)** by adding the version number with the --version flag when running the installer script. Finally, to update poetry, use the poetry self update command. And these are the basic commands to manage your poetry installation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (12), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** python (12), pip (2), curl (2), make (1)
> **Prerequisites:** install (8)
> **URLs:** [python-poetry.org](https://python-poetry.org) (1), [poetry.org](https://poetry.org) (1)
> **Env Vars:** pip (2)
> **Definitions:** means that (1), is a  (1)
> **Tools:** powershell (1)
> **Analogies:** just like (1)

#### [Starting a project](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=0)** - [Instructor] So let's have a look at how to start a Poetry project from scratch. I type ls to show that I'm in an empty directory and then poetry --version to see that I already have poetry version 1.1.13 installed. Then I start a project with command poetry init, which starts the series of questions to set you up with the pyproject.toml configuration file. First of all, you are asked for the project name, Poetry suggests the name of your current directory, which in my case is os-in-[python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), but you can type in whatever name you like. I'm fine with the default name, so I press Enter. Next is the version of this project. Now, since poetry uses semantic versioning, it defaults to version 0.1.0, and again, you can set it to another version if necessary. In my case, I press Enter to use the default value suggested. Next, you ask for a short description, which is optional and can be leaved blank. Then you can set who the author of the project is, which defaults to your [GitHub](../../Skills/Software%20Development/GitHub.md) username. Next, you can specify a license for your project, which is always a good idea. The most popular ones used for open-source projects are the MIT and Apache 2.0 licenses. Let's type MIT here and press Enter. Next for the Compatible Python versions, by default, Poetry will pick something for you
>
> **[1:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=94)** depending on the current version of Python you have on your machine, which in my case is Python 3.10. So Poetry will assume that this project supports compatible update from Python 3.10 up to Python 4.0. In other words, it will support anything above or equal to Python 3.10 but below Python 4.0. If you want to support other versions of Python, you can put in something like above or equal to Python 3.8. Then you'll be asked whether you want to define your dependencies interactively now. I will say no since we are going to do that in another video later on. I will also say no to the next question. Again, we'll do it in another video. And last, you will have to confirm whether you want all these answers to be used to generate a pyproject.toml. This is the chance for you to double check to see if everything is okay. But don't worry too much, since you can change it later on by editing the pyproject.toml file. And there you go. We have started a new project. It may seem like nothing happened, but to check, simply look at the directory and see that pyproject.toml file was created. Now we can check the name and the version of our project with poetry version command. And to enter Poetry's virtual environment for this project, you use the poetry shell command.
>
> **[3:10](https://www.linkedin.com/learning/create-an-open-source-project-in-python/starting-a-project?u=76281980&t=190)** In the new environment with pip list command, we see that we have the standard starter packages installed and nothing else. To exit the environment, just type exit and press Enter. And there you go, our base project is set up. But before we add our dependencies, let's take a look at what the pyproject.toml file does.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (10), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** python (10), ls (1), apache (1), pip (1)
> **Versions:** python 3 (4), python 4 (2), version 1 (1), 1.13 (1), version 0 (1)
> **File Paths:** pyproject.toml (5)
> **Env Vars:** mit (2)
> **Tools:** github (1)
> **Definitions:** in other words (1)
> **Prerequisites:** set up (1)

#### [What is pyproject.toml?](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=0)** - [Instructor] Let's have a look at the pyproject.toml. It is a text file to specify what build dependencies your [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) package needs. It was proposed in the Python enhancement proposal or PEP 518, and is widely adopted since. Even if we are not packaging our project, we can also use pyproject.toml with poetry to manage our project dependencies. In PEP 518 pyproject.toml is proposed to solve a build dependency problem that has arised in Python community. Before, most Python softwares use setup.py to specify the build dependencies, such as other Python packages that they are depending on. However, being an executable file itself, setup.py may require certain Python packages to work properly. This create a chicken and egg problem. Therefore, instead of relying on setup.py or the build dependencies, including those required by setup.py, should be listed in another file. After considering several different file formats, such as [JSON](../../Skills/Web%20Development/JSON.md) and yaml formats, the TOML formats was chosen and the pyproject.toml file become the new standard of listing dependencies in Python projects. This is the pyproject.toml of our project. It was generated by poetry when we initialized the project. Poetry asked you some questions, when you run the poetry in it command,
>
> **[1:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pyproject-toml?u=76281980&t=95)** and create this file for you depending on your answers. These sections, starting with tools.poetry in the header, will be used by poetry. The first section hosts the information about your project or package. The other two sections list all the dependencies of your project. One for the dependencies needed to run the project or required to make the software work, and another for the dependencies that are needed only when you are developing the project. For example, packages required for testing the code. Finally, the last section shows what tools are required to build this package. But since we are not talking about packaging in this course, we will not go into details here. And this is what it is for now. Later, when more dependencies are added, there will be more information about what libraries are required in this project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (7), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **File Paths:** pyproject.toml (5), setup.py (4)
> **CLI Commands:** python (7), make (1)
> **Prerequisites:** setup (4), required to (2)
> **Env Vars:** pep (2), toml (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Adding dependencies](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=0)** - [Instructor] Back to our command-line interface. It's time to add some dependencies to the project, using the Poetry Add command, followed by the library and its version that you want. For example, our project uses Click, a library to create pretty command line interfaces. There are many ways to specify what version of the library are required. If you are not sure about how, check the documentation of Poetry. Here we show some common examples. For example, with Click, we want the compatible update of Version 8.1.0. Once you run the command, the dependency is installed, and you can see it by using the Poetry Show command to see all the available packages that are installed. Now, to add development dependency, you simply add the --dev flag to Add command. For example, we want to add the latest version of Pytest to our development environment. We type "poetry add --dev pytest@latest."
>
> **[1:12](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-dependencies?u=76281980&t=72)** Now, if you have many dependencies, you can add them all in one single command. You can even skip specifying the versions and let Poetry select them for you, judging from the compatibility or your current environment setup. To do that, you simply list them after the dev flag, like this. So now that I've got everything installed, I will run Poetry Show again and see that there are an overwhelming number of things installed. But if we add the --tree flag, we can see the dependencies as tree hierarchy. At this point, we can go into the virtual environment by using Poetry Shell and then use the Pip List command to see all the installed libraries, which, as you can see, Poetry provides a much better view than this.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **Versions:** version 8 (1), 1.0 (1)
> **CLI Commands:** pip (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Poetry lock and install](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=0)** - Once you run the install command, poetry installs all the dependencies and creates a file called poetry.lock. Notice that when we specify our dependencies we may only set a criteria for the needed version rather than specifying an exact version. So during install, after poetry finds the exact compatible version for you, it adds that information for every dependency installed in the poetry.lock file. Therefore, it is highly recommended to keep this poetry.lock file around, so make sure to add it on commit to your [Git](../../Skills/Software%20Development/Git.md) repository, or whatever [Version Control](../../Skills/Web%20Development/Version%20Control.md) system you use. It will be needed if you want to preserve the exact environment that you have with this project, and it is essential when installing your project in a new environment. Imagine you have to reinstall your environment because you have a new computer, or your colleague is picking up your project and wants to set up the same environment in their computer. You can use the poetry install command and create a new virtual environment where all the dependencies will be installed. However, depending on which files already exist in the directory poetry will set up this environment differently. If the poetry.lock file is not present, it means that either that environment has never been installed or the file is lost. Poetry will then try to create a workable environment
>
> **[1:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/poetry-lock-and-install?u=76281980&t=95)** depending on the pyproject.toml file. Bear in mind, pyproject.tomo only documents the compatible versions but not an exact version of any dependencies used, unless a specific version is specified. In that case, new poetry.lock will be created, but it is not guaranteed that this poetry.lock file will always be the same since the new versions of the library may have become available, And poetry will update the file to the newest available and compatible versions. So, if you follow my advice and keep the poetry.lock file, poetry will look at it and install the exact versions of all the dependencies in this new environment for you. Let's say it has been months since your last install of your old environment, you can be assured that the libraries using this new environment will be of the exact same version, even if a newer version is now available. And then, if you need to update to the latest compatible versions of the dependencies simply use the poetry update command This gives you control and makes it easier to manage your project environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **File Paths:** poetry.lock (7), pyproject.toml (1)
> **Prerequisites:** install (5), set up (2)
> **CLI Commands:** make (1), git (1)
> **Best Practices:** recommended (1), make sure to (1)
> **Definitions:** means that (1)
> **Analogies:** imagine (1)
> **Speakers:** - once (1)

#### [Checkpoint: What you have so far](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004456?u=76281980&t=0)** - [Instructor] Congratulations, you have made it to the end of this chapter. And before we move on, let's take a look at what we have learned so far. We have seen that Poetry is a useful tool to manage your project environment. We saw how to install Poetry properly on its own isolated environment. We saw how to start a project using Poetry to manage the project's environment and dependencies. We learned how to add project dependencies for both our production and development environments separately. Finally, we learned how to recreate the exact same project environment in another machine. Let's check what we have in our project directory so far. First of all, we have a pyproject.toml file which stores information about our project and its dependency requirements. Second, we have the poetry.lock file which is the exact same blueprint of your project's environment setup. And, as a reminder, all the files that I created in this chapter are available on [GitHub](../../Skills/Software%20Development/GitHub.md) for your reference. If everything is fine, I will see you in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **File Paths:** pyproject.toml (1), poetry.lock (1)
> **Prerequisites:** install (1), setup (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Power Up Your Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [What is pytest?](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=0)** - [Instructor] Welcome to the chapter where we'll learn how to write better tests for our programs. The testing library we are going to use is called pytest. Pytest is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) testing framework that allows you to write small tests such as unit tests with ease. The standard testing library that comes with a CPython distribution is called unittest. However, I prefer pytest for reasons we'll discuss later. Pytest is very popular. It has over 9,000 stars on the [GitHub](../../Skills/Software%20Development/GitHub.md) page, which for an open-source project is very good. And due to its popularity, several plug-ins for pytest have been developed, such as pytest-cov for test code coverage, pytest-[Django](../../Skills/Web%20Development/Django.md) for testing Django, a Python web framework, and pytest-asyncio for testing asynchronous code. Now, as I mentioned earlier, a lot of Python developers prefer pytest over unittest. The first reason is pytest provides several powerful built-in functions that make managing your test very easy. Second, pytest structures tests in a way that makes it easier to work with. In unittest, a test case class has to be defined and the tests are written inside it. But with pytest, you simply write your test functions and assert if your code is correct inside a much more straightforward process. A third advantage pytest has is the many plug-ins available for it. As I mentioned before, there are plug-ins to help with testing several different applications.
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pytest?u=76281980&t=93)** Finally, pytest provides a better-looking error report. It shows how many tests have failed, how many tests were skipped, and how many tests have passed in a nicely laid out summary from which you can dive into the fail tests and resolve them. Pytest is a very useful tool for testing. Let's see how we can use it to test our project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Django](../../Skills/Web%20Development/Django.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** python (3), make (1)
> **Definitions:** is called (2), is a  (2)
> **Analogies:** such as (2)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to your project](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=0)** - Our project is a simple command line application written in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Let's have a quick look at what it does before looking at the code. Before we run the application we can enter our poetry environment or add the poetry run command before the Python command you want to run. For example, I may want to run the reminder of py files help command, but since we are going to execute multiple commands, I prefer to enter the environment first instead of adding the poetry run every time. So I type poetry shell to enter the poetry environment and now I run the command to add a reminder. To list the reminders, I use the list command. And to add a task with a deadline, I use the add command with deadline option. Let's list them again and we see that the task which has passed the deadline is shown in red. Now, to mark something as done, we used a done command like this: and list them. To see that the tasks are marked as done are shown in green. Finally, to remove an item we used to remove command like this and then list them and it's gone. So this is how our app works. Now let's look at the code by typing vim reminder dot py. No stats. This Python code is not polished at all.
>
> **[1:40](https://www.linkedin.com/learning/create-an-open-source-project-in-python/introduction-to-your-project?u=76281980&t=100)** And is not even tested. It kind of just worked. Our goal is make sure this code is tested and tidy so it's easy to maintain. We see here in the code that there are lots of functions with name started with an underscore like the get task list on line 14, here. In Python, a function that starts with an underscore usually indicates it's an internal or private function. So these are the helper functions for our app and we'll be writing test for these functions. Now you can see that the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code is using Click, one of our dependency libraries, to create the commands for the app. But since this course is not about Click, we'll not go into details here. And that's it. We have seen how the app works and where the source code is. We are ready to start writing some tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** python (4), make (1)
> **Non-Speech:** (typing) (4)
> **Tools:** command line (1), vim (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - our (1)

#### [Writing simple tests](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=0)** - To create a test file in our app, we'll use the touch command Usually in a more complex project it's good practice to place our source code and our test files in separate folders. But since this is a very small project with only one source code file we are going to leave the pytest of py file in the same directory and write all our tests in it. So let's open our test py file and start writing our tests. First we need to import our script so that we can use the objects and functions created there. So I import the reminders app and from the reminder we import tasks. Then we read our first test functions to test define task function. The convention is to name the test function by adding test in front of the function name. Let's omit underscore at the beginning. So it is test find task. Now we need a dummy task list to test with. So we defined a task list to be a list of task items. We have two items to start with one with the name pay rent and the other buy bread. Then we use the assert statement, which should only be used in testing to compare the functions result against the expected results. So I type assert The name of the function I want to test, app dot find task and I give buy bread as the search parameter and task list as the list to look into.
>
> **[1:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=97)** The result should be the task. We have the name buy bread. Great, our test is written, so let's run it with pytest. We first saved the file and go back to the terminal and then we use pytest command to run the test. As you can see, we ran one test and it passed as shown by the green dot. But what does it look like if it fails? Let's try it out by editing our test pyfile. I'm going to change the assert statements slightly to make it fail. I changed this last name to buy milk save and quit and run it again. As you can see, instead of the green dot we now have a red F showing it failed. There's also a message showing why it fail. In our case it says that there's a difference in the name attribute. To see the detailed comparison we can run the test again with the dash VV option. Now you can see the comparison side by side which is really handy especially when you are dealing with more complex objects with Nest dictionary or objects with multiple attributes. Now let's go back to fix the test from the buy milk back to buy bread. And let's also write another test where if nothing is found in the list, none will be returned. So I copy the first test and modify by changing the assess statement to is none instead of comparing it to a test like before. Okay, so save and quit
>
> **[3:16](https://www.linkedin.com/learning/create-an-open-source-project-in-python/writing-simple-tests?u=76281980&t=196)** and run the test again to make sure all tests passed. As you can see, we have two green dots instead of just one. That is because we now have two tests. This is very nice, but what if I want to write more test against defined task function? I could repeat the copy and paste process several times but it can become very messy especially if we mix them up with other tests. In the next video we'll use a trick called parameterize to create multiple tests for the same function with different parameters in a neat way.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **Non-Speech:** (typing) (4)
> **Cross-References:** go back to (2), in the next (1)
> **Exercise Files:** source code (2)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - to (1)

#### [Testing with multiple parameters](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=0)** - [Instructor] To be able to parameterize our tests, we first need to add the parametrize feature to our code. So let's open it and import pytest with this feature. So I type import pytest, (keyboard clacking) and then we add the decorator to the existing test function. So let's put it on the first one. Now we need to put the parameters in. If we look closely at the two tests, they both need two parameters, an input to be test and an expected result. Let's name these parameters "test_input" and "expected" and add them in the decorator. (keyboard clacking) Then, we define a function called test_find_task that receive that test input and the expected values. (keyboard clacking) And then we change the function accordingly by using the assert to compare the result of the function against the expected values. (keyboard clacking) But we are still missing something. The decorator needs two inputs. The first one is a string where we define the parameters separated with commas, in our case that's test_input, expected. The second input is a list of parameter values which are tuples holding all the test case values. Our first test case is buy bread, along with the task object that remind us to buy bread. So let's put it in our list
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=93)** by adding a list with the tuple, buy bread, and the task. (keyboard clacking) Now let's add the second test case for buy banana and expect to have a none object in return. So we add another tuple with buy banana and none for the expected value. (keyboard clacking) Finally, we can delete the second test functions since we are covered by the new parameterized tests. Let's save and quit and run the test again. (keyboard clacking) We can see that we still have two green dots indicating two tests have passed, even though we have only wrote one test function in our file. It is because when we ran our tests, the parameterized decorator magically change our test function into two test functions that are exactly the same, except the parameters, since each test case is actually a separate test in pytest. And so if one set of parameters fail, it shows each fail independently. Let's see if that's true. Let's go back to the file and make some changes. (keyboard clacking) Let's change the second test case slightly by changing the none to a task name "buy banana" (keyboard clacking) and run it again. And here we go, we have one pass and one fail. This is expected because we don't have buy banana in our list. So let's go back and fix our file by placing the none back.
>
> **[3:11](https://www.linkedin.com/learning/create-an-open-source-project-in-python/testing-with-multiple-parameters?u=76281980&t=191)** (keyboard clacking) Now here's a little challenge for you before we go on to the next video. Can you try to add one more test to the parameterized test? Let's add the test to see if the function can find the pay rent task in the list. You may want to check if the capitalization matters in our find task function, so let's make the input all caps. Pause the video and tried it on your own before seeing the result. Okay, did you get it? This is how I did it. I add another tuple to the list with pay rent and a task name "pay rent" as the expected value. (keyboard clacking) Once again, we save and quit and run our tests. (keyboard clacking) As we see, all three tests passed. Now you know how to create parameterized test. Make good use of it in the future, and let's keep going and write some more tests in the next videos.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **Code Identifiers:** test_input (2), test_find_task (1)
> **Cross-References:** go back to (1), next video (1), in the next (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Test if an exception is raised](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=0)** - [Instructor] This time, we want to test the two date function. We should pass as string in a year, month, date format to a date object in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Let's open the file. Import datetime from from the standard library as dt, and then write the test_to_date function using the assert command. (keyboard typing) Now let's run it. (keyboard typing) And it works, but we have a problem. What happens if someone inputs the wrong strain format for the date? By design, it gives us an error saying that the input is not the right format, but we want to check if the error message is raised correctly. For that, we need to use the Pytest.raises context tool. To use it, we need to write a new test to catch the exception. (keyboard typing) Now, to use the context, we use the Python with statement followed by Pytest.raises(ValueError). Note that ValueError is the exceptions that we are expecting. Now, we can create a test that is supposed to raise an error by giving it 1, 2, 3, 4, 5 as the parameter. (keyboard typing) Let's test it. (keyboard typing) It passed the test, which means the value error is raised when the test is run.
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/test-if-an-exception-is-raised?u=76281980&t=93)** Now, let's try to make this test fail. If we change the 1, 2, 3, 4, 5 to a proper date (keyboard typing) and run it again, (keyboard typing) we see that it fails since it didn't raise the value error. Let's go back to fix it. (keyboard typing) However, to make this test more robust, we have to go beyond simply checking if any value error was raised, not necessarily the ones we raised in our code. To check if the error message is exactly what we are expecting, we can change it with statement a bit by adding the match parameter and specifying what the error message should be. (keyboard typing) Let's run the test again. (keyboard typing) And as you can see, all our beautiful tests pass. This is how you check if an expected error is raised. Very useful, especially when dealing with functions that can raise multiple different errors by design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Non-Speech:** (keyboard typing) (10)
> **CLI Commands:** python (2), make (2)
> **Code Identifiers:** test_to_date (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [What is a fixture?](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=0)** - [Instructor] Before we moved on to write more tests, let's have a look at what a fixture is and how it can be useful for writing our tests. Pytests provides a feature called fixture. It can be useful when a constant context needs to be provided to the tests. Fixtures are created outside of the tests and can be used multiple times in different tests, or even used in other created fixtures. We will go through some examples of when it is useful later. By using fixture, you can make more complicated tests and have full control of the testing environment including setting up external environments for your tests via fixtures. Your tests can have access to these external environments that got set up. For example, you can provide information from an external process that is set up by the fixtures. So what did I mean by saying that fixtures can provide constant context from an external testing environment? Here are few examples of fixtures that are being used. First, when we have an external surface, let's say one that lives in a Docker container, and can be accessed by API calls, you may not want to spin this surface up multiple times and you'd probably like to keep the surface running until you're finished with all the tests. For that, we need a fixture to share the surface among multiple tests.
>
> **[1:32](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=92)** Another scenario is when we are using external data files or database where the data is stored and should shared amount tests. We'll see this use case in the following videos when we write more tests for our application. Finally, the benefits of using a fixture is that we can separate other dependencies from the test itself to write efficient unit tests, the test themselves should have less dependency on external variables so any errors on the tests can be pinpointed to the feature that the unit test is testing. By taking some of these dependencies out as a fixture and feeding them into the tests, we know that if the fixture fail, it has nothing to do with the tests and that helps a lot when troubleshooting. Let's see how we use fixture in code. This example here is a bit silly, but it shows the syntax of creating a fixture and using it. To create a fixture, we code in the fixture decorator from the pytest module and add it to a function. The function then will turn into a fixture. To use the fixture, just pass the fixture as a parameter to the test function. Then the fixture here is fully accessible by the test function. In this example, we pushed the fixture together with the test function in one file. For more complex test set up, you may see sometimes the fixtures are created in a separate file called conftest.py, and the scope set to module.
>
> **[3:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-fixture?u=76281980&t=187)** This is to make the fixture accessible and shareable across all the text files, but it is more complex and for this course, we will not be using fixture this way.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), docker (1)
> **Prerequisites:** set up (3)
> **File Paths:** conftest.py (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using fixture](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=0)** - Now that we know what a fixture is let's use it in a very simple scenario. As usual, we start editing our tests. Now let's see what we can change into a fixture. What do you think? Something that is constant and can be reused in other tests. Okay, let's see if you are thinking the same. We are going to make the task list in test find task into a fixture so we can reuse it in other tests. First, remember that we will post the fixture in as a parameter. So let's add that in the parameter list for test find task. Then we write the fixture like this. Let's edit before the test function. If you feel like a challenge, post a video and try writing it yourself before watching me doing it. (energetic music) Also, don't forget to delete the test list in the test function since we don't need it any longer. Now, let's test if it still works. Okay, like you did before. So save and quit. Let's test it out All green! So no problems at all. So now that we have a fixture let's reuse it and write another test.
>
> **[1:37](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-fixture?u=76281980&t=97)** Let's write a test for the save and load functions. Here, we will use the test list fixture like you show. Feel free to post a video and try it yourself. (energetic music) Let's test if the fixture also works in this test. Let's save and quit and run the test. We also got all pass with no problems. With this small example we see how fixture works syntactically. However, it is not using the true power of fixtures. Fixtures can be more useful in more complicated scenarios but it is a good start for us. As you can see, the task looks tidy and we can reuse some elements for multiple tests in a way that is easy to manage and understand.

> [!info]- Semantic Content
>
> **Non-Speech:** (typing) (3), (energetic music) (2)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - now (1)

#### [Skipping a test, with good reasons](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=0)** - [Instructor] Before we finish this chapter, the last useful tip to help writing and maintaining tests is to skip some tests. Yes, you heard it right. Some test are expected to fail under certain circumstances. So we must deal with them. For example, if certain features are not supported on a certain platform, they should not be tested against that platform. Sometimes feature in our application are not backwards-compatible, meaning that they will only work on newer versions of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). The reverse can also happen when an old feature no longer works on the newer versions of Python. Another good reason to skip a test is that the feature is simply not implemented yet, or it is temporarily removed or unavailable. We do not want to test features that are not supposed to be working yet. So, now that we know why we will skip some tests, how do we do it? In pytest, it's very simple. You can skip the whole test by using the skip decorator. You can even provide a reason why the test is being skipped, as a reminder for yourself and other developers. Alternatively, you can skip the test during execution by using the pytest.skip function. This gives you more control over when we should give up testing. In the example, we are skipping the test when the platform is not valid.
>
> **[1:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=94)** Another way to skip a test is to use the skipif decorator. Instead of skipping the test during execution, the condition is tested before entering the test. Like the skip decorator, you can add a reason for it, along with the condition that checks to skip the test or not. In the example, we skip the test when Python version is below 3.8. Other than skipping a test, sometimes we're expecting a test to fail, so we mark it to come back to it later. This is specially handy when you are tackling a complicated bug that would take more than one coding session to finish. You can mark the test to be expected to fail, and save it to be fixed later. Also, marking a test as xfail does not fail the entire test. So, if it's not an important bug, we let it pass in order to not be a block for other developments. Marking a test as xfail is as easy as skipping it. We can add the xfail decorator to pytest.mark, again, with reason for it. In fact, it's a good practice to always provide a reason when test failed. Note that in this example, the reason is oversimplified, and you should normally have a lot more explanation than this. On top of that, you can also provide condition of when this test is expected to fail. Sometimes we know a test only fails on a certain platform, or a certain version of Python. And with that, the test can still be executed
>
> **[3:09](https://www.linkedin.com/learning/create-an-open-source-project-in-python/skipping-a-test-with-good-reasons?u=76281980&t=189)** when it does not meet those conditions. Okay, great! We have now gone over the last tip for testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
> **CLI Commands:** python (4)
> **Versions:** 3.8 (1)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Checkpoint: What you have so far](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=0)** - [Instructor] We have come to the end of this chapter so let's sum up what we have learned so far. First of all, we were introduced to pytest, a popular testing library and we used it to write some tests for our mock project. We explore some features of pytest such as parameterize which can combine similar tests into one test with multiple parameters, which helps tidy up your code. We have also learned how to test for expected exceptions and how to treat them appropriately. We also learned about fixture which allow us to take some elements that is irrelevant to the test out of the test itself. This makes managing the test much easier. Last but not least, we know what to do if we have tests that are expected to fail under certain conditions. We can then skip the test or mark it as known fail. This way, we can get past the test and not block further development. Now before we move on let's check if we still have all the files that we need in the project. Like in the previous chapter we still have our pyproject.toml and the poetry.lock files. Even though we are not changing them it is important to keep them so we have our project set up saved. Then we have reminder.py our mock application that lives inside of it. You may also find out that we have reminder.p This is a picker file
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22004459?u=76281980&t=93)** that our application generated to store our task list. Finally, we have the fruit of our work in this chapter, tests.py We store all of our tests. Feel free to develop them further and come back to it if you want to remind yourself of what we have learned. If you are not sure if you have everything all the project files can be found on the [GitHub](../../Skills/Software%20Development/GitHub.md) repo. Now let's move on to the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **File Paths:** pyproject.toml (1), poetry.lock (1), reminder.py (1), tests.py (1)
> **Cross-References:** previous chapter (1), next chapter (1)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)


### 3. Tidy Up Your Code

[↑ Back to Table of Contents](#table-of-contents)

#### [What is PEP 8?](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=0)** - [Instructor] Before we talk about PEP 8 specifically, let's talk about what a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) enhancement proposal or PEP is. A PEP is a document that describe a new feature or change that will potentially improve Python. It contains the technical details and the reasons why the new feature or change is needed. If the PEP is accepted, it functions as a guide for the core Python developers to implement the changes in the following Python releases. In other words, a PEP is a very important document. Who can propose these important changes? You can, so can I. That's right. PEP act as an input from the community to determine the future of Python. PEPs requires a lot of thought and discussion within the community to be able to reach a consensus and have it accepted. It is the author's responsibility to develop the PEP and gather support from the community to get it approved. One of the most famous PEPs is PEP 8. We talk a lot about it in the community. Not only has it been accepted for a long time, it's footprint is seen in many other PEPs. If you look at all the references a PEP makes, you'll surely find that many of them trace all the way back to PEP 8, directly or indirectly. So what is PEP 8? PEP 8 is a style guide for Python, now a new feature in the Python interpreter. It's a guide or rules of thumbs on how to style your Python code. The Python syntax is very flexible
>
> **[1:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=94)** and can be formatted quite freely, yet it will be interpreted the same way by the Python interpreter and work just fine. You can think of PEP 8 as a set of rules the community agreed upon to dictate how Python code should look like. You may wonder why it is needed. Actually, stricter formatting do have benefits in many ways. First, it improved the readability of the code. It will keep a straight and consistent format. The code is more neat and it's much easier to read. It is just our human nature to like looking at things that is symmetric and tidy. Consistency can also minimize the unnecessary distraction when reading the code. When the code is easier to read, it is easier to avoid making mistake. If there's any, it is easier to spot. When unnecessary distractions, which I mean inconsistency in formatting is removed, we can focus on what the code is actually about. Also, anything that is out of the ordinary which is a hint of a potential bug, can be picked out easily. Another benefit is in open source, there are usually multiple contributors and they will have to all agree on a coherent format anyway. Otherwise, the code is looking messy, again, due to inconsistency which we are trying to avoid due to reasons above. Instead of finding a set of rules for each single project, a universal formatting rule can benefit the Python community as a whole. There are a lot of rules
>
> **[3:08](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=188)** that is mentioned in PEP 8. Here are some that is well known in the community. First, the most famous four spaces, not tab rules for the code indentation. It is leading by four spaces, but not anything else. It is also this reason many of us set our code editor to automatically convert tabs to four spaces or do the correct four space indentation for us. Then we have a maximum line length rule. It is wise to avoid super long line to make it easier to read. There are many ways to restructure code to make the line length fall under the maximum and this is considered the best practice. Next is to use blank lines properly. Using two blank lines to separate definition of top level classes and within each class, using one blank line to separate definition of each method. This is a bit like using titles and sub titles to separate paragraphs in articles. Inside PEP 8, there are also details about naming conventions, when to use capital cases, when to use underscore in names, what names we should avoid using, et cetera. With these naming conventions, it is easy to see what variable is about. Is it a class object or is it a method within the class object? Is it supposed to be internal use only or to make things more obvious in the code? PEP 8 also mentioned the use of documentation strings, most commonly called docstrings. This is text that is put in the code that serve as a documentation for a module,
>
> **[4:43](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-pep-8?u=76281980&t=283)** a class, or a function, et cetera. It is a good idea to keep the documentation within the code as when we update the code, it is less likely that we forgot to update the docstrings. There's so much more that is written in details in PEP 8, like when to use whitespaces, when to use trailing commas, et cetera, all to try making the code look as coherent and easy to understand as possible. If you would like to check out PEP 8 yourself, you can find it at the Python official website. Link is as shown. Now we know what PEP 8 is about. We'll have to follow it from now on. It sounds really difficult. How can we do that? We are going to find out in the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (13), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** python (13), find (3), make (3)
> **Env Vars:** pep (19)
> **Definitions:** is a  (6), in other words (1)
> **Documentation:** the documentation (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [What is Black?](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=0)** - [Instructor] Last video, we talked about the importance of following the PEP 8. However, it seems very difficult to follow it correctly all the time. Don't worry, as developer have tools to help us do it. One of them is Black. Black is a code formatter, meaning that it will rewrite your code without changing how it works to fulfill certain style or format. While using Black, your code will be format to the black code style. You may customize the resulting format a little bit, but the option to change the format is limited. You can read more about what is Black code style at that documentation if interested. However, the most important point that we are using it here is that the code style is PEP 8 compliant. Meaning, after formatting your code, it will be PEP 8 compliance automatically. Black is a project that is hosted on a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) package index or PyPI, meaning that you can PEP install it easily. Since Black has been launched, it has become more and more popular and now almost everyone is using it. Here is a few reason why it is loved and it's good to use Black. First of all, the ease of auto formatting the code, Black is super easy to use and it makes the pressure to be aware of deformatting of your code away. While coding, you can focus on the code logic and code syntax and not worrying about the code format. As you know, they will be all fixed with a single command by Black. Second, as Black has a very tight forming style, even tighter than PEP 8,
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-black?u=76281980&t=93)** the project that has multiple contributors and authors would have the code that looks very clean and coherent. You can even check if the code contribution fulfills the Black code style in your CI pipeline. Last, if you run your code in the Black and black gives you an error while formatting, chances are, you have some typo or syntax mistake somewhere. You can already start debugging before running any tests. Using Black is super simple and there are multiple ways of using it. First and most straightforward is to ask Black to format your code manually, via the black command on the command line. You can choose to format a single file or everything under directory. Or you can add Black to your pre-commit hook, so every time you try to commit your code, it will run Black automatically for you. This is a proper way of using Black and we'll explore it later in this chapter. Last, if you have a project and would like to enforce the Black code style, you can add the check in the CI to make sure the code contribution fulfill the style format. You can check the documentation of the project to see the details of using Black. We'll also demonstrate some basic usage of Black in the next video. See you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** pep (5)
> **Definitions:** is a  (4)
> **Cross-References:** we talked about (1), later in (1), in the next (1)
> **CLI Commands:** python (1), make (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)
> **Warnings:** be aware (1)

#### [Formatting your code with Black](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=0)** - [Instructor] Now that we have learned what Black is, let's put it into practice. First of all, we want to make sure we have Black installed by using this command. Now, let's use Black to format test of py. Let us remind ourselves what is the file by opening it in Vim. Okay, to format test of py, we only need a single Black command. Let's first use a special command to check if tests the py fulfills the Black code style. As you can see, we get a prompt saying that tests the py will be reformatted. So, let's check what exit code we have. The check command exists with code one, which means that it does not fulfill the Black code style. So, let's do it now. Now, we get the all done prompt. Test the py has been reformatted. Let's check the reformatted file using Vim. Can you spot the difference? It will be more obvious if you use [Git](../../Skills/Software%20Development/Git.md), as I am here. All you need to do is to use the git diff command. As you can see, a few simple lines are added to make it compliant with PLA eight and the black case in parameterized have been nicely reformatted. One last thing. We can now check if the new tests the py fulfill the blacko style by using the check command again. We get all done, again. So what exit code do we have now?
>
> **[1:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/formatting-your-code-with-black?u=76281980&t=95)** The check command exit with code zero. This check command is useful when you want to check if the code fulfills the blacko style in your CI. We will come back to it when we set up our [GitHub](../../Skills/Software%20Development/GitHub.md) action workflow in the future. So we are all done with Black for now. In the next video, we'll learn more about linking our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** make (2), git (2)
> **Tools:** vim (2), github (1)
> **Env Vars:** pla (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [What is a linter?](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-a-linter?u=76281980&t=0)** - [Instructor] Let's talk a bit about linter before we moved on in our chapter. What is a linter? Do you use a grammar checker when you write an article? Think of linter as a grammar checker for your code. It can be used to pick up potential errors in your code without executing your code. The linter will scan your code and check the syntax of your code. Also, it'll check other hazardous things in the code, like misspelling of variables, weird formatting, etcetera. As [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) codes in a good coding style, for example, following PEP 8, will be less likely to have error. The linter will also check for code style, checking if the code is PEP 8 compliant, is common in Python linters. Using a linter not just help us to spot and avoid errors, it goes hand in hand with code formatting and help keeping code with various authors having a consistent code style. As using linter is so important in the Python ecosystem, there's some popular linters to choose from. The major players are Pylint, Flag8 and Mupy. Most of the time, you'll come across one or more of them in Python open source projects besides the one mentioned above. As we demonstrate in the last video, we can also use Black as linter to check the formatting of our code. However, there are things that other linters picked up that Blacks does not. It's just not uncommon to see more than one linter being used in a single project. Now, we know other linters commonly used in Python project. Why don't we have a deeper look and try using one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5)
> **CLI Commands:** python (5)
> **Env Vars:** pep (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Linting your code with Flake8](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=0)** - [Instructor] In this video we'll use Flake8 to check the format of our code. Before we start, let's check if we have Flake8 installed. In my environment, I'm using version 5.0.4. Now we will try to use Flake8 to check our code. Remember that we used Black to reformat tests.py. Let's use Flake8 to check if there's any formatting problems with it. As you can see, nothing happened. This is good news. Flake8 did not pick up any problems. Our code seems to be okay, which is expected since we already use Black to clean up the code. However, it is no fun when everything works fine. Let's have a look at reminder.py. Whoa. As you can see, Flake8 has picked up quite a lot of problems in the code's format. Guess what we must do now? Yes, that's right. We can use Black on reminder.py to clean things up a bit. Okay, now that we have reformed reminder.py let's use Flake8 to check again. Oh no. There's still three problems that Black did not help us with. However, it is not too difficult to fix it. By the way, all the issues that Flake8 picked up assigned with an error code and you can check the documentation site to see what the error codes mean. Let's look at the first issue on line 51 with the code FH21, which says task list is undefined. As we can see, Flake8 picked up a potential error
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=93)** as task list is never passed into the find match function. This got picked up even before we wrote any test for the function, which is very helpful. So let's go and fix it. First we have to pass task list into find match function definition. (keyboard clicks) Then we must pass the second variable when we call the function. Here. (keyboard clicks) Remember to save and quit. Okay, let's check again. Now we only have two issues. The first one has been resolved. Hurray. The remaining issues are the same. The line is exceeding the character limits that PEP 8 recommends. We can of course, go and reformat our code. However, we are going to do something slightly naughty here. For demonstration purposes let's add a custom configuration to bypass this type of error with the code E501. If you read the documentation of Flake8 you know there are multiple places you can put in custom configurations. In our case, we'll use tox, so we'll put it in a file called tox.n, (keyboard clicks) and then we save and quit. Now let's run the check with Flake8 again. Now all the issues went away. So if we want to relax the PEP 8 rule a bit and ignore a certain type of issues we can use custom configurations to do so.
>
> **[3:07](https://www.linkedin.com/learning/create-an-open-source-project-in-python/linting-your-code-with-flake8?u=76281980&t=187)** However, take this with a grain of salt, as by doing so it will not be PEP 8 compliant anymore. We should never do it without a good reasoning behind it. And there you go. We have learned how to use Flake8 to check our code and how to use custom configurations. In the next video, we'll learn how to use Black and Flake8 in a more efficient way.

> [!info]- Semantic Content
>
> **Env Vars:** pep (3), fh21 (1), e501 (1)
> **File Paths:** reminder.py (3), tests.py (1)
> **CLI Commands:** find (2)
> **Versions:** version 5 (1), 0.4 (1)
> **Documentation:** the documentation (2)
> **Cross-References:** in the next (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** before we start (1)

#### [Using pre-commit to clean up automatically](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=0)** - In the previous videos, we have seen how to use black to auto format our code and make it PEP 8 compliant. It is a way to have a consistent code style throughout the project. However, we must remember to use black before we commit our code using [Git](../../Skills/Software%20Development/Git.md). Now, wouldn't it be great if my code is blackened automatically whenever I commit the code? To do that, we'll set up a pre-commit hook. A pre-commit hook is a process that is triggered when we commit using git. The easiest way to set it up is to use the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library code pre-commit. First, let's check if we have pre-commit installed. We are using version 2.20.0. Pre-commit makes it very easy to share hooks with other contributors. All you need to share is a file called pre-commit.config.yamo and if they have pre-commit installed, they can set up the hook with a simple command. Let's do it together now. To start with, since no one is sharing the configuration with us, we need to create one. Here, we are using black before we commit but before we can use it, we'll have to install the hook by running the command. The hook with git is now installed and it's always a good idea to test run the hook after installing it. To do it, we used the command. Here, you see we ran black and it passed. This is because we clean up all of our files in the previous videos.
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=93)** For demonstration purposes, We will now mess up the formatting deliberately.
>
> **[1:45](https://www.linkedin.com/learning/create-an-open-source-project-in-python/using-pre-commit-to-clean-up-automatically?u=76281980&t=105)** And then, we save and quit. Now let's try to commit our changes. As you see, black failed because we have one file that has been reformatted. Remember that black exists with code one. if a code does not fulfill the black code styling. In this case, we didn't manage to commit a code. Instead, our code was formatted by black. Don't trust me? Let's check. As we see the formatting, go back to the nice one with proper line spacing. So if we commit again now, it should pass. With this, we can be sure that all the code committed fulfills the black code style which is PEP 8 compliant. Now here comes homework for you. Are you able to add Flag 8 to the commit hook as well? Check the pre-commit documentation to see what hooks are available and how to add them. The finished the pre-commit.config.yamo is available on [GitHub](../../Skills/Software%20Development/GitHub.md) repo for your convenience. In the next video, we'll wrap up what we have learned in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** git (3), make (1), python (1)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (2), install (1)
> **File Paths:** pre-commit.config (2)
> **Env Vars:** pep (2)
> **Versions:** version 2 (1), 20.0 (1)
> **Cross-References:** go back to (1), in the next (1)

#### [Checkpoint: What you have so far](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far?u=76281980&t=0)** - [Cheuk] It's time to recap what we have learned in this chapter. First, we have learned what is PEP 8, a proposal regarding the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code style, is the standard in the community, and most open-source projects in Python are following this standard. Then, we know about Black, a convenient auto formatter to help you clean up your code to be PEP 8 compliant. It also helped to keep a consistency in a project with multiple contributors. Next, we have our linter, Flake8, which helps to pick up problems in the code before testing and make sure the code is following the Pep 8 standard. Last, we have demonstrate how to use pre-commit to install a hook with [Git](../../Skills/Software%20Development/Git.md). So every time you commit your code, it will automatically use your favorite auto formatter and linter like Black and Flake8 to make sure you are publishing clean code. Now, let's check what we have in our project. Of course, we have the files that we had in last chapter. But we have a clean and easy to-read tests.py, and reminder.py thanks to Black and Flake8. Plus, now we have tox.ini and .pre-commit-config.yaml which is used to store our Flake8 and pre-commit custom settings. It will be useful in future chapters as well. If you are not sure, check all those files in the course [GitHub](../../Skills/Software%20Development/GitHub.md) repo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Git](../../Skills/Software%20Development/Git.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** python (2), make (2), git (1)
> **File Paths:** tests.py (1), reminder.py (1), tox.ini (1), pre-commit-config.yaml (1)
> **Env Vars:** pep (2)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Prerequisites:** install (1)
> **Speakers:** - [cheuk] (1)


### 4. Standardize Testing Using tox

[↑ Back to Table of Contents](#table-of-contents)

#### [What is tox?](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-tox?u=76281980&t=0)** - [Instructor] Remember that in the previous chapters, we set up a file called tox.int. You may be wondering, "What is tox?" Tox is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) tool used for virtual environment management. It creates and manages multiple separate Python environments, like Poetry. However, tox is specifically designed for testing purposes, whereas poetry is used for development environments. We do not enter the environments created by tox to write code, like we did with the environment created by Poetry. Instead, tox automates the creation of separate testing environments and runs standardized tests. The procedure are standardized, and they will be the same in various Python environments created by tox. You may now wonder why we need tox. There are a lot of reasons why. First, it allow user to run our test suite in different versions of Python. For some projects, it supports multiple versions of Python and we would like to make sure it runs, not just on my Python version, but all other versions that are supported. With tox, the tests are run in isolated environments, allowing us to test in multiple Python versions and if an issue arises in specific version, the test will fail, and we can quickly identify the problem. Tox simplifies the CI workflow on [GitHub](../../Skills/Software%20Development/GitHub.md) Action by automating the process of creating environments and running tests. In the next video, we will start using tox to run tests across different Python versions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (8), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** python (8), make (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [tox basic usage](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=0)** - [speaker] Now that we understand tox, and its purpose in our project, let's use it. We'll use Tox.ini, created in the last chapter, as the home to our tox setup. So let's start there. So far we only have the flake8 settings, and we need to add the tox settings. Okay, let's stop for a second, and let me explain. We set isolated builds to True because we are using Poetry for the build, and we don't want tox to use setup.py and setup.config. Which is the older way of storing [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) project settings. We use pyproject.toml instead. Next, the envlist settings allow us to set up multiple environments for testing such as, testing for different Python versions. Here, As a start, we're only using Python 3.10. Remember, that our project supports any versions of Python above 3.8. We may want to test all of those as well. We will see how to do it later in this chapter. Next, let's add the settings for the testing environment. So we set pytest as the test dependency, and pytest tests the py as the command to run the test. Now save and quit, and run the test using the command tox. Oh no, what's going on? We see some error messages. What does that mean? Let me decipher it for you. Poetry is saying that it cannot find a project os-in-Python. That sounds familiar,
>
> **[1:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-basic-usage?u=76281980&t=94)** So let's check the pyproject.toml file. Remember, we set our project name to os-in-Python. Turns out that, Poetry, will automatically assume that is the name of the app. Our app is called reminder.py, so that's why Poetry is confused. To fix it, let's change the name of our projects to reminder. Save and quit, and let's run tox again. Now when we run tox we'll see py310 installed in the prompt. The output is the same as when we run pytests, but we haven't run the linters, nor multiple environments yet. We will learn how to do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6)
> **CLI Commands:** python (6), find (1)
> **File Paths:** pyproject.toml (2), tox.ini (1), setup.py (1), setup.config (1), reminder.py (1)
> **Prerequisites:** setup (3), set up (1)
> **Cross-References:** in the last (1), later in (1), in the next (1)
> **Versions:** python 3 (1), 3.8 (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)

#### [tox advance usage](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=0)** - It's time to improve our tox settings for running tests on multiple [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) versions. First, let's open the tox.ini file. To make a test run on multiple versions of Python, instead of py310 in the envlist, we will add the other versions as well. Here we will run the test on Python 3.8, 3.9, and 3.10. In the envlist sessions replace py310 with py three eight, three nine, three 10, to run the test on Python 3.8, 3.9, and 3.10. Save and quit the file, then run tox again. The first thing we see, it's now running py38 instead of py310 like in the last video. Next, we see it runs on py39. Then, finally, on py310. Now the test suite takes longer to complete as it runs on each of the Python versions. Next, let's set up linking to ensure code cleanliness and that it's complying with PEP8. Open the tox.ini file again. Add a new test environment called lint to the envlist. Then, add the environment settings like descriptions and the dependency black and flake8. We skip the installation of our app since we are not running the code. We are only checking if the formatting is correct. Finally, add the commands
>
> **[1:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/tox-advance-usage?u=76281980&t=94)** for formatting and minting. Save and quit and let's test the process again. After running the tests on different Python versions as before, you should see that the black and flake8 linking process have been run within the Lint environment. In the next chapter, we will set up this process in our [GitHub](../../Skills/Software%20Development/GitHub.md) action workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** python (6), make (1)
> **Versions:** python 3 (2), 3.9 (2), 3.10 (2)
> **File Paths:** tox.ini (2)
> **Cross-References:** in the last (1), in the next (1)
> **UI Navigation:** open the (2)
> **Prerequisites:** set up (2)
> **Env Vars:** pep8 (1)

#### [Checkpoint: What you have so far](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/checkpoint-what-you-have-so-far-22005373?u=76281980&t=0)** - [Instructor] It's time for check-in again to see what we have learned in this chapter. In this chapter, we have introduced a new tool called tox. It is used to create multiple isolated testing environments. This is very useful when we want to test our application on multiple versions of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Next, we went through the process of setting up tox by making changes in the tox.ini file as per tox documentation. We successfully tested our application on multiple Python versions. We also set up a separate environment for our linting tools, black and lint in the tox.ini file. Before moving on, let's reveal our project setup to ensure everything is on track. Our original files remain unchanged, but we have made modifications to pyproject.toml, and added tox settings in the tox.ini. So that's it for this chapter. In the next chapter, we will integrate our tox setup with [GitHub](../../Skills/Software%20Development/GitHub.md) Actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **File Paths:** tox.ini (3), pyproject.toml (1)
> **Prerequisites:** setup (2), set up (1)
> **CLI Commands:** python (2)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### 5. Setting up a Workflow on GitHub Action

[↑ Back to Table of Contents](#table-of-contents)

#### [What is GitHub Action?](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=0)** - [Instructor] [GitHub](../../Skills/Software%20Development/GitHub.md) Actions is a CI/CD platform. Let's first understand what CI/CD means and why this is important. CI/CD stands for [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md), which is a widely adapted standard for [Software Development](../../Topics/Software%20Development.md). Most companies use the CI/CD pipeline to automate their deployment process, from running tests to building applications, from source code to making releases. A continuous integration and continuous delivery platform provide automate pipeline for not just the deployment, but also running the tests, building the application from source and making a release. This enable developers to shift software quickly and efficiently, as the majority of the release process is automated and standardized, leaving them more time to focus on fixing bugs and developing new features. So let's finally talk about the star of this video: GitHub Action. The beta version was released in late 2019 and was quickly become preferred CI/CD tool for many open source projects host on GitHub. There are also many online resources available to help you learn and use it. One reason for its popularity is that it's free. As many open source projects are already hosted on GitHub there's no need for extra signups or hooks. Another advantage is that there are many open source tools that can be easily integrated into your GitHub Actions pipeline. We will, for example, put a code coverage into our pipeline and use it. It's straightforward and simple. I know now you can't wait to try out GitHub Action,
>
> **[1:33](https://www.linkedin.com/learning/create-an-open-source-project-in-python/what-is-github-action?u=76281980&t=93)** so if you haven't already, go ahead and sign up for a GitHub account and host your code from this course. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (7), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (2), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (2), [Software Development](../../Topics/Software%20Development.md) (1)
> **Tools:** github (7)
> **CLI Commands:** cd (5)
> **Definitions:** is a  (2), stands for (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** source code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Setting up a workflow for testing](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=0)** - [Instructor] Okay, assuming you now have a [GitHub](../../Skills/Software%20Development/GitHub.md) account, the first thing we need to do is to create a repository to host our project. Click on the plus sign on the upper right and select New repository, and you'll end up on this page. Choose a name for the repository, I'm going to call it OS in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). I'll put this is my first open source project as the description and make the repository public so others can contribute to it. Next, you can add a ReadMe file, a gitignore file and a license. It's always good to have these specified, especially the ReadMe and the license but we can add these later. Now, we have a few options to start our repository. If you have not started using [Git](../../Skills/Software%20Development/Git.md) for our project locally, create a new repository on the command line from the Git init command. Instead of git add README.md you would like to use the command git add dot to add all our files instead. If you are already using git, we'll push an existing repository from the command line. Now, pause the video and do that, come back when your code is uploaded to GitHub. (instrumental music)
>
> **[1:19](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=79)** - [Narrator] Okay, now we have our code in GitHub. Let's add a ReadMe like it suggested. You can see that there's only the name of the repo and the short description. The ReadMe is used to give information about your software, how to install it, how to use it, how to contribute to it but we're going to just leave it like this for now. Remember to go to the bottom and Commit the new file. Next to add our license, click on Add file then create a new file. Let's name it license in all caps and choose one from the most commonly used license templates here on the right hand side. Be sure to pick the right one for you in terms of what permission you are giving people. Check the conditions and limitations to using your softwares. I will choose the MIT license and then I'll review and submit your license. You can just commit to the main branch without creating a new branch for now. Finally, to set our GitHub action, we create a new file and name it .github, and then slash to create new directory and then we create another directory called workflows. Let's name our file check.yml here. It will create a YAML file that stores the information about our GitHub action workflow. First, let's name the workflow.
>
> **[2:52](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=172)** Then we will specified when the workflow should be triggered In our case, when there's a push and a pull request. Then we define the jobs, which now we have only one. Here for strategy, we specify that the this job will be running on Python versions 3.8, 3.9 and 3.10 just like we did with tox. We have to set it up here because each workflow will only have one version of Python So we have to create a job for each different versions of Python. Then we put in the actual commands for each job. Make sure we have the most updated version of pip, then install tox and run tox. Now, that we have the workflow in place let's commit this new file. (mouse clicking)
>
> **[3:53](https://www.linkedin.com/learning/create-an-open-source-project-in-python/setting-up-a-workflow-for-testing?u=76281980&t=233)** - After that, when you click on actions at the top you'll see that our workflow is running, and now we have a GitHub workflow that runs our testing and linting process. Whenever there's a change, a proposed change in our code but this is not all. In the next video, we'll learn about code coverage and why we need it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (7), [Git](../../Skills/Software%20Development/Git.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
> **CLI Commands:** git (5), python (4), make (2), pip (1)
> **Tools:** github (7), command line (2)
> **UI Navigation:** click on (3), go to (1)
> **Env Vars:** readme (1), mit (1), yaml (1)
> **Versions:** 3.8 (1), 3.9 (1), 3.10 (1)
> **Speakers:** - [instructor] (1), - [narrator] (1), - after (1)
> **File Paths:** readme.md (1), check.yml (1)

#### [Why do you need code coverage?](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/why-do-you-need-code-coverage?u=76281980&t=0)** - [Instructor] The last topic of this course, we will talk about code coverage. Code coverage is a metric that shows the percentage of our code that is tested. It is not limited to open-source projects, but it is especially important for open-source projects. It is used to measure how much of our code is tested, usually represent with a percentage. There are slightly different ways of measuring code coverage, but in general, it reflects how many lines of code were successfully validated during our tests. But why do we need code coverage? First of all, as an open-source project, we want to show users that our code is well-tested. It's also a good way for developers to check if some code or some features has not been tested. Some projects use it to safeguard their project's contributions so that when there is a pull request, tests need to be written for the new code so that the coverage percentage remains the same or increases. So now we know we need code coverage. Let's add that to our project in the next video.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Adding code coverage to workflow](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=0)** - [Instructor] Now, that we know why we need code coverage, let's add the code coverage report to our project. To make it happen, we will use a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library code, coverage, that generates the code coverage report when we run the test. To incorporate that, we need to modify our tox.ini. But before we start, let's quickly get all the changes that we have made on [GitHub](../../Skills/Software%20Development/GitHub.md). Now, we can edit Tox.ini. In the testenv setting, we need to add coverage as a dependency. Then, when we run the commands we use coverage to run the tests. We also want to report the coverage result after generating the coverage metrics. And, we want to generate an XML formatted report for online reporting. Notice that we use the option omit to omit the test of py, which is the test file which will be 100% coverage, no matter what. Now, save and quit and run tox. Notice that now we have a report every time we run the tests, our code coverage is less than 50%, which is very bad. Different projects will have different standards of how much coverage they required but it's usually between 80% to 100%. That means we still have a long way to go. If we look at other files, we notice
>
> **[1:35](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=95)** that we have a .coverage file and coverage.xml file that is generated by coverage. Let's commit and add our changes to the GitHub Ripple.
>
> **[1:54](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=114)** This is nice, but what if we want to see the coverage report on our GitHub Ripple? No problem. We can use a web service call Codecov. You can sign up for free with your GitHub account on [Codecov.io](https://Codecov.io), and once you sign up you'll see your GitHub accounts repositories. Pause the video and do that. And after signing up, check that your project is on the list and click on it. (techno music) Since we've just started, Codecov give us a set of instructions on how to set up the report with your GitHub action. Pause the video and follow the first two steps to set ups the token and the GitHub app. Stop at step three so that we'll do it together. (techno music) Now, we need to add a new job in the workflow on [Git](../../Skills/Software%20Development/Git.md) for action. Let's edit check.yml and add the following to the end of the file. Remember to commit the changes. This is to tell the action provided by Codecov to use the coverage, the XML that we generated for the report. Now, let's create a testing pull request to see if Codecov is working. Let's edit test.py and add a new test.
>
> **[3:30](https://www.linkedin.com/learning/create-an-open-source-project-in-python/adding-code-coverage-to-workflow?u=76281980&t=210)** When we commit the changes, choose create a new branch. Now, let's create a new pull request. Normally, we will put a lot more information here, but since we are only testing Codecov, we'll create it as is. Running these tests will take a while to finish and for Codecov to put the report in per request. So, let's cut to it when it's finished. And here is the report. And we see that we have increased our code coverage from less than 50% to slightly more than 50% if we merge this pull request. Yay, a small improvement! Now, as the last homework for this course, do you think you can increase the code coverage to more than 80% by writing more tests? In the next video, we'll wrapped up with what we have achieved so far in this course. Congratulations to you on setting up your first open source project in Python!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (7), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Git](../../Skills/Software%20Development/Git.md) (1)
> **Tools:** github (7)
> **File Paths:** tox.ini (2), coverage.xml (1), check.yml (1), test.py (1)
> **CLI Commands:** python (2), make (1), git (1)
> **Env Vars:** xml (2)
> **Prerequisites:** before we start (1), set up (1)
> **Non-Speech:** (techno music) (2)
> **URLs:** [codecov.io](https://codecov.io) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Open-source project with good practice](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=0)** - [Instructor] Congratulations, you have reached the end of this course. We have covered a lot in a very short period of time. We have started with a very basic setup for an open-source project in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) using several tools. We saw how to use Poetry to manage a project's dependencies so that the development environment can be reproduced on other people's computers. We learned how to write tests efficiently to make sure the application is reliable. We used some formatting and linting tools to make sure the code style's consistent throughout the project. We created a CI/CD pipeline with [GitHub](../../Skills/Software%20Development/GitHub.md) Actions to automate testing and linting processes. We even included code coverage in it to increase project transparency and help keep high coding and testing standards, but we have only scratched the surface of the open-source world. For each of the topics we covered in the course, there's much more advanced usage among them, and I highly encourage you to look deeper into each of the topics we covered and learn more using them. Beyond the topics that we covered, to create a successful open-source project, there are things that we don't even have the time to talk about. Here are some other things that if you are interested in learning more about creating or maintaining an open-source project, I highly recommend looking at a few more things, how to create and maintain good documentation for your project. For new users, it is critical to have good documentation to help them get started. Then look into packaging and releasing, how to make your projects available to users in an effective and secure way.
>
> **[1:34](https://www.linkedin.com/learning/create-an-open-source-project-in-python/open-source-project-with-good-practice?u=76281980&t=94)** Last but not least, for any open-source project to become successful, having a healthy and constructive community is very important, so it's knowing how to build and grow one. So let's keep learning. You have already taken the first step, and now you can learn more by practicing it. I hope you enjoyed the course and hope to see you again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** make (3), python (1), cd (1)
> **Cross-References:** we covered (3)
> **Tools:** github (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Cheuk Ting Ho](../../Instructors/Software%20Development/Cheuk%20Ting%20Ho.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/creating-an-open-source-project-in-python-3085072)

## Skills Covered

- Python (Programming Language)
- Open-Source Development

## Path Context

### In [Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)
← [Python Projects- Create an Interactive Quiz Application](Python%20Projects-%20Create%20an%20Interactive%20Quiz%20Application.md) | **8 of 14** | [Python Projects](Python%20Projects.md) →

### In [Advance Your Skills in Python](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20Skills%20in%20Python.md)
← [Python GUI Development with Tkinter](Python%20GUI%20Development%20with%20Tkinter.md) | **6 of 7** | [Build Three Real-World Python Applications](Build%20Three%20Real-World%20Python%20Applications.md) →

## Appears In

- [Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)
- [Advance Your Skills in Python](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20Skills%20in%20Python.md)

## Related Courses

_Courses sharing skills:_

- [Learning ArcGIS Python Scripting](../Data%20Science/Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](../Data%20Science/QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](../Data%20Science/Using%20SQL%20with%20Python.md) — Python (Programming Language)
- [Python- Working with Predictive Analytics (2019)](Python-%20Working%20with%20Predictive%20Analytics%20(2019).md) — Python (Programming Language)

---

[↑ Back to top](#)