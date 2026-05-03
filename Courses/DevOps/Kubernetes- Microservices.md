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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/cloud-native-networking-with-kubernetes?u=76281980&t=0)** - It's essential that you know how [[Kubernetes]] networking supports communication between [[Microservices]], especially if you're on a [[DevOps]], [[DevSecOps]], or platform engineering team. Kubernetes is the go-to tool used to deploy and manage cloud-native software because it was built to support microservices. In this course, I'll help you get hands-on experience deploying a few microservices and learning about how the network in a Kubernetes cluster works. I'll also cover some more advanced topics like network policies, Ingres, and service meshes. I'm Kim Schlesinger, a tech educator and Kubernetes enthusiast, and I'll guide you through how to deploy microservices in a Kubernetes cluster. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (5), [[Microservices]] (4), [[DevOps]] (1), [[DevSecOps]] (1)
> **Speakers:** - it (1)

#### [What you should know](https://www.linkedin.com/learning/kubernetes-microservices-23787657/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/what-you-should-know?u=76281980&t=1)** - In this course, you'll learn more about the network inside a [[Kubernetes]] cluster, which was designed to support easy communication between [[Microservices]] that make up working applications. In order to complete the hands-on activities in this course, you'll need access to a terminal application where you can run Unix commands, you need Docker installed and running, and a connection to the internet. In this course, I'm assuming you know a few things about Kubernetes, including what a cluster, pods, and deployments are. I'm also assuming you've used kubectl, the Kubernetes command line tool before. Finally, you'll want to know a little bit about the CNCF, also known as the Cloud Native Computing Foundation. The most important thing you need to complete this course is the desire to learn more about the different techniques you can use to deploy microservices in a Kubernetes cluster. If you've got a little experience with Kubernetes and you're excited to learn, keep watching this course.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] This course has hands-on activities that you'll be able to run on your computer, and I've prepared the files for you. You can download them in two different ways. The first is the exercise files. To find these, go to the exercise files link on the course page and download the zip file. Then, unzip the file. Navigate to the folder created. Inside you'll see the folders that represent each video within the course. Open up the folder that corresponds to the lesson you're watching, and you'll find all the materials you'll need for that video. Since some of the lessons in the course are driven through terminal commands, I start out each lesson in this directory, and you'll want to do the same. I'm working on a Mac, but these commands will work on [[Linux]] and [[Windows]]. The second option for accessing the course files is [[GitHub]]. Go to the [[LinkedIn]] learning org on GitHub and search for [[Kubernetes]]-[[Microservices]]. (keyboard clicking) The repo's full name is Kubernetes-microservices-3808182.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-microservices-23787657/how-to-use-the-exercise-files?u=76281980&t=76)** Clone that repo on your machine and change into the directory. Choose one of these download methods and make sure you've changed into the directory, so the commands I use work the same way for you on your computer. Once you've got the files on your machine, you're ready to move on.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=0)** - [Instructor] [[Kubernetes]] is a container orchestration system built to run applications as containers in the cloud and enable communication between those containers. Kubernetes was developed in response to issues that arose when people deployed applications using physical servers and [[Virtual Machines]], and it's helpful to understand some of this history in order to appreciate Kubernetes. The first part of understanding this history is to learn about the difference between monolithic and [[Microservices]] architecture. A monolithic architecture is when an application is developed in a single code base and deployed all at once. Microservices architecture, often shortened to the term microservices, is when different parts of an application are developed and run independently as containers. Cloud native applications are synonymous with microservices architecture. The benefits of a monolithic app are that they are easier for a team of software engineers to develop and test because all of the code is in one repository. Another benefit of monoliths is that they have only a few points of entry, so they are easier to secure and they do not need complex networking enabled, so your company may not need a [[DevOps]] or platform team. The downside of a monolithic app is that it is difficult to keep up to date with all the application's dependencies and libraries. Every time you and your team deploy, you have to deploy the entire app
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=92)** instead of just the part you updated, and when one part of the application breaks, the entire thing can go down and they do not scale well. In contrast, the benefits of microservices include how fast you can deploy a service. When a change is made to the code of one microservice, you deploy the update on its own quickly and without impacting the other services. In the same vein, it's easier to update the software versions of your dependencies and libraries because you are only concerned with what it is in one small container, not a giant application. Another benefit is increased fault tolerance. When one service breaks, it doesn't automatically take down the entire app. Finally, microservices are easier to scale than monoliths because you can create more replicas of any service, but not necessarily all of them. This ultimately saves you or your company money. Monoliths were the most popular application architecture in the 2000s and early 2010s, when most companies owned the physical servers that hosted their websites and applications, and it made sense to have all their application code in one place and on one server. Microservices started to become popular in the mid 2010s when Docker, one of the first container technologies, was widely available to developers. At the same time, [[Cloud Services]] that offered virtual machines like AWS's [[Amazon EC2|EC2]] and [[Google]]'s Compute Engine became available.
>
> **[3:09](https://www.linkedin.com/learning/kubernetes-microservices-23787657/monolithic-vs-microservices-architecture?u=76281980&t=189)** Once containers were mainstream and companies were migrating to the cloud, people began looking for ways to put as many containers as possible on one virtual machine to make the best use of computing resources and to save money. Kubernetes was in part, designed to solve that problem. Now that you know why microservices led to the development of Kubernetes, in the next video, let's go in depth about the ways people have used servers to deploy applications and how Kubernetes fits into that history.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=0)** - [Instructor] In order to fully appreciate the power of [[Kubernetes]], it's helpful to understand how people approached application deployment before the advent of containers and cloud native applications. So, let's take a look at the history of application deployments and why containers and container orchestration systems became popular. In the 1990s and 2000s, most companies made their websites available on the internet through application servers. This meant that someone was responsible for maintaining a physical server. The computer itself was on the premises of the [[Microsoft Office|office]] building or at a data center, and they needed to install an application server, like Apache Tomcat or NGINX, to serve up their website when a request came in from the internet. In this era, system administrators or CIS admins would take the application code from the software engineers, compress it as a tarball, and send the tarball to an application server using FTP and install it with a bash script. This approach meant that there was one server with one operating system serving up one application, which often left a lot of the computer's CPU and memory unused. Monolithic applications were a good fit for this style of deployment. In the mid-2000s, the age of virtualization or [[Virtual Machines]] arrived. Virtual machines are when a developer runs more than one guest operating system on a single server.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=94)** The key to being able to run virtual machines on a host is a technology called a hypervisor, which creates and runs virtual machines. In this era, CIS admins would spin up many virtual machines on a single server. Then, the CIS admin would take the application code from software engineers, compress it as a tarball, and send the tarball to an application server running on each virtual machine. This approach meant that there was one server with multiple operating systems serving up one application per OS. So long the days of one server per application, now there could be more than one application deployment per computer. Running multiple VMs and applications on a host is a much more efficient use of a computer's CPU and memory, and multiple replicas of monolithic applications could be deployed on different virtual machines. The next shift in deployment techniques was started with the invention of container technologies. Docker was released in 2013, and it was the first container technology to become widely used by people in the tech industry. According to Docker, a container is a lightweight, standalone, executable package of a piece of software that includes everything needed to run it. Containers are sort of like virtual machines, except they don't need a guest operating system to run because they use the kernel of the host machine to virtualize their own OS.
>
> **[3:09](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=189)** As such, you can run many more containers on a single server than you can VMs. When container technology became popular, it was possible to break up parts of larger monolithic apps into smaller parts and deploy them as [[Microservices]]. At the time, Docker was only meant to run on a single server, and it only used commands, not configuration files, which made automation nearly impossible. In order to solve the problem of only being able to use imperative commands to deploy and update containers on one server at a time, container orchestration tools were born. [[Google]] donated the Kubernetes project to the CNCF in 2015, but at that time, it wasn't clear that it would become the most popular container management tool. Other tools that emerged at that time were Mesos and Docker Swarm. The rise of container orchestration tools allowed CIS admins and [[DevOps]] engineers to automate most of their deployments. And the declarative nature of Kubernetes means that many issues that occur in a cluster can be handled by Kubernetes itself, not a person. The combination of distributed computing systems and packing containers on a host makes for the most efficient use of a computer's CPU and memory. There's another approach to deployment, which came after container orchestration tools, called serverless. We won't cover it in this course,
>
> **[4:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/history-of-application-deployments?u=76281980&t=280)** but I encourage you to take a look. The key takeaway to understand from this history is that before the cloud, software applications were tied to the [[Hardware]] they were running on, and that limited how much traffic applications could serve up at one time. Now, we have a wide range of container orchestration tools to work with. In the next video, I'll show you the Kubernetes networking model, which was designed to help containers easily communicate with each other inside a cluster.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=0)** - [Instructor] Let's take a look at the [[Kubernetes]] Network Model and its four requirements. Kubernetes was designed for its network layer to be pluggable, meaning that there can be different software packages that set up and control cluster networking. These tools are called Container Network Interfaces, or CNI plugins. In Kubernetes, a CNI must create a private network in the cluster that meets the following requirements. One, containers must be able to communicate with other containers in the same pod. Two, pods must be able to communicate with other pods. Three, pods must be able to communicate with services. And four, there must be a way for traffic from the internet to communicate with services inside a Kubernetes cluster. To allow different parts of Kubernetes to communicate with each other, CNIs assign unique IP addresses to pods. There are three parts of a cluster that get unique IP addresses. Pods, the CNI assigns pods IP addresses. Services, the cube API assigns these IP addresses. And nodes, the kubelet or cloud controller manager assigns these IP addresses. In Kubernetes, you can assign IPv4 addresses, IPv6 addresses, or set up a dual stack and use both.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/kubernetes-network-model?u=76281980&t=96)** Kubernetes can use TCP, UDP, and SCTP networking protocols. Now that you know the network inside a Kubernetes cluster must meet four requirements, and also that a CNI is what implements these four requirements, you'll learn more about these tools in the next video.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=0)** - [Instructor] In this video, let's talk more about the Container Network Interface project, and how CNI plugins make networking in a cluster possible. A quick review. There are four issues that must be addressed in the [[Kubernetes]] network model. Containers must be able to communicate with other containers in the same pod. Pods must be able to communicate with other pods. Pods must be able to communicate with services, and there must be a way for traffic from the internet to communicate with services inside the Kubernetes cluster. There are several software tools that you can install and will implement these features, and they are called CNI Plugins. A CNI plugin must conform to the specifications set out by the CNCF Container Network Interface Project. Most CNIs are [[Open-Source Software]] projects maintained by a community or a specific company. According to the CNI spec, at a minimum, a container network needs to be able to assign IP addresses to pods, so that they can communicate with one another over a private network. Flannel is a CNI plugin that provides a layer three IPV4 network between multiple nodes in a cluster, but it does not control how containers are networked to the host. Flannel is an example of a CNI plugin with the least amount of features. An example of a more complex CNI plugin is Cilium,
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/container-network-interface?u=76281980&t=96)** which provides networking capabilities, but also observability and security features. Like Flannel, Cilium provides a layer three IPV4 network between multiple nodes in a cluster, but it can also extend that network to multiple Kubernetes clusters. Enforce network policies, load balance between pods and external services, and it can be configured to be a service [[Mesh]]. You might be wondering, where can I find a list of CNI plugins? And the answer is to look at the CNCF landscape, and [[Zoom]] in on the cloud-native network section. Here you'll see a list of CNCF-sponsored CNI plugins. I can see Cilium and Flannel, but there are other plugins, including Isovalent, Weave Net, and Calico. You will install Calico in a mini cube cluster in the next chapter. In Kubernetes, the purpose of a CNI plugin is to create a network where containers and pods can communicate with one another using TCP/IP. There are several different CNI plugins. Some, like Flannel, only set up communication between pods, while more complicated ones, like Cilium, set up a network and much, much more. In the next couple of videos, I'll show you how to set up a Kubernetes cluster using Minicube, and you'll swap out the default CNI with Calico.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=0)** - [Instructor] In the last chapter, I talked about the history of containers and container management tools and how they changed how developers deployed their applications and led to the popularity of [[Microservices]] architecture. In this video, I'll show you how to install and start a mini cube cluster. Before installing minicube, you need to have Docker already installed and running. You can check that Docker is running by typing the command docker and hitting enter. If you see this list of commands, that means Docker is running. Minicube is software that lets you run a [[Kubernetes]] cluster using just your computer, and it's a tool that can help you learn Kubernetes. It's free because you are not required to pay a cloud provider for compute resources, but minicube is not fit for production clusters because it runs locally on your computer and lacks the security and networking capabilities offered by a cloud provider. To get started with the installation process, find the get started page in the mini cube docs and then scroll down to find installation. I'm going to show you how to install minicube on [[Linux]], [[Windows]], and Mac. You only need to follow instructions for your operating system and then you can skip the [[Representational State Transfer (REST)|rest]] until we get to how to start Minicube. All right, I am going to first install Minicube on Linux on an
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=95)** [[Ubuntu]] machine. So on the installation page, I clicked over to the operating system Linux, and now I need to select my CPU architecture. To check that, you can go to your command line, run the command, uname-P, and it'll tell you your processor. I've got an X 86 64. So back to the installation commands. I'm going to make sure that's selected. If I had ARM 64, I'd use that, ARMv7 there. So X86-64 or whatever your architecture is. Under release type, either stable or beta, we want stable. And then for the installer type, either binary, Debian, or RPM package, it's up to you in what you normally use. In this video, I'm going to use the binary download. So I'm going to copy this command here, go back to my command line and hit enter. I got to enter my password. All right, looks like it worked. Let's check by running the command mini cube. Hey, if you see this list of mini cube commands, that means you have installed Minicube on your Linux machine. All right, now I'm going to show you how to install minicube on Windows. First thing I'm going to do is go to [[Powershell]] and make sure I've got Docker installed and running. Run the Docker command, see that? That's good.
>
> **[3:08](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=188)** Verifies it's working. And then back to the mini cube installation page. I've selected the Windows option for operating system. No choices in architecture. We're sticking with stable as the release type. And you've got three choices for the installer type, .EXE Windows Package manager, chocolatey. I'm going to go with Windows Package manager. Going to copy that command and head back to PowerShell and run that command. Select that one. All right, it's looking promising. Yes, I agree to all the source agreement terms. Looks like it's found the mini cube binaries to download. We're going to say yes. All right, it says successfully installed. Let's check by running the command mini cube. All right, I've got an error and so let's try running PowerShell as an administrator, see if that works. Yes, all right. And if I type in minicube and hit enter, great. Looks like Minicube is up and running. Okay, so I've shown you the way to install Minicube on Linux and Windows. And finally I will show you how to do it on Mac OS. So let's switch over to the Mac OS operating system.
>
> **[4:42](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=282)** Like Linux, I need to know my CPU architecture and we can run the same command. Uname-P, I am running an ARM CPU. So back to the installation page, switch over to that. I'm going to stick with stable. And for the installer type, we have the binary download. And Homebrew, I love Homebrew, so I'm going to copy that command and run that, brew install mini cube. It's looking promising. Okay, and just like with the other operating systems, we're going to try running mini cube. Okay, that is the sign that is installed. So now that all three operating systems have mini cube installed, your next objective is to get a mini cube cluster up and running. Here's how, you're going to run the command mini cube start. And we want to name our cluster mini cube calls, names, profiles. So dash P is how we specify the profile name. And we're going to call ours demo. I love the emojis that are at the beginning of every line. So minicube is pulling Docker images down and creating containers that are going to be our Kubernetes cluster running on our computer. This can take a few minutes, no problem.
>
> **[6:17](https://www.linkedin.com/learning/kubernetes-microservices-23787657/spin-up-a-minikube-cluster-in-windows-mac-and-linux?u=76281980&t=377)** All right, looks like it's done. I want to verify that I've got a cluster. So let's use cube control, get nodes, see what our node situation is. We've got one node, it's called demo. It's ready. It's the control plane node. That is what we want. And let me look at all pods, cube control, get pods, dash capital A. Got all of our pods up and running. All right, great work. You've installed and started Mini cube on your computer. And in the next video I'm going to show you how to change mini cube's default CNI, to a more robust one.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=0)** - [Lecturer] In the last video, you installed and started a minikube cluster on your computer. In this video, you'll install the Calico CNI to experience how CNIs are modular and pluggable. Minikube's default CNI plugin is called Kindnet. Kindnet was created to be one of the simplest [[Kubernetes]] CNIs and its only capability is to assign IP addresses to the pods in your cluster. Kindnet is the default CNI for minikube and Kind, both tools that allow you to run a cluster on your computer. Because Kindnet was designed to be a simple CNI plugin, it does not support network policies, a way to control traffic flow to your applications at the IP address or port level. We're going to explore network policies later in the course, so I want you to have experience installing a different CNI solution than what comes by default. Minikube allows users to replace Kindnet with Calico, Cilium, or Flannel, and we're going to install Calico. The Calico CNI plugin is a popular open source project that provides container networking, [[Network Security]], and monitoring features for your network. Calico's mascot is this cute Calico cat. There are a few ways to install Calico in minikube, through manifests, using a custom operator, or by enabling minikube's built-in version of Calico. Of all these versions, the built-in version uses the fewest compute resources,
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=95)** so you will use that one. In order to install Calico, you will delete your original cluster and create a new cluster and install Calico using a couple of flags. First, let's delete your cluster. Run the command minikube delete -p demo. Once your cluster is deleted, run the command minikube start --network-plugin=cni --cni=calico -p demo.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-microservices-23787657/install-calico?u=76281980&t=140)** Once your new cluster is complete, verify that Calico is working. Let's find some Calico pods by running the command kubectrl get pods -A for all namespaces. You see, I've got a calico-kube-controllers pod as well as a calico-node pod, and once those two pods are running, the installation of Calico is complete. It may take a minute or two for these pods to get up and running. So if you check once and they're not ready, wait a little bit and then check again. The networking layer of Kubernetes was designed to be able to use lots of different kinds of CNI plugins, and in this video, you switched minikube's default CNI, Kindnet, with a more complex CNI, Calico. We'll explore network policies later, but next up, I'll show you how to deploy the example [[Microservices]] in your cluster.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=0)** - [Instructor] In the last few videos, you installed and started a mini cube cluster with Calico as your CNI. In this video, you'll deploy two backend services to your cluster. Take a look at the 0203 directory. There you'll see two YAML files, one called Learning Resources, API, and another called Echo Server. Let's look first at the learning resources API. All right, well the first file that we have here is a deployment, called Learning Resources. It's going to have three replicas running. So three pods, got some environment variables that we're setting, and then if we keep scrolling down, we see the service definition. So the service will be called Learning Service and it will be a cluster IP service. And we'll talk more about that in a bit. Now take a look at EchoServer.yaml, similar layout. This is a deployment called Echo Server. We will be running two replicas. I got some of the information about the image it's going to pull. And here at the service definition, the service will be called Echo Service, and this is going to be a node port type service. All right, let's go ahead and create these resources. Let's create the Learning Resources API first. Run the command, cubecontrolapply-FlearningresourcesAPI.Yaml and [[Kubernetes]] is telling us that the learning resources
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-backend-microservices?u=76281980&t=97)** deployment and service was created. And let's do the same for the Echo server. CubeControlapply-Fechoserver.yaml, I'm getting a similar message. Let's take a look at the pods. Cube control get pods. And these two things are in the default namespace, so no need to specify a namespace. Beautiful. We have two echo server pods running and three learning resources pods running. And the final thing that we're going to do is take a look at the services, run the command cube control, get service. SBC is the short name. All right, we have three services running in the default namespace. We have the Echo service, Kubernetes service. That gets created by default when you generate your cluster and the learning service that we made. In the next chapter, I'll show you what each backend service does, but in this video you deployed two backend services in your cluster and in the next video, you'll deploy one front end service.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=0)** - [Instructor] In the last video, you deployed two backend services, and in this video, I'll show you how to deploy the frontend service. Take a look at the 02_04 directory. There, you'll see the frontend-ui.yaml file. Let's take a look. All right, we've got a few [[Kubernetes]] objects in here, and they're separated by these three horizontal lines. The first thing we're going to create when we run this file is a namespace called frontend. The next thing that's going to be created is this deployment. It is called frontend and frontend-ui. We're going to be running three replicas of the frontend, and there's the information about the containers. Looks like we're setting a environment variable. And then finally, we are going to create a service called the frontend-service, and it's a type, LoadBalancer. That's a new type of service for us. Let's create this deployment and service. Run the command, kubectl apply -f frontend-ui.yaml. All right, it says those three things were created. Let's check the pods. kubectl get pods, huh? These are the echo server and learning resources, oh yeah. We created the frontend service in the frontend namespace. So let's update our command to use that,
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-microservices-23787657/deploy-the-frontend-microservice?u=76281980&t=93)** So kubectl -n for namespace, frontend, and then get pods. All right, there are our three replicas of the frontend pods. They are all running. Let's check the services. Just one service. In the frontend namespace, we have the frontend-service. It's a type LoadBalancer, and got a little bit more information there that we'll cover in the next chapter. Okay, it's time for a little celebration because your learning environment is now ready to go. In this chapter, you installed minikube, you created a cluster and changed the CNI from Kindnet to Calico, and now you've got three [[Microservices]] deployed and running in that cluster. In the next chapter, I'll help you delve into the details of how Kubernetes uses different service types to allow pods to communicate with one another.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=0)** - [Instructor] In the last chapter, you got your learning environment up and running. In this chapter, I'll walk you through the finer details of how to understand [[Kubernetes]] service types. The Kubernetes service API is incredibly powerful because it can create a service that has a stable IP address and name. And when a request is sent to those things, it load balances traffic to pods whose IP addresses are ever changing. That means instead of trying to keep track of pod IP addresses, which change frequently because pods are terminated and restarted, you can use the service IP address or name to ask for data. Let's look at an example. This is the YAML manifest for your frontend UI deployment and service. And that microservice, in order to have anything to show you that's interesting, it has to make a request to the learning resources API in order to gather data. So, in this example, I've hardcoded the IP address of a pod and the port number in order for that application to make the request. But if I do that, I'm constantly going to have to be changing the IP address as the pod changes, and I can't keep up with that. Instead, what I'm going to want to do is use the DNS name of a service or an IP name of a service. In this example, I'm using the DNS name of the learning service.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=94)** And so, now when my frontend containers spin up and they start making requests to the learning resource's backend, I'm just sending that to the service, which is load balancing to the pods, instead of trying to communicate with the pods directly. With that example in mind, let's get into the different kinds of services. The first is a ClusterIP service, let's take a look. Here's an example of YAML manifest of a ClusterIP service, and it should look familiar because it's the service that's running your learning resources pod. So, in this manifest, we're specifying the Kubernetes object type is Service. We're giving a name to the service itself, so learning-service. And then this is the most important part, this spec selector. So, what this means is that whatever is listed under the selectors, here we have APP and then learning-resources, any pods with those label are going to be affiliated with the learning service resource. So, you've got to be very intentional when you're doing that. But all the learning resource API pods will be behind the service. For ports, we're specifying that the learning service port is 80, which is the default, we don't have to worry about it. And when traffic hits the service IP address, it will route traffic to port 3000 in the container. And finally, we're saying this is the type ClusterIP. The ClusterIP type creates a service
>
> **[3:09](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=189)** with a fixed IP address that is only available within the cluster, meaning no traffic from outside the cluster can reach the service, but any traffic from within your cluster can. In Kubernetes, if you don't specify the service type in your manifest, a cluster IP is what you'll get. The next type of service is NodePort. A NodePort service lets you expose a group of pods directly to the internet. Let's take a look at this YAML manifest. Once again, we're going to be creating a Kubernetes service. Its name will be echo-service, and we have this selector here. And so, any pods that have the label app: echo-server will receive traffic from this service. Now getting specifically into what a NodePort service does, so a NodePort service uses the IP address of your Kubernetes nodes, and then you give it a node port. And so, anyone who knows the IP address for your Kubernetes node and this port can send a request there. That request will be accepted by the service and load balanced to, in this case, the echo-server pod. So, in this manifest, I have specified that the NodePort is 30076, but if you don't specify that, Kubernetes will allocate a port between 30000 and 32767. A NodePort service is a good option if you want to use your own external load balancer. But because this service opens these pods
>
> **[4:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=286)** to traffic from the internet, it has some really serious security implications, so think through that if you're going to use this. The next kind of service is the LoadBalancer type. Let's take a look at this YAML file. Once again, we have the kind service, the name of the service is frontend, and the pods that the service is going to direct traffic to are any with the label app: frontend-ui, and we've got the type LoadBalancer down here. So, the LoadBalancer service is really cool because it's one of the quickest ways to get your application available on the internet. If you're running Kubernetes with a cloud service like AWS, [[Google Cloud Platform (GCP)|Google Cloud]], or [[Microsoft Azure|Azure]], creating a LoadBalancer service will trigger the creation of one of those load balancers that's going to generate a public IP address. Any traffic sent to that IP address will then be routed into the cluster and load balanced across pods. Finally, there's the ExternalName service. ExternalName services are interesting because instead of load balancing traffic to pods inside a cluster, what the ExternalName service does is it sends traffic to a DNS name that's generally outside of your cluster. This is useful because if some parts of your applications rely on [[Databases]] or other [[Microservices]] that are not inside your Kubernetes cluster,
>
> **[6:19](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=379)** you can still send traffic there. So, in this example, we have a service that is called the database-service. It lives in the prod name space. And when traffic is sent to that service, it is going to redirect that traffic to this DNS name, my.[[PostgreSQL|postgres]].[database.com](https://database.com). It's this spec external name where you specify the DNS name where that traffic is going to go. Knowing about these service types is the most important part of this course, so let's review. A ClusterIP service creates a service with a stable IP address that is only available within your Kubernetes cluster. A NodePort service opens a port on one or more of your Kubernetes nodes. And when traffic is sent to that node IP address and port number, it is then routed to the group of pods behind that service. A LoadBalancer service works with your cloud provider to create one of their load balancers with an IP address. And an ExternalName service does not use pod selectors like all those other services. Instead, what it does is it sends traffic it receives to an IP address or DNS name that is outside of your Kubernetes cluster. All right, that's a lot of information, and it's okay if you're feeling overwhelmed because in the next few videos I'll slow down and show you how these services work
>
> **[7:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-kubernetes-services?u=76281980&t=474)** by examining the microservices that you already deployed in your cluster.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=0)** - [Narrator] So far in this course, you've learned about the history of application deployments, you've spun up a cluster locally on your computer, you've deployed some [[Microservices]], and you've learned about the different kinds of service types in [[Kubernetes]]. Now, it's finally time for you to get some hands-on experience with the magic of Kubernetes internal networking. And the way that we're going to do that is by making an HTTP request to a cluster IP service. Let's go. The goal of this video is that you are able to make an HTTP get request to the Learning Resources Service and see its [[JSON]] payload. Remember, cluster IP addresses can only be accessed from within a cluster. And I also want to remind you that the Learning Service container is listening on Port 3,000. So in order to make an HTTP request inside of our Kubernetes cluster, we're going to have to somehow have an HTTP request service running from within the cluster. And the way that we're going to do that is with a tool called BusyBox. So here's the spec for our BusyBox pod. BusyBox is known as the Swiss Army Knife of Embedded [[Linux]], and it's a binary that contains a lot of well-known Unix tools like ack, date, whoamI, and the one we're using today, Wget. It's a great tool for debugging
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=94)** and troubleshooting issues in a Linux environment. And since Kubernetes runs on Linux, it works well for that. So what we're going to do is we're going to create this BusyBox pod, run the command kubectrl-f BusyBox.yaml. Let's find the pod in our list of pods, kubectrl get pods. All right. This is in the default namespace. It's at the top of the list. And so now that this pod is running, we somehow have to get into that pod. And the way that we do that is through the kubectrl exec command. Here's how you structure that command. You say kubectrl exec, you pass the flag IT, which stands for Interactive Terminal. You want to be able to get into this container and run commands from within it. And then you say the name of the pod you want to exec into. So in our case that is BusyBox. And then you do two dashes and you say, what's the shell going to be or what's the command? We're going to hopefully land on a command prompt. So when I press enter, you see I am no longer at the command prompt where I have the cloud and [[LinkedIn]] in the name of the repository we're working in because now we're in the BusyBox pod. Cool. All right, so our first goal is we just want to see how the learning resources API works
>
> **[3:08](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=188)** by making a get request to a pod. All right, so we need to find the IP address of our pods. Since I'm running BusyBox and I have the BusyBox command prompt in this part of my terminal, I want to have another tab in my terminal where I can run kubectrl commands. All right, so got a different tab open and I'm looking for IP addresses of the learning resources pods. So let's do kubectrl get pods. That's the default namespace. Don't need to specify that. In order to see the IP address of the pods, you have to ask for the wide output, which is -O, which stands for output wide. All right, I have my BusyBox pods, my Echo server pods, and I've got the Learning Resources pods. And I'm just going to make a request to one of these. And so I'm going to grab this IP address. The IP address you have on your machine may be different. Copy and paste that one. All right, going back to our tab that's running BusyBox, our goal is to make a get request to the pod. And so we're going to use the tool Wget. And if you just use Wget and you don't pass in any flags, it will download whatever response it gets as an index.[[HTML]] file. That can be annoying when you are making multiple get requests 'cause you have to delete it. So we're going to use -O-
>
> **[4:44](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=284)** and then paste the pod IP. All right, so I pasted that. It says connection refused. Oh, yeah, let's look back. Since we're talking directly with the container, we have to specify the port number. And so we're going to say the IP address and Port 3,000. So let's try that request again, but put 3,000 at the end. All right, look at that. It worked. This is a ton of text, but when we scroll up, we see this is a JSON payload, and it is intermediate level Kubernetes Learning Resources. And there is a list of learning resources for you here. Outstanding. All right, so we made that request to a single pod, but we've learned that we don't do that, because pods get destroyed and recreated a lot in Kubernetes. And so what we're going to do now is we're actually going to make that request to the service itself. So let me clear out the BusyBox terminal and let's go back to our tab over here. And so I need to find my service info. So let's do kubectrl get service, and see what we can see. All right, so we've got the Echo service, the Kubernetes service, and the Learning Service. That's the service that routes any traffic it receives to the Learning Resources pods. So let's do that one.
>
> **[6:19](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=379)** Now you can just do the cluster IP of the service, but let's actually just do the service name and see how that works. So back to the BusyBox tab, running a get request. So we're going to say Wget -0- and it is called Learning Service. Oh, my. Isn't that cool? I didn't have to give Kubernetes a specific IP address. It resolved that and it gave me that JSON payload I was expecting. Beautiful. And then I want to show you one final way. And it is the service DNS name. And so we want to make a Wget request. So Wget -0-, and here's how you put together a Kubernetes objects service name. You start with HTTP, and then you say the name of the object. So for us, that is Learning Service. And then you use a dot, and you say the namespace where that thing lives. For us, the Learning Service is in the default namespace, and then a dot. And Kubernetes now knows, hey, I'm looking for something called Learning Service in the default namespace, but what kind of Kubernetes object is it? In our case, it's a service and we use the short name SVC. Last thing you have to specify is where's the cluster? So the cluster and then .local.
>
> **[7:54](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-clusterip-service?u=76281980&t=474)** All right, there it is. That is beautiful. Let's scroll up and find that Wget request. Excellent. So we see we make the request to the DNS name. Kubernetes connects with that name, and it resolves to the IP address of the service. So you don't even need to worry about knowing the IP address of your services. You just need to know their name, and if you want to create the DNS name request, the pattern in which those requests are built. All right, that was a lot of information, but in this video, you learned how to leverage the Kubernetes Service Discovery feature with a cluster IP service. We first made a request to a specific pod IP address, and we saw the JSON payload, but we don't want to do that because pods spin up and spin down all the time in Kubernetes. Next thing we did is we made a request to just the service name. And then the last thing we did is most exciting, is we made a request to the Cluster IP Service DNS name. In the next video, I'll show you how to go through this process with a node port service.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=0)** - [Instructor] In the last video, you accessed a ClusterIP service, and in this video, I'll show you how to access data through a NodePort service. Remember, the NodePort service lets you expose a group of pods to the internet directly. When you create a NodePort service, [[Kubernetes]] opens a port on one or more of your nodes and it allows traffic in at a specific port number. I'm going to show you how this works and we are going to be exploring the echo-service. So like the learning-service, the echo-service is deployed in the default namespace. Unlike the learning-service, it is a NodePort type service and its port is 80, which is the default port. So if you're making a request to the container directly, you don't have to specify the port. Like we did with the ClusterIP service, let's get the data from the echo-service containers. We'll start by making a request to the pod IP address. Then we will see how NodePorts work and we'll make a request directly to an IP address of one of our nodes and then the service name. In order to make a request inside the cluster, we're going to use our BusyBox pod again. My BusyBox pod is still running and I'm going to exec into it, kubectl exec -it busybox -- sh. Excellent. All right, so I still have two tabs open. And the first goal is to make a request
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=96)** to the echo-server's pod IP address. So let's do kubectl get pods -o wide again. All right, so I have two echo-server pods. They have an IP address that ends in, for me, 134, 135. Yours will probably be different. Copy one of those addresses. And let's go back to inside our BusyBox pod, wget request. So wget -O-, and I'm going to paste that IP address. All right, so this is the [[JSON]] payload, you can expect with the echo-server. It just echoes back information that was passed in through the GET request that you made. So this looks great. Let's clear that out. So we've made a request to the pod IP. Remember that's not a good practice, because those change so frequently. So let's make a request to the IP address of the service itself, so this is kind of cool. So you need to find the IP address of your Kubernetes nodes, kubectl get nodes -o wide. Now the minikube cluster that we have spun up, it only has one node on it. So what we're going to do is we're going to get the IP address of the node itself, and let's go back and just make a wget request to the node
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=191)** and see what happens, so wget -O-. Hmm, it says cannot connect to the remote host. I must be missing something. So let's look at the YAML manifest for this. All right, here we are at the echo-server.yaml. And if we scroll down to the service definition, oh yeah, that's right, we have to specify a NodePort or Kubernetes will give us a NodePort. So when we make a GET request to the node IP address, we also have to specify the node. This one is 30076. So just an Up Arrow to get that node IP address. And we're going to put 30076 at the end. Hey, look at that. So we made a GET request to a Kubernetes node with that NodePort on it, and we're getting the output we expect, beautiful. And then the last request we're going to make is to the service name itself. So run the command, kubectl get svc, service. Oh yeah, just a reminder that the service is called echo-service and we'll do wget -O- echo-service. That gives us what we want. Let's see if we can do the DNS name. It takes a little bit of practice to memorize that pattern. So wget -O- http://, okay. And so we start with the name of the object.
>
> **[4:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-nodeport-service?u=76281980&t=286)** So for us, that was echo-service. And then you say the namespace of that object that lives in default namespace. And then you say the kind of Kubernetes object, that it is a service. And then cluster.local. All right, there it is. Beautiful. In this video, you learned how to access pods behind NodePort service. In the next video, I'll talk you through the features of a LoadBalancer service.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=0)** - [Instructor] You've deployed and queried a cluster IP and node port, and now I'll show you the load balancer service. We'll be working with this file called frontend-ui.yaml. I'm going to talk you through this. When we apply this file, we're going to create a new namespace called frontend. Then you will create a deployment that will spin up three pods called the frontend-ui, and they'll be pulling from this image. This is what we talked about a little bit earlier. You'll see this is the DNS name of the learning service. And then finally, and most importantly, the service. The service is called frontend-service. It lives in the frontend namespace. It's fronting pods that have the label app, frontend-ui, and it is a type LoadBalancer. Let's apply this and see what happens. Run the command kubectl apply -f frontend-ui.yaml All right, it says namespace, deployment, and service was created. Let's look at the service in this namespace. So kubectl gets service from the namespace frontend. All right, this looks good. The name is frontend-service. It's a type LoadBalancer. It has a cluster IP, but you see this column, it says external IP and then pending. Remember, if you're running [[Kubernetes]] with a cloud service like AWS [[Google Cloud Platform (GCP)|Google Cloud]] or [[Microsoft Azure|Azure]],
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=95)** creating a load balancer service will trigger one of the cloud's load balancers to be created. That will then generate a public IP address. And when traffic is sent to that address, it will go into the cluster to the service and then to the pods. Because we're running our cluster on Minikube, right now there's no external IP, but we can still query this service using its simple name and DNS name. One thing we need to do is spin up another busybox-pod that lives in the frontend namespace. So if you look at busybox-iu.yaml, we have a single pod we'll spin up called busybox-ui. It is just like the other busy box pod, just in a different name space. So let's create that with kubectl apply -f, busybox-ui.yaml.
>
> **[2:32](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=152)** All right, time to exec into that. Kubectl, now this is new, we're going to put the namespace up front, -n frontend, and then exec -it busybox-ui -- sh.
>
> **[2:50](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=170)** All right, we have exec'd into the busybox-pod. Let's give ourselves some space here. And first thing we're going to do is see if we can get the data from those pods by querying the service name. Run the command wget -O, and the service name was frontend-service. Okay, let's take a look at this. There's a lot of stuff in here, but you see these angle tags? We have an anchor tag, h3, so this is [[HTML]]. Beautiful. Let's then query the DNS name, wget HTTP,
>
> **[3:38](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=218)** so we start with the service name, frontend-service in the namespace frontend. And then this is an object type service, and then cluster.local. All right, getting the same output there. Beautiful. So let's exit out of this. Let's look at the service details one more time, kubectl, get services from the namespace frontend. All right, so if we had set up a proper LoadBalancer service, we'd have an external IP here. That'll happen automatically if you're using the cloud. There is a way that you can do it with Minikube. And I'm not going to show you here, but I do want to show you where to look for that. You'll go to the Minikube docs, accessing apps, and then scroll down until you see LoadBalancer access. If you'd like to try generating an external IP from this Minikube cluster for this service, follow these instructions here. One final thing, I have left you a little gift. And so I mentioned earlier that the frontend pods get data from the learning resource pods. And when put together they are a webpage, and this is just a little something fun for you to look at. And so what I want to do is I want
>
> **[5:12](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=312)** to port forward one of those pods and then open it with the browser to see what does that webpage look like. And I'll give you instructions for how to do that. First thing is you are going to get your pod names in the frontend namespace, kubectl, get pods, dash namespace frontend. All right, copy one of those pods. And we're going to port forward this pod so we can open up the webpage in a browser, kubectl port-forward, the pod name. We're going to pick a random port name, but this second one is most important. It's the actual container port, so that's 4173, namespace frontend. Okay, I spelled port-forward wrong, so let me try that again. I did mean port-forward. All right, beautiful. It says it is running on port 4173 locally. So head back to the browser and you're going to type in the address localhost:4173. All right, and this is the combination of the frontend app and the backend app, and we're making that request through a Kubernetes DNS name, which is really cool. These are some learning resources that I recommend if you're interested in Kubernetes networking. Got some [[LinkedIn]] learning courses, some really good books,
>
> **[6:46](https://www.linkedin.com/learning/kubernetes-microservices-23787657/examine-a-loadbalancer-service?u=76281980&t=406)** and then a couple of talks from KubeCon, and of course, TechWorld with Nana. All right, we're going to stop this process with Control + C and we are at the end, beautiful. In this video, you'll learned about how a load balancer service works, and you got to see our little gift to you, which is the Kubernetes Learning Resources page. In the next video, you'll see the requirements for your hands-on challenge.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/challenge-deploy-and-test-a-new-microservice?u=76281980&t=0)** - [Instructor] It is time for you to leverage what you've learned through a hands-on challenge. In this challenge, you'll create a cluster IP service to front a set of nginx pods, then you'll verify that your service can be reached by making a get request from a busybox pod. Here are the challenge requirements: one, update the challenge.yaml manifest to create a cluster IP service called nginx-service that sends traffic to the pods with the label app: nginx. There are some comments left for you in the service definition to help you with that. Two, deploy the deployment and service and three, from your busybox pod, make an HTTP request to the service using its service name and DNS name. Good luck. In the next video, I'll show you my solution to the challenge.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=0)** - [Presenter] You've attempted the challenge, and now I'll show you a solution to the problem. In the challenge, you were tasked with creating a cluster IP service to front a set of Engine X pods. Your requirements were to update the challenge.YAML manifest to create a clusterIP service called nginx-service that sends traffic to pods with the label app:nginx. Let's take care of that first. Alright, going to the YAML file, scrolling down. All right, so we've got the Nginginx-service, that's all ready to go. It says selector add pod label here. Let's find the pod label in the deployment. All right, so this is defining the pod set this deployment will create and under labels we see app:nginx, so that's the pod label app:nginx, and then it says add service type here. We are going to make this a Cluster IP service and the capitalization matters in [[Kubernetes]]. So make sure it's a capital C at the beginning and a capital I and a P at the end. I'm going to save that file. Let's go back to the requirements. Okay, it says deploy the deployment and service. So I'm in the 0306 directory.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=96)** You probably did this from 0305. I'm going to apply that file kubectl apply-f-solution. It says namespace was created, the deployment was created and the nginx service was created. And then the final requirement, it says from your busybox pod, make an HTTP request to the service using its service name and DNS name. Okay, so I need to know the service name. I am pretty sure that it's nginx service, but to double check, let's take a look at the services cube control, get services, and this is from the Namespace Challenge. Alright, so I know the name of my service, I'll be able to figure out the DNS name. And now I want to make a W get request from my BusyBox pod. So I'm going to exec into that kubectl exec -it,
>
> **[2:40](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=160)** busybox--sh. All right, so first thing is let's make a request to this service name, nginx service, Going to copy that and paste it. Ooh, it says bad address nginx-service. Oh yeah and I know why. It's because our busybox pod is running in the default name space and the nginx service is running in the challenge name space, so it can't get to it right now. Let's see if it works with the DNS name, wget-0 and DNS Name starts with HTTP, the name nginxservice, the name space, this is Challenge, the Kubernetes object type service cluster and local. Hey, hey, there we go. So this is the [[HTML]] that nginx, serves up by default. So I know I was able to access the nginx-service using the DNS name. Now, I did make this a little bit of a trick question. So I asked you to make a request to the service using its service name and DNS name, and only one of those worked. That was the DNS name. And the reason for that is that the Busybox Pod is running in the default name space while the nginx pods are running in the challenge name space.
>
> **[4:15](https://www.linkedin.com/learning/kubernetes-microservices-23787657/solution-deploy-and-test-a-new-microservice?u=76281980&t=255)** So hopefully that illustrated the beauty of using DNS service names for service discovery in Kubernetes. All right, so that's how I would handle the solution. If you got it first time, great job. If you didn't get the first time, I would encourage you to go back and do it again. More practice and practice the proper way will give you those skills that you'll be able to use. So in this chapter, you learned about the four Kubernetes service types and you've completed the challenge. In the next chapter, I'll cover more advanced Kubernetes networking topics.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=0)** - [Presenter] In the last chapter, you got hands-on experience deploying and querying a cluster IP and node port service, and you learned in what scenarios you would use a load balancer and external name service. In this chapter, I'll provide an overview of some advanced techniques to manage networking in a [[Kubernetes]] cluster, including network policies, ingress, and service meshes. First, network policies. An interesting fact. Unlike pods, deployments, namespaces and services, and all the other Kubernetes objects you know, Kubernetes does not have network policies by default. A CNI plugin with that feature is required. Remember, you change the CNI in your mini cube cluster from Kind Net to Calico, and that's because Calico can force network policies, while Kind Net cannot. A network policy allows you more fine grain control over the internal communication in a Kubernetes cluster. And you can write a policy that enforces rules about what kinds of things can and cannot communicate with pods, namespaces, and specific IP addresses and ports. When no network policies are implemented, all pods are able to communicate with one another openly, which does not meet the security standard of least privilege and zero trust. Network policies allow you to configure two different options, whether the policy applies to ingress or egress, and does it allow or deny traffic?
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=94)** Quick vocab review. Ingress means traffic is entering and egress means traffic is leaving. Let's take a look at a few examples to illustrate how network policies work. First, let's look at a network policy that applies to all traffic. This is a default policy for all namespaces in your cluster. It prevents all ingress and egress traffic from moving between pods. If you want to have your network default to the principle of least privilege, this is the policy for you. Let's create this policy and confirm it's working. Run the command kubectl apply dash f deny all. It says that the deny all policy was created. Let's confirm by running kubectl get network policy. Alright, we see we have a policy named Deny All. It applies to all pods so there's no specific selector. If you created the Deny All policy, none of your pods will be able to talk to each other. So you would want to put in place some policies that allow communication. Let's take a look at the allow ingress dot YAML file. This network policy allows inbound traffic from pods in the same namespace. More specifically in this example, incoming traffic to pods with the label app echo server are allowed only if they come from a pod with a selector app learning resources.
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=187)** Let's create this policy and confirm it's working. Run the command kubectrl apply dash F, allow Ingress dot yaml. Let's check and see if that policy was created with kubectrl get network policy. Alright, and we see our two policies. We have the denial as well as the allow from learning resources policy. Finally, let's take a look at the allow egress file. This network policy allows outbound traffic from your front end UI pods to the cider block 172.11.0.0/20. Let's create this policy and confirm it's working. Kubectrl apply the file, allow egress dot yaml, and then kubectrl get network policy. Ah, so the allow egress policy isn't in the default namespace because it's in the front end namespace. So let's run that command again and ask for the policies in the front end namespace. There it is. Allow egress. Last thing, we're done working in our cluster so we can delete it. Thank you little cluster for helping us explore the internal network of a Kubernetes cluster. In Minikube, you run the command minikube delete, and you pass in the profile name. So demo.
>
> **[4:39](https://www.linkedin.com/learning/kubernetes-microservices-23787657/understanding-network-policies?u=76281980&t=279)** I've got the fire emoji, skull emoji. It says remove all traces of the demo cluster. So you're all set. In this video, you learned about a network policy which lets you deny or accept traffic via ingress or egress. You might have noticed that there's not much nuance in how you can configure a network policy, and you're right. Later I'll provide an overview of service meshes, which can help you have more control over the communication in your cluster. But first, I'll show you how to get traffic into your cluster using a Kubernetes ingress.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=0)** - [Instructor] Thus far, you've learned about networking inside a [[Kubernetes]] cluster via different kinds of services, and you've learned that you can fine-tune pod-to-pod communication using network policies. I've shown you a lot about the internal networking inside a cluster, and at some point in this course, you've probably wondered, how does traffic get inside a cluster? In this video, I'll show you how. By default, pods only respond to requests that come from other pods in the cluster, and you must do some work in order for people to access the applications in your Kubernetes cluster. Kubernetes ingress objects and ingress controllers accept and route external traffic to the services in your cluster. An ingress object is part of Kubernetes, and it creates a publicly-accessible IP address. When an HTTP or HTTP request is sent to that IP address, the ingress sends the traffic to your ingress controller. The ingress controller will then check the list of rules that you set up on your ingress and route traffic to your services based on those rules. An ingress object only defines the rules, while an ingress controller enforces the rules by being a reverse proxy and load balancer. While ingress objects are part of the core Kubernetes software, ingress controllers are similar to CNIs. The software itself is developed separately and there are lots of options to choose from. Therefore, ingress controllers are pluggable, and you must install them using [[Helm]] or YAML manifests.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-microservices-23787657/getting-traffic-into-a-cluster-using-ingress?u=76281980&t=95)** Some common ingress controllers are Ingress-Nginx, Traefik, and HA Proxy. You can find a full list in the Kubernetes documentation. Let's take a look at a YAML manifest of an ingress that uses Ingress-Nginx as the controller. This is the file called ingress.yaml. You see up at the top here, this is a Kubernetes object called Ingress, and it's called example-ingress. Here in the annotations, we're letting Kubernetes know that we are going to use Nginx-Ingress. Down here at the rules, when this is created in our cluster, and Nginx-Ingress is running, when a request is made to [lil-microservices.com](https://lil-microservices.com), and it just has the forward slash on it. It's going to direct that request to our frontend UI. Instead of getting traffic into your cluster by setting up a node port or load balancer service in front of each of your [[Microservices]], Kubernetes ingress allows you to have one point of entry for your cluster. This gives you more flexibility by allowing you to focus on other parts of your cluster implementation. In this video, you learned about how ingress and ingress controllers allow you to control traffic into your cluster. In the next video, I'll give you an overview of Kubernetes service meshes and how these tools can supercharge your clusters' networking, security, and observability.

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
> **[0:00](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=0)** - [Instructor] As your [[Microservices]] architecture grows, you may arrive at a point where implementing network policies and managing traffic through ingress becomes overwhelming or you may need to enable communication between services running in a cluster in [[Google Cloud Platform (GCP)|Google Cloud]] and others in [[Microsoft Azure]]. As the needs for your cluster grow, it may be time to consider using a service [[Mesh]]. A service mesh is software you can install in a [[Kubernetes]] cluster that will take over the internal network and handle all aspects of service discovery. With a service mesh, you don't have to worry about creating and connecting your cluster IP, node port, load balancer, and external name services, but you do have to learn the ins and outs of a new system. In addition to service management, meshes provide greater security by encrypting communication between pods and giving you options to acquire Auth N and Auth Z in order to access certain endpoints. Finally, service meshes have robust built-in observability tools so you and your team will be able to see the health of your services more easily than before. There are many, well-known, free and open source service meshes, including Istio, Linkerd, and HashiCorp console. There are also some paid service meshes like Kong and AWS App Mesh, Google Cloud's Anthos, and Microsoft Azure's Open Service Mesh. One [[Microsoft Word|word]] of warning about service meshes.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-microservices-23787657/an-overview-of-services-meshes?u=76281980&t=96)** Although they're designed to help manage a complex microservices architecture, they also introduce an entirely new set of things you have to learn and manage, so make sure the trade-off is worth it. Service meshes provide more ways for you to manage, secure, and observe your services.

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
> **[0:01](https://www.linkedin.com/learning/kubernetes-microservices-23787657/thank-you?u=76281980&t=1)** - You did it. Congratulations, you made it to the end. One thing you learned about is the history of application deployments and the past problems [[Kubernetes]] has solved. You learn that Kubernetes networking is built around four different service types. The ClusterIP and Nodeport services, the LoadBalancer service, and the ExternalName service. Straightforward service discovery is one of the most beloved features of Kubernetes. Finally, you know about three tools for more complex networking needs, network policies, ingress, and service meshes. If you really like learning about the internal Kubernetes network, try installing different container networking interfaces in a cluster and find out about the features each has to offer. If networking isn't your primary interest, consider starting to specialize in an area of Kubernetes administration, security, GitOps, or monitoring and observability. Here are the next steps to sharpen the skills that you have. Take one, or all of the [[Linux]] Foundation Kubernetes exams. There's the Certified Kubernetes Application Developer exam, the Certified Kubernetes Administrator Exam, or the Certified Kubernetes Security Specialist exam. There are certification prep courses for these exams on [[LinkedIn]] learning. Now that you've completed this course, I hope you're excited to learn more. My name is Kim Schlesinger.
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