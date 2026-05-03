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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Introduction%20to%20Docker%20for%20Java%20Developers.md)

![Introduction to Docker for Java Developers](https://media.licdn.com/dms/image/v2/C560DAQEXn8hdCFwYyw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1652976343988?e=2147483647&amp;v=beta&amp;t=3r0qemij4p7e8dw6NpNMAmaRdBCd7FlQ0Wlfg_FBPEE)

# Introduction to Docker for Java Developers

> Projects Use the Docker Engine CLI and Dockerfile commands to convert Java Source code into a running containerized application without installing build tools or a run-time environment. Docker—a leading software container platform—can simplify the overall application delivery experience. In this course, expert software developer Mary Ellen Bowman helps you get started with Docker, with easy-to-use

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers) | 1h 22m | Advanced | 33K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Zero to Zero to Hero](#zero-to-zero-to-hero)
  - [What you should know](#what-you-should-know)
- [**1. Getting Started**](#1-getting-started) (4 videos)
  - [Imagine building and launching a Java app without Java](#imagine-building-and-launching-a-java-app-without-java)
  - [Installing Docker Desktop](#installing-docker-desktop)
  - [Building, deploying, and launching the Java app](#building-deploying-and-launching-the-java-app)
  - [Scaffolding Java applications with Docker](#scaffolding-java-applications-with-docker)
- [**2. Understanding Docker**](#2-understanding-docker) (8 videos)
  - [Understanding containerization](#understanding-containerization)
  - [Comparing images to containers](#comparing-images-to-containers)
  - [Writing Dockerfiles](#writing-dockerfiles)
  - [Discover the Docker CLI](#discover-the-docker-cli)
  - [Learn Dockerfile instructions](#learn-dockerfile-instructions)
  - [Convert code to a Docker image](#convert-code-to-a-docker-image)
  - [Challenge: Modify Dockerfile to remove Forever.java](#challenge-modify-dockerfile-to-remove-foreverjava)
  - [Solution: Modify Dockerfile to remove Forever.java](#solution-modify-dockerfile-to-remove-foreverjava)
- [**3. Containerization Best Practices**](#3-containerization-best-practices) (5 videos)
  - [Layering in Docker images](#layering-in-docker-images)
  - [Building multistage Docker images](#building-multistage-docker-images)
  - [Specify volumes and ports](#specify-volumes-and-ports)
  - [Docker registry](#docker-registry)
  - [Container orchestration with Docker Compose](#container-orchestration-with-docker-compose)
- [**4. Dockerfile Alternatives**](#4-dockerfile-alternatives) (4 videos)
  - [Ditching the Dockerfile](#ditching-the-dockerfile)
  - [Cloud Native Buildpacks](#cloud-native-buildpacks)
  - [Spring Boot Docker plugin](#spring-boot-docker-plugin)
  - [The Google Jib plugin](#the-google-jib-plugin)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Zero to Zero to Hero](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/zero-to-zero-to-hero?u=76281980&t=0)** - [Mary Ellen Bowman] Hey, [[Java]] developer. Do you want to go from zero to a hero in Docker? Then choose a different course. In this course, you'll become a Java hero by going from zero to zero with Docker. How is this possible, and why care about Docker containerization during Java development? Well, consider an online food order. We expect our order to arrive intact at the proper temperature. This is accomplished through careful packaging and timely delivery. The goal of software containerization is the same. Applications are packaged with the required infrastructure at the build phase, making deliveries reliable. Hi, I'm Mary Ellen Bowman. I'm a senior software developer. And in this course, we'll start from zero by reverse engineering a Dockerized Java web app, invoke the Docker [[CLI]], learn Docker file commands and containerization best practices. Then employ modern tools requiring zero Docker files, making you a hero in your Java development team. Let's go from zero to zero to hero in this Introduction to Docker for Java Developers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[CLI]] (1)
> **CLI Commands:** docker (7)
> **Env Vars:** cli (1)
> **Speakers:** - [mary (1)

#### [What you should know](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/what-you-should-know?u=76281980&t=0)** - [Mary] To interact with the exercises in this course, I expect you to have [[Java]] 11 installed. Although, the examples are not very complex, so Java 8 should be fine. Apache Maven for automated builds and IDE for debugging. I use IntelliJ, but you do you. And that you will be able to install Docker for desktop. We'll walk through that later. I expect you to have a basic understanding of Java and how to build with Maven. This course is an introduction to Docker for developers. Your time is valuable, so I don't drag you through every detail. I expect that you, as a developer, will be able to flesh out any extras as needed. Many examples in this course are [[Spring Boot]] microservice web applications. If this is new to you, I suggest you watch my course, Creating Your First Spring Boot Microservice, in the [[LinkedIn]] library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Spring Boot]] (2), [[LinkedIn]] (1)
> **CLI Commands:** docker (2), apache (1)
> **Versions:** java 11 (1), java 8 (1)
> **Env Vars:** ide (1)
> **Tools:** intellij (1)
> **Definitions:** is an  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [mary] (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Imagine building and launching a Java app without Java](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=0)** - [Instructor] Let's jump right into this course with actual code. This is a [[Java]] project that I created with [[Spring Boot]] Initializer. This is a great resource for creating a stubbed out Spring Boot application with all the desired dependencies and scaffolding. So in this example, I have a Spring Boot app with Spring Web as a dependency, and that will make this a Spring MVC web app. And then I have the Spring Boot actuator. Actuator provides built in [[Representational State Transfer (REST)|rest]] endpoints for monitoring the status of an application. The most famous is the slash actuator slash health endpoint, which returns the status in [[JSON]] format. We have Java 17 selected and package it as a war, meaning that Tomcat must be provided by the host. It is not embedded in the application. So the resulting code is this. After I generated it, downloaded it to a ZIP, and then expanded into this folder. And so I want to build, deploy, and run this application at the command line, then exercise the actuator slash health endpoint. Let me just show you the actuator health endpoint. Doing a curl. To local host 8080. And then the end point is actuator health. And I should return a JSON status saying up. And it failed to connect, because there's nothing bound to that port right now.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=95)** So the problem is, this was made for Java 17, and I have Java 11 installed. So there's Java 11 and I don't have Tomcat installed either. So let's prove that. Brew is a command available on [[Linux]]-based systems. And it says it can't find Tomcat. So is it impossible? Can I not run this? Well, yes, I can. I added some magic in a script that I'm going to invoke called run-demo.sh.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=141)** And I'm going to invoke that. And let me expand the window here a little bit. And so there's a lot of activity going on here. I see the [[Microsoft Word|word]] Tomcat, and I see JDK17. Temurin, I have no idea what that is. But I'm just going to let this run, and it's going to take a while. So I'm just going to speed this up a bit. Now we see some familiar messages running Maven, and some dependencies are being downloaded into Maven. The Maven repo is getting expanded. Okay, now we see a message that a star.war file is being copied into a Tomcat web apps root.war folder. So what that means is the default context. So we don't have to have a context at the end of a URL. So it says it's done. I have a prompt back. Let's try that curl again.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/imagine-building-and-launching-a-java-app-without-java?u=76281980&t=208)** Yep, I get a message back that status is up. Do I have Java 17 installed now? No, it's still Java 11. And do I have Tomcat? No, I don't. Well, is it magic? What was in this script? So is it impossible? I will also say that, I can't really show it to you, but there was nothing new in my .m2 Maven repository either. How is this even possible? Keep watching and I'll show you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (7), [[Spring Boot]] (4), [[JSON]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Linux]] (1)
> **Env Vars:** json (2), mvc (1), zip (1), jdk17 (1), url (1)
> **Versions:** java 17 (3), java 11 (3)
> **CLI Commands:** curl (2), make (1), brew (1), find (1)
> **Definitions:** is a  (3)
> **File Paths:** run-demo.sh (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Installing Docker Desktop](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/installing-docker-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/installing-docker-desktop?u=76281980&t=0)** - [Narrator] The amazing secret, Tomcat was installed. The application was built with Maven and JDK 17 and then deployed the Tomcat all within the Docker run time environment, which I have installed. For the [[Representational State Transfer (REST)|rest]] of this course, you can just watch what I do but I recommend that you install Docker for Desktop runtime yourself to have a better learning experience. For developers and small businesses, Docker for Desktop is free. Once installed, issue the Docker dash V command to verify that it's up and running. There is also a nice UI available called Docker for Desktop. To keep this course simple we won't explore the UI much. We will be sticking to the command line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** docker (5)
> **Env Vars:** jdk (1)
> **Tools:** command line (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [Building, deploying, and launching the Java app](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=0)** - [Instructor] So assuming you've installed Docker for desktop and downloaded the exercise files for this chapter, I'm going to demonstrate what's going on under the covers. Follow along if you like. All the concepts mentioned here will be fully covered in later videos, so be patient with ambiguity for now. First, let's look at that run demo script. There are actually two commands, docker build and docker run. Seems logical enough. We build something, and we run something. Let's break these commands down. So what are we building and what are we running? In step one, we are building an image. What is an image? At its most basic sense, it's a bunch of files serialized into a binary. I'm going to type it here.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=53)** I have two inputs to the docker build command.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=56)** - t demo-image is simply an image tag name. I could tag this image with any name I want. And if I don't give it a name, Docker leaves it tagless. The second input is dot. There's a lot going on in that dot. Dot means look for a file called Dockerfile in the current directory. The Dockerfile was not included by the code generated by Spring Initializr. I created it. Let's look at the Dockerfile to see if we could decipher what is actually being installed in the Docker runtime environment. For a small file, there's a lot going on here, and some might look familiar to you. Let's see what intuition can tell us. FROM seems like a starting point, tomcat:9.0-jdk17-temurin.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=105)** If you don't know Tomcat, it's a web application server. Properly configured, [[Java]] web applications can be deployed to Tomcat by copying Java to a web archive file to the Tomcat web apps folder. Okay, so Tomcat version nine, I get that. What about jdk-temurin? If you Googled it, you'd see that temurin is a free open JDK binary for Java 17. The next three commands seem grouped together. COPY . /app, okay. Copy I would think, dot means the current working directory to a folder called /app. WORKDIR, that's like set your present CD to that folder. And RUN, oh, we see something like Maven, mvn package. skipTests, okay, that seems like we're going to build this Java application. So building the project creates a .war, and that's why we have RUN and then a cp, copy, like [[Linux]]. We're going to copy the .war file that's generated into a /user/local/tomcat/webapps/ROOT.war folder. And then, finally, there's a command that starts the catalina.sh script. So let's issue the docker build command, and I'm going to change the tag to mydemo just to differentiate this is new work we're doing. And then let's launch it. Make the screen a little bigger here.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=200)** As we saw before, this takes a little while. Okay, that finished. Now let's see if we can run that curl command again to see if the endpoint is up.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=218)** Nope, it's still not running because we haven't actually run anything yet. We've created an image, and let's see, we can issue a command called docker images. And we could see that, from that command, that there is an image called my-demo-image. Now we want to actually run this. So looking back at our demo script, we have the command to docker run and et cetera, and I'm going to talk through that. Docker run has many options available to it, but this one has three inputs. The name of the running image, which is called a container,
>
> **[4:15](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=255)** - p specifies the publishing and binding of ports to the host machine, and -d, which is the image name. So let's try using this with our new image tag and give it a new container name. I'm going to say docker run -name my-demo-app -p
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=280)** 8080:8080 -d my-demo-image.
>
> **[4:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-deploying-and-launching-the-java-app?u=76281980&t=292)** So now something has started running, and some of the magic is starting to make some sense, and then let's dig even further.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[Linux]] (1)
> **CLI Commands:** docker (11), make (2), cd (1), mvn (1), cp (1)
> **Env Vars:** run (2), jdk (1), copy (1), workdir (1), root (1)
> **Definitions:** is an  (2), is a  (1), is called (1)
> **Speakers:** - [instructor] (1), - t (1), - p (1)
> **Versions:** 9.0 (1), java 17 (1)
> **File Paths:** catalina.sh (1)
> **Code Identifiers:** skiptests (1)

#### [Scaffolding Java applications with Docker](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=0)** - [Instructor] So I said we had something running, but let's actually prove it by running the curl command. And look, we have status is up. The endpoint is live. That's awesome. So now that we have actually something running, let's look at the running processes. Docker PS dash A, similar to a Unix PS to list the processes. And there we see a container. At the end there is the name, My Demo App. That's what we created. And it's based off the image, My Demo Image. So now that we see that My Demo App is running, and it is from the My Demo latest image, we know that a running image is called a container and we see that container ID. What is actually going on here? Well, we're going to find out. Let's run the following command. Docker exec dash T dash I. Don't worry about all those flags for the moment. Give the container name, My Demo App. And slash bin slash SH, which will run a shell. And we get a show prompt. How about that? Let me do an LS. And look at that. It's showing files similar to what we have here in the project. Let's do a present working directory is in the slash app folder, we are. And let's do a [[Java]] version. And there's Java 17.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=96)** So we are actually running within our container right now. And it's provided a Unix shell with Java 17 running. And we have our folder app, which has our files in there. Let's see that target folder. There's our target folder with the war that was built. And let's see if Tomcat is present.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=134)** Yes, there's the Tomcat folder.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=146)** And there is the root.war web app. So this is it. This is our deployed web app. So what we have here is not just a running Java application, but an entire infrastructure. The shell, the Java build, the Java runtime. Tomcat's installed all the way down to an operating system encapsulated into one self-contained unit. Hence the name container. I hope this demonstration has wet your appetite to learn more, but before continuing, let's clean up our environment a little bit, because all these work that to building containers and images can take up a lot of space on your disks. So let's just clean up our work here for a bit. Let's exit from the shell. And we are going to stop our container and remove it.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/scaffolding-java-applications-with-docker?u=76281980&t=200)** And we'll remove it. So it's gone. And now we're going to remove the image. RMI. Oops. And there's no image left, so we've cleaned up our work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6)
> **CLI Commands:** docker (2), curl (1), find (1), ls (1)
> **Versions:** java 17 (2)
> **Env Vars:** rmi (1)
> **Definitions:** is called (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 2. Understanding Docker

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding containerization](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=0)** - [Instructor] Containerization. What a nonsensical buzzword. I'm sure you've heard it before, but what does it actually mean and what's the benefit? Back in my introduction, I claim that software is not complete until it has been successfully delivered. What do I mean by that? Without containerization, software is typically built once, packaged specifically for a certain deployment environment, perhaps to a virtual machine or a physical host, and then delivered to that environment. Let's think of a food order and delivery. The food preparation and packaging are done together in the kitchen and then sent out for delivery. The packaging contents are the same, no matter if it travels by foot, scooter or car. Software containerization applies those same principles. During the build phase, software is bundled with all it needs as one immutable artifact called an image. The image defines all the dependencies it needs to run, including any operating system files and libraries. The image is identical, whether it is delivered to a test, staging or production. It follows a specification so that the runtime platform on test staging and production understands how to deploy it. Identical images can be seamlessly swapped out or replicated at runtime, making deployments resilient and expandable. The containerization concept is not new. Docker, Incorporated and other companies created containerization solutions. To address possible diversions,
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/understanding-containerization?u=76281980&t=93)** the Open Container Initiative, or OCI, standardized a container format and a container runtime. Docker's original image format has become the OCI image specification, and various build tools support it. The OCI runtime specification is the platform that unbundles the image and runs its contents in an isolated environment. Docker donated its runtime to the OCI as the first implementation of the specification. Other run times are available that follow the specification, but this course will focus on Docker.

> [!info]- Semantic Content
>
> **Documentation:** specification (5)
> **CLI Commands:** docker (4)
> **Env Vars:** oci (4)
> **Speakers:** - [instructor] (1)

#### [Comparing images to containers](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=0)** - [Tutor] So, given that introduction to containerization concepts, let's get down to actual terminology Image. Also known as container image or in this course, a Docker image. An image is an immutable artifact composed of files. It encapsulates a desired operating system, environment, the application, and a run command. We use tools to build an image. Consider the [[Java]] Ecosystem. Java does not execute directly from Java source code. The source must be compiled into a byte code archive, usually a Java archive or JAR. JAR files can be installed into the local Maven.m2 repository or shared to server registries like Maven Central, Artifactory, or Nexus. Likewise, the containerization ecosystem requires a pre-built application image. We use tools to build an image. Images once built are installed into a local registry, or could be shared to remote registries like Docker Hub. The next term is container runtime. Also known as a container engine. The container runtime is a platform for running images, just as a Java Runtime is a platform for running JARs. In this course, we will be using the Docker Container Engine. The last term is container, also known as Docker containers or running container. A container is the actual instance of a running image on a container runtime.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/comparing-images-to-containers?u=76281980&t=95)** Just like an object is an instantiation of a Java class, a container is an instantiation of an image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6)
> **Definitions:** known as (3), is an  (3), is a  (2)
> **CLI Commands:** docker (4)
> **Env Vars:** jar (2)
> **Exercise Files:** source code (1)
> **Analogies:** just like (1)
> **Speakers:** - [tutor] (1)

#### [Writing Dockerfiles](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/writing-dockerfiles?u=76281980&t=0)** - Now let's learn how to build an image. The primary tools for standing up a Docker image is with a Dockerfile and the Docker build command. Let's learn about Dockerfiles first. A Dockerfile is basically an image recipe card. It begins with a From base image and ends with a CMD or entrypoint command. From provides the builder a starting state, followed by more of the following, add and copy commands contribute files from the local file system into the image. Additional Froms are for creating multi-stage builds. Run executes a shell command within the image. User claims a user permissions for proceeding instructions. Volume is used to associate a folder in a container with external data. Workdir changes the current working directory. And CMD or entrypoint is the final command which usually launches the containerized application. There's a lot more instructions that are available, but these are just some of the basic ones you'll see.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2)
> **Env Vars:** cmd (2)
> **Speakers:** - now (1)

#### [Discover the Docker CLI](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=0)** - [Instructor] Before actually invoking Docker files, we need some overall understanding of the Docker Engine. The Docker engine is the Docker Toolbox. Two components are the Docker Daemon, which is the Docker runtime Docker server. And the Docker [[CLI]], the command line interface that invokes the services of the Docker Daemon. Let's look at the commands for creation. Docker build creates an image, docker run instantiates an image as a container and runs it. Next, some informational commands. Docker images lists all the images in the local registry. Docker ps lists containers, similar to the Unix process command. Docker exec executes a command within a running Docker container and docker system has commands for general Docker system inspection. Now for tearing down. Docker rmi removes an image. Docker stop stops a container from running. Docker rm removes a container. And docker system prune removes all unused or orphan images. The online reference documentation goes all through all of these commands and all of their options. So at docs.[docker.com/reference](https://docker.com/reference), you can drill in and see all the different Docker file commands. And here's the Docker CLI and all the interfaces just drill down into Docker CLI and it lists all the options that there are for a command, as well as on the command line,
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/discover-the-docker-cli?u=76281980&t=92)** you've typed docker --help and it will list all of the commands as well as then if you say docker command --help, it'll list all the options. So there are lots and lots of options that you can use and flags and this is the resource you would go to to find all the details on that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (3)
> **CLI Commands:** docker (27), rm (1), find (1)
> **Env Vars:** cli (3)
> **Tools:** command line (2)
> **URLs:** [docker.com](https://docker.com) (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Learn Dockerfile instructions](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=0)** - [Instructor] Okay, let's get back to our developer happy place, our IDE. The exercise files in this chapter go through several examples of creating images in containers using Dockerfiles and [[Java]] applications. These examples here are purely for educational purposes. They do not represent Dockerfile best practices. Let's start with our simplest one and it's in the dockerfile-demos folder/os. And there's simply just a Dockerfile in there. There's nothing else in that folder. This Dockerfile only has a FROM and a CMD statements. FROM alpine. What is alpine? Alpine is a slimmed down image of a [[Linux]] operating system. Where does alpine come from? Just like Maven Central, there is a default Docker image registry called Docker Hub. Here is the Docker Hub website under the image repository for alpine, and we are going to use what is the latest tag of alpine. So because our Dockerfile doesn't have a tag, it just says alpine, it's going to use latest and from this operating system, we're just going to issue the ls command, which gives us the directory listing of the root folder. So let's get to it. So I'm going to run the docker build command from the os folder. And just give dot as the present working directory. And it built that image very quickly. Let's see.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=91)** And there's the image for us. Because we did not give a tag name for our image, it creates a image ID, which it does every time but we cannot use a name now. We have to reference it with the image ID. And now let's create a Docker container from that image. Docker run. I'm going to give a name to it. I'm going to call it os-app and I need to copy and paste the image ID
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=124)** for that to run and it ran very quickly because it just had alpine operating system and just give a directory listing there. Very simple. Okay, let's clean up our work. We're going to see we have one vs-ig. It says okay, what running containers do we have? Even though it says it exited, we still have that container out there, so we need to remove it. I'm also going to remove the image.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=162)** Okay. And it's gone. Okay, let's go to our next example. We're going to step up a little bit and this time, we're actually going to reference some code. We have a Hello World in the hello folder. Here's our Dockerfile. And our Hello Java class. So our Java class is just a simple main of Hello World. The Dockerfile for it says FROM openjdk:11-jdk, COPY and Hello.class file, and run it. So now we are referencing openjdk. Let's look at that. So here is the openjdk repository under Docker Hub. And you can filter by a tag name. So I said filter by 11-jdk and there's a lot of different versions of operating systems and things that are bundled with it. And here's the tag of 11-jdk. That's what we're going to use. So I need to compile that Hello.java class. Go to that folder. I'm going to compile at the command line.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=240)** So now the class file's there. And now let's actually build and run that. This time, I'm actually going to give our image a name so it's easy to refer to. So we created the image. There's our image hello. Let's run it. Refer to it by... Give it a name of hello-app. And the image hello. And it came back and say Hello World. There's our container, it's exited but we will need to remove it. And we can remove our image.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=303)** Okay, great. So the next example we're going to use is in a runapp folder. We have a bit more complex example here where we have a Dockerfile that's going to start from openjdk:11. Add what the contents of this app folder into the /app folder in the Linux system. Change directory to that, and then run it. So this is an example where we have a Forever.java class where there is a class that will just never stop. It runs forever and we're going to leverage the Lombok library, which just with this annotation dash @log. I don't have to declare a log file. So this is just a simple example where I want to have other files than just the Java class file. Change directory to runapp/app because I need to compile this first.
>
> **[6:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/learn-dockerfile-instructions?u=76281980&t=377)** So I've compiled it into the class file. I'm going to cd back to the directory where the Dockerfile is. And now I'm going to build and run it. Call it forever. So it built that. And now let's run it. Call it forever-app. And the image is called forever. And so that is basically going to keep running forever. It's not going to stop. That's why I'm not being prompted again at the command line. So to make it stop, I will just hit Control + C and I'm back to my prompt. And I'm going to do the cleanup again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Linux]] (2)
> **CLI Commands:** docker (7), ls (1), cd (1), make (1)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **Env Vars:** ide (1), cmd (1), copy (1)
> **File Paths:** hello.java (1), forever.java (1)
> **Ports:** :11 (2)
> **Tools:** command line (2)
> **UI Navigation:** go to (2)

#### [Convert code to a Docker image](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=0)** - [Instructor] Openjdk:11-jdk not only contains the [[Java]] Runtime, it also includes the Java Development Kit. So the compiler. So let's actually invoke the compiler within a Docker file and convert source code into an image. So I have open here in the App folder a Dockerfile-build. And what this is going to do is just pull in the entire contents of the app folder into the /app directory, change to that directory, and then compile the code in forever.java, and then run the code as the command at the end. So let's build the image first. We're in the runapp folder. There's the Dockerfile-build file. So let's go Docker build -t. And we're going to call it foreverbuilder. And give the file parameter to say what Docker file to use.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=70)** And then dot to say find it in the current directory. So it's going to download the JDK. It's compiling the forever.java and it built the image. So let's run that image as a container. Docker run, going to call detach on it. So it will run in the background and give it the name of foreverbuilder-app,
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=105)** and base it off of the foreverbuilder image. And so now, we have a running container. Let's look at the logs because it was run asynchronously. So we just type Docker logs and give the container name.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=133)** And that was the message. Remember, print it in the forever.java file. There it is, run forever using Lombok. And now, since we have a running container, we can actually invoke commands within it. So very simply, a few things are Docker exec -t -i foreverbuilder-app.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=159)** And let's just do an ls on the slash folder. And those are the files in there, including, right there there's the app folder. Let's invoke it again and say what's the directory of app. And that's the directory of app. The forever class was now built inside there, at forever.java and the lombok.jar. And let's try this again and actually go and shell into that folder.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=193)** So we're actually in the shell, in the runtime.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=202)** And see the running commands? We have Java running forever. And exit out of there. Excellent. So now, we want to stop this and remove it. So now, because we have a running container, we couldn't Control + C out of it. It's running in the background. We cannot remove it unless we stop it first. So I'll just prove what happens. Docker remove foreverbuilder-app.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=235)** It's going to say, you have a running container. You can't remove it. So let's try stop. That stopped it. Let's remove it. And let's clear up the images.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/convert-code-to-a-docker-image?u=76281980&t=259)** So it deleted the images. And finally, just one more housekeeping thing because Docker can create a lot of use in your file system. Right now, we have an image downloaded for the openjdk. Let's invoke this command called Docker system prune -a for all. And this is basically just going to delete any images that don't have any running containers with it. And it's saying, are you sure you really want to do this? And I was like, "Yes, we do."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (7)
> **CLI Commands:** docker (9), find (1), ls (1)
> **File Paths:** forever.java (4)
> **Exercise Files:** source code (1), download the (1)
> **Ports:** :11 (1)
> **Env Vars:** jdk (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Modify Dockerfile to remove Forever.java](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/challenge-modify-dockerfile-to-remove-forever-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/challenge-modify-dockerfile-to-remove-forever-java?u=76281980&t=0)** - [Instructor] It's your turn. It's time for a challenge. So from this exercise file, this Dockerfile.build. It's now time to see if you can remove the [[Java]] file forever.java from this Docker image after it has been built. So you want to modify this, remove the forever.java file but make sure that it still builds and runs and then prove once it is running, that you can actually see that that file is not in the slash app folder. And you would use the Docker exec command to prove that. Give it a try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3)
> **CLI Commands:** docker (2), make (1)
> **File Paths:** forever.java (2)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Modify Dockerfile to remove Forever.java](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=6)** - [Instructor] Okay, so how do you do this? How do you figure this problem out? So after we've called the javac command, we don't need this Forever.[[Java]] anymore. So we will say RUN rm Forever.java.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/solution-modify-dockerfile-to-remove-forever-java?u=76281980&t=25)** And now let's build that image again with build -t foreverbuilder -f Dockerfile-build.. So I compiled it, it says it removed it. And now let's run this image as a container. So we're running it in detached mode again. So it runs it in the background so we can inspect it with the exec command. So there's a few different things you could do here. I'm just going to run the exec to start a shell and see what directory I'm in. I'm already in the app folder, do an ls, and the Forever.java class is not there. Did you do it? I knew you could.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3)
> **File Paths:** forever.java (3)
> **CLI Commands:** rm (1), ls (1)
> **Env Vars:** run (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Containerization Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Layering in Docker images](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=0)** - [Instructor] Now that we've looked at the basics of a Dockerfile, let's look at some best practices when writing them. The first best practice we'll dive into is how best to layer the Docker image. So what are image layers? Images are not just one blob of file. So they're actually grouped by the action of each Dockerfile instruction. So each layer only includes the file additions or changes from the previous layer just like how [[Git]] commits only contain the differences from the previous commit. A hash is calculated for each layer. Once a layer is created, it is cached locally. When an image is rebuilt, if Docker detects no change in a layer, then the cache layer is used. If there is a difference, the cache is no longer valid and the layer is rebuilt. Subsequent layers are deemed invalid and must also be rebuilt. So knowing how layering works, here are some best practices when creating a Dockerfile. You should start from the lightest image possible and that starting image must be a stable verified image and tagged, not latest, which can change. Only add files required to run the image and order your Dockerfile instructions from least to most frequently changed. In the exercise files, there is a very simple [[Spring Boot]] web app called Layer Demo, and it has a hello world API. There is a Dockerfile that has been poorly layered
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=94)** and here it is right here. I'm going to build the JAR and then the image. So first I'm going to make the layered JAR and here's the command to build the image with this bad layering Dockerfile. So now that we built that image, I'm just going to show how layers and caching work. I'm going to change this to say hello universe.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=129)** Save it, build it again, and then build the image again. So you can see from the output here that only the first layer was cached. The [[Representational State Transfer (REST)|rest]] of the layers had to be rebuilt. So what were the problems with this Dockerfile? Take a moment to look at it, and then I'm going to show you, but I want you to think what it would be first. So you could see that first, it's using alpine:latest and alpine:latest could change. Another problem is is that we're starting from an image that does not combine the operating system in [[Java]], they're actually separate so alpine is just the operating system and then it runs an APK ad, which pulls down the open JDK so that's inefficient. Here we're adding the entire app folder instead of the JAR. So that's extra work that's not needed and we're not adding the JAR right before the command. So because we're adding that folder before we actually are installing the JDK, then that has to be refreshed again. So it not using it for cache. So it really should be added right before we start the JAR. And finally, we're using JDK instead of the JRE. So let's look at the example of a good layering system here.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=225)** So here we're applying best practices. So from this example, we're using open JDK 11 JRE and slim. So it's a slim down operating system with just the JRE. We're setting the WORKDIR at the app right after that. And so now we're only adding the JAR to the app folder and then starting it from there. So let's build that one and see how it goes. So we're going to pull down the open JDK 11 JRE slim and then run the rest of the instructions. And now I'm going to change that file back to hello world,
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=276)** rebuild it and rebuild that image.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/layering-in-docker-images?u=76281980&t=285)** So you can see all of the stages that were cached except for the last one where we copied in the image and then run it. And then also let's actually look at the images that now that we're using JRE instead of JDK. So we see that on this line here, bad layering had 294 megabytes and good layering had 248 megabytes, which is a lot smaller.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Git]] (1), [[Spring Boot]] (1), [[Java]] (1)
> **Env Vars:** jar (6), jdk (6), jre (5), git (1), api (1)
> **CLI Commands:** docker (2), git (1), make (1)
> **Definitions:** is a  (4)
> **Prerequisites:** required to (1), before we start (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Best Practices:** best practice (1)

#### [Building multistage Docker images](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=0)** - [Instructor] One of the goals of Dockerfiles is to have the smallest footprint possible. A Dockerfile may create intermediate files unneeded at the final runtime, contributing to image bloat. Multi-stage images to the rescue. In the exercise files, we again have a simple, layer demo [[Spring Boot]] web app, but now the Dockerfile runs Maven to build the image. Let's look at this Dockerfile called Dockerfile Single Stage Build. We start with OpenJDK 11 image, copy the project code, run Maven package, then launch the executable jar. Let's run it to build that image.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=57)** So this is going to take a while because we not only have to download the OpenJDK, we're going to have to also download everything around Maven and all of the Spring dependencies. So we're just going to speed this up. Okay, that ran and finished. It was simple, but the problem is is that we really don't need the JDK or Maven to run that jar, nor should we include the original code and other files in the target folder. Now let's look at a different Dockerfile. This Dockerfile starts out the same, same starting image and Maven command, but then there is another from statement with a smaller operating system and the [[Java]] runtime environment. What's going on here? Recreate a new stage. This is a scaled down environment. The first stage has a label of builder, and we copy from the builder image the layer demo jar file. Then the second stage runs the jar in the JRE. At the end, the first stage is wiped away. Now let's build this multi-stage image.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=144)** Okay, that finished. Let's check out the image sizes. Wow, that's an incredible difference. From the single stage, it's 812 megabytes. From the multi-stage, it's 268 megabytes. Multi-stage images don't have to be just builds from source. Let's check out our jar. Do a quick Maven package.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=182)** So now I'm just building the jar locally, 'cause I want to see how big it is once it's built.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=193)** So this jar is about 40 Meg (instructor laughing) and it's a really simple application. All our code is just a "Hello, world!" But most of it comes from that Spring dependency to make it a web app. Well, Spring Boot became Docker aware since version 2.3, and since 2.4, by default, it identifies layer boundaries within a jar. Let's look at another Dockerfile that we have called Docker Multi-stage Layering. This silly looking Dockerfile leverages the capability for better layering. On line 10, we invoke a Spring Boot layering tool that separates the jar into four folders. So by invoking this command, it separates into, it creates a folder called Dependency and all the jars are identified by Maven that are interdependencies that are called, for example, come from Spring, a Spring loader folder, which is system for generating self-contained jar wars. That's actually this; we're going to invoke a command from Spring Boot loader, the snapshot dependencies, any dependencies whose versions contained snapshot, and an application folder, which is actually our application that we wrote that are separated into class files and resources, dot class files. Then let's look at our second stage. Now we're from JRE-slim. In the second stage,
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=287)** we're actually going to copy those individual folders from the previous stage, called Extractor. And we're going to copy the dependencies into slash app, the Spring Boot loader folder into slash app, as well as the snapshot dependencies and our class file layer demo application, dot class. And then we're going to say Java and invoke this jar loader command, which has the intelligence to launch our application when it's structured like this. So let's run that. Clear the screen.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/building-multistage-docker-images?u=76281980&t=340)** So that's going to build. So we are using the JDK, then we're invoking the command to separate the jar out and then copying the layers out. And now we've created it. And let's do a Docker images. So you see that this multi-stage layering is about the same size as the multi-stage. But what happens is if you need to rebuild only at layer six out of six, if you have to rebuild, only this line here is going to have to run again. So you can also break apart fat jars on your own. It's possible with the Java jar command. But since this tool was provided and if you're using Spring Boot, why not use it? So this approach can make your Dockerfiles less clean looking and the necessity of it is your choice, but it's good to know about as a possible best practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (6), [[Java]] (3)
> **CLI Commands:** docker (3), make (2)
> **Env Vars:** jdk (2), jre (2)
> **Versions:** version 2 (1), 2.4 (1)
> **Exercise Files:** exercise files (1), download the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)

#### [Specify volumes and ports](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=0)** - [Instructor] Each container runs in a self-contained environment, hence the name container. But no container is an island, many must publish information to the outside world or require persistence outside of its lifespan. This is where volumes and ports come into play. Containers are ephemeral, meaning their state only remains while running. However, volumes are perpetual. They provide a way to persist long lasting information. There are three types of volumes that can be declared as a docker run parameter. A host volume is a direct mapping of a host filesystem to a container filesystem. So -v with the host container full path is mapped to the container-folder-name. And anonymous volume is a Docker-managed volume and its name is autogenerated. Use -v with just the container-folder-name. And named volume is also Docker-managed, but a name has been provided. So we'll use -v with a name not preceded with a slash mapped to the container-folder-name. Now let's see how these different kinds of volumes work. So we're going to do a host volume first. And in my filesystem, I have a my-host-folder and a file that says host-hello.txt
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=94)** and says Hello from the host. I'm going to copy and paste a command here because it's kind of long. So we're going to do a docker run with the alpine image. And we're going to map with the volume -v, the full path which I'm going to use the substitution here in [[Linux]], /my-host-folder which is this guy here, and then :/container-folder-name. So it's going to download the alpine image, and it's say started. So let's actually exec into that container.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=161)** So we're in the app now, so let's do a cat /container-folder-name, and host so the file is there. It says Hello from the host. And let's actually write to that file, echo Hello from the container. And append that to /container-folder/host-hello.txt.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=191)** By click up in here, there's that message. Okay, let's exit out of that. Now let's create an anonymous volume on a container.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=204)** So here we're doing a docker run, and the name is anon-volume-app. The volume just has /container-folder. And it's also using the alpine image. And now let's create a named volume example. So we're going to name the volume bob, also mapping it to container-folder in a different container called named-volume-app. So we're going to use the docker volume command, and do an ls. And here we see our volumes. One is called bob and one has this long hash name on here. So that's the auto generated name. And let me do try something for you, docker volume remove, you can do and I'm going to say bob. And it says you can't, because there is a active container using that. So let's do an exec where we touch a file in the container. We're going to do an exec command into the anon-volume-app, and then just touch a file called anon-file in the container-folder. And then do the same thing in our named-volume and then.
>
> **[5:06](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=306)** So we've tried to touch that file. And now I'm going to actually open up Docker Desktop UI that will make it easy to see the volumes and the images. So here is the Docker Desktop UI, and I've selected Volumes. And we can see there's bob here and here's our anonymous one. Let's click into bob. And we see that the container associated with that. And you can have many containers associated with a volume. And if I click DATA, there's our named-file. And go back to Volumes and go to our anonymous one. And here's our anonymous volume app and data and there's our anonymous file. Let's move on to ports. So in the filesystem, there is a [[Spring Boot]] web app called portdemo. And that just includes the actuator dependency. So there's no real code in here, it's just the actuator endpoint again. So let's clear the screen, and cd into portdemo. And we're actually going to build that,
>
> **[6:23](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=383)** and I'm going to run it too.
>
> **[6:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=392)** So you'll see the Spring Boot app startup. And I'm going to go into another terminal here and do a curl localhost:8080/actuator/health.
>
> **[6:51](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=411)** And we see that it's up. Let's go back here. So now we see how it's supposed to run outside of a container, so let's containerize it. So there is inside of portdemo, a Dockerfile that merely just copies in that JAR that we just built and runs it. So we'll say docker build -t portdemo dot.
>
> **[7:22](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=442)** So it'll build that image. Okay, the image is built, now let's run it.
>
> **[7:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=455)** Let's give it a name portdemo-app with portdemo.
>
> **[7:46](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=466)** So that's running in detached mode. I'll go back into my other terminal here. And let's try our curl again, now that it's containerized on 8080. And there's an error. And why did we get that error? So the reason is is that portdemo-app is not published port 8080 and it's not bound to the host. So I'll show you the command we should have run. First of all, we'll give this container a different name. We'll call it portdemo-app1, and we're going to provide a new parameter here, -p 8080:8080.
>
> **[8:32](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=512)** So what that does is were the first 8080 is for our host, the local host, and the second 8080 is the 8080 that's actually the default port that's from the Spring Boot app in the container. In fact, you know what, let's name this portdemo app just 80 so we know what we're doing there. Okay, come over here. We're going to try that curl again on the 8080. And the status is up, that's cool. And so we can make that port anything we want to. So let's make another container. We're going to call it container 90 and we're going to map 9090 to 8080.
>
> **[9:24](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/specify-volumes-and-ports?u=76281980&t=564)** Okay, go over to another terminal here. And we're going to do a curl to localhost:9090 for the actuator. Excellent. Okay, so before moving on to the next video, don't forget to remove your containers and images. On we go!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (3), [[Linux]] (1)
> **CLI Commands:** docker (10), curl (4), make (3), cat (1), ls (1)
> **Definitions:** is a  (4), is an  (1), is called (1)
> **Tools:** terminal (3), docker desktop (2)
> **Ports:** :8080 (2), port 8080 (1), :9090 (1)
> **File Paths:** host-hello.txt (1), container-folder/host-hello.txt (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1), [localhost:9090](https://localhost:9090) (1)
> **Env Vars:** data (1), jar (1)

#### [Docker registry](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=0)** - [Instructor] We've talked about images, layers, and caching. And you've seen these from instructions, in previous examples, referencing various base images, but where did these images come from? They were downloaded from our default registry Docker Hub. The Docker engine behaves similarly to Apache Maven. When building a Maven project that requires a dependency library jar, Apache Maven first checks the local .m2 repository folder. If the dependency jar is not found, Maven downloads it from the remote repository. If no organization repository exists Maven downloads the jar from Maven Central at search.[maven.org](https://maven.org). Likewise, when building or running an image the Docker engine first checks the local image cache. If the image is not found, the Docker engine downloads the image from the server registry. If no organizational server registry exists, then a Docker engine downloads the image from Docker Hub at hub.[docker.com](https://docker.com). Let's go to Docker Hub and I'll actually search for the Alpine repository. It's a public repository, so anyone can download it. I'm going to go look in the tags and find the latest. And here's a convenience method, just copy that command to pull it down. In my terminal, I'm going to pull it down And it's going to download it. It's pretty small so it came down pretty fast. Notice the last line there, [docker.io](https://docker.io) is the URL of the registry, library is the name space,
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=97)** alpine is the repository, and latest is the tag. Now, what if I want to share my images I create? All I need to do is retag it and send it to a name space. You may have noticed on Docker Hub it showed that I was logged into my free account called mellenbowman I want to make a copy of Alpine latest, and upload it to my namespace. So first I have to tag it. So I'm going to change the tag of [docker.io/library/alpine:latest](https://docker.io/library/alpine:latest)
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=137)** and retag it to [docker.io/mellenbowman/alpine](https://docker.io/mellenbowman/alpine).
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=146)** And I'm going to give it a tag of me. Beautiful now, I want to push that up to my account. docker push [docker.io/mellenbowman/alpine:me](https://docker.io/mellenbowman/alpine:me)
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/docker-registry?u=76281980&t=170)** And it says access denied and it should because you know what? I'm not logged in. So I need to do a Docker log in first. So just not anybody could push to that repository, you have to have credentials. And, by default, it's going to Docker Hub. So I will say my username. And my password, and I've logged in. Now, let's try that command again. It's pushing, and it pushed. So let's actually look in the Docker Hub website. Go back to my repositories, and refresh. And there it is, Alpine under my name space and the tag of me, there it is. So let's say I want to pull that down. Let's first, go back and remove current images I have in the cache so Docker images. And I'm just going to use the shortcut docker system prune -a and that's just going to take... remove both those images because there's no containers associated with it. And now I'm going to do a Docker pull. And it pulls it down, and there it is. It made the full round trip.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (20), apache (2), find (1), make (1)
> **URLs:** [docker.io](https://docker.io) (4), [maven.org](https://maven.org) (1), [docker.com](https://docker.com) (1)
> **Non-Speech:** (typing) (4)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Container orchestration with Docker Compose](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=0)** - [Instructor] In the Docker Hub, there is a trove of images ready for usage. Here's one for [[PostgreSQL|Postgres]], a database. So how do containers like web apps interact with other containers, such as Postgres? Let's go through an example. This is a [[Spring Boot]] web app that is a backend part of a message blog. The data model is a Blog class. And it's a JPA entity containing a message and an auto-generated identifier. There is a [[Spring Data]] repository interface for the data access layer. If you are not familiar with Spring Data repositories, I have a course in the library called Spring Data 2. The Application class is also a Spring Data MVC [[Representational State Transfer (REST)|REST]] controller that exposes endpoints to create and view blog messages. So here's the API to list all the blogs. This is the API to create a blog. And then there is a silly API that actually stops the whole application. And we'll talk about that later. This is not a best practice to have a REST controller combined with the Spring Boot Application class. But this is just to help keep things simple and explain things better. Here's the application's properties file and it has all the properties for setting up access and the URLs and passwords and username
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=95)** to access the Postgres database. And finally, we have a Dockerfile and that will take this code, build it in Maven, and then run it as blogdemo.jar. Running related containers is called orchestration. This can be done manually or through tools such as Docker [[Jetpack Compose|Compose]], Docker Swarm, and [[Kubernetes]]. Let's see orchestration the hard way, which is manually. First, we create a network called blog-network. So any other containers included in that network can refer to each other by name. Next, we need to create an image for blog-backend then run the Postgres image to have a Postgres container. The -e allows environment variable settings to be passed in at runtime. And it has a volume, so it could persist data even after the container has stopped. And then next, we have to run the blog backend image as an app, and then we name it app and it's included in the blog-network. And from that reason, it can refer to the Postgres host just by db, by the name db. And here are the environment variables for the name of the database is blogdemo and the Postgres password is lmnop, just like set it up here as well. To manually monitor these containers,
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=192)** we'd have to manually go to docker logs on the db container or docker logs on the app container, or hit the curl of the actuator health to see if it's alive. And then finally, to tear it down, we'd have to do docker stop and docker remove. And if we wanted to remove the images, do docker rmi and then to remove the network we do a docker remove network. It's a lot of work. And if we want to do that manually, and of course if there's anything manual, there's always an automated tool. So we're going to see how Docker Compose can be used to automate orchestration. In order to start this, we have to have a docker-compose.yml file, that's the default name it's expected to be. And it's expected to follow the YML or YAML syntax. And once the YAML file has been created, simply used the docker-compose up command to start up all the containers and docker-compose down to tear them down. And there's a docker-compose daemon that provides monitoring out of the box. So let's look at our docker-compose.yml file. So all of the settings in this YAML file map directly to those Docker run command. So we have the image name is postgres, db is the container name. We have our volume set up here. Here's our environment variables that we had before for the db name and the password. And it's exposing the typical port for Postgres
>
> **[4:48](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=288)** which is 5432. And here's something new that you didn't see on the Docker run command, which is always, so this is the monitoring part. So if an application or container goes down, the docker-compose daemon will start it back up automatically. And that's a setting that you can have, and I have that set here as always. And here's our app container and it's built from the blog-backend directory. And it just to show that the Docker compose is at the level out, just outside the blog-backend web folder to give context there. It exposes port 8080 as 8080. And here's our environment variables that we had before. And it depends on this db. And that's why we can say POSTGRES_HOST=db. And it will restart always if this needs to. And here's the declaration of the volume that's needed. So let's actually push that up there so I can have a terminal. Let's clear the screen. Make sure I'm in the right folder. There's the docker-compose. So I'm going to do my docker
>
> **[6:11](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=371)** - compose up. So it's starting up, it's reading in the docker-compose file. I could run this in detach mode in the background but I wanted to be interactive and see that what's going on here. So we see it's starting up the web app, the blog web app. It's connecting to hibernate and we see the message that that has started. So let's go to another window here, a terminal window. We'll clear this screen. And I'm going to do a curl. Both will host 8080, just to say actuator/health, just for informational purposes to see that it's alive. And the status is up. Let's actually hit that endpoint called blogs. And I have already added some entries into this database for blogs. So these are just in [[JSON]] format. Some of the messages, this is a blog. Today had been a great today. Today is not such a great day. But just like four different messages that I've saved. Now let's hit that stop endpoint. And what's going to happen here is, it's actually stops the web application. And we told docker-compose, if anything happens, restart it automatically. So we hit the curl command and it comes back, oh, something's happened there.
>
> **[7:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/container-orchestration-with-docker-compose?u=76281980&t=465)** So empty reply. So let's go back to Local. And we see that it stopped. There was a shut down message. That was actually a system out print line message in the stop endpoint. It stop and it's automatically restarting again. And going back over here. And I get my data back. Now, if I wanted to take it down, I did docker-compose up in detach mode. I could just do it in the same window, say docker-compose down, but I'll do it in this other window here, docker-compose down. So that's going to take everything down for me. That's declared in the docker-compose file. A lot easier than having to manually do all that. Docker-compose is a very simple orchestration tool. And honestly, it's not used very much in production. It's used a lot as a time saver in developer machines. But it can be, it's not that it can't, but more popular production tools are Kubernetes or Docker Swarm. And there's other cloud offerings by Amazon AWS, [[Google Cloud Platform (GCP)|Google Cloud]], and [[Microsoft Azure]]. Lessons for all of these can be found in the [[LinkedIn]] library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (18), [[PostgreSQL|Postgres]] (9), [[Spring Data]] (4), [[Spring Boot]] (2), [[Representational State Transfer (REST)|Rest]] (2)
> **CLI Commands:** docker (29), curl (3), make (1), aws (1)
> **Env Vars:** api (3), yaml (3), rest (2), jpa (1), mvc (1)
> **Definitions:** is a  (8), is called (1)
> **Analogies:** such as (2), just like (2)
> **File Paths:** docker-compose.yml (2)
> **Tools:** terminal (2)
> **UI Navigation:** go to (2)


### 4. Dockerfile Alternatives

[↑ Back to Table of Contents](#table-of-contents)

#### [Ditching the Dockerfile](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/ditching-the-dockerfile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/ditching-the-dockerfile?u=76281980&t=0)** - [Instructor] We've gone through some great learning about the best way to containerize your apps with Dockerfiles. And the great news is we really don't need to use Dockerfiles to containerize our [[Java]] apps anymore and I could not be more happy about that. Various organizations realize that, while powerful, Dockerfiles can be difficult to maintain and don't enforce best practices. The alternatives are opinionated, employ efficient image layering, are lightweight, overrideable by configuration, and best of all, get you back to where you really want to be, coding in Java. There are many alternative solutions to Dockerfiles. In this course, we will talk about three, Cloud Native Buildpack Pack [[CLI]], [[Spring Boot]] Docker Build plugin and the Jib Build plugin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[CLI]] (1), [[Spring Boot]] (1)
> **CLI Commands:** docker (1)
> **Env Vars:** cli (1)
> **Speakers:** - [instructor] (1)

#### [Cloud Native Buildpacks](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=0)** - [Instructor] The first alternative we'll look at are cloud native buildpacks. The cloud native buildpack is a specification from the Cloud Native Computing Foundation, CNCF, project. Its goal is to convert code into a runnable OCI image. The Docker engine must be installed and running, and we will install a tool to demonstrate it. Here is the buildpacks website. And if you scroll down, it lists the different tools that implement it. We are going to demonstrate pack. So there's its section there. So that requires a download. So let's actually go try it out. So at the terminal, I've already installed pack. So I can say, pack build suggest, and that will list the builders that are provided. I'm going to use the first one listed here by [[Google]]. I'm going to copy that there. So the command is pack build dash dash builder.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=72)** Then my builder I'm going to use. And then I give the image name that I'm going to create. So this directory I'm in, this web app is a simple [[Spring Boot]] web application that just has a Hello World API on it, nothing fancy. But it has dependencies in there that will all be have to be downloaded. So I'm going to run this pack build command, and it's going to run a long time to build everything, because it's downloading its libraries and it has to detect, okay, what sort of source code is this? And then it detects its [[Java]]. Okay, what version of Java? And then how is it going to build? Oh, I see Maven is in here. So it's downloading all of its libraries to do that. And then finally, you'll see it actually run Maven on it and create an image. So we'll just speed this up until it's done. Okay, it finished. And so let's see what it did. Docker images. And so here is, the third line here is webapp IB with a tag, build pack. And it also downloaded the build pack builder and a build pack runner. So you see, okay, our image that it created, going from code to an image, it was about 462 megabytes, but it also had that download those builders as well.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/cloud-native-buildpacks?u=76281980&t=169)** And we had to install the pack tool, and we have to have Docker running locally for all of this to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Google]] (1), [[Spring Boot]] (1)
> **CLI Commands:** docker (3)
> **Env Vars:** cncf (1), oci (1), api (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **Documentation:** specification (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)

#### [Spring Boot Docker plugin](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=0)** - [Instructor] The next alternative to a Docker file is the [[Spring Boot]] build plugin. The Spring Boot build plugin specifically works for Spring Boot applications. Because it's part of a build plugin, it's easy to incorporate with your build pipeline. It runs cloud native build pack libraries without needing to install a specific command line tool. On top of that, it leverages special knowledge of Spring libraries when layering dependencies. It's important to note that this is only available in Spring Boot version 2.3 or higher. Let's go to our Spring Boot app. It's the same Spring Boot web app that we've used in the previous example. Nothing in it other than just a Hello World endpoint. And in the palm.xml, there's a plugin for springframework.boot. Spring Boot Maven plugin. And then, within this tag, you have the option to add configuration about your Docker image. And here, I've just added a simple one where I give the image name will be called webapp colon Spring Boot is the tag. So let's launch this. So unlike our first example with native build packs, the application is actually built on our host machine's JDK, not within the image. So Maven W, package, and then use the Spring Boot goal.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=96)** And then it is called build dash image.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/spring-boot-docker-plugin?u=76281980&t=105)** So first it's going to run through the compilation. Run any unit tests. Now it's going to invoke the imaging. So here it's downloading the Docker IO pack to build packs builder. And this is going to take a while to run. So we'll pause and then speed this up. Okay, it finished. Let's do Docker images. And see, the last line has web app Spring Boot image, and it also downloaded the packet to build packs run and packet to build packs builder images, in order to do this. So the size of the Spring Boot web app is 260 megabytes. And for just using pack, it was 462 megabytes. And then also, as you see, it had to download these builders and runners.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (11)
> **CLI Commands:** docker (4)
> **File Paths:** palm.xml (1)
> **Env Vars:** jdk (1)
> **Versions:** version 2 (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)

#### [The Google Jib plugin](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=0)** - [Instructor] The last alternative we will look at is Jib by [[Google]]. Jib is a Maven/[[Gradle]] plugin where you build the [[Java]] app on your host machine then Jib creates an image with dependencies in separate layers. An added bonus is that the image can be automatically pushed to a server registry, so there's no need to have Docker Engine installed. It's also lighter and faster than [[Spring Boot]] plugin or Pack. So I've opened IntelliJ, and here is the Jib plugin. And within this configuration tag, there's a lot of settings you can do, but I've actually set in here the image name. And because I want it to be pushed to my Docker Hub registry, I put the full path in there with the registry/, my mellenbowman is my name space, and then the actual name of the image is webapp, and then :jib is the tag. So within Maven, I'll say ./mvnw package. I want to skip the unit tests. And then the jib plugin :build. So it's trying push it, and it did not work. It was unauthorized, and that's because I haven't added credentials. So there's a couple options here. One, is within the configuration, I can actually put credentials in here or site environment variables with credentials. Another way is I do have the Docker Engine installed,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=94)** and I could do docker login [[CLI]] locally.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=103)** And it's going to prompt me for my username and password.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/the-google-jib-plugin?u=76281980&t=112)** Okay, I've logged in. Now let's try that command again. Okay, it's running, and now it's pushing that image. So just to show you, docker images, that image is not here. It's not local, it's up in Docker Hub. So in my Docker Hub, I'll drill down into that, and there's my plugin jib, pushed a few seconds ago. There's the image. I can also have it build and have the image stored locally. It's just a different goal. So it's jib: and it's dockerBuild. And the build is pretty fast. I really don't need to speed this up. Okay, now let's do docker images, and there it is right there. So comparing the Jib image to the Spring Boot plugin image, it's just a few megabytes different, but we can see, even though the image is, aside from being lighter, and then it doesn't have to download all these buildpack helpers. It's huge that you don't have to have the Docker runtime installed. So that's why many people use Jib.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (2), [[Google]] (1), [[Gradle]] (1), [[Java]] (1), [[CLI]] (1)
> **CLI Commands:** docker (9)
> **Code Identifiers:** dockerbuild (1)
> **Env Vars:** cli (1)
> **Tools:** intellij (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-docker-for-java-developers/next-steps?u=76281980&t=0)** - [Mary Ellen] So after this introduction to Docker, what's next? I would say most [[Java]] development projects can be containerized just fine using the Jib or the [[Spring Boot]] plugins. With your current understanding of Docker, you should have no trouble configuring either of them for your solutions. And once containerized, orchestration is necessary. The [[LinkedIn]] Library is a trove of information covering [[Kubernetes]], cloud container platforms, such as Amazon EKS, [[Google Cloud Platform (GCP)|Google Cloud]] Run, or [[Microsoft Azure|Azure]] Container Instances. There's also content on Docker native tools like Swarm and [[Jetpack Compose|Compose]]. If you enjoy this course, you can find all my LinkedIn Learning courses on my website MaryEllenTeaches.me and my [[GitHub]] organization is MaryEllenTeaches. I love learner feedback. Let me know what you think here or via LinkedIn or Twitter. Thanks for watching. I hope this course was time well spent and it contributes to your future success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3), [[Java]] (1), [[Spring Boot]] (1), [[Kubernetes]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **CLI Commands:** docker (3), find (1)
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