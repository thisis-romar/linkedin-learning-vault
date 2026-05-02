---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: docker-your-first-project
url: "https://www.linkedin.com/learning/docker-your-first-project"
duration_minutes: 59
duration: 59m
level: Intermediate
updated: 12/12/2025
learners: 148763
skills:
  - Docker Products
exercise_files: true
github: "https://github.com/LinkedInLearning/docker-your-first-project-4485003"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHjKrL64jLnaA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1701991509593?e=2147483647&amp;v=beta&amp;t=hCiiqB_dyO1JNWdc_-KIeNorA1CSObEYz-J49JpeeZQ"
linkedin_topic: DevOps
learning_paths:
  - '[[Docker Foundations Professional Certificate]]'
prev_courses:
  - '[[Learning Docker]]'
next_courses:
  - '[[Learning Docker Compose]]'
path_nav: '[{"path":"Docker Foundations Professional Certificate","position":2,"total":3,"prev":"Learning Docker","next":"Learning Docker Compose"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/network-and-system-administration
  - skill/docker-products
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Docker-%20Your%20First%20Project.md)

![Docker: Your First Project](https://media.licdn.com/dms/image/v2/D560DAQHjKrL64jLnaA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1701991509593?e=2147483647&amp;v=beta&amp;t=hCiiqB_dyO1JNWdc_-KIeNorA1CSObEYz-J49JpeeZQ)

# Docker: Your First Project

> Docker has a steep learning curve, but is required for most current development environments. Streamlining how you build, share, and run applications can increase your development team’s productivity and let developers focus on the code. This course with instructor Shelley Benhoff provides a step-by-step guide for developers to work with Docker locally. Join Shelley as she takes you through a real

> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project) | 59m | Intermediate | 149K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Your first Docker project](#your-first-docker-project)
  - [What you should know](#what-you-should-know)
- [**1. The Project**](#1-the-project) (3 videos)
  - [Application using Docker](#application-using-docker)
  - [Setting up your development environment](#setting-up-your-development-environment)
  - [Reviewing a project on GitHub](#reviewing-a-project-on-github)
- [**2. Creating a First Docker Project**](#2-creating-a-first-docker-project) (2 videos)
  - [Writing a Dockerfile](#writing-a-dockerfile)
  - [Building a Docker image from Dockerfile](#building-a-docker-image-from-dockerfile)
- [**3. Pulling and Pushing Docker Images**](#3-pulling-and-pushing-docker-images) (6 videos)
  - [Searching for images in Docker Hub](#searching-for-images-in-docker-hub)
  - [Working with custom images](#working-with-custom-images)
  - [Tagging and labeling images](#tagging-and-labeling-images)
  - [Working with a private image repository](#working-with-a-private-image-repository)
  - [Inspecting images](#inspecting-images)
  - [Removing images](#removing-images)
- [**4. Running Docker Containers**](#4-running-docker-containers) (6 videos)
  - [Running a container](#running-a-container)
  - [Listing containers](#listing-containers)
  - [Inspecting containers](#inspecting-containers)
  - [Reviewing container log files](#reviewing-container-log-files)
  - [Working with volumes and mounts](#working-with-volumes-and-mounts)
  - [Reviewing your daily workflow](#reviewing-your-daily-workflow)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Your first Docker project
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/your-first-docker-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/your-first-docker-project?u=76281980&t=0)** - [Shelley] Containerization using Docker is quickly becoming the standard for software development projects.
>
> **[0:07](https://www.linkedin.com/learning/docker-your-first-project/your-first-docker-project?u=76281980&t=7)** Development teams are increasing their productivity by streamlining how we build, share, and run modern applications so that developers can focus on the code.
>
> **[0:18](https://www.linkedin.com/learning/docker-your-first-project/your-first-docker-project?u=76281980&t=18)** In this course, you will learn how to set up your development environment, write a Docker file, build and manage custom images, and run your Docker containers.
>
> **[0:30](https://www.linkedin.com/learning/docker-your-first-project/your-first-docker-project?u=76281980&t=30)** I'm Shelley Benhoff, a senior developer experience manager at Docker, instructor, and author.
>
> **[0:37](https://www.linkedin.com/learning/docker-your-first-project/your-first-docker-project?u=76281980&t=37)** Are you ready to apply your skills and use them to build a real-world project?
>
> **[0:42](https://www.linkedin.com/learning/docker-your-first-project/your-first-docker-project?u=76281980&t=42)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Containerization]] (1), [[Software Development]] (1), teams (1)
> **CLI Commands:** docker (4)
> **Prerequisites:** set up (1)
> **Speakers:** - [shelley] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/what-you-should-know?u=76281980&t=0)** - [Instructor] There are a few skills that you should have to make the most of this course.
>
> **[0:05](https://www.linkedin.com/learning/docker-your-first-project/what-you-should-know?u=76281980&t=5)** You should already have a high-level of understanding of containerization.
>
> **[0:09](https://www.linkedin.com/learning/docker-your-first-project/what-you-should-know?u=76281980&t=9)** This course will deepen those skills and provide you with a practical application to help you learn more about how Docker images and containers work and best practices in containerizing applications.
>
> **[0:23](https://www.linkedin.com/learning/docker-your-first-project/what-you-should-know?u=76281980&t=23)** You should also be comfortable with moving around in a terminal.
>
> **[0:27](https://www.linkedin.com/learning/docker-your-first-project/what-you-should-know?u=76281980&t=27)** We'll be using the shell for a large part of this journey, so being familiar with how it works and what to expect will be useful.
>
> **[0:36](https://www.linkedin.com/learning/docker-your-first-project/what-you-should-know?u=76281980&t=36)** If the terminal's new to you, check out the Bash Academy guide at the bottom of this page to learn more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Containerization]] (1), application (1)
> **Tools:** terminal (2), bash (1)
> **CLI Commands:** make (1), docker (1)
> **Speakers:** - [instructor] (1)


### 1. The Project

[↑ Back to Table of Contents](#table-of-contents)

#### Application using Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=0)** - [Instructor] The project that you'll work with throughout this course is the Big Star Collectibles website prototype.
>
> **[0:07](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=7)** Big Star Collectibles sells high quality, exclusive and unique items, and it's containerizing its existing website.
>
> **[0:14](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=14)** You will help the company modernize its DevOps processes to reduce errors and improve productivity.
>
> **[0:23](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=23)** By using Docker to containerize its application, Big Star Collectibles can enable developers to configure their local development environment quickly so that they can get started working on the project.
>
> **[0:36](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=36)** The company also wants to ensure the deployments to every environment are streamlined and efficient.
>
> **[0:43](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=43)** Until now, Big Star Collectibles has relied on outdated practices to manage and deploy its application.
>
> **[0:51](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=51)** The development team includes both full-time employees and contractors.
>
> **[0:56](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=56)** While the employees all have the same basic setup, contractors work on their own machines with different configurations.
>
> **[1:04](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=64)** They have faced issues with developers taking a long time to get their local development environment set up, and it has caused a lot of confusion.
>
> **[1:14](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=74)** With Docker, their developers will be able to simply download an image without having to install everything they need manually.
>
> **[1:23](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=83)** This greatly improves the time that it takes developers to get started on a new project.
>
> **[1:30](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=90)** Docker makes developers happy by providing tooling to automate the manual and error-prone tasks that cause headaches.
>
> **[1:39](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=99)** Big Star Collectibles utilizes Python and Flask for its website.
>
> **[1:43](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=103)** Flask is a web application framework written in Python.
>
> **[1:47](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=107)** It is lightweight and allows you to spin up a web application quickly using only a single Python file.
>
> **[1:54](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=114)** You do not need to know Python or Flask to follow along with the exercises in this course.
>
> **[2:00](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=120)** You will learn how to write Docker instructions for our application, but these skills are transferable to any programming language or framework.
>
> **[2:10](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=130)** Our final project will include our website files, including the code and assets, one Docker file containing the commands used to create an image, one Docker image including the software and tools necessary to run the website application, an image repository to store our image in a secure environment, and I have also included a Docker command cheat sheet in your Exercise Files so that you can copy and paste the commands that we cover throughout this course for your convenience.
>
> **[2:44](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=164)** And that's it.
>
> **[2:45](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=165)** That's all we need to run our application using Docker.
>
> **[2:49](https://www.linkedin.com/learning/docker-your-first-project/application-using-docker?u=76281980&t=169)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (5), [[Python (Programming Language)|Python]] (4), web application (2), [[DevOps]] (1), [[Programming]] (1)
> **CLI Commands:** docker (8), python (4)
> **Prerequisites:** configure (1), setup (1), set up (1), install (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Setting up your development environment
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=0)** - [Instructor] Let's set up your local development environment.
>
> **[0:03](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=3)** We'll need Docker Desktop, VS Code, and the Docker extension for VS Code to help us manage our application.
>
> **[0:11](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=11)** First, navigate to the Docker website and download and install Docker Desktop.
>
> **[0:16](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=16)** It's available for Windows, Mac, and Linux.
>
> **[0:22](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=22)** When the installation is complete, open Docker Desktop, click Sign In, and use your Docker Hub credentials.
>
> **[0:29](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=29)** If you have not yet created a Docker Hub account, you can do so here.
>
> **[0:45](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=45)** Next, download and install VS Code from code.[visualstudio.com](https://visualstudio.com).
>
> **[0:51](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=51)** It's also available for Windows, Mac, and Linux.
>
> **[0:57](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=57)** When it's installed, go ahead and open VS Code and then click Extensions.
>
> **[1:02](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=62)** Search for container tools and install the extension.
>
> **[1:06](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=66)** This will enable you to run Docker commands and view your images, containers, networks, and other resources from within VS Code.
>
> **[1:15](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=75)** You'll hear me call this the Docker Extension, which was the previous name, but the Container Tools Extension is the latest version of the Docker Extension.
>
> **[1:27](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=87)** That's it.
>
> **[1:28](https://www.linkedin.com/learning/docker-your-first-project/setting-up-your-development-environment-30191052?u=76281980&t=88)** Now that you have your local development environment set up, you can start building your Docker project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Linux]] (2), application (1), next (1), [[Search]] (1)
> **CLI Commands:** docker (11)
> **Tools:** vs code (5), docker desktop (3)
> **Prerequisites:** install (3), set up (2)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### Reviewing a project on GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=0)** - [Instructor] To get started with this project, first you need to get the code for the website from GitHub.
>
> **[0:06](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=6)** You can find a link to the repository below.
>
> **[0:09](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=9)** This repository has branches for each of the videos in this course.
>
> **[0:14](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=14)** Each branch is named with the chapter number and movie number.
>
> **[0:18](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=18)** You can use the branch pop-up menu in GitHub to switch to a specific branch and take a look at the course in that stage.
>
> **[0:27](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=27)** There are additional instructions in the README file to help you get started.
>
> **[0:32](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=32)** We're going to use Git Bash to clone the repository.
>
> **[0:35](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=35)** If you do not have it installed, you can download it from the Git website at the link below.
>
> **[0:42](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=42)** Open Git Bash and navigate to your project folder using the cd command.
>
> **[0:48](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=48)** Next, type git clone and the URL of the repository.
>
> **[0:54](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=54)** You can copy this from GitHub from the Code drop down on the HTTPS tab.
>
> **[1:02](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=62)** Then change your directory to the GitHub project directory.
>
> **[1:08](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=68)** As you go through the course, you can switch to the branch for the chapter and movie that you're watching.
>
> **[1:14](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=74)** Use the git checkout command and then add the chapter and movie numbers.
>
> **[1:20](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=80)** For example, 02_01 is the branch for chapter two, movie one.
>
> **[1:28](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=88)** To view a list of all branches available, you can use the git branch command.
>
> **[1:34](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=94)** The last thing we need to do is open our project in VS Code.
>
> **[1:38](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=98)** Open the folder containing your GitHub repo, click the Source Control icon in the menu bar.
>
> **[1:46](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=106)** You should see the branch that you checked out earlier.
>
> **[1:49](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=109)** As you move through the exercises in this course, you can either switch branches using the command line, or you can click on the branch name in the Source Control panel in VS Code.
>
> **[2:00](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=120)** This also shows you all of the branches available if you prefer an interface.
>
> **[2:07](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=127)** That's it.
>
> **[2:08](https://www.linkedin.com/learning/docker-your-first-project/reviewing-a-project-on-github?u=76281980&t=128)** Now you're ready to get started with this project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (6), [[GitHub]] (5), cd (1), next (1)
> **Tools:** github (5), bash (2), vs code (2), command line (1)
> **CLI Commands:** git (6), find (1), cd (1)
> **UI Navigation:** switch to (2), navigate to (1), open the (1), in the menu (1), click on (1)
> **Env Vars:** readme (1), url (1), https (1)
> **Documentation:** the readme (1)
> **Exercise Files:** github repo (1)
> **Analogies:** for example (1)


### 2. Creating a First Docker Project

[↑ Back to Table of Contents](#table-of-contents)

#### Writing a Dockerfile
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=0)** - [Instructor] You have configured your local development environment, and now it's time to create your first docker file for the Big Star Collectibles website project.
>
> **[0:11](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=11)** Go ahead and create a new file in VSCode and name it dockerfile.
>
> **[0:18](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=18)** This file has no extension.
>
> **[0:20](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=20)** It's just named dockerfile by default.
>
> **[0:24](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=24)** The purpose of a docker file is to specify the instructions for building a docker image.
>
> **[0:31](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=31)** The syntax of a docker file is fairly straightforward.
>
> **[0:35](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=35)** Comments begin with a hash or a pound sign.
>
> **[0:39](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=39)** Then you have an instruction followed by the arguments.
>
> **[0:43](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=43)** There are many instructions that you can use, and we'll cover the most commonly used ones throughout this course.
>
> **[0:51](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=51)** The first thing we need is a from command.
>
> **[0:54](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=54)** I'm going to add a comment here stating the purpose of this command, which is to use an official Python runtime as the base image.
>
> **[1:03](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=63)** So our argument is Python, and then the runtime version.
>
> **[1:08](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=68)** This command tells docker what base image to use.
>
> **[1:12](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=72)** Your base image should contain the tools needed to run your application.
>
> **[1:17](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=77)** In this case, we're using Python, but there are also base images for different operating systems, such as Windows or Linux.
>
> **[1:26](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=86)** Or you can specify from scratch if you're building your own base image.
>
> **[1:32](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=92)** Docker maintains a list of images and versions available, which you can find@hub.[docker.com](https://docker.com).
>
> **[1:41](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=101)** Next, we need to set the working directory in the container to the app directory.
>
> **[1:48](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=108)** This is the default directory for our Flask app.
>
> **[1:52](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=112)** The instruction for this is WORKDIR, and the argument is /app.
>
> **[1:59](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=119)** Our next instruction will copy the current directory contents into the container at /app.
>
> **[2:07](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=127)** The instruction is copy, and here we have two arguments.
>
> **[2:11](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=131)** We need to specify the current directory, which is the route directory, so we'll enter a period.
>
> **[2:18](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=138)** And then, we need to specify the folder within the container where we want to copy our project files, which is the app folder.
>
> **[2:31](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=151)** Now we need to install the required packages needed to run our application.
>
> **[2:37](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=157)** To do this, we'll use the run instruction.
>
> **[2:40](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=160)** The arguments include the pip install command to install the required Python packages.
>
> **[2:46](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=166)** The no cash dir flag tells pip not to store the downloaded packages in the cache directory.
>
> **[2:53](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=173)** And the required packages are defined in the requirements.txt file.
>
> **[3:03](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=183)** Next, we will set the environment variable for Flask.
>
> **[3:07](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=187)** The instruction is ENV, and the arguments are Flask app equals app.py.
>
> **[3:14](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=194)** This sets the Flask app environment variable to app.py, which is the name of the Flask application.
>
> **[3:25](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=205)** And the final instruction is CMD, which is the command the container executes by default when you launch the built image.
>
> **[3:34](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=214)** In our case, it's Flask, run, and the host flag equal to 0.0.0.0.
>
> **[3:43](https://www.linkedin.com/learning/docker-your-first-project/writing-a-dockerfile?u=76281980&t=223)** A docker file will only use the final command defined, so you have to be careful when you're building your docker files so that you don't overwrite your default command.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), application (3), next (3), [[Windows]] (1), [[Linux]] (1)
> **CLI Commands:** docker (9), python (4), pip (2), find (1)
> **File Paths:** app.py (2), requirements.txt (1)
> **Env Vars:** workdir (1), env (1), cmd (1)
> **Prerequisites:** install (3)
> **URLs:** [docker.com](https://docker.com) (1)
> **Versions:** 0.0.0 (1)
> **Definitions:** is a  (1)

#### Building a Docker image from Dockerfile
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=0)** - [Instructor] Now we need to build our docker image.
>
> **[0:04](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=4)** We'll do this using a bash terminal in VS Code, so go ahead and open a new terminal from the terminal menu.
>
> **[0:12](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=12)** The docker build command is used to build images and there are many options.
>
> **[0:18](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=18)** The syntax is docker build options path and then URL.
>
> **[0:24](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=24)** Images are built from a docker file and a context.
>
> **[0:28](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=28)** A build's context is the set of files located in the specific path or URL.
>
> **[0:34](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=34)** We will focus on using a path in this course, but you can also use a URL to a repository, which is useful for the continuous integration pipeline.
>
> **[0:45](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=45)** You can read more about this on the docker website linked below.
>
> **[0:52](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=52)** The most common build command is docker build and then a period.
>
> **[0:58](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=58)** This builds the image using the root path of our project as the build context.
>
> **[1:03](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=63)** By default, your docker file is located in this path.
>
> **[1:09](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=69)** However, you can also specify a different docker file if it does not exist in the path.
>
> **[1:16](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=76)** To do this, you can use the f flag and then the path to the docker file.
>
> **[1:22](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=82)** This is a good option to use if you have different docker files for each environment, like QA, staging, or production.
>
> **[1:30](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=90)** This would enable you to test your application using any configuration, which is helpful for troubleshooting errors that occur in specific environments.
>
> **[1:43](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=103)** Another option I often use is the force rm option.
>
> **[1:48](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=108)** This removes any intermediate containers.
>
> **[1:51](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=111)** When you build a new image, docker creates a temporary or intermediate container for each instruction in your docker file, such as run, copy, et cetera.
>
> **[2:03](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=123)** Once the command is run in the intermediate container, that container is saved as a new image layer.
>
> **[2:10](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=130)** The force rm option removes any intermediate containers that exist, even if the build is unsuccessful.
>
> **[2:19](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=139)** You can also use the rm equals true option in case of an unsuccessful build.
>
> **[2:25](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=145)** Those intermediate containers will not be removed.
>
> **[2:29](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=149)** That allows for debugging the last intermediate container or committing it as an intermediate image.
>
> **[2:39](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=159)** All previously built image layers are cached and can be reused, but if your installation depends on external resources, the docker cache can cause issues.
>
> **[2:51](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=171)** That's where the no cache option comes in.
>
> **[2:54](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=174)** You can use this option to tell docker to skip the cache and rebuild the entire image, but keep in mind that this may take a long time depending on the complexity of your project.
>
> **[3:07](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=187)** The purpose of the docker cache is to speed up subsequent image builds by reusing image layers, which is great if those layers are built successfully.
>
> **[3:17](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=197)** If you run into errors, it's a good idea to bypass the cache and build a clean image.
>
> **[3:25](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=205)** These are the options I use most often, but we've only scratched the surface of what is available for more complex projects.
>
> **[3:34](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=214)** You can use the help option to view more information about the docker build command, and this is something that you can do for any command that we cover throughout this course.
>
> **[3:45](https://www.linkedin.com/learning/docker-your-first-project/building-a-docker-image-from-dockerfile?u=76281980&t=225)** In the next chapter, we will extend our knowledge and learn how to pull and push docker images.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (1), application (1), [[Troubleshooting]] (1), [[Debugging]] (1), next (1)
> **CLI Commands:** docker (17), rm (3)
> **Tools:** terminal (3), bash (1), vs code (1)
> **Env Vars:** url (3)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)


### 3. Pulling and Pushing Docker Images

[↑ Back to Table of Contents](#table-of-contents)

#### Searching for images in Docker Hub
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=0)** - [Instructor] Earlier we started building our Docker file using the from instruction to specify the base image.
>
> **[0:08](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=8)** But how do you know what image to use?
>
> **[0:10](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=10)** You can do this using the Docker search command, which searches the Docker Hub Registry for images.
>
> **[0:17](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=17)** For example, to search for a Python image, you can use the command Docker search Python.
>
> **[0:26](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=26)** This will return a list of available Python images along with their names and descriptions.
>
> **[0:33](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=33)** The Stars column shows how many people liked the image.
>
> **[0:40](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=40)** The official column tells us if the image is from an official source.
>
> **[0:45](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=45)** You can filter the search results to show only official images using the filter option and setting 'is official' equal to true.
>
> **[0:54](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=54)** This will return a list of only of official Python images.
>
> **[1:00](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=60)** You can use a filter to return images with a minimum number of stars.
>
> **[1:04](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=64)** In this example, I'll say 100.
>
> **[1:07](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=67)** This is good to use if you want to find the most popular images.
>
> **[1:12](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=72)** The automated column tells us if you can build the image automatically using platforms such as GitHub.
>
> **[1:20](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=80)** To filter automated images, use the is-automated=true argument.
>
> **[1:27](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=87)** If you're using more than one filter, you need to specify the filter option for each individual argument.
>
> **[1:36](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=96)** You can limit the number of search results using the limit option and then entering a number.
>
> **[1:42](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=102)** In this example, I'm searching for the top four Python images.
>
> **[1:47](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=107)** The no trunk option will return the full output of the search results without truncating anything.
>
> **[1:54](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=114)** I always use this option so that I can read the full image descriptions.
>
> **[2:05](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=125)** And finally, there is the format option.
>
> **[2:08](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=128)** This enables you to format the search results using a Go template.
>
> **[2:13](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=133)** In this example, I'm returning just the image names and the full descriptions.
>
> **[2:21](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=141)** To format the search results into a table format, add a backslash T between each column name.
>
> **[2:29](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=149)** The available columns are name is automated, is official, description, and star count.
>
> **[2:41](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=161)** And finally, you can combine any of these options to facilitate a robust search to help you find the exact image that you need for your project.
>
> **[2:52](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=172)** Once you have found the image you need, you can pull it from Docker Hub and store it on your machine.
>
> **[2:59](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=179)** This can be done using the Docker image pull command, and specifying the name of the image.
>
> **[3:06](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=186)** This will automatically pull the latest version of the image.
>
> **[3:12](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=192)** To get a list of all versions of an image, the easiest thing to do is look up the image on the Docker Hub website, as there's no easy command line option, then you can specify the name of the image you want to pull, then a colon and the tag for the version you need.
>
> **[3:31](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=211)** You generally do not want to use the latest version of a base image in your Docker file, as this can lead to errors.
>
> **[3:40](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=220)** That would be similar to allowing automatic updates on a server without testing them first.
>
> **[3:46](https://www.linkedin.com/learning/docker-your-first-project/searching-for-images-in-docker-hub?u=76281980&t=226)** You want to make sure that you are careful when upgrading to a new version of a base image to keep your application stable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (9), [[Python (Programming Language)|Python]] (5), [[GitHub]] (1), application (1)
> **CLI Commands:** docker (8), python (5), find (2), make (1)
> **Tools:** github (1), command line (1)
> **Analogies:** for example (1), such as (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Working with custom images
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=0)** - [Instructor] When you pull images from an image repository, that image is saved locally.
>
> **[0:05](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=5)** You can view your local images using the docker image ls command, followed by options and a repository and tag if applicable.
>
> **[0:18](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=18)** By default, the docker image ls command hides intermediate images.
>
> **[0:24](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=24)** If you want to show all images, you can use the all option.
>
> **[0:29](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=29)** The no trunk option will ensure that the output is not truncated, the same as we saw with the docker search command.
>
> **[0:38](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=38)** The quiet option will return image IDs and suppress all other columns.
>
> **[0:46](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=46)** The digest option includes the image digest, which is a hash of the docker image that includes information about the image.
>
> **[0:56](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=56)** The filter option is similar to the filter option for the docker search command that we used in a previous video, but there are different options.
>
> **[1:07](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=67)** Reference allows you to isolate images having a certain name or tag.
>
> **[1:12](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=72)** We'll discuss tagging in depth in the next video.
>
> **[1:17](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=77)** The before option is used to filter images created before another image.
>
> **[1:23](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=83)** Unfortunately, this option does not allow you to enter a date and time.
>
> **[1:27](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=87)** It is only meant to compare the creation date between images.
>
> **[1:33](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=93)** The since option is the exact opposite of the before option, so it shows a list of images created after another image.
>
> **[1:46](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=106)** You can use dangling to isolate images that are not used anymore such as intermediate images, and the label option allows you to filter based on the image label, which we'll discuss in the next video.
>
> **[2:04](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=124)** As with the docker search command, you can apply formatting to your search results for the docker images command, the format is the same, but the options are different.
>
> **[2:16](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=136)** The idea of your image, the image repository, image tag, size, created since is the time since your image was created, created at shows when your image was created, and the image digest.
>
> **[2:36](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=156)** You can also view a list of your image names in the docker extension for VS code.
>
> **[2:45](https://www.linkedin.com/learning/docker-your-first-project/working-with-custom-images?u=76281980&t=165)** That's everything you need to know about working with your custom images including all options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (4), next (2)
> **CLI Commands:** docker (8), ls (2)
> **Cross-References:** in the next (2), as we saw (1), previous video (1)
> **Analogies:** similar to (1), such as (1)
> **Tools:** vs code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Tagging and labeling images
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=0)** - [Instructor] Tags and labels are used to organize your Docker images.
>
> **[0:04](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=4)** Tags are used to identify distinct versions of an image.
>
> **[0:08](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=8)** It is common practice to use tags to mark each release so users can select between different versions.
>
> **[0:20](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=20)** In our Docker file, we've specified the base image.
>
> **[0:24](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=24)** The name of the image is Python, and everything following the colon is the image tag.
>
> **[0:30](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=30)** In this example, the tag includes both the version and operating system.
>
> **[0:37](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=37)** While you can use your own naming convention for tagging, the industry standard is the version followed by the operating system or other key dependency.
>
> **[0:48](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=48)** This helps to differentiate between versions when multiple versions of an image are available.
>
> **[1:00](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=60)** One way to add a tag to an image is using the Docker build command with the T option, followed by the name of the source image, a colon, and then the tag.
>
> **[1:15](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=75)** If you define the name of the source image without a tag, the default tag will be used, which is latest.
>
> **[1:25](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=85)** When there is no tag defined, Docker assumes that the image we're creating is the latest version of the images in the repository.
>
> **[1:34](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=94)** It is important to apply tags specifying the image version, and ensure that the image with the latest tag is the latest stable version and not an untested version.
>
> **[1:51](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=111)** It's a good practice to build the final stable image using the latest version tag and then a second image name without the tag specified.
>
> **[2:00](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=120)** I'm also using the no cache option to ensure that the images are rebuilt.
>
> **[2:09](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=129)** If you use the Docker image LS command, you will see that there are two images listed for Big Star Collectibles, and they both have the same image ID, meaning that they're the exact same images just with different tags.
>
> **[2:26](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=146)** Another way to apply tags to images is using the Docker tag command.
>
> **[2:31](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=151)** Here you must specify the source image and tag as well as the target image and tag.
>
> **[2:41](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=161)** For example, if we want to apply multiple tags to an existing image, we can specify the Big Star Collectibles version one as the source image and V1/Python as the target image.
>
> **[2:56](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=176)** When you list the images, again, you should see that all versions of the Big Star Collectibles image use the same image ID.
>
> **[3:07](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=187)** When you're creating a new version of an image, you want to use the Docker build command to rebuild the image with a new image ID.
>
> **[3:16](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=196)** This is good for keeping each version separate so that you do not accidentally overwrite anything.
>
> **[3:27](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=207)** Another way to keep your images organized is using the label instruction in your Docker file.
>
> **[3:34](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=214)** This allows you to add metadata to an image using key value pairs.
>
> **[3:39](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=219)** You can include multiple label commands and some of the most common labels are vendor, version, and description.
>
> **[3:48](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=228)** To include spaces within a label value, use quotes and backslashes as you would in command line parsing.
>
> **[3:57](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=237)** Another syntax that you can use is one label command, and then listing multiple labels.
>
> **[4:06](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=246)** I like to add a backslash after each label so that they're listed on separate lines and are easier to read.
>
> **[4:18](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=258)** When you rebuild your image, the label will be added to the metadata.
>
> **[4:29](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=269)** You cannot search for images by tag, but you can filter by label.
>
> **[4:35](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=275)** To do this, use the Docker Image LS command with the filter option.
>
> **[4:40](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=280)** The syntax is label equals followed by the label name and value.
>
> **[4:46](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=286)** Tagging and labeling images are crucial to keep your images organized.
>
> **[4:52](https://www.linkedin.com/learning/docker-your-first-project/tagging-and-labeling-images?u=76281980&t=292)** This is especially useful for managing images in a repository, which we'll do next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Metadata]] (2), [[Search]] (1), next (1)
> **CLI Commands:** docker (9), python (2), ls (2)
> **Tools:** command line (1)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Working with a private image repository
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=0)** - [Instructor] Docker Hub is a powerful platform that allows developers to easily create and manage their own private image repository.
>
> **[0:09](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=9)** You may also hear the term registry, which is interchangeable with repository.
>
> **[0:15](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=15)** Using a private repository is a great way to keep your docker images safe and secure, while still allowing others to access and use them.
>
> **[0:27](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=27)** Navigate to the repositories section and create a new repository.
>
> **[0:34](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=34)** Here, you'll be prompted to enter a name for your new repository as well as a description.
>
> **[0:43](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=43)** You'll also need to configure your new repository's settings.
>
> **[0:48](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=48)** In the Visibility section, you can choose who has access to your repository by setting it to either public or private.
>
> **[0:57](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=57)** If you choose private, you can invite specific users to access your repository by entering their Docker Hub username.
>
> **[1:10](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=70)** Once you have set up a private Docker registry, you can log into it using the command docker login in VS Code.
>
> **[1:19](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=79)** You may be prompted to enter your username and password for Docker Hub.
>
> **[1:24](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=84)** This will allow you to run CLI commands to push and pull images in your repository.
>
> **[1:34](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=94)** You can also view your repository using the Registries panel in the Docker extension for VS Code.
>
> **[1:43](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=103)** (mouse clicking) Now, we can push our image to our repository.
>
> **[1:50](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=110)** First, you should tag your local image using the name of your new repository to keep things organized.
>
> **[1:57](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=117)** In this example, I'm tagging my source image using the name of my registry, sbenhoff/big-star-collectibles-repo, and the image is named Big Star Collectibles.
>
> **[2:12](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=132)** Then, you can use the Docker push command followed by the name of your repository and the name of the image you want to push.
>
> **[2:28](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=148)** You can refresh the Registries panel in VS Code to see the image that you just pushed.
>
> **[2:36](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=156)** You can also view your registries in Docker Hub.
>
> **[2:41](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=161)** You can use the Docker pull command to pull images from your private registry.
>
> **[2:46](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=166)** Specify the name of your registry and the name of the image that you want to pull.
>
> **[2:52](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=172)** In this example, I'm pulling the same image that we just pushed, so it should tell me that it's already up to date.
>
> **[3:00](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=180)** By creating a private registry, you can ensure that your images are safe and secure while still allowing others to access and use them.
>
> **[3:09](https://www.linkedin.com/learning/docker-your-first-project/working-with-a-private-image-repository?u=76281980&t=189)** With the right setup, you can easily push and pull images to and from your registry, making your development process more efficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **CLI Commands:** docker (10)
> **Tools:** vs code (3)
> **Prerequisites:** configure (1), set up (1), setup (1)
> **Definitions:** is a  (2)
> **Env Vars:** cli (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### Inspecting images
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=0)** - [Instructor] Inspecting your docker images is a great way to view key information to help you with troubleshooting errors.
>
> **[0:07](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=7)** The easiest way to inspect images is using the docker extension in VS Code.
>
> **[0:18](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=18)** Right-click any image tag and then choose inspect.
>
> **[0:25](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=25)** Alternatively, you can use the CLI.
>
> **[0:28](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=28)** You can use the docker image LS command to get the image ID.
>
> **[0:35](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=35)** Then use the docker image inspect command and the image ID.
>
> **[0:46](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=46)** Here, you can see the full image ID and other helpful information.
>
> **[0:50](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=50)** Now, I'm not going to cover every line here, but I will cover the information that I use most often.
>
> **[0:57](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=57)** The repotags list all tags that are associated with this image ID.
>
> **[1:05](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=65)** You can also see when the image was created in UTC date format.
>
> **[1:12](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=72)** If this image were attached to a container, you would see that information here.
>
> **[1:17](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=77)** We'll discuss this further in the next chapter.
>
> **[1:24](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=84)** If you scroll down in the config section, you'll see your environment settings.
>
> **[1:30](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=90)** This information is helpful if you encounter errors and want to make sure that you're using the correct paths, languages, and versions of any libraries and tools.
>
> **[1:44](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=104)** The command configuration shows you the command that runs when you start a container based on an image.
>
> **[1:51](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=111)** This command is set in the docker file.
>
> **[1:57](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=117)** Since we applied labels to our image in the docker file, that information is included in the configuration section as well.
>
> **[2:10](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=130)** You can return specific sections and format them using JSON.
>
> **[2:16](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=136)** Use the docker image inspect command with the format option.
>
> **[2:20](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=140)** The syntax here is JSON followed by a period and the name of the section you want to view.
>
> **[2:27](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=147)** In this example, I'm viewing the labels within the config section.
>
> **[2:32](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=152)** This is handy when you have an image with a lot of information and you only need specific information.
>
> **[2:39](https://www.linkedin.com/learning/docker-your-first-project/inspecting-images?u=76281980&t=159)** Now that we understand how to work with our images, let's take it one step further and learn how to keep our images organized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Troubleshooting]] (1), [[CLI]] (1), next (1)
> **CLI Commands:** docker (7), ls (1), make (1)
> **Env Vars:** json (2), cli (1), utc (1)
> **UI Navigation:** right-click (1), scroll down (1)
> **Cross-References:** in the next (1)
> **Tools:** vs code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Removing images
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=0)** - [Narrator] As you work on projects, you will inevitably create multiple images for testing.
>
> **[0:06](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=6)** These images should be removed when you're finished with them to keep your system clean.
>
> **[0:12](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=12)** Images can take up a lot of space, so keeping them clean and organized is of utmost importance.
>
> **[0:19](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=19)** Take a look at the images that exist on your system using the docker image ls command.
>
> **[0:26](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=26)** You can remove images using the docker rmi command, followed by the image name and tag.
>
> **[0:33](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=33)** If you use the F flag, this will force the image to be removed even if it is attached to a running container.
>
> **[0:41](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=41)** If you list your images again, you should see that the v2 image tag has been removed.
>
> **[0:48](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=48)** However, the remaining image tags associated with the same image ID remain.
>
> **[0:56](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=56)** To remove all tags associated with an image, you can pass in the image ID instead.
>
> **[1:02](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=62)** If you do not use the F flag, you may see an error message saying, "unable to delete (must be forced) - image is referenced in multiple repositories."
>
> **[1:17](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=77)** To remove all tags associated with an image, you can pass in the image ID instead.
>
> **[1:24](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=84)** If you do not use the F flag, you may see an error message saying, "unable to delete (must be forced) - image is referenced in multiple repositories."
>
> **[1:36](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=96)** Using the F flag will force the removal of all tags associated with the image ID.
>
> **[1:45](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=105)** You can also remove images by Digest.
>
> **[1:48](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=108)** To get a list of digests, you can use the docker images command and the digest flag.
>
> **[2:00](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=120)** Then, use the same docker rmi command with the repository name, followed by an @ symbol and then the digest.
>
> **[2:13](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=133)** If you prefer, you can remove images by right-clicking on them in the images panel of the docker extension for VS code.
>
> **[2:27](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=147)** To remove images from your repository in Docker Hub, you need to go to the Docker Hub website.
>
> **[2:34](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=154)** Click on your repository, then Tags.
>
> **[2:38](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=158)** Select the tags you want to remove and then click the "Delete" button.
>
> **[2:45](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=165)** That's it.
>
> **[2:46](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=166)** In this chapter, you learned how to work with images and keep them organized.
>
> **[2:51](https://www.linkedin.com/learning/docker-your-first-project/removing-images?u=76281980&t=171)** In the next chapter, you'll run containers based on the images that we created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **CLI Commands:** docker (7), ls (1)
> **UI Navigation:** go to (1), click on (1), select the (1)
> **Cross-References:** in the next (1)
> **Tools:** vs code (1)
> **Speakers:** - [narrator] (1)


### 4. Running Docker Containers

[↑ Back to Table of Contents](#table-of-contents)

#### Running a container
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=0)** - [Instructor] Now that we've created our image for Big Star Collectibles, we can run a container based on the image.
>
> **[0:07](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=7)** If you removed your image in the last chapter, you will need to build it again before moving on.
>
> **[0:13](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=13)** There are two commands to run a container, docker start and docker run.
>
> **[0:19](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=19)** The docker start command is used to start any stopped container.
>
> **[0:24](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=24)** If you try to use docker start before you have created your container, it will error out because that container doesn't exist.
>
> **[0:34](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=34)** The docker run command creates a new container and then starts it immediately.
>
> **[0:39](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=39)** The image tag argument specifies the image to use for the container.
>
> **[0:44](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=44)** The tag is optional and specifies the specific version of the tag to use.
>
> **[0:49](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=49)** If no tag is specified, then the latest version of the image will be used.
>
> **[0:55](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=55)** The command argument specifies the command to run when the container is started, such as executing a startup script.
>
> **[1:03](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=63)** This is optional and can be omitted if the image includes a default command.
>
> **[1:09](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=69)** We set a default command in our docker file, so we do not have to specify a command here.
>
> **[1:16](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=76)** The ARG arguments are optional and can be used to pass additional arguments to the command.
>
> **[1:23](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=83)** There are several options that you can use with the docker run command and I'll cover the ones I use most often.
>
> **[1:31](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=91)** The IT option specifies that the container should run in interactive mode and allocate a pseudo TTY.
>
> **[1:39](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=99)** This is especially useful for debugging running containers and viewing logs.
>
> **[1:45](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=105)** Adding the D option runs the container in detached mode.
>
> **[1:49](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=109)** This means that the container will run in the background and the command prompt will return to the host system.
>
> **[1:56](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=116)** P map support on the host system to a port inside of the container.
>
> **[2:02](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=122)** This allows you to access the application inside the container from the host system.
>
> **[2:08](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=128)** V mounts a volume inside the container.
>
> **[2:12](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=132)** The syntax starts with a host directory, followed by the directory inside of the container.
>
> **[2:19](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=139)** In this example, PWD is the present working directory on the host, and app code is the directory in the container.
>
> **[2:30](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=150)** This allows you to persist data across container restarts and share data between the host system and the container.
>
> **[2:38](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=158)** We'll discuss this option in detail later in this chapter.
>
> **[2:44](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=164)** This command will start a new container based on the Big Star Collectibles image and run the default command inside the container.
>
> **[2:54](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=174)** Open a browser and navigate to local host, port 5,000.
>
> **[2:59](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=179)** You should see the Big Star Collectibles website.
>
> **[3:02](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=182)** If you see any errors, just make sure that you're using the latest version of the Python image and flask.
>
> **[3:14](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=194)** To stop your container, there are two commands that you can use, stop or kill.
>
> **[3:20](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=200)** Stop will sig term signal, which gracefully terminates a process rather than killing it immediately.
>
> **[3:27](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=207)** You can get the name of your container in the docker extension for VS code.
>
> **[3:33](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=213)** The docker kill command sends the sig kill signal, which cannot be blocked or handled.
>
> **[3:40](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=220)** It is possible to handle, ignore, or block a sig term signal making docker stop the safer option.
>
> **[3:48](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=228)** You should be careful when using the kill command as the killed child process doesn't notify its parent that it received the kill signal, which can cause errors.
>
> **[4:02](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=242)** Now we can use the docker star command because we have already created our container.
>
> **[4:10](https://www.linkedin.com/learning/docker-your-first-project/running-a-container?u=76281980&t=250)** To make sure everything is working as intended, navigate to local host port 5,000 again to ensure that the website loads and is fully functional.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Debugging]] (1), prompt (1), application (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** docker (11), make (2), python (1)
> **Env Vars:** arg (1), tty (1), pwd (1)
> **Ports:** port 5 (2)
> **Cross-References:** in the last (1), later in (1)
> **Tools:** command prompt (1), vs code (1)
> **UI Navigation:** navigate to (2)
> **Definitions:** means that (1)

#### Listing containers
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=0)** - [Instructor] The Docker PS command will list all the running containers on your machine along with additional details such as their names, IDs, image names, status, and ports.
>
> **[0:13](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=13)** If you want to display all containers, including stop containers, use the A option.
>
> **[0:20](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=20)** If this option is omitted, then you will only receive a list of containers that are currently running.
>
> **[0:27](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=27)** The N option allows you to specify a number to show a number of the last created containers, including all states.
>
> **[0:36](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=36)** The Q option displays only the container IDs.
>
> **[0:41](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=41)** The S option displays the total file size of all containers, and the L option shows the last created container.
>
> **[0:54](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=54)** If you want to view the full output, you can use the no trunk option.
>
> **[1:00](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=60)** You can also use the filter option to search for specific containers.
>
> **[1:05](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=65)** Since we added labels to the Big Star Collectibles image, that label is also applied to the container so we can search for any label value.
>
> **[1:17](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=77)** It is useful to filter the results based on the exit code.
>
> **[1:22](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=82)** You should always use the A or all flag when you're searching for exit codes to ensure that you include both running and stopped containers in your search.
>
> **[1:31](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=91)** An exit code of 137 means that the container was killed.
>
> **[1:39](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=99)** There's several exit codes you can work with, and I've included a list of the most common exit codes in your cheat sheet.
>
> **[1:48](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=108)** Another helpful filter option is ancestor, which displays containers based on an image or a descendant of it.
>
> **[1:58](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=118)** You can format your search results using JSON.
>
> **[2:02](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=122)** You can also format the search results as a table to show only the information that you need.
>
> **[2:10](https://www.linkedin.com/learning/docker-your-first-project/listing-containers?u=76281980&t=130)** And finally, you can view a list of all containers that exist on your system in the Docker Extensions Containers panel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (5), [[JSON]] (1)
> **CLI Commands:** docker (2)
> **Env Vars:** json (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)

#### Inspecting containers
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=0)** - [Instructor] Inspecting docker containers can be an effective troubleshooting technique for developers as it allows you to view the internal state of the container and diagnose issues that may be causing errors.
>
> **[0:14](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=14)** Using docker inspect container commands, you can view the container's logs, configuration, environment variables, and other information.
>
> **[0:27](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=27)** First, you need to get the name or ID of the container that you want to inspect using the docker PS command.
>
> **[0:35](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=35)** Type docker inspect, and then the name or ID of the container.
>
> **[0:41](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=41)** By default, docker inspect will render results in adjacent array.
>
> **[0:51](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=51)** I won't review all of the values shown here, but I wanted to highlight the most useful information.
>
> **[0:58](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=58)** ID is the container ID.
>
> **[1:02](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=62)** State includes various status flags and the process ID for the container, which we'll talk about in detail later in this course.
>
> **[1:13](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=73)** Image is the image this container's running.
>
> **[1:18](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=78)** You can also find the system path to the container's log file in the log path output.
>
> **[1:24](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=84)** This is what you would use to ship logs to a central location and enable log rotation to save disc space.
>
> **[1:32](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=92)** Name is the user defined name for the container.
>
> **[1:36](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=96)** Restart count shows the number of times the container has been restarted.
>
> **[1:41](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=101)** This value is the key value used when defining a container's restart policy.
>
> **[1:49](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=109)** Host config includes configurations for how the container will interact with the host system.
>
> **[1:55](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=115)** This information is crucial to help you manage CPU and memory limits, networking values, or device driver paths.
>
> **[2:09](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=129)** And finally, config shows the runtime configuration option set when the docker run command was executed.
>
> **[2:21](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=141)** You can also use the docker inspect command to return specific sections.
>
> **[2:28](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=148)** You can get an instances image name by searching for .config.image, and then you put in the container name.
>
> **[2:37](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=157)** You can get the ID using the string syntax.id.
>
> **[2:41](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=161)** Another useful string to search for is log path, which will return the path to the log file for a container.
>
> **[2:50](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=170)** We'll discuss container logs later in this chapter.
>
> **[2:57](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=177)** To view the config section, you would search for .config.
>
> **[3:01](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=181)** You can also specify JSON so that the output is formatted.
>
> **[3:07](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=187)** If you view the full output, you can search for config and see the same results.
>
> **[3:14](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=194)** You can set the format option to the name of any parent field to return the structure beneath it.
>
> **[3:25](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=205)** You can also inspect containers using the docker extension for VS code.
>
> **[3:30](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=210)** Simply right click a running container and choose inspect.
>
> **[3:35](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=215)** Inspecting containers gives you valuable insights into the container's behavior, and helps to identify potential problem areas.
>
> **[3:44](https://www.linkedin.com/learning/docker-your-first-project/inspecting-containers?u=76281980&t=224)** With this information, you can quickly pinpoint and resolve issues resulting in more efficient troubleshooting and faster problem resolution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (3), [[Troubleshooting]] (2), [[JSON]] (1)
> **CLI Commands:** docker (8), find (1)
> **Env Vars:** cpu (1), json (1)
> **Cross-References:** later in (2)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)

#### Reviewing container log files
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=0)** - [Instructor] Docker container logs are a crucial tool for monitoring and troubleshooting applications running in Docker containers.
>
> **[0:08](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=8)** Using the docker logs command provides detailed information about the behavior of the application, including any errors or warnings that occur during runtime.
>
> **[0:21](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=21)** The tail option sets the number of lines to show from the end of the logs.
>
> **[0:26](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=26)** If you set the tail option to all, then all lines will be shown.
>
> **[0:31](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=31)** The F option means that it will follow log output and will continue streaming the new output from the containers STDOUT and STDERR.
>
> **[0:42](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=42)** The ID at the end is the container ID.
>
> **[0:50](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=50)** The details option will show extra details provided to logs, which is useful if you're troubleshooting cryptic errors.
>
> **[1:00](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=60)** If you refresh your static webpage, your log should update since we used the follow option.
>
> **[1:14](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=74)** You can use the since option to show logs since the specified timestamp.
>
> **[1:23](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=83)** You can pass in a UTC date time as shown here, or you could also use the relative format specifying minutes.
>
> **[1:34](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=94)** You can also use the same time formats with the until option to show logs before a timestamp.
>
> **[1:45](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=105)** And the timestamps option will show timestamps in the log output.
>
> **[1:54](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=114)** You can also view log files by right clicking on the container in the Docker extension for VS Code and selecting View Logs.
>
> **[2:06](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=126)** And finally, you can view container logs in Docker Desktop by selecting the container.
>
> **[2:14](https://www.linkedin.com/learning/docker-your-first-project/reviewing-container-log-files?u=76281980&t=134)** By examining container logs, you can quickly diagnose and resolve issues such as performance problems or application crashes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Troubleshooting]] (2), application (2)
> **CLI Commands:** docker (5)
> **Env Vars:** stdout (1), stderr (1), utc (1)
> **Tools:** vs code (1), docker desktop (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Working with volumes and mounts
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=0)** - [Instructor] When using Docker, you might come across two concepts, volume versus bind mount.
>
> **[0:06](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=6)** While both can be used to share data between the host machine and a container, they work differently and have different use cases.
>
> **[0:14](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=14)** You can create a volume using the docker volume create command, and enter a name.
>
> **[0:31](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=31)** Docker volumes are a type of data storage provided by Docker.
>
> **[0:35](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=35)** A volume is a directory on the host machine that is accessible to a container.
>
> **[0:40](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=40)** When you use a Docker volume, the data inside is not stored in the container's file system, but in the host machine's file system.
>
> **[0:49](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=49)** This means that data in a volume persists even if the container is deleted or recreated.
>
> **[0:57](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=57)** As with most Docker objects, you can list all available volumes using the docker volume ls command.
>
> **[1:11](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=71)** You can also view your volumes using the Docker extension.
>
> **[1:30](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=90)** To inspect a volume, use the docker volume inspect command, and the name of your volume.
>
> **[1:51](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=111)** There's some useful information here, including the mount point, which is the path inside the container where the data from the volume is located.
>
> **[2:03](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=123)** To attach a volume to a container, use the V option for Volume, and then specify the host path followed by the container path.
>
> **[2:17](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=137)** Volumes are a good option for persisting data across different containers.
>
> **[2:22](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=142)** You can use volumes to store data from a database outside the container.
>
> **[2:27](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=147)** This way, you can destroy and recreate the container without losing anything.
>
> **[2:32](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=152)** If you stop your container and view your volumes, you'll see that the volume still exists.
>
> **[3:00](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=180)** You can also specify the volume in your Docker file so that you do not have to specify it every time you run your container.
>
> **[3:09](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=189)** The one downside to this is that Docker will create the name for your volume so it's not as organized.
>
> **[3:19](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=199)** You can also use the -v flag to specify a bind mount.
>
> **[3:22](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=202)** Specify the host directory and the container directory.
>
> **[3:26](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=206)** Here I've created a directory named test, containing one file, test.txt, and mapped it to the app test directory inside of the container.
>
> **[3:50](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=230)** When a bind mount is used, a specific file or directory on the host machine is directly mounted into a directory inside the container.
>
> **[3:59](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=239)** This means that any data written to that directory within the container is actually written to the corresponding location on the host machine's file system, and once again, remove the running container.
>
> **[4:27](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=267)** There are two options for specifying mount using the -v or --mount flags.
>
> **[4:32](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=272)** I suggest using the -v flag at all times, because if you specify a directory that does not exist on the host, using the -v flag will create it, but the --mount flag will return an error.
>
> **[5:14](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=314)** To verify that the bind mount is working, use the docker ps command to get the container ID.
>
> **[5:33](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=333)** Then run docker exec with the -it flag followed by the container ID and sh to open a shell inside of the container.
>
> **[5:50](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=350)** When you list the files in the container, you should see the test directory with the test.txt file inside.
>
> **[6:14](https://www.linkedin.com/learning/docker-your-first-project/working-with-volumes-and-mounts-30188053?u=76281980&t=374)** In the next video, we'll review your standard daily workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), database (1), next (1)
> **CLI Commands:** docker (13), ls (1)
> **Definitions:** means that (2), is a  (1)
> **File Paths:** test.txt (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Reviewing your daily workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=0)** - [Instructor] When you're working with Docker, you want to make sure to keep your resources clean by removing unused objects such as images, containers, and volumes after you're finished with your work every day.
>
> **[0:15](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=15)** For this, you should become friendly with the prune command.
>
> **[0:20](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=20)** Docker image prune will clean up any dangling images, meaning images that are not tagged and are not referenced by any container.
>
> **[0:29](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=29)** It will prompt you to continue, and you can just say yes.
>
> **[0:34](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=34)** To remove all images that are not used by existing containers, you can add the A flag.
>
> **[0:41](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=41)** If you want to bypass the prompt, you can add the F or force flag.
>
> **[0:48](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=48)** You can also use filters to prune images or other objects based on a condition similar to the filters that we've worked with earlier to list images and containers.
>
> **[1:00](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=60)** You can use similar commands to prune containers.
>
> **[1:04](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=64)** When you stop a container, it is not automatically removed unless you started it with the RM flag.
>
> **[1:11](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=71)** Similar to the image prune command, you can use the F or force flag to bypass the prompt, and you can use the until or label filters.
>
> **[1:24](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=84)** Pruning volumes works in a similar way, but you cannot filter by a timestamp, only a label.
>
> **[1:32](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=92)** And finally, the Docker system prune command provides a shortcut, the prunes all unused images, containers, and networks.
>
> **[1:41](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=101)** Volumes are not included by default, and you must specify the volumes flag to prune volumes.
>
> **[1:48](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=108)** This command also supports the F or force flags to bypass prompts, but there is no filtering.
>
> **[1:56](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=116)** Keeping your resources clean will help you avoid errors when you're working with Docker projects.
>
> **[2:03](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=123)** That's it, congratulations.
>
> **[2:05](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=125)** You now have a working project that is containerized and you understand your daily workflow.
>
> **[2:12](https://www.linkedin.com/learning/docker-your-first-project/reviewing-your-daily-workflow?u=76281980&t=132)** In the next chapter, we'll discuss the next steps in your learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (3), next (2)
> **CLI Commands:** docker (4), make (1), rm (1)
> **Analogies:** similar to (2), such as (1)
> **Cross-References:** in the next (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/docker-your-first-project/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/docker-your-first-project/next-steps?u=76281980&t=0)** - [Instructor] This course aimed to show you how easy it can be to get started with Docker.
>
> **[0:05](https://www.linkedin.com/learning/docker-your-first-project/next-steps?u=76281980&t=5)** We proved that we could containerize a simple website for Big Star Collectibles, a fictitious collectible store.
>
> **[0:14](https://www.linkedin.com/learning/docker-your-first-project/next-steps?u=76281980&t=14)** We created a custom image, including everything we needed to run our website, including the operating system and required runtime libraries.
>
> **[0:24](https://www.linkedin.com/learning/docker-your-first-project/next-steps?u=76281980&t=24)** We ran containers based on our custom image to easily create the runtime environment.
>
> **[0:31](https://www.linkedin.com/learning/docker-your-first-project/next-steps?u=76281980&t=31)** Now that you've learned how to apply your Docker knowledge, the next step in your learning journey will be to study Docker Compose.
>
> **[0:40](https://www.linkedin.com/learning/docker-your-first-project/next-steps?u=76281980&t=40)** Docker Compose is a tool that helps you define and share multi container applications.
>
> **[0:47](https://www.linkedin.com/learning/docker-your-first-project/next-steps?u=76281980&t=47)** With Compose, you can create a YAML file to define the services, and with a single command, you can spin everything up or tear it all down.
>
> **[0:57](https://www.linkedin.com/learning/docker-your-first-project/next-steps?u=76281980&t=57)** [[Learning Docker Compose]] by Nicole Rifkin is an excellent resource for you to learn more.
>
> **[1:03](https://www.linkedin.com/learning/docker-your-first-project/next-steps?u=76281980&t=63)** I hope you enjoyed our Big Star Collectibles project as much as I enjoyed creating it.
>
> **[1:09](https://www.linkedin.com/learning/docker-your-first-project/next-steps?u=76281980&t=69)** Thanks for watching and have a great day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (4), next (1)
> **CLI Commands:** docker (5)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** yaml (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Shelley Benhoff]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/docker-your-first-project-4485003)

## Skills Covered

- Docker Products

## Path Context

### In [[Docker Foundations Professional Certificate]]
← [[Learning Docker]] | **2 of 3** | [[Learning Docker Compose]] →

## Part of

- [[Docker Foundations Professional Certificate]]

## Appears In

- [[Docker Foundations Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Introduction to Docker for Java Developers]] — Docker Products
- [[Learning Docker Compose]] — Docker Products
- [[Docker Essential Training]] — Docker Products
- [[Learning Docker]] — Docker Products

---

[↑ Back to top](#)