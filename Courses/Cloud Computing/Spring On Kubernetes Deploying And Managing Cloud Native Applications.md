---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: spring-on-kubernetes-deploying-and-managing-cloud-native-applications
url: "https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications"
level: Advanced
updated: 10/7/2024
learners: 38941
skills:
  - Cloud-Native Applications
  - Spring Boot
  - Kubernetes
exercise_files: true
github: "https://github.com/LinkedInLearning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications-5913242/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGbScwnzErsnw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726684715855?e=2147483647&amp;v=beta&amp;t=6m5UmFBAPLHndQQE3unqON2AfzkgHsLw4QWHxRVOhfc"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Advance Your Spring Development Skills]]'
next_courses:
  - '[[Performance Tuning in Spring Apps]]'
path_nav: '[{"path":"Advance Your Spring Development Skills","position":1,"total":6,"prev":null,"next":"Performance Tuning in Spring Apps"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/database-management
  - topic/software-development
  - topic/web-development
  - skill/cloud-native-applications
  - skill/spring-boot
  - skill/kubernetes
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Spring%20On%20Kubernetes%20Deploying%20And%20Managing%20Cloud%20Native%20Applications.md)

![Spring On Kubernetes Deploying And Managing Cloud Native Applications](https://media.licdn.com/dms/image/v2/D4E0DAQGbScwnzErsnw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726684715855?e=2147483647&amp;v=beta&amp;t=6m5UmFBAPLHndQQE3unqON2AfzkgHsLw4QWHxRVOhfc)

# Spring On Kubernetes Deploying And Managing Cloud Native Applications

> Interested in building a cloud-native application with Spring Boot? This course was designed for you. Join instructor Frank P Moley III as he outlines the basics of creating images, including native images for eventual deployment to Kubernetes. Get a comprehensive overview of the entire development lifecycle of deploying and testing an application. Along the way, Frank covers some additional real-

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications) | Advanced | 39K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Spring to Kubernetes](#spring-to-kubernetes)
  - [What you need to know](#what-you-need-to-know)
  - [Setting up the Codespaces environment](#setting-up-the-codespaces-environment)
  - [Developer workflows](#developer-workflows)
- [**1. Cloud Native Spring**](#1-cloud-native-spring) (9 videos)
  - [Cloud native applications](#cloud-native-applications)
  - [Creating the application](#creating-the-application)
  - [Preparing data access](#preparing-data-access)
  - [Building data access](#building-data-access)
  - [Exposing as a webservice](#exposing-as-a-webservice)
  - [Challenge: Cloud Native Spring](#challenge-cloud-native-spring)
  - [Solution: Cloud Native Spring](#solution-cloud-native-spring)
  - [Logging with Spring](#logging-with-spring)
  - [Metrics with Spring](#metrics-with-spring)
- [**2. Spring Images**](#2-spring-images) (5 videos)
  - [Containerized workloads](#containerized-workloads)
  - [Spring Docker plugin](#spring-docker-plugin)
  - [Building a custom Docker image](#building-a-custom-docker-image)
  - [Uploading to a container registry](#uploading-to-a-container-registry)
  - [Spring Native images](#spring-native-images)
- [**3. Deploying to Kubernetes**](#3-deploying-to-kubernetes) (7 videos)
  - [Deploying to Kubernetes](#deploying-to-kubernetes)
  - [Building the initial scaffolding](#building-the-initial-scaffolding)
  - [Building a deployment](#building-a-deployment)
  - [Building a service](#building-a-service)
  - [Adding ingress](#adding-ingress)
  - [Adding monitoring](#adding-monitoring)
  - [Introduction to Helm](#introduction-to-helm)
- [**4. Additional Topics**](#4-additional-topics) (3 videos)
  - [Testing strategies](#testing-strategies)
  - [Automation in CI/CD](#automation-in-cicd)
  - [Security considerations](#security-considerations)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Spring to Kubernetes](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-to-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-to-kubernetes?u=76281980&t=0)** - [Frank] As a [[Java]] developer, [[Spring Boot]] just makes sense, but then we have to worry about running our application.
>
> **[0:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-to-kubernetes?u=76281980&t=8)** This course will build on your knowledge of Spring Boot, and take it to the next level using [[Kubernetes]] and associated tooling to run your app.
>
> **[0:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-to-kubernetes?u=76281980&t=18)** Hi, I'm Frank Moley.
>
> **[0:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-to-kubernetes?u=76281980&t=20)** Join me in this course, Spring on Kubernetes, Deploying and Managing [[Cloud-Native Applications]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (2), [[Kubernetes]] (2), [[Java]] (1), [[Cloud-Native Applications]] (1)
> **Speakers:** - [frank] (1)

#### [What you need to know](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=0)** - [Instructor] In order to be successful in this course, there is some prerequisite knowledge you need to have.
>
> **[0:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=6)** This course relies on [[Spring Boot]] as a development framework.
>
> **[0:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=11)** It is expected that you understand and have working knowledge of the [[Spring Framework]] as a whole.
>
> **[0:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=17)** Our focus is more around the ecosystem of running apps built with Spring, so our time spent in the Spring Framework is minimal.
>
> **[0:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=26)** We will also be leveraging Spring Boot for our application, so understanding it is critical, as well.
>
> **[0:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=32)** If you need a refresher on either Spring Framework or Spring Boot, check out my course [[Learning Spring 6 With Spring Boot]] 3 here in the [[LinkedIn]] Learning library.
>
> **[0:45](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=45)** We'll be using [[Java]] to build our Spring-based application, so understanding it is critical, as well.
>
> **[0:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=52)** We will be building on [[Kubernetes]], a container orchestration engine, so containers are at the heart of this course.
>
> **[1:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=60)** You should really understand what containers are and why we use them.
>
> **[1:05](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=65)** We will go through the process of building and running containers, but some knowledge of the basics will help you through this section.
>
> **[1:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=74)** While you don't need to be an expert, some experience with Kubernetes will be helpful for you to have, as well.
>
> **[1:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=81)** Building and running applications is only part of the job.
>
> **[1:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=86)** The process and operations work make up a big part of the work of being a professional software developer.
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=94)** [[Continuous Integration (CI)|Continuous integration]] and [[Continuous Delivery (CD)|continuous delivery]] is an important aspect of modern development.
>
> **[1:40](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=100)** You should at least be exposed to the concept and benefits of CI/CD.
>
> **[1:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=107)** In the same vein, automation is so critical for modern development teams.
>
> **[1:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=112)** Part of what we were looking at in this course is automation, and, as such, the value of these steps should be looked at from the lens of its benefits.
>
> **[2:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=124)** Operations is all too often not considered early enough in the development lifecycle.
>
> **[2:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=131)** And unfortunately, many developers are never really immersed in operations.
>
> **[2:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=138)** But to really grasp the value of it is eye-opening.
>
> **[2:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=143)** To capture part of that value, you should be exposed at least at a high level to operations and the benefits, as well as processes around them for [[Software Development]] shops.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (4), [[Spring Framework]] (3), [[Kubernetes]] (2), [[LinkedIn]] (1), [[Java]] (1)
> **CLI Commands:** make (1), cd (1)
> **Prerequisites:** prerequisite (1), you need to have (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the Codespaces environment](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=0)** - [Instructor] Now we will prepare our [[GitHub]] Code Spaces development environment.
>
> **[0:05](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=5)** If you haven't already done so, go ahead and start up the Code Spaces development environment, and you should be presented with an IDE that looks like this.
>
> **[0:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=14)** Now, I'm going to walk through what we're going to do, but it's going to take a while, so let's go ahead and kick off the actual execution of our environment by typing in the terminal, scripts/install.sh, and go ahead and let it run.
>
> **[0:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=32)** Now while it's doing the running, we'll go ahead and explain what's going on.
>
> **[0:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=36)** So what I have done in the install script is called several other scripts, and you're going to see them processing through the terminal as we talk about them.
>
> **[0:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=46)** But let's go take a look in the config directory at the four distinct things that we are setting up as part of this.
>
> **[0:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=52)** Now we start with kind.
>
> **[0:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=55)** Kind is a test environment for [[Kubernetes]] that is a really great development tool because it allows us to do development with a single node cluster in a Docker container on our machine, and that's what kind is, is Kubernetes in Docker.
>
> **[1:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=70)** I have provided some basic configuration in the config.yaml and a deploy script that does nothing but call kind create cluster.
>
> **[1:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=80)** The next part of that is that it's going to set up a tool called Nginx, and it's specifically the ingress Nginx controller that is used to expose ports to our Docker container running in the dev container itself from GitHub Code Spaces.
>
> **[1:38](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=98)** So this is a way of proxying from within Kubernetes to the environment that Kubernetes itself is running.
>
> **[1:45](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=105)** And specifically, we are going to be exposing ports.
>
> **[1:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=108)** That way we can do our work throughout this course.
>
> **[1:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=112)** Now, the next thing that is going to get installed is a monitoring framework, and we're not going to talk a lot about this for a while, but we are setting up a monitoring system in our Kubernetes infrastructure so that we can see what's going on inside of it.
>
> **[2:07](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=127)** Not only Kubernetes, but everything that we deploy to Kubernetes.
>
> **[2:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=131)** This monitoring infrastructure is an open source infrastructure based on Prometheus, and with Prometheus, you get Alert Manager as well as Grafana, and we'll show you those tools when we get to there.
>
> **[2:24](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=144)** But these are being installed in the environment.
>
> **[2:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=147)** Now, the last thing that we're actually setting up is a [[PostgreSQL|Postgres]] database.
>
> **[2:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=152)** We're going to set this Postgres database up in the cluster and then create a database from the operator.
>
> **[2:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=159)** We are then going to actually load data into it through this scripted behavior.
>
> **[2:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=163)** So we will have a database running, exposed to the VM that we're working in, and that VM will actually have the data that we're going to load into it.
>
> **[2:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=174)** So we're going to have access to it from the command line or from our application running outside of Kubernetes.
>
> **[3:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=181)** Now, in the real world, you're never going to expose a database publicly.
>
> **[3:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=184)** That's just not something you do.
>
> **[3:07](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=187)** But in a development environment where you're running an IDE, it actually makes it easier to expose it through an ingress so you don't have to do what's called port forwarding.
>
> **[3:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=198)** We'll talk more about that when we get there.
>
> **[3:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=201)** But you can see the data that we are loading in the data directory.
>
> **[3:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=205)** I've also provided, in this scripts directory, a destroy script.
>
> **[3:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=210)** There will be times, because we are running Docker in Docker and in that Docker, Kubernetes, that we may get things a little bit out of whack.
>
> **[3:38](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=218)** It just happens when you're dealing with such virtualization in the cloud.
>
> **[3:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=223)** If that happens, you can always do two things.
>
> **[3:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=226)** You can start by trying to reimport your cube config by going to the terminal and typing kind.
>
> **[3:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=234)** And if you do the help command, you will see the help that we can get.
>
> **[3:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=237)** And one of those things is the export command that will take the cube config and load it into the cube config that is in the VM that we're running in.
>
> **[4:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=248)** Again, this sort of level of inception almost that we get by doing work this way.
>
> **[4:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=254)** In the real world I actually run a setup very similar to this on my local desktop, and we're going to talk about that here in a little bit.
>
> **[4:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=261)** This actually improves my ability to write software that ultimately will get deployed to Kubernetes.
>
> **[4:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=268)** Now, if you have any other issues throughout this, feel free to delete, using the destroy script, and then just simply running the install script again, and it will do the same behavior to get us to the same point.
>
> **[4:40](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=280)** Now, if it's far enough along, you may have to run home commands again, but you will have examples of doing that and you'll know how to recreate it at that time.
>
> **[4:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=288)** I encourage you now to take some time and look through these scripts and look through the config.
>
> **[4:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=295)** If you don't understand what it's doing, now's the time to go look at the Kubernetes documentation or the Nginx Ingress documentation or the Grafana Prometheus documentation and actually try to understand what we're building in this kind cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (11), [[GitHub]] (2), [[PostgreSQL|Postgres]] (2)
> **CLI Commands:** docker (6), nginx (3), node (1)
> **Definitions:** is a  (5), is called (1), is an  (1)
> **Tools:** terminal (3), github (2), command line (1)
> **Prerequisites:** install (3), set up (1), setup (1)
> **File Paths:** scripts/install.sh (1), config.yaml (1)
> **Env Vars:** ide (2)
> **Analogies:** similar to (1)

#### [Developer workflows](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=0)** - [Instructor] Now that you have seen the scripted environment we have for this course, I want to spend a few moments and talk about this pattern for the developer workflows that I have embraced as a cloud native developer.
>
> **[0:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=13)** Let's start with the benefits of this setup on a local machine.
>
> **[0:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=16)** Again, I've embraced this pattern for many years as a developer and designer of platforms for cloud native systems.
>
> **[0:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=23)** And I developed this with some very skilled engineers that I've worked with for quite a long time.
>
> **[0:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=29)** The first big benefit is that it supports faster local development.
>
> **[0:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=33)** By having all the tools, apps, and services that your app needs locally, you can speed up all development practices.
>
> **[0:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=42)** Of course, your development machine needs to be pretty powerful if you want to be able to run everything locally.
>
> **[0:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=49)** I run on a minimum of 64 gigabyte of RAM for my local setup.
>
> **[0:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=54)** If your local machine supports this workload in its entirety, you don't have to be connected.
>
> **[1:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=60)** I cannot stress how much I dislike VPNs or being tied to [[Wi-Fi]].
>
> **[1:05](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=65)** It just isn't a requirement to write code anymore.
>
> **[1:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=69)** Of course, if your machine isn't powerful enough to do all of this locally, you may still need something like dev containers.
>
> **[1:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=77)** But I've yet to find a situation where I cannot at least run part of my system that I need, even on my travel laptop.
>
> **[1:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=85)** The ability to run your system locally lets you step through various services and tools when you debug.
>
> **[1:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=93)** It allows you to have local access to [[Databases]] that otherwise may require jump boxes and cloud environments or even VPNs.
>
> **[1:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=101)** This pattern just makes your life easier.
>
> **[1:45](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=105)** When you build your systems, you can actually tie it to your CI/CD pipelines.
>
> **[1:51](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=111)** Imagine for a moment creating a branch, pushing it to remote, and immediately getting your own branch built and deployed on your local environment.
>
> **[2:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=120)** As you push more code, the branch continues to build and deploy.
>
> **[2:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=124)** If you run the CI infrastructure locally, you may not even need to push remotely, and this is a big power proposition as you're writing code, because this allows you to constantly run your integration tests, your automated acceptance tests, and your security tests locally.
>
> **[2:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=143)** You even can test your observability and ensure that you are instrumenting your code correctly before you submit that PR, so that this type of work can be part of that PR itself.
>
> **[2:37](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=157)** So while I've set this up for this course, it's an example of what you can do as a modern cloud native developer, even if you're not using Spring [[Java]].
>
> **[2:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=168)** Just using [[Kubernetes]], you get this power to build lots of systems that you can just run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (1), [[Databases]] (1), [[Java]] (1), [[Kubernetes]] (1)
> **CLI Commands:** find (1), cd (1)
> **Prerequisites:** setup (2)
> **Env Vars:** ram (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 1. Cloud Native Spring

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud native applications](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=0)** - [Instructor] Cloud native [[Application Development]] patterns, also called 12- or 15-factor applications are a set of patterns that have arisen with [[Cloud Computing]].
>
> **[0:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=11)** Before we get into the considerations that exist for applications targeting [[Kubernetes]], let's give some of the general thoughts around 12-factor and 15-factor applications.
>
> **[0:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=21)** Now, I believe all of the factors are important from a system perspective.
>
> **[0:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=25)** I want to focus on the details within the scope of this course.
>
> **[0:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=29)** If you want a more in-depth conversation on cloud native applications, check out my course here in the [[LinkedIn]] Learning Library on 12- and 15-factor applications.
>
> **[0:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=39)** The concept of a single application running in a single process is critical to cloud native applications, especially in languages like [[Java]].
>
> **[0:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=48)** The application server was the process, and our apps were hidden behind that, often running many apps in that single app server process.
>
> **[0:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=57)** This makes operations difficult to say the least and obfuscates what is really important to the development teams.
>
> **[1:05](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=65)** Kubernetes can deviate from this depending on your perspective, however.
>
> **[1:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=69)** The use of sidecars and multiple container pods tends to deviate from the operator's perspective though they are indeed single process applications.
>
> **[1:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=80)** Understanding this is beneficial to developers, but outside the scope of this course.
>
> **[1:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=85)** So I encourage you to pause here and take a look at the concepts of sidecars as well as multi-container pods in Kubernetes.
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=94)** The ideas of prod and non-prod parity, and strong development processes like CICD are critical with cloud native applications.
>
> **[1:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=108)** Fortunately, with setups leveraging Kubernetes, we can achieve local similarities even on the developer's machine.
>
> **[1:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=116)** Applications in the cloud native world are stateless by design.
>
> **[2:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=120)** We almost always have multiple instances of our application running on essentially ephemeral infrastructure.
>
> **[2:07](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=127)** So maintaining state and sessions in the application itself would be counterproductive to say the least.
>
> **[2:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=134)** Because of the ephemeral nature of [[Cloud Infrastructure]], the reality is nodes die all the time.
>
> **[2:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=141)** Having applications that start up rapidly and handle termination gracefully, added to the concurrency mentioned above, will provide us a highly available system.
>
> **[2:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=152)** Add into this geographical distribution through availability zones, or even regions, and you have the recipe for a highly available distributed system.
>
> **[2:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=163)** One of the biggest lessons of cloud native computing was the importance of having configuration injected into the environment.
>
> **[2:51](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=171)** This allows us to build apps that can be deployed anywhere with local service dependencies without any hard coding.
>
> **[2:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=179)** We also can inject secrets to our applications in the same way to further separate the concerns of our applications from the potential security risks of password leaking.
>
> **[3:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=191)** Observability must be a first class thought of every application.
>
> **[3:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=195)** In the enterprise monolithic world, developers often didn't think a lot about what it meant to evaluate the state of the application when it was running because it was somebody else's job.
>
> **[3:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=207)** Cloud native applications put observability at the forefront.
>
> **[3:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=211)** I have, for instance, started worrying about observability in the ideation and design phase of every single system as well as application within those systems.
>
> **[3:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=222)** When building Spring applications for Kubernetes, there are some things I believe you need to consider and have plans for.
>
> **[3:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=229)** I'm going to share with you some of my opinions so you know them up front before we start coding.
>
> **[3:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=234)** The first consideration that I believe takes some initial thought is how you will handle environment variables for Spring properties.
>
> **[4:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=241)** You have many options.
>
> **[4:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=243)** You can inject them into your docker files and translate them there to JVM arguments.
>
> **[4:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=250)** You can leverage the Spring properties directly in your environment configuration.
>
> **[4:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=255)** Or you can do what I will show you, which is to leverage standard environment variables and their naming conventions and then port them to Spring properties in your application.properties file.
>
> **[4:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=267)** Logging is another area you have to consider because most log shippers we leverage with Kubernetes-based run times work best with [[JSON]] formatted logs.
>
> **[4:38](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=278)** This is an easy aspect to solve with Spring, but it's something you have to consider early on in your development processes.
>
> **[4:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=286)** In addition, building common taxonomy of tags in your logs is worth the effort regardless of the language or patterns being used.
>
> **[4:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=296)** Telemetry is another big area of thought.
>
> **[4:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=299)** Again, common taxonomy that is hopefully shared with your logging systems taxonomy is very important.
>
> **[5:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=306)** But, the use of technology is also important.
>
> **[5:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=310)** I prefer to keep my apps pure open source when possible and leverage technology like OpenTelemetry to instrument my applications, but having well-instrumented applications is the most important part.
>
> **[5:24](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=324)** You can leverage a lot from Spring here with their ops system integration, but don't make this an afterthought.
>
> **[5:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=331)** Security applies to so many layers when building applications.
>
> **[5:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=335)** It starts with how we develop our applications, moves to how we integrate with our authentication and authorization workloads, and then expands to even how we build our images.
>
> **[5:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=347)** We're going to spend a lot of time talking about building images and I will share with you my thoughts there.
>
> **[5:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=354)** When building applications for Kubernetes, I subscribe to the 15-factor thought that authentication should be validated at ingress and authorization validated throughout.
>
> **[6:05](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=365)** We aren't going to get into this area much in this course, but I have a course here in the LinkedIn Learning Library on [[Spring Security]] that you can leverage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (7), [[LinkedIn]] (2), [[Cloud Computing]] (1), [[Java]] (1), [[Cloud Infrastructure]] (1)
> **Env Vars:** cicd (1), jvm (1), json (1)
> **CLI Commands:** docker (1), make (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Creating the application](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=0)** - [Instructor] As with any [[Spring Boot]] application, we start with the Spring Boot Initializer.
>
> **[0:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=6)** We have a VS Code plugin in [[Codespaces]], so let's walk through the application creation process.
>
> **[0:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=12)** The first thing I want you to do is to go to the Command Palette.
>
> **[0:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=17)** And in here you're going to type initializer, and you'll see is you type that it dwindles the list down, and you're going to create a Maven project.
>
> **[0:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=26)** Now we're going to select the latest released version of Spring Boot.
>
> **[0:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=30)** We're going to pick [[Java]] as our language.
>
> **[0:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=33)** Now here I'm going to put in a group name, and I'm going to use my domain com.frankmoley, and I'm going to put in lil.
>
> **[0:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=39)** You do with this what you want, create a group that makes sense for you.
>
> **[0:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=43)** Now we're going to call our app wisdom-api.
>
> **[0:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=48)** We're going to select jar, and we're going to select Java 21, which is the latest LTS version.
>
> **[0:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=56)** And now we're going to go through, and we're going to pick our dependencies.
>
> **[0:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=59)** So the first one we're going to choose is Spring Web.
>
> **[1:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=63)** Then we're going to pick JPA, which is [[Spring Data]] JPA.
>
> **[1:07](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=67)** We're going to use [[PostgreSQL|Postgres]].
>
> **[1:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=68)** So let's bring in the PostgresSQL driver.
>
> **[1:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=72)** We're also going to use Actuator.
>
> **[1:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=76)** We're going to bring in Lombok.
>
> **[1:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=78)** And the final one we'll bring in is Prometheus.
>
> **[1:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=82)** Now that all of these are done, we'll go ahead and hit Enter, and we'll go ahead and build this in the root.
>
> **[1:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=90)** So now there's a few things that we need to change within our application setup.
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=94)** The first thing that we're going to do is in source main Java, you'll see that there is a package that we need to rename, and we're going to rename that so that it matches convention.
>
> **[1:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=107)** Because if you look it's wisdom_api, and normally we don't put underscores in package names.
>
> **[1:53](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=113)** So we're just going to set this to wisdom.
>
> **[1:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=117)** Go ahead and do the refactoring, and you'll see it refactored our class to have that package name.
>
> **[2:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=124)** Now the next thing that I'm going to do is optional for you, but I don't normally keep all of these files in place.
>
> **[2:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=131)** So I delete a lot of these structure that comes with the Initializer because I just don't use 'em.
>
> **[2:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=138)** We've got Maven built-in, we don't need the Maven wrapper, so I'm going to delete that.
>
> **[2:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=143)** And then I am going to delete the gitignore, 'cause we've got one at the root, and I'm going to delete the help.md.
>
> **[2:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=154)** And then the two Maven commands I will also delete.
>
> **[2:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=159)** So at this point in our application directory, we've got the vscode that we're not going to worry about.
>
> **[2:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=164)** We've got source, we have target, and we've got pom.
>
> **[2:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=167)** Now, target should not be checked in.
>
> **[2:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=170)** If you look at the gitignore at the root, we can address that by putting here target, and that will remove that from being checked in.
>
> **[3:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=180)** And you'll see how it just went gray.
>
> **[3:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=182)** And at this point we actually have our project set up, and we are now ready to go.
>
> **[3:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=186)** In fact, you could go and run this application, and we will do that in the next video because we actually need to build a launch file to go with our application.
>
> **[3:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=198)** But with that, everything is set up and ready to run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (3), [[Java]] (3), [[Codespaces]] (1), [[Spring Data]] (1), [[PostgreSQL|Postgres]] (1)
> **Env Vars:** jpa (2), lts (1)
> **Prerequisites:** set up (2), setup (1)
> **UI Navigation:** go to (1), select the (1)
> **File Paths:** help.md (1)
> **Code Identifiers:** wisdom_api (1)
> **Versions:** java 21 (1)
> **Cross-References:** in the next (1)

#### [Preparing data access](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=0)** - [Instructor] In order to write our application to consume an external database, we need to set up a few properties in our application before we get going.
>
> **[0:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=9)** So let's go ahead and do that.
>
> **[0:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=11)** I want you to jump into your ID.
>
> **[0:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=13)** The first thing that I want you to do is to look in the script directory at the populatedb.
>
> **[0:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=18)** We're going to leverage this here in a moment.
>
> **[0:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=21)** So go ahead and copy that data.
>
> **[0:24](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=24)** Open up a terminal window and paste that in.
>
> **[0:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=30)** Now if we simply do an echo on all of these values, you'll see that we can get some data out of them and the ones that we really care about are pgpassword and $pguser.
>
> **[0:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=49)** And we're going to use this.
>
> **[0:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=50)** Now, honestly, at this point, you can connect to the database by just typing PSQL, because you have those environment variables in, and you could do whatever you wanted to, such as select the data.
>
> **[1:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=61)** We're not going to do that right now, because you've got access to all of the data in the DAT file if you wanted to do that and look at it.
>
> **[1:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=68)** So now let's navigate to the Wisdom API application.
>
> **[1:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=71)** Go to source, main resources and open up the application properties file.
>
> **[1:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=77)** Now there's several properties that we need to drop in here, so let's go ahead and do that.
>
> **[1:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=82)** The first one that we're going to do is spring.jpa.hibernate.dbl-auto.
>
> **[1:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=88)** We're going to set that equal to none.
>
> **[1:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=91)** Spring-jpa-open-in-view.
>
> **[1:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=95)** We will set that equal to false.
>
> **[1:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=99)** We will do a spring.jpa.properties.hibernate.default_schema
>
> **[1:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=110)** and we're going to set that equal to wisdom to match our schema for our database.
>
> **[1:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=116)** We'll do a spring.data.[[Java Database Connectivity (JDBC)|jdbc]].dialect.
>
> **[2:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=120)** We'll set that equal to [[PostgreSQL|postgres]].
>
> **[2:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=124)** Now we're going to set up a couple more things on our data source.
>
> **[2:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=128)** We're going to set up the hikari.connection-timeout, and we'll set that equal to 20,000.
>
> **[2:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=138)** The hikari-maximum-pool-size.
>
> **[2:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=142)** We'll set that equal to five.
>
> **[2:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=145)** I'm going to put a little bit of space here because we're going to add a few more data.
>
> **[2:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=148)** The first thing I want to do is expose some of our management endpoints.
>
> **[2:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=152)** So we're going to do management.endpoints.web.exposure.include and we're going to include the health, the info, and the features endpoints.
>
> **[2:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=167)** We're also going to set up some logging.
>
> **[2:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=169)** So logging level for root.
>
> **[2:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=172)** We're going to set equal to info, and logging level for com.frankmoley.
>
> **[2:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=179)** Again, match your package, not necessarily mine.
>
> **[3:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=183)** We'll set that equal to worn, and just because I don't like to show it in my logs, I'm going to set the main banner mode to off.
>
> **[3:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=196)** Now I like to keep things sort of structured in here.
>
> **[3:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=198)** So now we're going to do our [[Spring Data]] source URL, and we're going to set this equal to jdbc.[[PostgreSQL]]//.
>
> **[3:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=211)** Now, normally you would type in your host value, your port, and your database name, but we're going to inject that from the environment, so we're going to do a dollar sign, curly brace, DB under host colon, dollar sign, curly brace, DB_PORT,
>
> **[3:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=232)** clash, dollar sign, curly brace, DB_NAME.
>
> **[3:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=238)** Now note these values.
>
> **[3:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=239)** These are very important values because we have to inject them in from the environment and we're also going to have to add 'em to our run configuration here in a moment, but before we get there, we need to set a username.
>
> **[4:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=250)** So datasource.username, and once again, we will inject that, so it's going to be DB_USERNAME, and spring.datasource.password.
>
> **[4:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=265)** We will set this equal to DB_PASSWORD.
>
> **[4:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=269)** Now you could very much inject in the environment spring_datasource_username.
>
> **[4:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=276)** That's not usually how we build environment variables.
>
> **[4:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=279)** So I like to actually build this differentiation so that I can inject them in as standard environment variables and then translate them to the spring properties where it makes sense.
>
> **[4:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=289)** So at this point, we're ready to go build a run configuration.
>
> **[4:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=292)** So let's do that.
>
> **[4:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=294)** Let's go to the run and create a launch file for [[Java]], and you will see we have one for the Wisdom API application already, because the plugin built that.
>
> **[5:05](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=305)** So all we need to do now is do our environment and we will do our environment in a very straightforward way.
>
> **[5:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=313)** It's going to match everything that we just did.
>
> **[5:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=315)** So DB_USERNAME.
>
> **[5:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=318)** We will set that equal to our value from the console,
>
> **[5:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=326)** and we will do the same on DB_PASSWORD.
>
> **[5:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=334)** Go ahead and copy that string and paste it in, and then we will do DB_PORT, and that's going to equal 5432, and a DB_NAME, and the DB_NAME comes from our commands here.
>
> **[5:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=354)** So if we go back to our populatedb, you'll that we have a PG database that is the name of the db, so it's localdb, and then of course, we need the DB_HOST and that will simply be localhost for right now.
>
> **[6:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=373)** Now there's one more value that I want to add, and this will help with logging later and it's SPRING_PROFILES_ACTIVE, and we will simply set this equal to dev.
>
> **[6:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=385)** Now at this point, we've got everything that we need to run our application, and we can simply select Wisdom API.
>
> **[6:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=392)** We can run it and ensure that it runs to completion and actually starts up, and it does.
>
> **[6:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=399)** We have no persistents set, but we're good enough to actually have this thing running on port 8080.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java Database Connectivity (JDBC)|Jdbc]] (2), [[PostgreSQL|Postgres]] (1), [[Spring Data]] (1), [[PostgreSQL]] (1), [[Java]] (1)
> **Env Vars:** api (3), db_name (3), db_port (2), db_username (2), db_password (2)
> **UI Navigation:** go to (2), select the (1), navigate to (1)
> **Prerequisites:** set up (4)
> **CLI Commands:** psql (1), go build (1)
> **Code Identifiers:** default_schema (1), spring_datasource_username (1)
> **Ports:** port 8080 (1)
> **Cross-References:** go back to (1)

#### [Building data access](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=0)** - [Instructor] Now it's time to write some code and build out our data access.
>
> **[0:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=4)** So, open up Wisdom API.
>
> **[0:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=6)** Go to Source, Main, [[Java]], and under the Wisdom package we want to create a new Java package, and it's going to be data.entity.
>
> **[0:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=19)** Under the Entity package, we will create a new Java file and this is going to be a class, and we will call this Customer.
>
> **[0:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=29)** Now, you can look at what we are going to populate by going to the data.[[SQL]], going to the customers table, and you will see that there are several values here.
>
> **[0:38](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=38)** There's actually six.
>
> **[0:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=39)** So, we're going to leverage those to build this out.
>
> **[0:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=43)** So, the first thing that we needed to do is we need to say that this is an entity from jakarta.persistence, and then we also need to do an @Table construct because the table name is not straightforward for the way that Hibernate expects it because I use plural.
>
> **[1:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=61)** So, customers, let's make sure we import that, and now we're going to add a Lombok annotation called @Data.
>
> **[1:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=73)** Now we will do an @Id from jakarta.persistence and @GeneratedValue, also from jakarta.persistence, and the strategy that we will leverage is GenerationType of UUID, and then we'll do a private UUID called customerId.
>
> **[1:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=101)** Let's go ahead and make sure that we import in that GenerationType.
>
> **[1:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=106)** Import UUID, and we are good there.
>
> **[1:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=110)** Now we'll do a private string of firstName, a private string of lastName.
>
> **[2:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=120)** We're going to put an @Column tag on this one, and we are going to put unique equal to true, and this is a private string of email.
>
> **[2:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=134)** Make sure you import column from jakarta.persistence, and then we'll finish out our class, so String phone, and private String of address.
>
> **[2:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=149)** Now, let's go back and let's create another new package, and this one is going to be data.repository.
>
> **[2:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=164)** And in data repository, we will do a new Java file, and this time we're going to do an interface, and the interface will be called CustomerRepository.
>
> **[2:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=177)** And we are going to extend the JPA repository from org.springframework, and then make sure that we put in here Customer and UUID, and we'll need to import those.
>
> **[3:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=195)** And now we're going to put a single method in this in order to support our front end later on, which is just a Customer findByEmail that takes a string of an email.
>
> **[3:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=209)** Now, it tried to do a correction here.
>
> **[3:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=211)** It assumes that it's not unique, so we're going to fix that.
>
> **[3:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=216)** Technically this should be an optional, and we will get rid of the list, and now if we run our application, we can validate that everything is set up correctly, and it is, so we are good to go to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[SQL]] (1)
> **Env Vars:** uuid (4), api (1), jpa (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** customerid (1), firstname (1), lastname (1), findbyemail (1)
> **UI Navigation:** go to (2)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** data.sql (1)
> **Cross-References:** next video (1)

#### [Exposing as a webservice](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=0)** - [Instructor] Now we're going to build out a web service to consume our data access so we can expose them and test this through our IDE.
>
> **[0:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=8)** So I want you to jump into your IDE and the first thing that we're going to do is open up our Wisdom API application, go to src/main/[[Java]], as we've done before, and we're going to create a new package.
>
> **[0:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=21)** And after wisdom, it will simply be web.
>
> **[0:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=26)** And within that web, we are going to create a new Java file, and this is going to be a class.
>
> **[0:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=31)** We will call it CustomerController, and we will start with an annotation of @RestController, an annotation of @RequestMapping, and the @RequestMapping will be at /customers, so we can simply do customers.
>
> **[0:53](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=53)** And then we're going to add a logging annotation of @Slf4j.
>
> **[1:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=60)** Then we need to go in here and actually add interdependency.
>
> **[1:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=62)** So private final CustomerRepository and we will simply call it CustomerRepository.
>
> **[1:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=75)** Now we need to create a constructor on our class so that we can inject that in through outer wiring.
>
> **[1:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=80)** So public CustomerController, it will take an instance of our CustomerRepository.
>
> **[1:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=90)** We will call super on this.
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=94)** And I know you don't have to, it's just old habit that never dies.
>
> **[1:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=99)** So this.CustomerRepository = CustomerRepository; All right, so now we're going to do an @GetMapping and we will do a public Iterable and the Iterable will be of type Customer, getAllCustomers().
>
> **[2:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=123)** Let's go ahead and make sure that we have imported everything.
>
> **[2:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=131)** Now, in the parameter for this, we're going to do an @RequestParam.
>
> **[2:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=137)** We're going to set required equal to false and it's going to be a String email.
>
> **[2:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=148)** So now we're going to do a check.
>
> **[2:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=149)** So if, and we'll use StringUtils from spring hasLength, and we'll check that email.
>
> **[2:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=161)** So if the email has a value, we're going to create a new list.
>
> **[2:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=167)** So list<Customer> customers = new ArrayList<>();
>
> **[2:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=178)** Go ahead and import that in.
>
> **[3:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=181)** So now we will do an Optional<Customer> and we'll simply call it customer = this.CustomerRepository.FindByEmail and we will pass it in the email.
>
> **[3:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=200)** And then we will do an if(customer.isPresent())
>
> **[3:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=209)** We do a customers.add(customer.get()); and regardless we will return customers; Now after this that we know we have a parameter that did not come in, we can simply return this.customerRepository.findAll(); and at this point we can test our application.
>
> **[3:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=234)** So we'll go ahead and run it.
>
> **[3:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=238)** Now I have provided a tool, so I'm going to shrink this view down a little bit and split the terminal.
>
> **[4:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=249)** And what you can do is type in here http :8080/customers and you'll see it actually returns our customers.
>
> **[4:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=259)** So now what I'm going to do is I'm going to copy the email and I'm going to do it with the quotes.
>
> **[4:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=265)** And now I'm going to type in http :8080/customers and set email and we'll go ahead and bring those quotes in.
>
> **[4:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=275)** And you'll see now we've done the flow where we've actually passed in the email parameter.
>
> **[4:40](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=280)** We now have a working web service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **Code Identifiers:** getallcustomers (1), haslength (1), ispresent (1), customerrepository (1), findall (1)
> **Env Vars:** ide (2), api (1)
> **Ports:** :8080 (2)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Cloud Native Spring](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=0)** - [Instructor] Now it's time for our first challenge exercise in this course.
>
> **[0:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=11)** Here's the instructions that I'd like you to follow.
>
> **[0:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=13)** The first thing that I want you to do is to build out entities for vendors, services, and [[Microsoft Products|products]].
>
> **[0:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=19)** Remember, in the DAT folder, you have the schema that we applied to the database.
>
> **[0:24](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=24)** So use that to build out those entities.
>
> **[0:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=28)** You're then going to build out repositories.
>
> **[0:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=30)** You can, if you choose to, provide a way to get the values for the unique fields so that when you finish out your controllers on your getAll methods, you can provide request params for them.
>
> **[0:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=43)** As I said, I want you to go ahead and finish out the customer controller and build controllers for the other three entities supporting getAll, Post, getOne by ID, Update, and Delete.
>
> **[0:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=57)** Finally, don't forget exception handling logic and response codes as they make sense.
>
> **[1:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=64)** If you do a getOne by ID and it doesn't exist, you should return a not found.
>
> **[1:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=70)** Think about your deletes.
>
> **[1:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=72)** I usually return a reset content.
>
> **[1:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=75)** And by default, when you do a Create, you should return it to a one.
>
> **[1:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=79)** With that said, have fun with this exercise, and I'll be back with my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Code Identifiers:** getall (2), getone (2)
> **CLI Commands:** make (1)
> **Env Vars:** dat (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Cloud Native Spring](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=0)** (bright electronic music)
>
> **[0:07](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=7)** - [Instructor] And now it's time for my solution to this exercise.
>
> **[0:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=10)** I'm going to start by showing you how I handled the exceptions.
>
> **[0:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=15)** So, in Source, Main, [[Java]] in the util, I created two exceptions.
>
> **[0:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=20)** One is for the bad request.
>
> **[0:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=22)** You'll notice here on line 6 that I put in a response status of bad request.
>
> **[0:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=27)** I also extended runtime exception.
>
> **[0:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=30)** I did the same on the NotFound, of course changing the response status on line 6 to NotFound.
>
> **[0:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=36)** So, now in the data I created an entity for product, for service, and for vendor, and I created a product repository with a findByName, a service repository with a findByName, and a vendor repository with a findByEmail, all of those matching the unique values.
>
> **[1:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=64)** Then I created, in the Customer Controller, I went ahead and finished out this by doing a post-mapping for the created flow, starting on line 54.
>
> **[1:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=77)** Line 60, I did the getById.
>
> **[1:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=79)** Notice if the optional customer is not present, I return a NotFound.
>
> **[1:24](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=84)** I then did a PutMapping on line 69.
>
> **[1:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=88)** To do the update, I checked that the path variable customer ID matched the customer ID of the request body.
>
> **[1:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=96)** If they did not match, I threw a BadRequestException.
>
> **[1:40](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=100)** I then did the save, and then I did the DeleteMapping where I returned a RESET_CONTENT once the delete was done, and I simply did a deleteById.
>
> **[1:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=110)** I then implemented a product controller, a service controller, and a vendor controller that look very much identical.
>
> **[2:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=121)** And real quick, we can run these, and I will expand this out to make it easier to read.
>
> **[2:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=132)** And you can see I can do an http on [[Microsoft Products|products]], do the same on services,
>
> **[2:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=145)** and then do the same on vendors, and then we can play with them from there.
>
> **[2:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=152)** So, if I go back to services, just because it's the smallest object, you can see I can do an http POST on 8080/services and I can send in a name of foo and a price of 112 and that created that service.
>
> **[2:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=177)** I can then grab that ID, I can then do an http 8080/services/ the id.
>
> **[3:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=188)** I get that ID out.
>
> **[3:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=191)** I can do an http PUT on 8080/services/ that id.
>
> **[3:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=202)** I can then go ahead and do my service ID equals that value.
>
> **[3:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=210)** We'll go ahead and change it initially to a two.
>
> **[3:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=214)** We'll set the price equal to 1.13 and the name equal to foo just to keep it the same.
>
> **[3:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=222)** You'll see we get a bad request, which is what we would expect.
>
> **[3:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=227)** I'll change it back to one.
>
> **[3:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=230)** We now do the update and have changed the price, and then I can also then do an http DELETE operation on 8080/services/ that value, and it has deleted.
>
> **[4:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=243)** And then if I go back up and do the get again, you'll see I get a Not Found.
>
> **[4:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=250)** We did this for all of them, and you can go ahead and test that from the code that has been uploaded into 01_07.
>
> **[4:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=256)** And that's how we did this operation in order to complete our web service that we are going to deliver.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Microsoft Products|Products]] (1)
> **Code Identifiers:** findbyname (2), findbyemail (1), getbyid (1), deletebyid (1)
> **Env Vars:** reset_content (1), post (1), put (1), delete (1)
> **API Endpoints:** post
 (1), put
 (1), delete  (1)
> **CLI Commands:** make (1)
> **Versions:** 1.13 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Logging with Spring](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=0)** - [Instructor] The concept of logging should be relatively normal for most developers.
>
> **[0:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=4)** It's just how we do things.
>
> **[0:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=6)** There are some special considerations you need to take however with [[Spring Boot]] to ensure that your logs are structured properly when you're targeting a [[Kubernetes]]-type deployment.
>
> **[0:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=18)** The first thing that I want you to do is open up wisdom-api, and let's go to our pom file.
>
> **[0:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=23)** I'm going to scroll down here to the dependency section, and we are going to add in a new dependency.
>
> **[0:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=31)** This dependency is going to come from the group net.logstash.logback, and it's going to have an artifactId
>
> **[0:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=44)** of logstash-logback-encoder.
>
> **[0:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=52)** And we'll go ahead and specify the version of 7.3, and we're going to go ahead and allow Maven to do the downloads.
>
> **[1:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=63)** And now what I want you to do is to open up source, main, resources, and we're going to create a new file in here.
>
> **[1:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=72)** And this file will be called logback-spring.xml.
>
> **[1:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=78)** Now, we'll go ahead and start this with a configuration tag.
>
> **[1:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=83)** And then within there we're going to do a springProfile name="dev".
>
> **[1:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=90)** Now, if you remember, we set up a dev profile in our run configuration, and we did this for a reason to make this stage easier because what we're going to do is we're going to go ahead and define within here an include, and we're going to pass in a resource.
>
> **[1:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=108)** And that resource is org/springframework/boot/logging/logback,
>
> **[1:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=119)** and we're going to use the base XML.
>
> **[2:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=121)** And that's all we need to do for dev.
>
> **[2:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=123)** Basically we're going to say go ahead and use logback, but do it in the default strategy, which is what we traditionally see out of a Spring Boot application.
>
> **[2:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=131)** But now we're going to add in another springProfile, and this time we're going to use the name of default.
>
> **[2:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=139)** Now, this happens when there is no profile mentioned, you get the default by default.
>
> **[2:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=147)** Go ahead and finish that XML out and then we can go ahead and finish configuring this.
>
> **[2:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=153)** So, in here we're going to add an appender, and the name of that appender is going to be jsonConsoleAppender.
>
> **[2:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=163)** And then we're going to specify a class, and the class that we will do is ch.qos.logback.core.ConsoleAppender.
>
> **[2:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=178)** And then we need to put in here an encoder, and the encoder will have a class that equals net.logstash.logback.encoder.LogstashEncoder.
>
> **[3:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=198)** Then after our appender section we will set our root level equal to INFO.
>
> **[3:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=207)** And in here we will do an appender-ref, in this case we're going to do our jsonConsoleAppender.
>
> **[3:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=221)** And now we need to finish that last statement that I missed, and at this point we are now actually ready to test our application.
>
> **[3:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=227)** So, real quick, let's jump over to the run, and let's run our application.
>
> **[3:53](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=233)** And as expected, there is no change to our logging that you can see in the terminal.
>
> **[3:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=238)** But let's go ahead and modify our existing configuration, and let's get rid of this SPRING_PROFILES_ACTIVE.
>
> **[4:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=252)** And we'll get rid of this trailing comma.
>
> **[4:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=255)** We'll stop our application, and we will run it again.
>
> **[4:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=261)** You'll see now that we're getting our log output in [[JSON]] format.
>
> **[4:24](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=264)** Now, the reason this is important is when we are doing log streaming in a Kubernetes environment everything gets dumped to standard out from every application.
>
> **[4:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=272)** We need to actually ship those logs to a centralized log management system, and oftentimes those only work well when you have JSON-formatted logs.
>
> **[4:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=282)** So, that's essentially what we've done is we put in a hook that when we don't have a profile spit out JSON logs.
>
> **[4:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=289)** When we do have a profile, such as in our IDE, go ahead and do standard log output.
>
> **[4:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=294)** It's just a traditional pattern that we use.
>
> **[4:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=296)** Now that Spring Profiles are no longer the way that we do multi-environment deployments, we're still using them, but we're using them sort of behind the scenes to do things like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[Spring Boot]] (2), [[Kubernetes]] (2)
> **Env Vars:** json (3), xml (2), info (1), spring_profiles_active (1), ide (1)
> **Code Identifiers:** springprofile (2), jsonconsoleappender (2), artifactid (1)
> **UI Navigation:** go to (1), scroll down (1)
> **File Paths:** logback-spring.xml (1)
> **CLI Commands:** make (1)
> **Versions:** 7.3 (1)
> **Tools:** terminal (1)

#### [Metrics with Spring](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=0)** - [Instructor] Metrics take a little more work in Spring, even with the use of the Micrometer facade.
>
> **[0:05](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=5)** While traditionally, an aspecting approach would've been my first option, with the advent of native images, we are limited to no longer favoring aspecting.
>
> **[0:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=15)** So let me show you a way to implement Metrics in a [[Spring Boot]] application.
>
> **[0:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=19)** The first thing I want you to do is to open up the app and go to src, main, resources, and go to the application.properties file.
>
> **[0:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=27)** Now on line 13, we're going to remove features, and we are going to add metrics, and we are going to add prometheus.
>
> **[0:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=36)** Now, we won't be using Prometheus right now, we're going to use that later on.
>
> **[0:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=41)** Go ahead and open up src, main, [[Java]], and the root application class.
>
> **[0:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=46)** And we're going to add a new bean.
>
> **[0:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=49)** And the bean is going to be of type MeterRegistryCustomizer, which is a template that takes a MeterRegistry from Micrometer.
>
> **[1:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=61)** And we will simply call this metricsCommonTags.
>
> **[1:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=66)** Now we're going to pass into that an @Value.
>
> **[1:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=69)** Make sure you choose the [[Spring Framework]] version, and we're going to grab that from the application, a properties file.
>
> **[1:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=78)** So we are going to do a dollar sign, curly brace, and the name of this property is spring.application.name.
>
> **[1:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=87)** And we will simply pass that to a string called appName.
>
> **[1:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=92)** Now within the method, we will simply return a registry, registry.config, .commonTags.
>
> **[1:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=106)** And this is how you would commonly tag all of your metrics.
>
> **[1:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=109)** We're simply going to add a tag of app, and we will send in the app name, and then we're going to be able to visibly see them throughout the actual application when it runs.
>
> **[1:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=119)** So now let's jump into our web package, and we will go to our CustomerController.
>
> **[2:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=128)** We're going to need to put in a few private values here.
>
> **[2:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=132)** So the first one that I want to put in is going to be a private final Map of type String and Timer.
>
> **[2:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=143)** And we will simply call this timerMap.
>
> **[2:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=155)** Now that we got those things imported, let's do a couple more.
>
> **[2:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=159)** We're going to do a private static final String, GET_ALL_CUSTOMERS, and as you might imagine, that's going to be equal to getAllCustomers.
>
> **[2:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=172)** And we're going to do the same here for the [[Representational State Transfer (REST)|rest]] of the methods in our class.
>
> **[2:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=178)** So now you see we have an error here on our constructor, but before we can do anything, we need to inject into it our registry.
>
> **[3:07](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=187)** So we're going to inject in a MeterRegistry and we will simply call this registry, and that's going to get auto wired from Spring.
>
> **[3:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=197)** And now we're ready to create our map.
>
> **[3:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=198)** So we will do a timerMap = new HashMap.
>
> **[3:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=206)** And then we will do a timerMap.put, GET_ALL_CUSTOMERS, and registry.timer.
>
> **[3:38](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=218)** And we're going to repeat this for all of our other values.
>
> **[3:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=222)** So let me just go ahead and create these, and we'll do a little bit of quick copy paste.
>
> **[3:53](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=233)** All right, so now let's go ahead and actually use this.
>
> **[3:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=236)** So we're going to go to our getAllCustomers and we're going to do a Timer.Sample.
>
> **[4:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=243)** And we'll call this timer and we will do Timer.start.
>
> **[4:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=250)** So now that we've got a timer started, we've got two places that we actually need to stop this.
>
> **[4:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=255)** So let's do a timerMap.get on GET_ALL_CUSTOMERS, and we will do a record action.
>
> **[4:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=267)** We'll do a lambda here for timer.stop, and timerMap.get, GET_ALL_CUSTOMERS.
>
> **[4:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=281)** Now we will copy that value and we need to add it here.
>
> **[4:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=286)** The problem is, as you will see, we have a return that actually does the call.
>
> **[4:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=290)** So we need to break this up a little bit.
>
> **[4:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=292)** So we will do an Iterable, customer, called customers.
>
> **[4:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=299)** And set that equal to this.customerRepository.findAll, and then after that, we can simply return our customers.
>
> **[5:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=312)** Now we actually have all of the things that we need to run our metrics.
>
> **[5:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=315)** So let's go ahead and run our application.
>
> **[5:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=320)** And I'm going to expand my terminal window here and split it.
>
> **[5:24](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=324)** All right, so the first thing that I'm going to do is I'm going to do an http :8080/customers.
>
> **[5:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=334)** We're going to go ahead and hit that three or four times.
>
> **[5:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=339)** And now what I want to do is I'm going to do an http :8080/actuator/metrics/getAllCustomers.
>
> **[5:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=359)** And you'll see we now get metrics out of it.
>
> **[6:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=362)** Everything is tagged with the wisdom app.
>
> **[6:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=364)** We can see all of the calls that we made to it, the total time that they took, and the max time that it took.
>
> **[6:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=370)** Now these are exported in more than one way.
>
> **[6:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=373)** They are exported through Prometheus as well.
>
> **[6:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=375)** But this gives us a really good visualization of the metrics being recorded.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (1), [[Java]] (1), [[Spring Framework]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** timermap (5), getallcustomers (3), metricscommontags (1), appname (1), commontags (1)
> **Env Vars:** get_all_customers (4)
> **UI Navigation:** go to (4)
> **Ports:** :8080 (2)
> **File Paths:** registry.config (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)


### 2. Spring Images

[↑ Back to Table of Contents](#table-of-contents)

#### [Containerized workloads](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=0)** - [Instructor] [[Kubernetes]] is an orchestration engine, and as such, we need to discuss a little bit about containerized workloads as that's what Kubernetes orchestrates.
>
> **[0:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=12)** Let's start with a brief history of containerization because this may be shocking to some of you.
>
> **[0:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=18)** The idea of segregation in computing in a single server is older than me and probably most of you.
>
> **[0:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=26)** Sandboxing processes and using shared resources makes sense financially and is a responsible option when you look at the power consumption of computers.
>
> **[0:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=36)** In 1979, chroot was introduced in Unix 7, making the first major jump into the world of container and process isolation, even though containerization as a concept in sandboxing had been around since the '60s.
>
> **[0:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=55)** Several advancements continued through the years, especially in namespaces, and then in 2008, we had the introduction of [[Linux]] Containers or LXC.
>
> **[1:05](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=65)** This was really the first complete thought in Linux containers, leveraging both cgroups and namespaces running on a single kernel without patches.
>
> **[1:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=77)** The years passed with several other advancements building on LXC and then deviating from it.
>
> **[1:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=83)** Looking at you, Warden.
>
> **[1:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=85)** And then in 2013, the entire world changed with Docker.
>
> **[1:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=89)** Much like Warden, Docker leveraged LXC and then replaced it, this time, with libcontainer.
>
> **[1:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=96)** But what really made the container world explode with Docker was the ecosystem that came with it.
>
> **[1:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=103)** As containers began replacing traditional virtualization, thanks in part to tools like Kubernetes, many of us were all in on this new world.
>
> **[1:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=114)** containerd was donated to the CNCF, and all was well.
>
> **[1:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=119)** And then the landscape shifted again with Docker Enterprise being acquired.
>
> **[2:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=124)** Despite the changes and the turmoil, containerization continued to grow, and today, it has become the defacto way of building distributed platforms.
>
> **[2:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=136)** So let's talk about what containers really are.
>
> **[2:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=139)** At their highest level, a container is a packaged and isolated runtime for running all of your application workloads.
>
> **[2:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=149)** One of the biggest benefits, especially from a cloud native viewpoint, is that these containers bring all of their dependencies with them.
>
> **[2:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=159)** This means any tool you need, you package with your container instead of relying on it being provided to you, which inherently has caused more software bugs than many of us, including myself, care to admit.
>
> **[2:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=177)** These packaged, isolated, and independent containers yield truly portable and self-contained applications that can run anywhere that you can run the container itself, which includes almost every modern operating system, including the Cloud and Enterprise abstractions.
>
> **[3:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=198)** One thing that is important to know is that the kernel itself is shared with the host and all other containers running on that host.
>
> **[3:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=207)** There are not complete operating systems within the kernel.
>
> **[3:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=211)** Even though we think of them from the distro perspective, it is not the complete OS.
>
> **[3:37](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=217)** While the kernel is shared, the application processes are all isolated, building a sandboxed environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (3), [[Linux]] (2)
> **CLI Commands:** docker (4)
> **Env Vars:** lxc (3), cncf (1)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Spring Docker plugin](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=0)** - [Instructor] [[Spring Boot]] provides an easy way to build a Docker image.
>
> **[0:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=3)** While it is not my preferred way of building images, it is a mechanism that you can use if you want, so I'm going to go ahead and show it to you.
>
> **[0:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=12)** The easiest mechanism is to just leverage Maven to do the build.
>
> **[0:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=17)** Since we haven't really addressed the testing scenarios you need to deal with, and we know running this app requires environment variables, let's just delete the test since it's really outside the scope of this course.
>
> **[0:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=30)** So, go to Source, Test, [[Java]], and you'll see that test that comes for free with Spring Boot, and let's just delete that file.
>
> **[0:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=41)** Now, as I've just deleted that, it obviously would've been better for us to spend time and write tests that actually worked.
>
> **[0:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=47)** We'll talk about some of that in a later video, some considerations around that, but for now, just accept that we're going to do the wrong thing in order to get through this.
>
> **[0:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=56)** So, let's go ahead and pop up a terminal window, and let's check where we're at in the file system, so let's navigate into the actual app, and from here, you're going to type maven spring-boot:build-image, and we're going to let that run.
>
> **[1:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=75)** Now, if you followed along as this ran, you will notice that this uses a technology called Buildpack to build the image.
>
> **[1:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=82)** Now, you have some control on its output, but not a lot.
>
> **[1:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=87)** For instance, right above this BUILD SUCCESS message that is green, you will see that it has a successfully built image.
>
> **[1:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=95)** It assumes that you're going to publish this to [Docker.io](https://Docker.io), and you're going to have a name of wisdom-API and a tag of 0.01-snapshot, which is from the PALM file.
>
> **[1:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=107)** That's not how I would do this.
>
> **[1:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=109)** Nonetheless, I will give you some time here to look at the documentation at the link provided on how you can customize the output of this if you choose to go this route to build a Docker image from your Spring Boot application.
>
> **[2:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=131)** So, now that you've seen all the customization, in the next video, I'm going to show you how I would actually build this Docker image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (3), [[Java]] (1)
> **CLI Commands:** docker (4)
> **Env Vars:** build (1), success (1), api (1), palm (1)
> **URLs:** [docker.io](https://docker.io) (1)
> **Versions:** 0.01 (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)

#### [Building a custom Docker image](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=0)** - [Instructor] I prefer to build my own custom images.
>
> **[0:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=3)** It provides me a level of security with knowing exactly what is in my build pipeline.
>
> **[0:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=8)** I advocate for companies to maintain their own base images, and only inherit from those base images so they can control the entire lifecycle.
>
> **[0:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=18)** Let me show you how I would build a Docker image for a [[Spring Boot]] application.
>
> **[0:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=23)** Okay, I want you to open up the wisdom-api, and we are going to create a new file and we will simply call this Dockerfile.
>
> **[0:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=32)** All right, we're going to start with a FROM command, and we're going to use the Maven 3.9.8, which is the latest right now, from eclipse-temurin-21, and the Alpine distro, AS build.
>
> **[0:53](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=53)** So now we're going to do a RUN mkdir, and we're going to create our work directory.
>
> **[1:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=60)** And then we will set our WORKDIR to /workdir.
>
> **[1:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=66)** Now we're going to copy the pom.xml to /workdir, and we are also going to copy src to /workdir/src.
>
> **[1:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=80)** And at this point, we can RUN mvn clean package.
>
> **[1:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=88)** And now we're going to actually build our final image.
>
> **[1:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=90)** So we'll go FROM eclipse-temurin:21.0.4, which is the version today, _7-jre-alpine.
>
> **[1:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=104)** Notice we're going to use a JRE at this point, because we don't need the JDK in our final image.
>
> **[1:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=109)** We're going to expose port 8080, and we will run mkdir once again, this time to a deploy directory, and we will do a COPY command from our builder.
>
> **[2:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=122)** So --from=build /workdir/target/*.jar,
>
> **[2:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=130)** 'cause there will only be one JAR file.
>
> **[2:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=133)** And we're going to deploy that to app.jar.
>
> **[2:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=137)** Now I do it this way so that as the version of my app increases, I don't need to worry about that in my actual Docker file.
>
> **[2:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=145)** Now at this point we can simply do a command, and we put that in brackets, and it's going to be [[Java]], and then -jar, and then /deploy/app.jar.
>
> **[2:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=163)** And that's all there is.
>
> **[2:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=164)** So let's go ahead and pop up the terminal window.
>
> **[2:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=167)** And what we're going to do is we're going to do a docker command, docker build -t wisdom-api:0.0.1, and dot.
>
> **[3:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=180)** Now, while this is building, I'm going to talk a little bit about how I actually do this in the real world.
>
> **[3:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=186)** In the real world, I start with the base image that is raw Alpine.
>
> **[3:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=190)** Everything else in my organization, regardless of language extends from that Alpine image.
>
> **[3:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=195)** We then roll a JDK from that.
>
> **[3:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=199)** Now we actually support multiple implementations of the Oracle JDK, because we have a need to, so we have an Eclipse one, we have an Oracle one, et cetera.
>
> **[3:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=208)** Then from that, we run jlink and build our own JRE, again, based on the Alpine base image.
>
> **[3:37](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=217)** Now at this point, I have two images that every other build pipeline can use.
>
> **[3:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=222)** I've got one with my JDK and all the tools that we need around that, and one with my JRE and all the tools that we need around that.
>
> **[3:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=229)** I do the same thing for my Node apps, for my Go apps, it doesn't really matter.
>
> **[3:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=234)** They're all from the same lineage. Now, why do I do that?
>
> **[3:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=238)** Let's say tomorrow there's a security bug in my version of Alpine.
>
> **[4:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=242)** I now can change that in one spot in my image pipeline and it will address all of the downstream images, because we have built-in processing to do that.
>
> **[4:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=255)** So it will go through and it will tag everything with the appropriate versions and roll it out.
>
> **[4:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=260)** This way, when a security issue happens, I have it handled.
>
> **[4:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=265)** It's a great way to look at things as you move forward.
>
> **[4:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=268)** When you are building out image pipelines, consider that "Oh, my goodness" scenario where there's a massive security bug that actually will impact you.
>
> **[4:38](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=278)** So now that this is done building and we have an image, there's a couple more things that we need to do in order to test this image.
>
> **[4:45](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=285)** Remember, we have to get environment files to it.
>
> **[4:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=288)** So let's go ahead and make a file, and I'm just going to use the IDE to do this.
>
> **[4:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=295)** We'll create a new file called env.list.
>
> **[4:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=299)** Now this file will never go into [[Version Control]] and there's a reason for that.
>
> **[5:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=303)** We don't normally put secrets in version control.
>
> **[5:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=306)** That being said, we have other instances in this of our database secrets, but that's okay.
>
> **[5:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=311)** So let's go to our launch.[[JSON]], and we're actually going to grab all of these fields, and we're going to put 'em into our env.list and then restructure them.
>
> **[5:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=325)** And to do that, we simply replace all of this with an equal sign, and then we will get rid of all of these values,
>
> **[5:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=342)** and get rid of everything at the end.
>
> **[5:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=349)** Now, we do actually need to make one more change here.
>
> **[5:51](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=351)** We're going to run an ifconfig in our terminal, and we're going to go look for the Docker network.
>
> **[5:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=357)** And the reason is, because we're running kind in Docker, and Docker to Docker doesn't work well with local hosts.
>
> **[6:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=364)** So we're going to copy the inet address from the docker0 container, and replace localhost with that.
>
> **[6:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=371)** So now that it's done, we can actually run our image.
>
> **[6:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=373)** So if I do a docker run, we will pass it the env-file that we just created.
>
> **[6:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=382)** We will do a port mapping of 8080 to 8080.
>
> **[6:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=387)** And it is the wisdom-api:0.0.1, and our application is actually started up and we can test it.
>
> **[6:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=396)** So I'm going to pop a side window here, and I'll do an http:8080/services, and you'll see I'm getting data out of that application.
>
> **[6:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=406)** We're not running Spring Boot at this point.
>
> **[6:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=409)** It's coming from our Docker container that is connecting to the database in our kind cluster over the ingress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (2), [[Version Control]] (2), [[Java]] (1), [[JSON]] (1)
> **CLI Commands:** docker (10), mkdir (2), make (2), mvn (1), node (1)
> **Env Vars:** jdk (4), jre (3), run (2), workdir (1), copy (1)
> **Versions:** 0.0.1 (2), 3.9.8 (1), 21.0.4 (1)
> **Ports:** :21 (1), port 8080 (1), :8080 (1)
> **File Paths:** pom.xml (1), launch.json (1)
> **Tools:** terminal (2)
> **UI Navigation:** go to (1)

#### [Uploading to a container registry](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=0)** - [Instructor] Now that you have an image, what do you do with it?
>
> **[0:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=3)** The answer is very similar to what we do with jar files, store them in a repository.
>
> **[0:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=10)** Whereas images, we use a container registry that stores images in repositories.
>
> **[0:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=15)** Container registries offer many other features besides storage, but that is outside the scope of this course.
>
> **[0:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=22)** For now, let's just get the image we created loaded into kind so that we can synthesize using an image registry.
>
> **[0:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=30)** So what I want you to do is open up a terminal window, and we are very simply going to start by typing a command of kind load docker-image wisdom-api:0.0.1 --name local.
>
> **[0:53](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=53)** This is going to take our docker image and put it on the node that is running kind.
>
> **[0:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=59)** So it's sort of synthesizing the image pull exercise that comes from a container registry.
>
> **[1:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=66)** Now by bypassing this, we're kind of taking it out of the realm, but in the real world, it is very much in the realm regardless of what container registry you choose.
>
> **[1:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=77)** So I'm going to encourage you to pause here and take a look at the local registry concept that you could use if you wanted to synthesize that in your work environment.
>
> **[1:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=89)** Otherwise, I'm going to encourage you to go read a little bit more about container registries and their importance or do both.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2), node (1)
> **Versions:** 0.0.1 (1)
> **Tools:** terminal (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Spring Native images](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=0)** - [Presenter] With the introduction of GraalVM, we are starting to see a shift to the creation of native images with [[Java]].
>
> **[0:07](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=7)** And while building such an image here doesn't have a lot of value, discussing it does.
>
> **[0:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=13)** If you want to know more about GraalVM, I have a course on it here on the [[LinkedIn]] Learning library.
>
> **[0:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=19)** The first question is always why?
>
> **[0:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=22)** And the first answer is that they're smaller in size.
>
> **[0:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=26)** Some may tell you that size of the executable doesn't matter.
>
> **[0:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=30)** I disagree.
>
> **[0:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=31)** Those storage is relatively cheap.
>
> **[0:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=34)** It isn't free.
>
> **[0:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=36)** And if I can produce the same results with no extra effort and save a few pennies, I will favor doing it.
>
> **[0:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=43)** But smaller isn't the biggest reason.
>
> **[0:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=46)** Native images are faster than VM-based operations.
>
> **[0:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=50)** The performance gains are seen on both a startup time and in execution.
>
> **[0:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=56)** And this is a big value to companies, especially when milliseconds count, and to many industries, they do count.
>
> **[1:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=66)** Then comes one of the biggest benefits: efficiencies.
>
> **[1:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=70)** Native Java images are more efficient in their use of both CPU and memory, yielding a higher pod density for a [[Kubernetes]] node.
>
> **[1:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=83)** If I can run an application with a smaller footprint, I can do more with the machine by packing more processes onto it, saving me money.
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=94)** But native images aren't for every situation.
>
> **[1:38](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=98)** I already told you about aspecting being out of the question, but there is more code that isn't compatible.
>
> **[1:45](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=105)** In fact, I have yet to find a system of any relative age that is ready for GraalVM without some significant work.
>
> **[1:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=114)** Legacy shops love tools like JMX and JVM TI because they have invested time, energy, and education on them, and moving to GraalVM throws that away.
>
> **[2:07](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=127)** Java agents, Flight Recorder, Mission Control, are also off the books with native images.
>
> **[2:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=133)** Native images use serial garbage collection, so large heap sizes can cause major pauses during GC cycles.
>
> **[2:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=142)** If you traditionally leverage larger heap sizes, beware of GraalVM.
>
> **[2:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=147)** Any tooling or framework that leverages reflection will have to be adjusted to work with GraalVM.
>
> **[2:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=154)** Most of the major players have done this work already.
>
> **[2:37](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=157)** However, pay attention because this can be a source of pain.
>
> **[2:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=162)** While I hate to admit the value of a thread dump at 2:00 AM when the pager is going off, there is real value.
>
> **[2:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=170)** With GraalVM, you have to learn a new way of getting into the OSS thread context.
>
> **[2:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=176)** And if you aren't willing to pay, you can't get heap dump capabilities.
>
> **[3:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=182)** But it isn't what we get with the JVM, even if you do pay.
>
> **[3:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=188)** So [[Spring Boot]] itself does offer support for native images.
>
> **[3:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=193)** Native image support is built in via a starter, and it is driven by the Spring Boot plugin.
>
> **[3:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=200)** Ultimately, the output of Maven and [[Gradle]] processes is an image, an OCI image, or a Docker image, essentially, that you can use to run your application much like we did with the containers that we built here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Spring Boot]] (2), [[LinkedIn]] (1), [[Kubernetes]] (1), [[Gradle]] (1)
> **Env Vars:** jvm (2), cpu (1), jmx (1), oss (1), oci (1)
> **CLI Commands:** node (1), find (1), docker (1)
> **Definitions:** is a  (1), is an  (1)
> **Ports:** :00 (1)
> **Speakers:** - [presenter] (1)


### 3. Deploying to Kubernetes

[↑ Back to Table of Contents](#table-of-contents)

#### [Deploying to Kubernetes](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/deploying-to-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/deploying-to-kubernetes?u=76281980&t=0)** - [Instructor] Before we jump into the steps of deploying our application to [[Kubernetes]], I want to spend a bit of time and show you what we will be building out from a conceptual level.
>
> **[0:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/deploying-to-kubernetes?u=76281980&t=11)** We will start with the Kubernetes cluster, and in this case, it's kind, and of course we have our system running outside of that that we can have access to.
>
> **[0:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/deploying-to-kubernetes?u=76281980&t=20)** Now today we already have a database running in our kind cluster.
>
> **[0:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/deploying-to-kubernetes?u=76281980&t=25)** We are going to go through the process of building out a namespace.
>
> **[0:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/deploying-to-kubernetes?u=76281980&t=29)** Within that namespace, we're going to load some configuration and some secrets, and then we are going to do our deployment.
>
> **[0:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/deploying-to-kubernetes?u=76281980&t=36)** Now in our case, we're only going to put one pod into the namespace, but usually we leverage multiple pods so that we get high availability.
>
> **[0:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/deploying-to-kubernetes?u=76281980&t=46)** Then we're going to deploy a service, and the service acts as a front of our pods and provides us a load balancer on top of them to distribute the traffic to each of those pods that comes into the service.
>
> **[0:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/deploying-to-kubernetes?u=76281980&t=59)** Now this allows for things like rolling updates and allows for an individual pod to drop off while the service still operates, assuming that there's at least one other pod able to handle the respective traffic.
>
> **[1:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/deploying-to-kubernetes?u=76281980&t=72)** Then we're going to build an ingress port, and this ingress will allow us from our dev container to communicate to the service without going through a port forward.
>
> **[1:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/deploying-to-kubernetes?u=76281980&t=83)** Then we're going to attach monitoring to our pods to see what's going on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2)
> **Speakers:** - [instructor] (1)

#### [Building the initial scaffolding](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=0)** - [Instructor] Okay, let's get ready to start deploying our application to [[Kubernetes]] by building out the scaffolding for this deployment.
>
> **[0:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=8)** The first thing that I want to do is open up wisdom-api and I'm going to create a new folder in here, and we will call this deployment.
>
> **[0:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=17)** And with our deployment, we're going to create a new file, and the first file that we're going to call is namespace.yaml.
>
> **[0:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=25)** Now there are several ways to build a namespace.
>
> **[0:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=27)** This is the way that I'm going to walk through just so you can see what actually happens.
>
> **[0:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=31)** So we're going to set our apiVersion: v1, the kind: Namespace, and then we will add our [[Metadata]] to it.
>
> **[0:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=41)** And the first piece of metadata that we will add will be a name: wisdom.
>
> **[0:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=48)** And that's actually the only piece of metadata that we're going to need for this.
>
> **[0:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=52)** Now let's go ahead and create another new file, and this one will be called secret.yaml.
>
> **[0:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=59)** Now managing secrets in this way, especially when you store them in source control, is not always the best way to do it.
>
> **[1:05](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=65)** What I'm trying to show you is what actually exists in a Kubernetes secret.
>
> **[1:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=71)** So that being said, let's do an apiVersion: v1, the kind: Secret, the metadata for this will have two values this time.
>
> **[1:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=85)** A name, we're going to call this db-secret, and we will apply the namespace: wisdom that we will create here shortly, the type: Opaque.
>
> **[1:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=99)** And now for the data.
>
> **[1:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=101)** Now we're going to cheat a little bit here on the data because I want to actually go get it from a place that it already exists in source control.
>
> **[1:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=110)** So we're going to go up here to the [[PostgreSQL|postgres]] config, and you'll see I have a username and a password in here.
>
> **[1:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=119)** So we will copy those, we'll bring them back into our config, and by convention, I'm going to name them with all caps.
>
> **[2:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=132)** And we're now ready to apply these.
>
> **[2:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=134)** So now I want you to open up your terminal, and I'm going to expand this out a little bit.
>
> **[2:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=141)** First thing I want to see is where are we, so we need to go into the wisdom directory.
>
> **[2:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=147)** Now at this point, I'm going to execute a few commands.
>
> **[2:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=151)** Now I have been using k instead of kubectl, and that's because I have an alias built into the dev container.
>
> **[2:40](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=160)** But you can do all of these by typing kubectl get nodes, or k get nodes because of that alias.
>
> **[2:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=169)** So I use k just because I do it on a daily basis, and otherwise I would be fumbling over myself as I was doing this recording.
>
> **[2:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=176)** So k get ns, which will get us all of the namespaces.
>
> **[3:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=180)** And you'll see at this point, we don't have one called wisdom.
>
> **[3:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=184)** So we will do a k apply -f, and we are going to apply from our deployment, the namespace.yaml.
>
> **[3:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=193)** So now it tells us that that namespace was created.
>
> **[3:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=195)** And indeed, if I do a namespace again, you'll see now I have wisdom as a namespace.
>
> **[3:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=201)** You can also create a namespace by doing something like k create namespace, and it will create a namespace in the same way.
>
> **[3:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=214)** So let's go ahead and apply that secret.
>
> **[3:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=215)** So k apply -f deployment/secret.yaml.
>
> **[3:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=222)** Now if we do a k get all -n wisdom, you'll see no resources are found, and that's because secrets are generally hidden unless you ask for them.
>
> **[3:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=234)** So now if we do a k get secrets -n wisdom, it helps to spell that properly.
>
> **[4:05](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=245)** Now you'll see we have the secret there, and they're Base64 encoded as we applied them.
>
> **[4:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=251)** This is how you get a secret out there.
>
> **[4:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=254)** It's just not storing it in source control usually.
>
> **[4:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=258)** So with that, we have the scaffolding in place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (4), [[Kubernetes]] (2), [[PostgreSQL|Postgres]] (1)
> **File Paths:** namespace.yaml (2), secret.yaml (1), deployment/secret.yaml (1)
> **CLI Commands:** kubectl (2)
> **Code Identifiers:** apiversion (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Building a deployment](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=0)** - [Instructor] The deployment is the big workhorse here for our application.
>
> **[0:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=4)** It is what will make our image available within [[Kubernetes]] and consume the resources of the backing service.
>
> **[0:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=11)** So let's jump into building one.
>
> **[0:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=14)** There's quite a bit of typing here in a deployment, so be sure to pause the video as you need to to catch up.
>
> **[0:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=20)** Let's create a file called deployment.yaml and we're going to go ahead and start with an API version.
>
> **[0:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=28)** And this is at apps slash V1.
>
> **[0:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=33)** A kind is a deployment.
>
> **[0:37](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=37)** The [[Metadata]] associated with it has a name of wisdom API deployment and namespace of wisdom and labels of app wisdom API.
>
> **[0:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=58)** Now remember, spacing matters in your YAML files.
>
> **[1:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=62)** So back at the beginning we do a spec and then a replicas of one and a selector.
>
> **[1:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=74)** Match labels and our app once again.
>
> **[1:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=81)** And now for our template, once again, our wisdom API for a label.
>
> **[1:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=88)** And back at the previous metadata level, we're going to create our spec.
>
> **[1:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=93)** And this is where we define our container.
>
> **[1:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=96)** And these pods will have one and only one container, but we need to make a array here.
>
> **[1:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=103)** The name of the container will be wisdom API.
>
> **[1:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=107)** The image that we will leverage is what we loaded onto the node.
>
> **[1:53](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=113)** So it is just the full docker image name 0.01.
>
> **[1:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=119)** Normally you would reference these from a container registry, but again, we loaded it onto the node, so we don't need to do that in this case.
>
> **[2:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=128)** And now we need to talk about the ports because the container itself operates on port 8080.
>
> **[2:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=134)** So we need to specify that.
>
> **[2:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=137)** Now we're going to create our environment.
>
> **[2:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=139)** And while this will look somewhat familiar because we did it for a run configuration, this is really the power of Kubernetes, the power of cloud native computing, because as you will see when we get there, we can port in different values as needed.
>
> **[2:37](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=157)** In a similar vein, notice that I'm putting things, even numbers into quotes, and this is how you need to do it.
>
> **[2:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=163)** So DB port of 5, 4, 3, 2, a DB name.
>
> **[2:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=169)** Once again, we'll do local DB and now we will do our DB host.
>
> **[2:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=176)** Now here's the first change, instead of local host, because we can't operate at local host, we actually need to reference this from the Kubernetes perspective.
>
> **[3:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=186)** So we're going to do it local DB RW, and that is the name of the service that we are going to hit in [[PostgreSQL|Postgres]] namespace.
>
> **[3:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=196)** And again, it's a service, but it is at cluster local.
>
> **[3:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=201)** Now we're going to use our secrets.
>
> **[3:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=203)** So DB username, and this is a value from, and the value from is a secret key reference.
>
> **[3:37](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=217)** And the name here is the name of the secret that we created.
>
> **[3:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=222)** And the key is the key in that, so username.
>
> **[3:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=228)** And that will translate the secret value for the key username to the environment variable DB username.
>
> **[3:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=237)** We're going to do the same thing for DB password.
>
> **[4:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=242)** Now we got one more thing to do here and that is to create our probes.
>
> **[4:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=246)** And these probes are what Kubernetes uses to know if the system is up or not.
>
> **[4:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=252)** So the first one is a liveness probe, and this is an HTTP [[Git]] operation.
>
> **[4:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=261)** And the port is 8080, and the path that we're going to leverage is from actuator and it's the health endpoint that we exposed.
>
> **[4:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=271)** And within there, there is a liveness endpoint.
>
> **[4:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=275)** Now we're going to do a readiness probe.
>
> **[4:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=281)** And again, HTTP get, a port of 8080.
>
> **[4:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=288)** And I'm going to go ahead and copy this path, but instead of hitting the liveness, we will hit the readiness.
>
> **[4:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=299)** Now [[Spring Boot]] has some great documentation here on how to customize what exists in a readiness probe.
>
> **[5:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=306)** Things like has the cache loaded are really, really important when you're dealing with this.
>
> **[5:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=312)** So now all I need to do is deploy this.
>
> **[5:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=314)** So let's open up a terminal window, make sure you know where you're at.
>
> **[5:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=319)** I'm going to go ahead and go into the deployment directory, and I'm going to do a K apply dash F of my deployment itself.
>
> **[5:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=329)** Now once that's deployed, we're going to go check it.
>
> **[5:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=331)** So let me clear out my terminal here.
>
> **[5:37](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=337)** We will get all from the wisdom directory.
>
> **[5:40](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=340)** I have a pod up and running, which is really good.
>
> **[5:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=343)** I'm going to go ahead and split my screen and expand it here.
>
> **[5:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=349)** I'm going to copy the name of this pod and on my other terminal, I'm going to do a K port forward dash N wisdom, the name of my pod, And I'm going to go from 9,000 to 8080.
>
> **[6:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=371)** Now back in my primary terminal, I'm going to do an HTTP on 9,000 and we will hit the services endpoint.
>
> **[6:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=382)** And I've returned data, so the pod is up and running.
>
> **[6:24](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=384)** It is actually retrieving data from the database.
>
> **[6:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=387)** And we're good to move on to the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (4), [[Metadata]] (2), [[PostgreSQL|Postgres]] (1), [[Git]] (1), [[Spring Boot]] (1)
> **Env Vars:** api (5), http (3), yaml (1)
> **CLI Commands:** make (3), node (2), docker (1), git (1)
> **Definitions:** is a  (5), is an  (1)
> **Tools:** terminal (4)
> **Documentation:** spec (2)
> **File Paths:** deployment.yaml (1)
> **Ports:** port 8080 (1)

#### [Building a service](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=0)** - [Instructor] Now we need to load balance traffic to our pods.
>
> **[0:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=3)** Even though we only have one right now in our deployment, you still need to front it with a service, so let's go ahead and do that.
>
> **[0:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=12)** Back in our deployment directory, let's create a new file called service.yaml, and we'll start with an API version of v1, and a kind of Service and [[Metadata]] around it.
>
> **[0:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=30)** The name will be wisdom-api-service, and the namespace will be wisdom, and the spec, we'll start with our selector, and this is how it knows which pods to attach to, and it does it based on the label.
>
> **[0:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=50)** And we have a single label of app wisdom-api, so we will put it here on the selector, and now we specify our ports.
>
> **[1:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=61)** So, the protocol is TCP, the name will be wisdom-api-http.
>
> **[1:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=71)** The Port, and this is the port that the service itself is going to listen at, and we're going to listen at port 80, however, we will translate that to Port 8080, and that's where [[Spring Boot]] operates within those containers.
>
> **[1:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=86)** So, now let's jump to the terminal, and let's check where we're at.
>
> **[1:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=92)** Go ahead and get into the deployment directory.
>
> **[1:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=102)** Apply that service.
>
> **[1:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=109)** We can see that the service is there, so now let's check out port forwarding once again.
>
> **[1:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=115)** I'm going to split my terminal.
>
> **[1:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=117)** [[Kubernetes]] port-forward
>
> **[2:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=122)** - n wisdom svc
>
> **[2:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=130)** /wisdom-api-service.
>
> **[2:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=135)** We will do 9,000 to 80.
>
> **[2:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=138)** Now, I want you to look at what happens.
>
> **[2:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=139)** It actually responds that it's responding to 8080, not 80, and the reason it's doing that is it's actually proxying through to the pod, which is what a service does.
>
> **[2:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=151)** So, just like we did before, we could do an http, at 9,000/services, and we get data back.
>
> **[2:40](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=160)** So, now we're going through a port-forward, to the service, from the service to the pod, the pod is hitting the database and responding with traffic.
>
> **[2:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=169)** In the next video, we're going to get rid of the port-forward and do straight ingress into that pod.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1), [[Spring Boot]] (1), [[Kubernetes]] (1)
> **Ports:** port 80 (1), port 8080 (1)
> **Env Vars:** api (1), tcp (1)
> **Tools:** terminal (2)
> **Speakers:** - [instructor] (1), - n (1)
> **File Paths:** service.yaml (1)
> **Cross-References:** in the next (1)
> **Documentation:** spec (1)

#### [Adding ingress](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=0)** - [Instructor] Now let's expose our service to the outside world.
>
> **[0:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=4)** I want you to start in the deployment directory and create a new file called ingress.yaml.
>
> **[0:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=12)** And we're going to leverage an ingress called nginx.
>
> **[0:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=15)** We actually have already been doing that when we've accessed our database because it was already exposed through the ingress itself.
>
> **[0:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=23)** However, this one's a little bit different.
>
> **[0:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=27)** We're going to start with an API version of networking.[k8s.io/v1](https://k8s.io/v1).
>
> **[0:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=36)** And the kind will be an ingress.
>
> **[0:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=41)** Now, some [[Metadata]] associated with this.
>
> **[0:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=44)** The name will be wisdom-api-ingress.
>
> **[0:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=50)** The namespace will be wisdom.
>
> **[0:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=55)** And now for some annotations.
>
> **[1:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=60)** All right, nginx.ingress.[kubernetes.io/use](https://kubernetes.io/use).
>
> **[1:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=68)** RegX will be set equal to true.
>
> **[1:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=73)** and nginx.ingress.[kubernetes.io](https://kubernetes.io) rewrite target will be /$2.
>
> **[1:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=87)** Now, what this is saying is it will take the path, it will translate it to our service and then rewrite it so that the full path doesn't go to the service, only the things after what we were going to specify below.
>
> **[1:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=102)** And that's really important because our service doesn't know anything about how we are going to do the [[Routing]].
>
> **[1:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=110)** Now we can do our spec and we will start with an ingress class name and we will call this nginx.
>
> **[2:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=121)** And now for the rules.
>
> **[2:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=124)** And the first rule will be an HTTP rule, and we will specify the paths on that.
>
> **[2:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=135)** And then an individual path.
>
> **[2:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=139)** That individual path will be /wisdom-api.
>
> **[2:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=143)** So we will go to the context route of [[Kubernetes]] to /wisdom-api.
>
> **[2:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=147)** And from there, everything beyond this is going to be routed to our pod, and that's really important.
>
> **[2:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=155)** So we'll do /|$ and then another set of parentheses .*.
>
> **[2:45](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=165)** So anything after wisdom API will go to our pod, but it's actually going to do it through the service.
>
> **[2:53](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=173)** And I'll show you that here in a minute.
>
> **[2:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=175)** So the path type is implementation specific.
>
> **[3:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=182)** And now for the backend, and this is how we are going to do the routing, we're going to route to a service.
>
> **[3:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=189)** The name of that service is wisdom-api-service.
>
> **[3:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=194)** And the port that we are going to route on is 80.
>
> **[3:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=199)** Remember, it's going to proxy through the service on 80 to 8088 on the pod.
>
> **[3:24](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=204)** And with that, we can deploy this.
>
> **[3:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=207)** So open up your terminal.
>
> **[3:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=210)** Once again, check where you're at so that you know.
>
> **[3:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=213)** I'm going to go ahead and go into this directory.
>
> **[3:37](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=217)** I would do a k apply -f for my ingress.
>
> **[3:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=223)** My ingress is now up.
>
> **[3:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=224)** So if everything is working, I can go to HTTP 80 /widsom-api/services.
>
> **[3:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=237)** And I got data out.
>
> **[3:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=238)** Notice we didn't do port forwarding.
>
> **[4:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=240)** We've now exposed our service to the outside world.
>
> **[4:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=244)** Now, in the real world, we wouldn't expose data services like this.
>
> **[4:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=248)** That's just not something we would do.
>
> **[4:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=250)** But for now, we've done that locally, so you can now consume it.
>
> **[4:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=254)** Now back to the kind implementation that I use on my desktop.
>
> **[4:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=258)** I do this all the time.
>
> **[4:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=260)** This is how I do local development without having to port forward into my kind cluster.
>
> **[4:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=265)** So I do use this behavior even though it's a little bit counterintuitive to how we do it in the real world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (3), [[Routing]] (2), [[Metadata]] (1)
> **CLI Commands:** nginx (4)
> **Env Vars:** api (2), http (2)
> **UI Navigation:** go to (4)
> **URLs:** [kubernetes.io](https://kubernetes.io) (2), [k8s.io](https://k8s.io) (1)
> **File Paths:** ingress.yaml (1)
> **Documentation:** spec (1)
> **Tools:** terminal (1)

#### [Adding monitoring](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=0)** - [Instructor] Now it's time to tie into the metrics that we created earlier in this course and visualize them in our [[Kubernetes]] cluster.
>
> **[0:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=9)** What you may not know unless you did a lot of digging, is that Prometheus has been running on the system the entire time, along with Grafana.
>
> **[0:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=18)** We actually are using that to monitor the operator and the database if you dug into it.
>
> **[0:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=26)** But let's go actually tie into the Prometheus metrics being exposed by our application.
>
> **[0:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=34)** The first thing that I want to do is I want to open up the terminal and I want to go to http 80/wisdom-api/actuator/prometheus.
>
> **[0:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=49)** And you'll see we have a bunch of metrics being emitted, including the timers that we never instrumented.
>
> **[0:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=56)** That's okay because we've defined them, therefore we do see them even if we're not using 'em.
>
> **[1:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=62)** So with that said, let's go ahead and create a new deployment.
>
> **[1:05](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=65)** Let me shrink this window down and we will do a new file and deployment directory called monitoring.yaml.
>
> **[1:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=77)** All right, as we've done before, apiVersion, this one is monitoring.[coreos.com/v1](https://coreos.com/v1).
>
> **[1:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=87)** The kind, we are going to create a pod monitor.
>
> **[1:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=89)** There are several monitors, including pod and service monitors.
>
> **[1:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=93)** We're going to do a pod monitor.
>
> **[1:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=95)** Now the [[Metadata]] around this has a name of wisdom-api-monitor and a namespace of wisdom.
>
> **[1:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=110)** And now for the spec.
>
> **[1:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=112)** So the selector that we will use is a match label selector.
>
> **[2:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=120)** And as we did with our service before, we will use the app name of wisdom-api, and now we will do our pod metrics endpoints.
>
> **[2:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=130)** Now this is what we are going to use to point to that actuator endpoint that I just showed you.
>
> **[2:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=136)** Now it has a target port, which is 8080.
>
> **[2:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=142)** So remember we just saw on 80 because of all of the ingress and service mapping.
>
> **[2:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=147)** But when you're down at the pod level, it is still 8080, so we have to request it there.
>
> **[2:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=153)** And the path is actuator from the root, not with the wisdom api thing that the ingress added, it's from the root, so it's /actuator/prometheus.
>
> **[2:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=168)** Now let's go ahead and apply that.
>
> **[2:51](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=171)** So open the terminal back up.
>
> **[2:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=174)** I am in the appropriate directory, so I will do a Kubernetes, and let's do it the long way this time.
>
> **[3:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=180)** So you can see why I have that alias.
>
> **[3:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=182)** So kubectl - f monitoring, and I forgot the apply because I was talking.
>
> **[3:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=191)** So apply-f. There we go.
>
> **[3:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=195)** Okay, the monitor's configured.
>
> **[3:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=197)** We could theoretically see things, but it does take a moment to get there.
>
> **[3:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=201)** So we're going to generate a little bit of traffic so we've got something to look at.
>
> **[3:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=206)** Let's do an http on 80/wisdom-api/customers.
>
> **[3:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=215)** Remember, the only one that we implemented was the get all customers, but we'll go ahead and hit that a few times.
>
> **[3:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=222)** Let's get some traffic spiked up on that.
>
> **[3:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=228)** So hopefully we'll be able to see something.
>
> **[3:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=230)** Now, if you go over to the ports, there's a couple places you can go.
>
> **[3:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=235)** Port 30,000 is where Prometheus itself lives.
>
> **[3:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=238)** Prometheus is raw, but it is very usable.
>
> **[4:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=242)** We also have Grafana installed at 31,000.
>
> **[4:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=246)** Now it has a username of admin and a password of prom operator, if you choose to do that.
>
> **[4:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=254)** I'm going to simply go to the Prometheus one, and we are going to do a search for get all customers.
>
> **[4:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=263)** And you can see it is there.
>
> **[4:24](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=264)** That does not mean we have data, but we can at least see it.
>
> **[4:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=268)** And let's look at the seconds max, which is a gauge, and we will execute it.
>
> **[4:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=276)** And it looks like we have some data.
>
> **[4:38](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=278)** So there's our spike that we hit some time ago while we were doing some testing, but you can actually see it now.
>
> **[4:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=286)** This is the most recent spike.
>
> **[4:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=287)** So let's come into the last five minutes and there's the spike that we just hit, and it will drop off eventually as it does its next round unless you keep putting traffic on it.
>
> **[4:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=299)** Now you can take a look here at what Grafana offers you.
>
> **[5:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=303)** Again, it is admin and prom operator as the username and password.
>
> **[5:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=310)** I encourage you to play with them and take a look at metrics, maybe take a little time and instrument the [[Representational State Transfer (REST)|rest]] of your metrics.
>
> **[5:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=316)** Take a look at some of the other metrics you can do outside of timers, do counts or something else, and see what you can have fun with around this.
>
> **[5:24](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=324)** You now have a full working system with observability built in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2), [[Metadata]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** go to (2), open the (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)
> **File Paths:** monitoring.yaml (1)
> **CLI Commands:** kubectl (1)
> **Code Identifiers:** apiversion (1)
> **URLs:** [coreos.com](https://coreos.com) (1)

#### [Introduction to Helm](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=0)** - [Instructor] We built out basic [[Kubernetes]] YAML files to deploy our application.
>
> **[0:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=4)** But seldom have I ever done this.
>
> **[0:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=8)** I usually use [[Helm]] to do this work.
>
> **[0:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=11)** While it isn't a course on Helm, it's worth discussing it and some possible strategies for using it.
>
> **[0:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=17)** So let's start by talking about what Helm is.
>
> **[0:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=20)** Helm is something we've actually been using to run all of our introductory scripts.
>
> **[0:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=27)** It's a package manager for Kubernetes.
>
> **[0:30](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=30)** It allows you to leverage templated deployment files to deploy anything from operators to individual components.
>
> **[0:38](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=38)** It handles the entire lifecycle of delivery of applications, including delivery, installation and upgrades.
>
> **[0:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=47)** and rollbacks when necessary.
>
> **[0:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=50)** So there's a few strategies that I have developed when using Helm that I wanted to share with you.
>
> **[0:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=56)** First of all, reduce the number of charts.
>
> **[1:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=60)** It is tempting to build a unique chart for each and every application.
>
> **[1:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=66)** In my opinion, that is a waste of time.
>
> **[1:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=70)** Most of those charts are going to look the same and reducing the number of charts will actually increase your throughput and reduce your chasing down of bugs.
>
> **[1:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=82)** Hard code those values that are consistent.
>
> **[1:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=86)** I have operated with as few as three home charts and done that for all of my system deployments.
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=94)** What you want to focus on templating is the variables themselves.
>
> **[1:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=99)** If you look at a default Helm chart, when you just do a Helm create, everything is templatized.
>
> **[1:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=106)** And I find that to be extremely confusing and not worth the effort.
>
> **[1:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=112)** Keep them as simple as possible.
>
> **[1:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=115)** You will thank me in the long term if you do that.
>
> **[1:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=118)** Only add complexity when you need to.
>
> **[2:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=122)** And once you really, really get good at Helm, you will start to see the value of automation.
>
> **[2:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=128)** Some of the systems I have built, we never manually created a Helm chart once.
>
> **[2:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=133)** Our CI/CD pipeline would take a templated file, build one of three variations of Helm through automation and store them.
>
> **[2:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=143)** We never checked Helm charts into our repo.
>
> **[2:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=147)** We never wrote them, we never dealt with them, though, we use them for every single deployment.
>
> **[2:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=153)** Now, this is sort of a Nirvana state, but it is attainable with Helm rather easily if you follow these simple strategies that I have laid out for you.
>
> **[2:43](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=163)** So let's talk a little bit about some of the uses of Helm that you may either use or create charts for.
>
> **[2:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=169)** Software that you use in Kubernetes is often delivered via Helm.
>
> **[2:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=175)** In fact, most of the time, that's the preferred way to use it when possible.
>
> **[3:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=180)** Of course, applications that you write that are going to target Kubernetes, Helm will help you manage the state of those, whether you use them directly or use them through other tools like [[Argo CD]] or Harness or any of the various ways to deploy applications.
>
> **[3:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=197)** And one of the big ones is operators that you build.
>
> **[3:21](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=201)** If you build an operator, have a Helm chart to deploy it.
>
> **[3:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=206)** If you ship that operator out to the world, have a Helm chart so everyone else can consume it without having to figure out how to do the deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Helm]] (17), [[Kubernetes]] (4), [[Argo CD]] (1)
> **CLI Commands:** cd (2), find (1)
> **Env Vars:** yaml (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Additional Topics

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing strategies](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=0)** - [Instructor] I want to spend a little bit of time talking about some testing strategies around [[Kubernetes]] and cloud native development as a whole.
>
> **[0:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=8)** I want to start with [[Unit Testing]].
>
> **[0:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=9)** Now, obviously, in this course, we deleted the only unit test that came from [[Spring Boot]] and didn't spend any more time talking about it, so now is a great time to do that.
>
> **[0:19](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=19)** I encourage you while you're building out your systems, especially with these remote database considerations, to leverage embedded [[Databases]] if you can during your testing time.
>
> **[0:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=32)** If you cannot, then sometimes it's even better to leverage something like dev containers to do that testing.
>
> **[0:40](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=40)** With dev containers, you can run a Docker image that will store your database to actually execute your unit test.
>
> **[0:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=47)** That way, you're not relying on actual [[Database Systems]].
>
> **[0:51](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=51)** Of course, you can always mock dependencies, including things like databases, and these are things that you should be doing anyway as you're building out your testing.
>
> **[1:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=61)** And you can always utilize specific test contexts within Spring Boot so that you're not loading the actual live application context.
>
> **[1:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=71)** And usually you're going to do these things hand in hand together.
>
> **[1:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=74)** It's not one or the other.
>
> **[1:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=76)** It's usually a mixture of at least three of these when you're building out proper unit tests with the [[Spring Framework]].
>
> **[1:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=83)** Now comes the area of [[Integration Testing]], and this is something that I'm very passionate about because it ties directly into my desire to have full CI/CD.
>
> **[1:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=93)** With integration testing, one of the problems you have to deal with is as you deploy to remote environments, your APIs generally are private.
>
> **[1:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=104)** Now, I'm not talking about edge facades that you build to expose them or gateways.
>
> **[1:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=109)** I'm talking about your hardcore internal services that only are there to serve the needs of your other applications.
>
> **[1:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=117)** Testing these can become problematic because they are private.
>
> **[2:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=122)** You can leverage tools like Kubernetes jobs and test frameworks, like pytest or go test or even [[JUnit]], to build packages that do tests in a Kubernetes job.
>
> **[2:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=136)** And a Kubernetes job is a one-time operation.
>
> **[2:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=140)** When you get really good at these, you can actually have them report back to your CI/CD pipelines.
>
> **[2:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=146)** You can use these things, especially with the local environment, to prevent an actual PR from getting merged.
>
> **[2:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=154)** One thing that you have to consider is how are you going to handle setup and tear down?
>
> **[2:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=159)** This is really an important aspect of integration testing because you don't want to consistently grow your database or have tests collide with live data.
>
> **[2:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=170)** Worse is if tests collide with themselves, and then they start failing for reasons that you don't know.
>
> **[2:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=176)** So good setup and tear down practices are important with integration testing.
>
> **[3:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=182)** And in line with that, you have to consider the case of abnormal termination.
>
> **[3:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=188)** If your integration test fails in the middle of its operation, it can't tear itself down because it's crashed.
>
> **[3:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=196)** So you need to have a way to not only identify that the termination happened, but to go clean up all of the behavior that it wasn't able to clean up itself.
>
> **[3:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=206)** Now when it comes to user acceptance testing, you're going to really get into automation.
>
> **[3:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=212)** All of this should be run, in my opinion, outside the cluster because that's how your users are going to access your systems.
>
> **[3:40](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=220)** So you can stand up a remote cluster or a remote server to do these types of automation tests.
>
> **[3:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=227)** You're really focusing on testing the major flows through your application.
>
> **[3:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=232)** But don't just test positive flows.
>
> **[3:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=235)** Be sure that you're also testing the negative flows.
>
> **[3:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=238)** And any public APIs that you expose, at a minimum, should be subject to contract testing.
>
> **[4:07](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=247)** Of course, there are benefits of bringing those to all of your internal APIs, but from your remote consumer, you cannot break your public APIs and they must be passive from release to release.
>
> **[4:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=260)** In a similar vein, you should be actively [[Load Testing]] your system in all of your environments to ensure that you can handle the load that you need to apply, usually at some greater value than you have seen over the last period of time.
>
> **[4:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=275)** And performance testing goes sort of in line with load testing, but it's a little bit different in its nature.
>
> **[4:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=281)** Here, you're making sure that your systems are performant, both under load and without load on the system.
>
> **[4:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=289)** And as we've talked about a couple times now, [[Cloud Infrastructure]] dies, nodes die, Pods die.
>
> **[4:56](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=296)** So having good chaos testing to be able to withstand those failures of cloud infrastructure is very, very important.
>
> **[5:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=306)** Last but not least is [[Security Testing]].
>
> **[5:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=309)** It is very important that you do not forget the importance or have the focus on it such that you don't ignore the security testing needs of your system.
>
> **[5:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=320)** Things like SAST and DAST will improve the quality of your system with very little work on your part because these things just happen in the background.
>
> **[5:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=331)** But you should also be looking at things like container scanning and not just the containers that you create, but also the containers that you deploy to your environment.
>
> **[5:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=341)** You could have the greatest security practices on Earth, but bring in somebody else's code because they sold it to you, and now you have a security vulnerability.
>
> **[5:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=352)** So please take testing seriously in your cloud native systems in all flavors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (4), [[Integration Testing]] (4), [[Spring Boot]] (2), [[Databases]] (2), [[Load Testing]] (2)
> **CLI Commands:** cd (2), docker (1)
> **Prerequisites:** setup (2), you need to have (1)
> **Env Vars:** sast (1), dast (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Automation in CI/CD](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=0)** - [Instructor] I want to spend a little bit of time and talk about the importance of automation in CI/CD and how it can affect you using something like a kind cluster on your local machine as well as [[Kubernetes]] as a whole.
>
> **[0:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=13)** Let's start with the build process or [[Continuous Integration (CI)|continuous integration]].
>
> **[0:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=17)** What I like to do, and what I encourage everyone to do, is build on all branches.
>
> **[0:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=22)** In fact, I have a pattern where the minute I create a branch and push it to remote, I immediately have a build process, and it's actually the full CI/CD process, actually execute with the deployment occurring on my local Kubernetes cluster.
>
> **[0:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=39)** Leverage tools tied into your SCM.
>
> **[0:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=42)** So, what do I mean by that?
>
> **[0:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=44)** If your build system can tie into SCM, leverage it.
>
> **[0:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=48)** In fact, if your build system is SCM, you're in a better spot yet.
>
> **[0:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=54)** When you're using something like [[GitHub]] with GitHub Actions, you actually can register a remote runner on your local Kubernetes cluster that ties to your account to do all of the build work on your machine so it doesn't cost you minutes out on GitHub.
>
> **[1:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=71)** Create scripts for local dev builds when that's not possible.
>
> **[1:15](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=75)** It's very difficult at times for developers to remember everything that they need to do, and if you have a very easy script that they can just type a few characters to execute the local build when it's not tied to SCM, you will actually save yourself in the long run.
>
> **[1:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=91)** And the benefit of all of this is fast feedback.
>
> **[1:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=95)** Cannot stress enough the quicker you find an issue, the quicker you find a problem, as close as it is to when you created that problem, you actually are going to be able to fix it much faster.
>
> **[1:45](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=105)** And that's really what CI/CD is all about is that fast feedback loop.
>
> **[1:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=110)** Now, let's talk about the delivery mechanism itself.
>
> **[1:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=114)** As I already alluded to, if you can, deliver branches locally.
>
> **[1:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=119)** So, developer goes out, they create a ticket, they open up a branch for that ticket, immediately that branch, which is nothing more than main, should build and deploy locally.
>
> **[2:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=131)** Then as they push more code up, it builds again, assuming the tests pass, and deploys locally.
>
> **[2:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=138)** While you're doing that, you can test those branches locally.
>
> **[2:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=143)** If your integration tests, for instance, are environment agnostic, as they should be, those integration tests can run in your branch, which means you may be failing if you're doing [[Test-Driven Development]], but that's okay because every time you push code, you should see more and more tests passing as you're moving forward.
>
> **[2:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=164)** Or if you break a test, you will know immediately that you did that.
>
> **[2:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=168)** Once you have a merge of your PR, in my opinion, it should immediately be deployed to a non-prod environment.
>
> **[2:57](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=177)** So, the PR merges, the builds occur as normal, but then you immediately deliver to non-prod.
>
> **[3:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=184)** Once there, you test everything.
>
> **[3:07](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=187)** Your integration test, your user acceptance test, your security test, your load test, your chaos test, everything we just talked about that you can automate should run in your non-prod environment.
>
> **[3:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=198)** As a matter of fact, the only place that I want a manual gate, and even there it's a little bit suspect, is going from the last non-prod environment to prod.
>
> **[3:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=208)** If you get really good at this, you can have one non-prod environment, your local machine, and prod and never have a manual gate.
>
> **[3:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=216)** That is a goal, that is not always immediately attainable, but if you get to that level of confidence, and Kubernetes enables you to do that with all of the automation capabilities, you will achieve rapid development that most teams are striving for every day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (4), [[GitHub]] (3), [[Continuous Integration (CI)|Continuous integration]] (1), [[Test-Driven Development]] (1)
> **CLI Commands:** cd (3), find (2)
> **Env Vars:** scm (4)
> **Tools:** github (3)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Security considerations](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=0)** - [Presenter] I would be remiss if I didn't spend at least a little bit of time in this course talking about the security considerations that come with not only cloud-native computing, but the containers that we run those cloud-native apps on.
>
> **[0:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=14)** Let's start our conversation with the containers themselves.
>
> **[0:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=17)** I highly encourage you to secure the lifecycle of your containers.
>
> **[0:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=23)** I already talked a little bit about the strategy that I use where I start with the base image and everything in my ecosystem extends from that base image.
>
> **[0:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=33)** We do not allow external images in, and we do that on purpose.
>
> **[0:38](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=38)** Again, if we have a security concern in the base image, we can address it in all of our images at once, so it's very important to secure that lifecycle.
>
> **[0:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=49)** In the same vein, scan your images.
>
> **[0:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=52)** The images you create, the images you install in your environment, all of them should be scanned.
>
> **[0:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=59)** And constantly scan your cluster.
>
> **[1:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=62)** Again, you only control the images that you create from a lifecycle perspective, but if you scan your cluster regularly as well as the images that are being used, you'll be in a much more secure footprint.
>
> **[1:17](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=77)** And maintain your container lineage throughout that entire lifecycle.
>
> **[1:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=82)** Don't let rogue images in because you don't know the damage that it will cause, and it only takes one bad container, one bad image to bring your system down.
>
> **[1:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=95)** Now, let's talk a little bit about the security of your [[Kubernetes]] cluster or clusters themselves.
>
> **[1:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=102)** We have to start with the access control.
>
> **[1:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=104)** But remember, developers have to be able to do their job.
>
> **[1:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=109)** So access control is not a anybody who is in operations only, but no one else.
>
> **[1:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=115)** Developers need access to the cluster.
>
> **[1:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=119)** And you can do it in a way that allows them to gain more access when needed.
>
> **[2:04](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=124)** And a lot of times those needs are around operations.
>
> **[2:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=128)** There are tools and applications that you can write with those tools so that a developer can only elevate in certain situations, and then they can be granted full access to the cluster as needed.
>
> **[2:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=142)** In addition to access, you have to think about what you're exposing.
>
> **[2:27](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=147)** Don't expose services and applications that should be private.
>
> **[2:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=152)** Don't expose them out of the ingress.
>
> **[2:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=154)** Don't allow credentials to get access to that.
>
> **[2:37](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=157)** Even if you're running an admin app and it's exposed on the public internet, put a challenge to make sure that they have a company email, something around those lines that will help you protect your system.
>
> **[2:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=170)** And only expose your public offerings through known ingress.
>
> **[2:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=174)** What do I mean by that?
>
> **[2:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=175)** Don't allow rogue ingresses yes, but also control the entire flow.
>
> **[3:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=181)** If you're running a load balancer and your cloud provider, the only way to get to your ingress should be through that load balancer.
>
> **[3:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=189)** By funneling all of the traffic, it gives you access to know what's going on at all times.
>
> **[3:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=196)** And if you are able to automate all of your data and system updates, when you automate them, you not only have a track record of what you've done, but you no longer need to have elevated access for routine operations.
>
> **[3:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=212)** The only time you need to elevate is when you are in a situation that requires it.
>
> **[3:37](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=217)** So by leveraging automation and good change management around it, you don't need to involve humans unless it's absolutely necessary.
>
> **[3:47](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=227)** And I'm going to finalize on this simple quote: "Don't expect someone else to do it."
>
> **[3:53](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=233)** If it needs to be done, do it.
>
> **[3:55](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=235)** If it needs to be secured, find a way to do it or make sure someone who can knows about it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (1)
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** install (1)
> **Speakers:** - [presenter] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=0)** - [Frank] So as our course comes to a close, I want to talk about a few next steps to help you get the most out of this course that you just spent so much time going through.
>
> **[0:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=10)** Before we get there, let's do a quick recap of what we've touched on.
>
> **[0:14](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=14)** We started with the scripted kind environment, and this is something that I encourage you to take a look at outside of this course.
>
> **[0:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=22)** We then built a very simple web service using [[Spring Boot]] with the intention of targeting that for a [[Kubernetes]] deployment.
>
> **[0:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=31)** We then built out that deployment by hand.
>
> **[0:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=35)** We looked at all the different parts of it and how they operated together and how they did their function to serve that web service to the outside world.
>
> **[0:45](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=45)** We then talked about monitoring and how it can be leveraged, gave you an opportunity to build on that and enhance your operational knowledge.
>
> **[0:54](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=54)** And we spent some time discussing automation, security and testing, three very big aspects in cloud native computing.
>
> **[1:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=63)** With that said, I'd like to share with you some ideas for additional learning outside of this course.
>
> **[1:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=69)** We didn't talk about [[Helm]] a lot, and that is because this is not a course on Helm, but Helm is a great tool and will really enhance your knowledge, not only of Kubernetes, but how to deal with packaging applications.
>
> **[1:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=85)** And of course, learn more about Kubernetes.
>
> **[1:28](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=88)** I've been using it almost the entire time it has been in existence, and I still learn new things all the time.
>
> **[1:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=96)** Kubernetes is a very large ecosystem, and it's a very powerful one that I built multiple platforms on, but it takes time to learn it, and the best way to do that is repetition.
>
> **[1:48](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=108)** Build multiple services into this kind cluster that talk to each other.
>
> **[1:53](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=113)** That level of sophistication will help you understand how [[Routing]] inside the cluster works.
>
> **[2:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=120)** So go ahead and give it a try.
>
> **[2:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=121)** Deploy them to different namespace, deploy them to the same namespace.
>
> **[2:05](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=125)** See what the differences are in their configuration.
>
> **[2:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=129)** I encourage you to build your own cluster and play with it.
>
> **[2:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=133)** I run a Raspberry Pi cluster with Kubernetes.
>
> **[2:16](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=136)** I also have a small server rack that I can run Kubernetes on.
>
> **[2:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=140)** It's a great way to learn it.
>
> **[2:22](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=142)** Not everybody has access to all of those, but you can find ways to build a cluster and play with it, including leveraging Kubernetes on your own machine.
>
> **[2:32](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=152)** You have a scripted environment, we've given it to you in this class.
>
> **[2:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=156)** Play with it and use it to your advantage.
>
> **[2:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=159)** You may need to add a little bit of RAM, but a little bit of RAM is cheaper than three blade servers, I can promise you that.
>
> **[2:46](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=166)** I want to thank you, finally, for spending the time with me on this course.
>
> **[2:51](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=171)** I understand that your time is valuable and it actually means a lot to me that you've chosen to spend your time with me learning about Spring Boot, and Kubernetes and how they work together.
>
> **[3:03](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=183)** My commitment to you does not end when this course is over.
>
> **[3:07](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=187)** I encourage you to reach out on the various platforms like [[GitHub]], X, Stack Overflow, where my handle is all the same, fpmoles, and ask questions, learn about what I'm doing, tell me about what you're doing, and ultimately leverage the Q&A section here on [[LinkedIn]] Learning.
>
> **[3:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=205)** With that said, I hope that this course has enhanced your knowledge on Kubernetes and Spring Boot, and I hope that you have a hunger for learning more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (9), [[Spring Boot]] (3), [[Helm]] (3), [[Routing]] (1), [[GitHub]] (1)
> **Env Vars:** ram (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Documentation:** stack overflow (1)
> **Tools:** github (1)
> **Speakers:** - [frank] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications-5913242/codespaces)

## Skills Covered

- Cloud-Native Applications
- Spring Boot
- Kubernetes

## Path Context

### In [[Advance Your Spring Development Skills]]
**1 of 6** | [[Performance Tuning in Spring Apps]] →

## Appears In

- [[Advance Your Spring Development Skills]]

## Related Courses

_Courses sharing skills:_

- [[Kubernetes- Cloud Native Ecosystem]] — Kubernetes, Cloud-Native Applications
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Spring Boot
- [[Advanced Spring- Spring Boot Actuator]] — Spring Boot
- [[Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing]] — Spring Boot
- [[Advanced Spring- Effective Integration Testing with Spring Boot]] — Spring Boot

---

[↑ Back to top](#)