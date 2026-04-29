---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: introduction-to-docker-for-java-developers
url: "https://www.linkedin.com/learning/introduction-to-docker-for-java-developers"
duration_minutes: 82
duration: 1h 22m
level: Advanced
updated: 5/23/2022
learners: 33490
skills:
  - Docker Products
  - Java
exercise_files: true
github: "https://github.com/LinkedInLearning/docker-for-java-developers-2452212"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEXn8hdCFwYyw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1652976343988?e=2147483647&amp;v=beta&amp;t=3r0qemij4p7e8dw6NpNMAmaRdBCd7FlQ0Wlfg_FBPEE"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Java Skills]]'
prev_courses:
  - '[[Java Advanced Concepts For High Performance Development]]'
next_courses:
  - '[[Data Science for Java Developers]]'
path_nav: '[{"path":"Advance Your Java Skills","position":2,"total":4,"prev":"Java Advanced Concepts For High Performance Development","next":"Data Science for Java Developers"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/docker-products
  - skill/java
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Introduction%20to%20Docker%20for%20Java%20Developers.md)

![Introduction to Docker for Java Developers](https://media.licdn.com/dms/image/v2/C560DAQEXn8hdCFwYyw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1652976343988?e=2147483647&amp;v=beta&amp;t=3r0qemij4p7e8dw6NpNMAmaRdBCd7FlQ0Wlfg_FBPEE)

# Introduction to Docker for Java Developers

> Projects Use the Docker Engine CLI and Dockerfile commands to convert Java Source code into a running containerized application without installing build tools or a run-time environment. Docker—a leading software container platform—can simplify the overall application delivery experience. In this course, expert software developer Mary Ellen Bowman helps you get started with Docker, with easy-to-use

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers) | 1h 22m | Advanced | 33K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (2 videos)
- **[[#2. 1. Getting Started]]** (4 videos)
- **[[#3. 2. Understanding Docker]]** (8 videos)
- **[[#4. 3. Containerization Best Practices]]** (5 videos)
- **[[#5. 4. Dockerfile Alternatives]]** (4 videos)
- **[[#6. Conclusion]]** (1 videos)

### 1. Introduction

#### Zero to Zero to Hero
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=0)** - [Mary Ellen Bowman] Hey, Java developer.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=2)** Do you want to go from zero to a hero in Docker?
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=6)** Then choose a different course.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=7)** In this course, you'll become a Java hero by going from zero to zero with Docker.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=14)** How is this possible, and why care about Docker containerization during Java development?
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=20)** Well, consider an online food order.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=23)** We expect our order to arrive intact at the proper temperature.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=27)** This is accomplished through careful packaging and timely delivery.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=32)** The goal of software containerization is the same.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=35)** Applications are packaged with the required infrastructure at the build phase, making deliveries reliable.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=43)** Hi, I'm Mary Ellen Bowman.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=45)** I'm a senior software developer.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=46)** And in this course, we'll start from zero by reverse engineering a Dockerized Java web app, invoke the Docker CLI, learn Docker file commands and containerization best practices.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=59)** Then employ modern tools requiring zero Docker files, making you a hero in your Java development team.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=67)** Let's go from zero to zero to hero in this Introduction to Docker for Java Developers.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (7)
> **Code Keywords:** let (1)
> **Env Vars:** cli (1)
> **Speakers:** - [mary (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=0)** - [Mary] To interact with the exercises in this course, I expect you to have Java 11 installed.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=5)** Although, the examples are not very complex, so Java 8 should be fine.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=9)** Apache Maven for automated builds and IDE for debugging.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=14)** I use IntelliJ, but you do you.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=16)** And that you will be able to install Docker for desktop.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=19)** We'll walk through that later.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=21)** I expect you to have a basic understanding of Java and how to build with Maven.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=26)** This course is an introduction to Docker for developers.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=30)** Your time is valuable, so I don't drag you through every detail.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=34)** I expect that you, as a developer, will be able to flesh out any extras as needed.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=39)** Many examples in this course are Spring Boot microservice web applications.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=44)** If this is new to you, I suggest you watch my course, Creating Your First Spring Boot Microservice, in the LinkedIn library.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2), apache (1)
> **Versions:** java 11 (1), java 8 (1)
> **Env Vars:** ide (1)
> **Tools:** intellij (1)
> **Definitions:** is an  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [mary] (1)


### 2. 1. Getting Started

#### Imagine building and launching a Java app without Java
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=0)** - [Instructor] Let's jump right into this course with actual code.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=4)** This is a Java project that I created with Spring Boot Initializer.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=8)** This is a great resource for creating a stubbed out Spring Boot application with all the desired dependencies and scaffolding.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=17)** So in this example, I have a Spring Boot app with Spring Web as a dependency, and that will make this a Spring MVC web app.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=27)** And then I have the Spring Boot actuator.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=30)** Actuator provides built in rest endpoints for monitoring the status of an application.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=35)** The most famous is the slash actuator slash health endpoint, which returns the status in JSON format.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=42)** We have Java 17 selected and package it as a war, meaning that Tomcat must be provided by the host.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=52)** It is not embedded in the application.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=55)** So the resulting code is this.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=56)** After I generated it, downloaded it to a ZIP, and then expanded into this folder.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=63)** And so I want to build, deploy, and run this application at the command line, then exercise the actuator slash health endpoint.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=71)** Let me just show you the actuator health endpoint.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=75)** Doing a curl.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=79)** To local host 8080.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=81)** And then the end point is actuator health.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=86)** And I should return a JSON status saying up.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=89)** And it failed to connect, because there's nothing bound to that port right now.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=95)** So the problem is, this was made for Java 17, and I have Java 11 installed.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=105)** So there's Java 11 and I don't have Tomcat installed either.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=109)** So let's prove that.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=114)** Brew is a command available on Linux-based systems.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=119)** And it says it can't find Tomcat.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=125)** So is it impossible?
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=126)** Can I not run this?
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=127)** Well, yes, I can.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=128)** I added some magic in a script that I'm going to invoke called run-demo.sh.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=141)** And I'm going to invoke that.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=145)** And let me expand the window here a little bit.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=148)** And so there's a lot of activity going on here.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=152)** I see the word Tomcat, and I see JDK17.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=157)** Temurin, I have no idea what that is.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=158)** But I'm just going to let this run, and it's going to take a while.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=162)** So I'm just going to speed this up a bit.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=166)** Now we see some familiar messages running Maven, and some dependencies are being downloaded into Maven.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=175)** The Maven repo is getting expanded.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=179)** Okay, now we see a message that a star.war file is being copied into a Tomcat web apps root.war folder.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=188)** So what that means is the default context.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=193)** So we don't have to have a context at the end of a URL.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=196)** So it says it's done.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=198)** I have a prompt back.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=200)** Let's try that curl again.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=208)** Yep, I get a message back that status is up.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=211)** Do I have Java 17 installed now?
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=218)** No, it's still Java 11.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=222)** And do I have Tomcat?
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=225)** No, I don't.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=226)** Well, is it magic?
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=228)** What was in this script?
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=230)** So is it impossible?
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=232)** I will also say that, I can't really show it to you, but there was nothing new in my .m2 Maven repository either.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=240)** How is this even possible?
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=241)** Keep watching and I'll show you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (1), while. (1)
> **Env Vars:** json (2), mvc (1), zip (1), jdk17 (1), url (1)
> **Versions:** java 17 (3), java 11 (3)
> **CLI Commands:** curl (2), make (1), brew (1), find (1)
> **Definitions:** is a  (3)
> **File Paths:** run-demo.sh (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Installing Docker Desktop
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/installing-docker-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/installing-docker-desktop?u=76281980&t=0)** - [Narrator] The amazing secret, Tomcat was installed.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/installing-docker-desktop?u=76281980&t=4)** The application was built with Maven and JDK 17 and then deployed the Tomcat all within the Docker run time environment, which I have installed.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/installing-docker-desktop?u=76281980&t=15)** For the rest of this course, you can just watch what I do but I recommend that you install Docker for Desktop runtime yourself to have a better learning experience.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/installing-docker-desktop?u=76281980&t=25)** For developers and small businesses, Docker for Desktop is free.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/installing-docker-desktop?u=76281980&t=29)** Once installed, issue the Docker dash V command to verify that it's up and running.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/installing-docker-desktop?u=76281980&t=34)** There is also a nice UI available called Docker for Desktop.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/installing-docker-desktop?u=76281980&t=38)** To keep this course simple we won't explore the UI much.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/installing-docker-desktop?u=76281980&t=41)** We will be sticking to the command line.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (5)
> **Env Vars:** jdk (1)
> **Tools:** command line (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### Building, deploying, and launching the Java app
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=0)** - [Instructor] So assuming you've installed Docker for desktop and downloaded the exercise files for this chapter, I'm going to demonstrate what's going on under the covers.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=9)** Follow along if you like.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=10)** All the concepts mentioned here will be fully covered in later videos, so be patient with ambiguity for now.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=16)** First, let's look at that run demo script.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=19)** There are actually two commands, docker build and docker run.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=25)** Seems logical enough.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=26)** We build something, and we run something.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=29)** Let's break these commands down.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=31)** So what are we building and what are we running?
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=33)** In step one, we are building an image.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=37)** What is an image?
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=38)** At its most basic sense, it's a bunch of files serialized into a binary.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=43)** I'm going to type it here.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=53)** I have two inputs to the docker build command.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=56)** - t demo-image is simply an image tag name.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=61)** I could tag this image with any name I want.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=63)** And if I don't give it a name, Docker leaves it tagless.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=66)** The second input is dot.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=68)** There's a lot going on in that dot.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=70)** Dot means look for a file called Dockerfile in the current directory.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=75)** The Dockerfile was not included by the code generated by Spring Initializr.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=79)** I created it.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=81)** Let's look at the Dockerfile to see if we could decipher what is actually being installed in the Docker runtime environment.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=88)** For a small file, there's a lot going on here, and some might look familiar to you.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=93)** Let's see what intuition can tell us.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=96)** FROM seems like a starting point, tomcat:9.0-jdk17-temurin.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=105)** If you don't know Tomcat, it's a web application server.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=109)** Properly configured, Java web applications can be deployed to Tomcat by copying Java to a web archive file to the Tomcat web apps folder.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=119)** Okay, so Tomcat version nine, I get that.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=122)** What about jdk-temurin?
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=124)** If you Googled it, you'd see that temurin is a free open JDK binary for Java 17.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=130)** The next three commands seem grouped together.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=133)** COPY . /app, okay.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=135)** Copy I would think, dot means the current working directory to a folder called /app.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=140)** WORKDIR, that's like set your present CD to that folder.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=145)** And RUN, oh, we see something like Maven, mvn package.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=149)** skipTests, okay, that seems like we're going to build this Java application.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=154)** So building the project creates a .war, and that's why we have RUN and then a cp, copy, like Linux.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=163)** We're going to copy the .war file that's generated into a /user/local/tomcat/webapps/ROOT.war folder.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=172)** And then, finally, there's a command that starts the catalina.sh script.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=180)** So let's issue the docker build command, and I'm going to change the tag to mydemo just to differentiate this is new work we're doing.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=194)** And then let's launch it.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=197)** Make the screen a little bigger here.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=200)** As we saw before, this takes a little while.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=203)** Okay, that finished.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=204)** Now let's see if we can run that curl command again to see if the endpoint is up.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=218)** Nope, it's still not running because we haven't actually run anything yet.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=221)** We've created an image, and let's see, we can issue a command called docker images.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=228)** And we could see that, from that command, that there is an image called my-demo-image.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=234)** Now we want to actually run this.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=236)** So looking back at our demo script, we have the command to docker run and et cetera, and I'm going to talk through that.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=247)** Docker run has many options available to it, but this one has three inputs.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=252)** The name of the running image, which is called a container,
>
> **[4:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=255)** - p specifies the publishing and binding of ports to the host machine, and -d, which is the image name.
>
> **[4:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=262)** So let's try using this with our new image tag and give it a new container name.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=268)** I'm going to say docker run -name my-demo-app -p
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=280)** 8080:8080 -d my-demo-image.
>
> **[4:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=292)** So now something has started running, and some of the magic is starting to make some sense, and then let's dig even further.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (11), make (2), cd (1), mvn (1), cp (1)
> **Code Keywords:** let (10), finally, (1), while. (1), this. (1)
> **Env Vars:** run (2), jdk (1), copy (1), workdir (1), root (1)
> **Definitions:** is an  (2), is a  (1), is called (1)
> **Speakers:** - [instructor] (1), - t (1), - p (1)
> **Versions:** 9.0 (1), java 17 (1)
> **File Paths:** catalina.sh (1)
> **Code Identifiers:** skiptests (1)

#### Scaffolding Java applications with Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=0)** - [Instructor] So I said we had something running, but let's actually prove it by running the curl command.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=5)** And look, we have status is up.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=8)** The endpoint is live.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=9)** That's awesome.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=10)** So now that we have actually something running, let's look at the running processes.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=18)** Docker PS dash A, similar to a Unix PS to list the processes.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=24)** And there we see a container.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=27)** At the end there is the name, My Demo App.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=30)** That's what we created.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=31)** And it's based off the image, My Demo Image.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=34)** So now that we see that My Demo App is running, and it is from the My Demo latest image, we know that a running image is called a container and we see that container ID.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=45)** What is actually going on here?
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=47)** Well, we're going to find out.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=48)** Let's run the following command.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=52)** Docker exec dash T dash I.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=57)** Don't worry about all those flags for the moment.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=61)** Give the container name, My Demo App.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=67)** And slash bin slash SH, which will run a shell.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=72)** And we get a show prompt.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=73)** How about that?
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=75)** Let me do an LS.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=77)** And look at that.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=79)** It's showing files similar to what we have here in the project.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=82)** Let's do a present working directory is in the slash app folder, we are.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=89)** And let's do a Java version.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=95)** And there's Java 17.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=96)** So we are actually running within our container right now.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=102)** And it's provided a Unix shell with Java 17 running.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=107)** And we have our folder app, which has our files in there.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=109)** Let's see that target folder.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=114)** There's our target folder with the war that was built.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=118)** And let's see if Tomcat is present.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=134)** Yes, there's the Tomcat folder.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=146)** And there is the root.war web app.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=149)** So this is it.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=150)** This is our deployed web app.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=152)** So what we have here is not just a running Java application, but an entire infrastructure.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=157)** The shell, the Java build, the Java runtime.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=161)** Tomcat's installed all the way down to an operating system encapsulated into one self-contained unit.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=167)** Hence the name container.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=169)** I hope this demonstration has wet your appetite to learn more, but before continuing, let's clean up our environment a little bit, because all these work that to building containers and images can take up a lot of space on your disks.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=180)** So let's just clean up our work here for a bit.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=182)** Let's exit from the shell.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=185)** And we are going to stop our container and remove it.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=200)** And we'll remove it.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=206)** So it's gone.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=208)** And now we're going to remove the image.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=211)** RMI.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=218)** Oops.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=225)** And there's no image left, so we've cleaned up our work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), self (1)
> **CLI Commands:** docker (2), curl (1), find (1), ls (1)
> **Versions:** java 17 (2)
> **Env Vars:** rmi (1)
> **Definitions:** is called (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Understanding Docker

#### Understanding containerization
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=0)** - [Instructor] Containerization.
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=1)** What a nonsensical buzzword.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=4)** I'm sure you've heard it before, but what does it actually mean and what's the benefit?
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=8)** Back in my introduction, I claim that software is not complete until it has been successfully delivered.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=14)** What do I mean by that?
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=15)** Without containerization, software is typically built once, packaged specifically for a certain deployment environment, perhaps to a virtual machine or a physical host, and then delivered to that environment.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=28)** Let's think of a food order and delivery.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=31)** The food preparation and packaging are done together in the kitchen and then sent out for delivery.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=38)** The packaging contents are the same, no matter if it travels by foot, scooter or car.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=44)** Software containerization applies those same principles.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=48)** During the build phase, software is bundled with all it needs as one immutable artifact called an image.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=55)** The image defines all the dependencies it needs to run, including any operating system files and libraries.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=61)** The image is identical, whether it is delivered to a test, staging or production.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=67)** It follows a specification so that the runtime platform on test staging and production understands how to deploy it.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=75)** Identical images can be seamlessly swapped out or replicated at runtime, making deployments resilient and expandable.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=84)** The containerization concept is not new.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=86)** Docker, Incorporated and other companies created containerization solutions.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=91)** To address possible diversions, the Open Container Initiative, or OCI, standardized a container format and a container runtime.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=101)** Docker's original image format has become the OCI image specification, and various build tools support it.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=109)** The OCI runtime specification is the platform that unbundles the image and runs its contents in an isolated environment.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=118)** Docker donated its runtime to the OCI as the first implementation of the specification.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=123)** Other run times are available that follow the specification, but this course will focus on Docker.

> [!info]- Semantic Content
>
> **Documentation:** specification (5)
> **CLI Commands:** docker (4)
> **Env Vars:** oci (4)
> **Code Keywords:** let (1), new. (1)
> **Speakers:** - [instructor] (1)

#### Comparing images to containers
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=0)** - [Tutor] So, given that introduction to containerization concepts, let's get down to actual terminology Image.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=8)** Also known as container image or in this course, a Docker image.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=13)** An image is an immutable artifact composed of files.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=17)** It encapsulates a desired operating system, environment, the application, and a run command.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=23)** We use tools to build an image.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=26)** Consider the Java Ecosystem.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=27)** Java does not execute directly from Java source code.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=31)** The source must be compiled into a byte code archive, usually a Java archive or JAR.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=37)** JAR files can be installed into the local Maven.m2 repository or shared to server registries like Maven Central, Artifactory, or Nexus.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=49)** Likewise, the containerization ecosystem requires a pre-built application image.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=55)** We use tools to build an image.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=58)** Images once built are installed into a local registry, or could be shared to remote registries like Docker Hub.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=65)** The next term is container runtime.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=68)** Also known as a container engine.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=71)** The container runtime is a platform for running images, just as a Java Runtime is a platform for running JARs.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=79)** In this course, we will be using the Docker Container Engine.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=83)** The last term is container, also known as Docker containers or running container.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=89)** A container is the actual instance of a running image on a container runtime.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=95)** Just like an object is an instantiation of a Java class, a container is an instantiation of an image.

> [!info]- Semantic Content
>
> **Definitions:** known as (3), is an  (3), is a  (2)
> **CLI Commands:** docker (4)
> **Code Keywords:** let (1), class, (1)
> **Env Vars:** jar (2)
> **Exercise Files:** source code (1)
> **Analogies:** just like (1)
> **Speakers:** - [tutor] (1)

#### Writing Dockerfiles
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=0)** - Now let's learn how to build an image.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=2)** The primary tools for standing up a Docker image is with a Dockerfile and the Docker build command.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=8)** Let's learn about Dockerfiles first.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=11)** A Dockerfile is basically an image recipe card.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=14)** It begins with a From base image and ends with a CMD or entrypoint command.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=21)** From provides the builder a starting state, followed by more of the following, add and copy commands contribute files from the local file system into the image.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=33)** Additional Froms are for creating multi-stage builds.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=37)** Run executes a shell command within the image.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=41)** User claims a user permissions for proceeding instructions.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=46)** Volume is used to associate a folder in a container with external data.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=52)** Workdir changes the current working directory.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=55)** And CMD or entrypoint is the final command which usually launches the containerized application.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=62)** There's a lot more instructions that are available, but these are just some of the basic ones you'll see.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2)
> **Code Keywords:** let (2)
> **Env Vars:** cmd (2)
> **Speakers:** - now (1)

#### Discover the Docker CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=0)** - [Instructor] Before actually invoking Docker files, we need some overall understanding of the Docker Engine.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=7)** The Docker engine is the Docker Toolbox.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=10)** Two components are the Docker Daemon, which is the Docker runtime Docker server.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=15)** And the Docker CLI, the command line interface that invokes the services of the Docker Daemon.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=22)** Let's look at the commands for creation.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=25)** Docker build creates an image, docker run instantiates an image as a container and runs it.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=32)** Next, some informational commands.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=35)** Docker images lists all the images in the local registry.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=39)** Docker ps lists containers, similar to the Unix process command.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=44)** Docker exec executes a command within a running Docker container and docker system has commands for general Docker system inspection.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=54)** Now for tearing down.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=55)** Docker rmi removes an image.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=58)** Docker stop stops a container from running.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=61)** Docker rm removes a container.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=64)** And docker system prune removes all unused or orphan images.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=70)** The online reference documentation goes all through all of these commands and all of their options.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=75)** So at docs.[docker.com/reference](https://docker.com/reference), you can drill in and see all the different Docker file commands.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=82)** And here's the Docker CLI and all the interfaces just drill down into Docker CLI and it lists all the options that there are for a command, as well as on the command line, you've typed docker --help and it will list all of the commands as well as then if you say docker command --help, it'll list all the options.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=103)** So there are lots and lots of options that you can use and flags and this is the resource you would go to to find all the details on that.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (27), rm (1), find (1)
> **Env Vars:** cli (3)
> **Code Keywords:** interface (1), let (1)
> **Tools:** command line (2)
> **URLs:** [docker.com](https://docker.com) (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Learn Dockerfile instructions
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=0)** - [Instructor] Okay, let's get back to our developer happy place, our IDE.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=4)** The exercise files in this chapter go through several examples of creating images in containers using Dockerfiles and Java applications.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=12)** These examples here are purely for educational purposes.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=15)** They do not represent Dockerfile best practices.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=18)** Let's start with our simplest one and it's in the dockerfile-demos folder/os.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=25)** And there's simply just a Dockerfile in there.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=27)** There's nothing else in that folder.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=29)** This Dockerfile only has a FROM and a CMD statements.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=33)** FROM alpine.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=34)** What is alpine?
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=35)** Alpine is a slimmed down image of a Linux operating system.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=40)** Where does alpine come from?
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=42)** Just like Maven Central, there is a default Docker image registry called Docker Hub.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=47)** Here is the Docker Hub website under the image repository for alpine, and we are going to use what is the latest tag of alpine.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=59)** So because our Dockerfile doesn't have a tag, it just says alpine, it's going to use latest and from this operating system, we're just going to issue the ls command, which gives us the directory listing of the root folder.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=71)** So let's get to it.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=73)** So I'm going to run the docker build command from the os folder.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=80)** And just give dot as the present working directory.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=85)** And it built that image very quickly.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=90)** Let's see.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=91)** And there's the image for us.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=92)** Because we did not give a tag name for our image, it creates a image ID, which it does every time but we cannot use a name now.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=100)** We have to reference it with the image ID.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=102)** And now let's create a Docker container from that image.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=107)** Docker run.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=110)** I'm going to give a name to it.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=111)** I'm going to call it os-app and I need to copy and paste the image ID
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=124)** for that to run and it ran very quickly because it just had alpine operating system and just give a directory listing there.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=131)** Very simple.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=132)** Okay, let's clean up our work.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=137)** We're going to see we have one vs-ig.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=139)** It says okay, what running containers do we have?
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=142)** Even though it says it exited, we still have that container out there, so we need to remove it.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=152)** I'm also going to remove the image.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=162)** Okay.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=165)** And it's gone.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=165)** Okay, let's go to our next example.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=167)** We're going to step up a little bit and this time, we're actually going to reference some code.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=172)** We have a Hello World in the hello folder.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=175)** Here's our Dockerfile.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=178)** And our Hello Java class.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=181)** So our Java class is just a simple main of Hello World.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=185)** The Dockerfile for it says FROM openjdk:11-jdk, COPY and Hello.class file, and run it.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=195)** So now we are referencing openjdk.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=200)** Let's look at that.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=202)** So here is the openjdk repository under Docker Hub.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=206)** And you can filter by a tag name.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=209)** So I said filter by 11-jdk and there's a lot of different versions of operating systems and things that are bundled with it.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=215)** And here's the tag of 11-jdk.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=218)** That's what we're going to use.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=220)** So I need to compile that Hello.java class.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=228)** Go to that folder.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=230)** I'm going to compile at the command line.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=240)** So now the class file's there.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=242)** And now let's actually build and run that.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=248)** This time, I'm actually going to give our image a name so it's easy to refer to.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=259)** So we created the image.
>
> **[4:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=264)** There's our image hello.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=266)** Let's run it.
>
> **[4:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=269)** Refer to it by... Give it a name of hello-app.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=275)** And the image hello.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=278)** And it came back and say Hello World.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=284)** There's our container, it's exited but we will need to remove it.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=293)** And we can remove our image.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=303)** Okay, great.
>
> **[5:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=305)** So the next example we're going to use is in a runapp folder.
>
> **[5:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=313)** We have a bit more complex example here where we have a Dockerfile that's going to start from openjdk:11.
>
> **[5:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=321)** Add what the contents of this app folder into the /app folder in the Linux system.
>
> **[5:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=329)** Change directory to that, and then run it.
>
> **[5:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=332)** So this is an example where we have a Forever.java class where there is a class that will just never stop.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=340)** It runs forever and we're going to leverage the Lombok library, which just with this annotation dash @log.
>
> **[5:48](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=348)** I don't have to declare a log file.
>
> **[5:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=350)** So this is just a simple example where I want to have other files than just the Java class file.
>
> **[5:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=358)** Change directory to runapp/app because I need to compile this first.
>
> **[6:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=377)** So I've compiled it into the class file.
>
> **[6:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=379)** I'm going to cd back to the directory where the Dockerfile is.
>
> **[6:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=383)** And now I'm going to build and run it.
>
> **[6:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=389)** Call it forever.
>
> **[6:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=397)** So it built that.
>
> **[6:39](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=399)** And now let's run it.
>
> **[6:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=406)** Call it forever-app.
>
> **[6:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=409)** And the image is called forever.
>
> **[6:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=413)** And so that is basically going to keep running forever.
>
> **[6:57](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=417)** It's not going to stop.
>
> **[6:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=418)** That's why I'm not being prompted again at the command line.
>
> **[7:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=421)** So to make it stop, I will just hit Control + C and I'm back to my prompt.
>
> **[7:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=427)** And I'm going to do the cleanup again.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), class. (2)
> **CLI Commands:** docker (7), ls (1), cd (1), make (1)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **Env Vars:** ide (1), cmd (1), copy (1)
> **File Paths:** hello.java (1), forever.java (1)
> **Ports:** :11 (2)
> **Tools:** command line (2)
> **UI Navigation:** go to (2)

#### Convert code to a Docker image
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=0)** - [Instructor] Openjdk:11-jdk not only contains the Java Runtime, it also includes the Java Development Kit.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=9)** So the compiler.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=11)** So let's actually invoke the compiler within a Docker file and convert source code into an image.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=17)** So I have open here in the App folder a Dockerfile-build.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=24)** And what this is going to do is just pull in the entire contents of the app folder into the /app directory, change to that directory, and then compile the code in forever.java, and then run the code as the command at the end.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=41)** So let's build the image first.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=44)** We're in the runapp folder.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=47)** There's the Dockerfile-build file.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=50)** So let's go Docker build -t.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=55)** And we're going to call it foreverbuilder.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=61)** And give the file parameter to say what Docker file to use.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=70)** And then dot to say find it in the current directory.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=77)** So it's going to download the JDK.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=81)** It's compiling the forever.java and it built the image.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=86)** So let's run that image as a container.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=89)** Docker run, going to call detach on it.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=94)** So it will run in the background and give it the name of foreverbuilder-app,
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=105)** and base it off of the foreverbuilder image.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=113)** And so now, we have a running container.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=116)** Let's look at the logs because it was run asynchronously.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=123)** So we just type Docker logs and give the container name.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=133)** And that was the message.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=134)** Remember, print it in the forever.java file.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=137)** There it is, run forever using Lombok.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=141)** And now, since we have a running container, we can actually invoke commands within it.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=147)** So very simply, a few things are Docker exec -t -i foreverbuilder-app.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=159)** And let's just do an ls on the slash folder.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=165)** And those are the files in there, including, right there there's the app folder.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=170)** Let's invoke it again and say what's the directory of app.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=175)** And that's the directory of app.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=177)** The forever class was now built inside there, at forever.java and the lombok.jar.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=183)** And let's try this again and actually go and shell into that folder.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=193)** So we're actually in the shell, in the runtime.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=202)** And see the running commands?
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=204)** We have Java running forever.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=207)** And exit out of there.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=210)** Excellent. So now, we want to stop this and remove it.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=215)** So now, because we have a running container, we couldn't Control + C out of it.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=220)** It's running in the background.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=221)** We cannot remove it unless we stop it first.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=225)** So I'll just prove what happens.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=226)** Docker remove foreverbuilder-app.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=235)** It's going to say, you have a running container.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=236)** You can't remove it.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=237)** So let's try stop.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=243)** That stopped it.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=246)** Let's remove it.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=248)** And let's clear up the images.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=259)** So it deleted the images.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=261)** And finally, just one more housekeeping thing because Docker can create a lot of use in your file system.
>
> **[4:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=269)** Right now, we have an image downloaded for the openjdk.
>
> **[4:33](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=273)** Let's invoke this command called Docker system prune -a for all.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=280)** And this is basically just going to delete any images that don't have any running containers with it.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=286)** And it's saying, are you sure you really want to do this?
>
> **[4:48](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=288)** And I was like, "Yes, we do."

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), finally, (1), delete (1)
> **CLI Commands:** docker (9), find (1), ls (1)
> **File Paths:** forever.java (4)
> **Exercise Files:** source code (1), download the (1)
> **Ports:** :11 (1)
> **Env Vars:** jdk (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Modify Dockerfile to remove Forever.java
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/challenge-modify-dockerfile-to-remove-forever-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/challenge-modify-dockerfile-to-remove-forever-java?u=76281980&t=0)** - [Instructor] It's your turn.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/challenge-modify-dockerfile-to-remove-forever-java?u=76281980&t=8)** It's time for a challenge.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/challenge-modify-dockerfile-to-remove-forever-java?u=76281980&t=9)** So from this exercise file, this Dockerfile.build.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/challenge-modify-dockerfile-to-remove-forever-java?u=76281980&t=13)** It's now time to see if you can remove the Java file forever.java from this Docker image after it has been built.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/challenge-modify-dockerfile-to-remove-forever-java?u=76281980&t=24)** So you want to modify this, remove the forever.java file but make sure that it still builds and runs and then prove once it is running, that you can actually see that that file is not in the slash app folder.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/challenge-modify-dockerfile-to-remove-forever-java?u=76281980&t=39)** And you would use the Docker exec command to prove that.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/challenge-modify-dockerfile-to-remove-forever-java?u=76281980&t=44)** Give it a try.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2), make (1)
> **File Paths:** forever.java (2)
> **Code Keywords:** this, (1), try. (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Modify Dockerfile to remove Forever.java
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=6)** - [Instructor] Okay, so how do you do this?
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=8)** How do you figure this problem out?
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=9)** So after we've called the javac command, we don't need this Forever.java anymore.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=16)** So we will say RUN rm Forever.java.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=25)** And now let's build that image again with build -t foreverbuilder -f Dockerfile-build..
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=35)** So I compiled it, it says it removed it.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=38)** And now let's run this image as a container.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=45)** So we're running it in detached mode again.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=47)** So it runs it in the background so we can inspect it with the exec command.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=53)** So there's a few different things you could do here.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=55)** I'm just going to run the exec to start a shell and see what directory I'm in.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=60)** I'm already in the app folder, do an ls, and the Forever.java class is not there.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=67)** Did you do it?
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=68)** I knew you could.

> [!info]- Semantic Content
>
> **File Paths:** forever.java (3)
> **CLI Commands:** rm (1), ls (1)
> **Code Keywords:** let (2)
> **Env Vars:** run (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 4. 3. Containerization Best Practices

#### Layering in Docker images
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=0)** - [Instructor] Now that we've looked at the basics of a Dockerfile, let's look at some best practices when writing them.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=6)** The first best practice we'll dive into is how best to layer the Docker image.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=12)** So what are image layers?
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=15)** Images are not just one blob of file.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=17)** So they're actually grouped by the action of each Dockerfile instruction.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=22)** So each layer only includes the file additions or changes from the previous layer just like how GIT commits only contain the differences from the previous commit.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=31)** A hash is calculated for each layer.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=34)** Once a layer is created, it is cached locally.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=37)** When an image is rebuilt, if Docker detects no change in a layer, then the cache layer is used.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=44)** If there is a difference, the cache is no longer valid and the layer is rebuilt.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=49)** Subsequent layers are deemed invalid and must also be rebuilt.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=54)** So knowing how layering works, here are some best practices when creating a Dockerfile.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=59)** You should start from the lightest image possible and that starting image must be a stable verified image and tagged, not latest, which can change.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=71)** Only add files required to run the image and order your Dockerfile instructions from least to most frequently changed.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=81)** In the exercise files, there is a very simple spring boot web app called Layer Demo, and it has a hello world API.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=91)** There is a Dockerfile that has been poorly layered and here it is right here.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=96)** I'm going to build the JAR and then the image.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=101)** So first I'm going to make the layered JAR and here's the command to build the image with this bad layering Dockerfile.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=115)** So now that we built that image, I'm just going to show how layers and caching work.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=120)** I'm going to change this to say hello universe.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=129)** Save it, build it again, and then build the image again.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=144)** So you can see from the output here that only the first layer was cached.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=149)** The rest of the layers had to be rebuilt.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=152)** So what were the problems with this Dockerfile?
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=156)** Take a moment to look at it, and then I'm going to show you, but I want you to think what it would be first.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=163)** So you could see that first, it's using alpine:latest and alpine:latest could change.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=170)** Another problem is is that we're starting from an image that does not combine the operating system in Java, they're actually separate so alpine is just the operating system and then it runs an APK ad, which pulls down the open JDK so that's inefficient.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=187)** Here we're adding the entire app folder instead of the JAR.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=193)** So that's extra work that's not needed and we're not adding the JAR right before the command.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=200)** So because we're adding that folder before we actually are installing the JDK, then that has to be refreshed again.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=211)** So it not using it for cache.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=212)** So it really should be added right before we start the JAR.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=216)** And finally, we're using JDK instead of the JRE.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=222)** So let's look at the example of a good layering system here.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=225)** So here we're applying best practices.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=227)** So from this example, we're using open JDK 11 JRE and slim.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=234)** So it's a slim down operating system with just the JRE.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=238)** We're setting the WORKDIR at the app right after that.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=242)** And so now we're only adding the JAR to the app folder and then starting it from there.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=252)** So let's build that one and see how it goes.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=259)** So we're going to pull down the open JDK 11 JRE slim and then run the rest of the instructions.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=268)** And now I'm going to change that file back to hello world,
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=276)** rebuild it and rebuild that image.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=285)** So you can see all of the stages that were cached except for the last one where we copied in the image and then run it.
>
> **[4:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=294)** And then also let's actually look at the images that now that we're using JRE instead of JDK.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=303)** So we see that on this line here, bad layering had 294 megabytes and good layering had 248 megabytes, which is a lot smaller.

> [!info]- Semantic Content
>
> **Env Vars:** jar (6), jdk (6), jre (5), git (1), api (1)
> **Code Keywords:** let (4), finally, (1)
> **CLI Commands:** docker (2), git (1), make (1)
> **Definitions:** is a  (4)
> **Prerequisites:** required to (1), before we start (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Best Practices:** best practice (1)

#### Building multistage Docker images
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=0)** - [Instructor] One of the goals of Dockerfiles is to have the smallest footprint possible.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=5)** A Dockerfile may create intermediate files unneeded at the final runtime, contributing to image bloat.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=13)** Multi-stage images to the rescue.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=15)** In the exercise files, we again have a simple, layer demo Spring Boot web app, but now the Dockerfile runs Maven to build the image.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=26)** Let's look at this Dockerfile called Dockerfile Single Stage Build.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=30)** We start with OpenJDK 11 image, copy the project code, run Maven package, then launch the executable jar.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=42)** Let's run it to build that image.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=57)** So this is going to take a while because we not only have to download the OpenJDK, we're going to have to also download everything around Maven and all of the Spring dependencies.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=67)** So we're just going to speed this up.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=70)** Okay, that ran and finished.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=72)** It was simple, but the problem is is that we really don't need the JDK or Maven to run that jar, nor should we include the original code and other files in the target folder.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=85)** Now let's look at a different Dockerfile.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=87)** This Dockerfile starts out the same, same starting image and Maven command, but then there is another from statement with a smaller operating system and the Java runtime environment.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=101)** What's going on here?
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=102)** Recreate a new stage.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=104)** This is a scaled down environment.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=106)** The first stage has a label of builder, and we copy from the builder image the layer demo jar file.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=114)** Then the second stage runs the jar in the JRE.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=118)** At the end, the first stage is wiped away.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=121)** Now let's build this multi-stage image.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=144)** Okay, that finished.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=147)** Let's check out the image sizes.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=153)** Wow, that's an incredible difference.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=155)** From the single stage, it's 812 megabytes.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=158)** From the multi-stage, it's 268 megabytes.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=163)** Multi-stage images don't have to be just builds from source.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=168)** Let's check out our jar.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=170)** Do a quick Maven package.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=182)** So now I'm just building the jar locally, 'cause I want to see how big it is once it's built.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=193)** So this jar is about 40 Meg (instructor laughing) and it's a really simple application.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=201)** All our code is just a "Hello, world!"
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=203)** But most of it comes from that Spring dependency to make it a web app.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=208)** Well, Spring Boot became Docker aware since version 2.3, and since 2.4, by default, it identifies layer boundaries within a jar.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=219)** Let's look at another Dockerfile that we have called Docker Multi-stage Layering.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=228)** This silly looking Dockerfile leverages the capability for better layering.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=234)** On line 10, we invoke a Spring Boot layering tool that separates the jar into four folders.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=242)** So by invoking this command, it separates into, it creates a folder called Dependency and all the jars are identified by Maven that are interdependencies that are called, for example, come from Spring, a Spring loader folder, which is system for generating self-contained jar wars.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=259)** That's actually this; we're going to invoke a command from Spring Boot loader, the snapshot dependencies, any dependencies whose versions contained snapshot, and an application folder, which is actually our application that we wrote that are separated into class files and resources, dot class files.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=280)** Then let's look at our second stage.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=283)** Now we're from JRE-slim.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=286)** In the second stage, we're actually going to copy those individual folders from the previous stage, called Extractor.
>
> **[4:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=295)** And we're going to copy the dependencies into slash app, the Spring Boot loader folder into slash app, as well as the snapshot dependencies and our class file layer demo application, dot class.
>
> **[5:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=308)** And then we're going to say Java and invoke this jar loader command, which has the intelligence to launch our application when it's structured like this.
>
> **[5:18](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=318)** So let's run that.
>
> **[5:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=320)** Clear the screen.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=340)** So that's going to build.
>
> **[5:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=341)** So we are using the JDK, then we're invoking the command to separate the jar out and then copying the layers out.
>
> **[5:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=350)** And now we've created it.
>
> **[5:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=352)** And let's do a Docker images.
>
> **[5:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=358)** So you see that this multi-stage layering is about the same size as the multi-stage.
>
> **[6:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=365)** But what happens is if you need to rebuild only at layer six out of six, if you have to rebuild, only this line here is going to have to run again.
>
> **[6:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=377)** So you can also break apart fat jars on your own.
>
> **[6:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=381)** It's possible with the Java jar command.
>
> **[6:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=384)** But since this tool was provided and if you're using Spring Boot, why not use it?
>
> **[6:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=387)** So this approach can make your Dockerfiles less clean looking and the necessity of it is your choice, but it's good to know about as a possible best practice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), default, (1), self (1), this; (1), class. (1)
> **CLI Commands:** docker (3), make (2)
> **Env Vars:** jdk (2), jre (2)
> **Versions:** version 2 (1), 2.4 (1)
> **Exercise Files:** exercise files (1), download the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)

#### Specify volumes and ports
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=0)** - [Instructor] Each container runs in a self-contained environment, hence the name container.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=6)** But no container is an island, many must publish information to the outside world or require persistence outside of its lifespan.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=15)** This is where volumes and ports come into play.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=18)** Containers are ephemeral, meaning their state only remains while running.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=23)** However, volumes are perpetual.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=26)** They provide a way to persist long lasting information.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=30)** There are three types of volumes that can be declared as a docker run parameter.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=35)** A host volume is a direct mapping of a host filesystem to a container filesystem.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=43)** So -v with the host container full path is mapped to the container-folder-name.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=53)** And anonymous volume is a Docker-managed volume and its name is autogenerated.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=60)** Use -v with just the container-folder-name.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=65)** And named volume is also Docker-managed, but a name has been provided.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=71)** So we'll use -v with a name not preceded with a slash mapped to the container-folder-name.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=80)** Now let's see how these different kinds of volumes work.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=84)** So we're going to do a host volume first.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=87)** And in my filesystem, I have a my-host-folder and a file that says host-hello.txt and says Hello from the host.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=96)** I'm going to copy and paste a command here because it's kind of long.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=104)** So we're going to do a docker run with the alpine image.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=109)** And we're going to map with the volume -v, the full path which I'm going to use the substitution here in Linux, /my-host-folder which is this guy here, and then :/container-folder-name.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=128)** So it's going to download the alpine image, and it's say started.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=134)** So let's actually exec into that container.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=161)** So we're in the app now, so let's do a cat /container-folder-name, and host so the file is there.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=172)** It says Hello from the host.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=174)** And let's actually write to that file, echo Hello from the container.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=182)** And append that to /container-folder/host-hello.txt.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=191)** By click up in here, there's that message.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=193)** Okay, let's exit out of that.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=196)** Now let's create an anonymous volume on a container.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=204)** So here we're doing a docker run, and the name is anon-volume-app.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=210)** The volume just has /container-folder.
>
> **[3:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=214)** And it's also using the alpine image.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=217)** And now let's create a named volume example.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=225)** So we're going to name the volume bob, also mapping it to container-folder in a different container called named-volume-app.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=236)** So we're going to use the docker volume command, and do an ls.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=245)** And here we see our volumes.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=246)** One is called bob and one has this long hash name on here.
>
> **[4:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=250)** So that's the auto generated name.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=253)** And let me do try something for you, docker volume remove, you can do and I'm going to say bob.
>
> **[4:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=264)** And it says you can't, because there is a active container using that.
>
> **[4:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=269)** So let's do an exec where we touch a file in the container.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=276)** We're going to do an exec command into the anon-volume-app, and then just touch a file called anon-file in the container-folder.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=285)** And then do the same thing in our named-volume and then.
>
> **[5:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=306)** So we've tried to touch that file.
>
> **[5:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=308)** And now I'm going to actually open up Docker Desktop UI that will make it easy to see the volumes and the images.
>
> **[5:18](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=318)** So here is the Docker Desktop UI, and I've selected Volumes.
>
> **[5:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=323)** And we can see there's bob here and here's our anonymous one.
>
> **[5:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=326)** Let's click into bob.
>
> **[5:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=328)** And we see that the container associated with that.
>
> **[5:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=330)** And you can have many containers associated with a volume.
>
> **[5:33](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=333)** And if I click DATA, there's our named-file.
>
> **[5:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=338)** And go back to Volumes and go to our anonymous one.
>
> **[5:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=343)** And here's our anonymous volume app and data and there's our anonymous file.
>
> **[5:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=350)** Let's move on to ports.
>
> **[5:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=352)** So in the filesystem, there is a Spring Boot web app called portdemo.
>
> **[5:59](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=359)** And that just includes the actuator dependency.
>
> **[6:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=364)** So there's no real code in here, it's just the actuator endpoint again.
>
> **[6:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=368)** So let's clear the screen, and cd into portdemo.
>
> **[6:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=373)** And we're actually going to build that,
>
> **[6:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=383)** and I'm going to run it too.
>
> **[6:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=392)** So you'll see the Spring Boot app startup.
>
> **[6:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=397)** And I'm going to go into another terminal here and do a curl localhost:8080/actuator/health.
>
> **[6:51](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=411)** And we see that it's up.
>
> **[6:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=413)** Let's go back here.
>
> **[6:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=413)** So now we see how it's supposed to run outside of a container, so let's containerize it.
>
> **[6:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=418)** So there is inside of portdemo, a Dockerfile that merely just copies in that JAR that we just built and runs it.
>
> **[7:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=427)** So we'll say docker build -t portdemo dot.
>
> **[7:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=442)** So it'll build that image.
>
> **[7:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=444)** Okay, the image is built, now let's run it.
>
> **[7:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=455)** Let's give it a name portdemo-app with portdemo.
>
> **[7:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=466)** So that's running in detached mode.
>
> **[7:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=467)** I'll go back into my other terminal here.
>
> **[7:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=470)** And let's try our curl again, now that it's containerized on 8080.
>
> **[7:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=475)** And there's an error.
>
> **[7:57](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=477)** And why did we get that error?
>
> **[7:59](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=479)** So the reason is is that portdemo-app is not published port 8080 and it's not bound to the host.
>
> **[8:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=486)** So I'll show you the command we should have run.
>
> **[8:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=493)** First of all, we'll give this container a different name.
>
> **[8:16](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=496)** We'll call it portdemo-app1, and we're going to provide a new parameter here, -p 8080:8080.
>
> **[8:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=512)** So what that does is were the first 8080 is for our host, the local host, and the second 8080 is the 8080 that's actually the default port that's from the Spring Boot app in the container.
>
> **[8:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=527)** In fact, you know what, let's name this portdemo app just 80 so we know what we're doing there.
>
> **[8:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=535)** Okay, come over here.
>
> **[8:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=538)** We're going to try that curl again on the 8080.
>
> **[9:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=542)** And the status is up, that's cool.
>
> **[9:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=544)** And so we can make that port anything we want to.
>
> **[9:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=547)** So let's make another container.
>
> **[9:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=551)** We're going to call it container 90 and we're going to map 9090 to 8080.
>
> **[9:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=564)** Okay, go over to another terminal here.
>
> **[9:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=566)** And we're going to do a curl to localhost:9090 for the actuator.
>
> **[9:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=575)** Excellent.
>
> **[9:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=577)** Okay, so before moving on to the next video, don't forget to remove your containers and images.
>
> **[9:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=583)** On we go!

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), self (1), require (1)
> **CLI Commands:** docker (10), curl (4), make (3), cat (1), ls (1)
> **Definitions:** is a  (4), is an  (1), is called (1)
> **Tools:** terminal (3), docker desktop (2)
> **Ports:** :8080 (2), port 8080 (1), :9090 (1)
> **File Paths:** host-hello.txt (1), container-folder/host-hello.txt (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1), [localhost:9090](https://localhost:9090) (1)
> **Env Vars:** data (1), jar (1)

#### Docker registry
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=0)** - [Instructor] We've talked about images, layers, and caching.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=4)** And you've seen these from instructions, in previous examples, referencing various base images, but where did these images come from?
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=13)** They were downloaded from our default registry Docker Hub.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=16)** The Docker engine behaves similarly to Apache Maven.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=20)** When building a Maven project that requires a dependency library jar, Apache Maven first checks the local .m2 repository folder.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=29)** If the dependency jar is not found, Maven downloads it from the remote repository.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=35)** If no organization repository exists Maven downloads the jar from Maven Central at search.[maven.org](https://maven.org).
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=42)** Likewise, when building or running an image the Docker engine first checks the local image cache.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=47)** If the image is not found, the Docker engine downloads the image from the server registry.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=52)** If no organizational server registry exists, then a Docker engine downloads the image from Docker Hub at hub.[docker.com](https://docker.com).
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=61)** Let's go to Docker Hub and I'll actually search for the Alpine repository.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=65)** It's a public repository, so anyone can download it.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=69)** I'm going to go look in the tags and find the latest.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=72)** And here's a convenience method, just copy that command to pull it down.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=77)** In my terminal, I'm going to pull it down And it's going to download it.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=83)** It's pretty small so it came down pretty fast.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=87)** Notice the last line there, [docker.io](https://docker.io) is the URL of the registry, library is the name space, alpine is the repository, and latest is the tag.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=101)** Now, what if I want to share my images I create?
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=104)** All I need to do is retag it and send it to a name space.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=109)** You may have noticed on Docker Hub it showed that I was logged into my free account called mellenbowman I want to make a copy of Alpine latest, and upload it to my namespace.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=121)** So first I have to tag it.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=123)** So I'm going to change the tag of [docker.io/library/alpine:latest](https://docker.io/library/alpine:latest)
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=137)** and retag it to [docker.io/mellenbowman/alpine](https://docker.io/mellenbowman/alpine).
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=146)** And I'm going to give it a tag of me.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=150)** Beautiful now, I want to push that up to my account.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=156)** docker push [docker.io/mellenbowman/alpine:me](https://docker.io/mellenbowman/alpine:me)
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=170)** And it says access denied and it should because you know what?
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=173)** I'm not logged in.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=174)** So I need to do a Docker log in first.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=177)** So just not anybody could push to that repository, you have to have credentials.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=181)** And, by default, it's going to Docker Hub.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=187)** So I will say my username.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=189)** And my password, and I've logged in.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=196)** Now, let's try that command again.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=200)** It's pushing, and it pushed.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=201)** So let's actually look in the Docker Hub website.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=206)** Go back to my repositories, and refresh.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=213)** And there it is, Alpine under my name space and the tag of me, there it is.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=223)** So let's say I want to pull that down.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=227)** Let's first, go back and remove current images I have in the cache so Docker images.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=235)** And I'm just going to use the shortcut docker system prune -a and that's just going to take... remove both those images because there's no containers associated with it.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=251)** And now I'm going to do a Docker pull.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=253)** And it pulls it down, and there it is.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=261)** It made the full round trip.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (20), apache (2), find (1), make (1)
> **Code Keywords:** let (5), public (1), default, (1)
> **URLs:** [docker.io](https://docker.io) (4), [maven.org](https://maven.org) (1), [docker.com](https://docker.com) (1)
> **Non-Speech:** (typing) (4)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)

#### Container orchestration with Docker Compose
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=0)** - [Instructor] In the Docker Hub, there is a trove of images ready for usage.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=5)** Here's one for Postgres, a database.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=8)** So how do containers like web apps interact with other containers, such as Postgres?
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=15)** Let's go through an example.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=17)** This is a Spring Boot web app that is a backend part of a message blog.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=22)** The data model is a Blog class.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=29)** And it's a JPA entity containing a message and an auto-generated identifier.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=35)** There is a Spring Data repository interface for the data access layer.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=41)** If you are not familiar with Spring Data repositories, I have a course in the library called Spring Data 2.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=47)** The Application class is also a Spring Data MVC REST controller that exposes endpoints to create and view blog messages.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=60)** So here's the API to list all the blogs.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=65)** This is the API to create a blog.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=68)** And then there is a silly API that actually stops the whole application.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=73)** And we'll talk about that later.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=74)** This is not a best practice to have a REST controller combined with the Spring Boot Application class.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=80)** But this is just to help keep things simple and explain things better.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=85)** Here's the application's properties file and it has all the properties for setting up access and the URLs and passwords and username to access the Postgres database.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=98)** And finally, we have a Dockerfile and that will take this code, build it in Maven, and then run it as blogdemo.jar.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=110)** Running related containers is called orchestration.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=113)** This can be done manually or through tools such as Docker Compose, Docker Swarm, and Kubernetes.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=121)** Let's see orchestration the hard way, which is manually.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=125)** First, we create a network called blog-network.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=129)** So any other containers included in that network can refer to each other by name.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=136)** Next, we need to create an image for blog-backend then run the Postgres image to have a Postgres container.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=145)** The -e allows environment variable settings to be passed in at runtime.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=151)** And it has a volume, so it could persist data even after the container has stopped.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=157)** And then next, we have to run the blog backend image as an app, and then we name it app and it's included in the blog-network.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=167)** And from that reason, it can refer to the Postgres host just by db, by the name db.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=176)** And here are the environment variables for the name of the database is blogdemo and the Postgres password is lmnop, just like set it up here as well.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=188)** To manually monitor these containers, we'd have to manually go to docker logs on the db container or docker logs on the app container, or hit the curl of the actuator health to see if it's alive.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=203)** And then finally, to tear it down, we'd have to do docker stop and docker remove.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=210)** And if we wanted to remove the images, do docker rmi and then to remove the network we do a docker remove network.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=218)** It's a lot of work.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=220)** And if we want to do that manually, and of course if there's anything manual, there's always an automated tool.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=226)** So we're going to see how Docker Compose can be used to automate orchestration.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=232)** In order to start this, we have to have a docker-compose.yml file, that's the default name it's expected to be.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=239)** And it's expected to follow the YML or YAML syntax.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=245)** And once the YAML file has been created, simply used the docker-compose up command to start up all the containers and docker-compose down to tear them down.
>
> **[4:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=255)** And there's a docker-compose daemon that provides monitoring out of the box.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=261)** So let's look at our docker-compose.yml file.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=265)** So all of the settings in this YAML file map directly to those Docker run command.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=272)** So we have the image name is postgres, db is the container name.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=277)** We have our volume set up here.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=278)** Here's our environment variables that we had before for the db name and the password.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=285)** And it's exposing the typical port for Postgres which is 5432.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=290)** And here's something new that you didn't see on the Docker run command, which is always, so this is the monitoring part.
>
> **[4:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=298)** So if an application or container goes down, the docker-compose daemon will start it back up automatically.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=304)** And that's a setting that you can have, and I have that set here as always.
>
> **[5:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=309)** And here's our app container and it's built from the blog-backend directory.
>
> **[5:18](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=318)** And it just to show that the Docker compose is at the level out, just outside the blog-backend web folder to give context there.
>
> **[5:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=330)** It exposes port 8080 as 8080.
>
> **[5:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=334)** And here's our environment variables that we had before.
>
> **[5:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=336)** And it depends on this db.
>
> **[5:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=342)** And that's why we can say POSTGRES_HOST=db.
>
> **[5:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=345)** And it will restart always if this needs to.
>
> **[5:48](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=348)** And here's the declaration of the volume that's needed.
>
> **[5:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=353)** So let's actually push that up there so I can have a terminal.
>
> **[5:56](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=356)** Let's clear the screen.
>
> **[6:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=363)** Make sure I'm in the right folder.
>
> **[6:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=365)** There's the docker-compose.
>
> **[6:07](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=367)** So I'm going to do my docker
>
> **[6:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=371)** - compose up.
>
> **[6:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=375)** So it's starting up, it's reading in the docker-compose file.
>
> **[6:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=379)** I could run this in detach mode in the background but I wanted to be interactive and see that what's going on here.
>
> **[6:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=386)** So we see it's starting up the web app, the blog web app.
>
> **[6:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=391)** It's connecting to hibernate and we see the message that that has started.
>
> **[6:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=398)** So let's go to another window here, a terminal window.
>
> **[6:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=401)** We'll clear this screen.
>
> **[6:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=403)** And I'm going to do a curl.
>
> **[6:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=407)** Both will host 8080, just to say actuator/health, just for informational purposes to see that it's alive.
>
> **[6:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=418)** And the status is up.
>
> **[7:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=420)** Let's actually hit that endpoint called blogs.
>
> **[7:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=425)** And I have already added some entries into this database for blogs.
>
> **[7:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=429)** So these are just in JSON format.
>
> **[7:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=432)** Some of the messages, this is a blog.
>
> **[7:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=435)** Today had been a great today.
>
> **[7:16](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=436)** Today is not such a great day.
>
> **[7:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=437)** But just like four different messages that I've saved.
>
> **[7:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=442)** Now let's hit that stop endpoint.
>
> **[7:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=448)** And what's going to happen here is, it's actually stops the web application.
>
> **[7:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=454)** And we told docker-compose, if anything happens, restart it automatically.
>
> **[7:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=460)** So we hit the curl command and it comes back, oh, something's happened there.
>
> **[7:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=465)** So empty reply.
>
> **[7:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=467)** So let's go back to Local.
>
> **[7:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=469)** And we see that it stopped.
>
> **[7:56](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=476)** There was a shut down message.
>
> **[7:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=478)** That was actually a system out print line message in the stop endpoint.
>
> **[8:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=483)** It stop and it's automatically restarting again.
>
> **[8:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=490)** And going back over here.
>
> **[8:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=495)** And I get my data back.
>
> **[8:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=497)** Now, if I wanted to take it down, I did docker-compose up in detach mode.
>
> **[8:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=503)** I could just do it in the same window, say docker-compose down, but I'll do it in this other window here, docker-compose down.
>
> **[8:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=514)** So that's going to take everything down for me.
>
> **[8:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=517)** That's declared in the docker-compose file.
>
> **[8:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=520)** A lot easier than having to manually do all that.
>
> **[8:44](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=524)** Docker-compose is a very simple orchestration tool.
>
> **[8:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=526)** And honestly, it's not used very much in production.
>
> **[8:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=529)** It's used a lot as a time saver in developer machines.
>
> **[8:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=533)** But it can be, it's not that it can't, but more popular production tools are Kubernetes or Docker Swarm.
>
> **[9:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=541)** And there's other cloud offerings by Amazon AWS, Google Cloud, and Microsoft Azure.
>
> **[9:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=546)** Lessons for all of these can be found in the LinkedIn library.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (29), curl (3), make (1), aws (1)
> **Code Keywords:** let (9), class. (2), finally, (2), interface (1), this, (1)
> **Env Vars:** api (3), yaml (3), rest (2), jpa (1), mvc (1)
> **Definitions:** is a  (8), is called (1)
> **Analogies:** such as (2), just like (2)
> **File Paths:** docker-compose.yml (2)
> **Tools:** terminal (2)
> **UI Navigation:** go to (2)


### 5. 4. Dockerfile Alternatives

#### Ditching the Dockerfile
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/ditching-the-dockerfile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/ditching-the-dockerfile?u=76281980&t=0)** - [Instructor] We've gone through some great learning about the best way to containerize your apps with Dockerfiles.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/ditching-the-dockerfile?u=76281980&t=6)** And the great news is we really don't need to use Dockerfiles to containerize our Java apps anymore and I could not be more happy about that.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/ditching-the-dockerfile?u=76281980&t=15)** Various organizations realize that, while powerful, Dockerfiles can be difficult to maintain and don't enforce best practices.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/ditching-the-dockerfile?u=76281980&t=24)** The alternatives are opinionated, employ efficient image layering, are lightweight, overrideable by configuration, and best of all, get you back to where you really want to be, coding in Java.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/ditching-the-dockerfile?u=76281980&t=37)** There are many alternative solutions to Dockerfiles.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/ditching-the-dockerfile?u=76281980&t=40)** In this course, we will talk about three, Cloud Native Buildpack Pack CLI, Spring Boot Docker Build plugin and the Jib Build plugin.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (1)
> **Env Vars:** cli (1)
> **Speakers:** - [instructor] (1)

#### Cloud Native Buildpacks
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=0)** - [Instructor] The first alternative we'll look at are cloud native buildpacks.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=5)** The cloud native buildpack is a specification from the Cloud Native Computing Foundation, CNCF, project.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=12)** Its goal is to convert code into a runnable OCI image.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=17)** The Docker engine must be installed and running, and we will install a tool to demonstrate it.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=24)** Here is the buildpacks website.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=26)** And if you scroll down, it lists the different tools that implement it.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=31)** We are going to demonstrate pack.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=34)** So there's its section there.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=36)** So that requires a download.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=38)** So let's actually go try it out.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=40)** So at the terminal, I've already installed pack.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=43)** So I can say, pack build suggest, and that will list the builders that are provided.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=54)** I'm going to use the first one listed here by Google.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=58)** I'm going to copy that there.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=63)** So the command is pack build dash dash builder.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=72)** Then my builder I'm going to use.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=75)** And then I give the image name that I'm going to create.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=81)** So this directory I'm in, this web app is a simple spring boot web application that just has a Hello World API on it, nothing fancy.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=94)** But it has dependencies in there that will all be have to be downloaded.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=98)** So I'm going to run this pack build command, and it's going to run a long time to build everything, because it's downloading its libraries and it has to detect, okay, what sort of source code is this?
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=115)** And then it detects its Java.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=116)** Okay, what version of Java?
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=118)** And then how is it going to build?
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=119)** Oh, I see Maven is in here.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=121)** So it's downloading all of its libraries to do that.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=126)** And then finally, you'll see it actually run Maven on it and create an image.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=130)** So we'll just speed this up until it's done.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=134)** Okay, it finished.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=136)** And so let's see what it did.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=138)** Docker images.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=141)** And so here is, the third line here is webapp IB with a tag, build pack.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=149)** And it also downloaded the build pack builder and a build pack runner.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=155)** So you see, okay, our image that it created, going from code to an image, it was about 462 megabytes, but it also had that download those builders as well.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=169)** And we had to install the pack tool, and we have to have Docker running locally for all of this to work.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (3)
> **Code Keywords:** let (2), finally, (1)
> **Env Vars:** cncf (1), oci (1), api (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **Documentation:** specification (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)

#### Spring Boot Docker plugin
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=0)** - [Instructor] The next alternative to a Docker file is the Spring Boot build plugin.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=5)** The Spring Boot build plugin specifically works for Spring Boot applications.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=11)** Because it's part of a build plugin, it's easy to incorporate with your build pipeline.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=16)** It runs cloud native build pack libraries without needing to install a specific command line tool.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=23)** On top of that, it leverages special knowledge of Spring libraries when layering dependencies.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=30)** It's important to note that this is only available in Spring Boot version 2.3 or higher.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=36)** Let's go to our Spring Boot app.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=38)** It's the same Spring Boot web app that we've used in the previous example.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=43)** Nothing in it other than just a Hello World endpoint.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=47)** And in the palm.xml, there's a plugin for springframework.boot.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=53)** Spring Boot Maven plugin.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=55)** And then, within this tag, you have the option to add configuration about your Docker image.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=62)** And here, I've just added a simple one where I give the image name will be called webapp colon Spring Boot is the tag.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=72)** So let's launch this.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=74)** So unlike our first example with native build packs, the application is actually built on our host machine's JDK, not within the image.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=87)** So Maven W, package, and then use the Spring Boot goal.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=96)** And then it is called build dash image.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=105)** So first it's going to run through the compilation.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=109)** Run any unit tests.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=111)** Now it's going to invoke the imaging.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=114)** So here it's downloading the Docker IO pack to build packs builder.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=120)** And this is going to take a while to run.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=122)** So we'll pause and then speed this up.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=126)** Okay, it finished.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=126)** Let's do Docker images.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=131)** And see, the last line has web app Spring Boot image, and it also downloaded the packet to build packs run and packet to build packs builder images, in order to do this.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=148)** So the size of the Spring Boot web app is 260 megabytes.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=155)** And for just using pack, it was 462 megabytes.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=161)** And then also, as you see, it had to download these builders and runners.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (2)
> **CLI Commands:** docker (4)
> **File Paths:** palm.xml (1)
> **Env Vars:** jdk (1)
> **Versions:** version 2 (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)

#### The Google Jib plugin
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=0)** - [Instructor] The last alternative we will look at is Jib by Google.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=5)** Jib is a Maven/Gradle plugin where you build the Java app on your host machine then Jib creates an image with dependencies in separate layers.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=14)** An added bonus is that the image can be automatically pushed to a server registry, so there's no need to have Docker Engine installed.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=23)** It's also lighter and faster than Spring Boot plugin or Pack.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=27)** So I've opened IntelliJ, and here is the Jib plugin.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=31)** And within this configuration tag, there's a lot of settings you can do, but I've actually set in here the image name.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=38)** And because I want it to be pushed to my Docker Hub registry, I put the full path in there with the registry/, my mellenbowman is my name space, and then the actual name of the image is webapp, and then :jib is the tag.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=57)** So within Maven, I'll say ./mvnw package.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=65)** I want to skip the unit tests.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=69)** And then the jib plugin :build.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=75)** So it's trying push it, and it did not work.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=78)** It was unauthorized, and that's because I haven't added credentials.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=82)** So there's a couple options here.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=83)** One, is within the configuration, I can actually put credentials in here or site environment variables with credentials.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=91)** Another way is I do have the Docker Engine installed, and I could do docker login CLI locally.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=103)** And it's going to prompt me for my username and password.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=112)** Okay, I've logged in.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=114)** Now let's try that command again.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=118)** Okay, it's running, and now it's pushing that image.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=121)** So just to show you, docker images, that image is not here.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=126)** It's not local, it's up in Docker Hub.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=130)** So in my Docker Hub, I'll drill down into that, and there's my plugin jib, pushed a few seconds ago.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=141)** There's the image.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=144)** I can also have it build and have the image stored locally.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=148)** It's just a different goal.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=152)** So it's jib: and it's dockerBuild.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=160)** And the build is pretty fast.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=162)** I really don't need to speed this up.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=165)** Okay, now let's do docker images, and there it is right there.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=173)** So comparing the Jib image to the Spring Boot plugin image, it's just a few megabytes different, but we can see, even though the image is, aside from being lighter, and then it doesn't have to download all these buildpack helpers.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=193)** It's huge that you don't have to have the Docker runtime installed.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=197)** So that's why many people use Jib.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (9)
> **Code Keywords:** let (2)
> **Code Identifiers:** dockerbuild (1)
> **Env Vars:** cli (1)
> **Tools:** intellij (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980&t=0)** - [Mary Ellen] So after this introduction to Docker, what's next?
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980&t=4)** I would say most Java development projects can be containerized just fine using the Jib or the Spring Boot plugins.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980&t=12)** With your current understanding of Docker, you should have no trouble configuring either of them for your solutions.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980&t=18)** And once containerized, orchestration is necessary.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980&t=21)** The LinkedIn Library is a trove of information covering Kubernetes, cloud container platforms, such as Amazon EKS, Google Cloud Run, or Azure Container Instances.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980&t=34)** There's also content on Docker native tools like Swarm and Compose.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980&t=38)** If you enjoy this course, you can find all my LinkedIn Learning courses on my website MaryEllenTeaches.me and my GitHub organization is MaryEllenTeaches.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980&t=49)** I love learner feedback.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980&t=50)** Let me know what you think here or via LinkedIn or Twitter.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980&t=54)** Thanks for watching.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980&t=55)** I hope this course was time well spent and it contributes to your future success.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (3), find (1)
> **Code Keywords:** let (1)
> **Env Vars:** eks (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [mary (1)


## Instructor

- [[Mary Ellen Bowman]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/docker-for-java-developers-2452212)

## Skills Covered

- Docker Products
- Java

## Path Context

### In [[Advance Your Java Skills]]
← [[Java Advanced Concepts For High Performance Development]] | **2 of 4** | [[Data Science for Java Developers]] →

## Appears In

- [[Advance Your Java Skills]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More]] — Java

---

[↑ Back to top](#)