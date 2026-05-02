---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: windows-server-2019-installation-and-configuration
url: "https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration"
duration_minutes: 97
duration: 1h 37m
level: Intermediate
updated: 4/29/2024
learners: 18040
skills:
  - Server Configuration
  - Windows Server
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQH4KHbxM74BPg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668826149?e=2147483647&amp;v=beta&amp;t=qqcy0Sj696N047EBY2vI4hIzhmH1qhLX9r9lUp2XrBk"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Getting Started with Windows Server 2019]]'
prev_courses:
  - '[[Windows Server 2019 Essential Training]]'
next_courses:
  - '[[Windows Server 2019- Install and Configure Active Directory]]'
path_nav: '[{"path":"Getting Started with Windows Server 2019","position":2,"total":4,"prev":"Windows Server 2019 Essential Training","next":"Windows Server 2019- Install and Configure Active Directory"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/server-configuration
  - skill/windows-server
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Windows%20Server%202019-%20Installation%20and%20Configuration.md)

![Windows Server 2019: Installation and Configuration](https://media.licdn.com/dms/image/v2/C4E0DAQH4KHbxM74BPg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668826149?e=2147483647&amp;v=beta&amp;t=qqcy0Sj696N047EBY2vI4hIzhmH1qhLX9r9lUp2XrBk)

# Windows Server 2019: Installation and Configuration

> What do you want Windows Server to do for you? Understanding the requirements of your server is one of the most important and overlooked aspects of the entire installation process. This course shows new system and network administrators how to plan the big picture and use that plan to install and configure Windows Server 2019. Instructor Scott Burrell explains how to identify and acquire the hardw

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration) | 1h 37m | Intermediate | 18K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Preparing to install Windows Server 2019](#preparing-to-install-windows-server-2019)
  - [What you should already know](#what-you-should-already-know)
- [**1. Planning the Installation**](#1-planning-the-installation) (4 videos)
  - [Planning the role(s) of the server](#planning-the-roles-of-the-server)
  - [Planning server hardware](#planning-server-hardware)
  - [Purchasing Windows Server 2019](#purchasing-windows-server-2019)
  - [Virtualization and dedicated hardware](#virtualization-and-dedicated-hardware)
- [**2. Installing Windows Server 2019**](#2-installing-windows-server-2019) (7 videos)
  - [Installing from disk or an ISO file](#installing-from-disk-or-an-iso-file)
  - [Installing and upgrading](#installing-and-upgrading)
  - [Using Server Manager](#using-server-manager)
  - [Initial configuration in PowerShell](#initial-configuration-in-powershell)
  - [Configuring multiple interfaces per network interface controller (NIC)](#configuring-multiple-interfaces-per-network-interface-controller-nic)
  - [Understanding NIC teaming](#understanding-nic-teaming)
  - [Configuring NIC teaming](#configuring-nic-teaming)
- [**3. Configuring Storage**](#3-configuring-storage) (4 videos)
  - [Creating different volume types](#creating-different-volume-types)
  - [Supported file systems](#supported-file-systems)
  - [Improvements to Storage Spaces Direct](#improvements-to-storage-spaces-direct)
  - [Introducing Storage Migration Service](#introducing-storage-migration-service)
- [**4. Managing Server Roles and Features**](#4-managing-server-roles-and-features) (6 videos)
  - [Planning role configuration](#planning-role-configuration)
  - [Installing roles and features](#installing-roles-and-features)
  - [Configuring a role](#configuring-a-role)
  - [Managing features on demand](#managing-features-on-demand)
  - [Creating migration tools](#creating-migration-tools)
  - [Exporting and importing with SMIG](#exporting-and-importing-with-smig)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Preparing to install Windows Server 2019](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/preparing-to-install-windows-server-2019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/preparing-to-install-windows-server-2019?u=76281980&t=0)** - [Scott] So you want to install a new [[Windows Server]].
>
> **[0:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/preparing-to-install-windows-server-2019?u=76281980&t=3)** Have you stopped to ask yourself why?
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/preparing-to-install-windows-server-2019?u=76281980&t=6)** I'm not suggesting that you second guess yourself.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/preparing-to-install-windows-server-2019?u=76281980&t=8)** Rather, I want to point out the importance of defining what a new server will do before you start shopping and definitely before you start running the installation process.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/preparing-to-install-windows-server-2019?u=76281980&t=19)** In this course, we will explore the planning progress as well as the necessary steps to get a new [[Windows]] 2019 server installed and productive in your environment.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/preparing-to-install-windows-server-2019?u=76281980&t=30)** We will use legacy administration tools on the desktop, as well as [[Powershell]] to configure a fresh installation of Windows server with an identity, network address, storage and the necessary roles to serve your network needs.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/preparing-to-install-windows-server-2019?u=76281980&t=45)** Hi, I'm Scott Burrell, and I'm a big fab of measuring twice so we can cut only once.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/preparing-to-install-windows-server-2019?u=76281980&t=51)** Let's take a look at how to do just that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (2), [[Windows]] (1), [[Powershell]] (1)
> **Prerequisites:** install (1), configure (1)
> **Tools:** powershell (1)
> **Speakers:** - [scott] (1)

#### [What you should already know](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/what-you-should-already-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/what-you-should-already-know?u=76281980&t=0)** - [Lecturer] There are two things that I want to point out before we get started.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/what-you-should-already-know?u=76281980&t=4)** First, this course is a beginner level course with no prerequisites.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/what-you-should-already-know?u=76281980&t=9)** While I will use the technically accurate terms for the different pieces and capabilities of [[Windows Server]] it is not necessary that you have a lot of background in administering [[Windows]] Servers.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/what-you-should-already-know?u=76281980&t=20)** The installation and initial configuration of a server is an introductory task.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/what-you-should-already-know?u=76281980&t=26)** It's the planning and preparation that takes things to the next level and that's what this course is about.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/what-you-should-already-know?u=76281980&t=31)** The second thing that I want to bring up is the value of creating a test lab, most likely in a virtualization environment.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/what-you-should-already-know?u=76281980&t=39)** In this course all of the demonstrations are performed on a single Windows 2016 server with the Hyper-V role installed.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/what-you-should-already-know?u=76281980&t=47)** This server has 32 cores and 128 gig of RAM which is more than enough for these demonstrations.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/what-you-should-already-know?u=76281980&t=54)** I'm certain that you can follow along with much less.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/what-you-should-already-know?u=76281980&t=57)** [[Virtual Machines]] are a great way to test out processes that are new to you without creating potential problems with your product environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Windows Server]] (1), [[Virtual Machines]] (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** ram (1)
> **Speakers:** - [lecturer] (1)


### 1. Planning the Installation

[↑ Back to Table of Contents](#table-of-contents)

#### [Planning the role(s) of the server](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=0)** - [Instructor] I'm a big fan of making a plan before I dive right in.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=4)** When it comes to installing a server, that planning starts out with one question.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=9)** What do I want this server to do?
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=12)** Figuring out the answer may be simple or it may be somewhat involved but one thing is for certain, it will determine the answer to every other question that you need to address to install and configure the server.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=25)** [[Windows]] Serve 2019 is capable of sharing files and printers.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=30)** It's also capable of centralizing user identity and handing out IP configurations.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=36)** And all of the other things that you've come to expect from a network server.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=40)** It can also host entire networks of [[Virtual Machines]] and virtualize applications and containers, replicate storage locally, globally, and so much more.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=52)** And while it's good to familiarize yourself with the range of the roles and features available in [[Windows Server]], especially things that are new, your planning should start out with an assessment of what your organization needs a server to do.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=67)** Start by making a list of server needs in a matrix somewhat like this.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=73)** If you're migrating from a previous version of Windows, you may start with a copy of what you've already been doing.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=79)** If you're designing a new network, consider why the company needs a network, why it needs servers, and begin listing these objectives and these requirements, and the things that you're going to need to set them up.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=92)** Once you list the needed services, you can identify the resource and security needs of these services.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=100)** It's easy to say, everything needs high security but consider which roles might require extra protection.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=107)** For example, company files contain valuable, often proprietary information, they have to kept secure but they also have to be kept open and available for users to access everyday.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=120)** User information inside [[Active Directory]] often defines which users get that access as well as who can manage various servers, who can run different applications and more.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=132)** It's usually a bad idea to place file shares on a server that's also acting as a domain controller.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=139)** This all the time access should be different.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=143)** This resource that should be kept wildly available needs to be separated from this security information that should be kept under tighter lock and key.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=153)** Resource allocation is another big deal.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=156)** If you plan on installing a large database driven application like [[Microsoft]] Exchange Server, you need to know the requirements and behaviors of that application.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=167)** If you plan on installing exchange on a Windows Server, don't plan on putting anything else on that machine.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=174)** Exchange is very good at managing its own resources and will try to consume all available memory, and sometimes storage space on that server.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=185)** As you look through your role matrix, you can find things that have needs that are similar or compatible.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=191)** As we look over this list of server needs, I see that we need an active directory server, we also need a DNS server, and a certificate server as well as an exchange server and the ability to share files and printers.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=207)** Our organization is small and we won't be bringing up a large server farm or an entire data center but there are at least three separations here.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=217)** The exchange server needs to be separated from the [[Representational State Transfer (REST)|rest]].
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=221)** Active directory domain services and DNS work really well together and certificate services can run on a domain controller even if in larger environments, you might want to separate them.
>
> **[3:55](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=235)** The file server, for security reasons that we just discussed, should have its own space as well.
>
> **[4:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-the-role-s-of-the-server?u=76281980&t=240)** With this planning stage worked out, we're going to move forward into the next segment where we'll take a look at planning the installation of the servers that will accomplish these roles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (3), [[Windows]] (2), [[Windows Server]] (2), [[Virtual Machines]] (1), [[Microsoft]] (1)
> **Env Vars:** dns (2)
> **Prerequisites:** install (1), configure (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Planning server hardware](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=0)** - [Instructor] Once you know what it is your [[Windows Server]] will do for you, the next step is planning how much [[Hardware]] you need.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=7)** There are two things to consider when figuring this out.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=11)** The first is what [[Microsoft]] says is required, or recommended.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=16)** And the second is what you will actually need.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=20)** Spoiler alert, the second one is often quite a bit higher.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=24)** One of the best examples of this is the necessary storage space.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=29)** If you look up the minimum storage requirements for Windows Server 2019, you will see that you need to have at least 32 gigabytes for the core installation.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=39)** That's the one without the point and click interface.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=42)** You're going to need an additional four gig if you want the desktop experience.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=47)** What that doesn't account for is at least three times the amount of physical RAM, plus 10 gig or more for the roles and features that you're going to want to install, including the data that they're going to need to hold their configuration.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=62)** Plus, an additional 10 gig for future [[Windows]] updates, not to mention space for event logs, traces, or anything else that your applications or roles are going to need to create or maintain.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=76)** In our example, the domain controller won't be storing a lot of information, not a lot of extra files anyway.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=83)** But it does need room to absorb the next three to five years worth of updates.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=88)** So using the information that we just reviewed, I would recommend that it have a hard drive no smaller than 128 gig.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=96)** Or, if you have a much larger hard drive that you're dividing up into partitions, you should allot at least 128 gig for the operating system partition.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=107)** This file server is going to need the same room to operate, plus you're going to need the storage for all departments and for all users.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=116)** You're going to need to estimate how much information, how much data a user is going to create and how much storage space they're going to consume now, and how that's going to grow over the next few years.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=130)** User storage space can be added to down the road without a lot of trouble, but it's worth future-proofing your server as much as you can for now, at least to cover you for the next couple of years.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=142)** Another resource metric is the processor, and its capabilities.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=147)** And here there are a couple of requirements.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=149)** In addition to a minimum speed, and the fact that it has to be a 64 bit processor, CPUs in a Windows 2019 server need to support second level address translation.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=161)** Depending on the brand or product line of your CPU, this might be labeled as EPT, or NPT.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=169)** And the processor also needs to support data execution prevention.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=174)** These last two features provide protection for your operating system, and for [[Virtual Machines]] that you may run.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=181)** They help isolate them and protect them from each other.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=184)** Neither of them, or any of these other requirements for the processor, are actually new.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=190)** They were required for Windows Server 2016 as well.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=193)** Don't take this as an open invitation to run an in-place upgrade on all of your Windows 2016 servers.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=200)** But understand that you may have the opportunity to repurpose some hardware, as long as it meets these requirements.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=207)** Another thing that you're going to want to consider is the number of processing cores that you're going to want and need.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=214)** You'll be paying for Windows Server based on how many cores you have, so you don't want to go nuts on this, but it's also no good to skimp in this particular resource.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=225)** As you consider the roles and any applications that you may be installing, and the number of users that are going to access them, you'll start adding up how many cores that you need.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=236)** And understand that with this licensing cost, you're going to pay for a minimum of 16 cores for one server license.
>
> **[4:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=244)** Let's go back to our scenario to see what this means for us.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=248)** Our domain controller and our file server should be fine in a 16 core environment.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=254)** But an Exchange server is likely to want more.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=257)** When you take a look at the documentation for apps like Microsoft Exchange Server and others, you'll find that they can utilize quite a bit of hardware.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=267)** And, use this same thought process when deciding how much RAM to buy.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=272)** If you feel pressure by cost controls to get just enough for now, take a careful look at your main board, and how much expansion you have, the number of slots available, and the maximum module size per slot.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=286)** These will be important if you're planning future upgrades.
>
> **[4:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=289)** As a rule of thumb, once you've considered the minimum amount, Microsoft's 512 meg, once the server is installed, consider everything else that you're going to need.
>
> **[5:02](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=302)** You'll need an additional three times that just to run the desktop.
>
> **[5:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=306)** As well as everything else you're going to need your server to do now and in the future.
>
> **[5:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=311)** As a good rule of thumb, always get twice as much memory as you currently think you need.
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=317)** Other requirements for a Windows 2019 Server include a hardwired PCI Express network card, capable of at least one gigabit per second throughput.
>
> **[5:28](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=328)** And, your storage controller also needs to be PCI Express compliant.
>
> **[5:34](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=334)** And that pretty much rounds out the requirements.
>
> **[5:36](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=336)** Talk to your vendor about compatibility with Windows Server 2019 when evaluating new hardware.
>
> **[5:43](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-server-hardware?u=76281980&t=343)** And as you look at the processor cores, you might also want to ask them what kind of deals they have for server licensing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (5), [[Hardware]] (4), [[Windows]] (4), [[Microsoft]] (3), [[Virtual Machines]] (1)
> **Env Vars:** ram (2), pci (2), cpu (1), ept (1), npt (1)
> **Best Practices:** rule of thumb (2), recommended (1)
> **Prerequisites:** you need to have (1), install (1), you'll need (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Purchasing Windows Server 2019](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=0)** - [Instructor] Purchasing [[Windows Server]] can often be so complicated that we just ask our sales rep to make a recommendation and then drill them over and over to explain why they think their proposal is right.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=11)** And some even like doing this, because negotiating with a salesperson can feel like a sport worthy of the global stage.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=18)** But others are going to want to brush up on the options.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=21)** You want to make sure that you can make an informed request and purchasing decision.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=26)** When it comes to licensing a Windows Server, keep in mind that you pay twice.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=32)** You pay once for the license to run the server and this is done using the per core model from Windows Server 2016.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=40)** And secondly, you pay for the license to connect to the server.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=45)** This has been the model followed by multiple software vendors for decades.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=50)** The server license portion of this equation is often the more complicated part.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=55)** Windows Server 2019 is following the same model as Server 2016.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=60)** That is, the cost of licensing is based on how many processor cores you have.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=66)** If I'm going to run Windows Server 2019 on a server with two processors of 16 cores each, I need to license Windows Server 2019 for 32 core.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=77)** If every server you're running is on dedicated [[Hardware]], that seems like it can add up pretty quickly.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=83)** But if you're taking advantage of virtualization, you'll find out that this can work in your favor.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=89)** For example, Windows Server 2016 Standard Edition is able to run two [[Virtual Machines]].
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=97)** They can even be shielded VMs, if you like.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=100)** The server licensing for Standard Edition includes license to run up to two virtual instances of Windows Server, if all cores have been paid for.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=111)** This means one physical server can run some simple role and be the host for two virtual servers, all for the licensing cost of those physical cores.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=123)** If you go over the limit of two virtual environments in containers or VMs, you do have to pay for the cores once more for every two additional virtual environments.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=135)** When we look at our plan from the previous video, we may want to consider one server that runs Hyper-V and separate virtual machines for the domain controller and the file server.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=146)** This will allow me to license Windows Server for multiple machines at once.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=151)** Be careful when doing this, because not all roles are meant to run in virtual environments.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=157)** Take the time to get to know Hyper-V, its limitations, and the features that help you make servers more resilient, rather than less.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=165)** And keep in mind that there are pricing programs for high-volume customers, government, education, and others.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=173)** On this shopping website, if I were to scroll down, I can see a couple of different prices for Standard Edition and Datacenter Edition on the basic corporate organizations.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=184)** If I scroll down a little bit further, I can see that a charity license, which is granted to academic or government organizations, is available at a much lower price.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=196)** Once you understand what it is you want to buy, it might still be a good idea to put your salesperson to work for you in finding the best price for your sector.
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=206)** I mentioned a second part of licensing your Windows Server, and that is client access licenses, or CALs.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=214)** You need to purchase CALs for each device that will connect to your collection of servers.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=220)** One CAL can connect to multiple servers, which is nice.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=224)** It means you don't have to purchase more CALs just because you scale up your datacenter.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=228)** But as you look at any additional [[Microsoft]] applications you plan to install locally, you're going to find out that many of them require connection access licenses of their own.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/purchasing-windows-server-2019?u=76281980&t=239)** It's worth it to add them all up and work with an authorized Microsoft reseller to see what bundles might be available for your specific needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (10), [[Virtual Machines]] (2), [[Microsoft]] (2), [[Hardware]] (1)
> **CLI Commands:** make (4), find (2)
> **Warnings:** keep in mind (2), be careful (1)
> **UI Navigation:** scroll down (2)
> **Env Vars:** cal (1)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)

#### [Virtualization and dedicated hardware](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=0)** - [Instructor] I'd like to explore a little more deeply the benefits and concerns that you should address when considering the decision between virtualization and installing [[Windows Server]] 2019 on dedicated [[Hardware]].
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=14)** Virtual servers can help you more fully utilize robust server hardware and it can help you get the most out of your server licensing costs.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=24)** In fact, as you continue to read a list of Hyper-V features and options, you might start to wonder why people don't virtualize every Windows server every time.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=34)** Consider this scenario in a data center.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=37)** Let's say I have six servers that can be run as [[Virtual Machines]].
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=41)** And I have three physical boxes to run them.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=44)** This can be a resilient environment for these virtual servers, clustering the host machines and placing the virtual hard drive files on network storage can provide some nice fault tolerance.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=57)** If one of my physical server decides one night that it's going to resign, the others can immediately pick up the load and everything works great.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=66)** But there are some limitations to these benefits and you should take some time to consider whether or not a server should be virtualized and if these benefits are actually available to you.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=77)** In the scenario that I posed in the last video, we had only one physical server hosting two virtual machines, and this did help us out with the financial side of licensing.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=89)** It doesn't do anything for us in terms of [[Resiliency]], however.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=93)** One dead memory module means both of these servers are offline.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=97)** Maybe it's not such a great idea for this smaller network environment.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=102)** Also, you should consider which roles are recommended for virtualization.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=107)** Now Exchange Server, not exactly a server role, but it's an application that you might be considering.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=114)** And we do have one of our servers marked for the Exchange Server installation.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=119)** It's not recommended that you install Exchange Server on a virtual machine.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=123)** And if you choose to do so, there are requirements that can become so restrictive that the Exchange Server virtual machine is the only one on that host anyway.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=133)** [[Database Applications]], like Exchange, are designed to consume all available resources or in this case, 80%, so that they can run as efficiently as possible.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=144)** You can see how that might get in the way of some of the other things that might be needed on that machine.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=149)** In addition to applications like Exchange, some roles need to be considered as well.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=155)** I watched a colleague plan a network where they intended to install a domain controller in a virtual machine and then make its Hyper-V host a member of that same domain.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=167)** Think through the problem that he would have encountered had he tried to see this through.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=171)** Everything seemed to work just fine to a point.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=174)** The domain controller installed just fine with DNS and everything necessary to maintain a directory and look-up service.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=182)** Then the host machine started to join the domain.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=186)** It was able to find [[Active Directory]] and start the process of joining the domain, then comes the problem, the last step in joining a domain is rebooting the new member.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=197)** When the new member boots back up, it checks in with the domain controller for policies and for permissions to log in.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=204)** Rebooting the host machine to join the domain forced the domain controller offline until the Hyper-V host came back up.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=213)** At that point, the domain controller was not capable of being there in the most critical moment for the new member server.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=220)** Virtual machines are available for a lot of reasons.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=224)** I use Hyper-V in all of my test labs because I don't have an endless supply of hardware to dedicate to the testing process.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=232)** When there are new versions or roles that I am less familiar with, or things that I've read in blogs and articles that I'd like to try out for my environment, virtualization is a great way to test these things out.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=245)** In addition to the resiliency and the testing benefits, take advantage of the benefits of virtual machines when they apply to you.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/virtualization-and-dedicated-hardware?u=76281980&t=254)** Choose carefully whether to use virtual machines in your production environments or if dedicated hardware is the best solution for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (5), [[Hardware]] (4), [[Windows Server]] (2), [[Resiliency]] (2), [[Database Applications]] (1)
> **CLI Commands:** make (1), find (1)
> **Best Practices:** recommended (2)
> **Prerequisites:** install (2)
> **Env Vars:** dns (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Installing Windows Server 2019

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing from disk or an ISO file](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=0)** - [Instructor] Installing a [[Windows Server]] should be one of the easiest tasks you can take on.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=5)** It only becomes complicated if you neglected steps in the planning stages.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=10)** The installation itself asks very few questions, and they should all be things you worked out before you hit the power button.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=18)** I'm going to do this installation in a virtual machine on this Hyper-V Server.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=23)** Here in the Hyper-V Manager you can see that I have other test lab environments set up for projects I've been working on, and I have a new virtual machine that I created for this installation.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=35)** I'm going to go to the Settings menu to make sure everything is in order.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=39)** It has a hard drive and a DVD.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=42)** The DVD Drive has mounted the ISO file of the installation media.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=48)** It has eight gig of memory and enough processor cores to complete.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=52)** The only other thing that I need to check, and this is the same as if I were installing on dedicated [[Hardware]], I need to change the boot sequence so that we look to this optical drive first.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=65)** During the installation we're going to create a UEFI boot environment for later, so, fortunately, I don't have to remember to come back and manually fix that sequence.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=77)** So let me go ahead and apply that, close this dialog box, and then we can connect to and start this server.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=85)** It's been my experience when installing into virtual machine environments that it's a good idea to connect first, and then once you click Start, immediately click inside the window.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=97)** That allows you to press any key and have it spotted by the installation.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=102)** Let me move this up a little bit so it's taking up better screen space.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=107)** I'm not going to full screen this yet, because there's something we're going to need from these menus in just a moment.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=115)** As the Installation Wizard starts, you can see that the first thing that we're prompted for are pretty straightforward questions that we should know the answers to.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=124)** I'm currently in the United States, English in the language that I need, and I am using a US layout keyboard.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=131)** So I'm going to go ahead and move on to the next screen where once I click Install now, I'm going to be prompted for my license key.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=141)** This is where it's helpful for me to have the Hyper-V Machine Menu across the top.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=147)** The license key that I'm going to add is something that I can paste in place using the Clipboard option.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=155)** If I didn't have a key, I could select I don't have a product key and run a trial version of Windows Server.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=162)** But I don't recommend that for a production environment.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=165)** Make your selection, purchase your license, and then go ahead and install your server.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=171)** The key that I type in is going to make a difference on the next menu that we see.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=176)** I've used a key that is specific to Standard Edition Windows Server, and so those are the only options I have on the install.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=185)** The choice I do get to make here is whether or not to install the Desktop Experience.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=190)** This requires an additional four or five gig worth of storage space and it will have a bigger footprint in the amount of memory and processing power used to run the server, but it is a choice that doesn't cost me any more.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=204)** I'm going to choose that Desktop Experience for this installation.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=208)** But throughout the course, I'm going to bounce back and forth between servers that do or do not have that desktop.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=214)** It's important to make this choice correctly, because you don't get to change it later.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=218)** As we move forward, we find the License Agreement and then we will see evidence that this installation has not yet taken inventory of our machine.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=229)** It doesn't even know whether or not there is an installation of [[Windows]] to upgrade.
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=234)** In our case there isn't, so I'm going to choose Custom so that it will allow us to select a physical disk and a partition space to install.
>
> **[4:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=244)** We only have one drive installed so that's an easy choice.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=248)** I could make a smaller partition, but we've already planned that we wanted about 128 gig of space for Windows on this machine.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=257)** So I'm going to go ahead and move forward with that space.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=262)** If I were to change my mind later, this can be resized on the fly inside the Disk Manager, and we'll take a look at that later.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=270)** But this is good for now, so let me go ahead and click Next, and that's it, installation is off and running.
>
> **[4:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=278)** Now this could take 10 to 20 minutes, possibly longer depending on your hardware, but it's going to run entirely on its own.
>
> **[4:45](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=285)** It's done asking questions.
>
> **[4:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-from-disk-or-an-iso-file?u=76281980&t=287)** So I'm going to just let this run and when we come back, we'll talk about and go through the process of the initial configuration, the things that you need to do as soon as the installation is complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (3), [[Hardware]] (2), [[Windows]] (2)
> **CLI Commands:** make (6), find (1)
> **Prerequisites:** install (5), set up (1)
> **Env Vars:** dvd (2), iso (1), uefi (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Installing and upgrading](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=0)** - [Instructor] One of the questions asked during the installation process was whether to install a fresh, also known as a custom copy of [[Windows Server]] or to upgrade an existing installation of Windows Server?
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=13)** According to [[Microsoft]], you can upgrade to Windows Server 2019 from Windows Server 2016, or from Windows Server 2012 R2 but it has to be the same edition.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=27)** And what I mean by that is you can upgrade from Standard Edition of Windows Server 2016 to Standard Edition of 2019.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=36)** Similarly, you can upgrade Datacenter to Datacenter.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=39)** You can't simply upgrade or downgrade between Standard and Enterprise Edition because they support a different range of roles, features, and services.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=49)** But this concept of upgrading servers is not well-received among IT professionals and for a number of good reasons.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=57)** There is risk in performing this type of in-place upgrade.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=61)** There are some major differences in how Windows Server 2019 operates in comparison to let's say Windows Server 2012 R2.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=71)** New configuration settings and similar roles are just the beginning.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=76)** Another primary concern is the amount of accumulated junk that can be unwittingly passed on to new servers.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=85)** Given these concerns, the obvious question is why then does Microsoft promote or even allow this option?
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=93)** One of the answers is, they kind of had to.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=97)** When you consider the new semiannual releases of Windows Server, you have to realize that not everyone can bring in a whole new set of servers every six months.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=107)** In-place upgrades had to be made better.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=110)** And with Windows Server 2019, you can successfully perform an in-place upgrade on servers that are running some of the more simple and traditional server roles.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=121)** One example of a role that can be successfully upgraded is a file server.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=126)** Roles that can't be upgraded include things like [[Active Directory]] Domain Services.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=133)** You can't simply upgrade a [[Windows]] 2012 R2 domain controller to Windows Server 2019.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=140)** There are differences that need to be resolved.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=142)** Other roles that will not survive an in-place upgrade are the ones that use some type of database to store information on the individual server like Certificate Services or roles that cluster configuration data.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=157)** For example, Active Directory Federation Services.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=160)** And don't forget the servers that are running additional applications.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=164)** Maybe a Microsoft application like Exchange Server or other third-party [[Microsoft Products|products]] that rely on the libraries and roles and features of a specific version of server.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=175)** The documentation has to be consulted before you attempt an in-place upgrade of a server running these types of environments.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=183)** The alternative to an in-place upgrade is to install a fresh copy of Windows Server on a separate [[Hardware]] or in a new virtual machine.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=193)** Then you can pack up the configuration from the old server, install the role by the same name on your new 2019 server and import that configuration.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=204)** We'll take a look at this migration process later on in the course.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=207)** But as a general rule, custom insolations are your best choice.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=212)** In-place upgrades are a priority for Microsoft because of the fast pace of new changes.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=217)** So there may be times where it becomes your best choice.
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=221)** But just make sure that as you do this, you backup the server that you're about to upgrade, including system state, also Snapshot Active Directory before beginning the upgrade.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-and-upgrading?u=76281980&t=231)** And pay attention to any warnings or messages you may get along the way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (12), [[Microsoft]] (4), [[Active Directory]] (3), [[Windows]] (1), [[Microsoft Products|Products]] (1)
> **Prerequisites:** install (3)
> **Definitions:** known as (1), is a  (1)
> **Best Practices:** don't forget (1), general rule (1)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using Server Manager](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=0)** - [Instructor] In previous videos, we've talked about planning the installation of our [[Windows]] 2019 Server and we've gone through the process of installing the operating system in a virtual machine, along with discussing custom installations versus upgrades.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=16)** Once a custom installation is complete, there are three things that you need to do right away.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=22)** The first one, you're prompted for.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=24)** Before you're able to do anything else, you will need to assign an administrator password and there are requirements for this.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=31)** It has to be at least eight characters and the password complexity rules are turned on.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=36)** So, you'll need to assign a password that has uppercase and lowercase letters, as well as numbers and punctuation.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=44)** Let me go ahead and assign this to this machine.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=47)** Once we go ahead and set this password, [[Windows Server]] will finalize your settings and boot up to a desktop.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=56)** I'm going to go ahead and change my settings so that I'm always full screen.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=60)** So, let me go ahead and make that change now.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=63)** Now I can go ahead and add the password that I just created and it will create my User Profile and log me into a desktop.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=71)** You'll see that the first application that opens is the Windows Server Manager.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=77)** In the desktop experience, this loads by default and it is one of the quicker and more convenient ways to make some of the important changes that you have to do right of the bat.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=87)** In fact, right up here at the top it says that task number one is configure this local server.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=93)** You can find the same settings by clicking on step one here or by selecting Local Server off to the left.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=101)** The two things that we need to change here are our computer name and the IP address of our machine.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=108)** We're going to assign this computer an identity and an address.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=112)** I'm going to do the computer name last because that will require a reboot.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=118)** Assigning an IP address can be done without rebooting the server, so let's start there.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=123)** If I click on this link, it will open up the Legacy network configuration options.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=129)** I can right click on my network interface and open Properties to see the same dialog box that's been around since Windows 95.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=138)** And in here, if I select IP Version 4 and go to the properties, I can go ahead and assign the IP address that I want to use for this machine.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=149)** Along with the subnet mask and default gateway that are appropriate for this network and what I want to use as a DNS server.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=158)** This server is going to become my domain controller and DNS server.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=162)** So right away, I'm going to go ahead and assign my own IP address as the DNS server and go ahead and Accept and Close these changes.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=173)** With this network change done, we can now go ahead and rename the computer.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=178)** If I wanted to see this information update with the data I just added, I could click this button here to reload information but I'm about to reassign the name of the computer and reboot the server generally.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=190)** So, I'm not going to take the time to force that.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=193)** As you can see, it does catch up on its own anyway.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=196)** Let me go to the computer name and this also brings up a Legacy looking tool where I can click on the Change button and go ahead and type in the computer name that I want to assign to this machine.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=210)** We'll call this dc01 because it will be the first domain controller in the domain that we're going to create.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=216)** I can say Ok to that and it will remind me that this won't apply until the computer is rebooted.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=224)** And then as soon as I attempt to Close this out, it will prompt me to go ahead and do that restart now.
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=230)** These are the most important tasks for you to do right away after a new installation.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=236)** Things like setting your wallpaper or task bar preferences and possibly even setting your time zone, are secondary to getting this identifying information done quickly.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/using-server-manager?u=76281980&t=246)** I mentioned that the desktop experience is not necessary to run a server, so in the next segment we'll take a look at how to do these same steps using [[Powershell]] on a machine installed without the desktop experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Windows Server]] (2), [[Powershell]] (1)
> **UI Navigation:** click on (3), go to (2)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** dns (3)
> **Prerequisites:** you'll need (1), configure (1)
> **Versions:** version 4 (1)
> **Cross-References:** in the next (1)
> **Tools:** powershell (1)

#### [Initial configuration in PowerShell](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=0)** - [Instructor] What we have here on the screen now, is a new server that's been installed with [[Windows Server]] 2019 without the desktop experience.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=9)** The look and feel will be different because we'll have to know commands to navigate around, but the tasks are the same, so let's go through the process.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=18)** This server was just recently installed, so we have the same first task of assigning the administrator password.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=25)** Clicking around, really doesn't do anything for me.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=28)** So I'm going to have to do all of this navigation from the keyboard, so I'll use the arrow keys to make sure I know what I've selected, and hit Enter on Okay, and I'll go ahead and type in a complex password just as was required on the previous server, and I can use the Tab key to navigate between the two, when I go ahead and press Enter the administrator account password will be set and I will be prompted to log in.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=55)** So there it has been changed, Okay, Administrator is welcome.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=62)** And you can see that the default shell is not Power Shell but rather the traditional command prompt.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=69)** Maybe you can't see it, that font's a little bit small.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=71)** Let me go ahead and increase the size here a little bit, to make this easier to see.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=81)** That should be a bit better.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=82)** The work that we need to do is going to be done in Power Shell, and we can launch that by simply typing [[Powershell]] at the command prompt and without even opening a new window, it will load a session of Power Shell right here for us to use.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=98)** You can always confirm you are in Power Shell by looking at the beginning of the prompt, that PS means we are ready to operate in Power Shell.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=107)** Now configuring TCP/IP can be done in three steps.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=110)** The first, is to find out the index number of the network card that we want to configure.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=117)** And we can do that using the commandlet Get-NetAdaptor.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=122)** And our results for this are pretty simple, because we only have one adaptor installed in this virtual machine.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=129)** But the index here is 6, we're going to need that later on.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=133)** The commandlet to assign an IP address is New-NetIPAddress.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=139)** The commandlets in Power Shell are pretty easy to get the hang of once you start using them.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=143)** You have a simple verb and noun construct.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=147)** What is it that you want to do, and what object are you going to act on.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=151)** We want to create a New Network IP Address.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=155)** The first parameter that we need to specify is the interface index.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=160)** And we can see from up above that that is 6.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=164)** The next parameter that we need to specify is the IP address that we want to assign.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=169)** So IP address is, in our case it's 192.168.0.231.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=179)** We need to go ahead and set the default mask, in here that looks like a prefix length, or how many bits of the IP address are the network ID.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=190)** In our case it's 24 bits, which is the same as 255.255.255.0, and we should go ahead and specify our default gateway.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=202)** And that is going to be 192.168.0.1 for my network.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=208)** You need to make sure that you're using the proper prefix length and default gateway for your network environment.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=215)** Now I can go ahead and hit Enter on that, and it will assign the IP configuration to this machine.
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=221)** Okay, it looks like that's done.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=224)** Let me go ahead and clear the screen so we can get a little more real estate to work with here.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=229)** The third step that we need to do, to have our network configuration done, and the commandlet to assign DNS configuration is Set-DnsClientServerAddress.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=241)** We are the client we need to specify the DNS server address.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=246)** And the two parameters that we need to specify are once again, the InterfaceIndex which you will recall in my instance was 6 and we need to specify the server address, which in my network the DNS server is located at 192.168.0.230.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=267)** And once I hit Enter on that, the network has now been configured.
>
> **[4:31](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=271)** The last task is renaming the computer.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=275)** To do that, there's one commandlet that you should run first, and that is just type Hostname and see what name has been randomly assigned to your computer during installation.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=286)** I'm going to select it, and then hit CTRL C to copy.
>
> **[4:50](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=290)** Because I'm going to have to type that in exactly here in a minute.
>
> **[4:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=294)** The commandlet to rename the computer is Rename-Computer.
>
> **[5:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=300)** And first I need to specify which computer I want to rename.
>
> **[5:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/initial-configuration-in-powershell?u=76281980&t=304)** The name of the computer that I want to change, now I'm going to hit CTRL V and paste in that randomly assigned computer name that we had previously, and then another parameter, I'm going to assign it a NewName and I'm going to call it file01, and I'm given the information once again, just as in the desktop experience, that these changes will take effect after the computer has rebooted, so I'm going to go ahead and run the command to do that now, shutdown -r, R for reboot, that will bring this core installation of Windows Server 2019 back up with a name, with an administrator password and with a network configuration that will work for our environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (2), [[Powershell]] (1)
> **Env Vars:** dns (3), ctrl (2), tcp (1)
> **CLI Commands:** make (3), find (1)
> **Versions:** 192.168.0 (3), 255.255.255 (1)
> **Tools:** command prompt (2), powershell (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Configuring multiple interfaces per network interface controller (NIC)](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=0)** - In most cases, assigning one IP Address to one network interface is all you need.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=6)** But there are situations, however, that require something else.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=10)** Sometimes you may need one NIC to act as though it were several.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=14)** Other times, you may want multiple NICs to team up and act as one.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=18)** Consider for example, a web server.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=21)** A website may not create a lot of traffic and may not put a huge drain on a physical server, so it's entirely possible that you'll want to have several websites hosted by a single IAS box.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=33)** But each site needs to be identified separately.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=37)** It's not uncommon to need a separate IP Address for each different website.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=42)** The web server in [[Windows]] allows you to pick an IP Address assigned to the server, not a physical NIC.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=49)** So it can be done easily if you have multiple IP Addresses assigned.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=54)** And that can be done either using the server manager or [[Powershell]].
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=58)** Here we are on a server that's been installed and named to be a web server.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=63)** It has only one physical network card.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=66)** It's currently been assigned an IP Address of 192.168.0.240.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=72)** The desktop experience way to add an IP Address is simply to open the configuration of that card by clicking on it in the server manager, and then right-click on the interface and let's view the properties dialog box.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=88)** From here, if I look at the properties of IP Version 4, this box has a button near the bottom that says, "Advance."
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=97)** when I click on advance, I can add an additional IP Address here.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=102)** Let's say we're going to use the next one in sequence.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=106)** All I need to add is the address and the mask.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=109)** We don't need another gateway, it is one physical card and that's the only gateway that we need to specify.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=115)** And I could continue adding as many IP Addresses are useful to me here.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=120)** Once I click, "okay," and once again, at this box, and the network settings, I will have a second IP Address assigned to that physical interface.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=132)** I can refresh the server manager and when that finishes checking the machine out, it will tell us we have multiple IP V4 Addresses.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=140)** Adding an address in PowerShell is very similar to creating the initial configuration.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=146)** Let me go ahead and right-click on the start menu and choose Windows PowerShell in administrative mode.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=154)** I'll go ahead and full-screen this.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=156)** If I want to add a third IP Address to this machine, I can go ahead and look up the interface index as we did in a previous video by running Get-NetAdapter, and on this machine we can see that the physical network adapter, or the Hyper-V Adapter for this virtual machine, has the index number of five, then I can use the same command that we used for the initial configuration, I can run New-NetIPAddress, I need to specify that the interface index is five.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=191)** Specify the IP Address that I want to add.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=194)** Let's go ahead and add the next one in sequence, 192.168.0.242, and finally I need to specify the subnet mask by setting the prefix length, which is 24 for the traditional Class C mask.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=214)** And you can see that this has given me a report of the configuration.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=218)** Let's scroll up a little bit and confirm what we have.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=222)** We have this Address of 242 that has now been assigned.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=228)** Let's take a look and see all of the addresses.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=232)** I'll use CLS to clear the screen, and good old standby ipconfig will give us a list of the addresses that are assigned and you can see they're all there.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=242)** 240, 241, and 242, each with their respective subnet mask, and one default gateway for the whole mix.
>
> **[4:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-multiple-interfaces-per-network-interface-controller-nic?u=76281980&t=252)** Having these multiple interfaces will allow us to host multiple websites, each with their own IP Address and still take advantage of the [[Hardware]] capabilities of this server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (3), [[Windows]] (2), [[Hardware]] (1)
> **UI Navigation:** right-click (2), open the (1), click on (1), scroll up (1)
> **Env Vars:** nic (2), ias (1), cls (1)
> **Versions:** 192.168.0 (2), version 4 (1)
> **Tools:** powershell (3)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### [Understanding NIC teaming](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=0)** - [Instructor] Back in the days of dial up connections to the internet, there was a technology called shotgunning that allowed users to connect multiple modems to their multiple phone lines to increase their connection speeds.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=13)** It didn't really make any single download run any faster, but it did allow users to do more than one thing at a time.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=22)** One download could run over modem one, while another download or web browsing session could occur over modem two.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=29)** Consider networks today, where an additional connection really just means running another cable to a switch.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=35)** This concept can be put to really good use.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=38)** NIC teaming is a configuration option in [[Windows Server]] 2019.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=44)** It's been with us for a few versions of server and it allows you to tie multiple interfaces together under a single IP address to increase the number of concurrent data steams to a single server or single endpoint.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=59)** Consider where this would be useful.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=62)** File servers are designed to be accessed by several people at any one time.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=67)** If they each had their own separate physical pipe, more files could be accessed concurrently.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=73)** You don't want a separate IP address for each, that would be a nightmare to keep on top of.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=78)** You just want to be able to serve up more files at a time.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=81)** The teaming mode designed to fit this need is referred to as address hashing.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=87)** What it does is it allows all inbound requests to a single IP address, to go to one specific network interface, one specific MAC address that is known to the switch.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=101)** Then, downloads from the server to the work stations can be distributed among the other available network cards, allowing you to distribute more information more quickly to other nodes.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=113)** There's also fault tolerance benefits to having multiple interfaces on a single IP address.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=119)** If one card dies, your users don't even know about it.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=124)** Business will continue as normal, albeit a little slower, until you replace the card.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=129)** There's another mode of teaming that was created specifically for hyper-V environments.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=135)** You may want to use a single IP address for the host server for accessing [[Virtual Machines]], but each virtual machine can use quite a bit of traffic.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=145)** Hyper-V mode allows for multiple physical interfaces to share a single IP address for management purposes and to let your VMs appear to be hitting the network through a single interface.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=158)** When in reality, each one is assigned a separate physical NIC by the Windows server.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=165)** We have address hashing for lots of small streams of data and hyper-V mode for smaller numbers of high volume streams of data, and for instances where you may need a little bit of bulk out of the same box, there is a dynamic load balancing mode.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=183)** This is often a default choice.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=185)** In this mode, [[Windows]] can keep an eye on the traffic and switch back and forth to use the more appropriate mode.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/understanding-nic-teaming?u=76281980&t=193)** In the next video, we're going to take a look at how to set this up and we're also going to talk about some of the [[Hardware]] requirements that you may want to consider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (2), [[Virtual Machines]] (1), [[Windows]] (1), [[Hardware]] (1)
> **Env Vars:** nic (2), mac (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Configuring NIC teaming](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=0)** - [Instructor] NIC Teams also known as network, load balancing and failover teams are fairly easily created in [[Powershell]].
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=9)** Here we are back on the file server that we've looked at previously in this course.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=14)** But we've added a couple of network adapters so that we can create a team to better balance the load of sharing files to our users.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=22)** To complete this process, we need to be in Powershell.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=25)** You can see that we are by the prompt beginning with PS.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=29)** We need to be connected as an administrator, which might be indicated by your path, but more importantly look to the title bar, and make sure that it says you've entered administrative access mode.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=42)** Third, we're going to need to get information about our network interfaces.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=47)** And for that, we're going to use a commandlet that we've already seen a few times.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=52)** For those relatively new to Powershell, you'll notice that I'm using something called Pascal Case.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=57)** Where when multiple words are pushed together for a single expression, you still capitalize the first letter of each individual [[Microsoft Word|word]].
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=66)** That's useful when trying to troubleshoot or look for typos in a commandlet that you may have entered that didn't work.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=72)** Here you can see that we have Eth0, the network adapter with index 6, one that we've set-up in an earlier video of the course.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=81)** We also have two other adapters, Eth1 and Eth2.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=85)** I've renamed them with these shorter names to make them easier to type as we run this next commandlet.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=91)** The expression that we're going to use to create a new team is New-NetLBfoTeam for load balancing failover.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=102)** And the parameters that we need to specify start with naming our new team.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=107)** And I'm going to put the value in quotation marks just as a best practice.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=112)** Quotation marks are only required if you're going to add spaces or punctuation or other things that Powershell might misinterpret as another part of the expression.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=122)** Even though I'm not using spaces, I'm going to be consistent with the practice.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=127)** Once I've named it FileServerTeam, I need to specify the team members, or the interfaces that will be part of this new load balancing team.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=137)** And I'm going to enter each name in quotation marks separated by commas.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=145)** Eth0, Eth1, and Eth2, so that will place all three interfaces in one network team.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=154)** The next parameter that we need to specify is the load balancing algorithm.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=159)** And this is where we could specify dynamic or hyper v.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=163)** But since we're inside a virtual machine, neither of those options really make sense for us.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=168)** We're not going to be nesting [[Virtual Machines]] inside of virtual machines, so hyper v mode of load balancing doesn't make sense for us.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=177)** Since we're never going to use that side of the equation, dynamically balancing that with other types of address hashing is similarly not going to be an environment that we're going to set-up.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=189)** Since we're in a virtual machine and running a file server, we need some type of address hashing.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=195)** [[Microsoft]] has a number of options available for that.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=199)** You could use transport ports, where the source and destination TCP ports will be used to identify the streams and direct them through the different adapters, Or you could identify the traffic at slightly lower levels of the OSI model.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=218)** The source and destination IP addresses can be used to identify these streams and sort them through the different adapters, or you could take it all the way down to the Mac addresses level.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=231)** This will allow your [[Windows Server]] to keep track of the Mac addresses that it knows to identify streams of information going back and forth between other servers.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=242)** The last parameter that we need to specify is the teaming mode.
>
> **[4:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=247)** This has to do with how you interact with physical switches on the network.
>
> **[4:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=252)** If you had a dedicated [[Hardware]] Windows server connected to smart switches, then you could go and program or hard code the Mac addresses of your NIC teams into your switch.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=266)** And then you could tell [[Windows]] to pay attention to the switch it's going to take care of that distribution for you or if you have smarter switches that are capable of supporting the 802.1AX protocol, or link aggregation control protocol, you could allow the switch to dynamically manage how that traffic is broken up and distributed.
>
> **[4:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=289)** In our case, because we're having Windows manage the whole thing, we're going to use a teaming mode known as switch independent.
>
> **[4:57](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=297)** In this mode, Windows takes care of it and doesn't rely on anything from the switches.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=303)** Incidentally, this is the only option that will allow you to connect the adapters to different switches, which you need to be careful of because you're sharing an IP address.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=312)** So you need to be careful to put them on the same subnet.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=315)** However, if your team is more about fault tolerance than load balancing, that may be an important option to you.
>
> **[5:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=322)** Maybe your server needs are best met by teaming up adapters to share one virtual interface to the world.
>
> **[5:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=329)** Or maybe you need to assign multiple configurations to a single adapter.
>
> **[5:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=333)** Maybe you're better off with a simple one-to-one relationship.
>
> **[5:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-nic-teaming?u=76281980&t=337)** Pick the right configuration for you needs and know that all of the options are there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (4), [[Windows]] (3), [[Virtual Machines]] (2), [[Windows Server]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** nic (2), tcp (1), osi (1)
> **Tools:** powershell (4)
> **Warnings:** be careful (2), troubleshoot (1)
> **Definitions:** known as (2)
> **UI Navigation:** switch to (1)
> **Best Practices:** best practice (1)


### 3. Configuring Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating different volume types](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=0)** - [Instructor] During the installation of [[Windows Server]] 2019, you didn't get a lot of choices regarding the configuration of local storage.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=8)** For that reason, it's a good idea to go back and set it up the way you want before you begin installing roles and features.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=16)** You may already be familiar with the disc management tool in the desktop experience.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=21)** It's been with us for quite awhile.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=23)** You can easily get to it by right clicking on the Start button, and selecting Disc Management.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=29)** As we take a look at this tool, the first thing we notice is that we do have disc zero.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=35)** This is the 127-Gig drive that was used when we installed Windows Server, and we can see that it was divided into three partitions, including the bulk of the space assigned to the operating system.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=49)** We also have a second hard drive that hasn't been configured or set up yet at all.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=54)** It's just there.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=56)** If you were to scroll through this list, you would also see any optical drives or even thumb drives or storage cards that may be installed in this machine.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=65)** But some of the more detailed information can be found in the view above.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=69)** This is where you see the partitions or the volumes that have been created.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=74)** If we were to decide that we needed to change the size of one of these partitions or volumes, we could make that change easily from right here.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=82)** Let's say that rather than 126-Gig, we only wanted to set aside 100 Gig for our operating system partition.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=91)** Making that change is as easy as right clicking and choosing Shrink Volume.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=97)** We could shrink or grow the volume depending on available space, but since the drive is maxed out, shrink is our only option.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=104)** Here we can specify how much space we want to trim out of that partition.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=110)** This isn't where we specify what the resulting size will be.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=114)** This is how much we want to take off.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=116)** So if I said I wanted to take off 60 Gig, then we would have 69 left, so if I want this to be 100 Gig in size, I would be looking at taking off approximately 26 Gig worth of space, and that's close enough for demonstration purposes, so I'm going to go ahead and select Shrink, and this will trim off a portion of the partition and allow us to reclaim that space for creating other volumes.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=145)** Something else you might have noticed when I right clicked on that was the option to add a mirror.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=151)** That's not really an available option to us at this time.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=154)** If I were to try to select Add Mirror, and even choose the empty disc to say go ahead and replicate an identical partition here, when I say Add Mirror, I'm going to get an error message saying that we're using Basic Disc, and that that doesn't work.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=169)** Let me go ahead and say no at this point.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=171)** You can also spot that right here.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=173)** Disc zero is basic.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=175)** Also in the volume informations, all of these partitions are basic volumes.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=180)** Converting from basic to dynamic disc is as easy as right clicking on the disc and choosing Convert to Dynamic Disc, and even if you've only selected one, you have the option of converting all of them at one time.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=195)** It will verify that this is something that you actually want to do, and I'm going to go ahead and say yes, I do want to convert these, and it reminds us that if we have dual boot environments managed by a boot manager that's not [[Windows]], this could affect our ability to continue with that configuration.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=213)** That's not a scenario that I have and I'm concerned about, so I'm going to go ahead and say yes, I would like to convert these discs to dynamic discs.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=222)** You'll notice right away that we now have volumes instead of discs, and these color stripes have changed.
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=230)** Gold is a simple volume.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=233)** Now if I wanted to make a mirror of the C drive, noting that this disc, disc zero, and the destination are both dynamic, I can now right click on volume C, choose Add Mirror, now if I choose a destination to hold the replica and add it, it will go ahead and create a space of exactly the same size, and it will begin synchronizing the data between these two volumes.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=260)** This is a nice fault tolerance to have, especially if you don't have [[Hardware]] arrays available for your machines.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=266)** Now that we're on dynamic discs, there are other things that are available to us.
>
> **[4:31](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=271)** If I was to create a new volume, it could be a simple volume, it could be one that spans across multiple discs, a mirror or a RAID 0, a striped volume.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=283)** If I had at least three drives, I could even do RAID 5.
>
> **[4:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=287)** All of these open up to me because I converted to dynamic disc.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=292)** This resynchronization could take awhile, so I'm going to allow that to go ahead and just run.
>
> **[4:57](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-different-volume-types?u=76281980&t=297)** Once you've created whatever volumes you need, then you're ready to start applying file systems with their different properties, and we'll take a look at those in just a moment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (2), [[Windows]] (1), [[Hardware]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** raid (2)
> **Definitions:** is a  (2)
> **Prerequisites:** before you begin (1), set up (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Supported file systems](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=0)** - [Instructor] When you create a new volume, any type of volume, one of the things you're prompted to do is format that volume.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=7)** And you've given some choices regarding the file system.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=11)** This is an important choice to make.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=13)** The decisions that you make here will affect how that volume can be used and unlike times gone by, there's not a simple conversion to take you from one to the other.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=24)** So take some time to figure out which one you need.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=28)** One of the oldest available options is the file allocation table, FAT or FAT 32 is the current version that you see in [[Windows Server]] 2019.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=37)** One of the long running benefits of the FAT file system is that it can be easily read locally by pretty much any platform.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=46)** I'm not entirely certain that that's important because I don't which of my server files I want to be read by something else locally at that box.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=56)** But it is quick enough as long as the drive remains unfragmented but it was really limited in terms of maximum size of files and volumes.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=66)** Not to mention the absence of any real security features.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=70)** Any files stored on a FAT volume are only protected by what share permissions you can assign to them.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=78)** NTFS was a far better choice on pretty much every front.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=83)** NTFS did allow you to create much larger files and much larger volumes.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=89)** And continues to support larger and larger volumes and maximum file sizes.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=94)** One of the key benefits for NTFS was you could assign file-level security at the local machine.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=101)** And a lot more granular than anything you could do with a share.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=106)** You can specify more than just read, change or lock out entirely.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=110)** You can now say things like you can add new files to this folder but you can't delete files and so forth.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=119)** NTFS, in addition to adding better performance in these large environments over FAT, also gave you a lot of manageability.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=127)** You could specify quotas, you could do a lot of different things with the hard drive to manage how it's used to make sure that it stays the right environment for your system.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=137)** There's a new file system that was introduced in Windows server 2016 that you ought to consider for any volume except the one that holds [[Windows]].
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=147)** Leave that one be because it's never a good idea to mess with that volume once it's created and set up.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=152)** The Resilient File System doesn't have all of the features of NTFS but it's getting there very quickly as it evolves.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=160)** [[Microsoft]] is finding ways to include the important features while reducing some of the overhead.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=167)** One of the features that the Resilient File System adds is it blocks out space in every volume to provide some [[Resiliency]], some fault tolerance.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=177)** The ability to remain active even if difficulties or problems are encountered with the drive itself.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=183)** When we remove some of the overhead of NTFS, we gain performance benefits.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=188)** We have a faster running hard drive because it's not trying to do all of the things that NTFS does.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=196)** It's also more efficient now that data deduplication has been added.
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=201)** Data deduplication is a big deal.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=204)** What it does is it finds duplicate blocks within a volume, meaning blocks of data, entire files or just portions of files.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=213)** Or pieces within a database that are redundant and when it finds those duplicate areas it removes the redundancy and replaces it with pointers.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=224)** Saving a lot of space on the hard drive but quickly pointing to the exact same information so that it can be retrieved without any delays.
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=234)** When you're hosting a database application like Exchange Server you don't want the file system, the server operating system getting too involved with how that space is used.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=245)** The application takes care of that itself.
>
> **[4:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=247)** REFS is perfect for the volume that we'll hold in exchange mailbox database and many other types of applications.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=255)** Back to the creation of the volume.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=257)** If you don't need the [[User Management]] that NTFS provides, consider using REFS.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=265)** If you do need that granular level of management of how much a user is able to store and how much you can audit how it's being used in addition to the file level security, go ahead and stick with NTFS.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=277)** You may find that that has exactly the features that you need.
>
> **[4:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/supported-file-systems?u=76281980&t=281)** Most important, make sure that you know what your needs are so that you can select the correct file system to take care of your environment and your users and your network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (2), [[Windows]] (1), [[Microsoft]] (1), [[Resiliency]] (1), [[User Management]] (1)
> **Env Vars:** ntfs (9), fat (5), refs (2)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Improvements to Storage Spaces Direct](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=0)** - [Instructor] Sometimes storage needs can be satisfied by the things that you install inside the local box, but other times you need something bigger.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=9)** Sometimes you need the third-party solutions from SmartStack or HP Enterprise or whomever.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=14)** There are also some solutions that are baked right into [[Windows Server]] 2019 that you might want to consider as you look at storage needs beyond what fits inside any one case.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=27)** Storage Spaces Direct is the first one that I want to discuss here.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=32)** You're also going to see this abbreviated as S2D.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=35)** This storage solution uses clustering to make hard drives high performance, faster, and more resilient.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=44)** Just to make sure we're on the same page, resilient means it can survive a hit or two.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=49)** Storage Spaces Direct was introduced in the Datacenter edition of 2016 and it works like this.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=56)** You start with multiple servers and they might have different types of storage.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=62)** S2D supports hard drives that spin, solid-state drives, and even storage on non-volatile RAM.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=69)** And once you cluster these servers, you can enable Storage Spaces Direct and it will configure all of the storage solutions to behave as if they were one storage pool with replication between the servers and between the several different technologies, in this way making everything as fast as it can be no matter which server it hits and resilient as well.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=93)** This one big storage pool is then divided into volumes.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=97)** You can create your volumes in the pool rather than on individual disks and then they'll use a special file system, the cluster shared volume file system, which will be layered with REFS or NTFS to automatically distribute the data across the various drives and servers as needed.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=118)** And here's another handy feature.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=120)** If you add a server to the cluster, Storage Spaces Direct will automatically absorb the drives of that new server over time and redistributes the data across the growing cluster.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=133)** I mentioned that this feature was available on both Windows Server 2016 and 2019.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=139)** It is only available on the Datacenter edition of these servers.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=144)** [[Microsoft]] recognized the expanding [[Hardware]] capacity and the growing storage needs and has improved the maximums for Storage Spaces Direct.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=153)** You still cap out at a maximum of 16 servers and 416 drives in a cluster, but the servers and the drives are getting bigger.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=163)** The new maximum storage pool for a cluster quadrupled to four petabytes with up to 400 terabytes per server.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=172)** You can create 64 terabyte volumes which is double the old capacity.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=178)** And you may look at some of these numbers at this point and say to yourself, who needs that kind of storage capacity in a single volume?
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=186)** Keep in mind that it was Bill Gates that was once quoted as questioning who would ever need more than 64 kilobytes of RAM.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=194)** Needs grow and evolve.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=196)** Storage Spaces Direct, as many other storage solutions that Microsoft has provided, are designed looking forward to what the next level of needs are.
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/improvements-to-storage-spaces-direct?u=76281980&t=206)** They also require membership in an [[Active Directory]] Domain so consider that as you deploy these services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (2), [[Microsoft]] (2), [[Hardware]] (1), [[Active Directory]] (1)
> **Env Vars:** s2d (2), ram (2), refs (1), ntfs (1)
> **CLI Commands:** make (2)
> **Prerequisites:** install (1), configure (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Introducing Storage Migration Service](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=0)** - [Instructor] A lot of this course so far has focused on the creation of a new [[Windows]] network.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=6)** I want to shift things for a little bit to talk about one of the features available to help you migrate from an older version of Windows Servers, and I'm going to focus on one of the oldest uses of a [[Windows Server]], that being sharing files.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=21)** We create shares for all kinds of user and company data.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=25)** We plan them out very carefully.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=27)** We work out their security needs, and we create [[Active Directory]] groups and assign permissions so that everybody can access what they need and can be blocked from what they don't.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=38)** And then, we configure all of our user machines so that they point to network paths or even drive mappings.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=45)** We might even go so far as to manage how much of a drive a user is able to take up with their data, audit who's using it and how and when.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=54)** There's a lot of effort and time that goes into creating a file server that can effectively serve your network, so it's understandable, after all that work, that migrating user files from one server to another is not something that we look forward to doing.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=72)** Copying the files is easy enough, but trying to transfer all of the [[Representational State Transfer (REST)|rest]] of the settings, that's another issue altogether.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=80)** Storage Migration Service was introduced by [[Microsoft]] in Windows Server 2019, and it not only transfers the files, but it will take all of the configuration and all of the settings of those files, and the server that hosts them, and send those over to a new machine.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=100)** And it will do it in a way that users don't have to know that anything changed.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=105)** Like Storage Spaces Direct or other features and roles, SMS does require the presence of an Active Directory domain.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=114)** Unlike Storage Spaces Direct, SMS will work on Standard edition servers.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=121)** You may need more sophisticated editions of Windows Server for clustering in data center environments, but anyone with a file server will appreciate the ability to migrate from one to another.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=133)** The pieces of the migration are these.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=135)** First, you need to have a source server.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=138)** The file server that's been taking care of your users and their information needs to be at least Windows Server 2003 for this to work.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=146)** Second, you need a new Windows 2019 Server not configured with a lot of other roles and services because it's about to take on the role of your existing Windows File Server.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=159)** This target machine can be a physical machine, it can be a virtual machine, it can even be a virtual machine in an [[Microsoft Azure|Azure]] space, which means this could be your path to moving portions of your network into the cloud.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=171)** Third, you need a Windows 2019 Server to orchestrate the migration.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=176)** That can be the destination, it can be your target server that's going to be the new file server, but in larger migrations, you may want to specify a separate Windows 2019 box to manage the entire process.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=190)** There's a feature that you need to install on the target server and on the orchestrator server.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=197)** The Storage Migration Service is a feature that can easily be added to any Windows Server that's a member of an Active Directory domain.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=205)** You don't need to install anything on your old source file server, especially considering how far back Microsoft is supporting this migration from.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=215)** With those two or three servers in place and the SMS feature installed on your target and orchestrator servers, the process is three steps, and it is facilitated by a new feature in Microsoft's Windows Admin Center, formally Project Honolulu.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=233)** It's going to initiate the process by inventorying your old file server.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=238)** It will identify what's there, exactly what the configurations are, what exists in Active Directory that references this.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=245)** It will figure out everything about how that file server is configured, and then it will begin the transfer to a new file server.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=254)** The files copy, yes, but then it replicates all of the configuration and information.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=260)** And as a final third step, it's going to do a cutover, which will make your new box represent itself as if it were the old file server.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=270)** Meaning, all user shortcuts, all mapped drives and network applications that point to the old share don't have to be changed.
>
> **[4:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=278)** You don't have to reconfigure your whole network.
>
> **[4:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/introducing-storage-migration-service?u=76281980&t=281)** You will have successfully migrated the entire file sharing service of this box onto a new machine, enabling you to now decommission that old server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (7), [[Windows Server]] (5), [[Active Directory]] (4), [[Microsoft]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Prerequisites:** install (2), configure (1), you need to have (1)
> **Env Vars:** sms (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Managing Server Roles and Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Planning role configuration](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=0)** - [Instructor] It is now time to come back to where this course began.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=4)** Before planning hard drive configuration, before running the install, before you even purchased the server, the first task was to decide what the server was for.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=15)** Now that your server is installed and done with all of the initial configuration, it's time to start installing those roles.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=22)** Some roles install without asking any questions.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=25)** They're pretty straightforward.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=27)** Installing a DNS server or a web server will either configure itself or it will allow you to do any configuration later on.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=36)** They won't ask you anything during or immediately following the installation.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=41)** Other roles and features will require some selections to be made during the installation and others will require configuration immediately after the installation is done.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=52)** Take [[Active Directory]] Domain Services for example.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=56)** We decided that our first server would be a domain controller.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=59)** We're going to need to install Active Directory Domain Services.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=64)** Other roles like this would be the Certificate Authority and there are many more.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=68)** If you have to install a role that you've never used before, take some time to install it on a practice server.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=74)** Maybe a virtual machine that you can delete as soon as you're done.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=78)** As you go through your practice installation, you're going to learn two things.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=82)** First, and the most obvious, you're going to learn what questions you'll be asked.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=87)** When you configure a domain controller, you're going to be asked whether you're going to start a whole new forest, create a new domain within an existing forest, or just add a domain controller to an existing domain.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=100)** If you understand the question, you can just jot it down in your planning notes so that you can figure out which one that will be during the production install.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=107)** If you don't understand the question, the help is provided sometimes right there in the installation process or you could search [[Microsoft]] docs or TechNet and other blogs to better understand the ramifications of your choice.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=121)** Sometimes you're going to be asked questions that have default answers.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=125)** Things that auto-populate.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=127)** The fact is that automatic doesn't always mean that it's correct.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=131)** So note these as well.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=133)** For example, NetBIOS names on a [[Windows Server]] are legacy identifiers for [[Windows]] machines.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=139)** In this case, it usually is best to leave them so that they match the first part of the DNS style domain name, but Microsoft does give you the chance to rename them if needed.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=151)** Whether you're configuring a new domain controller, setting up a certificate authority, or any of several roles that require configuration right away, this kind of planning will help you get the job done right the first time.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=163)** And that's important because not all role configurations can be changed later.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=169)** Some write to Active Directory so fixing a mistake can be very time consuming if it's possible at all.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=176)** Virtual Labs give you the luxury of being able to wipe it clean and do it again.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=181)** Take advantage of that luxury.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/planning-role-configuration?u=76281980&t=183)** Make sure you know what answers you're going to give during the initial install and configuration of any role or feature that you're going to add to your Windows Server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (3), [[Microsoft]] (2), [[Windows Server]] (2), [[Windows]] (1)
> **Prerequisites:** install (7), configure (2)
> **Env Vars:** dns (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Installing roles and features](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=0)** - [Instructor] Much like the installation of [[Windows]] itself, the installation and initial configuration of server roles and features is much easier when there's a complete plan to start with.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=10)** Here we are on the server that we've set aside to be our domain controller, as well as our certificate server.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=17)** Part of fulfilling those roles means it's also going to be a DNS server.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=21)** That's a lot for this server to do.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=23)** The certificate role specifically needs to wait for [[Active Directory]] and DNS to be complete, so we're going to put that one on hold for now.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=31)** This is the server that's already been configured with an IP address and network information, storage is all done.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=38)** So, we're ready to start installing roles.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=40)** Installing roles can be done right here from the server manager.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=45)** It can also be done in [[Powershell]], it can be done in the Windows admin center.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=48)** But I'm going to do it in the server manger because it gives a good visual that might help for those that haven't done this before.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=55)** From the dashboard, I could choose add roles and features or if I happen to be on another tab of the server manager, I could always go to the manage menu and choose add roles and features from that screen.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=67)** And this is the wizard that it will launch.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=69)** There's a welcome that gives you some basic information.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=72)** It's very common for people to check this box, so that they don't have to see this every time they come back.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=78)** The second screen is where you specify whether you're installing a role or feature on this machine or whether you want to install an application that will be available for virtual desktop or remote desktop users on this machine.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=93)** We want to install a role, so the first option is for us.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=97)** The next screen is available because you might want one server to be managing several and if you've added other servers to the pool that you can take care of from this machine, then you can select which server you want to add roles to.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=112)** In our case, it's an easy choice, we want to add a role to the DC01 server.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=117)** So I'm going to move onto the next step and here, we choose the roles.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=121)** There are things marked for roles and features already installed.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=125)** What we need to add is first, DNS, and notice when I select it, I'm prompted to receive the DNS server tools as well.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=135)** That's useful, I'm always going to go ahead with the prerequisites and the suggested tools.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=140)** So let me click add features and then we need to add active directory domain services.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=146)** This is the role that allows us to be a domain controller.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=149)** Here, you can see that not only do we have tools added to this machine, we also have a powershell module with all of the commandlets necessary to manage active directory.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=160)** Let's definitely add those.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=162)** And you'll notice that after we selected that, we received some new items from the list of things to do.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=168)** So as we progress, there is going to be something that we have to do before the install will actually run.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=175)** So next, here's a list of features.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=178)** Much like roles, they can be added by simply checking the box and then we're prompted with questions or information about DNS.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=186)** Things to note, information that you should be aware of as you install this particular role.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=192)** Active directory, there's a little more than just telling you about it.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=197)** They also promote [[Microsoft Azure|azure]] and as you go to the next screen, you get your confirmation of everything you said you want to install.
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=206)** You will have all the pieces, including all of the tools you have requested to have added at the same time and now you can go ahead and click the install button.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=215)** And this can take several minutes or it can go very quickly, depending on the performance of your machine and the nature of the roles that you have chosen.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=225)** So, I'm going to go ahead and leave you here.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/installing-roles-and-features?u=76281980&t=227)** Next up, we're going to take a look at the initial configuration of this specific role.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (4), [[Windows]] (2), [[Powershell]] (2), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** dns (5), dc01 (1)
> **Prerequisites:** install (6)
> **Tools:** powershell (2)
> **UI Navigation:** go to (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Configuring a role](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=0)** - In the previous video, we went through the process of adding a role to a [[Windows Server]].
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=6)** And here we are at the end of that successful installation of the [[Active Directory]] domain services and DNS server role.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=15)** And right here, you'll notice a blue link.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=17)** "Promote this server to a domain controller."
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=20)** it's also possible to have links that just say "configure this service" or "configure this role".
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=26)** Some people may never see that link because they're going to see and respond to this invitation to close the Wizard without interrupting the installation.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=35)** If you had done that, if you'd closed that, you can still get to that link to do the configuration by noticing the alerts or notifications, selecting that, and looking for that exact same link.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=49)** Here's the Promote this Server to a Domain Controller.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=52)** Other roles and services, it will ask you to configure one thing or another.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=56)** Let me go ahead and launch that process specifically for configuring active directory domain services.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=64)** Here's the first question, "Are you joining something existing, "or are you creating something new?"
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=70)** In my case, I'm creating a new domain for the [landonhotel.com](https://landonhotel.com) network.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=76)** The second screen asks us what the forest function level will be.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=81)** This is something important to consider.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=83)** There's a default, but you don't have to take the default option.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=87)** Consider the version of [[Windows]] running on other Windows servers and on Windows workstations.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=94)** Other compatibilities that have to do with applications in your network should also be considered.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=99)** So, make sure you choose the right forest and domain function level.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=103)** That's an example of something you're going to need to research for your own environment.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=108)** Go ahead and provide a Restore Mode password.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=114)** There's a note here that there's a feature I can't choose because of my environment.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=118)** That's not necessarily a problem, it's just something that I need to be aware of.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=123)** Moving forward to the next screen, it's going to identify the domain that I entered and suggest that that be the NetBIOS domain name as well.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=132)** And, that is a default that I am going to stick with.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=136)** On another screen, we're going to get the local paths on this server, where information will be stored.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=143)** The active directory database and log files, as well as the SYSVOL information.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=149)** There are paths there.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=150)** If you need them in a different location, you can browse to it.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=153)** We have our C drive mirrored, so this is a great place for my environment to store this information.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=160)** Then, we get to review all of our choices.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=163)** Now, this course, and particularly this video, are not designed to be instruction on how to create a new active directory domain, but I hope you've noticed that it doesn't take very long to run through the process once and make note of what the questions are, so that you can answer them properly for your own environment, so that you can have the correct answers when you start configuring your production servers.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=189)** With those answers already known, this installation only takes a few minutes.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=194)** The longest part will be waiting for it to verify the prerequisites, and this may take several minutes, depending on your [[Hardware]].
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=202)** We get some notifications here about a legacy security setting, and information about DNS, saying that it can't delegate this DNS server because there is nothing to delegate from.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=215)** That's fine.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=216)** And then, as I scroll down, it says everything was done.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/configuring-a-role?u=76281980&t=220)** So, when we go ahead and click Install, and this, again, can take several minutes to complete, and maybe a couple of reboots, but this server, or this role, will now be configured and ready to use in our network environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (4), [[Windows]] (3), [[Windows Server]] (1), [[Hardware]] (1)
> **Env Vars:** dns (3), sysvol (1)
> **Prerequisites:** configure (3), install (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **URLs:** [landonhotel.com](https://landonhotel.com) (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** scroll down (1)

#### [Managing features on demand](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=0)** - [Instructor] As you installs roles and features on a [[Windows Server]], you'll probably notice that you're not prompted to insert Install Media most of the time.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=9)** Once upon a time, that was required.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=11)** The folder with all of the role and feature install files was on the install disks, but not on the hard drive.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=18)** Starting in Windows Server 2008, [[Microsoft]] made it part of the installation process to copy these files to the hard drive and configure [[Windows]] to specifically look at that folder.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=31)** In Windows Server 2019, you can find that folder by just browsing your hard drive and in your operating system partition, you can open the Windows folder and scroll down to the end of the list of directories inside the Windows folder.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=48)** WinSxS or Windows side-by-side is where you have that information.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=55)** All of the files for every role currently installed as well as all of the files for the roles that you may install somewhere down the road are located in that folder.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=67)** And that folder may take up a little bit of space on the hard drive.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=71)** Hard drive space is not terribly expensive, so the amount of space that it takes up might not be a huge concern to you.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=79)** But, if you're starting to run low on space and a few extra gigs should be freed up on your drive, you might want to get rid of this folder.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=90)** Resist the urge to simply delete it.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=92)** That will cause you problems.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=93)** I guarantee it.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=95)** Because the libraries and files that you need to run the roles that are installed are located in that directory as well.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=102)** You can't simply delete that folder to reclaim space.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=107)** And maybe reclaiming six gig is worthwhile to you, so let me show you what you can do if you want to remove the install files for roles and features that you won't need.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=118)** Let me switch over here to my Windows Core installation of Server, because we're going to do this process in [[Powershell]].
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=127)** As we've seen before, Windows Core does boot up in DOS, not PowerShell, so I'm going to go ahead and launch PowerShell, so that we can have access to the cmdlts that we need.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=139)** And the first one that I'm going to run is Get-WindowsFeature.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=143)** This will provide a complete inventory of all of the roles and features available on this machine.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=150)** And if you look to the left, you'll see x's by the things that are installed, blank space by the things that are not.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=158)** We need a list of just the features that are not installed.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=162)** So, let me clear the screen and we're going to start with Get-WindowsFeature and we're going to pipe that through Where-Object.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=172)** This is a cmdlt that will filter based on some criteria.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=176)** We're going to say we want to run Where-Object based on a FilterScript and we'll put the criteria inside curly braces.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=187)** That criteria is dollar sign, underscore, period.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=192)** This means as we look at each of the objects, for each current object we want to find out that the Installed property is equal to the variable value of false.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=208)** When we run this cmdlt, we should get a list of only the features and roles that are not installed.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=215)** None of the checked boxes are in our list.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=217)** So far, so good.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=218)** We're 2/3 of the way there.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=220)** Let me go ahead and clear the screen again and use the up arrow to get that much of the command back in front of us.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=227)** The next thing we want to do is pipe that.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=232)** That's the way PowerShell works, you gather information and you send it through the pipe to a filter and then you sent it through the pipe again for action.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=241)** So, the action that we want to take is Uninstall-WindowsFeature.
>
> **[4:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=247)** And we're going to add one more parameter, that we want to Remove, meaning, we're not worried about uninstalling the feature.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=255)** It isn't currently installed.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=257)** But Remove will delete the involved files from Win side-by-side.
>
> **[4:23](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=263)** And this will free up some hard drive space and it provides the security benefit of not allowing a feature or a role to install itself down the road.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/managing-features-on-demand?u=76281980&t=273)** If you needed to do that, you would have to add Install Media, or point the Wizard to a network share where the side-by-side directory can be found.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6), [[Powershell]] (4), [[Windows Server]] (3), [[Microsoft]] (1)
> **Prerequisites:** install (7), configure (1)
> **Tools:** powershell (4)
> **CLI Commands:** find (2)
> **UI Navigation:** open the (1), scroll down (1)
> **Env Vars:** dos (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating migration tools](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=0)** - [Instructor] [[Microsoft]] has made some noteworthy advances in terms of in-place upgrades and we've compared upgrades to migration already in this course.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=10)** Role migration is an option that's available to you if you're running roles that would survive an in-place upgrade, but your preference is rather than keep the same server and just upgrade the configuration, you want to introduce a new [[Windows Server]] into your environment, but still keep these roles and features running the way you're used to.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=33)** There are two servers involved in making this possible.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=37)** The source server is the existing server, Windows Server 2012 R2 or newer, that is already running these roles and features as your network requires.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=49)** The second server you're going to need is a target server.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=52)** The target server is your new box that's running Windows Server 2019 and it's installed with the roles that you need, but has not yet been configured.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=63)** The first step in migrating the role configuration is to create the Server Migration or SMIG tools and you have to do this from the target server.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=74)** The target server, the newer version of [[Windows]], is the only one that has a chance of understanding both older architecture and newer.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=82)** And to start this process, you need to add a feature to your target server.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=87)** You can do this from [[Powershell]] by running the commandlet Add-WindowsFeature and then specify that the name of the feature that you want to add is Migration.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=98)** Then you're going to browse to a new folder that was created by adding that feature.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=103)** Inside your System 32 directory, you're going to have a folder named ServerMigrationTools.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=109)** From there, you can run the application to create your export/import migration tools.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=116)** The executable that you're going to run from inside that ServerMigrationTools directory is SMIGDeploy.exe and the parameters are added using old DOS style switches.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=129)** So /package meaning we want to create this package of tools.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=134)** /architecture is where you will specify the processor type of the source server.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=141)** Your options here are x32 and amd64.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=146)** Since all of the supported versions of Windows Server require 64-bit processors, you're likely to be using amd64.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=155)** OS is where you specify the specific version of Windows that you're going to export from.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=162)** WS12R2 is how you specify that you're pulling this from a Windows Server 2012 R2 machine.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=171)** And the final parameter that you need to add is the path, the location where you want to save this set of SMIG tools.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=180)** This command cannot create the subdirectories that you need so you're going to want to create this folder first.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=187)** Then you can specify right in the command that we want to place these packages in C:\.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=196)** For our example, we've created a folder named SMIG.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=200)** This is step one.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/creating-migration-tools?u=76281980&t=202)** Once you've created these tools, you want to copy them to your source server and then you can begin the export.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (5), [[Windows]] (2), [[Microsoft]] (1), [[Powershell]] (1)
> **Env Vars:** smig (3), dos (1), ws12r2 (1)
> **Definitions:** is an  (1), is a  (1)
> **Tools:** powershell (1)
> **Speakers:** - [instructor] (1)

#### [Exporting and importing with SMIG](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=0)** - Once you've created the SMIG tools specific for your source server, you'll need to copy them to your source server.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=8)** There you can open the folder and run this new version of SMIGDeploy, created specifically for this process.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=16)** SMIGDeploy will now open a special instance of [[Powershell]] with all of the necessary cmdlets and functions to export a role configuration.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=26)** The export process then begins by viewing an inventory of the roles that you can port out.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=33)** Get-SmigServerFeature will display on the screen a list of roles and features that you can migrate to the target server.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=42)** Each role on the list will be marked with a feature ID.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=46)** That's going to be important.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=47)** That's how you're going identify the specific role configuration in the export.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=53)** Then you're going to want to create a folder to store your exported configurations just like you did for the SMIG tools themselves.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=61)** With that in place, the export is done by a single cmdlet.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=65)** Export-SmigServerSetting, which is followed by the FeatureID, which is the label that you saw when you listed the features and the path which is where you want this export to be created.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=79)** During the export process, you will likely be prompted for credentials to secure this export.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=85)** Any server role configuration can contain sensitive information about your server, or the network that it serves.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=93)** So securing this data is always important.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=96)** The folder this creates will then be moved to the target server for importing.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=101)** The import process also has two steps to it.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=105)** First, you have to make sure that the desired role is already installed.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=110)** Whether the role is file sharing, installed by default, or DHCP which you'll need to add, the role has to be present before it can accept the configuration.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=120)** Once the role is verified as present, you do need to stop the service.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=125)** The role needs to not be functioning or running at the moment.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=129)** So you use a command like Stop-Service, and the service name, for example if you're running a DHCP Server, you would stop service DHCPServer.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=141)** And with that role installed and the service halted, you're ready to import the configuration that you brought over from the previous machine.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=150)** This time, instead of running the SMIG deploy from the copied files, you could launch it from the server manager, in the tools menu under [[Windows Server]] migration tools.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=161)** There, you will once again receive a customer PowerShell environment with all of the cmdlets and all of the features that you need to make this work.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=170)** The cmdlet that you're going to run, Import-SMIGServerSetting, is followed by a parameter to identify the role being configured, and it will use the same feature ID name that you used in the export.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=184)** So for the sake of this example, DHCP.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=188)** And then you need to specify the path on this target server where you've copied those files.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=195)** If we copied them into a folder named SMIG on the root of the C Drive, then this would be our path.
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=201)** And there's one other parameter that you're going to need to add here.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=205)** You're going to want to use the Force option to make this configuration apply.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=212)** If you don't use that, then you'll probably see a result screen that says "success false" or something to indicate that the configuration did not get applied to your machine.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=223)** All that's left now is to restart the service on the destination server.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=228)** Keep in mind that role migration is only available for those roles that would also be candidates for in place upgrades.
>
> **[3:55](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=235)** In fact, it's a version of this same process that's built right into the upgrade tools to facilitate that change.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/exporting-and-importing-with-smig?u=76281980&t=243)** So this is your choice, you can upgrade and use your existing [[Hardware]], or you can bring up a whole new server and migrate that role configuration on to the fresh install.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (2), [[Windows Server]] (1), [[Hardware]] (1)
> **Env Vars:** smig (4), dhcp (3)
> **CLI Commands:** make (3)
> **Prerequisites:** you'll need (2), install (1)
> **Tools:** powershell (2)
> **Analogies:** just like (1), for example (1)
> **UI Navigation:** open the (1)
> **Warnings:** keep in mind (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/next-steps?u=76281980&t=0)** - [Instructor] Now that we've come to the end of this course, it's up to you to take the next steps.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/next-steps?u=76281980&t=5)** If you're new to [[Windows]] Servers, I recommend that you continue learning how to manage and maintain a [[Windows Server]] network.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/next-steps?u=76281980&t=13)** The course library has content on managing, monitoring, and maintaining Windows Servers, with courses for the different versions.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/next-steps?u=76281980&t=21)** Specifically, for Windows Server 2019, you will want to become familiar with the Windows Admin Center.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/next-steps?u=76281980&t=29)** Create a virtual lab with two Windows Servers and a Windows workstation and create an [[Active Directory]] domain.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/next-steps?u=76281980&t=35)** Install the Admin Center on a workstation and become familiar with how it works.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/next-steps?u=76281980&t=41)** You're also going to want to stay current.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/next-steps?u=76281980&t=43)** You can do this by joining the Windows Insider Program, especially the program for business and following TechNet blogs.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/next-steps?u=76281980&t=52)** Windows Server 2019 had a bit of a rough launch, and those that were following these sources were better able to plan and time their implementation of this new version of Windows Server.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/next-steps?u=76281980&t=63)** Consider your network environment and what you want a server to do.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-installation-and-configuration/next-steps?u=76281980&t=67)** Then plan, install, and configure Windows Server 2019 so it can work for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6), [[Windows Server]] (5), [[Active Directory]] (1)
> **Prerequisites:** install (2), configure (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Scott M Burrell]]

## Skills Covered

- Server Configuration
- Windows Server

## Path Context

### In [[Getting Started with Windows Server 2019]]
← [[Windows Server 2019 Essential Training]] | **2 of 4** | [[Windows Server 2019- Install and Configure Active Directory]] →

## Appears In

- [[Getting Started with Windows Server 2019]]

## Related Courses

_Courses sharing skills:_

- [[Windows Server 2022- DHCP and DNS]] — Windows Server
- [[Windows Server 2022- Install and Configure Active Directory]] — Windows Server
- [[Windows Server 2022- Installation and Configuration]] — Windows Server
- [[Windows Server 2019- DHCP and DNS]] — Windows Server
- [[Windows Server 2019- Install and Configure Active Directory]] — Windows Server

---

[↑ Back to top](#)