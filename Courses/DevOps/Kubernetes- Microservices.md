---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: kubernetes-microservices-23787657
url: "https://www.linkedin.com/learning/kubernetes-microservices-23787657"
duration_minutes: 80
duration: 1h 20m
level: Beginner
updated: 4/26/2024
learners: 22507
skills:
  - Microservices
  - Kubernetes
exercise_files: true
github: "https://github.com/LinkedInLearning/kubernetes-microservices-3808182"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHj6_u-_V4BiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713982644820?e=2147483647&amp;v=beta&amp;t=4tVKvKmN56MPSSinLxs3qOmRD6SQg_WE2UI4Jmx-BwU"
linkedin_topic: DevOps
learning_paths:
  - '[[Getting Started with Kubernetes]]'
prev_courses:
  - '[[Kubernetes- Essential Tools]]'
next_courses:
  - '[[Kubernetes- Cloud Native Ecosystem]]'
path_nav: '[{"path":"Getting Started with Kubernetes","position":4,"total":6,"prev":"Kubernetes- Essential Tools","next":"Kubernetes- Cloud Native Ecosystem"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/microservices
  - skill/kubernetes
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Kubernetes-%20Microservices.md)

![Kubernetes: Microservices](https://media.licdn.com/dms/image/v2/D560DAQHj6_u-_V4BiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713982644820?e=2147483647&amp;v=beta&amp;t=4tVKvKmN56MPSSinLxs3qOmRD6SQg_WE2UI4Jmx-BwU)

# Kubernetes: Microservices

> In this beginner level course, technical curriculum developer Kim Schlesinger teaches you about Kubernetes networking and configuring service-to-service communication, which is critical for microservices in Kubernetes. Gain an understanding of the history of containers and Kubernetes. Find out how the platform was designed for microservices architectures. Get hands-on experience deploying three mi

> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-microservices-23787657) | 1h 20m | Beginner | 23K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Cloud native networking with Kubernetes](#cloud-native-networking-with-kubernetes)
  - [What you should know](#what-you-should-know)
  - [How to use the exercise files](#how-to-use-the-exercise-files)
- [**1. Cloud Native Was Made for Microservices**](#1-cloud-native-was-made-for-microservices) (4 videos)
  - [Monolithic vs. microservices architecture](#monolithic-vs-microservices-architecture)
  - [History of application deployments](#history-of-application-deployments)
  - [Kubernetes network model](#kubernetes-network-model)
  - [Container Network Interface](#container-network-interface)
- [**2. Set up Your Cluster and Deploy Your Microservices**](#2-set-up-your-cluster-and-deploy-your-microservices) (4 videos)
  - [Spin up a Minikube cluster in Windows, Mac, and Linux](#spin-up-a-minikube-cluster-in-windows-mac-and-linux)
  - [Install Calico](#install-calico)
  - [Deploy the backend microservices](#deploy-the-backend-microservices)
  - [Deploy the frontend microservice](#deploy-the-frontend-microservice)
- [**3. Service Discovery in Kubernetes**](#3-service-discovery-in-kubernetes) (6 videos)
  - [An overview of Kubernetes services](#an-overview-of-kubernetes-services)
  - [Examine a ClusterIP service](#examine-a-clusterip-service)
  - [Examine a NodePort service](#examine-a-nodeport-service)
  - [Examine a LoadBalancer service](#examine-a-loadbalancer-service)
  - [Challenge: Deploy and test a new microservice](#challenge-deploy-and-test-a-new-microservice)
  - [Solution: Deploy and test a new microservice](#solution-deploy-and-test-a-new-microservice)
- [**4. Advanced Topics**](#4-advanced-topics) (3 videos)
  - [Understanding network policies](#understanding-network-policies)
  - [Getting traffic into a cluster using Ingress](#getting-traffic-into-a-cluster-using-ingress)
  - [An overview of services meshes](#an-overview-of-services-meshes)
- [**Conclusion**](#conclusion) (1 videos)
  - [Thank you](#thank-you)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud native networking with Kubernetes](https://www.linkedin.com/learning/kubernetes-microservices-23787657/cloud-native-networking-with-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/cloud-native-networking-with-kubernetes?u=76281980&t=0)** - It's essential that you know how [[Kubernetes]] networking supports communication between [[Microservices]], especially if you're on a [[DevOps]], [[DevSecOps]], or platform engineering team.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/cloud-native-networking-with-kubernetes?u=76281980&t=12)** Kubernetes is the go-to tool used to deploy and manage cloud-native software because it was built to support microservices.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/cloud-native-networking-with-kubernetes?u=76281980&t=21)** In this course, I'll help you get hands-on experience deploying a few microservices and learning about how the network in a Kubernetes cluster works.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-microservices-23787657/cloud-native-networking-with-kubernetes?u=76281980&t=30)** I'll also cover some more advanced topics like network policies, Ingres, and service meshes.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-microservices-23787657/cloud-native-networking-with-kubernetes?u=76281980&t=37)** I'm Kim Schlesinger, a tech educator and Kubernetes enthusiast, and I'll guide you through how to deploy microservices in a Kubernetes cluster.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/cloud-native-networking-with-kubernetes?u=76281980&t=46)** Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (5), [[Microservices]] (4), [[DevOps]] (1), [[DevSecOps]] (1)
> **Speakers:** - it (1)

#### [What you should know](https://www.linkedin.com/learning/kubernetes-microservices-23787657/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/what-you-should-know?u=76281980&t=1)** - In this course, you'll learn more about the network inside a [[Kubernetes]] cluster, which was designed to support easy communication between [[Microservices]] that make up working applications.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-microservices-23787657/what-you-should-know?u=76281980&t=13)** In order to complete the hands-on activities in this course, you'll need access to a terminal application where you can run Unix commands, you need Docker installed and running, and a connection to the internet.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/what-you-should-know?u=76281980&t=25)** In this course, I'm assuming you know a few things about Kubernetes, including what a cluster, pods, and deployments are.
>
> **[0:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/what-you-should-know?u=76281980&t=34)** I'm also assuming you've used kubectl, the Kubernetes command line tool before.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/what-you-should-know?u=76281980&t=39)** Finally, you'll want to know a little bit about the CNCF, also known as the Cloud Native Computing Foundation.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/what-you-should-know?u=76281980&t=46)** The most important thing you need to complete this course is the desire to learn more about the different techniques you can use to deploy microservices in a Kubernetes cluster.
>
> **[0:57](https://www.linkedin.com/learning/kubernetes-microservices-23787657/what-you-should-know?u=76281980&t=57)** If you've got a little experience with Kubernetes and you're excited to learn, keep watching this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (5), [[Microservices]] (2)
> **CLI Commands:** make (1), docker (1), kubectl (1)
> **Tools:** terminal (1), command line (1)
> **Env Vars:** cncf (1)
> **Definitions:** known as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - in (1)

#### [How to use the exercise files](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] This course has hands-on activities that you'll be able to run on your computer, and I've prepared the files for you.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=7)** You can download them in two different ways.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=10)** The first is the exercise files.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=13)** To find these, go to the exercise files link on the course page and download the zip file.
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=19)** Then, unzip the file.
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=22)** Navigate to the folder created.
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=24)** Inside you'll see the folders that represent each video within the course.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=29)** Open up the folder that corresponds to the lesson you're watching, and you'll find all the materials you'll need for that video.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=36)** Since some of the lessons in the course are driven through terminal commands, I start out each lesson in this directory, and you'll want to do the same.
>
> **[0:44](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=44)** I'm working on a Mac, but these commands will work on [[Linux]] and [[Windows]].
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=49)** The second option for accessing the course files is [[GitHub]].
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=53)** Go to the [[LinkedIn]] learning org on GitHub and search for [[Kubernetes]]-[[Microservices]].
>
> **[1:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=60)** (keyboard clicking) The repo's full name is Kubernetes-microservices-3808182.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=76)** Clone that repo on your machine and change into the directory.
>
> **[1:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=81)** Choose one of these download methods and make sure you've changed into the directory, so the commands I use work the same way for you on your computer.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=90)** Once you've got the files on your machine, you're ready to move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Kubernetes]] (2), [[Microservices]] (2), [[Linux]] (1), [[Windows]] (1)
> **CLI Commands:** find (2), unzip (1), make (1)
> **Exercise Files:** exercise files (2), download the (1), zip file (1)
> **Tools:** github (2), terminal (1)
> **UI Navigation:** go to (2), navigate to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard clicking) (1)


### 1. Cloud Native Was Made for Microservices

[↑ Back to Table of Contents](#table-of-contents)

#### [Monolithic vs. microservices architecture](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=0)** - [Instructor] [[Kubernetes]] is a container orchestration system built to run applications as containers in the cloud and enable communication between those containers.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=11)** Kubernetes was developed in response to issues that arose when people deployed applications using physical servers and [[Virtual Machines]], and it's helpful to understand some of this history in order to appreciate Kubernetes.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=25)** The first part of understanding this history is to learn about the difference between monolithic and [[Microservices]] architecture.
>
> **[0:33](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=33)** A monolithic architecture is when an application is developed in a single code base and deployed all at once.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=41)** Microservices architecture, often shortened to the term microservices, is when different parts of an application are developed and run independently as containers.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=51)** Cloud native applications are synonymous with microservices architecture.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=56)** The benefits of a monolithic app are that they are easier for a team of software engineers to develop and test because all of the code is in one repository.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=66)** Another benefit of monoliths is that they have only a few points of entry, so they are easier to secure and they do not need complex networking enabled, so your company may not need a [[DevOps]] or platform team.
>
> **[1:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=80)** The downside of a monolithic app is that it is difficult to keep up to date with all the application's dependencies and libraries.
>
> **[1:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=88)** Every time you and your team deploy, you have to deploy the entire app instead of just the part you updated, and when one part of the application breaks, the entire thing can go down and they do not scale well.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=101)** In contrast, the benefits of microservices include how fast you can deploy a service.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=107)** When a change is made to the code of one microservice, you deploy the update on its own quickly and without impacting the other services.
>
> **[1:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=116)** In the same vein, it's easier to update the software versions of your dependencies and libraries because you are only concerned with what it is in one small container, not a giant application.
>
> **[2:09](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=129)** Another benefit is increased fault tolerance.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=132)** When one service breaks, it doesn't automatically take down the entire app.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=137)** Finally, microservices are easier to scale than monoliths because you can create more replicas of any service, but not necessarily all of them.
>
> **[2:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=145)** This ultimately saves you or your company money.
>
> **[2:30](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=150)** Monoliths were the most popular application architecture in the 2000s and early 2010s, when most companies owned the physical servers that hosted their websites and applications, and it made sense to have all their application code in one place and on one server.
>
> **[2:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=169)** Microservices started to become popular in the mid 2010s when Docker, one of the first container technologies, was widely available to developers.
>
> **[2:59](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=179)** At the same time, [[Cloud Services]] that offered virtual machines like AWS's [[Amazon EC2|EC2]] and [[Google]]'s Compute Engine became available.
>
> **[3:09](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=189)** Once containers were mainstream and companies were migrating to the cloud, people began looking for ways to put as many containers as possible on one virtual machine to make the best use of computing resources and to save money.
>
> **[3:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=203)** Kubernetes was in part, designed to solve that problem.
>
> **[3:27](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=207)** Now that you know why microservices led to the development of Kubernetes, in the next video, let's go in depth about the ways people have used servers to deploy applications and how Kubernetes fits into that history.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microservices]] (8), [[Kubernetes]] (6), [[Virtual Machines]] (2), [[DevOps]] (1), [[Cloud Services]] (1)
> **CLI Commands:** docker (1), aws (1), make (1)
> **Env Vars:** aws (1), ec2 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [History of application deployments](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=0)** - [Instructor] In order to fully appreciate the power of [[Kubernetes]], it's helpful to understand how people approached application deployment before the advent of containers and cloud native applications.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=12)** So, let's take a look at the history of application deployments and why containers and container orchestration systems became popular.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=21)** In the 1990s and 2000s, most companies made their websites available on the internet through application servers.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=29)** This meant that someone was responsible for maintaining a physical server.
>
> **[0:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=34)** The computer itself was on the premises of the [[Microsoft Office|office]] building or at a data center, and they needed to install an application server, like Apache Tomcat or NGINX, to serve up their website when a request came in from the internet.
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=49)** In this era, system administrators or CIS admins would take the application code from the software engineers, compress it as a tarball, and send the tarball to an application server using FTP and install it with a bash script.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=64)** This approach meant that there was one server with one operating system serving up one application, which often left a lot of the computer's CPU and memory unused.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=76)** Monolithic applications were a good fit for this style of deployment.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=82)** In the mid-2000s, the age of virtualization or [[Virtual Machines]] arrived.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=87)** Virtual machines are when a developer runs more than one guest operating system on a single server.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=94)** The key to being able to run virtual machines on a host is a technology called a hypervisor, which creates and runs virtual machines.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=104)** In this era, CIS admins would spin up many virtual machines on a single server.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=111)** Then, the CIS admin would take the application code from software engineers, compress it as a tarball, and send the tarball to an application server running on each virtual machine.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=122)** This approach meant that there was one server with multiple operating systems serving up one application per OS.
>
> **[2:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=130)** So long the days of one server per application, now there could be more than one application deployment per computer.
>
> **[2:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=138)** Running multiple VMs and applications on a host is a much more efficient use of a computer's CPU and memory, and multiple replicas of monolithic applications could be deployed on different virtual machines.
>
> **[2:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=152)** The next shift in deployment techniques was started with the invention of container technologies.
>
> **[2:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=159)** Docker was released in 2013, and it was the first container technology to become widely used by people in the tech industry.
>
> **[2:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=167)** According to Docker, a container is a lightweight, standalone, executable package of a piece of software that includes everything needed to run it.
>
> **[2:57](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=177)** Containers are sort of like virtual machines, except they don't need a guest operating system to run because they use the kernel of the host machine to virtualize their own OS.
>
> **[3:09](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=189)** As such, you can run many more containers on a single server than you can VMs.
>
> **[3:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=195)** When container technology became popular, it was possible to break up parts of larger monolithic apps into smaller parts and deploy them as [[Microservices]].
>
> **[3:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=205)** At the time, Docker was only meant to run on a single server, and it only used commands, not configuration files, which made automation nearly impossible.
>
> **[3:37](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=217)** In order to solve the problem of only being able to use imperative commands to deploy and update containers on one server at a time, container orchestration tools were born.
>
> **[3:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=229)** [[Google]] donated the Kubernetes project to the CNCF in 2015, but at that time, it wasn't clear that it would become the most popular container management tool.
>
> **[4:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=240)** Other tools that emerged at that time were Mesos and Docker Swarm.
>
> **[4:05](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=245)** The rise of container orchestration tools allowed CIS admins and [[DevOps]] engineers to automate most of their deployments.
>
> **[4:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=252)** And the declarative nature of Kubernetes means that many issues that occur in a cluster can be handled by Kubernetes itself, not a person.
>
> **[4:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=262)** The combination of distributed computing systems and packing containers on a host makes for the most efficient use of a computer's CPU and memory.
>
> **[4:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=272)** There's another approach to deployment, which came after container orchestration tools, called serverless.
>
> **[4:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=279)** We won't cover it in this course, but I encourage you to take a look.
>
> **[4:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=283)** The key takeaway to understand from this history is that before the cloud, software applications were tied to the [[Hardware]] they were running on, and that limited how much traffic applications could serve up at one time.
>
> **[4:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=296)** Now, we have a wide range of container orchestration tools to work with.
>
> **[5:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=301)** In the next video, I'll show you the Kubernetes networking model, which was designed to help containers easily communicate with each other inside a cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (7), [[Kubernetes]] (5), [[Microsoft Office|Office]] (1), [[Microservices]] (1), [[Google]] (1)
> **Env Vars:** cis (4), cpu (3), nginx (1), ftp (1), cncf (1)
> **CLI Commands:** docker (4), apache (1), nginx (1)
> **Definitions:** is a  (3), means that (1)
> **Prerequisites:** install (2)
> **Cross-References:** in the next (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### [Kubernetes network model](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=0)** - [Instructor] Let's take a look at the [[Kubernetes]] Network Model and its four requirements.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=5)** Kubernetes was designed for its network layer to be pluggable, meaning that there can be different software packages that set up and control cluster networking.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=16)** These tools are called Container Network Interfaces, or CNI plugins.
>
> **[0:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=23)** In Kubernetes, a CNI must create a private network in the cluster that meets the following requirements.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=30)** One, containers must be able to communicate with other containers in the same pod.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=37)** Two, pods must be able to communicate with other pods.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=41)** Three, pods must be able to communicate with services.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=45)** And four, there must be a way for traffic from the internet to communicate with services inside a Kubernetes cluster.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=53)** To allow different parts of Kubernetes to communicate with each other, CNIs assign unique IP addresses to pods.
>
> **[1:02](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=62)** There are three parts of a cluster that get unique IP addresses.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=68)** Pods, the CNI assigns pods IP addresses.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=74)** Services, the cube API assigns these IP addresses.
>
> **[1:19](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=79)** And nodes, the kubelet or cloud controller manager assigns these IP addresses.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=86)** In Kubernetes, you can assign IPv4 addresses, IPv6 addresses, or set up a dual stack and use both.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=96)** Kubernetes can use TCP, UDP, and SCTP networking protocols.
>
> **[1:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=103)** Now that you know the network inside a Kubernetes cluster must meet four requirements, and also that a CNI is what implements these four requirements, you'll learn more about these tools in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (8)
> **Env Vars:** cni (4), api (1), tcp (1), udp (1), sctp (1)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Container Network Interface](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=0)** - [Instructor] In this video, let's talk more about the Container Network Interface project, and how CNI plugins make networking in a cluster possible.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=10)** A quick review.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=12)** There are four issues that must be addressed in the [[Kubernetes]] network model.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=17)** Containers must be able to communicate with other containers in the same pod.
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=22)** Pods must be able to communicate with other pods.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=25)** Pods must be able to communicate with services, and there must be a way for traffic from the internet to communicate with services inside the Kubernetes cluster.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=36)** There are several software tools that you can install and will implement these features, and they are called CNI Plugins.
>
> **[0:44](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=44)** A CNI plugin must conform to the specifications set out by the CNCF Container Network Interface Project.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=53)** Most CNIs are [[Open-Source Software]] projects maintained by a community or a specific company.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=61)** According to the CNI spec, at a minimum, a container network needs to be able to assign IP addresses to pods, so that they can communicate with one another over a private network.
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=73)** Flannel is a CNI plugin that provides a layer three IPV4 network between multiple nodes in a cluster, but it does not control how containers are networked to the host.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=86)** Flannel is an example of a CNI plugin with the least amount of features.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=92)** An example of a more complex CNI plugin is Cilium, which provides networking capabilities, but also observability and security features.
>
> **[1:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=103)** Like Flannel, Cilium provides a layer three IPV4 network between multiple nodes in a cluster, but it can also extend that network to multiple Kubernetes clusters.
>
> **[1:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=114)** Enforce network policies, load balance between pods and external services, and it can be configured to be a service [[Mesh]].
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=123)** You might be wondering, where can I find a list of CNI plugins?
>
> **[2:08](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=128)** And the answer is to look at the CNCF landscape, and [[Zoom]] in on the cloud-native network section.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=135)** Here you'll see a list of CNCF-sponsored CNI plugins.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=140)** I can see Cilium and Flannel, but there are other plugins, including Isovalent, Weave Net, and Calico.
>
> **[2:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=148)** You will install Calico in a mini cube cluster in the next chapter.
>
> **[2:33](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=153)** In Kubernetes, the purpose of a CNI plugin is to create a network where containers and pods can communicate with one another using TCP/IP.
>
> **[2:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=163)** There are several different CNI plugins.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=165)** Some, like Flannel, only set up communication between pods, while more complicated ones, like Cilium, set up a network and much, much more.
>
> **[2:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=175)** In the next couple of videos, I'll show you how to set up a Kubernetes cluster using Minicube, and you'll swap out the default CNI with Calico.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (5), [[Open-Source Software]] (1), [[Mesh]] (1), [[Zoom]] (1)
> **Env Vars:** cni (12), cncf (3), ipv4 (2), tcp (1)
> **Prerequisites:** set up (3), install (2)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (1), is an  (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)


### 2. Set up Your Cluster and Deploy Your Microservices

[↑ Back to Table of Contents](#table-of-contents)

#### [Spin up a Minikube cluster in Windows, Mac, and Linux](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=0)** - [Instructor] In the last chapter, I talked about the history of containers and container management tools and how they changed how developers deployed their applications and led to the popularity of [[Microservices]] architecture.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=13)** In this video, I'll show you how to install and start a mini cube cluster.
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=19)** Before installing minicube, you need to have Docker already installed and running.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=25)** You can check that Docker is running by typing the command docker and hitting enter.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=31)** If you see this list of commands, that means Docker is running.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=36)** Minicube is software that lets you run a [[Kubernetes]] cluster using just your computer, and it's a tool that can help you learn Kubernetes.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=45)** It's free because you are not required to pay a cloud provider for compute resources, but minicube is not fit for production clusters because it runs locally on your computer and lacks the security and networking capabilities offered by a cloud provider.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=63)** To get started with the installation process, find the get started page in the mini cube docs and then scroll down to find installation.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=75)** I'm going to show you how to install minicube on [[Linux]], [[Windows]], and Mac.
>
> **[1:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=81)** You only need to follow instructions for your operating system and then you can skip the [[Representational State Transfer (REST)|rest]] until we get to how to start Minicube.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=90)** All right, I am going to first install Minicube on Linux on an [[Ubuntu]] machine.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=97)** So on the installation page, I clicked over to the operating system Linux, and now I need to select my CPU architecture.
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=108)** To check that, you can go to your command line, run the command, uname-P, and it'll tell you your processor.
>
> **[1:58](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=118)** I've got an X 86 64.
>
> **[2:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=120)** So back to the installation commands.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=123)** I'm going to make sure that's selected.
>
> **[2:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=124)** If I had ARM 64, I'd use that, ARMv7 there.
>
> **[2:08](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=128)** So X86-64 or whatever your architecture is.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=132)** Under release type, either stable or beta, we want stable.
>
> **[2:16](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=136)** And then for the installer type, either binary, Debian, or RPM package, it's up to you in what you normally use.
>
> **[2:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=142)** In this video, I'm going to use the binary download.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=146)** So I'm going to copy this command here, go back to my command line and hit enter.
>
> **[2:38](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=158)** I got to enter my password.
>
> **[2:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=159)** All right, looks like it worked.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=162)** Let's check by running the command mini cube.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=165)** Hey, if you see this list of mini cube commands, that means you have installed Minicube on your Linux machine.
>
> **[2:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=174)** All right, now I'm going to show you how to install minicube on Windows.
>
> **[2:59](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=179)** First thing I'm going to do is go to [[Powershell]] and make sure I've got Docker installed and running.
>
> **[3:05](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=185)** Run the Docker command, see that?
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=187)** That's good.
>
> **[3:08](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=188)** Verifies it's working.
>
> **[3:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=190)** And then back to the mini cube installation page.
>
> **[3:14](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=194)** I've selected the Windows option for operating system.
>
> **[3:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=198)** No choices in architecture.
>
> **[3:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=200)** We're sticking with stable as the release type.
>
> **[3:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=202)** And you've got three choices for the installer type, .EXE Windows Package manager, chocolatey.
>
> **[3:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=209)** I'm going to go with Windows Package manager.
>
> **[3:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=212)** Going to copy that command and head back to PowerShell and run that command.
>
> **[3:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=220)** Select that one.
>
> **[3:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=223)** All right, it's looking promising.
>
> **[3:45](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=225)** Yes, I agree to all the source agreement terms.
>
> **[3:50](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=230)** Looks like it's found the mini cube binaries to download.
>
> **[3:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=235)** We're going to say yes.
>
> **[3:58](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=238)** All right, it says successfully installed.
>
> **[4:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=241)** Let's check by running the command mini cube.
>
> **[4:05](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=245)** All right, I've got an error and so let's try running PowerShell as an administrator, see if that works.
>
> **[4:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=255)** Yes, all right.
>
> **[4:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=258)** And if I type in minicube and hit enter, great.
>
> **[4:24](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=264)** Looks like Minicube is up and running.
>
> **[4:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=268)** Okay, so I've shown you the way to install Minicube on Linux and Windows.
>
> **[4:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=274)** And finally I will show you how to do it on Mac OS.
>
> **[4:38](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=278)** So let's switch over to the Mac OS operating system.
>
> **[4:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=282)** Like Linux, I need to know my CPU architecture and we can run the same command.
>
> **[4:48](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=288)** Uname-P, I am running an ARM CPU.
>
> **[4:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=295)** So back to the installation page, switch over to that.
>
> **[5:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=301)** I'm going to stick with stable.
>
> **[5:03](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=303)** And for the installer type, we have the binary download.
>
> **[5:07](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=307)** And Homebrew, I love Homebrew, so I'm going to copy that command and run that, brew install mini cube.
>
> **[5:19](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=319)** It's looking promising.
>
> **[5:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=322)** Okay, and just like with the other operating systems, we're going to try running mini cube.
>
> **[5:31](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=331)** Okay, that is the sign that is installed.
>
> **[5:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=335)** So now that all three operating systems have mini cube installed, your next objective is to get a mini cube cluster up and running.
>
> **[5:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=343)** Here's how, you're going to run the command mini cube start.
>
> **[5:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=347)** And we want to name our cluster mini cube calls, names, profiles.
>
> **[5:53](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=353)** So dash P is how we specify the profile name.
>
> **[5:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=356)** And we're going to call ours demo.
>
> **[6:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=360)** I love the emojis that are at the beginning of every line.
>
> **[6:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=364)** So minicube is pulling Docker images down and creating containers that are going to be our Kubernetes cluster running on our computer.
>
> **[6:14](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=374)** This can take a few minutes, no problem.
>
> **[6:17](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=377)** All right, looks like it's done.
>
> **[6:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=380)** I want to verify that I've got a cluster.
>
> **[6:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=382)** So let's use cube control, get nodes, see what our node situation is.
>
> **[6:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=389)** We've got one node, it's called demo.
>
> **[6:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=392)** It's ready.
>
> **[6:33](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=393)** It's the control plane node.
>
> **[6:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=395)** That is what we want.
>
> **[6:37](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=397)** And let me look at all pods, cube control, get pods, dash capital A.
>
> **[6:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=403)** Got all of our pods up and running.
>
> **[6:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=406)** All right, great work.
>
> **[6:48](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=408)** You've installed and started Mini cube on your computer.
>
> **[6:51](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=411)** And in the next video I'm going to show you how to change mini cube's default CNI, to a more robust one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (6), [[Windows]] (6), [[Kubernetes]] (3), [[Powershell]] (3), [[Microservices]] (1)
> **CLI Commands:** docker (7), node (3), find (2), make (2), brew (1)
> **Env Vars:** cpu (3), arm (2), x86 (1), rpm (1), exe (1)
> **Prerequisites:** install (6)
> **Tools:** powershell (3), command line (2)
> **Cross-References:** in the last (1), go back to (1), in the next (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Analogies:** just like (1)

#### [Install Calico](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=0)** - [Lecturer] In the last video, you installed and started a minikube cluster on your computer.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=6)** In this video, you'll install the Calico CNI to experience how CNIs are modular and pluggable.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=14)** Minikube's default CNI plugin is called Kindnet.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=18)** Kindnet was created to be one of the simplest [[Kubernetes]] CNIs and its only capability is to assign IP addresses to the pods in your cluster.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=28)** Kindnet is the default CNI for minikube and Kind, both tools that allow you to run a cluster on your computer.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=35)** Because Kindnet was designed to be a simple CNI plugin, it does not support network policies, a way to control traffic flow to your applications at the IP address or port level.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=47)** We're going to explore network policies later in the course, so I want you to have experience installing a different CNI solution than what comes by default.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=58)** Minikube allows users to replace Kindnet with Calico, Cilium, or Flannel, and we're going to install Calico.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=65)** The Calico CNI plugin is a popular open source project that provides container networking, [[Network Security]], and monitoring features for your network.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=75)** Calico's mascot is this cute Calico cat.
>
> **[1:19](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=79)** There are a few ways to install Calico in minikube, through manifests, using a custom operator, or by enabling minikube's built-in version of Calico.
>
> **[1:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=89)** Of all these versions, the built-in version uses the fewest compute resources, so you will use that one.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=97)** In order to install Calico, you will delete your original cluster and create a new cluster and install Calico using a couple of flags.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=107)** First, let's delete your cluster.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=110)** Run the command minikube delete -p demo.
>
> **[1:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=116)** Once your cluster is deleted, run the command minikube start --network-plugin=cni --cni=calico -p demo.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=140)** Once your new cluster is complete, verify that Calico is working.
>
> **[2:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=145)** Let's find some Calico pods by running the command kubectrl get pods -A for all namespaces.
>
> **[2:33](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=153)** You see, I've got a calico-kube-controllers pod as well as a calico-node pod, and once those two pods are running, the installation of Calico is complete.
>
> **[2:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=163)** It may take a minute or two for these pods to get up and running.
>
> **[2:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=167)** So if you check once and they're not ready, wait a little bit and then check again.
>
> **[2:52](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=172)** The networking layer of Kubernetes was designed to be able to use lots of different kinds of CNI plugins, and in this video, you switched minikube's default CNI, Kindnet, with a more complex CNI, Calico.
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=187)** We'll explore network policies later, but next up, I'll show you how to deploy the example [[Microservices]] in your cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2), [[Network Security]] (1), [[Microservices]] (1)
> **Env Vars:** cni (9)
> **Prerequisites:** install (5)
> **CLI Commands:** cat (1), find (1), node (1)
> **Cross-References:** in the last (1), later in (1)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [lecturer] (1)

#### [Deploy the backend microservices](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=0)** - [Instructor] In the last few videos, you installed and started a mini cube cluster with Calico as your CNI.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=7)** In this video, you'll deploy two backend services to your cluster.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=13)** Take a look at the 0203 directory.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=18)** There you'll see two YAML files, one called Learning Resources, API, and another called Echo Server.
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=24)** Let's look first at the learning resources API.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=28)** All right, well the first file that we have here is a deployment, called Learning Resources.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=36)** It's going to have three replicas running.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=38)** So three pods, got some environment variables that we're setting, and then if we keep scrolling down, we see the service definition.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=47)** So the service will be called Learning Service and it will be a cluster IP service.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=53)** And we'll talk more about that in a bit.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=56)** Now take a look at EchoServer.yaml, similar layout.
>
> **[1:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=60)** This is a deployment called Echo Server.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=64)** We will be running two replicas.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=66)** I got some of the information about the image it's going to pull.
>
> **[1:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=70)** And here at the service definition, the service will be called Echo Service, and this is going to be a node port type service.
>
> **[1:19](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=79)** All right, let's go ahead and create these resources.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=83)** Let's create the Learning Resources API first.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=86)** Run the command, cubecontrolapply-FlearningresourcesAPI.Yaml and [[Kubernetes]] is telling us that the learning resources deployment and service was created.
>
> **[1:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=99)** And let's do the same for the Echo server.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=102)** CubeControlapply-Fechoserver.yaml, I'm getting a similar message.
>
> **[1:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=109)** Let's take a look at the pods.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=111)** Cube control get pods.
>
> **[1:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=114)** And these two things are in the default namespace, so no need to specify a namespace.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=119)** Beautiful.
>
> **[2:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=120)** We have two echo server pods running and three learning resources pods running.
>
> **[2:05](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=125)** And the final thing that we're going to do is take a look at the services, run the command cube control, get service.
>
> **[2:14](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=134)** SBC is the short name.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=137)** All right, we have three services running in the default namespace.
>
> **[2:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=141)** We have the Echo service, Kubernetes service.
>
> **[2:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=145)** That gets created by default when you generate your cluster and the learning service that we made.
>
> **[2:31](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=151)** In the next chapter, I'll show you what each backend service does, but in this video you deployed two backend services in your cluster and in the next video, you'll deploy one front end service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2)
> **Env Vars:** api (3), cni (1), yaml (1), sbc (1)
> **File Paths:** echoserver.yaml (1), cubecontrolapply-flearningresourcesapi.yaml (1), cubecontrolapply-fechoserver.yaml (1)
> **Cross-References:** in the next (2), in the last (1)
> **Definitions:** is a  (2)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### [Deploy the frontend microservice](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=0)** - [Instructor] In the last video, you deployed two backend services, and in this video, I'll show you how to deploy the frontend service.
>
> **[0:09](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=9)** Take a look at the 02_04 directory.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=13)** There, you'll see the frontend-ui.yaml file.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=18)** Let's take a look.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=20)** All right, we've got a few [[Kubernetes]] objects in here, and they're separated by these three horizontal lines.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=27)** The first thing we're going to create when we run this file is a namespace called frontend.
>
> **[0:33](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=33)** The next thing that's going to be created is this deployment.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=36)** It is called frontend and frontend-ui.
>
> **[0:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=40)** We're going to be running three replicas of the frontend, and there's the information about the containers.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=47)** Looks like we're setting a environment variable.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=51)** And then finally, we are going to create a service called the frontend-service, and it's a type, LoadBalancer.
>
> **[1:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=60)** That's a new type of service for us.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=63)** Let's create this deployment and service.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=66)** Run the command, kubectl apply -f frontend-ui.yaml.
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=73)** All right, it says those three things were created.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=76)** Let's check the pods.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=78)** kubectl get pods, huh?
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=83)** These are the echo server and learning resources, oh yeah.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=87)** We created the frontend service in the frontend namespace.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=90)** So let's update our command to use that, So kubectl -n for namespace, frontend, and then get pods.
>
> **[1:38](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=98)** All right, there are our three replicas of the frontend pods.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=102)** They are all running.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=104)** Let's check the services.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=107)** Just one service.
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=108)** In the frontend namespace, we have the frontend-service.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=111)** It's a type LoadBalancer, and got a little bit more information there that we'll cover in the next chapter.
>
> **[1:58](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=118)** Okay, it's time for a little celebration because your learning environment is now ready to go.
>
> **[2:05](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=125)** In this chapter, you installed minikube, you created a cluster and changed the CNI from Kindnet to Calico, and now you've got three [[Microservices]] deployed and running in that cluster.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=137)** In the next chapter, I'll help you delve into the details of how Kubernetes uses different service types to allow pods to communicate with one another.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2), [[Microservices]] (1)
> **CLI Commands:** kubectl (3)
> **Cross-References:** in the next (2), in the last (1)
> **File Paths:** frontend-ui.yaml (2)
> **Definitions:** is a  (1), is called (1)
> **Env Vars:** cni (1)
> **Speakers:** - [instructor] (1)


### 3. Service Discovery in Kubernetes

[↑ Back to Table of Contents](#table-of-contents)

#### [An overview of Kubernetes services](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=0)** - [Instructor] In the last chapter, you got your learning environment up and running.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=4)** In this chapter, I'll walk you through the finer details of how to understand [[Kubernetes]] service types.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=11)** The Kubernetes service API is incredibly powerful because it can create a service that has a stable IP address and name.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=20)** And when a request is sent to those things, it load balances traffic to pods whose IP addresses are ever changing.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=28)** That means instead of trying to keep track of pod IP addresses, which change frequently because pods are terminated and restarted, you can use the service IP address or name to ask for data.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=42)** Let's look at an example.
>
> **[0:44](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=44)** This is the YAML manifest for your frontend UI deployment and service.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=50)** And that microservice, in order to have anything to show you that's interesting, it has to make a request to the learning resources API in order to gather data.
>
> **[1:02](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=62)** So, in this example, I've hardcoded the IP address of a pod and the port number in order for that application to make the request.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=74)** But if I do that, I'm constantly going to have to be changing the IP address as the pod changes, and I can't keep up with that.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=83)** Instead, what I'm going to want to do is use the DNS name of a service or an IP name of a service.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=90)** In this example, I'm using the DNS name of the learning service.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=94)** And so, now when my frontend containers spin up and they start making requests to the learning resource's backend, I'm just sending that to the service, which is load balancing to the pods, instead of trying to communicate with the pods directly.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=111)** With that example in mind, let's get into the different kinds of services.
>
> **[1:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=116)** The first is a ClusterIP service, let's take a look.
>
> **[2:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=121)** Here's an example of YAML manifest of a ClusterIP service, and it should look familiar because it's the service that's running your learning resources pod.
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=131)** So, in this manifest, we're specifying the Kubernetes object type is Service.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=137)** We're giving a name to the service itself, so learning-service.
>
> **[2:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=141)** And then this is the most important part, this spec selector.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=146)** So, what this means is that whatever is listed under the selectors, here we have APP and then learning-resources, any pods with those label are going to be affiliated with the learning service resource.
>
> **[2:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=160)** So, you've got to be very intentional when you're doing that.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=162)** But all the learning resource API pods will be behind the service.
>
> **[2:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=167)** For ports, we're specifying that the learning service port is 80, which is the default, we don't have to worry about it.
>
> **[2:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=174)** And when traffic hits the service IP address, it will route traffic to port 3000 in the container.
>
> **[3:02](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=182)** And finally, we're saying this is the type ClusterIP.
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=187)** The ClusterIP type creates a service with a fixed IP address that is only available within the cluster, meaning no traffic from outside the cluster can reach the service, but any traffic from within your cluster can.
>
> **[3:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=201)** In Kubernetes, if you don't specify the service type in your manifest, a cluster IP is what you'll get.
>
> **[3:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=209)** The next type of service is NodePort.
>
> **[3:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=212)** A NodePort service lets you expose a group of pods directly to the internet.
>
> **[3:37](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=217)** Let's take a look at this YAML manifest.
>
> **[3:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=220)** Once again, we're going to be creating a Kubernetes service.
>
> **[3:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=223)** Its name will be echo-service, and we have this selector here.
>
> **[3:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=229)** And so, any pods that have the label app: echo-server will receive traffic from this service.
>
> **[3:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=236)** Now getting specifically into what a NodePort service does, so a NodePort service uses the IP address of your Kubernetes nodes, and then you give it a node port.
>
> **[4:07](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=247)** And so, anyone who knows the IP address for your Kubernetes node and this port can send a request there.
>
> **[4:14](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=254)** That request will be accepted by the service and load balanced to, in this case, the echo-server pod.
>
> **[4:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=260)** So, in this manifest, I have specified that the NodePort is 30076, but if you don't specify that, Kubernetes will allocate a port between 30000 and 32767.
>
> **[4:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=276)** A NodePort service is a good option if you want to use your own external load balancer.
>
> **[4:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=282)** But because this service opens these pods to traffic from the internet, it has some really serious security implications, so think through that if you're going to use this.
>
> **[4:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=294)** The next kind of service is the LoadBalancer type.
>
> **[4:58](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=298)** Let's take a look at this YAML file.
>
> **[5:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=300)** Once again, we have the kind service, the name of the service is frontend, and the pods that the service is going to direct traffic to are any with the label app: frontend-ui, and we've got the type LoadBalancer down here.
>
> **[5:16](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=316)** So, the LoadBalancer service is really cool because it's one of the quickest ways to get your application available on the internet.
>
> **[5:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=325)** If you're running Kubernetes with a cloud service like AWS, [[Google Cloud Platform (GCP)|Google Cloud]], or [[Microsoft Azure|Azure]], creating a LoadBalancer service will trigger the creation of one of those load balancers that's going to generate a public IP address.
>
> **[5:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=340)** Any traffic sent to that IP address will then be routed into the cluster and load balanced across pods.
>
> **[5:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=349)** Finally, there's the ExternalName service.
>
> **[5:52](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=352)** ExternalName services are interesting because instead of load balancing traffic to pods inside a cluster, what the ExternalName service does is it sends traffic to a DNS name that's generally outside of your cluster.
>
> **[6:08](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=368)** This is useful because if some parts of your applications rely on [[Databases]] or other [[Microservices]] that are not inside your Kubernetes cluster, you can still send traffic there.
>
> **[6:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=382)** So, in this example, we have a service that is called the database-service.
>
> **[6:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=388)** It lives in the prod name space.
>
> **[6:31](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=391)** And when traffic is sent to that service, it is going to redirect that traffic to this DNS name, my.[[PostgreSQL|postgres]].[database.com](https://database.com).
>
> **[6:41](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=401)** It's this spec external name where you specify the DNS name where that traffic is going to go.
>
> **[6:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=409)** Knowing about these service types is the most important part of this course, so let's review.
>
> **[6:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=416)** A ClusterIP service creates a service with a stable IP address that is only available within your Kubernetes cluster.
>
> **[7:05](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=425)** A NodePort service opens a port on one or more of your Kubernetes nodes.
>
> **[7:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=431)** And when traffic is sent to that node IP address and port number, it is then routed to the group of pods behind that service.
>
> **[7:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=440)** A LoadBalancer service works with your cloud provider to create one of their load balancers with an IP address.
>
> **[7:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=448)** And an ExternalName service does not use pod selectors like all those other services.
>
> **[7:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=454)** Instead, what it does is it sends traffic it receives to an IP address or DNS name that is outside of your Kubernetes cluster.
>
> **[7:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=463)** All right, that's a lot of information, and it's okay if you're feeling overwhelmed because in the next few videos I'll slow down and show you how these services work by examining the microservices that you already deployed in your cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (13), [[Microservices]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Microsoft Azure|Azure]] (1), [[Databases]] (1)
> **Env Vars:** dns (6), yaml (4), api (3), app (1), aws (1)
> **CLI Commands:** node (3), make (2), aws (1)
> **Definitions:** is a  (2), is called (1)
> **Cross-References:** in the last (1), in the next (1)
> **Documentation:** spec (2)
> **URLs:** [database.com](https://database.com) (1)
> **Ports:** port 3000 (1)

#### [Examine a ClusterIP service](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=0)** - [Narrator] So far in this course, you've learned about the history of application deployments, you've spun up a cluster locally on your computer, you've deployed some [[Microservices]], and you've learned about the different kinds of service types in [[Kubernetes]].
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=15)** Now, it's finally time for you to get some hands-on experience with the magic of Kubernetes internal networking.
>
> **[0:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=23)** And the way that we're going to do that is by making an HTTP request to a cluster IP service.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=29)** Let's go.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=32)** The goal of this video is that you are able to make an HTTP get request to the Learning Resources Service and see its [[JSON]] payload.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=43)** Remember, cluster IP addresses can only be accessed from within a cluster.
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=49)** And I also want to remind you that the Learning Service container is listening on Port 3,000.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=56)** So in order to make an HTTP request inside of our Kubernetes cluster, we're going to have to somehow have an HTTP request service running from within the cluster.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=69)** And the way that we're going to do that is with a tool called BusyBox.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=75)** So here's the spec for our BusyBox pod.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=78)** BusyBox is known as the Swiss Army Knife of Embedded [[Linux]], and it's a binary that contains a lot of well-known Unix tools like ack, date, whoamI, and the one we're using today, Wget.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=92)** It's a great tool for debugging and troubleshooting issues in a Linux environment.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=97)** And since Kubernetes runs on Linux, it works well for that.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=101)** So what we're going to do is we're going to create this BusyBox pod, run the command kubectrl-f BusyBox.yaml.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=113)** Let's find the pod in our list of pods, kubectrl get pods.
>
> **[1:58](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=118)** All right. This is in the default namespace.
>
> **[2:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=121)** It's at the top of the list.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=123)** And so now that this pod is running, we somehow have to get into that pod.
>
> **[2:08](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=128)** And the way that we do that is through the kubectrl exec command.
>
> **[2:13](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=133)** Here's how you structure that command.
>
> **[2:16](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=136)** You say kubectrl exec, you pass the flag IT, which stands for Interactive Terminal.
>
> **[2:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=142)** You want to be able to get into this container and run commands from within it.
>
> **[2:27](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=147)** And then you say the name of the pod you want to exec into.
>
> **[2:31](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=151)** So in our case that is BusyBox.
>
> **[2:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=155)** And then you do two dashes and you say, what's the shell going to be or what's the command?
>
> **[2:41](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=161)** We're going to hopefully land on a command prompt.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=165)** So when I press enter, you see I am no longer at the command prompt where I have the cloud and [[LinkedIn]] in the name of the repository we're working in because now we're in the BusyBox pod.
>
> **[2:57](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=177)** Cool.
>
> **[3:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=180)** All right, so our first goal is we just want to see how the learning resources API works by making a get request to a pod.
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=191)** All right, so we need to find the IP address of our pods.
>
> **[3:17](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=197)** Since I'm running BusyBox and I have the BusyBox command prompt in this part of my terminal, I want to have another tab in my terminal where I can run kubectrl commands.
>
> **[3:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=209)** All right, so got a different tab open and I'm looking for IP addresses of the learning resources pods.
>
> **[3:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=216)** So let's do kubectrl get pods. That's the default namespace.
>
> **[3:41](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=221)** Don't need to specify that.
>
> **[3:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=223)** In order to see the IP address of the pods, you have to ask for the wide output, which is -O, which stands for output wide.
>
> **[3:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=235)** All right, I have my BusyBox pods, my Echo server pods, and I've got the Learning Resources pods.
>
> **[4:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=241)** And I'm just going to make a request to one of these.
>
> **[4:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=244)** And so I'm going to grab this IP address.
>
> **[4:08](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=248)** The IP address you have on your machine may be different.
>
> **[4:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=251)** Copy and paste that one.
>
> **[4:14](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=254)** All right, going back to our tab that's running BusyBox, our goal is to make a get request to the pod.
>
> **[4:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=261)** And so we're going to use the tool Wget.
>
> **[4:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=265)** And if you just use Wget and you don't pass in any flags, it will download whatever response it gets as an index.[[HTML]] file.
>
> **[4:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=275)** That can be annoying when you are making multiple get requests 'cause you have to delete it.
>
> **[4:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=279)** So we're going to use -O- and then paste the pod IP.
>
> **[4:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=287)** All right, so I pasted that. It says connection refused.
>
> **[4:52](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=292)** Oh, yeah, let's look back.
>
> **[4:53](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=293)** Since we're talking directly with the container, we have to specify the port number.
>
> **[4:59](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=299)** And so we're going to say the IP address and Port 3,000.
>
> **[5:03](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=303)** So let's try that request again, but put 3,000 at the end.
>
> **[5:09](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=309)** All right, look at that. It worked.
>
> **[5:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=312)** This is a ton of text, but when we scroll up, we see this is a JSON payload, and it is intermediate level Kubernetes Learning Resources.
>
> **[5:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=323)** And there is a list of learning resources for you here.
>
> **[5:27](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=327)** Outstanding.
>
> **[5:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=329)** All right, so we made that request to a single pod, but we've learned that we don't do that, because pods get destroyed and recreated a lot in Kubernetes.
>
> **[5:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=340)** And so what we're going to do now is we're actually going to make that request to the service itself.
>
> **[5:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=346)** So let me clear out the BusyBox terminal and let's go back to our tab over here.
>
> **[5:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=354)** And so I need to find my service info.
>
> **[5:58](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=358)** So let's do kubectrl get service, and see what we can see.
>
> **[6:05](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=365)** All right, so we've got the Echo service, the Kubernetes service, and the Learning Service.
>
> **[6:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=371)** That's the service that routes any traffic it receives to the Learning Resources pods.
>
> **[6:17](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=377)** So let's do that one.
>
> **[6:19](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=379)** Now you can just do the cluster IP of the service, but let's actually just do the service name and see how that works.
>
> **[6:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=388)** So back to the BusyBox tab, running a get request.
>
> **[6:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=392)** So we're going to say Wget -0- and it is called Learning Service.
>
> **[6:41](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=401)** Oh, my. Isn't that cool?
>
> **[6:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=403)** I didn't have to give Kubernetes a specific IP address.
>
> **[6:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=407)** It resolved that and it gave me that JSON payload I was expecting.
>
> **[6:52](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=412)** Beautiful. And then I want to show you one final way.
>
> **[6:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=416)** And it is the service DNS name.
>
> **[7:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=420)** And so we want to make a Wget request.
>
> **[7:02](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=422)** So Wget -0-, and here's how you put together a Kubernetes objects service name.
>
> **[7:13](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=433)** You start with HTTP, and then you say the name of the object.
>
> **[7:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=438)** So for us, that is Learning Service.
>
> **[7:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=441)** And then you use a dot, and you say the namespace where that thing lives.
>
> **[7:26](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=446)** For us, the Learning Service is in the default namespace, and then a dot.
>
> **[7:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=452)** And Kubernetes now knows, hey, I'm looking for something called Learning Service in the default namespace, but what kind of Kubernetes object is it?
>
> **[7:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=460)** In our case, it's a service and we use the short name SVC.
>
> **[7:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=466)** Last thing you have to specify is where's the cluster?
>
> **[7:50](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=470)** So the cluster and then .local.
>
> **[7:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=474)** All right, there it is. That is beautiful.
>
> **[7:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=476)** Let's scroll up and find that Wget request. Excellent.
>
> **[8:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=481)** So we see we make the request to the DNS name.
>
> **[8:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=484)** Kubernetes connects with that name, and it resolves to the IP address of the service.
>
> **[8:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=490)** So you don't even need to worry about knowing the IP address of your services.
>
> **[8:14](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=494)** You just need to know their name, and if you want to create the DNS name request, the pattern in which those requests are built.
>
> **[8:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=502)** All right, that was a lot of information, but in this video, you learned how to leverage the Kubernetes Service Discovery feature with a cluster IP service.
>
> **[8:33](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=513)** We first made a request to a specific pod IP address, and we saw the JSON payload, but we don't want to do that because pods spin up and spin down all the time in Kubernetes.
>
> **[8:45](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=525)** Next thing we did is we made a request to just the service name.
>
> **[8:48](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=528)** And then the last thing we did is most exciting, is we made a request to the Cluster IP Service DNS name.
>
> **[8:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=535)** In the next video, I'll show you how to go through this process with a node port service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (14), [[JSON]] (4), [[Linux]] (3), [[Microservices]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (7), wget (7), find (4), node (1)
> **Env Vars:** http (5), json (4), dns (4), api (1), html (1)
> **Tools:** terminal (4), command prompt (3)
> **Definitions:** is a  (3), stands for (2), known as (1), is called (1)
> **File Paths:** busybox.yaml (1), index.html (1)
> **Ports:** port 3 (2)
> **Cross-References:** go back to (1), in the next (1)

#### [Examine a NodePort service](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=0)** - [Instructor] In the last video, you accessed a ClusterIP service, and in this video, I'll show you how to access data through a NodePort service.
>
> **[0:09](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=9)** Remember, the NodePort service lets you expose a group of pods to the internet directly.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=15)** When you create a NodePort service, [[Kubernetes]] opens a port on one or more of your nodes and it allows traffic in at a specific port number.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=27)** I'm going to show you how this works and we are going to be exploring the echo-service.
>
> **[0:33](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=33)** So like the learning-service, the echo-service is deployed in the default namespace.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=39)** Unlike the learning-service, it is a NodePort type service and its port is 80, which is the default port.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=46)** So if you're making a request to the container directly, you don't have to specify the port.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=51)** Like we did with the ClusterIP service, let's get the data from the echo-service containers.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=58)** We'll start by making a request to the pod IP address.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=61)** Then we will see how NodePorts work and we'll make a request directly to an IP address of one of our nodes and then the service name.
>
> **[1:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=71)** In order to make a request inside the cluster, we're going to use our BusyBox pod again.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=77)** My BusyBox pod is still running and I'm going to exec into it, kubectl exec -it busybox -- sh.
>
> **[1:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=89)** Excellent. All right, so I still have two tabs open.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=92)** And the first goal is to make a request to the echo-server's pod IP address.
>
> **[1:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=99)** So let's do kubectl get pods -o wide again.
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=105)** All right, so I have two echo-server pods.
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=108)** They have an IP address that ends in, for me, 134, 135.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=113)** Yours will probably be different.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=115)** Copy one of those addresses.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=119)** And let's go back to inside our BusyBox pod, wget request.
>
> **[2:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=124)** So wget -O-, and I'm going to paste that IP address.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=132)** All right, so this is the [[JSON]] payload, you can expect with the echo-server.
>
> **[2:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=138)** It just echoes back information that was passed in through the GET request that you made.
>
> **[2:24](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=144)** So this looks great. Let's clear that out.
>
> **[2:27](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=147)** So we've made a request to the pod IP.
>
> **[2:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=152)** Remember that's not a good practice, because those change so frequently.
>
> **[2:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=156)** So let's make a request to the IP address of the service itself, so this is kind of cool.
>
> **[2:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=163)** So you need to find the IP address of your Kubernetes nodes, kubectl get nodes -o wide.
>
> **[2:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=174)** Now the minikube cluster that we have spun up, it only has one node on it.
>
> **[2:59](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=179)** So what we're going to do is we're going to get the IP address of the node itself, and let's go back and just make a wget request to the node and see what happens, so wget -O-.
>
> **[3:16](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=196)** Hmm, it says cannot connect to the remote host.
>
> **[3:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=200)** I must be missing something.
>
> **[3:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=201)** So let's look at the YAML manifest for this.
>
> **[3:27](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=207)** All right, here we are at the echo-server.yaml.
>
> **[3:30](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=210)** And if we scroll down to the service definition, oh yeah, that's right, we have to specify a NodePort or Kubernetes will give us a NodePort.
>
> **[3:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=220)** So when we make a GET request to the node IP address, we also have to specify the node.
>
> **[3:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=226)** This one is 30076.
>
> **[3:50](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=230)** So just an Up Arrow to get that node IP address.
>
> **[3:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=235)** And we're going to put 30076 at the end. Hey, look at that.
>
> **[4:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=240)** So we made a GET request to a Kubernetes node with that NodePort on it, and we're getting the output we expect, beautiful.
>
> **[4:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=250)** And then the last request we're going to make is to the service name itself.
>
> **[4:16](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=256)** So run the command, kubectl get svc, service.
>
> **[4:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=262)** Oh yeah, just a reminder that the service is called echo-service and we'll do wget -O- echo-service.
>
> **[4:33](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=273)** That gives us what we want.
>
> **[4:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=274)** Let's see if we can do the DNS name.
>
> **[4:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=276)** It takes a little bit of practice to memorize that pattern.
>
> **[4:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=279)** So wget -O- http://, okay.
>
> **[4:44](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=284)** And so we start with the name of the object.
>
> **[4:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=286)** So for us, that was echo-service.
>
> **[4:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=289)** And then you say the namespace of that object that lives in default namespace.
>
> **[4:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=295)** And then you say the kind of Kubernetes object, that it is a service.
>
> **[4:59](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=299)** And then cluster.local.
>
> **[5:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=301)** All right, there it is. Beautiful.
>
> **[5:05](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=305)** In this video, you learned how to access pods behind NodePort service.
>
> **[5:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=310)** In the next video, I'll talk you through the features of a LoadBalancer service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (5), [[JSON]] (1)
> **CLI Commands:** make (7), node (7), wget (6), kubectl (4), find (1)
> **API Endpoints:** get  (3)
> **Env Vars:** json (1), yaml (1), dns (1)
> **Cross-References:** in the last (1), go back to (1), in the next (1)
> **Definitions:** is a  (2), is called (1)
> **File Paths:** echo-server.yaml (1)
> **UI Navigation:** scroll down (1)

#### [Examine a LoadBalancer service](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=0)** - [Instructor] You've deployed and queried a cluster IP and node port, and now I'll show you the load balancer service.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=8)** We'll be working with this file called frontend-ui.yaml.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=13)** I'm going to talk you through this.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=16)** When we apply this file, we're going to create a new namespace called frontend.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=21)** Then you will create a deployment that will spin up three pods called the frontend-ui, and they'll be pulling from this image.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=32)** This is what we talked about a little bit earlier.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=35)** You'll see this is the DNS name of the learning service.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=39)** And then finally, and most importantly, the service.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=43)** The service is called frontend-service.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=45)** It lives in the frontend namespace.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=47)** It's fronting pods that have the label app, frontend-ui, and it is a type LoadBalancer.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=54)** Let's apply this and see what happens.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=58)** Run the command kubectl apply -f frontend-ui.yaml All right, it says namespace, deployment, and service was created.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=69)** Let's look at the service in this namespace.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=72)** So kubectl gets service from the namespace frontend.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=78)** All right, this looks good. The name is frontend-service.
>
> **[1:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=81)** It's a type LoadBalancer.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=83)** It has a cluster IP, but you see this column, it says external IP and then pending.
>
> **[1:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=89)** Remember, if you're running [[Kubernetes]] with a cloud service like AWS [[Google Cloud Platform (GCP)|Google Cloud]] or [[Microsoft Azure|Azure]], creating a load balancer service will trigger one of the cloud's load balancers to be created.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=102)** That will then generate a public IP address.
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=105)** And when traffic is sent to that address, it will go into the cluster to the service and then to the pods.
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=112)** Because we're running our cluster on Minikube, right now there's no external IP, but we can still query this service using its simple name and DNS name.
>
> **[2:05](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=125)** One thing we need to do is spin up another busybox-pod that lives in the frontend namespace.
>
> **[2:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=130)** So if you look at busybox-iu.yaml, we have a single pod we'll spin up called busybox-ui.
>
> **[2:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=138)** It is just like the other busy box pod, just in a different name space.
>
> **[2:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=142)** So let's create that with kubectl apply -f, busybox-ui.yaml.
>
> **[2:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=152)** All right, time to exec into that.
>
> **[2:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=154)** Kubectl, now this is new, we're going to put the namespace up front, -n frontend, and then exec -it busybox-ui -- sh.
>
> **[2:50](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=170)** All right, we have exec'd into the busybox-pod.
>
> **[2:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=175)** Let's give ourselves some space here.
>
> **[2:57](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=177)** And first thing we're going to do is see if we can get the data from those pods by querying the service name.
>
> **[3:05](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=185)** Run the command wget -O, and the service name was frontend-service.
>
> **[3:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=195)** Okay, let's take a look at this.
>
> **[3:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=198)** There's a lot of stuff in here, but you see these angle tags?
>
> **[3:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=203)** We have an anchor tag, h3, so this is [[HTML]]. Beautiful.
>
> **[3:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=209)** Let's then query the DNS name, wget HTTP,
>
> **[3:38](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=218)** so we start with the service name, frontend-service in the namespace frontend.
>
> **[3:48](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=228)** And then this is an object type service, and then cluster.local.
>
> **[3:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=235)** All right, getting the same output there. Beautiful.
>
> **[3:59](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=239)** So let's exit out of this.
>
> **[4:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=241)** Let's look at the service details one more time, kubectl, get services from the namespace frontend.
>
> **[4:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=250)** All right, so if we had set up a proper LoadBalancer service, we'd have an external IP here.
>
> **[4:19](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=259)** That'll happen automatically if you're using the cloud.
>
> **[4:21](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=261)** There is a way that you can do it with Minikube.
>
> **[4:24](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=264)** And I'm not going to show you here, but I do want to show you where to look for that.
>
> **[4:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=269)** You'll go to the Minikube docs, accessing apps, and then scroll down until you see LoadBalancer access.
>
> **[4:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=280)** If you'd like to try generating an external IP from this Minikube cluster for this service, follow these instructions here.
>
> **[4:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=289)** One final thing, I have left you a little gift.
>
> **[4:53](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=293)** And so I mentioned earlier that the frontend pods get data from the learning resource pods.
>
> **[5:03](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=303)** And when put together they are a webpage, and this is just a little something fun for you to look at.
>
> **[5:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=310)** And so what I want to do is I want to port forward one of those pods and then open it with the browser to see what does that webpage look like.
>
> **[5:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=318)** And I'll give you instructions for how to do that.
>
> **[5:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=320)** First thing is you are going to get your pod names in the frontend namespace, kubectl, get pods, dash namespace frontend.
>
> **[5:33](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=333)** All right, copy one of those pods.
>
> **[5:37](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=337)** And we're going to port forward this pod so we can open up the webpage in a browser, kubectl port-forward, the pod name.
>
> **[5:50](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=350)** We're going to pick a random port name, but this second one is most important.
>
> **[5:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=355)** It's the actual container port, so that's 4173, namespace frontend.
>
> **[6:03](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=363)** Okay, I spelled port-forward wrong, so let me try that again.
>
> **[6:07](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=367)** I did mean port-forward. All right, beautiful.
>
> **[6:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=370)** It says it is running on port 4173 locally.
>
> **[6:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=375)** So head back to the browser and you're going to type in the address localhost:4173.
>
> **[6:26](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=386)** All right, and this is the combination of the frontend app and the backend app, and we're making that request through a Kubernetes DNS name, which is really cool.
>
> **[6:38](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=398)** These are some learning resources that I recommend if you're interested in Kubernetes networking.
>
> **[6:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=403)** Got some [[LinkedIn]] learning courses, some really good books, and then a couple of talks from KubeCon, and of course, TechWorld with Nana.
>
> **[6:52](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=412)** All right, we're going to stop this process with Control + C and we are at the end, beautiful.
>
> **[7:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=420)** In this video, you'll learned about how a load balancer service works, and you got to see our little gift to you, which is the Kubernetes Learning Resources page.
>
> **[7:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=431)** In the next video, you'll see the requirements for your hands-on challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (4), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Microsoft Azure|Azure]] (1), [[HTML]] (1), [[LinkedIn]] (1)
> **CLI Commands:** kubectl (7), wget (2), node (1), aws (1)
> **Env Vars:** dns (4), aws (1), html (1), http (1)
> **File Paths:** frontend-ui.yaml (2), busybox-iu.yaml (1), busybox-ui.yaml (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Ports:** port 4173 (1), :4173 (1)
> **Cross-References:** we talked about (1), in the next (1)
> **UI Navigation:** go to (1), scroll down (1)

#### [Challenge: Deploy and test a new microservice](https://www.linkedin.com/learning/kubernetes-microservices-23787657/challenge-deploy-and-test-a-new-microservice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/challenge-deploy-and-test-a-new-microservice?u=76281980&t=0)** - [Instructor] It is time for you to leverage what you've learned through a hands-on challenge.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/challenge-deploy-and-test-a-new-microservice?u=76281980&t=10)** In this challenge, you'll create a cluster IP service to front a set of nginx pods, then you'll verify that your service can be reached by making a get request from a busybox pod.
>
> **[0:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/challenge-deploy-and-test-a-new-microservice?u=76281980&t=23)** Here are the challenge requirements: one, update the challenge.yaml manifest to create a cluster IP service called nginx-service that sends traffic to the pods with the label app: nginx.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-microservices-23787657/challenge-deploy-and-test-a-new-microservice?u=76281980&t=38)** There are some comments left for you in the service definition to help you with that.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-microservices-23787657/challenge-deploy-and-test-a-new-microservice?u=76281980&t=45)** Two, deploy the deployment and service and three, from your busybox pod, make an HTTP request to the service using its service name and DNS name.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-microservices-23787657/challenge-deploy-and-test-a-new-microservice?u=76281980&t=58)** Good luck.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-microservices-23787657/challenge-deploy-and-test-a-new-microservice?u=76281980&t=59)** In the next video, I'll show you my solution to the challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** nginx (3), make (1)
> **Env Vars:** http (1), dns (1)
> **File Paths:** challenge.yaml (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Deploy and test a new microservice](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=0)** - [Presenter] You've attempted the challenge, and now I'll show you a solution to the problem.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=11)** In the challenge, you were tasked with creating a cluster IP service to front a set of Engine X pods.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=18)** Your requirements were to update the challenge.YAML manifest to create a clusterIP service called nginx-service that sends traffic to pods with the label app:nginx.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=30)** Let's take care of that first.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=32)** Alright, going to the YAML file, scrolling down.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=38)** All right, so we've got the Nginginx-service, that's all ready to go.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=42)** It says selector add pod label here.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=46)** Let's find the pod label in the deployment.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=51)** All right, so this is defining the pod set this deployment will create and under labels we see app:nginx, so that's the pod label app:nginx, and then it says add service type here.
>
> **[1:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=70)** We are going to make this a Cluster IP service and the capitalization matters in [[Kubernetes]].
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=78)** So make sure it's a capital C at the beginning and a capital I and a P at the end.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=84)** I'm going to save that file.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=86)** Let's go back to the requirements.
>
> **[1:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=89)** Okay, it says deploy the deployment and service.
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=93)** So I'm in the 0306 directory.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=96)** You probably did this from 0305.
>
> **[1:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=99)** I'm going to apply that file kubectl apply-f-solution.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=107)** It says namespace was created, the deployment was created and the nginx service was created.
>
> **[1:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=114)** And then the final requirement, it says from your busybox pod, make an HTTP request to the service using its service name and DNS name.
>
> **[2:06](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=126)** Okay, so I need to know the service name.
>
> **[2:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=130)** I am pretty sure that it's nginx service, but to double check, let's take a look at the services cube control, get services, and this is from the Namespace Challenge.
>
> **[2:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=143)** Alright, so I know the name of my service, I'll be able to figure out the DNS name.
>
> **[2:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=148)** And now I want to make a W get request from my BusyBox pod.
>
> **[2:31](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=151)** So I'm going to exec into that kubectl exec -it,
>
> **[2:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=160)** busybox--sh.
>
> **[2:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=163)** All right, so first thing is let's make a request to this service name, nginx service, Going to copy that and paste it.
>
> **[3:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=180)** Ooh, it says bad address nginx-service.
>
> **[3:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=184)** Oh yeah and I know why.
>
> **[3:06](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=186)** It's because our busybox pod is running in the default name space and the nginx service is running in the challenge name space, so it can't get to it right now.
>
> **[3:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=198)** Let's see if it works with the DNS name, wget-0 and DNS Name starts with HTTP, the name nginxservice, the name space, this is Challenge, the Kubernetes object type service cluster and local.
>
> **[3:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=220)** Hey, hey, there we go.
>
> **[3:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=222)** So this is the [[HTML]] that nginx, serves up by default.
>
> **[3:48](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=228)** So I know I was able to access the nginx-service using the DNS name.
>
> **[3:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=234)** Now, I did make this a little bit of a trick question.
>
> **[3:57](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=237)** So I asked you to make a request to the service using its service name and DNS name, and only one of those worked.
>
> **[4:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=244)** That was the DNS name.
>
> **[4:06](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=246)** And the reason for that is that the Busybox Pod is running in the default name space while the nginx pods are running in the challenge name space.
>
> **[4:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=255)** So hopefully that illustrated the beauty of using DNS service names for service discovery in Kubernetes.
>
> **[4:24](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=264)** All right, so that's how I would handle the solution.
>
> **[4:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=268)** If you got it first time, great job.
>
> **[4:31](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=271)** If you didn't get the first time, I would encourage you to go back and do it again.
>
> **[4:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=276)** More practice and practice the proper way will give you those skills that you'll be able to use.
>
> **[4:41](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=281)** So in this chapter, you learned about the four Kubernetes service types and you've completed the challenge.
>
> **[4:48](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=288)** In the next chapter, I'll cover more advanced Kubernetes networking topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (5), [[HTML]] (1)
> **CLI Commands:** nginx (12), make (7), kubectl (2), find (1), wget (1)
> **Env Vars:** dns (8), yaml (2), http (2), html (1)
> **Cross-References:** go back to (1), in the next (1)
> **File Paths:** challenge.yaml (1)
> **Code Identifiers:** clusterip (1)
> **Speakers:** - [presenter] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Advanced Topics

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding network policies](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=0)** - [Presenter] In the last chapter, you got hands-on experience deploying and querying a cluster IP and node port service, and you learned in what scenarios you would use a load balancer and external name service.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=14)** In this chapter, I'll provide an overview of some advanced techniques to manage networking in a [[Kubernetes]] cluster, including network policies, ingress, and service meshes.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=25)** First, network policies.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=27)** An interesting fact.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=29)** Unlike pods, deployments, namespaces and services, and all the other Kubernetes objects you know, Kubernetes does not have network policies by default.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=38)** A CNI plugin with that feature is required.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=42)** Remember, you change the CNI in your mini cube cluster from Kind Net to Calico, and that's because Calico can force network policies, while Kind Net cannot.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=53)** A network policy allows you more fine grain control over the internal communication in a Kubernetes cluster.
>
> **[1:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=60)** And you can write a policy that enforces rules about what kinds of things can and cannot communicate with pods, namespaces, and specific IP addresses and ports.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=72)** When no network policies are implemented, all pods are able to communicate with one another openly, which does not meet the security standard of least privilege and zero trust.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=83)** Network policies allow you to configure two different options, whether the policy applies to ingress or egress, and does it allow or deny traffic?
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=94)** Quick vocab review.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=95)** Ingress means traffic is entering and egress means traffic is leaving.
>
> **[1:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=100)** Let's take a look at a few examples to illustrate how network policies work.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=106)** First, let's look at a network policy that applies to all traffic.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=111)** This is a default policy for all namespaces in your cluster.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=115)** It prevents all ingress and egress traffic from moving between pods.
>
> **[2:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=120)** If you want to have your network default to the principle of least privilege, this is the policy for you.
>
> **[2:06](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=126)** Let's create this policy and confirm it's working.
>
> **[2:09](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=129)** Run the command kubectl apply dash f deny all.
>
> **[2:16](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=136)** It says that the deny all policy was created.
>
> **[2:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=138)** Let's confirm by running kubectl get network policy.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=146)** Alright, we see we have a policy named Deny All.
>
> **[2:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=152)** It applies to all pods so there's no specific selector.
>
> **[2:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=156)** If you created the Deny All policy, none of your pods will be able to talk to each other.
>
> **[2:41](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=161)** So you would want to put in place some policies that allow communication.
>
> **[2:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=166)** Let's take a look at the allow ingress dot YAML file.
>
> **[2:50](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=170)** This network policy allows inbound traffic from pods in the same namespace.
>
> **[2:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=175)** More specifically in this example, incoming traffic to pods with the label app echo server are allowed only if they come from a pod with a selector app learning resources.
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=187)** Let's create this policy and confirm it's working.
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=191)** Run the command kubectrl apply dash F, allow Ingress dot yaml.
>
> **[3:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=198)** Let's check and see if that policy was created with kubectrl get network policy.
>
> **[3:26](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=206)** Alright, and we see our two policies.
>
> **[3:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=208)** We have the denial as well as the allow from learning resources policy.
>
> **[3:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=215)** Finally, let's take a look at the allow egress file.
>
> **[3:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=219)** This network policy allows outbound traffic from your front end UI pods to the cider block 172.11.0.0/20.
>
> **[3:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=229)** Let's create this policy and confirm it's working.
>
> **[3:52](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=232)** Kubectrl apply the file, allow egress dot yaml, and then kubectrl get network policy.
>
> **[4:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=244)** Ah, so the allow egress policy isn't in the default namespace because it's in the front end namespace.
>
> **[4:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=251)** So let's run that command again and ask for the policies in the front end namespace.
>
> **[4:17](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=257)** There it is. Allow egress.
>
> **[4:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=260)** Last thing, we're done working in our cluster so we can delete it.
>
> **[4:24](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=264)** Thank you little cluster for helping us explore the internal network of a Kubernetes cluster.
>
> **[4:30](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=270)** In Minikube, you run the command minikube delete, and you pass in the profile name.
>
> **[4:38](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=278)** So demo.
>
> **[4:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=279)** I've got the fire emoji, skull emoji.
>
> **[4:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=282)** It says remove all traces of the demo cluster.
>
> **[4:45](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=285)** So you're all set.
>
> **[4:47](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=287)** In this video, you learned about a network policy which lets you deny or accept traffic via ingress or egress.
>
> **[4:55](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=295)** You might have noticed that there's not much nuance in how you can configure a network policy, and you're right.
>
> **[5:02](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=302)** Later I'll provide an overview of service meshes, which can help you have more control over the communication in your cluster.
>
> **[5:10](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=310)** But first, I'll show you how to get traffic into your cluster using a Kubernetes ingress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (6)
> **CLI Commands:** kubectl (2), node (1)
> **Env Vars:** cni (2), yaml (1)
> **Prerequisites:** configure (2)
> **Versions:** 172.11.0 (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [Getting traffic into a cluster using Ingress](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=0)** - [Instructor] Thus far, you've learned about networking inside a [[Kubernetes]] cluster via different kinds of services, and you've learned that you can fine-tune pod-to-pod communication using network policies.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=13)** I've shown you a lot about the internal networking inside a cluster, and at some point in this course, you've probably wondered, how does traffic get inside a cluster?
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=22)** In this video, I'll show you how.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=25)** By default, pods only respond to requests that come from other pods in the cluster, and you must do some work in order for people to access the applications in your Kubernetes cluster.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=35)** Kubernetes ingress objects and ingress controllers accept and route external traffic to the services in your cluster.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=43)** An ingress object is part of Kubernetes, and it creates a publicly-accessible IP address.
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=49)** When an HTTP or HTTP request is sent to that IP address, the ingress sends the traffic to your ingress controller.
>
> **[0:57](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=57)** The ingress controller will then check the list of rules that you set up on your ingress and route traffic to your services based on those rules.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=66)** An ingress object only defines the rules, while an ingress controller enforces the rules by being a reverse proxy and load balancer.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=75)** While ingress objects are part of the core Kubernetes software, ingress controllers are similar to CNIs.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=82)** The software itself is developed separately and there are lots of options to choose from.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=87)** Therefore, ingress controllers are pluggable, and you must install them using [[Helm]] or YAML manifests.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=95)** Some common ingress controllers are Ingress-Nginx, Traefik, and HA Proxy.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=101)** You can find a full list in the Kubernetes documentation.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=106)** Let's take a look at a YAML manifest of an ingress that uses Ingress-Nginx as the controller.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=113)** This is the file called ingress.yaml.
>
> **[1:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=116)** You see up at the top here, this is a Kubernetes object called Ingress, and it's called example-ingress.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=123)** Here in the annotations, we're letting Kubernetes know that we are going to use Nginx-Ingress.
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=131)** Down here at the rules, when this is created in our cluster, and Nginx-Ingress is running, when a request is made to [lil-[[Microservices]].com](https://lil-microservices.com), and it just has the forward slash on it.
>
> **[2:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=145)** It's going to direct that request to our frontend UI.
>
> **[2:30](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=150)** Instead of getting traffic into your cluster by setting up a node port or load balancer service in front of each of your microservices, Kubernetes ingress allows you to have one point of entry for your cluster.
>
> **[2:43](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=163)** This gives you more flexibility by allowing you to focus on other parts of your cluster implementation.
>
> **[2:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=169)** In this video, you learned about how ingress and ingress controllers allow you to control traffic into your cluster.
>
> **[2:56](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=176)** In the next video, I'll give you an overview of Kubernetes service meshes and how these tools can supercharge your clusters' networking, security, and observability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (10), [[Microservices]] (2), [[Helm]] (1)
> **CLI Commands:** nginx (4), find (1), node (1)
> **Env Vars:** http (2), yaml (2)
> **Prerequisites:** set up (1), install (1)
> **File Paths:** ingress.yaml (1)
> **URLs:** [lil-microservices.com](https://lil-microservices.com) (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### [An overview of services meshes](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=0)** - [Instructor] As your [[Microservices]] architecture grows, you may arrive at a point where implementing network policies and managing traffic through ingress becomes overwhelming or you may need to enable communication between services running in a cluster in [[Google Cloud Platform (GCP)|Google Cloud]] and others in [[Microsoft Azure]].
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=19)** As the needs for your cluster grow, it may be time to consider using a service [[Mesh]].
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=26)** A service mesh is software you can install in a [[Kubernetes]] cluster that will take over the internal network and handle all aspects of service discovery.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=36)** With a service mesh, you don't have to worry about creating and connecting your cluster IP, node port, load balancer, and external name services, but you do have to learn the ins and outs of a new system.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=50)** In addition to service management, meshes provide greater security by encrypting communication between pods and giving you options to acquire Auth N and Auth Z in order to access certain endpoints.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=64)** Finally, service meshes have robust built-in observability tools so you and your team will be able to see the health of your services more easily than before.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=75)** There are many, well-known, free and open source service meshes, including Istio, Linkerd, and HashiCorp console.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=83)** There are also some paid service meshes like Kong and AWS App Mesh, Google Cloud's Anthos, and Microsoft Azure's Open Service Mesh.
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=93)** One [[Microsoft Word|word]] of warning about service meshes.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=96)** Although they're designed to help manage a complex microservices architecture, they also introduce an entirely new set of things you have to learn and manage, so make sure the trade-off is worth it.
>
> **[1:49](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=109)** Service meshes provide more ways for you to manage, secure, and observe your services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Mesh]] (5), [[Microservices]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Microsoft Azure]] (2), [[Kubernetes]] (1)
> **CLI Commands:** node (1), aws (1), make (1)
> **Env Vars:** aws (1)
> **Warnings:** warning (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Thank you](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=1)** - You did it.
>
> **[0:02](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=2)** Congratulations, you made it to the end.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=6)** One thing you learned about is the history of application deployments and the past problems [[Kubernetes]] has solved.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=12)** You learn that Kubernetes networking is built around four different service types.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=18)** The ClusterIP and Nodeport services, the LoadBalancer service, and the ExternalName service.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=25)** Straightforward service discovery is one of the most beloved features of Kubernetes.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=31)** Finally, you know about three tools for more complex networking needs, network policies, ingress, and service meshes.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=41)** If you really like learning about the internal Kubernetes network, try installing different container networking interfaces in a cluster and find out about the features each has to offer.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=53)** If networking isn't your primary interest, consider starting to specialize in an area of Kubernetes administration, security, GitOps, or monitoring and observability.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=64)** Here are the next steps to sharpen the skills that you have.
>
> **[1:07](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=67)** Take one, or all of the [[Linux]] Foundation Kubernetes exams.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=72)** There's the Certified Kubernetes Application Developer exam, the Certified Kubernetes Administrator Exam, or the Certified Kubernetes Security Specialist exam.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=83)** There are certification prep courses for these exams on [[LinkedIn]] learning.
>
> **[1:28](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=88)** Now that you've completed this course, I hope you're excited to learn more.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=92)** My name is Kim Schlesinger.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=94)** Thanks for learning with me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (9), [[Linux]] (1), [[LinkedIn]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - you (1)


## Instructor

- [[Kim Schlesinger]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/kubernetes-microservices-3808182)

## Skills Covered

- Microservices
- Kubernetes

## Path Context

### In [[Getting Started with Kubernetes]]
← [[Kubernetes- Essential Tools]] | **4 of 6** | [[Kubernetes- Cloud Native Ecosystem]] →

## Appears In

- [[Getting Started with Kubernetes]]

## Related Courses

_Courses sharing skills:_

- [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] — Kubernetes
- [[Securing Containers and Kubernetes Ecosystem]] — Kubernetes
- [[Kubernetes- Cloud Native Ecosystem]] — Kubernetes
- [[Kubernetes- Essential Tools]] — Kubernetes
- [[Kubernetes- Your First Project (2021)]] — Kubernetes

---

[↑ Back to top](#)