---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-kubernetes-16086900
url: "https://www.linkedin.com/learning/learning-kubernetes-16086900"
duration_minutes: 88
duration: 1h 28m
level: Intermediate
updated: 12/5/2024
learners: 27516
skills:
  - Kubernetes
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-kubernetes-3212391/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHvMfWguLq9Qw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668460173594?e=2147483647&amp;v=beta&amp;t=TFNzmvkGWIHyltpUBdmMZUMiH90oDmjYbZ03xi5S_uQ"
linkedin_topic: Data Science
learning_paths:
  - '[[The Top 10 Most Popular Courses among Engineering Professionals]]'
  - '[[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]'
  - '[[Getting Started with Kubernetes]]'
prev_courses:
  - '[[JavaScript Essential Training]]'
  - '[[Learning Docker]]'
  - null
next_courses:
  - '[[Git Essential Training]]'
  - '[[Generative AI and Predictive AI in the Cloud- Foundational Concepts and Scenarios]]'
  - '[[Kubernetes- Your First Project (2021)]]'
path_nav: '[{"path":"The Top 10 Most Popular Courses among Engineering Professionals","position":7,"total":10,"prev":"JavaScript Essential Training","next":"Git Essential Training"},{"path":"MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security","position":2,"total":10,"prev":"Learning Docker","next":"Generative AI and Predictive AI in the Cloud- Foundational Concepts and Scenarios"},{"path":"Getting Started with Kubernetes","position":1,"total":6,"prev":null,"next":"Kubernetes- Your First Project (2021)"}]'
path_count: 3
tags:
  - course
  - topic/data-science
  - topic/devops
  - topic/software-development
  - topic/web-development
  - topic/artificial-intelligence
  - skill/kubernetes
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Learning%20Kubernetes.md)

![Learning Kubernetes](https://media.licdn.com/dms/image/v2/C560DAQHvMfWguLq9Qw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668460173594?e=2147483647&amp;v=beta&amp;t=TFNzmvkGWIHyltpUBdmMZUMiH90oDmjYbZ03xi5S_uQ)

# Learning Kubernetes

> Prerequisites Access to a text editor like Visual Studio Code Use of a terminal app to run simple Unix commands High-level understanding of container technology Get the foundational knowledge you need to embark on your first voyage with Kubernetes, the world's most popular open-source container orchestration engine. Instructor Kim Schlesinger demonstrates how to create a Kubernetes cluster with Mi

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-kubernetes-16086900) | 1h 28m | Intermediate | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Setting sail on your Kubernetes voyage](#setting-sail-on-your-kubernetes-voyage)
  - [What you should know](#what-you-should-know)
- [**1. Kubernetes and the Cloud-Native Ecosystem**](#1-kubernetes-and-the-cloud-native-ecosystem) (3 videos)
  - [What is Kubernetes?](#what-is-kubernetes)
  - [What are containers?](#what-are-containers)
  - [What is cloud native?](#what-is-cloud-native)
- [**2. Setting Up and Getting Oriented**](#2-setting-up-and-getting-oriented) (7 videos)
  - [Install Docker on Windows](#install-docker-on-windows)
  - [Install Docker on Linux](#install-docker-on-linux)
  - [Install Docker on macOS](#install-docker-on-macos)
  - [Install minikube on Windows](#install-minikube-on-windows)
  - [Install minikube on Linux](#install-minikube-on-linux)
  - [Install minikube on macOS](#install-minikube-on-macos)
  - [Spin up and explore a minikube cluster](#spin-up-and-explore-a-minikube-cluster)
- [**3. Application Deployment**](#3-application-deployment) (8 videos)
  - [Reading and writing YAML](#reading-and-writing-yaml)
  - [Create a namespace](#create-a-namespace)
  - [Deploy an application](#deploy-an-application)
  - [Check the health of a pod by looking at the event logs](#check-the-health-of-a-pod-by-looking-at-the-event-logs)
  - [Check that your application is working with BusyBox](#check-that-your-application-is-working-with-busybox)
  - [View your application logs](#view-your-application-logs)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**4. Complex Application Deployment**](#4-complex-application-deployment) (3 videos)
  - [Expose your application to the internet with a LoadBalancer](#expose-your-application-to-the-internet-with-a-loadbalancer)
  - [Add resource requests and limits to your pod](#add-resource-requests-and-limits-to-your-pod)
  - [Delete your Kubernetes objects and tear down your cluster](#delete-your-kubernetes-objects-and-tear-down-your-cluster)
- [**5. Kubernetes Architecture**](#5-kubernetes-architecture) (3 videos)
  - [The Kubernetes control plane](#the-kubernetes-control-plane)
  - [Kubernetes worker nodes](#kubernetes-worker-nodes)
  - [How the control plane and nodes work together](#how-the-control-plane-and-nodes-work-together)
- [**6. Advanced Topics**](#6-advanced-topics) (3 videos)
  - [Ways to manage Kubernetes pods](#ways-to-manage-kubernetes-pods)
  - [Running stateful workloads](#running-stateful-workloads)
  - [Kubernetes security](#kubernetes-security)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps on your Kubernetes voyage](#next-steps-on-your-kubernetes-voyage)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting sail on your Kubernetes voyage](https://www.linkedin.com/learning/learning-kubernetes-16086900/setting-sail-on-your-kubernetes-voyage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/setting-sail-on-your-kubernetes-voyage?u=76281980&t=0)** - [[Kubernetes]] is ubiquitous in the tech industry as the way to deploy and manage distributed software. And you can find it heralded in conference talks, job descriptions, blog posts, and all over Twitter. But if you're new to Kubernetes, it can be difficult to understand what all the hype is about and how to start learning. If that's you, you're in the right place. I created this course because when I started learning Kubernetes, I found that it was a large and very complicated system, and it took me over a year before I felt like I was finally starting to understand the basics. I want you to have a solid understanding of Kubernetes much faster than I did. By the end of this course, you'll get a sense why companies like Spotify, Wikimedia, Pinterest, and scientific organizations like CERN have adopted Kubernetes as their container orchestration platform. We'll also cover Kubernetes architecture and some best practices in security and troubleshooting issues. If you're excited to walk away with some real-world Kubernetes experience, this course is for you. I'm Kim Schlesinger, a tech educator, and Kubernetes enthusiast. So join me in this [[LinkedIn]] Learning course as I guide you through this container orchestration platform. Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (8), [[LinkedIn]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** cern (1)
> **Speakers:** - kubernetes (1)

#### [What you should know](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-you-should-know?u=76281980&t=0)** - Before we begin, let's review what you'll need to know and be able to do in order to complete this course. First, you'll need access to a computer running [[Windows]], [[Linux]], or macOS. Second, you'll need internet access and a terminal application where you can run simple Unix commands like make directory, mkdir, and change directory, cd. Next, you need to be able to describe container technology from a 10,000-foot view. Simply knowing a tiny bit about Docker or another container technology like Podman is more than enough, so if you want to quickly read the first paragraph of the Docker Wikipedia entry that will do. If you'd like a more in-depth overview of containers, you can find several courses on Docker and [[Microservices]] in the [[LinkedIn]] Learning Library. Finally, you'll need a text editor like VS Code to view and edit the [[Kubernetes]] manifests we'll use in this course. There's no need to be a tech expert to work through this course, so if you've got a terminal app, a text editor, a high-level understanding of Docker, and the desire to learn more about Kubernetes, you're ready, so let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2), [[Windows]] (1), [[Linux]] (1), [[Microservices]] (1), [[LinkedIn]] (1)
> **CLI Commands:** docker (4), make (1), mkdir (1), cd (1), find (1)
> **Prerequisites:** you'll need (4)
> **Tools:** terminal (2), vs code (1)
> **Code Identifiers:** macos (1)
> **Speakers:** - before (1)


### 1. Kubernetes and the Cloud-Native Ecosystem

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Kubernetes?](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-kubernetes?u=76281980&t=0)** - Since it was launched as an open source project in 2015, [[Kubernetes]] has proven to be one of the most exciting and dynamic [[Software Projects]] of all time. Kubernetes is eating the world and surveys of software engineers, [[DevOps]] professionals, and chief technology officers show us this is true. According to the official 2021 Cloud Native Computing Foundation survey, 96% of organizations are either using or evaluating Kubernetes and more than 5.6 million developers are using it today. Kubernetes' release was announced by [[Google]] in 2014 and the system's design was influenced by Google's internal cluster management system called Borg. Instead of keeping the idea to themselves, Google worked with the [[Linux]] Foundation to form a new organization called the Cloud Native Computing Foundation and donated Kubernetes as the first open source project under the purview of the CNCF. Kubernetes, also known as "Kates" or K8s, is Greek for the [[Microsoft Word|word]] pilot or helmsman of a ship. Kubernetes has this name because it's a container orchestrator. Like the captain of a ship leading their crew, Kubernetes makes decisions about where and how containerized applications are launched on a server, when to scale up and down the number of application replicas, and what to do when an application or server stops working. Kubernetes is an open source project written in the programming language Go
>
> **[1:34](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-kubernetes?u=76281980&t=94)** and it's designed to provide planet-scale deployment, meaning that the biggest companies in the world can run and grow their applications using the platform and rapidly-growing companies can start small and grow to a near-infinite scale. Spotify is one example of a company that uses Kubernetes. The music and podcast streaming platform has over 200 million monthly users. And before using Kubernetes, the company used its own container orchestration platform called Helios. Since its debut, Spotify has experienced explosive growth. And in 2018, the engineering team realized they couldn't keep up with maintaining Helios so they decided to migrate their workloads to Kubernetes. Migrating to Kubernetes provided the company with many benefits. In an interview about the migration, site reliability engineer James Wen said, "The biggest service currently running on Kubernetes "takes about 10 million requests per second as an aggregate service and benefits greatly from autoscaling. "Before, teams would have to wait for an hour "to create a new service and get an operational host "to run it in production. "But with Kubernetes, they can do that on the order "of seconds and minutes." 10 million requests per second is a lot. But Kubernetes can handle it by scaling up the number of pods and nodes when needed and it will also scale those things down when there are fewer requests, providing automatic elasticity that saves you
>
> **[3:09](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-kubernetes?u=76281980&t=189)** and your company money on compute resources. Kubernetes can run on any kind of server, in an on-prem data center, a public cloud, or a hybrid of both. You can install Kubernetes on your own or you can use a managed Kubernetes service. Google, Amazon, [[Microsoft]], IBM, Red Hat, DigitalOcean, and other cloud providers offer Kubernetes as a service [[Microsoft Products|products]] that let you install Kubernetes with the click of a button and start deploying containerized applications fast. There's a lot of buzz around Kubernetes and for good reason. It's one of the biggest open source software projects in history, second only to the Linux kernel. And it has an enormous community of code contributors, technical educators, and advocates dedicated to the project, and all supported by the CNCF. In this video, you've heard a bit about the history of Kubernetes and why it's so popular. In our next video, we'll review the basics of container technology, which was the precursor to the development of Kubernetes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (24), [[Google]] (4), [[Software Projects]] (2), [[Linux]] (2), [[DevOps]] (1)
> **Env Vars:** cncf (2), ibm (1)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Prerequisites:** install (2)
> **Versions:** 5.6 (1)
> **Cross-References:** next video (1)
> **Speakers:** - since (1)

#### [What are containers?](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-are-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-are-containers?u=76281980&t=0)** - In our last video, we learned that [[Kubernetes]] is a container orchestration system, but what exactly are containers? Let's review. Pioneered and popularized by Docker, containers are a technology that bundle the code for an application and the configuration required to run the code itself in one unit. Before container technology, different servers or [[Virtual Machines]] were required to run each instance of an application. Building your applications using containers has several advantages. First, containers are portable and can be run on any [[Linux]], [[Windows]] or macOS machine as long as there is a container engine installed. Second, containers use less CPU and memory than a virtual machine or an application running on a server, so you can put more containers on fewer servers saving you or your company money. Third, because containers have everything they need to run, its own operating system, code, and code dependencies, you can create an image and spin up or spin down a container in seconds. Finally, for all the reasons we just covered, it's possible to create replicas of a container quickly and elastically scale up and down the number of replicas you need. Two quick terms I want to review; image. A container image is a file with executable code
>
> **[1:35](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-are-containers?u=76281980&t=95)** that can be run as a container. Container registry. A container registry is a database that stores container images and these images can be available to the public or private to only those people or service accounts with permission. Some examples of managed container registries are the Docker Hub, Quay or the [[Google]] Container Registry. In this course, we'll be working with preexisting images, so you won't be directly building or altering containerized applications. If this skill is something you want to learn more about, I recommend you check out the course, Learning Docker, in the [[LinkedIn]] Learning Library. What we will be doing is using Kubernetes to pull a container image from a registry, tell Kubernetes how many replicas of that container we'd like to run, and then Kubernetes, will use the container runtime interface to build and start the containers. Docker is the most well known container technology, but there are alternatives like podman, containerd, rkt, and LXD, and there will certainly be more in the future. A side note on something I really enjoy, the nautical themes used to communicate about Kubernetes and Docker, the logo for Kubernetes is the [[Helm]] of a ship, because Kubernetes is the Greek [[Microsoft Word|word]] for ship's captain. Docker uses shipping containers and whales to visually communicate what it does. Docker's mascot, Moby Dock, is a cartoon whale that hauls shipping containers on its back,
>
> **[3:10](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-are-containers?u=76281980&t=190)** and I suppose he would deliver those containers to the ship that is being piloted by Kubernetes. Anyway, containers have become a popular way to package and start applications and services, and Kubernetes is the most popular way to manage production applications. I'm excited to show you how to use Kubernetes to pull and create applications packaged as containers. But before we hop into that, we're going to explore the wide world of cloud native technology and the cloud native computing foundation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (10), [[Virtual Machines]] (1), [[Linux]] (1), [[Windows]] (1), [[Google]] (1)
> **CLI Commands:** docker (7)
> **Definitions:** is a  (5)
> **Env Vars:** cpu (1), lxd (1)
> **Code Identifiers:** macos (1)
> **Speakers:** - in (1)

#### [What is cloud native?](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-cloud-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-cloud-native?u=76281980&t=0)** - The tech industry is full of terms that are loaded with meaning and here are a few that I often see [[Agile Development|agile]], [[DevOps]] and cloud native. I've even used some of these terms in this course. In earlier videos, I alluded to the fact that [[Kubernetes]] is a cloud native technology but, what does that mean?
>
> **[0:24](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-cloud-native?u=76281980&t=24)** - [Narrator] Here's the official definition from the cloud native computing foundation. Cloud native technologies empower organizations to build and run scalable applications in modern dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, [[Microservices]], immutable infrastructure, and declarative APIs exemplify this approach that's really, dense. So, here's my definition, cloud native technologies are open-source projects designed to let technologists use [[Cloud Computing]] services to automatically deploy and scale applications.
>
> **[1:08](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-cloud-native?u=76281980&t=68)** - The cloud native approach to writing and deploying software is a paradigm shift from the approach to making software used in the 1990's and 2000's.
>
> **[1:19](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-cloud-native?u=76281980&t=79)** - [Narrator] Cloud native technology is built with the assumption that it is good to remove silos between sys admins, infrastructure engineers and software engineers so that code changes can be quickly and automatically tested and pushed to production instead of waiting for release dates at the end of the week, month, or quarter.
>
> **[1:40](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-cloud-native?u=76281980&t=100)** - The Cloud Native Computing Foundation or CNCF is part of the [[Linux]] Foundation and the organization's goal is to make cloud native computing ubiquitous. The organization supports their community by organizing groups that write the code for cloud native software, including Kubernetes.
>
> **[2:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-cloud-native?u=76281980&t=120)** - [Narrator] They also run conferences all over the world like Kubecon and Open Source Summit. They create certification exams for cloud native technologies and they help by marketing cloud native open source projects. The CNCF keeps track of cloud native projects by giving them a designation based on how mature the project is. There are graduated projects which are ready for use in production environments, there are incubating projects which are used in production by a limited number of companies, and there are sandbox projects, which are new experimental projects that are being developed. Kubernetes was the CNCF's first graduated project.
>
> **[2:47](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-cloud-native?u=76281980&t=167)** - One reason why Kubernetes has become the defacto container orchestration platform is because it's heavily supported by the CNCF which means projects can grow through code commits, they benefit from good documentation and training materials and they compile case studies of companies successfully using Kubernetes.
>
> **[3:07](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-cloud-native?u=76281980&t=187)** - [Narrator] Kubernetes is one of many open source projects backed by the CNCF and as you move through your Kubernetes journey you'll encounter other projects like [[Helm]], Prometheus and Linkerd.
>
> **[3:20](https://www.linkedin.com/learning/learning-kubernetes-16086900/what-is-cloud-native?u=76281980&t=200)** - Now that we've had an overview of Kubernetes containers and the world of cloud native, it's time for us to dive in and spin up a Kubernetes cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (9), [[Agile Development|Agile]] (1), [[DevOps]] (1), [[Microservices]] (1), [[Cloud Computing]] (1)
> **Speakers:** - [narrator] (4), - the (3), - one (1), - now (1)
> **Env Vars:** cncf (5)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)


### 2. Setting Up and Getting Oriented

[↑ Back to Table of Contents](#table-of-contents)

#### [Install Docker on Windows](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-docker-on-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-docker-on-windows?u=76281980&t=0)** - [Instructor] Docker is the container engine that will help us spin up a [[Kubernetes]] cluster on our computer. Let's find out how to install Docker on [[Windows 10]]. This is the install Docker desktop on [[Windows]] page in the Docker Docs. I need to download Docker desktop. So let's click the download button. Looks like the installer is downloading. Let's open that file and open the installer. We're going to click yes here.
>
> **[0:54](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-docker-on-windows?u=76281980&t=54)** Let's click yes to add the shortcut to the desktop. All right, and now Docker desktop is downloading. This may take a while. Excellent. It says our installation has succeeded and we need to restart windows to complete the installation. We're going to close and restart, and then we'll have Docker desktop running on our computer. Next we'll set up Minikube, software that lets you run a Kubernetes cluster on your computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2), [[Windows]] (2), [[Windows 10]] (1)
> **CLI Commands:** docker (7), find (1)
> **Tools:** docker desktop (4)
> **Prerequisites:** install (2), set up (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Install Docker on Linux](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-docker-on-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-docker-on-linux?u=76281980&t=0)** - [Instructor] Docker is the container engine that will help us spin up a [[Kubernetes]] cluster on our computer. Let's find out how to install Docker on [[Linux]]. First, let's find out what Linux distribution and version I'm running, with lsb_release -a. I'm running [[Ubuntu]] version 22.04. Next, let's follow along with the instructions titled "Install using the repository." First thing I have to do is set up the repository, so I'm going to copy this command, sudo apt-get update, and paste it in my terminal. This may take a while.
>
> **[0:54](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-docker-on-linux?u=76281980&t=54)** Next, I'm going to copy and paste this command. I'm going to click Yes, and wait. The next instruction is to add Docker's official GPG key. We'll copy and paste this command, and then the next curl command. All right, looks like we're good. Next, we're going to run this command to set up the repository. All right, looks good. Now the exciting part. Let's run "sudo apt-get update" one more time,
>
> **[1:55](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-docker-on-linux?u=76281980&t=115)** and then I'm going to install the Docker engine with this command. Going to click Yes. Looks like we're done. Finally, you can check to see if this installation worked by running the command "docker." If you see information about Docker, and a list of commonly used commands, congrats. Your installation was successful. Next, we'll set up minikube, software that lets you run a Kubernetes cluster on your computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2), [[Linux]] (2), [[Ubuntu]] (1)
> **CLI Commands:** docker (6), find (2), sudo (2), apt (2), curl (1)
> **Prerequisites:** install (3), set up (3)
> **Code Identifiers:** lsb_release (1)
> **Env Vars:** gpg (1)
> **Versions:** version 22 (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Install Docker on macOS](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-docker-on-macos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-docker-on-macos?u=76281980&t=0)** - [Instructor] Docker is the container engine that will help us spin up a [[Kubernetes]] cluster on our computer. Let's find out how to install Docker on macOS. This is the "Install Docker Desktop on Mac" page in the Docker docs. I need to download Docker Desktop, and I'm running a macOS with an Intel chip. So let's click that button. All right, it looks like it's downloading, so we'll just wait. All right, let's open that up and follow the instructions. It's asking me to drag and drop to my Applications folder, and it's going to copy Docker to that directory on my computer. All right, now that that's done, let's open the Docker app.
>
> **[1:02](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-docker-on-macos?u=76281980&t=62)** So let's open the Docker app. We'll click Open. It says, "Docker Desktop is starting." Sometimes this can take a while. Let's head over to the Terminal. You can check to see if this installation worked by running docker. If you see information about Docker, and a list of commonly used commands, congrats. Your installation was successful. Next we'll set up minikube, software that lets you run a Kubernetes cluster on your computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2)
> **CLI Commands:** docker (11), find (1)
> **Tools:** docker desktop (3), terminal (1)
> **UI Navigation:** open the (2), drag and drop (1)
> **Prerequisites:** install (2), set up (1)
> **Code Identifiers:** macos (2)
> **Speakers:** - [instructor] (1)

#### [Install minikube on Windows](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-minikube-on-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-minikube-on-windows?u=76281980&t=0)** - Now that we have Docker desktop installed, let's download Minikube. Minikube is software that lets you run a [[Kubernetes]] cluster using just your computer. In order to use minikube, you need a way to run commands in your terminal and you need to install a container runtime like Docker or Podman. Minikube is a tool that can help you learn Kubernetes. It's free because you are not required to pay a cloud provider for compute resources. But minikube is not fit for production clusters because it runs locally on your computer and lacks the security and networking capabilities offered by cloud providers. All right, so we are on the minikube welcome page. Let's figure out how to install minikube on [[Windows]] by going to the Get started section. All right, we're going to scroll down. All right, so we scroll down to the installation and we're just selecting what's true for us. We're on a Windows machine. We're using X 86 64 architecture. We want the stable release of Minikube and we're going to download the executable file. If we scroll down it says download and run the installer for the latest release. So we're going to click on that link. And just like with Docker desktop, we're going to download it. Windows is giving us a message saying that Minikube installer isn't commonly downloaded. Make sure that you trust this installer, which we do.
>
> **[1:36](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-minikube-on-windows?u=76281980&t=96)** So we're going to go to this menu and we're going to say keep And then it's saying, are you sure? And it's hiding the option to keep. So we're going to unfold this and say, keep anyway. And now we are opening the Minikube installer. Let's open this and see what happens next. And once again, Windows is giving us some information that we don't want you to download this, but if we unfold that, we can say run anyway We're going to say yes and we're going to select the language English. All right, and now we have this nice setup wizard. Here we go. I agree. Install. All right, it says the setup was completed successfully. We'll click next and then finished. All right, the last thing we want to do is just see if we can access minikube, so in our command prompt, and if we run minikube. All right, there is a list of our Minikube commands, which means that our installation was successful. Great work, you've just installed Minikube on your computer. And next up we'll start up and explore a cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Kubernetes]] (2)
> **UI Navigation:** scroll down (3), click on (1), go to (1), select the (1)
> **Prerequisites:** install (3), setup (2), required to (1)
> **CLI Commands:** docker (3), make (1)
> **Tools:** docker desktop (2), terminal (1), command prompt (1)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** download the (1)
> **Analogies:** just like (1)

#### [Install minikube on Linux](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-minikube-on-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-minikube-on-linux?u=76281980&t=0)** - [Instructor] Minikube is software that lets you run a [[Kubernetes]] cluster using just your computer. In order to use minikube, you need a way to run commands in your terminal and you need to install a container runtime like Docker or Podman. This video assumes you have both ready to go. Minikube is a tool that can help you learn Kubernetes. It's free because you are not required to pay a cloud provider for compute resources, but minikube is not fit for production clusters because it runs locally on your computer and lacks the security and networking capabilities offered by cloud providers. Let's click on the Get Started section to install minikube on [[Linux]]. So we're going to scroll down and here's the installation instructions. I'm using a Linux operating system, I'm using an x86-64 processor, I want to download the stable release, and I'm going to download the binary release. So what I'm going to do is copy these two commands and I'm going to paste them and hit Enter. Wow, that happened really fast. Let's make sure minikube is installed by running the command minikube. If you see that list of commands, that means we're ready to go. Great work, you've installed minikube on your computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2), [[Linux]] (2)
> **CLI Commands:** docker (1), make (1)
> **UI Navigation:** click on (1), scroll down (1)
> **Exercise Files:** download the (2)
> **Prerequisites:** install (2)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Install minikube on macOS](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-minikube-on-macos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-minikube-on-macos?u=76281980&t=0)** - [Instructor] minikube is software that lets you run a [[Kubernetes]] cluster using just your computer. In order to use minikube, you need to install a container runtime, like Docker or podman. this video assumes you have a container runtime ready to go, and just so you know, I'm using Docker as mine. minikube is a tool that can help you learn Kubernetes. It's free because you're not required to pay a cloud provider for compute resources, but minikube is not fit for production clusters, because it runs locally on your computer, and lacks the security and networking capabilities offered by cloud providers. If you are using a computer, running the Mac operating system, install minikube with Homebrew, the installation command Is brew install minikube. The installation process usually takes a few minutes. Once you have minikube installed on your machine, you can explore some of its capabilities. Start a cluster with the command minikube start. This also usually takes a few minutes. Once your cluster is ready, get some information about it, with kubectl get nodes. Nice. Now check the version of minikube you have installed, and compare it with the latest stable version
>
> **[1:33](https://www.linkedin.com/learning/learning-kubernetes-16086900/install-minikube-on-macos?u=76281980&t=93)** with the command minikube update-check. Mine match. Stop your cluster from running with minikube stop. Finally, delete your cluster with minikube delete. Great work, you've installed minikube on your computer and used it to create stop and delete a cluster. Next up, we'll spin up another cluster and explore some of the Kubernetes components that are installed by default.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (3)
> **CLI Commands:** docker (2), brew (1), kubectl (1)
> **Prerequisites:** install (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Spin up and explore a minikube cluster](https://www.linkedin.com/learning/learning-kubernetes-16086900/spin-up-and-explore-a-minikube-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/spin-up-and-explore-a-minikube-cluster?u=76281980&t=0)** - [Instructor] Now that you have cube control and minikube installed, it's time to spin up an explore a cluster. First, make sure that your container engine, docker, or pod man is running. I'm using docker and I can check that it's running by invoking the Docker command. I'm making sure that I'm seeing a list of possible docker actions, and for me, it looks like my Docker container runtime is running. If not, I would need to start up my docker desktop application. Next, let's create a cluster with minikube. The command is minikube start. It usually takes a few minutes for your cluster to be created. While we're waiting a note on the difference between minikube and cube control. The minikube command helps you create a cluster from scratch, whereas cube control lets you interact with your cluster. In the future, when you spin up a cluster using a cloud provider like AWS, [[Microsoft Azure|Azure]], or gcp, you'll use their command line tool to generate the cluster and cube control for the [[Representational State Transfer (REST)|rest]] of your actions. You will know minikube is done once you see this success message in your terminal. Now, let's explore our cluster with cube control. Run the command, cube control cluster dash info. You will see the IP address of your [[Kubernetes]] control plane. Since it's running on your computer, you'll see the local host address
>
> **[1:33](https://www.linkedin.com/learning/learning-kubernetes-16086900/spin-up-and-explore-a-minikube-cluster?u=76281980&t=93)** HTTPS one 27 dot zero dot zero dot one in a random port number. You will also see where in your cluster core DNS, the container network interface, is running. If you see an error message that starts with, the connection to the server was refused, it means that you don't have a minikube cluster running. You either need to wait for the cluster to be created or try again with minikube start. Next, let's look at our nodes with cube control get nodes. You should see one node with the name minikube. The role of control plane and the Kubernetes version. My minikube cluster is running Kubernetes version one 24 three. Yours will likely be different and newer. Next, let's look at the name spaces that get created by default. Run cube control get name spaces. You should see these, default, cube node lease, cube public, and cube system, and it's okay if you have more. Name spaces are a way to isolate and manage applications and services that you want to remain second. Next, let's look at the pods and services that are installed when you spin up a minikube cluster. Run cube control get pods dash capital A. The dash capital A flag means you want to see the pods in every name space. These pods are how containers are run in Kubernetes. These pods are also the software required
>
> **[3:07](https://www.linkedin.com/learning/learning-kubernetes-16086900/spin-up-and-explore-a-minikube-cluster?u=76281980&t=187)** to run a Kubernetes cluster itself. Finally, let's see the services that are running in this cluster. Run the command cube control get services dash capital A. Services act as load balancers within the cluster and direct traffic to pods. Be excited, you just spun up a Kubernetes cluster and used cube control to explore how the cluster is set up by default. In the next chapter, we'll learn how to deploy an application in the cluster and configure it in a way that makes the most sense for you and your projects. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (6), [[Microsoft Azure|Azure]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** docker (6), node (2), make (1), aws (1)
> **Env Vars:** aws (1), https (1), dns (1)
> **Tools:** docker desktop (1), command line (1), terminal (1)
> **Prerequisites:** set up (1), configure (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 3. Application Deployment

[↑ Back to Table of Contents](#table-of-contents)

#### [Reading and writing YAML](https://www.linkedin.com/learning/learning-kubernetes-16086900/reading-and-writing-yaml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/reading-and-writing-yaml?u=76281980&t=0)** - [Instructor] Once you start working with Cloud Native Tech, you'll notice the terms [[Infrastructure as code (IaC)|Infrastructure as Code]] and GitOps all over the place. These two approaches are often paired with [[Kubernetes]]. In Kubernetes, setting up your infrastructure with code and preparing yourself to deploy changes through a GitOps workflow require that you can save the desired state of your cluster in a set of files that you manage with a source control system like [[Git]]. In Kubernetes, the most commonly used format for these files are YAML manifests. A quick note on the terms Infrastructure as Code and GitOps. We won't go in depth on these terms in this course, but when you're ready to learn more, I recommend you check out the course called GitOps Foundations in the [[LinkedIn]] Learning Library. YAML is a data serialization language often used for configuration files. Data serialization languages provide a standard syntax for communicating information so that devices, operating systems and programming languages can easily share data with one another. Examples of other data serialization languages are [[JSON]] and xml. Using a data serialization language makes your data portable. Remember, we used that [[Microsoft Word|word]] to talk about containers earlier in the course. Like a suitcase, YAML lets you package and pick up your data and take it to another location and unload it without requiring anything extra from the developer.
>
> **[1:36](https://www.linkedin.com/learning/learning-kubernetes-16086900/reading-and-writing-yaml?u=76281980&t=96)** YAML is an acronym for YAML aint markup language, which is a little strange because the first letter of the acronym is the acronym itself. Self-Referential acronyms aside, YAML is designed to be read and understood by humans as opposed to byte code or an assembly language, that provides instructions to a CPU and makes little sense to a person when they look at the code. If you know a handful of facts about YAML syntax, it will help you when you're working with Kubernetes manifests, and I'll show you a few of these things with the help of an example YAML file. Here it is. In YAML, three horizontal dashes on a line of its own means that it is the beginning of a document. You can have multiple documents in one file, and each document starts with the three dashes. A line that begins with a hash or number sign is a comment. In our example YAML file, our comment says "an instructor record." This is a note for the human reading the file and will be ignored by the program pulling data from the file. YAML stores key value pairs with a colon in between them. For example, in this file, the first key is name and the value is Kim Schlesinger. In YAML a list or array of items is called a sequence, and each item is proceeded by a dash and has its own line. In this example file, we have a sequence listing the two LinkedIn learning courses I've created. You can use YAML to create a map of nested key value pairs.
>
> **[3:12](https://www.linkedin.com/learning/learning-kubernetes-16086900/reading-and-writing-yaml?u=76281980&t=192)** On the first line, you have a key with a colon at the end. Then on the next line, you indent and add the next key value pair. In our example file, I have the jobs collection. Then a list of my past few jobs with the number of years I worked at each company, I even added a list of titles I had at Galvanize. There are a couple things about YAML that I want you to watch out for. First, YAML files can either have the dot yaml or dot yml extension. In this course I use dot yaml, but it's up to you or your engineering team on which extension you use. Second, it's really easy to mess up indentation in yaml, so if you're having issues, don't beat yourself up. Instead, I recommend you run your files through a validator like [yamlchecker.com](https://yamlchecker.com). Let's validate our example dot yaml file. We'll copy and paste it into the YAML checker. Yay, it looks like the way it's written is valid YAML, but let's change the indentation on the jobs map and we get an error. The validator tells us there's an issue with the map, and it points us to the line where the error is occurring. Let's fix that and get back to valid YAML syntax. In this video, we had a crash course on YAML, the data serialization language commonly used to create Kubernetes objects. YAML enables us to declare what we want to be true
>
> **[4:45](https://www.linkedin.com/learning/learning-kubernetes-16086900/reading-and-writing-yaml?u=76281980&t=285)** about our cluster and save those files for Infrastructure as Code and a GitOps workflow. Next, we're going to create a name space and deploy an application in our cluster, and we'll use YAML Manifest to make the magic happen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (5), [[Infrastructure as code (IaC)|Infrastructure as code]] (3), [[LinkedIn]] (2), [[Git]] (1), [[JSON]] (1)
> **Env Vars:** yaml (21), cpu (1)
> **Definitions:** is a  (4), is an  (1), is called (1)
> **CLI Commands:** git (1), make (1)
> **URLs:** [yamlchecker.com](https://yamlchecker.com) (1)
> **Cross-References:** earlier in (1)
> **Analogies:** for example (1)
> **Warnings:** watch out (1)

#### [Create a namespace](https://www.linkedin.com/learning/learning-kubernetes-16086900/create-a-namespace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/create-a-namespace?u=76281980&t=0)** - [Narrator] [[Kubernetes]] name spaces let you isolate and organize your workloads. When you use Kubernetes, you'll probably want to create different name spaces to organize your applications and [[Microservices]]. For example, if you have your development and production environments running in the same Kubernetes cluster, you can separate your applications running in each environment by deploying them into a name space called development, and a different one called production. Before we create our own name space, let's review the ones that come with a Kubernetes cluster by default. Let's run kubectl get namespaces, and we see the four that we talked about in our earlier video. Now let's take a look at a Kubernetes manifest for a name space. This manifest is five lines long, and the only thing you need to worry about is the name field. This name space will be called development. Let's create this name space from the manifest by running the command kubectl apply -f namespace.yaml.
>
> **[1:12](https://www.linkedin.com/learning/learning-kubernetes-16086900/create-a-namespace?u=76281980&t=72)** When we rerun the command, kubectl get namespaces, we see that the development namespace has been created. Yay! Because Kubernetes manifests are written in yaml, it's possible to define multiple resources in one file by separating them with three horizontal dashes. Let's add a second name space called production to this file. First, we'll add three horizontal dashes, the way to signify a new document in yaml, we will copy and paste the namespace yaml,
>
> **[1:52](https://www.linkedin.com/learning/learning-kubernetes-16086900/create-a-namespace?u=76281980&t=112)** and then we'll change the name from development to production. Let's run kubectl apply -f namespace.yaml again, and then look at our available namespaces. We see there's now a production namespace. To delete these two namespaces, we can run kubectl delete -f namespace.yaml. Now you know how to create namespaces, which will help you isolate apps and microservices. Next, we will deploy an application into our development namespace.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (6), [[Microservices]] (2)
> **CLI Commands:** kubectl (5)
> **File Paths:** namespace.yaml (3)
> **Cross-References:** we talked about (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Deploy an application](https://www.linkedin.com/learning/learning-kubernetes-16086900/deploy-an-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/deploy-an-application?u=76281980&t=0)** - [[Kubernetes]] is designed to help make your applications highly available, meaning there are multiple replicas of your application running at the same time, so that if one stops working, there are at least two others accepting traffic. Pods are the Kubernetes resource that run our applications and [[Microservices]], and one way to ensure that an application is highly available is to organize your Pods using a Kubernetes deployment. This is a YAML spec for a deployment. The first key value pair is the API version, which has the value of apps v1, the API group we're sending a request to. The next pair is the kind of Kubernetes object we want to create, which is a deployment. In the [[Metadata]] section, we are naming our deployment "pod-info-deployment", specifying that our Pods should be in the development namespace and labeling all Pods in this group with the app name Pod info. Next, we're going to make our application highly available. Under the spec, we can specify how many replicas of the container we want to run. Right now it's one, but let's change it to three. Let's skip down to the containers map. Here, we're getting specific about the container that we want to run in the Pod. We're going to call this container Pod info container, and we're going to use an image from my Docker Hub Registry. Pull the latest version of Pod info app
>
> **[1:35](https://www.linkedin.com/learning/learning-kubernetes-16086900/deploy-an-application?u=76281980&t=95)** and then direct traffic for the container to port 3000. Below we're setting up the container to have three environment variables called POD_NAME, POD_NAMESPACE, and POD_IP. Before we create the deployment, let's make sure we have the development namespace. Run kubectl get ns for name spaces. Looks like I don't have it, so if you, like me, don't see the development name space, run the apply command on the namespace.yaml file. "kubectl apply -f namespace.yaml". Looks like we're ready to go. Now, let's create the deployment. Run the command "kubectl apply -f deployment.yaml". It looks like it worked. Let's confirm by listing all the deployments in the development namespace with the command "kubectl get deployments -n" for namespace "development". There's the deployment we named in the YAMIL Manifest, pod-info-deployment, and there are three containers ready to go, up to date and available. Finally, let's see the Pods that the deployment created. Run "kubectl get pods -n development". Look, three Pods. To show how the deployment makes sure there are always three Pods running, I'm going to delete one of the Pods.
>
> **[3:10](https://www.linkedin.com/learning/learning-kubernetes-16086900/deploy-an-application?u=76281980&t=190)** Let me grab the name of this top Pod, and then I'm going to run the command "kubectl delete pod", pass in the name of the Pod, and then say in the development namespace. All right, it says one of those Pods was deleted that had kkrvv at the end. We're going to check the development namespace for Pods. Here we go. So, "kubectl get pods -n development". All right, so we see on this top line we have that Pod is being terminated, but we also have a brand new Pod on the second line that's just 19 seconds old and that's the Kubernetes deployment, making sure that there's always three Pod info deployment Pods running. All right, pat yourself on the back. You created three Pods with a Kubernetes deployment. In the next few videos, we'll look at some different techniques to ensure the containers in your Pod are running properly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (6), [[Microservices]] (1), [[Metadata]] (1)
> **CLI Commands:** kubectl (7), make (3), docker (1)
> **Env Vars:** api (2), yaml (1), pod_name (1), pod_namespace (1), pod_ip (1)
> **File Paths:** namespace.yaml (2), deployment.yaml (1)
> **Documentation:** spec (2)
> **Definitions:** is a  (2)
> **Ports:** port 3000 (1)
> **Cross-References:** in the next (1)

#### [Check the health of a pod by looking at the event logs](https://www.linkedin.com/learning/learning-kubernetes-16086900/check-the-health-of-a-pod-by-looking-at-the-event-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/check-the-health-of-a-pod-by-looking-at-the-event-logs?u=76281980&t=0)** - [Instructor] The beginning of a pod's life is perilous. So many things can go wrong. The container image can be unavailable, causing an error. You could be out of space on your worker nodes, so the pod can't be scheduled. Or a typo can cause the pod to start running, but suddenly stop. [[Kubernetes]] saves the event logs when a pod is created, and if you know how to view these, you can troubleshoot issues. The first step is to find the pod whose event logs you'd like to view. Let's run kubectl get pods from the namespace "development." We'll copy the name of one pod. Any of the three will do. Next, run the command kubectl describe pod, the name of the pod, and then namespace "development." There's a lot of information here. Let's scroll up to the top. And some of it should look familiar from our YAML manifest. To see the event logs, let's scroll down to the bottom. If your pod is running and healthy, you'll see messages like this. If your pod is having issues, you'll see log messages that can help you identify the problem by showing you an error. If your pod has been up and running for a while, when you check the event logs, you'll see none. That means that Kubernetes is letting the pod do its own thing, because it's healthy. Most issues with pods
>
> **[1:32](https://www.linkedin.com/learning/learning-kubernetes-16086900/check-the-health-of-a-pod-by-looking-at-the-event-logs?u=76281980&t=92)** occur in the first minute of their life cycle. And in this video we learned how to use kubectl describe to look at a pod's event logs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2)
> **CLI Commands:** kubectl (3), find (1)
> **UI Navigation:** scroll up (1), scroll down (1)
> **Env Vars:** yaml (1)
> **Definitions:** means that (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Check that your application is working with BusyBox](https://www.linkedin.com/learning/learning-kubernetes-16086900/check-that-your-application-is-working-with-busybox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/check-that-your-application-is-working-with-busybox?u=76281980&t=0)** - [Instructor] Once you deploy something in your [[Kubernetes]] cluster, you want to verify that the application is working as expected. But how can you check? One way is to use a tool called BusyBox. BusyBox is known as the Swiss Army Knife of embedded [[Linux]], and it's a binary that contains many well-known Unix tools like Awk, Date, Who am I and Wget? It's a good tool for debugging and troubleshooting issues in a Linux environment and Kubernetes runs on Linux. Let's create a pod running BusyBox. First, find and open the BusyBox dot YAML file. Like we did with our application, we're going to use a deployment to create the BusyBox pod. Unlike our other deployment, we're going to deploy this in our default namespace and run only one replica. Let's create the BusyBox pod with kubectl apply -f busybox.yaml. Let's check and see that the BusyBox Pod is up and running with the command kubectl get pods, looks good. Notice in that last command, I didn't specify a name space, which is fine because if you don't, kubectl assumes you want the objects in the default name space. We want to use BusyBox to make an HTTP get request to our application, and we need to know the IP address of our pods in order to make that request.
>
> **[1:34](https://www.linkedin.com/learning/learning-kubernetes-16086900/check-that-your-application-is-working-with-busybox?u=76281980&t=94)** Open a new tab in your terminal and run the command kubectl get pods, from the namespace development, -o wide.
>
> **[1:46](https://www.linkedin.com/learning/learning-kubernetes-16086900/check-that-your-application-is-working-with-busybox?u=76281980&t=106)** The command with -o wide shows us extra info about our pods, including their IP addresses inside the Kubernetes cluster. Keep this tab open because we'll need to copy a pod's IP address in just a moment. Let's switch back to the other tab for the next step. We need to get inside our BusyBox pod so we can use the Wget tool to make an HTTP request. We're going to use a kubectl command called Exec, which allows us to run commands in a container. It's kind of like SSH, if you've ever used that before. All right, I'm going to type out my Exec command. First, let me copy the name of my BusyBox pod.
>
> **[2:35](https://www.linkedin.com/learning/learning-kubernetes-16086900/check-that-your-application-is-working-with-busybox?u=76281980&t=155)** So this command is long, it's kubectl exec -it, and then I paste the name of my pod,
>
> **[2:43](https://www.linkedin.com/learning/learning-kubernetes-16086900/check-that-your-application-is-working-with-busybox?u=76281980&t=163)** - -/bin/sh. This is a long command, so let's take a look and go through each part. In the first part of the command, we're invoking kubectl exec. Next, is -it, which means we want to get access to the pod and use an interactive terminal. Moving on, the pod name. If you wanted to exec into a different pod, you would put its unique name there. Finally, we need to specify the shell we'll use, Bash, [[Vanilla]] Shell, Fish. In our case, /bin/sh uses the executable shell. Let's run the command and see what happens. Oh, my command prompt changed, which means we're inside our BusyBox container, woo. Let's see if Wget is installed by running that command. We see some usage info about Wget, which means it's installed. Let's go back to our other tab and copy the IP address for one of the pods. Now return to the BusyBox pod and run Wget and then paste the IP address. We're getting an error that says, "Wget Can't connect to remote Host connection refused." If I look at the line above,
>
> **[4:18](https://www.linkedin.com/learning/learning-kubernetes-16086900/check-that-your-application-is-working-with-busybox?u=76281980&t=258)** in the parenthesis I see the pod IP address in port 80, the default port. Let's look at our original deployment. Remember, when we created this deployment, we set up the pod's container to use Port 3000. So let's rerun that Wget command and add Port 3000 at the end of the IP address. W get, paste the pod IP address colon 3000. Hey, it looks like it worked. And that Wget saved that info in a file called index.[[HTML]]. Let's look in that file by running cat index.html. All right, I see a [[JSON]] object of the environment variables we set in the deployment YAML, which is what this application does. It shows you some info about your pod. Let's exit out of our BusyBox container by running Exit, and be proud of yourself because we just verified that our application is running. We just did a lot of stuff so let's review. If your application is deployed in a cluster but not yet exposed to the internet, how do you check that it's working? One way is to spin up a BusyBox pod, find a pod's IP address and use Wget to make a get request so you can verify that your application is working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (3), [[Linux]] (3), [[HTML]] (2), [[Vanilla]] (1), [[JSON]] (1)
> **CLI Commands:** wget (9), kubectl (7), make (4), find (2), awk (1)
> **Env Vars:** yaml (2), http (2), ssh (1), json (1)
> **Tools:** terminal (2), bash (1), command prompt (1)
> **File Paths:** index.html (2), busybox.yaml (1)
> **Ports:** port 3000 (2), port 80 (1)
> **Definitions:** known as (1), is a  (1)
> **Cross-References:** go back to (1)

#### [View your application logs](https://www.linkedin.com/learning/learning-kubernetes-16086900/view-your-application-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/view-your-application-logs?u=76281980&t=0)** - [Narrator] In the last few videos, we deployed an application and checked that it's working properly by using Busybox to make a w-get request. There's another way to check that your application is working and that's by looking at the application logs. The first step is to list all the pods that are running our application. Let's run the command, kubectl get pods from the name space development. Copy the name of the pod whose logs you would like to inspect. And then, run the command, kubectl logs, the name of your pod, name space development. So you know, the pod info app logs all http requests, so if you'd like to see some activity in the logs, choose the pod you queried with w-get. I chose a different one. This command prints the logs from your application, which can be helpful if you need to debug application issues. In this chapter, we've deployed an application and explored a few ways to check the health of your pods. In the next chapter, we'll take a look at some more complex techniques for configuring and deploying your workloads.

> [!info]- Semantic Content
>
> **CLI Commands:** kubectl (2), make (1)
> **Cross-References:** in the last (1), in the next (1)
> **Speakers:** - [narrator] (1)

#### [Challenge](https://www.linkedin.com/learning/learning-kubernetes-16086900/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/challenge?u=76281980&t=0)** (upbeat techno music)
>
> **[0:06](https://www.linkedin.com/learning/learning-kubernetes-16086900/challenge?u=76281980&t=6)** - [Instructor] This is the chapter 3 challenge. You'll create your own deployment. Here are the requirements. Create a new deployment in a file called quote.yaml. Name the deployment and name the app label quote-service. Use the development namespace. Name the container quote-container. Run two replicas. Use the image datawire/quote:0.5.0. Set the container to accept traffic at port 8080. Create the pods using kubectl apply -f quote.yaml. And this next one is optional and it's quite a stretch. So you don't have to do it if you don't want to. It's to use BusyBox to test that the application can accept traffic from inside the cluster. Good luck and have fun!

> [!info]- Semantic Content
>
> **File Paths:** quote.yaml (2)
> **CLI Commands:** kubectl (1)
> **Ports:** port 8080 (1)
> **Versions:** 0.5.0 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat techno music) (1)

#### [Solution](https://www.linkedin.com/learning/learning-kubernetes-16086900/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-kubernetes-16086900/solution?u=76281980&t=1)** (funky intro music)
>
> **[0:06](https://www.linkedin.com/learning/learning-kubernetes-16086900/solution?u=76281980&t=6)** - [Instructor] This is the chapter three solution video where I'll walk you through how I would approach the challenge. We're just going to go step by step through each requirement. The first requirement is to create a new deployment in a file called quote dot yaml. So I'm going to create that file with touch quote dot yaml, and then I'm going to open that up with my text editor, which is VS code. All right, so this file is currently blank, but let's go to our deployment dot yaml that we deployed earlier. Copy that, and paste it and go up to the top. And now we'll just start making changes based on their requirements in the challenge. The next requirement is to name the deployment and name the app label quote dash service. So under [[Metadata]] is the name of the deployment, so quote dash service, and then the app label. I have three instances of it here. We're going to say quote dash service. All right, that looks good. Next is to use the development name space, that's already done and good to go. If it was something like production or default, I would change the value of this to development. Next requirement is to name the container quote dash container. So the container is down here and we're going to change it to quote dash container. All right, next up is to run two replicas.
>
> **[1:42](https://www.linkedin.com/learning/learning-kubernetes-16086900/solution?u=76281980&t=102)** So we'll change three and reduce it by one to two. Use the image data wire forward slash quote 050. Okay, so here's the image. So data wire is a company called Ambassador Labs, and they have this nice, nice service you can use that will generate random quotes. So you say the name of the Docker Hub registry, which is data wire, and then the name of the container image is quote. And then the version that we want is 0 dot 5 dot 0, and then set the container to accept traffic at Port 8080. So we'll change this to 8080, and we don't need these environment variables. We can get rid of those. Let's scroll back up to the top. Okay, the next requirement is to create the pods using kube control apply dash F quote yaml. So let's do that kube control, apply the file. Quote dot yaml says the quote service has been created. Let's check kube control, get pods from the name space development. All right, yeah, I've got two quote service pods running. So if you have done all of those things, you have successfully completed the challenge. Next, I'm going to show you how to use busy box to see how this application works. And if you weren't able to do this, no problem. There are some tricky parts here. So first thing I'm going to do is I'm going to make sure
>
> **[3:17](https://www.linkedin.com/learning/learning-kubernetes-16086900/solution?u=76281980&t=197)** I have a busy box pod running. In the last couple videos, we put it in the default name space. Looks like my busy box pod is still going. So let's copy the name of the pod and exec into it. Kube control exec dash it, the name of the busy box pod dash dash forward slash bin forward slash sh. My command prompt changed and I am in the busy box pod. If I say, who am I? It says I'm the root user looking good. All right. So I want to use W get to send a request to one of the pods, and I need those pod IP addresses. So we're going to say kube control, get pods from the development name space, and give me the wide output. All right, so scrolling down, we've got quote service. I'm just going to grab this IP address and go back to my busy box command line prompt. Let's clear this out. Let's do W get, and then the pod IP address. All right, getting that same error connecting to the pod at port 80 connection refused. Remember in our quote yaml, we specified the port 8080. So let's redo that W get, request W get 8080. Oh, getting a different error. It says connecting to that IP address at port 8080 w get can't open index dot [[HTML]]
>
> **[4:51](https://www.linkedin.com/learning/learning-kubernetes-16086900/solution?u=76281980&t=291)** because the file already exists. Okay, that makes sense. So if I look here, I already have an index dot html file, and W get is trying to write the response from the quote service there. And so what we're going to do is we're just going to delete that index dot html file. We're going to run that command one more time. Aha. Now we're getting a success message saying, Hey, I connected to that pod at Port 8080. I saved all the output into index dot html. And so if I cat that index, dot html, hey, beautiful. We see this [[JSON]] object, which is what the quote service does. It gives us the name of a server, it gives us a random quote, and then it gives us a timestamp. So that is the solution for the chapter three challenge. Create your own deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[Metadata]] (1), [[JSON]] (1)
> **Ports:** port 8080 (4), port 80 (1)
> **CLI Commands:** docker (1), make (1), cat (1)
> **Tools:** vs code (1), command prompt (1), command line (1)
> **Cross-References:** in the last (1), go back to (1)
> **Env Vars:** json (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)


### 4. Complex Application Deployment

[↑ Back to Table of Contents](#table-of-contents)

#### [Expose your application to the internet with a LoadBalancer](https://www.linkedin.com/learning/learning-kubernetes-16086900/expose-your-application-to-the-internet-with-a-loadbalancer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/expose-your-application-to-the-internet-with-a-loadbalancer?u=76281980&t=0)** - Up until this point, we've deployed an application, but we've only been able to access it by using a busybox container inside the cluster. How do you expose your application to the internet? The answer is called a [[Kubernetes]] service. A Kubernetes service is a load balancer that directs traffic from the internet to Kubernetes pods. A load balancer service has a public and static IP address. The public IP address means that anyone can access it from the internet, and the static part is important because your pods and their IP addresses change frequently, but your service IP needs to remain the same. Let's take a look at a .yaml manifest for a service. We're going to create a service called demo-service in the development namespace. The next part is really important. We have the selector map and we're telling the service it should send traffic to any pods with the label app: pod-info Let's look back at our deployment spec. Here, we made sure any pods created by this deployment have that label. If these things don't match, your service won't be able to direct traffic to your pods. Back to the service.yaml. In the port sequence, we're setting the services port to 80. That's the default, so you don't have to type in the port number in a URL, but the service is directing traffic to port 3000 in our container. Finally, we're specifying that the service type
>
> **[1:34](https://www.linkedin.com/learning/learning-kubernetes-16086900/expose-your-application-to-the-internet-with-a-loadbalancer?u=76281980&t=94)** is a load balancer. This is one of three types of Kubernetes services. The other two are node port and cluster IP. Let's create this service. First, open a separate tab and run the command, minikube tunnel. Let's switch back to our other tab and create the service with the command kubectl apply -f service.yaml It looks like it's been created, so let's find the external IP address so we can use our browser to make a request. Run the command, kubectl get services -n development. We see our demo service and it has two IP addresses, one for inside the cluster and one external IP. Side note, for those of you with a keen eye, you may have noticed that our "external IP address" is actually the IP address for our local host, 127.0.0.1 Good catch. Because minikube works only in our computer and not in a public cloud, we're not actually getting an IP address available on the internet. If you create a load balancer service with [[Google Cloud Platform (GCP)|Google Cloud]], [[Microsoft Azure|Azure]], AWS, or any other cloud provider, they'll give you a public IP address available on the internet. Let's try and access our application from that IP address. We'll copy it, open up our browser and hit enter. Hmm, that doesn't seem to be working.
>
> **[3:12](https://www.linkedin.com/learning/learning-kubernetes-16086900/expose-your-application-to-the-internet-with-a-loadbalancer?u=76281980&t=192)** Let's go back and check the tab that's running minikube tunnel. It looks like I need to enter my password to allow the service to work. Let's do that and try again in our browser One hundred, there we go. It works! There's the [[JSON]] Object from our pod info app. Let's wrap this up. Go to the tab with minikube tunnel. Stop that process with Ctrl + C, and pat yourself on the back. This is a big moment. You've used a Kubernetes load balancer service to expose your application to the internet. Woo-hoo! Just so you know, the minikube tunnel feature can be really finicky, so if you weren't able to expose your service, no worries. You've got the concept. In our next video, we'll learn about how to add resource requests and limits to a container. A best practice in Kubernetes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (6), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Microsoft Azure|Azure]] (1), [[JSON]] (1)
> **CLI Commands:** kubectl (2), node (1), find (1), make (1), aws (1)
> **Definitions:** is a  (3), is called (1), means that (1)
> **Env Vars:** url (1), aws (1), json (1)
> **File Paths:** service.yaml (2)
> **Ports:** port 3000 (1)
> **Versions:** 127.0.0 (1)
> **Cross-References:** next video (1)

#### [Add resource requests and limits to your pod](https://www.linkedin.com/learning/learning-kubernetes-16086900/add-resource-requests-and-limits-to-your-pod?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/add-resource-requests-and-limits-to-your-pod?u=76281980&t=0)** - [Narrator] Well configured containers let [[Kubernetes]] know how much memory and CPU to reserve on a worker node. In this video, you'll learn how to set CPU and memory requests and limits on the containers in your pods. Resources refer to the amount of available CPU and memory on the worker node running your pods. If you deploy a pod without a set of resource requests, it can be scheduled on a node that does not have enough processing power or memory and cause the node to fail. Similarly, if you deploy a pod without a set of resource limits, you can start a pod on a node, but if the application begins using more and more CPU or memory, it can use all those resources on the node causing it to fail. Failed nodes can cause outages, which you want to avoid. Let's add resource request and limits to our pod info container. I'm at the Kubernetes docs page called resource management for pods and containers. I'm looking for a YAML manifest that I can copy. So let me start scrolling down. All right, here's a nice example. All right, so I see this is a pod called frontend, and then we have the containers here. Ah, and then we have the resources request and limits. I'm going to copy that section. Let's go back to our deployment.yaml, and let's put that underneath the image key value pair.
>
> **[1:35](https://www.linkedin.com/learning/learning-kubernetes-16086900/add-resource-requests-and-limits-to-your-pod?u=76281980&t=95)** And it looks like my indentation's a little off, so we'll do that and then we'll make sure these are underneath the resources sequence. All right. Let's just make sure that looks right. Looks good to me. All right, we've set resource request and limits for our pod info container. Let's look in the resources sequence. We have a request section saying that do not schedule this pod unless the node has at least 64 mebibytes of memory and 250m of CPU. On the other hand, we have the limit section which says, stop running this container if it exceeds using 128 mebibytes of memory and 500m of CPU. You're probably wondering how you decide on the values for the requests and limits. The answer is it depends on the container you're running in the pod. The pod info container uses just a little processing power and has a small memory footprint, so we'll stick with the values from the Kubernetes docs. To update our pods, we'll run kubectl, apply the file deployment.yaml. And it says that our deployment has been configured. Let's run kubectl, get pods from the name space development. All right, so we see our old pod info deployment pods are terminating and our new pod inflow deployment pods are running.
>
> **[3:12](https://www.linkedin.com/learning/learning-kubernetes-16086900/add-resource-requests-and-limits-to-your-pod?u=76281980&t=192)** And the reason that's happening is we've made a change to the pod and the Kubernetes deployment says I'm getting rid of the old pods and I'm creating these new pods that have resource requests and limits. Setting resource requests and limits on your containers is an important step in avoiding outages. And now you know how.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (4)
> **CLI Commands:** node (7), make (2), kubectl (2)
> **Env Vars:** cpu (6), yaml (1)
> **File Paths:** deployment.yaml (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### [Delete your Kubernetes objects and tear down your cluster](https://www.linkedin.com/learning/learning-kubernetes-16086900/delete-your-kubernetes-objects-and-tear-down-your-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/delete-your-kubernetes-objects-and-tear-down-your-cluster?u=76281980&t=0)** - [Instructor] We've arrived at the end of this chapter, and we no longer need our minikube cluster. Minikube is a resource-intensive application, so unless you want your computer to melt, it's best to clean up your cluster and stop it when you're not using it. The first thing we want to do is delete any [[Kubernetes]] resources we created. We'll do that using the YAML files. Here's a list of files that we used. We can delete the objects in these files by running kubectl delete -f and the name of the file. I'm going to go through and do that one by one. Kubectl delete, busybox. Kubectl delete the file deployment, Kubectl delete the file quote, Kubectl delete the file service, and finally, kubectl delete the file namespace. Make sure you delete the namespace last because it will destroy anything inside of it when it is deleted. You could also do it first if you only want to run one command. Finally, let's delete our minikube cluster. The command is simple, minikube delete. Excellent work with the hands-on portion of this course. Now that you've got experience using Kubernetes, in the next chapter,
>
> **[1:32](https://www.linkedin.com/learning/learning-kubernetes-16086900/delete-your-kubernetes-objects-and-tear-down-your-cluster?u=76281980&t=92)** we'll do an in-depth exploration of how the system is designed, and in the final chapter, we'll discuss some advanced Kubernetes topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (3)
> **CLI Commands:** kubectl (6), make (1)
> **Env Vars:** yaml (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)


### 5. Kubernetes Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [The Kubernetes control plane](https://www.linkedin.com/learning/learning-kubernetes-16086900/the-kubernetes-control-plane?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/the-kubernetes-control-plane?u=76281980&t=0)** - Now, I want to take some time to go over the [[Kubernetes]] control plane. To start, let's learn some important vocabulary. An instance of Kubernetes is called a cluster, and each cluster has a control plane and at least one worker node. If Kubernetes is like an airport, the control plane is like the air traffic control tower with people overlooking the cluster and making sure nodes and pods are created, modified, and deleted without any issues. The control plane is made up of several components, and if you know the function of each one, you'll better understand how Kubernetes works. The first and most important control plane component is the Kube API Server. The API server exposes the Kubernetes API. Each Kubernetes object like pods, deployments, and the horizontal pod autoscaler have an API endpoint. The Kubernetes API has a [[Representational State Transfer (REST)|REST]] interface and kubectl and kubeadm are the command line tools that let us communicate with the Kubernetes API via HTTP requests. To see all the Kubernetes objects and their API version, run the command kubectl api-resources. You'll see a longer version of this table. Like all things in Kubernetes, the Kube API server is a containerized application run as a pod
>
> **[1:34](https://www.linkedin.com/learning/learning-kubernetes-16086900/the-kubernetes-control-plane?u=76281980&t=94)** and you can see it by listing all pods running in the kube system name space with the command kubectl -n kube-system get pods. The pod has kube dash API server at the beginning of the name. The kube API server is the Kubernetes component that handles the most request from the user and inside the cluster and without it, a Kubernetes cluster cannot exist. The next component of the Kubernetes control plane is etcd. Etcd is an open-source, highly available key value store, and in a Kubernetes cluster, it saves all data about the state of the cluster. Only the Kube API server can communicate directly with etcd. Etcd is also run as a pod and you can look at the logs to get a sense of how etcd works. Find the etcd pod in the kube system namespace, copy the name of the pod, and then run the logs command to see etcd's most recent operations. The next component is the kube scheduler, which identifies newly created pods that have not been assigned a worker node and then chooses a node for the pod to run on. Like the prior components we covered, the kube scheduler is run as a pod, and you can learn more about it by describing the pod or inspecting its logs. The next component is the Kube-controller-manager. The controller manager is a loop that runs continually and checks the status of the cluster
>
> **[3:09](https://www.linkedin.com/learning/learning-kubernetes-16086900/the-kubernetes-control-plane?u=76281980&t=189)** to make sure things are running properly. For example, the controller manager checks that all worker nodes are up and running, and if it finds that something is broken, it will remove the broken node and replace it with a new worker node. The controller manager creates and checks several other things in a cluster. The final component of the Kubernetes control plane is the cloud controller manager, which lets you connect your cluster with a cloud provider's API so you can use cloud resources from AWS, GCP, [[Microsoft Azure|Azure]], or any public cloud. The Kubernetes control plane contains the components that manage a cluster and enable the [[Resiliency]] and automation that make Kubernetes such a popular container orchestrator. One note, if you're using a managed Kubernetes service like AWS's EKS or [[Google]]'s GKE, you will not be able to see your control plane nodes using kubectl, those are hidden because the cloud provider handles all the maintenance of those components for you. In our next video, we'll learn about the second part of a cluster, the worker nodes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (18), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Azure|Azure]] (1), [[Resiliency]] (1), [[Google]] (1)
> **Env Vars:** api (12), aws (2), rest (1), http (1), gcp (1)
> **CLI Commands:** node (5), kubectl (4), make (2), aws (2), find (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Cross-References:** we covered (1), next video (1)
> **Tools:** command line (1)
> **Analogies:** for example (1)
> **Speakers:** - now (1)

#### [Kubernetes worker nodes](https://www.linkedin.com/learning/learning-kubernetes-16086900/kubernetes-worker-nodes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/kubernetes-worker-nodes?u=76281980&t=0)** - In the last video, we discussed the components of the [[Kubernetes]] control plane, and in this video we'll look at the components that make up Kubernetes worker nodes. If Kubernetes is like an airport, the control plane is like the air traffic control tower, and the worker nodes are like the busy terminals, where planes park and passengers board. In order to be highly available, most Kubernetes clusters run with a minimum of three worker nodes. The worker nodes are where pods are scheduled and run, and each worker node has three components. The first component is the Kubelet. The Kubelet is an agent that runs on every worker node, and it makes sure that the containers in a pod have started running and are healthy. The Kubelet communicates directly with the API server in the control plane, and it is looking for newly assigned pods. The next component is the container runtime. Once the Kubelet has been assigned a new pod, it starts the container or containers using the container runtime interface, or CRI. The CRI enables the Kubelet to create containers with the engines containerd, CRI-O, Kata Containers, and AWS Firecracker. In Kubernetes v1.24, the Dockershim was removed, which means the docker engine can no longer be used as a container runtime, but docker images still work in Kubernetes, because docker images and docker containers
>
> **[1:35](https://www.linkedin.com/learning/learning-kubernetes-16086900/kubernetes-worker-nodes?u=76281980&t=95)** are two different things. The final component of a Kubernetes worker node is the Kube-proxy. The Kube-proxy makes sure that your pods and services can communicate with other pods and services on nodes, and in the control plane. Each Kube-proxy communicates directly with the Kube-APIserver. Okay, now you know the parts of the Kubernetes control plane and worker nodes. In the next video, we'll explore how the two parts of Kubernetes work together to create a pod.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (9)
> **CLI Commands:** docker (4), node (3), make (1), aws (1)
> **Env Vars:** cri (3), api (1), aws (1)
> **Cross-References:** in the last (1), we discussed (1), in the next (1)
> **Versions:** v1.24 (1)
> **Definitions:** is an  (1)
> **Speakers:** - in (1)

#### [How the control plane and nodes work together](https://www.linkedin.com/learning/learning-kubernetes-16086900/how-the-control-plane-and-nodes-work-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/how-the-control-plane-and-nodes-work-together?u=76281980&t=0)** - In this video, we will use a time sequence diagram to visualize how the [[Kubernetes]] control plane and a node work together to create a pod. A time sequence diagram shows the sequential order of actions as they occur. The first action is at the top of the diagram, and the last is at the bottom. Software processes are often complex, and things can occur at the same time, so this time sequence diagram is a simplification of how Kubernetes works, but it will show us the basic order of how a pod gets scheduled onto a node. There are three different parts of this diagram. On the left is an icon of a person that represents you running a cube control command from your computer. In the middle, there's a representation of the Kubernetes control plane with all its components, and on the right side of the diagram is a representation of a single Kubernetes worker node with the kubelet and container runtime. The first action we see is you running the command, kubectl apply -f deployment.yaml. Our kubeconfig file gives permission to kubectl to communicate with our Kubernetes cluster. The kubectl command sends the information to the kube API server, which saves the new deployment spec in etcd. While this is happening, the kube controller-manager is checking the kube API server to see if there have been any changes since its last loop. Since there's a new deployment,
>
> **[1:34](https://www.linkedin.com/learning/learning-kubernetes-16086900/how-the-control-plane-and-nodes-work-together?u=76281980&t=94)** the cube scheduler then checks the kube API server to see if there are any new pods that have not been assigned a node. The kube API server tells the scheduler that there's a new pod that has not been placed on a specific node, so the scheduler chooses a node for the pod and sends that information back to the kube API server. The API server saves the state of the cluster in etcd. Now to the worker node. The kubelet checks the API server to see if there are any new pods that it has been assigned. The kube API server sends the pod spec for the new pod to the kubelet, which then pulls the image and creates the container using the container runtime. Once the pod has been created, the kubelet sends the pod status, healthy or unhealthy, back to the API server, which then saves the state to etcd. This is just a glimpse at one operation in a Kubernetes cluster, and it has a lot of steps. The kube API server regularly processes hundreds or thousands of requests to keep your cluster up and running. If you're interested in exploring this more deeply, at the 2021 KubeCon North America Conference, I gave a talk called Beyond Block Diagrams, Different Ways of Understanding Kubernetes Architecture, which you can check out in the link below. So through the help of a time sequence diagram, you've seen how a pod is created, starting with you running a kube control command,
>
> **[3:07](https://www.linkedin.com/learning/learning-kubernetes-16086900/how-the-control-plane-and-nodes-work-together?u=76281980&t=187)** sending that request to the Kubernetes control plane and creating a pod on a worker node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (8)
> **CLI Commands:** node (8), kubectl (3)
> **Env Vars:** api (10)
> **Definitions:** is a  (2), is an  (1)
> **Documentation:** spec (2)
> **File Paths:** deployment.yaml (1)
> **Speakers:** - in (1)


### 6. Advanced Topics

[↑ Back to Table of Contents](#table-of-contents)

#### [Ways to manage Kubernetes pods](https://www.linkedin.com/learning/learning-kubernetes-16086900/ways-to-manage-kubernetes-pods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/ways-to-manage-kubernetes-pods?u=76281980&t=0)** - [Instructor] In this course, we've created pods using the [[Kubernetes]] deployment object. There are other ways to manage groups of pods, and in this video we'll review deployments and learn about DaemonSets and jobs. The Kubernetes deployment is the most common way to deploy containerized applications. Deployments allow you to control the number of replicas running. When you have a new version of your application and you're ready to deploy it, Kubernetes can keep the old version up and running, roll out the new version, ensure the new pods are running and healthy, and then remove the old pods. This is a no-downtime upgrade, and it's one of the automated features people love best about Kubernetes. Another way to deploy pods is using a DaemonSet. A DaemonSet will put one copy of a container on every node running in the cluster, so you can't directly control the number of replicas running. DaemonSets usually run containers that are agents, or Daemons, running processes in the background. It's common for DaemonSets to run a program that collects metrics about the underlying node and other pods on that node. The final way to deploy more than one pod at a time is a Kubernetes job. A job will create one or more pods and run the container inside of them until it has successfully completed its task. An example of a Kubernetes job is an application that you deploy in a testing cluster that will generate a batch of data for your testing framework.
>
> **[1:34](https://www.linkedin.com/learning/learning-kubernetes-16086900/ways-to-manage-kubernetes-pods?u=76281980&t=94)** You only need to generate that data once in a while and you can delete the application once it's done, so a Kubernetes job is the way to go. There are a few ways to deploy and manage pods in a Kubernetes cluster, and in this video we covered the deployment, DaemonSet, and job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (8)
> **CLI Commands:** node (3)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)

#### [Running stateful workloads](https://www.linkedin.com/learning/learning-kubernetes-16086900/running-stateful-workloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/running-stateful-workloads?u=76281980&t=0)** - [Instructor] Earlier in the course, we deployed a sample application which was stateless and didn't communicate with the database. You might be wondering how do you handle [[Data Storage]] in [[Kubernetes]]? In this video, I'll discuss two ways. The first option is to connect your application with a database that is running outside of your cluster. For example, let's assume you have an application that uses [[PostgreSQL|Postgres]] for data persistence. You can either build and maintain a [[SQL]] database on a server that is separate from your cluster, or you can use a managed database service like [[Microsoft Azure|Azure]] SQL. Amazon RDS, or [[Google Cloud Platform (GCP)|Google Cloud]] SQL and configure it to communicate with Kubernetes. The second option is to use a Kubernetes Persistent Volume. Persistent volumes are a type of data storage that exists in your cluster and remain even after a pod is destroyed. You can use a Kubernetes object called a stateful set to make sure your updated application can communicate with the same volume as the previous pod. Data storage in Kubernetes is a big topic that could have its own course, but you should know that there are two main approaches to making a stateful application work in your cluster. You can set up a database independent of your cluster or you can use Kubernetes Persistent Volumes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (6), [[Data Storage]] (3), [[SQL]] (3), [[PostgreSQL|Postgres]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** sql (3), rds (1)
> **Prerequisites:** configure (1), set up (1)
> **CLI Commands:** make (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Kubernetes security](https://www.linkedin.com/learning/learning-kubernetes-16086900/kubernetes-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/kubernetes-security?u=76281980&t=0)** - [Narrator] Like any set of servers on the internet, [[Kubernetes]] is susceptible to attacks by malicious actors. The kinds of threats against Kubernetes clusters are always changing, but there's a standard set of security best practices you can apply to your clusters, and in this video, I'll show you a few you can apply right away. In targeting Kubernetes clusters, hackers are often hoping to achieve one of three things: To steal data from inside the cluster, to harness the computational power of the cluster to set up a [[Cryptocurrency]] mining operation, or to cause a distributed denial of service or DDoS attack. The first thing you can do to secure your Kubernetes cluster is to add some security context info to your pods. If someone accesses your cluster and can remotely control a container like we learned how to do in the video about Busy Box, they can create a security nightmare by installing new software and using the program to mess with other things running in your cluster. You can prevent this issue by adding two things to your container configuration: The first is to ensure that your containers are run as non-root, which means by execing into the pod, you can't use pseudo to run installation commands. In a manifest, it looks like this. We have the security context section, and we're not allowing privilege escalation. We're running as non-root,
>
> **[1:33](https://www.linkedin.com/learning/learning-kubernetes-16086900/kubernetes-security?u=76281980&t=93)** and we're dropping all capabilities. The second thing you want to do is make sure the container's file system is read only. It looks like line 35, read only root file system, is set as true. These two additions to your container configuration are a great way to improve the security of your pods. Another Kubernetes security practice you can start using right now is to scan your Kubernetes yaml manifest with a security tool like Snyk. Snyk has a command line tool that will scan your [[Infrastructure as code (IaC)|infrastructure as code]] files, including Kubernetes manifests. Here, I'm going to use my [[CLI]] tool to scan my deployment dot yaml file. Snyk, IEC, test, and then deployment dot yaml.
>
> **[2:27](https://www.linkedin.com/learning/learning-kubernetes-16086900/kubernetes-security?u=76281980&t=147)** All right, it looks like the test is done. There's one file with an issue, that's the deployment dot yaml, and there are six total issues. Let's look at those issues. And so this is the deployment dot yaml file that I didn't add the security context to. Okay, so there are three low severity issues. The container is running without a liveness probe. We haven't learned how to do that in this course, so we're not going to worry about it. Container could be running with an outdated image, we're not going worry about that. But this one. Container is running with writeable root file system. Now that is one we just talked about. So we would need to set read only root file system to true. Okay, so those are the low severity issues. Let's look at these medium severity issues. We have the container is running without user control, and it says the way to fix this is by setting the security context. Run as root to true. We did that in the last section. Container does not drop all default capabilities. It says you need to drop those, and then the container is running without privilege escalation control. That's where we need to allow privilege escalation and set that to false. So here's the yaml manifest that we just scanned, and here's the yaml manifest where we added the security context. This one's called secure dash deployment. Let's run that through the Snyk IAC tool. So Snyk IAC, test, secure dash deployment dot yaml.
>
> **[4:05](https://www.linkedin.com/learning/learning-kubernetes-16086900/kubernetes-security?u=76281980&t=245)** All right, the test is complete. There's still an issue, but there's only two issues, and those are the two that we don't need to worry about. So this is an example of how you can test your Kubernetes files with a security scanning tool like Snyk. The final thing I recommend you do to harden your Kubernetes clusters against attacks is to regularly update the version of Kubernetes that you are using. The most important updates to make are when security patches and updates are released. You can follow the open CVE page, which reports known Kubernetes security flaws, as well as when the fixes are released. When you're ready to learn more about Kubernetes security, I recommend you check out the Kubernetes Hardening Guide released by the US National Security Agency. I'm looking at the Hardening Guide released in August of 2022, but when you look, see if there's a more recent version you can reference. Because the NSA is releasing updates as they learn more about how to secure Kubernetes clusters. Kubernetes security is a vast topic, but in this video we covered three techniques that you can use to secure your cluster right away. First, add security context info to your containers. Second, scan your yaml manifests with a tool like Snyk. And third, regularly update your Kubernetes version, especially when a security patch is released.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (16), [[Cryptocurrency]] (1), [[Infrastructure as code (IaC)|Infrastructure as code]] (1), [[CLI]] (1)
> **Env Vars:** iac (2), cli (1), iec (1), cve (1), nsa (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), we covered (1)
> **Definitions:** is an  (1), is a  (1)
> **Tools:** command line (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps on your Kubernetes voyage](https://www.linkedin.com/learning/learning-kubernetes-16086900/next-steps-on-your-kubernetes-voyage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-kubernetes-16086900/next-steps-on-your-kubernetes-voyage?u=76281980&t=0)** - Thanks for embarking on your [[Kubernetes]] journey with me. Knowing how to set up a Kubernetes cluster, deploying applications and managing those applications with Kubernetes is an in demand skill that can help you land a job or get promoted at your current one. Because Kubernetes is an open source project, it's always under development and new versions are released frequently. To keep up with what's new, I recommend following announcements about the project from the CNCF. To dive more deeply into Kubernetes, I suggest you take a look at other [[LinkedIn]] Learning courses, especially those in the learning path called Master Cloud-Native Infrastructure with Kubernetes. Another way to learn more about Kubernetes is to watch talks from past CubeCon conferences, which you can find on YouTube. An excellent way to practice working with a cluster is by taking one of the [[Linux]] Foundation's Kubernetes certification exams, like the Kubernetes and Cloud Native Associate exam, the Certified Kubernetes Application Developer exam or the Certified Kubernetes Administrator exam. These tests are tough, but they are worth it because studying for them will push you to learn more about how to use Kubernetes. You could also follow me on LinkedIn to see what I'm posting about in the world of Kubernetes. I hope this course has inspired you to learn more about Kubernetes or other cloud native technologies. In keeping with the nautical theme,
>
> **[1:32](https://www.linkedin.com/learning/learning-kubernetes-16086900/next-steps-on-your-kubernetes-voyage?u=76281980&t=92)** fair winds and following seas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (14), [[LinkedIn]] (2), [[Linux]] (1)
> **Definitions:** is an  (2)
> **CLI Commands:** find (1)
> **Env Vars:** cncf (1)
> **Prerequisites:** set up (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Kim Schlesinger]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-kubernetes-3212391/codespaces)

## Skills Covered

- Kubernetes

## Path Context

### In [[The Top 10 Most Popular Courses among Engineering Professionals]]
← [[JavaScript Essential Training]] | **7 of 10** | [[Git Essential Training]] →

### In [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
← [[Learning Docker]] | **2 of 10** | [[Generative AI and Predictive AI in the Cloud- Foundational Concepts and Scenarios]] →

### In [[Getting Started with Kubernetes]]
**1 of 6** | [[Kubernetes- Your First Project (2021)]] →

## Appears In

- [[The Top 10 Most Popular Courses among Engineering Professionals]]
- [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
- [[Getting Started with Kubernetes]]

## Related Courses

_Courses sharing skills:_

- [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] — Kubernetes
- [[Securing Containers and Kubernetes Ecosystem]] — Kubernetes
- [[Kubernetes- Cloud Native Ecosystem]] — Kubernetes
- [[Kubernetes- Microservices]] — Kubernetes
- [[Kubernetes- Essential Tools]] — Kubernetes

---

[↑ Back to top](#)