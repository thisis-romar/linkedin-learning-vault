---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-virtualization-13945890
url: "https://www.linkedin.com/learning/learning-virtualization-13945890"
duration_minutes: 133
duration: 2h 13m
level: Beginner
updated: 1/7/2025
learners: 47331
skills:
  - Virtualization
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFa6NvpE0yXFQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1621011058765?e=2147483647&amp;v=beta&amp;t=2D8IpuU_ApvsNPWo6aF_2Zmo7NuMbhSyI3gDwbqaem8"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Networking and Administration Fundamentals]]'
  - '[[Essential New Skills in IT Administration]]'
prev_courses:
  - '[[Introduction to Identity and Access Management]]'
  - '[[Server Administration Essential Training]]'
next_courses:
  - '[[Learning PowerShell]]'
  - '[[Cloud Computing Understanding Core Concepts]]'
path_nav: '[{"path":"Networking and Administration Fundamentals","position":7,"total":10,"prev":"Introduction to Identity and Access Management","next":"Learning PowerShell"},{"path":"Essential New Skills in IT Administration","position":3,"total":5,"prev":"Server Administration Essential Training","next":"Cloud Computing Understanding Core Concepts"}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/network-and-system-administration
  - skill/virtualization
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Learning%20Virtualization.md)

![Learning Virtualization](https://media.licdn.com/dms/image/v2/C560DAQFa6NvpE0yXFQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1621011058765?e=2147483647&amp;v=beta&amp;t=2D8IpuU_ApvsNPWo6aF_2Zmo7NuMbhSyI3gDwbqaem8)

# Learning Virtualization

> Virtualization is a vastly important topic to IT managers, as it allows one computer to run multiple operating systems, leading to a more efficient use of hardware resources. In this course, Martin Guidry looks at the crucial concepts behind today's virtualization technologies, covering the important features, plus plenty of other tools and techniques. He starts by discussing several advantages an

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-virtualization-13945890) | 2h 13m | Beginner | 47K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learning virtualization](#learning-virtualization)
  - [About this update](#about-this-update)
  - [What you should know before starting](#what-you-should-know-before-starting)
- [**1. Introduction to Virtualization**](#1-introduction-to-virtualization) (3 videos)
  - [Overview of virtualization](#overview-of-virtualization)
  - [Understanding different types of hypervisors](#understanding-different-types-of-hypervisors)
  - [Understanding the cloud](#understanding-the-cloud)
- [**2. Virtualization Advantages**](#2-virtualization-advantages) (5 videos)
  - [Using virtualization for more efficient utilization of hardware](#using-virtualization-for-more-efficient-utilization-of-hardware)
  - [Using virtualization to increase availability](#using-virtualization-to-increase-availability)
  - [Disaster recovery](#disaster-recovery)
  - [Just-in-time delivery of resources](#just-in-time-delivery-of-resources)
  - [Saving energy](#saving-energy)
- [**3. Virtualization Disadvantages**](#3-virtualization-disadvantages) (3 videos)
  - [Increased complexity](#increased-complexity)
  - [Expense](#expense)
  - [Sprawl](#sprawl)
- [**4. Common Uses of Virtualization**](#4-common-uses-of-virtualization) (6 videos)
  - [Virtualizing desktop computers](#virtualizing-desktop-computers)
  - [Running a specific program](#running-a-specific-program)
  - [Setting up test and development environments](#setting-up-test-and-development-environments)
  - [Designing a private cloud](#designing-a-private-cloud)
  - [Utilizing a public cloud](#utilizing-a-public-cloud)
  - [Choosing the best solution for you](#choosing-the-best-solution-for-you)
- [**5. Hardware**](#5-hardware) (5 videos)
  - [Understanding virtual CPU](#understanding-virtual-cpu)
  - [Understanding virtual memory](#understanding-virtual-memory)
  - [Understanding virtual storage](#understanding-virtual-storage)
  - [Understanding virtual networking](#understanding-virtual-networking)
  - [Understanding virtual graphic processing](#understanding-virtual-graphic-processing)
- [**6. Microsoft Hyper-V**](#6-microsoft-hyper-v) (6 videos)
  - [Installing Hyper-V](#installing-hyper-v)
  - [Creating a virtual machine with Hyper-V](#creating-a-virtual-machine-with-hyper-v)
  - [Setting up networking with Hyper-V](#setting-up-networking-with-hyper-v)
  - [Allocating processors and memory to a virtual machine using Hyper-V](#allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v)
  - [Using checkpoints in Hyper-V](#using-checkpoints-in-hyper-v)
  - [Uninstalling Hyper-V](#uninstalling-hyper-v)
- [**7. VMware Workstation**](#7-vmware-workstation) (5 videos)
  - [Installing VMware Workstation](#installing-vmware-workstation)
  - [Creating a virtual machine with VMware Workstation](#creating-a-virtual-machine-with-vmware-workstation)
  - [Setting up networking with VMware Workstation](#setting-up-networking-with-vmware-workstation)
  - [Allocating processors and memory to a virtual machine using VMware Workstation](#allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation)
  - [Duplicating a virtual machine using VMware Workstation](#duplicating-a-virtual-machine-using-vmware-workstation)
- [**8. Preparing Your Infrastructure for Virtualization**](#8-preparing-your-infrastructure-for-virtualization) (2 videos)
  - [Understanding different file systems](#understanding-different-file-systems)
  - [Choosing between SAN, NAS, or local storage](#choosing-between-san-nas-or-local-storage)
- [**9. Troubleshooting**](#9-troubleshooting) (3 videos)
  - [Troubleshooting network communication](#troubleshooting-network-communication)
  - [Troubleshooting slow performance](#troubleshooting-slow-performance)
  - [Troubleshooting common errors](#troubleshooting-common-errors)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning virtualization](https://www.linkedin.com/learning/learning-virtualization-13945890/learning-virtualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/learning-virtualization?u=76281980&t=0)** - [Martin] Hi, I'm Martin Guidry and welcome to Learning Virtualization.
>
> **[0:04](https://www.linkedin.com/learning/learning-virtualization-13945890/learning-virtualization?u=76281980&t=4)** In this course, we'll look at the crucial concept behind today's virtualization technologies.
>
> **[0:10](https://www.linkedin.com/learning/learning-virtualization-13945890/learning-virtualization?u=76281980&t=10)** I'll start by discussing several advantages and a few disadvantages of virtualization.
>
> **[0:16](https://www.linkedin.com/learning/learning-virtualization-13945890/learning-virtualization?u=76281980&t=16)** Then, I'll show you how to use [[Microsoft]] Hyper-V and VMware Workstation to create and maintain [[Virtual Machines]].
>
> **[0:23](https://www.linkedin.com/learning/learning-virtualization-13945890/learning-virtualization?u=76281980&t=23)** We'll see how to choose the right virtualization technologies for your situation and how to prepare your existing IT infrastructure to accommodate virtualization.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/learning-virtualization?u=76281980&t=33)** We'll cover all these features plus plenty of other tools and techniques.
>
> **[0:37](https://www.linkedin.com/learning/learning-virtualization-13945890/learning-virtualization?u=76281980&t=37)** Now let's get started with learning virtualization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Virtual Machines]] (1)
> **Speakers:** - [martin] (1)

#### [About this update](https://www.linkedin.com/learning/learning-virtualization-13945890/about-this-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/about-this-update?u=76281980&t=0)** - [Instructor] This course has been updated for 2021.
>
> **[0:04](https://www.linkedin.com/learning/learning-virtualization-13945890/about-this-update?u=76281980&t=4)** Virtualization technology is always changing.
>
> **[0:07](https://www.linkedin.com/learning/learning-virtualization-13945890/about-this-update?u=76281980&t=7)** Some of the basics of why we use virtualization, how it works, what the advantages are, that stuff doesn't change too much.
>
> **[0:15](https://www.linkedin.com/learning/learning-virtualization-13945890/about-this-update?u=76281980&t=15)** But the actual [[Microsoft Products|products]] from various vendors does tend to change rapidly.
>
> **[0:20](https://www.linkedin.com/learning/learning-virtualization-13945890/about-this-update?u=76281980&t=20)** For this update, I'll be using Hyper-V running on [[Windows 10]] and VMware Workstation 16.
>
> **[0:28](https://www.linkedin.com/learning/learning-virtualization-13945890/about-this-update?u=76281980&t=28)** Most of the features I'll be covering in these products are similar to features that are in previous versions.
>
> **[0:35](https://www.linkedin.com/learning/learning-virtualization-13945890/about-this-update?u=76281980&t=35)** So if you're on a previous version, your interface might look a little different, but the basic functionality should be very similar.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Windows 10]] (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [What you should know before starting](https://www.linkedin.com/learning/learning-virtualization-13945890/what-you-should-know-before-starting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/what-you-should-know-before-starting?u=76281980&t=0)** - [Instructor] In order to get the most out of this course you should have a little background knowledge.
>
> **[0:05](https://www.linkedin.com/learning/learning-virtualization-13945890/what-you-should-know-before-starting?u=76281980&t=5)** It would be beneficial, if you have an understanding of basic [[Hardware]], things like processor, memory, and disk drives.
>
> **[0:12](https://www.linkedin.com/learning/learning-virtualization-13945890/what-you-should-know-before-starting?u=76281980&t=12)** We're going to talk about some networking concepts in the course and how we can network [[Virtual Machines]] to physical machines so it will be good if you have a little basic networking knowledge.
>
> **[0:23](https://www.linkedin.com/learning/learning-virtualization-13945890/what-you-should-know-before-starting?u=76281980&t=23)** We're going to talk about software licensing.
>
> **[0:26](https://www.linkedin.com/learning/learning-virtualization-13945890/what-you-should-know-before-starting?u=76281980&t=26)** Therefore, it would be beneficial if you have a basic understanding of how software is licensed in your organization.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/what-you-should-know-before-starting?u=76281980&t=33)** If your goal for the course is to set up a virtual server, it would certainly be beneficial if you are familiar with the process of setting up a physical server.
>
> **[0:42](https://www.linkedin.com/learning/learning-virtualization-13945890/what-you-should-know-before-starting?u=76281980&t=42)** This course will help you understand the differences between that and a virtual server.
>
> **[0:47](https://www.linkedin.com/learning/learning-virtualization-13945890/what-you-should-know-before-starting?u=76281980&t=47)** And don't worry if you've never used a virtual machine, we're going to start off with the basics and get you where you need to be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[Virtual Machines]] (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Virtualization

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of virtualization](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=0)** - [Instructor] I'd like to start off with a basic definition of what virtualization is.
>
> **[0:04](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=4)** Let's get a working definition under our belt.
>
> **[0:07](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=7)** A dictionary definition of the [[Microsoft Word|word]] virtual is: "Very close to being something without actually being it."
>
> **[0:15](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=15)** And we will find when we create [[Virtual Machines]] and virtual servers that we create something that is very close to an actual computer without actually being a computer.
>
> **[0:26](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=26)** Another dictionary definition is: "Being such in power or effect though, not actually such."
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=33)** And this is one of the goals of our virtual machines, to have the same power and effect as a physical machine, though they are not actually a physical machine.
>
> **[0:42](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=42)** Continuing to define the word virtual and now more in computer terms, virtual is the opposite of physical.
>
> **[0:50](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=50)** And in the common terminology these days amongst engineers when you want to discuss a machine that is not virtual, you say it's a physical server.
>
> **[0:58](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=58)** These virtual servers exist only in the memory of a computer.
>
> **[1:02](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=62)** There are no physical components for us to touch or see, it exists only in memory.
>
> **[1:07](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=67)** Let's look at a metaphor of other virtual items and then compare that to virtual servers.
>
> **[1:13](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=73)** In a car racing video game, there is no physical car.
>
> **[1:18](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=78)** We have only a computer [[Simulation]] of an engine, a transmission, brakes, tires and other parts that combine to form a virtual car.
>
> **[1:30](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=90)** Likewise, when we have a virtual server, there are no physical computer parts.
>
> **[1:35](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=95)** We're not going to buy a physical hard drive or memory or processor.
>
> **[1:40](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=100)** Instead, we will have a computer simulation of a processor, memory, disk, and network.
>
> **[1:47](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=107)** In particular, if we were hoping to build an email server, we could go out and buy physical parts and combine those parts into a physical computer.
>
> **[1:57](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=117)** Or we could use virtualization software to create a simulation of a processor, memory and disk and use those virtualized components to create a virtual server.
>
> **[2:09](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=129)** That virtual email server would be able to send and receive email exactly the same as a physical email server, and therefore it accomplishes the same goals as a physical server.
>
> **[2:21](https://www.linkedin.com/learning/learning-virtualization-13945890/overview-of-virtualization?u=76281980&t=141)** That's one of the common themes of our virtual servers, they will accomplish the same task in the same way as a physical server would, but instead they will be virtual servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), [[Microsoft Word|Word]] (2), [[Virtual Machines]] (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Understanding different types of hypervisors](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=0)** - [Instructor] The next piece of terminology I'd like to talk about is the [[Microsoft Word|word]] Hypervisor.
>
> **[0:05](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=5)** A Hypervisor is a piece of computer software, firmware, or [[Hardware]] that creates and runs [[Virtual Machines]].
>
> **[0:14](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=14)** Any software or hardware that is designed to create and run virtual machines is a Hypervisor.
>
> **[0:20](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=20)** You may notice that some vendors, when they name their product, they use the word Hypervisor or some abbreviation of that.
>
> **[0:27](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=27)** The term Hypervisor is meant to be just a generic term that doesn't apply to any particular vendor.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=33)** When running a Hypervisor, we will have one machine called the host, which is an actual physical server that runs the Hypervisor software.
>
> **[0:42](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=42)** On that host, we will have one or more guest machines.
>
> **[0:46](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=46)** Each guest machine is a virtual machine that does not exist physically.
>
> **[0:51](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=51)** It only exists in the memory of the Hypervisor.
>
> **[0:55](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=55)** In general, there are two types of Hypervisor, and in the industry, they are known somewhat unimaginatively as a Type One and a Type Two.
>
> **[1:04](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=64)** Type One Hypervisor is sometimes called a native or a Bare Metal Hypervisor.
>
> **[1:12](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=72)** In this type of Hypervisor, the software runs directly on the physical hardware.
>
> **[1:17](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=77)** There is no operating system separate from the Hypervisor.
>
> **[1:21](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=81)** So our Hypervisor acts as the operating system, and in addition, it also hosts virtual machines.
>
> **[1:29](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=89)** Contrast that to a Type Two Hypervisor, sometimes called a hosted Hypervisor.
>
> **[1:35](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=95)** Type Two Hypervisors do require a separate operating system.
>
> **[1:39](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-types-of-hypervisors?u=76281980&t=99)** So first, you would install an operating system, and then you would install the Hypervisor software that could run as an application or a service on that operating system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Virtual Machines]] (3), [[Microsoft Word|Word]] (2)
> **Definitions:** is a  (3), is an  (1)
> **Prerequisites:** install (2)
> **Speakers:** - [instructor] (1)

#### [Understanding the cloud](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=0)** - In this section, I'd like to talk about the cloud and get a working definition of the cloud.
>
> **[0:06](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=6)** The cloud is a little difficult to define because different vendors define it differently.
>
> **[0:11](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=11)** But in general, a cloud solution involves some vendor running hypervisor software on [[Hardware]] that they own.
>
> **[0:19](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=19)** They will rent to you access to that hypervisor where you can run your own [[Virtual Machines]] or use pre-built virtual machines.
>
> **[0:28](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=28)** When you run a virtual machine in the cloud you may not be exactly sure what physical server is running your virtual server.
>
> **[0:36](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=36)** For example, if you're using the [amazon.com](https://amazon.com) AWS service, you may not be exactly sure where your virtual server is running.
>
> **[0:46](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=46)** Amazon runs large data centers in California, Oregon, and Virginia.
>
> **[0:52](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=52)** So at any given time, your virtual server could be in any one of those data centers.
>
> **[0:58](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=58)** And even if you knew what data center it was in, you wouldn't know what machine in that data center it's running on.
>
> **[1:06](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=66)** Therefore, when you want to draw a network diagram instead of actually placing things in a specific location, people typically draw a cloud on the network diagram to represent all of these things that we don't know exactly where they're running.
>
> **[1:23](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=83)** That is how this came to be called the cloud.
>
> **[1:26](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=86)** You may hear the term public cloud and private cloud.
>
> **[1:30](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=90)** Simply put a public cloud is owned by someone else, and they rent access to it, usually on a monthly basis.
>
> **[1:38](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=98)** There'll be lots of different customers running on one set of physical hardware.
>
> **[1:43](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=103)** Contrast that to the private cloud, which is owned by the people that use it, therefore there's only one customer running on a private cloud.
>
> **[1:52](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=112)** What's becoming popular today is a [[Hybrid Cloud]], which is a combination of public and private.
>
> **[1:58](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=118)** It can be a good idea for some companies to set up their own private cloud and run their virtual machines there.
>
> **[2:06](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=126)** But as part of a backup or contingency plan, they could have the option to move those virtual machines to a public cloud in case their private cloud goes offline, for some reason.
>
> **[2:18](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=138)** There's also some specific businesses, for example, an [[E-Commerce]] retailer that might have a certain workload through most of the year that their private cloud could handle.
>
> **[2:29](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=149)** And then during a busy time, such as the Christmas season, they might need extra computing power and they could combine with that with the public cloud and use both the private and public for a short time.
>
> **[2:42](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=162)** Different cloud vendors offer a wide variety of services.
>
> **[2:46](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=166)** Most of those services fall in one of three categories: First, we have [[IaaS|infrastructure as a service]] and this is the case where the cloud provider provides virtual processor, memory, and disk.
>
> **[3:00](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=180)** And you can do with it as you, please.
>
> **[3:02](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=182)** You can install virtual machines on those virtual machines.
>
> **[3:06](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=186)** You can run almost any operating system or any piece of software you would like.
>
> **[3:11](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=191)** other cloud providers go with the mindset of [[PaaS|platform as a service]], in which they will sell you a predetermined platform.
>
> **[3:19](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=199)** Typically this means having an operating system and possibly having some software on there, like a relational database server and a web server.
>
> **[3:28](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=208)** Now you can go in and create a website, load some data into the database, and not have to worry about installing an operating system or maintaining that.
>
> **[3:38](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=218)** That would be part of what you pay for from your cloud provider.
>
> **[3:43](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=223)** The third option is [[SaaS|software as a service]].
>
> **[3:46](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=226)** And this is where you get a predefined, fully functional piece of software.
>
> **[3:51](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=231)** And you use it as is.
>
> **[3:53](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=233)** There's typically little or no maintenance or administration that has to be done by the end user.
>
> **[3:58](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=238)** You just use the software as necessary.
>
> **[4:02](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-the-cloud?u=76281980&t=242)** Anyone who has a Gmail account is essentially using a software as a service email provider that runs in the [[Google Cloud Platform (GCP)|Google cloud]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (6), [[Hardware]] (2), [[SaaS|Software as a service]] (2), [[Hybrid Cloud]] (1), [[E-Commerce]] (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), such as (1)
> **Prerequisites:** set up (1), install (1)
> **CLI Commands:** aws (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Env Vars:** aws (1)
> **Speakers:** - in (1)


### 2. Virtualization Advantages

[↑ Back to Table of Contents](#table-of-contents)

#### [Using virtualization for more efficient utilization of hardware](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about one of the advantages of virtualization, and that's the efficient utilization of [[Hardware]].
>
> **[0:08](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=8)** Simply put, virtualization should allow us to use the resources we need; no more, no less.
>
> **[0:15](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=15)** This will hopefully help us avoid the situation where a server is significantly underpowered or overpowered.
>
> **[0:22](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=22)** Almost all of the hypervisor tools currently available on the market will allow us to easily resize a virtual machine manually.
>
> **[0:32](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=32)** So this would be a manual process performed by an administrator where we increase or decrease the number of processors, the amount of RAM or the number or size of hard drives.
>
> **[0:44](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=44)** Some of the more advanced hypervisors on the market will do some of this for you automatically.
>
> **[0:50](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=50)** So the hypervisor will continuously monitor a virtual machine.
>
> **[0:54](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=54)** When that virtual machine begins to get short on a certain resource, the hypervisor will provide additional resources.
>
> **[1:02](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=62)** And also if a virtual machine has an excessive amount of resources, the hypervisor can adjust the resources to the proper level.
>
> **[1:10](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=70)** Some examples of times when you might want to increase or decrease the amount of resources available to a virtual machine.
>
> **[1:18](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=78)** And one happens with the initial sizing of a server.
>
> **[1:21](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=81)** So when we first determined that we have a need for a new server, whether it be a virtual server or a physical server, we'll need to make some estimates of how much RAM, processor and disk this server needs.
>
> **[1:35](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=95)** Sometimes we aren't 100% accurate with these estimates.
>
> **[1:38](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=98)** And once we build and start running the server, we find that we actually need significantly more or significantly less of a certain resource.
>
> **[1:48](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=108)** If you had built out a physical server, at this point it can be fairly difficult to change the amount of resources.
>
> **[1:55](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=115)** Adding new resources would be an additional cost.
>
> **[1:58](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=118)** Removing resources can also be difficult.
>
> **[2:01](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=121)** It's unlikely we would be able to recover the money we spent on the resource in the first place.
>
> **[2:07](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=127)** However, with a virtual machine, it's fairly easy to add and remove resources, and therefore the initial sizing of a server isn't quite as important.
>
> **[2:16](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=136)** It's no longer vital that we get this exactly right the first time.
>
> **[2:19](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=139)** We now have a margin of error where we can go back and change things after the initial sizing.
>
> **[2:25](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=145)** There are also some business cases where you will have a temporary change in the need for resources.
>
> **[2:32](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=152)** So for example, if you are an [[E-Commerce]] site doing a lot of sales online, you probably have a certain workload during most of the year, and then a significant increase in workload around the Christmas buying season in late November and December.
>
> **[2:48](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=168)** You may need to handle five or 10 times more traffic than you normally do.
>
> **[2:53](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=173)** And obviously that's going to require more resources in your server.
>
> **[2:57](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=177)** Again, with a physical server, it might be extremely difficult to increase the number of processors or RAM significantly.
>
> **[3:05](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=185)** But with a virtual machine, it can be quite easy.
>
> **[3:08](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=188)** When we resize a virtual machine, this will have some impact to the guest operating system.
>
> **[3:14](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=194)** Some older operating systems have trouble with increasing or decreasing the amount of memory or processor.
>
> **[3:22](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=202)** In particular, processor was a problem in some of the legacy versions of [[Windows]].
>
> **[3:27](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=207)** So for example, Windows XP and Windows 2003 would have problems if you went from a single processor to multiple processors.
>
> **[3:36](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=216)** If you already had multiple processors, you actually could change the number.
>
> **[3:40](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=220)** You could go from two to four or vice versa.
>
> **[3:44](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=224)** But going from single to multiple, or going from multiple to single would cause problems.
>
> **[3:50](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=230)** This is actually no longer a problem in modern operating systems.
>
> **[3:54](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=234)** So everything from Windows Vista on and from [[Windows Server]] 2008 on will handle these changes quite well.
>
> **[4:02](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=242)** We can change the amount of processor or the amount of RAM without a significant impact on the operating system.
>
> **[4:09](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=249)** Other than all operating systems have some maximum, there is some maximum number of processors and some maximum number of RAM.
>
> **[4:17](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-for-more-efficient-utilization-of-hardware?u=76281980&t=257)** So before you go crazy adding a ton of resources, you'll want to check the documentation of the guest operating system and see what is the maximum it can handle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Hardware]] (1), [[E-Commerce]] (1), [[Windows Server]] (1)
> **Env Vars:** ram (5)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for example (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Using virtualization to increase availability](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=0)** - In this section, I'd like to talk about one of the advantages of virtualization and that is increased availability.
>
> **[0:07](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=7)** We're going to talk about a technique called live migration.
>
> **[0:10](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=10)** Live migration is the process of moving a running virtual machine to a different host.
>
> **[0:16](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=16)** So if we're having some issues with a host and maybe need to take that host offline for a short amount of time, rather than having all of the guest [[Virtual Machines]] be also offline instead we'll just move those virtual machines to a different host.
>
> **[0:31](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=31)** We're going to do this while the virtual machine is still running.
>
> **[0:35](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=35)** So there should be little or no impact to the end user.
>
> **[0:38](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=38)** The end user probably won't even be aware that the virtual machine moved.
>
> **[0:43](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=43)** This is somewhat of an advanced feature and not all hypervisors support it, but most do, and may sound like an incredibly complicated thing to do to move something while it's running.
>
> **[0:53](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=53)** But remember a virtual machine is just data.
>
> **[0:56](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=56)** A virtual machine is data in the memory of a computer just like a [[Microsoft Word|word]] processing document is data in the memory of a computer.
>
> **[1:04](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=64)** So virtual machines can be copied from one place to another.
>
> **[1:09](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=69)** Remember though that virtual machines are large amounts of data.
>
> **[1:13](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=73)** And therefore this copy may take a long time.
>
> **[1:16](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=76)** The live migration typically doesn't happen instantly.
>
> **[1:20](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=80)** The amount of time it takes will be proportional to the size of the virtual machine and the amount of bandwidth you have between the two hosts that you're doing the live migration.
>
> **[1:31](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=91)** If we're talking about a situation with scheduled downtime then we need to plan ahead and start doing our live migration far enough before the scheduled downtime that we have enough time to move everything before.
>
> **[1:45](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=105)** Most live migrations are going to be a manual process where an administrator comes in and manually says, okay I want to move this virtual machine right now.
>
> **[1:54](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=114)** They also could schedule it to be moved in the future.
>
> **[1:58](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=118)** Some of the more advanced type providers on the market will support automatic migration meaning they will constantly monitor a host.
>
> **[2:05](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=125)** And if they see a problem with the host they can kick off a live migration of all the guests machines off of that host.
>
> **[2:14](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=134)** Hopefully there will be enough time to migrate all of the guests machines to a healthy host before the unhealthy host crashes.
>
> **[2:24](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=144)** Therefore, the amount of time it takes to do a live migration is something you want to be aware of.
>
> **[2:29](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=149)** We always want to be working towards minimizing the amount of time of a live migration.
>
> **[2:35](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=155)** We can do this by keeping our virtual machines smaller.
>
> **[2:38](https://www.linkedin.com/learning/learning-virtualization-13945890/using-virtualization-to-increase-availability?u=76281980&t=158)** In other words, using as small, a hard drive as we'll get the job done and also having as much bandwidth as possible between the different hosts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (5), [[Microsoft Word|Word]] (1)
> **Warnings:** be aware (2)
> **Definitions:** in other words (1)
> **Analogies:** just like (1)
> **Speakers:** - in (1)

#### [Disaster recovery](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about one of the advantages of virtualization, and that's how virtualization gives us some more options with disaster recovery.
>
> **[0:09](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=9)** Most of the hypervisors on the market provide some tool that allows us to save the state of a virtual machine at a point in time.
>
> **[0:17](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=17)** We can then in the future return the virtual machine to that state.
>
> **[0:23](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=23)** So if we save the state of it today and then tomorrow we have some sort of problem with the virtual machine, we could revert it back to the saved state that we know was a good functional state.
>
> **[0:36](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=36)** These save points, some vendors call them snapshots, some vendors call them checkpoints.
>
> **[0:42](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=42)** For the purposes of this discussion, we'll use the two terms interchangeably, snapshot or checkpoint, they're both the saved state of a virtual machine at a point in time that we could revert to.
>
> **[0:55](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=55)** Snapshots and checkpoints are often a good idea to use immediately before an administrative task.
>
> **[1:01](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=61)** So for example, if we were going to install a service pack on our server, we would first take a snapshot, then install the service pack and then test the functionality of the server.
>
> **[1:13](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=73)** If there's any problem with the functionality of the server, we would have the option to revert and roll back to the saved snapshot, which would bring the machine back into a state before the service pack was installed where it was a good stable machine.
>
> **[1:29](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=89)** On the other hand, if the machine works properly after the service pack, we'll need to go in and delete the snapshots.
>
> **[1:36](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=96)** Snapshots and checkpoints use a large amount of disk space.
>
> **[1:40](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=100)** When we create the snapshot, we're basically making a copy of all of the virtual disk.
>
> **[1:46](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=106)** So if we have a virtual hard drive of 50 gigabytes, then the snapshot is going to take up 50 gigabytes.
>
> **[1:53](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=113)** If a machine has several hard drives and all of them are large, the size of the snapshot would be the sum of the size of all the hard drives.
>
> **[2:03](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=123)** Most hypervisors will allow us to have several snapshots of a machine, several snapshots from different times.
>
> **[2:12](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=132)** And having that, again, could cause a large amount of disk space.
>
> **[2:15](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=135)** A virtual machine that has five saved snapshots is taking up six times more disk space than the virtual machine would by itself.
>
> **[2:27](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=147)** Some hypervisors accomplish snapshots using what's sometimes called a lazy write.
>
> **[2:33](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=153)** And in this case, when you create a snapshot, the hypervisor does not immediately copy everything.
>
> **[2:40](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=160)** Instead, it just reserves a large amount of disk space, and as changes happen to the live machine, it writes the differences to the snapshot file.
>
> **[2:51](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=171)** So we have a snapshot file and we have a live machine.
>
> **[2:55](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=175)** Every time a change is made to the live machine, the hypervisor will make a note of it in the snapshot file, and therefore that change could be undone.
>
> **[3:04](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=184)** So we could still revert to the snapshot.
>
> **[3:07](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=187)** If we have several snapshots on the same server, then the hypervisor is going to have to lazy write to all of them.
>
> **[3:15](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=195)** And that could be a significant performance problem.
>
> **[3:18](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=198)** When you want to make a simple change to a virtual machine, the hypervisor would have to write to the live version of the virtual machine and make notes in all of the snapshot files.
>
> **[3:28](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=208)** And that's probably going to decrease your performance.
>
> **[3:31](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=211)** Snapshots and checkpoints should not be used as a replacement to traditional backups.
>
> **[3:37](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=217)** So you still need to do the same type of backup you would do on a physical machine.
>
> **[3:41](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=221)** You still need to do those on a virtual machine.
>
> **[3:44](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=224)** Snapshots and checkpoints help us with specific administrative problems but they don't fix everything.
>
> **[3:51](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=231)** One of the reasons they're not a good replacement for backups is you probably aren't going to keep snapshots very long.
>
> **[3:58](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=238)** Because of the increase in disk space and potential performance problems, snapshots are usually deleted a short time after they're created.
>
> **[4:07](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=247)** In the data center I work at, our policy is we always keep snapshots less than 24 hours.
>
> **[4:12](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=252)** So before we do a service pack, we always snapshot the machine, then we perform the service pack.
>
> **[4:18](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=258)** You then have 23 hours to test, and during those 23 hours, if nothing goes wrong, we delete the snapshot, so therefore snapshots are never kept more than 24 hours.
>
> **[4:29](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=269)** This means a snapshot is not a good replacement to a backup because many of the servers in the data center do not currently have a snapshot.
>
> **[4:38](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=278)** Another reason a snapshot is not a replacement to a backup is that snapshots are typically stored on the same drive as the virtual machine.
>
> **[4:47](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=287)** So we could have a virtual machine on a certain drive.
>
> **[4:51](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=291)** If we create a snapshot by default, it will be on the same drive.
>
> **[4:55](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=295)** Therefore, if that driver is damaged, we lose the virtual machine and we also lose the snapshot.
>
> **[5:01](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=301)** Contrast that to a backup, and a backup should always be kept on a separate set of drives or tape.
>
> **[5:07](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=307)** And therefore if our production drive became damaged, it wouldn't affect the backup.
>
> **[5:12](https://www.linkedin.com/learning/learning-virtualization-13945890/disaster-recovery?u=76281980&t=312)** So again, snapshot and checkpoints are a very good tool for a very specific problem but they're not a replacement to traditional backups.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Prerequisites:** install (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Just-in-time delivery of resources](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about the just-in-time delivery of resources to a virtual machine.
>
> **[0:06](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=6)** Most hypervisors will constantly monitor the resource utilization of all guests and will adjust that resource utilization as necessary.
>
> **[0:16](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=16)** The first resource we'll talk about is the processor.
>
> **[0:19](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=19)** In most hypervisors, the number of processors is not going to change very often.
>
> **[0:24](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=24)** An administrator can manually go and make a change but that doesn't happen real often.
>
> **[0:29](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=29)** And typically the hypervisor will not automatically change the number of processors.
>
> **[0:34](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=34)** Some of the more advanced hypervisors on the market, however can automatically change the speed of the processor.
>
> **[0:40](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=40)** So as the needs of a particular guest increase, the hypervisor can present faster and faster processors to that virtual machine.
>
> **[0:50](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=50)** Therefore giving the virtual machine more processing power as needed.
>
> **[0:54](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=54)** The hypervisor will also take away that processing power by slowing down the processor when it's not needed.
>
> **[1:02](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=62)** The other resource to be delivered just in time is memory.
>
> **[1:06](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=66)** Most hypervisors support a system of assigning a dynamic amount of memory.
>
> **[1:11](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=71)** So we set a minimum value and a maximum value.
>
> **[1:15](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=75)** The virtual machine will typically be started with the minimum amount of RAM specified, and as it needs more memory, the hypervisor will allocate more memory.
>
> **[1:24](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=84)** If the time comes to remove memory from the machine, most hypervisors are not very aggressive about that.
>
> **[1:32](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=92)** They will wait until there is an overall shortage of memory on the host machine and then they will go to particular [[Virtual Machines]] and try and reclaim memory.
>
> **[1:41](https://www.linkedin.com/learning/learning-virtualization-13945890/just-in-time-delivery-of-resources?u=76281980&t=101)** When a hypervisor reclaims a memory from some guests, we call that ballooning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** ram (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Saving energy](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about how virtualization can save energy.
>
> **[0:05](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=5)** Saving energy can be a big benefit for any company.
>
> **[0:08](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=8)** Obviously, saving energy is good for the environment.
>
> **[0:11](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=11)** Saving energy also typically means saving money, which every company wants to do.
>
> **[0:17](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=17)** And also saving energy can help scale data centers.
>
> **[0:21](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=21)** Many data centers are bound by how much electricity they can get in.
>
> **[0:25](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=25)** And although they may have the physical space to add more servers, they simply don't have enough power to add more servers.
>
> **[0:32](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=32)** If you could reduce the amount of power being utilized by the servers, then you could get more servers into the data center.
>
> **[0:39](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=39)** The nature of virtualization typically means we buy less [[Hardware]] and that means less energy is consumed.
>
> **[0:46](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=46)** So for example, if you needed to set up 20 servers, you could go out and buy 20 physical servers.
>
> **[0:55](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=55)** So that would be 20 power supplies, 20 hard drives, 20 motherboards, et cetera.
>
> **[1:01](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=61)** And all of those would take up some energy.
>
> **[1:04](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=64)** Or, if you went the virtualization route, you could buy one very powerful piece of hardware and run 20 [[Virtual Machines]] on that one server.
>
> **[1:15](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=75)** So now we only have one power supply, one group of hard drives, and one motherboard.
>
> **[1:21](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=81)** The end result should be less energy consumed, even though that one server that we bought would need to be a very powerful server.
>
> **[1:28](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=88)** It likely would not consume more energy than 20 less powerful servers would.
>
> **[1:34](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=94)** So the very nature of virtualization typically causes you to consume less energy because you are running less hardware.
>
> **[1:42](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=102)** Particularly when you run a large amount of virtual machines on each host.
>
> **[1:47](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=107)** Some hypervisors do have additional features that will help you save energy.
>
> **[1:52](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=112)** Any hypervisor that will speed up and slow down processors automatically is saving you energy.
>
> **[1:58](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=118)** Every time it automatically slows down that processor, it significantly reduces the power consumption of that machine.
>
> **[2:05](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=125)** There also are a few hypervisors and some third-party [[Microsoft Products|products]] that will monitor the energy consumption of any virtual machine and allow you to set a cap audit.
>
> **[2:15](https://www.linkedin.com/learning/learning-virtualization-13945890/saving-energy?u=76281980&t=135)** So the hypervisor will constantly monitor that cap and make sure the virtual machine doesn't burn more than a certain amount of power in a certain timeframe.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Virtual Machines]] (2), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Virtualization Disadvantages

[↑ Back to Table of Contents](#table-of-contents)

#### [Increased complexity](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about one of the disadvantages of virtualization, and that is increased complexity.
>
> **[0:07](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=7)** So anytime we add a hypervisor to a IT system, we have increased the complexity of that system.
>
> **[0:15](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=15)** Some specific things that might become more complex are the network, the storage, and the troubleshooting.
>
> **[0:23](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=23)** We'll look through each of these one at a time.
>
> **[0:26](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=26)** First, let's talk about our network.
>
> **[0:28](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=28)** Virtualization is typically going to increase the load on the network.
>
> **[0:32](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=32)** Obviously, creating new servers, and those servers need bandwidth.
>
> **[0:37](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=37)** That will increase the load.
>
> **[0:39](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=39)** Also, virtualization typically doesn't work very well with local storage.
>
> **[0:44](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=44)** To get the most out of virtualization, we'll be going with some sort of storage attached to the network.
>
> **[0:49](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=49)** And that means lots of packets flowing across on our network or information from the storage subsystem.
>
> **[0:55](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=55)** We also have to think about virtual network devices.
>
> **[0:59](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=59)** Most hypervisors support some concept of a virtual switch that allows the different [[Virtual Machines]] to talk to one another and allows the virtual machines to communicate with the outside world.
>
> **[1:11](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=71)** The details of that virtual switch are somewhat hidden from us, and to actually administer that switch and look into it can be difficult.
>
> **[1:20](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=80)** With virtual machines, when we clone the machine or duplicate a machine, we sometimes inadvertently come up with two virtual machines that have duplicated IP addresses and duplicated MAC addresses.
>
> **[1:33](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=93)** Once these problems are found, they're pretty easy to clean up, but it can be a little difficult to find them.
>
> **[1:40](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=100)** In my experience actually, duplicated IP addresses, those errors come up quickly and most operating systems will alert you to them.
>
> **[1:48](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=108)** Duplicated MAC addresses can be a little more difficult to find.
>
> **[1:53](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=113)** The details of that often hidden to the end user, and the end user just experiences very slow network performance.
>
> **[2:01](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=121)** Once you find that the root cause is actually a duplicated MAC address, typically fairly easy to fix.
>
> **[2:08](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=128)** Let's also talk about how virtualization increases the complexity of our storage.
>
> **[2:12](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=132)** As I mentioned, there can be some performance problems with local storage.
>
> **[2:16](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=136)** The total throughput of a local drive is typically not sufficient to run multiple virtual machines.
>
> **[2:22](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=142)** So we'll need to go to a network attached storage or a SAN.
>
> **[2:27](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=147)** We will probably need to increase the quantity of our storage.
>
> **[2:30](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=150)** Virtual machines tend to be quite large, and therefore we will need a large quantity of storage.
>
> **[2:37](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=157)** You'll also need to worry about the quality of your storage.
>
> **[2:41](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=161)** In a lot of virtual machines scenarios, the bottleneck is the storage subsystem, and therefore higher quality storage will give you better performance.
>
> **[2:51](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=171)** One more thing I'd like to talk about is how troubleshooting can become increasingly complex in an IT system that includes a hypervisor.
>
> **[3:00](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=180)** Whenever we get into a troubleshooting scenario on virtual servers, we have to consider is the problem the hypervisor?
>
> **[3:07](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=187)** In my experience, the problem is typically not the hypervisor, but every time I do a troubleshooting of a virtual machine, it's always in the back of my mind.
>
> **[3:15](https://www.linkedin.com/learning/learning-virtualization-13945890/increased-complexity?u=76281980&t=195)** And it's always one more thing to consider that "What if?" the hypervisor is the problem here that makes troubleshooting more complex.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (7)
> **Env Vars:** mac (3), san (1)
> **CLI Commands:** find (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Expense](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about one of the disadvantages of virtualization and that is expense.
>
> **[0:06](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=6)** Now I want to be clear that in a properly designed virtual environment, in the long run, we should be able to save money, and obviously saving money is a good thing, but do be aware there are some expenses associated with virtualization and if you're not careful, some of these expenses can get out of hand.
>
> **[0:23](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=23)** There are many hypervisor [[Microsoft Products|products]] on the market that are free, but most of the best advanced features are not free.
>
> **[0:30](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=30)** Many vendors have several offerings.
>
> **[0:32](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=32)** The offerings with the fewest features are typically free, but the offerings with the best features are not free.
>
> **[0:38](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=38)** Other vendors just have the one hypervisor but there's ad-ons available to it.
>
> **[0:43](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=43)** So the hypervisor's free, but the ad-ons that give you the additional features can be expensive.
>
> **[0:49](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=49)** Also remember that the software loaded onto the guest machine is not free.
>
> **[0:55](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=55)** So every guest machine will need an operating system and probably several applications.
>
> **[1:00](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=60)** All of those things are going to need a license.
>
> **[1:03](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=63)** Those licenses can get expensive.
>
> **[1:05](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=65)** Some vendors license their software slightly differently for [[Virtual Machines]] rather than physical machines.
>
> **[1:12](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=72)** So for example, a database server, the license on a physical machine might be done by processor.
>
> **[1:18](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=78)** where if the machine has four processors, you have to buy four licenses.
>
> **[1:23](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=83)** On a virtual machine, some vendors go by the number of processors on the guest machine, and some vendors go by the number of processors on the host machine.
>
> **[1:33](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=93)** So for example, if your host had 16 processors, even if only one of those processors is exposed to the guest, you still might have to buy a license for all 16 processors.
>
> **[1:47](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=107)** So before you go too far into a big virtualization campaign, you do want to look at the licensing of all of the software you're planning to run and see if any of it will become more expensive when it moves to a virtual environment.
>
> **[2:01](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=121)** A large virtualization rollout may also require upgrades to your network and storage.
>
> **[2:06](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=126)** Some hypervisors have specific storage requirements and a few hypervisors have specific network requirements.
>
> **[2:13](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=133)** But adding a hypervisor almost always means more servers.
>
> **[2:17](https://www.linkedin.com/learning/learning-virtualization-13945890/expense?u=76281980&t=137)** Each server's going to need some bandwidth and each server's going to need some storage, so more servers always equals more bandwidth and more storage, and that always means more money.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Virtual Machines]] (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Sprawl](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=0)** - In this section, I'd like to talk about a common problem associated with virtualization, and that is sprawl.
>
> **[0:06](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=6)** Sprawl is simply the situation of having too many [[Virtual Machines]].
>
> **[0:12](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=12)** And this comes about because in most hypervisors it is very easy to create a new virtual machine.
>
> **[0:19](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=19)** Now, for the most part, that's an advantage.
>
> **[0:21](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=21)** When we have a legitimate need for a new server, we can typically get it online very quickly by building a virtual machine.
>
> **[0:28](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=28)** We don't have to order new [[Hardware]], wait for it to come in and assemble it.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=33)** Just a few clicks of the mouse, and you've got a new virtual machine.
>
> **[0:37](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=37)** But because it's so easy, people tend to create more than they need.
>
> **[0:41](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=41)** Many organizations end up with dozens or hundreds of virtual machines, many of them that no longer serve a purpose.
>
> **[0:48](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=48)** Remember, every VM you create will require some storage.
>
> **[0:53](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=53)** And in some cases, a large amount of storage.
>
> **[0:56](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=56)** Almost every VM is going to need some bandwidth.
>
> **[0:59](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=59)** If it communicates with the network in any way, it requires some bandwidth.
>
> **[1:03](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=63)** Every VM requires some administration.
>
> **[1:06](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=66)** The software on every VM will require licenses.
>
> **[1:10](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=70)** And every VM, while it is turned on, requires some power.
>
> **[1:14](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=74)** So all of these resources are finite.
>
> **[1:17](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=77)** And every time we create a new VM, we're putting more demands on these resources.
>
> **[1:23](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=83)** Some tips on stopping sprawl or controlling sprawl.
>
> **[1:27](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=87)** This isn't something we're really going to look to a technology to solve for us.
>
> **[1:32](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=92)** Instead, we need to change human behavior and have some good best practices in place.
>
> **[1:38](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=98)** You're going to want to be aggressive about decommissioning unused VMs.
>
> **[1:43](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=103)** So once a virtual machine has served it's purpose, it needs to be decommissioned in some way.
>
> **[1:48](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=108)** That doesn't necessarily mean totally deleted.
>
> **[1:51](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=111)** More likely, it means turned off, and burned to a disc.
>
> **[1:55](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=115)** We can move these VMs to some sort of off-site storage, get them out of our primary storage, and free up that space.
>
> **[2:03](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=123)** Part of decommissioning the right VMs, involves identifying temporary VMs when they are created.
>
> **[2:10](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=130)** So we often have a need to create a new virtual server, just for a few months, maybe for testing a new product.
>
> **[2:17](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=137)** You want to make sure that after that test period is over, the virtual machine is decommissioned.
>
> **[2:23](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=143)** You can help yourself with this by having some standard of identifying a VM that is going to be temporary.
>
> **[2:30](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=150)** A lot of times it's just a naming convention.
>
> **[2:32](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=152)** So in the name of the VM, you use the [[Microsoft Word|word]] "temporary" and maybe put in a date in which you think it's going to be decommissioned.
>
> **[2:41](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=161)** We'll also need to periodically audit all of our production VMs.
>
> **[2:45](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=165)** Over time, the needs of an organization change.
>
> **[2:49](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=169)** Right now you might need four [[Web Servers]], but in the future, if the load goes down, maybe you could get away with only two web servers.
>
> **[2:57](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=177)** And therefore, you could decommission two of the web servers, gaining back all of the resources that were being utilized there.
>
> **[3:05](https://www.linkedin.com/learning/learning-virtualization-13945890/sprawl?u=76281980&t=185)** So again, stopping sprawl typically not solved by technology, the best solution is typically good policy and good behavior by your administrators.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (3), [[Virtual Machines]] (2), [[Hardware]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - in (1)


### 4. Common Uses of Virtualization

[↑ Back to Table of Contents](#table-of-contents)

#### [Virtualizing desktop computers](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about one of the common uses of virtualization and that is virtualization of the desktop.
>
> **[0:07](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=7)** Organizations have many challenges of maintaining desktop computers.
>
> **[0:11](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=11)** They have to troubleshoot unique setups.
>
> **[0:13](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=13)** If every user has a different desktop computer, different [[Hardware]], different operating system, different software, that can make troubleshooting scenarios much more difficult.
>
> **[0:22](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=22)** There's a constant race to upgrade applications and that can be very labor intensive.
>
> **[0:27](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=27)** If you have to manually walk to every single desktop, put in a disk and do an upgrade, that can be very time consuming and it seems like as soon as you finish one upgrade, now it's time to upgrade a different application.
>
> **[0:39](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=39)** And then there's the hardware of the desktop computer.
>
> **[0:42](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=42)** It will need to be refreshed periodically either upgraded or buy a whole new machine.
>
> **[0:47](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=47)** Some of these challenges can be overcome by using virtualization, particularly a technique called virtual desktop infrastructure or VDI.
>
> **[0:57](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=57)** In a VDI scenario, a central server pushes a VM to each user.
>
> **[1:02](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=62)** So when a user comes to their PC in the morning and they log in, the server will create a copy of the VM and it will be pushed to their local machine.
>
> **[1:11](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=71)** Most of the processing on that VM will typically occur remotely.
>
> **[1:14](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=74)** So even though the user sees the VM on their local PC the virtual processor's actually running, on the server from which it was pushed.
>
> **[1:22](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=82)** At this point the desktop is basically a dumb terminal.
>
> **[1:25](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=85)** It's a keyboard, mouse and monitor but all of the processing is going on remotely.
>
> **[1:31](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=91)** When a user leaves for the day and logs out, a copy of that VM is not saved.
>
> **[1:35](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=95)** Any documents saved to the desktop would be lost.
>
> **[1:39](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=99)** Therefore it's very important for users to save their documents to a network drive.
>
> **[1:43](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=103)** An example of VDI, I spoke to a colleague of mine recently who works at a call center, and they had the goal of reducing troubleshooting.
>
> **[1:52](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=112)** They went with a VDI solution.
>
> **[1:54](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=114)** They were able to use one virtual machine for every user.
>
> **[1:58](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=118)** So every single employee, when they sit down at their computer, they get a copy of this virtual machine.
>
> **[2:04](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=124)** That means the help desk only ever has to troubleshoot one situation.
>
> **[2:09](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=129)** Everyone's running the exact same operating system and the exact same software.
>
> **[2:13](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=133)** It also means that if there is a problem on one of these [[Virtual Machines]] that would be very difficult to fix, you have the option of just deleting that copy of the virtual machine and providing to the user a fresh copy from the original image.
>
> **[2:27](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=147)** So the call center was able to accomplish their goal of reducing troubleshooting.
>
> **[2:32](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=152)** They also found that they reduced the administrative effort of upgrading applications.
>
> **[2:36](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=156)** They no longer have to walk around to every single PC to upgrade an application.
>
> **[2:41](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=161)** They really just have to upgrade it once on the virtual machine and the next time a user logs in, they get a fresh copy of that virtual machine with the upgraded application.
>
> **[2:52](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=172)** They also found that it reduced their hardware costs.
>
> **[2:54](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=174)** Now all of the desktop machines are low cost dumb terminals.
>
> **[2:58](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=178)** They did have to make an investment in a pretty nice server to serve up these virtual machines but that cost was lower than the cost of all of the PCs.
>
> **[3:07](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=187)** And it's also allowed them to expand quickly.
>
> **[3:10](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=190)** If they want to hire a five or 10 or 15 new employees, all they have to do is go out and buy that number of dumb terminals, connect them to the network and as soon as someone logs in, they will get a copy of the virtual machine ready to go.
>
> **[3:24](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=204)** Many of these benefits were magnified because everyone was using the same VM and in some organizations that is certainly possible.
>
> **[3:31](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=211)** In other organizations, you might need to create two or three different versions of the VM because different users will have different needs.
>
> **[3:39](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=219)** That's okay.
>
> **[3:40](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=220)** If you get into a situation where every single user has really unique and different needs and therefore you're creating a new virtual machine for every single user then VDI may not be the best solution for you.
>
> **[3:53](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=233)** Some of the top vendors of VDI solutions, Citrix, has been focused on desktop virtualization for quite a long time with their product, XenServer.
>
> **[4:03](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=243)** VMware has a product focused on VDI called Horizon, and [[Microsoft]] now has gotten into this with what they call Microsoft VDI.
>
> **[4:11](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=251)** It's not really a product, it's a feature of [[Windows Server]] 2012.
>
> **[4:16](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=256)** It's built on top of the Hyper-V functionality.
>
> **[4:19](https://www.linkedin.com/learning/learning-virtualization-13945890/virtualizing-desktop-computers?u=76281980&t=259)** If you install Hyper-V you don't necessarily get VDI, it is a separate installation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Virtual Machines]] (2), [[Microsoft]] (2), [[Windows Server]] (1)
> **Env Vars:** vdi (9)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (2)
> **Warnings:** troubleshoot (2)
> **Tools:** terminal (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Running a specific program](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=0)** - In this section, I'd like to talk about a common use of virtualization and that is the need to run a specific program.
>
> **[0:07](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=7)** That for some reason won't run or won't run very well on the computer you're currently using.
>
> **[0:13](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=13)** In that case sometimes a nice solution is to install a hypervisor and build a virtual machine with a different operating system, an operating system more suited for the application you would like to run.
>
> **[0:26](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=26)** This situation certainly comes up with legacy applications.
>
> **[0:30](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=30)** An application that was written for an old version.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=33)** An application that is not being maintained but still has some good functionality.
>
> **[0:38](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=38)** I recently came across this situation in dealing with a 32 bit application that was ported to a 64 bit server.
>
> **[0:47](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=47)** And there was lots of problems with the porting.
>
> **[0:50](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=50)** We instead changed our approach.
>
> **[0:52](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=52)** And on the 64 bit server we installed a 32 bit guest operating system and we ran the legacy application in the 32 bit virtual machine and it worked much better.
>
> **[1:04](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=64)** It turned out to be a much better approach for us.
>
> **[1:06](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=66)** We also have this problem when running different operating systems.
>
> **[1:11](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=71)** So for example, if you're on a Macintosh and there is some [[Windows]] program you would really like to run sometimes one of the easiest solutions is to install a virtual Windows machine onto your Macintosh.
>
> **[1:24](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=84)** I was speaking to a colleague recently who talked about a design shop that had been entirely Windows.
>
> **[1:30](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=90)** They made the transition to go entirely to Mac, but in that they had a problem connecting to one printer and they didn't want to maintain a Windows infrastructure just to connect to that one printer.
>
> **[1:42](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=102)** So they went with the virtualization solution.
>
> **[1:46](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=106)** So on one Macintosh they now have a virtual Windows computer running and that allows them to print what they need to print.
>
> **[1:54](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=114)** There are dozens of programs that will allow you to run a Windows app on a Macintosh.
>
> **[1:59](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=119)** Some of the more common are Parallels Desktop, VMware Fusion and VirtualBox.
>
> **[2:06](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=126)** There are also some other [[Microsoft Products|products]] on the market designed to emulate a specific operating system.
>
> **[2:13](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=133)** One of them is called DOSBox which as the name implies gives you a virtual DOS machine.
>
> **[2:20](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=140)** Two things that come to mind here.
>
> **[2:21](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=141)** First of all I hear some authors prefer DOS-based [[Microsoft Word|word]] processors.
>
> **[2:26](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=146)** And also I remember a lot of great DOS games from my childhood.
>
> **[2:30](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=150)** I guess there's also maybe some business reasons.
>
> **[2:32](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=152)** Again, if you had an application written in DOS years ago and it hasn't been maintained but there is still some reason to run it.
>
> **[2:40](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=160)** Go ahead and look into DOSBox.
>
> **[2:43](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=163)** As far as a more general tool you might want to look into VMware Player.
>
> **[2:47](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=167)** It does a good job with lots of operating systems.
>
> **[2:51](https://www.linkedin.com/learning/learning-virtualization-13945890/running-a-specific-program?u=76281980&t=171)** I've had some colleagues have success with it with Windows 2000 and Windows XP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (8), [[Microsoft Products|Products]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** dos (4)
> **Prerequisites:** install (2)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### [Setting up test and development environments](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=0)** - In this section, I'd like to talk about one of the common uses of virtualization, and that is creating a virtualized test environment.
>
> **[0:08](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=8)** There are two types of test environments we'll talk about.
>
> **[0:11](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=11)** One is a permanent test environment, and the other is for some sort of temporary testing.
>
> **[0:17](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=17)** So first let's talk about the permanent test environment.
>
> **[0:20](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=20)** The example I'll use is an eCommerce website.
>
> **[0:23](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=23)** An organization that maintains an eCommerce website, would likely have a test infrastructure.
>
> **[0:30](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=30)** And before they roll changes to the production website, they would need to be rolled at the testing, and then have some sort of QA department come in and evaluate the changes.
>
> **[0:40](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=40)** There can be some advantages in having this test environment be virtualized.
>
> **[0:44](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=44)** One of those would be the use of snapshots and checkpoints.
>
> **[0:48](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=48)** So in a test environment, sooner or later something happens that doesn't go quite right and you need to back out of it.
>
> **[0:54](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=54)** You need to undo whatever happened.
>
> **[0:57](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=57)** on a physical server, undoing things can be very difficult on a virtual server, if you have a recently created snapshot or checkpoint, it's very easy to roll back to where you were before.
>
> **[1:10](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=70)** Another advantage could be the scaling of [[Hardware]].
>
> **[1:13](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=73)** When testing a website, we often want to know how many users can it handle, or how much hardware would we have to give it for it to handle a certain load.
>
> **[1:22](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=82)** With a virtual machine. it's very easy to change it from one processor to two processors, change from two processors to four, et cetera.
>
> **[1:31](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=91)** And you could do [[Load Testing]] on different situations, and start to get a good understanding of every additional processor, means we can handle this many additional users.
>
> **[1:43](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=103)** That's much easier to do in a virtual environment, rather than a physical environment.
>
> **[1:48](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=108)** A virtualized test environment makes all the sense in the world when production is a virtual environment.
>
> **[1:53](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=113)** In that case, we'll want to create test servers by cloning the production servers.
>
> **[1:59](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=119)** That'll give us an exact copy of the production servers.
>
> **[2:02](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=122)** And so we'll know our test servers are configured properly.
>
> **[2:05](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=125)** When doing this, be aware of any sensitive data.
>
> **[2:08](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=128)** You might have some data that's sensitive.
>
> **[2:10](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=130)** and shouldn't be used in a test scenario.
>
> **[2:13](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=133)** And remember that cloning will give you a copy of all of the data.
>
> **[2:17](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=137)** The other situation I'd like to talk about is temporary testing.
>
> **[2:21](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=141)** So let's say a company is evaluating a new accounting system.
>
> **[2:25](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=145)** They're thinking about buying this piece of accounting software, and they're going to evaluate it for 90 days, before they make the final decision to buy or not buy.
>
> **[2:34](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=154)** In that case, you really don't want to go out and buy a whole new piece of hardware, because after three months, if you decide you don't want the accounting software, then you have some hardware that doesn't have a purpose.
>
> **[2:45](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=165)** So virtualization is a good option here.
>
> **[2:48](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=168)** If this hypothetical organization currently has a virtualized environment, it would likely be straightforward to turn up one new virtual machine and install the accounting software there.
>
> **[2:58](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=178)** If this organization does not have a virtualized environment, then I would recommend going to the public cloud at this point, rather than buying new hardware or setting up virtualization from scratch for something we defined as only a three month project.
>
> **[3:14](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=194)** You could just go to the public cloud, and easily rent a server for three months.
>
> **[3:20](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=200)** Some of the different public cloud providers you might want to look at: Amazon AWS, which would have monthly rates.
>
> **[3:27](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=207)** [[Microsoft Azure]], which also has a monthly rates.
>
> **[3:31](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=211)** And Amazon recently rolled out a new product called spot instances.
>
> **[3:35](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=215)** Which actually are available for hourly rates.
>
> **[3:39](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-test-and-development-environments?u=76281980&t=219)** So if you needed very short testing, just a few days or so, you might want to look into something that charges by the hour, rather than charges by the month.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (5), [[Load Testing]] (1), [[Microsoft Azure]] (1)
> **Definitions:** is a  (3), is an  (1), defined as (1)
> **CLI Commands:** make (1), aws (1)
> **Code Identifiers:** ecommerce (2)
> **Env Vars:** aws (1)
> **UI Navigation:** go to (1)
> **Warnings:** be aware (1)
> **Prerequisites:** install (1)

#### [Designing a private cloud](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about designing a private cloud.
>
> **[0:04](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=4)** Some of the characteristics of a private cloud; it will have a large number of hosts and guests.
>
> **[0:10](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=10)** It will represent a large percentage of the infrastructure of an organization.
>
> **[0:15](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=15)** So typically in a private cloud, 90 to 100% of the servers in an organization will be virtualized.
>
> **[0:22](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=22)** And it means virtualizing the servers that run the main line of business applications.
>
> **[0:27](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=27)** So whatever applications are most important to a particular organization, those will be virtualized into a private cloud.
>
> **[0:35](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=35)** Some things to consider when designing and building a private cloud.
>
> **[0:39](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=39)** We'll need to think about storage, bandwidth, how much uptime we are shooting for, monitoring and [[Scalability]].
>
> **[0:49](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=49)** Let's take a look at each one of these one at a time.
>
> **[0:52](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=52)** First of all, storage.
>
> **[0:54](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=54)** Different hypervisors work on different file system types and different storage appliances support different file system types.
>
> **[1:02](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=62)** So before you finalize a decision on a hypervisor or before you finalize the decision on a storage utility, you'll want to make sure the two are compatible and will run some file system type that the hypervisor can read.
>
> **[1:17](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=77)** You'll need to think about the quantity of storage.
>
> **[1:20](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=80)** Every virtual machine takes up some space.
>
> **[1:23](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=83)** Different types of [[Virtual Machines]] take up a different amount of space.
>
> **[1:27](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=87)** But you'll need to come up with an estimate of how much space you'll need.
>
> **[1:31](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=91)** And we also need to worry about the quality of the storage, particularly the speed.
>
> **[1:36](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=96)** The storage subsystem is often a bottleneck in a private cloud, and therefore you'll probably want to buy the fastest storage you can afford.
>
> **[1:45](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=105)** Next, we'll talk about bandwidth.
>
> **[1:47](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=107)** First, the local bandwidth.
>
> **[1:48](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=108)** Every virtual machine will put some traffic on the network, and therefore this will be an increased load on our network infrastructure.
>
> **[1:56](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=116)** If we go with network attached storage, obviously that will also put significant traffic on the network.
>
> **[2:03](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=123)** We'll need to be aware of that and plan our network accordingly.
>
> **[2:06](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=126)** We'll need to see if the current network has sufficient bandwidth or if you'll need to upgrade.
>
> **[2:11](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=131)** You'll also need to think about remote bandwidth.
>
> **[2:14](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=134)** In particular, if you're going to have hosts running at two different sites, and you would like to do a live migration from a host at one site to a host at another site, that is going to put an awful lot of traffic on the network, and you'll need to come up with an estimate of how much time will it take me to do that live migration and see if that timeframe is adequate.
>
> **[2:39](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=159)** If you find the live migration is running too slow, you may need to upgrade the bandwidth between the two locations.
>
> **[2:45](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=165)** When designing any private cloud, you should come up with a clear uptime goal.
>
> **[2:51](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=171)** 100% uptime is not possible.
>
> **[2:53](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=173)** We can do 99, 99.9, 99.99999, those are possible, 100% is not possible.
>
> **[3:03](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=183)** Your uptime goal is going to affect a lot of other decisions.
>
> **[3:07](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=187)** For example, the number of hosts.
>
> **[3:09](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=189)** If all of your guests are on one host, sooner or later you're going to have to reboot that host or do some maintenance on that host, and that means all of your guests would be offline.
>
> **[3:19](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=199)** If you have two hosts and they have sufficient capacity, you could move all of the guests off of one host onto the second host whenever you have to do maintenance on one of the hosts.
>
> **[3:31](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=211)** You also need to consider the possibility of an entire location going offline, due to a power outage or internet problem.
>
> **[3:39](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=219)** To guard against that, you would need hosts at two different locations.
>
> **[3:43](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=223)** You would need sufficient host at two locations to host all of your virtual machines.
>
> **[3:49](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=229)** And you would need a way to live migrate them very quickly in the event of a disaster.
>
> **[3:55](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=235)** We'll also want to think about scalability.
>
> **[3:58](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=238)** This private cloud we're building is not just for today, it's going to hopefully last long into the future.
>
> **[4:03](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=243)** It's pretty easy to identify how many virtual machines we need today.
>
> **[4:07](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=247)** So much more difficult questions are, how many VMs will we need next year?
>
> **[4:12](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=252)** Or how many virtual machines will we need in five years?
>
> **[4:15](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=255)** Realistically, you're not going to be able to get an exact answer to how many VMs you'll need in five years.
>
> **[4:22](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=262)** But also realistically, the cloud is adaptable and can handle a different number of machines.
>
> **[4:29](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=269)** You'd like to have a ballpark of how many hosts you're going to need, a ballpark of how much storage you're going to need, and a ballpark of what'll be the network demands.
>
> **[4:40](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=280)** If you get those estimates pretty accurate, than the exact number of VMs is not super important.
>
> **[4:47](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=287)** Some of the vendors with private cloud offerings right now include [[Microsoft]].
>
> **[4:52](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=292)** Their product, Hyper-V is their hypervisor.
>
> **[4:55](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=295)** They also have a product called System Center Virtual Machine Manager, which is designed to help ease the administration of a large number of virtual machines, helps with some live migration stuff.
>
> **[5:07](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=307)** Lots of features you would need above and beyond a simple hypervisor.
>
> **[5:12](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=312)** So if you're going to go the Microsoft route, you definitely want to look into System Center Virtual Machine Manager.
>
> **[5:19](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=319)** VMware also offers some private cloud tools.
>
> **[5:22](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=322)** Their hypervisor is called vSphere ESXi.
>
> **[5:26](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=326)** It's a type one hypervisor.
>
> **[5:28](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=328)** They have a product called vMotion which handles live migrations.
>
> **[5:32](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=332)** They have DRS which automatically balances loads across hosts.
>
> **[5:38](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=338)** So if one host becomes overwhelmed while another host is not very heavily used, DRS will automatically move a virtual machine from one host to another.
>
> **[5:48](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=348)** VMware has a product called vCloud Director that helps you provision new guest servers more quickly.
>
> **[5:54](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=354)** And they have a handful of other tools for managing a private cloud.
>
> **[5:58](https://www.linkedin.com/learning/learning-virtualization-13945890/designing-a-private-cloud?u=76281980&t=358)** These [[Microsoft Products|products]] are sold in a bundle called the vCloud Suite, and includes all of the tools you would need to manage your own private cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (5), [[Scalability]] (2), [[Microsoft]] (2), [[Microsoft Products|Products]] (1)
> **Prerequisites:** you'll need (6)
> **Code Identifiers:** vcloud (2), vsphere (1), vmotion (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** drs (2)
> **Versions:** 99.9 (1), 99.99999 (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)

#### [Utilizing a public cloud](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=0)** - [Man] In this section I'd like to talk about utilizing a public cloud.
>
> **[0:05](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=5)** One of the main advantages to the public cloud is it is typically inexpensive to start.
>
> **[0:11](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=11)** So if you want to create just one or two [[Virtual Machines]] in a public cloud, it's fairly inexpensive to do that, and you only have to pay by the month.
>
> **[0:21](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=21)** Contrast that to purchasing [[Hardware]].
>
> **[0:24](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=24)** When we purchase hardware we have a large expense that's upfront.
>
> **[0:29](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=29)** Whereas with the public cloud, our expense is spread over time.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=33)** Now, that can also be a disadvantage, in that once we own hardware, we own it, and we don't have to pay for it again.
>
> **[0:41](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=41)** Whereas with the public cloud we'll have to keep paying every month.
>
> **[0:45](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=45)** And the bill tends to grow.
>
> **[0:47](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=47)** Most people that utilize the public cloud tend to like it and utilize more and more every month.
>
> **[0:54](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=54)** But that also means the bill grows every month.
>
> **[0:57](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=57)** Another advantage to the public cloud, it has practically infinite [[Scalability]].
>
> **[1:02](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=62)** So if you want 100 virtual servers, 1000 virtual servers, 10,000 virtual servers, there is a cloud out there that will sell it to you.
>
> **[1:12](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=72)** It's going to be very expensive, but if you have the money, you can get a tremendous amount of processing power and memory.
>
> **[1:20](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=80)** So the scalability is not a problem.
>
> **[1:24](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=84)** Another advantage of going with the public cloud is the high availability.
>
> **[1:28](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=88)** A small business is typically only going to have one internet connection, and it's probably relying on a municipal power supply.
>
> **[1:37](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=97)** Whereas a data center that's hosting a cloud would have multiple network providers, connected possibly to multiple municipal power supplies, and also have multiple methods of generating power, should the municipal power supply fail.
>
> **[1:56](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=116)** So public clouds can typically achieve a much higher availability than we could on our own, at our [[Microsoft Office|office]].
>
> **[2:03](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=123)** One big question about the public cloud is, is it secure?
>
> **[2:06](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=126)** And the short answer is, well, it's probably way more secure than just having a server in a closet at your office.
>
> **[2:13](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=133)** A public cloud data center is going to have 24/7 physical security.
>
> **[2:18](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=138)** It's going to have network experts and cyber security experts working to make things as secure as possible.
>
> **[2:25](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=145)** So it's never going to be 100% secure, but most likely it's more secure than having a physical server in your office.
>
> **[2:33](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=153)** With the public cloud, when you sign up for services, they are going to offer you an SLA, and part of the SLA should spell out what they do to secure your data, and will there be any compensation, should they have a security breach that causes your data to be leaked.
>
> **[2:51](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=171)** You're going to want to read the service level agreement.
>
> **[2:54](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=174)** You're going to want to understand the service level agreement.
>
> **[2:57](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=177)** And what not everyone realizes, is you can negotiate on the service level agreement.
>
> **[3:02](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=182)** So if you have the need for increased security, you can ask the cloud provider to provide a higher level of SLA, where they will either do more to secure your data, and or, they will provide more compensation, should a data breach actually occur.
>
> **[3:23](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=203)** Now, these negotiations are not free.
>
> **[3:25](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=205)** If you're going to get a more aggressive SLA, they're probably going to charge you for it.
>
> **[3:29](https://www.linkedin.com/learning/learning-virtualization-13945890/utilizing-a-public-cloud?u=76281980&t=209)** But, it doesn't hurt to ask and go ahead and have them quote you a price on what it would cost to be more secure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Microsoft Office|Office]] (3), [[Scalability]] (2), [[Virtual Machines]] (1)
> **Env Vars:** sla (4)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [man] (1)

#### [Choosing the best solution for you](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=0)** - [Illustrator] In this section, I'd like to talk about finding the right solution.
>
> **[0:04](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=4)** Unfortunately, there is no one product that is best for everyone.
>
> **[0:08](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=8)** Every situation is unique, but I'm going to talk about what factors you should consider when evaluating a hypervisor product.
>
> **[0:18](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=18)** And I've identified three main factors to consider when buying a hypervisor, first is the operating systems, both the host operating system and the guest operating systems you'd like to run.
>
> **[0:31](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=31)** We'll also need to think about storage, and the licensing.
>
> **[0:35](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=35)** So these are the three main things to consider.
>
> **[0:38](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=38)** We'll talk about each one individually.
>
> **[0:41](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=41)** So for the host OS and guest OS, remember there is no hypervisor that runs on every operating system, and there is no hypervisor that supports guests running any and every operating system.
>
> **[0:55](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=55)** However, the trend in the industry right now certainly is to be as broad as possible.
>
> **[1:01](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=61)** So most hypervisors will run on a wide variety of operating systems, and most hypervisors will support guest running a wide variety of operating systems.
>
> **[1:13](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=73)** However, if you really need to run one specific operating system, and it's not a mainstream operating system you certainly want to make sure that you check the documentation that the hypervisor you're considering will support that guest operating system.
>
> **[1:31](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=91)** With storage, no hypervisor runs on every file system and some hypervisors will run more efficiently on some file systems.
>
> **[1:40](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=100)** So you'll get better performance if you're using certain file systems with certain hypervisors.
>
> **[1:47](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=107)** If you're just running a small number of [[Virtual Machines]] you'll probably want to use your existing storage, and therefore you would need to find a hypervisor that's compatible with the existing storage you have.
>
> **[1:59](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=119)** However, if you're doing a big virtualization project where you're going to be turning up dozens or hundreds of virtual machines, you would probably be buying new storage anyway.
>
> **[2:13](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=133)** So you'll need to combine that decision with the hypervisor decision.
>
> **[2:18](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=138)** We'll need to think about what type of storage we're going to buy, at the same time we're thinking about what type of hypervisor we're going to run.
>
> **[2:27](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=147)** And the last factor to consider is licensing.
>
> **[2:30](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=150)** Some hypervisors are free, but remember free doesn't always mean a hundred percent free.
>
> **[2:35](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=155)** Often it means no additional cost if you own something else.
>
> **[2:41](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=161)** So for example, [[Microsoft]] Hyper-V is available on several [[Windows]] operating systems but you have to have a valid license for that windows operating system.
>
> **[2:52](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=172)** Hyper-V doesn't cost you anything extra but you will have paid for the operating system upfront.
>
> **[2:59](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=179)** Licensing of a host could be based on the number of hosts you have, the number of guests or the number of processors.
>
> **[3:07](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=187)** And this third bullet point, the number of processors or processor cores, seems to be where a lot of vendors are going for many hypervisor [[Microsoft Products|products]] they charge based on the number of processors in a machine.
>
> **[3:21](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=201)** So now when you think about what hypervisor you want to buy you also need to think about what [[Hardware]] it's going to run on, and how many processors are in that hardware.
>
> **[3:31](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=211)** Don't forget you also need to license your guest operating systems and the applications that run on those operating systems.
>
> **[3:39](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=219)** Most of the time licensing works the same, if an application is running on a virtual machine or on a physical machine, however a few vendors do have products where the licensing is slightly different when running on a virtual machine.
>
> **[3:55](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=235)** So you want to research that for whatever applications you're planning to run, see if there might be an additional cost or a lower cost.
>
> **[4:04](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-the-best-solution-for-you?u=76281980&t=244)** If you're running on a virtual machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (2), [[Windows]] (2), [[Microsoft Products|Products]] (2), [[Hardware]] (2), [[Microsoft]] (1)
> **CLI Commands:** make (1), find (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [illustrator] (1)


### 5. Hardware

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding virtual CPU](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=0)** - [Instructor] In this section I'd like to talk about virtual processors.
>
> **[0:04](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=4)** A virtual processor is sometimes called a vCPU.
>
> **[0:08](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=8)** We'll contrast that to a physical processor which would be a pCPU.
>
> **[0:13](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=13)** In older hypervisors, virtual processing occurred by having the hypervisor pass info between the physical CPU and the guest VM.
>
> **[0:24](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=24)** So basically the guest VM had complete access and complete control over one CPU.
>
> **[0:31](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=31)** This meant that the number of virtual processors we could possibly create was equal to the number of physical processors in the machine.
>
> **[0:40](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=40)** The newer technique that many modern hypervisors have employed is called time division.
>
> **[0:45](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=45)** In a time division scenario, each physical CPU give some cycles to a pool of virtual CPU.
>
> **[0:54](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=54)** So every physical processor we have is going to spend some of its time running the host machine but anytime that it's not running the host machine, that available processing power will be sent to a pool and all of the virtual processors across all of the guests will be given access to that pool of processing power.
>
> **[1:16](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=76)** This means we no longer have a 1:1 ratio of physical CPUs to virtual CPUs.
>
> **[1:23](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=83)** That allows oversubscription.
>
> **[1:26](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=86)** Oversubscription as the act of allocating more virtual CPU than the amount of physical CPU available.
>
> **[1:33](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=93)** So for example, if your machine had eight physical processors, you could divide that up amongst 10 virtual processors.
>
> **[1:43](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=103)** That would be an over subscription scenario.
>
> **[1:47](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=107)** That scenario could slow down every virtual CPU.
>
> **[1:51](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=111)** We could get into situations where the pool of available processing power isn't big enough.
>
> **[1:56](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=116)** Some vCPUs will have to skip a cycle, in other words, pause for just a millisecond or so.
>
> **[2:04](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=124)** Some of the more advanced hypervisors can allow us to set a priority on different virtual CPUs.
>
> **[2:11](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=131)** So if a skip a cycle situation is necessary, we can say which vCPU is our most important and they should always get the cycles and which vCPU are less important and we can skip cycles in those areas.
>
> **[2:28](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=148)** In general, you probably want to avoid oversubscription in the long run.
>
> **[2:32](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=152)** It can be a good short term solution if you're low on processors, but eventually you should upgrade your physical [[Hardware]] by additional processors and try and have a situation where your number of virtual processors and the number of physical processors is approximately the same.
>
> **[2:50](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-cpu?u=76281980&t=170)** That'll give you the best performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Env Vars:** cpu (7)
> **Code Identifiers:** vcpu (3), pcpu (1), vcpus (1)
> **Definitions:** is called (1), in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Understanding virtual memory](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about memory in [[Virtual Machines]].
>
> **[0:04](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=4)** Your hypervisor will provide access to memory to all of the guest machines.
>
> **[0:10](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=10)** For the most part, this is a fairly simple process.
>
> **[0:13](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=13)** However, there can be some difficult terminology.
>
> **[0:16](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=16)** It's not accurate to call this process virtual memory, virtual memory is something else.
>
> **[0:21](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=21)** Virtual memory is inside of a computer when something that's typically held in RAM is instead written to the hard drive.
>
> **[0:28](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=28)** And that happens in all computers whether they are virtualized or not.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=33)** It's also not correct to call it vRAM, vRAM is typically a term for video RAM and has nothing to do with virtualization.
>
> **[0:41](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=41)** So memory and virtual machines doesn't really have a shorthand when we speak about it.
>
> **[0:47](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=47)** It's just called memory and virtual machines.
>
> **[0:50](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=50)** Most of the implementation of this is fairly simple.
>
> **[0:53](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=53)** The hypervisor will provide access to physical memory.
>
> **[0:57](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=57)** So every guest machine gets its own section of the physical memory in the host machine and the guest machine can do with that memory as it pleases, it can read or write any information.
>
> **[1:10](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=70)** All hypervisors will allow us to set a fixed value of memory.
>
> **[1:15](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=75)** And many hypervisors will allow us to set a range of memory.
>
> **[1:19](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=79)** We can give a minimum and maximum value and the hypervisor will allocate or deallocate memory to that guest machine as necessary.
>
> **[1:29](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=89)** When a guest machine starts to run low on memory, the hypervisor will allocate more memory up to the maximum that we set.
>
> **[1:38](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=98)** The hypervisor will also reclaim memory when the host is short on memory.
>
> **[1:43](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=103)** So once the host becomes short on memory, it will attempt to reclaim as much memory as it can from all guest machines.
>
> **[1:51](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=111)** Reclaiming memory can present a problem.
>
> **[1:54](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=114)** What if the guest machine was writing some important information to a particular place in memory and then the hypervisor reclaimed that section of memory?
>
> **[2:05](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=125)** The end result of that would be that the guest machine would lose some of its memory, might lose some important data, and we want to avoid that.
>
> **[2:15](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=135)** Modern hypervisors have a process to avoid that and that is called ballooning.
>
> **[2:21](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=141)** The way ballooning works, a small program is inserted into the memory of the guest.
>
> **[2:27](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=147)** That program then grows in memory like inflating a balloon.
>
> **[2:32](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=152)** So it started off as a small program, will grow and grow and grow and take up more memory.
>
> **[2:39](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=159)** All of the memory used by the balloon can be reclaimed.
>
> **[2:42](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=162)** The hypervisor can be 100% sure that the memory being used by the balloon does not contain important data.
>
> **[2:50](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=170)** It does not contain data that it would be a problem to lose.
>
> **[2:55](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=175)** It just contains the blank data that the balloon created when it inflated.
>
> **[3:00](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=180)** In the long run, we want to reduce the amount of ballooning on a machine.
>
> **[3:04](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=184)** This process always takes some amount of overhead and can slow down our hypervisor.
>
> **[3:09](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-memory?u=76281980&t=189)** So it's best to add physical memory to a host to reduce the amount of ballooning necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (3)
> **Code Identifiers:** vram (2)
> **Env Vars:** ram (2)
> **Definitions:** is a  (1), is called (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Understanding virtual storage](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=0)** - In this section, I'd like to talk about virtual storage and by this, I mean, two different topics.
>
> **[0:06](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=6)** One is the file types.
>
> **[0:08](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=8)** The kinds of files used in virtualization.
>
> **[0:10](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=10)** and also the file systems, the underlying structure of the physical disc in our host machines.
>
> **[0:18](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=18)** First, let's talk about the file types.
>
> **[0:20](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=20)** These are the extensions you'll see, on the end of a file, of all the files used as part of a virtual machine, different hypervisors like to use different file types.
>
> **[0:30](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=30)** Some of the more common are V-D-I, V-H-D-X, V-M-D-K, and H-D-D.
>
> **[0:41](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=41)** If two hypervisors use the same file type that implies there's a high degree of compatibility between the two hypervisors.
>
> **[0:49](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=49)** And it would be fairly easy to share [[Virtual Machines]] between the two.
>
> **[0:54](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=54)** However, most hypervisors use a different file type than all of their competitors.
>
> **[1:00](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=60)** And therefore it can be somewhat challenging to share a virtual machine built on one hypervisor that you try and open on a different hypervisor.
>
> **[1:10](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=70)** There are some third-party tools that will convert one type of file into a different type of file but that's something we typically want to avoid doing in production. It can be very time consuming and there can be some data loss when that happens.
>
> **[1:24](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=84)** Some of the different file systems commonly used to hold the files of virtual machines include the Virtual Machine File System, Network File System New Technology File System and Raw Device Mapping.
>
> **[1:38](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=98)** Many hypervisors are compatible with more than one file system but many of them are also not compatible with all of these file systems.
>
> **[1:47](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=107)** So if your particular organization is really locked into one of these file systems, you definitely want to check and see which hypervisor supportS that file system. Should also be aware that although most hypervisors support access to local storage that's typically not appropriate when running two or more virtual machines.
>
> **[2:07](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=127)** So if you're only going to run one virtual machine go ahead and run it local, probably not a problem, but if you start to run two or three or four virtual machines and they're all trying to access the local storage of the host computer you're probably going to hit some performance problems.
>
> **[2:24](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=144)** You'll need to look into network storage either a San or a NAS.
>
> **[2:28](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-storage?u=76281980&t=148)** You can probably get much better performance on that and all in all the throughput of your disc and your storage subsystems is going to be one of the most important performance points of a virtualized system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (4)
> **Code Identifiers:** supports (1)
> **Env Vars:** nas (1)
> **Best Practices:** avoid doing (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - in (1)

#### [Understanding virtual networking](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about virtual networking, and in particular, we're going to talk about two scenarios.
>
> **[0:06](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=6)** The first one is two guests communicating on the same host.
>
> **[0:10](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=10)** So in this situation, we have virtual machine A and virtual machine B running on the same host and they would like to send network traffic back and forth.
>
> **[0:19](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=19)** The other situation is a guest communicating with the outside world, and I'll define the outside world as anything that's not running on the same host.
>
> **[0:28](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=28)** So this could be a guest trying to communicate with the internet, trying to communicate with a physical server or trying to communicate with a virtual server running on a different host.
>
> **[0:39](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=39)** First we'll look at two [[Virtual Machines]] running on the same host, trying to communicate with one another.
>
> **[0:45](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=45)** So virtual machine A would like to send some information to virtual machine B running on the same host.
>
> **[0:52](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=52)** What could happen is that virtual machine A would place network traffic on the physical network adapter of the host.
>
> **[0:59](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=59)** That network traffic would be delivered to a physical switch.
>
> **[1:03](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=63)** The physical switch would then need to determine how to get the information to virtual machine B.
>
> **[1:08](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=68)** And if the switch is properly configured, it would know to send it back to the host.
>
> **[1:13](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=73)** So traffic comes back to the host and then the host hands off that information to virtual machine B.
>
> **[1:19](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=79)** This is certainly a functional situation.
>
> **[1:21](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=81)** However, it is somewhat displeasing to me that the information had to leave the host.
>
> **[1:26](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=86)** Again, the problem I defined is one machine talking to another machine on the same host.
>
> **[1:32](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=92)** So the fact that traffic had to leave the host and come back seems like a waste to me.
>
> **[1:38](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=98)** Apparently some of the vendors of hypervisors have thought of the same issue and they've come up with a solution.
>
> **[1:44](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=104)** The solution is called a virtual switch.
>
> **[1:46](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=106)** A virtual switch has the same functionality as a physical switch, but it only exists in the memory of a computer.
>
> **[1:52](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=112)** It's most useful when it exists on the same computer that's running the guest in question.
>
> **[1:58](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=118)** So now when virtual machine A wants to talk to virtual machine B, if there is a virtual switch running on that same host, all virtual machine A has to do is send traffic to the virtual switch and the virtual switch will send the information to virtual machine B.
>
> **[2:14](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=134)** None of that information ever left the host.
>
> **[2:16](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=136)** None of that information actually went out onto our physical network.
>
> **[2:20](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=140)** So that is a much more pleasing scenario to me.
>
> **[2:23](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=143)** And again, most of the major vendors of hypervisors do provide some sort of virtual switch that you can administer.
>
> **[2:29](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=149)** The other situation I'd like to talk about is a virtual machine communicating with the outside world.
>
> **[2:35](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=155)** The best way to do this is to give each guest its own IP address and own MAC address.
>
> **[2:41](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=161)** If you're only running a small number of virtual machines, say one or two on each host, then it's possible those machines could share the host IP address.
>
> **[2:49](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=169)** If you're going to run a large number of guests, then I would recommend that each guest have its own IP address and own MAC address.
>
> **[2:56](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=176)** When these virtual machines need to communicate with the outside world, traffic will be sent out through the physical network adapter of the host machine and will go out onto the network, just like normal traffic.
>
> **[3:07](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=187)** At this point, the traffic on the network is no different from physical machines.
>
> **[3:12](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=192)** So a virtual machine can put packets on the network using its own IP address just like a physical machine can put packets on the network using its own IP address.
>
> **[3:22](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-networking?u=76281980&t=202)** The vast majority of your network will never be aware if the traffic came from a virtual machine or from a physical machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (3)
> **Definitions:** is a  (4), is called (1)
> **Env Vars:** mac (2)
> **Analogies:** just like (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Understanding virtual graphic processing](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about graphics processing on [[Virtual Machines]].
>
> **[0:05](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=5)** This is an area that may not be as mature as other aspects of virtualization.
>
> **[0:10](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=10)** This is because many guests don't need advanced graphics.
>
> **[0:14](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=14)** Most of the machines we virtualize tend to be servers.
>
> **[0:17](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=17)** Things like email servers, [[Web Servers]], file servers that just don't have need for advanced graphics capabilities.
>
> **[0:26](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=26)** Therefore, many vendors of Hypervisors don't provide any resources dedicated to processing graphics.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=33)** Some Hypervisors may provide direct access to a physical GPU.
>
> **[0:38](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=38)** Therefore, your guest machines could access the physical GPU in the host machine, but typically, a host machine would only have one GPU, and therefore, you could only have one guest machine accessing that GPU.
>
> **[0:53](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=53)** One of the emerging trends in virtualization is specialized [[Hardware]] giving shared virtual GPUs.
>
> **[1:01](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=61)** So a few vendors are developing some specialized chips that will give graphics processing shared amongst several virtual machines.
>
> **[1:10](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=70)** So we call that concept a vGPU.
>
> **[1:14](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=74)** In other words, a virtual GPU.
>
> **[1:17](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-virtual-graphic-processing?u=76281980&t=77)** The technology will be implemented similar to virtual CPUs in the sense that there will be a piece of hardware that generates graphic processing power and all of the virtual GPUs will be able to pull from that power as necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (2), [[Hardware]] (2), [[Web Servers]] (1)
> **Env Vars:** gpu (5)
> **Definitions:** is an  (1), in other words (1)
> **Code Identifiers:** vgpu (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 6. Microsoft Hyper-V

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing Hyper-V](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about installing [[Microsoft]] Hyper-V.
>
> **[0:05](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=5)** Hyper-V is Microsoft's enterprise tool for creating and managing [[Virtual Machines]].
>
> **[0:10](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=10)** It is available at no additional cost if you own a valid license of a Microsoft product, such as any of the Microsoft [[Windows Server]] [[Microsoft Products|products]] or most versions of [[Windows 10]] and [[Windows]] 8.
>
> **[0:24](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=24)** In order to install.
>
> **[0:25](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=25)** First, I'll go to the control panels, and the control panel I'm looking for is Programs and Features, and in there, to the left, we'll see an option to turn Windows features on or off.
>
> **[0:43](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=43)** If I click on that, we see a number of features, some of which I have installed, some of which I haven't installed.
>
> **[0:51](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=51)** The one we're interested in is Hyper-V, which has a plus sign to the left.
>
> **[0:56](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=56)** I'll open that up and we see we have two sub-options under that, the Hyper-V Platform, which I definitely want to install because that is the core software, and then also, the Hyper-V Management Tools.
>
> **[1:11](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=71)** I'm going to install both of those on my local computer so I can run Hyper-V and manage Hyper-V from the same machine.
>
> **[1:20](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=80)** It is possible to do remote administration.
>
> **[1:23](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=83)** So you could install the Hyper-V Platform on one machine while installing the management tools on a different machine and that would allow you to administer Hyper-V remotely.
>
> **[1:34](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=94)** So once I have both of these checked, I'll click OK.
>
> **[1:38](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=98)** It'll start the install, and be aware, this install will likely require a reboot.
>
> **[1:45](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=105)** So here, we see the install has finished.
>
> **[1:47](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=107)** It went pretty quickly.
>
> **[1:48](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=108)** It's now prompting me to reboot, so I'm going to click Restart Now.
>
> **[1:55](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=115)** Now that I've rebooted, I'd like to check and see if the Microsoft Hyper-V services are running.
>
> **[2:02](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=122)** So off the Start menu, I'll type in Services.
>
> **[2:08](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=128)** I'll open up that control panel, and these are typically listed in alphabetical order, so we'll need to scroll down to find Hyper-V and we see I now have a number of Hyper-V services.
>
> **[2:23](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=143)** Some of which are running.
>
> **[2:25](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=145)** The most important of which is this one.
>
> **[2:29](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=149)** Microsoft Hyper-V Virtual Machine Management.
>
> **[2:33](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=153)** That service is running.
>
> **[2:35](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-hyper-v?u=76281980&t=155)** So this implies that we have successfully installed Microsoft Hyper-V.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (7), [[Windows]] (2), [[Virtual Machines]] (1), [[Windows Server]] (1), [[Microsoft Products|Products]] (1)
> **Prerequisites:** install (7)
> **UI Navigation:** go to (1), click on (1), scroll down (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Creating a virtual machine with Hyper-V](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=0)** - Now it's time to create our first virtual machine.
>
> **[0:03](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=3)** So off the start menu I'll type in hyper, and select the hyper V manager.
>
> **[0:11](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=11)** In the hyper V manager to the right, we see the option for new, I'll click on that.
>
> **[0:16](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=16)** And it'll say virtual machine.
>
> **[0:19](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=19)** So this is going to take me through a multi-step wizard have created a new virtual machine.
>
> **[0:25](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=25)** The first page is just an intro, so I'll click next.
>
> **[0:28](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=28)** Next, It's giving me the option to name the virtual machine.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=33)** It came up with a default name of new virtual machine, which is not a very descriptive name.
>
> **[0:39](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=39)** So I'm going to try to provide a name that's more descriptive.
>
> **[0:43](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=43)** I'll be installing [[Windows 10]] in this virtual machine, so I'll call mine windows 10 demo.
>
> **[0:52](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=52)** By default it's going to store this virtual machine at C:\ProgramData\[[Microsoft]]\[[Windows]]\Hyper-V.
>
> **[0:59](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=59)** If you'd like to put it in a different location you can do so here.
>
> **[1:03](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=63)** I'll click next.
>
> **[1:05](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=65)** It's asking me what generation I would like to use.
>
> **[1:09](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=69)** Generation 1 or generation 2.
>
> **[1:11](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=71)** Generation 1 provides the basic functionality, and it's all I'll need for the demo.
>
> **[1:17](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=77)** Generation 2 provides everything that generation one does, and also a few newer features such as the UEFI booting, and a few networking features.
>
> **[1:31](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=91)** But for now, I'll stick with generation 1 and click next.
>
> **[1:35](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=95)** It's asking me to assign memory, it defaulted to 1024 megabytes, which is a bit low, but I'm going to go ahead and stick with it just for a demo.
>
> **[1:45](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=105)** And I'll click next.
>
> **[1:47](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=107)** Here, it's asking me to configure networking, it defaulted to not connecting to the network, and I'm going to stick with that default, although later I will come back and change some things on this virtual machine and enable networking, but for now we're going to do networking not connected.
>
> **[2:04](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=124)** Then it's asking me to either create a new hard drive or use an existing hard drive.
>
> **[2:09](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=129)** I don't have a virtual hard drive on this machine, So I'm going to create a new virtual hard drive.
>
> **[2:15](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=135)** I'll stick with the name that they suggested and the location they suggested.
>
> **[2:20](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=140)** I am going to change the size.
>
> **[2:22](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=142)** It defaulted to 127 gigabytes, which is significantly bigger than what I need.
>
> **[2:28](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=148)** So I'm going to shrink that down to 60 gigabytes and click next.
>
> **[2:34](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=154)** It's asking me what I'd like to do about an operating system.
>
> **[2:36](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=156)** I have the option to install an operating system later or install one now.
>
> **[2:42](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=162)** A virtual machine without an operating system isn't real useful, so I would like to install the operating system now.
>
> **[2:50](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=170)** I'll click on install from bootable media, and that bootable media is an image file.
>
> **[2:57](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=177)** So I'll browse to the location of my ISO.
>
> **[3:06](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=186)** Select the appropriate ISO, hit next and hit finish.
>
> **[3:12](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=192)** And fairly quickly, everything should be configured, And we now see the windows 10 demo as a virtual machine in the off state.
>
> **[3:23](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=203)** If I go out to the right, I have the option to start it.
>
> **[3:27](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=207)** So I'll click on start.
>
> **[3:29](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=209)** And once I've done that, I have the option to connect to it, so I'll go ahead and hit connect.
>
> **[3:35](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=215)** This will bring up a new window where it has connected to my virtual machine and should show it booting up.
>
> **[3:44](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=224)** This is going to take me through the initial setup of a new windows 10 machine, just like it would if it was a physical PC, just this is a virtual PC but we still go through the same installation wizard.
>
> **[3:57](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=237)** So in the first screen, I'll click next.
>
> **[4:00](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=240)** I'll click install now.
>
> **[4:03](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=243)** It's asking me to accept the terms of the license.
>
> **[4:06](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=246)** So go ahead and do that and click next.
>
> **[4:10](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=250)** It's asking me if I'd like to upgrade or do a custom install and being, this is a new, fresh virtual machine.
>
> **[4:17](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=257)** I'll need to do custom, it's not an upgrade.
>
> **[4:21](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=261)** It's asking what drive I would like to install onto, and I had created a 60 gigabyte virtual hard drive and that is my only option.
>
> **[4:29](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=269)** So click next.
>
> **[4:38](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=278)** Okay, now I've gotten to the point in the install where it needs to reboot, So I'm going to go ahead and let that happen.
>
> **[4:47](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=287)** Okay, now windows is prompting me for a few last items in the setup.
>
> **[4:52](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=292)** I'm going to choose my region, choose my keyboard layout.
>
> **[5:00](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=300)** Skip adding a second keyboard.
>
> **[5:03](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=303)** Then it would like me to connect to a network.
>
> **[5:07](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=307)** Remember I did not configure networking in this virtual machine, So we're going to skip this for now.
>
> **[5:14](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=314)** I'll click on, I don't have internet.
>
> **[5:18](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=318)** And Microsoft is going to encourage me to connect to the internet which I will do in the future, just not for now.
>
> **[5:24](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=324)** So on the lower left I'll click with continue with limited setup.
>
> **[5:32](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=332)** Then it's asking me for my name.
>
> **[5:34](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=334)** This will be the username used to login to the computer and it's asking me to create a password.
>
> **[5:42](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=342)** And confirm that password.
>
> **[5:47](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=347)** Then it's asking me for security questions.
>
> **[5:55](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=355)** For [[Privacy]] settings, I'll accept the defaults.
>
> **[6:00](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=360)** I am going to skip active history by clicking no.
>
> **[6:05](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=365)** I'm going to skip Cortana by clicking not now.
>
> **[6:10](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=370)** And now windows has started.
>
> **[6:13](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=373)** It's asking me the size of the window I would like to connect to.
>
> **[6:26](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=386)** And I'll use the username and password I created during the installation to log in.
>
> **[6:34](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=394)** And there we go! Now I have a fully functional Windows 10 machine, took a little time to get here, and actually creating the virtual machine wasn't the most difficult part, it was installing windows is what took most of the time.
>
> **[6:48](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=408)** But now we have a virtual PC.
>
> **[6:51](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=411)** It looks like a regular PC.
>
> **[6:54](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=414)** It runs like a regular PC.
>
> **[6:56](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=416)** It'll do all the things that windows 10 normally does, but there is no physical computer here.
>
> **[7:03](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-hyper-v?u=76281980&t=423)** It is instead a virtual machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (6), [[Windows]] (4), [[Microsoft]] (2), [[Privacy]] (1)
> **Prerequisites:** install (8), setup (3), configure (2)
> **UI Navigation:** click on (4), select the (2)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** iso (2), uefi (1)
> **Analogies:** such as (1), just like (1)
> **Speakers:** - now (1)

#### [Setting up networking with Hyper-V](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=0)** - Now it's time to connect our new virtual machine to a network.
>
> **[0:04](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=4)** In order to do that we'll first need to create a virtual switch.
>
> **[0:08](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=8)** So here inside of Hyper V Manager, all the way to the right, I'll go to Virtual Switch Manager and we have the option to create a virtual switch.
>
> **[0:18](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=18)** Either external, internal, or private.
>
> **[0:22](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=22)** An external one would allow us to connect to the outside network and the internet.
>
> **[0:28](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=28)** An internal one is used to connect between the [[Virtual Machines]] and the host computer.
>
> **[0:36](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=36)** A private virtual switch just allows virtual machines to talk to other virtual machines.
>
> **[0:43](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=43)** For this one I would like internet access, so I'm going to have to go, external.
>
> **[0:49](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=49)** I'll click on Create Virtual Switch.
>
> **[0:52](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=52)** It came up with the default name of New Virtual Switch.
>
> **[0:56](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=56)** That's not very descriptive so I'm going to change the name to External One.
>
> **[1:02](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=62)** And it's asking which of the physical network adapters in the host machine I would like to connect to.
>
> **[1:09](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=69)** And I'm going to go with the default of the Hyper V Network Adapter.
>
> **[1:14](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=74)** I'll click okay.
>
> **[1:16](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=76)** It'll give a warning saying that network operations might be disrupted for just a few seconds and that's okay.
>
> **[1:23](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=83)** So I'll click yes.
>
> **[1:25](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=85)** And it should create my new virtual switch for me.
>
> **[1:30](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=90)** Now I'll need to connect that virtual switch to our virtual machine.
>
> **[1:34](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=94)** So the virtual machine that is currently running, I'll right click on it and I'll go to settings and it doesn't have to be running.
>
> **[1:42](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=102)** If yours isn't running, that's fine, but we are allowed to change network configuration while the machine is running.
>
> **[1:49](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=109)** Some other things we can't change while it's running, but networking we can change.
>
> **[1:54](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=114)** So in the settings area I'll go down to Network Adapter.
>
> **[1:58](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=118)** We see we have one network adapter that is not connected to any virtual switch.
>
> **[2:04](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=124)** I'll change that to connect to External One.
>
> **[2:08](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=128)** Hit apply.
>
> **[2:10](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=130)** Hit okay.
>
> **[2:12](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=132)** And I'll go back and open up the virtual machine and let me make this full screen.
>
> **[2:18](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=138)** There we go.
>
> **[2:19](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=139)** We see that it's already come up with a pop-up saying, we've found a new network, and would you like to allow PC's to be discoverable on this network?
>
> **[2:28](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=148)** So I'll click yes.
>
> **[2:31](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=151)** Then we'll need to test to see if we actually are connected to a network.
>
> **[2:34](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=154)** I'm going to open up Internet Explorer and it's prompting me to open [[Microsoft]] Edge.
>
> **[2:41](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=161)** I'll do that later.
>
> **[2:42](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=162)** So for now I'll just close this window, and I would like to just go to the basic Microsoft Homepage.
>
> **[2:52](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=172)** And there we go!
>
> **[2:53](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=173)** I've connected to the Microsoft Homepage.
>
> **[2:55](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=175)** So that shows I am connected to the internet which means my networking adventure here was successful.
>
> **[3:02](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=182)** So the flow of information here, the virtual machine is sending network traffic to the virtual switch.
>
> **[3:10](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=190)** The virtual switch then sends that network traffic to my physical network cord and the host machine.
>
> **[3:17](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=197)** And then from there, networking happens as it normally does.
>
> **[3:22](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=202)** It can go through my home router whether that traffic is coming from a virtual machine or a physical machine.
>
> **[3:29](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-hyper-v?u=76281980&t=209)** My home router doesn't care, it just sees that network traffic that was handed off from that virtual switch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (3), [[Microsoft]] (3)
> **UI Navigation:** go to (3), click on (2)
> **CLI Commands:** make (1)
> **Warnings:** warning (1)
> **Speakers:** - now (1)

#### [Allocating processors and memory to a virtual machine using Hyper-V](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about allocating processor and memory to a virtual machine.
>
> **[0:06](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=6)** So here in the Hyper-V manager, I'm going to right click on the name of my virtual machine, go to settings, and we see have options for memory and processor.
>
> **[0:19](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=19)** But some of this is grayed out.
>
> **[0:21](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=21)** And that is because my virtual machine is currently running.
>
> **[0:25](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=25)** We will have to shut down the virtual machine in order to configure most of the settings about memory and processor.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=33)** So I'll hit cancel to close this.
>
> **[0:35](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=35)** I'll switch over to the virtual machine, and I will shut it down just like you would shut down a physical machine off the start menu.
>
> **[0:43](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=43)** I'll go to power and I'll select to shut down.
>
> **[0:49](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=49)** And then I'll close this connection window to it.
>
> **[0:53](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=53)** In the Hyper-V manager, we should soon see a status of off.
>
> **[0:59](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=59)** Okay.
>
> **[1:00](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=60)** And here we go.
>
> **[1:01](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=61)** Now it is in an off state.
>
> **[1:04](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=64)** So if I right click again and go to settings, I should be able to change all of the settings.
>
> **[1:11](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=71)** First, we'll look at processor and our choices are fairly straightforward.
>
> **[1:16](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=76)** We have a number of virtual processors.
>
> **[1:19](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=79)** Right now, mine is set to one.
>
> **[1:21](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=81)** You can increase that up to the number of physical processors you have in your physical machine.
>
> **[1:28](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=88)** So my host machine has four processors.
>
> **[1:32](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=92)** So the highest I could go here is four.
>
> **[1:35](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=95)** Three would be very unusual.
>
> **[1:37](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=97)** So I'm going to go with two.
>
> **[1:39](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=99)** Usually it's an even number.
>
> **[1:42](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=102)** So I'm going to go with two.
>
> **[1:43](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=103)** In memory, at the top we see this is set to by default use 1024 megabytes of RAM.
>
> **[1:52](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=112)** But I also have enabled Dynamic RAM, which means the amount of RAM can change while the virtual machine is running.
>
> **[2:01](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=121)** Anywhere from 512 megabytes to over a million megabytes, which obviously my physical machine doesn't have that much RAM.
>
> **[2:12](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=132)** So let's give it some more realistic values.
>
> **[2:15](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=135)** The minimum RAM I would ever want to see here is about one gigabyte.
>
> **[2:19](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=139)** So do 1024 MBs, and let's say it can increase all the way up to four gigabytes, which would be 4,096 megabytes.
>
> **[2:32](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=152)** With Dynamic Memory enabled, the host operating system will monitor how much memory is being used by the virtual machine, and will provide additional memory to the virtual machine if necessary, or it will take back some of the memory if the virtual machine has extra.
>
> **[2:56](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=176)** I'll hit apply and okay, and then we can start the virtual machine.
>
> **[3:03](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=183)** It's asking me if I want to revert to a checkpoint and I do not want to revert.
>
> **[3:07](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=187)** So, I will hit continue.
>
> **[3:10](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=190)** In here we see how much memory is currently assigned.
>
> **[3:14](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=194)** So it's going to start off with 1024 megabytes.
>
> **[3:18](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-hyper-v?u=76281980&t=198)** And if the virtual machine needs additional memory, you might see this number go up all the way as high as whatever you set the upper limit to, which I set mine as 4,096.

> [!info]- Semantic Content
>
> **Env Vars:** ram (5)
> **UI Navigation:** go to (3), click on (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Using checkpoints in Hyper-V](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=0)** - [Instructor] Now let's talk about checkpoints in [[Microsoft]] Hyper-V.
>
> **[0:05](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=5)** Here in Hyper-V manager, I've selected my virtual machine which is currently turned off.
>
> **[0:11](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=11)** I'm going to right click on it and go to checkpoint.
>
> **[0:15](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=15)** And then you'll notice in the middle panel here, it created a checkpoint called [[Windows 10]] Demo and the date and time.
>
> **[0:24](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=24)** I'm going to right click and rename this because I like my checkpoints to have a more descriptive name.
>
> **[0:32](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=32)** And I'm going to call this one, going to roll back because what I intend to do in this demo now that I've created the checkpoint is also to demonstrate how to roll back from a checkpoint.
>
> **[0:44](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=44)** So I'm going to go ahead and start the Windows 10 virtual machine and connect to it.
>
> **[0:56](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=56)** And you'll notice right now my Windows 10 guest machine has a blue background and has two icons on the screen.
>
> **[1:06](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=66)** I'm going to change that so we can demonstrate the rolling back feature.
>
> **[1:11](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=71)** So I will right click and go to personalize.
>
> **[1:19](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=79)** So instead of the solid blue background, I'll go with a nice photo.
>
> **[1:26](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=86)** And I also want to go to themes, desktop icon settings and I'll just turn all of them on, hit apply, hit okay.
>
> **[1:41](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=101)** I'll close this.
>
> **[1:42](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=102)** and we see new background and six desktop icons.
>
> **[1:49](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=109)** Okay.
>
> **[1:50](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=110)** Now I'm going to shut down the virtual machine.
>
> **[1:57](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=117)** And now that the virtual machine has stopped, I'll go to the checkpoint that I created at the beginning of this demo.
>
> **[2:03](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=123)** I'll right click on it and I'll select apply, which should take me back to a point where the virtual machine is configured exactly like it was when I created that checkpoint, which is before I changed the desktop background and the icons.
>
> **[2:22](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=142)** So hit apply.
>
> **[2:25](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=145)** And now that that is done, I should be able to right click and start and right click and connect.
>
> **[2:38](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=158)** And now we see I'm back to just two icons on the desktop and the original blue background.
>
> **[2:44](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=164)** So the demonstration was a success.
>
> **[2:47](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=167)** We did successfully roll back this virtual machine to exactly the state it was in when I created the checkpoint.
>
> **[2:55](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=175)** I could roll back to it again in the future.
>
> **[2:57](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=177)** So let's say maybe I install some updates on this machine and something goes wrong with those updates, well, I could just revert back to the checkpoint and it would be like it never happened.
>
> **[3:08](https://www.linkedin.com/learning/learning-virtualization-13945890/using-checkpoints-in-hyper-v-13948437?u=76281980&t=188)** So checkpoints can be very useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (3), [[Microsoft]] (1)
> **UI Navigation:** go to (4), click on (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Uninstalling Hyper-V](https://www.linkedin.com/learning/learning-virtualization-13945890/uninstalling-hyper-v-13947586?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/uninstalling-hyper-v-13947586?u=76281980&t=0)** - [Instructor] So now we've had some fun with Hyper-V, but now I'm going to demonstrate how to uninstall it.
>
> **[0:07](https://www.linkedin.com/learning/learning-virtualization-13945890/uninstalling-hyper-v-13947586?u=76281980&t=7)** This is because I would like to install a different Hypervisor.
>
> **[0:11](https://www.linkedin.com/learning/learning-virtualization-13945890/uninstalling-hyper-v-13947586?u=76281980&t=11)** Most of the time, we cannot run two Hypervisors on the same host and machine.
>
> **[0:17](https://www.linkedin.com/learning/learning-virtualization-13945890/uninstalling-hyper-v-13947586?u=76281980&t=17)** There are some exceptions, some situations where you could run two Hypervisors, but you would typically get very poor performance.
>
> **[0:25](https://www.linkedin.com/learning/learning-virtualization-13945890/uninstalling-hyper-v-13947586?u=76281980&t=25)** So it's always a best practice to uninstall one Hypervisor before you install a different one.
>
> **[0:32](https://www.linkedin.com/learning/learning-virtualization-13945890/uninstalling-hyper-v-13947586?u=76281980&t=32)** If you've created some [[Virtual Machines]], you'll want to back those up or get the data off of them somehow because uninstalling Hyper-V will delete your virtual machines.
>
> **[0:43](https://www.linkedin.com/learning/learning-virtualization-13945890/uninstalling-hyper-v-13947586?u=76281980&t=43)** So once you've made whatever backups you would like, we can go to the [[Windows]] features, and I'll see the option to turn Windows features on or off, and there, I'll just simply clear the checkbox next to Hyper-V.
>
> **[1:05](https://www.linkedin.com/learning/learning-virtualization-13945890/uninstalling-hyper-v-13947586?u=76281980&t=65)** Hit OK.
>
> **[1:06](https://www.linkedin.com/learning/learning-virtualization-13945890/uninstalling-hyper-v-13947586?u=76281980&t=66)** It'll think about it for a few minutes and then it'll tell me that I need to reboot, and when you get the message saying, you need to restart, go ahead and restart now and that will complete the uninstall.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (2), [[Windows]] (2)
> **UI Navigation:** go to (1), checkbox (1)
> **Prerequisites:** install (2)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 7. VMware Workstation

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing VMware Workstation](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=0)** - [Instructor] Now we're going to look at one of the [[Microsoft Products|products]] from VMware.
>
> **[0:03](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=3)** VMware makes a number of hypervisor products.
>
> **[0:07](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=7)** One of the more popular ones is called Workstation, and there is a 30 day free trial of Workstation.
>
> **[0:15](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=15)** So I'm going to go to a search engine and just type in VMware Workstation.
>
> **[0:23](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=23)** And for me, it came up as the second link, [[Windows]] VM Workstation Pro, I'll click on that.
>
> **[0:31](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=31)** That'll take me to the VMware site.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=33)** Over to the right, I have the option to download now.
>
> **[0:38](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=38)** I'll click on that.
>
> **[0:40](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=40)** I'll scroll down a little and I see it as a Workstation Pro for Windows and Workstation Pro for [[Linux]].
>
> **[0:47](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=47)** I am interested in the Windows version, so I'll click download now and we'll see that download has started.
>
> **[0:58](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=58)** Once your download is complete, you'll just kick off the installation by double clicking on the file.
>
> **[1:04](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=64)** And if you get the user account control, go ahead and click "Yes."
>
> **[1:10](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=70)** The first screen of the wizard just gives me some basic information about the product so I'll click "Next."
>
> **[1:16](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=76)** Then I'm asked to accept the end user license agreement, go ahead and read every [[Microsoft Word|word]] of that and then click "Next."
>
> **[1:25](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=85)** On the custom setup, I'm going to go with the defaults, I do not need to change the keyboard drivers so I'll leave that check box clear and I will leave it checked for add the Workstation console tools into the system path, and click "Next."
>
> **[1:41](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=101)** The next page, I have two options, one for whether or not I check, like to check for product updates on start-up and yes, I would do that, and the other option, whether or not you'd like to join the VMware Customer Experience Improvement Program, keep the defaults and just click "Next."
>
> **[1:59](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=119)** Then it's asking me whether or not I'd like to install a desktop shortcut and whether or not I'd like to put it on the start menu program folder, I like to keep my desktop pretty clean so I'll clear that checkbox, but I'll leave it checked for start menu programs and hit "Next."
>
> **[2:16](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=136)** And then I'm ready to install, so I'll just click and start.
>
> **[2:23](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=143)** And at the end, I just get something confirming the installation was complete.
>
> **[2:28](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=148)** I'll click "Finish."
>
> **[2:30](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=150)** And off the start menu, I now have the option for VMware Workstation Pro, I'll click on that.
>
> **[2:38](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=158)** I'm being prompted to enter a license key, but like I said, there is a 30 day free trial, so I'll just click on, "I want to try VMware Workstation for 30 days," and hit "Continue."
>
> **[2:50](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=170)** User account control comes up again, I'll hit, "Yes."
>
> **[2:55](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=175)** And it gives me a friendly message about thank you for evaluating, I'll hit "Finish."
>
> **[3:01](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=181)** And here I have the VMware Workstation console open, where I could create a new virtual machine, open a virtual machine, connect to a remote server, and we'll do some of that coming up later in this course but for now, I just want to confirm I have successfully installed VMware and all this looks good.
>
> **[3:20](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=200)** I did want to talk about a group of problems that sometimes come up when you install VMware.
>
> **[3:27](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=207)** Sometimes we'll install in VMware you might get an error message that looks something like this, saying that there is a conflict with Hyper-V.
>
> **[3:35](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=215)** If you get that, first make sure you have uninstalled Hyper-V, but you still may get this error even if you have completely uninstalled Hyper-V.
>
> **[3:44](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=224)** And that is because in some versions of [[Windows 10]], [[Microsoft]] chooses to virtualize part of the operating system.
>
> **[3:52](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=232)** And therefore VMware when it's doing its install it thinks Hyper-V is installed even though Hyper-V really isn't installed it's because part of the Windows 10 operating system is virtualized by default.
>
> **[4:07](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=247)** If you get an error that looks like what I have on the screen or something similar, VMware does have some documentation on how to get around that, possibly by turning off certain features in Windows 10.
>
> **[4:21](https://www.linkedin.com/learning/learning-virtualization-13945890/installing-vmware-workstation?u=76281980&t=261)** And we'll put a link for you on the screen now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Windows 10]] (3), [[Microsoft Products|Products]] (2), [[Linux]] (1), [[Microsoft Word|Word]] (1)
> **UI Navigation:** click on (4), go to (1), scroll down (1), checkbox (1)
> **Prerequisites:** install (5), setup (1), make sure you have (1)
> **Definitions:** is a  (3), is called (1)
> **Cross-References:** coming up (1), later in (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Creating a virtual machine with VMware Workstation](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=0)** - In this section, I'm going to demonstrate how to create a new virtual machine in VMware Workstation Pro.
>
> **[0:08](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=8)** So off the start menu, I'll go to VMware Workstation Pro.
>
> **[0:14](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=14)** And one of the options on the opening screen is create a new virtual machine.
>
> **[0:18](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=18)** So I'll click on that.
>
> **[0:19](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=19)** And in the Wizard, I'm given options for either typical or custom.
>
> **[0:23](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=23)** I found that everything I want to configure is handled in the typical installation.
>
> **[0:29](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=29)** So I'll go with that option, and click next.
>
> **[0:32](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=32)** It's asking me where I would like to install from.
>
> **[0:35](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=35)** Most commonly, you're going to use an ISO file.
>
> **[0:38](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=38)** So I'll browse to where my ISO file is located,
>
> **[0:47](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=47)** and hit next.
>
> **[0:49](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=49)** At this point, I'm given the option to enter a product key.
>
> **[0:54](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=54)** You can either enter the product key now, or enter it later.
>
> **[0:58](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=58)** This is not really much of an advantage or disadvantage either way.
>
> **[1:02](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=62)** I am, however, using an evaluation copy of an operating system, so I won't be using a product key.
>
> **[1:11](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=71)** In the section for personalized [[Windows]], it's asking for the name of the primary user and also giving them a password.
>
> **[1:19](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=79)** So I'll enter that now.
>
> **[1:23](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=83)** And then it's asking me if I'd like to log in automatically, that does make the installation process a little easier.
>
> **[1:29](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=89)** So I will click on that and hit next.
>
> **[1:32](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=92)** I get a little warning saying you did not enter a product key, and you will have to enter one later.
>
> **[1:38](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=98)** That's fine.
>
> **[1:39](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=99)** I'll hit yes.
>
> **[1:41](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=101)** It's asking me for a virtual machine name, and you can name this whatever you like.
>
> **[1:46](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=106)** It's not going to affect the functionality.
>
> **[1:48](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=108)** I like to usually name a machine something that tells me the operating system and the purpose of the virtual machine.
>
> **[1:58](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=118)** It's also asking me for a location.
>
> **[2:00](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=120)** I'm going to accept the default location, and click next.
>
> **[2:05](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=125)** Then it's asking me how big I would like the hard drive to be.
>
> **[2:08](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=128)** It recommended 60 gigabytes, and I will stick with that recommendation.
>
> **[2:12](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=132)** 60 gigabytes is a good size for [[Windows 10]].
>
> **[2:15](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=135)** Then it gives me a summary.
>
> **[2:18](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=138)** And on that summary page, I'll just click finish.
>
> **[2:24](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=144)** So it has automatically started this new virtual machine.
>
> **[2:28](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=148)** It gives me a little pop up, talking about some different USB devices I have connected, and that's fine.
>
> **[2:35](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=155)** So I'll click okay.
>
> **[2:36](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=156)** Now windows is asking me what I would like to install.
>
> **[2:40](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=160)** I'll click next.
>
> **[2:51](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=171)** And here we go.
>
> **[2:51](https://www.linkedin.com/learning/learning-virtualization-13945890/creating-a-virtual-machine-with-vmware-workstation?u=76281980&t=171)** We have successfully installed Windows 10 on a virtual machine in VMware Workstation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Windows 10]] (2)
> **Env Vars:** iso (2), usb (1)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** install (2), configure (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Warnings:** warning (1)

#### [Setting up networking with VMware Workstation](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=0)** - In this section, we're going to talk about working with networking in VM-ware workstation.
>
> **[0:06](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=6)** Typically when you create a new virtual machine if you use most of the defaults you will get internet access.
>
> **[0:15](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=15)** So this virtual machine, I haven't edited anything about the networking yet and I can in fact connect to the internet.
>
> **[0:23](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=23)** So that's all you want, you don't necessarily need to edit any of the network settings.
>
> **[0:29](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=29)** But I did want to demonstrate some of that.
>
> **[0:32](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=32)** You could first select the virtual machine in the left-hand tree view, then right click on it and go to settings.
>
> **[0:42](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=42)** And most of this stuff you can work with while the [[Virtual Machines]] running.
>
> **[0:46](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=46)** So I can go to the network adapter and even while the virtual machine is running I can change these things.
>
> **[0:53](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=53)** At the top we have two check boxes, one for connected and one for connected power ON.
>
> **[0:58](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=58)** So the connected one is just literally whether or not this network, adapter is part of the virtual machine right now, and then connected power on if this virtual machine were to be turned off and then powered back on should this network adapter be connected?
>
> **[1:15](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=75)** So most of the time, both of these are going to be chipped.
>
> **[1:18](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=78)** Underneath we have several different options for network connection.
>
> **[1:22](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=82)** It defaulted to Nat which is used to share the host's IP address which did give me internet access, as long as your host has internet access that your virtual machines will have internet access.
>
> **[1:34](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=94)** And this works fine for a small number of virtual machines.
>
> **[1:38](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=98)** Nat can get overloaded if you have a large number of virtual machines.
>
> **[1:43](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=103)** In that case, it might be better to do a bridge network.
>
> **[1:46](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=106)** And on a bridge network the virtual machine will put packets directly into the physical network card without going through the operating system.
>
> **[1:56](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=116)** And again, that is a better option.
>
> **[1:58](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=118)** A lot of times with a large number of virtual machines we also have the option for a host only which would be a private network shared between only this virtual machine and the host.
>
> **[2:10](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=130)** We can do a custom, and that is a specific virtual network.
>
> **[2:15](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=135)** If we click the drop down, we'll see VM-ware has already created a few virtual networks for us.
>
> **[2:21](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=141)** We could create additional ones, so let's say you had five or 10 virtual machines and you want them to be able to communicate only with each other.
>
> **[2:30](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=150)** You could connect all of them to the same virtual network.
>
> **[2:34](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=154)** And then the bottom option is land segment, which I don't yet have any land segments defined.
>
> **[2:41](https://www.linkedin.com/learning/learning-virtualization-13945890/setting-up-networking-with-vmware-workstation?u=76281980&t=161)** So again, for a small number of virtual machines, Nat is usually going to be the easiest to configure and it'll give us the same network capability as the host machine has.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (7)
> **UI Navigation:** go to (2), select the (1), click on (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (1)
> **Speakers:** - in (1)

#### [Allocating processors and memory to a virtual machine using VMware Workstation](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=0)** - [Instructor] Now let's look at allocating processor and memory to a virtual machine.
>
> **[0:05](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=5)** So again, in the tree view, I'll click on the name of the virtual machine and then right click on it.
>
> **[0:12](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=12)** I'll go down to settings.
>
> **[0:15](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=15)** And if I pull up the processor section, we'll see that most of this is greyout because we can't edit the processor information while the virtual machine is running.
>
> **[0:25](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=25)** So I'll hit "Cancel," and I will shut down this virtual machine.
>
> **[0:32](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=32)** Want to shut down, I'll go back and right click on the name and go to settings, pull up processors again and now we see we can in fact, edit the processor information.
>
> **[0:44](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=44)** The top drop down is number of processors.
>
> **[0:47](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=47)** We can't just type in any number we have to go with what's in the dropdown already.
>
> **[0:51](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=51)** I'm going to choose two processors.
>
> **[0:54](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=54)** And then also we have a drop down for a number of cores per processor.
>
> **[0:58](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=58)** I'm going to go with two there also which gives me a total of four processor cores.
>
> **[1:04](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=64)** So, the number of processor cores is always the number of processors multiplied times the number of cores per processor.
>
> **[1:13](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=73)** Different guest operating systems will have a different limit on how many cores they can support.
>
> **[1:20](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=80)** So depending on what operating system you're using you may not want to set this too high.
>
> **[1:25](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=85)** Underneath, we have three check boxes and all of these have to do with different virtualization features that are not necessarily turned on by default, and are not really needed in most cases.
>
> **[1:38](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=98)** So, 99% of the time you can leave these three check boxes blank.
>
> **[1:44](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=104)** Now if we go to memory, we'll see it as set to 2048 megabytes.
>
> **[1:49](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=109)** In other words two gigabytes, that is what's recommended for [[Windows 10]].
>
> **[1:56](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=116)** I could adjust that here, maybe increase it to 4096, which would be four gigabytes.
>
> **[2:04](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=124)** Adding additional memory for many operating systems will give an increase in performance.
>
> **[2:10](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=130)** So I'll click, "OK".
>
> **[2:12](https://www.linkedin.com/learning/learning-virtualization-13945890/allocating-processors-and-memory-to-a-virtual-machine-using-vmware-workstation?u=76281980&t=132)** And now in the information pane about this virtual machine, we see the memory did go to four gigabytes and the processors went to four, that would be four logical processors because we have two processors with two cores each.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (1)
> **UI Navigation:** click on (3), go to (3), dropdown (1)
> **Definitions:** in other words (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Duplicating a virtual machine using VMware Workstation](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=0)** - Now I'd like to demonstrate how to duplicate a virtual machine in VM-ware workstation.
>
> **[0:07](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=7)** So I have my machine powered off, and I'm going to right click on the name of it.
>
> **[0:12](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=12)** Go to manage and off the manage menu I'll go to clone and clone essentially means to duplicate it.
>
> **[0:19](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=19)** It'll start a wizard for me.
>
> **[0:21](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=21)** There's no options on the first page so I'll click next.
>
> **[0:25](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=25)** But it's asking what I would like to clone, the first option is the current state of the virtual machine and that is what I would like.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=33)** So I'll click next.
>
> **[0:35](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=35)** For the clone method, I have two options.
>
> **[0:37](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=37)** The, the one that's selected by default, is to create a linked clone which will be a clone that is connected to the original machine and cannot run unless it can access the original machine.
>
> **[0:49](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=49)** What I'd like to do is the second option to create a full clone, which is a complete copy of the virtual machine that is independent of the original.
>
> **[1:00](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=60)** I'll click next.
>
> **[1:02](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=62)** Then I'll need to give it a name, I'm going to go ahead and go with the default name and default location.
>
> **[1:08](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=68)** So hit finish, and we'll be presented with a progress bar.
>
> **[1:13](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=73)** This may take a minute or two if you have a virtual machine with a large disc drive because it'll have to copy all of that information.
>
> **[1:23](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=83)** And now it says done, I'll hit close.
>
> **[1:28](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=88)** And I'll look at my list of [[Virtual Machines]] I now have [[Windows 10]] demo one and clone of windows 10 demo one, which is an exact copy of it.
>
> **[1:37](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=97)** I could go ahead and start either one of these virtual machines and they would run fine, however, if I started both of them we could have some problems.
>
> **[1:45](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=105)** Because it's an exact copy, the clone has the same name as the other machine and the same network settings as the other machine.
>
> **[1:54](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=114)** And on some networks, having two machines with the same name will be a problem on many networks having two machines with the same IP address will be a problem.
>
> **[2:03](https://www.linkedin.com/learning/learning-virtualization-13945890/duplicating-a-virtual-machine-using-vmware-workstation?u=76281980&t=123)** So probably at this point, you would want to go into one of the machines either one, and change the name and change the IP address, and then you could run both of them at the same time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (2), [[Windows 10]] (2)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - now (1)


### 8. Preparing Your Infrastructure for Virtualization

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding different file systems](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about some different file systems and how they relate to virtualization.
>
> **[0:06](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=6)** We'll talk about the Virtual Machine File System, VMFS, the Network File System, NFS, the New Technology File System, NTFS, and raw device mapping, RDM.
>
> **[0:22](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=22)** First, VMFS.
>
> **[0:24](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=24)** This is a file system proprietary to VMware.
>
> **[0:28](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=28)** It is a clustered file system, and that means it can be mounted on multiple servers simultaneously.
>
> **[0:35](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=35)** So each of your hosts could all connect to the same file system at the same time.
>
> **[0:40](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=40)** And as you might expect with a proprietary system, it is preferred by VMware.
>
> **[0:45](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=45)** Most of the VMware hypervisors will work with other file systems, but the default choice and the preferred choice is VMFS.
>
> **[0:54](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=54)** Next, we'll talk about NFS, and this is a system that was originally developed by Sun but is now an open standard used fairly commonly in the Unix and [[Linux]] world.
>
> **[1:05](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=65)** It is a distributed file system, meaning it will only be mounted on one server and the network will be used to share information to multiple machines.
>
> **[1:16](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=76)** NFS will be the default choice for most hypervisors running on Unix or Linux.
>
> **[1:22](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=82)** NTFS is proprietary to [[Microsoft]].
>
> **[1:26](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=86)** NTFS drives are mounted on one server and they are shared via the operating system.
>
> **[1:32](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=92)** So multiple servers can access the data but they'll have to contact the operating system of wherever the drive is mounted.
>
> **[1:39](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=99)** NTFS is currently the only option for Hyper-V.
>
> **[1:42](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=102)** So if you're going to run Hyper-V, you need to store the files on an NTFS file system.
>
> **[1:48](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=108)** Microsoft is working on a new file system called the Resilient File System.
>
> **[1:54](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=114)** This is based on NTFS, it is basically the next generation of NTFS and it looks like it will probably replace NTFS in the future.
>
> **[2:02](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=122)** The last one we'll talk about is raw device mapping, RDM, which isn't exactly a file system.
>
> **[2:09](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=129)** I think of it more as the absence of a file system.
>
> **[2:13](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=133)** Basically, files are written to unformatted disks, disks that have not been formatted to any particular file system, the files are just written out there raw.
>
> **[2:23](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=143)** In order to manage this, a mapping file will be created, and that mapping file will be on a VMFS volume.
>
> **[2:31](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=151)** So RDM can only be used in conjunction with VMFS.
>
> **[2:37](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=157)** So with all these choices of a file system, what are some of the things you should consider when you're choosing a file system?
>
> **[2:44](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=164)** Pretty much every hypervisor vendor is going to have a recommendation.
>
> **[2:48](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=168)** And sometimes it's stronger than a recommendation, sometimes it's a requirement.
>
> **[2:52](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=172)** So some hypervisors will only run on one particular file system.
>
> **[2:57](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=177)** Really don't have a difficult choice there.
>
> **[2:59](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=179)** Pretty much all of the hypervisors that can run on different file systems, the vendor will have a recommendation.
>
> **[3:06](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=186)** So if you're building out a file system for your hypervisor only, just go with the vendor recommendation.
>
> **[3:12](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=192)** This becomes a little more complicated if we would like the file system to be utilized by both the hypervisor and the guest OS because we could run into some situations where some file systems can be used by the hypervisor, but can not be used by the guest.
>
> **[3:29](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=209)** So you need to ask yourself, would you like the guest OS to also access the same storage?
>
> **[3:35](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=215)** Let's look at an example.
>
> **[3:37](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=217)** Let's say you'd like to implement a VMware hypervisor and you'd like to run primarily Linux as the guest.
>
> **[3:43](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=223)** Well, your hypervisor vendor is clear about recommending VMFS.
>
> **[3:48](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=228)** But if you use VMFS, the Linux guest will not be able to read that data.
>
> **[3:54](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=234)** You have some different solutions to this.
>
> **[3:56](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=236)** One solution would be to instead use NFS.
>
> **[4:00](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=240)** The VMware hypervisor will run on an NFS system and your Linux guests could also access the NFS system.
>
> **[4:09](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=249)** But maybe a more common solution to this is just simply to create two file systems.
>
> **[4:15](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=255)** There is no reason that your hypervisor and your guests have to use the same file systems.
>
> **[4:20](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=260)** So you could create one file system, probably a VMFS one, just for the hypervisor, and then create another file system, probably NFS for the Linux guest.
>
> **[4:32](https://www.linkedin.com/learning/learning-virtualization-13945890/understanding-different-file-systems?u=76281980&t=272)** If you're going to run VMware hypervisor and [[Windows]] guest, you're almost certainly going to have to create two file systems, one file system for VMware and a separate file system, an NTFS file system, for your Windows clients.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (6), [[Microsoft]] (2), [[Windows]] (2)
> **Env Vars:** ntfs (9), vmfs (8), nfs (7), rdm (3)
> **Definitions:** is a  (4)
> **Speakers:** - [instructor] (1)

#### [Choosing between SAN, NAS, or local storage](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=0)** - In this section, I'd like to talk about some different options on storage.
>
> **[0:04](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=4)** Most of the storage [[Hardware]] on the market today falls into one of three categories.
>
> **[0:09](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=9)** Either direct attached storage, DAS.
>
> **[0:13](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=13)** Network attached storage, NAS or often pronounced nas, and storage area network, SAN or commonly annunciated as san.
>
> **[0:25](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=25)** First, we'll talk about direct attached storage and that is basically your local hard drive.
>
> **[0:31](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=31)** We can have one or more local hard drives in every machine and we also could attach some external hard drives if it is physically external to a machine, but still only connected to one machine that's typically still called direct attached storage.
>
> **[0:46](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=46)** This is only appropriate for a small amount of guest machines.
>
> **[0:51](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=51)** It is the cheapest, easiest method of storage and to be honest, I use this myself at home.
>
> **[0:57](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=57)** If I have a project that only involves two or three [[Virtual Machines]] I'll just connect an external hard drive, load my guest machines onto that external hard drive, and that is just a quick and easy way to get rolling.
>
> **[1:10](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=70)** The biggest problem with local storage it does not scale well.
>
> **[1:14](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=74)** You're simply not going to be able to get the amount of throughput you need to run a large number of guest machines.
>
> **[1:21](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=81)** Also, if you need a high performance production guest machine that does not work well with directly attached storage and we also typically have less options on disaster recovery and resilience with directly attached storage.
>
> **[1:36](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=96)** The next option is network attached storage, NAS, and this is basically a file server.
>
> **[1:42](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=102)** It's a device we buy that connects to our network, has lots of hard drives, and the device acts as a file server.
>
> **[1:49](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=109)** The device will have some sort of simple operating system and that operating system will communicate with the drives and will read those drives as a particular file system.
>
> **[2:00](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=120)** Our clients can then communicate with the OS of the NAS so all of the machines on your network will be able to contact the operating system of the NAS and gain access to any shared files audit.
>
> **[2:13](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=133)** Typically a NAS only supports one file system so if you have need for multiple file systems you might need to buy multiple NAS devices.
>
> **[2:22](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=142)** This may not be a significant expense.
>
> **[2:25](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=145)** For example, if you have the need for 10 terabytes of VMFS storage and 10 terabytes of NTFS storage you could simply buy two separate NAS devices each holding approximately 10 terabytes.
>
> **[2:43](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=163)** This would be about the same price point as just buying one NAS that supported 20 terabytes.
>
> **[2:49](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=169)** The third option, storage area network, commonly called SAN, typically does not have an operating system and instead clients can connect directly to the file system.
>
> **[3:01](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=181)** Clients connect directly to a disk.
>
> **[3:03](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=183)** So this will appear in your client as a drive letter.
>
> **[3:06](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=186)** When your client computer connects to a SAN each device will be given a new drive letter and as far as your client computer is concerned it has all the functionality of direct attached storage.
>
> **[3:19](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=199)** However, it offers us the advantages of typically higher performance, higher resilience and better disaster recovery.
>
> **[3:26](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=206)** After you've connected to a drive letter the client can format that drive as a different file system.
>
> **[3:32](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=212)** So most SANs will support multiple file systems and the client can utilize the SAN space as whatever file system they prefer.
>
> **[3:41](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=221)** Typically a SAN is going to be the highest performance storage subsystem we can get.
>
> **[3:46](https://www.linkedin.com/learning/learning-virtualization-13945890/choosing-between-san-nas-or-local-storage?u=76281980&t=226)** That also means it's the highest price.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[Virtual Machines]] (1)
> **Env Vars:** nas (8), san (5), das (1), vmfs (1), ntfs (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)


### 9. Troubleshooting

[↑ Back to Table of Contents](#table-of-contents)

#### [Troubleshooting network communication](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=0)** - In this section, I'd like to talk about troubleshooting network communications in [[Virtual Machines]].
>
> **[0:06](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=6)** The first step, you want to make sure every virtual machine has a unique name, unique IP address, and unique MAC address.
>
> **[0:14](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=14)** It's very easy when we clone or copy machines, that some of this information will remain the same.
>
> **[0:20](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=20)** And all of our best practices say each of these things should be unique across all of our machines.
>
> **[0:26](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=26)** The machine name and IP address would be changed inside of the guest operating system.
>
> **[0:33](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=33)** However, the MAC address is typically assigned by the hypervisor, and you'll need to go through some sort of administrative interface in order to change the MAC address.
>
> **[0:43](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=43)** I've had some personal experience with problems with duplicate MAC addresses.
>
> **[0:47](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=47)** It usually presents itself as very slow network performance.
>
> **[0:51](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=51)** So both of the machines with the duplicated MAC addresses will at times function normally, but if they try to both access the network at the same time, typically one will work and the other will not.
>
> **[1:03](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=63)** So you'll get intermittent problems.
>
> **[1:05](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=65)** If you're seeing these symptoms, and you know that you do a lot of cloning in your environment, you'll definitely want to check the MAC addresses of the machines affected.
>
> **[1:14](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=74)** Also want to think about software firewalls.
>
> **[1:17](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=77)** This would be on both the guest and the host.
>
> **[1:20](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=80)** Sometimes when we have a firewall problem on a virtual machine, we immediately go troubleshoot it on the guest environment and then stop there.
>
> **[1:29](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=89)** Actually, you will probably need to mirror the settings on both the guest and the host.
>
> **[1:34](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=94)** So in other words, if one firewall allows traffic and the other firewall blocks that traffic, the end result will be the traffic is blocked.
>
> **[1:44](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=104)** And if you're not careful, you could spend an awful lot of time trying to configure one of these firewalls, when the problem is actually the other firewall.
>
> **[1:53](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=113)** When troubleshooting network communications, we'll need to think about the host network adapter.
>
> **[1:58](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=118)** Remember that all of our guest machines, in order to communicate with the outside world, will have to put traffic on the physical network adapter of the host.
>
> **[2:06](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=126)** You'll want to make sure that network adapter is functional.
>
> **[2:10](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=130)** So in other words, if the hosts can't talk to the outside world, there's almost no chance the guests are going to be able to talk to the outside world.
>
> **[2:18](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=138)** It is possible that a host network adapter would become saturated.
>
> **[2:22](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=142)** On a host that's running a very large number of virtual machines, and all of those guests are trying to access the network simultaneously, we could saturate a network card The solution for this would be either to move some of those guests to a different host, or add a second network card to our host and split the traffic amongst the two cards.
>
> **[2:45](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=165)** You'll also want to keep your drivers up to date.
>
> **[2:48](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=168)** Many vendors, put out special drivers for virtualized environments.
>
> **[2:52](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=172)** So you want to check with the manufacturer of your network adapter and make sure you have the latest up-to-date drivers.
>
> **[2:59](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=179)** You'll also want to look at some things on the guest network adapter.
>
> **[3:02](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=182)** What is your guest network adapter connected to?
>
> **[3:06](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=186)** Most hypervisors have the option to connect the guest adapter to either an internal switch or an external switch.
>
> **[3:14](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=194)** If you're hoping for external communication, but you're connected to an internal switch, that's probably not going to work and you'll need to change the guest network adapter to connect to the proper virtual switch.
>
> **[3:27](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=207)** Guest network adapters also have drivers.
>
> **[3:29](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=209)** Typically the manufacturer of the hypervisor will put out drivers for the network adapters.
>
> **[3:35](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=215)** So you can check with them to see if drivers have been updated recently.
>
> **[3:39](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-network-communication?u=76281980&t=219)** And you'll want to be aware of what's called a ghost network adapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (2)
> **Env Vars:** mac (6)
> **Prerequisites:** you'll need (2), configure (1), make sure you have (1)
> **CLI Commands:** make (3)
> **Definitions:** in other words (2)
> **Warnings:** troubleshoot (1), be aware (1)
> **Speakers:** - in (1)

#### [Troubleshooting slow performance](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=0)** - [Instructor] In this section I'd like to talk about troubleshooting slow performance of a guest machine.
>
> **[0:05](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=5)** When troubleshooting slow performance the first thing we're going to look at is does the guest have adequate resources, does the guest have adequate processor?
>
> **[0:14](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=14)** Some software will benefit significantly from multiple processors, other software will not.
>
> **[0:20](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=20)** It just depends on if the software was designed to run in a multiprocessor environment.
>
> **[0:25](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=25)** In a virtualization scenario it's typically very easy to experiment and add a small amount of processor or remove some processor and see if that makes a significant difference in the performance.
>
> **[0:38](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=38)** We'll also want to investigate whether or not the guest machine has enough memory.
>
> **[0:42](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=42)** And certainly if the guest machine is low on memory that's going to cause some performance problems.
>
> **[0:47](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=47)** Once we have given a guest machine an adequate amount of memory then adding more memory probably won't help that much.
>
> **[0:55](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=55)** So, a machine being short on memory is a bad thing, a machine having the right amount of memory is a good thing, but a machine having a whole bunch of extra memory is typically not going to improve performance.
>
> **[1:08](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=68)** We'll also need to look at does the guest machine have adequate graphics resources?
>
> **[1:14](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=74)** Most hypervisors provide very little in the way of a graphics subsystem.
>
> **[1:19](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=79)** Therefore, if it is graphical needs that are slowing down your performance you have some options.
>
> **[1:25](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=85)** The first option would be to reduce your need on high-end graphics.
>
> **[1:29](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=89)** Most operating systems have some options where you can turn down the amount of graphical effects, which would be a better option for a machine that doesn't have much in the way of graphics processing power.
>
> **[1:41](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=101)** The other option would be to go with a different hypervisor, a hypervisor that does provide access to either a shared or dedicated GPU.
>
> **[1:51](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=111)** When troubleshooting slow performance we also want to look at the antivirus solution on the host.
>
> **[1:56](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=116)** Remember, most antivirus solutions are constantly checking a large number of files for viruses.
>
> **[2:04](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=124)** Some of the files associated with a virtual machine can be very large files, and scanning the entire file for a virus can be very slow.
>
> **[2:13](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=133)** The manufacturers of some antivirus software make a special edition or special extensions for hosts running [[Virtual Machines]].
>
> **[2:22](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=142)** You can look into that.
>
> **[2:24](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=144)** Most antivirus software also supports the concept of an exception where we can make sure that certain files are excluded from these constant scans.
>
> **[2:34](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=154)** You might see a performance improvement by excluding the file types that are commonly associated with very large virtual machine files.
>
> **[2:42](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=162)** We can also see a performance boost from removing unneeded [[Hardware]] on the guest.
>
> **[2:47](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=167)** So, much like a computer can be slowed down by running unneeded software a computer can also be slowed down by running unneeded hardware.
>
> **[2:55](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=175)** On a physical machine it's not convenient to remove a large amount of hardware, but on a virtual machine it's typically pretty easy.
>
> **[3:04](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=184)** Usually when a virtual machine is first created the hypervisor will create some sort of virtual USB drive, virtual COM ports, possibly virtual disc drives, and some of these things aren't needed for every situation.
>
> **[3:18](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=198)** So, if your particular guest doesn't need a virtual COM port, doesn't need a virtual floppy drive, doesn't need a virtual USB port, go ahead and disable all of those things.
>
> **[3:28](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=208)** The most common cause of slow performance of virtual machines is a bottleneck at the storage layer.
>
> **[3:35](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=215)** Virtual machines are very large files that are constantly being written to and read from, and this can put a huge strain on a storage subsystem.
>
> **[3:44](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=224)** Unfortunately, there's no easy way to fix this.
>
> **[3:48](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=228)** The long-term fix is going to be to upgrade your storage subsystem.
>
> **[3:52](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-slow-performance?u=76281980&t=232)** In other words, buying bigger, and better, and more expensive hardware, and that can give a significant performance increase to most virtual machines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (4), [[Hardware]] (4)
> **Env Vars:** usb (2), com (2), gpu (1)
> **Definitions:** is a  (3), in other words (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Troubleshooting common errors](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about a couple of common issues that come up with [[Virtual Machines]].
>
> **[0:06](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=6)** The first one is access denied.
>
> **[0:09](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=9)** Sometimes when we try to start a virtual machine we'll receive an access denied error.
>
> **[0:14](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=14)** When this happens, you want to check the permissions on the files that make up the virtual machine.
>
> **[0:20](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=20)** And the directory that those files are held in.
>
> **[0:24](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=24)** The hypervisor will need full control of both of those.
>
> **[0:28](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=28)** In addition, many hypervisors need full control of a temp directory and sometimes this is the same temp directory that the host operating system uses.
>
> **[0:38](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=38)** In other hypervisors, it will have its own temp directory.
>
> **[0:42](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=42)** And also, if you're using snapshots the hypervisor will need full control of the directory where you store the snapshots.
>
> **[0:49](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=49)** And it will need to read those every time you restart the virtual machine.
>
> **[0:53](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=53)** So, if you're getting an access denied error here are some places you can look and double check the permissions in these areas.
>
> **[1:02](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=62)** The other issue that's common in some virtual machines is time drift.
>
> **[1:07](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=67)** And time drift occurs when the guest clock is inaccurate, it occurs because of the way the hypervisor handles virtual CPU.
>
> **[1:16](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=76)** So, the guest doesn't know that it's a virtual machine sometimes.
>
> **[1:21](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=81)** It's expecting a constant amount of CPU and it bases its time off of that.
>
> **[1:27](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=87)** When it starts to get less CPU than it normally would the time will become inaccurate on the guest machine.
>
> **[1:35](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=95)** This is fairly easy to fix, most guest operating systems will support syncing to some sort of time server.
>
> **[1:42](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=102)** On a network it's sometimes called an NTP server.
>
> **[1:46](https://www.linkedin.com/learning/learning-virtualization-13945890/troubleshooting-common-errors?u=76281980&t=106)** Also, there are a few publicly available ones such as time.[google.com](https://google.com) so if you sync the time on the guest machine to a known source that should eliminate problems of time drift.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (2), [[Google]] (1)
> **Env Vars:** cpu (3), ntp (1)
> **CLI Commands:** make (1)
> **URLs:** [google.com](https://google.com) (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=0)** - [Martin] I certainly hope you've enjoyed this course, I enjoyed making it and I hope you've enjoyed learning from it.
>
> **[0:07](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=7)** I'd like to recommend some next steps for you to continue with your learning.
>
> **[0:12](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=12)** One of the courses that we have here in our content library is called "Learning VirtualBox" by Scott Simpson.
>
> **[0:19](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=19)** VirtualBox is another hypervisor similar to Hyper-V and VMware, and it's free, so that's a great price point.
>
> **[0:28](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=28)** We also have another course called "[[Windows Server]] 2019: "Configuring Hyper-V" by Ed Liberman.
>
> **[0:36](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=36)** And that course will go much deeper into Hyper-V.
>
> **[0:40](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=40)** I covered some of the basics of Hyper-V here in this course.
>
> **[0:44](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=44)** In Ed Liberman's course it goes much deeper into Hyper-V.
>
> **[0:48](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=48)** We also have a learning path you might want to check out.
>
> **[0:51](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=51)** It's called "Understanding Cloud Fundamentals."
>
> **[0:54](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=54)** It's a handful of courses about the basics of cloud and [[Cloud Computing]], it's very interesting.
>
> **[1:01](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=61)** There's some great stuff in that learning path.
>
> **[1:03](https://www.linkedin.com/learning/learning-virtualization-13945890/next-steps?u=76281980&t=63)** So, be sure to check it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (1), [[Cloud Computing]] (1)
> **Definitions:** is called (1)
> **Speakers:** - [martin] (1)


## Instructor

- [[Martin Guidry]]

## Skills Covered

- Virtualization

## Path Context

### In [[Networking and Administration Fundamentals]]
← [[Introduction to Identity and Access Management]] | **7 of 10** | [[Learning PowerShell]] →

### In [[Essential New Skills in IT Administration]]
← [[Server Administration Essential Training]] | **3 of 5** | [[Cloud Computing Understanding Core Concepts]] →

## Appears In

- [[Networking and Administration Fundamentals]]
- [[Essential New Skills in IT Administration]]

---

[↑ Back to top](#)