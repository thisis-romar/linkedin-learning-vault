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
  - '[[The Top 10 Most Popular Courses among Engineering Professionals]]'
  - '[[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]'
  - '[[Containerize Applications with Docker]]'
  - '[[Docker Foundations Professional Certificate]]'
next_courses:
  - '[[React Essential Training]]'
  - '[[Learning Kubernetes]]'
  - '[[Docker Essential Training]]'
  - '[[Docker- Your First Project]]'
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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Learning%20Docker.md)

![Learning Docker](https://media.licdn.com/dms/image/v2/C560DAQHW94kV0BQffg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1670878886810?e=2147483647&amp;v=beta&amp;t=gWYXLRyZJarMN8ohNqlxFwfDGoSYY9E4oY3M8vRpV5g)

# Learning Docker

> Applications working on one machine but not others is a common problem in software development. Configuration management tools and virtual machines are common solutions, but can be cumbersome for developers who just want their code to run in other places safely. Docker, an open-source containerization platform, simplifies the deployment and management of your applications by packaging your apps in

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240) | Beginner | 27K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Docker Explained]]** (5 videos)
- **[[#2. Installing Docker]]** (4 videos)
- **[[#3. Using Docker]]** (16 videos)
- **[[#4. When Things Go Wrong]]** (5 videos)
- **[[#5. Additional Docker Resources]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Get up and running quick with Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=0)** - Docker is one of the hottest technologies in tech today.
>
> **[0:03](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=3)** From the earliest startups to the world's biggest companies, containers have revolutionized how software is packaged and shipped.
>
> **[0:11](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=11)** Containers have made the frustrating and sometimes dangerous task of getting software to work across lots of different machines of breeze.
>
> **[0:18](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=18)** Docker has made using containers for almost any app extremely easy and I'm going to show you how.
>
> **[0:24](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=24)** In learning Docker, we'll learn about the basics of containers.
>
> **[0:27](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=27)** What are they?
>
> **[0:28](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=28)** Why do they exist?
>
> **[0:29](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=29)** How do they work?
>
> **[0:31](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=31)** My name's Carlos Nunez.
>
> **[0:32](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=32)** I love containers.
>
> **[0:34](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=34)** I've been using Docker almost every day since 2017.
>
> **[0:38](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=38)** I have helped hundreds of engineers get their production apps into containers across many industries.
>
> **[0:44](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=76281980&t=44)** If you're ready to get your containerization journey started, join me in my LinkedIn learning course.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (4)
> **Speakers:** - docker (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=0)** - If you're curious about Docker, this course is for you.
>
> **[0:03](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=3)** This course is an introductory course so no previous programming or shell scripting experience is required.
>
> **[0:10](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=10)** You'll need a computer, internet access and a terminal for most of this course.
>
> **[0:14](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=14)** Although no terminal experience is required.
>
> **[0:17](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=17)** I'll guide you every step of the way.
>
> **[0:19](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=19)** I'll be using a Mac for most of this course.
>
> **[0:22](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=22)** If you are a Windows user, I recommend using PowerShell.
>
> **[0:25](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=25)** If you're on Linux you most likely already have a built-in terminal.
>
> **[0:30](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=30)** You'll also need a code editor if you would like to create and push your own Docker image to the Docker hub with me in chapter three.
>
> **[0:37](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=37)** Video Studio Code, Atom or Sublime Text are some examples of great code editors you can use.
>
> **[0:43](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=43)** You can also use an IDE like IntelliJ or Eclipse, and that's it.
>
> **[0:49](https://www.linkedin.com/learning/learning-docker-17236240/what-you-should-know?u=76281980&t=49)** If you are ready to learn Docker, let's get started.

> [!info]- Semantic Content
>
> **Tools:** terminal (3), powershell (1), atom (1), sublime (1), intellij (1)
> **CLI Commands:** docker (4)
> **Code Keywords:** let (1)
> **Env Vars:** ide (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - if (1)

#### How to use the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] Some videos in this course come with exercise files that are used within a terminal session.
>
> **[0:04](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=4)** To get to them, simply type cd, then enter the path to the exercise file for that video.
>
> **[0:10](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=10)** For example, my exercise files are on my desktop.
>
> **[0:14](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=14)** To get to them within my terminal, I'll type cd, then a tilda, which is short for my home directory.
>
> **[0:21](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=21)** Then a slash, then desktop, then another slash, and then finally, in double quotes, exercise files.
>
> **[0:30](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=30)** Now I need to quote this because exercise files has a space between them, but if your exercise files does not have a space, you can leave the double quotes out.
>
> **[0:40](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=40)** If you look at my title bar you'll see that it is currently set to the folder I'm in, or exercise files in this case.
>
> **[0:47](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=47)** If you want to go to the exercise files for a specific video, like say, 4.3, type in cd.
>
> **[0:55](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=55)** Then the folder name, which in this case will be oh four, underscore, oh three, underscore, and then before.
>
> **[1:04](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=64)** Note that because there aren't any spaces in here, you can also leave out the double quotes and this will work fine.
>
> **[1:11](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=71)** Okay, so now we're in the correct folder to follow along.
>
> **[1:14](https://www.linkedin.com/learning/learning-docker-17236240/how-to-use-the-exercise-files?u=76281980&t=74)** Once here, you can use LS to quickly list the files within.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (7), exercise file (1)
> **CLI Commands:** cd (3), ls (1)
> **Code Keywords:** finally, (1), case. (1)
> **Tools:** terminal (2)
> **Versions:** 4.3 (1)
> **UI Navigation:** go to (1)
> **Definitions:** short for (1)
> **Analogies:** for example (1)


### 1. Docker Explained

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is Docker?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=0)** - [Instructor] You're developing a cool web app that you're excited to share with the world.
>
> **[0:04](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=4)** You've spent many long and hard hours building the source code, compiling it on your machine, and testing it.
>
> **[0:10](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=10)** After a few weeks of back and forth, your app finally works and is ready to ship.
>
> **[0:15](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=15)** With a little help from a LinkedIn Learning course, you create an AWS account, put your app onto LightSale, link it up to DNS, and finally, tell the world about your app on LinkedIn.
>
> **[0:26](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=26)** After celebrating for a few hours, you check your email and are shocked by the hundreds of messages that in some way, shape, or form, all kind of say the same thing.
>
> **[0:35](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=35)** Hey, your app doesn't work?
>
> **[0:40](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=40)** What gives?
>
> **[0:41](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=41)** It worked on your machine, it worked on my machine.
>
> **[0:43](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=43)** What do you mean it doesn't work?
>
> **[0:45](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=45)** Applications working in one place but not others is a common problem in the world of software development.
>
> **[0:51](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=51)** So common in fact, that it's often called, the it works on my machine problem.
>
> **[0:55](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=55)** In books, conference talks, and one particularly famous meme.
>
> **[1:00](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=60)** There are many reasons why this happens.
>
> **[1:02](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=62)** Sometimes, your computer has a lot of tools and software the app depends on that aren't on other machines.
>
> **[1:08](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=68)** Other times, configuration for your app might come from different places depending on where it is.
>
> **[1:14](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=74)** Maybe a block of source code in your app depends on files or hardware on your computer that other computers don't have.
>
> **[1:21](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=81)** Many tools and software have been created to solve this problem.
>
> **[1:24](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=84)** Configuration management tools like Chef, Ansible, and Puppet solve it by allowing you to write code in markup languages to describe what machines need to have in order to run your app.
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=94)** Other tools, like HashiCorp Vagrant, let you write code to create entire virtual machines to run your app in.
>
> **[1:41](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=101)** However, these tools can be cumbersome for developers who just want to run their code in other places safely.
>
> **[1:47](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=107)** With configuration management tools, you often need to know details about the underlying operating system your markup will run in.
>
> **[1:53](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=113)** With Vagrant, you need to know what quote-unquote, hardware your virtual machine needs to have and often need to configure the operating system before installing or building your app inside of it.
>
> **[2:05](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=125)** Docker aims to take a simpler approach.
>
> **[2:08](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=128)** Docker is software that allows developers to package their apps into images that run on containers.
>
> **[2:15](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=135)** Images are created from lightweight configuration files that describe everything your app needs to run.
>
> **[2:20](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=140)** Unlike virtual machines, containers are virtualized operating systems that are configured with just enough to run your app and nothing else.
>
> **[2:29](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=149)** Because containers are created from images, as long as the machine can run Docker, your app will run and behave the same regardless of where it is.
>
> **[2:37](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=157)** As a result, you can build and run your app quickly, safely, and even cost efficiently.
>
> **[2:44](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=164)** I like to compare a Docker to making a good meal for your friends.
>
> **[2:47](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=167)** You have an awesome recipe passed on down through the generations.
>
> **[2:51](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=171)** When you make it at home, it tastes phenomenal.
>
> **[2:53](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=173)** However, it tastes very different when you make it at a friend's house and even more differently when you make it at your parents' house.
>
> **[3:00](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=180)** Maybe it's because they have different pans, maybe it's because they have kosher salt instead of sea salt, or their stove is an electric stove instead of a gas stove.
>
> **[3:08](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=188)** The reasons for the differences can be endless.
>
> **[3:11](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=191)** It would be awesome if you had a box with all the hardware, ingredients, and tools needed to give justice to your great, great, great grandparents amazing recipe regardless of where it's made.
>
> **[3:22](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=202)** You would have very high confidence in knowing that your friends and family will enjoy the same amazing dish that you did in your house.
>
> **[3:29](https://www.linkedin.com/learning/learning-docker-17236240/what-is-docker?u=76281980&t=209)** That's the advantage that Docker brings to software development.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (5), make (3), aws (1), ansible (1)
> **Code Keywords:** finally, (1), let (1), else. (1)
> **Env Vars:** aws (1), dns (1)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Containers vs. virtual machines
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=0)** - [Instructor] Containers are often thought of as virtual machines but smaller.
>
> **[0:05](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=5)** This is an understandable, but incorrect, comparison.
>
> **[0:09](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=9)** Let's explore the differences between the two.
>
> **[0:12](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=12)** The biggest difference is that virtual machines virtualize hardware whereas containers virtualize operating system kernels.
>
> **[0:20](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=20)** What does this actually mean?
>
> **[0:22](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=22)** This diagram describes how applications run on containers shown on the left and virtual machines shown on the right.
>
> **[0:30](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=30)** Virtual machines run on a platform called a hypervisor.
>
> **[0:33](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=33)** The hypervisor's main job is to translate operations on emulated hardware within virtual machines like memory processors, disks, et cetera, to operations on real hardware within their hosts.
>
> **[0:46](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=46)** This allows for a lot of flexibility, but comes at the cost of disk space as the emulated memory and disks need to live somewhere.
>
> **[0:55](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=55)** Because virtual machines are actual virtual computers, you're responsible for installing the operating systems on each VM and configuring your apps within them.
>
> **[1:04](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=64)** Since they are just computers, you can install and run as many apps as the hardware can support.
>
> **[1:09](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=69)** Finally, apps running on virtual machines can't see apps running on the actual machines hosting them.
>
> **[1:15](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=75)** This makes it possible to run many different apps together on the same hypervisor securely.
>
> **[1:21](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=81)** Containers, on the other hand, run on container run times.
>
> **[1:25](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=85)** Container run times work with the operating system to allocate hardware and copy files and directories, including the parts with your application in it into something that looks more like any other app running on that system.
>
> **[1:38](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=98)** Unlike hypervisors, container run times do not actually translate anything.
>
> **[1:44](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=104)** Every app and every container uses the same hardware and operating system as a system they're running on.
>
> **[1:49](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=109)** Because of this, they do not need to quote, unquote, "boot up" like virtual machines do.
>
> **[1:55](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=115)** This allows applications inside of them to start up very quickly.
>
> **[1:59](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=119)** Additionally, because containers are not virtual machines and do not need virtual memory and virtual discs to work, they take up a lot less space.
>
> **[2:07](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=127)** This allows you to run an order of magnitude more applications at the same time than virtual machines.
>
> **[2:13](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=133)** Containers by design can only run one app at a time.
>
> **[2:17](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=137)** Additionally, because containers share the same operating system as their host, it is possible for containers to see what the host is running.
>
> **[2:25](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=145)** Some containers can even modify the host they're running on.
>
> **[2:28](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=148)** This is a particularly thorny security issue that is fortunately mostly solved.
>
> **[2:35](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=155)** We'll go more into the guts of containers in the next chapter.
>
> **[2:38](https://www.linkedin.com/learning/learning-docker-17236240/containers-vs-virtual-machines?u=76281980&t=158)** In the meantime, here's a summary of the differences that we covered here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1), this, (1)
> **Cross-References:** in the next (1), we covered (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### The anatomy of a container
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=0)** - [Instructor] In the last video, we looked at the difference between containers and virtual machines.
>
> **[0:05](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=5)** We also introduced the container runtime, a component that works with operating system kernels to "containers," let's briefly talk about what creating containers actually means.
>
> **[0:18](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=18)** A container is composed of two things: a Linux namespace and a Linux control group.
>
> **[0:24](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=24)** The diagram below describes these components in more detail.
>
> **[0:28](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=28)** Let's start with namespaces.
>
> **[0:31](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=31)** Namespaces are a Linux kernel feature that provides the ability to expose different "views" of your system to applications running within it.
>
> **[0:39](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=39)** This way, you can have an application think it's running as the say, route super user with access to an entire file system in all sorts of hardware when it's actually running as user 154678 with access to a single folder.
>
> **[0:55](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=55)** Today's Linux kernels provide eight namespaces the ability to view and create users through the USERNS namespace, access to file systems through the MOUNT namespace, network communication abilities through the NET namespace, interprocess communication through the IPC namespace, the ability to change time through the TIME namespace, process ID management through the PID namespace, or PID.
>
> **[1:24](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=84)** The ability to create and list control groups through the CGROUP namespace.
>
> **[1:28](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=88)** And the ability to create host and domain names through the UTS namespace.
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=95)** One thing to note, due to technical limitations Docker containers use every namespace but the TIME namespace.
>
> **[1:42](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=102)** This just means you can't change the time in a Docker Container.
>
> **[1:47](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=107)** Control groups, another Linux kernel feature, build on this by providing the ability to restrict how much hardware each process can use.
>
> **[1:55](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=115)** Docker uses control groups for a few things.
>
> **[1:58](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=118)** First, it uses control groups to monitor and restrict CPU usage, or the amount of CPU time each container can take up.
>
> **[2:05](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=125)** Docker also uses control groups to monitor and restrict network and disk bandwidth.
>
> **[2:10](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=130)** And more commonly, Docker uses control groups to monitor and restrict memory consumption.
>
> **[2:16](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=136)** This makes it easy to prevent busier, or larger containers from eating up all the system's resources and slowing other containers down without having to carve up significant amounts of memory like virtual machines do.
>
> **[2:28](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=148)** Note that you cannot use control groups to assign disk quotas to containers.
>
> **[2:32](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=152)** Fortunately, there are many, "container native" storage solutions that allow you to do this.
>
> **[2:40](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=160)** Control groups and namespaces are a very different and much lighter way approach to isolation than virtualizing entire pieces of hardware like virtual machines do.
>
> **[2:49](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=169)** However, these features come with two important caveats.
>
> **[2:53](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=173)** First, because control groups and namespaces are Linux only features, this means that Docker technically only runs natively on Linux and some newer versions of Windows as well.
>
> **[3:04](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=184)** Second and, more importantly, containers can run on anything but their images are tied to the kernel they were created from.
>
> **[3:12](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=192)** Containers created from container images configured for Linux kernels can only run on Linux.
>
> **[3:17](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=197)** Conversely, containers created from container images configured for Windows can only run on Windows.
>
> **[3:24](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=204)** Fortunately, there are established workarounds for these limitations.
>
> **[3:28](https://www.linkedin.com/learning/learning-docker-17236240/the-anatomy-of-a-container?u=76281980&t=208)** We'll introduce them in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** time (2), pid (2), cpu (2), userns (1), mount (1)
> **CLI Commands:** docker (6)
> **Code Keywords:** let (2), super (1), this. (1), from. (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### The Docker difference
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=0)** - [Instructor] While Docker might be the first thing that comes to mind when thinking about containers, Docker is not the first or only way of creating them.
>
> **[0:08](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=8)** Let's briefly take a look at some other container and container adjacent run times.
>
> **[0:13](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=13)** Containers, or at least the idea of them has been around a long time.
>
> **[0:19](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=19)** The first attempt to isolate workloads came with the Chroot, or change root syscall, created by Bill Joy in 1979 and popularized by 4.2 BSD in 1982.
>
> **[0:33](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=33)** Chroot, which is short for change root, allows administers to change the root directory that applications see.
>
> **[0:41](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=41)** This way, an application can think it has access to an entire file system, when it really only has access to a single folder.
>
> **[0:48](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=48)** You can still create and use chroots today.
>
> **[0:51](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=51)** Check out this link if you're interested in playing around with that.
>
> **[0:54](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=54)** Chroots were convenient for isolating apps from each other, but they could only really protect a host's file system.
>
> **[1:00](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=60)** Applications and chroots could still see and interact with other applications on a file system if they had the right libraries and applications in their chroot.
>
> **[1:09](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=69)** BSD Jails and Solaris zones merged into FreeBSD in 1999, and Solaris in 2004 respectively, These both build on chroots in a big way.
>
> **[1:21](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=81)** With jails or zones, administrators could create entire virtual environments for applications instead of just quote unquote virtual file systems, without needing to emulate hardware like virtual machines can.
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=94)** Like today's containers, administrators could restrict what processes saw or used in a jail or zone, without processes knowing that they were being restricted.
>
> **[1:43](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=103)** Not to be outdone, Linux gained a similar superpower in 2007 with Linux containers or LXC for short.
>
> **[1:52](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=112)** Thanks to significant contributions from Google.
>
> **[1:54](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=114)** Linux containers used control groups and name spaces to provide much of the same functionality as BSD jails can.
>
> **[2:01](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=121)** See the last section to learn more about control groups and name spaces.
>
> **[2:06](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=126)** LXC is still in active development, and you can use it today.
>
> **[2:11](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=131)** This is the documentation for getting started with Linux containers.
>
> **[2:15](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=135)** If we were to look at this, you'd notice that there are a lot of steps involved.
>
> **[2:20](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=140)** You need to create a mapping between your user's ID and a user ID in a container, manually create a network bridge between LXCs network and yours, create a configuration file, and more.
>
> **[2:33](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=153)** These steps might be overwhelming for a developer who just wants to safely run an application in a machine.
>
> **[2:41](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=161)** This is where Docker really shines.
>
> **[2:43](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=163)** Docker has three particular advantages that I like.
>
> **[2:47](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=167)** First, Docker makes configuring container environments really easy.
>
> **[2:52](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=172)** Users can use Docker files to tell Docker how their container should be configured.
>
> **[2:57](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=177)** Docker then uses these Docker files to package your app and its environment into images.
>
> **[3:03](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=183)** You can configure almost anything in a Docker file.
>
> **[3:05](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=185)** It's quite flexible.
>
> **[3:07](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=187)** We'll learn more about Docker files in chapter three.
>
> **[3:10](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=190)** Second, Docker makes it really, really easy to share images.
>
> **[3:14](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=194)** Users can share their application images through the Docker hub, a global repository of images maintained by Docker.
>
> **[3:21](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=201)** Users can create registries as well as create alternative registries hosted on the internet.
>
> **[3:27](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=207)** Third, the Docker command line interface makes creating and starting containers really, really easy as well.
>
> **[3:33](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=213)** You don't have to worry about configuring UID mappings, network interfaces, or Docker configuration files.
>
> **[3:39](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=219)** Starting a container is as easy as running "Docker run".
>
> **[3:43](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=223)** Adding volumes to those containers and joining them with internal networks is similarly straightforward.
>
> **[3:49](https://www.linkedin.com/learning/learning-docker-17236240/the-docker-difference?u=76281980&t=229)** We'll explore some of this in more detail in chapter three.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (17)
> **Env Vars:** bsd (3), lxc (2), uid (1)
> **Code Keywords:** let (1), this, (1), interface (1)
> **Prerequisites:** getting started (1), configure (1)
> **Versions:** 4.2 (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)
> **Definitions:** short for (1)

#### Docker alternatives
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980&t=0)** - [Instructor] Docker is not the only way to create containers.
>
> **[0:03](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980&t=3)** Many other solutions exist, each with their advantages and disadvantages.
>
> **[0:08](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980&t=8)** In 2016, Kubernetes, the largest and most popular tool for managing large numbers of containers, created the Container Runtime Interface, or C-R-I, or CRI, to allow developers to create their own container run times and add or remove features necessary for their projects.
>
> **[0:27](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980&t=27)** CRI-O, runc, and Firecracker from AWS, or Amazon Web Services, are examples of CRI-compliant container run times.
>
> **[0:38](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980&t=38)** One of the biggest concerns with the Docker Engine is that most containers that it creates runs as the root super user.
>
> **[0:45](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980&t=45)** Since applications inside of containers can quote unquote "break out of them" and see stuff on their hosts, this can be a problematic security issue.
>
> **[0:54](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980&t=54)** This motivated Red Hat to create Podman, a container platform for creating highly secure containers.
>
> **[1:01](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980&t=61)** Containers created by Podman can be created rootless, or without root user mapping at all.
>
> **[1:09](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980&t=69)** Additionally, Podman supports the ability to run multiple applications within containers through popular quote unquote "init" systems, like Systemd.
>
> **[1:19](https://www.linkedin.com/learning/learning-docker-17236240/docker-alternatives?u=76281980&t=79)** While Docker has incorporated some of Podman's advantages, many still use Podman today to run highly secure workloads.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (3), aws (1)
> **Env Vars:** cri (3), aws (1)
> **Code Keywords:** interface (1), super (1)
> **Speakers:** - [instructor] (1)


### 2. Installing Docker

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Docker Desktop
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=0)** - [Instructor] In the anatomy of a container, we learned that containers are composed of Linux control groups and Linux namespaces.
>
> **[0:08](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=8)** Namespaces allow administrators to restrict what processes can see on a system, while control groups limit resources that containers can use, like memory and processor time.
>
> **[0:19](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=19)** Since namespaces and control groups are unique to Linux, Docker is designed to only run on Linux, but most developers use Macs or Windows to write and test their codes, so this proved to be an interesting challenge for Docker to solve.
>
> **[0:36](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=36)** Docker's first workaround for this was a tool called Docker Machine.
>
> **[0:40](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=40)** Docker Machine used Oracle's VirtualBox to create a small Linux-based virtual machine whose only purpose was to run the Docker engine.
>
> **[0:49](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=49)** Once created, users needed to run a small shell script to connect their Docker CLI with the virtual machine.
>
> **[0:56](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=56)** While Docker Machine worked well, it had two key problems.
>
> **[1:00](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=60)** First, users needed to know how to use VirtualBox for common tasks like exposing network ports or mounting directories.
>
> **[1:08](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=68)** Knowledge of the VirtualBox CLI tool VBoxManage was usually required when things went wrong.
>
> **[1:14](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=74)** This made adopting Docker difficult for some.
>
> **[1:18](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=78)** Second, Docker Machine was not as performant as its Linux-based counterpart.
>
> **[1:23](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=83)** Slow disk performance while using mounted volumes and slow networking performance when exposing ports were common problems.
>
> **[1:31](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=91)** Because these components were wholly dependent on VirtualBox, these were largely out of Docker's control.
>
> **[1:37](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=97)** In 2016, Docker released Docker Desktop as a more permanent workaround.
>
> **[1:42](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=102)** Docker Desktop improves the experience of using Docker for Mac and Windows in three important ways.
>
> **[1:49](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=109)** First, it uses a much smaller and much faster virtual machine that runs on Apple's native hypervisor called Virtual Kit or Hyper-V on Windows.
>
> **[2:00](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=120)** It also automatically handles mounting volumes and exposing network ports from the virtual machine.
>
> **[2:07](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=127)** And it provides a really nice GUI, or Graphical User Interface, to simplify configuring the virtual machine, as well as some common next steps like creating Kubernetes clusters.
>
> **[2:20](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=140)** In 2021, Mirantis, Docker's parent company, changed Docker Desktop's license to require companies with more than 250 employees and $10 million in revenue to purchase Docker subscriptions before using it.
>
> **[2:34](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=154)** Many alternatives to Docker Desktop have popped up as a result.
>
> **[2:38](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=158)** Some are even using Docker Machine again.
>
> **[2:41](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=161)** While we will not cover these alternatives as part of this course, you can see some alternatives on this slide and I've also included links to some popular alternatives in the exercise files.
>
> **[2:52](https://www.linkedin.com/learning/learning-docker-17236240/docker-desktop?u=76281980&t=172)** Now that we know more about Docker Desktop, let's learn how to install it and use it on Mac and Windows.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (21)
> **Tools:** docker desktop (5)
> **Code Keywords:** interface (1), require (1), let (1)
> **Env Vars:** cli (2), gui (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Install Docker on a Mac with Docker Desktop
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=0)** - [Instructor] Installing Docker Desktop on the Mac is easy.
>
> **[0:02](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=2)** Let's run through the steps.
>
> **[0:04](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=4)** Note that you'll need to be running macOS 10.15 or newer and have at least 4 gigabytes of memory to use Desktop.
>
> **[0:11](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=11)** To determine the version of macOS that you have and the amount of memory that you have, click on the apple on the upper left-hand corner of your screen.
>
> **[0:19](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=19)** Then click on About This Mac.
>
> **[0:22](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=22)** You'll get some information, and you can see the version right under the macOS title.
>
> **[0:27](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=27)** And you can see memory to the right of Memory lower in the page.
>
> **[0:33](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=33)** First, we're going to visit [docker.com](https://docker.com).
>
> **[0:36](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=36)** When you load the page, you'll immediately see a blue download button for your operating system.
>
> **[0:41](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=41)** Click on it to download Docker Desktop.
>
> **[0:44](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=44)** If prompted, give the download a name, and click Okay or Save.
>
> **[0:50](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=50)** If you're following this on a Mac with Apple's M1 or M2 chips, you might need to click the Apple Chip option below.
>
> **[0:58](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=58)** Next, we're going to click the DMG file that we downloaded.
>
> **[1:02](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=62)** This will allow us to easily move our Docker Desktop application into our Applications folder.
>
> **[1:09](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=69)** Simply click the Docker icon, then drag and drop it into the Applications folder.
>
> **[1:15](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=75)** This will take a minute or two depending on your system's configuration.
>
> **[1:19](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=79)** Now let's open Docker.
>
> **[1:21](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=81)** Type Command+Space on your keyboard, then type Docker, and hit Enter.
>
> **[1:27](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=87)** MacOS will ask you if you want to open Docker since it was downloaded from the internet.
>
> **[1:32](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=92)** Click Open to continue.
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=95)** You'll then be asked for your password to install some backend components.
>
> **[1:39](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=99)** Click OK, then enter your password when prompted.
>
> **[1:44](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=104)** Afterwards, you'll be given a final prompt to accept the Docker license agreement.
>
> **[1:48](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=108)** Click Accept to accept.
>
> **[1:53](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=113)** Finally, the Docker Desktop UI will start.
>
> **[1:56](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=116)** Pay attention to your task bar.
>
> **[1:58](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=118)** After this UI starts, you'll see a small Docker whale with some boxes moving up and down its back.
>
> **[2:04](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=124)** This is how you know that Docker is initializing.
>
> **[2:07](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=127)** Docker is ready once the boxes on the top of the whale stop moving.
>
> **[2:14](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=134)** You can also install Docker through a command line tool called Homebrew.
>
> **[2:17](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=137)** Homebrew is a very popular Mac application that makes it really easy to install just about anything.
>
> **[2:23](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=143)** Let's install Docker for desktop with Homebrew.
>
> **[2:26](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=146)** First, I'll visit Homebrew's website at [https://brew.sh](https://brew.sh).
>
> **[2:37](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=157)** Next, I'll click the very convenient clipboard icon next to the Shell command in the middle of the page.
>
> **[2:44](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=164)** Next, I'll open Terminal by typing Command+Space, then typing in Terminal into Spotlight, followed by Enter.
>
> **[2:53](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=173)** Once the Terminal opens, I'll paste that command I copied earlier and hit Enter to begin installing Homebrew.
>
> **[3:02](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=182)** I'll type in my password when I'm asked to.
>
> **[3:10](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=190)** Once Homebrew installs, I'll type Docker by installing in brew install docker --cask.
>
> **[3:19](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=199)** The --cask option tells Homebrew that this package is maintained by the open-source community instead of Homebrew developers.
>
> **[3:28](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=208)** You'll see Homebrew download the same Docker DMG file that we downloaded earlier, except, this time, it'll also automatically install and configure it.
>
> **[3:38](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=218)** Once it's done, Command+Space to find Docker.
>
> **[3:42](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=222)** Then hit Enter like we did before.
>
> **[3:52](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=232)** Let's open or reopen our Terminal to confirm that Docker is working.
>
> **[3:57](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=237)** Here, I'll run docker run --rm hello-world.
>
> **[4:06](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=246)** This will retrieve a docker image called hello-world and create a container from it.
>
> **[4:12](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-a-mac-with-docker-desktop?u=76281980&t=252)** Because we specified the --rm option, Docker will delete this container after it's done running its app, which simply prints a nice "Hello, world" style message.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (23), brew (2), rm (2), find (1)
> **Tools:** docker desktop (4), terminal (4), command line (1)
> **Code Keywords:** let (4), continue (1), finally, (1), except, (1), delete (1)
> **Prerequisites:** install (6), you'll need (1), configure (1)
> **UI Navigation:** click on (3), drag and drop (1)
> **Code Identifiers:** macos (3)
> **URLs:** [docker.com](https://docker.com) (1), [https://brew.sh](https://brew.sh) (1)
> **Env Vars:** dmg (2)

#### Install Docker on Windows with Docker Desktop
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=0)** - [Instructor] Let's take a look at how to install Docker on Windows.
>
> **[0:03](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=3)** There are a few minimum requirements that your system will need to meet.
>
> **[0:07](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=7)** You can see them all on Docker's website.
>
> **[0:10](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=10)** We'll start by going to [docker.com](https://docker.com) in your favorite browser.
>
> **[0:13](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=13)** I'm using Microsoft Edge for this example.
>
> **[0:16](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=16)** You'll immediately see a blue Download icon for your operating system.
>
> **[0:20](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=20)** Click on it to download Docker Desktop.
>
> **[0:23](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=23)** If prompted, give the download a name, then click OK or Save.
>
> **[0:32](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=32)** Next, we're going to click or double-click on the EXE file that we just downloaded.
>
> **[0:37](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=37)** This will begin the Docker Desktop installation.
>
> **[0:40](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=40)** Note that the installation can take awhile to start after you click on it.
>
> **[0:45](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=45)** This prompt is Windows just telling you that you downloaded this application from the internet.
>
> **[0:49](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=49)** Make sure that the verified publisher says Docker Inc. here.
>
> **[0:54](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=54)** And once you've confirmed that it does, click Yes to continue.
>
> **[1:02](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=62)** Once the installation starts, you'll be asked whether you want to use WSL 2 or Hyper V to run the Docker engine.
>
> **[1:10](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=70)** This requires some explanation.
>
> **[1:13](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=73)** The Hyper V backend will run the Docker engine on a VM, just like Docker does on Macs.
>
> **[1:18](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=78)** The WSL 2 backend is more interesting.
>
> **[1:22](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=82)** Windows has been capable of running a real Linux within Windows since Windows 10 Anniversary Edition without virtualization.
>
> **[1:30](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=90)** This feature is enabled by the Windows kernel and performs mostly as fast as a real Linux install on your computer.
>
> **[1:38](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=98)** Remember, Docker only works natively in Linux, unless you're running Windows which is also running Linux inside of it.
>
> **[1:46](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=106)** Docker recommends using the WSL 2 backend, so we'll leave this box checked.
>
> **[1:51](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=111)** If it's not checked, go ahead and check it.
>
> **[1:54](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=114)** If you want a shortcut on your desktop, leave this checked.
>
> **[1:57](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=117)** Otherwise, uncheck the box.
>
> **[2:00](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=120)** I'll leave it checked since I like having the shortcuts on my desktop.
>
> **[2:04](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=124)** Once you're done configuring here, click on OK to continue.
>
> **[2:09](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=129)** Now we'll wait for the installation to finish.
>
> **[2:11](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=131)** You might be asked to restart your computer after the installation is done.
>
> **[2:15](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=135)** If so, go ahead and restart your computer, then come right back.
>
> **[2:22](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=142)** Once the installation finishes, go ahead and click the big Close button in the middle of the window.
>
> **[2:30](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=150)** Now that we've installed Docker Desktop, I'm going to go ahead and close my browser.
>
> **[2:35](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=155)** Then I'm going to go ahead and click on the Start button, type Docker Desktop, then click on the first result that pops up.
>
> **[2:48](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=168)** Once Docker Desktop starts, you'll be asked to accept the Docker Subscription Service Agreement on the screen.
>
> **[2:55](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=175)** If you'd like, you can go ahead and read the full thing by clicking on View Full Terms.
>
> **[3:00](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=180)** Otherwise, just click Accept to continue.
>
> **[3:05](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=185)** Now the Docker Desktop UI pops up.
>
> **[3:09](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=189)** There are a few ways to know that Docker Desktop is initializing.
>
> **[3:12](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=192)** The first way is to look at the status bar over here on the bottom left.
>
> **[3:16](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=196)** When Docker Desktop is initializing, this will be orange.
>
> **[3:21](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=201)** Once it's initialized, this will be green.
>
> **[3:24](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=204)** You can also view the status of Docker Desktop's initialization by looking at your taskbar and finding this black whale with the boxes moving up and down its back.
>
> **[3:36](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=216)** If the boxes are moving up and down its back, then you know that Docker Desktop is starting.
>
> **[3:40](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=220)** If you hover over the whale, you'll also see a tool tip telling you the same thing.
>
> **[3:45](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=225)** Let's give that a minute to start.
>
> **[3:48](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=228)** You might see an error message like this pop up on your screen while Docker Desktop is installing.
>
> **[3:53](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=233)** This simply means that you need to install an update to your WSL 2 framework in order for Docker Desktop to work.
>
> **[4:00](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=240)** Click on the blue link to get instructions on how to do that, then once you've installed the framework, click on the restart button to restart Docker Desktop.
>
> **[4:12](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=252)** All right, once Docker Desktop has successfully initialized, you'll see this wizard over here.
>
> **[4:18](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=258)** That will bring you to a tutorial.
>
> **[4:20](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=260)** If you click Start, you'll get a tutorial on how to use Docker Desktop.
>
> **[4:25](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=265)** Otherwise, you can just click Skip tutorial to skip this, like I'm going to right now.
>
> **[4:30](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=270)** As we mentioned earlier, we know that Docker Desktop has been initialized by the fact that the status bar over here is now in green instead of orange.
>
> **[4:40](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=280)** You can also see on your taskbar that the boxes on top of the Docker whale have stopped moving and the tool tip now says that Docker Desktop is running.
>
> **[4:49](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=289)** Finally, let's open PowerShell to use the Docker client and download that hello world image.
>
> **[4:58](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=298)** So I'm going to click on the Start button, then I'm going to type PowerShell, and then I'll hit Enter.
>
> **[5:05](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=305)** Another way to get here is by clicking on the Windows key, then R, typing in PowerShell, then pressing Enter or clicking OK.
>
> **[5:16](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=316)** Now that we're here, I'm going to maximize this.
>
> **[5:19](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=319)** I can simply type Docker, and it will show us all of the commands that it supports.
>
> **[5:25](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=325)** To test that Docker's working, I'm going to do two things.
>
> **[5:29](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=329)** The first thing I'm going to do is type docker ps, just to see if I can list containers.
>
> **[5:35](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=335)** We'll learn more about this command later in this course.
>
> **[5:40](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=340)** Because I can see this header, I know that Docker is working as expected but I want to do another test.
>
> **[5:45](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=345)** I want to download the hello world image and start a container from it.
>
> **[5:49](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=349)** To do that, I can simply type docker run, then hello-world.
>
> **[5:56](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=356)** This will download that image from the Docker hub.
>
> **[5:58](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=358)** And once it's downloaded, we should see a very friendly hello world style message from Docker, telling us that Docker is ready.
>
> **[6:09](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=369)** There it is.
>
> **[6:10](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-windows-with-docker-desktop?u=76281980&t=370)** We're now ready to get started with Docker.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (38), make (1)
> **Tools:** docker desktop (17), powershell (3)
> **Code Keywords:** let (3), continue (3), this, (1), finally, (1), this. (1)
> **UI Navigation:** click on (8), double-click (1)
> **Env Vars:** wsl (4), exe (1)
> **Prerequisites:** install (3), initialization (1)
> **Cross-References:** we mentioned (1), later in (1)
> **URLs:** [docker.com](https://docker.com) (1)

#### Install Docker on Linux
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=0)** - [Instructor] Let's learn how to install Docker on Linux.
>
> **[0:03](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=3)** Earlier, we learned that Docker is designed to work natively with Linux.
>
> **[0:07](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=7)** As a result, we do not need to install Docker Desktop.
>
> **[0:11](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=11)** Instead, we'll be installing the Docker Engine and the Docker command line client.
>
> **[0:16](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=16)** While I'll be using Ubuntu for this video, these instructions should be more or less the same on other distributions.
>
> **[0:22](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=22)** Visit the docs at [https://docs.docker.io](https://docs.docker.io).
>
> **[0:29](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=29)** to learn more about specific differences for your distro.
>
> **[0:33](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=33)** Installing Docker on Linux is really, really easy.
>
> **[0:36](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=36)** First, ensure that you have cURL installed by running sudo apt install curl.
>
> **[0:44](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=44)** You might be asked for your password, so enter it when prompted.
>
> **[0:51](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=51)** Next, we're going to download Docker's installation script and save it into /tmp/get-docker.sh.
>
> **[1:01](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=61)** Let's clear the screen to make some space.
>
> **[1:04](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=64)** To do that, I'm going to press Control+A to go to the beginning of this command.
>
> **[1:09](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=69)** Then, I'm going to type curl -o.
>
> **[1:13](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=73)** I'll leave that path in there since that's where I want to save the script to.
>
> **[1:17](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=77)** Then, I'll go to the end of the command with Control+E.
>
> **[1:22](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=82)** Then I'll type [https://get.docker.com](https://get.docker.com).
>
> **[1:32](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=92)** As a security precaution, I always recommend looking at scripts that you download from the internet before running them.
>
> **[1:38](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=98)** Next, we'll run the script.
>
> **[1:41](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=101)** To do that, I'll clear my screen again, then I'll type sh /tmp/get-docker.sh.
>
> **[1:53](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=113)** You'll see lots of output fly past your terminal.
>
> **[1:56](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=116)** This might take a few minutes depending on the speed of your internet connection and your computer's configuration.
>
> **[2:03](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=123)** This might take a few minutes depending on the speed of your internet connection and your computer's configuration.
>
> **[2:10](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=130)** Great.
>
> **[2:11](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=131)** We know that Docker was successfully installed.
>
> **[2:15](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=135)** Rephrase.
>
> **[2:16](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=136)** Great.
>
> **[2:17](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=137)** We know that Docker was successfully installed because we saw this long message appear in our terminal.
>
> **[2:24](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=144)** Finally, we can confirm that Docker is working by typing sudo docker run hello-world.
>
> **[2:34](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=154)** Now, it would be really inconvenient to have to use sudo every time you wanted to use Docker.
>
> **[2:38](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=158)** Fortunately, we can work around this by adding our user to the docker group.
>
> **[2:43](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=163)** On this machine, my username is linkedin.
>
> **[2:49](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=169)** To add myself to the docker group, I'll run sudo usermod
>
> **[2:56](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=176)** - a to tell usermod that I'm adding a new user to a group.
>
> **[3:00](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=180)** Then a capital G to specify the group name.
>
> **[3:02](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=182)** In this case is going to be docker.
>
> **[3:05](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=185)** Then, finally, my username, linkedin.
>
> **[3:10](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=190)** If your terminal does not show your username on the screen and you don't know what it is, you can always substitute linkedin with $USER.
>
> **[3:20](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=200)** Now, normally in order for this to take effect, I would have to log out of my entire system and log back in, but I don't want to do that, I just want to confirm that Docker is working.
>
> **[3:30](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=210)** So an easier way to work around this is to type su -s and then $USER.
>
> **[3:38](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=218)** Type in your password when prompted.
>
> **[3:41](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=221)** And that failed.
>
> **[3:43](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=223)** I'll clear my screen.
>
> **[3:45](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=225)** Now, normally you would have to log out and log back in in order to see these changes take effect, and that can be time consuming, especially since you just want to check that Docker is working.
>
> **[3:57](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=237)** So, another way around this is to use sudo to launch another shell as you, but with your new permissions, which include your membership into the new group.
>
> **[4:10](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=250)** So, I'm going to go ahead and type sudo.
>
> **[4:14](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=254)** Then I'll type -u to specify the user, which in this case is going to be me.
>
> **[4:21](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=261)** And then I'll type sh.
>
> **[4:25](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=265)** So now I'm given a shell.
>
> **[4:27](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=267)** And I can confirm that I'm in the new group by running groups.
>
> **[4:33](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=273)** As you can see, I'm now in the docker group.
>
> **[4:36](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=276)** And because of this, I should be able to run docker run hello-world like we did before.
>
> **[4:43](https://www.linkedin.com/learning/learning-docker-17236240/install-docker-on-linux?u=76281980&t=283)** As we can see, we can successfully create another container and it shows us the "Hello from Docker" message that we saw earlier.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (24), sudo (6), curl (3), apt (1), make (1)
> **Code Keywords:** let (2), finally, (2), this, (1)
> **Tools:** terminal (3), docker desktop (1), command line (1)
> **Prerequisites:** install (3)
> **File Paths:** tmp/get-docker.sh (2)
> **URLs:** [https://docs.docker.io](https://docs.docker.io) (1), [https://get.docker.com](https://get.docker.com) (1)
> **Env Vars:** user (2)
> **UI Navigation:** go to (2)


### 3. Using Docker

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Exploring the Docker CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=0)** - The Docker command line interface, or CLI, is the most popular way of interacting with Docker containers.
>
> **[0:07](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=7)** Now that we know more about what Docker containers are and how they work, let's explore the Docker CLI.
>
> **[0:13](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=13)** I recommend taking a look at my last section if you have not installed Docker before.
>
> **[0:18](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=18)** In it we see how to install Docker on your preferred platform.
>
> **[0:22](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=22)** Let's start by opening a terminal.
>
> **[0:24](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=24)** Since I'm recording this on a Mac, I'll do this by holding the command and space keys together to open spotlight, typing in terminal, then pressing enter.
>
> **[0:35](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=35)** If you're on Windows, you can use PowerShell or the command prompt instead.
>
> **[0:40](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=40)** Click on the start key, search for PowerShell, then click on the first result that appears.
>
> **[0:49](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=49)** The Docker CLI is fairly straightforward to navigate.
>
> **[0:53](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=53)** Let's type in docker dash dash help to see what I mean.
>
> **[0:58](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=58)** Most Docker operations can be done with a single top level command.
>
> **[1:05](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=65)** Log in, run, and pull are examples of top level commands.
>
> **[1:13](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=73)** Some commands have commands nested inside of them, or sub commands, but these aren't as common.
>
> **[1:18](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=78)** Every command accepts options or flags to provide additional information to your request.
>
> **[1:25](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=85)** Dash dash help, which I typed in earlier, is an example of a command line flag.
>
> **[1:32](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=92)** Dash dash help is actually a great example, because every Docker command accepts it.
>
> **[1:37](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=97)** Dash dash help tells the command to show you information about it and how to use it.
>
> **[1:43](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=103)** Let's run docker network dash dash help to see an example of this.
>
> **[1:51](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=111)** We can see here that Docker network is an example of a top level command, with sub commands underneath it.
>
> **[1:58](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=118)** Such as connect, create, and disconnect.
>
> **[2:01](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=121)** Fortunately, since every command in the Docker CLI accepts the dash dash help flag, we can just run dash dash help again against any of the commands shown here.
>
> **[2:13](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=133)** Let's try create.
>
> **[2:18](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=138)** Here we can see that dash dash help shows us a one line description of how to use the command next to usage, along with all of the command flags that it supports underneath options.
>
> **[2:32](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=152)** If you try to run a command without any options, you'll be shown a much shorter version of this help page.
>
> **[2:38](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=158)** Let's try running create again without any arguments.
>
> **[2:43](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=163)** Upon doing this, we can still see the one line usage statement, but that's about all the help that we get.
>
> **[2:49](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=169)** If you're ever stuck while navigating the CLI, just use dash dash help.
>
> **[2:54](https://www.linkedin.com/learning/learning-docker-17236240/exploring-the-docker-cli?u=76281980&t=174)** I use dash dash help all of the time, and I've been using Docker for many, many years.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (14)
> **Code Keywords:** let (6), interface (1), this. (1), this, (1)
> **Tools:** command line (2), terminal (2), powershell (2), command prompt (1)
> **Env Vars:** cli (5)
> **UI Navigation:** click on (2)
> **Definitions:** is an  (2)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)

#### Create a Docker container
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=0)** - [Instructor] Creating a Docker container is easy.
>
> **[0:02](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=2)** Let me show you how.
>
> **[0:04](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=4)** There are two ways to create Docker containers, the long way and the short way.
>
> **[0:09](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=9)** We're going to go the long way first, so that we can better appreciate how much the short way simplifies things.
>
> **[0:15](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=15)** Containers are created from container images.
>
> **[0:18](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=18)** Container images are a compressed and pre-packaged file system that contain, no pun intended, your app along with its environment and configuration with an instruction on how to start your application.
>
> **[0:30](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=30)** That instruction is called the entry point.
>
> **[0:33](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=33)** First, we'll need to tell Docker to create a container from an image.
>
> **[0:38](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=38)** If an image does not exist on your computer, Docker will try to retrieve it from a container image registry.
>
> **[0:44](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=44)** By default, Docker always tries to pull from Docker Hub.
>
> **[0:48](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=48)** We will use the Docker container create command to do this.
>
> **[0:52](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=52)** Let's see its help page by running Docker container create dash dash help.
>
> **[0:58](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=58)** As you can see, we have a lot of options here.
>
> **[1:01](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=61)** We'll use a few of them during this course.
>
> **[1:04](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=64)** Check out Docker's excellent documentation to learn more about any of the options that I haven't covered.
>
> **[1:11](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=71)** Let's look at the usage summary at the top.
>
> **[1:14](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=74)** As you can see here, Docker container create requires the name of the image, stylized in capital letters.
>
> **[1:20](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=80)** We also know that Docker container create can accept additional information, but since they are in brackets, they're optional and can be safely excluded.
>
> **[1:31](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=91)** We are going to use Docker's hello world Docker image.
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=94)** Containers created from this image print a friendly hello world style message to your terminal.
>
> **[1:39](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=99)** This makes an image useful in testing that Docker is working properly.
>
> **[1:44](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=104)** Let's create our first container.
>
> **[1:46](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=106)** I'm going to create it by running Docker container create hello-world.
>
> **[1:53](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=113)** Now, for demo purposes, I want to get a Linux specific version of this hello world image.
>
> **[1:58](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=118)** To do that, I'll add a colon, then Linux.
>
> **[2:03](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=123)** This annotation is called an image tag.
>
> **[2:06](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=126)** We'll learn more about tagging later in this chapter.
>
> **[2:11](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=131)** We can see here that Docker container create first attempts to download or pull the Linux version of the hello world image we requested from Docker Hub.
>
> **[2:20](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=140)** If this is unsuccessful, we will see a friendly error message explaining why.
>
> **[2:25](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=145)** Fortunately, we know that we were able to pull the image successfully by the pull complete message appearing in our terminal.
>
> **[2:32](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=152)** You said that we get a really friendly message back, Carlos, what's this nonsense?
>
> **[2:36](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=156)** Well, great question.
>
> **[2:38](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=158)** You're looking at the container's ID.
>
> **[2:41](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=161)** Every container created by Docker has an ID associated with it.
>
> **[2:45](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=165)** This makes it easy to inspect and interact with them.
>
> **[2:48](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=168)** It's important to note that the Docker container create command creates containers, but it does not actually start them.
>
> **[2:57](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=177)** This means that it does not execute the image's entry point automatically.
>
> **[3:01](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=181)** In our case, this means that we won't see that friendly message until we start the container that we created.
>
> **[3:08](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=188)** We can see this in action by running Docker PS to list the containers that we have created.
>
> **[3:14](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=194)** Let's run that command now.
>
> **[3:16](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=196)** By default, Docker PS will only show us containers that are actively running.
>
> **[3:21](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=201)** You'll see this with containers running servers or other long-lived applications.
>
> **[3:26](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=206)** The Nginx image is a great example.
>
> **[3:28](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=208)** Since Nginx is a web server, it is expected to run forever or until the system kills it.
>
> **[3:35](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=215)** If we created a container from this image, you would likely see it after running Docker PS.
>
> **[3:41](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=221)** Let's run Docker PS again, but with the dash dash all option to see all of the containers Docker knows about.
>
> **[3:50](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=230)** The container we created earlier now shows up.
>
> **[3:53](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=233)** As you can see, it's in a created state.
>
> **[3:56](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=236)** That means we simply just need to start it, so let's do that now.
>
> **[4:02](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=242)** I'm going to copy that really long ID from earlier, which is here.
>
> **[4:08](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=248)** Then I'm going to type Docker container start, paste the ID that I just copied, then press enter.
>
> **[4:17](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=257)** We got that container's ID again.
>
> **[4:19](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=259)** This means that Docker was able to successfully start the container.
>
> **[4:23](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=263)** Now, we still didn't see that super friendly message we were promised.
>
> **[4:27](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=267)** First, let's run Docker PS dash dash all to see what happened.
>
> **[4:33](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=273)** We can see that the status of the container changed from created to exited with the zero in parentheses.
>
> **[4:40](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=280)** This is a good thing.
>
> **[4:43](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=283)** A zero exit code, like the one we're seeing here, means that the entry point was executed successfully.
>
> **[4:49](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=289)** Any other exit code likely means that there was a problem.
>
> **[4:53](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=293)** Now, it would be really nice to see log messages that came from our container while it ran.
>
> **[4:58](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=298)** Fortunately, we can easily do that with Docker logs.
>
> **[5:02](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=302)** Let's run Docker logs with the first three characters of the container's ID to see what happened.
>
> **[5:07](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=307)** We can see here the first three characters are CB2, so I'm going to just copy those and paste them right here.
>
> **[5:17](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=317)** Then hit enter.
>
> **[5:20](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=320)** Finally, the helpful message that we were promised appeared.
>
> **[5:24](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=324)** Docker logs is also really helpful in troubleshooting containers that have failed, assuming that its corresponding application produces logs, of course.
>
> **[5:32](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=332)** We'll see how to troubleshoot pesky applications that don't log later in this course.
>
> **[5:37](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=337)** We also saw that we didn't have to provide the entire ID to this command.
>
> **[5:42](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=342)** Docker's smart enough to know which container you want from just the first few characters of the ID.
>
> **[5:48](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=348)** Another way to get this output without having to resort to Docker logs every time is to start the container and "attach" our terminal to the container's output.
>
> **[5:59](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=359)** We can do that with Docker container start dash dash attach.
>
> **[6:06](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=366)** This will tell Docker to start the container and immediately attach our terminal to the container's output.
>
> **[6:12](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=372)** Let's try that with the container that we created earlier.
>
> **[6:20](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=380)** As we can see, we got the message we saw earlier immediately.
>
> **[6:24](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=384)** If we were starting a long running container, like one created from the Nginx image, we could also use Docker container attach after running Docker container start to do the same thing.
>
> **[6:36](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=396)** You might have also noticed that we were able to start the same container that we created before multiple times.
>
> **[6:41](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=401)** We did not have to create a new container from the hello world image to do this.
>
> **[6:46](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=406)** This is because docker containers do not get deleted automatically, by default.
>
> **[6:50](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=410)** We'll learn how to delete Docker containers in a bit.
>
> **[6:53](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container?u=76281980&t=413)** All right, so now that we went the long way, let's give the short way a try.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (38), nginx (3)
> **Code Keywords:** let (11), default, (2), this. (2), case, (1), super (1)
> **Definitions:** means that (5), is a  (3), is called (2)
> **Tools:** terminal (4)
> **Cross-References:** later in (2)
> **Env Vars:** cb2 (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Create a Docker container: The short way
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=0)** - [Instructor] Previously we looked at the long way of creating and starting Docker containers.
>
> **[0:04](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=4)** Let's get the short way a try.
>
> **[0:06](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=6)** It would be really inconvenient if we had to create and start containers explicitly every time we wanted to run our app.
>
> **[0:13](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=13)** It would also be inconvenient to have to use Docker ps to know whether our app ran successfully and then use Docker logs to see its output.
>
> **[0:21](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=21)** Fortunately, Docker created a single command that rolls all these steps into one.
>
> **[0:26](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=26)** That command is Docker Run.
>
> **[0:28](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=28)** Let's try running it against our Hello World Docker image from before.
>
> **[0:32](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=32)** To do that, I'm going to just type docker run hello-world, and again, since I want the Linux version for demo purposes, I'll type :linux.
>
> **[0:44](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=44)** That was so much faster.
>
> **[0:47](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=47)** As we can see here, docker run automatically created a container from the hello world image, started it, and attached to the container to show us its output immediately.
>
> **[0:57](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=57)** Another way to think about this is with this really simple formula, docker run = docker container create + docker container start + docker container attach.
>
> **[1:11](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=71)** We can still use docker ps to see its exit code just like we did when we went the long way.
>
> **[1:17](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=77)** Let's run docker ps --dash all to take a look at that.
>
> **[1:22](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=82)** And there it is.
>
> **[1:27](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=87)** You might have also noticed that docker run did not show us the container's ID after we ran it.
>
> **[1:33](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=93)** This is by design.
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=95)** You need to use docker ps to get IDs for containers started with docker run.
>
> **[1:40](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=100)** We can also still use docker logs to see this output again if we need to.
>
> **[1:44](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=104)** Let's try that now.
>
> **[1:46](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=106)** Since we ran docker ps earlier, we know that the first three characters of this container's ID are d90.
>
> **[1:56](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=116)** Let's use this with docker logs to get that output again.
>
> **[2:02](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=122)** And like we expected, we got that calming and super friendly.
>
> **[2:06](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-the-short-way?u=76281980&t=126)** Hello World message once again.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (20)
> **Code Keywords:** let (5), try. (1), type : (1), super (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Create a Docker container from Dockerfiles, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=0)** - [Instructor] So far, we've been creating containers from Docker images published on Docker Hub.
>
> **[0:04](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=4)** However, this isn't very helpful if we're trying to create a container for our own app.
>
> **[0:09](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=9)** Fortunately, Docker makes it very easy to build our own Docker images and start containers from them.
>
> **[0:14](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=14)** We can even push our app to the Docker hub when we're ready to share our work with the world.
>
> **[0:19](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=19)** I'll show you how to do that later in this course.
>
> **[0:21](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=21)** For now, let's build an image from our own Docker file and start a container from it.
>
> **[0:25](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=25)** There should be two files in your exercise files for this section, a Docker file, and an example quote unquote app called entry point dot bash.
>
> **[0:36](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=36)** This app simply tells us the current time.
>
> **[0:39](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=39)** Let's open the Docker file in your favorite editor.
>
> **[0:42](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=42)** I'm going to open mine in Vim.
>
> **[0:45](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=45)** This is an example of a Docker file that you might see in the wild.
>
> **[0:48](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=48)** There are lots of keywords in the Docker files syntax.
>
> **[0:51](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=51)** Visit the link shown below to see the latest Docker file reference documentation.
>
> **[0:57](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=57)** "From" tells Docker which existing Docker image to base your Docker image off of.
>
> **[1:02](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=62)** This can be any existing image either local or from the internet.
>
> **[1:06](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=66)** By default, Docker will try to get this image from Docker hub if it's not already on your machine.
>
> **[1:12](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=72)** Some images will contain a label adding additional data like the maintainer of this image, which is me for example.
>
> **[1:20](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=80)** "User" tells Docker which user to use for any Docker file commands underneath it.
>
> **[1:24](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=84)** By default, Docker will use the "root user" to execute commands.
>
> **[1:31](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=91)** Since most security teams do not like this, the user keyword is useful in changing a user that your app runs as to one that is less powerful, like "nobody" for example.
>
> **[1:42](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=102)** "Copy" copies files from a directory provided to the Docker build command to the container image.
>
> **[1:49](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=109)** The directory provided to Docker build is called the context.
>
> **[1:52](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=112)** The context is usually your working directory, but it does not have to be.
>
> **[1:57](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=117)** Run statements are commands that customize our image.
>
> **[2:02](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=122)** This is a great place to install additional software or configure files needed by your application.
>
> **[2:08](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=128)** Since our example script needs "Curl" and "Bash" to run, this Docker file uses run commands to install those programs.
>
> **[2:16](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=136)** Here we're using the user command to set the default users for containers created from this image to the powerless "nobody" user.
>
> **[2:24](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=144)** This ensures that we can't break out of the container and potentially change important files on our host.
>
> **[2:31](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=151)** Finally, the entry point tells Docker what command containers created from this image should run.
>
> **[2:37](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=157)** You can also use the CMD command to do this, though there are differences.
>
> **[2:42](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-1?u=76281980&t=162)** Consult the documentation from the link shown earlier to learn more.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (23), curl (1)
> **Code Keywords:** let (2), default, (2), this, (2), finally, (1)
> **Tools:** bash (2), vim (1)
> **Definitions:** is an  (1), is called (1), is a  (1)
> **Prerequisites:** install (2), configure (1)
> **Analogies:** for example (2)
> **Env Vars:** cmd (1)
> **Cross-References:** later in (1)

#### Create a Docker container from Dockerfiles, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=0)** - [Instructor] Now that we've seen an example Dockerfile, let's turn it into a Docker image and start our container from it.
>
> **[0:06](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=6)** We're going to use the docker build command to do this.
>
> **[0:09](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=9)** Let's look at its help documentation first.
>
> **[0:13](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=13)** Just like docker run, we have lots of options to choose from.
>
> **[0:16](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=16)** For this example though, the only option that we'll need is the tag option.
>
> **[0:22](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=22)** Just like containers, every Docker image has an ID.
>
> **[0:25](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=25)** This option associates a convenient name with that ID.
>
> **[0:28](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=28)** This way, we don't have to remember the image ID whenever we use it.
>
> **[0:32](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=32)** So going back to our docker build command, let's call it our-first-image to keep things simple.
>
> **[0:39](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=39)** Dockerfile looks for a file called Dockerfile by default.
>
> **[0:43](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=43)** Since this is what our dockerfile is actually called, we don't need to change anything.
>
> **[0:47](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=47)** However, if our Dockerfile were called something else like say app.Dockerfile, we would need to provide the dash f or dash dash file options as well so that Docker uses the correct file.
>
> **[1:03](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=63)** Since we don't need that here, I'm just going to remove it.
>
> **[1:07](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=67)** Now that we've provided our options, we need to tell Docker where its context is.
>
> **[1:11](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=71)** Remember, context is simply the folder containing files that Docker will include in your image.
>
> **[1:17](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=77)** Since the entry point script is in our working directory already, we can simply put a period here.
>
> **[1:22](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=82)** If it were located in another folder, like say path/to/app, we would put that directory there instead of a period.
>
> **[1:32](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=92)** We're now ready to run docker build, so let's do it.
>
> **[1:37](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=97)** We can see Docker executing each command in our Dockerfile line by line.
>
> **[1:41](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=101)** You might notice that it is printing what looks like image IDs after each command runs.
>
> **[1:46](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=106)** Why is this?
>
> **[1:47](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=107)** Well, Docker images are just layers of images compressed together.
>
> **[1:51](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=111)** Because of this, Docker creates an image for every command in our Dockerfile.
>
> **[1:56](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=116)** These are called intermediate images.
>
> **[1:58](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=118)** When Docker finishes reading your Dockerfile, it squashes all of these images together into a single image.
>
> **[2:05](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=125)** This is the final image that your container will be created from.
>
> **[2:09](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=129)** We can finally see that our image has been successfully built and tagged.
>
> **[2:14](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=134)** This means that we're ready to run a container from that image.
>
> **[2:16](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=136)** So just like we did before, we can simply execute docker run, then the name of the image or our-first-image to do that.
>
> **[2:28](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=148)** And as we can see, the app inside of that image told us the time like we expected it to.
>
> **[2:33](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-from-dockerfiles-part-2?u=76281980&t=153)** So there we have it, we've run a container from our first image.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (14)
> **Code Keywords:** let (4), from. (2), this. (1), default. (1), this, (1)
> **Analogies:** just like (3)
> **File Paths:** app.dockerfile (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Create a Docker container with BuildKit
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=0)** - [Instructor] In the last video we used Docker build to build a simple Docker Image.
>
> **[0:05](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=5)** If you see build output that looks like the image provided in the slide then that means that you are using the legacy Docker builder.
>
> **[0:13](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=13)** You'll want to be using BuildKit, Docker's improved image builder, instead.
>
> **[0:18](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=18)** This builder provides improved performance and additional helpful features over the legacy builder that ships with Docker.
>
> **[0:25](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=25)** Let's go into the terminal and see it in action.
>
> **[0:28](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=28)** Using BuildKit is easy.
>
> **[0:30](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=30)** All you have to do is run docker buildx build and then provide the same options that you provided to Docker build.
>
> **[0:38](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=38)** While Docker build uses BuildKit underneath the hood for versions of Docker Desktop published after 2023 or so, Docker Buildx gives you more options with what you can do with images that it provides.
>
> **[0:51](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=51)** I'll provide a link at the end of the video that you can check out to learn more about this.
>
> **[0:56](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=56)** So going back to docker buildx build, in the last video we used -t our-first-image and a period.
>
> **[1:04](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=64)** Before the period, put --load here.
>
> **[1:08](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=68)** Let's explain what --load is doing here.
>
> **[1:11](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=71)** One of BuildKit's coolest features is that it uses something called exporters to give you more control over the image that it produces.
>
> **[1:19](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=79)** You can either have BuildKit automatically push images into image registries after they're done building or you can save them into your computer as tarball files.
>
> **[1:29](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=89)** The latter is really helpful if you find yourself in environments that do not have access to the internet.
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=94)** - -load here is a shortcut that tells BuildKit to build the image and load it into Docker when it's done.
>
> **[1:42](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=102)** Check out the link below to learn more about exporters in BuildKit.
>
> **[1:47](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=107)** All right, now we're ready to run this, so let's hit Enter to do that.
>
> **[1:51](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=111)** Now depending on the version of Docker Desktop that you're running it might take a little while for this to start, that's because Buildx creates build containers or builders when you run Buildx for the first time.
>
> **[2:04](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=124)** These are the containers that are used to produce your container images.
>
> **[2:07](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=127)** Builders make it possible to do several things, like build images that work across Intel and ARM chips, build images remotely on other computers, or even build images within Kubernetes.
>
> **[2:19](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=139)** Check out this link to learn more about BuildKit builders.
>
> **[2:23](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=143)** As you can see, the rest of the build is just like what we saw last time.
>
> **[2:27](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=147)** Running images built by BuildKit is also no different.
>
> **[2:30](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=150)** For example, if I run Docker run --rm our-first-image, we get the time back just like we did before.
>
> **[2:40](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=160)** There's lots more that you can do with BuildKit.
>
> **[2:42](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=162)** We saw that earlier when we ran Docker buildx --help.
>
> **[2:46](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=166)** This will give you everything that Buildx is capable of doing.
>
> **[2:50](https://www.linkedin.com/learning/learning-docker-17236240/create-a-docker-container-with-buildkit?u=76281980&t=170)** Check out this link to learn more about BuildKit.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (15), find (1), make (1), rm (1)
> **Code Keywords:** let (3), this. (1), this, (1)
> **Tools:** docker desktop (2), terminal (1)
> **Analogies:** just like (2), for example (1)
> **Cross-References:** in the last (2)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** arm (1)
> **Speakers:** - [instructor] (1)

#### Interact with your container
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=0)** - [Instructor] Up to this point, we've been running containers that immediately exit after running their entry point commands.
>
> **[0:06](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=6)** We can also run containers that do not immediately exit, like servers, for example.
>
> **[0:10](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=10)** Let's explore this concept further.
>
> **[0:12](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=12)** You should have a new Docker file in this section called server dot dockerfile.
>
> **[0:16](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=16)** I'm going to open this file in Vim to take a look.
>
> **[0:20](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=20)** Feel free to use your favorite editor instead, though.
>
> **[0:23](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=23)** As we can see, it looks very similar to our first Docker file.
>
> **[0:26](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=26)** The only difference here is that we're copying a file called server dot bash instead of entry point dot bash.
>
> **[0:33](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=33)** Let's build in and start a container format just like we did before.
>
> **[0:36](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=36)** I'll start by typing docker build just like before.
>
> **[0:39](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=39)** This time, our Docker file is not called Dockerfile.
>
> **[0:42](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=42)** It's called server dot Dockerfile.
>
> **[0:45](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=45)** Because of this, I'm going to provide the dash dash file option before server dot dockerfile so that Docker knows that we want to use this dockerfile instead of the one that we used last time.
>
> **[0:57](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=57)** I'll now use the dash dash tag option to give this image a name.
>
> **[1:01](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=61)** Let's call this image our first server.
>
> **[1:04](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=64)** Since we're still in our working directory, I'll add a period at the end.
>
> **[1:09](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=69)** Our docker build command is ready to go, so let's run it.
>
> **[1:14](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=74)** Just like we saw before, it created intermediate images from each of our Docker file instructions, squashed them together into our file image, and then called that final image our first server.
>
> **[1:27](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=87)** All right, great.
>
> **[1:28](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=88)** So, let's create a container from this image.
>
> **[1:31](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=91)** Now, if we were to use Docker run here, like I'm going to do right now, our terminal will hang.
>
> **[1:38](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=98)** And as we can see, I can't get out.
>
> **[1:40](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=100)** Oh no. What did we do?
>
> **[1:42](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=102)** Oh, no.
>
> **[1:44](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=104)** Well, remember, Docker run attaches to the container after it starts it.
>
> **[1:48](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=108)** Since server dot bash is a server that does not exit until being told to do so, it will happily continue running and waiting for us to give it a special keystroke to kill it.
>
> **[1:59](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=119)** Additionally though, Docker containers are not, quote unquote, interactive by default.
>
> **[2:04](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=124)** This means that containers will not accept keystrokes from our terminal even if we are attached to them, and in this case, the application tells us the magic keystroke we need to press to end the program.
>
> **[2:16](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=136)** Thankfully, Docker allows us to change this, and we'll see that in a minute.
>
> **[2:21](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=141)** This is easy to fix.
>
> **[2:22](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=142)** Since we know that Docker PS shows us containers that are running, I can open a new terminal and run that command to get that container's ID.
>
> **[2:30](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=150)** It looks like this container's ID starts with B 71 D.
>
> **[2:34](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=154)** We can now run the docker kill command with that ID to forcefully stop the container.
>
> **[2:40](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=160)** Docker shows us the ID of the container that was killed as proof that it successfully did it.
>
> **[2:46](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=166)** Sure enough, upon going back to our original terminal window, we can see that the container has been stopped and no longer has control over our terminal.
>
> **[2:55](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=175)** To work around this, I'm going to run Docker run dash D instead.
>
> **[3:02](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=182)** This creates and starts the container but does not attach your terminal to it.
>
> **[3:07](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=187)** You can also use Docker container create and docker container start if you'd like to go the long way.
>
> **[3:13](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=193)** We can use Docker PS to prove that our container is running.
>
> **[3:18](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=198)** Now, an interesting thing that we can do from here is use docker exec to run additional commands from this container.
>
> **[3:25](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=205)** This can be helpful while troubleshooting problems or testing images created by your application's Docker file.
>
> **[3:31](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=211)** So let's say I wanted to use the date command to get the time from this container.
>
> **[3:35](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=215)** I can do that by typing docker exec, as I did, the shortened ID for this container, or D 9 0 D, and then the command I want to run, or date, in this example.
>
> **[3:47](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=227)** Once I hit enter, I get the date like I expected.
>
> **[3:51](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=231)** You can even use exec to start terminal sessions within the container.
>
> **[3:55](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=235)** This can be really helpful while troubleshooting.
>
> **[3:57](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=237)** Let's say that we wanted to use a bash cell within the container to do this.
>
> **[4:01](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=241)** Since we're going to be entering keystrokes, we need to tell exec that this command needs to be interactive.
>
> **[4:07](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=247)** Additionally, since we're starting a shell, we'll also need to tell Docker that we'll need something called a quote, unquote, sudo TTY, so that our terminal can properly interact with the container's terminal.
>
> **[4:21](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=261)** We can use the dash dash interactive and dash dash TTY options respectively to enable both of those modes.
>
> **[4:29](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=269)** So, putting that all together, the command I'm going to run is docker exec dash dash interactive dash dash TTY,
>
> **[4:41](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=281)** then the ID for the container, or D 9 0 D, like we saw earlier, and then finally, the shell that I want to use, or bash in this case.
>
> **[4:52](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=292)** Once I hit enter, I'm greeted with a prompt and can run additional commands, which is very exciting.
>
> **[4:59](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=299)** Since I'm done here, I'm going to press Control D to exit out of the shell, but be really careful here.
>
> **[5:05](https://www.linkedin.com/learning/learning-docker-17236240/interact-with-your-container?u=76281980&t=305)** Pressing this keystroke too many times will log you out of your real terminal.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (23), sudo (1)
> **Code Keywords:** let (7), this, (3), continue (1), default. (1), case, (1)
> **Tools:** terminal (10), bash (5), vim (1)
> **Analogies:** just like (3), for example (1), similar to (1)
> **Env Vars:** tty (3)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### Stopping and removing the container
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=0)** - [Instructor] All right, so let's run Docker PS dash A again.
>
> **[0:04](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=4)** We have lots of containers here, but only one of them, our-server, is still running.
>
> **[0:09](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=9)** The rest are just sitting there.
>
> **[0:12](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=12)** By default, Docker does not stop or remove containers for you.
>
> **[0:16](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=16)** Realistically, this can lead to a lot of cruft once you start a web server here, a database there, a message bus there, and another app elsewhere.
>
> **[0:24](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=24)** You can have lots of containers sitting on your system that aren't doing anything but burning your battery and potentially slowing your computer down.
>
> **[0:31](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=31)** So let's learn how to stop and remove containers to prevent this.
>
> **[0:35](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=35)** Since our-server is still running, let's start there.
>
> **[0:39](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=39)** Stopping this container is as easy as running Docker stop and providing the ID of the container or FD69, for example.
>
> **[0:49](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=49)** That took a little longer than we expected.
>
> **[0:52](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=52)** This is because Docker attempts to gracefully stop the program the container is running when you run this command.
>
> **[0:58](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=58)** While this application was kind enough to eventually stop for us, greedier applications might not be as kind.
>
> **[1:04](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=64)** There are situations where you could be waiting for up to 10 seconds for Docker stop to finish.
>
> **[1:09](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=69)** Fortunately, in these situations you can forcefully stop the container with Docker stop dash T zero.
>
> **[1:17](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=77)** This tells Docker to immediately stop the container and the application that it's running.
>
> **[1:22](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=82)** But be careful with this since this can lead to data loss, depending on the application that you're stopping.
>
> **[1:28](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=88)** Let's try it with our-server.
>
> **[1:31](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=91)** I'm going to recreate a new container in the background with Docker run dash D our-server.
>
> **[1:39](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=99)** Now, let's execute Docker PS without any options to confirm that it's running.
>
> **[1:44](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=104)** Since we see this container in the output, we know that it's running and it starts with 79F, in this case.
>
> **[1:51](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=111)** Now, I'm going to forcefully stop it with Docker stop dash T 0 79F6.
>
> **[2:01](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=121)** This was much faster.
>
> **[2:03](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=123)** As we expected, Docker terminated the container immediately.
>
> **[2:07](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=127)** We still have a bunch of stopped containers to worry about, though.
>
> **[2:10](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=130)** If I run Docker PS dash A again, we can see that we have even more containers sitting here.
>
> **[2:17](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=137)** We can clean all that up with Docker RM.
>
> **[2:20](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=140)** This command removes containers, so let's run it against our first our-server in the list to see what happens.
>
> **[2:28](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=148)** That container's ID is 79F6, so let's try Docker RM with that.
>
> **[2:35](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=155)** Like every other command, we got the ID of the container that was stopped.
>
> **[2:39](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=159)** When I run Docker PS again, dash A this time, we can see that we have one fewer container in our list.
>
> **[2:49](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=169)** One more thing about Docker RM before I show you all a really cool trick.
>
> **[2:53](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=173)** This command will not stop containers that are running.
>
> **[2:56](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=176)** If you want to do that, you need to add a dash F to the end of the command.
>
> **[3:01](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=181)** All right, all right, neat trick time.
>
> **[3:03](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=183)** Let's say that you wanted to remove an entire list of containers.
>
> **[3:07](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=187)** We could go through each ID and run Docker RM against them, but that'll take a long time.
>
> **[3:12](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=192)** Instead, what I like to do is use xargs, a command built into most Linux and Unix-y systems, to take the output from Docker PS and feed it into a command in one fell swoop, usually as a loop.
>
> **[3:25](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=205)** Let me show you all how awesome this is.
>
> **[3:28](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=208)** First, I'm going to type in Docker PS dash A to list our containers, but I'm not going to hit enter yet.
>
> **[3:35](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=215)** Since we only care about the IDs of the containers that we're going to remove, I'm going to add a dash Q here, to tell Docker to only show me IDs.
>
> **[3:44](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=224)** If I run this as is, I just get IDs.
>
> **[3:48](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=228)** Cool, so let me press the up key to go back to the previous command.
>
> **[3:51](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=231)** I'm going to add a pipe symbol here.
>
> **[3:54](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=234)** This tells my shell that I want to feed the output from the command on the left to the command on the right.
>
> **[4:00](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=240)** Next, I'm going to type in xargs.
>
> **[4:03](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=243)** The only command line "option" we need to provide here is the command to run for each line of output.
>
> **[4:10](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=250)** Since I want to remove these containers, the command I'll use here is Docker RM.
>
> **[4:16](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=256)** Putting it all together, we're listing all containers with the docker PS dash A command, using the dash Q option to only list IDs, then using xargs to take each ID from the left and feed it into Docker RM on the right.
>
> **[4:32](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=272)** Alright, let's do it.
>
> **[4:37](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=277)** That's a lot of IDs that we got back, but if I run Docker PS dash A again, we can see that all the idle containers are gone, and that, my friends, is how you stop and remove containers.
>
> **[4:48](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=288)** Removing containers is nice but docker images can take tons of space.
>
> **[4:53](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=293)** Similar to removing containers, we can remove images by running Docker RMI.
>
> **[4:59](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=299)** Let's try to remove the our-server image, as an example.
>
> **[5:03](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=303)** I'm going to list images by running Docker images.
>
> **[5:07](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=307)** We can see that our-server is pretty close to the top of the list.
>
> **[5:13](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=313)** I want to remove this image.
>
> **[5:15](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=315)** To do that, I'll just run Docker RMI our-server.
>
> **[5:21](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=321)** Sometimes, Docker might tell you that you cannot remove an image from a container that is running.
>
> **[5:26](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=326)** To avoid this, stop any containers using that image first, then rerun Docker RMI again.
>
> **[5:32](https://www.linkedin.com/learning/learning-docker-17236240/stopping-and-removing-the-container?u=76281980&t=332)** You can also run Docker RMI dash F to force the removal, but this can cause unpredictable behavior.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (31), rm (6)
> **Code Keywords:** let (12), default, (1), this. (1), case. (1), this, (1)
> **Env Vars:** rmi (4), fd69 (1)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Binding ports to your container
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=0)** - [Instructor] Up to this point, all of the containers we've created use data imports within themselves.
>
> **[0:05](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=5)** This is somewhat useful, but not nearly as useful as being able to access data imports from your own computer into those containers.
>
> **[0:13](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=13)** Let's learn how to do that.
>
> **[0:15](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=15)** First, let's explore accessing container network services from your host.
>
> **[0:20](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=20)** Docker provides the ability to access network ports within the container, with something called port binding.
>
> **[0:25](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=25)** This feature allows Docker to take a port on your machine, and map it to a port within the container.
>
> **[0:32](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=32)** This section contains a docker file that updated our little server from earlier.
>
> **[0:37](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=37)** That docker file is called web hyphen server dot docker file.
>
> **[0:41](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=41)** First, let's build an image from it, called our web server, with docker build dash t, our web server.
>
> **[0:50](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=50)** Then the dash f option, and then the name of the Docker file, which is called web hyphen server dot Dockerfile.
>
> **[0:59](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=59)** And then finally, we'll provide our context, which is just our current working directory or a period.
>
> **[1:06](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=66)** Next, let's start a container with Docker Run, and background it with dash d.
>
> **[1:14](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=74)** Remember to provide the name of the image that you're running from, in this case, it's our hyphen web hyphen server.
>
> **[1:21](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=81)** A cool feature of Docker that we haven't talked about before is that you can actually name containers.
>
> **[1:26](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=86)** We can do that with the dash dash name option.
>
> **[1:30](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=90)** Let's call this container our hyphen web hyphen server.
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=95)** And finally we'll hit enter to create the container.
>
> **[1:39](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=99)** Next, let's run docker ps to confirm that it's running.
>
> **[1:43](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=103)** And it is, which is great.
>
> **[1:46](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=106)** Since we've moved the server into the background, let's see if it said anything with docker logs, our web server.
>
> **[1:54](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=114)** Notice how I can simply use the name of the container, instead of having to remember its ID.
>
> **[2:01](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=121)** It looks like we have some instructions.
>
> **[2:03](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=123)** It's telling us to go to http colon forward slash forward slash localhost colon 5000.
>
> **[2:08](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=128)** So, let's go there.
>
> **[2:13](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=133)** So, that didn't work.
>
> **[2:15](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=135)** That's because we need to map port 5000 from within the container to a port on our actual machine.
>
> **[2:22](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=142)** Let's go back into my terminal, and stop the container before doing that.
>
> **[2:26](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=146)** I want to stop and remove the container at the same time.
>
> **[2:30](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=150)** So instead of having to run docker stop, and then docker rm, I can easily do this by running Docker rm dash f, then providing the name of the container, or our web server in this case.
>
> **[2:46](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=166)** We get the name of the container back.
>
> **[2:48](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=168)** This proves that the container was stopped.
>
> **[2:51](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=171)** Now let's map some ports.
>
> **[2:53](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=173)** I'm going to press the up key a few times to go back to my Docker run command from earlier.
>
> **[2:58](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=178)** Before I run this command, I'm going to add a new flag before the last instance of our web server.
>
> **[3:05](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=185)** We're going to use dash p to tell Docker to bind ports.
>
> **[3:09](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=189)** Now, the first number I'm going to provide is the port on my host that I want to map.
>
> **[3:14](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=194)** Since we're told to go to localhost at port 5000, I'll just use 5001 on my own machine here.
>
> **[3:23](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=203)** Next I'll provide a colon.
>
> **[3:25](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=205)** Then, I'll put the number of the port I'm exposing from within the container, or port 5000 in our example.
>
> **[3:32](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=212)** A helpful pneumonic that's helped me remember this over the years is outside colon inside.
>
> **[3:39](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=219)** Outside means outside of the container, like our computer, and inside means inside of the container.
>
> **[3:46](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=226)** All right, great.
>
> **[3:47](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=227)** So let's give this a try.
>
> **[3:50](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=230)** We got an ID back, which is fantastic.
>
> **[3:53](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=233)** Let's run Docker ps again to confirm that the container is up, and it is.
>
> **[3:58](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=238)** But we now have an additional piece of information that's helpful.
>
> **[4:02](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=242)** We're now being told that this container has a mapped port active.
>
> **[4:06](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=246)** That's exactly what we want.
>
> **[4:08](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=248)** Now, instead of going to localhost colon 5000, like the container was telling me earlier, I'm going to go to the port on our machine that 5000 is mapped to, or 5001.
>
> **[4:20](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=260)** So let's go back into Safari and go into the address bar, and then type 5001.
>
> **[4:28](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=268)** On some machines, this might take a couple of minutes before it begins working.
>
> **[4:33](https://www.linkedin.com/learning/learning-docker-17236240/binding-ports-to-your-container?u=76281980&t=273)** And boom, we get a webpage.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (17), rm (2)
> **Code Keywords:** let (13), finally, (1), from, (1), case, (1), case. (1)
> **Ports:** port 5000 (3)
> **UI Navigation:** go to (3)
> **Tools:** terminal (1), safari (1)
> **Definitions:** is called (2)
> **Cross-References:** go back to (1)
> **Best Practices:** remember to (1)

#### Saving data from containers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=0)** - [Instructor] Containers are meant to be disposable.
>
> **[0:02](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=2)** When they're deleted, they're deleted for good.
>
> **[0:05](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=5)** This includes any data you've saved within them.
>
> **[0:08](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=8)** Let me show you an example.
>
> **[0:10](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=10)** I'm going to use Docker run --rm to create and immediately remove a simple Ubuntu container.
>
> **[0:18](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=18)** I'm going to use --entrypoint to tell Docker that I want to run a shell command.
>
> **[0:24](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=24)** Then I'm going to provide the name of the image, ubuntu.
>
> **[0:29](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=29)** Then at the end of this command, I'm going to send the text, Hello there., to a file called /tmp/file with the echo command and print it with the cat command.
>
> **[0:41](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=41)** I'm going to use a couple of arguments to make this work, and there it is.
>
> **[0:50](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=50)** All right, let's give this a try.
>
> **[0:53](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=53)** As we can see, it went and created that file and printed Hello there. to our screen.
>
> **[0:59](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=59)** Now let's see what happens when I try to print this file on my computer.
>
> **[1:05](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=65)** Oh no!
>
> **[1:06](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=66)** Our system said no.
>
> **[1:08](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=68)** Everything you create within a container stays within the container.
>
> **[1:11](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=71)** Once the container stops, the data gets deleted with it.
>
> **[1:15](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=75)** This would be really inconvenient for apps that need to save stuff after the container exits.
>
> **[1:21](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=81)** Fortunately, the Docker folks thought of this and have a great solution.
>
> **[1:25](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=85)** We can use the volume mounting feature to work around this.
>
> **[1:30](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=90)** Like the port binding feature that we saw previously, this allows Docker to map a folder on our computer to a folder in the container.
>
> **[1:38](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=98)** This can be done with the -v or --volume switches.
>
> **[1:44](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=104)** Like port binding, we'll use outside colon inside.
>
> **[1:49](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=109)** In this case, outside is the folder on our machine that we want to use, and inside is the folder within the container to map it to.
>
> **[1:57](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=117)** Let's give this a try.
>
> **[1:58](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=118)** I'm going to press up to get to my previous command.
>
> **[2:02](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=122)** Then I'm going to put my cursor behind the image name ubuntu.
>
> **[2:08](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=128)** Here I'm going to provide -v.
>
> **[2:11](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=131)** Then a folder I want to map /tmp/file inside of the container to.
>
> **[2:17](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=137)** Let's call it /tmp/container.
>
> **[2:20](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=140)** Next, I'm going to put a colon.
>
> **[2:22](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=142)** Finally, I'm going to put the folder I want to map /tmp/container to or /tmp in this case.
>
> **[2:31](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=151)** Let's hit Enter and see what happens.
>
> **[2:34](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=154)** It looks like I mistakenly forgot to put a space between sh and -v, so because of that, Docker thinks that we didn't provide the name of the image, which would obviously be a problem for docker run.
>
> **[2:49](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=169)** That's what this error message is saying.
>
> **[2:51](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=171)** So instead, what I need to do is just go back, go to where the typo is, which is sh-v, and then just put a space.
>
> **[3:04](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=184)** And the problem is gone, and we get the Hello there. prompt again.
>
> **[3:08](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=188)** So nothing changed from before, but since we mapped /tmp/container on our computer to /tmp in the container, we should expect a file called file inside of /tmp/container.
>
> **[3:26](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=206)** Is it there?
>
> **[3:27](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=207)** I'm going to cat /tmp/container/file and find out.
>
> **[3:34](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=214)** Sure is.
>
> **[3:36](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=216)** Now we can use -v to map files on our computer to files in the container as well.
>
> **[3:41](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=221)** However, there's a small caveat to this.
>
> **[3:43](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=223)** If we try to map a file on our computer that does not exist, it will be mapped as a directory within the container.
>
> **[3:51](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=231)** Let me show you what I mean.
>
> **[3:53](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=233)** I'm going to create a file in /tmp called change_this_file with the touch utility.
>
> **[4:00](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=240)** Now that I've created it, I'm going to go back to the last run command that we ran and change -v to map the file to the container.
>
> **[4:11](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=251)** Because we're mapping files to files, I also need to change the inside file to the file that I'm modifying.
>
> **[4:17](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=257)** In this case, that's /tmp/file.
>
> **[4:21](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=261)** So let's change container over here to change_this_file.
>
> **[4:28](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=268)** No changes.
>
> **[4:30](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=270)** Let's see what /tmp/change_this_file looks like.
>
> **[4:35](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=275)** As we can see, it's been modified as we expected.
>
> **[4:38](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=278)** Let's retry this command one last time, but with a non-existent file.
>
> **[4:43](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=283)** Let's try... Let me move my cursor back to change_this_file, and let's change change_this_file to this_file_does_not_exist and let's run it.
>
> **[4:59](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=299)** As expected with our newly learned knowledge, the shell complains that the file we gave it is actually a directory.
>
> **[5:05](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=305)** That's because this file doesn't exist, so Docker assumed that it was a directory.
>
> **[5:11](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=311)** So I've cleared the screen just to remove all the stuff that we saw previously.
>
> **[5:15](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=315)** It gets more interesting though.
>
> **[5:17](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=317)** What happens if I try to cat /tmp/this_file_does_not_exist in real life.
>
> **[5:27](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=327)** Really interesting.
>
> **[5:28](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=328)** Docker actually created a directory and mounted it as a directory before it ran the command.
>
> **[5:33](https://www.linkedin.com/learning/learning-docker-17236240/saving-data-from-containers?u=76281980&t=333)** The lesson here is to make sure that you're mounting real files if you use -v with files.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), try. (3), this. (2), case, (2), finally, (1)
> **CLI Commands:** docker (8), cat (3), make (2), rm (1), find (1)
> **Code Identifiers:** change_this_file (5), this_file_does_not_exist (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### Introducing the Docker Hub
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=0)** - [Instructor] As we mentioned earlier in this course, one of Docker's most attractive features is being able to push your images to container image registries.
>
> **[0:08](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=8)** As long as you can log into the registry, you can push your image into it.
>
> **[0:12](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=12)** Let's explore this feature some more.
>
> **[0:15](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=15)** A container image registry is a place for storing and tracking container images.
>
> **[0:20](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=20)** Container images are tracked by their tags, a string combining the name of the image, and optionally it's version with a semicolon.
>
> **[0:29](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=29)** Container images that do not have a version automatically get tagged with the version called latest.
>
> **[0:35](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=35)** Like downloading software on Homebrew or GitHub, this naming scheme makes it really easy to download specific versions of images.
>
> **[0:43](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=43)** We'll see what I mean here in a moment.
>
> **[0:46](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=46)** Docker Hub is a default registry used by the Docker client.
>
> **[0:50](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=50)** This is a publicly accessible registry that anyone can push images to.
>
> **[0:54](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=54)** Whenever you pull images or whenever Docker needs to pull an image from the from line of a Docker file, it will fetch an image from Docker Hub.
>
> **[1:03](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=63)** We're going to create an account on Docker Hub.
>
> **[1:06](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=66)** Then we'll use that account to store our our-web-server docker image from earlier.
>
> **[1:12](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=72)** We'll then create another version of the our-web-server docker image and push that into Docker Hub.
>
> **[1:18](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=78)** Are you ready to learn?
>
> **[1:21](https://www.linkedin.com/learning/learning-docker-17236240/introducing-the-docker-hub?u=76281980&t=81)** Let's do it.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (10)
> **Definitions:** is a  (3)
> **Code Keywords:** let (2)
> **Cross-References:** we mentioned (1), earlier in (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Pushing images to the Docker registry
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=0)** - [Narrator] First, we're going to create a new Docker Hub account.
>
> **[0:03](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=3)** To do this, I'm going to click on the big Register button on the upper right-hand corner of the page.
>
> **[0:10](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=10)** Docker Hub will then ask us to register.
>
> **[0:13](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=13)** Go ahead and fill in your information, then click Sign Up when you're done.
>
> **[0:18](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=18)** As a security precaution, I recommend choosing a strong password here.
>
> **[0:22](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=22)** You might also want to save your username and password in a password manager or some other safe place so that you don't have to remember them every time.
>
> **[0:30](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=30)** Since I already have an account in the Docker Hub, I'm not going to click Sign Up here.
>
> **[0:36](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=36)** You'll be sent a verification email after you do this.
>
> **[0:39](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=39)** Keep an eye out for it and click the verification link when you get it.
>
> **[0:43](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=43)** Let's go back to terminal.
>
> **[0:46](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=46)** The next thing we're going to do is log into Docker Hub from the Docker CLI.
>
> **[0:50](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=50)** We can easily do this with docker login.
>
> **[0:54](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=54)** You'll be asked for that username and password you created earlier.
>
> **[0:58](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=58)** Enter them when prompted.
>
> **[1:00](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=60)** Since my username is Carlos Nunez, I'm going to go ahead and type carlosnunez and then I'll answer my password.
>
> **[1:07](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=67)** Docker will tell you that login has succeeded if everything checks out.
>
> **[1:11](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=71)** Docker also saves these credentials to your home directory so that you can easily log in in the future.
>
> **[1:17](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=77)** Great, now that we're logged in, let's continue pushing our web server into Docker Hub.
>
> **[1:22](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=82)** First, we'll need to tell Docker that this image is going to be pushed into a registry.
>
> **[1:27](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=87)** To do that, we will need to rename the image so that it contains our username.
>
> **[1:32](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=92)** We can do that easily with the docker tag command.
>
> **[1:36](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=96)** Docker tag renames Docker images.
>
> **[1:38](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=98)** It's like the MV command in Linux terminals, but for Docker images.
>
> **[1:44](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=104)** Okay, so let's rename our-web-server.
>
> **[1:47](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=107)** To do that, I'm going to type docker tag like I've done, then the name of the image that we're renaming or our-web-server and the new name of the image.
>
> **[1:57](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=117)** Because we're sending this to Docker Hub, I'm going to first put in my username, carlosnunez.
>
> **[2:04](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=124)** Next, I'll type in a slash and the name of the image as it will appear on Docker Hub.
>
> **[2:10](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=130)** Since I want it to be called our-web-server in Docker Hub, I'll just put our-web-server here.
>
> **[2:17](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=137)** As we said earlier, we can stop here and have Docker automatically append the latest tag for us.
>
> **[2:23](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=143)** However, I might want to add more versions of our-web-server in the future.
>
> **[2:27](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=147)** Having them all be called latest will get really confusing and make it difficult to know which version I'm actually using.
>
> **[2:33](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=153)** To avoid that, I'm going to put a colon, then a version number.
>
> **[2:38](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=158)** The version can be anything.
>
> **[2:40](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=160)** Let's use 0.0.1 here.
>
> **[2:43](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=163)** We know that this was successful because we did not get a response back.
>
> **[2:48](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=168)** Now that we've tagged our image, we can easily push the image to Docker Hub by running docker push, then providing the name of the image that we just created.
>
> **[2:57](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=177)** In this case, carlosnunez/our-web-server:0.0.1.
>
> **[3:07](https://www.linkedin.com/learning/learning-docker-17236240/pushing-images-to-the-docker-registry?u=76281980&t=187)** You'll see logs similar to what we saw with docker pull, but we're going in the other direction.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (22), mv (1), make (1)
> **Code Keywords:** let (4), this, (1), this. (1), continue (1), case, (1)
> **Versions:** 0.0.1 (2)
> **Analogies:** it's like (1), similar to (1)
> **Env Vars:** cli (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)

#### Checking your images in Docker Hub
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=0)** - Now that we pushed our image into Docker Hub, let's log into it again and see if it made it.
>
> **[0:05](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=5)** If you're not signed in already, you'll see a sign in button near the register button.
>
> **[0:09](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=9)** Click on it and provide your login details.
>
> **[0:15](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=15)** Once logged in, you'll see a list of images.
>
> **[0:18](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=18)** The first image on this list is the image that we just created.
>
> **[0:21](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=21)** This means that we successfully pushed it.
>
> **[0:23](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=23)** Let's take a closer look.
>
> **[0:25](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=25)** Click on our web server.
>
> **[0:29](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=29)** We can see the tags that we've pushed, as well as the operating system the image is compatible with, and when it was last pushed.
>
> **[0:36](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=36)** If we had a lot of tags listed here, we would need to click see all to see them all.
>
> **[0:41](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=41)** What happens if we push the image but with another tag?
>
> **[0:45](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=45)** Let's go back to our terminal and find out.
>
> **[0:47](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=47)** I'm going to click the up key to go back to my Docker tag command.
>
> **[0:52](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=52)** Let's change 0.0.1 to 0.0.2.
>
> **[0:57](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=57)** Like last time, this works well.
>
> **[1:00](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=60)** Now, let's push this image to Docker Hub with Docker Push.
>
> **[1:04](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=64)** Remember to change 0.0.0.1 to 0.0.0.2.
>
> **[1:09](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=69)** Because Docker images are basically layers of images squished together, Docker is smart enough to know which layers already exist in the Hub and which don't.
>
> **[1:17](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=77)** Since we didn't change this image at all, all of its layers already exist and nothing needed to be pushed.
>
> **[1:23](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=83)** Let's go back to Docker Hub.
>
> **[1:27](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=87)** I'm going to refresh this page now.
>
> **[1:31](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=91)** Now that the page is loaded, we can see that 0.0.0.2 has been pushed and is ready to be pulled.
>
> **[1:37](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=97)** Since this image is just a testing image, I don't actually want to keep it in my Docker Hub account, therefore I'm going to delete it.
>
> **[1:45](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=105)** Interestingly enough, there is not an easy way to do this from the command line, we have to do this from the browser.
>
> **[1:51](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=111)** Fortunately, this is really easy to do.
>
> **[1:54](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=114)** I'm going to click on settings, then I'm going to click on delete repository.
>
> **[2:00](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=120)** Docker Hub will ask us to retype the name of the image we're deleting, so I'm going to do that now.
>
> **[2:08](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=128)** Ah, see the mistake I made here is that I typed in the entire image tag, instead of just the name of the image.
>
> **[2:15](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=135)** Remember, image tags are the name of the image, a colon, and then the version.
>
> **[2:21](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=141)** I mistakenly typed the whole image tag instead of just the image name.
>
> **[2:25](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=145)** So let's go ahead and get rid of the repository part.
>
> **[2:29](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=149)** And now the delete button lights up.
>
> **[2:32](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=152)** So I'm going to go ahead and click it to commit the change.
>
> **[2:36](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=156)** After pressing delete, the image is deleted, and we are sent back to our list of images.
>
> **[2:41](https://www.linkedin.com/learning/learning-docker-17236240/checking-your-images-in-docker-hub?u=76281980&t=161)** It's as if nothing ever happened.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), delete (4)
> **CLI Commands:** docker (9), find (1)
> **Versions:** 0.0.0 (3), 0.0.1 (1), 0.0.2 (1)
> **UI Navigation:** click on (4)
> **Cross-References:** go back to (3)
> **Tools:** terminal (1), command line (1)
> **Definitions:** means that (1)
> **Best Practices:** remember to (1)

#### Beyond Docker Hub: Other popular container registries
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=0)** - [Narrator] Docker Hub is a great and easy to use image registry.
>
> **[0:03](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=3)** However, there are lots of other popular image registries that you'll interact with.
>
> **[0:08](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=8)** Let's learn a little more about 'em.
>
> **[0:10](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=10)** An image registry that's exploded in popularity over the years is in a place you're probably already familiar with.
>
> **[0:18](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=18)** GitHub, the world's most popular code sharing and collaboration platform, enables developers to publicly host container images for their projects for free.
>
> **[0:28](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=28)** With built-in integration into other popular services, like GitHub Actions, many open source project maintainers are finding the GitHub Container Registry to be an easier and more convenient way of hosting their images.
>
> **[0:40](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=40)** Check out the link below to learn more about the GitHub Container Registry.
>
> **[0:45](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=45)** GitLab, another extremely popular code sharing and collaboration platform, also has a container registry.
>
> **[0:52](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=52)** Like GitHub, developers can use tools like GitLab CI to automatically build and push their images into GitLab Container Registry for free.
>
> **[1:01](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=61)** Unlike GitHub, though, you can create private image registries for free as well.
>
> **[1:06](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=66)** This is a great option for developers who would like more control over how their images are published.
>
> **[1:12](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=72)** Check out the link below to learn more about the GitLab Container Registry.
>
> **[1:17](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=77)** Finally, if you're using Docker in a corporate environment, you'll likely spend a lot of time working with private container image registries.
>
> **[1:25](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=85)** Private registries offer lots of benefits that greatly simplify self-hosting container images at scale, like role-based access control, service accounts for pushing and pulling images automatically, and improved security with container image scanning.
>
> **[1:41](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=101)** JFrog's Artifactory, Sonatype's Nexus, Red Hat's [Quay.io](https://Quay.io), and Project Harbor are popular options for self-hosting image registries.
>
> **[1:52](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=112)** All of the cloud providers provide their own services as well.
>
> **[1:55](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=115)** Several popular options are listed on this slide.
>
> **[1:58](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=118)** No matter which registry you find yourself working with though, you've already learned the tools you need to use them.
>
> **[2:03](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=123)** Docker login, docker build, and docker push work just the same no matter which registry you're hosting your images with.
>
> **[2:11](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=131)** Try one of them or try them all.
>
> **[2:13](https://www.linkedin.com/learning/learning-docker-17236240/beyond-docker-hub-other-popular-container-registries?u=76281980&t=133)** The container image registry world is your oyster.

> [!info]- Semantic Content
>
> **Tools:** github (6), gitlab (4)
> **Code Keywords:** private (3), self (2), let (1), finally, (1)
> **CLI Commands:** docker (5), find (1)
> **Definitions:** is a  (2)
> **URLs:** [quay.io](https://quay.io) (1)
> **Speakers:** - [narrator] (1)

#### Challenge: Starting NGINX
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=0)** (energetic music)
>
> **[0:05](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=5)** - [Narrator] Welcome to your first Challenge.
>
> **[0:07](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=7)** For this Challenge, you're going to use NGINX to serve a real working website from Docker.
>
> **[0:12](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=12)** This is something that you'll do very often as you use Docker for real applications.
>
> **[0:17](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=17)** Your exercise file bundle for this Challenge contains a website in a folder called website.
>
> **[0:23](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=23)** Use this folder and the NGINX image in Docker Hub to serve the website from a Docker container called website.
>
> **[0:30](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=30)** NGINX will serve the website from port 80 by default.
>
> **[0:34](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=34)** Ensure that the website is accessible from your browser at [http://localhost:8080](http://localhost:8080).
>
> **[0:44](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=44)** The container must not exist after you are done viewing the website.
>
> **[0:48](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=48)** Finally, if you choose to use volume mounts for your solution, make sure that you're inside of the 03_14 folder and map $PWD in capital letters, /website to/usr/share /nginx/html within the container.
>
> **[1:13](https://www.linkedin.com/learning/learning-docker-17236240/challenge-starting-nginx?u=76281980&t=73)** Good luck and have fun.

> [!info]- Semantic Content
>
> **CLI Commands:** nginx (4), docker (4), make (1)
> **Env Vars:** nginx (3), pwd (1)
> **Code Keywords:** default. (1), finally, (1)
> **Ports:** port 80 (1), :8080 (1)
> **URLs:** [http://localhost:8080](http://localhost:8080) (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (energetic music) (1)

#### Solution: Starting NGINX
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=0)** (cheerful synth music) - [Instructor] Thanks for trying this challenge.
>
> **[0:07](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=7)** I hope that you enjoyed it.
>
> **[0:08](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=8)** The challenge was to serve a website on engine X with Docker, given some configuration and the static site.
>
> **[0:15](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=15)** Let's work through the solution together.
>
> **[0:18](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=18)** The first piece of information that we're given, is to use the Engine X image from Docker hub.
>
> **[0:22](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=22)** This makes our problem much easier to solve, because we do not need to create a new Docker file for this website.
>
> **[0:29](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=29)** Next, we were told to name our container "website".
>
> **[0:33](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=33)** We know that we will want to use "Docker run" if we're going the short way, or "Docker container create" and "Docker container start" if we're going the long way.
>
> **[0:46](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=46)** I prefer to use the short way, so I'm going to erase this and use "Docker Run" instead.
>
> **[0:52](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=52)** Since the container will have a name, we know that we will want to use the dash dash name option.
>
> **[0:58](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=58)** The next thing we know is that we need to configure our container to use the website in our exercise files.
>
> **[1:04](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=64)** This means that we need to use a volume mount to map our website folder to the "slash usr slash share slash EngineX slash HTML" folder within the container like we saw in the challenge prompt.
>
> **[1:18](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=78)** If you get the two confused, that's okay.
>
> **[1:20](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=80)** Always remember outside, colon, inside.
>
> **[1:25](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=85)** To do that, I'm going to need the dash V option and I'm going to put "dollar PWD slash website" as directed by the prompt and then a colon, and then "slash usr slash share slash engine x slash html".
>
> **[1:45](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=105)** Next, we were told two key pieces of information.
>
> **[1:49](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=109)** First, that our website should be accessible from "http colon slash forward slash localhost colon 80 80" and that engine X will serve websites from port 80.
>
> **[2:01](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=121)** This means that we need to use port mapping with the dash P switch to make this happen.
>
> **[2:07](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=127)** Outside will be 80 80, colon as a colon, then inside will be 80.
>
> **[2:14](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=134)** You should not have needed to modify the engine X config at all.
>
> **[2:19](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=139)** Finally, we were told that the website container should delete itself immediately after the website is done.
>
> **[2:25](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=145)** This means that we should add a dash dash RM option here to guarantee that.
>
> **[2:30](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=150)** While we can just run Docker stop and Docker RM afterwards, using this flag simplifies this process putting it all together, our final command is "Docker, run dash, dash name dash V".
>
> **[2:48](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=168)** Ah, I hope you all caught that.
>
> **[2:50](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=170)** I actually forgot to put the name of the website there, after "dash dash name", so let's go ahead and put that in.
>
> **[2:57](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=177)** All right, starting over, putting it all together, we will have "Docker run dash, dash name website dash v" then the outside folder, which is dollar PWD forward slash website, then colon, then the inside folder, which is "slash usr slash share slash EngineX slash html".
>
> **[3:21](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=201)** Then a dash P, then the outside port, which is 80 80, a colon, and then the inside port, which is just port 80.
>
> **[3:30](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=210)** And then finally, we need the "dash dash RM switch".
>
> **[3:34](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=214)** But finally, finally, we actually need the name of the image, which is going to be Engine X.
>
> **[3:41](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=221)** Let's run it.
>
> **[3:44](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=224)** Sometimes this happens, depending on the outside colon inside that you provide next to the dash V option.
>
> **[3:51](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=231)** To work around this, just simply put quotes around your volume mount.
>
> **[3:56](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=236)** So I'm going to put a quote behind a dollar sign, and then I'm going to put another quote after HTML.
>
> **[4:05](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=245)** So now this is downloading Engine X, downloading all the intermediate layers, these IDs like we saw earlier, and then it finally started the web server.
>
> **[4:16](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=256)** So now I'm going to go into Safari, or your favorite web browser.
>
> **[4:20](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=260)** Doesn't have to be Safari.
>
> **[4:22](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=262)** And then I'm going to go to "HTTP colon forward slash forward slash local house colon80 80", and we got a very nice mission accomplished congratulations website.
>
> **[4:36](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=276)** You did it, congratulations.
>
> **[4:39](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=279)** You have solved the challenge, but we need to terminate the container, and confirm that it's gone.
>
> **[4:44](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=284)** As the directions did say that we need to verify that the container has been removed.
>
> **[4:49](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=289)** So let's go back to our terminal and do that.
>
> **[4:52](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=292)** I'm going to first press control C to stop Engine X.
>
> **[4:55](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=295)** Then I'm going to run "Docker PS dash A" and we can see that the website is gone.
>
> **[5:01](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=301)** And the reason why is because we included that "dash dash RM" option earlier.
>
> **[5:08](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=308)** Now remember that the dash A option is important here.
>
> **[5:10](https://www.linkedin.com/learning/learning-docker-17236240/solution-starting-nginx?u=76281980&t=310)** Since the website container is no longer running, it will not show up if we just ran Docker PS by itself.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (13), rm (4), make (1)
> **Code Keywords:** let (4), finally, (4), switch (2), static (1), delete (1)
> **Env Vars:** html (2), pwd (2), http (1)
> **Tools:** safari (2), terminal (1)
> **Definitions:** means that (3)
> **Ports:** port 80 (2)
> **Non-Speech:** (cheerful synth music) (1), (music ends) (1)
> **Cross-References:** go back to (1)


### 4. When Things Go Wrong

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Help! I can't seem to create more containers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=0)** - [Instructor] So you're humming along using Docker for all the things, you've been building and running all of your apps on Docker for months.
>
> **[0:07](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=7)** Then one day you're trying to build a Java app with the open JDK 19 image on Docker hub and see something like this.
>
> **[0:15](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=15)** After reading the tutorial on how to check disc space, you run DF dash H to see where you ran out of space, and you have plenty of space everywhere?
>
> **[0:28](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=28)** What in the world?
>
> **[0:29](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=29)** I don't have space?
>
> **[0:30](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=30)** Where don't I have space?
>
> **[0:32](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=32)** I can't create containers, help!
>
> **[0:35](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=35)** This happens to everyone eventually.
>
> **[0:37](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=37)** Fortunately, this is an easy fix.
>
> **[0:39](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=39)** As we learned from earlier, Docker images are compressed layers of other images.
>
> **[0:44](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=44)** These compressed files need to live somewhere.
>
> **[0:47](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=47)** We also learned that on the Mac, and on some Windows installations, the actual Docker engine runs inside of a tiny virtual machine.
>
> **[0:54](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=54)** What actually happened here is that a folder within that virtual machine ran out of space.
>
> **[0:59](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=59)** So before we start hacking on our system to get at that VM, there are a number of things we can do to fix this.
>
> **[1:06](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=66)** Let's clear my screen before we move on.
>
> **[1:10](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=70)** First, you might have a bunch of images you aren't using anymore, taking up space.
>
> **[1:14](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=74)** We can use "Docker images" to list them.
>
> **[1:18](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=78)** We can also use the "Docker RMI" command to remove images that we are no longer using.
>
> **[1:26](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=86)** The nice thing about this command is that it can take multiple images at a time.
>
> **[1:30](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=90)** Let's say I don't need any of the selenium images, or this engine X image, or this weird XQ image that I created, anymore.
>
> **[1:42](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=102)** I can easily remove them in one fell swoop by typing "Docker RMI", and then the tag for each image I want to delete.
>
> **[1:48](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=108)** So in this case, it'll be "Carlos Nunez XQ, engine X," and both of the selenium images.
>
> **[1:57](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=117)** So "standalone Chrome" and "standalone Firefox".
>
> **[2:04](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=124)** As we can see, they are easily deleted.
>
> **[2:07](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=127)** Remember that you might need to stop containers using some of these images with Docker RM before running this command.
>
> **[2:14](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=134)** You can also add "dash F" to the RMI command to forcefully delete those images, but be wary of data loss here.
>
> **[2:22](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=142)** Docker has another trick up its sleeve to reclaim space.
>
> **[2:25](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=145)** I'm going to press Control K to get rid of that command, and then control L to clear my screen.
>
> **[2:30](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=150)** We can run another command called "Docker system prune".
>
> **[2:35](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=155)** This command smartly removes useless data that's burning a hole in our disc.
>
> **[2:40](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=160)** Now we get a warning here.
>
> **[2:42](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=162)** This warning is usually innocuous.
>
> **[2:44](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=164)** It just tells us that it's going to remove stopped containers that we aren't using anymore, as well as some intermediate layers that were created that are no longer associated with images that are on our machine.
>
> **[2:55](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=175)** Because I know this is safe, I'm going to press the lowercase y, to tell Docker to do this.
>
> **[3:01](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=181)** Now, if you have hesitations about doing this based on this message, you can always press uppercase N to abort it.
>
> **[3:08](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=188)** Like I said, I'm going to press lowercase y.
>
> **[3:11](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=191)** In this case, I've reclaimed all the space that I possibly could, so I don't have any space to reclaim here.
>
> **[3:17](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=197)** But in my experience running this command, a lot of times you can reclaim serious amounts of space.
>
> **[3:23](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=203)** I've reclaimed gigabytes of space doing this.
>
> **[3:26](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=206)** I love this command.
>
> **[3:27](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=207)** It is a very helpful command to have in your toolbox.
>
> **[3:32](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=212)** So now that we've run Docker RMI to remove images and Docker system prune to remove some staleness in our Docker engine, let's try running that Docker run command from earlier.
>
> **[3:44](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=224)** So I'm going to press Ctrl L to clear my screen, then press Ctrl R to look for the Docker run command I ran earlier.
>
> **[3:52](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=232)** I'm just going to type "run" since I don't want to type the whole thing.
>
> **[3:56](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=236)** This is not the command that I want.
>
> **[3:57](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=237)** So I'm going to press control R again until I find it.
>
> **[4:01](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=241)** Here it is.
>
> **[4:02](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=242)** So now I'm going to press enter to continue.
>
> **[4:07](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=247)** And success!
>
> **[4:09](https://www.linkedin.com/learning/learning-docker-17236240/help-i-can-t-seem-to-create-more-containers?u=76281980&t=249)** We're officially Docker engineers, you all.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (18), rm (1), find (1)
> **Code Keywords:** this. (4), let (3), delete (2), case, (2), continue (1)
> **Env Vars:** rmi (4), jdk (1)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** warning (2)
> **Tools:** firefox (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Help! My container is really slow
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=0)** - [Instructor] While this doesn't happen very frequently, your container might run more slowly than you expected.
>
> **[0:06](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=6)** There are a lot of advanced troubleshooting techniques we can use to diagnose these sorts of problems, but we'll talk about three commands that you can run that will help.
>
> **[0:14](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=14)** The first command is docker stats.
>
> **[0:17](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=17)** Docker stats can give you a snapshot of your container's performance as it's running.
>
> **[0:22](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=22)** Let's look at an example.
>
> **[0:24](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=24)** I'm going to start a new container called alpine, in the background with docker run --name and let's set it to alpine -d.
>
> **[0:36](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=36)** Alpine Linux is a Linux distribution that's extremely small and bare bones.
>
> **[0:41](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=41)** It is a great fit for docker because its small size makes it very easy to create small images that download quickly.
>
> **[0:48](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=48)** Since we want to use this distribution I'm just going to type alpine here as the image name.
>
> **[0:54](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=54)** I also want this container to run indefinitely, so I'm going to set its entry point with the --entry point flag to sleep.
>
> **[1:04](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=64)** And then after the image name, I'm going to provide an argument to it, called infinity, that well, puts the container to sleep forever.
>
> **[1:15](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=75)** Let's run it.
>
> **[1:17](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=77)** A quick check of docker ps confirms that it's doing what I expected.
>
> **[1:20](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=80)** It is sleeping and it is running.
>
> **[1:23](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=83)** I want to look at its stats while it's sleeping.
>
> **[1:26](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=86)** I can use docker stats.
>
> **[1:28](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=88)** Then the ID or name of the container.
>
> **[1:31](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=91)** Since I named it alpine earlier.
>
> **[1:33](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=93)** I can just type alpine here.
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=95)** Then I'm going to hit enter, and we can see some really interesting information from this screen.
>
> **[1:42](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=102)** Let's see if I can hammer this container.
>
> **[1:44](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=104)** In another terminal, I'm going to start a shell into the container with docker exec.
>
> **[1:50](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=110)** Then I want it to be interactive, since I'll be answering key strokes and stuff like that.
>
> **[1:55](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=115)** So I'm going to put a -i.
>
> **[1:58](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=118)** I also need this terminal to communicate with the container's terminal.
>
> **[2:02](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=122)** I can do that with sudo TTY, which I can provide with the -t option and then I'll provide the name of the container.
>
> **[2:12](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=132)** Finally, I'll provide the shell that I want to use, which in this case I want to use just sh.
>
> **[2:18](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=138)** And then I'll hit enter to enter that container shell.
>
> **[2:23](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=143)** A really simple program I'd like to use, to increase CPU consumption is the yes program.
>
> **[2:30](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=150)** The only thing this program does is print yes, but in doing so, it lights the CPU on fire, which I really like.
>
> **[2:39](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=159)** So there it is.
>
> **[2:40](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=160)** It's printing y indefinitely.
>
> **[2:43](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=163)** Now going back to our original terminal, we can see that the CPU usage went up considerably because of this.
>
> **[2:52](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=172)** Let's go back to our previous terminal, control C out of the yes bomb that we've created, and then type exit to leave the shell.
>
> **[3:00](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=180)** As you can see, after I terminated that, yes bomb, the CPU usage went right back down.
>
> **[3:08](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=188)** Let's control C from here, and talk about the second command I like to use for debugging.
>
> **[3:14](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=194)** The second command I like to use for debugging is docker top.
>
> **[3:18](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=198)** Docker top shows you what's running inside of the container without having to exec into it.
>
> **[3:24](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=204)** Let's go back to our infinity container again.
>
> **[3:27](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=207)** I'm going to use docker exec again to run three more sleeps.
>
> **[3:31](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=211)** I'll also use the -d flag, so that we don't attach each command after running it.
>
> **[3:36](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=216)** So here's the first one.
>
> **[3:38](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=218)** Here's the second one And here's the final one.
>
> **[3:47](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=227)** Now, if I run docker top against this container we can see that we have a ton of sleeps.
>
> **[3:54](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=234)** Let's go ahead and clear my screen, before I talk about the final command, which is docker inspect.
>
> **[4:01](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=241)** This can show you advanced information about a container that's running in JSON format.
>
> **[4:06](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=246)** This is also really convenient for scripting against docker.
>
> **[4:09](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=249)** All right, let's mess with our infinity sleeper once more.
>
> **[4:12](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=252)** I'm going to run docker inspect.
>
> **[4:13](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=253)** Then I'm going to provide the name of the container.
>
> **[4:17](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=257)** Finally, I'll hit enter.
>
> **[4:20](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=260)** And we get a lot of JSON back.
>
> **[4:22](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=262)** It went straight to the bottom too.
>
> **[4:24](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=264)** It would be convenient to read this output page by page.
>
> **[4:28](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=268)** Fortunately, we can run this again but this time we can feed the output with the pipe, into the less command on the right.
>
> **[4:37](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=277)** This is much better, at least for me.
>
> **[4:40](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=280)** Less breaks up long texts like this by sending the data into a viewer.
>
> **[4:44](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=284)** This is also called Pagan 80.
>
> **[4:47](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=287)** We can see a lot of stuff that we normally wouldn't see with docker ps.
>
> **[4:51](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=291)** I can see whether the container is restarting.
>
> **[4:54](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=294)** I can also see the amount of times the container is restarted with Restart Count.
>
> **[4:59](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=299)** The search is case sensitive, so we need to make sure our casing is right.
>
> **[5:05](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=305)** We can also see information about directories that have been mounted with mounts.
>
> **[5:11](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=311)** I don't have any directories mounted, so it's an empty list.
>
> **[5:15](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=315)** And I can also see much, much, much more.
>
> **[5:18](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=318)** I'm going to press q, to get out of that screen.
>
> **[5:23](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=323)** Like I said earlier, there's a lot more we can do to debug slow docker containers.
>
> **[5:27](https://www.linkedin.com/learning/learning-docker-17236240/help-my-container-is-really-slow?u=76281980&t=327)** However, this is a good starting point, especially with your newfound docker knowledge.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (17), sudo (1), make (1)
> **Code Keywords:** let (9), finally, (2), this. (1)
> **Env Vars:** cpu (4), json (2), tty (1)
> **Tools:** terminal (5)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### I can't use the Docker client!
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=0)** - [Instructor] Here's one more bugbear that you might run into.
>
> **[0:03](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=3)** You hop into your machine in the morning and fire up a terminal to begin doing some stuff with containers.
>
> **[0:09](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=9)** However, upon running docker ps to see what containers you have running, you're asked, rather rudely, is the docker daemon running?
>
> **[0:17](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=17)** "What do you mean is the docker daemon running?
>
> **[0:19](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=19)** It was running yesterday. Who messed with my machine?"
>
> **[0:21](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=21)** You might angrily be thinking.
>
> **[0:23](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=23)** "I have deadlines."
>
> **[0:26](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=26)** (instructor sighing) Take a breath. This one's easy to fix.
>
> **[0:30](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=30)** There are two reasons why you might run into this.
>
> **[0:33](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=33)** The first reason is pretty straightforward.
>
> **[0:36](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=36)** Remember our little whale friend in the system tray or task bar?
>
> **[0:41](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=41)** If you don't see it, then Docker Desktop isn't running.
>
> **[0:44](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=44)** All you need to do is open Docker Desktop again and give it a minute to start.
>
> **[0:49](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=49)** Once you see the whale with its boxes on top of it, then go back into your terminal and rerun the command.
>
> **[0:56](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=56)** It should work as expected, right as rain.
>
> **[1:00](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=60)** A less common reason why this happens is that you might be in a wrong or outdated Docker context.
>
> **[1:06](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=66)** Let's run docker context ls to show you what I mean.
>
> **[1:11](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=71)** Context enable you to create shortcuts that configure the machine that the Docker client uses to do Docker-related things.
>
> **[1:18](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=78)** These enable you to build and run containers remotely, which can be really helpful if you're using Docker in an automated scenario, like in a script or in a CI/CD pipeline run.
>
> **[1:29](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=89)** As you can see in the left-hand column over here, we have three docker contexts.
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=94)** We have default, desktop-linux, and definitely-not-broken.
>
> **[1:40](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=100)** The asterisk to the right of definitely-not-broken tells us that this is the context that our client is currently using.
>
> **[1:46](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=106)** The column to the right of this tells us the endpoints that our Docker client is using through this context to communicate with the Docker engine.
>
> **[1:54](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=114)** We can see that it's trying to communicate with the file that does/not/exist because the file is literally called does/not/exist.
>
> **[2:02](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=122)** This will obviously cause us some problems.
>
> **[2:04](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=124)** Let's run docker context use default to switch to the context created by Docker Desktop.
>
> **[2:11](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=131)** You can also switch to desktop-linux to do the same thing.
>
> **[2:16](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=136)** Now let's retry running our docker ps command.
>
> **[2:19](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=139)** As you can see, our command works as expected.
>
> **[2:23](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=143)** Now, a big note here: contexts and endpoints can be overridden with shell environment variables.
>
> **[2:28](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=148)** Specifically, the context can be overridden with the DOCKER_CONTEXT environment variable and the endpoint can be overridden with DOCKER_HOST.
>
> **[2:38](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=158)** To check for this, run echo $DOCKER_CONTEXT ; echo $DOCKER_HOST.
>
> **[2:47](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=167)** If you're on a Windows machine, like shown here, make sure you have an env: after the dollar if you're doing this in PowerShell.
>
> **[2:55](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=175)** When I run this, mine came back empty.
>
> **[2:57](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=177)** That means that I don't have any override set.
>
> **[3:00](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=180)** But to show you an example of... Let's go ahead and use export to set DOCKER_CONTEXT to definitely-not-working.
>
> **[3:11](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=191)** If I run docker ps again, we can see that we get an error here where wherein I'm trying to use this context that doesn't actually exist.
>
> **[3:20](https://www.linkedin.com/learning/learning-docker-17236240/i-can-t-use-the-docker-client?u=76281980&t=200)** To unset it, just run unset DOCKER_CONTEXT and you're back in business.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (17), ls (1), cd (1), make (1)
> **Code Keywords:** let (4), switch (2), this, (2), this. (1), default, (1)
> **Env Vars:** docker_context (4), docker_host (2)
> **Tools:** docker desktop (3), terminal (2), powershell (1)
> **UI Navigation:** switch to (2)
> **Prerequisites:** configure (1), make sure you have (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Fix a broken container
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980&t=0)** - [Instructor] All right, challenge time.
>
> **[0:08](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980&t=8)** This exercise file packet contains a Dockerfile and a script.
>
> **[0:12](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980&t=12)** The Dockerfile produces a container that is broken after an image is built from it.
>
> **[0:18](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980&t=18)** In this challenge, I would like you to fix the Dockerfile and the script within.
>
> **[0:23](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980&t=23)** When the container is working, you should see the messages that you see here print onto your terminal in order almost immediately.
>
> **[0:32](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980&t=32)** Here are some helpful hints.
>
> **[0:34](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980&t=34)** Use the -it flag when you run your container.
>
> **[0:39](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980&t=39)** Also use docker ps and docker rm if you get stuck trying to stop the container with Control + C.
>
> **[0:46](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980&t=46)** Finally, while you should not need to know more about shell scripting than what we've covered here, feel free to consult any documentation that you need.
>
> **[0:55](https://www.linkedin.com/learning/learning-docker-17236240/challenge-fix-a-broken-container?u=76281980&t=55)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2), rm (1)
> **Code Keywords:** finally, (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Fix a broken container
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=5)** - [Instructor] All right, I hope you had some fun solving that challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=8)** Let's go through the solution together.
>
> **[0:11](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=11)** Our exercise file packet contains two files, a docker file called docker file, and a script called app dot sh.
>
> **[0:20](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=20)** Let's run docker build to build the image from this docker file.
>
> **[0:23](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=23)** Since we're building our own image, we need to give it a name.
>
> **[0:26](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=26)** Let's use app here with dash T.
>
> **[0:29](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=29)** We also know that we need to provide a context to docker.
>
> **[0:32](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=32)** Since we're already in the same directory as the exercise files, I'll just put a period here.
>
> **[0:37](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=37)** The final command we'll run here is docker build dash t app, and then the period to denote the current directory.
>
> **[0:47](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=47)** Let's run it.
>
> **[0:49](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=49)** So, it looks like docker cannot find this image on our system, or from the docker hub.
>
> **[0:54](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=54)** We have two options here.
>
> **[0:56](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=56)** We can either change the from image that we're using, to something that we do have, or we can go into docker hub and find an Ubuntu image that actually exists.
>
> **[1:06](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=66)** I'm going to do the second thing.
>
> **[1:09](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=69)** I'm going to open a browser, then visit the docker hub at hub dot docker dot com.
>
> **[1:16](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=76)** Once the page loads, I'm going to type ubuntu into the search box, And then hit enter to start searching.
>
> **[1:24](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=84)** And then I'll click the first result.
>
> **[1:27](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=87)** Scrolling down, we can already see a bunch of version tags that will work for us here.
>
> **[1:31](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=91)** However, you might have noticed that one of them is eerily similar to the one we tried to download.
>
> **[1:37](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=97)** Let's go back to our terminal, and see if we can identify that.
>
> **[1:41](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=101)** So this red error message tells us where we failed.
>
> **[1:45](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=105)** It failed to find this ubuntu colon xenial docker image.
>
> **[1:52](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=112)** But if we go back to our docker hub, we can see that there's a xenial image, but there's only one L in this one, and two L's in this one.
>
> **[2:03](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=123)** That's right, we totally misspelled xeniall.
>
> **[2:07](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=127)** So let's go back into our docker file to fix that.
>
> **[2:10](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=130)** I'm going to open my docker file in Vim.
>
> **[2:13](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=133)** And then I'm going to remove the second L from xenial ere.
>
> **[2:18](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=138)** I'm going to save my file with colon w, and then quit with colon q.
>
> **[2:23](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=143)** And then I'll press Ctrl R to go back to my run command from earlier.
>
> **[2:27](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=147)** Not that one.
>
> **[2:29](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=149)** I actually meant docker build.
>
> **[2:33](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=153)** And then try it again.
>
> **[2:36](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=156)** And we can see a lot more intermediate layers here.
>
> **[2:40](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=160)** And we get a successful message at the bottom, so we know that this works perfectly.
>
> **[2:45](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=165)** Now that we've built our image, let's try to start a container from it.
>
> **[2:48](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=168)** I'm going to do that with the docker run command.
>
> **[2:51](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=171)** Let's clear my terminal to make some space.
>
> **[2:55](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=175)** We know from the challenge prompt that we should run this with dash i and dash t, which can be put together like this.
>
> **[3:02](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=182)** This allows us to send keystrokes to our command, which might be helpful.
>
> **[3:06](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=186)** Next, I'm going to provide the name of the image I created, which is just app, and then I'll press enter.
>
> **[3:14](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=194)** I could have also provided dash dash RM here to remove the container after I'm done, but that's completely optional here.
>
> **[3:21](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=201)** All right, so the app starts and begins processing, but very, very slowly.
>
> **[3:26](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=206)** The prompt tells us that this should be immediate so something is wrong here.
>
> **[3:30](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=210)** We can do two things.
>
> **[3:31](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=211)** We can either look at the script and find out what's going on there.
>
> **[3:35](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=215)** Or we can use docker top to figure out whether the container's just slow.
>
> **[3:40](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=220)** I'm going to do the latter.
>
> **[3:42](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=222)** While this is processing, I'm going to run another terminal and in it I'm going to run docker stats, and then the name of the container that we're running.
>
> **[3:52](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=232)** We then give this container a name.
>
> **[3:55](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=235)** It looks like it finished in the background there.
>
> **[3:57](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=237)** Finally got done.
>
> **[3:58](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=238)** So, let's actually rerun this app again.
>
> **[4:01](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=241)** I'm going to keep this terminal open here.
>
> **[4:03](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=243)** I'm going to rerun it, and I'm going to actually give this container a name.
>
> **[4:08](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=248)** Let's call it app underscore container.
>
> **[4:10](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=250)** Then hit enter once again.
>
> **[4:12](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=252)** All right, so it is processing, but again it's processing very slowly.
>
> **[4:17](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=257)** So in my other terminal, I'm going to go ahead and run docker stats, and then provide the name of the container, which is app underscore container.
>
> **[4:26](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=266)** We can see that the CPU is being hammered pretty hard here, so something is definitely causing our CPU to spike.
>
> **[4:34](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=274)** Let's exit out of here and see if docker top gives us some answers.
>
> **[4:37](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=277)** Docker top app container.
>
> **[4:40](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=280)** And we can see that there is this weird timeout thing happening.
>
> **[4:45](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=285)** And then yes is running again.
>
> **[4:47](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=287)** We saw earlier that yes is the magic command that destroys CPUs, so that definitely shouldn't be in our script.
>
> **[4:55](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=295)** This means that we need to modify the app that's used by this docker file and rebuild this image.
>
> **[5:00](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=300)** So, I'm going to get out of this terminal, since I don't need it anymore.
>
> **[5:04](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=304)** And then, I'm going to open the docker file once again.
>
> **[5:10](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=310)** And we can see that the entry point is set to this app dot sh file.
>
> **[5:15](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=315)** So what I'm going to do is I'm going to open that file, with colon e.
>
> **[5:21](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=321)** And since it's in my current directory, I can just provide app dot sh.
>
> **[5:26](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=326)** Now, I already know that yes is definitely the culprit here.
>
> **[5:30](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=330)** So, I'm just going to search for yes in my file and we can see that it's right here on this line.
>
> **[5:36](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=336)** So intuitively, I would think that deleting it should fix this problem.
>
> **[5:42](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=342)** So I'm going to go ahead and delete that with d, d.
>
> **[5:46](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=346)** And then I'm going to colon w to save my file.
>
> **[5:49](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=349)** And then colon q to quit.
>
> **[5:52](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=352)** Now that I've made changes to my app, we need to rebuild our docker image.
>
> **[5:56](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=356)** So to do that, I'm going to run Control R, then type build.
>
> **[6:01](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=361)** That's the command that I want, so I don't need to press control R again.
>
> **[6:05](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=365)** I can just press enter.
>
> **[6:07](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=367)** And it rebuilds really quickly.
>
> **[6:09](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=369)** Now that we've rebuilt, let's try running docker run again to see if we get any improvements.
>
> **[6:16](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=376)** Now we experience a conflict, because we have a container that's already named app container.
>
> **[6:23](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=383)** And docker's really helpful and tells us that it's already in use.
>
> **[6:26](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=386)** And it even tells us the ID of the container that's using that name.
>
> **[6:29](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=389)** So, what we need to do here is simply delete that container, and then rerun docker run again.
>
> **[6:36](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=396)** So to do that, I'm just going to type docker rm, and then the name of the container, which is app container.
>
> **[6:44](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=404)** And now it's gone and now I can run docker run again.
>
> **[6:47](https://www.linkedin.com/learning/learning-docker-17236240/solution-fix-a-broken-container?u=76281980&t=407)** And as you can see, our application processing messages appeared immediately, and it finished almost immediately, which is exactly what we expected.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (30), find (4), rm (2), make (1)
> **Code Keywords:** let (12), delete (2), this. (1)
> **Tools:** terminal (6), vim (1)
> **Cross-References:** go back to (3)
> **Env Vars:** cpu (2)
> **Exercise Files:** exercise file (1), exercise files (1)
> **UI Navigation:** open the (1)
> **Definitions:** means that (1)


### 5. Additional Docker Resources

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Docker best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=0)** - Docker is awesome.
>
> **[0:02](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=2)** In my experience, it has made writing software for multiple systems and platforms a breeze.
>
> **[0:08](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=8)** I hope that you enjoyed learning all about Docker and how to use it.
>
> **[0:12](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=12)** Now that you're ready to move your apps into Docker, there are three best practices I always recommend considering.
>
> **[0:19](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=19)** You are probably going to be downloading a bunch of images from Docker Hub.
>
> **[0:23](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=23)** We saw earlier that it is really easy to create an account and upload your own images.
>
> **[0:29](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=29)** While this is very flexible and makes using Docker very easy, it is also very easy to download Docker images that cause harm to your systems or business.
>
> **[0:38](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=38)** This is especially true if you're using these images as a base for creating your own images.
>
> **[0:45](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=45)** There are many examples of developers getting hacked or having their credentials stolen from using malicious Docker images.
>
> **[0:51](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=51)** Trend micro reported an interesting example of this in 2020.
>
> **[0:55](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=55)** An image called Alpine 2 was uploaded to the Docker Hub.
>
> **[1:00](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=60)** Since Alpine is a very popular Docker image, many developers were confused and downloaded the Alpine 2 image instead.
>
> **[1:08](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=68)** Unfortunately, while Alpine 2 indeed ran Alpine Linux, it also configured containers to run a crypto miner on startup.
>
> **[1:17](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=77)** If such a container ran on a platform that charges you for outbound network traffic, like AWS, this would become a very expensive mistake.
>
> **[1:27](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=87)** One way to avoid this is to always use Docker Hub images that are verified.
>
> **[1:32](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=92)** Verified image have an official Docker image designation on them to let you know that they are scanned and vetted by Docker themselves.
>
> **[1:40](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=100)** The Ubuntu image is a great example of that.
>
> **[1:43](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=103)** It is very easy to see its designation on Docker Hub.
>
> **[1:46](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=106)** Unfortunately, there are a ton of safe images that are not verified out there.
>
> **[1:52](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=112)** How do you know which are safe and which aren't?
>
> **[1:55](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=115)** Fortunately, tools called image scanners solve this problem.
>
> **[1:59](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=119)** Container image scanning tools inspect each layer of Docker images and warn you about layers that are known to be malicious, as well as layers that have files in them that might be harmful.
>
> **[2:10](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=130)** Clair, Trivy, and Dagda are some examples of open source image scanners you can use for free.
>
> **[2:17](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=137)** Paid options exist as well.
>
> **[2:19](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=139)** We learned that Docker images will have a version tag of latest by default if one is not provided after running Docker build.
>
> **[2:27](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=147)** While this is mostly fine for local development, this can be a problem for images that will be uploaded into the Docker Hub for three reasons.
>
> **[2:35](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=155)** First, you don't know which version of an application you're getting when you download an image that is tagged with latest.
>
> **[2:41](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=161)** Second, the version can change out from under you when you pull the image again in the future.
>
> **[2:47](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=167)** It would be really unfortunate to have an application and production break because a version of a dependency changed without you knowing.
>
> **[2:54](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=174)** Finally, version tags can be overridden when you push them into the Docker Hub.
>
> **[2:59](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=179)** This makes rolling back to previous versions difficult if you only use latest sets of version tag.
>
> **[3:04](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=184)** For these reasons, I always recommend putting a version tag when creating images, even if they are local.
>
> **[3:12](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=192)** It's easy, quick, and solves a lot of problems in the future.
>
> **[3:16](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=196)** We learned that Docker containers run as the root user by default.
>
> **[3:20](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=200)** This makes security teams nervous and gives applications the ability to cause a lot of harm both within the container and outside of it.
>
> **[3:28](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=208)** To avoid this, I recommend running containers as a user other than root.
>
> **[3:33](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=213)** You can do this for your own images as well as for containers created from existing images.
>
> **[3:38](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=218)** For containers created from other images, specify the dash dash user option when running Docker Run or Docker Container Create.
>
> **[3:47](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=227)** You can use Linux user IDs or actual names.
>
> **[3:51](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=231)** This can cause problems with images whose applications assume that they are running as root.
>
> **[3:55](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=235)** You might need to write additional automational work around that.
>
> **[3:58](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=238)** For your own images, you can specify the user command within your Docker file to tell Docker which user to run your application as by default.
>
> **[4:07](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=247)** You can make certain sections of your Docker file run as root and others run as non-root.
>
> **[4:11](https://www.linkedin.com/learning/learning-docker-17236240/docker-best-practices?u=76281980&t=251)** It is quite flexible.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (24), aws (1), make (1)
> **Code Keywords:** default. (2), let (1), finally, (1), this, (1)
> **Definitions:** is a  (2)
> **Env Vars:** aws (1)
> **Speakers:** - docker (1)

#### Taking it to the next level with Docker Compose
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=0)** - As we've seen, Docker works really well for running single applications.
>
> **[0:04](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=4)** But what happens when you have an application that relies on multiple components that are running separately?
>
> **[0:09](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=9)** Here's a typical example.
>
> **[0:11](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=11)** You have a web application that relies on APIs or backend services on an application server.
>
> **[0:17](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=17)** The application server stores stuff in a database, which is used by the APIs to return information back to the web app.
>
> **[0:24](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=24)** You would like to deploy all of these systems as Docker containers to make it easier to test and scale your app.
>
> **[0:31](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=31)** At first, you might think, what if I just roll them all into a single Docker image?
>
> **[0:36](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=36)** The problem with this is that Docker containers are really meant to run one application at a time.
>
> **[0:42](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=42)** While you could hack your Docker image to run multiple applications within a container, you run the risk of losing data or experiencing unpredictable behavior.
>
> **[0:52](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=52)** Okay, so I can't run them all in a single container.
>
> **[0:56](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=56)** What if I just start multiple containers and connect them together, might be your next thought, and it's a good one.
>
> **[1:03](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=63)** While we didn't talk about this in this course, you can run multiple containers and connect them all through virtual networks and separate data volumes managed entirely by the Docker engine.
>
> **[1:13](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=73)** This is a great way to implement a three-tier architecture, like the one our web app is using.
>
> **[1:19](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=79)** However, having to run tons of Docker CLI commands to make all of this work can get tedious and frustrating.
>
> **[1:26](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=86)** Fortunately, Docker Compose is here to help.
>
> **[1:29](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=89)** Docker Compose is a tool provided by Docker that makes it really easy to run and connect multiple containers on a single machine.
>
> **[1:37](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=97)** With Compose, you use a single file called the Compose Manifest to define all of your containers and how they relate to each other.
>
> **[1:45](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=105)** Starting those containers together is as easy as running Docker-compose up.
>
> **[1:50](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=110)** I love using Docker-compose for quickly integrating entire app infrastructures locally.
>
> **[1:55](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=115)** This has been really helpful for running integration or end-to-end tests without having to depend on the network which can be unreliable.
>
> **[2:03](https://www.linkedin.com/learning/learning-docker-17236240/taking-it-to-the-next-level-with-docker-compose?u=76281980&t=123)** Check out docs.[docker.com/compose](https://docker.com/compose) if you're interested in getting started with compose.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (13), make (2)
> **Definitions:** is a  (2)
> **URLs:** [docker.com](https://docker.com) (1)
> **Env Vars:** cli (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - as (1)

#### Level up even more with Kubernetes
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=0)** - Docker makes it easy to run containers in a single system.
>
> **[0:03](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=3)** Unfortunately, things get complicated really quickly once you're running hundreds or thousands of containers in production.
>
> **[0:10](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=10)** While you can link containers together with Docker networks, these networks do not span multiple hosts by default.
>
> **[0:17](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=17)** You can also use the Docker CLI to talk to Docker engines running on remote hosts but it is quite cumbersome, especially when authentication comes into play.
>
> **[0:26](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=26)** Docker also does not have built-in solutions for moving containers between hosts or auto-scaling containers to respond to load.
>
> **[0:33](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=33)** Finally, higher-level concerns like securing traffic between containers or configuring load balancing and routing amongst them are outside of Docker's realm of responsibility.
>
> **[0:43](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=43)** At best, this can make using Docker alone for production-type workloads really, really complex.
>
> **[0:49](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=49)** At worst, it can increase security risk, decrease performance, and make your infrastructure more susceptible to downtime.
>
> **[0:56](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=56)** Container orchestrators solve these problems.
>
> **[0:59](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=59)** Orchestrators use scheduling techniques, networking magic, and service discovery tools to make scaling, moving, and routing traffic to containers really, really easy.
>
> **[1:10](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=70)** If you've ever used VMware's vCenter or tools like Rundeck, you're already familiar with the basic idea.
>
> **[1:17](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=77)** Many container orchestrators have popped up over the years.
>
> **[1:20](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=80)** Docker's own Swarm product, Mesosphere, HashiCorp's Nomad, and cloud offerings like AWS Elastic Container Service or Azure Container Service are examples of some popular container orchestrators in the wild.
>
> **[1:33](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=93)** However, the most popular container orchestrator in the market today is the Kubernetes project.
>
> **[1:38](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=98)** Let's learn a little bit more about it.
>
> **[1:41](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=101)** Kubernetes describes itself as a planet-scale container orchestrator for automating the deployment, scaling, and management of containerized applications.
>
> **[1:51](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=111)** There are a number of features that Kubernetes provides that makes this possible.
>
> **[1:55](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=115)** First, Kubernetes is a distributed system.
>
> **[1:58](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=118)** It is designed from the ground up to run its components and store their data across many machines.
>
> **[2:04](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=124)** This makes it capable of running and connecting hundreds of thousands of containers seamlessly as if they were all running on one machine.
>
> **[2:12](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=132)** This also makes Kubernetes possible to run on almost anything from Raspberry Pis to some of the largest cloud platforms in the world.
>
> **[2:20](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=140)** Second, Kubernetes makes it really easy to group containers together, kind of like Docker Compose.
>
> **[2:26](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=146)** You can also use Kubernetes to scale those container groups up or down to respond to your application's demands without creating more VMs or other hardware.
>
> **[2:35](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=155)** This is typically expensive and sometimes cumbersome but much cheaper to do with Kubernetes.
>
> **[2:41](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=161)** Third, Kubernetes also makes it really easy to secure traffic within your container networks and to or from the outside world.
>
> **[2:49](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=169)** You can use Kubernetes to provide specific rules about how your traffic to or from your containers is routed.
>
> **[2:56](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=176)** You can even use Kubernetes to route traffic based on URLs, just like API gateways.
>
> **[3:01](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=181)** Finally, Kubernetes can be used as a platform of platforms.
>
> **[3:06](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=186)** The Kubernetes ecosystem is one of the things I love most.
>
> **[3:09](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=189)** New tools and products to extend Kubernetes are created almost every day.
>
> **[3:14](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=194)** These tools make Kubernetes even more powerful and flexible for all sorts of use cases.
>
> **[3:19](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=199)** You can also use these tools to customize almost every detail of how your company's applications deploy and run.
>
> **[3:26](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=206)** If Docker is like putting everything you need to make a meal in a box, Kubernetes is like a delivery service for your boxed meals.
>
> **[3:33](https://www.linkedin.com/learning/learning-docker-17236240/level-up-even-more-with-kubernetes?u=76281980&t=213)** Just like how a delivery service clones and ships meals worldwide, Kubernetes makes managing even hundreds of thousands of containers a breeze.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (10), make (5), aws (1)
> **Code Keywords:** finally, (2), default. (1), let (1)
> **Env Vars:** cli (1), aws (1), api (1)
> **Analogies:** just like (2), kind of like (1)
> **Code Identifiers:** vcenter (1)
> **Definitions:** is a  (1)
> **Speakers:** - docker (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Until next time
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980&t=0)** - We made it to the end of the course.
>
> **[0:02](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980&t=2)** Great work!
>
> **[0:03](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980&t=3)** We learned about how containers are taking over the world of software development and why Docker has become immensely popular over the years.
>
> **[0:11](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980&t=11)** We installed Docker Desktop and a Docker command line client and used them to explore creating, maintaining, troubleshooting, and removing containers.
>
> **[0:20](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980&t=20)** Finally, we now know the basics of turning our app into a Docker image and uploading it into the Docker Hub.
>
> **[0:26](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980&t=26)** Now that we know how to use Docker, be sure to give Docker Compose a try if you're interested in running clusters of apps as containers on your machine.
>
> **[0:33](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980&t=33)** When you're ready, take your skills to the next level by learning how to run tons of containers with Kubernetes.
>
> **[0:39](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980&t=39)** Knowing how to use the containers is an essential skill and a highly marketable skill in today's ever-changing tech world.
>
> **[0:45](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980&t=45)** Be sure to keep practicing your newly acquired expertise.
>
> **[0:49](https://www.linkedin.com/learning/learning-docker-17236240/until-next-time-17234421?u=76281980&t=49)** Good luck and enjoy the journey!

> [!info]- Semantic Content
>
> **CLI Commands:** docker (7)
> **Tools:** docker desktop (1), command line (1)
> **Code Keywords:** finally, (1)
> **Definitions:** is an  (1)
> **Speakers:** - we (1)


## Resources

- Exercise files available

## Skills Covered

- Docker Products

## Path Context

### In [[The Top 10 Most Popular Courses among Engineering Professionals]]
**1 of 10** | [[React Essential Training]] →

### In [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
**1 of 10** | [[Learning Kubernetes]] →

### In [[Containerize Applications with Docker]]
**1 of 2** | [[Docker Essential Training]] →

### In [[Docker Foundations Professional Certificate]]
**1 of 3** | [[Docker- Your First Project]] →

## Part of

- [[Docker Foundations Professional Certificate]]

## Appears In

- [[The Top 10 Most Popular Courses among Engineering Professionals]]
- [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
- [[Containerize Applications with Docker]]
- [[Docker Foundations Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Introduction to Docker for Java Developers]] — Docker Products
- [[Learning Docker Compose]] — Docker Products
- [[Docker- Your First Project]] — Docker Products
- [[Docker Essential Training]] — Docker Products

---

[↑ Back to top](#)