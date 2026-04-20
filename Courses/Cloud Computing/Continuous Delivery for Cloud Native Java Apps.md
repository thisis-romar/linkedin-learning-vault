---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: continuous-delivery-for-cloud-native-java-apps
url: "https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps"
duration_minutes: 201
duration: 3h 21m
level: Intermediate
updated: 1/20/2022
learners: 128720
skills:
  - Cloud-Native Applications
  - Continuous Delivery (CD)
  - Java
exercise_files: true
github: "https://github.com/LinkedInLearning/continuous-delivery-cloud-native-java-apps-2423655"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGrdDQ5bO2vug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1642536526853?e=2147483647&amp;v=beta&amp;t=A4-RNm5DdHN2LseGJhPN2L2JfEhHQ4lDyVxZUItJmhg"
linkedin_topic: Cloud Computing
learning_paths:
  - Building Your Java Skills
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/cloud-native-applications
  - skill/continuous-delivery-cd
  - skill/java
status: not-started
created: 2026-04-19
---

![Continuous Delivery for Cloud Native Java Apps](https://media.licdn.com/dms/image/v2/C560DAQGrdDQ5bO2vug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1642536526853?e=2147483647&amp;v=beta&amp;t=A4-RNm5DdHN2LseGJhPN2L2JfEhHQ4lDyVxZUItJmhg)

# Continuous Delivery for Cloud Native Java Apps

> Throughout its history, Java has continuously evolved to embrace and adapt to new innovations, from cloud to containers to microservices. This transformation has changed the way teams build and deliver Java applications, and in this course, Kevin Bowersox explains how to establish a continuous delivery pipeline to automate the release process for your applications. Kevin shows how to integrate pop

> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps) | 3h 21m | Intermediate | 129K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Kevin Bowersox]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/continuous-delivery-cloud-native-java-apps-2423655)

## Skills Covered

- Cloud-Native Applications
- Continuous Delivery (CD)
- Java

## Table of Contents

### Introduction

#### Delivering modern Java applications
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivering-modern-java-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivering-modern-java-applications?u=76281980&t=0)** - [Instructor] The evolution of Java applications over the past 25 years is extraordinary.
>
> **[0:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivering-modern-java-applications?u=76281980&t=6)** The language and its surrounding technologies have adapted to embrace new innovations like cloud, containers and microservices.
>
> **[0:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivering-modern-java-applications?u=76281980&t=15)** If you haven't followed every twist and turn in this journey, it can be overwhelming when you start to explore these new tools and techniques for delivering software.
>
> **[0:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivering-modern-java-applications?u=76281980&t=24)** Hi, I'm Kevin Bowersox.
>
> **[0:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivering-modern-java-applications?u=76281980&t=26)** Using continuous delivery practices, I've automated the release processes for many applications that run inside containers on Kubernetes.
>
> **[0:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivering-modern-java-applications?u=76281980&t=36)** In this course, I'll show you how tools like Maven, Jenkins and Docker work together to build and package modern Java apps.
>
> **[0:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivering-modern-java-applications?u=76281980&t=45)** You'll also learn how emerging tools like Kustomize and Argo CD are used to automate their deployments.
>
> **[0:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivering-modern-java-applications?u=76281980&t=52)** After watching this course, you'll have a new toolset that will accelerate your team's release cadence without sacrificing the stability of your application.
>
> **[1:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivering-modern-java-applications?u=76281980&t=62)** So if you're ready, join me on my LinkedIn Learning course to learn how continuous delivery can help you deliver cloud native Java applications.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (1), cd (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we take a closer look at how to build and deliver Java apps, let's talk a bit about who this course is for and what you should know ahead of time.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=10)** The course is designed for Java developers and operations engineers that are responsible for delivering changes to Java applications.
>
> **[0:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=19)** It explores the techniques, platforms, and tools used to create an automated delivery process for modern Java apps.
>
> **[0:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=27)** The course focuses on the mechanics of an automated pipeline and while we'll discuss testing and verification, the hands-on lessons do leave this part out just to keep things concise.
>
> **[0:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=40)** That's because there's a lot of technologies packed into the course that stack on top of each other.
>
> **[0:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=46)** And that brings me to my next point.
>
> **[0:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=48)** If you're just beginning to learn Java, or you're not familiar with tools like Git, there might be better courses for you at this point.
>
> **[0:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=56)** To help us work with these technologies.
>
> **[0:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=59)** I've created a lab environment within an Ubuntu virtual machine.
>
> **[1:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=63)** To run the lab you'll need Virtual Box, Vagrant, and the Vagrant virtual box plugin installed on your workstation.
>
> **[1:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=71)** The lab has quite a bit of software installed for us to practice delivering modern applications.
>
> **[1:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=77)** You'll get hands-on experience with each of these technologies if you follow along with the lessons.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=84)** If you do intend to complete the hands-on lessons, you'll need a workstation with a bit of horsepower.
>
> **[1:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=90)** At a minimum, I would recommend allocating eight gigabytes of RAM and three CPUs to the virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=97)** If your machine doesn't meet these requirements, there's still quite a bit you can learn from just watching the course.
>
> **[1:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=104)** So that's what you need to know.
>
> **[1:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=105)** Let's dive into the lessons.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** git (1)
> **Env Vars:** ram (1)
> **Speakers:** - [instructor] (1)

#### Lab setup
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=0)** - [Instructor] If you'd like to follow along, with the hands-on lessons in the course, you'll need to set up the lab environment.
>
> **[0:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=6)** To do that, we'll need two pieces of software.
>
> **[0:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=9)** The first one is VirtualBox.
>
> **[0:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=11)** We'll use it to launch our Ubuntu virtual machine, that contains the lab.
>
> **[0:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=16)** To get started with the VirtualBox install, just click on the downloads link, on the VirtualBox homepage.
>
> **[0:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=22)** And then from there, you'll scroll down, until you find this link, for VirtualBox older builds.
>
> **[0:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=28)** Here, you'll want to select VirtualBox 6.1 and then you'll find the download links, for various operating systems.
>
> **[0:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=36)** Go ahead and select the right operating system for you.
>
> **[0:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=39)** I'm going to choose Windows, and that will start to download the software.
>
> **[0:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=44)** While that's downloading, let's take a look at our next piece of software.
>
> **[0:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=47)** Which is Vagrant.
>
> **[0:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=49)** The lab is packaged as a Vagrant box.
>
> **[0:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=52)** And we'll use Vagrant to spin it up.
>
> **[0:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=54)** So to get started with Vagrant, click on the download button on the homepage, and then scroll down until you find this drop-down.
>
> **[1:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=62)** Here you'll want to select, Vagrant 2.2.18 and then select the link, for your operating system.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=70)** I'll go ahead and choose Windows once again.
>
> **[1:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=73)** Now I'm not going to walk you through, the installation for both of these pieces of software.
>
> **[1:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=78)** They both have installers, and it's fairly straightforward, to get up and running.
>
> **[1:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=82)** Just select all the default options.
>
> **[1:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=85)** Once you've done that installation, you can navigate into the exercise files for the course.
>
> **[1:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=90)** Now let's talk about these files some.
>
> **[1:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=93)** Here you'll see the source code, for each of the microservices, within our course project.
>
> **[1:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=99)** Now one thing that you need to know, is that the lab environment contains, the initial copy of these exercise files.
>
> **[1:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=108)** But you won't be able to go through, and switch the branches for the different lessons, within the lab.
>
> **[1:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=114)** You'll have to do that, on your local workstation, and then copy the changes for a specific lesson, over into the lab.
>
> **[2:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=122)** Okay now that we walk through that, let's talk about how we can spin up the lab.
>
> **[2:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=127)** Inside of the exercise files, you'll find the lab setup directory.
>
> **[2:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=131)** Let's go ahead, and we can open that in a terminal.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=134)** I'm going to use get bash.
>
> **[2:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=136)** Once you've opened the directory, inside the terminal, go ahead and take a look at the Vagrant file.
>
> **[2:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=143)** It's what's going to tell Vagrant, how to spin up our lab environment.
>
> **[2:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=147)** Now you can leave everything as is, but you may need to adjust some of the memory settings here, for your machine.
>
> **[2:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=154)** You can see that I'm running with 16 gigs of Ram, and six CPUs.
>
> **[2:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=159)** But you can scale this down, to eight gigs of Ram and four CPUs.
>
> **[2:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=164)** (keyboard clicking) Now before we launched the lab, we'll need to install a Vagrant plugin.
>
> **[2:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=170)** That plugin, is the Vagrant-vbguest plugin.
>
> **[2:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=173)** It's going to help Vagrant work with VirtualBox.
>
> **[2:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=177)** So let's go ahead.
>
> **[2:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=178)** We can install the plugin.
>
> **[3:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=181)** Okay it looks like the plugin has installed.
>
> **[3:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=184)** And now we can just go ahead, and use Vagrant to launch the VirtualBox, by issuing the Vagrant up command.
>
> **[3:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=192)** Now once we execute this command, Vagrant will start to launch, our virtual machine, containing the lab environment.
>
> **[3:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=199)** It can take anywhere between 10 and 45 minutes, depending upon the speed of your network connection.
>
> **[3:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=205)** So you'll want to keep an eye on it, in case there's a dialogue where you'll have to click okay.
>
> **[3:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=210)** While we wait for the lab to spin up, let's go ahead, and we can get started on some of our lessons.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), switch (1)
> **UI Navigation:** click on (2), scroll down (2), select the (2)
> **Prerequisites:** install (3), you'll need (1), set up (1), setup (1)
> **Exercise Files:** exercise files (3), download the (1), source code (1)
> **CLI Commands:** find (4)
> **Tools:** terminal (2), bash (1)
> **Versions:** 6.1 (1), 2.2.18 (1)
> **Speakers:** - [instructor] (1)


### 1. Foundations of Continuous Delivery

#### What is continuous delivery?
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=0)** - [Instructor] Before diving into the techniques and technologies used to deliver Java applications, let's discuss the big picture of what we're trying to achieve by practicing continuous delivery.
>
> **[0:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=13)** Continuous delivery is a bit of a mindset shift from what you might've learned about delivering software early in your career.
>
> **[0:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=21)** In my college coursework, I was taught the five sequential phases of the software development lifecycle.
>
> **[0:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=27)** The first three phases focused on building the entire product and then the final two phases would test and deploy everything that was built.
>
> **[0:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=36)** This approach worked in the past, but in today's fast-paced environment, it has some drawbacks.
>
> **[0:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=43)** First, towards the end of the development phase, all the code was merged together in one big integration effort.
>
> **[0:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=51)** This could take weeks or months until you actually had a working piece of software.
>
> **[0:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=57)** Second, most of the feedback on the product came later in the process during the testing phase where it takes longer and costs more to fix an issue with the code.
>
> **[1:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=68)** Continuous delivery challenges this idea that software should be developed, tested and delivered sequentially in large chunks.
>
> **[1:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=78)** It introduces a set of practices that teams use to evolve their software gradually through the frequent delivery of small incremental changes.
>
> **[1:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=88)** That means you'll be performing releases more often, which can sound a bit scary, but automation can help you safely repeat the practice.
>
> **[1:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=98)** All of these changes are routinely delivered using an automated pipeline that builds, tests and deploys each new version of the software.
>
> **[1:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=108)** That part about testing is important because it validates every change we make to the software.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=115)** This helps ensure that the pipeline only delivers working software that's ready for release.
>
> **[2:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=122)** When teams follow these practices, it changes their delivery cadence.
>
> **[2:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=127)** Here, you see a typical quarterly cadence, which has some drawbacks.
>
> **[2:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=131)** The cycle time is extended, so we're tempted to cram a bunch of changes into the iteration and release them all at once.
>
> **[2:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=140)** This increases the probability that something will go wrong at deployment time.
>
> **[2:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=146)** Also, the feedback that we receive about the software from acceptance testers and users is limited because the changes only become visible towards the end of the cycle right before we release everything.
>
> **[2:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=159)** With continuous delivery, teams fall into a cadence where releasing software changes becomes a frequent part of their routine.
>
> **[2:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=167)** It's not this big event that everybody gets stressed over.
>
> **[2:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=171)** Each change can be released independently or as part of a small batch.
>
> **[2:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=177)** This helps reduce the potential for things to go wrong when we deploy the software.
>
> **[3:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=182)** The shorter cycle times and introduction of automation creates tremendous benefits for teams and businesses.
>
> **[3:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=190)** It increases the speed at which we deliver software and allows new features to come to market faster.
>
> **[3:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=197)** It also improves quality because automated testing and increased visibility of the software creates feedback loops that provide information we can use to improve the product constantly.
>
> **[3:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=211)** By automating deployment procedures and exercising them more frequently, teams become comfortable performing releases.
>
> **[3:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=219)** This helps increase the overall stability of the system.
>
> **[3:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=224)** When applied carefully, continuous delivery is an approach for delivering software that will help your team more quickly and safely provide value to your business.
>
> **[3:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=235)** Adopting the approach starts with shifting your mindset.
>
> **[3:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=239)** So in our next lesson, we'll explore the underlying principles of continuous delivery.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Cross-References:** later in (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Principles of continuous delivery
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=0)** - [Presenter] There are several principles that a successful continuous delivery approach is built upon.
>
> **[0:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=5)** Let's explore them to learn how they influence the practices teams use to deliver software.
>
> **[0:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=12)** The first principle requires that a repeatable process has been engineered for how we develop, build and release our software.
>
> **[0:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=20)** So each time we develop and release a new feature, the same set of steps are repeated without any variation.
>
> **[0:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=28)** This establishes consistency within our release procedures that allows the steps to be translated into code.
>
> **[0:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=36)** So repetitive tasks like builds, tests and deployments are codified so they can be executed by automated processes running on computers.
>
> **[0:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=47)** This takes the burden of executing them off of people, but it doesn't mean the people will be replaced.
>
> **[0:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=53)** It just frees them up to focus on more valuable work.
>
> **[0:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=57)** That takes us to version control, which is the single source of truth for project artifacts like source code, scripts and configuration files.
>
> **[1:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=67)** Placing these artifacts in diversion control allows the team and automation to collaborate better because everything related to the project is in one managed location that is accessible to everyone.
>
> **[1:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=80)** It's also the point where developers commit many small changes, and that event of committing triggers their delivery through the automated pipeline.
>
> **[1:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=90)** Keeping changes small in size and numbers does two important things.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=95)** First, releases become more frequent, stable and less stressful because we exercise the practice more often.
>
> **[1:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=103)** Second, risk actually decreases because we're not releasing multiple large change sets all at once.
>
> **[1:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=110)** This means there's a lot less that can go wrong with a release.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=115)** If a problem does arise, it's easier to restore the system because we can easily identify the problem amongst the smaller batch and resolve it.
>
> **[2:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=125)** This leads us to our final three principles, which help us avoid those types of problems in the first place.
>
> **[2:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=132)** To do this, we engineer quality into the delivery process to verify each change that flows through it is production-worthy.
>
> **[2:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=141)** This is achieved by shifting practices like linting and automated testing to the front of the process, where we can identify and fix problems earlier.
>
> **[2:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=150)** So we'll no longer discover a bunch of issues in the final days before release, when it's too late to actually fix them.
>
> **[2:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=159)** Continuous delivery also focuses on the quality of the team's delivery processes, which are constantly re-engineered and improved upon.
>
> **[2:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=168)** If something does go wrong within the process, the situation is evaluated, and ideas from across the organization are collected to introduce better practices that fix the problem in the long term and prevent it from ever happening again.
>
> **[3:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=184)** The release process is constantly evolving to optimize its stability and ultimately the quality of the software it delivers.
>
> **[3:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=193)** That doesn't happen in a vacuum.
>
> **[3:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=195)** It requires collaboration from everyone involved with developing, testing and releasing the software.
>
> **[3:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=202)** So regardless of whether you work on a development, testing or operations team, in continuous delivery, you have a common goal to release higher quality software faster and more reliably.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [presenter] (1)

#### Continuous integration, delivery, and deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=0)** - [Presenter] Continuous delivery is closely related to the practices of continuous integration and continuous deployment.
>
> **[0:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=7)** These three concepts commonly fall under the umbrella of the term CICD.
>
> **[0:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=13)** It gets a little bit confusing because continuous delivery and continuous deployment are often used interchangeably and have the same acronym.
>
> **[0:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=22)** So let's first unpack these terms then we'll talk about the different ways that people use them.
>
> **[0:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=29)** When teams practice continuous integration, they develop small changes that are frequently merged into a shared branch in their code repository.
>
> **[0:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=38)** The goal is for developers to commit to this branch at least once per day, but ideally they're checking in multiple times each day.
>
> **[0:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=47)** Each of these small commits triggers the automated pipeline, which pulls the source code from the repository onto a separate server where it's compiled and tested.
>
> **[0:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=58)** If an issue is detected by the automated tests or the automated build breaks, the developer is notified immediately by the pipeline.
>
> **[1:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=67)** At this point, getting the code base back to a working state becomes the top priority and they stop everything they're working on to fix it.
>
> **[1:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=76)** If the test pass, the software's packaged into an artifact and placed into a repository.
>
> **[1:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=83)** After the CI process builds this artifact, continuous delivery and continuous deployment enter the picture.
>
> **[1:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=90)** However, these practices are a little bit less straightforward.
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=94)** In general, both concepts relate to the automated steps within a pipeline that deliver the packaged artifact produced by the CI process into the production environment.
>
> **[1:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=106)** The difference between the two is how much automation is built into the pipeline.
>
> **[1:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=112)** Teams practicing continuous delivery will automate everything but the last step in the process that deploys the artifact into production.
>
> **[2:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=121)** With continuous delivery, this step must be manually triggered, typically by pushing a button or merging a branch, which causes the release of the new version into production.
>
> **[2:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=132)** Continuous deployment is very similar.
>
> **[2:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=135)** However, that last step which deploys the software into production, it's fully automated.
>
> **[2:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=141)** One way to picture it is to think of each practice taking the automation further or extending it further into the delivery process.
>
> **[2:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=150)** There's a lot of ways we can think about it and often there's a bit of confusion between continuous delivery and continuous deployment, because the two terms are used in a variety of different ways.
>
> **[2:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=162)** Sometimes you'll hear continuous integration, delivery and deployment referred to as separate steps or processes that execute sequentially, one after the other.
>
> **[2:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=173)** Other times, you'll hear continuous delivery and deployment referred to as interchangeable processes where we can select one or the other to perform after continuous integration.
>
> **[3:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=185)** To add to the confusion, continuous delivery is sometimes referred to as an overarching process where continuous integration and deployment are executed as sub-processes within it.
>
> **[3:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=197)** In discussions regarding CICD, it's important to be flexible with the terminology, because these processes have unique meanings for different teams and organizations.
>
> **[3:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=209)** It's tempting to look for one official CICD pattern that applies in every scenario, but it's just a path that leads to frustration because it doesn't exist.

> [!info]- Semantic Content
>
> **Env Vars:** cicd (3)
> **Code Keywords:** let (1), pass (1)
> **Analogies:** picture (2)
> **Exercise Files:** source code (1)
> **Speakers:** - [presenter] (1)

#### Delivery pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=0)** - [Instructor] Without automation, the end to end process for releasing a new feature can be drawn out and cumbersome, which can get pretty frustrating for everybody involved.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=10)** Within a large enterprise, it typically includes multiple handoffs between the development, testing, security and operations teams, which each have a step to complete in the process.
>
> **[0:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=22)** These handoffs can spill over into lengthy email chains about who's on vacation or when a particular task will be completed.
>
> **[0:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=30)** This tedious process prolongs the delivery of new features, and it becomes a scramble to make the release state.
>
> **[0:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=37)** In continuous delivery, a pipeline is used to accelerate and remove waste from the process that takes new code from version control and makes it available as a new feature for end users.
>
> **[0:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=49)** The pipeline models each step in the delivery process and automates them to create a rapid, repeatable and reliable mechanism for releasing changes to software.
>
> **[1:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=60)** It's designed to identify quality issues and fail quickly once they're discovered.
>
> **[1:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=66)** This gives us more confidence in the software that's delivered by the pipeline.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=70)** It's important to point out that every organization's pipeline will look different because it will be tailored for their organizational processes.
>
> **[1:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=78)** So let's take a look at a very basic delivery process and examine where the pipeline fits in.
>
> **[1:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=85)** In this process, we have three phases.
>
> **[1:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=88)** One for the developer workflow, another for continuous integration, and finally, one for continuous delivery or deployment.
>
> **[1:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=96)** A change enters the pipeline after a developer has written and committed the code for a new feature into the source code repository.
>
> **[1:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=104)** From there, the pipeline advances to the new version of the source code through the steps in the continuous integration process, which outputs an artifact that packages the new version of the software.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=115)** Next, the pipeline progresses through the steps in the continuous delivery or deployment stage.
>
> **[2:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=122)** This makes the new software available to end users.
>
> **[2:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=125)** If a step anywhere in the pipeline fails, the change stops advancing through it, and feedback is delivered to the developer regarding the issue with their new feature.
>
> **[2:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=136)** These feedback mechanisms are built in throughout the pipeline, so developers quickly get information about the quality of their software.
>
> **[2:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=145)** As we complete each step in the process, more confidence in the artifact builds as we get closer to releasing it to production.
>
> **[2:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=154)** So that's the pipeline at a high level.
>
> **[2:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=157)** Basically, it models the end-to-end process for releasing a software change and facilitates its execution through a heavy dose of automation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **Exercise Files:** source code (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Modern Java applications
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=0)** - [Instructor] Since the inception of Java, a number of shifts in technology have influenced the way that we build, deliver, and operate modern Java applications.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=10)** These shifts are best summarized by the term "cloud native", which is used to describe software that is highly distributed, modular, and resilient.
>
> **[0:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=19)** Let's quickly walk through the changes that caused Java applications to evolve towards this approach.
>
> **[0:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=26)** As we've briefly discussed, a waterfall methodology was once the standard used to deliver an app.
>
> **[0:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=33)** This approach was painful, especially towards the end of the project when all of the code needed to be integrated together in one big messy merge.
>
> **[0:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=42)** If the project actually survived that phase, major problems would then occur when the software was thrown over the wall to the testing and operations teams.
>
> **[0:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=53)** It also wasn't very flexible.
>
> **[0:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=55)** If the customer's needs changed in the middle of a project, you just kept on building what you agreed to a few quarters ago.
>
> **[1:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=62)** So at the end of the project you ran the risk of delivering the wrong product.
>
> **[1:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=68)** This led teams to adopt new ways of delivering software like Agile and DevOps.
>
> **[1:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=73)** Agile complements continuous delivery very well because the idea is to develop in iterations where work is broken down into smaller pieces.
>
> **[1:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=83)** So it naturally produces the small changes that we want to deliver through a CI/CD pipeline.
>
> **[1:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=90)** DevOps also emerged slightly after Agile.
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=94)** It advocated for best practices like early collaboration between development, quality assurance, and operations teams.
>
> **[1:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=102)** In fact, one of the key practices in a DevOps approach is to automate common testing and operations tasks into a CI/CD pipeline so you can deliver faster.
>
> **[1:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=113)** One of the historical barriers to delivering faster was the amount of time it took to provision or change infrastructure in a corporate data center.
>
> **[2:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=123)** Getting a new virtual machine or changing a network firewall could easily delay a project schedule for weeks or months until the changes were approved and manually performed.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=134)** The emergence of cloud platforms changed this equation.
>
> **[2:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=138)** Now virtual machines can be provisioned in seconds and easily scaled up if they require more resources.
>
> **[2:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=145)** The cloud also made many capabilities like networking and security available as easy to use services that operate at a global scale.
>
> **[2:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=155)** New technologies also emerged that changed how applications were packaged and deployed.
>
> **[2:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=162)** Traditionally, Java applications in the enterprise were deployed to application servers that were bundled within bloated middleware platforms that were expensive proprietary technologies.
>
> **[2:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=174)** Often these platforms were not configured the same in different environments and the one-off configurations could cause a release to fail.
>
> **[3:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=183)** The introduction of container-based technologies like Docker and Kubernetes changed how we package Java applications.
>
> **[3:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=191)** Using containers, we can package applications and their environments together, which simplifies how we deploy and run them.
>
> **[3:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=199)** This made it more feasible to build distributed systems and engineers now had another option besides the traditional monolith.
>
> **[3:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=208)** Monoliths are still a valid architecture in many scenarios, but their bulkiness doesn't promote the rapid delivery of changes that we hope to achieve with continuous delivery.
>
> **[3:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=220)** Highly de-coupled microservices have emerged as the best approach for teams that want to deploy small portions of their system frequently.
>
> **[3:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=229)** Microservice architectures consists of small services that can be developed and deployed independently of one another, which allows our systems to be changed more easily.
>
> **[4:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=241)** These evolutions, which we'll refer to as the cloud native approach, have caused fundamental changes for how we build and deliver modern Java applications.
>
> **[4:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=251)** As we walk through the different phases in the delivery process throughout our course project, I'll highlight where the cloud native approach has influenced delivery practices.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (2), docker (1)
> **Code Keywords:** let (1), require (1)
> **Speakers:** - [instructor] (1)


### 2. Developing Modern Java Apps

#### Developer workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=0)** - [Instructor] Let's walk through the steps in the development workflow to better understand how it fits into an end-to-end delivery process.
>
> **[0:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=8)** To do this, we'll return back to the basic delivery process that we explored in the last lesson.
>
> **[0:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=14)** Although it's technically not part of the pipeline, a developer's workflow plays an important role in the delivery process because within it, we can build in some practices that improve the quality of code before it ever enters the pipeline.
>
> **[0:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=30)** The changes a developer introduces into the pipeline start off as small stories for new features, which are planned with Agile project management tools like Jira or Version One.
>
> **[0:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=42)** After being assigned a story, a developer begins writing the code for it in an IDE like Eclipse or IntelliJ.
>
> **[0:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=49)** IDEs make writing code more efficient by providing features like auto-complete and tools for refactoring.
>
> **[0:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=56)** At this point in the process, developers are frequently compiling and running the application locally as they perform their work with the help of build tools like Gradle or Maven.
>
> **[1:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=68)** Here, the dependency management features within these build tools are used to pull in other libraries through their integration with the IDE.
>
> **[1:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=77)** Within their IDE, developers can also add plugins to analyze their source code as it's being written.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=84)** These tools can enforce style guidelines or detect common programming errors, which help improve code quality.
>
> **[1:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=91)** Most Java IDEs will also provide support for JUnit, which is a unit testing framework that developers can use to ensure their new code functions properly.
>
> **[1:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=102)** Before checking into source control, developers should scan their code and run the unit test suite to prevent any problems from making their way into the repository.
>
> **[1:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=112)** After validating their changes, developers should submit a pull request so that it can be reviewed by their team before it's merged into a shared branch in the repository.
>
> **[2:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=123)** When practicing continuous delivery, developers are cycling through this workflow multiple times per day to deliver small changes to the code base, which helps avoid complicated merges towards the end of a project.
>
> **[2:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=136)** By following these best practices in their workflow, developers can improve the quality of their code before it ever enters the pipeline.

> [!info]- Semantic Content
>
> **Env Vars:** ide (3)
> **Code Keywords:** let (1), this, (1)
> **Tools:** jira (1), intellij (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Course project overview
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=0)** - [Instructor] Throughout the course, we'll be taking a small application for the Landon Hotel through the end-to-end continuous delivery process.
>
> **[0:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=8)** Landon Hotel is a fictional hotel, and the application will be used by the hotel to view bookings that guests make for rooms.
>
> **[0:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=17)** The application is designed with several features used in modern Java applications that you should be aware of when working with it.
>
> **[0:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=25)** First, it's a distributed system built with a microservice architecture.
>
> **[0:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=30)** And to be honest, it's a little bit overboard for this app, but it will allow us to focus on the mechanics of the delivery process for this style of application.
>
> **[0:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=40)** Microservice architectures break systems down into small services that run in separate processes, but they're able to communicate with each other through API calls over a network.
>
> **[0:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=52)** This network of loosely coupled services forms the larger system.
>
> **[0:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=57)** Since the services run independently, we can develop and release them separately from each other, which is very helpful for decoupling delivery times.
>
> **[1:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=67)** So here's kind of what our app would look like as a monolith.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=70)** And then you can see it in a microservice architecture.
>
> **[1:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=73)** The big thing to keep in mind here is that each of our services is a separate code base that is built and released independently from the others.
>
> **[1:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=83)** Here's another view of the architecture that shows the communication between the services.
>
> **[1:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=89)** There's a small web application that serves as a front-end, and it makes calls to three services for information about guests, rooms, and bookings.
>
> **[1:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=98)** Between these services, there's a little bit of east-west traffic because the booking API fetches some information about rooms, and guess from those other services.
>
> **[1:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=109)** Each microservice is a separate Spring Boot project that uses either Spring's web flux or web framework to build a restful API.
>
> **[1:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=118)** Spring Boot makes it much easier to include Spring projects and their dependencies within an application by using starter dependencies.
>
> **[2:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=127)** These help pull all of the libraries that you'll need through build tools like Maven or Gradle.
>
> **[2:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=133)** Spring Boot also automatically configures different spring components for you right out of the box.
>
> **[2:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=140)** But if you need to overwrite that configuration, you can't.
>
> **[2:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=144)** By default, Spring Boot packages applications into an executable jar, and for web applications, it automatically includes support for embedded servers like Tomcat or Jetty.
>
> **[2:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=157)** Let's talk about executable jars in a little bit more detail because it's how we package modern Java applications.
>
> **[2:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=164)** In the past, Java web applications were packaged within a WAR file that contained resources like Servlets, JSPs, and other configuration that was necessary to run the app.
>
> **[2:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=176)** Once an application was packaged into a WAR file, it could be deployed, and run on a Servlet Container or a full-blown Java EE Application Server.
>
> **[3:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=186)** This server was installed as a separate piece of software on the host.
>
> **[3:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=191)** For years it was common to package, deploy, and run Java applications this way, but then things shifted, and it became more common to use an embedded web server or Servlet Container instead of running everything on a standalone application server.
>
> **[3:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=206)** An embedded server makes a Servlet Container like Tomcat or a web server like Neti another part of the application because it's packaged as a jar within the app.
>
> **[3:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=218)** Using the servers programmatic API allows you to start it up right within your source code.
>
> **[3:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=224)** These changes required a new way of packaging, Java web applications, the executable jar.
>
> **[3:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=231)** An executable jar also known as a fat jar, allows an application to package libraries like Spring in the same package as the applications classes.
>
> **[4:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=242)** The embedded web server can also be included in this package, which gives the jar everything it needs to run the web application on its own.
>
> **[4:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=252)** Running an executable jar is a simple one-line command, which makes it easy to start, scale and deploy, especially when it's packaged in a Docker container.
>
> **[4:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=262)** By default, Spring Boot will package applications as an executable jar.
>
> **[4:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=267)** It does this through a plugin that you include in either your Maven or Gradle build.
>
> **[4:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=273)** We'll cover Maven and Gradle in separate chapters so I won't go into the details now, but they will be an important part of our local workflow as we develop the application for the course project.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), war (2)
> **Definitions:** is a  (4), known as (1)
> **Code Keywords:** default, (2), let (1)
> **CLI Commands:** make (1), docker (1)
> **Warnings:** be aware (1), keep in mind (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Local workstation setup
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=0)** - [Instructor] Let's set up our labs so that we can do some development on the Landon Hotel app.
>
> **[0:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=5)** We'll be doing all of our work within the virtual machine that we provisioned with Vagrant.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=10)** To log in, just click on the Vagrant user and then, use the password Vagrant.
>
> **[0:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=15)** Inside of the lab, you'll find that the exercise files for the course have been placed on the desktop.
>
> **[0:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=22)** This directory contains the source code for each of the microservices that we'll use within the Landon Hotel app.
>
> **[0:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=29)** Let's go ahead and import these projects into Eclipse, which is also included on the desktop.
>
> **[0:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=36)** Just double-click on the Eclipse folder, and then, click on this icon to launch the IDE.
>
> **[0:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=44)** Once Eclipse launches, you can import the projects by going to File, then Import, and scrolling down within this dialog where you'll find the Import existing Maven projects option.
>
> **[0:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=57)** Select that and hit Next.
>
> **[0:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=59)** This will open another dialogue where we can navigate to our exercise files directory.
>
> **[1:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=65)** So click on Browse, and then, locate the exercise files directory.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=70)** You'll notice it already took me there.
>
> **[1:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=72)** Once you've found it, just go ahead and click on Open, and then, you'll notice that Eclipse pulls in our different Maven projects that it found within this directory.
>
> **[1:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=82)** That includes the booking service and the hotel web app.
>
> **[1:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=86)** You'll see that the guest service and the room service are missing.
>
> **[1:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=90)** That's because they're works in progress that we'll build and deliver throughout the course.
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=94)** So for now, just go ahead and click on Finish to import these two projects.
>
> **[1:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=100)** If we look at the structure of these two projects, we can tell that they're built with Maven.
>
> **[1:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=105)** That's because they have a pom.xml file right within their root directory.
>
> **[1:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=109)** Let's take a peek at their configuration and open up the POM.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=115)** The first thing I'll point out about the project is that it uses Spring, and I can tell that by the Spring Boot starter parent POM, which is used by Spring Boot to quickly get us up and running with the Spring framework.
>
> **[2:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=130)** If we navigate to the dependency hierarchy, we can see some of the other Spring projects that are included in this project.
>
> **[2:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=138)** So there you see Spring Data and Spring Webflux.
>
> **[2:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=142)** You'll also notice that an embedded Tomcat servlet container is included.
>
> **[2:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=147)** We'll use this to run our web application.
>
> **[2:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=150)** Now I want to call your attention to one more important dependency.
>
> **[2:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=154)** That's the Spring Boot auto configure dependency.
>
> **[2:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=158)** It's used by Spring Boot to automatically provide some default configuration for the projects that it detects on our class path.
>
> **[2:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=169)** If we want to see a little bit more about how this works, let's click on the Overview tab, and from here, we can see the Spring Boot starter parent POM by clicking on this button.
>
> **[3:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=182)** You'll notice that the Spring Boot starter parent POM includes its own parent POM.
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=189)** And if we want to see the full configuration of both POMs, we can click on the Effective POM tab.
>
> **[3:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=197)** Now, as we scroll down in this file, you'll start to notice all these different versions for different libraries that we might include within a Spring project.
>
> **[3:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=208)** Let's talk a little bit about what this does for us.
>
> **[3:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=212)** So let's say that you wanted to use Spring Data.
>
> **[3:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=216)** By default, Spring Boot is going to provide the version that is compatible with the other libraries that it specifies.
>
> **[3:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=225)** So you don't have to worry exactly about what version of Hibernate to include in your project.
>
> **[3:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=232)** Spring Boot resolves those compatibility issues between the versions for you.
>
> **[4:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=242)** By default, Spring Boot packages our applications into an executable JAR that uses an embedded server.
>
> **[4:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=250)** If we take a look at our hotel web app application class, located in the com.linkedin.javacd package, we can see a little bit about how this works.
>
> **[4:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=260)** You'll notice the Spring Boot application annotation on this class.
>
> **[4:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=265)** This indicates the Spring Boot.
>
> **[4:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=267)** It's where the main method is located that will launch our application.
>
> **[4:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=271)** And this spins up the web server.
>
> **[4:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=274)** It's just a plain old Java class, so we can right click on it, go to Run as, and then, Java application to start it.
>
> **[4:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=282)** This will cause Eclipse to start to launch the app.
>
> **[4:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=288)** Now the application will have a problem initially.
>
> **[4:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=291)** It's going to attempt to bind to Port 8080, and something else on the virtual machine is already bound there, so we have a port conflict.
>
> **[5:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=300)** Within Spring Boot, we can use a local profile to resolve this problem.
>
> **[5:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=306)** So inside of the source main resources directory, you'll notice these two files, application.properties and application-local.properties.
>
> **[5:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=316)** The application.properties file is where we specify different configuration properties for our app.
>
> **[5:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=323)** If we want to add a different configuration profile, we just add a suffix and here it's dash local.
>
> **[5:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=330)** Let's open that up.
>
> **[5:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=332)** Inside of this file you'll see that I've provided a different port configuration for our local profile.
>
> **[5:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=340)** If we want to apply this profile when we run the app, we can go into the run configurations for Eclipse.
>
> **[5:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=346)** Just click on Run, then go to Run configurations, and this dialog will open.
>
> **[5:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=352)** Here we see the run configuration for the application.
>
> **[5:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=356)** We can adjust the profile it uses by clicking on the Arguments tab.
>
> **[6:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=361)** Here I'm going to provide a VM argument.
>
> **[6:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=363)** To do this, we specified dash D then the name of the argument, which is going to be spring.profiles.active, then just use the equal sign and provide the name of the profile, which in this case is local.
>
> **[6:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=378)** Once you have that in place, go ahead and run the application.
>
> **[6:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=383)** There we see the app spinning up, and I'm going to start to open up a browser so that we can hit it once it's launched.
>
> **[6:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=390)** Inside the browser, just specify the local host in the URL bar and hit it on Port 8884.
>
> **[6:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=399)** There we see the web application.
>
> **[6:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=401)** Okay, let's go ahead and we'll run the booking service.
>
> **[6:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=405)** So I'll just navigate into the directory.
>
> **[6:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=408)** And then, within the com.linkedin.javacd package, I'm going to go ahead and run this application as a Java app.
>
> **[7:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=420)** This will build the initial run configuration, and then, I'll need to adjust it.
>
> **[7:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=426)** Okay, here we can see we got the problem.
>
> **[7:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=429)** Now let's go to the Run configurations.
>
> **[7:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=434)** Then, I'm going to select the Booking service application run configuration, click on the Arguments tab, and then, provide the argument to specify our profile.
>
> **[7:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=446)** Okay, that should do it.
>
> **[7:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=447)** Let's go ahead and run the app.
>
> **[7:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=450)** Now the service is spinning up, and if we refresh the application within the browser, we start to see information come in from the booking service.
>
> **[7:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=462)** So it was much easier to get this app up and running compared to how we might have done it 10 years ago.
>
> **[7:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=468)** The key ingredients that made our developer workflow such a nice experience were Spring Boot and Maven.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), default, (2), class, (2), import, (1), class. (1)
> **UI Navigation:** click on (10), go to (3), navigate to (2), double-click (1), scroll down (1)
> **Env Vars:** pom (6), ide (1), jar (1), url (1)
> **Exercise Files:** exercise files (3), source code (1)
> **CLI Commands:** find (2)
> **Ports:** port 8080 (1), port 8884 (1)
> **Prerequisites:** set up (1), configure (1)
> **File Paths:** pom.xml (1)

#### Monorepo vs. polyrepo
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=0)** - [Instructor] The source code repository is a key component within our continuous delivery process because it's where team members integrate code that the pipeline retrieves when it kicks off the build.
>
> **[0:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=12)** To function well in a pipeline, the code repository must be hosted in a central location that provides other features like security, pull requests, and code reviews.
>
> **[0:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=23)** These features are commonly found in hosting platforms like GitHub, which we'll be using to manage our course project.
>
> **[0:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=30)** Since we're using a microservice architecture, we now have four separate code bases, one for each of the services.
>
> **[0:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=38)** So the choice isn't as straightforward as storing the code for a monolith, which by default would be stored in a single repository that contains the entire code base.
>
> **[0:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=48)** Instead, we'll need to choose between storing our service code in a monorepo or a polyrepo.
>
> **[0:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=55)** Let's talk about these two options, starting with the monorepo.
>
> **[1:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=60)** A monorepo stores the code for every service in the system in one large repository.
>
> **[1:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=66)** This helps make the code base more accessible to the entire development team, since it's easy to pull all the code at once.
>
> **[1:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=74)** Developers can easily review the code in other services, and if there's shared code, they can change it directly inside the code base.
>
> **[1:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=82)** There are drawbacks to a monorepo.
>
> **[1:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=85)** Changing shared code in the repository can impact multiple services and trigger large refactoring efforts across the code.
>
> **[1:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=93)** Also, depending upon the CI platform you use, it may need a special plugin or customization to handle the monorepo.
>
> **[1:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=102)** The alternative to a monorepo is a polyrepo, which stores each service in its own repository.
>
> **[1:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=109)** Having a separate repository for each service enforces decoupling between them.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=115)** It also helps keep the services independent and can eliminate some of the problems caused by sharing code.
>
> **[2:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=121)** Unfortunately, when using multirepos, it becomes harder to access and evaluate the entire code base.
>
> **[2:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=128)** That's because it's stored across many repositories, which might require permissions to access.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=134)** In our project, we'll be using the multirepo approach because it's more straightforward to work with our CI tool, Jenkins.
>
> **[2:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=142)** So let's dive into our next lesson to set up our repos for each service inside of GitHub.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1), require (1)
> **Tools:** github (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Creating polyrepos in GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=0)** - [Instructor] Let's set up our poly repo within GitHub to store the source code for each of our microservices.
>
> **[0:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=6)** To help with that, we're going to use a GitHub organization, which will have a repository for each service.
>
> **[0:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=14)** To create an organization within GitHub, just click on your profile, and then come down to your organizations and click here.
>
> **[0:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=22)** If you don't see this option, you'll need to set up your first organization using the instructions found at the link below.
>
> **[0:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=30)** Next, we'll click on the new organization button to get the process started.
>
> **[0:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=35)** The first thing we'll need to do is select the type of organization that we'd like to create.
>
> **[0:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=40)** I'm going to use a free organization, so I'll click on this button.
>
> **[0:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=46)** Next, we'll need to provide a name for our new organization.
>
> **[0:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=51)** I'm going to name mine hotel-landon-kb just to make the name unique.
>
> **[0:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=57)** Then I'll go ahead and provide my email, and then indicate that I'm using a personal account.
>
> **[1:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=63)** Next, I'll need to solve a quick puzzle, and then I can click on the next button to create the organization.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=70)** All right, it looks like it created.
>
> **[1:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=73)** Now let's move on and set up the security configuration within GitHub that some of our tools in the pipeline will need.
>
> **[1:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=81)** The first piece of configuration we'll need is a personal access token.
>
> **[1:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=85)** So click on your profile, and then come down to Settings, and within the settings menu, click on developer settings.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=95)** Here you'll find the option on the sidebar to start building a personal access token.
>
> **[1:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=100)** Click on that and then click generate new token.
>
> **[1:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=104)** Here I'm just going to name my token lab and then I'll specify that it will expire in 90 days.
>
> **[1:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=112)** The next thing I'll need to do is select some scopes to give the token different permissions that our tools will need.
>
> **[1:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=118)** The first one will be the repo scope, then write:packages, then admin:org, admin:public_key and finally, user.
>
> **[2:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=128)** Once you've selected those, just click on generate token here at the bottom of the screen.
>
> **[2:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=133)** This will create our new personal access token, and we can copy it by clicking on this button.
>
> **[2:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=139)** Now, we'll want to put this somewhere convenient where we can access it because we'll need it several times throughout the course.
>
> **[2:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=146)** So I'm just going to go ahead and write my token into a file named pat within my home directory.
>
> **[2:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=155)** And there we can see it.
>
> **[2:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=159)** Okay, the next thing we'll need to do is set up an SSH key that some of our tools can use to authenticate with GitHub.
>
> **[2:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=166)** To do that, I'm going to open a console within the exercise files directory.
>
> **[2:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=172)** If we take a look within this directory, you'll notice the setup_ssh script.
>
> **[2:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=179)** This script can help us generate our SSH key.
>
> **[3:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=182)** Let's go ahead and we can execute the script.
>
> **[3:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=188)** Okay, it looks like it executed, and it placed our SSH key, which is going to be an RSA token inside of our .ssh folder, and then for convenience, it also wrote it to our home directory where we have our public and private keys for the RSA token.
>
> **[3:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=207)** We're going to need the value of the public key in order to place it within GitHub.
>
> **[3:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=212)** So I'm going to go ahead and print it to the console.
>
> **[3:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=216)** And then I'll copy the key to my clipboard and we'll navigate back to GitHub.
>
> **[3:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=221)** And within the settings again, I'm going to go down to the SSH and GPG keys.
>
> **[3:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=228)** Here I can click on the new SSH key in order to add the public key into this form.
>
> **[3:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=236)** All right, and then I just need to give the key a name.
>
> **[3:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=239)** I'll call it lab once again.
>
> **[4:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=242)** Then I just need to click on the add SSH key button, and there we can see it's registered with GitHub.
>
> **[4:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=250)** Now that the key is registered, we can start to build out each of the repositories for our microservices.
>
> **[4:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=257)** To help us with that, I've created another script, setup_repos.
>
> **[4:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=263)** Let's just take a look at what this script does.
>
> **[4:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=270)** The first thing I'll point out is that the script accepts three parameters.
>
> **[4:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=274)** The first is going to be our email.
>
> **[4:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=276)** The second will be our username, and then the third will be the name of our GitHub organization.
>
> **[4:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=283)** It's used to adjust some YAML files and also it's used in this line that creates a new repository within our GitHub organization.
>
> **[4:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=295)** Now, to do that, it uses the GitHub CLI.
>
> **[4:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=299)** This is a tool that we can use to work with GitHub from the command line.
>
> **[5:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=304)** You can do a lot of things, like create pull requests or even create repositories like we're going to do.
>
> **[5:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=310)** The script is going to iterate through each directory within our exercise files and create a new repository for it.
>
> **[5:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=319)** And that's how we're going to get each repository in our organization for our microservices.
>
> **[5:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=325)** Now, to use the script, we'll need to log in with the GitHub client.
>
> **[5:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=330)** To do that, you'll use the GitHub client's auth command, and then you'll specify that you want to log in.
>
> **[5:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=337)** Next, you'll select [GitHub.com](https://GitHub.com).
>
> **[5:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=339)** Then SSH.
>
> **[5:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=341)** Then select the RSA key.
>
> **[5:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=344)** And then finally, we'll use an authentication token to log in.
>
> **[5:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=348)** That's going to be the personal access token we created earlier.
>
> **[5:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=352)** So let's go ahead and print that to the console.
>
> **[5:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=356)** And then I'm just going to copy it to my clipboard.
>
> **[6:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=361)** And then I'll paste it here in the console so we can authenticate with GitHub.
>
> **[6:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=366)** Excellent, it looks like we're authenticated.
>
> **[6:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=369)** Okay, let's go ahead and run the script to set up our repositories.
>
> **[6:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=374)** First, I'll provide my email address, then my username, and then finally, I'll specify the name of my organization within GitHub.
>
> **[6:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=383)** Okay, I'll go ahead and execute the script and it will begin to create repositories and check in the source code files for each of our microservices.
>
> **[6:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=395)** Okay, it looks like the script is finished setting up our poly repos.
>
> **[6:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=399)** Let's navigate back over to GitHub and we can check out the organization to see them.
>
> **[6:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=405)** So just click on your profile, then your organizations, and then click on the new organization that you created.
>
> **[6:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=413)** There's all of the repositories for our application.

> [!info]- Semantic Content
>
> **Tools:** github (18), command line (1)
> **Code Keywords:** let (7), finally, (3), public (3), private (1)
> **UI Navigation:** click on (12), select the (2)
> **Env Vars:** ssh (7), rsa (3), gpg (1), yaml (1), cli (1)
> **CLI Commands:** ssh (8), make (1), find (1)
> **Prerequisites:** set up (5), you'll need (1)
> **Exercise Files:** source code (2), exercise files (2)
> **Code Identifiers:** public_key (1), setup_ssh (1), setup_repos (1)


### 3. Building Applications with Gradle

#### Build tools
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=0)** - [Narrator] In the next two chapters of the course, we're going to explore Maven and Gradle, which are two popular build tools used with Java.
>
> **[0:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=8)** Before diving in to those specific technologies, let's take a high-level look at what we can expect from a build tool and how they're used.
>
> **[0:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=17)** At a high level, build tools allow us to define how our software project is converted into an artifact that we can distribute and run on other platforms.
>
> **[0:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=27)** It makes this process repeatable by allowing us to define a configuration file or a build script that contains information about our project and the tasks necessary to turn its source code into an artifact.
>
> **[0:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=42)** Using the configuration file, the build tool can then automate the execution of those tasks to ensure that every time we perform a build, it's executed consistently.
>
> **[0:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=53)** Most build tools have an ecosystem of plugins that can be included within our configuration file to easily perform different actions during our build lifecycle.
>
> **[1:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=63)** Another great feature of some build tools, like Gradle and Maven, is their dependency management systems.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=70)** These make it much easier to include external libraries within our projects.
>
> **[1:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=76)** Here's how dependency management works at a high level.
>
> **[1:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=79)** Imagine that we wanted to use Selenium for some testing within our project.
>
> **[1:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=83)** We would just add its dependency information within the configuration file for our build tool.
>
> **[1:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=90)** Selenium itself might have a dependency on another library, let's say, the Selenium IE driver, which in turn might use another library, like Guava.
>
> **[1:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=101)** When one module depends on another like this, it's known as a transitive dependency.
>
> **[1:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=107)** All of these libraries need to find their way onto the class path when we run our application, and it can be painful to manually manage this graph, especially to get all the versions lined up just right.
>
> **[2:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=120)** A build tool makes that easy.
>
> **[2:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=123)** It walks the dependency graph for you and automatically pulls in the transitive dependencies based on metadata each dependency declares in its own configuration.
>
> **[2:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=135)** So at a high level, it kind of looks like this.
>
> **[2:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=138)** We define a configuration file for the build tool that describes our project, things like what dependencies the project needs, what tasks to complete when building the source, and what plugins we use in those tasks.
>
> **[2:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=153)** The build tool takes this configuration file and all of the resources within our project and starts executing the build.
>
> **[2:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=161)** If it needs dependencies, it reaches out to an artifact repository and pulls them in during the build process.
>
> **[2:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=169)** Once the build is complete, it produces an artifact that packages our compiled software.
>
> **[2:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=175)** There are two primary ways a build tool is used.
>
> **[2:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=178)** First, developers typically use them during the development workflow to build and assemble their software locally.
>
> **[3:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=185)** This is normally performed via integration with their IDE, and they might not even be fully aware they're using a build tool in the background.
>
> **[3:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=194)** Build tools also play an important role in the CI process, where they compile and package our source code for each check-in on an isolated server.
>
> **[3:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=204)** This is typically triggered by an automation server, like Jenkins.
>
> **[3:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=209)** The isolated server provides us a clean environment to build the software without any influence from one-off configurations that might exist on a developer workstation.
>
> **[3:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=220)** These high-level concepts will apply to our work with both Maven and Gradle, so keep them in mind during the upcoming lessons.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), module (1), this, (1), this. (1)
> **CLI Commands:** make (1), find (1)
> **Exercise Files:** source code (2)
> **Env Vars:** ide (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### Getting started with Gradle
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=0)** - [Instructor] One of the most popular build tools used with Java is Gradle.
>
> **[0:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=4)** I find the best way to get started with Gradle is to just dive right in.
>
> **[0:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=8)** So let's start by installing the software and setting up a simple project.
>
> **[0:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=13)** To begin our installation, we'll start on the Gradle homepage and just click on the install Gradle button.
>
> **[0:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=20)** Here we'll find the instructions to install Gradle on several different operating systems.
>
> **[0:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=25)** If you are installing Gradle on Windows, you would select the link to install manually and then follow those instructions.
>
> **[0:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=32)** But since our lab is using Linux, we can click on the option to install with a package manager.
>
> **[0:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=39)** You'll notice that within the instructions, it recommends installing Gradle using SDKMAN!.
>
> **[0:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=46)** So let's navigate over to the SDKMAN! homepage, and we can click on the install button in the menu in order to get started.
>
> **[0:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=55)** Here we'll find a script that will install SDKMAN!
>
> **[0:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=58)** on our Linux workstation.
>
> **[1:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=60)** Let's just go ahead and copy that, and then we'll navigate over to a terminal where I'll paste the script and then just hit enter to execute it.
>
> **[1:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=69)** Okay, it looks like SDKMAN! has installed.
>
> **[1:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=72)** In order to use it in our current terminal, we'll need to execute this command.
>
> **[1:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=77)** So let's go ahead and copy that, then I'll clear my terminal, paste the script, and execute it.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=84)** Okay, now we should have SDKMAN! available within this terminal.
>
> **[1:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=90)** If we return to the Gradle installation documentation, you'll see our next step is to use SDKMAN!
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=97)** to install Gradle 7.2.
>
> **[1:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=99)** So I'm going to copy this command, and then I'll return to the terminal and paste it where I can execute it.
>
> **[1:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=107)** It looks like Gradle is starting to install.
>
> **[1:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=112)** Okay, it looks like the Gradle installation finished.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=115)** Let's just go ahead and we can verify that by running the gradle dash dash version command.
>
> **[2:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=121)** Okay, we can see that Gradle 7.2 is installed on our workstation.
>
> **[2:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=126)** Now let's move on to creating a simple project.
>
> **[2:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=130)** To do that, we're going to work within our exercise files directory.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=134)** That's where we'll create our new project.
>
> **[2:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=138)** The project is going to be named Sandbox, so I'm going to go ahead and create a directory named Sandbox inside the exercise files directory.
>
> **[2:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=147)** Then we can just navigate into the Sandbox directory, and here's where we'll start to use Gradle to build the new project.
>
> **[2:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=155)** To help with that, we can use the gradle init command.
>
> **[2:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=159)** It's going to walk us through an interactive menu where we can set up the different configuration for our project.
>
> **[2:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=166)** Let's get started with that.
>
> **[2:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=168)** The first thing we'll need to specify is the type of Gradle project that we want to create.
>
> **[2:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=173)** And this is going to determine the directory structure that Gradle uses when it initializes our project.
>
> **[3:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=180)** Now we're only interested in an application, so I'm going to select the second option.
>
> **[3:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=186)** Then we'll need to specify what language our project is going to be using.
>
> **[3:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=190)** Since this is a Java course, I'm going to select option three for Java.
>
> **[3:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=195)** Then we'll need to determine whether or not we would like sub projects within our Gradle build.
>
> **[3:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=202)** We're only going to have one application within this Gradle build, so I'll select the first option.
>
> **[3:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=209)** Then it's going to ask us the DSL that we'd like to use for our build scripts.
>
> **[3:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=214)** A DSL is a domain specific language which, in this case, is a small language built specifically for using Gradle.
>
> **[3:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=222)** Gradle has a DSL for both Groovy and Kotlin.
>
> **[3:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=226)** Let's go ahead and we'll use the Groovy DSL for our project, so I'll select option one.
>
> **[3:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=232)** Next, it's going to ask us to identify our testing framework.
>
> **[3:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=236)** I'm going to use JUnit Jupiter, which is option four.
>
> **[4:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=240)** Then it will need the name of our project.
>
> **[4:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=243)** We're just going to call this Sandbox, so I'm going to go with the default option by hitting enter.
>
> **[4:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=249)** Finally, it's going to ask us the package name where our source code will be placed.
>
> **[4:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=255)** For that, I'm going to use com.linkedin.javacd.
>
> **[4:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=260)** Once I've entered that value, I'll hit enter, and Gradle builds out our new project.
>
> **[4:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=265)** Let's take a look.
>
> **[4:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=267)** So if we look inside the Sandbox directory, we see some files related to our Gradle build.
>
> **[4:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=274)** We'll get into those later.
>
> **[4:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=276)** For now, let's run our first Gradle build.
>
> **[4:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=279)** Just type Gradle, and then build, and hit enter, and you'll see that Gradle will begin to compile our source code and build our project.
>
> **[4:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=288)** There it looks like it completed successfully.
>
> **[4:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=292)** So now we're up and running with Gradle, and we just completed our first build.
>
> **[4:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=296)** Let's dive into the details of how that build works over the upcoming lessons.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), case, (1), finally, (1)
> **Env Vars:** sdkman (6), dsl (4)
> **Prerequisites:** install (8), set up (1)
> **UI Navigation:** click on (3), select the (3), in the menu (1)
> **Tools:** terminal (5)
> **Exercise Files:** exercise files (2), source code (2)
> **CLI Commands:** find (3)
> **Definitions:** is a  (3)

#### Gradle build structure
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=0)** - Let's take a closer look at the structure and key files within our new Gradle build.
>
> **[0:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=8)** When we configured our build with Gradle's init plugin, it created a multi-project build, and here we can see its layout.
>
> **[0:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=16)** This project type is what Gradle recommends for most builds.
>
> **[0:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=21)** Within the root of this build we'll find the settings dot Gradle file.
>
> **[0:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=26)** It defines the configuration and layout of our multi project build.
>
> **[0:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=33)** Let's take a closer look at how this configuration works.
>
> **[0:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=37)** Within this file, we can define other sub projects within the build.
>
> **[0:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=42)** Those sub projects are added by using the include statement that we see here.
>
> **[0:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=48)** Currently within our build, we only have a single sub project named app, but we could include others by adding another include statement, if we needed to.
>
> **[1:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=61)** If we return to the root of our project and inspect it, you'll notice it contains the app directory, which corresponds with the sub project in the settings dot Gradle file.
>
> **[1:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=75)** Let's take a closer look at the layout and contents of the sub project.
>
> **[1:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=80)** This directory contains the sub projects build script and a directory that holds all of the source files for the project.
>
> **[1:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=91)** The build script is located inside the root of the sub project within a file named build dot gradle.
>
> **[1:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=100)** Let's open that up and take a quick look at it.
>
> **[1:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=103)** You'll recall that when we initialized our project, we selected the groovy DSL.
>
> **[1:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=109)** Here you can get a feel for how it's used to define resources like dependencies, plugins, and tasks that are necessary to build our sub project.
>
> **[1:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=119)** When you're using Gradle, the build script is very important and we'll spend quite a bit of time working with it.
>
> **[2:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=126)** For now, let's return to our project and take a closer look at the structure of our app sub project.
>
> **[2:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=133)** The Gradle Java plugins define a default structure for where the different source files are located within this directory.
>
> **[2:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=141)** They expect us to place the source code and configuration files for the application and its tests within the source directory.
>
> **[2:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=150)** By default, your application source code is placed inside of the source main Java directory and then a separate directory, source test Java, is where the source code for the tests are placed.
>
> **[2:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=162)** Inside of both of these directories is a resources directory, where we can provide things like configuration files for the application or the tests.
>
> **[2:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=172)** If you need to, you can override these directories by configuring custom locations, known as source sets.
>
> **[2:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=179)** However, for most cases it's best to stick with this layout.
>
> **[3:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=183)** These standard directory conventions allow Gradle to find files it needs for specific tasks, like compiling our source code.
>
> **[3:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=192)** Now that we've seen the structure of a Gradle build, and some of its conventions, let's move on to the next lesson to learn another way that we can perform a build with Gradle.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), default, (1), override (1)
> **Exercise Files:** source code (4)
> **CLI Commands:** find (2)
> **Env Vars:** dsl (1)
> **Definitions:** known as (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - let (1)

#### Gradle Wrapper
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=0)** - When executing builds with Gradle, there are two options to choose from.
>
> **[0:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=5)** One option is to use the Gradle build command, like we've already seen.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=10)** This uses the Gradle distribution that we installed manually on our workstation.
>
> **[0:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=17)** The other option is to use the Gradle Wrapper.
>
> **[0:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=20)** The Gradle Wrapper is a script that downloads a specific version of Gradle which is then used to execute builds and other tasks.
>
> **[0:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=29)** It's a way to package the Gradle software, right alongside your source code.
>
> **[0:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=34)** You can see the script for the Gradle Wrapper here, right within the root of our project.
>
> **[0:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=39)** There's also a batch script, if you're working with windows.
>
> **[0:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=43)** These scripts were placed inside the project by default, when we created it with the Gradle in it task.
>
> **[0:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=50)** The task also creates the Gradle Wrapper directory and inside of it we find two files.
>
> **[0:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=56)** One is a properties file, which specifies the version of Gradle that we would like to download and install with the Wrapper.
>
> **[1:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=63)** And the other's a jar file that actually does the download for us.
>
> **[1:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=68)** It's recommended to include the Wrapper in your projects because it allows developers to skip the manual Gradle installation that we performed.
>
> **[1:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=77)** It also ensures the same version of Gradle is used every time the build is executed for the project.
>
> **[1:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=85)** Let's go ahead and kick off a build with the Gradle Wrapper.
>
> **[1:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=89)** To do that, we just use the Wrapper script, and then we pass it a task to execute.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=95)** Now, in this case, it's going to be the build task, but we can pass the Wrapper any tasks that we would perform using a normal Gradle installation.
>
> **[1:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=105)** So I'm just going to go ahead and kick off that task and we can see our build start to execute and there it's finished.
>
> **[1:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=112)** Now you might be wondering what actually happened.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=115)** Well let's take a closer look.
>
> **[2:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=121)** Inside of our sub-project app.
>
> **[2:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=124)** You'll notice a new directory named build.
>
> **[2:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=127)** This directory contains all of the artifacts that were produced when we executed our Gradle build.
>
> **[2:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=136)** Let's take a look inside this directory to see what was produced.
>
> **[2:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=141)** Now here, I'm just going to spotlight a few important things.
>
> **[2:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=145)** First, you'll notice that the classes for our Application source code were placed within the app build classes directory.
>
> **[2:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=153)** So here's the main class for the app.
>
> **[2:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=156)** And then you'll also notice that the tests were compiled that's because they were ran as part of the build.
>
> **[2:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=163)** And if we navigate down within the directory, you'll actually see that a report was generated about our testing from the build.
>
> **[2:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=172)** So here you can see that report.
>
> **[2:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=174)** It's within the index study HTML file.
>
> **[2:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=177)** I'm going to go ahead and that up on Firefox.
>
> **[3:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=181)** So here you see the test report that was generated by Gradle.
>
> **[3:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=185)** Now, right now we only have one test, but hey, at least it passed.
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=189)** We'd like to see more of those.
>
> **[3:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=191)** But the main point here is that Gradle is giving us feedback about the quality of our software.
>
> **[3:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=198)** Okay, let's return to our build directory.
>
> **[3:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=201)** And I want to highlight one more very important thing.
>
> **[3:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=204)** You'll notice the app.jar file within the libs directory.
>
> **[3:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=209)** This is the main artifact produced from our build.
>
> **[3:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=213)** It contains our packaged application.
>
> **[3:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=217)** So this is really the whole point of conducting the build.
>
> **[3:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=221)** By default, the jar file is not executable.
>
> **[3:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=224)** We'll handle that part later.
>
> **[3:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=226)** But for now we can launch the application using the Gradle Wrapper.
>
> **[3:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=230)** Let me show you how, once again we'll use the Gradle Wrapper script and we're just going to pass it another test this time named run.
>
> **[4:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=240)** I'll go ahead and execute that task.
>
> **[4:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=243)** And there you can see our application was launched and it printed a bit of console output to our terminal.
>
> **[4:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=249)** Okay, so that wraps things up.
>
> **[4:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=251)** We saw another way to execute Gradle builds and tasks.
>
> **[4:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=255)** And that was the Gradle Wrapper.
>
> **[4:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=257)** Because it's the preferred approach, We're going to be using it going forward in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), pass (3), default, (2), from. (1), case, (1)
> **Tools:** firefox (1), terminal (1)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** html (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** install (1)

#### Gradle tasks and plug-ins
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=0)** - [Instructor] Now that we've explored the structure of a Gradle project and the Gradle wrapper, let's focus on the build script.
>
> **[0:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=8)** To help us with that, I'm going to import our project into Eclipse.
>
> **[0:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=12)** So I'll go to file, then import.
>
> **[0:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=15)** And then within the Gradle folder, I'll select Existing Gradle Project and hit next.
>
> **[0:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=21)** Then I'll need to navigate to our app sub project, which is located within the sandbox project inside of the exercise files.
>
> **[0:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=29)** So once you're there, go ahead and hit open, and then click on finish to import the project into Eclipse.
>
> **[0:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=38)** Inside the structure of our sub project, we'll find the build.gradle file.
>
> **[0:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=43)** Let's go ahead and open that so we can see how the Gradle DSL helps us establish our build.
>
> **[0:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=50)** A Gradle build script defines a set of tasks that need to be run as part of our build for a project.
>
> **[0:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=56)** Most tasks come from plugins that we include within the build script, like the application plugin that you see here.
>
> **[1:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=64)** By default, this plugin adds the Java plugin into the build, which provides tasks that help with things like compilation, testing, and packaging of our Java application.
>
> **[1:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=75)** This functionality comes right out of the box with the plugin, so it's kind of hard to see all of the tasks just by looking at our build script.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=84)** Let's head over to the terminal to help us with that.
>
> **[1:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=87)** Here, I'll use the Gradle wrapper and the task task to see all of the tasks that are available within our build.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=97)** Okay, so you can see it's quite the list.
>
> **[1:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=99)** Let's scroll up and check out a few of these.
>
> **[1:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=102)** There's the run task, which we're familiar with.
>
> **[1:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=105)** We've also used the build task some as well.
>
> **[1:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=108)** Now if we scroll down, we'll start to see the tasks that are provided by the Java plugin.
>
> **[1:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=114)** Here's two that compile our Java source code and the test for the project.
>
> **[2:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=121)** If we'd like to see every plugin in our build, we can use a bit of Groovy to access them.
>
> **[2:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=126)** So I'm going to use the project object.
>
> **[2:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=129)** And on it, we'll find the plugins property.
>
> **[2:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=132)** Here, I can iterate through each of them.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=134)** And then inside of a closure, I'll print out each plugin to the console.
>
> **[2:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=140)** Okay, let's go ahead and we'll save that, and then we'll head back to the terminal where I'll use the Gradle wrapper in order to kick off our build.
>
> **[2:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=151)** And there you can see it prints all the plugins that are available to our build.
>
> **[2:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=157)** Let's talk about a few of these.
>
> **[2:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=159)** The base plugin is extended by every other plugin.
>
> **[2:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=163)** There you see the Java plugin we talked about and the application plugin as well.
>
> **[2:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=169)** These plugins are the core plugins that are provided by Gradle.
>
> **[2:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=173)** That allows us to access them using a short name.
>
> **[2:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=177)** So instead of using the fully qualified name for the application plugin, if we look in our Gradle build script, you'll notice we can use the short name, application.
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=189)** We can include third-party plugins in our build as well.
>
> **[3:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=193)** To find those, we use the Gradle plugin portal.
>
> **[3:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=196)** All you need to do is type the name of the plugin that you'd like to find.
>
> **[3:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=200)** In this case, I'm going to look for the taskinfo plugin.
>
> **[3:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=204)** It provides us some additional information about the tasks within our Gradle project.
>
> **[3:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=209)** So I'll go ahead and search for it, and there you can see it.
>
> **[3:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=213)** Let's navigate into the information for the plugin, and here you can see we get the fully qualified plugin ID.
>
> **[3:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=222)** All we need to do is copy this and then take it over to our build script.
>
> **[3:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=227)** Within the build script, we'll place it within the plugins closure, then we'll save our build.gradle file.
>
> **[3:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=234)** And now if we navigate back to the terminal, we can execute the task task again.
>
> **[4:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=243)** Now you'll notice that three additional tasks from the plugin have been included and made available for our build.
>
> **[4:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=251)** When setting up a Gradle build, it's common to add third-party plugins into our build script.
>
> **[4:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=256)** That way, we can access additional tasks within our build.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), import. (1), default, (1), case, (1)
> **UI Navigation:** go to (1), navigate to (1), click on (1), scroll up (1), scroll down (1)
> **CLI Commands:** find (4)
> **Tools:** terminal (3)
> **File Paths:** build.gradle (2)
> **Exercise Files:** exercise files (1), source code (1)
> **Env Vars:** dsl (1)
> **Cross-References:** we talked about (1)

#### Gradle task graph
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=0)** - [Instructor] There's a little bit more that you need to understand about how the tasks in a Gradle build work.
>
> **[0:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=6)** I'll use our new task info plugin to help explain it.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=10)** The plug-in contains the TI tree task.
>
> **[0:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=14)** When we execute it, we provide it another task like build.
>
> **[0:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=18)** Then it evaluates the relationships between all the tasks that will be executed by Gradle when we perform the build task.
>
> **[0:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=27)** Here, let me show you how it works.
>
> **[0:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=31)** So here's the output from the plugin.
>
> **[0:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=34)** This is known as the task graph.
>
> **[0:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=37)** At the base of the task graph, we have the build task that we asked the plugin to analyze.
>
> **[0:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=44)** The build task is a standard life cycle task within Gradle.
>
> **[0:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=48)** Standard life cycle tasks, like build, assemble and check, don't really do any work within our builds.
>
> **[0:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=57)** Instead, they rely upon tasks provided by plugins to do the actual work inside of the build.
>
> **[1:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=64)** That doesn't mean they're not important because we can still link the plugin task to them to help determine when they will be executed in the build.
>
> **[1:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=75)** This process of linking the task together and determining the sequence they'll be run in is performed by Gradle in the early stages of the build process when it's creating the task graph.
>
> **[1:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=88)** This all occurs behind the scenes, and it's really hard to see just by adding a plugin to our build script.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=95)** So let's create our own task to see how it works.
>
> **[1:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=100)** To do that, we're going to register a task on the task property.
>
> **[1:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=105)** So once we call register, we provide the name of our task and then it will be created within our project.
>
> **[1:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=114)** Now, the task property is actually found on the project object.
>
> **[1:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=119)** Typically we don't specify it, it's normally implicit, but here I'm going to be really verbose and put it in place so you can see how it works.
>
> **[2:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=129)** All right, now that we have our task, let's go ahead and within the closure, we're going to add some actions to it.
>
> **[2:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=137)** The first action we'll add is do first.
>
> **[2:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=140)** Inside of this action, I'm going to go ahead and print out some console output.
>
> **[2:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=146)** Here, I'll just say hello LinkedIn learning.
>
> **[2:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=150)** Then I'm going to go ahead and copy this action and then I'll just paste it right below the first one.
>
> **[2:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=157)** And our next action, we're going to name do last.
>
> **[2:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=161)** And within the output, I'm just going to say hello learner.
>
> **[2:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=167)** Okay, there we go.
>
> **[2:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=168)** So let's go ahead.
>
> **[2:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=169)** We'll save the build.gradle file and then we'll head over to the terminal where we can use the Gradle wrapper to execute the new task we just created.
>
> **[3:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=182)** There we can see the task is executed and the output we specified was printed to our terminal.
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=189)** Okay, now that we have our new task, let's return to Eclipse, and I'm going to do one more thing that's going to change up our task graph.
>
> **[3:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=198)** So inside of our build script, I'm going to make the build task depend on our new task.
>
> **[3:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=206)** So there I'll just say build.depends on simple task, and that's going to change up our task graph.
>
> **[3:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=212)** Let me show you.
>
> **[3:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=212)** We'll go over to the terminal and then we'll execute the TI tree task again.
>
> **[3:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=220)** And here you'll see that our new task has been added to the task graph and that's because the build task depends on it.
>
> **[3:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=231)** That means if we were to execute a build using the Gradle wrapper, it's going to include the execution of our new task, and there we can see the output printed to the console from the task we created.
>
> **[4:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=245)** Most often, we'll use tasks that come from plugins, but understanding how the task graph is assembled will be a big help when you're working with Gradle.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6)
> **Tools:** terminal (3)
> **Definitions:** known as (1), is a  (1)
> **File Paths:** build.gradle (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Managing dependencies with Gradle
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=0)** - [Tutor] Modern Java applications are frequently developed with the help of third-party libraries like the Spring Framework or Hibernate.
>
> **[0:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=8)** Build tools like Gradle provide dependency management features that can help us include these libraries and their dependencies within our projects.
>
> **[0:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=18)** If we scroll down inside of our build script, you'll notice that we already have a few dependencies declared within the dependencies section of the build.
>
> **[0:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=28)** Let's first talk about the Guava dependency.
>
> **[0:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=31)** You'll notice that we define the ID for the Guava dependency by first specifying its group ID, then its artifact ID, followed by its version.
>
> **[0:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=43)** You'll also notice that the dependency is declared with a scope of implementation.
>
> **[0:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=49)** This indicates that Guava is a compile time and a runtime dependency for our project.
>
> **[0:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=55)** On the other hand, you'll notice that the Junit dependency is declared with a scope of test implementation.
>
> **[1:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=62)** This tells Gradle that it's only used for compiling and running the source code for the project's test.
>
> **[1:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=69)** The build script also specifies where these dependencies are pulled from by including a repositories section.
>
> **[1:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=77)** The repositories block is configured to pull dependencies from the Maven repository.
>
> **[1:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=82)** So when a build needs these dependencies, that's where they're going to be downloaded from the first time.
>
> **[1:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=89)** Then after that first run, these dependencies will be stored locally within Gradle's cache.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=95)** So then the next time Gradle needs them, they can be fetched locally, and we won't need to download them from Maven Central.
>
> **[1:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=103)** Let's head out to Maven Central to find a dependency we can include within our project.
>
> **[1:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=109)** I'm just going to use the Hibernate Core as our example.
>
> **[1:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=113)** So I'll go ahead and search for it.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=115)** And then I'm going to click on the first item in the list.
>
> **[1:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=119)** On this page, we'll see some information about the dependency.
>
> **[2:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=123)** You'll notice that it's currently set up to pull a beta version.
>
> **[2:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=127)** Let's switch that up and get something more reliable.
>
> **[2:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=129)** So I'm going to switch to 5.5.8.final.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=134)** On the right side of the page you'll notice that we get a groovy DSL snippet that we can use to include the dependency within our build script.
>
> **[2:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=143)** So let's go ahead and we'll copy that.
>
> **[2:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=145)** And then we'll head back over to Eclipse and we'll paste it inside the dependencies section of our build.
>
> **[2:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=153)** I'm going to go ahead and save that file.
>
> **[2:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=155)** And then I'm going to navigate to a terminal window so we can inspect the dependencies within our build.
>
> **[2:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=162)** To do that I'm going to use my local Gradle installation to execute the dependencies task.
>
> **[2:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=168)** This will give us more information about the dependencies within our project and where they come into play on the different class pass.
>
> **[2:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=178)** Now that we've executed the task, let's scroll up to see its output.
>
> **[3:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=184)** Let's start here with the compile time class path.
>
> **[3:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=188)** You'll notice that the Guava dependency and the Hibernate Core dependency were included on the compile time class path.
>
> **[3:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=196)** Now, you'll also notice that all of their transitive dependencies were pulled for us.
>
> **[3:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=201)** So that's work we didn't have to do.
>
> **[3:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=204)** If we continue to scroll down, you'll see that these dependencies were also included on the runtime class path, but notice what's missing, it's Junit.
>
> **[3:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=214)** And that's because J unit was only included on the compile time class path for our test.
>
> **[3:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=221)** If we scroll down a little bit within this section, there you'll see that it's added.
>
> **[3:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=227)** So those are some of the basics of managing dependencies with Gradle And you can see how easy it makes it to pull external libraries into our projects.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), switch (2), pass (1), continue (1)
> **UI Navigation:** scroll down (3), click on (1), switch to (1), navigate to (1), scroll up (1)
> **CLI Commands:** find (1)
> **Env Vars:** dsl (1)
> **Versions:** 5.5.8 (1)
> **Tools:** terminal (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)

#### Building Spring Boot applications with Gradle
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=0)** - [Instructor] Now that we've covered some of the main concepts behind Gradle, let's use it to build the room service project in our land and hotel application.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=10)** We currently have the source code for the project, but it's not set up to build with a tool like Gradle.
>
> **[0:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=16)** To help us with that, we can use the Spring Initializer found at start.[spring.io](https://spring.io).
>
> **[0:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=23)** It's a web-based tool that can help us quickly launch a new spring project that builds with Gradle or Maven.
>
> **[0:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=30)** All we need to do is provide a bit of information about our project.
>
> **[0:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=34)** So I'm going to indicate that we'll be using Gradle to build our project.
>
> **[0:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=39)** And then I'm going to provide a group ID of com.linkedin.javacd.
>
> **[0:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=45)** Next, for the artifact ID, I'm going to type room-service, and then I'm going to go down here and adjust the package name to remove the room service suffix, so it will just be com.linkedin.javacd.
>
> **[1:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=62)** Next, let's add some dependencies that our project will require.
>
> **[1:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=66)** So, just click on this button and then type Spring Web, that's our first dependency we'll need.
>
> **[1:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=73)** We'll also need the actuator, which will provide us some metrics about our project.
>
> **[1:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=79)** And then we can include Spring Data JPA.
>
> **[1:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=82)** And then finally, the H2 embedded database.
>
> **[1:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=87)** Once you've provided this information to the Spring Initializer, click on this button to download a zip file that contains all the files for the project.
>
> **[1:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=98)** So I'll just go ahead, click on OK, and then I'm going to navigate to our downloads directory where I'll find that zip file.
>
> **[1:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=107)** Here I'm just going to extract it and then I'll copy the room service folder.
>
> **[1:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=112)** Now I'm going to navigate back to our exercise files directory, where I'm going to overlay the folder on top of the existing room service directory.
>
> **[2:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=124)** So here I'll merge in the new files, then I'm going to overwrite the get ignore file.
>
> **[2:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=130)** And then finally, I'm going to skip overriding the source directory because we already have the code for the microservice within our project.
>
> **[2:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=141)** Okay, let's head over to the terminal and take a peek at our project now.
>
> **[2:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=146)** You'll notice that inside the project, there's the Gradle wrapper, so we can use that to build.
>
> **[2:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=153)** Spring also provided the build script.
>
> **[2:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=156)** We see the build.gradle file there.
>
> **[2:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=160)** Let's take a peak at the build script they provided.
>
> **[2:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=164)** You'll notice that the build script includes a few plugins.
>
> **[2:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=168)** The first is the spring boot plugin, which will provide some tasks for packaging our spring application.
>
> **[2:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=175)** The dependency management plugin will help us get the right versions of our library so we can keep them all aligned.
>
> **[3:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=182)** And then finally, the Java plugin is going to help us with things like compiling our source code for the project.
>
> **[3:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=190)** Within the dependency section, you'll also notice that some starter dependencies were added that aligned to those we entered on the Spring Initializer.
>
> **[3:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=199)** These will help us quickly add the new projects into our application and provide some default configurations that get us up and running quickly.
>
> **[3:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=211)** Let's take a look at this another way by using the task, task.
>
> **[3:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=216)** This is going to show us some of the tasks that were added into our project by the spring boot plugin.
>
> **[3:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=225)** If we scroll up, you can see a few of them.
>
> **[3:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=228)** There they are.
>
> **[3:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=229)** The most important of these tasks is the bootJar task.
>
> **[3:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=234)** It's what's going to help build the executable jar that contains the embedded web server.
>
> **[4:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=240)** So it's going to package everything into that one archive that we can use to launch our application.
>
> **[4:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=248)** Okay, let's go ahead and we'll use the Gradle wrapper to build our project.
>
> **[4:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=254)** There we can see Gradle pulling down the dependencies required for our build.
>
> **[4:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=259)** Looks like it's starting to do some compilation, and there we can see the build completed successfully.
>
> **[4:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=266)** Let's take a look at what was built.
>
> **[4:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=268)** So I'm going to write out the structure of our build folder.
>
> **[4:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=274)** And there you see our executable jar was placed inside the libs directory.
>
> **[4:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=280)** The executable jar contains everything we need to launch the application.
>
> **[4:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=286)** So if we navigate into that directory, we can just go ahead and use plain old Java to launch the application.
>
> **[4:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=297)** So I'll type java -jar, then I'm going to set our spring profile to the local profile, and then we just need to provide the name of the jar file.
>
> **[5:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=308)** There's our executable jar.
>
> **[5:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=310)** All right, let's go ahead, we'll kick off this command and that will launch our microservice.
>
> **[5:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=318)** There we can see it's up and running and accepting traffic.
>
> **[5:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=322)** So now we've seen how to build an executable jar for a spring boot application with Gradle.
>
> **[5:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=329)** You'll notice how easy it is to get up and running when we package our modern Java applications in this format.
>
> **[5:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=337)** So let's move on to the next chapter to see how it's done with Maven.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), finally, (3), require (1)
> **UI Navigation:** click on (3), navigate to (1), scroll up (1)
> **Exercise Files:** source code (2), zip file (2), exercise files (1)
> **File Paths:** build.gradle (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** bootjar (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Env Vars:** jpa (1)


### 4. Packaging Applications with Maven

#### Getting started with Maven
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=0)** - [Instructor] Cradle isn't the only choice for building Java applications.
>
> **[0:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=4)** Many Java developers prefer to use Maven instead.
>
> **[0:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=8)** Both tools are great choices, and you'll actually find many similarities between them, but there are some differences.
>
> **[0:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=15)** So let's take a closer look at Maven.
>
> **[0:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=19)** Ubuntu makes it very simple to install Maven on a Linux workstation through the package manager.
>
> **[0:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=26)** Just type the command sudo apt install, then Maven.
>
> **[0:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=31)** Now, if this were a Maven installation on windows, we would need to follow the instructions at the link below.
>
> **[0:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=38)** Once we execute the command, it will begin to download and install Maven on our workstations.
>
> **[0:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=44)** There, it looks like it finished.
>
> **[0:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=47)** Let's go ahead and verify the installation by typing mvn - - version.
>
> **[0:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=53)** And there we can see Maven 3.6.3's installed.
>
> **[0:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=57)** Anytime we want to execute a command with Maven, we would just type mvn.
>
> **[1:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=62)** Eclipse also has great support for Maven, and by default Eclipse ships with m2e plugin.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=70)** We can use it to create a Maven project inside of eclipse.
>
> **[1:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=74)** To do that, just go to file then new and then select Maven project.
>
> **[1:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=80)** Here, we'll want to check the box to create a simple project.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=84)** This will allow us to create a bare bones Maven project.
>
> **[1:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=88)** Once you've checked that, go ahead and hit next.
>
> **[1:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=91)** And then here we'll need to provide some information about our project.
>
> **[1:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=96)** The first thing we'll need to specify is the group ID.
>
> **[1:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=99)** So I'm going to use com.linkedin.javacd.
>
> **[1:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=103)** Then for the artifact ID, I'm just going to call our project "Playground," and we'll leave the version as is.
>
> **[1:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=111)** Now these three fields, the group ID, the artifact ID and the version, make up the Maven coordinates.
>
> **[1:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=119)** Maven coordinates are used to identify exactly which project we're working on at which point in its history.
>
> **[2:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=127)** It's important to understand the Maven coordinates because they're used for other purposes like identifying dependencies and plugins.
>
> **[2:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=136)** With the information for our project in place, Let's go ahead and hit the finish button to create it.
>
> **[2:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=142)** There you can see that Eclipse builds out our new project, and we can expand it to see its structure.
>
> **[2:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=149)** Here you'll see some directories that probably look familiar.
>
> **[2:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=152)** Directories like src/main/java, src/main/resources, src/test/java, and so on.
>
> **[2:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=158)** We saw these in Gradle, and actually this is something Gradle borrowed from Maven.
>
> **[2:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=165)** By default, Maven defines these directories as the conventional locations where it expects to find things like our tests or our source code or different configuration files.
>
> **[2:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=177)** So then when Maven's performing a build, it knows it can just look in these directories, and there, it will find the resources that it expects.
>
> **[3:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=187)** Now within the root of our project.
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=189)** You'll also notice the pom.xml file.
>
> **[3:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=192)** It's where we specify all of the information and configuration for our Maven project.
>
> **[3:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=199)** Like Gradle, Maven also has a wrapper, which is provided through a popular third-party plugin.
>
> **[3:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=205)** It's supposed to be included in Maven four once it's released.
>
> **[3:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=210)** So in the future, if you are using Maven four, the installation we're about to walk through wouldn't be necessary.
>
> **[3:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=215)** Here's the github page for that plugin.
>
> **[3:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=218)** If we scroll down on it, we'll find the command that we can use to install the wrapper within our Maven project.
>
> **[3:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=227)** Let's go ahead and we'll copy that command.
>
> **[3:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=229)** And then we'll navigate to a terminal and inside of the terminal, I'm just going to head into our new playground project.
>
> **[4:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=240)** And here, I'm going to go ahead and execute the command.
>
> **[4:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=243)** This will begin to install the rapper in our project.
>
> **[4:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=246)** Let's take a look here.
>
> **[4:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=248)** There you'll see the Maven wrapper.
>
> **[4:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=250)** The script is named mvnw.
>
> **[4:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=253)** So anytime that we want to execute a goal or a phase with Maven, we can use the rapper to do that.
>
> **[4:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=260)** Let's try it out.
>
> **[4:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=262)** So using the wrapper within the project, I'm going to execute the package phase within Maven.
>
> **[4:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=270)** This is going to build our software and package it into an archive.
>
> **[4:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=275)** There we can see that our project was placed into a jar, and that our build completed successfully.
>
> **[4:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=282)** So now we're up and running with Maven, and we've performed our first build.
>
> **[4:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=286)** However, it didn't really do too much.
>
> **[4:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=288)** Let's fix that over the next few lessons.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), mvn (2), sudo (1), apt (1), make (1)
> **Code Keywords:** let (7), default, (1)
> **Prerequisites:** install (5)
> **Tools:** terminal (2), github (1)
> **UI Navigation:** go to (1), scroll down (1), navigate to (1)
> **File Paths:** pom.xml (1)
> **Versions:** 3.6.3 (1)
> **Exercise Files:** source code (1)

#### Maven Java configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=0)** - If we take a closer look at our Maven project, you'll notice one big problem.
>
> **[0:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=5)** By default, the project is configured to use Java five.
>
> **[0:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=9)** That's not what I'd recommend for a modern Java application.
>
> **[0:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=13)** At a minimum, we should be using a more recent version like Java eight.
>
> **[0:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=18)** To make that adjustment, we need to add some configuration into our Palm.XML file to adjust some properties used by the Maven compiler plugin.
>
> **[0:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=28)** So inside of the Palm, I'm going to add the properties tag and then within it, we'll add two other tags that adjust the configuration of the Maven compiler.
>
> **[0:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=38)** The tag will be named maven.compile.source and then for the value, we're going to specify 1.8, which corresponds with Java eight.
>
> **[0:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=48)** Now there's one more tag we need to add in here.
>
> **[0:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=51)** So let's just go ahead and we'll copy this tag, and then we'll paste it, and switch over from maven.compiler.source to maven.compiler.target Okay.
>
> **[1:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=65)** So that's the configuration we need to switch to Java eight.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=70)** Once you have that in place, just right click on the Palm, go to Maven and then click on update project.
>
> **[1:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=77)** Here within this dialog, hit okay to proceed with the changes.
>
> **[1:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=82)** Then you'll notice that our project gets updated to use Java 1.8.
>
> **[1:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=87)** Now this is still a little bit less than ideal.
>
> **[1:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=90)** Really we want to be using something like Java 11, which is one of the more recent long-term support versions of Java.
>
> **[1:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=98)** That change is a little bit harder because we'll need to adjust one of the plugins within our Palm.
>
> **[1:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=104)** Like Gradle, Maven also uses plugins.
>
> **[1:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=107)** Some of them like the compiler or the jar plugin are included in a project by default.
>
> **[1:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=113)** If we want to see those, we can click on the effective Palm tag and here I'm just going to go ahead and search for the compiler plugin.
>
> **[2:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=122)** There you can see it.
>
> **[2:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=124)** It's defined within this plugin tag.
>
> **[2:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=127)** Now currently, we're using version 3.1 of the plugin.
>
> **[2:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=131)** If we want to use Java 11, this version of the plugin needs to at least be version 3.8 and we need to be running on Maven 3.5 or higher.
>
> **[2:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=142)** So let's go ahead and we'll copy the plugin tag, and then we'll take that XML over to our Palm.XML files source.
>
> **[2:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=152)** Here I'm going to add another tag build, and then inside of that, I'm going to add the plugins tag where we can add different plugins for our build.
>
> **[2:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=162)** Then we'll just paste in the XML inside that tag.
>
> **[2:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=166)** Okay. So we won't need these executions.
>
> **[2:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=169)** So I'm just going to go ahead and remove those and then we'll need to complete the Maven coordinates for this plugin.
>
> **[2:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=176)** So I'm going to add a group ID within the plugin tag.
>
> **[3:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=181)** Here the group ID is going to be org.apache.maven.plug-ins.
>
> **[3:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=188)** Okay. Now we can go ahead and make the switch over to version 3.8.1.
>
> **[3:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=194)** So we're up to the standard we need to run Java 11 in our Maven project.
>
> **[3:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=201)** Now let's just go up to our properties and we can simplify some of this configuration.
>
> **[3:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=207)** Instead of having two properties, we now only need a single property.
>
> **[3:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=213)** It's going to be maven.compiler.release.
>
> **[3:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=217)** So let's go ahead and we'll switch the tag.
>
> **[3:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=221)** And then instead of using 1.8, we can just say 11 for Java 11.
>
> **[3:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=228)** Okay. Now that we have those changes saved to our Palm, let's go ahead and update the Maven project once again.
>
> **[3:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=235)** So just right click, go to Maven, then update project and hit okay.
>
> **[4:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=241)** There we go.
>
> **[4:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=242)** That's much better.
>
> **[4:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=243)** Now we're using Java 11.

> [!info]- Semantic Content
>
> **Versions:** java 11 (5), version 3 (3), 1.8 (2), java 1 (1), 3.5 (1)
> **Code Keywords:** let (5), switch (4), default, (1), default. (1)
> **UI Navigation:** click on (3), go to (2), switch to (1)
> **Env Vars:** xml (4)
> **CLI Commands:** make (2), apache (1)
> **File Paths:** palm.xml (2)
> **Definitions:** is a  (1)
> **Speakers:** - if (1)

#### Maven plug-ins
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=0)** - [Narrator] In Maven, there are core plugins like the Compiler plugin, but there's also a large ecosystem of third party plugins that we can use in our projects build.
>
> **[0:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=11)** Let's add one more plugin to our build, this time from a third party.
>
> **[0:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=16)** The plugin we'll add is named Dependency Check.
>
> **[0:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=19)** It scans our application for known security vulnerabilities when we execute a build.
>
> **[0:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=25)** Here on Maven central, which is the repository where Maven will fetch the plugin from, you can see information about the plugin.
>
> **[0:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=34)** Now, when we use a third party plugin, typically we'll need to do a little bit of research about how to use it.
>
> **[0:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=40)** So let's navigate to the source code for the plugin on GitHub.
>
> **[0:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=45)** Inside of the source code, we'll find the read me file.
>
> **[0:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=48)** It links to the documentation for the plugin.
>
> **[0:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=52)** Let's head over to this GitHub page.
>
> **[0:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=55)** On the page, we see some examples of how we can use the plugin within our project.
>
> **[1:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=61)** This first example performs a security analysis as part of our build.
>
> **[1:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=66)** If we scroll down, you'll notice that the plugin can also fail our build if it finds a vulnerability that's severe enough.
>
> **[1:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=74)** Let's go ahead and we'll copy this configuration so that we can include it within our Maven project.
>
> **[1:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=81)** Once I've copied the XML, I'm going to return to Eclipse and then inside of the plugins tag, I'm going to go ahead and paste it.
>
> **[1:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=91)** Okay, so now the plugin is part of our Maven project.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=95)** Let's head over to the terminal where we can learn more about the plugin.
>
> **[1:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=100)** To do that, we're going to use another Maven plugin, the Help plugin.
>
> **[1:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=105)** On the Help plugin is the describe goal.
>
> **[1:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=108)** It can tell us more about the different plugins that are included within our Maven project.
>
> **[1:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=113)** All we need to do is pass it the plugin flag and then provide the name of our plugin.
>
> **[1:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=119)** So first I'll write the group ID or .owasp and then I'll need to provide the name of the plugin, dependency-check-maven.
>
> **[2:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=131)** All right, let's go ahead and we'll execute this command and there we can see that information about the Dependency Check plugin has been provided.
>
> **[2:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=141)** You'll notice, information about the plugins goals has been provided.
>
> **[2:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=145)** A goal is like an action the plugin can perform.
>
> **[2:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=148)** It's very similar to a task in Gradle.
>
> **[2:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=151)** In my mind, I think of it like a method on a class.
>
> **[2:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=155)** When we run a Maven build, it's executing a set of goals that are found on the plugins in our project.
>
> **[2:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=162)** On our Dependency Check plugin, the check goal is what will perform the actual security analysis of our project.
>
> **[2:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=171)** Let's go ahead and we can execute this goal.
>
> **[2:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=174)** In Maven, there are several ways the goals on a plugin can be executed.
>
> **[2:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=179)** We're going to execute a single goal directly on the plugin using the command line.
>
> **[3:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=185)** So we'll use the Maven wrapper, then we'll provide the name of our plugin and then we just need to specify the goal that we want to execute.
>
> **[3:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=197)** All right, let's go ahead and we'll kick off the goal to start the security scan.
>
> **[3:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=204)** There we can see that the scan has completed.
>
> **[3:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=206)** You'll notice it created a report that we can access.
>
> **[3:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=210)** So I'm going to go ahead and copy the path to the report.
>
> **[3:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=214)** Then I'll open another tab and here I'll use Firefox to open the report.
>
> **[3:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=220)** If we take a look at the report, you'll see that no vulnerabilities were found in our project.
>
> **[3:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=225)** That's good.
>
> **[3:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=226)** The goals provided by plugins are important when working with Maven because they allow us to add other steps into our build.
>
> **[3:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=234)** We saw how to directly execute a goal on a plugin, but goals can also be bound to different phases in our build life cycle.
>
> **[4:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=242)** We'll learn more about this in our next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), from, (1), pass (1), class. (1)
> **Tools:** github (2), terminal (1), command line (1), firefox (1)
> **UI Navigation:** navigate to (1), scroll down (1), open the (1)
> **Exercise Files:** source code (2)
> **Analogies:** similar to (1), think of it like (1)
> **CLI Commands:** find (1)
> **Env Vars:** xml (1)
> **Documentation:** the documentation (1)

#### Maven life cycle and phases
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=0)** - [Tutor] When Maven runs a build, it executes a sequence of phases known as a lifecycle.
>
> **[0:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=6)** Maven has three built-in life cycles: clean, site, and the default life cycle.
>
> **[0:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=12)** The default life cycle has the most phases.
>
> **[0:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=15)** And it's normally what we use to build a project.
>
> **[0:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=18)** If we want to see the phases in the default life cycle, we can describe them using the Help plugin.
>
> **[0:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=25)** All we need to do is pass the name of the command to the plugin as an argument.
>
> **[0:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=32)** So I'm going to use the deploy phase here.
>
> **[0:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=35)** It's the last phase in the default lifecycle.
>
> **[0:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=38)** And that's going to allow us to see all the phases that proceed it, there they are.
>
> **[0:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=43)** In total, there are 23 phases in the default life cycle that we can execute using Maven or the Maven Wrapper.
>
> **[0:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=53)** You'll notice that some of these phases like compile have a plugin goal next to them.
>
> **[1:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=60)** This is known as a binding.
>
> **[1:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=62)** Basically, it's a mapping between a phase and a goal on a plugin.
>
> **[1:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=67)** If a goal is bound to a phase, it will be executed when we reach that phase in the life cycle.
>
> **[1:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=73)** Here's how it works.
>
> **[1:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=75)** Let's imagine that we executed the package phase.
>
> **[1:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=79)** That's not where Maven starts.
>
> **[1:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=81)** First, it's going to begin with the validate phase and look to see if it has a plugin binding.
>
> **[1:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=87)** It doesn't.
>
> **[1:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=88)** So it's going to proceed then to the next phase and look for a binding as well.
>
> **[1:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=92)** It's going to continue this until it finds a face that does have a binding.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=97)** So here we see that the resources goal is bound to the process-resources phase.
>
> **[1:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=103)** That will cause the resources goal to execute.
>
> **[1:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=107)** And then the same thing will happen for the compile phase.
>
> **[1:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=110)** It will execute the compile goal on the Maven Compiler plugin.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=115)** This process is going to continue until we reach and execute our package phase within the life cycle, then Maven will stop.
>
> **[2:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=126)** Let's just go ahead and see this in action by executing the package phase with the Maven Wrapper.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=134)** There we can see a bit of output.
>
> **[2:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=136)** And just like we talked about, you can see the different goals that were bound to the different phases being executed.
>
> **[2:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=143)** There's resources, there's compile.
>
> **[2:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=145)** And then ultimately, we wound up running the jar goal to package our application into an archive.
>
> **[2:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=153)** Now, we're not limited to running one phase at a time.
>
> **[2:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=157)** If we would like, we can go ahead and run a phase from another life cycle.
>
> **[2:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=161)** So here I'm using the clean phase from the clean life cycle.
>
> **[2:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=165)** And then I'll go ahead once again and execute the package phase from the default life cycle.
>
> **[2:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=171)** Now, watch what happens as both phases execute from both life cycles.
>
> **[2:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=178)** Now, you'll notice that another goal was executed.
>
> **[3:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=182)** So there we see the clean goal being executed.
>
> **[3:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=185)** And that's because there was a plugin binding for that goal within the clean phase of the clean life cycle.
>
> **[3:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=193)** Then we continued to execute all of the plugin goals that were bound to different phases within the default life cycle.
>
> **[3:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=201)** There is a really helpful plugin that we can use to see what goals are bound to what phases within the lifecycle.
>
> **[3:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=209)** The buildplan-maven-plugin shows us exactly that.
>
> **[3:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=213)** So let's go ahead, we'll execute the plugins list goal.
>
> **[3:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=217)** And then we can take a look at the output for our build.
>
> **[3:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=221)** So this makes it much easier to understand the life cycle.
>
> **[3:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=225)** Here you can see the different phases within the lifecycle.
>
> **[3:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=229)** Then it shows you the plugin goal that's bound to it.
>
> **[3:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=232)** And it gives you the name of the plugin.
>
> **[3:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=236)** I highly recommend using this plugin to help better understand Maven's life cycles.
>
> **[4:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=242)** The life cycle phases and plugin bindings are very important because they determine the actions our build takes to produce an artifact for our project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), continue (2), pass (1)
> **Definitions:** known as (2), is a  (1)
> **Analogies:** imagine (1), just like (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [tutor] (1)

#### Adding dependencies with Maven
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=0)** - [Instructor] The dependency management system is one of Mavens, most powerful features.
>
> **[0:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=5)** By default, it pulls dependencies from Maven Central.
>
> **[0:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=8)** So it's a great place to look when you need to include a library in your project, like Apache Commons.
>
> **[0:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=15)** Let's go ahead and we'll add that dependency into our Maven project.
>
> **[0:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=20)** To do that, we can copy this snippet of XML.
>
> **[0:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=23)** Now let's first talk about it.
>
> **[0:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=25)** You'll notice it starts with the dependency tag and then it includes the Maven coordinates within it.
>
> **[0:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=33)** This is how Maven identifies the dependency it needs to pull from Maven Central.
>
> **[0:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=38)** So let's go ahead, we'll copy that XML.
>
> **[0:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=41)** And then we'll navigate over to Eclipse.
>
> **[0:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=43)** Now, before we just drop that XML inside of our palm, we need to add a dependencies tag and then inside the dependencies tag, we can add the dependencies for our Maven project.
>
> **[0:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=57)** Okay, now our project will include Apache Commons.
>
> **[1:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=61)** Let's talk about one common scenario.
>
> **[1:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=65)** Often an organization will set up their own artifact repository, so you'll need to configure your project to pull dependencies from it.
>
> **[1:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=76)** And here's how that's done.
>
> **[1:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=78)** You add a repositories tag and then inside of that, you add a repository.
>
> **[1:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=83)** Then you'll need to give an ID for the repository.
>
> **[1:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=86)** Let's say something like corporate.
>
> **[1:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=89)** Then you'll need to provide a URL that points to your organization's internal artifact repository.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=97)** Now we're going to stick with Maven Central.
>
> **[1:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=99)** So I'm going to go ahead and remove this XML from our palm.
>
> **[1:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=104)** And then I'll just go ahead and save it.
>
> **[1:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=107)** Okay, so now we got the dependency within our project and if we expand the Maven dependencies within the package Explorer, you'll notice there's the jar file, that includes the code.
>
> **[2:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=120)** Let's go ahead and we'll create a class that uses some of the code found within Apache Commons.
>
> **[2:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=127)** So here in the new class dialogue, I'm going to package the class within the com.linkedin.JavaCD package.
>
> **[2:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=137)** And then I'll just keep it simple and name it application.
>
> **[2:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=141)** All right, so there's our new class.
>
> **[2:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=143)** I can go ahead, add a main method.
>
> **[2:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=145)** And then inside of that main method, I'm going to print some output to the console and to do that, I'm going to use the string utils class from Apache Commons.
>
> **[2:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=155)** It has a capitalized method that we can use to capitalize a string.
>
> **[2:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=160)** So here I'll just say hello learner, okay.
>
> **[2:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=164)** And that should be capitalized when our application runs.
>
> **[2:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=168)** So now let's head over to the terminal and here I'll use the Maven wrapper to package the application.
>
> **[2:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=176)** And there we can see the jar file that our build produced.
>
> **[2:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=179)** You'll notice it's placed in this directory target.
>
> **[3:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=183)** Let's go take a look at that.
>
> **[3:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=187)** The target directory is where by default Maven places, all of the output from our build.
>
> **[3:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=192)** So there, you can see the compiled application class, and then down here in the root of the target directory, we have our jar file that was created.
>
> **[3:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=202)** Let's just hop into the target directory and we can run our application.
>
> **[3:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=208)** So to do this, we're going to have to specify the class path and I've already prepared that so we can run quite easily.
>
> **[3:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=217)** It's a really long command.
>
> **[3:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=219)** Let's go ahead, we'll execute that.
>
> **[3:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=221)** And there we can see hello learner.
>
> **[3:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=223)** And the H in hello is capitalized.
>
> **[3:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=227)** So Mavens dependency management system made it fairly easy to pull in an external library.
>
> **[3:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=233)** However, just packaging our code in a regular jar made running an application very tricky because we needed all of this to handle the classpath.
>
> **[4:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=243)** Spring Boot can help us by packaging those application dependencies inside of an executable jar.
>
> **[4:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=250)** Let's move on to our next lesson and I'll show you how with Maven.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), default, (1), class. (1), class, (1), this, (1)
> **Env Vars:** xml (4), url (1)
> **Prerequisites:** you'll need (3), set up (1), configure (1)
> **CLI Commands:** apache (4)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Building Spring Boot applications with Maven
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=0)** - [Instructor] Now, that we've explored how Maven builds work, let's package our guest service for the land and hotel application into a Maven project.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=10)** At the moment the source code for the project is placed inside the Maven standard directories, but it's missing some key ingredients like a POM and the Maven Wrapper.
>
> **[0:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=20)** Let's use the Spring Initializer to get those things in place.
>
> **[0:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=25)** So, on the Maven Initializer, I'm going to indicate that we're using a Maven project, then we'll need to provide a package name, which will once again, become .linkedin.javacd.
>
> **[0:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=37)** Then for the name of the artifact, I'm going to use guest dash service.
>
> **[0:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=42)** And we can come down here once again and remove that suffix from our package name.
>
> **[0:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=48)** Okay, now let's go ahead, we'll add the dependencies in.
>
> **[0:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=52)** We need Spring Web, we also need Spring Data JPA.
>
> **[0:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=57)** Then we're going to include the actuator and then finally H2.
>
> **[1:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=62)** Okay, once all that's in place just go ahead and click on this button to download the zip file with the Maven project.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=70)** From there, we can navigate over to our download directory where we'll find the zip file.
>
> **[1:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=75)** I'm just going to extract it here and then I'll copy the extracted folder named guest service.
>
> **[1:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=82)** Then I'm going to take that over to our exercise files directory and I'm going to overlay our existing guest service folder.
>
> **[1:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=90)** So, here I'll merge so that we get the new files, then I'll overwrite our Git ignore file, and then I'll skip overriding the source since we already have it.
>
> **[1:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=101)** Okay, let's head to the terminal and we can see what's within that directory.
>
> **[1:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=107)** There's the Maven Wrapper that Spring provided.
>
> **[1:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=110)** And you'll also notice a pom.xml that was provided by Spring.
>
> **[1:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=114)** Let's take a look at that POM.
>
> **[1:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=117)** If you look closely at this POM, you'll recall that it's very similar to what we saw earlier in the course.
>
> **[2:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=124)** There's the Spring Boot Starter parent POM, there's some of the Starter dependencies we talked about for quickly getting up and running with Spring projects.
>
> **[2:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=133)** And here at the bottom you'll see the Spring Boot Maven plugin.
>
> **[2:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=138)** So it's going to provide some additional goals that we can include within our build.
>
> **[2:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=145)** Let's go ahead and we'll use the build plan plugin to take a look at some of those.
>
> **[2:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=151)** So, here we can see how our build will execute in all the plugin bindings.
>
> **[2:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=156)** It looks very similar to when we packaged a jar.
>
> **[2:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=160)** But you will notice one difference, within the package phase we're going to execute the repackage goal on the Spring Boot Maven plugin.
>
> **[2:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=171)** And this is what's going to build that executable jar that includes all of our different dependencies in our embedded server.
>
> **[3:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=183)** So let's go ahead and we'll package the application into that executable jar.
>
> **[3:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=192)** Okay, there we can see that the jar was placed within our target directory.
>
> **[3:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=197)** I'm going to go ahead and I'll navigate into the target directory.
>
> **[3:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=201)** And from here, we're going to launch our executable jar using plain old Java.
>
> **[3:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=206)** So I'll use the Java jar command, then I'll add the profile for Spring.
>
> **[3:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=214)** That's going to be our local profile and then I just need to provide the name of the jar, there it is.
>
> **[3:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=221)** Okay, let's go ahead, we can launch the application.
>
> **[3:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=227)** And there we see that the service is up and accepting traffic.
>
> **[3:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=232)** If we'd like we can go ahead and open a browser and hit that service.
>
> **[3:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=236)** It's running on local host at port 8,882.
>
> **[4:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=241)** And then the end point is API forward slash guest dash service and then guest.
>
> **[4:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=249)** All right, so, there we see some Jason served up by our microservice.
>
> **[4:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=255)** So, that's the last build that we needed to establish for the services in our land and hotel application.
>
> **[4:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=261)** This time we use Maven.
>
> **[4:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=263)** So, at this point we should probably standardize on a single build tool for all the microservices within our application.
>
> **[4:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=271)** So, let's go forward using Maven throughout the rest of the course.
>
> **[4:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=275)** If you would like go back and try to switch over the room service from Gradle to Maven, or you can just pick up with the exercise files in our next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), switch (1)
> **Env Vars:** pom (4), jpa (1), api (1)
> **Exercise Files:** zip file (2), exercise files (2), source code (1)
> **CLI Commands:** find (1), git (1)
> **Cross-References:** earlier in (1), we talked about (1)
> **File Paths:** pom.xml (1)
> **Ports:** port 8 (1)
> **Tools:** terminal (1)


### 5. Continuous Integration with Jenkins

#### Continuous integration overview
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=0)** - [Instructor] Continuous integration or CI, helps teams increase the quality of their code and keeps their code base in a working state that's always deployable.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=10)** Within our continuous delivery process, the CI phase is triggered each time code is merged into the repository.
>
> **[0:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=18)** For teams experienced with the practice, this might occur many times per day or several times each hour.
>
> **[0:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=26)** By merging their code this frequently, teams avoid the integration of large change sets towards the end of the project.
>
> **[0:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=33)** That's because they're always integrating their code.
>
> **[0:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=36)** So they never encounter this situation.
>
> **[0:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=39)** The continuous integration process is often modeled as a separate pipeline that has the goal of producing an artifact.
>
> **[0:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=48)** For modern Java applications, this is a container image that gets stored within a registry where it can be retrieved for deployment.
>
> **[0:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=57)** The CI pipeline is executed by a platform known as a continuous integration server, but sometimes you'll hear it referred to as a build server or an automation server.
>
> **[1:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=67)** In our course, we'll be using Jenkins.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=70)** It automates and orchestrates the execution of a pipeline script that declares the tasks necessary to build, verify, and package our software.
>
> **[1:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=79)** These tasks often use third-party plugins to perform their work.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=84)** So, you'll typically find plugins that integrate build tools like Maven or that perform specialized tasks like checking that code coverage meets certain standards.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=95)** Let's take a look at some steps you might find declared in a simple CI pipeline.
>
> **[1:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=100)** When a CI server detects a code change, it pulls an exact copy of the repository code onto a clean environment.
>
> **[1:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=108)** Here, a build tool like Maven compiles and packages the software.
>
> **[1:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=113)** There's two really important points to highlight here.
>
> **[1:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=116)** The source code used to perform the build matches exactly what's in the code repository and the build is performed on a clean server.
>
> **[2:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=126)** Since the build occurs on a neutral server, it can detect any problems that might not appear on a local workstation.
>
> **[2:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=133)** So if you forget to check a file into Git, it's going to break your build.
>
> **[2:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=138)** After the code is built, automated tests are executed against the binaries to ensure they function as expected.
>
> **[2:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=145)** If those tests pass, the code is then analyzed using static analysis tools like SonarQube.
>
> **[2:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=152)** It can provide reports that help us measure and enforce code quality.
>
> **[2:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=157)** If the software meets the quality standards, it's then packaged into a container image, which is stored in a container registry where it waits deployment to an environment.
>
> **[2:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=168)** Through automation, the CI pipeline standardizes the repeatable process which builds, verifies, and packages our software.
>
> **[2:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=176)** This is what enables the software team to perform so many frequent builds and keeps the flow of changes to our software constant.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1), pass (1), static (1)
> **CLI Commands:** find (2), git (1)
> **Definitions:** is a  (1), known as (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Getting started with Jenkins
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=0)** - [Narrator] Within the lab environment, there's a Jenkins server that we can use to automate the continuous integration process for our microservices.
>
> **[0:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=9)** To access Jenkins, click this link on the bookmarks bar.
>
> **[0:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=13)** It will navigate to local host on port 8080, where Jenkins is served.
>
> **[0:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=18)** Once you land on this page, go ahead and click this option to log into Jenkins.
>
> **[0:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=24)** Here we'll use the credentials admin, admin to log in.
>
> **[0:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=28)** Once you've entered those just hit the sign in button, and that will take you into Jenkins.
>
> **[0:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=34)** Now, inside of this Jenkins installation, there are several plugins pre-installed that will help us build out our pipeline.
>
> **[0:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=41)** Let's go take a look at those.
>
> **[0:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=43)** So come over here and click on manage Jenkins.
>
> **[0:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=46)** And then we can click on this option to manage the plugins.
>
> **[0:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=51)** On this tab, we can see all the plugins that are installed within the Jenkins server.
>
> **[0:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=57)** Here I'm just going to filter things down to pipeline, and then we can start talking about some of these plugins.
>
> **[1:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=64)** The first I'll call your attention to is the Docker Pipeline plugin.
>
> **[1:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=68)** This will allow us to run different steps of our pipeline within a Docker container, which can help make our builds more efficient.
>
> **[1:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=78)** If we scroll down on the page, we'll also find the Pipeline Plugin.
>
> **[1:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=83)** This plugin allows us to script Jenkins builds as code inside of a Jenkins file.
>
> **[1:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=89)** This is an alternative to building out Jenkins jobs, using the forms on the user interface.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=97)** Next we're going to scroll up and I'll highlight the GitHub Branch Source plugin.
>
> **[1:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=103)** This is a plugin that we'll use heavily throughout the course.
>
> **[1:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=106)** It can automate the creation of pipelines based on Jenkins files that it finds in the repositories inside of a GitHub Organization.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=115)** So you create a GitHub Organization and then this plugin scans it to find those Jenkins files.
>
> **[2:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=122)** And when it does, it builds a pipeline in Jenkins.
>
> **[2:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=127)** The last plugin that we'll discuss is the Credentials plugin.
>
> **[2:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=131)** We can use it to store credentials like our GitHub Personal Access Token or our SSH keys.
>
> **[2:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=137)** This is important because Jenkins will need to securely connect to all the other tolling within our pipeline.
>
> **[2:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=144)** Let's go ahead and we can set up some credentials within Jenkins.
>
> **[2:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=148)** So navigate back to manage Jenkins and then head into the managed credentials section, here you'll click on Jenkins, then you'll navigate into the global credentials and then here's the option to add credentials.
>
> **[2:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=164)** Within the section, we're going to create two new credentials.
>
> **[2:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=168)** One is going to be for our GitHub Personal Access Token and the other for our SSH key.
>
> **[2:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=176)** When setting up our personal access token, the first thing we'll need to do is provide our GitHub username, and then we'll need to fetch our personal access token.
>
> **[3:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=186)** You'll recall that earlier in the course, I placed mine within a PAT file in my home directory.
>
> **[3:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=192)** So I'm just going to write that out to the console, copy the value, and then I'll return to Jenkins and paste it as the password.
>
> **[3:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=201)** Next we'll need to provide an ID for this credential.
>
> **[3:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=205)** I'm going to call it, github-pat.
>
> **[3:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=209)** And then if we'd like, we can go ahead and we can add a little description about this credential.
>
> **[3:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=215)** Okay, let's go ahead and we'll set up our GitHub Personal Access Token.
>
> **[3:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=220)** All right, we're going to make one more credential and that's going to be our SSH key.
>
> **[3:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=224)** So click on add credentials, and then here you'll want to select SSH username with private key.
>
> **[3:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=232)** This will change the form up a bit.
>
> **[3:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=235)** First, we're going to provide the name of our credential, which is going to be github-SSH-key.
>
> **[4:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=244)** Then for the username, we'll specify our GitHub username.
>
> **[4:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=249)** And then finally we'll need to enter the private key that we created earlier in the course.
>
> **[4:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=256)** So I'm going to navigate back to my home directory, where I've also placed the private key.
>
> **[4:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=262)** I'll just echo that out to the terminal and then I'll go ahead and carefully copy its value.
>
> **[4:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=270)** Okay looks like I got it there.
>
> **[4:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=273)** Now let's return back to Jenkins and here I'll click this add button, which allows me to paste in the private key inside of the form.
>
> **[4:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=283)** All right.
>
> **[4:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=284)** Once that's in place, I'll go ahead and hit, okay.
>
> **[4:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=286)** To create the credential.
>
> **[4:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=289)** And now you'll see that we have two credentials stored within Jenkins that it can use to connect to GitHub.

> [!info]- Semantic Content
>
> **Tools:** github (11), terminal (1)
> **CLI Commands:** ssh (5), docker (2), make (2), find (2)
> **Code Keywords:** let (4), private (4), interface (1)
> **UI Navigation:** click on (4), navigate to (1), scroll down (1), scroll up (1)
> **Env Vars:** ssh (5), pat (1)
> **Cross-References:** earlier in (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** set up (2)

#### Creating a Jenkins pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=0)** - [Instructor] Let's start building our first Jenkins pipeline.
>
> **[0:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=4)** We'll create it within the room service project, which you'll notice I've switched over to use Maven.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=10)** When working with Jenkins, the pipeline is written within a Jenkins file that's normally placed in the root directory of a project.
>
> **[0:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=18)** Let's go ahead and we can create this file with Eclipse.
>
> **[0:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=22)** Just right click on the project, then go to new and then come down here and click file.
>
> **[0:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=28)** Then just name the file Jenkins file.
>
> **[0:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=31)** Now, one thing to really look out for here, make sure the F is lowercase.
>
> **[0:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=37)** If you have the name correct, go ahead and hit finish and that will create our new Jenkins file inside of Eclipse.
>
> **[0:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=44)** Eventually we'll need to create a Jenkins file for each microservice, but for now let's work in this project and we'll make the script generic enough that later we can just drop it into the other projects.
>
> **[0:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=57)** Inside of this Jenkins file is where we'll define our pipeline.
>
> **[1:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=61)** The code in the file uses a DSL that has a declarative syntax which is very similar to Groovy.
>
> **[1:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=69)** Within eclipse, I've already installed the Jenkins editor plugin, it provides some code completion and syntax highlighting that'll help us write our pipeline.
>
> **[1:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=79)** To start out, we'll need to add a pipeline block in the Jenkins file.
>
> **[1:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=83)** It holds all of the stages and steps that we want to include within our pipeline.
>
> **[1:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=88)** It's really where we define all the actions in the build.
>
> **[1:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=92)** After declaring our pipeline, we need to specify what agent the pipeline will run on.
>
> **[1:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=98)** Here, I'm going to go ahead and set this to any, this will cause a new workspace to be created for the pipeline and an executer to be allocated for it.
>
> **[1:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=107)** The workspace is like a folder where the pipeline stores all of its files and the executer will run the pipeline on one of Jenkins nodes.
>
> **[1:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=117)** Let's save our file and then we'll head over to the Jenkins configuration and I'll show you what I mean.
>
> **[2:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=122)** Once you're in Jenkins, go ahead and click on the manage Jenkins option on the sidebar and then click on manage nodes.
>
> **[2:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=131)** Here, you'll see the master node for our Jenkins server.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=134)** Let's click on that.
>
> **[2:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=136)** And then we're going to go ahead and click on its configuration.
>
> **[2:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=140)** So in Jenkins, a node is a system that builds can be sent to by the central Jenkins controller.
>
> **[2:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=147)** This allows the work performed by Jenkins like our builds to be distributed and scaled across a number of hosts.
>
> **[2:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=155)** In a typical corporate environment, you'll find many nodes connected to Jenkins, but in our lab, we're just going to be running the Jenkins controller and builds on the same system.
>
> **[2:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=166)** Now, if you're running part of your build in a container, it's important these nodes have Docker installed on them, and we do have Docker in the lab.
>
> **[2:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=176)** Now at the moment we have two executor's on our node, but I'm going to go ahead and increase this to five that way we can run more builds at the same time.
>
> **[3:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=185)** Once you've upped the number of executor's just go ahead and hit save, that way those changes are applied to our master node.
>
> **[3:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=193)** So now we have a Jenkins file, a skeleton for a pipeline and a few more executor's.
>
> **[3:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=198)** In our next lesson, we'll expand upon this pipeline to establish the stages in our CI process.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), make (2), docker (2), find (1)
> **UI Navigation:** click on (5), go to (1)
> **Code Keywords:** let (5)
> **Env Vars:** dsl (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Pipeline stages
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=0)** - [Instructor] Within our Jenkins pipeline, we'll need to define the different stages and steps that will execute the CI process.
>
> **[0:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=7)** This starts by adding a stages block inside the pipeline section of the script.
>
> **[0:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=13)** Inside of this block, we can add individual stages that we'll execute as part of the pipeline.
>
> **[0:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=19)** So let's go ahead and we'll add a stage that builds our application.
>
> **[0:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=24)** You just provide the name of the stage here.
>
> **[0:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=27)** This stage will compile our application source code and then package the application into an archive like a jar.
>
> **[0:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=36)** A stage is like a group of commands.
>
> **[0:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=38)** And in the pipeline, those commands are known as steps.
>
> **[0:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=42)** So let's add a steps block inside of our stage.
>
> **[0:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=46)** And then the first step we'll execute is the sh step.
>
> **[0:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=49)** It allows us to execute shell commands inside of our pipeline.
>
> **[0:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=54)** Now, eventually, we'll be building the application withMaven here.
>
> **[0:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=58)** But for now, let's just echo some output to the console so that we can watch our pipeline execute.
>
> **[1:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=65)** So here, I'll say Performing Maven Build.
>
> **[1:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=69)** Okay, now we have our first stage.
>
> **[1:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=72)** Let's go ahead and we'll copy this.
>
> **[1:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=74)** And then we'll build out some of the other stages within our CI process.
>
> **[1:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=80)** After the application's built, we'll need to create a container image that we'll use to run the application.
>
> **[1:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=87)** So here, I'm just going to update the name of the stage to Build Container Image, and then we'll change the output to the console to reflect that.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=97)** Okay, now we have the stage that builds our container image.
>
> **[1:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=101)** After that, we'll need to publish the image to a container registry.
>
> **[1:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=106)** So let's add a final stage into our pipeline and we'll update the name to indicate that we're publishing the image.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=115)** And then once again, we'll change the output so that we can see that information as our pipeline executes.
>
> **[2:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=123)** So now, our pipeline starting to shape up, we have three stages that correspond with the work we'll perform in CI process.
>
> **[2:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=130)** But right now, our pipeline isn't generic enough to build each of our services.
>
> **[2:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=135)** Let's pick up there in our next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (1)
> **Code Identifiers:** withmaven (1)
> **Exercise Files:** source code (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Environment variables
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=0)** - [Instructor] Within our pipeline.
>
> **[0:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=1)** We can use environment variables to make our scripts more flexible and reusable.
>
> **[0:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=7)** Environment variables are declared inside of an environment block within our pipeline.
>
> **[0:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=13)** Here we can define and assign variables that are accessible by all the pipeline stages.
>
> **[0:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=19)** So let's start out by creating a variable that will store our GitHub organization name.
>
> **[0:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=25)** We first declare the variable name, and then we assign it a value.
>
> **[0:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=29)** I'm going to use single quotes for our first variable.
>
> **[0:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=32)** This is like creating a string literal in Java.
>
> **[0:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=35)** So inside of the single quotes, I'm just going to type the name of my GitHub organization.
>
> **[0:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=42)** Here you'll want to be careful to use your GitHub organization name and not mine.
>
> **[0:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=48)** Now let's create another variable that will store the name of our container registry.
>
> **[0:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=54)** Here I'm going to use double quotes because that allows us to use string interpolation.
>
> **[1:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=60)** That means we can reference another variable inside of this string.
>
> **[1:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=64)** To do that we need to create a placeholder.
>
> **[1:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=67)** That's done by typing a dollar sign, an opening curly brace, and then a closing curly brace, and then inside of the curly braces, we just place the name of another variable that we would like to include within this string.
>
> **[1:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=82)** This will get evaluated as an expression and the value for this variable will be placed inside the string.
>
> **[1:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=90)** Now here we'll also need to include the domain for our container registry, which is the GitHub container registry.
>
> **[1:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=99)** It's found at [ghcr.io](https://ghcr.io), then we'll place a forward slash, and then we'll end the string with a forward slash as well.
>
> **[1:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=108)** Now let's create another variable that will store the artifactId from our POM.xml file.
>
> **[1:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=116)** Within Jenkins we can use a pipeline utility step to retrieve that information from the POM.
>
> **[2:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=122)** So here we'll just say, "read Maven POM", and then we'll invoke the getArtifactId method on that utility method.
>
> **[2:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=132)** This will retrieve the artifactId from our POM and store it inside of our artifactId variable.
>
> **[2:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=140)** Now let's go ahead and we can use that in another variable, the JAR name.
>
> **[2:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=144)** So here we'll store the name of the JAR that we'd like to create through our Maven build.
>
> **[2:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=150)** First, I'm going to reference the artifactId variable, using a placeholder.
>
> **[2:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=156)** Then I'm going to specify a dash and then I'm going to use another placeholder to obtain the build number.
>
> **[2:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=163)** Now the build number is another environment variable that Jenkins makes available by default for our pipeline.
>
> **[2:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=171)** There's a number of these variables that Jenkins will make available to us.
>
> **[2:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=176)** You can consult the documentation to see them all.
>
> **[2:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=179)** Here we're using the build number as sort of a version ID for our JAR.
>
> **[3:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=185)** All right, let's create one final variable, which will be the image name.
>
> **[3:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=190)** So here I'll use double quotes once again, then I'm going to include the container registry variable through interpolation, and following that will include the artifactId.
>
> **[3:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=202)** And this will help build the name of our container image.
>
> **[3:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=206)** Okay, now that we've declared these variables, let's go ahead and we can use them inside of our pipeline stages.
>
> **[3:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=214)** So here where we're building the application, I'm going to say "Performing Maven Build" and then I'll include the name of the artifactId.
>
> **[3:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=224)** Now you might be wondering why we can use single quotes here, and that's because this is actually part of the Shell Command that we're executing.
>
> **[3:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=233)** So it will be referenced through that command as opposed to interpolation.
>
> **[4:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=240)** All right, let's move on to our next stage where we're building the container image.
>
> **[4:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=246)** And here I'm just going to add the image name into this step.
>
> **[4:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=251)** And then we'll come down here to where we're publishing the container image.
>
> **[4:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=255)** And I'm going to switch this up a little bit.
>
> **[4:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=256)** I'll say where we're publishing the container image to, and here we can use our container registry variable.
>
> **[4:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=266)** Okay, so now we're making use of these variables inside our pipeline stages, and this helps us avoid hard coding values that we might need for each specific microservice.
>
> **[4:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=277)** And that's going to make our pipeline generic enough that we can reuse it across multiple microservices in our application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (1)
> **Code Identifiers:** artifactid (6), getartifactid (1)
> **Env Vars:** pom (4), jar (3)
> **Tools:** github (4)
> **CLI Commands:** make (3)
> **File Paths:** pom.xml (1)
> **URLs:** [ghcr.io](https://ghcr.io) (1)
> **Documentation:** the documentation (1)

#### Jenkins projects
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=0)** - [Instructor] Now that we have a basic pipeline script, let's see how it gets executed within Jenkins.
>
> **[0:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=7)** In Jenkins, we have the option to create a GitHub organization project thanks to the Branch Source plugin that we talked about earlier.
>
> **[0:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=16)** This project type will scan the repositories in our GitHub organization and create a new pipeline job for each branch within the repository where it finds a Jenkins file.
>
> **[0:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=28)** It's a perfect fit for when your microservices are stored in a poly repo, but there's a bit of configuration first.
>
> **[0:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=34)** So let's go put that in place.
>
> **[0:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=37)** So just navigate back to the Dashboard, and then, click on this option to manage Jenkins.
>
> **[0:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=43)** From there, we'll want to go into the system settings.
>
> **[0:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=46)** So click on Configure system.
>
> **[0:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=49)** And then, if we scroll down within this page, we'll find the GitHub Enterprise Server section.
>
> **[0:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=58)** There it is.
>
> **[0:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=59)** So go ahead and click on Add, and then here we'll need to provide the end point of our GitHub instance.
>
> **[1:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=66)** In this case, we're using the public GitHub API and that's located at [https://api.github.com](https://api.github.com).
>
> **[1:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=78)** Okay, then we just need to provide a name for this enterprise server.
>
> **[1:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=82)** I'll just call it GitHub.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=84)** Now that we have that in place, let's go ahead and we'll save our configuration.
>
> **[1:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=89)** And then, on the Dashboard, we can begin to set up our GitHub organization project.
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=94)** To do that, just click on New item, and then, we'll need to provide a name for the project.
>
> **[1:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=100)** I'm going to call it Landon dash hotel dash application.
>
> **[1:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=105)** All right, once that name is in place, go ahead and click on the Organization folder, and then, hit Okay to create it.
>
> **[1:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=112)** This will bring up a form where we can begin to configure the project.
>
> **[1:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=117)** The first thing that we'll need to do is connect it to our GitHub organization.
>
> **[2:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=122)** So here under Repository sources, click on the Add drop down and select GitHub organization.
>
> **[2:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=129)** Then, you'll want to select your GitHub credentials.
>
> **[2:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=132)** There's our personal access token, let's select that.
>
> **[2:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=136)** Next, we'll need to provide a value for the owner field.
>
> **[2:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=140)** This is the name of your GitHub organization.
>
> **[2:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=143)** Mine is hotel dash landing dash KB.
>
> **[2:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=146)** Now make sure you enter your organization name here.
>
> **[2:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=152)** Next, we're going to scroll down and adjust some of the scanning behaviors of this project.
>
> **[2:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=158)** So the first thing I'm going to do is just remove this option to Discover poll requests from forks.
>
> **[2:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=165)** And then, I'm going to get ahead a little bit on setting up our automated deployment.
>
> **[2:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=169)** So here I'm going to click on the Add button, and then, if we scroll down you'll see within Repository and here we'll want to select Filter by name with wild cards.
>
> **[3:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=182)** You'll see this option where we can Exclude different branches.
>
> **[3:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=187)** I'm going to tell our pipeline to ignore the release branch.
>
> **[3:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=190)** So if it finds a branch named Release, it's going to ignore any Jenkins files that it finds within it.
>
> **[3:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=198)** Okay, with that in place, let's scroll down a little bit more, and there's some other configuration we'll need to put in place.
>
> **[3:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=205)** Here within this section, Scan organization folder triggers, we're going to adjust how frequently our project polls the organization to discover new Jenkins files.
>
> **[3:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=217)** It's currently set up for one day, which isn't going to be very great for our lab.
>
> **[3:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=222)** I'm just going to reduce this down to one minute to speed things up.
>
> **[3:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=226)** Now in an enterprise environment, you might want to scale this back just a tad.
>
> **[3:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=231)** Okay, with that in place, let's keep scrolling down and here, you'll see the Child scan triggers.
>
> **[3:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=237)** We're going to adjust this polling frequency as well to one minute, and this will determine how frequently the project polls the individual repositories that it discovers.
>
> **[4:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=249)** So these are going to be the repositories containing our microservices and the actual source code.
>
> **[4:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=256)** Okay, with that configuration in place, let's go ahead and we'll click on Save in order to create the project.
>
> **[4:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=263)** Now you'll notice that instantly it begins scanning our GitHub organization, but it's not finding any Jenkins files within our projects.
>
> **[4:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=274)** So let's change that.
>
> **[4:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=276)** We can go ahead and push our Jenkins file for the room service to the GitHub organization.
>
> **[4:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=282)** So I'm going to hop over to the terminal, and within the Room service folder, I'm just going to perform a commit and then, we're going to push these changes over to GitHub.
>
> **[4:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=297)** So first I'll set up my commit, I'll just say we're pushing the Jenkins file, and then, we'll go ahead and push the changes.
>
> **[5:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=306)** Okay, they should be over in GitHub, and if we navigate back to Jenkins, we should see it pick up the changes to the repository.
>
> **[5:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=315)** So there we see our GitHub organization project, and pretty soon we should see a build queue up.
>
> **[5:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=323)** There we can see the scan of the GitHub organization taking place.
>
> **[5:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=328)** Let's go back to our project.
>
> **[5:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=330)** There you can see it picked up the room service and the Jenkins file within the main branch, and now it's starting to perform a build.
>
> **[5:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=339)** Okay, it looks like our build was successful.
>
> **[5:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=342)** Let's go ahead and we'll click on the build, and then, inside of it, we can see all the output that was written to the console when our build was performed.
>
> **[5:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=354)** So there we start to see some of the steps that we included within the stages of our pipeline.
>
> **[6:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=361)** There's the output for our step to build the application.
>
> **[6:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=365)** Here's the output for when we want to create the container image.
>
> **[6:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=368)** And then, finally, the output from the stage that publishes the container image.
>
> **[6:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=374)** Excellent, so we executed our first pipeline, but we will need to do some more work to actually build the application as part of our continuous integration process, and to get those containers built and published.

> [!info]- Semantic Content
>
> **Tools:** github (18), terminal (1)
> **Code Keywords:** let (10), case, (1), public (1), finally, (1)
> **UI Navigation:** click on (9), scroll down (4)
> **Prerequisites:** set up (3), configure (2)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** we talked about (1), go back to (1)
> **URLs:** [https://api.github.com](https://api.github.com) (1)
> **Env Vars:** api (1)

#### Maven builds in Jenkins
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=0)** - [Instructor] One of the best practices for continuous integration is to build your software on a neutral server.
>
> **[0:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=7)** So we're going to update our Jenkinsfile to include a Maven build, kind of like what we did on our local workstation, except this time it's going to be automated, and performed on a cleaned server.
>
> **[0:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=20)** To build our Java application with Maven inside of our Pipeline, we're going to add a new step into the Build Application stage.
>
> **[0:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=28)** So inside the steps block, I'm going to add a new shell step, and here I'll use the Maven Wrapper to execute the clean and verify phases of the Maven lifecycle.
>
> **[0:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=40)** Now, you might be asking, where did the Maven Wrapper come from?
>
> **[0:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=44)** Well, when Jenkins executes a Pipeline, it pulls all the source code from the repository containing the Jenkinsfile.
>
> **[0:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=53)** And you'll remember that we added the Maven Wrapper to our room-service project.
>
> **[0:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=58)** So that makes it available to our Pipeline to execute Maven commands.
>
> **[1:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=64)** Now, the next thing we'll do, we'll make our Pipeline generic enough so we can reuse it across different microservices.
>
> **[1:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=72)** The change starts in the pom.xml file.
>
> **[1:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=75)** So inside the file, I'm going to scroll down to the build section.
>
> **[1:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=79)** Here, I'm going to add the final name tag.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=84)** This tag allows us to specify the name of the jar that Maven will produce when we build our app.
>
> **[1:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=91)** Now, I'm not just going to hard-code any old jar name here.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=95)** I'm going to use an argument.
>
> **[1:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=98)** To add an argument inside of a pom, we just use a dollar sign, then a set of curly braces, and then the name of our argument.
>
> **[1:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=106)** In this case, it's going to be jarName.
>
> **[1:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=110)** This allows the argument to be passed into the pom when we execute a Maven build.
>
> **[1:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=116)** Let me go ahead, I'll copy the name of our argument, and then I'll show you how we pass it.
>
> **[2:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=122)** Back in our Jenkinsfile, where we use the Maven Wrapper to execute the clean and verify phases, we can just add a -D, then the argument name, then an equal sign.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=134)** And here we provide the value for the argument.
>
> **[2:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=137)** Now, you'll remember, we already have a jar name environment variable that stores the name of our jar.
>
> **[2:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=144)** Let's go ahead, we'll copy that, and then we'll add a placeholder here for the value of the argument.
>
> **[2:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=152)** Okay, now our Pipeline is set up to build an executable jar with Maven.
>
> **[2:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=157)** Let's do one more thing though.
>
> **[2:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=159)** We're going to use the Docker Pipeline plugin to execute this stage inside of a Docker container.
>
> **[2:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=167)** If we do a lot of builds, this can help increase the efficiency of our Pipeline.
>
> **[2:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=172)** To run this stage inside of a Docker container, we need to override the configuration of the agent used to execute it.
>
> **[3:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=180)** So I'm going to go ahead and add an agent block inside of the stage, and then inside of that, we're going to add a Docker block.
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=189)** And here we can use the Docker Pipeline plugin to set up the Docker container that will run the stage.
>
> **[3:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=196)** The first thing we do is provide an image parameter, and this is the name of the container image that we would like to use to run the stage.
>
> **[3:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=206)** Now, we're going to need a JDK.
>
> **[3:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=208)** So I'm going to use the open jdk:11 image here.
>
> **[3:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=213)** Then we're going to add one more parameter.
>
> **[3:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=216)** It's going to be the reuseNode parameter, and I'm going to set it to true.
>
> **[3:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=220)** Now what this does, it makes the workspace that's used in this stage available for later stages in the Pipeline.
>
> **[3:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=229)** So, since we're going to be building our executable jar, we'll need that in later stages when we do something like build a container image.
>
> **[3:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=239)** With this configuration in place, our Pipeline will execute this stage on a Docker container.
>
> **[4:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=245)** So that means the node we run it on has to have a container runtime installed.
>
> **[4:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=251)** Now, (indistinct) Lab already has Docker, so we're set up there.
>
> **[4:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=255)** Okay, let's go ahead, we'll save all of our changes, then we'll head over to the terminal, and we can start to push these over to GitHub.
>
> **[4:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=265)** So first, I'll add the changes to the stage, then we'll go ahead and we'll create a new commit, here, I'll say adding Maven and Docker, and then we'll push these changes over to GitHub, to trigger Jenkins to start executing our Pipeline.
>
> **[4:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=283)** Now that they're pushed, let's go to Jenkins, and we can watch this Pipeline execute.
>
> **[4:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=289)** So I'll navigate inside of our room-service Pipeline into the main branch, and then we'll wait for the Pipeline.
>
> **[4:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=298)** And right there we see the build queuing up, there it's starting to execute.
>
> **[5:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=304)** Let's go check out the console output.
>
> **[5:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=308)** Okay, it looks like the Pipeline was successful.
>
> **[5:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=311)** We can also see we performed a successful Maven build.
>
> **[5:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=315)** So let's scroll up a little bit further, and here we can check out the stage that ran inside of a Docker container.
>
> **[5:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=324)** There we see the container image that we ran the stage with, and here you can actually see the Docker run command that executed the stage.
>
> **[5:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=334)** Now our Pipeline is able to build the application with Maven and package it inside of an executable jar.
>
> **[5:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=341)** That's great, but there's a little bit more work to do from here to run the application inside of a container.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (11), make (1), node (1)
> **Code Keywords:** let (7), case, (1), pass (1), override (1)
> **Tools:** github (2), terminal (1)
> **UI Navigation:** scroll down (1), go to (1), scroll up (1)
> **Prerequisites:** set up (3)
> **Code Identifiers:** jarname (1), reusenode (1)
> **File Paths:** pom.xml (1)
> **Ports:** :11 (1)

#### Containers
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=0)** - [Instructor] Packaging modern Java applications within containers has become a popular practice because it's a consistent and portable way to run your software.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=10)** Let's take a closer look at containers and how they impact the way we build and run modern Java applications.
>
> **[0:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=17)** Containers allow us to easily package our application with its entire dependency stack into a single executable unit known as a container image.
>
> **[0:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=27)** When building container images, we first need to package our Java application into an executable jar that includes an embedded server.
>
> **[0:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=37)** Then we add other dependencies to run the application to the image.
>
> **[0:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=41)** So inside of the container, we might place some configuration files necessary to run the app.
>
> **[0:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=48)** But we don't stop there.
>
> **[0:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=50)** We'll also include the JVM inside the image and a separate file system that mirrors the host operating system.
>
> **[0:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=58)** So you wind up with the single artifact, the container image that contains not only the application, but its environment as well.
>
> **[1:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=66)** Once we've built a container image, we can install a container runtime on any host and deploy the image there to run.
>
> **[1:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=75)** Containers make our applications very portable.
>
> **[1:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=78)** We can deploy the same container image to multiple environments and expect the same results.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=84)** So if you deploy an image to the staging environment and then deploy it to production, you don't have to worry about a mismatch between the environments.
>
> **[1:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=92)** That's because the environment is packaged inside the container along with the application.
>
> **[1:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=99)** Within the CI pipeline for a containerized app, the last step is responsible for building the container image and storing it within a container registry.
>
> **[1:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=109)** Once stored in a registry, the image can be retrieved and deployed to an environment where it will run.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=115)** To achieve this, our pipeline will integrate with two additional platforms that are essential for working with containers.
>
> **[2:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=123)** The first is Docker, which includes build kit for building our container images and container D as the runtime that will run the image as a container.
>
> **[2:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=133)** The next platform we'll use is GitHub Packages.
>
> **[2:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=136)** It's a container registry within GitHub where we'll store the container images that we build.
>
> **[2:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=143)** GitHub Packages is automatically included when you create a GitHub organization.
>
> **[2:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=148)** So it's already available for us to use.
>
> **[2:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=152)** So we have everything we need to build, store and run our Java applications as containers.
>
> **[2:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=158)** Let's move onto the next lesson to see exactly how it's done.

> [!info]- Semantic Content
>
> **Tools:** github (4)
> **Code Keywords:** let (2), this, (1)
> **CLI Commands:** make (1), docker (1)
> **Env Vars:** jvm (1)
> **Definitions:** known as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Creating a Dockerfile
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=0)** - [Instructor] To package our application within a container that runs on Docker, we'll first need to create a Docker file.
>
> **[0:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=7)** A Docker file contains all of the commands necessary to assemble the container image that we'll package our Java application into.
>
> **[0:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=15)** Within Eclipse, we can begin to create the file by right clicking on our project, going to new, and then coming down here to file.
>
> **[0:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=23)** Within this dialog, we'll just type the name Docker file.
>
> **[0:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=27)** Make sure that the F is lowercase.
>
> **[0:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=29)** Once you have the name in place, then just go ahead and hit finish and the Docker file will get added to our project.
>
> **[0:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=36)** All right, now we can add some commands into the Docker file.
>
> **[0:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=39)** The first line in a Docker file indicates the base image that we'll be creating our image from.
>
> **[0:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=45)** To specify the base image, just type the instruction from, and then provide the tag of an image that we would like to base our new image on.
>
> **[0:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=55)** So here I'm going to use an open JDK version 11 image.
>
> **[1:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=60)** It's going to contain a JDK that we can use to run our application inside the container.
>
> **[1:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=67)** Next we'll set the work directory.
>
> **[1:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=69)** It's going to cause all of the instructions after this point to be executed within the directory that we specify.
>
> **[1:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=76)** Here it's going to be the app directory inside the root of the containers file system.
>
> **[1:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=82)** After that, we're going to add an argument named JAR_FILE to the container.
>
> **[1:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=88)** This is a variable that we can provide the value of when we execute our Docker build command.
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=94)** This helps to make our container image more flexible and we'll be able to reuse this Docker file for all of the services in our application.
>
> **[1:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=103)** We're going to use this argument to copy our JAR_FILE into the container.
>
> **[1:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=108)** So we'll use the copy instruction and then we'll point to the jar file argument and then we'll copy that jar file that's provided to the Docker build into the app.jar file located within the container.
>
> **[2:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=123)** So this is going to be our executable jar.
>
> **[2:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=126)** Then we're going to expose port 8080 on the container.
>
> **[2:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=131)** So this is where the container will listen for TCP traffic.
>
> **[2:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=135)** And you'll remember that our apps are set up to be bound to port 8080.
>
> **[2:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=139)** So all the traffic will be forwarded into the app.
>
> **[2:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=143)** Finally, we'll add an entry point.
>
> **[2:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=145)** This specifies the command that will be run when the container starts up.
>
> **[2:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=149)** We just need to place each segment of the command within square brackets.
>
> **[2:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=154)** The command we'll use for our entry point is going to launch the application with Java.
>
> **[2:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=159)** So first I'll type Java, then I'll put a comma and then the next segment of the command, which is -jar and then we just need to provide the path to our application.
>
> **[2:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=171)** So it's located in the app directory.
>
> **[2:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=174)** And then the file we want to launch is app.jar.
>
> **[3:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=180)** Okay, that's everything we need for the Docker file, which will be used to build our container image that runs our microservices.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (11), make (2)
> **Env Vars:** jdk (2), jar_file (2), tcp (1)
> **Code Keywords:** new, (1), from. (1), from, (1), finally, (1)
> **Ports:** port 8080 (2)
> **Versions:** version 11 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Building container images in Jenkins
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=0)** - [Tutor] Now that we have a Docker file, let's build our container image and adjust our Pipeline to perform the task as well.
>
> **[0:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=7)** So to get started, we're first going to package our application using the Maven wrapper.
>
> **[0:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=12)** So I'll provide the argument for our jar name that's required by the build, and I'm just going to name the jar service.
>
> **[0:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=20)** And then I'll tell Maven to execute the package phase.
>
> **[0:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=24)** Okay. This will build and package our executable jar.
>
> **[0:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=30)** Okay, now that we've built the jar, we can start working on creating our container image.
>
> **[0:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=35)** To do that, we'll use the Docker build command.
>
> **[0:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=39)** When we execute the build, we'll need to pass in the build argument that we specified in our Docker file.
>
> **[0:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=46)** You'll recall it was named jar file and here we need to provide the location of the jar.
>
> **[0:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=52)** And we know that within Maven it places the jar in the target directory, and then I name the jar service.
>
> **[0:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=59)** All right, now that we have that set up, let's go ahead and we'll provide a tag for this image.
>
> **[1:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=65)** I'm just going to call it room service local, and then we'll tell Docker to find our Docker file in this directory.
>
> **[1:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=72)** Okay, we can go ahead and start performing the build.
>
> **[1:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=76)** And there, it looks like our container image was built.
>
> **[1:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=80)** Let's go ahead and we can take a look at our images inside of Docker.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=84)** Yep, right there it is.
>
> **[1:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=88)** Now that we know our container image builds, let's update our Pipeline so we can build the container image using Jenkins.
>
> **[1:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=96)** So I'm going to go ahead and start out by copying the command that we use to build the container.
>
> **[1:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=103)** Then I'm going to head over to eclipse and inside of our Pipeline, I'm going to come down here to our build container image stage.
>
> **[1:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=112)** Here, I'm going to add a shell step, and then I'll just paste the instructions that we executed to build our container image.
>
> **[2:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=122)** Now, we're going to make some changes here to make our Pipeline more flexible.
>
> **[2:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=126)** So instead of passing in this jar file location, let's make that a variable.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=134)** So I'll go ahead and add a placeholder for the jar location, and then we're going to do the same thing for the name of the tag.
>
> **[2:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=143)** I'll just create a new placeholder named image tag.
>
> **[2:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=148)** Okay, now with the command in place, we can go ahead and create those environment variables that it will require to build our container image.
>
> **[2:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=157)** That means we'll have to come up here to the environment section.
>
> **[2:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=162)** The first environment variable that we'll create is the jar location variable.
>
> **[2:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=166)** So here, we're going to specify the target directory, which is where Maven will place our executable jar.
>
> **[2:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=174)** And then we're just going to use our jar name variable.
>
> **[2:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=177)** And then after that, we're going add the extension dot jar.
>
> **[3:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=182)** Okay, next we need to create our image tag.
>
> **[3:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=186)** The image tag is going to rely upon the image name, which we already have declared as a variable.
>
> **[3:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=192)** So I can go ahead and add a placeholder.
>
> **[3:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=195)** Then we'll add a colon, and then we're going to suffix it with our build number in order to create a version for that image.
>
> **[3:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=204)** Okay, that should be everything we need to build our container image within our Jenkins Pipeline.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (6), make (3), find (1)
> **Code Keywords:** let (5), pass (1), require (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [tutor] (1)

#### Publishing container images to GitHub packages
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=0)** - [Instructor] The final step in our continuous integration pipeline, we'll publish the container image to the organization's container registry on GitHub.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=10)** To get started, we'll need to add another environment variable into our pipeline.
>
> **[0:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=15)** This variable is going to store the URL of our container registry.
>
> **[0:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=19)** So here I'll start with the protocol, and then I'm going to use a placeholder to refer to the container registry variable that we created earlier in the course.
>
> **[0:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=30)** Now I'm going to go ahead and copy this variable because we'll use it within the final stage of our pipeline that publishes the container image.
>
> **[0:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=42)** Inside of the steps block for this stage, I'm going to add a script block.
>
> **[0:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=47)** This will allow us to include some groovy code that works with the Docker pipeline plugin.
>
> **[0:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=53)** The Docker pipeline plugin allows us to configure our pipeline to use a custom container registry.
>
> **[1:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=60)** That way, if we have steps in the pipeline that work with Docker, they don't use the default registry, which is Docker hub.
>
> **[1:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=68)** To use a custom registry with the plugin, we wrap our pipeline steps within the withRegistry method.
>
> **[1:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=76)** This method requires two parameters.
>
> **[1:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=79)** The first parameter that we'll need to provide is the URL of our container registry.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=84)** So here, I'm just going to add a placeholder for our container registry URL variable that we just created.
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=94)** The second parameter that's required are the credentials that we'll use to authenticate with the container registry.
>
> **[1:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=101)** Now you'll recall that earlier in the course, we created a Jenkins credential named github-pat, that stored our personal access token.
>
> **[1:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=112)** We're going to provide that here.
>
> **[1:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=113)** So Docker can authenticate with GitHub.
>
> **[1:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=116)** Then we're going to go ahead and add a block for this method.
>
> **[2:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=120)** Inside of the block, we're going to add a shell step that will execute the Docker push command, which will push our container image to the registry.
>
> **[2:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=131)** Now, here we need to provide an image tag.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=134)** So I'm going to add a placeholder that refers to the image tag variable we created within the environment block of our pipeline.
>
> **[2:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=143)** Okay, now our pipelines all set up to publish our container image.
>
> **[2:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=148)** Let's head over to the terminal and within the room service directory, I'm going to go ahead and stage these changes, and then I'm going to commit them.
>
> **[2:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=158)** We'll say that we're publishing our container image.
>
> **[2:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=163)** And then once we've created the commit, we can push it over to GitHub.
>
> **[2:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=167)** This will trigger Jenkins to start initiating the build.
>
> **[2:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=171)** So let's do that.
>
> **[2:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=173)** And then we'll head over to Jenkins where we can wait for our build to start executing.
>
> **[3:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=180)** There we see the build, enter the queue, let's step into the pipeline and watch it execute.
>
> **[3:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=188)** There it's starting to enter the final stage that pushes the container image.
>
> **[3:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=194)** And it appears that our Jenkins build was successful.
>
> **[3:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=197)** Let's head over to GitHub, and we can verify that the package was pushed to our organization.
>
> **[3:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=203)** All we need to do is click on the packages tab within our organization, and there we can see the new container image.
>
> **[3:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=211)** Let's go ahead and click on it.
>
> **[3:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=213)** Excellent, there's our container image, and you can see the image tag that was assigned to it.
>
> **[3:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=219)** So that wraps things up for the continuous integration phase of our delivery process.
>
> **[3:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=224)** We're going to move on now to the next chapter where we'll take a look at continuous delivery and continuous deployment.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (6)
> **Tools:** github (5), terminal (1)
> **Code Keywords:** let (5)
> **Env Vars:** url (3)
> **Cross-References:** earlier in (2), next chapter (1)
> **UI Navigation:** click on (2)
> **Prerequisites:** configure (1), set up (1)
> **Code Identifiers:** withregistry (1)


### 6. Continuous Delivery with Argo CD

#### Continuous delivery overview
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=0)** - [Instructor] Continuous delivery and continuous deployment are the last pieces of the end-to-end delivery process.
>
> **[0:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=7)** At a basic level, these are a set of automated steps that takes packaged software from an artifact repository, deploys it for testing, and then releases it to the environment where it runs live for end-users to access.
>
> **[0:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=22)** Continuous deployment pipelines vary widely across different organizations and are influenced by many factors.
>
> **[0:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=29)** For example, how far you decide to take the automation will determine whether you're practicing continuous delivery or continuous deployment.
>
> **[0:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=39)** In our process, initially, we'll manually trigger deployments to the production environment.
>
> **[0:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=44)** So when I refer to the CD pipeline over the next few lessons, just know that I'm talking about continuous delivery.
>
> **[0:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=52)** The technology stack will also heavily influence the tools and steps within a CD pipeline.
>
> **[0:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=58)** For modern Java applications like ours, our pipeline will leverage specialized tools for working with Kubernetes.
>
> **[1:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=66)** That's the platform where we'll run our containers.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=70)** Execution of the pipeline is triggered when a new container image has been built and published.
>
> **[1:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=77)** In our process, we'll trigger the pipeline by including some code in the CI pipeline that is executed after it publishes a new image.
>
> **[1:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=87)** Once triggered, the CD pipeline will automatically deploy the container image into a non-production environment, which in our case is a Kubernetes cluster.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=97)** To automate deployments into both the non-production and production environments, we'll be using two tools, Argo CD and Customize.
>
> **[1:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=106)** Once the container is running in the non-production environment, additional tests can be ran against the deployed container.
>
> **[1:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=115)** These tests are typically more expensive to create and to perform.
>
> **[1:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=119)** That's why we run them later in our delivery process.
>
> **[2:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=122)** This might include tests like manual acceptance testing, performance testing, or end to end tests.
>
> **[2:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=129)** If everything passes this round of tests, the pipeline waits for someone to approve the production deployment.
>
> **[2:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=136)** The approval is usually given by a business or operations team member who approves a poll request or clicks a button that allows the software to be deployed.
>
> **[2:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=146)** Now, once again, here, we're talking about continuous delivery.
>
> **[2:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=150)** In continuous deployment, this would be automatic and we would move right to the next step.
>
> **[2:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=155)** This step deploys the container image into the production environment.
>
> **[2:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=159)** For continuous delivery, it's going to be based upon receiving that manual approval, but ultimately for both practices, the deployment will release the changes for the end users to access.
>
> **[2:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=172)** So that's a high level look at the basic steps that might be found within a simple CD pipeline.
>
> **[2:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=178)** However, they can get much more complex.
>
> **[3:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=181)** For our purposes, we'll keep it simple by sticking to a pipeline that uses Jenkins, Customize, Argo CD, and a little bit of Bash.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (6)
> **Cross-References:** later in (1)
> **Tools:** bash (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Container orchestration
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=0)** - [Instructor] Large organizations may run hundreds or even thousands of containers.
>
> **[0:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=6)** This is a scale that's impossible to manage without the help of a container orchestration platform like Kubernetes.
>
> **[0:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=14)** A container orchestration platform manages a group of hosts known as nodes that form a cluster.
>
> **[0:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=21)** When we want to run a container on the cluster, we wrap them inside of a pod.
>
> **[0:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=26)** Then the orchestrator deploys them as a workload to one of the available nodes within the cluster where a container runtime is installed.
>
> **[0:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=35)** The container runtime is then used to spin up and run our container.
>
> **[0:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=40)** Let's talk a little bit about how an orchestrator, like Kubernetes, works at a high level.
>
> **[0:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=47)** In Kubernetes, the control plane acts as the manager of the cluster.
>
> **[0:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=52)** When we want to run a containerized application on Kubernetes, we send a call to its API using a command line tool named Kube CTL.
>
> **[1:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=62)** We might tell it that we want to run four copies of a pod that contains a specific container image on the cluster.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=70)** Once the API receives the request, it determines which nodes in the cluster should run the pods.
>
> **[1:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=78)** Then it issues the command to deploy the containers to them through the Kubelet that runs on each node.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=84)** The pods are then deployed on the node and the control plane constantly monitors their state to ensure that we always have our four copies known as replicas running inside the cluster.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=97)** Pods are just one of the resources that run on a Kubernetes cluster.
>
> **[1:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=102)** We normally specify them within the configuration of another resource known as a deployment.
>
> **[1:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=109)** Other objects like services and ingresses can be created using the Kubernetes API to deploy them as part of our application's architecture running on the cluster.
>
> **[2:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=120)** Kubernetes resources are declaratively described within a YAML file, referred to as a manifest.
>
> **[2:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=127)** Just think of the manifest as a configuration file that describes a resource that we want to run on the cluster.
>
> **[2:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=135)** Managing these YAML resource definitions can become quite the task when you consider how many microservices an application might have, and then add on top of that, the different environments you might want to deploy to.
>
> **[2:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=148)** In our next lesson, I'll show you how Kustomize can help us manage this complexity.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), yaml (2), ctl (1)
> **Definitions:** known as (3), is a  (1)
> **CLI Commands:** node (2)
> **Code Keywords:** let (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Managing Kubernetes resources with Kustomize
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=0)** - We'll be using Kustomize to manage the YAML configuration files for the Kubernetes resources in our application.
>
> **[0:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=8)** Those manifests are located inside the deploy project within our exercise files.
>
> **[0:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=14)** These files are also stored in the deploy repository over on GitHub.
>
> **[0:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=19)** Let's open up this directory inside a terminal to explore Kustomize.
>
> **[0:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=26)** When working with Kubernetes, there's often slight variations between the resources we need to deploy on the different clusters for each environment.
>
> **[0:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=35)** For example, in this manifest, which defines Ingress routes that direct traffic coming into the cluster, we need to use different values for the host property for staging and production.
>
> **[0:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=48)** The staging cluster we'll use staging.landon.[linkedin.io](https://linkedin.io), and the production cluster, we'll use the value that we see here, landon.[linkedin.io](https://linkedin.io).
>
> **[0:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=59)** Kustomize allows us to use the same YAML configuration files for these environments.
>
> **[1:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=65)** However we can apply small kustomizations where they differ.
>
> **[1:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=69)** Let's take a look at the structure of our Kustomize directory to see how this works.
>
> **[1:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=75)** Inside of the directory we have the base folder.
>
> **[1:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=79)** It defines all of the resources that we need to include in both environments.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=84)** So here we'll find things like deployments or services.
>
> **[1:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=88)** You'll also notice this kustomization.yaml file.
>
> **[1:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=92)** Let's go ahead and we'll take a look at that.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=97)** Inside of the kustomization.yaml file, we define all of the resources that we'll need to run our application.
>
> **[1:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=104)** So here you see all those YAML files that we defined in the base.
>
> **[1:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=109)** Now if we go back and take another look at our Kustomize directory, you'll see these overlays, one for production and one for staging.
>
> **[1:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=118)** And then each overlay has its own kustomization.yaml file that it uses to apply small variations for the environment.
>
> **[2:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=128)** Let's take a look at the kustomization for our staging overlay.
>
> **[2:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=135)** Within it you'll notice that it indicates it uses all of the resources that we saw in the base, but it does provide its own kustomization for the app-ingress.yaml file.
>
> **[2:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=148)** Let's take a look at that.
>
> **[2:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=152)** If we scroll up within the file, you'll notice that the staging overlay provides its own value for the host property.
>
> **[2:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=160)** So here's the kustomization we'll make for the staging overlay.
>
> **[2:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=165)** When we build this overlay, it's going to lay this configuration on top of what we saw in the base.
>
> **[2:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=171)** Here, let me show you how it works.
>
> **[2:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=173)** We'll go ahead and use Kustomize to build our staging overlay, and let's watch what happens here.
>
> **[3:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=180)** First you'll notice that a configuration was generated that contained all of the manifests we found within the base.
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=189)** Now if we scroll down here to take a look at the Ingress, you'll see that the kustomization for the staging overlay was applied, there we see staging.landon.[linkedin.io](https://linkedin.io).
>
> **[3:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=202)** So you can use Kustomize to apply these kustomizations for each environment, but Kustomize can also be used to update the versions of container images that are set within our resources.
>
> **[3:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=216)** Let me show you how this works.
>
> **[3:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=218)** If we scroll up a little bit, here we're going to find a deployment for a room service.
>
> **[3:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=223)** Within this deployment, we specify a container image that's going to run inside of a pod, and you'll notice we set the version of that image to one.
>
> **[3:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=233)** Using Kustomize, we can update this container image version.
>
> **[3:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=238)** Let's go ahead and I'll copy the name of our fully qualified container image and then I'll show you how this works.
>
> **[4:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=245)** So I'm going to first navigate into the base directory, and then here we can use Kustomize to update the container image version.
>
> **[4:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=254)** To do that we use the edit set image command, then we provide the name of our image followed by an equal sign, then the name of the image we would like, followed by the version we would like.
>
> **[4:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=267)** Now here I'm going to use 22 to make it obvious.
>
> **[4:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=270)** Now let's go ahead and we'll update the container image, and now let's take a look at what happened.
>
> **[4:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=276)** If we look at the kustomization.yaml file in our base, you'll notice it now includes a kustomization we applied to update the container image, there it sets it to 22.
>
> **[4:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=290)** Now let's go ahead and we'll use Kustomize to build our base.
>
> **[4:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=295)** If we take a look at the generated YAML, you'll notice that our container image has been updated to 22 for our room service deployment.
>
> **[5:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=305)** It's much easier to manage all these resource configuration files for our different environments using Kustomize.
>
> **[5:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=313)** And as an added bonus, Argo CD works with it right out of the box.
>
> **[5:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=318)** We'll be using it as part of our CD pipeline to help manage the container images that are defined within our YAML configuration files for each cluster.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12)
> **CLI Commands:** find (2), make (2), cd (2)
> **File Paths:** kustomization.yaml (4), app-ingress.yaml (1)
> **Env Vars:** yaml (5)
> **URLs:** [linkedin.io](https://linkedin.io) (3)
> **UI Navigation:** scroll up (2), scroll down (1)
> **Tools:** github (1), terminal (1)
> **Exercise Files:** exercise files (1)

#### Creating a CD pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=0)** - [Narrator] To deploy the correct versions of our microservices onto our Kubernetes cluster.
>
> **[0:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=5)** We'll need to update our resource manifests with the latest container images built by the CI pipeline.
>
> **[0:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=12)** To automate this, we'll use another Jenkins pipeline that's found within the deploy project, inside the exercise files for this lesson.
>
> **[0:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=22)** This pipeline will be shared by each of the microservices inside of our application and used to deploy them.
>
> **[0:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=29)** Let's walk through each part of this script to learn exactly what it does.
>
> **[0:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=34)** The script includes an options block that configure some unique behaviors for this pipeline.
>
> **[0:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=41)** The first option, disable concurrent builds prevents the pipeline from executing more than one run at a time.
>
> **[0:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=48)** This is important because it prevents conflicts between our deployments.
>
> **[0:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=53)** The next option override index triggers, prevents the pipeline from executing when a new commit is made to the deploy repository.
>
> **[1:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=62)** This is necessary because the pipeline itself, will commit changes to the manifests in the repository.
>
> **[1:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=69)** And we can't have those commits triggering another build.
>
> **[1:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=72)** It will create a loop.
>
> **[1:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=74)** The pipeline is also configured to accept parameters that are passed to it by the CI pipelines for each microservice.
>
> **[1:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=83)** These parameters are used to update the manifests with the latest container image.
>
> **[1:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=89)** The parameters received by the pipeline include, the GitHub organization name, the image name, and its version.
>
> **[1:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=96)** These are all provided by the jobs that trigger the pipeline.
>
> **[1:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=101)** The pipeline also declares one environment variable that holds the SSH URL to our deploy repository within GitHub.
>
> **[1:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=110)** To keep things flexible, we use the GitHub org parameter that's passed into the pipeline to construct this URL.
>
> **[1:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=119)** Now let's talk about the work that this pipeline performs within its stage.
>
> **[2:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=125)** The first step in the stage uses the get plugin to pull the main branch from the deploy repository where all of our manifests are found.
>
> **[2:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=135)** The git plugin requires us to provide the URL of the deploy repository and an SSH key that's used to authenticate with GitHub when all the files are pulled from the repo.
>
> **[2:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=149)** After we've pulled the manifests from the repository, we then configure git to identify the pipeline as the committer.
>
> **[2:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=158)** That's done in these two commands.
>
> **[2:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=161)** That's necessary because in later stages, the pipeline's going to perform a commit.
>
> **[2:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=166)** The changes that the pipeline will commit are made here, where we use customized to update the container image found within our manifests.
>
> **[2:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=176)** To do this, we use the customized edit set image command.
>
> **[3:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=180)** This command leverages our image name, parameter and our version parameter to update the version for the container image.
>
> **[3:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=190)** Once we've updated that version inside of our manifests, we commit those changes to our local repository.
>
> **[3:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=199)** Then we use the SSH agent plugin and an SSH key in order to authenticate with GitHub when we push those changes to the main branch of our repository.
>
> **[3:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=213)** Once those changes are pushed, our deployed repository in GitHub, will contain the latest container image that was built by the CI pipeline.
>
> **[3:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=224)** Now that we've talked through the pipeline, let's go ahead and we'll push the Jenkinsfile over to GitHub.
>
> **[3:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=231)** To do that, I'm going to head to a terminal and I'll stage our changes.
>
> **[3:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=236)** Then I'll go ahead and create a new commit and for the message, I'll just say adding the new pipeline.
>
> **[4:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=244)** Once I've created the commit, I can go ahead and push those changes over to GitHub.
>
> **[4:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=249)** Now this will cause Jenkins to pick up the pipeline when it scans our organization and then all tempt to execute it.
>
> **[4:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=257)** Now I'm going to warn you.
>
> **[4:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=259)** It's going to fail, but let's go ahead and we'll do the push anyway, and then we'll head over to Jenkins.
>
> **[4:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=266)** Soon we should see the organization folder scan, pick up the new pipeline.
>
> **[4:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=271)** Okay.
>
> **[4:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=272)** There it went.
>
> **[4:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=273)** Let's go ahead and we'll refresh our page.
>
> **[4:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=276)** There we see the new pipeline.
>
> **[4:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=278)** Let's navigate into it and we can see it has failed, but let's check it out.
>
> **[4:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=283)** So I'll click on the main branch and then go into our first build.
>
> **[4:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=286)** And then within the console output, you can see that the pipeline failed because we haven't passed any parameters to it.
>
> **[4:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=296)** We'll need to create the trigger within the CI pipeline to pass those parameters.
>
> **[5:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=302)** Let's pick it up there in our next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (2), override (1), include, (1), pass (1)
> **Tools:** github (8), terminal (1)
> **Env Vars:** ssh (4), url (3)
> **CLI Commands:** ssh (4), git (2)
> **Prerequisites:** configure (2)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### Triggering the CD pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=0)** - [Instructor] After the continuous integration pipeline creates a new container image, we'll need to trigger our CD pipeline so that it can update our Kubernetes manifest with the new container image.
>
> **[0:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=11)** To do this, we'll add another stage at the end of our CI pipeline.
>
> **[0:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=16)** So I'm going to go ahead and open the Jenkinsfile for our room service.
>
> **[0:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=21)** At the end of this pipeline, we're going to add another stage that will perform the trigger.
>
> **[0:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=27)** So I'll add the stage and then I'll update its name to trigger CD pipeline.
>
> **[0:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=34)** Inside of the stage, we'll go ahead and add a steps block.
>
> **[0:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=39)** Inside of this block, we'll use the build step plugin to execute our deployment pipeline.
>
> **[0:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=46)** The plugin takes two parameters; first is the name of the job, and then second are the parameters that we'd like to pass to it.
>
> **[0:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=54)** You'll notice the parameters are passed as an array.
>
> **[0:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=59)** The easiest way to find the name of the job you'd like to execute is to just go into Jenkins itself.
>
> **[1:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=66)** So here on the page for our deployment pipeline, you can find the name of the job right here.
>
> **[1:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=73)** So I'm going to go ahead and copy that, and then I'll return back to Eclipse, here I'll add a forward slash and then paste the name of our job.
>
> **[1:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=82)** Now let's work on adding the parameters.
>
> **[1:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=86)** There's a trick we can use to add those too.
>
> **[1:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=88)** If we navigate over to our deployment pipeline, let's copy the parameters that it accepts.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=95)** Then we can go back to the Jenkinsfile for our room service and paste in those parameters.
>
> **[1:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=101)** The syntax is very similar for how you pass and accept a parameter.
>
> **[1:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=107)** I just need to do a little bit of formatting now that we've pasted those.
>
> **[1:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=117)** Okay, so now we have the parameters we're going to provide, but we need to add a value property.
>
> **[2:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=123)** So here I'll go ahead and add that property, and then for the first property we'll add a placeholder to our GitHub org environment variable.
>
> **[2:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=133)** Now let's go ahead and we'll copy this syntax and we'll paste it in for each of the other parameters.
>
> **[2:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=139)** And then I'm going to go ahead and adjust the placeholders.
>
> **[2:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=143)** For the image name, we can use the image name environment variable, and then for the version we're going to use the build number.
>
> **[2:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=151)** So that's everything we need within our CI pipeline to trigger our deployment pipeline.
>
> **[2:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=158)** Now we have this and the Dockerfile in place for our room service, but we need to add that to the other services because we haven't already.
>
> **[2:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=167)** Now, because we've made these pipelines in Dockerfiles so generic and parameterized, we can just copy and paste them into the other projects.
>
> **[2:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=176)** So let's go ahead and we can do that right inside of Eclipse.
>
> **[3:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=181)** I'll just select the Dockerfile and the Jenkinsfile, and then we'll copy those, and then I can go into the other projects and just paste them.
>
> **[3:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=191)** Okay, there we have them for the web app, let's now add them to the guest service, and then finally we'll add them into the booking service.
>
> **[3:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=201)** Okay, so now these files are in the projects locally.
>
> **[3:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=206)** We need to push these over to the repositories in GitHub.
>
> **[3:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=210)** So let's head over to the terminal and here I'm going to cheat just a little bit.
>
> **[3:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=215)** You'll notice that within the exercise files, there's the update repost script.
>
> **[3:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=221)** This script is going to navigate into each project, stage the changes, commit them and then push them over to GitHub.
>
> **[3:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=228)** It's a quick way to commit all the changes to our projects.
>
> **[3:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=232)** Now you can use this, but make sure you have a little bit of horsepower on your machine because it's going to trigger a lot of builds very rapidly.
>
> **[4:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=242)** Let's go ahead, we'll run the script and that's going to start pushing our changes over to GitHub.
>
> **[4:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=247)** I'm going to head over to Jenkins at this point, and we can watch for the new pipelines to get picked up.
>
> **[4:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=255)** Okay, there, we can see some coming in.
>
> **[4:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=257)** Let's go ahead and we'll refresh our GitHub organization project, and there we can see the pipelines have been picked up.
>
> **[4:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=266)** And if we navigate to the deploy pipeline, we can watch as they trigger it.
>
> **[4:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=272)** There you can see the continuous integration pipelines running for several of the microservices.
>
> **[4:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=278)** Let's head into our main folder and here we'll start to see the CD pipeline get triggered.
>
> **[4:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=286)** All right, there was the first successful execution.
>
> **[4:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=293)** Excellent.
>
> **[4:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=293)** It looks like each of our microservices was built into a container image, and then we were able to execute the deployment pipeline for them.
>
> **[5:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=303)** To verify that, let's head over to our GitHub organization.
>
> **[5:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=307)** Inside of the packages tab, we can see the different containers that were placed in the registry.
>
> **[5:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=313)** Now let's go back and we can take a look at the deploy repo.
>
> **[5:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=318)** Inside of the deploy repo we'll navigate into the base directory, and here we can take a look at the customization.
>
> **[5:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=326)** You'll notice that the customization includes the updated images.
>
> **[5:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=331)** Now that our CD pipeline is stood up and our resource configurations are updated, we're now ready to automate deployment of the application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (2), pass (2)
> **CLI Commands:** cd (4), find (2), make (1)
> **Tools:** github (6), terminal (1)
> **UI Navigation:** open the (1), select the (1), navigate to (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### Automated deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=0)** - [Narrator] To automate deployments to our Kubernetes cluster, we're going to use Argo CD.
>
> **[0:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=5)** It's a continuous deployment tool built for Kubernetes that uses a GitOps approach.
>
> **[0:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=11)** To perform deployments, Argo CD places a controller inside the cluster.
>
> **[0:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=16)** The controller continuously monitors a set of Kubernetes manifests stored inside of a Git repository.
>
> **[0:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=24)** So, in a manifest, inside of Git, we might identify a container image that contains our microservice inside the specification for a pod.
>
> **[0:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=33)** The controller reads that information and then communicates any new resources that need to be created inside the cluster to the control plane.
>
> **[0:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=43)** The control plane sends those instructions to the nodes in the cluster so they can apply the resources.
>
> **[0:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=50)** This causes any images specified in the resources to be pulled from the registry and spun up as containers on the worker nodes.
>
> **[0:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=59)** In a nutshell, that's how Argo CD can automate the deployment of our containerized applications to Kubernetes.
>
> **[1:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=67)** Within our lab environment, we have two Kubernetes clusters running with Argo CD installed.
>
> **[1:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=73)** One for staging and one for production.
>
> **[1:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=77)** We'll configure Argo CD to monitor the deploy repository that was created earlier in the course when we established our GitHub organization.
>
> **[1:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=86)** During the setup for Argo CD, we'll configure it to monitor specific Git branches and the respect of customize overlay for each cluster.
>
> **[1:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=96)** The staging cluster will monitor the main branch and the production cluster will monitor a branch named release.
>
> **[1:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=103)** When we build a new container image, our deployment pipeline is configured to update the base customization in the main branch with the new container version.
>
> **[1:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=113)** This will cause Argo CD to deploy it to the staging cluster.
>
> **[1:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=118)** To deploy and promote new container images to production, we'll then merge the main branch into the release branch.
>
> **[2:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=125)** We can manually perform this merge using a poll request or the pipeline can do the merge for us and automate the production deployment.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=134)** Either way, Argo CD will detect the changes and release them to the production cluster.
>
> **[2:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=140)** As you've probably noticed, running microservices within containers introduces quite a bit of complexity into our continuous delivery process.
>
> **[2:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=148)** There certainly a lot of work upfront, but once you've established your pipeline, it significantly increases the velocity at which you can deliver changes to your modern Java applications.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (8), git (3)
> **Prerequisites:** configure (2), setup (1)
> **Cross-References:** earlier in (1)
> **Documentation:** specification (1)
> **Tools:** github (1)
> **Speakers:** - [narrator] (1)

#### Configuring Kubernetes security
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=0)** - [Instructor] To automate the deployment of our microservices on the Kubernetes cluster, we'll need to set up the security configuration that allows the cluster to pull images from the container registry.
>
> **[0:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=12)** To see how this works, let's take a closer look at one of our deployments.
>
> **[0:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=17)** Inside of the deployment, we defined the spec for a pod.
>
> **[0:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=21)** It indicates the container image that will run inside of our pod.
>
> **[0:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=25)** And you'll notice that the container image is found on the GitHub Container registry.
>
> **[0:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=30)** So in order for the cluster to pull that image, it will need to authenticate with GitHub.
>
> **[0:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=37)** Now to do that, we've configured an imagePullSecret.
>
> **[0:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=42)** The PullSecret's name is regcred.
>
> **[0:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=44)** It's going to be a secret that we'll create inside the cluster that holds our personal access token, and that's what the cluster will use to authenticate with GitHub.
>
> **[0:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=54)** Now, if we come back up to the top of our deployment, you'll notice that it's created within the landon-hotel namespace.
>
> **[1:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=62)** So that's where we'll need to create our secret inside the cluster.
>
> **[1:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=67)** Let's head over to the terminal, and we can start to set all this up.
>
> **[1:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=71)** So first, I'm going to use kubectl to create our landon-hotel namespace.
>
> **[1:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=78)** All right. There, we created the namespace.
>
> **[1:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=80)** Now let's go ahead and we'll create our secret.
>
> **[1:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=84)** So here's the command that creates the secret.
>
> **[1:27](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=87)** You can see that we use kubectl, and then we create a secret for our Docker registry, named regcred.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=95)** To create this secret, we need to provide the domain of our container registry, our GitHub username, along with our email, and then we'll provide our personal access token, which are the credentials that will be used by the cluster to authenticate.
>
> **[1:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=112)** Then we need to tell the cluster what namespace to create the secret within.
>
> **[1:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=117)** So here, we specified landon-hotel.
>
> **[2:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=120)** All right, let's go ahead and we'll create our secret.
>
> **[2:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=123)** And there, you can see the cluster's indicated it's been created.
>
> **[2:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=127)** All right, so that configured our staging cluster, but we'll need to switch our kubectl context over to the production cluster and run the same commands.
>
> **[2:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=138)** So first, let's get the name of our contexts.
>
> **[2:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=143)** There, you can see the staging context, which we're currently on, and here's the production context.
>
> **[2:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=149)** Let's go ahead. We'll copy that name.
>
> **[2:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=153)** And then we'll switch our kubectl configuration over to use the production context.
>
> **[2:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=160)** All right, now we're connected to the production cluster, and we can go ahead and run those commands one more time.
>
> **[2:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=168)** All right, so there we created the namespace, and there, we created the secret.
>
> **[2:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=173)** Okay. So the security's all set up on our cluster.
>
> **[2:57](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=177)** Let's move on to the next lesson and start to set up our GoCD.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (2)
> **CLI Commands:** kubectl (4), docker (1)
> **Tools:** github (4), terminal (1)
> **Prerequisites:** set up (3)
> **Code Identifiers:** imagepullsecret (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### Deploying microservices with Argo CD
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=0)** - [Instructor] Inside of our lab, ArgoCD is already running on our staging and production clusters.
>
> **[0:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=6)** However, there's a little bit of configuration we'll need to do in order to get Argo to deploy our application on those clusters.
>
> **[0:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=14)** To access either instance of ArgoCD, you can use these links in the bookmarks bar.
>
> **[0:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=20)** There's one for staging and one for production.
>
> **[0:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=22)** Let's start in the staging environment.
>
> **[0:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=25)** Here you can provide the credentials admin, admin in order to log into the ArgoCD instance.
>
> **[0:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=32)** Now, once we're in ArgoCD, let's click on this gear to set up a repository.
>
> **[0:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=39)** This is going to define ArgoCD's connection to the repository that holds our manifest, which tell it what to run on our cluster.
>
> **[0:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=49)** So let's go ahead and we'll click on this button, and then we'll need to select the type of connection we'll establish.
>
> **[0:56](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=56)** I'm going to select this option, which uses SSH.
>
> **[1:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=60)** Then we'll need to provide a name for the connection.
>
> **[1:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=64)** I'm just going to call it landon-hotel.
>
> **[1:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=67)** And then here we'll need to provide a link to the repository that holds our manifest.
>
> **[1:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=73)** So let's head over to GitHub into our deploy repository.
>
> **[1:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=77)** And here I'm going to go ahead and copy the SSH URL to the repo.
>
> **[1:22](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=82)** Now, you'll recall this repository holds our manifests and our customizations.
>
> **[1:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=88)** So now let's go back to Argo, and we'll paste in that link.
>
> **[1:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=93)** Then we'll need to provide the private key of our SSH key that we created earlier in the course.
>
> **[1:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=100)** So I'm going to head over to the terminal and you'll remember that we placed the private.key within our home directory for convenience.
>
> **[1:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=108)** So I'll print that out to the terminal and then I'll carefully copy it from there.
>
> **[1:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=114)** All right, once I've copied it, I'll go back to ArgoCD, and I can paste it right here in this text box.
>
> **[2:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=121)** Okay, that's everything we need for a connection.
>
> **[2:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=123)** Let's go ahead and we'll hit connect.
>
> **[2:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=126)** And then you'll notice that the connection was successful.
>
> **[2:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=129)** So now we can click on these ellipses and create an application.
>
> **[2:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=135)** So here we're going to configure the application that ArgoCD will deploy onto the cluster.
>
> **[2:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=143)** First, we'll need to give the application a name.
>
> **[2:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=146)** I'm going to call it landon-hotel-staging.
>
> **[2:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=151)** Then just go ahead and select the default project.
>
> **[2:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=154)** And then we'll need to configure the sync policy.
>
> **[2:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=157)** So I'm going to select automatic here, and this will allow ArgoCD to automatically apply the configuration that it reads from our Git repository on the cluster.
>
> **[2:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=168)** If we selected manual, we'd have to click a button for it to sync.
>
> **[2:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=172)** Then I'm going to click on these two options.
>
> **[2:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=175)** And these allow ArgoCD to remove resources from the cluster if they're not found in Git.
>
> **[3:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=182)** All right, if we scroll down further, here we can adjust the resources that ArgoCD will pull from the repository.
>
> **[3:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=191)** So first, I'm going to change our staging instance to pull the resources from the main branch in the repo.
>
> **[3:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=200)** Then we can select the staging overlay.
>
> **[3:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=204)** So this will cause ArgoCD to use customize to apply the staging overlay when it's determining what needs to run on the cluster.
>
> **[3:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=215)** All right, now if we scroll down here, we'll just select this option for our cluster URL, and then we need to provide the namespace where we want these resources to be applied.
>
> **[3:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=226)** So you'll recall that we're using the landon-hotel namespace.
>
> **[3:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=229)** That's where we created our secret.
>
> **[3:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=232)** And then if we scroll down, you can see that ArgoCD recognizes that our repository is using customize.
>
> **[4:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=240)** Now, we don't have to adjust anything here.
>
> **[4:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=243)** So let's just go ahead and we can create our application.
>
> **[4:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=248)** Okay, so while ArgoCD is deploying those resources on our staging cluster, let's head over to our production cluster.
>
> **[4:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=258)** And we can start to configure the production environment.
>
> **[4:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=261)** Once again, the credentials are admin, admin.
>
> **[4:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=266)** And then we're just going to walk through the same process.
>
> **[4:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=268)** So I'm going to go pretty quickly here.
>
> **[4:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=271)** We'll click on this option, then we'll select the repositories, and then we'll select the SSH option.
>
> **[4:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=277)** We'll go ahead, give this a name.
>
> **[4:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=280)** Then we'll need grab our URL once again.
>
> **[4:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=285)** We'll just paste that in there.
>
> **[4:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=287)** Then we'll go back to the terminal.
>
> **[4:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=289)** And we'll copy our private key.
>
> **[4:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=295)** Then we can paste that in to the text box and create our connection.
>
> **[4:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=299)** All right, it looks like it's successful.
>
> **[5:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=301)** Now let's create the app.
>
> **[5:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=304)** And here we'll name this landon-hotel-prod.
>
> **[5:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=310)** Once again, we'll select the default project, the automatic sync policy.
>
> **[5:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=314)** We'll allow it to prune and self-heal.
>
> **[5:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=318)** Then we'll scroll down.
>
> **[5:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=320)** Now, this next part's important.
>
> **[5:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=321)** We only want production to pull the manifest from the release branch.
>
> **[5:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=326)** So let's go ahead, we'll enter the name release for the branch.
>
> **[5:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=330)** And then we'll go back to GitHub and we can create that branch.
>
> **[5:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=334)** All we need to do is click on this dropdown and then type the word release.
>
> **[5:41](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=341)** And then we can click on this option to create the release branch.
>
> **[5:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=345)** Okay, now we have the branch.
>
> **[5:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=347)** Let's go back to ArgoCD and we can continue our configuration.
>
> **[5:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=352)** Now, for the path, I'm going to go ahead and enter overlays/production.
>
> **[5:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=358)** This will cause the production overlay to be applied by ArgoCD when it determines what resources need to run on the cluster.
>
> **[6:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=368)** All right, now let's scroll down.
>
> **[6:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=370)** We can select this option for our cluster URL.
>
> **[6:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=373)** Once again, our namespace is landon-hotel.
>
> **[6:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=377)** And that should complete our application configuration for the production instance of ArgoCD.
>
> **[6:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=384)** All right, let's go ahead and we'll click on the button to create the app.
>
> **[6:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=390)** There you can see ArgoCD is starting to sync the resources from the Git repository onto the cluster.
>
> **[6:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=399)** Right now it looks like it's pulling the different container images.
>
> **[6:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=405)** Now we're starting to see a few of the pods come online, and it looks like our app is up.
>
> **[6:51](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=411)** All right, now to hit the app, let's go back to the application section and then here, we can click on this first link.
>
> **[6:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=419)** It might take a second though for the app to spin up.
>
> **[7:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=422)** Let's just give it a minute and then we'll refresh.
>
> **[7:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=426)** All right, excellent.
>
> **[7:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=428)** We have our application up and running and we're in production.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (9), select the (6), scroll down (5), dropdown (1)
> **Code Keywords:** let (15), private (3), self (1), continue (1)
> **Env Vars:** ssh (4), url (4)
> **CLI Commands:** ssh (4), git (3)
> **Cross-References:** go back to (6), earlier in (1)
> **Tools:** terminal (3), github (2)
> **Prerequisites:** configure (3), set up (1)
> **Speakers:** - [instructor] (1)

#### Continuous delivery with Argo CD
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=0)** - [Instructor] Now that we've established an end-to-end delivery pipeline, let's use it to deliver a change to our application.
>
> **[0:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=8)** We're going to make a pretty small change to start out.
>
> **[0:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=10)** We're just going to update this bookings header to say recent bookings.
>
> **[0:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=15)** So let's head over to Eclipse, and within the hotel web app project, we can open the booking.HTML file.
>
> **[0:23](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=23)** And here's where we can make the change.
>
> **[0:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=26)** So inside of the file, if we scroll down, we'll find our header.
>
> **[0:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=30)** And here we can go ahead and update it to say recent bookings.
>
> **[0:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=34)** Now, with that change in place, let's go over to the terminal and inside the hotel web app directory, I'm going to stage the changes, then I'll go ahead and add a commit, we'll say, updating the header.
>
> **[0:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=49)** And then we'll go ahead and push this over to GitHub.
>
> **[0:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=53)** That push is going to kick off our continuous delivery pipeline.
>
> **[0:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=58)** So once we issue the command, let's go over to Jenkins, and we can start to watch it execute.
>
> **[1:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=66)** Okay, Jenkins just picked up the change, and that's going to kick off our continuous integration pipeline for the web app.
>
> **[1:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=74)** Let's go check it out.
>
> **[1:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=76)** There we can see it's already running.
>
> **[1:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=80)** Now we've built our executable jar and we're starting to create our container image and publish it to GitHub container registry.
>
> **[1:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=89)** Okay, we're about ready to kick off our deployment pipeline.
>
> **[1:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=93)** Let's go navigate into it to watch it execute.
>
> **[1:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=99)** There it's starting to execute, and this is going to update our manifests within GitHub using customize.
>
> **[1:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=107)** All right, it looks like the changes are in place.
>
> **[1:50](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=110)** Now let's go over to Argo CD.
>
> **[1:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=113)** Then we'll head into our application and we can wait for it to pick up the change.
>
> **[2:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=121)** Okay, Argo CD just realized it's out of sync and now it's reading our manifests and applying those changes to our Kubernetes cluster.
>
> **[2:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=132)** All right, it's all synced up, and our new container image is deployed and running on Kubernetes.
>
> **[2:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=138)** Let's go back to our staging application and here I'm going to refresh the page, and there we can see the changes applied.
>
> **[2:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=146)** Now because we're only practicing continuous delivery, we stopped the automated deployments at the staging environment.
>
> **[2:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=153)** To promote these changes to production, we'll need to manually trigger the deployment.
>
> **[2:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=158)** So let's head over to our GitHub organization, and here we can navigate into the deploy repository.
>
> **[2:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=166)** Then I'm going to click on the Pull request tab, and we can click on this button to start creating our pull request.
>
> **[2:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=172)** To set up the pull request, we'll merge the main branch into the release branch.
>
> **[2:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=178)** The main branch contains the changes in our staging cluster, and by merging them into release, we're going to promote them to our production cluster.
>
> **[3:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=188)** Now, if we scroll down, we can see the changes to our customization.eml file.
>
> **[3:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=193)** It simply updates the container image for the hotel web app.
>
> **[3:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=198)** When Argo CD builds the customization for the production overlay, it's going to cause this new container image to be in that manifest, which will be applied to the production cluster.
>
> **[3:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=211)** All right, that looks good to me, so I'll go ahead and start building the pull request.
>
> **[3:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=216)** There we can see we have a simple title that'll work, I'll click on the pull request button.
>
> **[3:42](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=222)** Once the pull request is created, I can then go ahead and merge it after I confirm.
>
> **[3:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=227)** And this will cause the changes to be released over to our production cluster.
>
> **[3:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=232)** Let's head into our Argo CD production instance to watch the changes be applied.
>
> **[3:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=239)** So here I'll go ahead and log into Argo CD, and then we'll navigate into our application.
>
> **[4:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=247)** There Argo CD just realized the production cluster was out of sync, and now it's applying the changes in our manifests, and we see it spinning up a new pod.
>
> **[4:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=258)** All right, it looks like everything is synced, let's go hit the production application.
>
> **[4:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=264)** Okay, and there we can see the changes were released to the production cluster.
>
> **[4:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=269)** So you can start to see how the automation in our continuous delivery process allows teams to increase the velocity at which they deliver changes.
>
> **[4:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=278)** But we can take it a step further by adopting the practice of continuous deployment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11)
> **CLI Commands:** cd (6), make (2), find (1)
> **UI Navigation:** click on (3), scroll down (2), open the (1)
> **Tools:** github (4), terminal (1)
> **File Paths:** booking.html (1)
> **Env Vars:** html (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)

#### Continuous deployment with Argo CD
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=0)** - [Instructor] Once you become comfortable with continuous delivery, you might decide to automate production deployments.
>
> **[0:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=7)** To switch to continuous deployment, we'll need to extend the automation a bit in the script for our deployment pipeline.
>
> **[0:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=14)** So let's get started.
>
> **[0:16](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=16)** The first thing that we'll need to do, is copy the stage that deploys our application to the staging environment.
>
> **[0:25](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=25)** I'm going to go ahead and I'll place it here, as the last stage within our pipeline.
>
> **[0:31](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=31)** Once it's in place, I'm going to then switch its name over to, Deploy to Production.
>
> **[0:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=37)** All right.
>
> **[0:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=38)** Now it's just going to take a few tweaks to automate our production deployments.
>
> **[0:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=43)** In this first step, which uses git to pull the manifests from the main branch into the workspace, we'll need to change the branch that it pulls from.
>
> **[0:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=53)** Instead, we're going to pull from the release branch and those are the manifests that will get applied on our production cluster.
>
> **[1:02](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=62)** Now you'll recall, when we promoted our changes to production manually, all we did was merge the main branch into the release branch, and that's all we need to do here.
>
> **[1:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=73)** We're just going to automate it.
>
> **[1:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=75)** So let's go ahead, and we'll remove this step that uses customize.
>
> **[1:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=80)** And then we're going to switch this command, which performs a commit over to perform a merge.
>
> **[1:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=86)** So we'll say, git merge main.
>
> **[1:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=89)** And this will cause the changes in the main branch, which are currently applied to the staging environment, to be merged into the release branch where Argo CD will build the production overlay and apply the changes to the production cluster.
>
> **[1:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=105)** Okay.
>
> **[1:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=105)** There's one last thing.
>
> **[1:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=107)** Here, you can see that we're pushing the changes to the main branch to GitHub.
>
> **[1:52](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=112)** Instead, we need to push the changes in the release branch to GitHub.
>
> **[1:58](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=118)** Okay.
>
> **[1:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=119)** Now everything's in place to automate our production deployments.
>
> **[2:03](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=123)** I have to point out one more thing here though.
>
> **[2:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=126)** Before we would push to production, we should do a lot of testing, and verification of these changes to make sure they're production worthy.
>
> **[2:14](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=134)** But we're focused on the mechanics of the pipeline, so we're going to head over to the terminal, and here, I'm going to go ahead and stage these changes inside the deploy repo.
>
> **[2:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=146)** Then I'll make a commit.
>
> **[2:28](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=148)** We can say that we're adding continuous deployment.
>
> **[2:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=154)** Then we'll push those changes over to GitHub.
>
> **[2:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=157)** And that will cause Jenkins to pick them up.
>
> **[2:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=159)** And our deployment pipeline will have the final stage within it that automates the deployment to production.
>
> **[2:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=167)** All right.
>
> **[2:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=168)** Now that that's being put in place, let's go make a change to our application so that we can run it through our pipeline.
>
> **[2:55](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=175)** So back in Eclipse, you'll notice I have three other files open.
>
> **[2:59](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=179)** These are part of the hotel-webapp project, and we've seen the bookings.html file before, but there's also two other pages, guests and rooms.
>
> **[3:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=191)** And these provide information about the different guests staying at the hotel and the rooms that are available.
>
> **[3:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=197)** We're going to update our bookings.html page to add links to these pages within its menu.
>
> **[3:24](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=204)** You can see that here.
>
> **[3:26](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=206)** Let's just go ahead and we'll add in the links.
>
> **[3:30](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=210)** And then these pages will be available within the web application.
>
> **[3:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=215)** Now that we've made the updates to our app, let's head over to the terminal, and we can commit them to the hotel-webapp repository.
>
> **[3:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=225)** Once again, I'll stage our changes, then I'll create the commit.
>
> **[3:49](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=229)** I'll say we're updating the nav links.
>
> **[3:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=233)** We'll go ahead and push these changes over to GitHub, to trigger our pipeline.
>
> **[4:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=240)** All right.
>
> **[4:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=240)** Now let's navigate to Jenkins, so that we can watch the pipeline execute.
>
> **[4:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=246)** Okay.
>
> **[4:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=247)** Jenkins is queuing up the build.
>
> **[4:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=248)** So let's head into the hotel-webapp pipeline.
>
> **[4:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=252)** And we can see it's already executing.
>
> **[4:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=257)** And it's getting ready to trigger the deploy pipeline.
>
> **[4:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=260)** Let's head over there, and we can watch the automated deployments.
>
> **[4:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=269)** Okay.
>
> **[4:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=269)** It just triggered the production deployments.
>
> **[4:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=272)** Let's wait a few minutes, and then we'll check the status of our apps.
>
> **[4:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=277)** All right.
>
> **[4:38](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=278)** Let's see if the changes were deployed to the staging environment.
>
> **[4:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=283)** Okay.
>
> **[4:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=284)** There, we can see the links to the new pages and we can hit them, which we'll call back to the different microservices that provide the information displayed on the page.
>
> **[4:54](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=294)** Now, let's see, how the automated deployment to production is doing There we see the links, and it looks like the release has been performed to production.
>
> **[5:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=305)** So now we've built an end-to-end delivery pipeline for a modern Java application that is architected to use microservices.
>
> **[5:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=313)** The mechanics of our delivery process are now automated, and we can consistently and safely repeat them.
>
> **[5:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=319)** When developing software this is a game changer that will accelerate the pace and tempo of your project, your team, and your organization.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), switch (3), from. (1)
> **CLI Commands:** make (3), git (2), cd (1)
> **Tools:** github (4), terminal (2)
> **File Paths:** bookings.html (2)
> **UI Navigation:** switch to (1), navigate to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Course Wrap-Up

#### Course wrap-up
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=0)** - [Kevin] Before we conclude the course, I want to highlight some other topics you might explore and provide you with information about my other courses.
>
> **[0:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=9)** Now that you've seen the power of continuous delivery, I would recommend checking out some of the quality assurance tools that can be included in the pipeline.
>
> **[0:18](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=18)** We focus mainly on the mechanics of how the pipeline can deliver changes, but there's a huge ecosystem of tools that it can use to test and verify our software.
>
> **[0:29](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=29)** You might also want to check out progressive delivery.
>
> **[0:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=33)** It introduces some advanced techniques for how we continuously deploy our applications.
>
> **[0:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=39)** If you like my teaching style, I have a few other courses on the LinkedIn Learning platform that might interest you.
>
> **[0:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=46)** I can teach you about other topics like microservices, APIs, Java Collections, Spring, or Git.
>
> **[0:53](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=53)** If you found the GitOps approach we used in the course interesting, I also have an entire course on that as well.
>
> **[1:01](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=61)** If you want to, tag me when you post your course certificate.
>
> **[1:04](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=64)** I always like to interact with learners taking my courses and enjoy hearing your feedback.
>
> **[1:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=70)** Nothing makes my day brighter than when I hear from someone who enjoyed a course.
>
> **[1:15](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=75)** So that's it for now.
>
> **[1:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=77)** Congratulations on finishing the course, and thank you for taking it.
>
> **[1:21](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=81)** Now go apply what you learned and automate your delivery process.

> [!info]- Semantic Content
>
> **CLI Commands:** git (1)
> **Speakers:** - [kevin] (1)


## Path Context

### In [[Building Your Java Skills]]
← [[Complete Guide to Java Design Patterns- Creational, Behavioral, and Structural]] | **5 of 6** | [[Nail Your Java Interview]] →

## Appears In

- [[Building Your Java Skills]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] — Cloud-Native Applications

---

[↑ Back to top](#)