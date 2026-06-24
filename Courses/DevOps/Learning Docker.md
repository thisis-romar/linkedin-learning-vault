---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-docker-17236240
url: "https://www.linkedin.com/learning/learning-docker-17236240"
level: Beginner
updated: 7/11/2025
learners: 27208
skills:
  - Docker Products
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHW94kV0BQffg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1670878886810?e=2147483647&amp;v=beta&amp;t=gWYXLRyZJarMN8ohNqlxFwfDGoSYY9E4oY3M8vRpV5g"
linkedin_topic: DevOps
learning_paths:
  - '[The Top 10 Most Popular Courses among Engineering Professionals](../../Paths/Data%20Science/Learning%20Paths/The%20Top%2010%20Most%20Popular%20Courses%20among%20Engineering%20Professionals.md)'
  - '[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/MLOps%20Essentials%20for%20Developers%20and%20AI%20Engineers-%20Tools%2C%20Pipelines%2C%20Security.md)'
  - '[Containerize Applications with Docker](../../Paths/DevOps/Learning%20Paths/Containerize%20Applications%20with%20Docker.md)'
  - '[Docker Foundations Professional Certificate](../../Paths/DevOps/Professional%20Certificates/Docker%20Foundations%20Professional%20Certificate.md)'
next_courses:
  - '[React Essential Training](../Web%20Development/React%20Essential%20Training.md)'
  - '[Learning Kubernetes](../Data%20Science/Learning%20Kubernetes.md)'
  - '[Docker Essential Training](Docker%20Essential%20Training.md)'
  - '[Docker- Your First Project](Docker-%20Your%20First%20Project.md)'
path_nav: '[{"path":"The Top 10 Most Popular Courses among Engineering Professionals","position":1,"total":10,"prev":null,"next":"React Essential Training"},{"path":"MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security","position":1,"total":10,"prev":null,"next":"Learning Kubernetes"},{"path":"Containerize Applications with Docker","position":1,"total":2,"prev":null,"next":"Docker Essential Training"},{"path":"Docker Foundations Professional Certificate","position":1,"total":3,"prev":null,"next":"Docker- Your First Project"}]'
path_count: 4
tags:
  - course
  - topic/data-science
  - topic/devops
  - topic/software-development
  - topic/web-development
  - topic/artificial-intelligence
  - topic/network-and-system-administration
  - skill/docker-products
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Learning%20Docker.md)

![Learning Docker](https://media.licdn.com/dms/image/v2/C560DAQHW94kV0BQffg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1670878886810?e=2147483647&amp;v=beta&amp;t=gWYXLRyZJarMN8ohNqlxFwfDGoSYY9E4oY3M8vRpV5g)

# Learning Docker

> Applications working on one machine but not others is a common problem in software development. Configuration management tools and virtual machines are common solutions, but can be cumbersome for developers who just want their code to run in other places safely. Docker, an open-source containerization platform, simplifies the deployment and management of your applications by packaging your apps in

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240) | Beginner | 27K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Get up and running quick with Docker](#get-up-and-running-quick-with-docker)
  - [What you should know](#what-you-should-know)
  - [How to use the exercise files](#how-to-use-the-exercise-files)
- [**1. Docker Explained**](#1-docker-explained) (5 videos)
  - [What is Docker?](#what-is-docker)
  - [Containers vs. virtual machines](#containers-vs-virtual-machines)
  - [The anatomy of a container](#the-anatomy-of-a-container)
  - [The Docker difference](#the-docker-difference)
  - [Docker alternatives](#docker-alternatives)
- [**2. Installing Docker**](#2-installing-docker) (4 videos)
  - [Docker Desktop](#docker-desktop)
  - [Install Docker on a Mac with Docker Desktop](#install-docker-on-a-mac-with-docker-desktop)
  - [Install Docker on Windows with Docker Desktop](#install-docker-on-windows-with-docker-desktop)
  - [Install Docker on Linux](#install-docker-on-linux)
- [**3. Using Docker**](#3-using-docker) (16 videos)
  - [Exploring the Docker CLI](#exploring-the-docker-cli)
  - [Create a Docker container](#create-a-docker-container)
  - [Create a Docker container: The short way](#create-a-docker-container-the-short-way)
  - [Create a Docker container from Dockerfiles, part 1](#create-a-docker-container-from-dockerfiles-part-1)
  - [Create a Docker container from Dockerfiles, part 2](#create-a-docker-container-from-dockerfiles-part-2)
  - [Create a Docker container with BuildKit](#create-a-docker-container-with-buildkit)
  - [Interact with your container](#interact-with-your-container)
  - [Stopping and removing the container](#stopping-and-removing-the-container)
  - [Binding ports to your container](#binding-ports-to-your-container)
  - [Saving data from containers](#saving-data-from-containers)
  - [Introducing the Docker Hub](#introducing-the-docker-hub)
  - [Pushing images to the Docker registry](#pushing-images-to-the-docker-registry)
  - [Checking your images in Docker Hub](#checking-your-images-in-docker-hub)
  - [Beyond Docker Hub: Other popular container registries](#beyond-docker-hub-other-popular-container-registries)
  - [Challenge: Starting NGINX](#challenge-starting-nginx)
  - [Solution: Starting NGINX](#solution-starting-nginx)
- [**4. When Things Go Wrong**](#4-when-things-go-wrong) (5 videos)
  - [Help! I can't seem to create more containers](#help-i-cant-seem-to-create-more-containers)
  - [Help! My container is really slow](#help-my-container-is-really-slow)
  - [I can't use the Docker client!](#i-cant-use-the-docker-client)
  - [Challenge: Fix a broken container](#challenge-fix-a-broken-container)
  - [Solution: Fix a broken container](#solution-fix-a-broken-container)
- [**5. Additional Docker Resources**](#5-additional-docker-resources) (3 videos)
  - [Docker best practices](#docker-best-practices)
  - [Taking it to the next level with Docker Compose](#taking-it-to-the-next-level-with-docker-compose)
  - [Level up even more with Kubernetes](#level-up-even-more-with-kubernetes)
- [**Conclusion**](#conclusion) (1 videos)
  - [Until next time](#until-next-time)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Get up and running quick with Docker](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=0)** - Docker is one of the hottest technologies in tech today. From the earliest startups to the world's biggest companies, containers have revolutionized how software is packaged and shipped. Containers have made the frustrating and sometimes dangerous task of getting software to work across lots of different machines of breeze. Docker has made using containers for almost any app extremely easy and I'm going to show you how. In learning Docker, we'll learn about the basics of containers. What are they? Why do they exist? How do they work? My name's Carlos Nunez. I love containers. I've been using Docker almost every day since 2017. I have helped hundreds of engineers get their production apps into containers across many industries. If you're ready to get your containerization journey started, join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** docker (4)
> **Speakers:** - docker (1)

#### [What you should know](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=0)** - If you're curious about Docker, this course is for you. This course is an introductory course so no previous programming or shell scripting experience is required. You'll need a computer, internet access and a terminal for most of this course. Although no terminal experience is required. I'll guide you every step of the way. I'll be using a Mac for most of this course. If you are a [Windows](../../Glossary/Service/Windows.md) user, I recommend using [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md). If you're on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) you most likely already have a built-in terminal. You'll also need a code editor if you would like to create and push your own Docker image to the Docker hub with me in chapter three. Video Studio Code, Atom or Sublime Text are some examples of great code editors you can use. You can also use an IDE like IntelliJ or Eclipse, and that's it. If you are ready to learn Docker, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Tools:** terminal (3), powershell (1), atom (1), sublime (1), intellij (1)
> **CLI Commands:** docker (4)
> **Env Vars:** ide (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - if (1)

#### [How to use the exercise files](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] Some videos in this course come with exercise files that are used within a terminal session. To get to them, simply type cd, then enter the path to the exercise file for that video. For example, my exercise files are on my desktop. To get to them within my terminal, I'll type cd, then a tilda, which is short for my home directory. Then a slash, then desktop, then another slash, and then finally, in double quotes, exercise files. Now I need to quote this because exercise files has a space between them, but if your exercise files does not have a space, you can leave the double quotes out. If you look at my title bar you'll see that it is currently set to the folder I'm in, or exercise files in this case. If you want to go to the exercise files for a specific video, like say, 4.3, type in cd. Then the folder name, which in this case will be oh four, underscore, oh three, underscore, and then before. Note that because there aren't any spaces in here, you can also leave out the double quotes and this will work fine. Okay, so now we're in the correct folder to follow along. Once here, you can use LS to quickly list the files within.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (7), exercise file (1)
> **CLI Commands:** cd (3), ls (1)
> **Tools:** terminal (2)
> **Versions:** 4.3 (1)
> **UI Navigation:** go to (1)
> **Definitions:** short for (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)


### 1. Docker Explained

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Docker?](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=0)** - [Instructor] You're developing a cool web app that you're excited to share with the world. You've spent many long and hard hours building the source code, compiling it on your machine, and testing it. After a few weeks of back and forth, your app finally works and is ready to ship. With a little help from a [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course, you create an AWS account, put your app onto LightSale, link it up to DNS, and finally, tell the world about your app on LinkedIn. After celebrating for a few hours, you check your email and are shocked by the hundreds of messages that in some way, shape, or form, all kind of say the same thing. Hey, your app doesn't work? What gives? It worked on your machine, it worked on my machine. What do you mean it doesn't work? Applications working in one place but not others is a common problem in the world of [Software Development](../../Topics/Software%20Development.md). So common in fact, that it's often called, the it works on my machine problem. In books, conference talks, and one particularly famous meme. There are many reasons why this happens. Sometimes, your computer has a lot of tools and software the app depends on that aren't on other machines. Other times, configuration for your app might come from different places depending on where it is. Maybe a block of source code in your app depends on files or [Hardware](../../Topics/Hardware.md) on your computer that other computers don't have. Many tools and software have been created to solve this problem. [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) tools like Chef, [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md), and Puppet solve it by allowing you to write code in markup languages to describe what machines need to have in order to run your app.
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=94)** Other tools, like HashiCorp Vagrant, let you write code to create entire [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) to run your app in. However, these tools can be cumbersome for developers who just want to run their code in other places safely. With configuration management tools, you often need to know details about the underlying operating system your markup will run in. With Vagrant, you need to know what quote-unquote, hardware your virtual machine needs to have and often need to configure the operating system before installing or building your app inside of it. Docker aims to take a simpler approach. Docker is software that allows developers to package their apps into images that run on containers. Images are created from lightweight configuration files that describe everything your app needs to run. Unlike virtual machines, containers are virtualized operating systems that are configured with just enough to run your app and nothing else. Because containers are created from images, as long as the machine can run Docker, your app will run and behave the same regardless of where it is. As a result, you can build and run your app quickly, safely, and even cost efficiently. I like to compare a Docker to making a good meal for your friends. You have an awesome recipe passed on down through the generations. When you make it at home, it tastes phenomenal. However, it tastes very different when you make it at a friend's house and even more differently when you make it at your parents' house. Maybe it's because they have different pans, maybe it's because they have kosher salt instead of sea salt, or their stove is an electric stove instead of a gas stove.
>
> **[3:08](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=188)** The reasons for the differences can be endless. It would be awesome if you had a box with all the hardware, ingredients, and tools needed to give justice to your great, great, great grandparents amazing recipe regardless of where it's made. You would have very high confidence in knowing that your friends and family will enjoy the same amazing dish that you did in your house. That's the advantage that Docker brings to software development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Software Development](../../Topics/Software%20Development.md) (2), [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) (2), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (2)
> **CLI Commands:** docker (5), make (3), aws (1), ansible (1)
> **Env Vars:** aws (1), dns (1)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Containers vs. virtual machines](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=0)** - [Instructor] Containers are often thought of as [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) but smaller. This is an understandable, but incorrect, comparison. Let's explore the differences between the two. The biggest difference is that virtual machines virtualize [Hardware](../../Topics/Hardware.md) whereas containers virtualize operating system kernels. What does this actually mean? This diagram describes how applications run on containers shown on the left and virtual machines shown on the right. Virtual machines run on a platform called a hypervisor. The hypervisor's main job is to translate operations on emulated hardware within virtual machines like memory processors, disks, et cetera, to operations on real hardware within their hosts. This allows for a lot of flexibility, but comes at the cost of disk space as the emulated memory and disks need to live somewhere. Because virtual machines are actual virtual computers, you're responsible for installing the operating systems on each VM and configuring your apps within them. Since they are just computers, you can install and run as many apps as the hardware can support. Finally, apps running on virtual machines can't see apps running on the actual machines hosting them. This makes it possible to run many different apps together on the same hypervisor securely. Containers, on the other hand, run on container run times. Container run times work with the operating system to allocate hardware and copy files and directories, including the parts with your application in it
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=94)** into something that looks more like any other app running on that system. Unlike hypervisors, container run times do not actually translate anything. Every app and every container uses the same hardware and operating system as a system they're running on. Because of this, they do not need to quote, unquote, "boot up" like virtual machines do. This allows applications inside of them to start up very quickly. Additionally, because containers are not virtual machines and do not need virtual memory and virtual discs to work, they take up a lot less space. This allows you to run an order of magnitude more applications at the same time than virtual machines. Containers by design can only run one app at a time. Additionally, because containers share the same operating system as their host, it is possible for containers to see what the host is running. Some containers can even modify the host they're running on. This is a particularly thorny security issue that is fortunately mostly solved. We'll go more into the guts of containers in the next chapter. In the meantime, here's a summary of the differences that we covered here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (10), [Hardware](../../Topics/Hardware.md) (6)
> **Cross-References:** in the next (1), we covered (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [The anatomy of a container](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=0)** - [Instructor] In the last video, we looked at the difference between containers and [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md). We also introduced the container runtime, a component that works with operating system kernels to "containers," let's briefly talk about what creating containers actually means. A container is composed of two things: a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) namespace and a Linux control group. The diagram below describes these components in more detail. Let's start with namespaces. Namespaces are a Linux kernel feature that provides the ability to expose different "views" of your system to applications running within it. This way, you can have an application think it's running as the say, route super user with access to an entire file system in all sorts of [Hardware](../../Topics/Hardware.md) when it's actually running as user 154678 with access to a single folder. Today's Linux kernels provide eight namespaces the ability to view and create users through the USERNS namespace, access to file systems through the MOUNT namespace, network communication abilities through the NET namespace, interprocess communication through the IPC namespace, the ability to change time through the TIME namespace, process ID management through the PID namespace, or PID. The ability to create and list control groups through the CGROUP namespace. And the ability to create host and domain names through the UTS namespace.
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=95)** One thing to note, due to technical limitations Docker containers use every namespace but the TIME namespace. This just means you can't change the time in a Docker Container. Control groups, another Linux kernel feature, build on this by providing the ability to restrict how much hardware each process can use. Docker uses control groups for a few things. First, it uses control groups to monitor and restrict CPU usage, or the amount of CPU time each container can take up. Docker also uses control groups to monitor and restrict network and disk bandwidth. And more commonly, Docker uses control groups to monitor and restrict memory consumption. This makes it easy to prevent busier, or larger containers from eating up all the system's resources and slowing other containers down without having to carve up significant amounts of memory like virtual machines do. Note that you cannot use control groups to assign disk quotas to containers. Fortunately, there are many, "container native" storage solutions that allow you to do this. Control groups and namespaces are a very different and much lighter way approach to isolation than virtualizing entire pieces of hardware like virtual machines do. However, these features come with two important caveats. First, because control groups and namespaces are Linux only features, this means that Docker technically only runs natively on Linux and some newer versions of [Windows](../../Glossary/Service/Windows.md) as well. Second and, more importantly, containers can run on anything but their images are tied
>
> **[3:10](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=190)** to the kernel they were created from. Containers created from container images configured for Linux kernels can only run on Linux. Conversely, containers created from container images configured for Windows can only run on Windows. Fortunately, there are established workarounds for these limitations. We'll introduce them in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (9), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (3), [Hardware](../../Topics/Hardware.md) (3), [Windows](../../Glossary/Service/Windows.md) (3)
> **Env Vars:** time (2), pid (2), cpu (2), userns (1), mount (1)
> **CLI Commands:** docker (6)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [The Docker difference](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=0)** - [Instructor] While Docker might be the first thing that comes to mind when thinking about containers, Docker is not the first or only way of creating them. Let's briefly take a look at some other container and container adjacent run times. Containers, or at least the idea of them has been around a long time. The first attempt to isolate workloads came with the Chroot, or change root syscall, created by Bill Joy in 1979 and popularized by 4.2 BSD in 1982. Chroot, which is short for change root, allows administers to change the root directory that applications see. This way, an application can think it has access to an entire file system, when it really only has access to a single folder. You can still create and use chroots today. Check out this link if you're interested in playing around with that. Chroots were convenient for isolating apps from each other, but they could only really protect a host's file system. Applications and chroots could still see and interact with other applications on a file system if they had the right libraries and applications in their chroot. BSD Jails and Solaris zones merged into FreeBSD in 1999, and Solaris in 2004 respectively, These both build on chroots in a big way. With jails or zones, administrators could create entire virtual environments for applications instead of just quote unquote virtual file systems, without needing to emulate [Hardware](../../Topics/Hardware.md)
>
> **[1:32](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=92)** like [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) can. Like today's containers, administrators could restrict what processes saw or used in a jail or zone, without processes knowing that they were being restricted. Not to be outdone, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) gained a similar superpower in 2007 with Linux containers or LXC for short. Thanks to significant contributions from [Google](../../Glossary/Service/Google.md). Linux containers used control groups and name spaces to provide much of the same functionality as BSD jails can. See the last section to learn more about control groups and name spaces. LXC is still in active development, and you can use it today. This is the documentation for getting started with Linux containers. If we were to look at this, you'd notice that there are a lot of steps involved. You need to create a mapping between your user's ID and a user ID in a container, manually create a network bridge between LXCs network and yours, create a configuration file, and more. These steps might be overwhelming for a developer who just wants to safely run an application in a machine. This is where Docker really shines. Docker has three particular advantages that I like. First, Docker makes configuring container environments really easy. Users can use Docker files to tell Docker how their container should be configured. Docker then uses these Docker files to package your app and its environment into images. You can configure almost anything in a Docker file.
>
> **[3:05](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=185)** It's quite flexible. We'll learn more about Docker files in chapter three. Second, Docker makes it really, really easy to share images. Users can share their application images through the Docker hub, a global repository of images maintained by Docker. Users can create registries as well as create alternative registries hosted on the internet. Third, the Docker command line interface makes creating and starting containers really, really easy as well. You don't have to worry about configuring UID mappings, network interfaces, or Docker configuration files. Starting a container is as easy as running "Docker run". Adding volumes to those containers and joining them with internal networks is similarly straightforward. We'll explore some of this in more detail in chapter three.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (4), [Hardware](../../Topics/Hardware.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** docker (17)
> **Env Vars:** bsd (3), lxc (2), uid (1)
> **Prerequisites:** getting started (1), configure (1)
> **Versions:** 4.2 (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)
> **Definitions:** short for (1)

#### [Docker alternatives](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980&t=0)** - [Instructor] Docker is not the only way to create containers. Many other solutions exist, each with their advantages and disadvantages. In 2016, [Kubernetes](../../Skills/DevOps/Kubernetes.md), the largest and most popular tool for managing large numbers of containers, created the Container Runtime Interface, or C-R-I, or CRI, to allow developers to create their own container run times and add or remove features necessary for their projects. CRI-O, runc, and Firecracker from AWS, or [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), are examples of CRI-compliant container run times. One of the biggest concerns with the Docker Engine is that most containers that it creates runs as the root super user. Since applications inside of containers can quote unquote "break out of them" and see stuff on their hosts, this can be a problematic security issue. This motivated Red Hat to create Podman, a container platform for creating highly secure containers. Containers created by Podman can be created rootless, or without root user mapping at all. Additionally, Podman supports the ability to run multiple applications within containers through popular quote unquote "init" systems, like Systemd. While Docker has incorporated some of Podman's advantages, many still use Podman today to run highly secure workloads.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1)
> **CLI Commands:** docker (3), aws (1)
> **Env Vars:** cri (3), aws (1)
> **Speakers:** - [instructor] (1)


### 2. Installing Docker

[↑ Back to Table of Contents](#table-of-contents)

#### [Docker Desktop](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=0)** - [Instructor] In the anatomy of a container, we learned that containers are composed of [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) control groups and Linux namespaces. Namespaces allow administrators to restrict what processes can see on a system, while control groups limit resources that containers can use, like memory and processor time. Since namespaces and control groups are unique to Linux, Docker is designed to only run on Linux, but most developers use Macs or [Windows](../../Glossary/Service/Windows.md) to write and test their codes, so this proved to be an interesting challenge for Docker to solve. Docker's first workaround for this was a tool called Docker Machine. Docker Machine used Oracle's VirtualBox to create a small Linux-based virtual machine whose only purpose was to run the Docker engine. Once created, users needed to run a small shell script to connect their Docker [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) with the virtual machine. While Docker Machine worked well, it had two key problems. First, users needed to know how to use VirtualBox for common tasks like exposing network ports or mounting directories. Knowledge of the VirtualBox CLI tool VBoxManage was usually required when things went wrong. This made adopting Docker difficult for some. Second, Docker Machine was not as performant as its Linux-based counterpart. Slow disk performance while using mounted volumes and slow networking performance when exposing ports were common problems. Because these components
>
> **[1:32](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=92)** were wholly dependent on VirtualBox, these were largely out of Docker's control. In 2016, Docker released Docker Desktop as a more permanent workaround. Docker Desktop improves the experience of using Docker for Mac and Windows in three important ways. First, it uses a much smaller and much faster virtual machine that runs on Apple's native hypervisor called Virtual Kit or Hyper-V on Windows. It also automatically handles mounting volumes and exposing network ports from the virtual machine. And it provides a really nice GUI, or Graphical User Interface, to simplify configuring the virtual machine, as well as some common next steps like creating [Kubernetes](../../Skills/DevOps/Kubernetes.md) clusters. In 2021, Mirantis, Docker's parent company, changed Docker Desktop's license to require companies with more than 250 employees and $10 million in revenue to purchase Docker subscriptions before using it. Many alternatives to Docker Desktop have popped up as a result. Some are even using Docker Machine again. While we will not cover these alternatives as part of this course, you can see some alternatives on this slide and I've also included links to some popular alternatives in the exercise files. Now that we know more about Docker Desktop, let's learn how to install it and use it on Mac and Windows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (6), [Windows](../../Glossary/Service/Windows.md) (4), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **CLI Commands:** docker (21)
> **Tools:** docker desktop (5)
> **Env Vars:** cli (2), gui (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Install Docker on a Mac with Docker Desktop](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=0)** - [Instructor] Installing Docker Desktop on the Mac is easy. Let's run through the steps. Note that you'll need to be running macOS 10.15 or newer and have at least 4 gigabytes of memory to use Desktop. To determine the version of macOS that you have and the amount of memory that you have, click on the apple on the upper left-hand corner of your screen. Then click on About This Mac. You'll get some information, and you can see the version right under the macOS title. And you can see memory to the right of Memory lower in the page. First, we're going to visit [docker.com](https://docker.com). When you load the page, you'll immediately see a blue download button for your operating system. Click on it to download Docker Desktop. If prompted, give the download a name, and click Okay or Save. If you're following this on a Mac with Apple's M1 or M2 chips, you might need to click the Apple Chip option below. Next, we're going to click the DMG file that we downloaded. This will allow us to easily move our Docker Desktop application into our Applications folder. Simply click the Docker icon, then drag and drop it into the Applications folder. This will take a minute or two depending on your system's configuration. Now let's open Docker. Type Command+Space on your keyboard, then type Docker, and hit Enter. MacOS will ask you if you want to open Docker since it was downloaded from the internet. Click Open to continue.
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=95)** You'll then be asked for your password to install some backend components. Click OK, then enter your password when prompted. Afterwards, you'll be given a final prompt to accept the Docker license agreement. Click Accept to accept. Finally, the Docker Desktop UI will start. Pay attention to your task bar. After this UI starts, you'll see a small Docker whale with some boxes moving up and down its back. This is how you know that Docker is initializing. Docker is ready once the boxes on the top of the whale stop moving. You can also install Docker through a command line tool called Homebrew. Homebrew is a very popular Mac application that makes it really easy to install just about anything. Let's install Docker for desktop with Homebrew. First, I'll visit Homebrew's website at [https://brew.sh](https://brew.sh).
>
> **[2:37](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=157)** Next, I'll click the very convenient clipboard icon next to the Shell command in the middle of the page. Next, I'll open Terminal by typing Command+Space, then typing in Terminal into Spotlight, followed by Enter. Once the Terminal opens, I'll paste that command I copied earlier and hit Enter to begin installing Homebrew. I'll type in my password when I'm asked to. Once Homebrew installs, I'll type Docker by installing in brew install docker --cask. The --cask option tells Homebrew that this package is maintained by the open-source community instead of Homebrew developers. You'll see Homebrew download the same Docker DMG file that we downloaded earlier, except, this time, it'll also automatically install and configure it. Once it's done, Command+Space to find Docker. Then hit Enter like we did before.
>
> **[3:52](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=232)** Let's open or reopen our Terminal to confirm that Docker is working. Here, I'll run docker run --rm hello-world.
>
> **[4:06](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=246)** This will retrieve a docker image called hello-world and create a container from it. Because we specified the --rm option, Docker will delete this container after it's done running its app, which simply prints a nice "Hello, world" style message.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (23), brew (2), rm (2), find (1)
> **Tools:** docker desktop (4), terminal (4), command line (1)
> **Prerequisites:** install (6), you'll need (1), configure (1)
> **UI Navigation:** click on (3), drag and drop (1)
> **Code Identifiers:** macos (3)
> **URLs:** [docker.com](https://docker.com) (1), [https://brew.sh](https://brew.sh) (1)
> **Env Vars:** dmg (2)
> **File Paths:** brew.sh (1)

#### [Install Docker on Windows with Docker Desktop](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=0)** - [Instructor] Let's take a look at how to install Docker on [Windows](../../Glossary/Service/Windows.md). There are a few minimum requirements that your system will need to meet. You can see them all on Docker's website. We'll start by going to [docker.com](https://docker.com) in your favorite browser. I'm using [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Edge for this example. You'll immediately see a blue Download icon for your operating system. Click on it to download Docker Desktop. If prompted, give the download a name, then click OK or Save. Next, we're going to click or double-click on the EXE file that we just downloaded. This will begin the Docker Desktop installation. Note that the installation can take awhile to start after you click on it. This prompt is Windows just telling you that you downloaded this application from the internet. Make sure that the verified publisher says Docker Inc. here. And once you've confirmed that it does, click Yes to continue. Once the installation starts, you'll be asked whether you want to use WSL 2 or Hyper V to run the Docker engine. This requires some explanation. The Hyper V backend will run the Docker engine on a VM, just like Docker does on Macs. The WSL 2 backend is more interesting. Windows has been capable of running a real [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) within Windows since [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) Anniversary Edition without virtualization. This feature is enabled by the Windows kernel
>
> **[1:33](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=93)** and performs mostly as fast as a real Linux install on your computer. Remember, Docker only works natively in Linux, unless you're running Windows which is also running Linux inside of it. Docker recommends using the WSL 2 backend, so we'll leave this box checked. If it's not checked, go ahead and check it. If you want a shortcut on your desktop, leave this checked. Otherwise, uncheck the box. I'll leave it checked since I like having the shortcuts on my desktop. Once you're done configuring here, click on OK to continue. Now we'll wait for the installation to finish. You might be asked to restart your computer after the installation is done. If so, go ahead and restart your computer, then come right back. Once the installation finishes, go ahead and click the big Close button in the middle of the window. Now that we've installed Docker Desktop, I'm going to go ahead and close my browser. Then I'm going to go ahead and click on the Start button, type Docker Desktop, then click on the first result that pops up. Once Docker Desktop starts, you'll be asked to accept the Docker Subscription Service Agreement on the screen. If you'd like, you can go ahead and read the full thing by clicking on View Full Terms. Otherwise, just click Accept to continue. Now the Docker Desktop UI pops up.
>
> **[3:09](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=189)** There are a few ways to know that Docker Desktop is initializing. The first way is to look at the status bar over here on the bottom left. When Docker Desktop is initializing, this will be orange. Once it's initialized, this will be green. You can also view the status of Docker Desktop's initialization by looking at your taskbar and finding this black whale with the boxes moving up and down its back. If the boxes are moving up and down its back, then you know that Docker Desktop is starting. If you hover over the whale, you'll also see a tool tip telling you the same thing. Let's give that a minute to start. You might see an error message like this pop up on your screen while Docker Desktop is installing. This simply means that you need to install an update to your WSL 2 framework in order for Docker Desktop to work. Click on the blue link to get instructions on how to do that, then once you've installed the framework, click on the restart button to restart Docker Desktop. All right, once Docker Desktop has successfully initialized, you'll see this wizard over here. That will bring you to a tutorial. If you click Start, you'll get a tutorial on how to use Docker Desktop. Otherwise, you can just click Skip tutorial to skip this, like I'm going to right now. As we mentioned earlier, we know that Docker Desktop has been initialized by the fact that the status bar over here is now in green instead of orange. You can also see on your taskbar that the boxes
>
> **[4:43](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=283)** on top of the Docker whale have stopped moving and the tool tip now says that Docker Desktop is running. Finally, let's open [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) to use the Docker client and download that hello world image. So I'm going to click on the Start button, then I'm going to type PowerShell, and then I'll hit Enter. Another way to get here is by clicking on the Windows key, then R, typing in PowerShell, then pressing Enter or clicking OK. Now that we're here, I'm going to maximize this. I can simply type Docker, and it will show us all of the commands that it supports. To test that Docker's working, I'm going to do two things. The first thing I'm going to do is type docker ps, just to see if I can list containers. We'll learn more about this command later in this course. Because I can see this header, I know that Docker is working as expected but I want to do another test. I want to download the hello world image and start a container from it. To do that, I can simply type docker run, then hello-world. This will download that image from the Docker hub. And once it's downloaded, we should see a very friendly hello world style message from Docker, telling us that Docker is ready. There it is. We're now ready to get started with Docker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (7), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (4), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1)
> **CLI Commands:** docker (38), make (1)
> **Tools:** docker desktop (17), powershell (3)
> **UI Navigation:** click on (8), double-click (1)
> **Env Vars:** wsl (4), exe (1)
> **Prerequisites:** install (3), initialization (1)
> **Cross-References:** we mentioned (1), later in (1)
> **URLs:** [docker.com](https://docker.com) (1)

#### [Install Docker on Linux](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=0)** - [Instructor] Let's learn how to install Docker on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). Earlier, we learned that Docker is designed to work natively with Linux. As a result, we do not need to install Docker Desktop. Instead, we'll be installing the Docker Engine and the Docker command line client. While I'll be using [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) for this video, these instructions should be more or less the same on other distributions. Visit the docs at [https://docs.docker.io](https://docs.docker.io). to learn more about specific differences for your distro. Installing Docker on Linux is really, really easy. First, ensure that you have cURL installed by running sudo apt install curl. You might be asked for your password, so enter it when prompted. Next, we're going to download Docker's installation script and save it into /tmp/get-docker.sh. Let's clear the screen to make some space. To do that, I'm going to press Control+A to go to the beginning of this command. Then, I'm going to type curl -o. I'll leave that path in there since that's where I want to save the script to. Then, I'll go to the end of the command with Control+E. Then I'll type [https://get.docker.com](https://get.docker.com).
>
> **[1:32](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=92)** As a security precaution, I always recommend looking at scripts that you download from the internet before running them. Next, we'll run the script. To do that, I'll clear my screen again, then I'll type sh /tmp/get-docker.sh.
>
> **[1:53](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=113)** You'll see lots of output fly past your terminal. This might take a few minutes depending on the speed of your internet connection and your computer's configuration. This might take a few minutes depending on the speed of your internet connection and your computer's configuration. Great. We know that Docker was successfully installed. Rephrase. Great. We know that Docker was successfully installed because we saw this long message appear in our terminal. Finally, we can confirm that Docker is working by typing sudo docker run hello-world. Now, it would be really inconvenient to have to use sudo every time you wanted to use Docker. Fortunately, we can work around this by adding our user to the docker group. On this machine, my username is [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). To add myself to the docker group, I'll run sudo usermod
>
> **[2:56](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=176)** - a to tell usermod that I'm adding a new user to a group. Then a capital G to specify the group name. In this case is going to be docker. Then, finally, my username, linkedin. If your terminal does not show your username on the screen and you don't know what it is, you can always substitute linkedin with $USER. Now, normally in order for this to take effect, I would have to log out of my entire system and log back in, but I don't want to do that, I just want to confirm that Docker is working. So an easier way to work around this is to type su -s and then $USER. Type in your password when prompted. And that failed. I'll clear my screen. Now, normally you would have to log out and log back in in order to see these changes take effect, and that can be time consuming, especially since you just want to check that Docker is working. So, another way around this is to use sudo to launch another shell as you, but with your new permissions, which include your membership into the new group. So, I'm going to go ahead and type sudo. Then I'll type -u to specify the user, which in this case is going to be me. And then I'll type sh. So now I'm given a shell. And I can confirm that I'm in the new group
>
> **[4:30](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=270)** by running groups. As you can see, I'm now in the docker group. And because of this, I should be able to run docker run hello-world like we did before. As we can see, we can successfully create another container and it shows us the "Hello from Docker" message that we saw earlier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **CLI Commands:** docker (24), sudo (6), curl (3), apt (1), make (1)
> **Tools:** terminal (3), docker desktop (1), command line (1)
> **Prerequisites:** install (3)
> **File Paths:** tmp/get-docker.sh (2)
> **URLs:** [https://docs.docker.io](https://docs.docker.io) (1), [https://get.docker.com](https://get.docker.com) (1)
> **Env Vars:** user (2)
> **UI Navigation:** go to (2)


### 3. Using Docker

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring the Docker CLI](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=0)** - The Docker command line interface, or [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), is the most popular way of interacting with Docker containers. Now that we know more about what Docker containers are and how they work, let's explore the Docker CLI. I recommend taking a look at my last section if you have not installed Docker before. In it we see how to install Docker on your preferred platform. Let's start by opening a terminal. Since I'm recording this on a Mac, I'll do this by holding the command and space keys together to open spotlight, typing in terminal, then pressing enter. If you're on [Windows](../../Glossary/Service/Windows.md), you can use [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) or the command prompt instead. Click on the start key, search for PowerShell, then click on the first result that appears. The Docker CLI is fairly straightforward to navigate. Let's type in docker dash dash help to see what I mean. Most Docker operations can be done with a single top level command. Log in, run, and pull are examples of top level commands. Some commands have commands nested inside of them, or sub commands, but these aren't as common. Every command accepts options or flags to provide additional information to your request. Dash dash help, which I typed in earlier, is an example of a command line flag. Dash dash help is actually a great example,
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=95)** because every Docker command accepts it. Dash dash help tells the command to show you information about it and how to use it. Let's run docker network dash dash help to see an example of this. We can see here that Docker network is an example of a top level command, with sub commands underneath it. Such as connect, create, and disconnect. Fortunately, since every command in the Docker CLI accepts the dash dash help flag, we can just run dash dash help again against any of the commands shown here. Let's try create. Here we can see that dash dash help shows us a one line description of how to use the command next to usage, along with all of the command flags that it supports underneath options. If you try to run a command without any options, you'll be shown a much shorter version of this help page. Let's try running create again without any arguments. Upon doing this, we can still see the one line usage statement, but that's about all the help that we get. If you're ever stuck while navigating the CLI, just use dash dash help. I use dash dash help all of the time, and I've been using Docker for many, many years.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (5), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (2), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** docker (14)
> **Tools:** command line (2), terminal (2), powershell (2), command prompt (1)
> **Env Vars:** cli (5)
> **UI Navigation:** click on (2)
> **Definitions:** is an  (2)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)

#### [Create a Docker container](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=0)** - [Instructor] Creating a Docker container is easy. Let me show you how. There are two ways to create Docker containers, the long way and the short way. We're going to go the long way first, so that we can better appreciate how much the short way simplifies things. Containers are created from container images. Container images are a compressed and pre-packaged file system that contain, no pun intended, your app along with its environment and configuration with an instruction on how to start your application. That instruction is called the entry point. First, we'll need to tell Docker to create a container from an image. If an image does not exist on your computer, Docker will try to retrieve it from a container image registry. By default, Docker always tries to pull from Docker Hub. We will use the Docker container create command to do this. Let's see its help page by running Docker container create dash dash help. As you can see, we have a lot of options here. We'll use a few of them during this course. Check out Docker's excellent documentation to learn more about any of the options that I haven't covered. Let's look at the usage summary at the top. As you can see here, Docker container create requires the name of the image, stylized in capital letters. We also know that Docker container create can accept additional information, but since they are in brackets, they're optional and can be safely excluded. We are going to use Docker's hello world Docker image.
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=94)** Containers created from this image print a friendly hello world style message to your terminal. This makes an image useful in testing that Docker is working properly. Let's create our first container. I'm going to create it by running Docker container create hello-world. Now, for demo purposes, I want to get a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) specific version of this hello world image. To do that, I'll add a colon, then Linux. This annotation is called an image tag. We'll learn more about tagging later in this chapter. We can see here that Docker container create first attempts to download or pull the Linux version of the hello world image we requested from Docker Hub. If this is unsuccessful, we will see a friendly error message explaining why. Fortunately, we know that we were able to pull the image successfully by the pull complete message appearing in our terminal. You said that we get a really friendly message back, Carlos, what's this nonsense? Well, great question. You're looking at the container's ID. Every container created by Docker has an ID associated with it. This makes it easy to inspect and interact with them. It's important to note that the Docker container create command creates containers, but it does not actually start them. This means that it does not execute the image's entry point automatically. In our case, this means that we won't see that friendly message until we start the container that we created.
>
> **[3:08](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=188)** We can see this in action by running Docker PS to list the containers that we have created. Let's run that command now. By default, Docker PS will only show us containers that are actively running. You'll see this with containers running servers or other long-lived applications. The Nginx image is a great example. Since Nginx is a web server, it is expected to run forever or until the system kills it. If we created a container from this image, you would likely see it after running Docker PS. Let's run Docker PS again, but with the dash dash all option to see all of the containers Docker knows about. The container we created earlier now shows up. As you can see, it's in a created state. That means we simply just need to start it, so let's do that now. I'm going to copy that really long ID from earlier, which is here. Then I'm going to type Docker container start, paste the ID that I just copied, then press enter. We got that container's ID again. This means that Docker was able to successfully start the container. Now, we still didn't see that super friendly message we were promised. First, let's run Docker PS dash dash all to see what happened. We can see that the status of the container changed from created to exited with the zero in parentheses. This is a good thing.
>
> **[4:43](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=283)** A zero exit code, like the one we're seeing here, means that the entry point was executed successfully. Any other exit code likely means that there was a problem. Now, it would be really nice to see log messages that came from our container while it ran. Fortunately, we can easily do that with Docker logs. Let's run Docker logs with the first three characters of the container's ID to see what happened. We can see here the first three characters are CB2, so I'm going to just copy those and paste them right here. Then hit enter. Finally, the helpful message that we were promised appeared. Docker logs is also really helpful in troubleshooting containers that have failed, assuming that its corresponding application produces logs, of course. We'll see how to troubleshoot pesky applications that don't log later in this course. We also saw that we didn't have to provide the entire ID to this command. Docker's smart enough to know which container you want from just the first few characters of the ID. Another way to get this output without having to resort to Docker logs every time is to start the container and "attach" our terminal to the container's output. We can do that with Docker container start dash dash attach. This will tell Docker to start the container and immediately attach our terminal to the container's output. Let's try that with the container that we created earlier.
>
> **[6:20](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=380)** As we can see, we got the message we saw earlier immediately. If we were starting a long running container, like one created from the Nginx image, we could also use Docker container attach after running Docker container start to do the same thing. You might have also noticed that we were able to start the same container that we created before multiple times. We did not have to create a new container from the hello world image to do this. This is because docker containers do not get deleted automatically, by default. We'll learn how to delete Docker containers in a bit. All right, so now that we went the long way, let's give the short way a try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3)
> **CLI Commands:** docker (38), nginx (3)
> **Definitions:** means that (5), is a  (3), is called (2)
> **Tools:** terminal (4)
> **Cross-References:** later in (2)
> **Env Vars:** cb2 (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Create a Docker container: The short way](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=0)** - [Instructor] Previously we looked at the long way of creating and starting Docker containers. Let's get the short way a try. It would be really inconvenient if we had to create and start containers explicitly every time we wanted to run our app. It would also be inconvenient to have to use Docker ps to know whether our app ran successfully and then use Docker logs to see its output. Fortunately, Docker created a single command that rolls all these steps into one. That command is Docker Run. Let's try running it against our Hello World Docker image from before. To do that, I'm going to just type docker run hello-world, and again, since I want the [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) version for demo purposes, I'll type :linux. That was so much faster. As we can see here, docker run automatically created a container from the hello world image, started it, and attached to the container to show us its output immediately. Another way to think about this is with this really simple formula, docker run = docker container create + docker container start + docker container attach. We can still use docker ps to see its exit code just like we did when we went the long way. Let's run docker ps --dash all to take a look at that. And there it is. You might have also noticed that docker run did not show us the container's ID after we ran it. This is by design.
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=95)** You need to use docker ps to get IDs for containers started with docker run. We can also still use docker logs to see this output again if we need to. Let's try that now. Since we ran docker ps earlier, we know that the first three characters of this container's ID are d90. Let's use this with docker logs to get that output again. And like we expected, we got that calming and super friendly. Hello World message once again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2)
> **CLI Commands:** docker (20)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Create a Docker container from Dockerfiles, part 1](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=0)** - [Instructor] So far, we've been creating containers from Docker images published on Docker Hub. However, this isn't very helpful if we're trying to create a container for our own app. Fortunately, Docker makes it very easy to build our own Docker images and start containers from them. We can even push our app to the Docker hub when we're ready to share our work with the world. I'll show you how to do that later in this course. For now, let's build an image from our own Docker file and start a container from it. There should be two files in your exercise files for this section, a Docker file, and an example quote unquote app called entry point dot bash. This app simply tells us the current time. Let's open the Docker file in your favorite editor. I'm going to open mine in Vim. This is an example of a Docker file that you might see in the wild. There are lots of keywords in the Docker files syntax. Visit the link shown below to see the latest Docker file reference documentation. "From" tells Docker which existing Docker image to base your Docker image off of. This can be any existing image either local or from the internet. By default, Docker will try to get this image from Docker hub if it's not already on your machine. Some images will contain a label adding additional data like the maintainer of this image, which is me for example. "User" tells Docker which user to use for any Docker file commands underneath it. By default, Docker will use the "root user" to execute commands. Since most security teams do not like this,
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=94)** the user keyword is useful in changing a user that your app runs as to one that is less powerful, like "nobody" for example. "Copy" copies files from a directory provided to the Docker build command to the container image. The directory provided to Docker build is called the context. The context is usually your working directory, but it does not have to be. Run statements are commands that customize our image. This is a great place to install additional software or configure files needed by your application. Since our example script needs "Curl" and "Bash" to run, this Docker file uses run commands to install those programs. Here we're using the user command to set the default users for containers created from this image to the powerless "nobody" user. This ensures that we can't break out of the container and potentially change important files on our host. Finally, the entry point tells Docker what command containers created from this image should run. You can also use the CMD command to do this, though there are differences. Consult the documentation from the link shown earlier to learn more.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (23), curl (1)
> **Tools:** bash (2), vim (1)
> **Definitions:** is an  (1), is called (1), is a  (1)
> **Prerequisites:** install (2), configure (1)
> **Analogies:** for example (2)
> **Env Vars:** cmd (1)
> **Cross-References:** later in (1)
> **Documentation:** the documentation (1)

#### [Create a Docker container from Dockerfiles, part 2](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=0)** - [Instructor] Now that we've seen an example Dockerfile, let's turn it into a Docker image and start our container from it. We're going to use the docker build command to do this. Let's look at its help documentation first. Just like docker run, we have lots of options to choose from. For this example though, the only option that we'll need is the tag option. Just like containers, every Docker image has an ID. This option associates a convenient name with that ID. This way, we don't have to remember the image ID whenever we use it. So going back to our docker build command, let's call it our-first-image to keep things simple. Dockerfile looks for a file called Dockerfile by default. Since this is what our dockerfile is actually called, we don't need to change anything. However, if our Dockerfile were called something else like say app.Dockerfile, we would need to provide the dash f or dash dash file options as well so that Docker uses the correct file. Since we don't need that here, I'm just going to remove it. Now that we've provided our options, we need to tell Docker where its context is. Remember, context is simply the folder containing files that Docker will include in your image. Since the entry point script is in our working directory already, we can simply put a period here. If it were located in another folder, like say path/to/app, we would put that directory there instead of a period. We're now ready to run docker build, so let's do it.
>
> **[1:37](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=97)** We can see Docker executing each command in our Dockerfile line by line. You might notice that it is printing what looks like image IDs after each command runs. Why is this? Well, Docker images are just layers of images compressed together. Because of this, Docker creates an image for every command in our Dockerfile. These are called intermediate images. When Docker finishes reading your Dockerfile, it squashes all of these images together into a single image. This is the final image that your container will be created from. We can finally see that our image has been successfully built and tagged. This means that we're ready to run a container from that image. So just like we did before, we can simply execute docker run, then the name of the image or our-first-image to do that. And as we can see, the app inside of that image told us the time like we expected it to. So there we have it, we've run a container from our first image.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (14)
> **Analogies:** just like (3)
> **File Paths:** app.dockerfile (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Create a Docker container with BuildKit](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=0)** - [Instructor] In the last video we used Docker build to build a simple Docker Image. If you see build output that looks like the image provided in the slide then that means that you are using the legacy Docker builder. You'll want to be using BuildKit, Docker's improved image builder, instead. This builder provides improved performance and additional helpful features over the legacy builder that ships with Docker. Let's go into the terminal and see it in action. Using BuildKit is easy. All you have to do is run docker buildx build and then provide the same options that you provided to Docker build. While Docker build uses BuildKit underneath the hood for versions of Docker Desktop published after 2023 or so, Docker Buildx gives you more options with what you can do with images that it provides. I'll provide a link at the end of the video that you can check out to learn more about this. So going back to docker buildx build, in the last video we used -t our-first-image and a period. Before the period, put --load here. Let's explain what --load is doing here. One of BuildKit's coolest features is that it uses something called exporters to give you more control over the image that it produces. You can either have BuildKit automatically push images into image registries after they're done building or you can save them into your computer as tarball files. The latter is really helpful if you find yourself in environments that do not have access to the internet.
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=94)** - -load here is a shortcut that tells BuildKit to build the image and load it into Docker when it's done. Check out the link below to learn more about exporters in BuildKit. All right, now we're ready to run this, so let's hit Enter to do that. Now depending on the version of Docker Desktop that you're running it might take a little while for this to start, that's because Buildx creates build containers or builders when you run Buildx for the first time. These are the containers that are used to produce your container images. Builders make it possible to do several things, like build images that work across Intel and ARM chips, build images remotely on other computers, or even build images within [Kubernetes](../../Skills/DevOps/Kubernetes.md). Check out this link to learn more about BuildKit builders. As you can see, the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the build is just like what we saw last time. Running images built by BuildKit is also no different. For example, if I run Docker run --rm our-first-image, we get the time back just like we did before. There's lots more that you can do with BuildKit. We saw that earlier when we ran Docker buildx --help. This will give you everything that Buildx is capable of doing. Check out this link to learn more about BuildKit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** docker (15), find (1), make (1), rm (1)
> **Tools:** docker desktop (2), terminal (1)
> **Analogies:** just like (2), for example (1)
> **Cross-References:** in the last (2)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** arm (1)
> **Speakers:** - [instructor] (1)

#### [Interact with your container](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=0)** - [Instructor] Up to this point, we've been running containers that immediately exit after running their entry point commands. We can also run containers that do not immediately exit, like servers, for example. Let's explore this concept further. You should have a new Docker file in this section called server dot dockerfile. I'm going to open this file in Vim to take a look. Feel free to use your favorite editor instead, though. As we can see, it looks very similar to our first Docker file. The only difference here is that we're copying a file called server dot bash instead of entry point dot bash. Let's build in and start a container format just like we did before. I'll start by typing docker build just like before. This time, our Docker file is not called Dockerfile. It's called server dot Dockerfile. Because of this, I'm going to provide the dash dash file option before server dot dockerfile so that Docker knows that we want to use this dockerfile instead of the one that we used last time. I'll now use the dash dash tag option to give this image a name. Let's call this image our first server. Since we're still in our working directory, I'll add a period at the end. Our docker build command is ready to go, so let's run it. Just like we saw before, it created intermediate images from each of our Docker file instructions, squashed them together into our file image, and then called that final image our first server. All right, great. So, let's create a container from this image. Now, if we were to use Docker run here,
>
> **[1:33](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=93)** like I'm going to do right now, our terminal will hang. And as we can see, I can't get out. Oh no. What did we do? Oh, no. Well, remember, Docker run attaches to the container after it starts it. Since server dot bash is a server that does not exit until being told to do so, it will happily continue running and waiting for us to give it a special keystroke to kill it. Additionally though, Docker containers are not, quote unquote, interactive by default. This means that containers will not accept keystrokes from our terminal even if we are attached to them, and in this case, the application tells us the magic keystroke we need to press to end the program. Thankfully, Docker allows us to change this, and we'll see that in a minute. This is easy to fix. Since we know that Docker PS shows us containers that are running, I can open a new terminal and run that command to get that container's ID. It looks like this container's ID starts with B 71 D. We can now run the docker kill command with that ID to forcefully stop the container. Docker shows us the ID of the container that was killed as proof that it successfully did it. Sure enough, upon going back to our original terminal window, we can see that the container has been stopped and no longer has control over our terminal. To work around this, I'm going to run Docker run dash D instead. This creates and starts the container but does not attach your terminal to it.
>
> **[3:07](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=187)** You can also use Docker container create and docker container start if you'd like to go the long way. We can use Docker PS to prove that our container is running. Now, an interesting thing that we can do from here is use docker exec to run additional commands from this container. This can be helpful while troubleshooting problems or testing images created by your application's Docker file. So let's say I wanted to use the date command to get the time from this container. I can do that by typing docker exec, as I did, the shortened ID for this container, or D 9 0 D, and then the command I want to run, or date, in this example. Once I hit enter, I get the date like I expected. You can even use exec to start terminal sessions within the container. This can be really helpful while troubleshooting. Let's say that we wanted to use a bash cell within the container to do this. Since we're going to be entering keystrokes, we need to tell exec that this command needs to be interactive. Additionally, since we're starting a shell, we'll also need to tell Docker that we'll need something called a quote, unquote, sudo TTY, so that our terminal can properly interact with the container's terminal. We can use the dash dash interactive and dash dash TTY options respectively to enable both of those modes. So, putting that all together, the command I'm going to run is docker exec dash dash interactive dash dash TTY,
>
> **[4:41](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=281)** then the ID for the container, or D 9 0 D, like we saw earlier, and then finally, the shell that I want to use, or bash in this case. Once I hit enter, I'm greeted with a prompt and can run additional commands, which is very exciting. Since I'm done here, I'm going to press Control D to exit out of the shell, but be really careful here. Pressing this keystroke too many times will log you out of your real terminal.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (23), sudo (1)
> **Tools:** terminal (10), bash (5), vim (1)
> **Analogies:** just like (3), for example (1), similar to (1)
> **Env Vars:** tty (3)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Stopping and removing the container](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=0)** - [Instructor] All right, so let's run Docker PS dash A again. We have lots of containers here, but only one of them, our-server, is still running. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) are just sitting there. By default, Docker does not stop or remove containers for you. Realistically, this can lead to a lot of cruft once you start a web server here, a database there, a message bus there, and another app elsewhere. You can have lots of containers sitting on your system that aren't doing anything but burning your battery and potentially slowing your computer down. So let's learn how to stop and remove containers to prevent this. Since our-server is still running, let's start there. Stopping this container is as easy as running Docker stop and providing the ID of the container or FD69, for example. That took a little longer than we expected. This is because Docker attempts to gracefully stop the program the container is running when you run this command. While this application was kind enough to eventually stop for us, greedier applications might not be as kind. There are situations where you could be waiting for up to 10 seconds for Docker stop to finish. Fortunately, in these situations you can forcefully stop the container with Docker stop dash T zero. This tells Docker to immediately stop the container and the application that it's running. But be careful with this since this can lead to data loss, depending on the application that you're stopping. Let's try it with our-server. I'm going to recreate a new container in the background
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=94)** with Docker run dash D our-server. Now, let's execute Docker PS without any options to confirm that it's running. Since we see this container in the output, we know that it's running and it starts with 79F, in this case. Now, I'm going to forcefully stop it with Docker stop dash T 0 79F6.
>
> **[2:01](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=121)** This was much faster. As we expected, Docker terminated the container immediately. We still have a bunch of stopped containers to worry about, though. If I run Docker PS dash A again, we can see that we have even more containers sitting here. We can clean all that up with Docker RM. This command removes containers, so let's run it against our first our-server in the list to see what happens. That container's ID is 79F6, so let's try Docker RM with that. Like every other command, we got the ID of the container that was stopped. When I run Docker PS again, dash A this time, we can see that we have one fewer container in our list. One more thing about Docker RM before I show you all a really cool trick. This command will not stop containers that are running. If you want to do that, you need to add a dash F to the end of the command. All right, all right, neat trick time. Let's say that you wanted to remove an entire list of containers. We could go through each ID and run Docker RM against them, but that'll take a long time. Instead, what I like to do is use xargs, a command built into most [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) and Unix-y systems, to take the output from Docker PS and feed it into a command in one fell swoop, usually as a loop. Let me show you all how awesome this is. First, I'm going to type in Docker PS dash A to list our containers,
>
> **[3:32](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=212)** but I'm not going to hit enter yet. Since we only care about the IDs of the containers that we're going to remove, I'm going to add a dash Q here, to tell Docker to only show me IDs. If I run this as is, I just get IDs. Cool, so let me press the up key to go back to the previous command. I'm going to add a pipe symbol here. This tells my shell that I want to feed the output from the command on the left to the command on the right. Next, I'm going to type in xargs. The only command line "option" we need to provide here is the command to run for each line of output. Since I want to remove these containers, the command I'll use here is Docker RM. Putting it all together, we're listing all containers with the docker PS dash A command, using the dash Q option to only list IDs, then using xargs to take each ID from the left and feed it into Docker RM on the right. Alright, let's do it. That's a lot of IDs that we got back, but if I run Docker PS dash A again, we can see that all the idle containers are gone, and that, my friends, is how you stop and remove containers. Removing containers is nice but docker images can take tons of space. Similar to removing containers, we can remove images by running Docker RMI. Let's try to remove the our-server image, as an example. I'm going to list images by running Docker images.
>
> **[5:07](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=307)** We can see that our-server is pretty close to the top of the list. I want to remove this image. To do that, I'll just run Docker RMI our-server. Sometimes, Docker might tell you that you cannot remove an image from a container that is running. To avoid this, stop any containers using that image first, then rerun Docker RMI again. You can also run Docker RMI dash F to force the removal, but this can cause unpredictable behavior.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** docker (31), rm (6)
> **Env Vars:** rmi (4), fd69 (1)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Binding ports to your container](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=0)** - [Instructor] Up to this point, all of the containers we've created use data imports within themselves. This is somewhat useful, but not nearly as useful as being able to access data imports from your own computer into those containers. Let's learn how to do that. First, let's explore accessing container network services from your host. Docker provides the ability to access network ports within the container, with something called port binding. This feature allows Docker to take a port on your machine, and map it to a port within the container. This section contains a docker file that updated our little server from earlier. That docker file is called web hyphen server dot docker file. First, let's build an image from it, called our web server, with docker build dash t, our web server. Then the dash f option, and then the name of the Docker file, which is called web hyphen server dot Dockerfile. And then finally, we'll provide our context, which is just our current working directory or a period. Next, let's start a container with Docker Run, and background it with dash d. Remember to provide the name of the image that you're running from, in this case, it's our hyphen web hyphen server. A cool feature of Docker that we haven't talked about before is that you can actually name containers. We can do that with the dash dash name option. Let's call this container our hyphen web hyphen server.
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=95)** And finally we'll hit enter to create the container. Next, let's run docker ps to confirm that it's running. And it is, which is great. Since we've moved the server into the background, let's see if it said anything with docker logs, our web server. Notice how I can simply use the name of the container, instead of having to remember its ID. It looks like we have some instructions. It's telling us to go to http colon forward slash forward slash localhost colon 5000. So, let's go there. So, that didn't work. That's because we need to map port 5000 from within the container to a port on our actual machine. Let's go back into my terminal, and stop the container before doing that. I want to stop and remove the container at the same time. So instead of having to run docker stop, and then docker rm, I can easily do this by running Docker rm dash f, then providing the name of the container, or our web server in this case. We get the name of the container back. This proves that the container was stopped. Now let's map some ports. I'm going to press the up key a few times to go back to my Docker run command from earlier. Before I run this command, I'm going to add a new flag before the last instance of our web server. We're going to use dash p to tell Docker to bind ports. Now, the first number I'm going to provide
>
> **[3:11](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=191)** is the port on my host that I want to map. Since we're told to go to localhost at port 5000, I'll just use 5001 on my own machine here. Next I'll provide a colon. Then, I'll put the number of the port I'm exposing from within the container, or port 5000 in our example. A helpful pneumonic that's helped me remember this over the years is outside colon inside. Outside means outside of the container, like our computer, and inside means inside of the container. All right, great. So let's give this a try. We got an ID back, which is fantastic. Let's run Docker ps again to confirm that the container is up, and it is. But we now have an additional piece of information that's helpful. We're now being told that this container has a mapped port active. That's exactly what we want. Now, instead of going to localhost colon 5000, like the container was telling me earlier, I'm going to go to the port on our machine that 5000 is mapped to, or 5001. So let's go back into Safari and go into the address bar, and then type 5001. On some machines, this might take a couple of minutes before it begins working. And boom, we get a webpage.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (17), rm (2)
> **Ports:** port 5000 (3)
> **UI Navigation:** go to (3)
> **Tools:** terminal (1), safari (1)
> **Definitions:** is called (2)
> **Cross-References:** go back to (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Saving data from containers](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=0)** - [Instructor] Containers are meant to be disposable. When they're deleted, they're deleted for good. This includes any data you've saved within them. Let me show you an example. I'm going to use Docker run --rm to create and immediately remove a simple [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) container. I'm going to use --entrypoint to tell Docker that I want to run a shell command. Then I'm going to provide the name of the image, ubuntu. Then at the end of this command, I'm going to send the text, Hello there., to a file called /tmp/file with the echo command and print it with the cat command. I'm going to use a couple of arguments to make this work, and there it is. All right, let's give this a try. As we can see, it went and created that file and printed Hello there. to our screen. Now let's see what happens when I try to print this file on my computer. Oh no! Our system said no. Everything you create within a container stays within the container. Once the container stops, the data gets deleted with it. This would be really inconvenient for apps that need to save stuff after the container exits. Fortunately, the Docker folks thought of this and have a great solution. We can use the volume mounting feature to work around this. Like the port binding feature that we saw previously, this allows Docker to map a folder on our computer
>
> **[1:36](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=96)** to a folder in the container. This can be done with the -v or --volume switches. Like port binding, we'll use outside colon inside. In this case, outside is the folder on our machine that we want to use, and inside is the folder within the container to map it to. Let's give this a try. I'm going to press up to get to my previous command. Then I'm going to put my cursor behind the image name ubuntu. Here I'm going to provide -v. Then a folder I want to map /tmp/file inside of the container to. Let's call it /tmp/container. Next, I'm going to put a colon. Finally, I'm going to put the folder I want to map /tmp/container to or /tmp in this case. Let's hit Enter and see what happens. It looks like I mistakenly forgot to put a space between sh and -v, so because of that, Docker thinks that we didn't provide the name of the image, which would obviously be a problem for docker run. That's what this error message is saying. So instead, what I need to do is just go back, go to where the typo is, which is sh-v, and then just put a space. And the problem is gone, and we get the Hello there. prompt again. So nothing changed from before,
>
> **[3:09](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=189)** but since we mapped /tmp/container on our computer to /tmp in the container, we should expect a file called file inside of /tmp/container. Is it there? I'm going to cat /tmp/container/file and find out. Sure is. Now we can use -v to map files on our computer to files in the container as well. However, there's a small caveat to this. If we try to map a file on our computer that does not exist, it will be mapped as a directory within the container. Let me show you what I mean. I'm going to create a file in /tmp called change_this_file with the touch utility. Now that I've created it, I'm going to go back to the last run command that we ran and change -v to map the file to the container. Because we're mapping files to files, I also need to change the inside file to the file that I'm modifying. In this case, that's /tmp/file. So let's change container over here to change_this_file. No changes. Let's see what /tmp/change_this_file looks like. As we can see, it's been modified as we expected. Let's retry this command one last time, but with a non-existent file.
>
> **[4:43](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=283)** Let's try... Let me move my cursor back to change_this_file, and let's change change_this_file to this_file_does_not_exist and let's run it. As expected with our newly learned knowledge, the shell complains that the file we gave it is actually a directory. That's because this file doesn't exist, so Docker assumed that it was a directory. So I've cleared the screen just to remove all the stuff that we saw previously. It gets more interesting though. What happens if I try to cat /tmp/this_file_does_not_exist in real life. Really interesting. Docker actually created a directory and mounted it as a directory before it ran the command. The lesson here is to make sure that you're mounting real files if you use -v with files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (3), cursor (2)
> **CLI Commands:** docker (8), cat (3), make (2), rm (1), find (1)
> **Code Identifiers:** change_this_file (5), this_file_does_not_exist (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### [Introducing the Docker Hub](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=0)** - [Instructor] As we mentioned earlier in this course, one of Docker's most attractive features is being able to push your images to container image registries. As long as you can log into the registry, you can push your image into it. Let's explore this feature some more. A container image registry is a place for storing and tracking container images. Container images are tracked by their tags, a string combining the name of the image, and optionally it's version with a semicolon. Container images that do not have a version automatically get tagged with the version called latest. Like downloading software on Homebrew or [GitHub](../../Skills/Software%20Development/GitHub.md), this naming scheme makes it really easy to download specific versions of images. We'll see what I mean here in a moment. Docker Hub is a default registry used by the Docker client. This is a publicly accessible registry that anyone can push images to. Whenever you pull images or whenever Docker needs to pull an image from the from line of a Docker file, it will [Fetch](../../Skills/Web%20Development/Fetch.md) an image from Docker Hub. We're going to create an account on Docker Hub. Then we'll use that account to store our our-web-server docker image from earlier. We'll then create another version of the our-web-server docker image and push that into Docker Hub. Are you ready to learn? Let's do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **CLI Commands:** docker (10)
> **Definitions:** is a  (3)
> **Cross-References:** we mentioned (1), earlier in (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Pushing images to the Docker registry](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=0)** - [Narrator] First, we're going to create a new Docker Hub account. To do this, I'm going to click on the big Register button on the upper right-hand corner of the page. Docker Hub will then ask us to register. Go ahead and fill in your information, then click Sign Up when you're done. As a security precaution, I recommend choosing a strong password here. You might also want to save your username and password in a password manager or some other safe place so that you don't have to remember them every time. Since I already have an account in the Docker Hub, I'm not going to click Sign Up here. You'll be sent a verification email after you do this. Keep an eye out for it and click the verification link when you get it. Let's go back to terminal. The next thing we're going to do is log into Docker Hub from the Docker [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). We can easily do this with docker login. You'll be asked for that username and password you created earlier. Enter them when prompted. Since my username is Carlos Nunez, I'm going to go ahead and type carlosnunez and then I'll answer my password. Docker will tell you that login has succeeded if everything checks out. Docker also saves these credentials to your home directory so that you can easily log in in the future. Great, now that we're logged in, let's continue pushing our web server into Docker Hub. First, we'll need to tell Docker that this image is going to be pushed into a registry. To do that, we will need to rename the image so that it contains our username. We can do that easily with the docker tag command.
>
> **[1:36](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=96)** Docker tag renames Docker images. It's like the MV command in [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) terminals, but for Docker images. Okay, so let's rename our-web-server. To do that, I'm going to type docker tag like I've done, then the name of the image that we're renaming or our-web-server and the new name of the image. Because we're sending this to Docker Hub, I'm going to first put in my username, carlosnunez. Next, I'll type in a slash and the name of the image as it will appear on Docker Hub. Since I want it to be called our-web-server in Docker Hub, I'll just put our-web-server here. As we said earlier, we can stop here and have Docker automatically append the latest tag for us. However, I might want to add more versions of our-web-server in the future. Having them all be called latest will get really confusing and make it difficult to know which version I'm actually using. To avoid that, I'm going to put a colon, then a version number. The version can be anything. Let's use 0.0.1 here. We know that this was successful because we did not get a response back. Now that we've tagged our image, we can easily push the image to Docker Hub by running docker push, then providing the name of the image that we just created. In this case, carlosnunez/our-web-server:0.0.1.
>
> **[3:07](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=187)** You'll see logs similar to what we saw with docker pull, but we're going in the other direction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** docker (22), mv (1), make (1)
> **Versions:** 0.0.1 (2)
> **Analogies:** it's like (1), similar to (1)
> **Env Vars:** cli (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)

#### [Checking your images in Docker Hub](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=0)** - Now that we pushed our image into Docker Hub, let's log into it again and see if it made it. If you're not signed in already, you'll see a sign in button near the register button. Click on it and provide your login details. Once logged in, you'll see a list of images. The first image on this list is the image that we just created. This means that we successfully pushed it. Let's take a closer look. Click on our web server. We can see the tags that we've pushed, as well as the operating system the image is compatible with, and when it was last pushed. If we had a lot of tags listed here, we would need to click see all to see them all. What happens if we push the image but with another tag? Let's go back to our terminal and find out. I'm going to click the up key to go back to my Docker tag command. Let's change 0.0.1 to 0.0.2. Like last time, this works well. Now, let's push this image to Docker Hub with Docker Push. Remember to change 0.0.0.1 to 0.0.0.2. Because Docker images are basically layers of images squished together, Docker is smart enough to know which layers already exist in the Hub and which don't. Since we didn't change this image at all, all of its layers already exist and nothing needed to be pushed. Let's go back to Docker Hub. I'm going to refresh this page now. Now that the page is loaded,
>
> **[1:33](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=93)** we can see that 0.0.0.2 has been pushed and is ready to be pulled. Since this image is just a testing image, I don't actually want to keep it in my Docker Hub account, therefore I'm going to delete it. Interestingly enough, there is not an easy way to do this from the command line, we have to do this from the browser. Fortunately, this is really easy to do. I'm going to click on settings, then I'm going to click on delete repository. Docker Hub will ask us to retype the name of the image we're deleting, so I'm going to do that now. Ah, see the mistake I made here is that I typed in the entire image tag, instead of just the name of the image. Remember, image tags are the name of the image, a colon, and then the version. I mistakenly typed the whole image tag instead of just the image name. So let's go ahead and get rid of the repository part. And now the delete button lights up. So I'm going to go ahead and click it to commit the change. After pressing delete, the image is deleted, and we are sent back to our list of images. It's as if nothing ever happened.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (9), find (1)
> **Versions:** 0.0.0 (3), 0.0.1 (1), 0.0.2 (1)
> **UI Navigation:** click on (4)
> **Cross-References:** go back to (3)
> **Tools:** terminal (1), command line (1)
> **Definitions:** means that (1)
> **Best Practices:** remember to (1)
> **Speakers:** - now (1)

#### [Beyond Docker Hub: Other popular container registries](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=0)** - [Narrator] Docker Hub is a great and easy to use image registry. However, there are lots of other popular image registries that you'll interact with. Let's learn a little more about 'em. An image registry that's exploded in popularity over the years is in a place you're probably already familiar with. [GitHub](../../Skills/Software%20Development/GitHub.md), the world's most popular code sharing and collaboration platform, enables developers to publicly host container images for their projects for free. With built-in integration into other popular services, like GitHub Actions, many open source project maintainers are finding the GitHub Container Registry to be an easier and more convenient way of hosting their images. Check out the link below to learn more about the GitHub Container Registry. GitLab, another extremely popular code sharing and collaboration platform, also has a container registry. Like GitHub, developers can use tools like GitLab CI to automatically build and push their images into GitLab Container Registry for free. Unlike GitHub, though, you can create private image registries for free as well. This is a great option for developers who would like more control over how their images are published. Check out the link below to learn more about the GitLab Container Registry. Finally, if you're using Docker in a corporate environment, you'll likely spend a lot of time working with private container image registries. Private registries offer lots of benefits that greatly simplify self-hosting container images at scale, like role-based access control,
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=95)** service accounts for pushing and pulling images automatically, and improved security with container image scanning. JFrog's Artifactory, Sonatype's Nexus, Red Hat's [Quay.io](https://Quay.io), and Project Harbor are popular options for self-hosting image registries. All of the cloud providers provide their own services as well. Several popular options are listed on this slide. No matter which registry you find yourself working with though, you've already learned the tools you need to use them. Docker login, docker build, and docker push work just the same no matter which registry you're hosting your images with. Try one of them or try them all. The container image registry world is your oyster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6)
> **Tools:** github (6), gitlab (4)
> **CLI Commands:** docker (5), find (1)
> **Definitions:** is a  (2)
> **URLs:** [quay.io](https://quay.io) (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Starting NGINX](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=0)** (energetic music)
>
> **[0:05](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=5)** - [Narrator] Welcome to your first Challenge. For this Challenge, you're going to use NGINX to serve a real working website from Docker. This is something that you'll do very often as you use Docker for real applications. Your exercise file bundle for this Challenge contains a website in a folder called website. Use this folder and the NGINX image in Docker Hub to serve the website from a Docker container called website. NGINX will serve the website from port 80 by default. Ensure that the website is accessible from your browser at [http://localhost:8080](http://localhost:8080). The container must not exist after you are done viewing the website. Finally, if you choose to use volume mounts for your solution, make sure that you're inside of the 03_14 folder and map $PWD in capital letters, /website to/usr/share /nginx/[HTML](../../Skills/Web%20Development/HTML.md) within the container. Good luck and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** nginx (4), docker (4), make (1)
> **Env Vars:** nginx (3), pwd (1)
> **Ports:** port 80 (1), :8080 (1)
> **URLs:** [http://localhost:8080](http://localhost:8080) (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (energetic music) (1)

#### [Solution: Starting NGINX](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=0)** (cheerful synth music) - [Instructor] Thanks for trying this challenge. I hope that you enjoyed it. The challenge was to serve a website on engine X with Docker, given some configuration and the static site. Let's work through the solution together. The first piece of information that we're given, is to use the Engine X image from Docker hub. This makes our problem much easier to solve, because we do not need to create a new Docker file for this website. Next, we were told to name our container "website". We know that we will want to use "Docker run" if we're going the short way, or "Docker container create" and "Docker container start" if we're going the long way. I prefer to use the short way, so I'm going to erase this and use "Docker Run" instead. Since the container will have a name, we know that we will want to use the dash dash name option. The next thing we know is that we need to configure our container to use the website in our exercise files. This means that we need to use a volume mount to map our website folder to the "slash usr slash share slash EngineX slash [HTML](../../Skills/Web%20Development/HTML.md)" folder within the container like we saw in the challenge prompt. If you get the two confused, that's okay. Always remember outside, colon, inside. To do that, I'm going to need the dash V option and I'm going to put "dollar PWD slash website" as directed by the prompt and then a colon,
>
> **[1:38](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=98)** and then "slash usr slash share slash engine x slash html". Next, we were told two key pieces of information. First, that our website should be accessible from "http colon slash forward slash localhost colon 80 80" and that engine X will serve websites from port 80. This means that we need to use port mapping with the dash P switch to make this happen. Outside will be 80 80, colon as a colon, then inside will be 80. You should not have needed to modify the engine X config at all. Finally, we were told that the website container should delete itself immediately after the website is done. This means that we should add a dash dash RM option here to guarantee that. While we can just run Docker stop and Docker RM afterwards, using this flag simplifies this process putting it all together, our final command is "Docker, run dash, dash name dash V". Ah, I hope you all caught that. I actually forgot to put the name of the website there, after "dash dash name", so let's go ahead and put that in. All right, starting over, putting it all together, we will have "Docker run dash, dash name website dash v" then the outside folder, which is dollar PWD forward slash website, then colon, then the inside folder,
>
> **[3:16](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=196)** which is "slash usr slash share slash EngineX slash html". Then a dash P, then the outside port, which is 80 80, a colon, and then the inside port, which is just port 80. And then finally, we need the "dash dash RM switch". But finally, finally, we actually need the name of the image, which is going to be Engine X. Let's run it. Sometimes this happens, depending on the outside colon inside that you provide next to the dash V option. To work around this, just simply put quotes around your volume mount. So I'm going to put a quote behind a dollar sign, and then I'm going to put another quote after HTML. So now this is downloading Engine X, downloading all the intermediate layers, these IDs like we saw earlier, and then it finally started the web server. So now I'm going to go into Safari, or your favorite web browser. Doesn't have to be Safari. And then I'm going to go to "HTTP colon forward slash forward slash local house colon80 80", and we got a very nice mission accomplished congratulations website. You did it, congratulations. You have solved the challenge, but we need to terminate the container, and confirm that it's gone. As the directions did say that we need to verify that the container has been removed. So let's go back to our terminal and do that.
>
> **[4:52](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=292)** I'm going to first press control C to stop Engine X. Then I'm going to run "Docker PS dash A" and we can see that the website is gone. And the reason why is because we included that "dash dash RM" option earlier. Now remember that the dash A option is important here. Since the website container is no longer running, it will not show up if we just ran Docker PS by itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4)
> **CLI Commands:** docker (13), rm (4), make (1)
> **Env Vars:** html (2), pwd (2), http (1)
> **Tools:** safari (2), terminal (1)
> **Definitions:** means that (3)
> **Ports:** port 80 (2)
> **Non-Speech:** (cheerful synth music) (1), (music ends) (1)
> **Cross-References:** go back to (1)


### 4. When Things Go Wrong

[↑ Back to Table of Contents](#table-of-contents)

#### [Help! I can't seem to create more containers](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=0)** - [Instructor] So you're humming along using Docker for all the things, you've been building and running all of your apps on Docker for months. Then one day you're trying to build a [Java](../../Skills/Software%20Development/Java.md) app with the open JDK 19 image on Docker hub and see something like this. After reading the tutorial on how to check disc space, you run DF dash H to see where you ran out of space, and you have plenty of space everywhere? What in the world? I don't have space? Where don't I have space? I can't create containers, help! This happens to everyone eventually. Fortunately, this is an easy fix. As we learned from earlier, Docker images are compressed layers of other images. These compressed files need to live somewhere. We also learned that on the Mac, and on some [Windows](../../Glossary/Service/Windows.md) installations, the actual Docker engine runs inside of a tiny virtual machine. What actually happened here is that a folder within that virtual machine ran out of space. So before we start hacking on our system to get at that VM, there are a number of things we can do to fix this. Let's clear my screen before we move on. First, you might have a bunch of images you aren't using anymore, taking up space. We can use "Docker images" to list them. We can also use the "Docker RMI" command to remove images that we are no longer using. The nice thing about this command is that it can take multiple images at a time. Let's say I don't need any of the [Selenium](../../Skills/Software%20Development/Selenium.md) images, or this engine X image,
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=95)** or this weird XQ image that I created, anymore. I can easily remove them in one fell swoop by typing "Docker RMI", and then the tag for each image I want to delete. So in this case, it'll be "Carlos Nunez XQ, engine X," and both of the selenium images. So "standalone Chrome" and "standalone Firefox". As we can see, they are easily deleted. Remember that you might need to stop containers using some of these images with Docker RM before running this command. You can also add "dash F" to the RMI command to forcefully delete those images, but be wary of data loss here. Docker has another trick up its sleeve to reclaim space. I'm going to press Control K to get rid of that command, and then control L to clear my screen. We can run another command called "Docker system prune". This command smartly removes useless data that's burning a hole in our disc. Now we get a warning here. This warning is usually innocuous. It just tells us that it's going to remove stopped containers that we aren't using anymore, as well as some intermediate layers that were created that are no longer associated with images that are on our machine. Because I know this is safe, I'm going to press the lowercase y, to tell Docker to do this. Now, if you have hesitations about doing this based on this message, you can always press uppercase N to abort it. Like I said, I'm going to press lowercase y.
>
> **[3:11](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=191)** In this case, I've reclaimed all the space that I possibly could, so I don't have any space to reclaim here. But in my experience running this command, a lot of times you can reclaim serious amounts of space. I've reclaimed gigabytes of space doing this. I love this command. It is a very helpful command to have in your toolbox. So now that we've run Docker RMI to remove images and Docker system prune to remove some staleness in our Docker engine, let's try running that Docker run command from earlier. So I'm going to press Ctrl L to clear my screen, then press Ctrl R to look for the Docker run command I ran earlier. I'm just going to type "run" since I don't want to type the whole thing. This is not the command that I want. So I'm going to press control R again until I find it. Here it is. So now I'm going to press enter to continue. And success! We're officially Docker engineers, you all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** docker (18), rm (1), find (1)
> **Env Vars:** rmi (4), jdk (1)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** warning (2)
> **Tools:** firefox (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Help! My container is really slow](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=0)** - [Instructor] While this doesn't happen very frequently, your container might run more slowly than you expected. There are a lot of advanced troubleshooting techniques we can use to diagnose these sorts of problems, but we'll talk about three commands that you can run that will help. The first command is docker stats. Docker stats can give you a snapshot of your container's performance as it's running. Let's look at an example. I'm going to start a new container called alpine, in the background with docker run --name and let's set it to alpine -d. Alpine [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) is a Linux distribution that's extremely small and bare bones. It is a great fit for docker because its small size makes it very easy to create small images that download quickly. Since we want to use this distribution I'm just going to type alpine here as the image name. I also want this container to run indefinitely, so I'm going to set its entry point with the --entry point flag to sleep. And then after the image name, I'm going to provide an argument to it, called infinity, that well, puts the container to sleep forever. Let's run it. A quick check of docker ps confirms that it's doing what I expected. It is sleeping and it is running. I want to look at its stats while it's sleeping. I can use docker stats. Then the ID or name of the container. Since I named it alpine earlier.
>
> **[1:33](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=93)** I can just type alpine here. Then I'm going to hit enter, and we can see some really interesting information from this screen. Let's see if I can hammer this container. In another terminal, I'm going to start a shell into the container with docker exec. Then I want it to be interactive, since I'll be answering key strokes and stuff like that. So I'm going to put a -i. I also need this terminal to communicate with the container's terminal. I can do that with sudo TTY, which I can provide with the -t option and then I'll provide the name of the container. Finally, I'll provide the shell that I want to use, which in this case I want to use just sh. And then I'll hit enter to enter that container shell. A really simple program I'd like to use, to increase CPU consumption is the yes program. The only thing this program does is print yes, but in doing so, it lights the CPU on fire, which I really like. So there it is. It's printing y indefinitely. Now going back to our original terminal, we can see that the CPU usage went up considerably because of this. Let's go back to our previous terminal, control C out of the yes bomb that we've created, and then type exit to leave the shell. As you can see, after I terminated that, yes bomb, the CPU usage went right back down.
>
> **[3:08](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=188)** Let's control C from here, and talk about the second command I like to use for debugging. The second command I like to use for debugging is docker top. Docker top shows you what's running inside of the container without having to exec into it. Let's go back to our infinity container again. I'm going to use docker exec again to run three more sleeps. I'll also use the -d flag, so that we don't attach each command after running it. So here's the first one. Here's the second one And here's the final one. Now, if I run docker top against this container we can see that we have a ton of sleeps. Let's go ahead and clear my screen, before I talk about the final command, which is docker inspect. This can show you advanced information about a container that's running in [JSON](../../Skills/Web%20Development/JSON.md) format. This is also really convenient for scripting against docker. All right, let's mess with our infinity sleeper once more. I'm going to run docker inspect. Then I'm going to provide the name of the container. Finally, I'll hit enter. And we get a lot of JSON back. It went straight to the bottom too. It would be convenient to read this output page by page. Fortunately, we can run this again but this time we can feed the output with the pipe, into the less command on the right. This is much better, at least for me. Less breaks up long texts like this
>
> **[4:42](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=282)** by sending the data into a viewer. This is also called Pagan 80. We can see a lot of stuff that we normally wouldn't see with docker ps. I can see whether the container is restarting. I can also see the amount of times the container is restarted with Restart Count. The search is case sensitive, so we need to make sure our casing is right. We can also see information about directories that have been mounted with mounts. I don't have any directories mounted, so it's an empty list. And I can also see much, much, much more. I'm going to press q, to get out of that screen. Like I said earlier, there's a lot more we can do to debug slow docker containers. However, this is a good starting point, especially with your newfound docker knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **CLI Commands:** docker (17), sudo (1), make (1)
> **Env Vars:** cpu (4), json (2), tty (1)
> **Tools:** terminal (5)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### [I can't use the Docker client!](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=0)** - [Instructor] Here's one more bugbear that you might run into. You hop into your machine in the morning and fire up a terminal to begin doing some stuff with containers. However, upon running docker ps to see what containers you have running, you're asked, rather rudely, is the docker daemon running? "What do you mean is the docker daemon running? It was running yesterday. Who messed with my machine?" You might angrily be thinking. "I have deadlines." (instructor sighing) Take a breath. This one's easy to fix. There are two reasons why you might run into this. The first reason is pretty straightforward. Remember our little whale friend in the system tray or task bar? If you don't see it, then Docker Desktop isn't running. All you need to do is open Docker Desktop again and give it a minute to start. Once you see the whale with its boxes on top of it, then go back into your terminal and rerun the command. It should work as expected, right as rain. A less common reason why this happens is that you might be in a wrong or outdated Docker context. Let's run docker context ls to show you what I mean. Context enable you to create shortcuts that configure the machine that the Docker client uses to do Docker-related things. These enable you to build and run containers remotely, which can be really helpful if you're using Docker in an automated scenario, like in a script or in a CI/CD pipeline run. As you can see in the left-hand column over here, we have three docker contexts.
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=94)** We have default, desktop-[Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), and definitely-not-broken. The asterisk to the right of definitely-not-broken tells us that this is the context that our client is currently using. The column to the right of this tells us the endpoints that our Docker client is using through this context to communicate with the Docker engine. We can see that it's trying to communicate with the file that does/not/exist because the file is literally called does/not/exist. This will obviously cause us some problems. Let's run docker context use default to switch to the context created by Docker Desktop. You can also switch to desktop-linux to do the same thing. Now let's retry running our docker ps command. As you can see, our command works as expected. Now, a big note here: contexts and endpoints can be overridden with shell environment variables. Specifically, the context can be overridden with the DOCKER_CONTEXT environment variable and the endpoint can be overridden with DOCKER_HOST. To check for this, run echo $DOCKER_CONTEXT ; echo $DOCKER_HOST. If you're on a [Windows](../../Glossary/Service/Windows.md) machine, like shown here, make sure you have an env: after the dollar if you're doing this in [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md). When I run this, mine came back empty. That means that I don't have any override set. But to show you an example of... Let's go ahead and use export to set DOCKER_CONTEXT to definitely-not-working.
>
> **[3:11](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=191)** If I run docker ps again, we can see that we get an error here where wherein I'm trying to use this context that doesn't actually exist. To unset it, just run unset DOCKER_CONTEXT and you're back in business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1)
> **CLI Commands:** docker (17), ls (1), cd (1), make (1)
> **Env Vars:** docker_context (4), docker_host (2)
> **Tools:** docker desktop (3), terminal (2), powershell (1)
> **UI Navigation:** switch to (2)
> **Prerequisites:** configure (1), make sure you have (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Fix a broken container](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980&t=0)** - [Instructor] All right, challenge time. This exercise file packet contains a Dockerfile and a script. The Dockerfile produces a container that is broken after an image is built from it. In this challenge, I would like you to fix the Dockerfile and the script within. When the container is working, you should see the messages that you see here print onto your terminal in order almost immediately. Here are some helpful hints. Use the -it flag when you run your container. Also use docker ps and docker rm if you get stuck trying to stop the container with Control + C. Finally, while you should not need to know more about shell scripting than what we've covered here, feel free to consult any documentation that you need. Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2), rm (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Fix a broken container](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=5)** - [Instructor] All right, I hope you had some fun solving that challenge. Let's go through the solution together. Our exercise file packet contains two files, a docker file called docker file, and a script called app dot sh. Let's run docker build to build the image from this docker file. Since we're building our own image, we need to give it a name. Let's use app here with dash T. We also know that we need to provide a context to docker. Since we're already in the same directory as the exercise files, I'll just put a period here. The final command we'll run here is docker build dash t app, and then the period to denote the current directory. Let's run it. So, it looks like docker cannot find this image on our system, or from the docker hub. We have two options here. We can either change the from image that we're using, to something that we do have, or we can go into docker hub and find an [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) image that actually exists. I'm going to do the second thing. I'm going to open a browser, then visit the docker hub at hub dot docker dot com. Once the page loads, I'm going to type ubuntu into the search box, And then hit enter to start searching. And then I'll click the first result. Scrolling down, we can already see a bunch of version tags that will work for us here. However, you might have noticed that one of them is eerily similar to the one we tried to download. Let's go back to our terminal,
>
> **[1:38](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=98)** and see if we can identify that. So this red error message tells us where we failed. It failed to find this ubuntu colon xenial docker image. But if we go back to our docker hub, we can see that there's a xenial image, but there's only one L in this one, and two L's in this one. That's right, we totally misspelled xeniall. So let's go back into our docker file to fix that. I'm going to open my docker file in Vim. And then I'm going to remove the second L from xenial ere. I'm going to save my file with colon w, and then quit with colon q. And then I'll press Ctrl R to go back to my run command from earlier. Not that one. I actually meant docker build. And then try it again. And we can see a lot more intermediate layers here. And we get a successful message at the bottom, so we know that this works perfectly. Now that we've built our image, let's try to start a container from it. I'm going to do that with the docker run command. Let's clear my terminal to make some space. We know from the challenge prompt that we should run this with dash i and dash t, which can be put together like this. This allows us to send keystrokes to our command, which might be helpful. Next, I'm going to provide the name of the image I created, which is just app, and then I'll press enter. I could have also provided dash dash RM here
>
> **[3:16](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=196)** to remove the container after I'm done, but that's completely optional here. All right, so the app starts and begins processing, but very, very slowly. The prompt tells us that this should be immediate so something is wrong here. We can do two things. We can either look at the script and find out what's going on there. Or we can use docker top to figure out whether the container's just slow. I'm going to do the latter. While this is processing, I'm going to run another terminal and in it I'm going to run docker stats, and then the name of the container that we're running. We then give this container a name. It looks like it finished in the background there. Finally got done. So, let's actually rerun this app again. I'm going to keep this terminal open here. I'm going to rerun it, and I'm going to actually give this container a name. Let's call it app underscore container. Then hit enter once again. All right, so it is processing, but again it's processing very slowly. So in my other terminal, I'm going to go ahead and run docker stats, and then provide the name of the container, which is app underscore container. We can see that the CPU is being hammered pretty hard here, so something is definitely causing our CPU to spike. Let's exit out of here and see if docker top gives us some answers. Docker top app container. And we can see that there is this weird timeout thing happening. And then yes is running again. We saw earlier that yes is
>
> **[4:49](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=289)** the magic command that destroys CPUs, so that definitely shouldn't be in our script. This means that we need to modify the app that's used by this docker file and rebuild this image. So, I'm going to get out of this terminal, since I don't need it anymore. And then, I'm going to open the docker file once again. And we can see that the entry point is set to this app dot sh file. So what I'm going to do is I'm going to open that file, with colon e. And since it's in my current directory, I can just provide app dot sh. Now, I already know that yes is definitely the culprit here. So, I'm just going to search for yes in my file and we can see that it's right here on this line. So intuitively, I would think that deleting it should fix this problem. So I'm going to go ahead and delete that with d, d. And then I'm going to colon w to save my file. And then colon q to quit. Now that I've made changes to my app, we need to rebuild our docker image. So to do that, I'm going to run Control R, then type build. That's the command that I want, so I don't need to press control R again. I can just press enter. And it rebuilds really quickly. Now that we've rebuilt, let's try running docker run again to see if we get any improvements. Now we experience a conflict, because we have a container that's already named app container.
>
> **[6:23](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=383)** And docker's really helpful and tells us that it's already in use. And it even tells us the ID of the container that's using that name. So, what we need to do here is simply delete that container, and then rerun docker run again. So to do that, I'm just going to type docker rm, and then the name of the container, which is app container. And now it's gone and now I can run docker run again. And as you can see, our application processing messages appeared immediately, and it finished almost immediately, which is exactly what we expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (3)
> **CLI Commands:** docker (30), find (4), rm (2), make (1)
> **Tools:** terminal (6), vim (1)
> **Cross-References:** go back to (3)
> **Env Vars:** cpu (2)
> **Exercise Files:** exercise file (1), exercise files (1)
> **UI Navigation:** open the (1)
> **Definitions:** means that (1)


### 5. Additional Docker Resources

[↑ Back to Table of Contents](#table-of-contents)

#### [Docker best practices](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=0)** - Docker is awesome. In my experience, it has made writing software for multiple systems and platforms a breeze. I hope that you enjoyed learning all about Docker and how to use it. Now that you're ready to move your apps into Docker, there are three best practices I always recommend considering. You are probably going to be downloading a bunch of images from Docker Hub. We saw earlier that it is really easy to create an account and upload your own images. While this is very flexible and makes using Docker very easy, it is also very easy to download Docker images that cause harm to your systems or business. This is especially true if you're using these images as a base for creating your own images. There are many examples of developers getting hacked or having their credentials stolen from using malicious Docker images. Trend micro reported an interesting example of this in 2020. An image called Alpine 2 was uploaded to the Docker Hub. Since Alpine is a very popular Docker image, many developers were confused and downloaded the Alpine 2 image instead. Unfortunately, while Alpine 2 indeed ran Alpine [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), it also configured containers to run a crypto miner on startup. If such a container ran on a platform that charges you for outbound network traffic, like AWS, this would become a very expensive mistake. One way to avoid this is to always use Docker Hub images that are verified. Verified image have an official Docker image designation
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=95)** on them to let you know that they are scanned and vetted by Docker themselves. The [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) image is a great example of that. It is very easy to see its designation on Docker Hub. Unfortunately, there are a ton of safe images that are not verified out there. How do you know which are safe and which aren't? Fortunately, tools called image scanners solve this problem. Container image scanning tools inspect each layer of Docker images and warn you about layers that are known to be malicious, as well as layers that have files in them that might be harmful. Clair, Trivy, and Dagda are some examples of open source image scanners you can use for free. Paid options exist as well. We learned that Docker images will have a version tag of latest by default if one is not provided after running Docker build. While this is mostly fine for local development, this can be a problem for images that will be uploaded into the Docker Hub for three reasons. First, you don't know which version of an application you're getting when you download an image that is tagged with latest. Second, the version can change out from under you when you pull the image again in the future. It would be really unfortunate to have an application and production break because a version of a dependency changed without you knowing. Finally, version tags can be overridden when you push them into the Docker Hub. This makes rolling back to previous versions difficult if you only use latest sets of version tag. For these reasons, I always recommend putting a version tag
>
> **[3:09](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=189)** when creating images, even if they are local. It's easy, quick, and solves a lot of problems in the future. We learned that Docker containers run as the root user by default. This makes security teams nervous and gives applications the ability to cause a lot of harm both within the container and outside of it. To avoid this, I recommend running containers as a user other than root. You can do this for your own images as well as for containers created from existing images. For containers created from other images, specify the dash dash user option when running Docker Run or Docker Container Create. You can use Linux user IDs or actual names. This can cause problems with images whose applications assume that they are running as root. You might need to write additional automational work around that. For your own images, you can specify the user command within your Docker file to tell Docker which user to run your application as by default. You can make certain sections of your Docker file run as root and others run as non-root. It is quite flexible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **CLI Commands:** docker (24), aws (1), make (1)
> **Definitions:** is a  (2)
> **Env Vars:** aws (1)
> **Speakers:** - docker (1)

#### [Taking it to the next level with Docker Compose](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=0)** - As we've seen, Docker works really well for running single applications. But what happens when you have an application that relies on multiple components that are running separately? Here's a typical example. You have a web application that relies on APIs or backend services on an application server. The application server stores stuff in a database, which is used by the APIs to return information back to the web app. You would like to deploy all of these systems as Docker containers to make it easier to test and scale your app. At first, you might think, what if I just roll them all into a single Docker image? The problem with this is that Docker containers are really meant to run one application at a time. While you could hack your Docker image to run multiple applications within a container, you run the risk of losing data or experiencing unpredictable behavior. Okay, so I can't run them all in a single container. What if I just start multiple containers and connect them together, might be your next thought, and it's a good one. While we didn't talk about this in this course, you can run multiple containers and connect them all through virtual networks and separate data volumes managed entirely by the Docker engine. This is a great way to implement a three-tier architecture, like the one our web app is using. However, having to run tons of Docker [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) commands to make all of this work can get tedious and frustrating. Fortunately, Docker [Compose](../../Glossary/Framework/Jetpack%20Compose.md) is here to help. Docker Compose is a tool provided by Docker that makes it really easy to run
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=94)** and connect multiple containers on a single machine. With Compose, you use a single file called the Compose Manifest to define all of your containers and how they relate to each other. Starting those containers together is as easy as running Docker-compose up. I love using Docker-compose for quickly integrating entire app infrastructures locally. This has been really helpful for running integration or end-to-end tests without having to depend on the network which can be unreliable. Check out docs.[docker.com/compose](https://docker.com/compose) if you're interested in getting started with compose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (8), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **CLI Commands:** docker (13), make (2)
> **Definitions:** is a  (2)
> **URLs:** [docker.com](https://docker.com) (1)
> **Env Vars:** cli (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - as (1)

#### [Level up even more with Kubernetes](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=0)** - Docker makes it easy to run containers in a single system. Unfortunately, things get complicated really quickly once you're running hundreds or thousands of containers in production. While you can link containers together with Docker networks, these networks do not span multiple hosts by default. You can also use the Docker [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) to talk to Docker engines running on remote hosts but it is quite cumbersome, especially when authentication comes into play. Docker also does not have built-in solutions for moving containers between hosts or auto-scaling containers to respond to load. Finally, higher-level concerns like securing traffic between containers or configuring load balancing and [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) amongst them are outside of Docker's realm of responsibility. At best, this can make using Docker alone for production-type workloads really, really complex. At worst, it can increase [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md), decrease performance, and make your infrastructure more susceptible to downtime. Container orchestrators solve these problems. Orchestrators use scheduling techniques, networking magic, and service discovery tools to make scaling, moving, and routing traffic to containers really, really easy. If you've ever used VMware's vCenter or tools like Rundeck, you're already familiar with the basic idea. Many container orchestrators have popped up over the years. Docker's own Swarm product, Mesosphere, HashiCorp's Nomad, and cloud offerings like AWS Elastic Container Service or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Container Service are examples of some popular container orchestrators in the wild.
>
> **[1:33](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=93)** However, the most popular container orchestrator in the market today is the [Kubernetes](../../Skills/DevOps/Kubernetes.md) project. Let's learn a little bit more about it. Kubernetes describes itself as a planet-scale container orchestrator for automating the deployment, scaling, and management of containerized applications. There are a number of features that Kubernetes provides that makes this possible. First, Kubernetes is a distributed system. It is designed from the ground up to run its components and store their data across many machines. This makes it capable of running and connecting hundreds of thousands of containers seamlessly as if they were all running on one machine. This also makes Kubernetes possible to run on almost anything from Raspberry Pis to some of the largest cloud platforms in the world. Second, Kubernetes makes it really easy to group containers together, kind of like Docker [Compose](../../Glossary/Framework/Jetpack%20Compose.md). You can also use Kubernetes to scale those container groups up or down to respond to your application's demands without creating more VMs or other [Hardware](../../Topics/Hardware.md). This is typically expensive and sometimes cumbersome but much cheaper to do with Kubernetes. Third, Kubernetes also makes it really easy to secure traffic within your container networks and to or from the outside world. You can use Kubernetes to provide specific rules about how your traffic to or from your containers is routed. You can even use Kubernetes to route traffic based on URLs, just like API gateways. Finally, Kubernetes can be used as a platform of platforms. The Kubernetes ecosystem is one of the things I love most.
>
> **[3:09](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=189)** New tools and [products](../../Skills/Software%20Development/Microsoft%20Products.md) to extend Kubernetes are created almost every day. These tools make Kubernetes even more powerful and flexible for all sorts of use cases. You can also use these tools to customize almost every detail of how your company's applications deploy and run. If Docker is like putting everything you need to make a meal in a box, Kubernetes is like a delivery service for your boxed meals. Just like how a delivery service clones and ships meals worldwide, Kubernetes makes managing even hundreds of thousands of containers a breeze.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (17), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **CLI Commands:** docker (10), make (5), aws (1)
> **Env Vars:** cli (1), aws (1), api (1)
> **Analogies:** just like (2), kind of like (1)
> **Code Identifiers:** vcenter (1)
> **Definitions:** is a  (1)
> **Speakers:** - docker (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Until next time](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980&t=0)** - We made it to the end of the course. Great work! We learned about how containers are taking over the world of [Software Development](../../Topics/Software%20Development.md) and why Docker has become immensely popular over the years. We installed Docker Desktop and a Docker command line client and used them to explore creating, maintaining, troubleshooting, and removing containers. Finally, we now know the basics of turning our app into a Docker image and uploading it into the Docker Hub. Now that we know how to use Docker, be sure to give Docker [Compose](../../Glossary/Framework/Jetpack%20Compose.md) a try if you're interested in running clusters of apps as containers on your machine. When you're ready, take your skills to the next level by learning how to run tons of containers with [Kubernetes](../../Skills/DevOps/Kubernetes.md). Knowing how to use the containers is an essential skill and a highly marketable skill in today's ever-changing tech world. Be sure to keep practicing your newly acquired expertise. Good luck and enjoy the journey!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (1), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **CLI Commands:** docker (7)
> **Tools:** docker desktop (1), command line (1)
> **Definitions:** is an  (1)
> **Speakers:** - we (1)


## Resources

- Exercise files available

## Skills Covered

- Docker Products

## Path Context

### In [The Top 10 Most Popular Courses among Engineering Professionals](../../Paths/Data%20Science/Learning%20Paths/The%20Top%2010%20Most%20Popular%20Courses%20among%20Engineering%20Professionals.md)
**1 of 10** | [React Essential Training](../Web%20Development/React%20Essential%20Training.md) →

### In [MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/MLOps%20Essentials%20for%20Developers%20and%20AI%20Engineers-%20Tools%2C%20Pipelines%2C%20Security.md)
**1 of 10** | [Learning Kubernetes](../Data%20Science/Learning%20Kubernetes.md) →

### In [Containerize Applications with Docker](../../Paths/DevOps/Learning%20Paths/Containerize%20Applications%20with%20Docker.md)
**1 of 2** | [Docker Essential Training](Docker%20Essential%20Training.md) →

### In [Docker Foundations Professional Certificate](../../Paths/DevOps/Professional%20Certificates/Docker%20Foundations%20Professional%20Certificate.md)
**1 of 3** | [Docker- Your First Project](Docker-%20Your%20First%20Project.md) →

## Part of

- [Docker Foundations Professional Certificate](../../Paths/DevOps/Professional%20Certificates/Docker%20Foundations%20Professional%20Certificate.md)

## Appears In

- [The Top 10 Most Popular Courses among Engineering Professionals](../../Paths/Data%20Science/Learning%20Paths/The%20Top%2010%20Most%20Popular%20Courses%20among%20Engineering%20Professionals.md)
- [MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/MLOps%20Essentials%20for%20Developers%20and%20AI%20Engineers-%20Tools%2C%20Pipelines%2C%20Security.md)
- [Containerize Applications with Docker](../../Paths/DevOps/Learning%20Paths/Containerize%20Applications%20with%20Docker.md)
- [Docker Foundations Professional Certificate](../../Paths/DevOps/Professional%20Certificates/Docker%20Foundations%20Professional%20Certificate.md)

## Related Courses

_Courses sharing skills:_

- [Introduction to Docker for Java Developers](../Data%20Science/Introduction%20to%20Docker%20for%20Java%20Developers.md) — Docker Products
- [Learning Docker Compose](Learning%20Docker%20Compose.md) — Docker Products
- [Docker- Your First Project](Docker-%20Your%20First%20Project.md) — Docker Products
- [Docker Essential Training](Docker%20Essential%20Training.md) — Docker Products

---

[↑ Back to top](#)