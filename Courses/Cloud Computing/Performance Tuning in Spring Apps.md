---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: performance-tuning-in-spring-apps
url: "https://www.linkedin.com/learning/performance-tuning-in-spring-apps"
duration_minutes: 122
duration: 2h 2m
level: Advanced
updated: 11/18/2021
learners: 9810
skills:
  - Spring Framework
  - Performance Tuning
exercise_files: true
github: "https://github.com/LinkedInLearning/performance-spring-3158745"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFAnne7qoYl0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1637107876135?e=2147483647&amp;v=beta&amp;t=89O1e2iFpTdBcYMpzUWDtC7Rp0O_kt60du8VXdWgvW8"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Advance Your Spring Development Skills]]'
prev_courses:
  - '[[Spring On Kubernetes Deploying And Managing Cloud Native Applications]]'
next_courses:
  - '[[Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing]]'
path_nav: '[{"path":"Advance Your Spring Development Skills","position":2,"total":6,"prev":"Spring On Kubernetes Deploying And Managing Cloud Native Applications","next":"Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/database-management
  - topic/software-development
  - topic/web-development
  - skill/spring-framework
  - skill/performance-tuning
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Performance%20Tuning%20in%20Spring%20Apps.md)

![Performance Tuning in Spring Apps](https://media.licdn.com/dms/image/v2/C560DAQFAnne7qoYl0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1637107876135?e=2147483647&amp;v=beta&amp;t=89O1e2iFpTdBcYMpzUWDtC7Rp0O_kt60du8VXdWgvW8)

# Performance Tuning in Spring Apps

> Resilient and reliable application performance is an essential aspect of every successful enterprise-scale application. Unfortunately, it can be quite challenging to deliver well-considered performance objectives and results. In this course, instructor Kathy Flint teaches Java professionals working with Spring apps how to address the multi-faceted aspects of performance engineering to deliver high

> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps) | 2h 2m | Advanced | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (4 videos)
- **[[#1. Foundations of Spring Performance]]** (5 videos)
- **[[#2. Spring Performance Monitoring]]** (6 videos)
- **[[#3. Tuning for Common Spring Performance Challenges]]** (5 videos)
- **[[#4. The Spring Developers Performance Toolkit]]** (2 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Performance tuning in Spring
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/performance-tuning-in-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/performance-tuning-in-spring?u=76281980&t=0)** - [Kathy] This is a survey course on spring performance tuning.
>
> **[0:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/performance-tuning-in-spring?u=76281980&t=4)** With a strong emphasis on observability and preparedness, this course strives to equip the student to not only understand some of the trickier aspects of spring performance, but also how to test, measure, and communicate about performance.
>
> **[0:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/performance-tuning-in-spring?u=76281980&t=19)** We will start with a breakdown of the foundations of spring performance so that we can understand the complicated landscape that we work within.
>
> **[0:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/performance-tuning-in-spring?u=76281980&t=28)** Then we will learn about specific tools, techniques, and technical hot topics specific to Java and the spring project.
>
> **[0:36](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/performance-tuning-in-spring?u=76281980&t=36)** We will wrap up our work with a discussion of essential everyday tools and practices that a spring developer can adopt in order to make a comfortable habit out of performance engineering.
>
> **[0:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/performance-tuning-in-spring?u=76281980&t=48)** I am Kathy Flint, and I've been building software professionally for 25 years, and working with spring in enterprise settings since 2005.
>
> **[0:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/performance-tuning-in-spring?u=76281980&t=58)** I believe that when it comes to spring performance engineering success is achieved not by a linear approach to isolated metrics, but rather by mastering what can feel like a bewildering matrix of gains and trade-offs.
>
> **[1:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/performance-tuning-in-spring?u=76281980&t=72)** In this course, I will break down the essentials of spring performance engineering into manageable topics so that the learner is empowered to approach a variety of real world situations with confidence and clarity.
>
> **[1:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/performance-tuning-in-spring?u=76281980&t=86)** Please join my LinkedIn Learning course to increase your confidence and fluency with spring related performance.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [kathy] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is a survey course in spring performance tuning.
>
> **[0:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/what-you-should-know?u=76281980&t=4)** To get the most out of this course, you will need a fluency with Java 8 and the Core Spring framework, including Spring Boot.
>
> **[0:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/what-you-should-know?u=76281980&t=11)** You will benefit from a basic knowledge of JDBC connectivity, aspect-oriented programming, and the Java Virtual Machine.
>
> **[0:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/what-you-should-know?u=76281980&t=19)** Familiarity with common web and API application patterns and architectures will also be useful.
>
> **[0:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/what-you-should-know?u=76281980&t=27)** In order to interact with the hands-on project exercise files, you will need to be able to clone a git repository.
>
> **[0:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/what-you-should-know?u=76281980&t=33)** Also required are the abilities to compile and run a Maven-based spring application in a Java friendly, integrated development environment, such as IntelliJ, NetBeans or Eclipse.
>
> **[0:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/what-you-should-know?u=76281980&t=46)** We will present our code demonstrations using IntelliJ.
>
> **[0:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/what-you-should-know?u=76281980&t=50)** However, you can have success with any major Java-based IDE.

> [!info]- Semantic Content
>
> **Env Vars:** jdbc (1), api (1), ide (1)
> **Tools:** intellij (2)
> **CLI Commands:** git (1)
> **Versions:** java 8 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files for this course are stored on GitHub.
>
> **[0:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=3)** There is one branch, Main, that holds the two spring demo applications that we will use for our lessons.
>
> **[0:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=11)** This project may be forked at will allowing you to experiment and practice further with any portion of these lessons as you wish.
>
> **[0:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=19)** You can make your own fork through the GitHub user interface.
>
> **[0:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=24)** To work with this Java project, there are multiple integrated development environments that you can choose.
>
> **[0:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=30)** By cloning or downloading the project files at your command line, you will be prepared to open the project in any IDE that you choose.
>
> **[0:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=38)** Your IDE likely has a specific way to clone a GitHub repository from within the user interface.
>
> **[0:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=46)** And this will vary by environment.
>
> **[0:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=48)** And also by your preferred GitHub authentication mechanism.
>
> **[0:54](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=54)** You can also run a clone from the command line.
>
> **[0:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=58)** Once you have the project files on your local development system, you can proceed to open, compile, and run the Maven based spring boot project in your IDE.
>
> **[1:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=67)** Again, these exact steps will vary depending on your IDE.
>
> **[1:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-the-exercise-files?u=76281980&t=72)** The README file at the root directory of your GitHub repository gives instructions for intelligent procedures.

> [!info]- Semantic Content
>
> **Tools:** github (5), command line (2)
> **Env Vars:** ide (4), readme (1)
> **Code Keywords:** interface (2)
> **CLI Commands:** make (1)
> **Documentation:** the readme (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### A Spring developer’s toolkit
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=0)** - [Instructor] In this course, we will learn about various aspects of Spring Performance.
>
> **[0:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=4)** And in our studies, we will cover several valuable measuring and monitoring tools.
>
> **[0:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=10)** There is every reason that any Spring developer can have at their fingertips, on their workstation, all the tools and capabilities that we will cover in this course.
>
> **[0:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=20)** So in this lesson, we're going to review those tools, give a quick overview of their usage and give you some ideas for how to configure your local laptop in order to have them accessible and convenient.
>
> **[0:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=32)** VisualVM is a handy and popular JVM profiler.
>
> **[0:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=37)** It's bundled with the JDK through Java 8.
>
> **[0:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=40)** After Java 8, you can leverage it as a standalone download at visualvm.[github.io](https://github.io), that is where you can get the download for this tool.
>
> **[0:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=50)** Basically in order to install and use this tool, you download the compressed package, extract it on your system and run the executable.
>
> **[0:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=59)** Once you have it running, you can see all of the live Java applications that are running on your workstation, including whatever application you're developing and testing on.
>
> **[1:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=69)** Java Flight Recorder is another tool in the JVM profiling universe.
>
> **[1:14](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=74)** It is available both from open JDK and also from Oracle.
>
> **[1:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=78)** Java Flight Recorder is bundled as a component of JDK Mission Control.
>
> **[1:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=84)** It's a handy utility for event capture and visualization.
>
> **[1:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=88)** In our lesson, we will use it to capture startup events and see nice visualizations of our demo application's startup details.
>
> **[1:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=97)** Glowroot is another tool that we'll use.
>
> **[1:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=99)** Glowroot is a lightweight, open-source Java Application Performance Monitor tool.
>
> **[1:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=105)** We'll use it for transaction reporting, trend reporting and show some instrumentation capabilities of Glowroot.
>
> **[1:52](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=112)** It's a great tool.
>
> **[1:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=113)** It's open-source, easy to run.
>
> **[1:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=115)** All you need to do to use it is put a javaagent VM parameter on your application that you're developing.
>
> **[2:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=123)** Then once you start up, all of your application's metrics are not only captured and reported in Glowroot, but maintained over time.
>
> **[2:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=130)** Glowroot is backed by a database that will remember all of your development work over time.
>
> **[2:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=135)** And finally Prometheus is another tool that we will use.
>
> **[2:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=138)** It's an open-source Java Application Performance Monitor in the same category of tools that Glowroot belongs.
>
> **[2:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=147)** It has some different capabilities.
>
> **[2:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=148)** We'll use it in our lessons to capture Spring Boot actuator metrics and observe those trending over time.
>
> **[2:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=155)** It's also open-source, easy to run.
>
> **[2:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=157)** You can get it at [prometheus.io](https://prometheus.io) and it's basic usage requires a configuration file.
>
> **[2:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=164)** And once you set up Prometheus to look for your application to be running, then it will automatically detect your application and interact it, with it from there.
>
> **[2:54](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=174)** Let me show you just a little bit about how I have my workstation set up.
>
> **[2:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=178)** I have all 4 of these measuring and monitoring tools in a performance utiles directory in my laptop.
>
> **[3:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=188)** They all come in as compressed JAR files.
>
> **[3:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=190)** I extract them here.
>
> **[3:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=191)** So they're all locally in one same place.
>
> **[3:14](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=194)** Locally, I use IntelliJ.
>
> **[3:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=196)** And so one of the things I like to do is set up each of these tools as an external tool on my IntelliJ tool bar, that looks something like this.
>
> **[3:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=205)** In IntelliJ, you can go to File, Settings, External Tools.
>
> **[3:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=211)** You can add a tool here.
>
> **[3:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=213)** Let's just for example, add Prometheus.
>
> **[3:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=215)** (keyboard clacks) Simply browse for it.
>
> **[3:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=221)** Here's the executable, enter it.
>
> **[3:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=225)** And then I can quickly from my toolbar, access Prometheus and open it up.
>
> **[3:49](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=229)** When I want to leverage it to gather some statistics on my application.
>
> **[3:54](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=234)** Each of these tools have additional plugins for the various IDEs.
>
> **[3:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=238)** They're different for every IDE.
>
> **[4:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=240)** And so I strongly encourage you to explore the capabilities that are available in your specific IDE, so that you have them at your fingertips.
>
> **[4:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/a-spring-developer-s-toolkit-14391946?u=76281980&t=249)** So that performance monitoring becomes second nature and easy for you.

> [!info]- Semantic Content
>
> **Env Vars:** jdk (3), jvm (2), ide (2), jar (1)
> **Prerequisites:** set up (3), configure (1), install (1)
> **Tools:** intellij (3), github (1)
> **Code Keywords:** let (2), this. (1)
> **URLs:** [github.io](https://github.io) (1), [prometheus.io](https://prometheus.io) (1)
> **Versions:** java 8 (2)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)


### 1. Foundations of Spring Performance

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding performance
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=0)** - [Instructor] How does your application perform?
>
> **[0:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=3)** It is such a simple question and an intuitive concept.
>
> **[0:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=8)** So why is it such a challenging aspect of our work as Spring developers?
>
> **[0:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=13)** The key to effective performance tuning in a Spring-based application is to understand the underlying complexity of this question.
>
> **[0:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=22)** In this video, we start to deconstruct it, to break it down so that we can see why it is indeed such a challenge.
>
> **[0:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=29)** This is the only way to answer it successfully.
>
> **[0:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=32)** It is only with this type of understanding that you can take systematic steps to improve your skills and to improve your application.
>
> **[0:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=41)** So that eventually this question, "How does your application perform?"
>
> **[0:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=45)** is one that you are prepared to answer confidently and accurately whenever it might come up.
>
> **[0:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=51)** The first thing to understand is that as a Spring developer, it is extremely likely that you have direct influence only over a small portion of your application.
>
> **[1:02](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=62)** The green parts of this diagram show the runtime environments that a typical Spring developer manages.
>
> **[1:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=69)** You'll likely spend a good portion of your day inside the Java components that make up your project.
>
> **[1:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=76)** One way that you can increase your fluency is to understand how to manage and measure the runtime JVM performance of your Java Spring project.
>
> **[1:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=86)** Remember, every Spring-based application is a Java application.
>
> **[1:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=91)** So it is important for a Spring developer to understand the basics of how JVM performance works and how the Spring framework may or may not impact the performance of the JVM.
>
> **[1:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=103)** A proficiency with plain Vanilla, JVM profiling, and runtime parameters is an indispensable and often overlooked part of a Spring developer's toolkit.
>
> **[1:54](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=114)** Spring also provides internal performance reporting metrics that allow a developer to gain more Spring specific insights into their application.
>
> **[2:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=124)** All of these topics we will address in other portions of this course.
>
> **[2:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=128)** Now the large majority of Spring-based applications are also composed of multiple connected systems whose internal performance you have no control over, or likely even visibility into.
>
> **[2:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=142)** This is by design really, since one strong emphasis of the Spring framework itself is to facilitate, decouple component interactions.
>
> **[2:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=153)** The green outline parts of our diagram show elements, such as databases, APIs, and messaging frameworks, whose performance you depend on, must measure and must design toward in order to make your part of the application as resilient as possible.
>
> **[2:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=170)** The name of the game here, what you must be able to do, and what other portions of this course will cover is to measure and make informed runtime configurations based on the performance you can anticipate from the systems that you depend on.
>
> **[3:06](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=186)** The connecting lines and gray parts of the diagram illustrate the virtual and physical infrastructure that your application is deployed on, and the networks that you communicate over.
>
> **[3:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=197)** Here, again, a Spring developer often has little to no control over these parts of the system.
>
> **[3:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=203)** In many enterprise workflows, a developer's visibility drops off sharply when it comes to really even knowing much about the host of your application.
>
> **[3:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=212)** It's true that one of the cheapest and easiest ways to boost performance of a Spring application is to boost the computing resources that host it.
>
> **[3:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=220)** Also, sometimes this is not so easy given the complexity of shared hosting environments, et cetera.
>
> **[3:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=228)** So when it comes to this part, the best defense against any deployment situation is to know what your application needs in terms of computing resources, so that you can communicate clearly to the other teams and decision makers that are responsible for that part of your system.
>
> **[4:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=244)** Now, this aspect of deployment uncertainty, taken together with all the other complexities of a Spring-based application, point to why an accurate and holistic understanding of your application's performance profile is the ultimate goal of any Spring developer.
>
> **[4:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=260)** When you have that information, you can explain it, you can improve it, and you can continue to extend the resilience of your application over its entire life cycle.
>
> **[4:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=270)** A proactive practice of performance profiling will allow you to meet the challenges of not only predictable growth and feature extensions, but also unpredictable stress conditions or deployment configurations.
>
> **[4:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=284)** As this course progresses, we are going to build together practical example of a performance profile.
>
> **[4:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=291)** It is within reach for any Spring developer to understand, improve, and communicate the performance of your Spring application.
>
> **[4:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/understanding-performance?u=76281980&t=299)** Now that we have taken this important step of breaking down the complexity of the problem, please continue with me as we start building our Spring performance skills.

> [!info]- Semantic Content
>
> **Env Vars:** jvm (4)
> **CLI Commands:** make (3)
> **Code Keywords:** continue (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### JVM performance
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=0)** - [Instructor] Every Spring-based application is a Java application.
>
> **[0:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=4)** So it is essential for a Spring developer to be comfortable with the basics of how JVM performance works.
>
> **[0:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=10)** There is a lot to know.
>
> **[0:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=12)** The JVM is a complicated discipline.
>
> **[0:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=16)** At the same time, it is approachable, and even a basic knowledge about the JVM will pay many rewards in your understanding of your application.
>
> **[0:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=24)** In this video, we will examine the essentials of JVM performance.
>
> **[0:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=29)** We will cover the heap performance and CPU performance.
>
> **[0:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=34)** We will put an emphasis on the practical skills of modifying, monitoring, and reporting on these metrics.
>
> **[0:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=42)** The heap, in green there, in the diagram, holds all of our objects.
>
> **[0:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=47)** Every time you call new to make a new instance of an object in your application, it will live on the heap.
>
> **[0:54](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=54)** This is where the memory management happens that you need to care about.
>
> **[0:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=57)** The heap is where garbage collection happens.
>
> **[1:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=60)** Garbage collection is how Java reclaims the space on the heap for objects that are no longer needed by your application, and that no longer need to take up memory space.
>
> **[1:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=70)** You can influence heap behavior.
>
> **[1:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=72)** You can set max and min heap sizes to influence how your application performs on the host computer.
>
> **[1:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=79)** The other thing we're going to talk about is CPU performance.
>
> **[1:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=82)** CPU performance is the use of the host computer's processing resources to execute your Java code.
>
> **[1:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=89)** It's what's reflected in CPU performance.
>
> **[1:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=92)** There's very little as a developer that you can do to influence CPU performance, but understanding your needs and limitations will help you make informed decisions about your application design.
>
> **[1:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=103)** We are going to use a tool called VisualVM in order to get insight into our demo application, and explore heap and CPU performance.
>
> **[1:52](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=112)** VisualVM is bundled with JDK through Java 8.
>
> **[1:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=115)** It's also available as a standalone download from a GitHub-hosted site.
>
> **[2:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=120)** So let's hop in here and have a look at some actual JVM performance things.
>
> **[2:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=123)** We're going to do this by launching our demo application in a baseline mode.
>
> **[2:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=128)** And what I want you to know here is VisualVM will reflect to you every information about every Java application that's running currently on your system.
>
> **[2:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=138)** That includes VisualVM itself, of course.
>
> **[2:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=141)** That includes our IntelliJ IDE, but right here on the list, you will see it's specifically our demo application.
>
> **[2:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=150)** And when we open our demo application, the first thing we will see here in VisualVM is a overview of the application itself with a bunch of static information.
>
> **[2:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=159)** The process ID comes in handy if you ever have to kill the application for some reason manually.
>
> **[2:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=165)** This is telling us something about the JVM arguments that we've passed in.
>
> **[2:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=170)** These arguments here are specifically coming from IntelliJ.
>
> **[2:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=173)** Also, a list of your system properties that impact your runtime, you have Java, then Java vendor, JVM version, and just system-wide things like operating system and user information and such.
>
> **[3:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=190)** So that's the Static tab, actually, a wealth of resources there that you should understand, but the real interesting stuff here in VisualVM is this monitor tab.
>
> **[3:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=199)** The monitor gives us a nice quick look at the critical parts of the whole system, many of which we discussed on the slides a minute ago.
>
> **[3:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=208)** Upper left, you see CPU usage, okay, and here, you'll see that we're hardly doing anything.
>
> **[3:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=214)** Our demo app is actually computing nothing.
>
> **[3:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=217)** And so that's why our CPU usage down here is zero all the way across.
>
> **[3:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=223)** Below CPU, you can see information about the classes that are loaded.
>
> **[3:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=226)** Now these are the classes themselves, not the instances of classes.
>
> **[3:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=230)** So this tells us that our application is requiring the use of nearly 12,000 classes to do its work.
>
> **[3:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=238)** And then very closely related to this class's output is the Metaspace tab up here.
>
> **[4:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=243)** The Metaspace is not memory that we're going to discuss.
>
> **[4:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=247)** Metaspace is where your class information is held.
>
> **[4:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=251)** You can't influence the size of this.
>
> **[4:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=252)** It will grow and shrink as it wants to, according to how many classes are being loaded, and you want to see it mostly full all of the time.
>
> **[4:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=260)** That's good and normal, meaning the blue bar is up close to the orange bar, which is your maximum.
>
> **[4:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=268)** The JVM will take care of that stuff for you.
>
> **[4:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=271)** The heap here is what's interesting.
>
> **[4:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=273)** So the heap is what we discussed before, where all of your objects live, all of the instances of your objects.
>
> **[4:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=279)** A couple of things to notice here are we did not set any size information from our JVM input parameters to influence heap size, and so, the JVM picked its own size based on a percentage of what's available on your system.
>
> **[4:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=296)** And then finally, the fourth panel here on the monitor tab is information about the threads that you have running.
>
> **[5:02](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=302)** Again, since we're doing very little work in our demo baseline application, the number of threads here are quite stable.
>
> **[5:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=308)** These are mostly Spring-initiated threads that are running here.
>
> **[5:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=312)** Okay, one more thing I'd like to show you on the heap here is a garbage collection right here in VisualVM.
>
> **[5:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=318)** You can perform a garbage collection, and watch what happens here, how performing a garbage collection manually drives down the references on the heap to classes that are no longer needed.
>
> **[5:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=330)** And it also allows the JVM to drop the size of the heap down here to 100 megs, because it no longer feels that it needs all 300 of those megs to accommodate yourself.
>
> **[5:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=340)** Let's have a look at this Threads tab.
>
> **[5:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=342)** This Threads tab will show us details of all of these 20 threads here that we see in this panel.
>
> **[5:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=348)** And it gives us information about the state of all of the threads that are supporting the application.
>
> **[5:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=353)** Finally, the Sampler tab, we'll have a look at this in a minute, allows us to get more detail, that information about our CPO and our memory.
>
> **[6:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=361)** Now let's have a little more fun with this, that we've had an overview of VisualVM, and let's stop our application, and let's start it in a different mode, which I've called VisualVM here in Application Properties.
>
> **[6:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=375)** And let's also add to our JVM runtime indications of how big we want that heap to be.
>
> **[6:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=381)** We can set that in our application itself, and we're going to do that here.
>
> **[6:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=385)** We're going to set a max size of 100 meg and a min size of 100 also.
>
> **[6:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=392)** It's very common to see, especially in production systems, that you set your max and your min to be the same.
>
> **[6:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=399)** Let's see, OK here.
>
> **[6:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=401)** Let's rerun our application.
>
> **[6:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=403)** VisualVM will, did you see that flash up there, will automatically pull in a running application.
>
> **[6:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=410)** First of all, in the Overview tab, you can see these additional arguments that we added.
>
> **[6:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=415)** Just a moment to go.
>
> **[6:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=416)** On the Monitor tab, now, we're actually showing some interesting things.
>
> **[7:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=420)** We've got some threads running, doing some sort of pretend work there in the demo application.
>
> **[7:06](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=426)** And we've got things being put up and down on the heap here that you can get a little more sense of what a real application would look like.
>
> **[7:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=433)** We can perform a garbage collection here.
>
> **[7:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=435)** But now notice that even though we collected a little bit of memory, the heap size remained the same because of the way we influenced it at the JVM input side.
>
> **[7:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=447)** Let's have a look here at our Threads tab, though.
>
> **[7:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=449)** This is really what you want to see.
>
> **[7:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=452)** On our threads now, we have some threads that our application has self-initiated.
>
> **[7:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=459)** This gives you a better indication of, in real life, how you can see the threads that you create in your application, and surface them here in VisualVM.
>
> **[7:49](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=469)** This button allowed me to see the histogram for the threads over all time, so you can see the life cycle of the threads in our demo application.
>
> **[7:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=478)** Also, we can have a very clear look at what's happening on our heap space.
>
> **[8:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=483)** What's on the heap, what's on the heap by thread, same thing with CPU, what's happening in the CPU, and what's happening in the CPU by thread.
>
> **[8:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=492)** So that's a little bit of information about VisualVM, how to monitor the health of your Java application runtime, and how to monitor your application at runtime using VisualVM.
>
> **[8:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=505)** There's so much more to learn here, but with the fluency on these basics of JVM performance, it's within reach for any Spring developer to understand and improve the performance of your Spring application.
>
> **[8:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/jvm-performance?u=76281980&t=517)** Now that we've taken the important step of breaking down the complexity of the problem, please continue with me as we start building our Spring performance skills.

> [!info]- Semantic Content
>
> **Env Vars:** jvm (14), cpu (12), jdk (1), ide (1), cpo (1)
> **Code Keywords:** let (9), static (2), finally, (2), this. (1), this, (1)
> **Definitions:** is a  (5)
> **Tools:** intellij (2), github (1)
> **CLI Commands:** make (2)
> **Cross-References:** we discussed (2)
> **Versions:** java 8 (1)
> **Speakers:** - [instructor] (1)

#### Transaction performance
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=0)** - [Instructor] As spring developers, we code and we test and we deliver Java applications that usually exist only as part of a larger distributed system.
>
> **[0:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=10)** Application runtime monitoring is a class of monitoring that provides a whole system view of your application performance.
>
> **[0:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=18)** Through application runtime monitoring, you can get insights into the transactions between your Java application and the other external systems that you depend on in order to deliver your results.
>
> **[0:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=32)** These transactions are things like HTTP requests to APIs, database performances, other service call, like to messaging platforms.
>
> **[0:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=42)** And also alerting is another feature of application runtime monitoring frameworks.
>
> **[0:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=48)** In this lesson, we're going to have a look at a specific APM solution called Glowroot.
>
> **[0:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=53)** Glowroot is an open source APM.
>
> **[0:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=56)** It is easy to run locally.
>
> **[0:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=57)** And so it's a nice learning tool for getting to know about the possibilities for APM monitoring and what you can learn from them about your application.
>
> **[1:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=67)** We will go now and do a demonstration of our application, and we're going to have a look at some of the features and functionalities using Glowroot to get insight into our performance.
>
> **[1:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=80)** First of all, in order to configure Glowroot to work with your local application, really quite simple, you need to download the tool and install it, which we're not going to cover here.
>
> **[1:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=90)** But the thing we are going to cover is once you get it installed, you need to add to your virtual machine parameters, a path to the Glowroot executable.
>
> **[1:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=101)** So that looks like a Java agent, JVM parameter, and simply the path to Glowroot will come.
>
> **[1:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=110)** You'll download it, unzip it, and you'll get a jar and you need to put the path to that jar file here in your VM.
>
> **[1:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=119)** And then when you start up your application, Glowroot will be able to look at it and monitor it.
>
> **[2:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=125)** And that looks something like this.
>
> **[2:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=128)** So without more discussion about it, let's just have a dive right into Glowroot and have a look at the things that we can learn from it.
>
> **[2:14](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=134)** So Glowroot is running as it's a self-standing web application.
>
> **[2:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=138)** It typically runs on port 4000.
>
> **[2:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=141)** And because we put in those JVM parameters, now Glowroot has insight into our running Java application and can give us lots of good information.
>
> **[2:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=151)** Let's start and just have a look at what Glowroot can tell us.
>
> **[2:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=154)** So Glowroot is divided, as many APMs are, into kind of transactions, errors, the Java virtual machine runtime, and some reporting tools.
>
> **[2:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=164)** Let's focus right here on the transactions tab, because this is where a lot of the information you want will be at.
>
> **[2:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=171)** Glowroot does have a separation between startup transactions and web transactions.
>
> **[2:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=177)** We're going to have a look at our web transactions.
>
> **[2:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=179)** And what we see here on the left are several of the endpoints that our client demo application provides.
>
> **[3:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=188)** And to set up this lesson, I have hit a number of these endpoints.
>
> **[3:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=191)** So we can jump in here and look at specifically what Glowroot can tell us about the performance of our application.
>
> **[3:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=198)** Let's start with this quoter endpoint.
>
> **[3:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=200)** So what we can learn from looking at this number is how our application performed when we hit this quoter endpoint.
>
> **[3:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=210)** And what we see is that it took five seconds.
>
> **[3:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=213)** That's a pretty long response time.
>
> **[3:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=215)** And it also tells us that our activity on this endpoint was divided between an HTTP call, some application logging and other.
>
> **[3:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=226)** Well, the first thing you might notice is, what is all that whole five seconds of other all about?
>
> **[3:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=231)** Well, if you didn't know this, you would kind of go in here and look for yourself.
>
> **[3:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=235)** But we know, because we know the code, that this quoter endpoint is calling out to a service.
>
> **[4:02](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=242)** And then we have manufactured a delay here by putting in a five second thread sleep.
>
> **[4:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=248)** And the reason we did that is so that I could show to you how it will report to us here in Glowroot, that we spent five whole seconds doing something that it wasn't sure what, but it's telling us all about it.
>
> **[4:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=259)** So immediately this breakdown here of the activity is very valuable to us.
>
> **[4:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=263)** It also here in this quoter tells us about the service call that we did call telling us that the average response time there is only 137 milliseconds.
>
> **[4:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=272)** So we know that the delay there is much different.
>
> **[4:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=275)** Now let's have a look at a different type of endpoint, which is long wait.
>
> **[4:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=279)** The response times here are also five seconds, but what this tells us is that that entire five seconds almost was spent with the HTTP client waiting for a response.
>
> **[4:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=290)** Again, we can see why that is.
>
> **[4:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=293)** Long wait calls our internal demo API, and that demo API we happened to know also introduces a five second delay in its response time.
>
> **[5:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=304)** We can't know on the front end that that happened, but what we can see is, my goodness, the service took a long time to respond.
>
> **[5:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=310)** There's something going on over there that we should maybe understand.
>
> **[5:14](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=314)** This is a good spot to have a look at the slow traces section.
>
> **[5:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=318)** The slow traces will give us more details about what was going on in those five seconds.
>
> **[5:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=327)** Now let's look at another endpoint, the query endpoint.
>
> **[5:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=330)** This is a nice one, because what I can show you here are a couple things.
>
> **[5:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=334)** This one has a nice breakdown of a number of types of activities.
>
> **[5:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=338)** We've got a JDBC connection, some logging, and then some other activity here, which is an introduced wait time.
>
> **[5:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=344)** But the thing I want to show you here is queries.
>
> **[5:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=347)** You can see a breakdown of queries every time this endpoint is called.
>
> **[5:54](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=354)** Glowroot will keep track of the queries, keep track of how many times it's been called and the average performance of that database query.
>
> **[6:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=360)** So this is extremely valuable information for diagnosing slow query performance.
>
> **[6:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=365)** Let me now show you this oops endpoint.
>
> **[6:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=367)** Not a whole lot to see here, we see a pretty fast response time on this one, but most of the time spent in the spring controller.
>
> **[6:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=375)** That's interesting.
>
> **[6:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=377)** Let's go over here and look at the errors tab.
>
> **[6:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=378)** This is a good place to demonstrate this tab to you.
>
> **[6:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=382)** We have with the oops endpoint a couple of errors.
>
> **[6:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=385)** And again, I can show you why that is.
>
> **[6:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=388)** That is because here on our oops endpoint, we're just throwing a new runtime exception just so we can see how Glowroot will report that back out to us.
>
> **[6:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=397)** Oops shows two errors.
>
> **[6:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=399)** We can trace these errors and get information about them and actually trace in and see details about that.
>
> **[6:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=410)** A couple more things I'll show you here in the Glowroot options are the JVM section gives us a lot of information about the JVM.
>
> **[6:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=418)** We have covered this material in a previous lesson that some of this is the same kind of things you will see in J console or visual VM and Glowroot will also surface JVM statistics here.
>
> **[7:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=430)** And then the final thing I want to point out to you here in Glowroot is the capability to do reporting.
>
> **[7:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=436)** Very useful when needing to give some type of feedback to your application stakeholders.
>
> **[7:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=442)** For instance, we can get a transaction count on our web transactions.
>
> **[7:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=447)** Let's give it no filter.
>
> **[7:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=449)** Let's make this hourly.
>
> **[7:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=451)** Let's look over the past couple of days for our report.
>
> **[7:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=455)** Now this is interesting. You see 240 transactions.
>
> **[7:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=460)** When we dig a look into what some of these transactions are, we can actually see something interesting here, which is the Prometheus tool, which we've looked at in other lessons, is making calls also into our client demo application.
>
> **[7:54](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=474)** And those are also reflecting here in Glowroot.
>
> **[8:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=481)** One final thing I'll show you is here on the configuration tab.
>
> **[8:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=484)** When you're logged in as an administrator, there are a number of configurations you can make.
>
> **[8:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=489)** For instance, you can do some configurations around spring and some other JDBC configurations will give you a bunch of options that you can talk about.
>
> **[8:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=500)** Connection pool leaks, connection pool leak details, some interesting items that you might be interested in if you're concerned with looking at connection information.
>
> **[8:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=508)** And then finally you can add instrumentation, which I'm not going to demonstrate to you now, but you can add additional instrumentation to methods that you may be interested in getting more detail about their performance.
>
> **[8:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=520)** So this is a bit about Glowroot.
>
> **[8:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/transaction-performance?u=76281980&t=521)** And Glowroot represents a class of application performance monitoring platforms that are essential to being able to get insight into the performance of your spring application.

> [!info]- Semantic Content
>
> **Env Vars:** jvm (5), http (3), apm (3), api (2), jdbc (2)
> **Code Keywords:** let (11), this. (1), self (1), this, (1)
> **Definitions:** is a  (5), is an  (2), is called (1)
> **CLI Commands:** make (2), unzip (1)
> **Prerequisites:** configure (1), install (1), set up (1)
> **Analogies:** for instance (2)
> **Ports:** port 4000 (1)
> **Exercise Files:** download the (1)

#### Challenge: JVM performance tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-jvm-performance-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-jvm-performance-tuning?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-jvm-performance-tuning?u=76281980&t=5)** - [Instructor] Are you ready to get your hands dirty?
>
> **[0:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-jvm-performance-tuning?u=76281980&t=7)** In this challenge, you will get a feel for experiencing and then resolving a Java Virtual Machine out of memory error.
>
> **[0:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-jvm-performance-tuning?u=76281980&t=15)** As we observed in a previous video, the DemoClient application has some bad JVM heat behaviors.
>
> **[0:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-jvm-performance-tuning?u=76281980&t=23)** Your challenge is in two parts.
>
> **[0:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-jvm-performance-tuning?u=76281980&t=26)** First, take advantage of that bed behavior to force an OutOfMemory runtime error to be thrown by the DemoClient application, then fix the error.
>
> **[0:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-jvm-performance-tuning?u=76281980&t=38)** For tips and hints and complete instructions, you can see the repository file called CHALLENGE-JVM.
>
> **[0:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-jvm-performance-tuning?u=76281980&t=45)** It can be found at the Root Directory of our Demo Repository under CHALLENGE-JVM, and you will find in that file instructions and hints about how to be successful at this challenge.
>
> **[0:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-jvm-performance-tuning?u=76281980&t=59)** Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** jvm (3), challenge (2)
> **CLI Commands:** find (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: JVM performance tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=0)** - [Instructor] Let us now solve our JVM Performance Challenge together.
>
> **[0:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=9)** As a reminder, you can see the details of this challenge in the repository read me file, in a file called Challenge-JVM.
>
> **[0:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=16)** So the first thing we want to do to solve this problem is set our DemoClientApplication into the correct modality for running.
>
> **[0:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=25)** We have a special settings here in application properties file called challenge-jvm.
>
> **[0:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=33)** Make sure your demo.mode property is set to that value.
>
> **[0:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=37)** The second thing we want to do is we want to edit our runtime configurations for our application in our IDE.
>
> **[0:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=45)** In my case, we're using IntelliJ.
>
> **[0:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=48)** So what we want to do here is we're going to set a maximum heap size and a minimum heap size using the Java runtime parameters,
>
> **[0:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=57)** - Xmx for max and -XMs for a minimum heap size.
>
> **[1:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=67)** We're just setting them to be the same.
>
> **[1:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=69)** In our case, this makes it a little simpler to watch and see what's going on.
>
> **[1:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=72)** I have also edit a couple other parameters to my runtime, which is instructing Java to dump a heap dump in the case that we hit an OutOfMemoryError.
>
> **[1:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=84)** Since I know that this is going to occur, that's a convenience for me and I can use the HeapDumpOutOfMemoryError in order to force that behavior by the JVM.
>
> **[1:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=94)** So let's apply these things.
>
> **[1:36](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=96)** And with these setups being done, and I have an unrecognized option here.
>
> **[1:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=106)** Doesn't like X Java, lowercase ms, Xms we'll solve that problem.
>
> **[1:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=115)** Okay, let's give this another run.
>
> **[2:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=120)** And we're often running.
>
> **[2:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=121)** So now let us go over to a view of VisualVM.
>
> **[2:06](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=126)** Let's pull up our monitor of our running application, give this a few moments and we are going to run out of heap size right here in the monitor on the upper right table.
>
> **[2:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=138)** We can keep track of our heap and watch what's happening.
>
> **[2:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=141)** As our CPU activity goes up, that means our threads are doing things.
>
> **[2:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=146)** And we're going to run out of heap space in just a minute.
>
> **[2:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=152)** There we go, okay.
>
> **[2:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=154)** I don't even like to see this when I'm doing it on purpose, but there we got our error.
>
> **[2:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=158)** So let's go ahead and stop our application and let's figure out what to do now.
>
> **[2:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=163)** Okay, what we can do here, there's two things that we can do.
>
> **[2:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=167)** Over here in VisualVM, we would like to be able to snag a heap dump, and sometimes you can get a hold of it in time, but in this case we cannot.
>
> **[2:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=176)** So instead, we're going to open the heap dump that we asked our Java VM to throw, and that will look like this one right here.
>
> **[3:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=188)** Let's open this dump, and this is going to show us everything we need to know to trace back through the memory and to solve it.
>
> **[3:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=196)** So you'll know that this heap dumpe from the JVM tells us actually, which exact thread was the final straw that caused us to run out of heat memory.
>
> **[3:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=207)** Let's have a look at our object detail here.
>
> **[3:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=210)** Now, right here at the top, glaringly we can see that we have a bunch of doubles here, two and a half million of them taking 53% of our memory size.
>
> **[3:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=222)** Immediately, that's going to tell you that very likely this is your culprit, and this is the neat thing you can do here with a heat dump.
>
> **[3:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=231)** We can drill into one of these instances of double under the references section of the entry.
>
> **[4:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=240)** And we can look and find exactly where our reference to this object is occurring.
>
> **[4:06](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=246)** This is the smoking gun that will tell us that we can go now into here into our source code and actually track down the problem.
>
> **[4:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=255)** So I will tell you exactly what's happening here.
>
> **[4:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=258)** We have a reference to a heapleaker object.
>
> **[4:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=263)** We have a condition here when this is true, which it is in this case, we're initializing a big static value in that object.
>
> **[4:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=273)** And then we're immediately setting our local resource to null.
>
> **[4:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=277)** So normally you would think that this object will get garbage collected, however, because this list here is static, that static memory stays on the heap forever even after we dereference the object that holds it.
>
> **[4:52](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=292)** So all we're going to do here is we're going to take away that static modifier on this object, and then when that happens, even though we initialize this list, which will no longer be static, once we nullify the reference, then we will be able to free that memory up.
>
> **[5:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=312)** And then we will not in our case run out of memory.
>
> **[5:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=315)** So let's run this thing again and see if we get a changed behavior.
>
> **[5:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=323)** Okay, now we did jump up high on our memory usage, but since we no longer have that references static, immediately, when we dereference that instance, we freed our memory back upon the heap, and now we have heap space available for our threads to do all of the things that they're going to do.
>
> **[5:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-jvm-performance-tuning?u=76281980&t=342)** So that's an example of a heap leak, how to solve it, how to navigate your heapdump in order to isolate a problem, and that solves our challenge together, thank you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), static (6), case, (3), throw (1)
> **Env Vars:** jvm (4), ide (1), cpu (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1), - xmx (1)
> **Tools:** intellij (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** source code (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Spring Performance Monitoring

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Configuring Spring Actuator with Spring Boot
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=0)** - [Instructor] Spring Actuator is a very important monitoring tool and useful for production level operational success for any spring based project.
>
> **[0:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=9)** Spring Actuator is a utility for monitoring and managing the runtime operations of your Spring Boot application.
>
> **[0:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=16)** In this video, we're going to talk about configuration of the actuator in a real project, and also take a quick overview of the capabilities that actuator provides.
>
> **[0:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=27)** Let's jump into a real life demo application and get accustomed to some of the capabilities that Spring Actuator gives to us.
>
> **[0:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=34)** This is a demo project available to you in the project repository.
>
> **[0:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=39)** We're looking at the demo API project.
>
> **[0:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=42)** Let's close that Explorer to give us a little more real estate.
>
> **[0:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=45)** And the critical thing here, really, almost the only thing you need to get Spring Boot Actuator going in your project is this dependency, in your dependency configuration file.
>
> **[0:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=58)** This is a Maven project and so we're in a pom.xml file, it could be different if you're using cradle or some other build manager.
>
> **[1:06](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=66)** At any rate, the dependency you need is Spring Boot Starter Actuator.
>
> **[1:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=70)** And once that is in here, technically that is all you have to do, but we're going to do one other thing for convenience here.
>
> **[1:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=78)** We're going to add an attribute here into our application properties, exposing all of the capabilities through a web browser, and that will make it easy for me to demo to you what's possible.
>
> **[1:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=88)** So with those two things having been done, our dependency in pom.xml and one property here, the end points, web exposure property in our application properties.
>
> **[1:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=100)** We're going to start our demo and it looks like we're started up here.
>
> **[1:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=103)** So now let's first look, this is kind of a demonstration end point in our API, but what I really want to show you here, is this new endpoint that actuator gives to us, now that it is configured within our application.
>
> **[1:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=119)** Please notice here in your browser, all of these different categories of information that are now surfaced to you, having done very little setup work to start with.
>
> **[2:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=129)** For example, these are all categories of information that you can pull on the runtime of your application.
>
> **[2:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=136)** For example, the beans that are currently configured in your application context, a complete listing that is updated periodically to reflect their absolute latest runtime information.
>
> **[2:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=148)** For example, this web end point discovery bean is the one that's enabling us to browse the actuator stuff right here in our browser.
>
> **[2:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=158)** Let's have a look at another example.
>
> **[2:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=160)** Oh, well the health check is simply telling us that our application is up and running.
>
> **[2:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=166)** Environment information tells us all about the properties active in our current application.
>
> **[2:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=173)** So a lot of interesting stuff that you get for very little configuration work.
>
> **[2:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=177)** Now let's pause and have a look at some of the more detailed bits of configuration information that you ought to know.
>
> **[3:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=184)** So the by virtue of putting this dependency in your build configuration, spring will automatically enable all of the actuator end points for you with the exception of one.
>
> **[3:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=198)** And that one is a shutdown endpoint.
>
> **[3:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=201)** So let's do something fun here and let's go ahead and enable that shutdown endpoint.
>
> **[3:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=206)** And we're going to do that by adding a new property here, management end point shut down enabled equals true.
>
> **[3:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=219)** This is kind of clearly a security sort of capability that spring does not want to enable for you by default.
>
> **[3:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=226)** But when we activate it here in the properties file, we will get it.
>
> **[3:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=231)** Now let's do something else.
>
> **[3:52](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=232)** Let's turn off the default enablement of all of our end points.
>
> **[3:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=238)** Let's say that all of the end points are enabled by the false is false, but let's only enable the shutdown end point and let's for fun enable the health end point.
>
> **[4:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=251)** Now we're still exposing them all to the web, but we've turned them all off by default and we've enabled two specific end points.
>
> **[4:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=261)** So let's start this up again and quickly, you will see the difference that the simple configurations make here in our browser view.
>
> **[4:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=270)** See, now we have health.
>
> **[4:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=272)** We have shut down.
>
> **[4:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=273)** The sub path of health is a part of health.
>
> **[4:36](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=276)** And then we have the actuator itself which is what we're looking at.
>
> **[4:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=280)** So that's an example of how to turn off or rather disable certain actuator end points and enable them on an individual basis as you need them.
>
> **[4:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=291)** Now, the takeaway with this is that when an endpoint is disabled, it is completely removed from the application context.
>
> **[4:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=299)** So if you really don't need some of these end points, disabling them as a good idea, it just helps your application run a little leaner in terms of all the things that are loaded into that context.
>
> **[5:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=309)** Now, so that's a bit about enablement.
>
> **[5:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=312)** You can turn them on by default, off by default, turn individual things on and off, as you wish.
>
> **[5:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=317)** Let's talk about exposure because this is a very important part.
>
> **[5:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=320)** So Spring Actuator has the ability to expose end points over HTTP, which we are looking at here in our browser demonstration and also over JMX.
>
> **[5:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=334)** JMX stands for Java management extensions.
>
> **[5:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=337)** And by exposing this information to JMX framework, spring actuator allows you to interact with it through a Java management console.
>
> **[5:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=347)** By default, when you configure actuator into your Spring Boot project, almost all of the enabled points are exposed over JMX and almost all of them are not exposed over HTTP.
>
> **[6:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=363)** That is why at the beginning of this demo, we had to put this include line in here to say yes, please give me all of them over the web so that I can browse them in a browser that helps her demo along a bit.
>
> **[6:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=376)** So that's an important thing to note.
>
> **[6:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=377)** You can also exclude certain end points from exposure to either modality as you wish.
>
> **[6:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=385)** Okay, so that's a bit about enablement.
>
> **[6:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=387)** That's a bit about exposure, HTTP and or JMX exposure for these different functionalities.
>
> **[6:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=394)** Security is a massive part of configuration, of course, for the actuator end points, because clearly you don't want people meddling in your application and doing things for instance, like a shutdown and unauthorized.
>
> **[6:49](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=409)** So security configuration is important.
>
> **[6:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=410)** It's outside the scope of what we can cover in this lesson, but you would configure these endpoints using spring security like you would other security considerations.
>
> **[7:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=421)** Let's wrap up this video by having a look at some additional configuration you can do with respect to this health metric.
>
> **[7:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=429)** So by default, we have our health endpoint enabled and exposed to the web and we can see a simple message telling us that our API is up and active, but there's much more you can do with health in particular.
>
> **[7:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=444)** Not surprisingly Spring Boot is all about doing things for us by default, we can add a couple of additional properties here on the health end point asking Spring Actuator to show some additional details and also show some components that are pre-configured.
>
> **[7:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=463)** So let me not try to explain that, let's just restart this and I will show you what those give us.
>
> **[7:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=471)** Again right out of the box because that's what spring is so good at doing.
>
> **[7:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=475)** So notice here with our health metrics, we have additional information, not only do we have the status of our application as a whole, as being up, but also the actuator now is reporting some automatically registered components of our application.
>
> **[8:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=493)** We have a database component, we have an H2 database configured in here to our API.
>
> **[8:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=498)** Spring notices that it's configured and is reporting us the status on that database.
>
> **[8:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=504)** It's also automatically giving us information about the disc space that we're running against on our CPU with some details there.
>
> **[8:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=512)** And the ping status is something we get automatically out of the box simply by configuring these two particular attributes on the health end point.
>
> **[8:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=521)** Now there are 16 different components that spring is capable of configuring by default.
>
> **[8:49](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=529)** If you have it wired into your spring application, things like send a mail or JMS queue or see elastic search with AWS can be automatically picked up and configured here is a component that the actuator can report in detail about the health of these by component.
>
> **[9:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/configuring-spring-actuator-with-spring-boot?u=76281980&t=550)** So that concludes our lesson about configuration and capabilities of Spring Actuator.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), default, (5), default. (2), else. (1)
> **Env Vars:** jmx (5), api (4), http (3), cpu (1), jms (1)
> **Definitions:** is a  (9), stands for (1)
> **Analogies:** for example (3), for instance (1)
> **CLI Commands:** make (2), aws (1)
> **Prerequisites:** configure (2), setup (1)
> **File Paths:** pom.xml (2)
> **Speakers:** - [instructor] (1)

#### Spring Actuator customized endpoints and health metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=0)** - [Instructor] Let's continue our exploration of Spring Boot Actuator by learning about some practical use cases that you're likely to encounter in your work as a spring developer.
>
> **[0:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=9)** Customized actuator behaviors are available by extending the Spring Boot Actuate package classes and also by taking advantage of the built-in framework capabilities.
>
> **[0:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=20)** In this lesson, we're going to do three things.
>
> **[0:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=23)** We're going to build a custom health component.
>
> **[0:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=26)** We're going to show you how to modify your runtime logger configurations in real time at runtime.
>
> **[0:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=32)** And we're going to show you how to create custom application info for additional metrics on the actuator reporting.
>
> **[0:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=40)** Let's go to our demo application and start with that custom health component.
>
> **[0:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=45)** Actually let us start by looking at the runtime actuator metrics that we're seeing right now with our demo application.
>
> **[0:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=55)** So we've got a demo API application.
>
> **[0:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=57)** It's in a running state and it is configured to show us this health information.
>
> **[1:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=65)** Reminder, we're getting there by going to the actuator directory, clicking on health and seeing this information.
>
> **[1:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=72)** So we've got at the top of roll up of our application health and then spring has automatically configured for us these three individual components that it is reporting to us detailed metrics on.
>
> **[1:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=85)** Just a quick reminder, we're seeing those because of these two specific properties in the application properties file.
>
> **[1:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=92)** The health show details property and the endpoint health show components properties.
>
> **[1:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=99)** Without those, all we would see here on the health metric is the overall status of our application, which is a composite of the three component statuses.
>
> **[1:49](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=109)** All right, so without further ado, let's build a custom component.
>
> **[1:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=113)** So we're going to build another entry here in this component list.
>
> **[1:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=117)** We're going to build a custom health component.
>
> **[2:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=120)** Now let's walk through what it takes to do this.
>
> **[2:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=124)** The first thing we need to do is create a class that implements the org.springframework boot actuate health indicator interface, like so.
>
> **[2:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=138)** And then we need to register this class as a spring component.
>
> **[2:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=144)** That's going to allow spring to scan it and hook it into the actuator framework.
>
> **[2:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=150)** Now having done that, we need to override this important health method, which is specified in this interface.
>
> **[2:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=160)** And this health method wants us to return a health object.
>
> **[2:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=164)** Let's put in our override annotation here to be clear about what we're doing.
>
> **[2:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=171)** Okay, so this health method here is the one that's going to send back the interesting data that we're going to surface over here in our actuator table.
>
> **[3:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=181)** All right, notice here that we need to return a health object from this health override that also is in the Spring Boot Actuate package and the basics here, what we need to do, we can just kind of show you quickly.
>
> **[3:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=195)** We're going to return a health object.
>
> **[3:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=197)** Let's give it a status of up.
>
> **[3:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=201)** Let's send it with details, which will allow us to see all of this interesting stuff in here.
>
> **[3:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=207)** And with detail method, wants a message key and wants a message up.
>
> **[3:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=218)** And then finally, we're going to send it to the builder.
>
> **[3:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=222)** And now when this health object is built, spring framework will know what to do with it and know how to display our information here.
>
> **[3:49](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=229)** So what we've done here is the basics.
>
> **[3:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=231)** Let's add some logic to simulate something interesting.
>
> **[3:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=236)** Let's do something fun and we're calling this a weekend health metric.
>
> **[4:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=240)** So if it's the weekend, this is just kind of a play example.
>
> **[4:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=247)** If it's the weekend, we're going to return a health status of let's call it out of service just for fun.
>
> **[4:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=256)** Let's give it a message key, and let's say yes.
>
> **[4:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=261)** And let's say build it and return it.
>
> **[4:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=265)** All right, so our message key, we have, what am I missing here?
>
> **[4:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=267)** Out of service, oh, need dot and with detail here.
>
> **[4:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=275)** That'll fix it up.
>
> **[4:36](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=276)** Okay, so what's happening here is, the message key here is playtime.
>
> **[4:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=281)** So we're going to report to spring boot actuator, whether it's play time or not.
>
> **[4:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=286)** If it's the weekend, we're going to return an out of service status for our application and we're going to say play time is yes.
>
> **[4:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=295)** When it's not the weekend, we're going to return that the status is up and it's not play time.
>
> **[5:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=300)** And we just have a utility method here giving us a silly isWeekend boolean.
>
> **[5:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=304)** So let's see, we've configured our class.
>
> **[5:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=307)** We've hooked it into spring.
>
> **[5:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=309)** And I believe that is all we need to do.
>
> **[5:14](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=314)** Application properties are set up with details.
>
> **[5:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=317)** Let's launch this and see what we have.
>
> **[5:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=321)** Relaunching it, step and rerun.
>
> **[5:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=325)** Application has started successfully.
>
> **[5:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=328)** Now we're just going to reload this health page.
>
> **[5:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=331)** And if I did this right, there is our weekend health status.
>
> **[5:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=338)** Our status is out of service because I am actually recording this on the weekend and it is play time.
>
> **[5:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=344)** These are the details of our new component.
>
> **[5:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=346)** Now this is what is interesting here.
>
> **[5:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=348)** The status of out of service has rolled up to be the overall status of the application.
>
> **[5:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=355)** Let me show you how we pulled that off.
>
> **[5:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=357)** Over here in application properties, there's a health status ordering in which we can identify which statuses should roll up to the top level overall application status.
>
> **[6:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=369)** We've indicated that we want out of service to be first in line.
>
> **[6:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=373)** And so we have an out of service and that's what bubbles up.
>
> **[6:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=377)** By default, you don't have to specify this.
>
> **[6:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=379)** By default, it will respond to downs and ups, downs bubble up as the overall status.
>
> **[6:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=384)** So there we have successfully achieved a custom health component reporting on the weekend health of the runtime.
>
> **[6:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=395)** All right, I'd like to go through a couple more things.
>
> **[6:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=398)** Another thing you can do with actuator is extend the application information.
>
> **[6:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=405)** Right now, we're not showing anything useful here on that application information metric.
>
> **[6:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=410)** This one is so easy.
>
> **[6:52](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=412)** All you need to do in application properties is put in an info property.
>
> **[6:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=417)** Let's do a couple of them, info weekend activity equals learn about spring.
>
> **[7:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=430)** That's just silly for an example, but something much more useful is to put application properties like a version number.
>
> **[7:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=437)** And here's a trick you need to know.
>
> **[7:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=439)** You can dynamically get your application version in here in a number of different ways.
>
> **[7:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=444)** We're just going to take advantage of what we can do with our pom.xml.
>
> **[7:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=448)** And we can point to some of these attributes here in the XML file and surface them right to the endpoint.
>
> **[7:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=455)** So specifically, we can point to the project version and the project name there in our application properties using the special at syntax.
>
> **[7:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=471)** So project version, app names, same way we can do that.
>
> **[8:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=480)** What was it called name there?
>
> **[8:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=481)** Okay, so those two things will get pulled from pom.xml and how to get those dynamically into this pom.xml is outside the scope of this lesson.
>
> **[8:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=491)** But let me just show you that it works.
>
> **[8:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=492)** We're going to relaunch.
>
> **[8:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=498)** Let's go back to our endpoint again.
>
> **[8:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=502)** Now we see the debug messages right here in the console.
>
> **[8:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=506)** So that's how you can dynamically change your logging configurations.
>
> **[8:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=509)** Now, when you restart this application, it will all go back to its default, but this is a good way in a production or even in a testing situation to quickly change that logging configuration by logger.
>
> **[8:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=522)** And that concludes this lesson, learning some detailed use cases of how to use actuator in your situation, how to customize it.
>
> **[8:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=530)** The sky is the limit with access to the entire Spring Boot Actuator library that you can extend and customize to your heart's desire.
>
> **[8:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/spring-actuator-customized-endpoints-and-health-metrics?u=76281980&t=538)** The sky is really the limit as to what you can influence here in your actuator output metrics.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), override (3), default, (3), this. (2), interface (2)
> **File Paths:** pom.xml (3)
> **Env Vars:** api (1), xml (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** isweekend (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)

#### Using Spring Actuator for runtime monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=0)** - In previous lessons we have learned about Spring Boot Actuator and how to use it to expose all kinds of information about the runtime state of your spring based application.
>
> **[0:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=11)** We have learned how to configure custom application health reporting, for instance.
>
> **[0:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=16)** Let's take it all one step further and learn how spring enables your spring application to interface with the state-of-the-art runtime monitoring platforms.
>
> **[0:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=27)** The key to how this works is the micrometer library.
>
> **[0:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=31)** Micrometer provides an application metrics facade that supports numerous runtime monitoring systems, such as Prometheus and DataDog, and probably 20 others or more.
>
> **[0:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=43)** Micrometer serves the purpose of providing a standardized reporting format.
>
> **[0:49](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=49)** And when spring leverages the micrometer library to publish its metrics, it is then publishing them in formats that these other runtime monitoring systems can consume and make actionable to the end user.
>
> **[1:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=61)** We are going to use in our demonstration a platform called Prometheus.
>
> **[1:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=65)** Prometheus is an application runtime monitoring tool and like many others in its class, it specializes in fine-grained and customizable event alerting.
>
> **[1:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=76)** It specializes in trending over time and in multi-application management.
>
> **[1:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=80)** So you can have a dashboard with many applications and group them in alerting groups and capture trending over time in groups of applications.
>
> **[1:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=89)** So that's the specialty Prometheus and run-time monitoring tools like it.
>
> **[1:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=93)** Before we go into our lesson, let's first talk about three important categories of metric.
>
> **[1:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=101)** One of them is a counter.
>
> **[1:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=103)** Just as you might think, a counter is a single metric.
>
> **[1:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=105)** It's a count of something.
>
> **[1:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=107)** It's a static report of a number at a given point in time.
>
> **[1:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=111)** An example of something you would use a counter for is uptime.
>
> **[1:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=115)** Like, to say how many seconds the application has been up.
>
> **[1:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=119)** A second type of metric is a gauge.
>
> **[2:02](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=122)** A gauge is a current value.
>
> **[2:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=123)** It's a snapshot value, but it's typically on a range of values with an upper bound.
>
> **[2:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=129)** So gauge metrics allow you to create graphs to show trends over time.
>
> **[2:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=133)** An example of a gauge is CPU process use.
>
> **[2:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=136)** And then finally a timer metric is, as you might think, how long something takes.
>
> **[2:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=141)** Typically though, relative to other actions in the same series.
>
> **[2:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=145)** So an example of a timer type of metric would be latency on an HTTP request, for example.
>
> **[2:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=151)** Now that we've got some of these basic terminology in mind, let's have a look at an integration of our spring application into this runtime monitoring platform called Prometheus.
>
> **[2:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=164)** First of all, let's have a look at start state.
>
> **[2:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=166)** Okay, so right now we've got our demo application running and I started it running before this lesson started.
>
> **[2:52](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=172)** And what I'd like to show you is one of these endpoints in this actuator output that we've been looking at for a bit now.
>
> **[3:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=180)** The end point we're going to look at is the metrics end point.
>
> **[3:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=183)** This end point shows all of the categories of metric that spring boot is reporting through the micrometer library in order to be consumed by a runtime platform.
>
> **[3:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=195)** The reason I'm showing you this is, is what we're going to do next is we are going to configure a custom metric to publish along with the other of these default metrics.
>
> **[3:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=205)** So let's stop our app and let's walk through how this is done.
>
> **[3:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=210)** Let us start, as we often do with the pom file.
>
> **[3:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=215)** The pom dot XML file for this Maven based application is telling us the dependence that we need to pull in.
>
> **[3:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=221)** And first of all, in order to make this work, we need to pull in a dependency on this library that I mentioned a minute ago, the IO dot micrometer library, and specifically we're pulling in the Prometheus's registry underneath this library, which has specific registry that's compatible with the Prometheus platform.
>
> **[4:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=244)** So we're pulling in this micrometer metrics facade library, and just as a reminder, we're also pulling in the spring boot actuator dependency right here.
>
> **[4:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=253)** That's why we can see these actuator metrics at all.
>
> **[4:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=257)** Okay. So that's in our pom dot XML.
>
> **[4:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=259)** We build this and all the things that we need come in.
>
> **[4:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=263)** Another thing I want to point out to you is a reminder that we are exposing all of our endpoints over the web, which is an important thing for Prometheus to work.
>
> **[4:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=273)** In particular, actually, it just needs to have the Prometheus metrics exposed, but we're exposing them all for demo purposes and so that's why we're going to be able to see what we need to see in this browser and Prometheus we'll be able to consume it.
>
> **[4:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=286)** Finally, having done those things, the path to setting up a custom metric is astonishingly simple.
>
> **[4:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=296)** We are depending here, like I mentioned before, on the IO micrometer library, and we're going to create a public class, let's call it the weekend gauge.
>
> **[5:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=307)** Now let's register this class that we scaffolded here with the spring context, using the component annotation.
>
> **[5:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=315)** Now spring will inject our dependency on the meter registry from the IO micrometer library.
>
> **[5:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=323)** And all we need to do here is set some state on this registry and we're going to set up a gauge.
>
> **[5:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=328)** Remember I talked about the three types?
>
> **[5:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=330)** The counter, the gauge, the timer.
>
> **[5:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=331)** Registry gives us a quick shortcut to set up a gauge.
>
> **[5:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=335)** We're going to use the three parameter signature of this method.
>
> **[5:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=340)** And first we will give it a name for our gauge, let's call it weekend time to... wait.
>
> **[5:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=351)** And we're going to use the tags class from our micrometer library.
>
> **[5:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=356)** We're actually going to send some tags.
>
> **[5:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=358)** So we'll send an empty tag set.
>
> **[5:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=359)** And then finally, what goes here, the number that we want to report for this particular metric, which is a countdown to the weekend here in a private class inside this gauge class.
>
> **[6:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=373)** It's just a silly, single number that tells us how long it is to the weekend.
>
> **[6:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=380)** Believe it or not, this is all we need to do.
>
> **[6:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=383)** Let's restart our app.
>
> **[6:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=385)** What do you say?
>
> **[6:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=388)** Give it a few seconds here to start up.
>
> **[6:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=392)** We are loaded.
>
> **[6:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=394)** Now, let's refresh our actuator page.
>
> **[6:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=399)** Let's go into our metrics.
>
> **[6:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=401)** And at the bottom you will see our new metric.
>
> **[6:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=406)** Let's take this a step further and let's look at the Prometheus metrics.
>
> **[6:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=411)** Now this page of a complicated looking text is the input that the Prometheus platform pulls in.
>
> **[7:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=421)** It's kind of a formatted view of all of these different metrics that Prometheus will be able to understand, again, thanks to the micrometer library.
>
> **[7:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=429)** We will see our weekend metric.
>
> **[7:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=435)** There it is.
>
> **[7:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=436)** Our weekend time to wait gauge is here and it wasn't before.
>
> **[7:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=441)** Now, just to prove this whole thing out, let's go over to Prometheus, which I happen to have running here.
>
> **[7:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=446)** Quick overview here.
>
> **[7:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=448)** We've got two targets registered here in Prometheus.
>
> **[7:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=450)** I'll give you a notice at the end of here, how this is done, but one of them is our demo API, which is up thanks to our health metric that we have surfaced.
>
> **[7:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=460)** Now let's go in here to the graph and look for our new leaf configured gauge, weekend time to wait, and we will see that we have numbers here.
>
> **[7:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=470)** If we waited long enough over the period of several days, this gauge would climb up on Monday and start walking back down Tuesday, Wednesday, Thursday.
>
> **[7:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=479)** Just to give you a little bit more sense of how this works, let's open up another panel here in Prometheus, and let's have a look at say the system CPU usage, and you can actually see a more meaningful graph showing all kinds of metrics here collected over time.
>
> **[8:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=496)** So that's how Prometheus works.
>
> **[8:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=497)** Finally, let me do show you.
>
> **[8:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=499)** We can't go all into Prometheus and configuring it, but there is a Prometheus YML file, in which we have configured our demo API, which we saw there on the targets page.
>
> **[8:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=510)** We're giving it the path to the metrics as this actuator Prometheus path, which is this right here, and told it the host, which is local host 9092.
>
> **[8:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=522)** So that's how Prometheus is coming in and pulling in these metrics.
>
> **[8:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/using-spring-actuator-for-runtime-monitoring?u=76281980&t=525)** There, now we have successfully configured a custom Prometheus metric using spring boot actuator, and the micrometer library.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), finally, (3), class, (2), interface (1), static (1)
> **Definitions:** is a  (7), is an  (2)
> **Env Vars:** cpu (2), xml (2), api (2), http (1), yml (1)
> **Prerequisites:** configure (2), set up (2)
> **Analogies:** for instance (1), such as (1), for example (1)
> **CLI Commands:** make (2)
> **Speakers:** - in (1)

#### Customizing Spring performance logging
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=0)** - [Instructor] Let us continue our studies of spring performance monitoring by learning about the performance monitor interceptor.
>
> **[0:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=8)** Performance monitor interceptor provides easy to configure targeted performance logging.
>
> **[0:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=15)** It is an aspect oriented functionality.
>
> **[0:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=19)** This particular class lives within the org dot spring framework dot AOP dot interceptor package.
>
> **[0:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=26)** Performance monitor interceptor integrates seamlessly with Log4j or your existing logging infrastructure, in order to track specific performance concerns that are unique to your application.
>
> **[0:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=39)** I find it useful when there's a method or a service call that I have some reason to be concerned about, or I just want to track it carefully.
>
> **[0:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=46)** This is a really good time to invoke the functionality of the performance monitor interceptor.
>
> **[0:52](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=52)** As I mentioned, it is an aspect oriented solution.
>
> **[0:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=55)** And so let's go over three very high level terms that I might be referring to as I talk through the solution.
>
> **[1:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=63)** Advice is a bit of externalized behavior.
>
> **[1:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=67)** It can be just as simple as that in your mind, a bit of externalized behavior, a pointcut is an expression that describes points in the execution of your application, where you want advice to be applied.
>
> **[1:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=80)** So where you want that externalized behavior to be invoked.
>
> **[1:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=84)** And an aspect is a class that declares advices and pointcuts.
>
> **[1:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=89)** Let us jump in.
>
> **[1:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=91)** And what we're going to do is we're going to make an aspect class.
>
> **[1:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=95)** Now, sometimes in these lessons, I'd like to do a lot of typing and talk you through what I'm doing as I build it.
>
> **[1:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=101)** I found in this one that to have this pre-configured makes it a little easier to talk through it because it's a bit of a jigsaw puzzle in terms of how this all fits together.
>
> **[1:52](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=112)** Let's just start at the beginning.
>
> **[1:54](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=114)** We're making a class here.
>
> **[1:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=116)** As I mentioned before, it's an aspect class, that means it's declaring pointcuts and advices and configuring the general behavior of our AOP functionality.
>
> **[2:06](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=126)** Okay, so this is our class in our package, a custom class.
>
> **[2:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=132)** Now what we want to do in this class is three things, we first wanted to declare a bean.
>
> **[2:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=137)** The bean that we're getting ahold of here is object type performance monitor interceptor.
>
> **[2:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=143)** This is the subject of the lesson within this larger spring framework package.
>
> **[2:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=148)** This method here, which we could call anything, I'm calling it invocation interceptor, is going to return an instance of that performance monitor interceptor.
>
> **[2:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=158)** Okay, we have also declared in here, a method called monitor.
>
> **[2:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=163)** Again, this method name isn't special.
>
> **[2:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=165)** We could call it anything, monitors kind of customary, and it works for me.
>
> **[2:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=170)** So we've called this method and we've attached to it a pointcut description.
>
> **[2:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=175)** This pointcut description corresponds to all of the entry points in our controller.
>
> **[3:02](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=182)** Our demo controller is the thing that catches browser activity when the user entered a path in the browser, it resolves to these different methods.
>
> **[3:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=191)** So we've got index method, error, monitor, query, all of these end points here, quoter.
>
> **[3:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=198)** They are all being picked up here in this expression demo controller dot star, meaning every public method that returns a string.
>
> **[3:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=207)** And finally, we have an adviser.
>
> **[3:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=210)** Remember an adviser is the thing that combines our pointcuts with our advices.
>
> **[3:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=215)** So without getting too far into the weeds here, what we're doing here in this performance monitor advisor method is we're putting together this monitor method that we declared up here with this invocation interceptor method, which returns the spring class performance monitor interceptor.
>
> **[3:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=235)** Embedded in the spring class is the method that actually we're interested in running, which is called invoke under tracing.
>
> **[4:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=243)** So finally, by pairing our demo controller entry points to our monitor method, which again it gets linked up with this performance monitor interceptor.
>
> **[4:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=257)** We will cause things to get put out into the logs.
>
> **[4:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=259)** Specifically, we're going to get some kind of generic timings.
>
> **[4:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=264)** All right, let's start this up and let me show you what we've got here.
>
> **[4:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=268)** You started successfully, okay.
>
> **[4:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=269)** Nothing's happening interesting until we invoke some of these end points in our demo app, you can see in here, some of those logging's getting fired.
>
> **[4:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=280)** Let's say evoke a few more just to prove the point.
>
> **[4:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=284)** So every time we're invoking an end point now, the performance monitor interceptor is kicking out an instance of a stopwatch, which is a Java utility class.
>
> **[4:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=295)** And the stopwatch is giving us simply the running time for the method that we invoked in nanoseconds, which is really hard to read.
>
> **[5:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=305)** And I believe a nanosecond in this case is .15 seconds.
>
> **[5:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=310)** So these are very, very fast methods.
>
> **[5:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=312)** All right, so that's good.
>
> **[5:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=313)** But now this is what gets interesting is when we can customize this behavior.
>
> **[5:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=317)** Here is where we will do a little typing.
>
> **[5:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=320)** All right, we can make a custom performance monitor interceptor.
>
> **[5:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=325)** The key things here in this class, again, this is, we call this class anything we want to, but the point is it has to extend this abstract monitoring interceptor, which again is part of the spring framework AOP package.
>
> **[5:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=337)** And this class as an extension of this interceptor class can have any kind of attributes that we want to have.
>
> **[5:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=345)** We're going to declare a couple of longs and this invoke under trace method is the one I mentioned before.
>
> **[5:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=351)** This is the method word that we're going to override to get our custom behavior.
>
> **[5:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=355)** So again, I haven't typed out all of the functionality inside invoke under trace, but what we're doing is we're capturing some additional metrics about the method that is getting traced and how we make that happen is what we're going to do now.
>
> **[6:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=371)** So this is where we are going to type, because I think it might be useful to teach.
>
> **[6:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=376)** So back here in our performance monitor configuration class, remember this is our own class within our own package.
>
> **[6:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=383)** And this is where we're configuring our aspect oriented behaviors.
>
> **[6:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=386)** So we're going to declare another bean and it's going to be a lot like this one, except this one's going to be our custom performance monitor interceptor, which is in our own domain.
>
> **[6:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=398)** We can't duplicate.
>
> **[6:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=402)** Let's call it custom interceptor, keep it short.
>
> **[6:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=405)** And then we're going to return an instance of our custom.
>
> **[6:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=410)** Okay. So it's analogous to what we did before.
>
> **[6:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=413)** Also, we're going to do another analogous thing is declare this new public method.
>
> **[7:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=420)** We have to give it a unique name.
>
> **[7:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=423)** Let's call it custom monitor.
>
> **[7:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=425)** And now, instead of pairing this custom monitor method to our demo controllers, let's pair it with something else.
>
> **[7:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=435)** Let's pair it with class in our domain package, this CPU loader class, and that class has a method called, let's pop in there real quick.
>
> **[7:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=451)** Class has a method called expensive calculation.
>
> **[7:36](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=456)** And that's the one we want to put a trace on.
>
> **[7:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=461)** CPU loader expensive calculation.
>
> **[7:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=465)** And I believe was it a string that was returned?
>
> **[7:52](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=472)** Yes.
>
> **[7:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=475)** Okay.
>
> **[7:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=476)** So now we have a pointcut that describes our custom class within calculation that we want to track.
>
> **[8:02](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=482)** And then finally, we need to make our advisor.
>
> **[8:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=488)** We can't name it the same.
>
> **[8:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=490)** We're going to call this one our custom performance monitor advisor.
>
> **[8:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=495)** Going to make a generic pointcut.
>
> **[8:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=497)** And this expression we're going to set here to this custom monitor method.
>
> **[8:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=505)** And we don't want invocation interceptor.
>
> **[8:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=507)** We want our custom interceptor.
>
> **[8:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=513)** This really is a bit of spaghetti and it's a bit of a jigsaw puzzle.
>
> **[8:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=517)** Let's go through what's happening one more time.
>
> **[8:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=520)** We have a custom method inside of our aspect class.
>
> **[8:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=524)** We're pairing by means at this point, cut expression or custom monitor method with our custom interceptor.
>
> **[8:52](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=532)** Our custom interceptor when it does it's interception, it's going to run our custom logic here in this invoke under trace method.
>
> **[9:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=543)** And then finally this custom monitor method is paired with our domain class CPU loader, this specific method called expensive calculation.
>
> **[9:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=552)** Okay, now hopefully we'll start without error.
>
> **[9:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=558)** Good.
>
> **[9:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=559)** Now this time let's hit some of the same end points that we did before.
>
> **[9:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=564)** And we also have this monitor endpoint that I happen to know does hit into this monitor class that we're trying to look and what we have here is behavior just as we had before, because we didn't take that away.
>
> **[9:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=581)** All of our stopwatch methods, the default performance monitor interceptor is giving us.
>
> **[9:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=586)** In addition, though, when we hit the CPU loader method, we got some additional statistics.
>
> **[9:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=593)** We got a warning here in the logger warn category that we had a long running method, ran longer than 10 seconds.
>
> **[10:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=601)** And we've, we're keeping track of how many times we get that warning here.
>
> **[10:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=605)** Let's make it again.
>
> **[10:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=609)** So now since our application has been running, we've gotten this particular warning twice.
>
> **[10:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=613)** So this is just a super simple example of a method that I was concerned about.
>
> **[10:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=618)** And we can put some additional logging around it to keep us informed about what's happening there.
>
> **[10:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/customizing-spring-performance-logging?u=76281980&t=623)** That's the lesson about performance monitor interceptor, and I hope it's clear to you how this works and how you might be able to use it in your applications.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), class. (4), class, (4), finally, (3), public (2)
> **Definitions:** is a  (5), is an  (3), is called (1), we call this (1)
> **CLI Commands:** make (6), find (1)
> **Env Vars:** cpu (4), aop (3)
> **Warnings:** warning (3)
> **Analogies:** analogous to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Spring performance monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-monitoring?u=76281980&t=5)** - [Instructor] Are you ready to practice some actuator endpoint configuration?
>
> **[0:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-monitoring?u=76281980&t=9)** In this challenge, you will modify the default JMX exposure behavior for Spring Boot Actuator.
>
> **[0:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-monitoring?u=76281980&t=16)** Your challenge is to expose one, and only one, Spring Boot Actuator endpoint, the health endpoint, from our DemoApi application as a JMX Bean to VisualVM.
>
> **[0:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-monitoring?u=76281980&t=30)** You can see the repository file called CHALLENGE-ACTUATOR for hints and tips found at the root of our demo repo under CHALLENGE-ACTUATOR.
>
> **[0:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-monitoring?u=76281980&t=41)** And the success criteria screenshot is also in that Read me file.
>
> **[0:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-monitoring?u=76281980&t=45)** Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** jmx (2), challenge (2), actuator (2)
> **Speakers:** - [instructor] (1)

#### Solution: Spring performance monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=0)** - [Instructor] Now, let's work through a solution to the Spring Boot Actuator challenge.
>
> **[0:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=9)** As a reminder, the challenge was to expose one and only one Spring Boot Actuator endpoint, the health endpoint, from our DemoApi application as a JMX Bean to VisualVM.
>
> **[0:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=22)** So, let's talk through how this is done.
>
> **[0:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=24)** The one configuration we need to add to the repository is the exposure application property.
>
> **[0:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=32)** In this fashion, management endpoints jmx.exposure.include=health.
>
> **[0:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=46)** This is the endpoint we're interested in exposing, management endpoints JMX exposure, and see, it's kind of analogous to the web exposure endpoints that we'd been working with all along.
>
> **[0:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=57)** There's also one other property that you inherited in the repository, which is to enable JMX at the spring level, no need for you to enter that yourself.
>
> **[1:06](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=66)** So, this one property should be all we need in order to meet the challenge and see if we succeeded.
>
> **[1:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=80)** Here's our running DemoApi application, the MBeans tab now.
>
> **[1:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=85)** We get this MBeans because we installed this plugin as the Mbean browser.
>
> **[1:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=89)** Org springframework.boot on the left side, so is our collection of actuator endpoints.
>
> **[1:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=95)** And we have one single endpoint surface tier, as we're trying to do.
>
> **[1:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=100)** You can see here in the operations tab, the value for that particular endpoint is out of service because now happens to be the weekend.
>
> **[1:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=111)** When you run this, this might or might not be the weekend.
>
> **[1:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=115)** So there, that is one way to solve this challenge.
>
> **[1:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-monitoring?u=76281980&t=117)** Well done.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), include= (1), this, (1)
> **Env Vars:** jmx (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Tuning for Common Spring Performance Challenges

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Aspect-Oriented Programming
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=0)** - [Instructor] Aspect oriented programming is a super interesting topic, and it gets a lot of attention with respect to performance concerns.
>
> **[0:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=8)** Let's spend this lesson unpacking what a spring practitioner needs to know about AOP and performance.
>
> **[0:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=15)** AOP introduces modularity into systems by means of the aspect.
>
> **[0:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=21)** In contrast, object oriented programming creates modularity by means of the object.
>
> **[0:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=28)** AOP modularizes cross cutting concerns like logging and security, and this is where the two paradigms compliment one another.
>
> **[0:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=37)** Solid OO design will want a tight encapsulation of your business logic.
>
> **[0:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=42)** Cross cutting concerns like logging and security are super important to the functioning of the application, but they also muddy up good OO design since these concerns are secondary, or at least have a very different nature than the business concerns of your spring application, so that's why we need it.
>
> **[1:02](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=62)** The spring framework makes it straightforward to configure AOP behaviors using annotations, and as a spring practitioner, you're likely to be depending on the spring AOP and or the AspectJ libraries.
>
> **[1:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=77)** An AOP aware system combines native code with aspect code in order to produce a running application.
>
> **[1:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=85)** This combining is called weaving, and it can be done in a number of ways.
>
> **[1:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=89)** It can be done at the time you compile your code, it can be done after you compile your code with a binary code, or it can be done at runtime.
>
> **[1:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=99)** The details of weaving are very interesting, and they're also outside the scope of this lesson.
>
> **[1:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=105)** In this lesson, the question we're wondering is, does all of this weaving introduce enough overhead into my spring app that I need to worry about it?
>
> **[1:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=115)** The answer is no, not for most spring applications.
>
> **[1:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=119)** Many studies have been done in Academia deeply diving into aspect oriented programming and different ways of implementing it.
>
> **[2:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=127)** And the consensus is clear that in most cases, AOP does not introduce enough runtime performance hit to be a concern, especially in a spring context where the vast majority of spring applications are concerned with database connections.
>
> **[2:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=143)** APIs and services across the globe, complex CIC deployment build and deployment pipelines, all of those connectivity activities dwarf any negative impact that there might be with respect to AOP.
>
> **[2:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=160)** Okay, so why this lesson, why do we need to care about it?
>
> **[2:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=163)** This is why, because it's hard to predict the real-world behaviors that our AOP configurations will cause.
>
> **[2:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=170)** And that's a result not of AOP itself, but as a result of the ease with which we can integrate aspects into our object oriented situation.
>
> **[3:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=181)** Also, it's a key part of your application architecture and having a deep understanding of how AOP is impacting you is a good professional thing to be concerned about.
>
> **[3:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=192)** The name of the game with AOP and the way that you can answer the questions you'll get from your stakeholders about it are to be answered with good observability.
>
> **[3:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=203)** And we're going to learn about instrumentation in this lesson, and we're specifically going to learn to instrument our aspect oriented code within our demo application so that we can expose the impact that our AOP configurations are having.
>
> **[3:36](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=216)** To instrument code, what you're doing is you're injecting hooks into an application at compile time or at runtime in order to debug or profile specific behaviors that you can configure.
>
> **[3:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=228)** Instrumentation requires a Java agent to eavesdrop in a sense to your runtime and extract the profile data that you've asked for.
>
> **[3:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=237)** In this application, we're going to use a platform called Glowroot.
>
> **[4:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=241)** Glowroot's an open-source, easy to run locally application performance monitor, it represents a whole class of platforms.
>
> **[4:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=249)** And the things that we learned with respect to Glowroot can transfer to any number of other performance monitor platforms.
>
> **[4:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=257)** There are a couple of terms I would like to go over before we jump into our hands-on code demonstration, one of those terms is transaction.
>
> **[4:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=265)** Just remember that a transaction is a capture point boundary for a request or operation.
>
> **[4:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=272)** And a trace is detailed information about the operations within a transaction, like timings, error call stacks and thread profiles.
>
> **[4:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=281)** Throughput is a measure of operation efficiency.
>
> **[4:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=285)** It's often expressed as request served per minute or per second for a statistic like that.
>
> **[4:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=290)** All right, let's jump in to our code and learn some things.
>
> **[4:54](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=294)** In a previous lesson, we configured an aspect class in order to deliver some custom performance monitoring.
>
> **[5:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=303)** And we're going to relook at that work that we did together in order to instrument this aspect part of our application, to get a deep understanding of the performance of this part of our application.
>
> **[5:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=316)** Let me please walk you through the key points here in our code base, we have a monitor endpoint that we can hit in a browser, and what that will invoke is an expensive calculation on an object.
>
> **[5:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=330)** That expensive calculation is joined by means of our aspect configuration class to our custom monitoring method.
>
> **[5:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=343)** The custom monitoring method lives here in our custom performance monitor class, and it's specifically doing some calculations and some logging.
>
> **[5:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=353)** It's actually not doing much calculation, it's mostly doing logging.
>
> **[5:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=357)** So what we want to instrument here, in other words, the things that we want to get visibility on related to the subsystem of our application are three: I would like to have a view of this expensive calculation.
>
> **[6:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=370)** I would like to know how much time my application is spending on it.
>
> **[6:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=373)** I would like to know how my custom performance monitor is behaving, that would be represented by this method here.
>
> **[6:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=382)** And I would like to know how much time my application is spending at runtime on this whole AOP setup that I have configured.
>
> **[6:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=393)** So, I'm going to show you how to instrument this code in order to get visibility on those three really specific things.
>
> **[6:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=401)** Like I said, we're going to use Glowroot to do this.
>
> **[6:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=404)** In a previous lesson, we hopped over this instrumentation ability, but we're going to have a deep dive into it now.
>
> **[6:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=411)** And I have pre set up some instrumented classes here that I'd like to walk you through.
>
> **[6:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=416)** First of all, this expensive calculation class.
>
> **[7:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=420)** How we configure this in the instrumentation panel of Glowroot is by naming the class, by naming the method that we want to look at, we're configuring a trace entry, in other words, I want some very detailed information about this performance.
>
> **[7:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=437)** This trace entry matters, and I'm going to talk about that in a minute.
>
> **[7:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=443)** We'll come back and visit what that trace entry is all about.
>
> **[7:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=445)** This timer, we're calling it calculation.
>
> **[7:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=448)** In other words, we want to roll up into a single timer.
>
> **[7:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=452)** This timer will allow us to aggregate under a single label all of the time that our application spends in this particular method.
>
> **[7:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=460)** We're going to give it a stack trace threshold of very low because I want to force traces to get thrown so that we can look at them.
>
> **[7:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=468)** We will put this within a transaction that we call custom, and we're going to give it a transaction name of AOP_PerfMon.
>
> **[7:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=477)** Okay, let's go look at the other two.
>
> **[7:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=479)** We are going to also instrument this entire performance monitor configuration class.
>
> **[8:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=485)** Remember, this is the aspect class that configures our AOP behaviors.
>
> **[8:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=490)** Class name is AOP performance monitor configuration.
>
> **[8:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=493)** We're going to have a look at all of the methods in that class.
>
> **[8:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=497)** We're going to ask for a trace, detailed information on this method, our trace entry will be a method name, and we're going to give this particular timer the name AOP.
>
> **[8:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=510)** So all of the time that we spend in that configuration class will be aggregated under a timer called AOP.
>
> **[8:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=517)** Give it a very low stack trace threshold of one, we will also give it the same transaction type name of custom and the same transaction name of AOP_PerfMon.
>
> **[8:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=527)** And then last but not least, similarly, we have also instrumented our custom performance monitor class, we're looking at the specific invokedUnderTrace.
>
> **[8:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=537)** Much of this is the same.
>
> **[8:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=539)** We're giving this timer the label of advice.
>
> **[9:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=543)** This is advice within our system, and we're going to roll up all of the time we spend on our AOP advice under this timer name.
>
> **[9:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=551)** Customers are transaction type, transaction name like the others is AOP_PerfMon.
>
> **[9:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=556)** And that's that.
>
> **[9:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=557)** That's an overview of the instrumentation that we've set up.
>
> **[9:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=561)** All right.
>
> **[9:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=561)** Let's go to our monitor endpoint, load it it up a couple times, and see what Glowroot will tell us.
>
> **[9:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=569)** Now, look here.
>
> **[9:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=571)** We have a new transaction type under our dropdown list that we didn't have the first time we looked at Glowroot, it's called custom.
>
> **[9:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=579)** And inside custom, let's take this down to the last 60 minutes.
>
> **[9:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=583)** Inside custom transaction, we have a transaction named AOP_PerfMon.
>
> **[9:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=590)** AOP_PerfMon is what we have labeled our custom instrumentations.
>
> **[9:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=595)** And the first thing I'd like to draw your attention to is this legend of timers.
>
> **[10:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=600)** Remember those timers I pointed out to you on the instrumentation configuration page?
>
> **[10:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=604)** This is where we can see the results of those instrumentations.
>
> **[10:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=608)** In this view, we can see four different timers aggregated by color, two of them are from our custom instrumentations.
>
> **[10:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=616)** The calculation timer is the work that our application is doing, and the advice is what we joined to our calculation by means of AOP.
>
> **[10:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=625)** So it gives us a nice little chart here with a breakdown of all of these activities.
>
> **[10:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=628)** I should add that logging was done automatically for us by Glowroot.
>
> **[10:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=634)** And notice that there's another timer that's not here at all, which is that AOP timer, which tells us we've spent no time in that aspect class at all during the execution of this transaction, which is useful information to know.
>
> **[10:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=647)** So let's quickly look here at the breakdown, we have numbers here on what we spent on all of these different activities.
>
> **[10:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=653)** I'd like you to notice the calculation class, which is our "native class" invoked some advice, which then stepped back into calculation.
>
> **[11:02](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=662)** And we're going to have a look at some of the details of that activity in a minute, but the thing to draw away from here is that the advice number that we're interested in is extremely tiny.
>
> **[11:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=671)** We can see on the chart that the advice here is only 0.2% of our total activity, and then this breakdown just gives us more details about what activities have been taking our time.
>
> **[11:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=684)** The final thing I want to have you look at is a trace.
>
> **[11:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=687)** These aren't truly slow traces, we kind of manufacture these traces.
>
> **[11:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=692)** But let's have a look at these trace entries.
>
> **[11:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=694)** So remember I told you that the trace entry name mattered, this is why.
>
> **[11:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=699)** What we can see here is the trace entry for our execute method we used as the input parameter.
>
> **[11:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=707)** And then that trace entry is moving down here into the custom performance monitor interceptor.
>
> **[11:54](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=714)** This is telling us that the expensive calculation is being joined here with spring frameworks AOP library to invoke our custom monitor, which is then returning control in the thread back to our expensive calculation thread, and then coming in the result of our logging.
>
> **[12:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=735)** So here you can get a very detailed view of exactly how your AOP library is interacting with your native code in order to get your end result.
>
> **[12:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=748)** The good news here is that our timings are excellent, we're spending no time in the configuration part of our AOP and a very tiny bit of time and the advice.
>
> **[12:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/aspect-oriented-programming?u=76281980&t=758)** So this is a very real-world demonstration of how to instrument any Java code, really, but specifically, you can instrument your aspect oriented code in your spring code base in order to get deep visibility into the aspect oriented behaviors of your system.

> [!info]- Semantic Content
>
> **Env Vars:** aop (24), cic (1)
> **Code Keywords:** let (8), class, (4), class. (3), super (2), for. (1)
> **Definitions:** is a  (6), in other words (3), is called (1), is an  (1)
> **Prerequisites:** configure (3), set up (2), setup (1)
> **UI Navigation:** go to (1), dropdown (1)
> **Code Identifiers:** invokedundertrace (1)
> **Versions:** 0.2 (1)
> **Speakers:** - [instructor] (1)

#### Hibernate database interactions
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=0)** - Let's turn our attention to another hotspot for Spring application performance and that is Hibernate.
>
> **[0:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=7)** Now to be clear, Hibernate itself is not a problem.
>
> **[0:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=11)** It's a prevalent and very convenient solution to a difficult task which is the work of connecting your application to a data store.
>
> **[0:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=20)** It allows for convenient configuration-based mapping of database tables, rows, and columns directly to your Java objects.
>
> **[0:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=29)** That's what ORM means, Object-Relational Mapping.
>
> **[0:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=32)** This can speed up development tremendously because it hides a lot of boilerplate code, abstraction of the complexity of the database management from the developer.
>
> **[0:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=42)** And while often it will perform just fine, there is also a downside that the actual database interactions can become invisible and actually may perhaps not even understood by the developer who's coding along happily in their integrated development environment, or even more importantly to the ops support team.
>
> **[1:02](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=62)** Much is written, there is much to learn about the intricacies of database performance and with it Hibernate performance.
>
> **[1:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=69)** This lesson will hit the essential points that a developer should understand.
>
> **[1:14](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=74)** Our special focus though is going to be on observability of these metrics that are so important to the end result of a high-performing and resilient application.
>
> **[1:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=83)** Let's talk about connection pooling.
>
> **[1:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=85)** At a rather high level connection pooling saves you the expense of making a new database connection every time you need data.
>
> **[1:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=93)** It's a time consuming, resource consuming thing, to make a database connection across the network.
>
> **[1:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=100)** And by pooling you can contain a group of JDBC connections in a pool that remain hot, so to speak, ready to use, your application can borrow a connection from the pool, use it, and then return it to the pool for the next bit of code to reuse.
>
> **[1:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=118)** The important properties on a connection pool are the size of the pool and the timeout of the connections.
>
> **[2:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=124)** The more connections you have in your pool, the more memory it's going to take from your available memory but you will be guaranteed to have one available at all times, but that pool is smaller, you use less memory, but you may have to create new ones on the fly.
>
> **[2:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=138)** So some memory trade-offs with that.
>
> **[2:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=140)** Usually what's typically done in practice is you take a guess at what might be a good number of connections based on other applications that seem to be working well within your enterprise.
>
> **[2:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=152)** Or maybe you will just take the Spring defaults and then you want to monitor the effectiveness.
>
> **[2:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=157)** With Spring and Hibernate we can track our connection pool performance over time, and that is the hard part.
>
> **[2:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=163)** That's the part we often forget about and we're going to cover that observability piece of it shortly in this lesson.
>
> **[2:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=168)** The second high level topic I'd like to talk about is caching.
>
> **[2:52](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=172)** Caching is the technique of reusing data for a period of time, saving the expense of additional database queries when that data that you're looking for is already available in the cache.
>
> **[3:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=184)** Similar in concept to web application caching, Hibernate has both a session scope cache, which we call level one.
>
> **[3:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=192)** A level one cache is enabled by default.
>
> **[3:14](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=194)** And also an application scoped cache, which we call level two caching.
>
> **[3:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=200)** Application scoped level two caching must be explicitly enabled.
>
> **[3:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=204)** And most of the studies to be done on caching effectiveness are in relation to level two caching.
>
> **[3:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=211)** At a high level, some of the important, configurable properties that you can apply to your cache are concurrency, that is, is it a read-only cache for instance, or can you also write to the cache, the size of your cache, the age of data store inside the cache, and how much memory you will allow your cache to take.
>
> **[3:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=233)** Just speaking at a high level, entities are made cacheable in Hibernate by using the cacheable annotation on an entity and the concurrency and such you can configure by entity.
>
> **[4:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=245)** Kind of like connection pooling, in practice, we usually take a good guess at what these configuration values ought to be.
>
> **[4:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=253)** And then again, the important part is to monitor the results to see if your cache is performing effectively.
>
> **[4:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=259)** Looking at hits and misses and things like that are how you know if your caching is effective.
>
> **[4:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=265)** On to observability pretty soon.
>
> **[4:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=267)** But first let's talk about lazy loading.
>
> **[4:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=270)** Lazy loading is the third kind of hot topic that you'll encounter when you work with Hibernate.
>
> **[4:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=277)** Lazy loading is a feature in which Hibernate delays data fetching until the runtime actually requires the use of the object.
>
> **[4:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=285)** So the real world advantages of lazy loading are significant enough that most of the time it's the right approach.
>
> **[4:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=293)** In particular, it's very important for those situations where you have many-to-many or one-to-many relationships.
>
> **[5:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=301)** This is a common enough problem that it has a name, it's called the N Plus One Problem of Hibernate querying.
>
> **[5:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=309)** The issue is when you have a one-to-many or many-many to relationships, sometimes you don't need to fetch all the manys.
>
> **[5:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=316)** You just need a few of them.
>
> **[5:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=317)** And if you tell Hibernate to lazy load your application and Hibernate will be smart enough to not do a bunch of queries that aren't necessary in order to fulfill the business logic that you've got coded.
>
> **[5:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=329)** So, especially in n-to-many relationships to make sure that your fetch type is lazy is a very important aspect of performance.
>
> **[5:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=338)** Okay, let's go on to the observability part of our lesson here because this is where the game is won or lost.
>
> **[5:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=346)** You can know all that you need to know theoretically about all of the previous topics, but if you can't observe the behaviors and measure it and make adjustments, then it's just no use.
>
> **[5:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=357)** So we're going to go into a demonstration now and talk about observability of queries and statistics.
>
> **[6:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=364)** Two things I want to show you.
>
> **[6:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=365)** I want to show you a property that will allow your application at runtime to dump details about your queries into your logs and also deeper level statistics about your queries.
>
> **[6:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=379)** The important properties here are the org.Hibernate.SQL must be set to debug.
>
> **[6:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=385)** When you have that property set to debug, every time, I've got a running application here ready to show you, every time you fire a query, it will get dumped into the log just as we see here.
>
> **[6:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=397)** See the org.Hibernate.SQL, which is set to debug is now pumping out messages, telling us exactly what queries we fired with each request.
>
> **[6:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=408)** Another important one, and also a slightly dangerous one, is the generate statistics property, Hibernate.generate_statistics.
>
> **[6:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=417)** When you set that true, you will get more detailed statistics about your queries.
>
> **[7:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=421)** Here is an example of a fully fledged statistics dump in which we're talking about the JDBC connection usage, the batch usage, the level two cache hits and misses that we talked about earlier.
>
> **[7:16](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=436)** So enabling statistics can give you a lot of information into your logs, however, it's expensive and don't do this in a production scenario because it is a performance drain.
>
> **[7:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=446)** But this is really what I want to show you.
>
> **[7:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=450)** I want to show you how to register all of this information on caches, connections, and queries through the actuator that we looked at in a previous lesson.
>
> **[7:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=461)** The way to do this is in your palm.XML.
>
> **[7:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=465)** If you put a dependency on this org.Hibernate, Hibernate micrometer artifact, then you get a lot of things available to you.
>
> **[7:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=475)** Let's start with a look at the actuator metrics for our application.
>
> **[8:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=481)** We did cover actuator in a previous lesson, and you'll recall that you can hit this directory and see a list of all the metrics that Spring boot is exposing for you.
>
> **[8:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=490)** And in here, we have a category called metrics.
>
> **[8:14](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=494)** Now that we expose our metrics, we see a lot of statistics here that we didn't see the first time we reviewed this functionality.
>
> **[8:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=502)** We see connection pool usage, we see query statistics, and we see cache statistics.
>
> **[8:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=511)** All of this makes it possible then to surface all of these details and performance metrics inside a tool like Prometheus, which we also looked at in a previous lesson.
>
> **[8:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=522)** So previously, when we looked at these we could not see some of these items, but by putting it into our palm.XML, we can, for example, have a look at the health of our connection pool.
>
> **[8:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=533)** So one of the things we can at here is connection pool statistics.
>
> **[8:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=538)** We can have a look at the hikari connections,
>
> **[9:06](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=546)** which will give us a count of how many connections we have in our pool configured.
>
> **[9:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=551)** We have actually two applications here that we're tracking, and we have statistics on both of them showing us that each connection pool has configured 10 connections.
>
> **[9:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=561)** Then we can also see, let's see hikari connections idle.
>
> **[9:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=570)** Hikari connections idle will show us how many we have unused in our connection pool.
>
> **[9:36](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=576)** Now you can't really see it here because I have got a quiet local app, but this will keep track of your usage over time.
>
> **[9:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=583)** So this is a gauge that will show you over time how many connections you had idle.
>
> **[9:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=590)** And this is an example of something if you have too many connections configured, many of them are sitting idle, you can free up some of that memory space and reduce the size of your connection pool.
>
> **[10:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=601)** So that's just one example of metrics that you can observe in quite a lot of detail, how your connection pool is happening.
>
> **[10:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=607)** Let's have a look at some cache metrics.
>
> **[10:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=610)** These metrics will be here under the Hibernate cache category.
>
> **[10:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=615)** Oh, this is something I don't like about Prometheus, at least I haven't figured out how to only put one unit of querying there in the box at a time.
>
> **[10:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=626)** So this is telling us that in our cache, our query plan is executing a certain number of hits.
>
> **[10:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=632)** We have got hits and misses, and that's telling us how effective our cache is being in terms of is it providing use.
>
> **[10:41](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=641)** What you want to see is a fairly high number of hits in your cache.
>
> **[10:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=644)** And when you're only getting misses that tells you that maybe you're not using it as effectively as you could, for instance.
>
> **[10:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=650)** And then finally, just the queries in general.
>
> **[10:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=653)** We can look at a metric called, just as for example, there's a rich set of metrics here, I'm just showing you some examples, Hibernate query, Hibernate query executions, max number of seconds.
>
> **[11:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=668)** So for both of the applications that I'm monitoring here, it's telling us over time, we have graph over time telling us what the longest query we fired is four and five seconds here, respectively.
>
> **[11:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=681)** So all kinds of useful information.
>
> **[11:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=683)** And the final thing I want to explain is that because you can surface these metrics using actuator in such a straightforward fashion, just by configuring the dependencies that your application draws in, the bar is very low for you as a developer to be able to see real metrics for your running application.
>
> **[11:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=703)** If you can point your local running application to a production-like database or something even close, and if you can load there in your local situation, use your favorite load runner to create some type of load against your application, you can very quickly get a feel for if your configurations are being effective or not.
>
> **[12:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=723)** It might not be exactly a production scenario, but you can certainly see where weaknesses are and things to investigate further.
>
> **[12:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/hibernate-database-interactions?u=76281980&t=730)** So that's a bit about Hibernate performance and in particular observability of key metrics with Hibernate.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), default. (1), finally, (1)
> **Definitions:** is a  (6), is an  (2)
> **Env Vars:** jdbc (2), sql (2), xml (2), orm (1)
> **Analogies:** for instance (2), for example (2), kind of like (1)
> **File Paths:** org.hibernate.sql (2), palm.xml (2)
> **CLI Commands:** make (3)
> **Code Identifiers:** generate_statistics (1)
> **Cross-References:** we talked about (1)

#### Application startup time
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=0)** - [Instructor] Application runtime startup for spring applications involves a lot of activities.
>
> **[0:06](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=6)** It's a very healthy framework and there's a lot of context to load, a lot of beans to get initialized.
>
> **[0:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=11)** Sometimes that can contribute to a slower startup time than you might like.
>
> **[0:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=15)** Sometimes that can inhibit your success.
>
> **[0:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=18)** Often it's not a problem, but let's talk about when startup time does matter.
>
> **[0:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=22)** A long startup time, meaning multiple seconds, six, eight, 10, 12 seconds can get in the way of continuous integration and continuous deployment automated testing.
>
> **[0:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=34)** In those types of scenarios, you're often starting up your application doing automated smoke testing and a variety of things like that.
>
> **[0:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=40)** Sometimes starting it up multiple times.
>
> **[0:42](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=42)** And so a long startup time really can impact that type of pipeline in your DevOps context.
>
> **[0:49](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=49)** Also, you don't want to discount it, a long startup time can be just plain inconvenient for a developer, especially if you've got a small laptop, having to restart it multiple times during the day can be a drain on your productivity.
>
> **[1:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=64)** In general, a long startup time can be an indicator of bloated dependencies.
>
> **[1:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=69)** We've learned how easy it is to add dependencies into a spring boot application.
>
> **[1:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=73)** It's so easy that sometimes you add things and forget to take them back out when you decide you don't need them.
>
> **[1:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=78)** So just keeping an eye on that startup time is often a good thing to do, even though it doesn't usually lend to a production type of emergency.
>
> **[1:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=88)** Context and bean loading is most of the challenge here.
>
> **[1:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=91)** And in this lesson, observability is going to be our focus.
>
> **[1:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=95)** Once we think our application is taking too long to start, the whole trick is how do we see what's going on under the hood so we can make decisions about streamlining things.
>
> **[1:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=106)** We're going to look at two types of metrics, our old friend, actuator metrics.
>
> **[1:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=111)** We've got some new tricks we can pull out of our sleeve for there.
>
> **[1:54](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=114)** And also the Java Flight Recorder event capturing is a tool that we're going to look at.
>
> **[1:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=118)** So let's jump right in here.
>
> **[2:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=120)** The first thing I do want to show you is how to reveal startup metrics, very detailed event metrics in your actuator directory.
>
> **[2:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=129)** And the trick here is a class called buffering application startup.
>
> **[2:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=133)** It is in the spring framework dot boot library.
>
> **[2:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=138)** The way to do this is to make one of these new buffering application startup.
>
> **[2:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=145)** And it takes a funny little parameter here called capacity.
>
> **[2:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=150)** This startup utility works in memory.
>
> **[2:33](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=153)** And so it wants you to limit how many events that you can capture.
>
> **[2:36](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=156)** This number is a number of events that the startup buffer will work with.
>
> **[2:43](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=163)** And then when it's full, it stops working.
>
> **[2:45](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=165)** So you want to give it a capacity.
>
> **[2:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=167)** 10,000 is pretty generous.
>
> **[2:49](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=169)** You will see that our startup events are more like 400, but just to kind of have a look at things here, let's give it a 10,000.
>
> **[2:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=176)** And then we start up our application.
>
> **[2:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=179)** Well, we have to do an additional thing, which is set the application start-up hook to be this buffering application startup object.
>
> **[3:06](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=186)** And then we run it in the usual fashion, run our application.
>
> **[3:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=190)** Let's see.
>
> **[3:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=191)** So we've made our buffering application startup object.
>
> **[3:14](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=194)** We've got a run.
>
> **[3:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=195)** We do not require any additional runtime VM parameters.
>
> **[3:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=200)** I think we can just start this.
>
> **[3:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=202)** We want to start the client application.
>
> **[3:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=207)** Hopefully we'll get a successful startup.
>
> **[3:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=211)** Then what we're going to look at here is our old friend, the actuator directory.
>
> **[3:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=215)** Notice in here in our actuator directory, we have a new category of metrics called startup and this beautiful list of things is a list of events that our startup buffer captured for us.
>
> **[3:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=231)** It's not so easy to read here.
>
> **[3:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=233)** So what I'd like to do is switch it over to view the raw data and then pretty printed.
>
> **[3:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=237)** And now you can see very clearly the detailed metrics on all of your startup events that actuator is now capturing.
>
> **[4:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=247)** The name of the event, beans it's instantiating, how long it takes.
>
> **[4:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=253)** It's very detailed. However, it's not super readable.
>
> **[4:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=257)** If you've got something you're really concerned about and you want to drill straight in and look at it, it's quite useful for that.
>
> **[4:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=263)** There is one trick you can do to help yourself out a little bit.
>
> **[4:27](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=267)** The buffering application startup class has an ability to add a filter so you can filter some things out.
>
> **[4:36](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=276)** Let's see. This is startup step.
>
> **[4:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=280)** Startup step get name.
>
> **[4:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=284)** Starts with.
>
> **[4:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=287)** And I think we want to start it with, let's just filter out the spring beans instantiate events.
>
> **[4:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=299)** Now, when we do this, having added the filter, let's restart.
>
> **[5:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=307)** We will go from, I think there was 415 last I looked at this, 416 events to, I'm going to reload this.
>
> **[5:17](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=317)** And now we have fewer events. We have more like 391.
>
> **[5:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=324)** Okay. That's still a lot, but you get the point.
>
> **[5:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=326)** You can filter on events using that add filter mechanism.
>
> **[5:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=330)** Okay.
>
> **[5:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=331)** Now let's look at the second way to get insight into your startup events.
>
> **[5:36](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=336)** And that is using the Java Flight Recorder.
>
> **[5:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=339)** I'm going to switch over to the demo API application to demonstrate this one for you.
>
> **[5:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=344)** It works in a very similar way.
>
> **[5:46](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=346)** We're going to make a new Flight Recorder application startup object, and this one doesn't require any input parameters.
>
> **[5:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=357)** We're going to set the application startup as the subject.
>
> **[6:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=360)** Why do I have a squiggle here?
>
> **[6:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=363)** Better pass it in.
>
> **[6:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=365)** Oh, it doesn't like the typo.
>
> **[6:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=367)** Well, that's silly, but we'll take care of it anyway.
>
> **[6:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=369)** All right. So now we've got that.
>
> **[6:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=371)** Now here for this technique, we have to add some VM properties.
>
> **[6:15](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=375)** So let's go to edit configuration.
>
> **[6:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=379)** Oh, I did already put these in here in advance of the lesson.
>
> **[6:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=381)** So we need two properties.
>
> **[6:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=382)** This Flight Recorder plus Flight Recorder is a VM property.
>
> **[6:26](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=386)** And also this rather long one start flight recording.
>
> **[6:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=391)** We're telling it how long to run the event capture.
>
> **[6:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=394)** 20 seconds for our case will be plenty.
>
> **[6:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=397)** And we're going to give it a file name.
>
> **[6:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=399)** This will save that file off so that we can examine it in Flight Recorder.
>
> **[6:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=407)** And I will start this just to show you a bit of it working.
>
> **[6:52](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=412)** And this is telling us off the bat that it started the recording and it's writing our file to here.
>
> **[6:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=417)** All right, let's go without much more work into this tool that we haven't looked at yet.
>
> **[7:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=424)** It's a Java Flight Recorder utility inside the JDK mission control.
>
> **[7:09](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=429)** We're going to talk more about this tool in a later lesson.
>
> **[7:12](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=432)** What we can do here then is open that file that we saved off.
>
> **[7:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=438)** And then when we open that file, we can go into an event browser view down to the startup steps.
>
> **[7:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=445)** Did you notice in the actuator, we said we had 415 startup steps.
>
> **[7:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=449)** It's the same amount here.
>
> **[7:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=451)** It's always nice when numbers match up.
>
> **[7:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=454)** And then what we can do here is get a much more human friendly view of our statistics.
>
> **[7:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=459)** We can sort, for example, kind of the main thing you can sort by duration the things that are taking the longest right up here at top.
>
> **[7:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=468)** We can see that there are few of these bean context load events that are taking close to a second.
>
> **[7:55](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=475)** And then if we felt like it, we could examine those.
>
> **[7:59](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=479)** We have stack traces down here and we could examine those and see if there's anything untoward that we should be eliminating.
>
> **[8:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=485)** You can also learn a lot honestly about spring, just by examining this type of tracing.
>
> **[8:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=491)** For instance, this post processor, the configuration class post-process are part of the context initialization takes nearly a second here.
>
> **[8:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=499)** And that's kind of interesting to note.
>
> **[8:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/application-startup-time?u=76281980&t=501)** So that's a bit about capturing metrics on your application startup for spring boot application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), require (2), this. (2), switch (2), this, (2)
> **Definitions:** is a  (5)
> **CLI Commands:** make (3)
> **Env Vars:** api (1), jdk (1)
> **Analogies:** for example (1), for instance (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Spring performance tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-tuning?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-tuning?u=76281980&t=5)** - [Instructor] Welcome to the Spring Boot Start-Up Challenge.
>
> **[0:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-tuning?u=76281980&t=8)** For this challenge, I invite you to modify the DemoClient application start-up configuration to report only the start-up events that are initiated by the Spring Boot framework.
>
> **[0:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-tuning?u=76281980&t=21)** There is a repository file called CHALLENGE-STARTUP, where you can find complete details about the challenge including hints for success and success criteria.
>
> **[0:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/challenge-spring-performance-tuning?u=76281980&t=31)** Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** challenge (1), startup (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### Solution: Spring performance tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=0)** - [Instructor] Let us look together now at a solution for the challenge.
>
> **[0:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=8)** What we're wanting to do is modify the DemoClient application start-up configuration, to report only the start-up events that are initiated by the Spring Boot framework.
>
> **[0:19](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=19)** Let's have a little context.
>
> **[0:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=20)** Right now, we have a DemoClient application.
>
> **[0:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=23)** It is currently running.
>
> **[0:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=25)** It is currently getting an application startup context using a buffering application startup object.
>
> **[0:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=34)** The results of this current startup configuration are that our startup and point from our actuator directory is reporting hundreds of events.
>
> **[0:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=44)** And we want to narrow that down so that we are just seeing a specific subset of them.
>
> **[0:49](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=49)** This challenge is asking us to report only the events that are initiated by the Spring Boot framework itself.
>
> **[0:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=57)** So the way we do that is as follows.
>
> **[1:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=60)** We need to add to our buffering application, startup configuration, a filter, and we're going to add a filter on the startup step, and we want to get the name of the step.
>
> **[1:14](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=74)** And we want to find the steps that start with Spring Boot.
>
> **[1:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=81)** This information is coming from the event startup step name.
>
> **[1:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=88)** We can plug our filter in here, ask for only names that start with Spring Boot.
>
> **[1:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=94)** And now we're still passing the same buffering application startup object to our startup command, and then to our run command, we're going to restart our client application.
>
> **[1:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=108)** Let's reload our actuator directory go back into our startup metrics.
>
> **[1:53](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=113)** And here we have only a few metrics.
>
> **[1:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=116)** Now we have six metrics, all of them specific to the Spring Boot framework initiated events.
>
> **[2:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/solution-spring-performance-tuning?u=76281980&t=123)** So that is one solution to our challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. The Spring Developers Performance Toolkit

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Compiling a performance profile
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=0)** - [Instructor] We have talked throughout this course about the complexity of performance measuring, monitoring, and reporting.
>
> **[0:06](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=6)** In response to our opening question, how does your application perform?
>
> **[0:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=11)** We have learned many technical skills that are essential to a spring developer in mastering this aspect of our work.
>
> **[0:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=18)** In this lesson, we will talk about how to translate those skills into action, making performance work a practical part of your everyday development workflow.
>
> **[0:28](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=28)** When you and your team are committed to generating and maintaining a living compilation of metrics that are specific and useful to your application, then you have some excellent advantages.
>
> **[0:40](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=40)** You can capture impactful decisions and decision trees.
>
> **[0:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=44)** Then you can surface the impacts of those decisions to your performance, showing trends over time.
>
> **[0:50](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=50)** It can lead you to informed conversations about performance over the life cycle of your application.
>
> **[0:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=56)** Okay, that's great.
>
> **[0:58](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=58)** But it's actually one of the hardest parts of this work to narrow down the field of possible things you can measure, to things that are useful and relevant for you to measure.
>
> **[1:06](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=66)** This lesson will walk you through some of the steps you can take alone or with your team, in order to do this.
>
> **[1:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=73)** Step one.
>
> **[1:14](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=74)** If you haven't already, describe your application in words, and also as a component diagram.
>
> **[1:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=81)** Given the pace of development these days, and the demands to roll out features as quickly as possible, often these system diagrams are missing or have fallen out of date.
>
> **[1:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=90)** Find them and update them, or create them as necessary.
>
> **[1:34](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=94)** Then you are prepared to identify the essential performance impacting parts of your system.
>
> **[1:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=99)** Once that step is done, I suggest you break out your metrics into two categories, JVM metrics, and connected components.
>
> **[1:48](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=108)** This is where the specifics of your spring application become very relevant, because the next step is to start describing the loads under which you need to operate.
>
> **[1:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=117)** If these conversations have not yet taken place with your stakeholders in an official way, make some good guesses.
>
> **[2:04](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=124)** Don't let this lack of direction or information stop you from taking the first steps to organizing your profile.
>
> **[2:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=131)** Once you have identified some reasonable loads and identified the best way to run some tests, which is outside the scope of this course, then capture a baseline set of metrics.
>
> **[2:23](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=143)** Basic metrics are okay to start with.
>
> **[2:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=145)** In this example, we took a baseline load test, 10 concurrent threads, calculating prime numbers to 10,000, and snagged a screenshot of JVM performance, JVM memory, CPU performance, and also key indicators of our database and service calls, and transaction metrics.
>
> **[2:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=167)** Having assembled this much, then we can identify and communicate areas in need of attention, such as our memory issues, or we can expand our test scenarios to cover a wider range of conditions.
>
> **[3:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=180)** The main point here is to start simple and go from there.
>
> **[3:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=183)** There is a template document for you to start with in the repository, at the root of the repository called, application performance profile template.
>
> **[3:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=193)** This document breaks down this process into manageable steps to help you assemble your living performance profile documentation.
>
> **[3:21](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=201)** You will find it in Libra Office and also Word formats.
>
> **[3:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/compiling-a-performance-profile?u=76281980&t=204)** Now that you have the technical skills in place, I hope you use these resources to begin the transition in your workflow to make performance tuning part of your everyday spring development life.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **Env Vars:** jvm (3), cpu (1)
> **Code Keywords:** this. (1), let (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Presenting your work
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=0)** - [Kathy] No matter what stage of your career you are in, presenting your work is an important part of the life of any developer.
>
> **[0:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=8)** And the challenge is simply this.
>
> **[0:10](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=10)** For starters, communication is very hard work.
>
> **[0:14](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=14)** When you add to that, that application performance itself is an extremely nuanced, multi-faceted discipline, which is dependent on many variables.
>
> **[0:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=24)** Those two things taken together mean that a little focused attention on how you're presenting your work will yield benefits for any developer.
>
> **[0:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=32)** This lesson focuses on those formal and semiformal events, such as iteration demos, or maybe architectural reviews that you find yourself in where you need to present, summarize, and recommend solutions.
>
> **[0:47](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=47)** We have four principles that I'd like to talk about.
>
> **[0:51](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=51)** These principles are guiding lights for my presentation work, and I hope that they are useful for you too.
>
> **[0:57](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=57)** First of all, avoid very technical jargon.
>
> **[1:01](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=61)** Compare this sentence.
>
> **[1:03](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=63)** "Our API responsiveness has degraded because the logging aspect is joined to a high volume of HTTP response payloads."
>
> **[1:11](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=71)** Compare that sentence with this one.
>
> **[1:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=73)** "We can improve our API responsiveness by reducing our logging activity."
>
> **[1:18](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=78)** The second sentence has less technical detail, but it gets the point across quickly with a much higher probability that your audience will remain engaged from the start at the sentence all the way to the end.
>
> **[1:30](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=90)** There's a time and a place for additional details and we'll talk about that as we come up on some other of these principles going forward.
>
> **[1:38](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=98)** The second principle I'd like to present is the simple principle, use pictures and graphs as much as possible.
>
> **[1:44](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=104)** This is why some of these tools that we have looked at in the course are so valuable because they allow you to extract by screenshots or exported reports, pictures and graphs that can help you in your presentations.
>
> **[1:56](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=116)** For example here, we can say our overnight support team is understaffed now that our request load has increased by 62% last year.
>
> **[2:05](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=125)** Okay, that's important information.
>
> **[2:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=127)** But when you pair that sentence with a picture, suddenly your user is engaged and what you're saying has a little more credibility, because it's clear that you've done your measuring and you're quantifying of your recommendations.
>
> **[2:22](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=142)** The third principle I like to follow is to first summarize what is important and also be prepared to go deeper.
>
> **[2:29](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=149)** So one thing you can say, "We can improve our API responsiveness by reducing our logging activity."
>
> **[2:35](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=155)** Depending on your audience that might be enough.
>
> **[2:37](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=157)** However, when you come to your presentation with additional metrics, for instance, reports that you captured from your metrics and monitoring tools, then you show that you're prepared to go deeper and you can talk about more of the details of nuances with your audience as it becomes necessary.
>
> **[2:54](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=174)** And then the final principle I'd like to present is to equip your audience to ask more questions by explaining trade-offs.
>
> **[3:02](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=182)** The sentence, "Our API responsiveness has slowed by 26% over the last six months."
>
> **[3:08](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=188)** This is something you can deliver to an audience as effect that you have learned.
>
> **[3:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=193)** However, when you say something like this, "We can solve our slower API response times with more network throughput or by splitting our API into smaller microservices."
>
> **[3:24](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=204)** When you present options like this, then you invite questions and you can start talking about trade-offs and you can stepping back to some other principles.
>
> **[3:32](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=212)** You can present additional work that you have done once you find that your audience is engaged and interested in the trade-offs that they need to discuss.
>
> **[3:39](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/presenting-your-work?u=76281980&t=219)** So those are four of the principles that I like to follow in my day to day work whenever I come across a formal or semiformal presentation that I need to give.

> [!info]- Semantic Content
>
> **Env Vars:** api (6), http (1)
> **Code Keywords:** this, (2), this. (1), yield (1)
> **Analogies:** such as (1), for example (1), picture (1), for instance (1)
> **CLI Commands:** find (2)
> **Definitions:** is an  (2)
> **Speakers:** - [kathy] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/next-steps?u=76281980&t=0)** - [Kathy] As you go forward with your work to master Spring performance, here are some extremely valuable resources that I would like to recommend.
>
> **[0:07](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/next-steps?u=76281980&t=7)** LinkedIn Learning provides outstanding courses for expanding your Spring expertise.
>
> **[0:13](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/next-steps?u=76281980&t=13)** To follow up on our discussion of hibernate performance, I highly recommend the course Java Database Access with Hibernate.
>
> **[0:20](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/next-steps?u=76281980&t=20)** You can go deeper on JVM performance with the course Java Memory Management.
>
> **[0:25](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/next-steps?u=76281980&t=25)** For an all around survey of Spring Boot, check out the Spring Boot 1.0 Essential Training.
>
> **[0:31](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/next-steps?u=76281980&t=31)** Finally, the Spring Actuator documentation is outstanding and easy to navigate.
>
> **[0:36](https://www.linkedin.com/learning/performance-tuning-in-spring-apps/next-steps?u=76281980&t=36)** Here, you will find detailed implementation details to extend our work on Spring Actuator in this course.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** jvm (1)
> **Versions:** 1.0 (1)
> **Speakers:** - [kathy] (1)


## Instructor

- [[Kathy Flint]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/performance-spring-3158745)

## Skills Covered

- Spring Framework
- Performance Tuning

## Path Context

### In [[Advance Your Spring Development Skills]]
← [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] | **2 of 6** | [[Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing]] →

## Appears In

- [[Advance Your Spring Development Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Spring- Application Events]] — Spring Framework
- [[Advanced Spring- Spring Boot Actuator]] — Spring Framework
- [[Spring Framework in Depth]] — Spring Framework
- [[Spring with GraphQL]] — Spring Framework
- [[Spring 6 Design Patterns]] — Spring Framework

---

[↑ Back to top](#)