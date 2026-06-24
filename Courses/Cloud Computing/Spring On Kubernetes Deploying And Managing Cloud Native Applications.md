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
  - '[Advance Your Spring Development Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Spring%20Development%20Skills.md)'
next_courses:
  - '[Performance Tuning in Spring Apps](Performance%20Tuning%20in%20Spring%20Apps.md)'
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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-to-kubernetes?u=76281980&t=0)** - [Frank] As a [Java](../../Skills/Software%20Development/Java.md) developer, [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) just makes sense, but then we have to worry about running our application. This course will build on your knowledge of Spring Boot, and take it to the next level using [Kubernetes](../../Skills/DevOps/Kubernetes.md) and associated tooling to run your app. Hi, I'm Frank Moley. Join me in this course, Spring on Kubernetes, Deploying and Managing [Cloud-Native Applications](../../Skills/Software%20Development/Cloud-Native%20Applications.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (2), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1), [Cloud-Native Applications](../../Skills/Software%20Development/Cloud-Native%20Applications.md) (1)
> **Speakers:** - [frank] (1)

#### [What you need to know](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=0)** - [Instructor] In order to be successful in this course, there is some prerequisite knowledge you need to have. This course relies on [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) as a development framework. It is expected that you understand and have working knowledge of the [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md) as a whole. Our focus is more around the ecosystem of running apps built with Spring, so our time spent in the Spring Framework is minimal. We will also be leveraging Spring Boot for our application, so understanding it is critical, as well. If you need a refresher on either Spring Framework or Spring Boot, check out my course [Learning Spring 6 With Spring Boot](../Software%20Development/Learning%20Spring%206%20With%20Spring%20Boot.md) 3 here in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning library. We'll be using [Java](../../Skills/Software%20Development/Java.md) to build our Spring-based application, so understanding it is critical, as well. We will be building on [Kubernetes](../../Skills/DevOps/Kubernetes.md), a container orchestration engine, so containers are at the heart of this course. You should really understand what containers are and why we use them. We will go through the process of building and running containers, but some knowledge of the basics will help you through this section. While you don't need to be an expert, some experience with Kubernetes will be helpful for you to have, as well. Building and running applications is only part of the job. The process and operations work make up a big part of the work of being a professional software developer.
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/what-you-need-to-know?u=76281980&t=94)** [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) is an important aspect of modern development. You should at least be exposed to the concept and benefits of CI/CD. In the same vein, automation is so critical for modern development teams. Part of what we were looking at in this course is automation, and, as such, the value of these steps should be looked at from the lens of its benefits. Operations is all too often not considered early enough in the development lifecycle. And unfortunately, many developers are never really immersed in operations. But to really grasp the value of it is eye-opening. To capture part of that value, you should be exposed at least at a high level to operations and the benefits, as well as processes around them for [Software Development](../../Topics/Software%20Development.md) shops.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (4), [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md) (3), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** make (1), cd (1)
> **Prerequisites:** prerequisite (1), you need to have (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the Codespaces environment](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=0)** - [Instructor] Now we will prepare our [GitHub](../../Skills/Software%20Development/GitHub.md) Code Spaces development environment. If you haven't already done so, go ahead and start up the Code Spaces development environment, and you should be presented with an IDE that looks like this. Now, I'm going to walk through what we're going to do, but it's going to take a while, so let's go ahead and kick off the actual execution of our environment by typing in the terminal, scripts/install.sh, and go ahead and let it run. Now while it's doing the running, we'll go ahead and explain what's going on. So what I have done in the install script is called several other scripts, and you're going to see them processing through the terminal as we talk about them. But let's go take a look in the config directory at the four distinct things that we are setting up as part of this. Now we start with kind. Kind is a test environment for [Kubernetes](../../Skills/DevOps/Kubernetes.md) that is a really great development tool because it allows us to do development with a single node cluster in a Docker container on our machine, and that's what kind is, is Kubernetes in Docker. I have provided some basic configuration in the config.yaml and a deploy script that does nothing but call kind create cluster. The next part of that is that it's going to set up a tool called Nginx, and it's specifically the ingress Nginx controller that is used to expose ports to our Docker container running in the dev container itself
>
> **[1:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=96)** from GitHub Code Spaces. So this is a way of proxying from within Kubernetes to the environment that Kubernetes itself is running. And specifically, we are going to be exposing ports. That way we can do our work throughout this course. Now, the next thing that is going to get installed is a monitoring framework, and we're not going to talk a lot about this for a while, but we are setting up a monitoring system in our Kubernetes infrastructure so that we can see what's going on inside of it. Not only Kubernetes, but everything that we deploy to Kubernetes. This monitoring infrastructure is an open source infrastructure based on Prometheus, and with Prometheus, you get Alert Manager as well as Grafana, and we'll show you those tools when we get to there. But these are being installed in the environment. Now, the last thing that we're actually setting up is a [Postgres](../../Skills/Software%20Development/PostgreSQL.md) database. We're going to set this Postgres database up in the cluster and then create a database from the operator. We are then going to actually load data into it through this scripted behavior. So we will have a database running, exposed to the VM that we're working in, and that VM will actually have the data that we're going to load into it. So we're going to have access to it from the command line or from our application running outside of Kubernetes. Now, in the real world, you're never going to expose a database publicly. That's just not something you do. But in a development environment
>
> **[3:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=189)** where you're running an IDE, it actually makes it easier to expose it through an ingress so you don't have to do what's called port forwarding. We'll talk more about that when we get there. But you can see the data that we are loading in the data directory. I've also provided, in this scripts directory, a destroy script. There will be times, because we are running Docker in Docker and in that Docker, Kubernetes, that we may get things a little bit out of whack. It just happens when you're dealing with such virtualization in the cloud. If that happens, you can always do two things. You can start by trying to reimport your cube config by going to the terminal and typing kind. And if you do the help command, you will see the help that we can get. And one of those things is the export command that will take the cube config and load it into the cube config that is in the VM that we're running in. Again, this sort of level of inception almost that we get by doing work this way. In the real world I actually run a setup very similar to this on my local desktop, and we're going to talk about that here in a little bit. This actually improves my ability to write software that ultimately will get deployed to Kubernetes. Now, if you have any other issues throughout this, feel free to delete, using the destroy script, and then just simply running the install script again, and it will do the same behavior to get us to the same point. Now, if it's far enough along,
>
> **[4:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/setting-up-the-codespaces-environment?u=76281980&t=281)** you may have to run home commands again, but you will have examples of doing that and you'll know how to recreate it at that time. I encourage you now to take some time and look through these scripts and look through the config. If you don't understand what it's doing, now's the time to go look at the Kubernetes documentation or the Nginx Ingress documentation or the Grafana Prometheus documentation and actually try to understand what we're building in this kind cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (11), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=0)** - [Instructor] Now that you have seen the scripted environment we have for this course, I want to spend a few moments and talk about this pattern for the developer workflows that I have embraced as a cloud native developer. Let's start with the benefits of this setup on a local machine. Again, I've embraced this pattern for many years as a developer and designer of platforms for cloud native systems. And I developed this with some very skilled engineers that I've worked with for quite a long time. The first big benefit is that it supports faster local development. By having all the tools, apps, and services that your app needs locally, you can speed up all development practices. Of course, your development machine needs to be pretty powerful if you want to be able to run everything locally. I run on a minimum of 64 gigabyte of RAM for my local setup. If your local machine supports this workload in its entirety, you don't have to be connected. I cannot stress how much I dislike VPNs or being tied to [Wi-Fi](../../Glossary/Standard/Wi-Fi.md). It just isn't a requirement to write code anymore. Of course, if your machine isn't powerful enough to do all of this locally, you may still need something like dev containers. But I've yet to find a situation where I cannot at least run part of my system that I need, even on my travel laptop. The ability to run your system locally lets you step through various services and tools when you debug.
>
> **[1:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/developer-workflows?u=76281980&t=93)** It allows you to have local access to [Databases](../../Skills/Software%20Development/Databases.md) that otherwise may require jump boxes and cloud environments or even VPNs. This pattern just makes your life easier. When you build your systems, you can actually tie it to your CI/CD pipelines. Imagine for a moment creating a branch, pushing it to remote, and immediately getting your own branch built and deployed on your local environment. As you push more code, the branch continues to build and deploy. If you run the CI infrastructure locally, you may not even need to push remotely, and this is a big power proposition as you're writing code, because this allows you to constantly run your integration tests, your automated acceptance tests, and your security tests locally. You even can test your observability and ensure that you are instrumenting your code correctly before you submit that PR, so that this type of work can be part of that PR itself. So while I've set this up for this course, it's an example of what you can do as a modern cloud native developer, even if you're not using Spring [Java](../../Skills/Software%20Development/Java.md). Just using [Kubernetes](../../Skills/DevOps/Kubernetes.md), you get this power to build lots of systems that you can just run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wi-Fi](../../Glossary/Standard/Wi-Fi.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=0)** - [Instructor] Cloud native [Application Development](../../Skills/Software%20Development/Application%20Development.md) patterns, also called 12- or 15-factor applications are a set of patterns that have arisen with [Cloud Computing](../../Topics/Cloud%20Computing.md). Before we get into the considerations that exist for applications targeting [Kubernetes](../../Skills/DevOps/Kubernetes.md), let's give some of the general thoughts around 12-factor and 15-factor applications. Now, I believe all of the factors are important from a system perspective. I want to focus on the details within the scope of this course. If you want a more in-depth conversation on cloud native applications, check out my course here in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library on 12- and 15-factor applications. The concept of a single application running in a single process is critical to cloud native applications, especially in languages like [Java](../../Skills/Software%20Development/Java.md). The application server was the process, and our apps were hidden behind that, often running many apps in that single app server process. This makes operations difficult to say the least and obfuscates what is really important to the development teams. Kubernetes can deviate from this depending on your perspective, however. The use of sidecars and multiple container pods tends to deviate from the operator's perspective though they are indeed single process applications. Understanding this is beneficial to developers, but outside the scope of this course. So I encourage you to pause here and take a look at the concepts of sidecars as well as multi-container pods in Kubernetes.
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=94)** The ideas of prod and non-prod parity, and strong development processes like CICD are critical with cloud native applications. Fortunately, with setups leveraging Kubernetes, we can achieve local similarities even on the developer's machine. Applications in the cloud native world are stateless by design. We almost always have multiple instances of our application running on essentially ephemeral infrastructure. So maintaining state and sessions in the application itself would be counterproductive to say the least. Because of the ephemeral nature of [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md), the reality is nodes die all the time. Having applications that start up rapidly and handle termination gracefully, added to the concurrency mentioned above, will provide us a highly available system. Add into this geographical distribution through availability zones, or even regions, and you have the recipe for a highly available distributed system. One of the biggest lessons of cloud native computing was the importance of having configuration injected into the environment. This allows us to build apps that can be deployed anywhere with local service dependencies without any hard coding. We also can inject secrets to our applications in the same way to further separate the concerns of our applications from the potential security risks
>
> **[3:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=189)** of password leaking. Observability must be a first class thought of every application. In the enterprise monolithic world, developers often didn't think a lot about what it meant to evaluate the state of the application when it was running because it was somebody else's job. Cloud native applications put observability at the forefront. I have, for instance, started worrying about observability in the ideation and design phase of every single system as well as application within those systems. When building Spring applications for Kubernetes, there are some things I believe you need to consider and have plans for. I'm going to share with you some of my opinions so you know them up front before we start coding. The first consideration that I believe takes some initial thought is how you will handle environment variables for Spring properties. You have many options. You can inject them into your docker files and translate them there to JVM arguments. You can leverage the Spring properties directly in your environment configuration. Or you can do what I will show you, which is to leverage standard environment variables and their naming conventions and then port them to Spring properties in your application.properties file. Logging is another area you have to consider because most log shippers we leverage with Kubernetes-based run times work best with [JSON](../../Skills/Web%20Development/JSON.md) formatted logs. This is an easy aspect to solve with Spring, but it's something you have to consider early on
>
> **[4:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/cloud-native-applications?u=76281980&t=284)** in your development processes. In addition, building common taxonomy of tags in your logs is worth the effort regardless of the language or patterns being used. Telemetry is another big area of thought. Again, common taxonomy that is hopefully shared with your logging systems taxonomy is very important. But, the use of technology is also important. I prefer to keep my apps pure open source when possible and leverage technology like OpenTelemetry to instrument my applications, but having well-instrumented applications is the most important part. You can leverage a lot from Spring here with their ops system integration, but don't make this an afterthought. Security applies to so many layers when building applications. It starts with how we develop our applications, moves to how we integrate with our authentication and authorization workloads, and then expands to even how we build our images. We're going to spend a lot of time talking about building images and I will share with you my thoughts there. When building applications for Kubernetes, I subscribe to the 15-factor thought that authentication should be validated at ingress and authorization validated throughout. We aren't going to get into this area much in this course, but I have a course here in the LinkedIn Learning Library on [Spring Security](../../Skills/Web%20Development/Spring%20Security.md) that you can leverage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (7), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=0)** - [Instructor] As with any [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) application, we start with the Spring Boot Initializer. We have a VS Code plugin in [Codespaces](../../Skills/Software%20Development/Codespaces.md), so let's walk through the application creation process. The first thing I want you to do is to go to the Command Palette. And in here you're going to type initializer, and you'll see is you type that it dwindles the list down, and you're going to create a Maven project. Now we're going to select the latest released version of Spring Boot. We're going to pick [Java](../../Skills/Software%20Development/Java.md) as our language. Now here I'm going to put in a group name, and I'm going to use my domain com.frankmoley, and I'm going to put in lil. You do with this what you want, create a group that makes sense for you. Now we're going to call our app wisdom-api. We're going to select jar, and we're going to select Java 21, which is the latest LTS version. And now we're going to go through, and we're going to pick our dependencies. So the first one we're going to choose is Spring Web. Then we're going to pick JPA, which is [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) JPA. We're going to use [Postgres](../../Skills/Software%20Development/PostgreSQL.md). So let's bring in the PostgresSQL driver. We're also going to use Actuator. We're going to bring in Lombok. And the final one we'll bring in is Prometheus. Now that all of these are done, we'll go ahead and hit Enter, and we'll go ahead and build this in the root. So now there's a few things that we need to change within our application setup.
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=94)** The first thing that we're going to do is in source main Java, you'll see that there is a package that we need to rename, and we're going to rename that so that it matches convention. Because if you look it's wisdom_api, and normally we don't put underscores in package names. So we're just going to set this to wisdom. Go ahead and do the refactoring, and you'll see it refactored our class to have that package name. Now the next thing that I'm going to do is optional for you, but I don't normally keep all of these files in place. So I delete a lot of these structure that comes with the Initializer because I just don't use 'em. We've got Maven built-in, we don't need the Maven wrapper, so I'm going to delete that. And then I am going to delete the gitignore, 'cause we've got one at the root, and I'm going to delete the help.md. And then the two Maven commands I will also delete. So at this point in our application directory, we've got the vscode that we're not going to worry about. We've got source, we have target, and we've got pom. Now, target should not be checked in. If you look at the gitignore at the root, we can address that by putting here target, and that will remove that from being checked in. And you'll see how it just went gray. And at this point we actually have our project set up, and we are now ready to go.
>
> **[3:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/creating-the-application?u=76281980&t=186)** In fact, you could go and run this application, and we will do that in the next video because we actually need to build a launch file to go with our application. But with that, everything is set up and ready to run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (3), [Java](../../Skills/Software%20Development/Java.md) (3), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1), [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (1), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=0)** - [Instructor] In order to write our application to consume an external database, we need to set up a few properties in our application before we get going. So let's go ahead and do that. I want you to jump into your ID. The first thing that I want you to do is to look in the script directory at the populatedb. We're going to leverage this here in a moment. So go ahead and copy that data. Open up a terminal window and paste that in. Now if we simply do an echo on all of these values, you'll see that we can get some data out of them and the ones that we really care about are pgpassword and $pguser.
>
> **[0:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=49)** And we're going to use this. Now, honestly, at this point, you can connect to the database by just typing PSQL, because you have those environment variables in, and you could do whatever you wanted to, such as select the data. We're not going to do that right now, because you've got access to all of the data in the DAT file if you wanted to do that and look at it. So now let's navigate to the Wisdom API application. Go to source, main resources and open up the application properties file. Now there's several properties that we need to drop in here, so let's go ahead and do that. The first one that we're going to do is spring.jpa.hibernate.dbl-auto. We're going to set that equal to none. Spring-jpa-open-in-view. We will set that equal to false. We will do a spring.jpa.properties.hibernate.default_schema
>
> **[1:50](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=110)** and we're going to set that equal to wisdom to match our schema for our database. We'll do a spring.data.[jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md).dialect. We'll set that equal to [postgres](../../Skills/Software%20Development/PostgreSQL.md). Now we're going to set up a couple more things on our data source. We're going to set up the hikari.connection-timeout, and we'll set that equal to 20,000. The hikari-maximum-pool-size. We'll set that equal to five. I'm going to put a little bit of space here because we're going to add a few more data. The first thing I want to do is expose some of our management endpoints. So we're going to do management.endpoints.web.exposure.include and we're going to include the health, the info, and the features endpoints. We're also going to set up some logging. So logging level for root. We're going to set equal to info, and logging level for com.frankmoley. Again, match your package, not necessarily mine. We'll set that equal to worn, and just because I don't like to show it in my logs, I'm going to set the main banner mode to off. Now I like to keep things sort of structured in here. So now we're going to do our [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) source URL, and we're going to set this equal to jdbc.[PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md)//.
>
> **[3:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=211)** Now, normally you would type in your host value, your port, and your database name, but we're going to inject that from the environment, so we're going to do a dollar sign, curly brace, DB under host colon, dollar sign, curly brace, DB_PORT,
>
> **[3:52](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=232)** clash, dollar sign, curly brace, DB_NAME. Now note these values. These are very important values because we have to inject them in from the environment and we're also going to have to add 'em to our run configuration here in a moment, but before we get there, we need to set a username. So datasource.username, and once again, we will inject that, so it's going to be DB_USERNAME, and spring.datasource.password. We will set this equal to DB_PASSWORD. Now you could very much inject in the environment spring_datasource_username. That's not usually how we build environment variables. So I like to actually build this differentiation so that I can inject them in as standard environment variables and then translate them to the spring properties where it makes sense. So at this point, we're ready to go build a run configuration. So let's do that. Let's go to the run and create a launch file for [Java](../../Skills/Software%20Development/Java.md), and you will see we have one for the Wisdom API application already, because the plugin built that. So all we need to do now is do our environment and we will do our environment in a very straightforward way. It's going to match everything that we just did. So DB_USERNAME. We will set that equal to our value from the console,
>
> **[5:26](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/preparing-data-access?u=76281980&t=326)** and we will do the same on DB_PASSWORD. Go ahead and copy that string and paste it in, and then we will do DB_PORT, and that's going to equal 5432, and a DB_NAME, and the DB_NAME comes from our commands here. So if we go back to our populatedb, you'll that we have a PG database that is the name of the db, so it's localdb, and then of course, we need the DB_HOST and that will simply be localhost for right now. Now there's one more value that I want to add, and this will help with logging later and it's SPRING_PROFILES_ACTIVE, and we will simply set this equal to dev. Now at this point, we've got everything that we need to run our application, and we can simply select Wisdom API. We can run it and ensure that it runs to completion and actually starts up, and it does. We have no persistents set, but we're good enough to actually have this thing running on port 8080.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (2), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1), [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (1), [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=0)** - [Instructor] Now it's time to write some code and build out our data access. So, open up Wisdom API. Go to Source, Main, [Java](../../Skills/Software%20Development/Java.md), and under the Wisdom package we want to create a new Java package, and it's going to be data.entity. Under the Entity package, we will create a new Java file and this is going to be a class, and we will call this Customer. Now, you can look at what we are going to populate by going to the data.[SQL](../../Skills/Data%20Science/SQL.md), going to the customers table, and you will see that there are several values here. There's actually six. So, we're going to leverage those to build this out. So, the first thing that we needed to do is we need to say that this is an entity from jakarta.persistence, and then we also need to do an @Table construct because the table name is not straightforward for the way that Hibernate expects it because I use plural. So, customers, let's make sure we import that, and now we're going to add a Lombok annotation called @Data. Now we will do an @Id from jakarta.persistence and @GeneratedValue, also from jakarta.persistence, and the strategy that we will leverage is GenerationType of UUID, and then we'll do a private UUID
>
> **[1:38](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=98)** called customerId. Let's go ahead and make sure that we import in that GenerationType. Import UUID, and we are good there. Now we'll do a private string of firstName, a private string of lastName. We're going to put an @Column tag on this one, and we are going to put unique equal to true, and this is a private string of email. Make sure you import column from jakarta.persistence, and then we'll finish out our class, so String phone, and private String of address. Now, let's go back and let's create another new package, and this one is going to be data.repository.
>
> **[2:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-data-access?u=76281980&t=164)** And in data repository, we will do a new Java file, and this time we're going to do an interface, and the interface will be called CustomerRepository. And we are going to extend the JPA repository from org.springframework, and then make sure that we put in here Customer and UUID, and we'll need to import those. And now we're going to put a single method in this in order to support our front end later on, which is just a Customer findByEmail that takes a string of an email. Now, it tried to do a correction here. It assumes that it's not unique, so we're going to fix that. Technically this should be an optional, and we will get rid of the list, and now if we run our application, we can validate that everything is set up correctly, and it is, so we are good to go to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=0)** - [Instructor] Now we're going to build out a web service to consume our data access so we can expose them and test this through our IDE. So I want you to jump into your IDE and the first thing that we're going to do is open up our Wisdom API application, go to src/main/[Java](../../Skills/Software%20Development/Java.md), as we've done before, and we're going to create a new package. And after wisdom, it will simply be web. And within that web, we are going to create a new Java file, and this is going to be a class. We will call it CustomerController, and we will start with an annotation of @RestController, an annotation of @RequestMapping, and the @RequestMapping will be at /customers, so we can simply do customers. And then we're going to add a logging annotation of @Slf4j. Then we need to go in here and actually add interdependency. So private final CustomerRepository and we will simply call it CustomerRepository. Now we need to create a constructor on our class so that we can inject that in through outer wiring. So public CustomerController, it will take an instance of our CustomerRepository. We will call super on this.
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=94)** And I know you don't have to, it's just old habit that never dies. So this.CustomerRepository = CustomerRepository; All right, so now we're going to do an @GetMapping and we will do a public Iterable and the Iterable will be of type Customer, getAllCustomers(). Let's go ahead and make sure that we have imported everything. Now, in the parameter for this, we're going to do an @RequestParam. We're going to set required equal to false and it's going to be a String email. So now we're going to do a check. So if, and we'll use StringUtils from spring hasLength, and we'll check that email. So if the email has a value, we're going to create a new list. So list<Customer> customers = new ArrayList<>();
>
> **[2:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=178)** Go ahead and import that in. So now we will do an Optional<Customer> and we'll simply call it customer = this.CustomerRepository.FindByEmail and we will pass it in the email. And then we will do an if(customer.isPresent())
>
> **[3:29](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/exposing-as-a-webservice?u=76281980&t=209)** We do a customers.add(customer.get()); and regardless we will return customers; Now after this that we know we have a parameter that did not come in, we can simply return this.customerRepository.findAll(); and at this point we can test our application. So we'll go ahead and run it. Now I have provided a tool, so I'm going to shrink this view down a little bit and split the terminal. And what you can do is type in here http :8080/customers and you'll see it actually returns our customers. So now what I'm going to do is I'm going to copy the email and I'm going to do it with the quotes. And now I'm going to type in http :8080/customers and set email and we'll go ahead and bring those quotes in. And you'll see now we've done the flow where we've actually passed in the email parameter. We now have a working web service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/challenge-cloud-native-spring?u=76281980&t=0)** - [Instructor] Now it's time for our first challenge exercise in this course. Here's the instructions that I'd like you to follow. The first thing that I want you to do is to build out entities for vendors, services, and [products](../../Skills/Software%20Development/Microsoft%20Products.md). Remember, in the DAT folder, you have the schema that we applied to the database. So use that to build out those entities. You're then going to build out repositories. You can, if you choose to, provide a way to get the values for the unique fields so that when you finish out your controllers on your getAll methods, you can provide request params for them. As I said, I want you to go ahead and finish out the customer controller and build controllers for the other three entities supporting getAll, Post, getOne by ID, Update, and Delete. Finally, don't forget exception handling logic and response codes as they make sense. If you do a getOne by ID and it doesn't exist, you should return a not found. Think about your deletes. I usually return a reset content. And by default, when you do a Create, you should return it to a one. With that said, have fun with this exercise, and I'll be back with my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
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
> **[0:07](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=7)** - [Instructor] And now it's time for my solution to this exercise. I'm going to start by showing you how I handled the exceptions. So, in Source, Main, [Java](../../Skills/Software%20Development/Java.md) in the util, I created two exceptions. One is for the bad request. You'll notice here on line 6 that I put in a response status of bad request. I also extended runtime exception. I did the same on the NotFound, of course changing the response status on line 6 to NotFound. So, now in the data I created an entity for product, for service, and for vendor, and I created a product repository with a findByName, a service repository with a findByName, and a vendor repository with a findByEmail, all of those matching the unique values. Then I created, in the Customer Controller, I went ahead and finished out this by doing a post-mapping for the created flow, starting on line 54. Line 60, I did the getById. Notice if the optional customer is not present, I return a NotFound. I then did a PutMapping on line 69. To do the update, I checked that the path variable customer ID matched the customer ID of the request body. If they did not match, I threw a BadRequestException. I then did the save,
>
> **[1:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=101)** and then I did the DeleteMapping where I returned a RESET_CONTENT once the delete was done, and I simply did a deleteById. I then implemented a product controller, a service controller, and a vendor controller that look very much identical. And real quick, we can run these, and I will expand this out to make it easier to read. And you can see I can do an http on [products](../../Skills/Software%20Development/Microsoft%20Products.md), do the same on services,
>
> **[2:25](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=145)** and then do the same on vendors, and then we can play with them from there. So, if I go back to services, just because it's the smallest object, you can see I can do an http POST on 8080/services and I can send in a name of foo and a price of 112 and that created that service. I can then grab that ID, I can then do an http 8080/services/ the id. I get that ID out. I can do an http PUT on 8080/services/ that id. I can then go ahead and do my service ID equals that value. We'll go ahead and change it initially to a two. We'll set the price equal to 1.13 and the name equal to foo just to keep it the same. You'll see we get a bad request, which is what we would expect. I'll change it back to one. We now do the update and have changed the price, and then I can also then do an http DELETE operation on 8080/services/ that value,
>
> **[4:01](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/solution-cloud-native-spring?u=76281980&t=241)** and it has deleted. And then if I go back up and do the get again, you'll see I get a Not Found. We did this for all of them, and you can go ahead and test that from the code that has been uploaded into 01_07. And that's how we did this operation in order to complete our web service that we are going to deliver.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=0)** - [Instructor] The concept of logging should be relatively normal for most developers. It's just how we do things. There are some special considerations you need to take however with [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) to ensure that your logs are structured properly when you're targeting a [Kubernetes](../../Skills/DevOps/Kubernetes.md)-type deployment. The first thing that I want you to do is open up wisdom-api, and let's go to our pom file. I'm going to scroll down here to the dependency section, and we are going to add in a new dependency. This dependency is going to come from the group net.logstash.logback, and it's going to have an artifactId
>
> **[0:44](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=44)** of logstash-logback-encoder. And we'll go ahead and specify the version of 7.3, and we're going to go ahead and allow Maven to do the downloads. And now what I want you to do is to open up source, main, resources, and we're going to create a new file in here. And this file will be called logback-spring.xml. Now, we'll go ahead and start this with a configuration tag. And then within there we're going to do a springProfile name="dev". Now, if you remember, we set up a dev profile in our run configuration, and we did this for a reason to make this stage easier because what we're going to do is we're going to go ahead and define within here an include, and we're going to pass in a resource. And that resource is org/springframework/boot/logging/logback,
>
> **[1:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=119)** and we're going to use the base XML. And that's all we need to do for dev. Basically we're going to say go ahead and use logback, but do it in the default strategy, which is what we traditionally see out of a Spring Boot application. But now we're going to add in another springProfile, and this time we're going to use the name of default. Now, this happens when there is no profile mentioned, you get the default by default. Go ahead and finish that XML out and then we can go ahead and finish configuring this. So, in here we're going to add an appender, and the name of that appender is going to be jsonConsoleAppender. And then we're going to specify a class, and the class that we will do is ch.qos.logback.core.ConsoleAppender.
>
> **[2:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=178)** And then we need to put in here an encoder, and the encoder will have a class that equals net.logstash.logback.encoder.LogstashEncoder.
>
> **[3:18](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=198)** Then after our appender section we will set our root level equal to INFO. And in here we will do an appender-ref, in this case we're going to do our jsonConsoleAppender.
>
> **[3:41](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/logging-with-spring?u=76281980&t=221)** And now we need to finish that last statement that I missed, and at this point we are now actually ready to test our application. So, real quick, let's jump over to the run, and let's run our application. And as expected, there is no change to our logging that you can see in the terminal. But let's go ahead and modify our existing configuration, and let's get rid of this SPRING_PROFILES_ACTIVE. And we'll get rid of this trailing comma. We'll stop our application, and we will run it again. You'll see now that we're getting our log output in [JSON](../../Skills/Web%20Development/JSON.md) format. Now, the reason this is important is when we are doing log streaming in a Kubernetes environment everything gets dumped to standard out from every application. We need to actually ship those logs to a centralized log management system, and oftentimes those only work well when you have JSON-formatted logs. So, that's essentially what we've done is we put in a hook that when we don't have a profile spit out JSON logs. When we do have a profile, such as in our IDE, go ahead and do standard log output. It's just a traditional pattern that we use. Now that Spring Profiles are no longer the way that we do multi-environment deployments, we're still using them, but we're using them sort of behind the scenes to do things like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (3), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (2), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=0)** - [Instructor] Metrics take a little more work in Spring, even with the use of the Micrometer facade. While traditionally, an aspecting approach would've been my first option, with the advent of native images, we are limited to no longer favoring aspecting. So let me show you a way to implement Metrics in a [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) application. The first thing I want you to do is to open up the app and go to src, main, resources, and go to the application.properties file. Now on line 13, we're going to remove features, and we are going to add metrics, and we are going to add prometheus. Now, we won't be using Prometheus right now, we're going to use that later on. Go ahead and open up src, main, [Java](../../Skills/Software%20Development/Java.md), and the root application class. And we're going to add a new bean. And the bean is going to be of type MeterRegistryCustomizer, which is a template that takes a MeterRegistry from Micrometer. And we will simply call this metricsCommonTags. Now we're going to pass into that an @Value. Make sure you choose the [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md) version, and we're going to grab that from the application, a properties file. So we are going to do a dollar sign, curly brace, and the name of this property is spring.application.name. And we will simply pass that to a string called appName. Now within the method, we will simply return a registry,
>
> **[1:39](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=99)** registry.config, .commonTags. And this is how you would commonly tag all of your metrics. We're simply going to add a tag of app, and we will send in the app name, and then we're going to be able to visibly see them throughout the actual application when it runs. So now let's jump into our web package, and we will go to our CustomerController. We're going to need to put in a few private values here. So the first one that I want to put in is going to be a private final Map of type String and Timer. And we will simply call this timerMap.
>
> **[2:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=155)** Now that we got those things imported, let's do a couple more. We're going to do a private static final String, GET_ALL_CUSTOMERS, and as you might imagine, that's going to be equal to getAllCustomers. And we're going to do the same here for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the methods in our class. So now you see we have an error here on our constructor, but before we can do anything, we need to inject into it our registry. So we're going to inject in a MeterRegistry and we will simply call this registry, and that's going to get auto wired from Spring. And now we're ready to create our map. So we will do a timerMap = new HashMap. And then we will do a timerMap.put, GET_ALL_CUSTOMERS, and registry.timer. And we're going to repeat this for all of our other values. So let me just go ahead and create these, and we'll do a little bit of quick copy paste. All right, so now let's go ahead and actually use this. So we're going to go to our getAllCustomers and we're going to do a Timer.Sample. And we'll call this timer and we will do Timer.start. So now that we've got a timer started, we've got two places
>
> **[4:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=253)** that we actually need to stop this. So let's do a timerMap.get on GET_ALL_CUSTOMERS, and we will do a record action. We'll do a lambda here for timer.stop, and timerMap.get, GET_ALL_CUSTOMERS. Now we will copy that value and we need to add it here. The problem is, as you will see, we have a return that actually does the call. So we need to break this up a little bit. So we will do an Iterable, customer, called customers. And set that equal to this.customerRepository.findAll, and then after that, we can simply return our customers. Now we actually have all of the things that we need to run our metrics. So let's go ahead and run our application. And I'm going to expand my terminal window here and split it. All right, so the first thing that I'm going to do is I'm going to do an http :8080/customers. We're going to go ahead and hit that three or four times. And now what I want to do is I'm going to do an http :8080/actuator/metrics/getAllCustomers.
>
> **[5:59](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/metrics-with-spring?u=76281980&t=359)** And you'll see we now get metrics out of it. Everything is tagged with the wisdom app. We can see all of the calls that we made to it, the total time that they took, and the max time that it took. Now these are exported in more than one way. They are exported through Prometheus as well. But this gives us a really good visualization of the metrics being recorded.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=0)** - [Instructor] [Kubernetes](../../Skills/DevOps/Kubernetes.md) is an orchestration engine, and as such, we need to discuss a little bit about containerized workloads as that's what Kubernetes orchestrates. Let's start with a brief history of containerization because this may be shocking to some of you. The idea of segregation in computing in a single server is older than me and probably most of you. Sandboxing processes and using shared resources makes sense financially and is a responsible option when you look at the power consumption of computers. In 1979, chroot was introduced in Unix 7, making the first major jump into the world of container and process isolation, even though containerization as a concept in sandboxing had been around since the '60s. Several advancements continued through the years, especially in namespaces, and then in 2008, we had the introduction of [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) Containers or LXC. This was really the first complete thought in Linux containers, leveraging both cgroups and namespaces running on a single kernel without patches. The years passed with several other advancements building on LXC and then deviating from it. Looking at you, Warden. And then in 2013, the entire world changed with Docker. Much like Warden, Docker leveraged LXC and then replaced it,
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=94)** this time, with libcontainer. But what really made the container world explode with Docker was the ecosystem that came with it. As containers began replacing traditional virtualization, thanks in part to tools like Kubernetes, many of us were all in on this new world. containerd was donated to the CNCF, and all was well. And then the landscape shifted again with Docker Enterprise being acquired. Despite the changes and the turmoil, containerization continued to grow, and today, it has become the defacto way of building distributed platforms. So let's talk about what containers really are. At their highest level, a container is a packaged and isolated runtime for running all of your application workloads. One of the biggest benefits, especially from a cloud native viewpoint, is that these containers bring all of their dependencies with them. This means any tool you need, you package with your container instead of relying on it being provided to you, which inherently has caused more software bugs than many of us, including myself, care to admit. These packaged, isolated, and independent containers yield truly portable and self-contained applications that can run anywhere that you can run the container itself,
>
> **[3:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/containerized-workloads?u=76281980&t=189)** which includes almost every modern operating system, including the Cloud and Enterprise abstractions. One thing that is important to know is that the kernel itself is shared with the host and all other containers running on that host. There are not complete operating systems within the kernel. Even though we think of them from the distro perspective, it is not the complete OS. While the kernel is shared, the application processes are all isolated, building a sandboxed environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2)
> **CLI Commands:** docker (4)
> **Env Vars:** lxc (3), cncf (1)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Spring Docker plugin](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=0)** - [Instructor] [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) provides an easy way to build a Docker image. While it is not my preferred way of building images, it is a mechanism that you can use if you want, so I'm going to go ahead and show it to you. The easiest mechanism is to just leverage Maven to do the build. Since we haven't really addressed the testing scenarios you need to deal with, and we know running this app requires environment variables, let's just delete the test since it's really outside the scope of this course. So, go to Source, Test, [Java](../../Skills/Software%20Development/Java.md), and you'll see that test that comes for free with Spring Boot, and let's just delete that file. Now, as I've just deleted that, it obviously would've been better for us to spend time and write tests that actually worked. We'll talk about some of that in a later video, some considerations around that, but for now, just accept that we're going to do the wrong thing in order to get through this. So, let's go ahead and pop up a terminal window, and let's check where we're at in the file system, so let's navigate into the actual app, and from here, you're going to type maven spring-boot:build-image, and we're going to let that run. Now, if you followed along as this ran, you will notice that this uses a technology called Buildpack to build the image. Now, you have some control on its output, but not a lot. For instance, right above this BUILD SUCCESS message that is green,
>
> **[1:31](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=91)** you will see that it has a successfully built image. It assumes that you're going to publish this to [Docker.io](https://Docker.io), and you're going to have a name of wisdom-API and a tag of 0.01-snapshot, which is from the PALM file. That's not how I would do this. Nonetheless, I will give you some time here to look at the documentation at the link provided on how you can customize the output of this if you choose to go this route to build a Docker image from your Spring Boot application.
>
> **[2:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-docker-plugin?u=76281980&t=131)** So, now that you've seen all the customization, in the next video, I'm going to show you how I would actually build this Docker image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (3), [Java](../../Skills/Software%20Development/Java.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=0)** - [Instructor] I prefer to build my own custom images. It provides me a level of security with knowing exactly what is in my build pipeline. I advocate for companies to maintain their own base images, and only inherit from those base images so they can control the entire lifecycle. Let me show you how I would build a Docker image for a [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) application. Okay, I want you to open up the wisdom-api, and we are going to create a new file and we will simply call this Dockerfile. All right, we're going to start with a FROM command, and we're going to use the Maven 3.9.8, which is the latest right now, from eclipse-temurin-21, and the Alpine distro, AS build. So now we're going to do a RUN mkdir, and we're going to create our work directory. And then we will set our WORKDIR to /workdir. Now we're going to copy the pom.xml to /workdir, and we are also going to copy src to /workdir/src.
>
> **[1:20](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=80)** And at this point, we can RUN mvn clean package. And now we're going to actually build our final image. So we'll go FROM eclipse-temurin:21.0.4, which is the version today, _7-jre-alpine. Notice we're going to use a JRE at this point, because we don't need the JDK in our final image. We're going to expose port 8080, and we will run mkdir once again, this time to a deploy directory, and we will do a COPY command from our builder. So --from=build /workdir/target/*.jar,
>
> **[2:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=130)** 'cause there will only be one JAR file. And we're going to deploy that to app.jar. Now I do it this way so that as the version of my app increases, I don't need to worry about that in my actual Docker file. Now at this point we can simply do a command, and we put that in brackets, and it's going to be [Java](../../Skills/Software%20Development/Java.md), and then -jar, and then /deploy/app.jar. And that's all there is. So let's go ahead and pop up the terminal window. And what we're going to do is we're going to do a docker command, docker build -t wisdom-api:0.0.1, and dot.
>
> **[3:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=180)** Now, while this is building, I'm going to talk a little bit about how I actually do this in the real world. In the real world, I start with the base image that is raw Alpine. Everything else in my organization, regardless of language extends from that Alpine image. We then roll a JDK from that. Now we actually support multiple implementations of the Oracle JDK, because we have a need to, so we have an Eclipse one, we have an Oracle one, et cetera. Then from that, we run jlink and build our own JRE, again, based on the Alpine base image. Now at this point, I have two images that every other build pipeline can use. I've got one with my JDK and all the tools that we need around that, and one with my JRE and all the tools that we need around that. I do the same thing for my Node apps, for my Go apps, it doesn't really matter. They're all from the same lineage. Now, why do I do that? Let's say tomorrow there's a security bug in my version of Alpine. I now can change that in one spot in my image pipeline and it will address all of the downstream images, because we have built-in processing to do that. So it will go through and it will tag everything with the appropriate versions and roll it out. This way, when a security issue happens, I have it handled. It's a great way to look at things as you move forward. When you are building out image pipelines, consider that "Oh, my goodness" scenario
>
> **[4:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=273)** where there's a massive security bug that actually will impact you. So now that this is done building and we have an image, there's a couple more things that we need to do in order to test this image. Remember, we have to get environment files to it. So let's go ahead and make a file, and I'm just going to use the IDE to do this. We'll create a new file called env.list. Now this file will never go into [Version Control](../../Skills/Web%20Development/Version%20Control.md) and there's a reason for that. We don't normally put secrets in version control. That being said, we have other instances in this of our database secrets, but that's okay. So let's go to our launch.[JSON](../../Skills/Web%20Development/JSON.md), and we're actually going to grab all of these fields, and we're going to put 'em into our env.list and then restructure them. And to do that, we simply replace all of this with an equal sign, and then we will get rid of all of these values,
>
> **[5:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-custom-docker-image?u=76281980&t=342)** and get rid of everything at the end. Now, we do actually need to make one more change here. We're going to run an ifconfig in our terminal, and we're going to go look for the Docker network. And the reason is, because we're running kind in Docker, and Docker to Docker doesn't work well with local hosts. So we're going to copy the inet address from the docker0 container, and replace localhost with that. So now that it's done, we can actually run our image. So if I do a docker run, we will pass it the env-file that we just created. We will do a port mapping of 8080 to 8080. And it is the wisdom-api:0.0.1, and our application is actually started up and we can test it. So I'm going to pop a side window here, and I'll do an http:8080/services, and you'll see I'm getting data out of that application. We're not running Spring Boot at this point. It's coming from our Docker container that is connecting to the database in our kind cluster over the ingress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (2), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=0)** - [Instructor] Now that you have an image, what do you do with it? The answer is very similar to what we do with jar files, store them in a repository. Whereas images, we use a container registry that stores images in repositories. Container registries offer many other features besides storage, but that is outside the scope of this course. For now, let's just get the image we created loaded into kind so that we can synthesize using an image registry. So what I want you to do is open up a terminal window, and we are very simply going to start by typing a command of kind load docker-image wisdom-api:0.0.1 --name local.
>
> **[0:53](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/uploading-to-container-registry?u=76281980&t=53)** This is going to take our docker image and put it on the node that is running kind. So it's sort of synthesizing the image pull exercise that comes from a container registry. Now by bypassing this, we're kind of taking it out of the realm, but in the real world, it is very much in the realm regardless of what container registry you choose. So I'm going to encourage you to pause here and take a look at the local registry concept that you could use if you wanted to synthesize that in your work environment. Otherwise, I'm going to encourage you to go read a little bit more about container registries and their importance or do both.

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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=0)** - [Presenter] With the introduction of GraalVM, we are starting to see a shift to the creation of native images with [Java](../../Skills/Software%20Development/Java.md). And while building such an image here doesn't have a lot of value, discussing it does. If you want to know more about GraalVM, I have a course on it here on the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning library. The first question is always why? And the first answer is that they're smaller in size. Some may tell you that size of the executable doesn't matter. I disagree. Those storage is relatively cheap. It isn't free. And if I can produce the same results with no extra effort and save a few pennies, I will favor doing it. But smaller isn't the biggest reason. Native images are faster than VM-based operations. The performance gains are seen on both a startup time and in execution. And this is a big value to companies, especially when milliseconds count, and to many industries, they do count. Then comes one of the biggest benefits: efficiencies. Native Java images are more efficient in their use of both CPU and memory, yielding a higher pod density for a [Kubernetes](../../Skills/DevOps/Kubernetes.md) node. If I can run an application with a smaller footprint, I can do more with the machine by packing more processes onto it, saving me money. But native images aren't for every situation.
>
> **[1:38](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=98)** I already told you about aspecting being out of the question, but there is more code that isn't compatible. In fact, I have yet to find a system of any relative age that is ready for GraalVM without some significant work. Legacy shops love tools like JMX and JVM TI because they have invested time, energy, and education on them, and moving to GraalVM throws that away. Java agents, Flight Recorder, Mission Control, are also off the books with native images. Native images use serial garbage collection, so large heap sizes can cause major pauses during GC cycles. If you traditionally leverage larger heap sizes, beware of GraalVM. Any tooling or framework that leverages reflection will have to be adjusted to work with GraalVM. Most of the major players have done this work already. However, pay attention because this can be a source of pain. While I hate to admit the value of a thread dump at 2:00 AM when the pager is going off, there is real value. With GraalVM, you have to learn a new way of getting into the OSS thread context. And if you aren't willing to pay, you can't get heap dump capabilities. But it isn't what we get with the JVM, even if you do pay. So [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) itself does offer support for native images.
>
> **[3:13](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/spring-native-images?u=76281980&t=193)** Native image support is built in via a starter, and it is driven by the Spring Boot plugin. Ultimately, the output of Maven and [Gradle](../../Glossary/Tool/Gradle.md) processes is an image, an OCI image, or a Docker image, essentially, that you can use to run your application much like we did with the containers that we built here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Gradle](../../Glossary/Tool/Gradle.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/deploying-to-kubernetes?u=76281980&t=0)** - [Instructor] Before we jump into the steps of deploying our application to [Kubernetes](../../Skills/DevOps/Kubernetes.md), I want to spend a bit of time and show you what we will be building out from a conceptual level. We will start with the Kubernetes cluster, and in this case, it's kind, and of course we have our system running outside of that that we can have access to. Now today we already have a database running in our kind cluster. We are going to go through the process of building out a namespace. Within that namespace, we're going to load some configuration and some secrets, and then we are going to do our deployment. Now in our case, we're only going to put one pod into the namespace, but usually we leverage multiple pods so that we get high availability. Then we're going to deploy a service, and the service acts as a front of our pods and provides us a load balancer on top of them to distribute the traffic to each of those pods that comes into the service. Now this allows for things like rolling updates and allows for an individual pod to drop off while the service still operates, assuming that there's at least one other pod able to handle the respective traffic. Then we're going to build an ingress port, and this ingress will allow us from our dev container to communicate to the service without going through a port forward. Then we're going to attach monitoring to our pods to see what's going on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2)
> **Speakers:** - [instructor] (1)

#### [Building the initial scaffolding](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=0)** - [Instructor] Okay, let's get ready to start deploying our application to [Kubernetes](../../Skills/DevOps/Kubernetes.md) by building out the scaffolding for this deployment. The first thing that I want to do is open up wisdom-api and I'm going to create a new folder in here, and we will call this deployment. And with our deployment, we're going to create a new file, and the first file that we're going to call is namespace.yaml. Now there are several ways to build a namespace. This is the way that I'm going to walk through just so you can see what actually happens. So we're going to set our apiVersion: v1, the kind: Namespace, and then we will add our [Metadata](../../Skills/Web%20Development/Metadata.md) to it. And the first piece of metadata that we will add will be a name: wisdom. And that's actually the only piece of metadata that we're going to need for this. Now let's go ahead and create another new file, and this one will be called secret.yaml. Now managing secrets in this way, especially when you store them in source control, is not always the best way to do it. What I'm trying to show you is what actually exists in a Kubernetes secret. So that being said, let's do an apiVersion: v1, the kind: Secret, the metadata for this will have two values this time. A name, we're going to call this db-secret, and we will apply the namespace: wisdom that we will create here shortly,
>
> **[1:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=95)** the type: Opaque. And now for the data. Now we're going to cheat a little bit here on the data because I want to actually go get it from a place that it already exists in source control. So we're going to go up here to the [postgres](../../Skills/Software%20Development/PostgreSQL.md) config, and you'll see I have a username and a password in here. So we will copy those, we'll bring them back into our config, and by convention, I'm going to name them with all caps. And we're now ready to apply these. So now I want you to open up your terminal, and I'm going to expand this out a little bit. First thing I want to see is where are we, so we need to go into the wisdom directory. Now at this point, I'm going to execute a few commands. Now I have been using k instead of kubectl, and that's because I have an alias built into the dev container. But you can do all of these by typing kubectl get nodes, or k get nodes because of that alias. So I use k just because I do it on a daily basis, and otherwise I would be fumbling over myself as I was doing this recording. So k get ns, which will get us all of the namespaces. And you'll see at this point, we don't have one called wisdom. So we will do a k apply -f, and we are going to apply from our deployment,
>
> **[3:11](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-the-initial-scaffolding?u=76281980&t=191)** the namespace.yaml. So now it tells us that that namespace was created. And indeed, if I do a namespace again, you'll see now I have wisdom as a namespace. You can also create a namespace by doing something like k create namespace, and it will create a namespace in the same way. So let's go ahead and apply that secret. So k apply -f deployment/secret.yaml. Now if we do a k get all -n wisdom, you'll see no resources are found, and that's because secrets are generally hidden unless you ask for them. So now if we do a k get secrets -n wisdom, it helps to spell that properly. Now you'll see we have the secret there, and they're Base64 encoded as we applied them. This is how you get a secret out there. It's just not storing it in source control usually. So with that, we have the scaffolding in place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (4), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **File Paths:** namespace.yaml (2), secret.yaml (1), deployment/secret.yaml (1)
> **CLI Commands:** kubectl (2)
> **Code Identifiers:** apiversion (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Building a deployment](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=0)** - [Instructor] The deployment is the big workhorse here for our application. It is what will make our image available within [Kubernetes](../../Skills/DevOps/Kubernetes.md) and consume the resources of the backing service. So let's jump into building one. There's quite a bit of typing here in a deployment, so be sure to pause the video as you need to to catch up. Let's create a file called deployment.yaml and we're going to go ahead and start with an API version. And this is at apps slash V1. A kind is a deployment. The [Metadata](../../Skills/Web%20Development/Metadata.md) associated with it has a name of wisdom API deployment and namespace of wisdom and labels of app wisdom API. Now remember, spacing matters in your YAML files. So back at the beginning we do a spec and then a replicas of one and a selector. Match labels and our app once again. And now for our template, once again, our wisdom API for a label. And back at the previous metadata level, we're going to create our spec.
>
> **[1:33](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=93)** And this is where we define our container. And these pods will have one and only one container, but we need to make a array here. The name of the container will be wisdom API. The image that we will leverage is what we loaded onto the node. So it is just the full docker image name 0.01. Normally you would reference these from a container registry, but again, we loaded it onto the node, so we don't need to do that in this case. And now we need to talk about the ports because the container itself operates on port 8080. So we need to specify that. Now we're going to create our environment. And while this will look somewhat familiar because we did it for a run configuration, this is really the power of Kubernetes, the power of cloud native computing, because as you will see when we get there, we can port in different values as needed. In a similar vein, notice that I'm putting things, even numbers into quotes, and this is how you need to do it. So DB port of 5, 4, 3, 2, a DB name. Once again, we'll do local DB and now we will do our DB host. Now here's the first change, instead of local host, because we can't operate at local host, we actually need to reference this from the Kubernetes perspective. So we're going to do it local DB RW,
>
> **[3:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=189)** and that is the name of the service that we are going to hit in [Postgres](../../Skills/Software%20Development/PostgreSQL.md) namespace. And again, it's a service, but it is at cluster local. Now we're going to use our secrets. So DB username, and this is a value from, and the value from is a secret key reference.
>
> **[3:37](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=217)** And the name here is the name of the secret that we created. And the key is the key in that, so username. And that will translate the secret value for the key username to the environment variable DB username. We're going to do the same thing for DB password. Now we got one more thing to do here and that is to create our probes. And these probes are what Kubernetes uses to know if the system is up or not. So the first one is a liveness probe, and this is an HTTP [Git](../../Skills/Software%20Development/Git.md) operation. And the port is 8080, and the path that we're going to leverage is from actuator and it's the health endpoint that we exposed. And within there, there is a liveness endpoint. Now we're going to do a readiness probe. And again, HTTP get, a port of 8080. And I'm going to go ahead and copy this path, but instead of hitting the liveness, we will hit the readiness. Now [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) has some great documentation here on how to customize what exists in a readiness probe. Things like has the cache loaded are really, really important when you're dealing with this.
>
> **[5:12](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-deployment?u=76281980&t=312)** So now all I need to do is deploy this. So let's open up a terminal window, make sure you know where you're at. I'm going to go ahead and go into the deployment directory, and I'm going to do a K apply dash F of my deployment itself. Now once that's deployed, we're going to go check it. So let me clear out my terminal here. We will get all from the wisdom directory. I have a pod up and running, which is really good. I'm going to go ahead and split my screen and expand it here. I'm going to copy the name of this pod and on my other terminal, I'm going to do a K port forward dash N wisdom, the name of my pod, And I'm going to go from 9,000 to 8080. Now back in my primary terminal, I'm going to do an HTTP on 9,000 and we will hit the services endpoint. And I've returned data, so the pod is up and running. It is actually retrieving data from the database. And we're good to move on to the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (4), [Metadata](../../Skills/Web%20Development/Metadata.md) (2), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=0)** - [Instructor] Now we need to load balance traffic to our pods. Even though we only have one right now in our deployment, you still need to front it with a service, so let's go ahead and do that. Back in our deployment directory, let's create a new file called service.yaml, and we'll start with an API version of v1, and a kind of Service and [Metadata](../../Skills/Web%20Development/Metadata.md) around it. The name will be wisdom-api-service, and the namespace will be wisdom, and the spec, we'll start with our selector, and this is how it knows which pods to attach to, and it does it based on the label. And we have a single label of app wisdom-api, so we will put it here on the selector, and now we specify our ports. So, the protocol is TCP, the name will be wisdom-api-http. The Port, and this is the port that the service itself is going to listen at, and we're going to listen at port 80, however, we will translate that to Port 8080, and that's where [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) operates within those containers. So, now let's jump to the terminal, and let's check where we're at. Go ahead and get into the deployment directory.
>
> **[1:42](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=102)** Apply that service. We can see that the service is there, so now let's check out port forwarding once again. I'm going to split my terminal. [Kubernetes](../../Skills/DevOps/Kubernetes.md) port-forward
>
> **[2:02](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=122)** - n wisdom svc
>
> **[2:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/building-a-service?u=76281980&t=130)** /wisdom-api-service. We will do 9,000 to 80. Now, I want you to look at what happens. It actually responds that it's responding to 8080, not 80, and the reason it's doing that is it's actually proxying through to the pod, which is what a service does. So, just like we did before, we could do an http, at 9,000/services, and we get data back. So, now we're going through a port-forward, to the service, from the service to the pod, the pod is hitting the database and responding with traffic. In the next video, we're going to get rid of the port-forward and do straight ingress into that pod.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=0)** - [Instructor] Now let's expose our service to the outside world. I want you to start in the deployment directory and create a new file called ingress.yaml. And we're going to leverage an ingress called nginx. We actually have already been doing that when we've accessed our database because it was already exposed through the ingress itself. However, this one's a little bit different. We're going to start with an API version of networking.[k8s.io/v1](https://k8s.io/v1). And the kind will be an ingress. Now, some [Metadata](../../Skills/Web%20Development/Metadata.md) associated with this. The name will be wisdom-api-ingress. The namespace will be wisdom. And now for some annotations. All right, nginx.ingress.[kubernetes.io/use](https://kubernetes.io/use). RegX will be set equal to true. and nginx.ingress.[kubernetes.io](https://kubernetes.io) rewrite target will be /$2. Now, what this is saying is it will take the path, it will translate it to our service
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=94)** and then rewrite it so that the full path doesn't go to the service, only the things after what we were going to specify below. And that's really important because our service doesn't know anything about how we are going to do the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). Now we can do our spec and we will start with an ingress class name and we will call this nginx. And now for the rules. And the first rule will be an HTTP rule, and we will specify the paths on that. And then an individual path. That individual path will be /wisdom-api. So we will go to the context route of [Kubernetes](../../Skills/DevOps/Kubernetes.md) to /wisdom-api. And from there, everything beyond this is going to be routed to our pod, and that's really important. So we'll do /|$ and then another set of parentheses .*. So anything after wisdom API will go to our pod, but it's actually going to do it through the service. And I'll show you that here in a minute. So the path type is implementation specific. And now for the backend, and this is how we are going to do the routing,
>
> **[3:06](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-ingress?u=76281980&t=186)** we're going to route to a service. The name of that service is wisdom-api-service. And the port that we are going to route on is 80. Remember, it's going to proxy through the service on 80 to 8088 on the pod. And with that, we can deploy this. So open up your terminal. Once again, check where you're at so that you know. I'm going to go ahead and go into this directory. I would do a k apply -f for my ingress. My ingress is now up. So if everything is working, I can go to HTTP 80 /widsom-api/services. And I got data out. Notice we didn't do port forwarding. We've now exposed our service to the outside world. Now, in the real world, we wouldn't expose data services like this. That's just not something we would do. But for now, we've done that locally, so you can now consume it. Now back to the kind implementation that I use on my desktop. I do this all the time. This is how I do local development without having to port forward into my kind cluster. So I do use this behavior even though it's a little bit counterintuitive to how we do it in the real world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=0)** - [Instructor] Now it's time to tie into the metrics that we created earlier in this course and visualize them in our [Kubernetes](../../Skills/DevOps/Kubernetes.md) cluster. What you may not know unless you did a lot of digging, is that Prometheus has been running on the system the entire time, along with Grafana. We actually are using that to monitor the operator and the database if you dug into it. But let's go actually tie into the Prometheus metrics being exposed by our application. The first thing that I want to do is I want to open up the terminal and I want to go to http 80/wisdom-api/actuator/prometheus.
>
> **[0:49](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=49)** And you'll see we have a bunch of metrics being emitted, including the timers that we never instrumented. That's okay because we've defined them, therefore we do see them even if we're not using 'em. So with that said, let's go ahead and create a new deployment. Let me shrink this window down and we will do a new file and deployment directory called monitoring.yaml. All right, as we've done before, apiVersion, this one is monitoring.[coreos.com/v1](https://coreos.com/v1). The kind, we are going to create a pod monitor. There are several monitors, including pod and service monitors. We're going to do a pod monitor. Now the [Metadata](../../Skills/Web%20Development/Metadata.md) around this has a name of wisdom-api-monitor and a namespace of wisdom. And now for the spec. So the selector that we will use is a match label selector. And as we did with our service before, we will use the app name of wisdom-api, and now we will do our pod metrics endpoints. Now this is what we are going to use to point to that actuator endpoint that I just showed you. Now it has a target port, which is 8080. So remember we just saw on 80
>
> **[2:23](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=143)** because of all of the ingress and service mapping. But when you're down at the pod level, it is still 8080, so we have to request it there. And the path is actuator from the root, not with the wisdom api thing that the ingress added, it's from the root, so it's /actuator/prometheus. Now let's go ahead and apply that. So open the terminal back up. I am in the appropriate directory, so I will do a Kubernetes, and let's do it the long way this time. So you can see why I have that alias. So kubectl - f monitoring, and I forgot the apply because I was talking. So apply-f. There we go. Okay, the monitor's configured. We could theoretically see things, but it does take a moment to get there. So we're going to generate a little bit of traffic so we've got something to look at. Let's do an http on 80/wisdom-api/customers. Remember, the only one that we implemented was the get all customers, but we'll go ahead and hit that a few times. Let's get some traffic spiked up on that. So hopefully we'll be able to see something. Now, if you go over to the ports, there's a couple places you can go. Port 30,000 is where Prometheus itself lives.
>
> **[3:58](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/adding-monitoring?u=76281980&t=238)** Prometheus is raw, but it is very usable. We also have Grafana installed at 31,000. Now it has a username of admin and a password of prom operator, if you choose to do that. I'm going to simply go to the Prometheus one, and we are going to do a search for get all customers. And you can see it is there. That does not mean we have data, but we can at least see it. And let's look at the seconds max, which is a gauge, and we will execute it. And it looks like we have some data. So there's our spike that we hit some time ago while we were doing some testing, but you can actually see it now. This is the most recent spike. So let's come into the last five minutes and there's the spike that we just hit, and it will drop off eventually as it does its next round unless you keep putting traffic on it. Now you can take a look here at what Grafana offers you. Again, it is admin and prom operator as the username and password. I encourage you to play with them and take a look at metrics, maybe take a little time and instrument the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of your metrics. Take a look at some of the other metrics you can do outside of timers, do counts or something else, and see what you can have fun with around this. You now have a full working system with observability built in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=0)** - [Instructor] We built out basic [Kubernetes](../../Skills/DevOps/Kubernetes.md) YAML files to deploy our application. But seldom have I ever done this. I usually use [Helm](../../Glossary/Tool/Helm.md) to do this work. While it isn't a course on Helm, it's worth discussing it and some possible strategies for using it. So let's start by talking about what Helm is. Helm is something we've actually been using to run all of our introductory scripts. It's a package manager for Kubernetes. It allows you to leverage templated deployment files to deploy anything from operators to individual components. It handles the entire lifecycle of delivery of applications, including delivery, installation and upgrades. and rollbacks when necessary. So there's a few strategies that I have developed when using Helm that I wanted to share with you. First of all, reduce the number of charts. It is tempting to build a unique chart for each and every application. In my opinion, that is a waste of time. Most of those charts are going to look the same and reducing the number of charts will actually increase your throughput and reduce your chasing down of bugs. Hard code those values that are consistent. I have operated with as few as three home charts and done that for all of my system deployments.
>
> **[1:34](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=94)** What you want to focus on templating is the variables themselves. If you look at a default Helm chart, when you just do a Helm create, everything is templatized. And I find that to be extremely confusing and not worth the effort. Keep them as simple as possible. You will thank me in the long term if you do that. Only add complexity when you need to. And once you really, really get good at Helm, you will start to see the value of automation. Some of the systems I have built, we never manually created a Helm chart once. Our CI/CD pipeline would take a templated file, build one of three variations of Helm through automation and store them. We never checked Helm charts into our repo. We never wrote them, we never dealt with them, though, we use them for every single deployment. Now, this is sort of a Nirvana state, but it is attainable with Helm rather easily if you follow these simple strategies that I have laid out for you. So let's talk a little bit about some of the uses of Helm that you may either use or create charts for. Software that you use in Kubernetes is often delivered via Helm. In fact, most of the time, that's the preferred way to use it when possible. Of course, applications that you write that are going to target Kubernetes, Helm will help you manage the state of those,
>
> **[3:08](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/introduction-to-helm?u=76281980&t=188)** whether you use them directly or use them through other tools like [Argo CD](../../Glossary/Tool/Argo%20CD.md) or Harness or any of the various ways to deploy applications. And one of the big ones is operators that you build. If you build an operator, have a Helm chart to deploy it. If you ship that operator out to the world, have a Helm chart so everyone else can consume it without having to figure out how to do the deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Helm](../../Glossary/Tool/Helm.md) (17), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (4), [Argo CD](../../Glossary/Tool/Argo%20CD.md) (1)
> **CLI Commands:** cd (2), find (1)
> **Env Vars:** yaml (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Additional Topics

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing strategies](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=0)** - [Instructor] I want to spend a little bit of time talking about some testing strategies around [Kubernetes](../../Skills/DevOps/Kubernetes.md) and cloud native development as a whole. I want to start with [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md). Now, obviously, in this course, we deleted the only unit test that came from [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) and didn't spend any more time talking about it, so now is a great time to do that. I encourage you while you're building out your systems, especially with these remote database considerations, to leverage embedded [Databases](../../Skills/Software%20Development/Databases.md) if you can during your testing time. If you cannot, then sometimes it's even better to leverage something like dev containers to do that testing. With dev containers, you can run a Docker image that will store your database to actually execute your unit test. That way, you're not relying on actual [Database Systems](../../Skills/Software%20Development/Database%20Systems.md). Of course, you can always mock dependencies, including things like databases, and these are things that you should be doing anyway as you're building out your testing. And you can always utilize specific test contexts within Spring Boot so that you're not loading the actual live application context. And usually you're going to do these things hand in hand together. It's not one or the other. It's usually a mixture of at least three of these when you're building out proper unit tests with the [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md). Now comes the area of [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md), and this is something that I'm very passionate about because it ties directly into my desire to have full CI/CD. With integration testing,
>
> **[1:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=95)** one of the problems you have to deal with is as you deploy to remote environments, your APIs generally are private. Now, I'm not talking about edge facades that you build to expose them or gateways. I'm talking about your hardcore internal services that only are there to serve the needs of your other applications. Testing these can become problematic because they are private. You can leverage tools like Kubernetes jobs and test frameworks, like pytest or go test or even [JUnit](../../Skills/Software%20Development/JUnit.md), to build packages that do tests in a Kubernetes job. And a Kubernetes job is a one-time operation. When you get really good at these, you can actually have them report back to your CI/CD pipelines. You can use these things, especially with the local environment, to prevent an actual PR from getting merged. One thing that you have to consider is how are you going to handle setup and tear down? This is really an important aspect of integration testing because you don't want to consistently grow your database or have tests collide with live data. Worse is if tests collide with themselves, and then they start failing for reasons that you don't know. So good setup and tear down practices are important with integration testing. And in line with that, you have to consider the case of abnormal termination. If your integration test fails
>
> **[3:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=190)** in the middle of its operation, it can't tear itself down because it's crashed. So you need to have a way to not only identify that the termination happened, but to go clean up all of the behavior that it wasn't able to clean up itself. Now when it comes to user acceptance testing, you're going to really get into automation. All of this should be run, in my opinion, outside the cluster because that's how your users are going to access your systems. So you can stand up a remote cluster or a remote server to do these types of automation tests. You're really focusing on testing the major flows through your application. But don't just test positive flows. Be sure that you're also testing the negative flows. And any public APIs that you expose, at a minimum, should be subject to contract testing. Of course, there are benefits of bringing those to all of your internal APIs, but from your remote consumer, you cannot break your public APIs and they must be passive from release to release. In a similar vein, you should be actively [Load Testing](../../Skills/Software%20Development/Load%20Testing.md) your system in all of your environments to ensure that you can handle the load that you need to apply, usually at some greater value than you have seen over the last period of time. And performance testing goes sort of in line with load testing, but it's a little bit different in its nature. Here, you're making sure that your systems are performant,
>
> **[4:45](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/testing-strategies?u=76281980&t=285)** both under load and without load on the system. And as we've talked about a couple times now, [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) dies, nodes die, Pods die. So having good chaos testing to be able to withstand those failures of cloud infrastructure is very, very important. Last but not least is [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md). It is very important that you do not forget the importance or have the focus on it such that you don't ignore the security testing needs of your system. Things like SAST and DAST will improve the quality of your system with very little work on your part because these things just happen in the background. But you should also be looking at things like container scanning and not just the containers that you create, but also the containers that you deploy to your environment. You could have the greatest security practices on Earth, but bring in somebody else's code because they sold it to you, and now you have a security vulnerability. So please take testing seriously in your cloud native systems in all flavors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (4), [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md) (4), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Load Testing](../../Skills/Software%20Development/Load%20Testing.md) (2)
> **CLI Commands:** cd (2), docker (1)
> **Prerequisites:** setup (2), you need to have (1)
> **Env Vars:** sast (1), dast (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Automation in CI/CD](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=0)** - [Instructor] I want to spend a little bit of time and talk about the importance of automation in CI/CD and how it can affect you using something like a kind cluster on your local machine as well as [Kubernetes](../../Skills/DevOps/Kubernetes.md) as a whole. Let's start with the build process or [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md). What I like to do, and what I encourage everyone to do, is build on all branches. In fact, I have a pattern where the minute I create a branch and push it to remote, I immediately have a build process, and it's actually the full CI/CD process, actually execute with the deployment occurring on my local Kubernetes cluster. Leverage tools tied into your SCM. So, what do I mean by that? If your build system can tie into SCM, leverage it. In fact, if your build system is SCM, you're in a better spot yet. When you're using something like [GitHub](../../Skills/Software%20Development/GitHub.md) with GitHub Actions, you actually can register a remote runner on your local Kubernetes cluster that ties to your account to do all of the build work on your machine so it doesn't cost you minutes out on GitHub. Create scripts for local dev builds when that's not possible. It's very difficult at times for developers to remember everything that they need to do, and if you have a very easy script that they can just type a few characters to execute the local build when it's not tied to SCM, you will actually save yourself in the long run. And the benefit of all of this is fast feedback.
>
> **[1:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=95)** Cannot stress enough the quicker you find an issue, the quicker you find a problem, as close as it is to when you created that problem, you actually are going to be able to fix it much faster. And that's really what CI/CD is all about is that fast feedback loop. Now, let's talk about the delivery mechanism itself. As I already alluded to, if you can, deliver branches locally. So, developer goes out, they create a ticket, they open up a branch for that ticket, immediately that branch, which is nothing more than main, should build and deploy locally. Then as they push more code up, it builds again, assuming the tests pass, and deploys locally. While you're doing that, you can test those branches locally. If your integration tests, for instance, are environment agnostic, as they should be, those integration tests can run in your branch, which means you may be failing if you're doing [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md), but that's okay because every time you push code, you should see more and more tests passing as you're moving forward. Or if you break a test, you will know immediately that you did that. Once you have a merge of your PR, in my opinion, it should immediately be deployed to a non-prod environment. So, the PR merges, the builds occur as normal, but then you immediately deliver to non-prod. Once there, you test everything. Your integration test, your user acceptance test,
>
> **[3:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/automation-in-ci-cd?u=76281980&t=189)** your security test, your load test, your chaos test, everything we just talked about that you can automate should run in your non-prod environment. As a matter of fact, the only place that I want a manual gate, and even there it's a little bit suspect, is going from the last non-prod environment to prod. If you get really good at this, you can have one non-prod environment, your local machine, and prod and never have a manual gate. That is a goal, that is not always immediately attainable, but if you get to that level of confidence, and Kubernetes enables you to do that with all of the automation capabilities, you will achieve rapid development that most teams are striving for every day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1), [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (1)
> **CLI Commands:** cd (3), find (2)
> **Env Vars:** scm (4)
> **Tools:** github (3)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Security considerations](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=0)** - [Presenter] I would be remiss if I didn't spend at least a little bit of time in this course talking about the security considerations that come with not only cloud-native computing, but the containers that we run those cloud-native apps on. Let's start our conversation with the containers themselves. I highly encourage you to secure the lifecycle of your containers. I already talked a little bit about the strategy that I use where I start with the base image and everything in my ecosystem extends from that base image. We do not allow external images in, and we do that on purpose. Again, if we have a security concern in the base image, we can address it in all of our images at once, so it's very important to secure that lifecycle. In the same vein, scan your images. The images you create, the images you install in your environment, all of them should be scanned. And constantly scan your cluster. Again, you only control the images that you create from a lifecycle perspective, but if you scan your cluster regularly as well as the images that are being used, you'll be in a much more secure footprint. And maintain your container lineage throughout that entire lifecycle. Don't let rogue images in because you don't know the damage that it will cause, and it only takes one bad container, one bad image to bring your system down.
>
> **[1:35](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=95)** Now, let's talk a little bit about the security of your [Kubernetes](../../Skills/DevOps/Kubernetes.md) cluster or clusters themselves. We have to start with the access control. But remember, developers have to be able to do their job. So access control is not a anybody who is in operations only, but no one else. Developers need access to the cluster. And you can do it in a way that allows them to gain more access when needed. And a lot of times those needs are around operations. There are tools and applications that you can write with those tools so that a developer can only elevate in certain situations, and then they can be granted full access to the cluster as needed. In addition to access, you have to think about what you're exposing. Don't expose services and applications that should be private. Don't expose them out of the ingress. Don't allow credentials to get access to that. Even if you're running an admin app and it's exposed on the public internet, put a challenge to make sure that they have a company email, something around those lines that will help you protect your system. And only expose your public offerings through known ingress. What do I mean by that? Don't allow rogue ingresses yes, but also control the entire flow. If you're running a load balancer and your cloud provider, the only way to get to your ingress should be through that load balancer.
>
> **[3:09](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/security-considerations?u=76281980&t=189)** By funneling all of the traffic, it gives you access to know what's going on at all times. And if you are able to automate all of your data and system updates, when you automate them, you not only have a track record of what you've done, but you no longer need to have elevated access for routine operations. The only time you need to elevate is when you are in a situation that requires it. So by leveraging automation and good change management around it, you don't need to involve humans unless it's absolutely necessary. And I'm going to finalize on this simple quote: "Don't expect someone else to do it." If it needs to be done, do it. If it needs to be secured, find a way to do it or make sure someone who can knows about it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** install (1)
> **Speakers:** - [presenter] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=0)** - [Frank] So as our course comes to a close, I want to talk about a few next steps to help you get the most out of this course that you just spent so much time going through. Before we get there, let's do a quick recap of what we've touched on. We started with the scripted kind environment, and this is something that I encourage you to take a look at outside of this course. We then built a very simple web service using [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) with the intention of targeting that for a [Kubernetes](../../Skills/DevOps/Kubernetes.md) deployment. We then built out that deployment by hand. We looked at all the different parts of it and how they operated together and how they did their function to serve that web service to the outside world. We then talked about monitoring and how it can be leveraged, gave you an opportunity to build on that and enhance your operational knowledge. And we spent some time discussing automation, security and testing, three very big aspects in cloud native computing. With that said, I'd like to share with you some ideas for additional learning outside of this course. We didn't talk about [Helm](../../Glossary/Tool/Helm.md) a lot, and that is because this is not a course on Helm, but Helm is a great tool and will really enhance your knowledge, not only of Kubernetes, but how to deal with packaging applications. And of course, learn more about Kubernetes. I've been using it almost the entire time it has been in existence, and I still learn new things all the time.
>
> **[1:36](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=96)** Kubernetes is a very large ecosystem, and it's a very powerful one that I built multiple platforms on, but it takes time to learn it, and the best way to do that is repetition. Build multiple services into this kind cluster that talk to each other. That level of sophistication will help you understand how [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) inside the cluster works. So go ahead and give it a try. Deploy them to different namespace, deploy them to the same namespace. See what the differences are in their configuration. I encourage you to build your own cluster and play with it. I run a Raspberry Pi cluster with Kubernetes. I also have a small server rack that I can run Kubernetes on. It's a great way to learn it. Not everybody has access to all of those, but you can find ways to build a cluster and play with it, including leveraging Kubernetes on your own machine. You have a scripted environment, we've given it to you in this class. Play with it and use it to your advantage. You may need to add a little bit of RAM, but a little bit of RAM is cheaper than three blade servers, I can promise you that. I want to thank you, finally, for spending the time with me on this course. I understand that your time is valuable and it actually means a lot to me that you've chosen to spend your time with me learning about Spring Boot, and Kubernetes and how they work together. My commitment to you does not end when this course is over. I encourage you to reach out on the various platforms
>
> **[3:10](https://www.linkedin.com/learning/spring-on-kubernetes-deploying-and-managing-cloud-native-applications/next-steps?u=76281980&t=190)** like [GitHub](../../Skills/Software%20Development/GitHub.md), X, Stack Overflow, where my handle is all the same, fpmoles, and ask questions, learn about what I'm doing, tell me about what you're doing, and ultimately leverage the Q&A section here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. With that said, I hope that this course has enhanced your knowledge on Kubernetes and Spring Boot, and I hope that you have a hunger for learning more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (9), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (3), [Helm](../../Glossary/Tool/Helm.md) (3), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
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

### In [Advance Your Spring Development Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Spring%20Development%20Skills.md)
**1 of 6** | [Performance Tuning in Spring Apps](Performance%20Tuning%20in%20Spring%20Apps.md) →

## Appears In

- [Advance Your Spring Development Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Spring%20Development%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Kubernetes- Cloud Native Ecosystem](../DevOps/Kubernetes-%20Cloud%20Native%20Ecosystem.md) — Kubernetes, Cloud-Native Applications
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](../Artificial%20Intelligence%20(AI)/Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Spring Boot
- [Advanced Spring- Spring Boot Actuator](Advanced%20Spring-%20Spring%20Boot%20Actuator.md) — Spring Boot
- [Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing](Spring%20Boot%20Observability-%20Deep%20Dive%20into%20Logging%2C%20Metrics%2C%20and%20Tracing.md) — Spring Boot
- [Advanced Spring- Effective Integration Testing with Spring Boot](../Software%20Development/Advanced%20Spring-%20Effective%20Integration%20Testing%20with%20Spring%20Boot.md) — Spring Boot

---

[↑ Back to top](#)